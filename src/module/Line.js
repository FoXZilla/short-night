import LineInterface from '@/src/interface/Line';

export default class Line extends LineInterface{
    constructor(){
        super(...arguments);
        this.init();
    };
    init(){};
    draw(){
        this.ctx.strokeStyle ='#777';
        this.ctx.lineWidth =2;
        this.ctx.beginPath();
        this.ctx.moveTo(this.startX,this.startY);
        this.ctx.lineTo(this.endX,this.endY);
        this.ctx.stroke();
    };
};