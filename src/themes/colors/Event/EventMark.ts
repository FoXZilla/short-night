import * as Engine from '@engine';
import { RoughCanvas } from 'roughjs/bin/canvas';
import { ConstructorInfo } from '@/themes/colors/Timeline';

export default class EventMark extends Engine.EventMark {
    theme = 'colors';

    roughCanvas:RoughCanvas;
    constructor(info:ConstructorInfo) {
        super(info);
        this.roughCanvas = info.roughCanvas;
    }

    draw() {
        const color = this.ext.getParent(this).extraData.mainColor;

        this.roughCanvas.circle(
            this.drawInfo.target.x,
            this.drawInfo.target.y,
            this.drawInfo.width,
            {
                strokeWidth: 0,
                stroke: 'rgba(0, 0, 0, 0)',

                fill: color,
                fillWeight: 0.5,
                fillStyle: 'solid',

                roughness: 0.5,
            },
        );
    }
}
