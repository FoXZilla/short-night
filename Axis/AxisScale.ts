import { ComponentConstructorInfo, ComponentDrawInfo, Coordinate } from '../types';
import Component from '../common/Component';
import { SN } from '../common/definitions';
import AxisBody from '../Axis/AxisBody';

/**
 * @property {Readonly<AxisBodyDrawInfo>} bodyDrawInfo - the DrawInfo of AxisBody.
 * @property {number} alignY - the y point which is the AxisScale align target.
 * @property {number} height - the height of AxisScale.
 * */
interface DrawInfo extends ComponentDrawInfo{
    bodyDrawInfo :Readonly<AxisBody['drawInfo']>;
    alignY :number;
    height :number;
}

/**
 * In axis, mark a mark for recognize time easy.
 * Optional, a theme can omit this component by situation.
 * */
export default abstract class AxisScale extends Component{
    constructor(props :ComponentConstructorInfo) {
        super(props);
        this.ext.onConstruct(this);
    }

    name = SN.AxisScale;
    drawInfo :DrawInfo = {
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

    createBox() {
        this.drawInfo.box = {
            x: this.drawInfo.bodyDrawInfo.box.x,
            y: this.drawInfo.alignY - this.drawInfo.height / 2,
            height: this.drawInfo.height,
            width: this.drawInfo.bodyDrawInfo.box.width,
        };
    }

    async apply() {
        this.createBox();
        return super.apply();
    }

    static is(comp :Component) :comp is AxisScale {
        return comp.name === SN.AxisScale;
    }
}
