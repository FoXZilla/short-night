export default class AxisLine{
    constructor({length,width,x,y,ctx}){
        if(new.target===AxisLine)throw new TypeError('Illegal constructor.');
        this.ctx =ctx;
        this.width =width;
        this.length =length;
        this.x =x;
        this.y =y;
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface AxisLine.');
    };
};