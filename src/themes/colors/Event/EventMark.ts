import * as Engine from '@engine';
import { RoughCanvas } from 'roughjs/bin/canvas';
import { ColorsConstructorInfo } from '@/themes/colors/Timeline';

export default class EventMark extends Engine.EventMark {
    theme = 'colors';

    roughCanvas:RoughCanvas;
    constructor(info:ColorsConstructorInfo) {
        super(info);
        this.roughCanvas = info.roughCanvas;
    }

    drawInfo: Engine.EventMark['drawInfo'] & {mainColor:string} = Object.assign(
        {},
        this.drawInfo,
        { mainColor: '' },
    );

    draw() {
        this.roughCanvas.circle(
            this.drawInfo.target.x,
            this.drawInfo.target.y,
            this.drawInfo.width,
            {
                strokeWidth: 0,
                stroke: 'rgba(0, 0, 0, 0)',

                fill: this.drawInfo.mainColor,
                fillWeight: 0.5,
                fillStyle: 'solid',

                roughness: 0.5,
            },
        );
    }
}
