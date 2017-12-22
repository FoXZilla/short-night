import {Component} from '@/src/short-night/ShortNightCommon.ts';
import * as Util from '@/src/short-night/util.ts';
import Tipy from '@/src/short-night/Tipy.ts';
import Event from '@/src/short-night/Event.ts';
import Axis from '@/src/short-night/Axis';

abstract class TimelineMeta{
    el :string|HTMLElement;
    events :[TimelineEvent];
    tipy :Tipy;
    axisLength? :number;
};
interface TimelineEvent{
    date     :Date,
    title    :string,
    text?    :string,
    endDate? :Date,
    endText? :string,
};

export default class Timeline extends TimelineMeta{
    $events   :[Event];
    $axis     :Axis;
    startDate :Date;
    endDate   :Date;
    constructor(meta:TimelineMeta){
        super();
        Object.assign(this,meta);
        this.$events=null;
        this.$axis =null;
        this.el =Util.getEl(this.el);

        this.startDate =null;
        this.endDate =null;

        Util.createTrasprop(this,'axisLength',this.events.length*80);

        // this.init();
        // this.tipy.walkOn();
    };
    private init(){
        this.initEl();

        var events =Array.from(this.events).sort(
            (e1,e2)=>Number(e1.date)-Number(e2.date)
        );
        this.startDate =events[0].date;
        this.endDate =function(events){
            let option1 =Number(events[events.length-1].date);
            let option2 =Math.max(
                ...events
                    .filter(e=>('endDate' in e))
                    .map(e=>Number(e.endDate))
            )||-1;
            return new Date(Math.max(option1,option2));
        }(events);

        // this.$events =events.map(e=>new Event(e));


    };
    draw(){
    };
    private _el :HTMLElement;
    el :HTMLElement;
    private initEl(){
        this._el =function(element:HTMLElement){
            element.style.visibility ='hidden';
            element.style.position ='absolute';
            element.style.left ='-999999px';
            element.style.top ='-999999px';
            return element;
        }(this.el.cloneNode() as HTMLElement);
        this.el.parentNode.appendChild(this._el);


        this._el.appendChild(function(width:number,height?:number){
            let eventCanvas =document.createElement('canvas') as HTMLCanvasElement;
            eventCanvas.width =width;
            eventCanvas.height=height;
            eventCanvas.style.position ='absolute';
            eventCanvas.style.top ='0';
            eventCanvas.style.left='0';
            return eventCanvas;
        }(parseFloat(getComputedStyle(this.el).width) ,this.$axis.height));

    };
    // meta
    private _auto_axisLength:number;
    private _user_axisLength:number;
};
