import {ComponentDrawInfo, DateBy, GridConfig} from "@engine/types";
import Component from "@engine/common/component";
import Event from "@engine/event";
import Axis from "@engine/axis";
import {TimeNodeGetter} from "@engine/common/functions";
import {DATE_COUNT_EXTRA, GRID, SN} from "@engine/common/config";

export interface DrawInfo extends ComponentDrawInfo{
    events: {
        date: Date,
        title: string,

        text?: string,
        endDate?: Date | 'now',
        endText?: string,

        folded?: boolean,
        foldedText?: string,
    }[];
}
export interface RuntimeInfo{
    startDate: Date;
    endDate: Date;
    milestoneBy: DateBy | null;
    scaleBy: DateBy | null;
    axisLength: number;
}

export default class Timeline extends Component{
    name = SN.Timeline;
    grid:GridConfig = GRID[700];

    runtime :RuntimeInfo = {} as any;

    drawInfo: DrawInfo = {
        box: {x:0, y:0, width:0, height:0},
        events: [],
    };

    events:Event[] = [];
    axis:Axis = new Axis(this);


    countStartData() :Date{
        const events =Array.from(this.drawInfo.events).sort(
            (e1,e2) => Number(e1.date) - Number(e2.date)
        );
        return events[0].date;
    };
    countEndData() :Date{
        const events = this.drawInfo.events;

        let maxStartData = Math.max(...events.map(event => Number(event.date)));
        let maxEndData = Math.max(
            ...events
                .filter(event => ('endDate' in event))
                .map(event => Number(event.endDate))
        ) || -1;

        return new Date(Math.max(maxStartData ,maxEndData));
    };
    countMilestoneBy() :DateBy | null{
        const TWO_WEEK      =1000*60*60*24*7 * 2;
        const TWO_MONTH     =1000*60*60*24*30 * 2;
        const TWO_QUARTER   =1000*60*60*24*30*3 * 2;
        const TWO_YEAR      =1000*60*60*24*30*12 * 2;

        const dataScope = this.runtime.endDate.getTime() - this.runtime.startDate.getTime();

        switch (true) {
            case dataScope > TWO_YEAR:
                return DateBy.Year;
            case dataScope > TWO_QUARTER:
                return DateBy.Quarter;
            case dataScope > TWO_MONTH:
                return DateBy.Month;
            case dataScope > TWO_WEEK:
                return DateBy.Week;
        }

        return null;

    };
    countScaleBy() :DateBy | null{

        switch (this.runtime.milestoneBy) {
            case DateBy.Year:
                return DateBy.Quarter;
            case DateBy.Quarter:
                return DateBy.Month;
            case DateBy.Month:
                return DateBy.Week;
            case DateBy.Week:
                return DateBy.Day;
        }

        return null;

    };
    countAxisLength() :number{
        return 500 + this.drawInfo.events.length * 100;
    }
    initRuntime(runtime?:Partial<RuntimeInfo>) :RuntimeInfo{
        this.runtime = Object.create(runtime || Object.prototype);

        this.runtime.startDate   = ('startDate'   in this.runtime) ? this.runtime.startDate   : this.countStartData();
        this.runtime.endDate     = ('endDate'     in this.runtime) ? this.runtime.endDate     : this.countEndData();
        this.runtime.milestoneBy = ('milestoneBy' in this.runtime) ? this.runtime.milestoneBy : this.countMilestoneBy();
        this.runtime.scaleBy     = ('scaleBy'     in this.runtime) ? this.runtime.scaleBy     : this.countScaleBy();
        this.runtime.axisLength  = ('axisLength'  in this.runtime) ? this.runtime.axisLength  : this.countAxisLength();

        //FIXME: What is it???
        // aligning scaleBy
        this.runtime.startDate = new Date(this.runtime.startDate!.getTime() - DATE_COUNT_EXTRA[this.runtime.scaleBy || DateBy.Day]);
        this.runtime.endDate = new Date(this.runtime.endDate!.getTime() + DATE_COUNT_EXTRA[this.runtime.scaleBy || DateBy.Day]);

        return runtime as RuntimeInfo;
    }
    async apply(runtime?:Partial<RuntimeInfo>){
        this.initRuntime(runtime);

        await this.updateAxis();
        await this.createEvents();

        return super.apply();
    };

    draw(){
        this.axis.draw();
        this.events.forEach(event => event.draw());
    };

    async updateAxis(){
        const dateLength = this.runtime.endDate.getTime() - this.runtime.startDate.getTime();
        if(this.runtime.milestoneBy !== null){
            this.axis.drawInfo.milestones =
                TimeNodeGetter[this.runtime.milestoneBy](this.runtime.startDate, this.runtime.endDate)
                    .map(date=>{
                            const result = {
                                position: 0,
                                text: '',
                            };
                            result.position = (this.runtime.endDate.getTime() - date.getTime())/dateLength;
                            switch(this.runtime.milestoneBy){
                                case 'year':result.text = `${date.getFullYear()}`;break;
                                case 'quarter':result.text = `${date.toDateString().split(" ")[1]}. ${date.getFullYear()}`;break;
                                case 'month':result.text = `${date.toDateString().split(" ")[1]}.`;break;
                                case 'week':result.text = `${date.getMonth()+1}.${date.getDate()}`;break;
                                case 'day':result.text = `${date.getMonth()+1}.${date.getDate()}`;break;
                            }
                            return result;
                        }
                    )
            ;
        }
        if(this.runtime.scaleBy !== null){
            this.axis.drawInfo.scales =
                TimeNodeGetter[this.runtime.scaleBy](this.runtime.startDate, this.runtime.endDate)
                .map(date=>(this.runtime.endDate.getTime() - date.getTime())/dateLength)
            ;
        }
        Object.assign(this.axis.drawInfo.bodyBox,{
            x: this.grid.axisAlign.x,
            y: this.grid.axisAlign.y,
            height: this.runtime.axisLength,
        });
        await this.axis.apply();
        // align center
        this.axis.drawInfo.bodyBox.x -= this.axis.drawInfo.bodyBox.width/2;
        await this.axis.apply();
    };
    async createEvents(){
        this.events.forEach(e => e.destroy());
        this.events.length = 0;
        const events = Array.from(this.drawInfo.events)
            .sort((e1,e2)=>e1.date.getTime()-e2.date.getTime())
        ;
        const dateLength = this.runtime.endDate.getTime() - this.runtime.startDate.getTime();
        for(let data of events){
            const event = new Event(this);
            event.drawInfo.target = {
                x: this.axis.body.drawInfo.box.x + this.axis.body.drawInfo.box.width/2,
                y: (this.runtime.endDate.getTime() - data.date.getTime()) / dateLength, // recomputed in PositionCounter
            };
            event.drawInfo.bodyWidth = this.grid.eventWidth;
            event.drawInfo.date = data.date;
            event.drawInfo.title = data.title;
            event.drawInfo.contentText = data.text;
            event.drawInfo.folded = Boolean(data.folded);
            event.drawInfo.foldedText = data.foldedText;
            event.drawInfo.axisText = data.endText;
            if(data.endDate){
                const endDate :Date = data.endDate === 'now' ? this.runtime.endDate : data.endDate;

                event.drawInfo.axisLength = (endDate.getTime()-data.date.getTime()) /dateLength; // recomputed in PositionCounter

            }
            await event.apply();
            event.drawInfo.offset.x -= event.body.drawInfo.box.width;
            await event.apply();
            this.events.push(event);
        }

    };

    static is(comp:Component) :comp is Timeline{
        return comp.name === SN.Timeline;
    }
};
