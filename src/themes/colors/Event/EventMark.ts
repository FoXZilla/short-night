import * as Engine from '@engine';

export default class EventMark extends Engine.EventMark {
    theme = 'colors';
    drawInfo :Engine.EventMark['drawInfo'] & {mainColor:string} = Object.assign(
        {},
        this.drawInfo,
        { mainColor: '' },
    );

    draw() {
        this.ext.extraData.roughCanvas.circle(
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

        return super.draw();
    }

}
