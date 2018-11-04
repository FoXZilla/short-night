import Component from "@engine/common/component";
import {ComponentDrawInfo, SN} from "@engine/types";

export interface DrawInfo extends ComponentDrawInfo{};

export default class EventMark extends Component{
    name = SN.EventMark;

    drawInfo:DrawInfo = {
        box: {
            x: 0,
            y: 0,
            width: 12,
            height: 12,
        },
        tipy: null as any,
        container: null as any,
        canvas: null as any,
    };

    draw(){
        const box = this.drawInfo.box;
        const ctx = this.drawInfo.canvas.getContext('2d')!;

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
    };

};
