export default class Event{
    /**
     * @param {Element} container - relative to who positioning
     * @param {Number} [length]
     * @param {String} [text]
     * @param {String} [endText]
     * */
    constructor({targetX,targetY,length,contentText,endText,ctx,container}){
        if(new.target===Text)throw new TypeError('Illegal constructor.');
        this.targetX =targetX;
        this.targetY =targetY;
        this.length =length;
        this.contentText =contentText;
        this.endText =endText;
        this.ctx =ctx;
        this.container =container;
    };
    get x(){
        throw new TypeError('"x" read on an object that does not implement interface Tag.')
    };
    get y(){
        throw new TypeError('"y" read on an object that does not implement interface Tag.')
    };
    get width(){
        throw new TypeError('"width" read on an object that does not implement interface Tag.')
    };
    get height(){
        throw new TypeError('"height" read on an object that does not implement interface Tag.')
    };
    init(){
        throw new TypeError('"init" called on an object that does not implement interface Tag.');
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface Tag.');
    };
};