import Roughjs from 'roughjs';
import * as Engine from '@engine';
import Axis from './axis';
import Event from './event';
import {ComponentConstructorInfo} from "@engine/common/component";
import {RoughCanvas} from "roughjs/bin/canvas";
import ColorPicker from "./extensions/color-picker";

export interface ConstructorInfo extends ComponentConstructorInfo{
    roughCanvas: RoughCanvas;
}

export default class Timeline extends Engine.Timeline {
    theme = 'colors';

    grid = {
        ...Engine.Timeline.defaultGrid,

    };

    roughCanvas: RoughCanvas;
    constructor(info:ComponentConstructorInfo){
        super(info);
        this.ext.extensions.push(
            new ColorPicker(info.ext),
        );
        this.roughCanvas = Roughjs.canvas(this.canvas) as RoughCanvas;
    }

    AxisConstructer = Axis;
    EventConstructor = Event;
}
