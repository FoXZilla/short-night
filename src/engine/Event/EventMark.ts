import Component from '@engine/common/Component';
import { ComponentConstructorInfo, ComponentDrawInfo, Coordinate } from '@engine/types';
import { SN } from '@engine/common/config';
import Axis from '@engine/Axis';

export interface DrawInfo extends ComponentDrawInfo{
    axisBodyDrawInfo: Readonly<Axis['drawInfo']>;
    target: Coordinate;
    width: number;
    height?: number;
}

export default abstract class EventMark extends Component{
    name = SN.EventMark;

    constructor(props:ComponentConstructorInfo) {
        super(props);
        this.ext.onConstruct(this);
    }

    drawInfo:DrawInfo = {
        axisBodyDrawInfo: {} as any,
        box: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        },
        target: {
            x: 0,
            y: 0,
        },
        width: 0,
    };

    async apply() {
        const width = this.drawInfo.width;
        const height = this.drawInfo.height || width;
        this.drawInfo.box = {
            width,
            height,
            x: this.drawInfo.target.x - width / 2,
            y: this.drawInfo.target.y - height / 2,
        };
        return super.apply();
    }

    static is(comp:Component) :comp is EventMark {
        return comp.name === SN.EventMark;
    }
}
