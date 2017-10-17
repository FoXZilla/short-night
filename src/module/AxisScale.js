import AxisScaleInterface from '@/src/interface/AxisScale';


export default class AxisScale extends AxisScaleInterface{
    constructor(){
        super(...arguments);
    };
    draw(){
        this.ctx.beginPath();//draw bg
        this.ctx.fillStyle='#f60';
        this.ctx.arc(this.x,this.y,this.axisWidth/2+4,0,7);
        this.ctx.fill();
    };
};