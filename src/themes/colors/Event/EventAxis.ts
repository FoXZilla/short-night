import * as Engine from '@engine';
import { RoughCanvas } from 'roughjs/bin/canvas';
import { ColorsConstructorInfo } from '@/themes/colors/Timeline';

export default class EventAxis extends Engine.EventAxis {
    theme = 'colors';

    roughCanvas:RoughCanvas;
    constructor(info:ColorsConstructorInfo) {
        super(info);
        this.roughCanvas = info.roughCanvas;
    }

    drawInfo: Engine.EventAxis['drawInfo'] & {mainColor:string} = Object.assign(
        {},
        this.drawInfo,
        { mainColor: '' },
    );

    draw() {
        const strokeWidth = 1.5;
        const radius = 10;

        this.roughCanvas.linearPath(
            [
                [this.drawInfo.markDrawInfo.target.x, this.drawInfo.markDrawInfo.target.y],
                [
                    this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX,
                    this.drawInfo.markDrawInfo.target.y,
                ],
                [
                    this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX,
                    this.drawInfo.markDrawInfo.target.y - this.drawInfo.length + radius / 2,
                ],
            ],
            {
                strokeWidth,
                stroke: this.drawInfo.mainColor,

                roughness: 0.7,
                bowing: 0,
            },
        );

        this.roughCanvas.circle(
            this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX,
            this.drawInfo.markDrawInfo.target.y - this.drawInfo.length,
            radius,
            {
                strokeWidth,
                stroke: this.drawInfo.mainColor,

                roughness: 0.2,
            },
        );

        return super.draw();
    }

}
