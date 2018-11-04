import {ComponentDrawInfo, SN} from "@engine/types";
import Component from "@engine/common/component";

export interface DrawInfo extends ComponentDrawInfo{};

export default class AxisBody extends Component{
    name = SN.AxisBody;

    drawInfo: DrawInfo = {
        box: {
            x: 0,
            y: 0,
            width: 10,
            height: 1200,
        },
        tipy: null as any,
        container: null as any,
        canvas: null as any,
    };

    draw(){
        const box = this.drawInfo.box;
        const ctx = this.drawInfo.canvas.getContext('2d')!;

        ctx.fillStyle='#000';
        ctx.fillRect(
            box.x,
            box.y,
            box.width,
            box.height,
        );

    };
};
