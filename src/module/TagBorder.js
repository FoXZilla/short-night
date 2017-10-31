import TagBorderInterface from '@/src/interface/TagBorder';
import {CTX_ORIGIN_DATA} from '@/src/js/constants';

export default class TagBorder extends TagBorderInterface{
    constructor(){
        super(...arguments);

        this.init();
    };
    init(){};
    draw(){
        Object.assign(this.ctx ,CTX_ORIGIN_DATA);


        let borderX =this.pointerX<this.x ?this.x :this.x+this.width;
        let h =Math.abs(this.pointerX-borderX);
        this.ctx.beginPath();
        this.ctx.moveTo(this.x ,this.y);
        this.ctx.lineTo(borderX ,this.pointerY-(Math.sqrt(3)/3)*h);
        this.ctx.lineTo(this.pointerX ,this.pointerY);
        this.ctx.lineTo(borderX ,this.pointerY+(Math.sqrt(3)/3)*h);
        this.ctx.lineTo(this.x ,this.y+this.height);
        this.ctx.lineTo(this.x+this.width ,this.y+this.height);
        this.ctx.lineTo(this.x+this.width ,this.y);
        this.ctx.closePath();
        this.ctx.stroke();


    };
};