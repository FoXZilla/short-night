import * as Engine from '@engine';
import { RoughCanvas } from 'roughjs/bin/canvas';
import { ConstructorInfo } from '@/themes/colors/Timeline';
import AxisBody from './AxisBody';
import AxisMilestone from './AxisMilestone';
import AxisScale from './AxisScale';

export default class Axis extends Engine.Axis {
    theme = 'colors';

    roughCanvas:RoughCanvas;
    constructor(info:ConstructorInfo) {
        super(info);
        this.roughCanvas = info.roughCanvas;
    }

    bodyConstructor = AxisBody;
    milestoneConstructor = AxisMilestone;
    scaleConstructor = AxisScale;

}
