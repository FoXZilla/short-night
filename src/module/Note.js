import NoteInterface from '@/src/interface/Note';
import Line from '@/src/module/Line';
import SingleText from '@/src/module/SingleText';
import {isIntersectWithRect,getShorterLine,getLineLength} from '@/src/js/functions';

// automatic collision avoidance system
// todo: unfinished
var CA ={
    request({width,height,x,y},options){
        return {
            x:x+~~(50+150*Math.random())*(Math.random()>0.5?1:-1),
            y:y+~~(50+150*Math.random())*(Math.random()>0.5?1:-1),
        };
    },
    restore(){},
};

export default class Note extends NoteInterface{
    constructor(){
        super(...arguments);

        this.singleText =this;
        Object.defineProperty(
            this,
            'line',
            {value:null ,writable:true}
        );

        this.init();
    };
    get textX(){return this.singleText.x};
    get textY(){return this.singleText.y};
    init(){
        if(this.singleText){
            CA.restore({
                width  :this.singleText.width,
                height :this.singleText.height,
                x :this.targetX,
                y :this.targetY,
            });
        };

        this.singleText =new SingleText({
            text :this.text,
            container :this.container,
        });
        // apply an area from automatic-collision-avoidance-system to show singleText
        0,{x:this.singleText.x ,y:this.singleText.y} =CA.request({
            width  :this.singleText.width,
            height :this.singleText.height,
            x :this.targetX,
            y :this.targetY,
        });
        this.singleText.init();

        // line between target and singleText
        this.line =this.getTextLinkablePoint()
            .map(([x,y])=>new Line({
                ctx :this.ctx,
                startX :x,
                startY :y,
                endX   :this.targetX,
                endY   :this.targetY,
            })).filter(// remove linkable point which intersected between line and singleText
                line=>!isIntersectWithRect(getShorterLine(line) ,this.singleText)
            ).sort((line1,line2)=>{// line shorter better
                return getLineLength(line1)-getLineLength(line2)
            })[0]
        ;
    };
    draw(){
        this.line.draw();
        this.singleText.draw();
    };
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
            [this.singleText.x+this.singleText.width/2 ,this.singleText.y],
            [this.singleText.x+this.singleText.width/2 ,this.singleText.y+this.singleText.height],
            [this.singleText.x ,this.singleText.y+this.singleText.height/2],
            [this.singleText.x+this.singleText.width ,this.singleText.y+this.singleText.height/2],
        ];
    };
};