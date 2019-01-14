import * as Engine from '@engine';
import { RoughCanvas } from 'roughjs/bin/canvas';
import { ColorsConstructorInfo } from '@/themes/colors/Timeline';
import AxisBody from './AxisBody';
import AxisMilestone from './AxisMilestone';
import AxisScale from './AxisScale';

export default class Axis extends Engine.Axis {
    theme = 'colors';

    roughCanvas:RoughCanvas;
    constructor(info:ColorsConstructorInfo) {
        super(info);
        this.roughCanvas = info.roughCanvas;
    }

    bodyConstructor = AxisBody;
    milestoneConstructor = AxisMilestone;
    scaleConstructor = AxisScale;

}
