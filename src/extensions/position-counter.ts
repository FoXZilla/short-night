import {Extension, ExtensionManager} from "@/extensions/index";
import Component from "@engine/common/component";
import Axis from "@engine/axis";
import AxisMilestone from "@engine/axis/milestone";
import {mergeBox} from "@engine/common/functions";
import {Breakpoint} from "@/extensions/breakpoint-animation";
import {SN} from "@engine/common/config";
import Timeline from "@engine/timeline";

interface PushConfig{
    critical: number;
    additional: number;
    component: Component;
}

/**
 * Milestone cannot occupy the space of Axis.
 * So we move Event, Scale and Milestone if they upper has any Milestone.
 * */
export default class PositionCounter implements Partial<Extension> {
    constructor(public etx:ExtensionManager){}

    async adjustAxis(axis:Axis){
        const childComponents = [
            axis.body,
            ...axis.scales,
            ...axis.milestones,
        ];

        // Milestone cannot occupy the space of Axis
        axis.extraData.realLength =
            axis.drawInfo.bodyBox.height
            - axis.milestones.reduce( // Reserved space for Milestone
                (h:number, m: AxisMilestone) =>h + m.drawInfo.box.height,
                0,
            )
        ;

        // Set real Y in milestones and scales
        axis.milestones.forEach(m=>m.drawInfo.box.y*=axis.extraData.realLength!);
        axis.scales.forEach(s=>s.drawInfo.box.y*=axis.extraData.realLength!);

        // align center
        axis.scales.forEach(scale=>{
            scale.drawInfo.box.y -= scale.drawInfo.box.height/2 - axis.drawInfo.bodyBox.y;
            scale.drawInfo.box.x -= (scale.drawInfo.box.width - axis.drawInfo.bodyBox.width) / 2;
            scale.apply();
        });
        axis.milestones.forEach(milestone=>{
            milestone.drawInfo.box.y += axis.drawInfo.bodyBox.y;
            milestone.drawInfo.box.x -= (milestone.drawInfo.box.width - axis.drawInfo.bodyBox.width) / 2;
            milestone.apply();
        });

        // Set Push-config
        axis.milestones.forEach(milestone => this.addPushConfig({
            critical: milestone.drawInfo.box.y,
            additional: milestone.drawInfo.box.height,
            component: milestone,
        }));

        // Push milestones and scales

        await this.etx.breakpoint.block(Breakpoint.PushScalesAndMilestones,{
            components: childComponents,
        });

        const pushTarget = [...axis.milestones, ...axis.scales].sort(function (comp1:Component, comp2:Component) {
            return comp1.drawInfo.box.y - comp2.drawInfo.box.y;
        });
        for(let comp of pushTarget){
            const distance = this.countCritical(comp.drawInfo.box.y);
            if(distance === 0) continue;

            if(comp.name === SN.AxisMilestone){
                await Promise.all(pushTarget.map(comp => comp.apply()));
                await this.etx.breakpoint.block(Breakpoint.PushScalesAndMilestones,{
                    components: childComponents,
                });
            }

            comp.drawInfo.box.y += distance;
        }

        await Promise.all(pushTarget.map(comp => comp.apply()));
        await this.etx.breakpoint.block(Breakpoint.PushScalesAndMilestones,{
            components: childComponents,
        });


        await Promise.all(childComponents.map(c => c.apply()));

        axis.drawInfo.box = mergeBox(...childComponents.map(c => c.drawInfo.box));
    };
    async adjustEvent(timeline:Timeline){
        const events = timeline.events;
        const axis = this.etx.components[SN.Axis][0];

        for(let event of events){
            event.drawInfo.target.y *= axis.extraData.realLength!;
            event.drawInfo.target.y += axis.body.drawInfo.box.y;
            event.drawInfo.target.y += this.countCritical(event.drawInfo.target.y);

            if(event.drawInfo.axisLength) {
                event.drawInfo.axisLength *= axis.extraData.realLength!;
                event.drawInfo.axisLength += this.countCritical(event.drawInfo.target.y);
            }
        }

        await Promise.all(events.map(event => event.apply()));

    };
    async onApply(comp:Component){
        if(Axis.is(comp)) return await this.adjustAxis(comp);
        if(Timeline.is(comp)) return await this.adjustEvent(comp);
    }
    onDestroy(comp:Component){
        while (true){
            const index = this.pushConfigs.findIndex(config => config.component === comp);

            if(index === -1) break;
            else this.pushConfigs.splice(index,1);
        }
    }

    private pushConfigs:PushConfig[] = [];
    private addPushConfig(config:PushConfig){
        this.pushConfigs.push(config);
    }
    private countCritical(num:number):number{
        if (this.pushConfigs.length === 0) return num;
        return this.pushConfigs.reduce((result:number, config:PushConfig) => {
            return num > config.critical ?result+config.additional :result;
        } ,0);
    }
}