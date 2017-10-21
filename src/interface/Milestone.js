export default class Milestone{
    constructor({axisWidth,alignX,alignY,ctx,text,container}){
        if(new.target===Milestone)throw new TypeError('Illegal constructor.');
        this.ctx =ctx;
        this.axisWidth =axisWidth;
        this.text =text;
        this.width  =null;
        this.height =null;
        this.alignX =alignX;
        this.alignY =alignY;
        this.container =container;
    };
    init(){
        throw new TypeError('"init" called on an object that does not implement interface Milestone.');
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface Milestone.');
    };
};