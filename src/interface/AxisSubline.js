export default class AxisSubline{
    /*
            AxisLine
          ↙
        ||
        ||- - - - --
        ||        |   AxisSubline
        ||        | ↙
        ||        |
        ||        |
        || offset |  ↑
        ||  <-->  | length
        ||        |  ↓
        ||        |
        ||        |
        ||        |
        ||- - - - --
        ||↖
        ||  (x,y)
    */
    constructor({x,y,length,offset,ctx}){
        this.x =x;
        this.y =y;
        this.length =Math.abs(length);
        this.offset =offset;
        this.ctx    =ctx;
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface AxisSubline.');
    };
};