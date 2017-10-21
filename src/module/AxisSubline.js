import AxisSublineInterface from '@/src/interface/AxisSubline';

export default class AxisSubline extends AxisSublineInterface{
    constructor(meta ,{serif=5}={}){
        super(...arguments);
        this.serif =serif;

        this.init();
    };
    init(){};
    draw(){
        this.ctx.strokeStyle='#999';
        this.ctx.lineWidth =1;

        this.ctx.beginPath();
        this.ctx.moveTo(this.x,this.y);
        this.ctx.lineTo(this.x+this.offset+this.serif ,this.y);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(this.x,this.y-this.length);
        this.ctx.lineTo(this.x+this.offset+this.serif ,this.y-this.length);
        this.ctx.stroke();

        this.ctx.strokeStyle='#000';
        this.ctx.beginPath();
        this.ctx.lineWidth =2;
        this.ctx.moveTo(this.x+this.offset,this.y);
        this.ctx.lineTo(this.x+this.offset,this.y-this.length);
        this.ctx.stroke();
    };
};