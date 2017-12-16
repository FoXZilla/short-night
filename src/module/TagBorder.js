import TagBorderInterface from '@/src/interface/TagBorder';
import {CTX_ORIGIN_DATA} from '@/src/js/constants';

export default class TagBorder extends TagBorderInterface{
    constructor(){
        super(...arguments);
        this._area =[];

        this.init();
    };
    init(){
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

        this.pointerX<this.x ?this._area=leftTrack :this._area=rightTrack;
    };
    draw(){
        Object.assign(this.ctx ,CTX_ORIGIN_DATA);



        this.ctx.beginPath();
        this.ctx.moveTo(this.x ,this.y);
        for(let [x,y] of this._area){
            this.ctx.lineTo(x,y);
        };
        this.ctx.closePath();
        this.ctx.stroke();


    };
};