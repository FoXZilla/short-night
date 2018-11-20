import {ExtensionManager} from "@/extensions";
import {FixResult} from "@/extensions/conflict-fixer/index";
import EventBody from "@engine/event/body";
import {SN} from "@engine/common/config";
import AxisMilestone from "@engine/axis/milestone";
import {isOverlap} from "@engine/common/functions";
import {Breakpoint} from "@/extensions/breakpoint-animation";

export default class EventBody2AxisMilestone {
    constructor(public ext:ExtensionManager){};

    async fix():Promise<FixResult>{
        const eventBodyList = this.ext.components[SN.EventBody];
        const axisMilestoneList:AxisMilestone[] = this.ext.components[SN.AxisMilestone];
        
        for(let eventBody of eventBodyList){
            for(let axisMilestone of axisMilestoneList){
                if(isOverlap(eventBody.drawInfo.box, axisMilestone.drawInfo.box)){
                    const showedComponents = [
                        axisMilestone,
                        eventBody,
                        ...this.ext.components[SN.AxisBody],
                    ];
                    await this.ext.breakpoint.block(
                        Breakpoint.FixEventBody2AxisMilestone,
                        { components: showedComponents },
                    );
                    eventBody.drawInfo.box.x = axisMilestone.drawInfo.box.x - eventBody.drawInfo.box.width;
                    await eventBody.apply();
                    await this.ext.breakpoint.block(
                        Breakpoint.FixEventBody2AxisMilestone,
                        { components: showedComponents },
                    );
                }
            }
        }

        return FixResult.NoConflict;
    }
}