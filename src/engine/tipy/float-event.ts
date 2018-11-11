import Tipy, {WalkOnResult} from "@engine/tipy/index";
import {DEBUG} from "@engine/common/config";
import {GridConfig, SN} from "@engine/types";
import EventBody from "@engine/event/body";
import {Conflict} from "@engine/tipy/move-event";
import MoveEvent from "@engine/tipy/move-event";
import Component from "@engine/common/component";

export default class FloatEvent {
    constructor(public tipy: Tipy){
        if(DEBUG){
            (<any>window).floater = this;
        }
    };

    conflicts:Conflict[] = [];
    allEventBody = Array.from( // above EventBody is above, below EventBody is below
        this.tipy.components[SN.EventBody] as EventBody[]
    ).sort((eb1,eb2)=>eb1.drawInfo.target.y - eb2.drawInfo.target.y);

    static isConflict(eb1:EventBody, eb2:EventBody) :boolean{
        if(eb1.drawInfo.floated || eb2.drawInfo.floated) return false;

        return eb1.drawInfo.box.y > eb2.drawInfo.box.y && eb1.drawInfo.box.y < (eb2.drawInfo.box.y + eb2.drawInfo.box.height)
            || eb2.drawInfo.box.y > eb1.drawInfo.box.y && eb2.drawInfo.box.y < (eb1.drawInfo.box.y + eb1.drawInfo.box.height)
        ;
    };
    static async float(conflicts:Conflict, grid:GridConfig){
        const maxWidthInConflict = Math.max(...conflicts.with.map(c => c.drawInfo.box.width));
        conflicts.self.drawInfo.box.x -= maxWidthInConflict +1;
        conflicts.self.drawInfo.box.width = Math.min(grid.eventWidth, grid.axisAlign.x - maxWidthInConflict);
        conflicts.self.drawInfo.floated = true;
        await conflicts.self.apply();
    }

    async walkOn(){
        let alleviated = false;

        while(true){
            this.countConflict();
            if(this.conflicts.length === 0) {
                return alleviated
                    ?WalkOnResult.Alleviated
                    :WalkOnResult.NoConflict
                ;
            }

            let ringleader = this.conflicts.find(
                c1 => this.conflicts.every(c2 => c1.with.length >= c2.with.length)
            )!;
            await FloatEvent.float(ringleader, this.tipy.grid);

            alleviated = true;

        }


    };


    private countConflict(){
        this.conflicts.length = 0;

        for(let eb of this.allEventBody){
            const conflict = {
                self: eb as EventBody,
                with: this.tipy.components[SN.EventBody].filter(
                    target => FloatEvent.isConflict(eb, target as EventBody)
                ) as EventBody[],
            };
            if(conflict.with.length) this.conflicts.push(conflict);
        }
    }

}