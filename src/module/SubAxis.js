import SubAxisInterface from '@/src/interface/SubAxis';
import AxisSubline from '@/src/module/AxisSubline';
import Note from '@/src/module/Note';

export default class SubAxis extends SubAxisInterface{
    constructor(){
        super(...arguments);
        this._user_noteOffsetX =this._user_noteOffsetX ||null;
        this._user_noteOffsetY =this._user_noteOffsetY ||null;
        this._user_offset =this._user_offset ||null;
        this._auto_noteOffsetX =null;
        this._auto_noteOffsetY =null;
        this._auto_offset =null;


        this.axisSubline =null;
        this._notes =null;

        this._drawed =false;

        this._init();
        this.format();
    };
    get noteOffsetX(){return this._user_noteOffsetX ||this._auto_noteOffsetX||(this.offset/Math.abs(this.offset))};
    get noteOffsetY(){return this._user_noteOffsetY ||this._auto_noteOffsetY||-1};
    get offset()     {return this._user_offset      ||this._auto_offset     ||20};
    set noteOffsetX(value){this._user_noteOffsetX=value};
    set noteOffsetY(value){this._user_noteOffsetY=value};
    set offset(value)     {this._user_offset=value};
    format(){
        var that =this;
        this.affiliateTo.request({
            name    :'axis-subline',
            canMove :()=>!this._user_offset &&!this._drawed,
            get origin(){return that.axisSubline},
            callback(){
                that._auto_offset =that.axisSubline.offset;
                that._init();
            },
        });
        if(this._notes) this.affiliateTo.request({
            name    :'note',
            canMove :()=>!this._auto_noteOffsetX &&!this._auto_noteOffsetY &&!this._drawed,
            get origin(){return that._notes},
            callback(){
                that._auto_noteOffsetX =that._notes.offsetX;
                that._auto_noteOffsetY =that._notes.offsetY;
                that._init();
            },
        });
    };
    _init(){
        this.axisSubline =new AxisSubline({
            x :this.x ,y:this.y,
            length :this.length,
            offset :this.offset,
            ctx    :this.ctx,
        });

        this._notes =this.endText ?new Note({
            ctx :this.ctx,
            container :this.container,
            text :this.endText,
            offsetX :this.noteOffsetX,
            offsetY :this.noteOffsetY,
            targetX:this.x+this.axisSubline.offset,
            targetY:this.y-this.axisSubline.length,
        }) :null;
    };
    init(){
        this._init();
    };
    draw(){
        this._drawed =true;
        this.axisSubline.draw();
        if(this._notes)this._notes.draw();
    };
};