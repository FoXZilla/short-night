import { ComponentConstructorInfo, ComponentDrawInfo, GridConfig } from '@engine/types';
import Component from '@engine/common/Component';
import AxisMilestone from '@engine/Axis/AxisMilestone';
import AxisScale from '@engine/Axis/AxisScale';
import AxisBody from '@engine/Axis/AxisBody';
import { SN } from '@engine/common/definitions';
import { deepFreeze, mergeBox } from '@engine/common/functions';

/**
 * @property {number[]} scales - the position of scales. Every item should <= 1.
 * @property {Object[]} milestones - the config of milestones.
 * @property {number} milestones[].position. - the position of milestone. Every item should <= 1.
 * @property {string} milestones[].text. - the showed text of milestone.
 * @property {number} length - the axis length.
 * */
interface DrawInfo extends ComponentDrawInfo{
    scales: number[];
    milestones: {
        position: number;
        text: string;
    }[];
    length: number;
}

/**
 * @property {GridConfig} grid - the whole config of GRID.
 * */
export interface ConstructInfo extends ComponentConstructorInfo{
    grid :GridConfig;
}

/**
 * The whole Axis. Contain some AxisMilestone, some AxisScale and a AxisBody.
 * The Manage-Component. All of draw is resolved by child component.
 * */
export default abstract class Axis extends Component{
    constructor(props:ConstructInfo) {
        super(props);
        this.grid = props.grid;
        this.ext.onConstruct(this);
    }

    grid :GridConfig;
    name = SN.Axis;
    drawInfo:DrawInfo = {
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
    milestones:AxisMilestone[] = [];
    scales:AxisScale[] = [];
    body:AxisBody = null as any;

    // The Constructors
    abstract milestoneConstructor :typeof AxisMilestone;
    abstract scaleConstructor :typeof AxisScale;
    abstract bodyConstructor :typeof AxisBody;

    async apply() {
        await Promise.all([
            this.initBody(),
            ...this.initScales(),
            ...this.initMilestones(),
        ]);

        this.drawInfo.box = mergeBox(
            this.body.drawInfo.box,
            ...this.milestones.map(m => m.drawInfo.box),
            ...this.scales.map(s => s.drawInfo.box),
        );

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

    initBody() :Promise<any> {
        if (this.body) {
            this.body.destroy();
        }
        // @ts-ignore - realize a absolute class that will re-init in the theme.
        this.body = new this.bodyConstructor(this);
        this.body.drawInfo.length = this.drawInfo.length;
        this.body.drawInfo.width = this.grid.axisWidth;
        this.body.drawInfo.start = this.grid.axisStart;

        return this.body.apply();
    }
    initScales() :Promise<any>[] {
        this.scales.forEach(s => s.destroy());
        this.scales.length = 0;

        for (const position of this.drawInfo.scales) {
            if (this.drawInfo.milestones.some(m => m.position === position)) continue;
            // @ts-ignore - realize a absolute class that will re-init in the theme.
            const scale:AxisScale = new this.scaleConstructor(this);
            scale.drawInfo.bodyDrawInfo = deepFreeze(this.body.drawInfo);
            scale.drawInfo.alignY = position; // recomputed in PositionCounter
            scale.drawInfo.height = this.grid.scaleHeight; // recomputed in PositionCounter
            this.scales.push(scale);
        }

        return this.scales.map(s => s.apply());
    }
    initMilestones() :Promise<any>[] {
        this.milestones.forEach(m => m.destroy());
        this.milestones.length = 0;
        for (const { position, text } of this.drawInfo.milestones) {
            // @ts-ignore - realize a absolute class that will re-init in the theme.
            const milestone = new this.milestoneConstructor(this);
            milestone.drawInfo.bodyDrawInfo = deepFreeze(this.body.drawInfo);
            milestone.drawInfo.alignY = position; // recomputed in PositionCounter
            milestone.drawInfo.text = text;
            this.milestones.push(milestone);
        }

        return this.milestones.map(m => m.apply());
    }

    static is(comp:Component) :comp is Axis {
        return comp.name === SN.Axis;
    }
}
