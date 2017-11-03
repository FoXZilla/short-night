import LineInterface from '@/src/interface/Line';

export default class Line extends LineInterface{
    constructor(meta ,{color='#777'}={}){
        super(...arguments);
        this.color =color;

        this.init();
    };
    init(){};
    draw(){
        this.ctx.strokeStyle =this.color;
        this.ctx.lineWidth =2;
        this.ctx.beginPath();
        this.ctx.moveTo(this.startX,this.startY);
        this.ctx.lineTo(this.endX,this.endY);
        this.ctx.stroke();
    };
};