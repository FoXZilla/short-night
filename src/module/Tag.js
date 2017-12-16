import TagInterface from '@/src/interface/Tag';
import Text from '@/src/module/Text';
import Line from '@/src/module/Line';
import TagBorder from '@/src/module/TagBorder';

export default class Tag extends TagInterface{
    constructor({}){
        super(...arguments);

        this.triangleH =10;
        this.padding =5;
        if(typeof this.offsetY!=='number')this.offsetY=-this.triangleH;
        if(typeof this.offsetX!=='number')this.offsetX=-20;

        this._text =null;
        this._tagBorder =null;
        this._line =null;

        this.init();
    };
    get x(){return this._tagBorder.x};
    get y(){return this._tagBorder.y};
    get width(){return this._tagBorder.width};
    get height(){return this._tagBorder.height};
    area(){return [
        [this._tagBorder.x,this._tagBorder.y],
        ...this._tagBorder._area,
    ]};
    init(){
        this._text =new Text({
            x:this.targetX+this.offsetX,
            y:this.targetY+this.offsetY,
            text:this.text,
            aspectRatio:this.aspectRatio,
            maxWidth:this.maxWidth,
            container:this.container,
        });
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
        }else{
            this._line =null;
        };
    };
    draw(){
        if(this._line)this._line.draw();
        this._text.draw();
        this._tagBorder.draw();
    };
};