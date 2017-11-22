import AxisInterface from '@/src/interface/Axis';
import AxisLine from '@/src/module/AxisLine';
import Milestone from '@/src/module/Milestone';
import AxisScale from '@/src/module/AxisScale';
import {mount} from '@/src/js/functions';


export default class Axis extends AxisInterface{
    constructor(meta ,{paddingTop=10}={}){
        super(...arguments);
        this._axisLine =null;
        this._milestones =null;
        this._scales =null;
        this.canvas =null;
        this.paddingTop =paddingTop;
        this._el =null;

        this.init();
    };
    get alignX(){
        return this.canvas.width/2;
    };
    get startY(){
        return this.paddingTop;
    };
    get height(){
        return this._axisLine.length;
    };
    init(){
        this.createEl();

        this._axisLine =new AxisLine({
            ctx :this.canvas.getContext('2d'),
            length :this.length,
            width :this.width,
            x :this.canvas.width/2,
            y :this.paddingTop,
        });
        this._axisLine.x -=this._axisLine.width/2;//align center
        this._axisLine.init();

        this._milestones =this.milestones.map(({text,position})=>new Milestone({
            axisWidth :this.width,
            alignX :this.alignX,
            alignY :position*this.length+this.paddingTop,//untreated
            ctx :this.canvas.getContext('2d'),
            text,
            container:this._el,
        })).sort((m1,m2)=>m1.alignY-m2.alignY);

        this._scales =this.scales.map(scale=>new AxisScale({
            ctx :this.canvas.getContext('2d'),
            axisWidth :this.width,
            x :this.alignX,
            y :scale*this.length+this.paddingTop
        })).sort((s1,s2)=>s1.y-s2.y);


        // the milestones should not detain Axis length and Scale compute

        // re-compute Scale
        for(let scale of this._scales){
            let beforeIndex =this._milestones.findIndex(m=>m.alignY>scale.y);
            if(!beforeIndex)continue;
            if(!~beforeIndex)beforeIndex=this._milestones.length;
            // hide scale-point when it very adjacent milestone
            if(Math.abs(this._milestones[beforeIndex-1].alignY-scale.y)<0.001){//coincide with milestone
                scale.y=-9999999;//hidden scale point
            };
            let offset =this._milestones
                .slice(0 ,beforeIndex)
                .map(m=>m.height)
                .reduce((m1,m2)=>m1+m2);
            ;
            offset -=this._milestones[beforeIndex-1].height/2;
            scale.y +=offset;
        };

        // add axis-line length
        var extraAddLength =0;
        for(let [index,milestone] of this._milestones.entries()){
            if(index ===0)continue;
            extraAddLength +=milestone.height;
            milestone.alignY +=extraAddLength;
            milestone.init();
        };
        this._axisLine.length +=extraAddLength;
        this._axisLine.init();

    };
    createEl(){
        if(this._el){
            this._el.parentNode.removeChild(this._el);
        };
        this._el =document.createElement('div');
        this._el.style.position ='absolute';
        this._el.style.visibility ='hidden';
        this._el.style.left =-999999+'px';
        this._el.style.top  =-999999+'px';

        this.canvas =this._el.appendChild(document.createElement('canvas'));
        this.canvas.width =200;
        this.canvas.height =this.length+this.paddingTop+200;

        document.body.appendChild(this._el);
    };
    mountEl(){
        this._el.style.position ='relative';
        this._el.style.visibility =null;
        this._el.style.left =null;
        this._el.style.top  =null;
        this.el =mount(this.el ,this._el);
    };
    draw(){
        this.mountEl();
        this._axisLine.draw();
        this._milestones.forEach(m=>m.draw());
        this._scales.forEach(m=>m.draw());
    };
};