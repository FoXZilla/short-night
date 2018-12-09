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
                        ...this.ext.components[SN.AxisBody],
                        this.ext.getParent(ea1),
                        ...conflictWith.map(ea => this.ext.getParent(ea)),
                    ];
                    await this.ext.breakpoint.block(
                        Breakpoint.FixEventAxis2EventAxis,
                        { components: showedComponents },
                    );
                    ea1.drawInfo.offsetX += 15;//TODO: configurable
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
            startX: ea1.drawInfo.markDrawInfo.target.x + ea1.drawInfo.offsetX,
            startY: ea1.drawInfo.markDrawInfo.target.y,
            endX: ea1.drawInfo.markDrawInfo.target.x + ea1.drawInfo.offsetX,
            endY: ea1.drawInfo.markDrawInfo.target.y - ea1.drawInfo.length,
        };
        const line2:Line = {
            startX: ea2.drawInfo.markDrawInfo.target.x + ea2.drawInfo.offsetX,
            startY: ea2.drawInfo.markDrawInfo.target.y,
            endX: ea2.drawInfo.markDrawInfo.target.x + ea2.drawInfo.offsetX,
            endY: ea2.drawInfo.markDrawInfo.target.y - ea2.drawInfo.length,
        };
        return isIntersecting(line1,line2);
    }
}