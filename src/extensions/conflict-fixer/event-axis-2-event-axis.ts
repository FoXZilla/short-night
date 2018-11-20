import {ExtensionManager} from "@/extensions";
import {FixResult} from "@/extensions/conflict-fixer/index";
import {SN} from "@engine/common/config";
import {isIntersecting} from "@engine/common/functions";
import EventAxis from "@engine/event/axis";
import {Line} from "@engine/types";
import {Breakpoint} from "@/extensions/breakpoint-animation";

export default class EventAxis2EventAxis {
    constructor(public ext:ExtensionManager){};

    async fix():Promise<FixResult>{
        const eventAxisList:EventAxis[] = Array.from(this.ext.components[SN.EventAxis])
            .sort((ea1,ea2)=>ea2.drawInfo.length - ea1.drawInfo.length)
        ;

        while(
            eventAxisList.some(
                ea1 => eventAxisList.some(ea2 => EventAxis2EventAxis.isConflict(ea1,ea2))
            )
        ){
            for(let ea1 of eventAxisList){
                const conflictWith = eventAxisList.filter(
                    ea2 => EventAxis2EventAxis.isConflict(ea1,ea2)
                );
                if(conflictWith.length){
                    const showedComponents = [
                        this.ext.getParent(ea1),
                        ...conflictWith.map(ea => this.ext.getParent(ea)),
                        ...this.ext.components[SN.AxisBody],
                    ];
                    await this.ext.breakpoint.block(
                        Breakpoint.FixEventAxis2EventAxis,
                        { components: showedComponents },
                    );
                    ea1.drawInfo.offset += 15;//TODO: configurable
                    await ea1.apply();
                    await this.ext.breakpoint.block(
                        Breakpoint.FixEventAxis2EventAxis,
                        { components: showedComponents },
                    );
                    break;
                }
            }
        }
        return FixResult.NoConflict;
    }

    static isConflict (ea1:EventAxis, ea2:EventAxis) :boolean{
        if(ea1 === ea2) return false;
        const line1:Line = {
            startX: ea1.drawInfo.start.x + ea1.drawInfo.offset,
            startY: ea1.drawInfo.start.y,
            endX: ea1.drawInfo.start.x + ea1.drawInfo.offset,
            endY: ea1.drawInfo.start.y - ea1.drawInfo.length,
        };
        const line2:Line = {
            startX: ea2.drawInfo.start.x + ea2.drawInfo.offset,
            startY: ea2.drawInfo.start.y,
            endX: ea2.drawInfo.start.x + ea2.drawInfo.offset,
            endY: ea2.drawInfo.start.y - ea2.drawInfo.length,
        };
        return isIntersecting(line1,line2);
    }
}