import * as Engine from '@engine';

export default class EventAxis extends Engine.EventAxis {
    theme = 'colors';
    drawInfo: Engine.EventAxis['drawInfo'] & {mainColor:string} = Object.assign(
        {},
        this.drawInfo,
        { mainColor: '' },
    );

    draw() {
        const strokeWidth = 1.5;
        const radius = 10;

        this.ext.extraData.roughCanvas.linearPath(
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

        this.ext.extraData.roughCanvas.circle(
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
