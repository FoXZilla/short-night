import * as Engine from '@engine';
import { RoughCanvas } from 'roughjs/bin/canvas';
import { ConstructorInfo } from '@/themes/colors/Timeline';

export default class AxisMilestone extends Engine.AxisMilestone {
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
                stroke: '#333',
                strokeWidth: 1.5,

                fill: '#fff',
                fillWeight: 0.5,
                fillStyle: 'solid',

                hachureGap: 2,
                roughness: 0.7,
                bowing: 0.5,
            },
        );
        return super.draw();
    }
}
