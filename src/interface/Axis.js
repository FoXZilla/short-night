export default class Axis{
    /**
     * @param {Array<Number>} scales - every item should <0
     * @param {Array<MilestoneData>} milestones
     * @property {Number} MilestoneData.position <0
     * @property {String} MilestoneData.text
     * */

    constructor({el,length,width,scales=[],milestones=[],affiliateTo}){
        if(new.target===Axis)throw new TypeError('Illegal constructor.');
        this.el =el;
        this.length =length;
        this.width  =width;
        this.scales =scales;
        this.affiliateTo =affiliateTo;
        this.milestones =milestones;
    };
    get height(){
        throw new TypeError('"height" read on an object that does not implement interface Axis.')
    };
    get alignX(){
        throw new TypeError('"alignX" read on an object that does not implement interface Axis.')
    };
    get startY(){
        throw new TypeError('"startY" read on an object that does not implement interface Axis.')
    };
    init(){
        throw new TypeError('"init" called on an object that does not implement interface Axis.');
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface Axis.');
    };
};