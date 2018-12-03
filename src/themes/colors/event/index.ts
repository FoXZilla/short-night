import * as Engine from '@engine';
import {RoughCanvas} from "roughjs/bin/canvas";
import {ConstructorInfo} from "@/themes/colors/timeline";
import EventBody from './body';
import EventAxis from "./axis";
import EventMark from "./mark";

export default class Event extends Engine.Event {
    theme = 'colors';

    roughCanvas:RoughCanvas;
    constructor(info:ConstructorInfo){
        super(info);
        this.roughCanvas = info.roughCanvas;
    }

    BodyConstructor = EventBody;
    AxisConstructor = EventAxis;
    MarkConstructor = EventMark;

}
