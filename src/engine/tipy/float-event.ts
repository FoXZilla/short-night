import Tipy, {Breakpoint, WalkOnResult} from "@engine/tipy/index";
import {DEBUG} from "@engine/common/config";
import {GridConfig, SN} from "@engine/types";
import EventBody from "@engine/event/body";
import {Conflict} from "@engine/tipy/move-event";
import MoveEvent from "@engine/tipy/move-event";
import Component from "@engine/common/component";
import {isOverlap} from "@engine/common/functions";

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
        if(eb1 === eb2) return false;
        if(eb1.drawInfo.floated || eb2.drawInfo.floated) return false;

        return isOverlap(eb1.drawInfo.box, eb2.drawInfo.box);

        // todo: confirm & delete that
        // return eb1.drawInfo.box.y > eb2.drawInfo.box.y && eb1.drawInfo.box.y < (eb2.drawInfo.box.y + eb2.drawInfo.box.height)
        //     || eb2.drawInfo.box.y > eb1.drawInfo.box.y && eb2.drawInfo.box.y < (eb1.drawInfo.box.y + eb1.drawInfo.box.height)
        // ;
    };
    async float(conflicts:Conflict){
        const maxWidthInConflict = Math.max(...conflicts.with.map(c => c.drawInfo.box.width));
        conflicts.self.drawInfo.box.x -= maxWidthInConflict +1;
        conflicts.self.drawInfo.maxWidth = Math.min(
            this.tipy.grid.eventWidth,
            this.tipy.axis.drawInfo.box.x - maxWidthInConflict
        );
        conflicts.self.drawInfo.floated = true;
        await conflicts.self.apply();
    }

    async walkOn(){

        this.countConflict();
        if(this.conflicts.length === 0) {
            return WalkOnResult.NoConflict;
        }
        this.tipy.l`floater # all conflict ${this.conflicts}`;

        const conflict = this.pickRingleader()!;
        this.tipy.l`floater # fix conflict ${conflict}`;

        await this.tipy.setBreakpoint(
            Breakpoint.FloatEventBody,
            {
                onBreak: async ()=>{
                    await Promise.all([
                        ...conflict.with.map(c=>c.draw()),
                        conflict.self.draw(),
                        ...this.tipy.components[SN.Axis].map(c=>c.draw()),
                    ]);
                },
                onNext: ()=>{
                    this.tipy.clearCanvas();
                    [
                        ...conflict.with,
                        conflict.self,
                        ...this.tipy.components[SN.Axis],
                    ].forEach(c=>c.hide());
                },
            },
        );
        await this.float(conflict);
        await this.tipy.setBreakpoint(
            Breakpoint.FloatEventBody,
            {
                onBreak: async ()=>{
                    await Promise.all([
                        ...conflict.with.map(c=>c.draw()),
                        conflict.self.draw(),
                        ...this.tipy.components[SN.Axis].map(c=>c.draw()),
                    ]);
                },
                onNext: ()=>{
                    this.tipy.clearCanvas();
                    [
                        ...conflict.with,
                        conflict.self,
                        ...this.tipy.components[SN.Axis],
                    ].forEach(c=>c.hide());
                },
            },
        );
        return WalkOnResult.Alleviated;

    };

    private pickRingleader() :Conflict|undefined {
        return this.conflicts.find(
            c1 => this.conflicts.every(c2 => c1.with.length >= c2.with.length)
        );
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