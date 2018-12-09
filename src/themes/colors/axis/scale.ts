import * as Engine from '@engine';
import {RoughCanvas} from 'roughjs/bin/canvas';
import {ConstructorInfo} from '@/themes/colors/timeline';

export default class AxisScale extends Engine.AxisScale {
    theme = 'colors';

    roughCanvas:RoughCanvas;
    constructor(info:ConstructorInfo) {
        super(info);
        this.roughCanvas = info.roughCanvas;
    }

    draw() {
        const box = this.drawInfo.box;

        this.roughCanvas.rectangle(
            box.x,
            box.y,
            box.width,
            box.height,
            {
                strokeWidth: 0,
                stroke: 'rgba(0,0,0,0)',

                fill: '#fff',
                fillWeight: 0.3,
                fillStyle: 'solid',

                hachureGap: 0,
                roughness: 0,
                bowing: 0,
            },
        );
        return super.draw();
    }
}
