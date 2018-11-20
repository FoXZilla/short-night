import {ComponentDrawInfo} from "@engine/types";
import {countBox} from "@engine/common/functions";
import Component from "@engine/common/component";
import {SN} from "@engine/common/config";

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
    };

    apply(){
        if(!this.element) {
            this.element = AxisMilestone.createElement();
            this.container.appendChild(this.element);
        }

        this.element.innerHTML = this.drawInfo.text;
        Object.assign(
            this.element.style,
            {
                left: `${this.drawInfo.box.x}px`,
                top: `${this.drawInfo.box.y}px`,
                visibility: 'hidden',
            },
        );

        const box = countBox(this.element);
        this.drawInfo.box.width = box.width;
        this.drawInfo.box.height = box.height;

        return super.apply();
    };

    draw(){
        this._drawOnCanvas();
        return super.draw();
    };

    private _drawOnCanvas(){
        const box = this.drawInfo.box;
        const ctx = this.canvas.getContext('2d')!;

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

    static createElement(){
        const elt = document.createElement('div');
        elt.className = 'axis-milestone';
        elt.style.visibility = 'hidden';
        return elt;
    }

    static is(comp:Component) :comp is AxisMilestone{
        return comp.name === SN.AxisMilestone;
    }
};
