export default class Tag{
    /**
     * @param {Element} container - relative to who positioning
     * @param {Number} aspectRatio -  expect width/height
     * */
    constructor({targetX,targetY,text,ctx,container,offsetX,offsetY,maxWidth,aspectRatio}){
        if(new.target===Text)throw new TypeError('Illegal constructor.');
        this.targetX =targetX;
        this.targetY =targetY;
        this.text =text;
        this.ctx =ctx;
        this.offsetX =offsetX;
        this.offsetY =offsetY;
        this.maxWidth =maxWidth;
        this.aspectRatio =aspectRatio;
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