import {DEBUG, SN} from "@engine/common/config";
import EventBody from "@engine/event/body";
import {isOverlap} from "@engine/common/functions";
import {ExtensionManager} from "@/extensions";
import {Conflict, FixResult} from "@/extensions/conflict-fixer";
import Timeline from "@engine/timeline";
import Axis from "@engine/axis";
import {Breakpoint} from "@/extensions/breakpoint-animation";

export default class EventBody2EventBody__float {
    timeline ?:Timeline;
    axis ?:Axis;

    constructor(public ext: ExtensionManager){};

    conflicts:Conflict[] = [];
    /**
     * above EventBody is above, below EventBody is below
     * */
    eventBodyList :EventBody[] = [];

    static isConflict(eb1:EventBody, eb2:EventBody) :boolean{
        if(eb1 === eb2) return false;
        if(eb1.drawInfo.floated || eb2.drawInfo.floated) return false;

        return isOverlap(eb1.drawInfo.box, eb2.drawInfo.box);

        // todo: confirm & delete that
        // return eb1.drawInfo.box.y > eb2.drawInfo.box.y && eb1.drawInfo.box.y < (eb2.drawInfo.box.y + eb2.drawInfo.box.height)
        //     || eb2.drawInfo.box.y > eb1.drawInfo.box.y && eb2.drawInfo.box.y < (eb1.drawInfo.box.y + eb1.drawInfo.box.height)
        // ;
    };
    async float(conflicts:Conflict){
        const maxWidthInConflict = Math.max(...conflicts.with.map(c => c.drawInfo.box.width+c.drawInfo.offset.x));
        conflicts.self.drawInfo.offset.x = maxWidthInConflict +1;
        conflicts.self.drawInfo.maxWidth = Math.min(
            this.timeline!.grid.eventWidth,
            this.axis!.drawInfo.box.x - maxWidthInConflict
        );
        conflicts.self.drawInfo.floated = true;
        await conflicts.self.apply();
    }

    async fix() :Promise<FixResult> {

        this.timeline = this.ext.components[SN.Timeline][0];
        this.axis = this.ext.components[SN.Axis][0];
        this.eventBodyList = Array.from(this.ext.components[SN.EventBody])
            .sort((eb1,eb2)=>eb1.drawInfo.markDrawInfo.target.y - eb2.drawInfo.markDrawInfo.target.y)
        ;

        this.countConflict();
        if(this.conflicts.length === 0) {
            return FixResult.NoConflict;
        }

        const conflict = this.pickRingleader()!;

        const showedComponents = [
            this.axis,
            conflict.self,
            this.ext.getParent(conflict.self).mark,
            ...conflict.with,
            ...conflict.with.map(eb => this.ext.getParent(eb).mark),
        ];

        await this.ext.breakpoint.block(
            Breakpoint.FixEventBody2EventBody__float,
            { components:showedComponents },
        );
        await this.float(conflict);
        await this.ext.breakpoint.block(
            Breakpoint.FixEventBody2EventBody__float,
            { components:showedComponents },
        );
        return FixResult.Alleviated;

    };

    private pickRingleader() :Conflict|undefined {
        return this.conflicts.find(
            c1 => this.conflicts.every(c2 => c1.with.length >= c2.with.length)
        );
    };
    private countConflict(){
        this.conflicts.length = 0;

        for(let eb of this.eventBodyList){
            const conflict = {
                self: eb as EventBody,
                with: this.ext.components[SN.EventBody].filter(
                    target => EventBody2EventBody__float.isConflict(eb, target as EventBody)
                ) as EventBody[],
            };
            if(conflict.with.length) this.conflicts.push(conflict);
        }
    }

}