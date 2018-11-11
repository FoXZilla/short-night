import {ConstLevel, SN, ComponentDrawInfo} from "@engine/types";
import {countBox, deepAssign} from "@engine/common/functions";
import Component from "@engine/common/component";

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
        tipy: null as any,
        container: null as any,
        canvas: null as any,
    };

    async apply(){
        if(!this._elt){
            this._elt = this.createElement();
            this.drawInfo.container.appendChild(this._elt);
        }
        if(this.drawInfo.folded){
            this._elt.classList.add('folded');
        }else{
            this._elt.classList.remove('folded');
        }
        Object.assign(
            this._elt.style,
            {
                left: 0,
                top: 0,
                maxWidth: `${this.drawInfo.maxWidth}px`,
                visibility: 'hidden',
            },
        );
        this.drawInfo.box.width = countBox(this._elt).width;
        this.drawInfo.box.height = countBox(this._elt).height;
        Object.assign(
            this._elt.style,
            {
                left: `${this.drawInfo.box.x}px`,
                top: `${this.drawInfo.box.y}px`,
                width: `${this.drawInfo.box.width}px`,
                height: `${this.drawInfo.box.height}px`,
            },
        );
        this.drawInfo.box = countBox(this._elt);
        await super.apply();
    };
    draw(){
        this._elt.style.visibility = null;
        this._drawOnCanvas();
    };
    hide(){
        this._elt.style.visibility = 'hidden';
    };
    _drawOnCanvas(){
        const box = this.drawInfo.box;
        const ctx = this.drawInfo.canvas.getContext('2d')!;

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

    _elt: HTMLElement = null as any;
    _elts: HTMLElement[] = [];
    createElement(){
        const elt = document.createElement('div');
        elt.className = 'event-body';
        this._elts.push(elt);
        if(this.drawInfo.folded){
            elt.innerHTML = `
                <h4 class="foldedText">${this.drawInfo.foldedText || this.drawInfo.title}</h4>
                <h5 class="date">${this.drawInfo.date.toDateString()}</h5>
            `;
        }else{
            elt.innerHTML = `
                <h4 class="title">${this.drawInfo.title}</h4>
                <h5 class="date">${this.drawInfo.date.toDateString()}</h5>
                ${this.drawInfo.contentText ?`<p>${this.drawInfo.contentText}</p>` :''}
            `;
        }
        return elt;
    }

    destroy(){
        super.destroy();
        for(let elt of this._elts){
            if(elt.parentElement){
                elt.parentElement.removeChild(elt);
            }
        }
    };
};
