import roughjs from 'roughjs';
import * as Engine from '@engine';
import Axis from './Axis';
import Event from './Event';
import { RoughCanvas } from 'roughjs/bin/canvas';
import ColorPicker from './extensions/ColorPicker';

export default class Timeline extends Engine.Timeline {
    constructor(info :Partial<Engine.TimelineConstructInfo>) {
        super({
            grid: {
                ...Engine.Timeline.defaultGrid,
                milestoneLineWidth: 1.5,
                scaleHeight: 1.5,
                canvasWidth: 800,
                axisWidth: 1.5,
            },
            ext: new Engine.ExtensionManager,
            ...info,
        });

        this.ext.extensions.push(
            new ColorPicker(this.ext),
        );
        this.ext.extraData.roughCanvas = roughjs.canvas(this.canvas) as RoughCanvas;
    }

    theme = 'rules';

    axisConstructor = Axis;
    eventConstructor = Event;
}
