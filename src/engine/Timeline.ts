import { ComponentDrawInfo, DateBy, GridConfig } from '@engine/types';
import Component from '@engine/common/Component';
import Event from '@engine/Event';
import Axis from '@engine/Axis';
import { deepFreeze, timeNodeGetter } from '@engine/common/functions';
import { DATE_COUNT_EXTRA, SN, SN_VERSION } from '@engine/common/config';
import AxisScale from '@engine/Axis/AxisScale';
import AxisMilestone from '@engine/Axis/AxisMilestone';
import { Breakpoint } from '@/engine/extensions/BreakpointAnimation';

export interface DrawInfo extends ComponentDrawInfo{
    events: {
        date: string,
        title: string,

        text?: string,
        endDate?: string | 'now',
        endText?: string,

        folded?: boolean,
        foldedText?: string,
    }[];
}
export interface RuntimeInfo{
    startDate: string;
    endDate: string;
    milestoneBy: DateBy | null;
    scaleBy: DateBy | null;
    axisLength: number;
}

export default abstract class Timeline extends Component{
    name = SN.Timeline;
    grid:GridConfig = Timeline.defaultGrid;

    runtime :RuntimeInfo = {} as any;

    drawInfo: DrawInfo = {
        box: { x:0, y:0, width:0, height:0 },
        events: [],
    };

    abstract axisConstructor :typeof Axis;
    abstract eventConstructor :typeof Event;
    events:Event[] = [];
    axis :Axis = null as any;

    countStartData() :Date {
        const events = Array.from(this.drawInfo.events).sort(
            (e1, e2) => Number(new Date(e1.date)) - Number(new Date(e2.date)),
        );
        return new Date(events[0].date);
    }
    countEndData() :Date {
        const events = this.drawInfo.events;

        const maxStartData = Math.max(...events.map(event => Number(new Date(event.date))));
        const maxEndData = Math.max(
            ...events
                .filter(event => ('endDate' in event))
                .map(event => Number(new Date(event.endDate!))),
        ) || -1;

        return new Date(Math.max(maxStartData , maxEndData));
    }
    countMilestoneBy() :DateBy | null {
        const TWO_WEEK      = 1000 * 60 * 60 * 24 * 7 * 2;
        const TWO_MONTH     = 1000 * 60 * 60 * 24 * 30 * 2;
        const TWO_QUARTER   = 1000 * 60 * 60 * 24 * 30 * 3 * 2;
        const TWO_YEAR      = 1000 * 60 * 60 * 24 * 30 * 12 * 2;

        const dataScope =
            new Date(this.runtime.endDate).getTime()
            - new Date(this.runtime.startDate).getTime()
        ;

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

    }
    countScaleBy() :DateBy | null {

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

    }
    countAxisLength() :number {
        return 500 + this.drawInfo.events.length * 100;
    }
    initRuntime(runtime?:Partial<RuntimeInfo>) :RuntimeInfo {
        this.runtime = Object.create(runtime || Object.prototype);

        this.runtime.startDate   = ('startDate'   in this.runtime)
            ? new Date(this.runtime.startDate).toISOString()
            : this.countStartData().toISOString();
        this.runtime.endDate     = ('endDate'     in this.runtime)
            ? new Date(this.runtime.endDate).toISOString()
            : this.countEndData().toISOString();
        this.runtime.milestoneBy = ('milestoneBy' in this.runtime)
            ? this.runtime.milestoneBy
            : this.countMilestoneBy();
        this.runtime.scaleBy     = ('scaleBy'     in this.runtime)
            ? this.runtime.scaleBy
            : this.countScaleBy();
        this.runtime.axisLength  = ('axisLength'  in this.runtime)
            ? this.runtime.axisLength
            : this.countAxisLength();

        // FIXME: What is it???
        // aligning scaleBy
        this.runtime.startDate = new Date(
            new Date(this.runtime.startDate!).getTime()
            - DATE_COUNT_EXTRA[this.runtime.scaleBy || DateBy.Day],
        ).toISOString();
        this.runtime.endDate = new Date(
            new Date(this.runtime.endDate!).getTime()
            + DATE_COUNT_EXTRA[this.runtime.scaleBy || DateBy.Day],
        ).toISOString();

        return runtime as RuntimeInfo;
    }
    async apply(runtime?:Partial<RuntimeInfo>) {
        this.initRuntime(runtime);

        this.canvas.width = this.grid.canvasWidth;
        this.canvas.height = this.runtime.axisLength + this.grid.axisStart.y * 2;

        // @ts-ignore
        if (!this.axis) this.axis = new this.axisConstructor(this);
        await this.updateAxis();

        this.events.forEach(e => e.destroy());
        this.events.length = 0;
        await this.createEvents();

        return super.apply();
    }

    draw() {
        this.axis.draw();
        this.events.forEach(event => event.draw());
        return super.draw();
    }
    hide() {
        this.events.forEach(event => event.hide());
        this.axis.hide();
        return super.hide();
    }

    async updateAxis() {
        const endDate:number = new Date(this.runtime.endDate).getTime();
        const startDate:number = new Date(this.runtime.startDate).getTime();
        const dateLength = endDate - startDate;
        this.axis.drawInfo.length = this.runtime.axisLength;
        if (this.runtime.milestoneBy !== null) {
            this.axis.drawInfo.milestones =
                timeNodeGetter[this.runtime.milestoneBy](
                    new Date(startDate), new Date(endDate),
                ).map((date) => {
                    const result = {
                        position: (endDate - date.getTime())
                            / dateLength,
                        text: '',
                    };
                    const monthAbbr = date.toDateString().split(' ')[1];
                    switch (this.runtime.milestoneBy){
                        case 'year':
                            result.text = `${date.getFullYear()}`;
                            break;
                        case 'quarter':
                            result.text = `${monthAbbr}. ${date.getFullYear()}`;
                            break;
                        case 'month':
                            result.text = `${monthAbbr}.`;
                            break;
                        case 'week':
                            result.text = `${date.getMonth() + 1}.${date.getDate()}`;
                            break;
                        case 'day':
                            result.text = `${date.getMonth() + 1}.${date.getDate()}`;
                            break;
                    }
                    return result;
                })
            ;
        }
        if (this.runtime.scaleBy !== null) {
            this.axis.drawInfo.scales =
                timeNodeGetter[this.runtime.scaleBy](
                    new Date(this.runtime.startDate),
                    new Date(this.runtime.endDate),
                ).map(date =>
                    (new Date(this.runtime.endDate).getTime() - date.getTime())
                    / dateLength,
                )
            ;
        }
        await this.axis.apply();
    }
    async createEvents() {
        const events = Array.from(this.drawInfo.events)
            .sort((e1, e2) => new Date(e1.date).getTime() - new Date(e2.date).getTime())
        ;
        const dateLength =
            new Date(this.runtime.endDate).getTime()
            - new Date(this.runtime.startDate).getTime()
        ;
        for (const data of events) {
            // @ts-ignore
            const event = new this.eventConstructor(this);
            event.drawInfo.target = {
                x: this.axis.body.drawInfo.box.x + this.axis.body.drawInfo.box.width / 2,
                // recomputed in PositionCounter
                y:
                    (new Date(this.runtime.endDate).getTime() - new Date(data.date).getTime())
                    / dateLength
                ,
            };
            event.drawInfo.bodyWidth = this.grid.eventWidth;
            event.drawInfo.date = data.date;
            event.drawInfo.title = data.title;
            event.drawInfo.contentText = data.text;
            event.drawInfo.folded = Boolean(data.folded);
            event.drawInfo.foldedText = data.foldedText;
            event.drawInfo.axisText = data.endText;
            if (data.endDate) {
                const endDate :Date = new Date(
                    data.endDate === 'now'
                        ? this.runtime.endDate
                        : data.endDate
                    ,
                );
                // recomputed in PositionCounter
                event.drawInfo.axisLength =
                    (endDate.getTime() - new Date(data.date).getTime())
                    / dateLength
                ;
            }
            await event.apply();
            this.events.push(event);
        }

    }

    static is(comp:Component) :comp is Timeline {
        return comp.name === SN.Timeline;
    }

    static defaultGrid:GridConfig = {
        eventOffset: { x:20, y:0 },
        minEventAxisOffset: 25,
        markWidth: 15,
        scaleHeight: 5,
        axisWidth: 12,
        axisStart: {
            x: 400,
            y: 10,
        },
        eventWidth: 350,
        canvasWidth: 700,
    };

    async drawFrom(input:any) {
        const data:any  = typeof input === 'string' ? JSON.parse(input).data : input.data;
        // @ts-ignore
        const axis:Axis = new this.axisConstructor(this);
        // @ts-ignore
        const event:Event = new this.eventConstructor(this);

        this.canvas.width = data.width;
        this.canvas.height = data.height;

        const allComponents:Component[] = [];

        {
            const { bodyDrawInfo, scalesDrawInfo, milestonesDrawInfo } = data.axis;
            // @ts-ignore
            allComponents.push(new axis.bodyConstructor(this).from(bodyDrawInfo));

            const scalesAndMilestones:(AxisScale | AxisMilestone)[] = [];
            scalesDrawInfo.forEach((scaleDrawInfo:any) => {
                // @ts-ignore
                scalesAndMilestones.push(new axis.scaleConstructor(this).from(scaleDrawInfo));
            });

            milestonesDrawInfo.forEach((milestoneDrawInfo:any) => {
                scalesAndMilestones.push(
                    // @ts-ignore
                    new axis.milestoneConstructor(this).from(milestoneDrawInfo),
                );
            });

            scalesAndMilestones.sort(
                (comp1, comp2) => comp1.drawInfo.alignY - comp2.drawInfo.alignY,
            );

            allComponents.push(...scalesAndMilestones);
        }

        const events:any[] = Array.from(data.events)
            .sort((e1:any, e2:any) => e1.drawInfo.target.y - e2.drawInfo.target.y)
        ;
        for (const { bodyDrawInfo, markDrawInfo, axisDrawInfo } of events) {
            // @ts-ignore
            allComponents.push(new event.markConstructor(this).from(markDrawInfo));
            // @ts-ignore
            allComponents.push(new event.bodyConstructor(this).from(bodyDrawInfo));

            if (axisDrawInfo !== null) {
                // @ts-ignore
                allComponents.push(new event.axisConstructor(this).from(axisDrawInfo));
            }
        }

        // TODO: Maybe there is slow when want not play animation?
        for (const comp of allComponents) {
            await this.ext.breakpoint.block(Breakpoint.DrawFrom);
            comp.draw();
        }

    }
    export() {
        const timeline = this.ext.components[SN.Timeline][0];
        return deepFreeze(JSON.parse(JSON.stringify({
            theme: timeline.theme,
            version: SN_VERSION,
            data: {
                width: timeline.canvas.width,
                height: timeline.canvas.height,
                timeline: timeline.drawInfo,
                runtime: timeline.runtime,
                events: timeline.events.map((event) => {
                    return {
                        drawInfo: event.drawInfo,
                        bodyDrawInfo: event.body.drawInfo,
                        markDrawInfo: event.mark.drawInfo,
                        axisDrawInfo: event.axis ? event.axis.drawInfo :null,
                    };
                }),
                axis: {
                    drawInfo: timeline.axis.drawInfo,
                    bodyDrawInfo: timeline.axis.body.drawInfo,
                    scalesDrawInfo: timeline.axis.scales.map(scale => scale.drawInfo),
                    milestonesDrawInfo: timeline.axis.milestones.map(
                        milestone => milestone.drawInfo,
                    ),
                },
            },
        })));
    }
}
