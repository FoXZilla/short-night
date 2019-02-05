import Component from '@engine/common/Component';
import { ComponentConstructorInfo, ComponentDrawInfo, Coordinate, GridConfig } from '@engine/types';
import EventMark from '@engine/Event/EventMark';
import EventBody from '@engine/Event/EventBody';
import EventAxis from '@engine/Event/EventAxis';
import { deepFreeze, mergeBox } from '@engine/common/functions';
import { SN } from '@engine/common/definitions';

/**
 * @property {Coordinate} target - a coordinate the Event need to approach.
 * @property {Coordinate} offset - a coordinate offset with the this.target.
 *
 * @property {Date} date - a data of event.
 * @property {string} title - the title of event.
 * @property {[string]} description - the description of event.
 * @property {boolean} folded - indicate the EventBody was in fold-mode or not.
 * @property {[string]} foldPlaceholder - a text to show in EventBody when it was in fold-mode.
 *
 * @property {[number]} axisLength - the length of EventAxis.
 * @property {[number]} axisOffset - the offset X with Axis in EventAxis.
 * @property {[string]} axisText - the description about event ended.
 * */
interface DrawInfo extends ComponentDrawInfo{
    target: Coordinate;
    offset: Coordinate;

    date: Date;
    title: string;
    description?: string;
    folded: boolean;
    foldPlaceholder?: string;

    axisLength?: number;
    axisOffset?: number;
    axisText?: string;
}

/**
 * @property {GridConfig} grid - the whole config of GRID.
 * */
export interface ConstructInfo extends ComponentConstructorInfo{
    grid :GridConfig;
}

/**
 * The whole Event. Contain an EventBody and an EventMark, maybe has a EventAxis too.
 * The Manage-Component. All of draw is resolved by child component.
 * */
export default abstract class Event extends Component{
    constructor(props:ConstructInfo) {
        super(props);
        this.grid = props.grid;
        this.drawInfo = {
            target: {
                x: 30,
                y: 50,
            },
            offset: this.grid.eventOffset,

            date: null as any,
            title: null as any,
            folded: false,

            box: {
                x: 0,
                y: 0,
                width: 500,
                height: 500,
            },
        };
        this.ext.onConstruct(this);
    }

    grid :GridConfig;
    name = SN.Event;
    drawInfo:DrawInfo;

    // The instances
    mark:EventMark = null as any;
    body:EventBody = null as any;
    axis:EventAxis|null = null;

    // The Constructors
    abstract bodyConstructor :typeof EventBody;
    abstract axisConstructor :typeof EventAxis;
    abstract markConstructor :typeof EventMark;

    createBox() {
        this.drawInfo.box = mergeBox(
            this.body.drawInfo.box,
            this.mark.drawInfo.box,
        );
        if (this.axis) {
            this.drawInfo.box = mergeBox(
                this.drawInfo.box,
                this.axis.drawInfo.box,
            );
        }

        return super.createBox();
    }

    async apply() {
        await Promise.all([
            this.initMark(),
            this.initBody(),
            this.initAxis(),
        ]);
        this.createBox();

        return super.apply();
    }
    draw() {
        this.body.draw();
        this.axis && this.axis.draw();
        this.mark.draw();

        return super.draw();
    }
    hide() {
        this.mark.hide();
        this.body.hide();
        this.axis && this.axis.hide();

        return super.hide();
    }
    destroy() {
        this.mark.destroy();
        this.body.destroy();
        this.axis && this.axis.destroy();

        return super.destroy();
    }

    initMark() :Promise<any> {
        if (this.mark) this.mark.destroy();
        // @ts-ignore - realize a absolute class that will re-init in the theme.
        this.mark = new this.markConstructor(this);
        this.mark.drawInfo.target = this.drawInfo.target;
        this.mark.drawInfo.width = this.grid.markWidth;
        this.mark.drawInfo.height = this.grid.markHeight;

        return this.mark.apply();
    }
    initBody() :Promise<any> {
        if (this.body) this.body.destroy();
        // @ts-ignore - realize a absolute class that will re-init in the theme.
        this.body = new this.bodyConstructor(this);
        this.body.drawInfo.markDrawInfo = deepFreeze(this.mark.drawInfo);
        this.body.drawInfo.maxWidth = this.grid.eventWidth;
        this.body.drawInfo.date = this.drawInfo.date;
        this.body.drawInfo.title = this.drawInfo.title;
        this.body.drawInfo.description = this.drawInfo.description;
        this.body.drawInfo.folded = this.drawInfo.folded;
        this.body.drawInfo.foldPlaceholder = this.drawInfo.foldPlaceholder;
        this.body.drawInfo.offset =  Object.assign({}, this.drawInfo.offset);

        return this.body.apply();
    }
    initAxis() :Promise<any> {
        if (this.axis) {
            this.axis.destroy();
            this.axis = null;
        }

        if (this.drawInfo.axisLength) {
            // @ts-ignore - realize a absolute class that will re-init in the theme.
            const axis = this.axis || new this.axisConstructor(this);
            axis.drawInfo.axisBodyDrawInfo = deepFreeze(this.ext.components[SN.Axis][0].drawInfo);
            axis.drawInfo.markDrawInfo = deepFreeze(this.mark.drawInfo);
            axis.drawInfo.offsetX = this.grid.minEventAxisOffset;
            axis.drawInfo.length = this.drawInfo.axisLength;
            axis.drawInfo.text = this.drawInfo.axisText;
            this.axis = axis;
            return axis.apply();
        }

        return Promise.resolve(null);
    }

    static is(comp:Component) :comp is Event {
        return comp.name === SN.Event;
    }
}
