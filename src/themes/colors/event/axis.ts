import * as Engine from '@engine';
import {RoughCanvas} from 'roughjs/bin/canvas';
import {ConstructorInfo} from '@/themes/colors/timeline';

export default class EventAxis extends Engine.EventAxis {
    theme = 'colors';

    roughCanvas:RoughCanvas;
    constructor(info:ConstructorInfo) {
        super(info);
        this.roughCanvas = info.roughCanvas;
    }

    draw() {
        this.roughCanvas.linearPath(
            [
                [this.drawInfo.markDrawInfo.target.x, this.drawInfo.markDrawInfo.target.y],
                [
                    this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX,
                    this.drawInfo.markDrawInfo.target.y,
                ],
                [
                    this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX,
                    this.drawInfo.markDrawInfo.target.y - this.drawInfo.length,
                ],
            ],
            {
                stroke: this.ext.getParent(this).extraData.mainColor,
                strokeWidth: 1.5,

                roughness: 0.7,
                bowing: 0,
            },
        );

        return super.draw();
    }

}
