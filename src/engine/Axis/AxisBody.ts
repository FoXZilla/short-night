import { Box, ComponentConstructorInfo, ComponentDrawInfo } from '@engine/types';
import Component from '@engine/common/Component';
import { SN } from '@engine/common/config';

export interface DrawInfo extends ComponentDrawInfo{
    box: Readonly<Box>;
    length :number;
}

export default abstract class AxisBody extends Component{
    name = SN.AxisBody;

    constructor(props:ComponentConstructorInfo) {
        super(props);
        this.ext.onConstruct(this);
    }

    drawInfo: DrawInfo = {
        box: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        },
        length: 0,
    };

    async apply() {
        this.drawInfo.box = {
            x: this.grid.axisStart.x - this.grid.axisWidth / 2,
            y: this.grid.axisStart.y,
            width: this.grid.axisWidth,
            height: this.drawInfo.length,
        };
        return super.apply();
    }

    static is(comp:Component) :comp is AxisBody {
        return comp.name === SN.AxisBody;
    }
}
