import {ComponentDrawInfo} from "@engine/types";
import Component from "@engine/common/component";
import {SN} from "@engine/common/config";

export interface DrawInfo extends ComponentDrawInfo{}

export default class AxisScale extends Component{
    name = SN.AxisScale;

    drawInfo:DrawInfo = {
        box: {
            x: 0,
            y: 0,
            width: 10,
            height: 6,
        },
    };

    draw(){
        const box = this.drawInfo.box;
        const ctx = this.canvas.getContext('2d')!;

        ctx.fillStyle='rgba(255, 255, 255, 0.8)';
        ctx.fillRect(
            box.x,
            box.y,
            box.width,
            box.height,
        );

        return super.draw();
    };

    static is(comp:Component) :comp is AxisScale{
        return comp.name === SN.AxisScale;
    }
};
