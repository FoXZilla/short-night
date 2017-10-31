export default class Text{
    /**
     * @param {Element} container - relative to who positioning
     * */
    constructor({x,y,text,maxWidth,container}){
        if(new.target===Text)throw new TypeError('Illegal constructor.');
        this.x =x;
        this.y =y;
        this.maxWidth =maxWidth;
        this.text =text;
        this.container =container;
    };
    get width(){
        throw new TypeError('"width" read on an object that does not implement interface Text.')
    };
    get height(){
        throw new TypeError('"height" read on an object that does not implement interface Text.')
    };
    init(){
        throw new TypeError('"init" called on an object that does not implement interface Text.');
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface Text.');
    };
};