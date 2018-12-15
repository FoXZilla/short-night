import * as Engine from '@engine';
import { RoughCanvas } from 'roughjs/bin/canvas';
import { ConstructorInfo } from '@/themes/colors/Timeline';
import EventBody from './EventBody';
import EventAxis from './EventAxis';
import EventMark from './EventMark';

export default class Event extends Engine.Event {
    theme = 'colors';

    roughCanvas:RoughCanvas;
    constructor(info:ConstructorInfo) {
        super(info);
        this.roughCanvas = info.roughCanvas;
    }

    bodyConstructor = EventBody;
    axisConstructor = EventAxis;
    barkConstructor = EventMark;

}
