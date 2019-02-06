import { ComponentDrawInfo, Coordinate, Box, ComponentConstructorInfo } from '@engine/types';
import { parseBox } from '@engine/common/functions';
import Component from '@engine/common/Component';
import { SN } from '@engine/common/definitions';
import EventMark from '@engine/Event/EventMark';

/**
 * @property {Readonly<EventMark['drawInfo']>} markDrawInfo - the DrawInfo of EventMark.
 * @property {Coordinate} offset - configure a coordinate that offset with Axis.
 * @property {number} maxWidth - the EventBody can be stretched max width.
 * @property {Date} date - the data of event.
 * @property {string} title - the title of event.
 * @property {[string]} description - the description of event.
 * @property {boolean} floated - indicate the EventBody was floated or not.
 * @property {boolean} folded - indicate the EventBody was in fold-mode or not.
 * @property {[string]} foldPlaceholder - a text to show when the EventBody was in fold-mode.
 * @property {[Date]} endDate - the date of event end.
 * @property {[string]} endText - the description about event ended.
 * */
interface DrawInfo extends ComponentDrawInfo{
    markDrawInfo: EventMark['drawInfo'];
    offset: Coordinate;
    maxWidth: number;

    date: string;
    title: string;
    description?: string;

    floated: boolean;

    folded: boolean;
    foldPlaceholder?: string;

    endDate?: string;
    endText?: string;
}

/**
 * Can conflict with AxisMilestone and EventBody.
 * */
export default abstract class EventBody extends Component{
    constructor(props:ComponentConstructorInfo) {
        super(props);
        this.ext.onConstruct(this);
    }

    name = SN.EventBody;
    /**
     * An EventBody must has a HTML element for allow user select and copy text from EventBody.
     * @type {HTMLElement}
     * */
    element :HTMLElement = null as any;
    drawInfo:DrawInfo = {
        markDrawInfo: null as any,

        offset: {
            x: 0,
            y: 0,
        },
        maxWidth: 300,

        date: null as any,
        title: 'untitled',

        floated: false,
        folded: false,

        box: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        },
    };

    createElement() {
        const flag = super.createElement(); // Must return this flag

        if (this.drawInfo.floated) this.element.classList.add('floated');
        if (this.drawInfo.folded) this.element.classList.add('folded');

        this.element.innerHTML = `
            <div class="foldPlaceholder" title="${this.drawInfo.title}">
                ${this.drawInfo.foldPlaceholder || this.drawInfo.title}
            </div>
            <div class="title">${this.drawInfo.title}</div>
            <div class="date">${new Date(this.drawInfo.date).toLocaleDateString()}</div>
            <div class="description">${this.drawInfo.description}</div>
        `;

        if (!this.drawInfo.description) {
            this.element.removeChild(this.element.querySelector('.description')!);
        }

        this.element.style.maxWidth = `${this.drawInfo.maxWidth}px`;

        return flag;
    }
    createBox() {
        const eltBox = parseBox(this.element);
        const box:Box = {
            width: eltBox.width,
            height: eltBox.height,
            ...this.drawInfo.markDrawInfo.target,
        };

        box.x -= box.width;
        box.y -= box.height / 2;

        box.x -= this.drawInfo.offset.x;
        box.y += this.drawInfo.offset.y;

        this.drawInfo.box = box;

        return super.createBox();
    }
    async apply() {
        this.createElement();
        this.createBox();
        this.applyBoxToElement();

        this.element.style.visibility = 'hidden';

        return super.apply();
    }
    draw() {
        this.createElement();
        this.applyBoxToElement();
        return super.draw();
    }

    applyBoxToElement() {
        this.element.style.left = `${this.drawInfo.box.x}px`;
        this.element.style.top = `${this.drawInfo.box.y}px`;
    }

    static is(comp:Component) :comp is EventBody {
        return comp.name === SN.EventBody;
    }

}
