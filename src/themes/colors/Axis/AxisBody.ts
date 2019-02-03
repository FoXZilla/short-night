import * as Engine from '@engine';

export default class AxisBody extends Engine.AxisBody {
    theme = 'colors';

    draw() {
        const box = this.drawInfo.box;

        this.ext.extraData.roughCanvas.line(
            box.x + box.width / 2,
            box.y,
            box.x + box.width / 2,
            box.y + box.height,
            {
                strokeWidth: box.width,
                stroke: '#333',
                hachureGap: 0,
                roughness: 0.2,
            },
        );

        return super.draw();
    }

}
