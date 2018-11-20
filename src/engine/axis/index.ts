import {ComponentDrawInfo, Box} from "@engine/types";
import Component from "@engine/common/component";
import AxisMilestone from "@engine/axis/milestone";
import AxisScale from "@engine/axis/scale";
import AxisBody from "@engine/axis/body";
import {SN} from "@engine/common/config";

export interface DrawInfo extends ComponentDrawInfo{
    scales: number[];
    milestones: {
        position: number;
        text: string;
    }[];
    bodyBox: Box; // setting to AxisBody
}

export default class Axis extends Component{
    name = SN.Axis;

    drawInfo:DrawInfo = {
        scales: [],
        milestones: [],
        bodyBox: {
            x: 0,
            y: 0,
            height: 1200,
            width: 10,
        },

        box: {
            x: 0,
            y: 0,
            width: 10,
            height: 1200,
        },
    };

    milestones:AxisMilestone[] = [];
    scales:AxisScale[] = [];
    body:AxisBody = new AxisBody(this);

    async apply(){
        // Init AxisBody
        this.body.drawInfo.box = Object.assign({}, this.drawInfo.bodyBox);

        // Clear milestones
        this.milestones.forEach(m => m.destroy());
        this.milestones.length = 0;
        // Init milestones
        for(let {position, text} of this.drawInfo.milestones){
            const milestone = new AxisMilestone(this);
            milestone.drawInfo.text = text;
            milestone.drawInfo.box.x = this.drawInfo.bodyBox.x;
            milestone.drawInfo.box.y = position; // recomputed in PositionCounter
            this.milestones.push(milestone);
        }

        // Clear scales
        this.scales.forEach(s => s.destroy());
        this.scales.length = 0;
        // Init scales
        for(let position of this.drawInfo.scales){
            if(this.drawInfo.milestones.some(m=>m.position===position)) continue;
            const scale = new AxisScale(this);
            scale.drawInfo.box.width = this.drawInfo.bodyBox.width;
            scale.drawInfo.box.x = this.drawInfo.bodyBox.x;
            scale.drawInfo.box.y = position; // recomputed in PositionCounter
            this.scales.push(scale);
        }

        await Promise.all([
            this.body.apply(),
            this.milestones.map(m => m.apply()),
            this.scales.map(s => s.apply())
        ]);

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
