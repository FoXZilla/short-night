import AxisInterface from '@/src/interface/Axis';
import AxisLine from '@/src/module/AxisLine';
import Milestone from '@/src/module/Milestone';
import AxisScale from '@/src/module/AxisScale';
import {mount} from '@/src/js/functions';


export default class Axis extends AxisInterface{
    constructor(...args){
        super(...args);
        this._axisLine =null;

        this.el =mount(this.el ,document.createElement('div'));
        this.el.style.position ='relative';
        this.canvas =this.el.appendChild(document.createElement('canvas'));
        this.canvas.width =200;
        const PaddingTop =10;
        this.canvas.height =this.length+PaddingTop+200;

        Object.defineProperty(this ,'alignX',{get:()=>this.canvas.width/2});
        Object.defineProperty(this ,'alignY',{get:()=>PaddingTop});

        this._axisLine =new AxisLine({
            ctx :this.canvas.getContext('2d'),
            length :this.length,
            width :this.width,
            x :this.canvas.width/2,
            y :PaddingTop,
        });
        this._axisLine.x -=this._axisLine.width/2;//align center

        this.milestones =this.milestones.map(({text,position})=>new Milestone({
            axisWidth :this.width,
            alignX :this.alignX,
            alignY :position*this.length+PaddingTop,//untreated
            ctx :this.canvas.getContext('2d'),
            text,
            container:this.el,
        })).sort((m1,m2)=>m1.alignY-m2.alignY);
        this.milestones.forEach(m=>m.init());
        this.scales =this.scales.map(scale=>new AxisScale({
            ctx :this.canvas.getContext('2d'),
            axisWidth :this.width,
            x :this.alignX,
            y :scale*this.length+PaddingTop
        })).sort((s1,s2)=>s1.y-s2.y);
        // the milestones should not detain Axis length
        for(let scale of this.scales){
            let beforeIndex =this.milestones.findIndex(m=>m.alignY>scale.y);
            if(!beforeIndex)continue;
            if(!~beforeIndex)beforeIndex=this.milestones.length;
            // hide scale-point when it very adjacent milestone
            if(Math.abs(this.milestones[beforeIndex-1].alignY-scale.y)<0.001)scale.y=-9999999;
            let offset =this.milestones
                .slice(0 ,beforeIndex)
                .map(m=>m.height)
                .reduce((m1,m2)=>m1+m2);
            ;
            offset -=this.milestones[beforeIndex-1].height/2;
            scale.y +=offset;
        };
        var addLength =0;
        for(let [index,milestone] of this.milestones.entries()){
            if(index ===0)continue;
            addLength +=milestone.height;
            milestone.alignY +=addLength;
            milestone.init();
        };
        this._axisLine.length +=addLength;
    };
    draw(){
        this._axisLine.draw();
        this.milestones.forEach(m=>m.draw());
        this.scales.forEach(m=>m.draw());
    };
};