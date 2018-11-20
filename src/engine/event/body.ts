import {ConstLevel, ComponentDrawInfo} from "@engine/types";
import {countBox, deepAssign} from "@engine/common/functions";
import Component from "@engine/common/component";
import {SN} from "@engine/common/config";

export interface DrawInfo extends ComponentDrawInfo{
    target: {
        x: number,
        y: number,
    };
    maxWidth: number,

    date: Date,
    title: string;
    contentText?: string;

    floated: boolean,

    folded: boolean;
    foldedText?: string;
}

export default class EventBody extends Component{
    name = SN.EventBody;

    element :HTMLElement = null as any;

    drawInfo:DrawInfo = {
        target: {
            x: 0,
            y: 0,
        },
        maxWidth: 300,

        date: null as any,
        title: 'untitled',

        floated: false,
        folded: false,

        box: {
            x: 0,
            y: 0,
            width: 300,
            height: 0,
        },
    };

    resetElement(){
        if(this.drawInfo.folded){ // TODO: reconstruct here
            this.element.innerHTML = `
                <h4 class="foldedText">${this.drawInfo.foldedText || this.drawInfo.title}</h4>
                <h5 class="date">${this.drawInfo.date.toDateString()}</h5>
            `;
        }else{
            this.element.innerHTML = `
                <h4 class="title">${this.drawInfo.title}</h4>
                <h5 class="date">${this.drawInfo.date.toDateString()}</h5>
                ${this.drawInfo.contentText ?`<p>${this.drawInfo.contentText}</p>` :''}
            `;
        }

        if(this.drawInfo.folded){
            this.element.classList.add('folded');
        }else{
            this.element.classList.remove('folded');
        }
        
        Object.assign(
            this.element.style,
            {
                left: 0,
                top: 0,
                width: null,
                height: null,
                maxWidth: `${this.drawInfo.maxWidth}px`,
                visibility: 'hidden',
            },
        );
    }
    syncBox(){

        this.drawInfo.box.width = countBox(this.element).width;
        this.drawInfo.box.height = countBox(this.element).height;
        Object.assign(
            this.element.style,
            {
                left: `${this.drawInfo.box.x}px`,
                top: `${this.drawInfo.box.y}px`,
                width: `${this.drawInfo.box.width}px`,
                height: `${this.drawInfo.box.height}px`,
            },
        );
        this.drawInfo.box = countBox(this.element);

    }
    async apply(){
        if(!this.element) {
            this.element = EventBody.createElement();
            this.container.appendChild(this.element);
        }
        
        this.resetElement();
        this.syncBox();
        
        return super.apply();
    };
    draw(){
        this._drawOnCanvas();
        
        return super.draw();
    };
    _drawOnCanvas(){
        const box = this.drawInfo.box;
        const ctx = this.canvas.getContext('2d')!;

        // border
        ctx.fillStyle='#000';
        ctx.fillRect(
            box.x,
            box.y,
            box.width,
            box.height,
        );

        // background
        ctx.fillStyle='#fff';
        ctx.fillRect(
            box.x+1,
            box.y+1,
            box.width-2,
            box.height-2,
        );

        if(this.drawInfo.folded){
            ctx.fillStyle='#000';
            ctx.fillRect(
                box.x+2,
                box.y+2,
                box.width-4,
                box.height-4,
            );
            ctx.fillStyle='#fff';
            ctx.fillRect(
                box.x+3,
                box.y+3,
                box.width-6,
                box.height-6,
            );
        }

        // line
        ctx.strokeStyle='#000';
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.lineWidth = 1;
        ctx.moveTo(this.drawInfo.target.x, this.drawInfo.target.y);
        ctx.lineTo(box.x + box.width, this.drawInfo.target.y);
        ctx.stroke();
    };

    
    static createElement(){
        const elt = document.createElement('div');
        elt.className = 'event-body';
        elt.style.visibility = 'hidden';
        return elt;
    }

    static is(comp:Component) :comp is EventBody{
        return comp.name === SN.EventBody;
    }
};
