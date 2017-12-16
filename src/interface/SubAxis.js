export default class SubAxis{
    /**
     * @param {Array<NoteInfo>} notes
     * @property {Number} NoteInfo.position < 1
     * @property {String} NoteInfo.text
     * */
    constructor({endText,x,y,length,offset,noteOffsetX,noteOffsetY,ctx,container,affiliateTo}){
        this.endText =endText;
        this.x =x;
        this.y =y;
        this.length =Math.abs(length);
        this.offset =offset;
        this.noteOffsetX =noteOffsetX;
        this.noteOffsetY =noteOffsetY;
        this.ctx    =ctx;
        this.container =container;
        this.affiliateTo =affiliateTo;
    };
    init(){
        throw new TypeError('"init" called on an object that does not implement interface SubAxis.');
    };
    draw(){
        throw new TypeError('"draw" called on an object that does not implement interface SubAxis.');
    };
};