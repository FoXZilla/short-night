import { ComponentConstructorInfo, ComponentDrawInfo } from '@engine/types';
import { parseBox } from '@engine/common/functions';
import Component from '@engine/common/Component';
import { SN } from '@engine/common/definitions';
import Axis from '@engine/Axis';
import EventMark from '@engine/Event/EventMark';

/**
 * @property {Readonly<Axis['drawInfo']>} axisBodyDrawInfo - the DrawInfo of AxisBody.
 * @property {Readonly<EventMark['drawInfo']>} markDrawInfo - the DrawInfo of EventMark.
 * @property {number} length - the length of EventAxis.
 * @property {number} offsetX - the offsetX of EventAxis.
 * @property {[string]} text - the description about event ended.
 * */
interface DrawInfo extends ComponentDrawInfo{
    axisBodyDrawInfo: Readonly<Axis['drawInfo']>;
    markDrawInfo: Readonly<EventMark['drawInfo']>;

    length: number;
    offsetX: number;
    text?: string;
}

/**
 * Recognize a event time of duration and end time point.
 * Some Event have no duration, so it needn't EventAxis.
 * Can conflict with AxisMilestone and EventAxis.
 * */
export default abstract class EventAxis extends Component{
    constructor(props:ComponentConstructorInfo) {
        super(props);
        this.ext.onConstruct(this);
    }

    name = SN.EventAxis;
    drawInfo:DrawInfo = {
        axisBodyDrawInfo: {} as any,
        markDrawInfo: {} as any,
        length: 0,
        offsetX: 0,

        box: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        },
    };

    createElement() {
        const flag = super.createElement(); // Must return this flag

        const target = this.drawInfo.markDrawInfo.target;

        this.element!.classList.add('event_axis-endText');
        this.element!.innerHTML = this.drawInfo.text!;

        const box = parseBox(this.element!);

        this.element!.style.left = `${target.x + this.drawInfo.offsetX}px`;
        this.element!.style.top = `${target.y - this.drawInfo.length - box.height / 2}px`;

        return flag;
    }
    async apply() {
        if (this.drawInfo.text) {
            this.createElement();
            this.element!.style.visibility = 'hidden';
        } else if (this.element) {
            this.element.parentNode!.removeChild(this.element);
            delete this.element;
        }

        const target = this.drawInfo.markDrawInfo.target;

        this.drawInfo.box = {
            x: target.x,
            y: target.y - this.drawInfo.length,
            width: this.drawInfo.offsetX,
            height: this.drawInfo.length,
        };

        return super.apply();
    }
    draw() {
        if (this.drawInfo.text) this.createElement();
        return super.draw();
    }

    static is(comp:Component) :comp is EventAxis {
        return comp.name === SN.EventAxis;
    }

}
