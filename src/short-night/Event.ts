import {Component,Position,Box} from '@/src/short-night/ShortNightCommon.ts';
import Tipy from '@/src/short-night/Tipy.ts';
import Tag from '@/src/short-night/Tag.ts';
import AxisPoint from '@/src/short-night/AxisPoint.ts';
import SubAxis from '@/src/short-night/SubAxis.ts';

abstract class EventMeta{
    target :Position;
    length :number;
    tagOffset:Position;
    contentText:string;
    endText:string;
    ctx :CanvasRenderingContext2D;
    container :Element;
    tipy:Tipy;
};

export default class Event extends EventMeta implements Component{
    $tag:Tag;
    $axisPoint:AxisPoint;
    $subAxis:SubAxis;
    constructor(meta:EventMeta){
        super();
        Object.assign(this,meta);

        //todo: next, Axis

        this.$subAxis =null;
        this.$tag =null;
        this.$axisPoint =null;
    };
    get x(){return 0};
    get y(){return 0};
    get width(){return 0};
    get height(){return 0};
    init(){};
    draw(){};
};
console.log("Hello");