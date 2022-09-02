import { ComponentConstructorInfo, ComponentDrawInfo, DateBy } from '../types';
import { parseBox } from '../common/functions';
import Component from '../common/Component';
import { SN } from '../common/definitions';
import AxisBody from './AxisBody';

/**
 * @property {Readonly<AxisBodyDrawInfo>} bodyDrawInfo - the DrawInfo of AxisBody.
 * @property {number} alignY - the y point which is the AxisMilestone align target.
 * @property {number} description - the showed description of milestone.
 * */
interface DrawInfo extends ComponentDrawInfo {
    bodyDrawInfo :Readonly<AxisBody['drawInfo']>;
    alignY :number;
    content :string | { date :string, by :DateBy };
}

/**
 * The milestone on Axis, for indicate time of nearby area.
 * Can conflict with EventBody.
 * */
export default abstract class AxisMilestone extends Component {
    constructor(props :ComponentConstructorInfo) {
        super(props);
        this.ext.onConstruct(this);
    }

    name = SN.AxisMilestone;
    drawInfo :DrawInfo = {
        bodyDrawInfo: {} as any,
        alignY: 0,
        content: '0_o',

        box: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        },
    };

    formatDate(date :Date, by :DateBy) :string {
        const monthAbbr = date.toDateString().split(' ')[1];
        switch (by) {
            case DateBy.FiveCentury:
            case DateBy.Century:
            case DateBy.TenYear:
            case DateBy.Year: return date.getFullYear() > 0
                ? String(date.getFullYear())
                : `B.C. ${date.getFullYear()}`;
            case DateBy.Quarter: return `${monthAbbr}. ${date.getFullYear()}`;
            case DateBy.Month: return `${monthAbbr}.`;
            case DateBy.Week: return `${date.getMonth() + 1}.${date.getDate()}`;
            case DateBy.Day: return `${date.getMonth() + 1}.${date.getDate()}`;
            default: return date.toLocaleString();
        }
    }
    createElement() {
        const flag = super.createElement(); // Must return this flag

        this.element!.innerHTML = typeof this.drawInfo.content === 'string'
            ? this.drawInfo.content
            : this.formatDate(new Date(this.drawInfo.content.date), this.drawInfo.content.by);
        const { width, height } = parseBox(this.element!);
        const x = this.drawInfo.bodyDrawInfo.box.x
            + this.drawInfo.bodyDrawInfo.box.width / 2
            - width / 2;
        const y = this.drawInfo.alignY - height / 2;

        this.element!.style.left = `${x}px`;
        this.element!.style.top = `${y}px`;

        return flag;
    }
    createBox() {
        this.drawInfo.box = parseBox(this.element!);
    }
    async apply() {
        this.createElement();
        this.element!.style.visibility = 'hidden';
        this.createBox();

        return super.apply();
    }
    draw() {
        this.createElement();
        return super.draw();
    }

    static is(comp :Component) :comp is AxisMilestone {
        return comp.name === SN.AxisMilestone;
    }
}
