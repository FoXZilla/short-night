import { Extension, ExtensionManager } from '.';
import Component from '../common/Component';
import Axis from '../Axis';
import AxisMilestone from '../Axis/AxisMilestone';
import { mergeBox } from '../common/functions';
import { Breakpoint } from './BreakpointAnimation';
import { SN } from '../common/definitions';
import Timeline from '../Timeline';
import AxisScale from '../Axis/AxisScale';

/**
 * Set a point that some components need move if they upper has this point.
 * @property {number} critical - a critical point to judge a component need move or not.
 * @property {number} additional - what number a component need move for this config.
 * @property {Component} component - which component made this config.
 * */
interface PushConfig{
    critical: number;
    additional: number;
    component: Component;
}

/**
 * Milestone shouldn't occupy the space of Axis.
 * So we move Event, Scale and Milestone if they upper has any Milestones.
 * */
export default class PositionCounter implements Partial<Extension> {
    constructor(public etx:ExtensionManager) {}

    async onApply(comp:Component) {
        if (Axis.is(comp)) return await this.adjustAxis(comp);
        if (Timeline.is(comp)) return await this.adjustEvent(comp);
    }
    /**
     * When a component destroyed, remove a config made by it.
     * */
    onDestroy(comp:Component) {
        while (true) {
            const index = this.pushConfigs.findIndex(config => config.component === comp);

            if (index === -1) break;
            else this.pushConfigs.splice(index, 1);
        }
    }

    async adjustAxis(axis:Axis) {
        const childComponents = [
            axis.body,
            ...axis.scales,
            ...axis.milestones,
        ];

        // Milestone cannot occupy the space of Axis
        axis.extraData.realLength =
            axis.drawInfo.length
            - axis.milestones.reduce( // Reserved space for Milestone
                (h:number, m: AxisMilestone) => h + m.drawInfo.box.height,
                0,
            )
        ;

        // Set real Y in milestones and scales
        axis.milestones.forEach(m => m.drawInfo.alignY *= axis.extraData.realLength!);
        axis.scales.forEach(s => s.drawInfo.alignY *= axis.extraData.realLength!);

        await Promise.all([...axis.milestones, ...axis.scales].map(c => c.apply()));

        // Set Push-config
        axis.milestones.forEach(milestone => this.addPushConfig({
            critical: milestone.drawInfo.box.y,
            additional: milestone.drawInfo.box.height,
            component: milestone,
        }));

        // Push milestones and scales

        await this.etx.breakpoint.block(Breakpoint.PushScalesAndMilestones, {
            components: childComponents,
        });

        const pushTarget :(AxisMilestone|AxisScale)[] =
            [...axis.milestones, ...axis.scales].sort(
                (comp1, comp2) => comp1.drawInfo.alignY - comp2.drawInfo.alignY,
            )
        ;
        for (const comp of pushTarget) {
            const distance = this.countCritical(comp.drawInfo.alignY);
            if (distance === 0) continue;

            if (comp.name === SN.AxisMilestone) {
                await Promise.all(pushTarget.map(comp => comp.apply()));
                await this.etx.breakpoint.block(Breakpoint.PushScalesAndMilestones, {
                    components: childComponents,
                });
            }

            comp.drawInfo.alignY += distance;
        }

        await Promise.all(pushTarget.map(comp => comp.apply()));
        await this.etx.breakpoint.block(Breakpoint.PushScalesAndMilestones, {
            components: childComponents,
        });

        await Promise.all(childComponents.map(c => c.apply()));

        axis.drawInfo.box = mergeBox(...childComponents.map(c => c.drawInfo.box));
    }
    async adjustEvent(timeline:Timeline) {
        const events = timeline.events;
        const axis = this.etx.components[SN.Axis][0];

        for (const event of events) {
            event.drawInfo.target.y *= axis.extraData.realLength!;
            event.drawInfo.target.y += axis.body.drawInfo.box.y;
            event.drawInfo.target.y += this.countCritical(event.drawInfo.target.y);

            if (event.drawInfo.axisLength) {
                event.drawInfo.axisLength *= axis.extraData.realLength!;
                event.drawInfo.axisLength += this.countCritical(event.drawInfo.target.y);
            }
        }

        await Promise.all(events.map(event => event.apply()));

    }

    protected pushConfigs:PushConfig[] = [];
    protected addPushConfig(config:PushConfig) {
        this.pushConfigs.push(config);
    }
    protected countCritical(num:number):number {
        if (this.pushConfigs.length === 0) return num;
        return this.pushConfigs.reduce(
            (result:number, config:PushConfig) => {
                return num > config.critical ? result + config.additional :result;
            },
            0,
        );
    }
}
