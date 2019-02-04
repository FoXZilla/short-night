import * as Engine from '@engine';
import { shrinkBox } from '@engine/common/functions';

export default class EventBody extends Engine.EventBody {

    theme = 'colors';
    drawInfo: Engine.EventBody['drawInfo'] & {mainColor:string} = Object.assign(
        {},
        this.drawInfo,
        { mainColor: '' },
    );

    draw() {
        const strokeWidth = 1.5;
        const box = shrinkBox(this.drawInfo.box, strokeWidth);

        this.ext.extraData.roughCanvas.rectangle(
            box.x,
            box.y,
            box.width,
            box.height,
            {
                strokeWidth: 0,
                stroke: 'rgba(0, 0, 0, 0)',

                fill: this.drawInfo.mainColor,
                fillWeight: 0.5,
                fillStyle: 'solid',
            },
        );

        this.ext.extraData.roughCanvas.line(
            this.drawInfo.markDrawInfo.target.x + 2,
            this.drawInfo.markDrawInfo.target.y,
            this.drawInfo.box.x + this.drawInfo.box.width - 2,
            this.drawInfo.markDrawInfo.target.y,
            {
                strokeWidth,
                roughness: 1.3,
                bowing: 0.5,
                stroke: this.drawInfo.mainColor,
            },
        );

        return super.draw();
    }
}
