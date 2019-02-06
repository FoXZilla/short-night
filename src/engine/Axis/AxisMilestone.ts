import { ComponentConstructorInfo, ComponentDrawInfo, DateBy } from '@engine/types';
import { parseBox } from '@engine/common/functions';
import Component from '@engine/common/Component';
import { SN } from '@engine/common/definitions';
import AxisBody from '@engine/Axis/AxisBody';

/**
 * @property {Readonly<AxisBodyDrawInfo>} bodyDrawInfo - the DrawInfo of AxisBody.
 * @property {number} alignY - the y point which is the AxisMilestone align target.
 * @property {number} description - the showed description of milestone.
 * */
interface DrawInfo extends ComponentDrawInfo{
    bodyDrawInfo: Readonly<AxisBody['drawInfo']>;
    alignY: number;
    content: string | {date :string, by :DateBy};
}

/**
 * The milestone on Axis, for indicate time of nearby area.
 * Can conflict with EventBody.
 * */
export default abstract class AxisMilestone extends Component{
    constructor(props:ComponentConstructorInfo) {
        super(props);
        this.ext.onConstruct(this);
    }

    name = SN.AxisMilestone;
    drawInfo:DrawInfo = {
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
        switch (by){
            case 'year': return `${date.getFullYear()}`;
            case 'quarter': return `${monthAbbr}. ${date.getFullYear()}`;
            case 'month': return `${monthAbbr}.`;
            case 'week': return `${date.getMonth() + 1}.${date.getDate()}`;
            case 'day': return `${date.getMonth() + 1}.${date.getDate()}`;
            default: return date.toLocaleString();
        }
    }
    createElement() {
        const flag = super.createElement(); // Must return this flag

        this.element!.innerHTML = typeof this.drawInfo.content === 'string'
            ? this.drawInfo.content
            : this.formatDate(new Date(this.drawInfo.content.date), this.drawInfo.content.by)
        ;

        const { width, height } = parseBox(this.element!);
        const x = this.drawInfo.bodyDrawInfo.box.x
            + this.drawInfo.bodyDrawInfo.box.width / 2
            - width / 2
        ;
        const y = this.drawInfo.alignY - height / 2;

        this.element!.style.left = `${x}px`;
        this.element!.style.top = `${y}px`;

        return flag;
    }
    createBox() {
        this.drawInfo.box = parseBox(this.element!);
        return super.createBox();
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

    static is(comp:Component) :comp is AxisMilestone {
        return comp.name === SN.AxisMilestone;
    }
}
