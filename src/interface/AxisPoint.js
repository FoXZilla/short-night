/**
 * @property {Number} radius - the point real occupied area
 * */
export default class AxisPoint{
    /**
     * @param {Number} radius - point radius, but the may not be point real radius
     * @param {CanvasRenderingContext2D} ctx
     * */
    constructor({radius,x,y,ctx}){
        if(new.target===AxisPoint)throw new TypeError('Illegal constructor.');
        this.ctx =ctx;
        this.radius =radius;
        this.x =x;
        this.y =y;
    };
    init(){
        throw new TypeError('"init" called on an object that does not implement interface AxisPoint.');
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface AxisPoint.');
    };
};