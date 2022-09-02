import { ComponentConstructorInfo, ComponentDrawInfo, GridConfig } from '../types';
import Component from '../common/Component';
import AxisMilestone from './AxisMilestone';
import AxisScale from './AxisScale';
import AxisBody from './AxisBody';
import { SN } from '../common/definitions';
import { deepFreeze, mergeBox } from '../common/functions';

/**
 * @property {number[]} scales - the position of scales. Every item should <= 1.
 * @property {Object[]} milestones - the config of milestones.
 * @property {number} milestones[].position. - the position of milestone. Every item should <= 1.
 * @property {string} milestones[].text. - the showed text of milestone.
 * @property {number} length - the axis length.
 * */
interface DrawInfo extends ComponentDrawInfo {
    scales :number[];
    milestones :{
        position :number;
        content :AxisMilestone['drawInfo']['content'];
    }[];
    length :number;
}

/**
 * @property {GridConfig} grid - the whole config of GRID.
 * */
export interface ConstructInfo extends ComponentConstructorInfo {
    grid :GridConfig;
}

/**
 * The whole Axis. Contain some AxisMilestone, some AxisScale and a AxisBody.
 * The Manage-Component. All of draw is resolved by child component.
 * */
export default abstract class Axis extends Component {
    constructor(props :ConstructInfo) {
        super(props);
        this.grid = props.grid;
        this.ext.onConstruct(this);
    }

    grid :GridConfig;
    name = SN.Axis;
    drawInfo :DrawInfo = {
        scales: [],
        milestones: [],
        length: 0,
        box: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        },
    };

    // The instances
    milestones :AxisMilestone[] = [];
    scales :AxisScale[] = [];
    body :AxisBody = null as any;

    // The Constructors
    abstract milestoneConstructor :typeof AxisMilestone;
    abstract scaleConstructor :typeof AxisScale;
    abstract bodyConstructor :typeof AxisBody;

    createBox() {
        this.drawInfo.box = mergeBox(
            this.body.drawInfo.box,
            ...this.milestones.map(m => m.drawInfo.box),
            ...this.scales.map(s => s.drawInfo.box),
        );
    }

    async apply() {
        this.initBody();
        await this.body.apply();

        this.initScales();
        this.initMilestones();

        await Promise.all([
            ...this.scales.map(s => s.apply()),
            ...this.milestones.map(m => m.apply()),
        ]);
        this.createBox();

        return super.apply();
    }
    draw() {
        this.body.draw();
        this.scales.forEach(s => s.draw());
        this.milestones.forEach(m => m.draw());

        return super.draw();
    }
    destroy() {
        this.body.destroy();
        this.scales.forEach(s => s.destroy());
        this.milestones.forEach(m => m.destroy());

        return super.destroy();
    }
    hide() {
        this.body.hide();
        this.scales.forEach(s => s.hide());
        this.milestones.forEach(m => m.hide());

        return super.hide();
    }

    initBody() {
        if (this.body) {
            this.body.destroy();
        }
        // @ts-ignore - realize a absolute class that will re-init in the theme.
        this.body = new this.bodyConstructor(this);
        this.body.drawInfo.length = this.drawInfo.length;
        this.body.drawInfo.width = this.grid.axisWidth;
        this.body.drawInfo.start = this.grid.axisStart;
    }
    initScales() {
        this.scales.forEach(s => s.destroy());
        this.scales.length = 0;

        for (const position of this.drawInfo.scales) {
            if (this.drawInfo.milestones.some(m => m.position === position)) continue;
            // @ts-ignore - realize a absolute class that will re-init in the theme.
            const scale :AxisScale = new this.scaleConstructor(this);
            scale.drawInfo.bodyDrawInfo = deepFreeze(this.body.drawInfo);
            scale.drawInfo.alignY = position * this.body.drawInfo.length;
            scale.drawInfo.height = this.grid.scaleHeight;
            this.scales.push(scale);
        }
    }
    initMilestones() {
        this.milestones.forEach(m => m.destroy());
        this.milestones.length = 0;
        for (const { position, content } of this.drawInfo.milestones) {
            // @ts-ignore - realize a absolute class that will re-init in the theme.
            const milestone = new this.milestoneConstructor(this);
            milestone.drawInfo.bodyDrawInfo = deepFreeze(this.body.drawInfo);
            milestone.drawInfo.alignY = position * this.body.drawInfo.length;
            milestone.drawInfo.content = content;
            this.milestones.push(milestone);
        }
    }

    static is(comp :Component) :comp is Axis {
        return comp.name === SN.Axis;
    }
}
