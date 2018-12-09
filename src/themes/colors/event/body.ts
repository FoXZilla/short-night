import * as Engine from '@engine';
import {RoughCanvas} from 'roughjs/bin/canvas';
import {ConstructorInfo} from '@/themes/colors/timeline';
import {shrinkBox} from '@engine/common/functions';

export default class EventBody extends Engine.EventBody {
    theme = 'colors';

    roughCanvas:RoughCanvas;
    constructor(info:ConstructorInfo) {
        super(info);
        this.roughCanvas = info.roughCanvas;
    }

    draw() {
        const strokeWidth = 1.5;
        const box = shrinkBox(this.drawInfo.box, strokeWidth);
        const options = {
            stroke: this.ext.getParent(this).extraData.mainColor,
            strokeWidth,

            fill: '#fff',
            fillWeight: 0.5,
            fillStyle: 'solid',

            roughness: 1.3,
            bowing: 0.5,
        };

        this.roughCanvas.rectangle(
            box.x,
            box.y,
            box.width,
            box.height,
            options,
        );

        this.roughCanvas.line(
            this.drawInfo.markDrawInfo.target.x,
            this.drawInfo.markDrawInfo.target.y,
            this.drawInfo.box.x + this.drawInfo.box.width,
            this.drawInfo.markDrawInfo.target.y,
            options,
        );

        return super.draw();
    }
}
