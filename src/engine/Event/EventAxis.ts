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

    createElement() {
        super.createElement();

        const target = this.drawInfo.markDrawInfo.target;

        this.element!.classList.add('event_axis-endText');
        this.element!.innerHTML = this.drawInfo.text!;

        const box = countBox(this.element!);

        this.element!.style.left = `${target.x + this.drawInfo.offsetX}px`;
        this.element!.style.top = `${target.y - this.drawInfo.length - box.height / 2}px`;

    }

    static is(comp:Component) :comp is EventAxis {
        return comp.name === SN.EventAxis;
    }

    draw() {
        if (this.drawInfo.text) this.createElement();
        return super.draw();
    }
}
