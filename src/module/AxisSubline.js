import AxisSublineInterface from '@/src/interface/AxisSubline';

export default class AxisSubline extends AxisSublineInterface{
    constructor(meta ,{serif=7}={}){
        super(...arguments);
        this.serif =serif;

        this.init();
    };
    init(){
        this.direction =this.offset/Math.abs(this.offset);
    };
    draw(){
        this.ctx.strokeStyle='#77';
        this.ctx.lineWidth =1;
        this.ctx.setLineDash([4,2]);

        this.ctx.beginPath();
        this.ctx.moveTo(this.x,this.y);
        this.ctx.lineTo(this.x+this.offset+this.serif*this.direction ,this.y);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(this.x,this.y-this.length);
        this.ctx.lineTo(this.x+this.offset+this.serif*this.direction ,this.y-this.length);
        this.ctx.stroke();

        this.ctx.setLineDash([]);
        this.ctx.strokeStyle='#000';
        this.ctx.beginPath();
        this.ctx.lineWidth =2;
        this.ctx.moveTo(this.x+this.offset,this.y);
        this.ctx.lineTo(this.x+this.offset,this.y-this.length);
        this.ctx.stroke();
    };
    area(){
        return [
            [this.x+this.offset  ,this.y],
            [this.x+this.offset  ,this.y-this.length],
        ];
    };
};