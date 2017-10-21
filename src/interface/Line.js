export default class Line{
    constructor({ctx,startX,startY,endX,endY}){
        if(new.target===Line)throw new TypeError('Illegal constructor.');
        this.ctx =ctx;
        this.startX =startX;
        this.startY =startY;
        this.endX =endX;
        this.endY =endY;
    };
    init(){
        throw new TypeError('"init" called on an object that does not implement interface Line.');
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface Line.');
    };
};