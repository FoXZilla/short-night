import {SN, ComponentDrawInfo} from "@engine/types";
import {countBox ,mergeBox} from "@engine/common/functions";
import Component from "@engine/common/component";

export interface DrawInfo extends ComponentDrawInfo{
    text?: string;
    length: number,
    offset: number,
    textOffset: number,
    start: {
        x: number,
        y: number,
    },
}

export default class EventAxis extends Component{
    name = SN.EventAxis;

    drawInfo:DrawInfo = {
        length: 0,
        offset: 20,
        textOffset: 15,
        start: {
            x: 0,
            y: 0,
        },

        box: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        },
        tipy: null as any,
        container: null as any,
        canvas: null as any,
    };

    apply(){
        this.drawInfo.box = {
            x: this.drawInfo.start.x,
            y: this.drawInfo.start.y - this.drawInfo.length,
            width: this.drawInfo.offset,
            height: this.drawInfo.length,
        };

        if(!this._elt && this.drawInfo.text){
            this._elt = this.createElement();
            Object.assign(
                this._elt.style,
                {
                    visibility: 'hidden',
                },
            );
            this.drawInfo.container.appendChild(this._elt);
        }
        if(this.drawInfo.text){
            this._elt.innerHTML = this.drawInfo.text;
            Object.assign(
                this._elt.style,
                {
                    left: `${this.drawInfo.start.x + this.drawInfo.offset + this.drawInfo.textOffset}px`,
                    top: `${this.drawInfo.start.y - this.drawInfo.length}px`,
                },
            );

            const eltBox = countBox(this._elt);
            this._elt.style.top = eltBox.y - eltBox.height/2 + 'px';

            this.drawInfo.box = mergeBox(this.drawInfo.box, countBox(this._elt));
        }


        super.apply();
    };
    draw(){
        if(this._elt) this._elt.style.visibility = null;
        if(this.drawInfo.length > 10 || this._elt) this._drawOnCanvas();
    };
    _drawOnCanvas(){
        const ctx = this.drawInfo.canvas.getContext('2d')!;

        // line
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.setLineDash([]);
        ctx.lineWidth = 1;
        ctx.strokeStyle='#000';
        ctx.moveTo(this.drawInfo.start.x, this.drawInfo.start.y);
        ctx.lineTo(
            this.drawInfo.start.x + this.drawInfo.offset,
            this.drawInfo.start.y,
        );
        ctx.lineTo(
            this.drawInfo.start.x + this.drawInfo.offset,
            this.drawInfo.start.y - this.drawInfo.length,
        );
        ctx.stroke();

        // end point
        ctx.beginPath();
        ctx.fillStyle='#000';
        ctx.arc(
            this.drawInfo.start.x + this.drawInfo.offset,
            this.drawInfo.start.y - this.drawInfo.length,
            2,
            0,
            Math.PI*2,
        );
        ctx.fill();

        if(this.drawInfo.text){
            ctx.beginPath();
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 0;
            ctx.setLineDash([4,2]);
            ctx.moveTo(
                this.drawInfo.start.x,
                this.drawInfo.start.y - this.drawInfo.length
            );
            ctx.lineTo(
                this.drawInfo.start.x + this.drawInfo.offset + this.drawInfo.textOffset,
                this.drawInfo.start.y - this.drawInfo.length
            );
            ctx.stroke();
        }
    };

    _elt: HTMLElement = null as any;
    _elts: HTMLElement[] = [];
    createElement(){
        const elt = document.createElement('div');
        elt.className = 'event-axis-endText';
        this._elts.push(elt);
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
