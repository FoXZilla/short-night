/**
 * @property {Line} line
 * */
export default class Note{
    constructor({ctx,targetX,targetY,container,text}){
        if(new.target===Note)throw new TypeError('Illegal constructor.');
        this.ctx =ctx;
        this.targetX =targetX;
        this.targetY =targetY;
        this.text =text;
        this.container =container;
    };
    get textX(){
        throw new TypeError('"textX" read on an object that does not implement interface Note.')
    };
    get textY(){
        throw new TypeError('"textY" read on an object that does not implement interface Note.')
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