import NoteInterface from '@/src/interface/Note';
import Line from '@/src/module/Line';
import Text from '@/src/module/Text';
import {isIntersectWithRect,getShorterLine,getLineLength,isIntersect} from '@/src/js/functions';

export default class Note extends NoteInterface{
    constructor({offsetX=50,offsetY=-50}){
        super(...arguments);
        this._line =null;
        this._text =null;
        this.offsetX =offsetX;
        this.offsetY =offsetY;

        this.init();
    };
    get line(){return this._line};
    get textX(){return this._text.x};
    get textY(){return this._text.y};
    get textWidth(){return this._text.width};
    get textHeight(){return this._text.height};
    init(){

        this._text =new Text({
            text :this.text,
            container :this.container,
            x :this.targetX+this.offsetX,
            y :this.targetY+this.offsetY,
            style :Text.SINGLE_STYLE,
        });
        this._text.x -=this._text.width/2;
        this._text.y -=this._text.height/2;
        this._text.init();


        // line between target and singleText
        this._line =this.getTextLinkablePoint()
            .map(([x,y])=>new Line({
                ctx :this.ctx,
                startX :x,
                startY :y,
                endX   :this.targetX,
                endY   :this.targetY,
            })).filter(// remove linkable point which intersected between line and singleText
                line=>!isIntersectWithRect(getShorterLine(line) ,this._text)
            ).sort((line1,line2)=>{// line shorter better
                return getLineLength(line1)-getLineLength(line2)
            })[0]
        ;

    };
    draw(){
        this._line.draw();
        this._text.draw();
    };
    area(){return [
        [this.textX                 , this.textY],
        [this.textX+this.textWidth  , this.textY],
        [this.textX+this.textWidth  , this.textY+this.textHeight],
        [this.textX                 , this.textY+this.textHeight],
    ]};
    getTextLinkablePoint(){
        /*
                      0
            ----------------------
            |                    |
          2 |                    | 3
            |                    |
            ----------------------
                      1
        */
        return [
            [this._text.x+this._text.width/2 ,this._text.y],
            [this._text.x+this._text.width/2 ,this._text.y+this._text.height],
            [this._text.x ,this._text.y+this._text.height/2],
            [this._text.x+this._text.width ,this._text.y+this._text.height/2],
        ];
    };
};