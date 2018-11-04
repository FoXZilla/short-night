import {SN, ComponentDrawInfo, Box} from "@engine/types";
import Component from "@engine/common/component";
import AxisMilestone from "@engine/axis/milestone";
import AxisScale from "@engine/axis/scale";
import AxisBody from "@engine/axis/body";
import {Breakpoint} from "@engine/tipy";
import {mergeBox} from "@engine/common/functions";

export interface DrawInfo extends ComponentDrawInfo{
    scales: number[];
    milestones: {
        position: number;
        text: string;
    }[];
    axisBox: Box;
}

export default class Axis extends Component{
    name = SN.Axis;

    drawInfo:DrawInfo = {
        scales: [],
        milestones: [],
        axisBox: {
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
        tipy: null as any,
        container: null as any,
        canvas: null as any,
    };

    milestones:AxisMilestone[] = [];
    scales:AxisScale[] = [];
    body:AxisBody = new AxisBody;

    async apply(){
        // Init AxisBody
        this.body.drawInfo.box = Object.assign({}, this.drawInfo.axisBox);
        this.body.drawInfo.tipy = this.drawInfo.tipy;
        this.body.drawInfo.container = this.drawInfo.container;
        this.body.drawInfo.canvas = this.drawInfo.canvas;

        // Init milestones
        this.milestones.forEach(milestone=>{
            this.drawInfo.tipy.pushConfigs.length = 0;
            milestone.destroy();
        });
        this.milestones.length = 0;
        for(let {position, text} of this.drawInfo.milestones){
            const milestone = new AxisMilestone;
            milestone.drawInfo.tipy = this.drawInfo.tipy;
            milestone.drawInfo.container = this.drawInfo.container;
            milestone.drawInfo.canvas = this.drawInfo.canvas;
            milestone.drawInfo.text = text;
            milestone.drawInfo.box.x = this.drawInfo.axisBox.x;
            milestone.drawInfo.box.y = position;
            this.milestones.push(milestone);
        }
        this.milestones.forEach(m=>m.apply());

        // Init scales
        this.scales.forEach(s=>s.destroy());
        this.scales.length = 0;
        for(let position of this.drawInfo.scales){
            if(this.drawInfo.milestones.some(m=>m.position===position)) continue;
            const scale = new AxisScale;
            scale.drawInfo.tipy = this.drawInfo.tipy;
            scale.drawInfo.container = this.drawInfo.container;
            scale.drawInfo.canvas = this.drawInfo.canvas;
            scale.drawInfo.box.width = this.drawInfo.axisBox.width;
            scale.drawInfo.box.x = this.drawInfo.axisBox.x;
            scale.drawInfo.box.y = position;
            this.scales.push(scale);
        }
        this.scales.forEach(s=>s.apply());

        // Milestone cannot occupy the space of Axis
        this.drawInfo.tipy.realLength =
            this.drawInfo.axisBox.height
            - this.milestones.reduce( // Reserved space for Milestone
                (h:number, m: AxisMilestone)=>h + m.drawInfo.box.height,
                0,
            )
        ;

        // Set real Y in milestones and scales
        this.milestones.forEach(m=>m.drawInfo.box.y*=this.drawInfo.tipy.realLength);
        this.scales.forEach(s=>s.drawInfo.box.y*=this.drawInfo.tipy.realLength);

        // align center
        this.scales.forEach(scale=>{
            scale.drawInfo.box.y -= scale.drawInfo.box.height/2 - this.drawInfo.axisBox.y;
            scale.drawInfo.box.x -= (scale.drawInfo.box.width - this.drawInfo.axisBox.width) / 2;
            scale.apply();
        });
        this.milestones.forEach(milestone=>{
            milestone.drawInfo.box.y += this.drawInfo.axisBox.y;
            milestone.drawInfo.box.x -= (milestone.drawInfo.box.width - this.drawInfo.axisBox.width) / 2;
            milestone.apply();
        });

        await this.drawInfo.tipy.setBreakpoint(
            Breakpoint.PushScalesAndMilestones,
            {
                onBreak: ()=>{
                    this.body.draw();
                    this.scales.forEach(s=>s.draw());
                    this.milestones.forEach(m=>m.draw());
                },
                onNext: ()=>{
                    this.drawInfo.canvas.getContext('2d')!.clearRect(
                        0, 0, this.drawInfo.canvas.width, this.drawInfo.canvas.height
                    );
                },
            },
        );

        // Push milestones and scales
        this.milestones.forEach(milestone=>this.drawInfo.tipy.addPushConfig({
            critical: milestone.drawInfo.box.y,
            additional: milestone.drawInfo.box.height,
        }));
        for(let milestone of this.milestones){
            milestone.drawInfo.box.y += this.drawInfo.tipy.countCritical(milestone.drawInfo.box.y);
        }
        for(let scale of this.scales){
            scale.drawInfo.box.y += this.drawInfo.tipy.countCritical(scale.drawInfo.box.y);
        }

        this.body.apply();
        this.scales.forEach(s=>s.apply());
        this.milestones.forEach(m=>m.apply());

        this.drawInfo.box = mergeBox(
            this.body.drawInfo.box,
            ...this.scales.map(s=>s.drawInfo.box),
            ...this.milestones.map(m=>m.drawInfo.box),
        );
        super.apply();

    }
    async draw(){
        await this.drawInfo.tipy.setBreakpoint(Breakpoint.DrawAxisBody);
        this.body.draw();
        await this.drawInfo.tipy.setBreakpoint(Breakpoint.DrawAxisScale);
        this.scales.forEach(s=>s.draw());
        await this.drawInfo.tipy.setBreakpoint(Breakpoint.DrawAxisMilestone);
        this.milestones.forEach(m=>m.draw());
    }
    destroy(){
        this.body.destroy();
        this.scales.forEach(s=>s.destroy());
        this.milestones.forEach(m=>m.destroy());
    }
};
