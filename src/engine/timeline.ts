import {Box, ComponentDrawInfo, DateBy, GridConfig, SN} from "@engine/types";
import Component from "@engine/common/component";
import Tipy from "@engine/tipy";
import Event from "@engine/event";
import Axis from "@engine/axis";
import {TimeNodeGetter} from "@engine/common/functions";
import {DATE_COUNT_EXTRA ,GRID} from "@engine/common/config";

export interface ConstructInfo{
    events: {
        date: Date,
        title: string,

        text?: string,
        endDate?: Date,
        endText?: string,

        folded?: boolean,
        foldedText?: string,
    }[];
    tipy?: Tipy;
    canvas: HTMLCanvasElement;
    container: HTMLElement;
}
export interface RuntimeInfo{
    startDate: Date;
    endDate: Date;
    milestoneBy: DateBy;
    scaleBy: DateBy;
    axisLength: number;
}


export default class Timeline extends Component{
    name = SN.TimeLine;
    fixedKeys: (keyof (ConstructInfo&RuntimeInfo))[];
    grid:GridConfig = GRID[700];//TODO: make dynamic
    constructor(info: ConstructInfo&Partial<RuntimeInfo>){
        super();
        this.drawInfo = Object.assign(
            {} as RuntimeInfo,// All props of RuntimeInfo will be set in apply()
            {
                tipy: new Tipy,
                box: {x:0, y:0, width:0, height:0,},
                //todo: Mock
                milestoneBy: DateBy.Year,
                scaleBy: DateBy.Quarter,
                axisLength: 1200,
            },
            info,
        );
        this.fixedKeys =
            Object.entries(info)
                .filter(([key,value])=>typeof value !=='undefined')
                .map(([key])=>key) as any
        ;
    }

    drawInfo: ComponentDrawInfo & ConstructInfo & RuntimeInfo;

    events:Event[] = [];
    axis:Axis = new Axis;

    async apply(){
        await super.apply();
        await this._countDate();
        await this._initAxis();
        await this._initEvents();
        console.log(`walkOn result is ${await this.drawInfo.tipy.walkOn()}`);
    };

    async draw(){
        await this.axis.draw();
        await Promise.all(this.events.map(e=>e.draw()));
    };
    destroy(){};

    _countDate(){
        const events =Array.from(this.drawInfo.events).sort(
            (e1,e2)=>Number(e1.date)-Number(e2.date)
        );
        if(!this.fixedKeys.includes('startDate')){
            this.drawInfo.startDate = events[0].date;
        }
        if(!this.fixedKeys.includes('endDate')){
            this.drawInfo.endDate = function(events){
                let option1 =Number(events[events.length-1].date);
                let option2 =Math.max(
                    ...events
                        .filter(e=>('endDate' in e))
                        .map(e=>Number(e.endDate))
                ) || -1;
                return new Date(Math.max(option1,option2));
            }(events);
        }
        this.drawInfo.startDate = new Date(this.drawInfo.startDate.getTime() - DATE_COUNT_EXTRA[this.drawInfo.scaleBy]);
        this.drawInfo.endDate = new Date(this.drawInfo.endDate.getTime() + DATE_COUNT_EXTRA[this.drawInfo.scaleBy]);
    };
    async _initAxis(){
        const dateLength = this.drawInfo.endDate.getTime() - this.drawInfo.startDate.getTime();
        this.axis.drawInfo.container = this.drawInfo.container;
        this.axis.drawInfo.canvas = this.drawInfo.canvas;
        this.axis.drawInfo.tipy = this.drawInfo.tipy;
        this.axis.drawInfo.milestones =
            TimeNodeGetter[this.drawInfo.milestoneBy](this.drawInfo.startDate, this.drawInfo.endDate)
                .map(date=>{
                        const result = {
                            position: 0,
                            text: '',
                        };
                        result.position = (this.drawInfo.endDate.getTime() - date.getTime())/dateLength;
                        switch(this.drawInfo.milestoneBy){
                            case 'year':result.text = `${date.getFullYear()}`;break;
                            case 'quarter':result.text = `${date.toDateString().split(" ")[1]}. ${date.getFullYear()}`;break;
                            case 'month':result.text = `${date.toDateString().split(" ")[1]}.`;break;
                            case 'week':result.text = `${date.getMonth()+1}.${date.getDate()}`;break;
                            case 'day':result.text = `${date.getMonth()+1}.${date.getDate()}`;break;
                        };
                        return result;
                    }
                )
        ;
        this.axis.drawInfo.scales =
            TimeNodeGetter[this.drawInfo.scaleBy](this.drawInfo.startDate, this.drawInfo.endDate)
            .map(date=>(this.drawInfo.endDate.getTime() - date.getTime())/dateLength)
        ;
        Object.assign(this.axis.drawInfo.axisBox,{
            x: this.grid.axisAlign.x,
            y: this.grid.axisAlign.y,
            height: this.drawInfo.axisLength,
        });
        await this.axis.apply();
        this.axis.drawInfo.axisBox.x -= this.axis.drawInfo.axisBox.width/2;
    };
    async _initEvents(){
        this.events.forEach(e=>e.destroy());
        this.events.length = 0;
        const events = Array.from(this.drawInfo.events)
            .sort((e1,e2)=>e1.date.getTime()-e2.date.getTime())
        ;
        const dateLength = this.drawInfo.endDate.getTime() - this.drawInfo.startDate.getTime();
        for(let data of events){
            const event = new Event;
            event.drawInfo.container = this.drawInfo.container;
            event.drawInfo.canvas = this.drawInfo.canvas;
            event.drawInfo.tipy = this.drawInfo.tipy;
            event.drawInfo.target = {
                x: this.axis.body.drawInfo.box.x + this.axis.body.drawInfo.box.width/2,
                y: (
                        (this.drawInfo.endDate.getTime() - data.date.getTime())
                        /dateLength
                    )
                    *this.drawInfo.tipy.realLength
                    + this.axis.body.drawInfo.box.y
                ,
            };
            event.drawInfo.target.y += this.drawInfo.tipy.countCritical(event.drawInfo.target.y);
            event.drawInfo.bodyWidth = this.grid.eventWidth;
            event.drawInfo.date = data.date;
            event.drawInfo.title = data.title;
            event.drawInfo.contentText = data.text;
            event.drawInfo.folded = Boolean(data.folded);
            event.drawInfo.foldedText = data.foldedText;
            event.drawInfo.axisText = data.endText;
            if(data.endDate){
                event.drawInfo.axisLength = (data.endDate.getTime()-data.date.getTime())
                    /dateLength
                    *this.drawInfo.tipy.realLength
                ;
                event.drawInfo.axisLength += this.drawInfo.tipy.countCritical(event.drawInfo.target.y);

            }
            await event.apply();
            event.drawInfo.offset.x -= event.body.drawInfo.box.width;
            await event.apply();
            this.events.push(event);
        };

    };
};
