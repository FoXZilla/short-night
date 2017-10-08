export default class SingleText{
    /**
     * @param {Element} container - relative to who positioning
     * */
    constructor({x,y,text,container}){
        if(new.target===SingleText)throw new TypeError('Illegal constructor.');
        this.x =x;
        this.y =y;
        this.text =text;
        this.container =container;
    };
    get width(){throw new TypeError('"width" read on an object that does not implement interface SingleText.')};
    get height(){throw new TypeError('"height" read on an object that does not implement interface SingleText.')};
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface SingleText.');
    };
};