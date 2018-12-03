import * as Engine from '@engine';
import {RoughCanvas} from "roughjs/bin/canvas";
import {ConstructorInfo} from "@/themes/colors/timeline";

export default class EventMark extends Engine.EventMark {
    theme = 'colors';

    roughCanvas:RoughCanvas;
    constructor(info:ConstructorInfo){
        super(info);
        this.roughCanvas = info.roughCanvas;
    }
}
