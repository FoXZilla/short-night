export default class MilestoneGraph{
    constructor({axisWidth,alignX,alignY,ctx,width,height}){
        if(new.target===MilestoneGraph)throw new TypeError('Illegal constructor.');
        this.ctx =ctx;
        this.axisWidth =axisWidth;
        this.width =width;
        this.height =height;
        this.alignX =alignX;
        this.alignY =alignY;
    };
    init(){
        throw new TypeError('"init" called on an object that does not implement interface MilestoneGraph.');
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface MilestoneGraph.');
    };
};