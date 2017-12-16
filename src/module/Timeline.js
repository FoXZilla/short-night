import Axis from '@/src/module/Axis';
import Event from '@/src/module/Event';
import {mount} from '@/src/js/functions';
import Family from '@/src/module/Family';

export default class Timeline{
    constructor({events,el,affiliateTo}){
        this.events =events;
        this.el =el;
        this.affiliateTo =affiliateTo;

        this._events=null;
        this._el=null;
        this.axis =null;
        this.startDate =null;
        this.endDate =null;

        this.init();

        this.affiliateTo.exec();
    };
    init(){
        this._events=Array.from(this.events);
        this._events.sort((e1,e2)=>e1.date-e2.date);
        this.startDate =this._events[0].date;
        {
            let option1 =this._events[this._events.length-1].date;
            let option2 =Math.max(...this._events.filter(e=>e.endDate).map(e=>e.endDate)) ||-1;
            this.endDate =new Date(option1>option2 ?option1 :option2);
        };

        var axisLength =this._events.length *80;

        this.createEl();
        this.axis =new Axis({
            el :this._el.appendChild(document.createElement('div')),
            length:axisLength,
            affiliateTo :this.affiliateTo,
            width :5,
            scales:(()=>{
                const step =1000*60*60*24*30*3;

                var result =[];

                var date =new Date(this.startDate);
                date.setDate(1);
                date.setHours(0,0,0,0);
                while(date <this.endDate){
                    date =new Date(+date+step);
                    result.push(new Date(+date));
                };
                result =result.map(item=>(item-this.startDate)/(this.endDate-this.startDate));
                return result;
            })(),
        });

        {
            let eventCanvas =document.createElement('canvas');
            eventCanvas.width =parseFloat(getComputedStyle(this.el).width);
            eventCanvas.height=this.axis.height;
            eventCanvas.style.position ='absolute';
            eventCanvas.style.top =0;
            eventCanvas.style.left=0;
            this._el.appendChild(eventCanvas);

            let eventContainer =document.createElement('div');
            eventContainer.style.width =eventCanvas.width+'px';
            eventContainer.style.height=eventCanvas.height+'px';
            eventContainer.style.position ='absolute';
            eventContainer.style.top =0;
            eventContainer.style.left=0;
            this._el.appendChild(eventContainer);

            this._events =this._events.map(e=>new Event({
                targetX :this.axis.alignX,
                targetY :
                    this.axis.startY
                    + this.axis.length*(
                        1-(e.date-this.startDate)/(this.endDate-this.startDate)
                    )
                ,
                length :(()=>{
                    let length =this.axis.length*((e.endDate-e.date)/(this.endDate-this.startDate));
                    if(length<50)return null;
                    return length;
                })(),
                contentText :`
                    <span>${e.date.toLocaleDateString()}</span>
                    <h4>${e.title}</h4>
                `,
                endText :e.endText ||null,
                ctx :eventCanvas.getContext('2d'),
                container :eventContainer,
                affiliateTo :this.affiliateTo,
            }));


        }

    };
    createEl(){
        this._el =this.el.cloneNode();
        this._el.style.visibility ='hidden';
        this._el.style ={
            position :'absolute',
            visibility :'hidden',//magic
            left :'-999999px',
            top  :'-999999px',
        };
        this.el.parentNode.appendChild(this._el);
    };
    draw(){
        this.el =this.el.parentNode.replaceChild(this._el,this.el);
        this.axis.draw();
        this._events.forEach(e=>e.draw());
    };
};

export class TimelineEvent{
    constructor({title,date,picture=null,text=null,endDate=null,endNote=null}){};
};