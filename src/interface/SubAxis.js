export default class SubAxis{
    /**
     * @param {Array<NoteInfo>} notes
     * @property {Number} NoteInfo.position < 1
     * @property {String} NoteInfo.text
     * */
    constructor({notes=[],x,y,length,offset,ctx,container}){
        this.notes =notes;
        this.x =x;
        this.y =y;
        this.length =Math.abs(length);
        this.offset =offset;
        this.ctx    =ctx;
        this.container =container;
    };
    init(){
        throw new TypeError('"init" called on an object that does not implement interface SubAxis.');
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface SubAxis.');
    };
};