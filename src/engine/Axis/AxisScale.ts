import { Box, ComponentDrawInfo, Coordinate } from '@engine/types';
import Component from '@engine/common/Component';
import { SN } from '@engine/common/config';
import { DrawInfo as AxisBodyDrawInfo } from '@engine/Axis/AxisBody';

export interface DrawInfo extends ComponentDrawInfo{
    box: Readonly<Box>;
    bodyDrawInfo: Readonly<AxisBodyDrawInfo>;
    alignY: number;
    height: number;
}

export default abstract class AxisScale extends Component{
    name = SN.AxisScale;

    drawInfo:DrawInfo = {
        bodyDrawInfo: {} as any,
        alignY: 0,
        height: 0,

        box: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        },
    };

    async apply() {
        this.drawInfo.box = {
            x: this.drawInfo.bodyDrawInfo.box.x,
            y: this.drawInfo.alignY - this.drawInfo.height / 2,
            height: this.drawInfo.height,
            width: this.drawInfo.bodyDrawInfo.box.width,
        };
        return super.apply();
    }

    static is(comp:Component) :comp is AxisScale {
        return comp.name === SN.AxisScale;
    }
}
