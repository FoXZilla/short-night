import {ComponentDrawInfo} from "@engine/types";
import Component from "@engine/common/component";
import {SN} from "@engine/common/config";

export interface DrawInfo extends ComponentDrawInfo{}

export default class AxisBody extends Component{
    name = SN.AxisBody;

    drawInfo: DrawInfo = {
        box: {
            x: 0,
            y: 0,
            width: 10,
            height: 1200,
        },
    };

    draw(){
        const box = this.drawInfo.box;
        const ctx = this.canvas.getContext('2d')!;

        ctx.fillStyle='#000';
        ctx.fillRect(
            box.x,
            box.y,
            box.width,
            box.height,
        );

        return super.draw();
    };

    static is(comp:Component) :comp is AxisBody{
        return comp.name === SN.AxisBody;
    }
};
