import * as Engine from '@engine';
import {RoughCanvas} from 'roughjs/bin/canvas';
import {ConstructorInfo} from '@/themes/colors/timeline';
import AxisBody from './body';
import AxisMilestone from './milestone';
import AxisScale from './scale';

export default class Axis extends Engine.Axis {
    theme = 'colors';

    roughCanvas:RoughCanvas;
    constructor(info:ConstructorInfo) {
        super(info);
        this.roughCanvas = info.roughCanvas;
    }

    BodyConstructor = AxisBody;
    MilestoneConstructor = AxisMilestone;
    ScaleConstructor = AxisScale;

}
