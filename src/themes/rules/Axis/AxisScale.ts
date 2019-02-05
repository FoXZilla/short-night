import * as Engine from '@engine';
export default class AxisScale extends Engine.AxisScale {
    theme = 'rules';

    createBox() {
        const flag = super.createBox();
        const width = 10;

        this.drawInfo.box = {
            width,
            x: this.drawInfo.bodyDrawInfo.box.x - width - 5,
            y: this.drawInfo.alignY - this.drawInfo.height / 2,
            height: this.drawInfo.height,
        };

        return flag;
    }

    draw() {
        const box = this.drawInfo.box;
        const ctx = this.canvas.getContext('2d')!;

        ctx.beginPath();
        ctx.lineWidth = this.drawInfo.box.height;
        ctx.setLineDash([]);
        ctx.moveTo(box.x, box.y);
        ctx.lineTo(box.x + box.width, box.y);
        ctx.strokeStyle = '#bcbcbc';
        ctx.stroke();

        return super.draw();
    }

}
