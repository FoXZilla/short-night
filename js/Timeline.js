"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("./common/Component");
const definitions_1 = require("./common/definitions");
const BreakpointAnimation_1 = require("./extensions/BreakpointAnimation");
const TimeSpliter_1 = require("./common/TimeSpliter");
const extensions_1 = require("./extensions");
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
class Timeline extends Component_1.default {
    constructor(props) {
        super({
            ext: props.ext || new extensions_1.ExtensionManager,
            canvas: props.canvas,
            container: props.container,
        });
        this.name = definitions_1.SN.Timeline;
        /**
         * Generated after timeline.apply() called.
         * If you wanna to specify some keys, passed a object when timeline.apply() called.
         * @see RuntimeInfo
         * */
        this.runtime = {};
        this.drawInfo = {
            box: { x: 0, y: 0, width: 0, height: 0 },
            events: [],
        };
        // The instances
        this.events = [];
        this.axis = null;
        this.grid = props.grid || Timeline.defaultGrid;
        this.ext.onConstruct(this);
    }
    /**
     * @param {Partial<RuntimeInfo>} - manually specify some runtime info.
     * */
    apply(runtime) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.initRuntime(runtime);
            this.canvas.width = this.grid.canvasWidth;
            this.canvas.height = this.runtime.axisLength + this.grid.axisStart.y * 2;
            // @ts-ignore
            yield this.initAxis();
            yield this.axis.apply();
            this.events.forEach(e => e.destroy());
            this.events.length = 0;
            this.initEvents();
            yield Promise.all(this.events.map(e => e.apply()));
            return _super("apply").call(this);
        });
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
    /**
     * Draw a timeline base on a TimelineData.
     * (The TimelineData is generate by timeline.export())
     * @param (TimelineData) input
     * @return {Promise<void>>}
     * */
    drawFrom(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = typeof input === 'string' ? JSON.parse(input).data : input.data;
            // @ts-ignore
            const axis = new this.axisConstructor(this);
            // @ts-ignore
            const event = new this.eventConstructor(this);
            this.canvas.width = data.width;
            this.canvas.height = data.height;
            // string to date
            data.axis.milestonesDrawInfo.forEach((milestoneDrawInfo) => {
                if ('date' in milestoneDrawInfo.content) {
                    milestoneDrawInfo.content.date = new Date(milestoneDrawInfo.content.date);
                }
            });
            const allComponents = [];
            {
                const { bodyDrawInfo, scalesDrawInfo, milestonesDrawInfo } = data.axis;
                // @ts-ignore
                allComponents.push(new axis.bodyConstructor(this).importDrawInfo(bodyDrawInfo));
                const scalesAndMilestones = [];
                scalesDrawInfo.forEach((scaleDrawInfo) => {
                    scalesAndMilestones.push(
                    // @ts-ignore
                    new axis.scaleConstructor(this).importDrawInfo(scaleDrawInfo));
                });
                milestonesDrawInfo.forEach((milestoneDrawInfo) => {
                    scalesAndMilestones.push(
                    // @ts-ignore
                    new axis.milestoneConstructor(this).importDrawInfo(milestoneDrawInfo));
                });
                scalesAndMilestones.sort((comp1, comp2) => comp1.drawInfo.alignY - comp2.drawInfo.alignY);
                allComponents.push(...scalesAndMilestones);
            }
            const events = Array.from(data.events)
                .sort((e1, e2) => e1.drawInfo.target.y - e2.drawInfo.target.y);
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
                yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.DrawFrom);
                comp.draw();
            }
        });
    }
    /**
     * Export a TimelineData for current timeline.
     * Make sure call timeline.apply() before call this method.
     * @return {TimelineData}
     * */
    export() {
        const timeline = this.ext.components[definitions_1.SN.Timeline][0];
        return JSON.parse(JSON.stringify({
            theme: timeline.theme,
            version: definitions_1.SN_VERSION,
            data: {
                width: timeline.canvas.width,
                height: timeline.canvas.height,
                timeline: timeline.drawInfo,
                runtime: timeline.runtime,
                events: timeline.events.map(event => ({
                    drawInfo: event.drawInfo,
                    bodyDrawInfo: event.body.drawInfo,
                    markDrawInfo: event.mark.drawInfo,
                    axisDrawInfo: event.axis ? event.axis.drawInfo : null,
                })),
                axis: {
                    drawInfo: timeline.axis.drawInfo,
                    bodyDrawInfo: timeline.axis.body.drawInfo,
                    scalesDrawInfo: timeline.axis.scales.map(scale => scale.drawInfo),
                    milestonesDrawInfo: timeline.axis.milestones.map(milestone => milestone.drawInfo),
                },
            },
        }));
    }
    // Count runtime info
    initRuntime(runtime) {
        this.runtime = Object.create(runtime || Object.prototype);
        this.runtime.startDate = ('startDate' in this.runtime)
            ? new Date(this.runtime.startDate)
            : this.countStartData();
        this.runtime.endDate = ('endDate' in this.runtime)
            ? new Date(this.runtime.endDate)
            : this.countEndData();
        this.runtime.milestoneBy = ('milestoneBy' in this.runtime)
            ? this.runtime.milestoneBy
            : this.countMilestoneBy();
        this.runtime.scaleBy = ('scaleBy' in this.runtime)
            ? this.runtime.scaleBy
            : this.countScaleBy();
        this.runtime.axisLength = ('axisLength' in this.runtime)
            ? this.runtime.axisLength
            : this.countAxisLength();
        // FIXME: What is it???
        // aligning scaleBy
        this.runtime.startDate = new Date(new Date(this.runtime.startDate).getTime()
            - definitions_1.DATE_COUNT_EXTRA[this.runtime.scaleBy || "day" /* Day */]);
        this.runtime.endDate = new Date(new Date(this.runtime.endDate).getTime()
            + definitions_1.DATE_COUNT_EXTRA[this.runtime.scaleBy || "day" /* Day */]);
    }
    countStartData() {
        const events = Array.from(this.drawInfo.events).sort((e1, e2) => Number(new Date(e1.date)) - Number(new Date(e2.date)));
        return new Date(events[0].date);
    }
    countEndData() {
        const events = this.drawInfo.events;
        const maxStartData = Math.max(...events.map(event => Number(new Date(event.date))));
        const maxEndData = Math.max(...events
            .filter(event => ('endDate' in event))
            .map(event => Number(new Date(event.endDate)))) || -1;
        return new Date(Math.max(maxStartData, maxEndData));
    }
    countMilestoneBy() {
        const TWO_WEEK = 1000 * 60 * 60 * 24 * 7 * 2;
        const TWO_MONTH = 1000 * 60 * 60 * 24 * 30 * 2;
        const TWO_QUARTER = 1000 * 60 * 60 * 24 * 30 * 3 * 2;
        const TWO_YEAR = 1000 * 60 * 60 * 24 * 30 * 12 * 2;
        const dataScope = new Date(this.runtime.endDate).getTime()
            - new Date(this.runtime.startDate).getTime();
        switch (true) {
            case dataScope > TWO_YEAR:
                return "year" /* Year */;
            case dataScope > TWO_QUARTER:
                return "quarter" /* Quarter */;
            case dataScope > TWO_MONTH:
                return "month" /* Month */;
            case dataScope > TWO_WEEK:
                return "week" /* Week */;
        }
        return null;
    }
    countScaleBy() {
        switch (this.runtime.milestoneBy) {
            case "year" /* Year */:
                return "quarter" /* Quarter */;
            case "quarter" /* Quarter */:
                return "month" /* Month */;
            case "month" /* Month */:
                return "week" /* Week */;
            case "week" /* Week */:
                return "day" /* Day */;
        }
        return null;
    }
    countAxisLength() {
        return 500 + this.drawInfo.events.length * 100;
    }
    // Create instance
    initAxis() {
        // @ts-ignore
        if (!this.axis)
            this.axis = new this.axisConstructor(this);
        const startDate = this.runtime.startDate.getTime();
        const endDate = this.runtime.endDate.getTime();
        const timeSpliter = new TimeSpliter_1.default(startDate, endDate);
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
                    by: this.runtime.milestoneBy,
                },
            }));
        }
        if (this.runtime.scaleBy !== null) {
            this.axis.drawInfo.scales = timeSpliter
                .split(this.runtime.scaleBy)
                .map(date => (new Date(this.runtime.endDate).getTime() - date.getTime())
                / dateLength);
        }
    }
    initEvents() {
        const events = Array.from(this.drawInfo.events)
            .sort((e1, e2) => new Date(e1.date).getTime() - new Date(e2.date).getTime());
        const dateLength = new Date(this.runtime.endDate).getTime()
            - new Date(this.runtime.startDate).getTime();
        for (const data of events) {
            // @ts-ignore
            const event = new this.eventConstructor(this);
            event.drawInfo.target = {
                x: this.axis.body.drawInfo.box.x + this.axis.body.drawInfo.box.width / 2,
                // recomputed in PositionCounter
                y: (new Date(this.runtime.endDate).getTime() - new Date(data.date).getTime())
                    / dateLength,
            };
            event.drawInfo.date = data.date;
            event.drawInfo.title = data.title;
            event.drawInfo.description = data.description;
            event.drawInfo.folded = Boolean(data.folded);
            event.drawInfo.foldPlaceholder = data.foldPlaceholder;
            event.drawInfo.endText = data.endText;
            if (data.endDate) {
                const endDate = new Date(data.endDate === 'now'
                    ? this.runtime.endDate
                    : data.endDate);
                event.drawInfo.endDate = endDate.toISOString();
                // recomputed in PositionCounter
                event.drawInfo.axisLength =
                    (endDate.getTime() - new Date(data.date).getTime())
                        / dateLength;
            }
            this.events.push(event);
        }
    }
    static is(comp) {
        return comp.name === definitions_1.SN.Timeline;
    }
    /**
     * Mount a HTML element adding canvas and container.
     * The HTML element passed will be cleared.
     * */
    static mount(el, themeName) {
        const container = typeof el === 'string'
            ? document.querySelector(el)
            : el;
        container.innerHTML = '';
        container.classList.add('short-night', themeName, 'container');
        const canvas = document.createElement('canvas');
        container.classList.add('short-night', themeName, 'canvas');
        container.appendChild(canvas);
        return { container, canvas };
    }
}
Timeline.defaultGrid = {
    eventOffset: { x: 20, y: 0 },
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
exports.default = Timeline;
//# sourceMappingURL=Timeline.js.map