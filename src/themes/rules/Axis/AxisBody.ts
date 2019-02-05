import * as Engine from '@engine';

export default class AxisBody extends Engine.AxisBody {
    theme = 'rules';

    draw() {
        const box = this.drawInfo.box;
        const ctx = this.canvas.getContext('2d')!;

        ctx.beginPath();
        ctx.lineWidth = box.width;
        ctx.setLineDash([box.width, box.width * 10 / 3]);
        ctx.moveTo(box.x + box.width / 2, box.y);
        ctx.lineTo(box.x + box.width / 2, box.y + box.height);
        ctx.strokeStyle = '#afafaf';
        ctx.stroke();

        return super.draw();
    }

}
