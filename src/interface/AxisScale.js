export default class AxisScale{
    constructor({axisWidth,x,y,ctx}){
        if(new.target===AxisScale)throw new TypeError('Illegal constructor.');
        this.ctx =ctx;
        this.axisWidth =axisWidth;
        this.x =x;
        this.y =y;
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface AxisScale.');
    };
};