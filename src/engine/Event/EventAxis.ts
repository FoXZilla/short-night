import { ComponentDrawInfo } from '@engine/types';
import { countBox , mergeBox } from '@engine/common/functions';
import Component from '@engine/common/Component';
import { SN } from '@engine/common/config';
import Axis from '@engine/Axis';
import EventMark from '@engine/Event/EventMark';

export interface DrawInfo extends ComponentDrawInfo{
    axisBodyDrawInfo: Readonly<Axis['drawInfo']>;
    markDrawInfo: Readonly<EventMark['drawInfo']>;

    text?: string;
    length: number;
    offsetX: number;
}

export default abstract class EventAxis extends Component{
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
    apply() {
        const target = this.drawInfo.markDrawInfo.target;

        this.drawInfo.box = {
            x: target.x,
            y: target.y - this.drawInfo.length,
            width: this.drawInfo.offsetX,
            height: this.drawInfo.length,
        };

        if (this.drawInfo.text && !this.element) {
            this.element = EventAxis.createElement();
            this.container.appendChild(this.element);
        }
        if (!this.drawInfo.text && this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
            delete this.element;
        }

        if (this.element && this.drawInfo.text) {
            this.element.innerHTML = this.drawInfo.text;
            this.element.style.left = `${target.x + this.drawInfo.offsetX}px`;
            this.element.style.top = `${target.y - this.drawInfo.length}px`;

            this.drawInfo.box = mergeBox(
                this.drawInfo.box,
                countBox(this.element),
            );
        }

        return super.apply();
    }

    static createElement() {
        const elt = document.createElement('div');
        elt.className = 'event-axis-endText';
        elt.style.visibility = 'hidden';
        return elt;
    }

    static is(comp:Component) :comp is EventAxis {
        return comp.name === SN.EventAxis;
    }
}
