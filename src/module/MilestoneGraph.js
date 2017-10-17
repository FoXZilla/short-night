import MilestoneGraphInterface from '@/src/interface/MilestoneGraph';


export default class MilestoneGraph extends MilestoneGraphInterface{
    constructor(){
        super(...arguments);
    };
    draw(){
        this.ctx.beginPath();
        this.ctx.moveTo(this.alignX-this.width/2 ,this.alignY-this.height/2);
        this.ctx.lineTo(this.alignX+this.width/2 ,this.alignY-this.height/2);
        this.ctx.lineTo(this.alignX+this.width/2 ,this.alignY+this.height/2);
        this.ctx.lineTo(this.alignX-this.width/2 ,this.alignY+this.height/2);
        this.ctx.closePath();
        this.ctx.fillStyle ='#555';
        this.ctx.fill();
    };
};