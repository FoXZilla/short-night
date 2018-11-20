import Component from "@engine/common/component";
import {ComponentDrawInfo} from "@engine/types";
import {SN} from "@engine/common/config";

export interface DrawInfo extends ComponentDrawInfo{}

export default class EventMark extends Component{
    name = SN.EventMark;

    drawInfo:DrawInfo = {
        box: {
            x: 0,
            y: 0,
            width: 12,
            height: 12,
        },
    };

    draw(){
        const box = this.drawInfo.box;
        const ctx = this.canvas.getContext('2d')!;

        ctx.beginPath();
        ctx.fillStyle='#f00';
        ctx.arc(
            box.x + box.width/2,
            box.y + box.height/2,
            box.width / 2,
            0,
            Math.PI*2,
        );
        ctx.fill();

        return super.draw();
    };


    static is(comp:Component) :comp is EventMark{
        return comp.name === SN.EventMark;
    }
};
