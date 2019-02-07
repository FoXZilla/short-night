import roughjs from 'roughjs';
import * as Engine from '@engine';
import Axis from './Axis';
import Event from './Event';
import { RoughCanvas } from 'roughjs/bin/canvas';
import ColorPicker from './extensions/ColorPicker';

export default class Timeline extends Engine.Timeline {
    constructor(info :Engine.TimelineConstructInfo) {
        super({
            grid: {
                ...Engine.Timeline.defaultGrid,
                scaleHeight: 3,
                axisWidth: 5,
                markWidth: 10,
            },
            ext: new Engine.ExtensionManager,
            ...info,
        });

        this.ext.extensions.push(
            new ColorPicker(this.ext),
        );
        this.ext.extraData.roughCanvas = roughjs.canvas(this.canvas) as RoughCanvas;
    }

    theme = 'colors';

    axisConstructor = Axis;
    eventConstructor = Event;
}
