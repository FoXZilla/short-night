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

        this.textX =null;
        this.textY =null;
        this.line  =null;
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface Note.');
    };
};