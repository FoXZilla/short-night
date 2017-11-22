import TagInterface from '@/src/interface/Tag';
import Text from '@/src/module/Text';
import Line from '@/src/module/Line';
import TagBorder from '@/src/module/TagBorder';

export default class Tag extends TagInterface{
    constructor(){
        super(...arguments);

        this.triangleH =10;
        this.padding =5;

        this._auto_offsetX =null;
        this._auto_offsetY =null;
        this._user_offsetX =this._user_offsetX ||null;
        this._user_offsetY =this._user_offsetY ||null;

        this._text =null;
        this._tagBorder =null;
        this._line =null;

        this.init();
    };
    get offsetX(){
        return this._user_offsetX ||this._auto_offsetX;
    };
    get offsetY(){
        return this._user_offsetY ||this._auto_offsetY;
    };
    set offsetX(value){
        this._user_offsetX =value;
    };
    set offsetY(value){
        this._user_offsetY =value;
    };
    get width(){
        return this._tagBorder.width;
    };
    get height(){
        return this._tagBorder.height;
    };
    init(){
        if(this.needGenerateOffset()){
            this.generateOffset();
        };
        this._text =new Text({
            x:this.targetX+this.offsetX,
            y:this.targetY+this.offsetY,
            text:this.text,
            aspectRatio:this.aspectRatio,
            maxWidth:this.maxWidth,
            container:this.container,
        });
        this._text.y -=this._text.height/2;
        if(this.offsetX<0)this._text.x -=this._text.width;
        this._text.init();

        this._tagBorder =new TagBorder({
            width  :this._text.width+this.padding*2,
            height :this._text.height+this.padding*2,
            x :this._text.x-this.padding,
            y :this._text.y-this.padding,
            pointerY :this.targetY,
            ctx:this.ctx,
        });
        if(this.offsetX<0){
            this._tagBorder.pointerX =this._tagBorder.x+this.triangleH+this._tagBorder.width;
        }else{
            this._tagBorder.pointerX =this._tagBorder.x-this.triangleH;
        };
        this._tagBorder.init();

        if(Math.abs(this.offsetX)>50){
            this._line =new Line({
                startX :this._tagBorder.pointerX,
                startY :this._tagBorder.pointerY,
                endX :this.targetX,
                endY :this.targetY,
                ctx :this.ctx,
            });
        };

    };
    generateOffset(){
        this._auto_offsetX =-25;
        this._auto_offsetY =-25;
    };
    needGenerateOffset(){
        return !this._user_offsetX || !this._user_offsetY;
    };
    draw(){
        if(this._line)this._line.draw();
        this._text.draw();
        this._tagBorder.draw();
    };
};