export default class Text{
    constructor({x,y,text,container,style:{maxWidth,aspectRatio,nowrap}={}}){
        if(new.target===Text)throw new TypeError('Illegal constructor.');
        this.x =x;
        this.y =y;
        this.maxWidth =maxWidth;
        this.text =text;
        this.container =container;
        this.style =arguments[0].style;
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