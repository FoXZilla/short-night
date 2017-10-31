import TagInterface from '@/src/interface/Tag';
import Text from '@/src/module/Text';
import Line from '@/src/module/Line';
import TagBorder from '@/src/module/TagBorder';

export default class Tag extends TagInterface{
    constructor(){
        super(...arguments);

        this.triangleH =10;
        this.padding =5;

        this._text =null;
        this._tagBorder =null;
        this._line =null;

        this.init();
    };
    init(){
        this._text =new Text({
            x:this.targetX+this.offsetX,
            y:this.targetY+this.offsetY,
            text:this.text,
            maxWidth:this.maxWidth,
            container:this.container,
        });
        this._text.y -=this._text.height/2;
        this._text.init();

        this._tagBorder =new TagBorder({
            width  :this._text.width+this.padding*2,
            height :this._text.height+this.padding*2,
            x :this._text.x-this.padding,
            y :this._text.y-this.padding,
            pointerY :this.targetY,
            ctx:this.ctx,
        });
        this._tagBorder.pointerX =this._tagBorder.x-this.triangleH;
        this._tagBorder.init();

    };
    draw(){
        this._text.draw();
        this._tagBorder.draw();
    };
};