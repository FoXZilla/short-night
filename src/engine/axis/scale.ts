import {ComponentDrawInfo, SN} from "@engine/types";
import Component from "@engine/common/component";

export interface DrawInfo extends ComponentDrawInfo{};

export default class AxisScale extends Component{
    name = SN.AxisScale;

    drawInfo:DrawInfo = {
        box: {
            x: 0,
            y: 0,
            width: 10,
            height: 6,
        },
        tipy: null as any,
        container: null as any,
        canvas: null as any,
    };

    draw(){
        const box = this.drawInfo.box;
        const ctx = this.drawInfo.canvas.getContext('2d')!;

        ctx.fillStyle='rgba(255, 255, 255, 0.8)';
        ctx.fillRect(
            box.x,
            box.y,
            box.width,
            box.height,
        );
    };
};
