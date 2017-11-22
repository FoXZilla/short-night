import AxisScaleInterface from '@/src/interface/AxisScale';


export default class AxisScale extends AxisScaleInterface{
    constructor(){
        super(...arguments);

        this.init();
    };
    init(){};
    draw(){
        this.ctx.beginPath();
        this.ctx.moveTo(this.x-this.axisWidth/2 ,this.y-this.axisWidth/5);
        this.ctx.lineTo(this.x+this.axisWidth/2 ,this.y-this.axisWidth/5);
        this.ctx.lineTo(this.x+this.axisWidth/2 ,this.y+this.axisWidth/5);
        this.ctx.lineTo(this.x-this.axisWidth/2 ,this.y+this.axisWidth/5);
        this.ctx.closePath();
        this.ctx.fillStyle ='#f60';
        this.ctx.fill();

    };
};