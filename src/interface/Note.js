/**
 * @property {Line} line
 * */
export default class Note{
    constructor({ctx,targetX,targetY,container,text,offsetX,offsetY}){
        if(new.target===Note)throw new TypeError('Illegal constructor.');
        this.ctx =ctx;
        this.targetX =targetX;
        this.targetY =targetY;
        this.offsetX =offsetX;
        this.offsetY =offsetY;
        this.text =text;
        this.container =container;
    };
    get textX(){
        throw new TypeError('"textX" read on an object that does not implement interface Note.')
    };
    get textY(){
        throw new TypeError('"textY" read on an object that does not implement interface Note.')
    };
    get textWidth(){
        throw new TypeError('"textWidth" read on an object that does not implement interface Note.')
    };
    get textHeight(){
        throw new TypeError('"textHeight" read on an object that does not implement interface Note.')
    };
    get line(){
        throw new TypeError('"line" read on an object that does not implement interface Note.')
    };
    init(){
        throw new TypeError('"init" called on an object that does not implement interface Note.');
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface Note.');
    };
};