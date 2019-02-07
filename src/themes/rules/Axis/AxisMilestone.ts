import * as Engine from '@engine';
import { parseBox } from '@engine/common/functions';

export default class AxisMilestone extends Engine.AxisMilestone {
    theme = 'rules';

    createElement() {
        const flag = super.createElement();
        const paddingLeft = parseFloat(getComputedStyle(this.element!).paddingLeft!)!;
        const bodyWidth = this.drawInfo.bodyDrawInfo.box.width;

        this.element!.style.paddingLeft = `${paddingLeft + bodyWidth}px`;

        const box = parseBox(this.element!);
        this.element!.style.left = `${box.x + box.width / 2 - bodyWidth - 22.5 - 5}px`;

        return flag;
    }
    draw() {
        const box = this.drawInfo.box;
        const ctx = this.canvas.getContext('2d')!;

        ctx.beginPath();
        ctx.lineWidth = 1.5;
        ctx.setLineDash([]);
        ctx.moveTo(box.x, box.y + box.height / 2);
        ctx.lineTo(box.x + 22.5, box.y + box.height / 2);
        ctx.strokeStyle = '#bcbcbc';
        ctx.stroke();

        return super.draw();
    }

}
