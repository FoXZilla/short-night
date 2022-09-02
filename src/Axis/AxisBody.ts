import { ComponentConstructorInfo, ComponentDrawInfo, Coordinate } from '../types';
import Component from '../common/Component';
import { SN } from '../common/definitions';

/**
 * @property {number} length - the axis length.
 * @property {number} width - the width of axis.
 * @property {Coordinate} start - where coordinate to start axis.
 * @property {number} start.x - the axis will align this point rather than start.
 * */
interface DrawInfo extends ComponentDrawInfo {
    length :number;
    width :number;
    start :Coordinate;
}

/**
 * The body of Axis.
 * Draw the axis using this component.
 * */
export default abstract class AxisBody extends Component {
    constructor(props :ComponentConstructorInfo) {
        super(props);
        this.ext.onConstruct(this);
    }

    name = SN.AxisBody;
    drawInfo :DrawInfo = {
        box: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        },
        length: 0,
        width: 0,
        start: {
            x: 0,
            y: 0,
        },
    };

    createBox() {
        this.drawInfo.box = {
            x: this.drawInfo.start.x - this.drawInfo.width / 2,
            y: this.drawInfo.start.y,
            width: this.drawInfo.width,
            height: this.drawInfo.length,
        };
    }

    async apply() {
        this.createBox();
        return super.apply();
    }

    static is(comp :Component) :comp is AxisBody {
        return comp.name === SN.AxisBody;
    }
}
