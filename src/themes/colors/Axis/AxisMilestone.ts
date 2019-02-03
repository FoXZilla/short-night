import * as Engine from '@engine';

export default class AxisMilestone extends Engine.AxisMilestone {
    theme = 'colors';

    draw() {
        const box = this.drawInfo.box;

        this.ext.extraData.roughCanvas.rectangle(
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
