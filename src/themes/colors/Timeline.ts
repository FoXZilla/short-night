import roughjs from 'roughjs';
import * as Engine from '@engine';
import Axis from './Axis';
import Event from './Event';
import { ComponentConstructorInfo } from '@engine/types';
import { RoughCanvas } from 'roughjs/bin/canvas';
import ColorPicker from './extensions/ColorPicker';

export interface ColorsConstructorInfo extends ComponentConstructorInfo{
    roughCanvas: RoughCanvas;
}

export default class Timeline extends Engine.Timeline {
    theme = 'colors';

    grid = {
        ...Engine.Timeline.defaultGrid,
        scaleHeight: 3,
        axisWidth: 5,
        markWidth: 10,
    };

    roughCanvas: RoughCanvas;
    constructor(info:ComponentConstructorInfo) {
        super(info);
        this.ext.extensions.push(
            new ColorPicker(info.ext),
        );
        this.roughCanvas = roughjs.canvas(this.canvas) as RoughCanvas;
    }

    axisConstructor = Axis;
    eventConstructor = Event;
}
