import {Line, SN} from "@engine/types";
import Component from "@engine/common/component";
import {drawLine, isIntersecting, isOverlap} from "@engine/common/functions";
import EventAxis from "@engine/event/axis";
import {DEBUG, WALK_ON} from "@engine/common/config";
import Timeline from "@engine/timeline";
import EventBody from "@engine/event/body";
import MoveEvent from "./move-event";
import FloatEvent from "@engine/tipy/float-event";
import Axis from "@engine/axis";

export enum Breakpoint{
    DrawAxisBody,
    DrawAxisScale,
    DrawAxisMilestone,
    PushScalesAndMilestones,
    WalkOn,
    MoveEventBody,
    FloatEventBody,
    Debug,
}

interface PushConfig{
    critical: number;
    additional: number;
}

export enum WalkOnResult {
    Failed, // the conflict cannot be fixed by move
    Alleviated, // fixed, but still has conflict
    NoConflict, // no conflict or all conflict have been fixed
};

export default class Tipy{
    constructor(public breakpoints:Breakpoint[] = []){};

    clearCanvas(){
        this.canvas.getContext('2d')!.clearRect(
            0, 0, this.canvas.width, this.canvas.height
        );
    }


    components
    :{
        [key in SN]:Component[]
    } = {
        [SN.TimeLine]: [],
        [SN.Axis]: [],
        [SN.AxisBody]: [],
        [SN.AxisScale]: [],
        [SN.AxisMilestone]: [],
        [SN.Event]: [],
        [SN.EventBody]: [],
        [SN.EventMark]: [],
        [SN.EventAxis]: [],
    };
    get timeline(){return this.components[SN.TimeLine][0] as Timeline}
    get axis(){return this.components[SN.Axis][0] as Axis}
    get canvas(){return this.components[SN.TimeLine][0].drawInfo.canvas};
    get grid(){return this.timeline.grid}


    async walkOn(){
        await this.fix_EventBody2AxisMilestone();
        await this.fix_EventAxis2EventAxis();

        if(await this.fix_EventBody2EventBody()){
            return true;
        }else{
            // const timeline = this.components[SN.TimeLine][0] as Timeline;
            // timeline.drawInfo.axisLength *= 1.05;
            // await timeline.apply();
        }
    };
    async fix_EventBody2AxisMilestone(){
        for(let eventBody of this.components[SN.EventBody]){
            for(let axisMilestone of this.components[SN.AxisMilestone]){
                if(isOverlap(eventBody.drawInfo.box, axisMilestone.drawInfo.box)){
                    eventBody.drawInfo.box.x = axisMilestone.drawInfo.box.x - eventBody.drawInfo.box.width;
                    await eventBody.apply();
                }
            }
        }
    };
    async fix_EventAxis2EventAxis(){
        const isConflict = function(ea1:EventAxis, ea2:EventAxis) :boolean{
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
        };
        const eventAxises = Array.from(this.components[SN.EventAxis]) as EventAxis[];
        eventAxises.sort((ea1,ea2)=>ea2.drawInfo.length - ea1.drawInfo.length);

        while(
            (<EventAxis[]>this.components[SN.EventAxis]).some(
                ea1=>(<EventAxis[]>this.components[SN.EventAxis]).some(ea2=>isConflict(ea1,ea2))
            )
        ){
            await this.setBreakpoint(
                Breakpoint.WalkOn,
                {
                    onBreak: async ()=>{
                        await Promise.all(this.components[SN.Axis].map(e=>e.draw()));
                        await Promise.all(this.components[SN.Event].map(e=>e.draw()));
                    },
                    onNext: ()=>{
                        const canvas = this.components[SN.Axis][0].drawInfo.canvas;
                        canvas.getContext('2d')!.clearRect(
                            0, 0, canvas.width, canvas.height
                        );
                    },
                },
            );
            const eventAxises = Array.from(this.components[SN.EventAxis]) as EventAxis[];
            eventAxises.sort((ea1,ea2)=>ea2.drawInfo.length - ea1.drawInfo.length);
            for(let ea1 of eventAxises){
                if(eventAxises.some(ea2=>isConflict(ea1,ea2))){
                    ea1.drawInfo.offset += WALK_ON[SN.EventAxis].offsetOneStep;
                    await ea1.apply();
                    break;
                }
            }
        }
    };

    mover:any = null;
    floater:any = null;
    async fix_EventBody2EventBody(){
        this.mover = new MoveEvent(this);
        this.floater = new FloatEvent(this);

        await this.mover.walkOn();
        await this.floater.walkOn();
    };

    // push support
    realLength: number = null as any;
    pushConfigs:PushConfig[] = [];
    addPushConfig(config:PushConfig){
        this.pushConfigs.push(config);
    }
    removePushConfig(config:PushConfig){
        const index = this.pushConfigs.findIndex(c=>JSON.stringify(c)===JSON.stringify(config));
        if(~index){
            this.pushConfigs.splice(index,1);
        }
    }
    countCritical(num:number):number{
        if(this.pushConfigs.length === 0) return num;
        return this.pushConfigs.reduce(function(result:number,config:PushConfig){
            return num > config.critical ?result+config.additional :result;
        },0);
    }

    // breakpoint support
    _resolve:((value?: any | PromiseLike<any>)=>void) | null = null;
    next(){
        if(this._resolve) {
            this._resolve();
            this._resolve = null;
        } else console.error('cannot next');
    };
    async setBreakpoint(
        name:Breakpoint,
        {onBreak, onNext}
        :{
            onBreak?: ()=>void,
            onNext?: ()=>void,
        } = {},
    ){
        if(this.breakpoints.includes(name)){
            return new Promise(resolve => {
                onBreak && onBreak();
                this._resolve = function(){
                    onNext && onNext();
                    resolve();
                };
            });
        }
    };
}
