import { ConstLevel, ComponentDrawInfo, Coordinate, Box } from '@engine/types';
import { countBox, deepAssign } from '@engine/common/functions';
import Component from '@engine/common/Component';
import { SN } from '@engine/common/config';
import EventMark from '@engine/Event/EventMark';

export interface DrawInfo extends ComponentDrawInfo{
    markDrawInfo: EventMark['drawInfo'];
    offset: Coordinate;
    maxWidth: number;

    date: string;
    title: string;
    contentText?: string;

    floated: boolean;

    folded: boolean;
    foldedText?: string;
}

export default abstract class EventBody extends Component{
    name = SN.EventBody;

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
            width: 300,
            height: 0,
        },
    };

    resetElement() {
        if (this.drawInfo.folded) { // TODO: reconstruct here
            this.element.innerHTML = `
                <h4 class="foldedText">${this.drawInfo.foldedText || this.drawInfo.title}</h4>
                <h5 class="date">${new Date(this.drawInfo.date).toDateString()}</h5>
            `;
        } else {
            this.element.innerHTML = `
                <h4 class="title">${this.drawInfo.title}</h4>
                <h5 class="date">${new Date(this.drawInfo.date).toDateString()}</h5>
                ${this.drawInfo.contentText ? `<p>${this.drawInfo.contentText}</p>` :''}
            `;
        }

        if (this.drawInfo.folded) {
            this.element.classList.add('folded');
        } else {
            this.element.classList.remove('folded');
        }

        Object.assign(
            this.element.style,
            {
                left: 0,
                top: 0,
                width: null,
                height: null,
                maxWidth: `${this.drawInfo.maxWidth}px`,
            },
        );
    }
    initBoxFromElement() {
        const eltBox = countBox(this.element);
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
    }
    async apply() {
        this.createElement();
        this.initBoxFromElement();
        this.createElement();
        this.element.style.visibility = 'hidden';

        return super.apply();
    }

    createElement() {
        super.createElement();
        this.resetElement();

        this.element.style.left = `${this.drawInfo.box.x}px`;
        this.element.style.top = `${this.drawInfo.box.y}px`;
    }

    static is(comp:Component) :comp is EventBody {
        return comp.name === SN.EventBody;
    }

    draw() {
        this.createElement();
        return super.draw();
    }
}
