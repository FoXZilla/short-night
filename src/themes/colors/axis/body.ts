import * as Engine from '@engine';
import {RoughCanvas} from "roughjs/bin/canvas";
import {ConstructorInfo} from "@/themes/colors/timeline";

export default class AxisBody extends Engine.AxisBody {
    theme = 'colors';

    roughCanvas:RoughCanvas;
    constructor(info:ConstructorInfo){
        super(info);
        this.roughCanvas = info.roughCanvas;
    }

    draw(){
        const box = this.drawInfo.box;

        this.roughCanvas.line(
            box.x + box.width/2,
            box.y,
            box.x + box.width/2,
            box.y + box.height,
            {
                strokeWidth: box.width,
                stroke: '#333',
                hachureGap: 0,
                roughness: 0.2,
            }
        );

        return super.draw();
    };
}
