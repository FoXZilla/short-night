import {
    Box,
    ComponentDrawInfo,
    DateBy,
    GridConfig,
    TimelineData,
} from './types';
import Component from './common/Component';
import Event from './Event';
import Axis from './Axis';
import { DATE_COUNT_EXTRA, SN, SN_VERSION } from './common/definitions';
import AxisScale from './Axis/AxisScale';
import AxisMilestone from './Axis/AxisMilestone';
import { Breakpoint } from './extensions/BreakpointAnimation';
import TimeSpliter from './common/TimeSpliter';
import { ExtensionManager } from './extensions';

/**
 * @typedef {Object} EventInfo
 * @property {Date} date - a date of event fired.
 * @property {string} title - the title of event.
 *
 * @property {[string]} description - the description of event.
 * @property {[Date|'now']} endDate
 * A date of event ended if event has.
 * Set "now" to specify the event is continuous.
 * @property {[string]} endText - the description of event ended if event has.
 *
 * @property {[boolean]} folded - the event is folded or not when timeline drawn.
 * @property {[string]} foldPlaceholder - a text to replace title when event is folded.
 * */
/**
 * @property {EventInfo[]} - a event list that be drawn on timeline.
 * */
interface DrawInfo extends ComponentDrawInfo{
    events :{
        date :string,
        title :string,

        description? :string,
        endDate? :string | 'now',
        endText? :string,

        folded? :boolean,
        foldPlaceholder? :string,
    }[];
}
/**
 * The runtime info of Timeline.
 * @property {Date} startDate - the start date of timeline.
 * @property {Date} endDate - the end date of timeline.
 * @property {DateBy|null} milestoneBy - which time type is used in split the milestone.
 * @property {DateBy|null} scaleBy - which time type is used in split the scale.
 * @property {number} axisLength - the px of timeline length. It's not a whole timeline length.
 * */
export interface RuntimeInfo{
    startDate :Date;
    endDate :Date;
    milestoneBy :DateBy | null;
    scaleBy :DateBy | null;
    axisLength :number;
}
export interface ConstructInfo {
    canvas :HTMLCanvasElement;
    container :HTMLElement;
    ext ? :ExtensionManager;
    grid ? :GridConfig;
}

/**
 * Timeline self. There are 2 way to draw a timeline.
 * 1. draw a timeline base on event list.
 * 2. draw a timeline base an TimelineData.
 * For No.1, there are like:
 * ```js
 * const timeline = new Timeline(...);
 * timeline.event = [...];
 * await timeline.apply();
 * timeline.draw();
 * ```js
 *
 * For No.2, Ensure you had a TimelineData, and run like this for draw a timeline:
 * (The TimelineData is generate by timeline.export())
 * ```js
 * const timeline = new Timeline(...);
 * await timeline.drawFrom(timelineData);
 * ```
 * */
export default abstract class Timeline extends Component{
    constructor(props :ConstructInfo) {
        super({
            ext: props.ext || new ExtensionManager,
            canvas: props.canvas,
            container: props.container,
        });
        this.grid = props.grid || Timeline.defaultGrid;
        this.ext.onConstruct(this);
    }

    name = SN.Timeline;
    grid :GridConfig;
    /**
     * Generated after timeline.apply() called.
     * If you wanna to specify some keys, passed a object when timeline.apply() called.
     * @see RuntimeInfo
     * */
    runtime :RuntimeInfo = {} as any;
    drawInfo :DrawInfo = {
        box: { x:0, y:0, width:0, height:0 },
        events: [],
    };

    // The instances
    events :Event[] = [];
    axis :Axis = null as any;

    // The Constructors
    abstract axisConstructor :typeof Axis;
    abstract eventConstructor :typeof Event;

    /**
     * @param {Partial<RuntimeInfo>} runtime - manually specify some runtime info.
     * */
    async apply(runtime ? :Partial<RuntimeInfo>) {
        if (!this.drawInfo.events.length) throw new Error('No event passed the timeline!');

        this.initRuntime(runtime);

        this.stretchCanvas();

        // @ts-ignore
        await this.initAxis();
        await this.axis.apply();

        this.events.forEach(e => e.destroy());
        this.events.length = 0;
        this.initEvents();
        await Promise.all(this.events.map(e => e.apply()));

        return super.apply();
    }
    draw() {
        this.stretchCanvas();
        this.axis.draw();
        this.events.forEach(event => event.draw());
        return super.draw();
    }
    hide() {
        this.events.forEach(event => event.hide());
        this.axis.hide();
        return super.hide();
    }

    /**
     * Draw a timeline base on a TimelineData.
     * (The TimelineData is generate by timeline.export())
     * @param (TimelineData) input
     * @return {Promise<void>>}
     * */
    async drawFrom(input :TimelineData) :Promise<void> {
        const data :any  = typeof input === 'string' ? JSON.parse(input).data : input.data;
        // @ts-ignore
        const axis :Axis = new this.axisConstructor(this);
        // @ts-ignore
        const event :Event = new this.eventConstructor(this);

        this.canvas.width = data.width;
        this.canvas.height = data.height;

        // string to date
        data.axis.milestonesDrawInfo.forEach((milestoneDrawInfo :any) => {
            if ('date' in milestoneDrawInfo.content) {
                milestoneDrawInfo.content.date = new Date(milestoneDrawInfo.content.date);
            }
        });

        const allComponents :Component[] = [];

        {
            const { bodyDrawInfo, scalesDrawInfo, milestonesDrawInfo } = data.axis;
            // @ts-ignore
            allComponents.push(new axis.bodyConstructor(this).importDrawInfo(bodyDrawInfo));

            const scalesAndMilestones :(AxisScale | AxisMilestone)[] = [];
            scalesDrawInfo.forEach((scaleDrawInfo :any) => {
                scalesAndMilestones.push(
                    // @ts-ignore
                    new axis.scaleConstructor(this).importDrawInfo(scaleDrawInfo),
                );
            });

            milestonesDrawInfo.forEach((milestoneDrawInfo :any) => {
                scalesAndMilestones.push(
                    // @ts-ignore
                    new axis.milestoneConstructor(this).importDrawInfo(milestoneDrawInfo),
                );
            });

            scalesAndMilestones.sort(
                (comp1, comp2) => comp1.drawInfo.alignY - comp2.drawInfo.alignY,
            );

            allComponents.push(...scalesAndMilestones);
        }

        const events :any[] = Array.from(data.events)
            .sort((e1 :any, e2 :any) => e1.drawInfo.target.y - e2.drawInfo.target.y)
        ;
        for (const { bodyDrawInfo, markDrawInfo, axisDrawInfo } of events) {
            // @ts-ignore
            allComponents.push(new event.markConstructor(this).importDrawInfo(markDrawInfo));
            // @ts-ignore
            allComponents.push(new event.bodyConstructor(this).importDrawInfo(bodyDrawInfo));

            if (axisDrawInfo !== null) {
                // @ts-ignore
                allComponents.push(new event.axisConstructor(this).importDrawInfo(axisDrawInfo));
            }
        }

        // TODO: Maybe there is slow when want not play animation?
        for (const comp of allComponents) {
            await this.ext.breakpoint.block(Breakpoint.DrawFrom);
            comp.draw();
        }

    }
    /**
     * Export a TimelineData for current timeline.
     * Make sure call timeline.apply() before call this method.
     * @return {TimelineData}
     * */
    export() :TimelineData {
        const timeline = this.ext.components[SN.Timeline][0];
        return JSON.parse(JSON.stringify({
            theme: timeline.theme,
            version: SN_VERSION,
            data: {
                width: timeline.canvas.width,
                height: timeline.canvas.height,
                timeline: timeline.drawInfo,
                runtime: timeline.runtime,
                events: timeline.events.map(event => ({
                    drawInfo: event.drawInfo,
                    bodyDrawInfo: event.body.drawInfo,
                    markDrawInfo: event.mark.drawInfo,
                    axisDrawInfo: event.axis ? event.axis.drawInfo :null,
                })),
                axis: {
                    drawInfo: timeline.axis.drawInfo,
                    bodyDrawInfo: timeline.axis.body.drawInfo,
                    scalesDrawInfo: timeline.axis.scales.map(scale => scale.drawInfo),
                    milestonesDrawInfo: timeline.axis.milestones.map(
                        milestone => milestone.drawInfo,
                    ),
                },
            },
        }));
    }

    // Stretch the canvas ensure the canvas can contain all of component
    protected stretchCanvas() {
        this.canvas.width = this.grid.canvasWidth;
        this.canvas.height = this.runtime.axisLength + this.grid.axisStart.y * 2;

        const componentMap :any = this.ext.components;
        for (const snName in componentMap) {
            for (const component of componentMap[snName]) {
                const box :Box = component.drawInfo.box;
                this.canvas.height = Math.max(
                    this.canvas.height,
                    box.y + box.height + this.grid.axisStart.y,
                );
                this.canvas.width = Math.max(
                    this.canvas.width,
                    box.x + box.width,
                );
            }
        }
    }

    // Count runtime info
    protected initRuntime(runtime? :Partial<RuntimeInfo>) {
        this.runtime = Object.create(runtime || Object.prototype);

        this.runtime.startDate   = ('startDate'   in this.runtime)
            ? new Date(this.runtime.startDate)
            : this.countStartData();
        this.runtime.endDate     = ('endDate'     in this.runtime)
            ? new Date(this.runtime.endDate)
            : this.countEndData();
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
        );
        this.runtime.endDate = new Date(
            new Date(this.runtime.endDate!).getTime()
            + DATE_COUNT_EXTRA[this.runtime.scaleBy || DateBy.Day],
        );
    }
    protected countStartData() :Date {
        const events = Array.from(this.drawInfo.events).sort(
            (e1, e2) => Number(new Date(e1.date)) - Number(new Date(e2.date)),
        );
        return new Date(events[0].date);
    }
    protected countEndData() :Date {
        const events = this.drawInfo.events;

        const maxStartData = Math.max(...events.map(event => Number(new Date(event.date))));
        const maxEndData = Math.max(
            ...events
                .filter(event => ('endDate' in event))
                .map(event => Number(new Date(event.endDate!))),
        ) || -1;

        return new Date(Math.max(maxStartData , maxEndData));
    }
    protected countMilestoneBy() :DateBy | null {
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
    protected countScaleBy() :DateBy | null {

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
    protected countAxisLength() :number {
        return 500 + this.drawInfo.events.length * 100;
    }
    // Create instance
    protected initAxis() :void {
        // @ts-ignore
        if (!this.axis) this.axis = new this.axisConstructor(this);

        const startDate :number = this.runtime.startDate.getTime();
        const endDate :number = this.runtime.endDate.getTime();
        const timeSpliter = new TimeSpliter(startDate, endDate);
        const dateLength = endDate - startDate;

        this.axis.drawInfo.length = this.runtime.axisLength;
        if (this.runtime.milestoneBy !== null) {
            this.axis.drawInfo.milestones = timeSpliter
                .split(this.runtime.milestoneBy)
                .map(date => ({
                    position: (endDate - date.getTime())
                        / dateLength,
                    content: {
                        date: date.toISOString(),
                        by: this.runtime.milestoneBy!,
                    },
                }))
            ;
        }
        if (this.runtime.scaleBy !== null) {
            this.axis.drawInfo.scales = timeSpliter
                .split(this.runtime.scaleBy)
                .map(date =>
                    (new Date(this.runtime.endDate).getTime() - date.getTime())
                    / dateLength,
                )
            ;
        }
    }
    protected initEvents() :void {
        const events = Array.from(this.drawInfo.events)
            .sort((e1, e2) => new Date(e1.date).getTime() - new Date(e2.date).getTime())
        ;
        const dateLength =
            new Date(this.runtime.endDate).getTime()
            - new Date(this.runtime.startDate).getTime()
        ;
        for (const data of events) {
            // @ts-ignore
            const event :Event = new this.eventConstructor(this);
            event.drawInfo.target = {
                x: this.axis.body.drawInfo.box.x + this.axis.body.drawInfo.box.width / 2,
                // recomputed in PositionCounter
                y:
                    (new Date(this.runtime.endDate).getTime() - new Date(data.date).getTime())
                    / dateLength
                ,
            };
            event.drawInfo.date = data.date;
            event.drawInfo.title = data.title;
            event.drawInfo.description = data.description;
            event.drawInfo.folded = Boolean(data.folded);
            event.drawInfo.foldPlaceholder = data.foldPlaceholder;
            event.drawInfo.endText = data.endText;
            if (data.endDate) {
                const endDate :Date = new Date(
                    data.endDate === 'now'
                        ? this.runtime.endDate
                        : data.endDate
                    ,
                );
                event.drawInfo.endDate = endDate.toISOString();
                // recomputed in PositionCounter
                event.drawInfo.axisLength =
                    (endDate.getTime() - new Date(data.date).getTime())
                    / dateLength
                ;
            }
            this.events.push(event);
        }

    }

    static defaultGrid :GridConfig = {
        eventOffset: { x:20, y:0 },
        minEventAxisOffset: 25,
        markWidth: 15,
        scaleHeight: 5,
        axisWidth: 12,
        axisStart: {
            x: 450,
            y: 10,
        },
        eventWidth: 300,
        canvasWidth: 700,
    };

    static is(comp :Component) :comp is Timeline {
        return comp.name === SN.Timeline;
    }
    /**
     * Mount a HTML element adding canvas and container.
     * The HTML element passed will be cleared.
     * */
    static mount(
        el :string | Element,
        themeName :string,
    ) :{
        container :HTMLElement,
        canvas :HTMLCanvasElement,
    } {
        const container :HTMLElement = typeof el === 'string'
            ? document.querySelector(el)! as HTMLElement
            : el as HTMLElement
        ;
        container.innerHTML = '';
        container.classList.add('short-night', themeName, 'container');

        const canvas = document.createElement('canvas') as HTMLCanvasElement;
        canvas.height = 6000;
        canvas.width = 600;
        canvas.classList.add('short-night', themeName, 'canvas');

        container.appendChild(canvas);

        return { container, canvas };

    }

}
