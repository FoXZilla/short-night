import AxisLineInterface from '@/src/interface/AxisLine';

export default class AxisLine extends AxisLineInterface{
    constructor(...args){
        super(...args);
    };
    draw(){
        this.ctx.beginPath();
        this.ctx.moveTo(this.x,this.y);
        this.ctx.lineTo(this.x ,this.y+this.length);
        this.ctx.lineTo(this.x+this.width ,this.y+this.length);
        this.ctx.lineTo(this.x+this.width ,this.y);
        this.ctx.closePath();
        this.ctx.fillStyle ='#000';
        this.ctx.fill();
    };
};