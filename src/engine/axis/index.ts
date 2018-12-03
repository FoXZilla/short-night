import {ComponentDrawInfo, Box, Coordinate} from "@engine/types";
import Component from "@engine/common/component";
import AxisMilestone from "@engine/axis/milestone";
import AxisScale from "@engine/axis/scale";
import AxisBody from "@engine/axis/body";
import {SN} from "@engine/common/config";
import {deepFreeze, mergeBox} from "@engine/common/functions";

export interface DrawInfo extends ComponentDrawInfo{
    scales: number[];
    milestones: {
        position: number;
        text: string;
    }[];
    length: number;
}

export default abstract class Axis extends Component{
    name = SN.Axis;

    public drawInfo:DrawInfo = {
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

    abstract MilestoneConstructor :typeof AxisMilestone;
    abstract ScaleConstructor :typeof AxisScale;
    abstract BodyConstructor :typeof AxisBody;
    milestones:AxisMilestone[] = [];
    scales:AxisScale[] = [];
    body:AxisBody = null as any;

    async apply(){
        // @ts-ignore
        if(!this.body) this.body = new this.BodyConstructor(this);
        this.body.drawInfo.length = this.drawInfo.length;
        await this.body.apply();

        // Clear
        this.milestones.forEach(m => m.destroy());
        this.milestones.length = 0;
        this.scales.forEach(s => s.destroy());
        this.scales.length = 0;

        // Init scales
        for(let position of this.drawInfo.scales){
            if(this.drawInfo.milestones.some(m => m.position===position)) continue;
            // @ts-ignore
            const scale:AxisScale = new this.ScaleConstructor(this);
            scale.drawInfo.bodyDrawInfo = deepFreeze(this.body.drawInfo);
            scale.drawInfo.alignY = position; // recomputed in PositionCounter
            scale.drawInfo.height = this.grid.scaleHeight; // recomputed in PositionCounter
            this.scales.push(scale);
        }

        // Init milestones
        for(let {position, text} of this.drawInfo.milestones){
            //@ts-ignore
            const milestone = new this.MilestoneConstructor(this);
            milestone.drawInfo.bodyDrawInfo = deepFreeze(this.body.drawInfo);
            milestone.drawInfo.alignY = position; // recomputed in PositionCounter
            milestone.drawInfo.text = text;
            this.milestones.push(milestone);
        }

        await Promise.all([
            this.milestones.map(m => m.apply()),
            this.scales.map(s => s.apply())
        ]);

        this.drawInfo.box = mergeBox(
            this.body.drawInfo.box,
            ...this.milestones.map(m => m.drawInfo.box),
            ...this.scales.map(s => s.drawInfo.box),
        );

        return super.apply();
    }
    draw(){
        this.body.draw();
        this.scales.forEach(s=>s.draw());
        this.milestones.forEach(m=>m.draw());

        return super.draw();
    }
    destroy(){
        this.body.destroy();
        this.scales.forEach(s=>s.destroy());
        this.milestones.forEach(m=>m.destroy());

        return super.destroy();
    }
    hide(){
        this.body.hide();
        this.scales.forEach(s=>s.hide());
        this.milestones.forEach(m=>m.hide());

        return super.hide();
    }

    static is(comp:Component) :comp is Axis{
        return comp.name === SN.Axis;
    }
};
