export default class Axis{
    /**
     * @param {Array<Number>} scales - every item should <0
     * @param {Array<MilestoneData>} milestones
     * @property {Number} MilestoneData.position <0
     * @property {String} MilestoneData.text
     * */

    constructor({el,length,width,scales,milestones}){
        if(new.target===Axis)throw new TypeError('Illegal constructor.');
        this.el =el;
        this.length =length;
        this.width  =width;
        this.height =null;
        this.alignX =null;
        this.startY =null;
        this.scales =scales;
        this.milestones =milestones;
    };
    init(){
        throw new TypeError('"init" called on an object that does not implement interface Axis.');
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface Axis.');
    };
};