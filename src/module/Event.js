import EventInterface from '@/src/interface/Event';
import Tag from '@/src/module/Tag';
import AxisPoint from '@/src/module/AxisPoint';
import SubAxis from '@/src/module/SubAxis';

export default class Event extends EventInterface{
    constructor(){
        super(...arguments);
        this._subAxis =null;
        this._tag =null;
        this._axisPoint =null;


        this._user_tagOffsetX =this._user_tagOffsetX ||null;
        this._user_tagOffsetY =this._user_tagOffsetY ||null;
        this._auto_tagOffsetX =null;
        this._auto_tagOffsetY =null;

        this._drawed =false;

        this.format();
        this.init();
    };
    get tagOffsetX(){return this._user_tagOffsetX ||this._auto_tagOffsetX}// ||-25};
    get tagOffsetY(){return this._user_tagOffsetY ||this._auto_tagOffsetY}// ||-10};
    set tagOffsetX(value){this._user_tagOffsetX =value};
    set tagOffsetY(value){this._user_tagOffsetY =value};
    format(){
        var that =this;
        this.affiliateTo.request({
            name :'tag',
            get origin(){return that._tag},
            canMove(){return !that._drawed &&!that._user_tagOffsetX &&!that._user_tagOffsetY},
            callback(){
                this._auto_tagOffsetX =this._tag.offsetX;
                this._auto_tagOffsetY =this._tag.offsetY;
                this.init();
            },
        });
    };
    init(){
        this._axisPoint =new AxisPoint({
            ctx :this.ctx,
            x :this.targetX,
            y :this.targetY,
            radius :3,
        });
        this._tag =new Tag({
            ctx :this.ctx,
            container :this.container,
            text :this.contentText,
            targetX :this._axisPoint.x,
            targetY :this._axisPoint.y,
            affiliateTo :this.affiliateTo,
            offsetX :this.tagOffsetX,
            offsetY :this.tagOffsetY,
        });
        this._subAxis =this.length ?new SubAxis({
            endText :this.endText,
            x :this._tag.targetX,
            y :this._tag.targetY,
            length :this.length,
            ctx :this.ctx,
            container :this.container,
            affiliateTo :this.affiliateTo,
        }) :null;
    };
    draw(){
        //todo: add a test to that prevent call draw repeat for every component
        this._drawed =true;
        this._tag.draw();
        this._axisPoint.draw();
        if(this._subAxis) this._subAxis.draw();
    };
};