import {SN, ComponentDrawInfo} from "@engine/types";
import {countBox} from "@engine/common/functions";
import Component from "@engine/common/component";

export interface DrawInfo extends ComponentDrawInfo{
    text: string;
    borderWidth: number;
}

export default class AxisMilestone extends Component{
    name = SN.AxisMilestone;

    drawInfo:DrawInfo = {
        text: '0_o',
        borderWidth: 4,

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
        if(!this._elt) {
            this._elt = this.createElement();
            this.drawInfo.container.appendChild(this._elt);
        }

        this._elt.innerHTML = this.drawInfo.text;
        Object.assign(
            this._elt.style,
            {
                left: `${this.drawInfo.box.x}px`,
                top: `${this.drawInfo.box.y}px`,
                visibility: 'hidden',
            },
        );

        const box = countBox(this._elt);
        this.drawInfo.box.width = box.width;
        this.drawInfo.box.height = box.height;

        super.apply();
    };
    draw(){
        this._elt.style.visibility = null;
        this._drawOnCanvas();
    };
    _drawOnCanvas(){
        const box = this.drawInfo.box;
        const ctx = this.drawInfo.canvas.getContext('2d')!;

        ctx.fillStyle='#000';
        ctx.fillRect(
            box.x,
            box.y,
            box.width,
            box.height,
        );

        ctx.fillStyle='#fff';
        ctx.fillRect(
            box.x+1,
            box.y+1,
            box.width-2,
            box.height-2,
        );

        ctx.fillStyle='#000';
        ctx.fillRect(
            box.x+1+this.drawInfo.borderWidth,
            box.y+1+this.drawInfo.borderWidth,
            box.width-2-this.drawInfo.borderWidth*2,
            box.height-2-this.drawInfo.borderWidth*2
        );
    };

    _elt: HTMLElement = null as any;
    _elts: HTMLElement[] = [];
    createElement(){
        const elt = document.createElement('div');
        elt.className = 'axis-milestone';
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
