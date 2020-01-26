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
    critical :number;
    additional :number;
    component :Component;
}

/**
 * Milestone shouldn't occupy the space of Axis.
 * So we move Event, Scale and Milestone if they upper has any Milestones.
 * */
export default class PositionCounter implements Partial<Extension> {
    constructor(public ext :ExtensionManager) {}

    async onApply(comp :Component) {
        if (Axis.is(comp)) return await this.adjustAxis(comp);
        if (Timeline.is(comp)) return await this.adjustEvent(comp);
    }
    /**
     * When a component destroyed, remove a config made by it.
     * */
    onDestroy(comp :Component) {
        while (true) {
            const index = this.pushConfigs.findIndex(config => config.component === comp);

            if (index === -1) break;
            else this.pushConfigs.splice(index, 1);
        }
    }

    async adjustAxis(axis :Axis) {
        const childComponents = [
            axis.body,
            ...axis.scales,
            ...axis.milestones,
        ];
        const milestones = Array.from(axis.milestones)
            .sort((comp1, comp2) => comp1.drawInfo.alignY - comp2.drawInfo.alignY)
        ;
        const scales = Array.from(axis.scales)
            .sort((comp1, comp2) => comp1.drawInfo.alignY - comp2.drawInfo.alignY)
        ;

        // Milestone cannot occupy the space of Axis
        axis.extraData.realLength =
            axis.drawInfo.length
            - axis.milestones.reduce( // Reserved space for Milestone
                (h :number, m :AxisMilestone) => h + m.drawInfo.box.height,
                0,
            )
        ;
        const toRealLength = axis.extraData.realLength! / axis.drawInfo.length;

        // Set real Y in milestones and scales
        axis.milestones.forEach(m => m.drawInfo.alignY *= toRealLength);
        axis.scales.forEach(s => s.drawInfo.alignY *= toRealLength);
        await Promise.all([...axis.milestones, ...axis.scales].map(c => c.apply()));
        await this.ext.breakpoint.block(Breakpoint.PushScalesAndMilestones, {
            components: childComponents,
        });

        // Move milestone, avoid a space occupied by itself
        for (const milestone of axis.milestones) {
            milestone.drawInfo.alignY += milestone.drawInfo.box.height / 2;
            await milestone.apply();
        }

        // Set Push-config
        await this.updatePushConfigs(axis);

        // Push milestones and scales
        const axisSpace = axis.body.drawInfo.box.y;

        await this.ext.breakpoint.block(Breakpoint.PushScalesAndMilestones, {
            components: childComponents,
        });

        for (const comp of milestones) {
            const distance =
                this.countCritical(comp.drawInfo.alignY, comp)
                + axisSpace
            ;

            await Promise.all(milestones.map(comp => comp.apply()));
            await this.ext.breakpoint.block(Breakpoint.PushScalesAndMilestones, {
                components: childComponents,
            });

            comp.drawInfo.alignY += distance;

            await this.updatePushConfigs(axis);
        }

        await this.ext.breakpoint.block(Breakpoint.PushScalesAndMilestones, {
            components: childComponents,
        });

        for (const comp of scales) {
            const distance =
                this.countCritical(comp.drawInfo.alignY, comp)
                + axisSpace
            ;

            comp.drawInfo.alignY += distance;
        }

        await Promise.all(scales.map(comp => comp.apply()));
        await this.ext.breakpoint.block(Breakpoint.PushScalesAndMilestones, {
            components: childComponents,
        });

        await Promise.all(childComponents.map(c => c.apply()));

        axis.drawInfo.box = mergeBox(...childComponents.map(c => c.drawInfo.box));
    }
    async adjustEvent(timeline :Timeline) {
        const events = timeline.events;
        const axis = this.ext.components[SN.Axis][0];
        const toRealLength = axis.extraData.realLength! / axis.drawInfo.length;

        await this.updatePushConfigs(axis);

        for (const event of events) {
            event.drawInfo.target.y *= toRealLength;
            event.drawInfo.target.y += this.countCritical(event.drawInfo.target.y, event);

            if (event.drawInfo.axisLength) {
                event.drawInfo.axisLength *= toRealLength;
                event.drawInfo.axisLength +=
                    this.countCritical(event.drawInfo.target.y)
                    - this.countCritical(event.drawInfo.target.y - event.drawInfo.axisLength)
                ;
            }

            event.drawInfo.target.y += axis.body.drawInfo.box.y;
        }

        await Promise.all(events.map(event => event.apply()));

    }

    protected pushConfigs :PushConfig[] = [];
    protected addPushConfig(config :PushConfig) {
        this.pushConfigs.push(config);
    }
    protected countCritical(num :number, comp ? :Component) :number {
        if (this.pushConfigs.length === 0) return 0;
        return this.pushConfigs.reduce(
            (result :number, config :PushConfig) => {
                if (comp && comp === config.component) return result;
                return num + result > config.critical ? result + config.additional : result;
            },
            0,
        );
    }
    protected async updatePushConfigs(axis :Axis) {
        await Promise.all(axis.milestones.map(c => c.apply()));
        axis.milestones.forEach((milestone) => {
            const config :PushConfig | undefined = this.pushConfigs.find(
                config => config.component === milestone,
            );

            if (config) {
                config.critical = milestone.drawInfo.box.y;
                config.additional = milestone.drawInfo.box.height;
            } else {
                this.addPushConfig({
                    critical: milestone.drawInfo.box.y,
                    additional: milestone.drawInfo.box.height,
                    component: milestone,
                });
            }

            this.pushConfigs.sort((c1, c2) => c1.critical - c2.critical);
        });
    }
}
