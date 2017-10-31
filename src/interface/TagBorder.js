export default class TagBorder{
    /**
     * @param {Element} container - relative to who positioning
     * */
    constructor({width,height,x,y,pointerY,pointerX,ctx}){
        if(new.target===TagBorder)throw new TypeError('Illegal constructor.');
        this.x =x;
        this.y =y;
        this.width =width;
        this.height =height;
        this.pointerY =pointerY;
        this.pointerX =pointerX;
        this.ctx =ctx;
    };
    init(){
        throw new TypeError('"init" called on an object that does not implement interface TagBorder.');
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface TagBorder.');
    };
};