import {ComponentDrawInfo} from "@engine/types";
import {countBox ,mergeBox} from "@engine/common/functions";
import Component from "@engine/common/component";
import {SN} from "@engine/common/config";

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
    };

    apply(){
        this.drawInfo.box = {
            x: this.drawInfo.start.x,
            y: this.drawInfo.start.y - this.drawInfo.length,
            width: this.drawInfo.offset,
            height: this.drawInfo.length,
        };

        if(!this.element && this.drawInfo.text){
            this.element = EventAxis.createElement();
            this.container.appendChild(this.element);
        } else if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }

        if(this.element && this.drawInfo.text){
            this.element.innerHTML = this.drawInfo.text;
            Object.assign(
                this.element.style,
                {
                    left: `${this.drawInfo.start.x + this.drawInfo.offset + this.drawInfo.textOffset}px`,
                    top: `${this.drawInfo.start.y - this.drawInfo.length}px`,
                    visibility: 'hidden',
                },
            );

            const eltBox = countBox(this.element);
            this.element.style.top = eltBox.y - eltBox.height/2 + 'px';

            this.drawInfo.box = mergeBox(this.drawInfo.box, countBox(this.element));
        }

        return super.apply();

    };

    draw(){
        if(this.drawInfo.length > 10 || this.element) this._drawOnCanvas();
        return super.draw();
    };
    _drawOnCanvas(){
        const ctx = this.canvas.getContext('2d')!;

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

    static createElement(){
        const elt = document.createElement('div');
        elt.className = 'event-axis-endText';
        elt.style.visibility = 'hidden';
        return elt;
    }

    static is(comp:Component) :comp is EventAxis{
        return comp.name === SN.EventAxis;
    }
};
