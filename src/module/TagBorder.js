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

        var leftTrack =[
            [borderX ,this.pointerY-(Math.sqrt(3)/3)*h],
            [this.pointerX ,this.pointerY],
            [borderX ,this.pointerY+(Math.sqrt(3)/3)*h],
            [this.x ,this.y+this.height],
            [this.x+this.width ,this.y+this.height],
            [this.x+this.width ,this.y],
        ];
        var rightTrack =[
            [this.x+this.width ,this.y],
            [borderX ,this.pointerY-(Math.sqrt(3)/3)*h],
            [this.pointerX ,this.pointerY],
            [borderX ,this.pointerY+(Math.sqrt(3)/3)*h],
            [this.x+this.width ,this.y+this.height],
            [this.x ,this.y+this.height],
        ];


        this.ctx.beginPath();
        this.ctx.moveTo(this.x ,this.y);
        if(this.pointerX<this.x){
            for(let [x,y] of leftTrack){
                this.ctx.lineTo(x,y);
            };
        }else{
            for(let [x,y] of rightTrack){
                this.ctx.lineTo(x,y);
            };
        }
        this.ctx.closePath();
        this.ctx.stroke();


    };
};