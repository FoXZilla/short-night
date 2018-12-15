import { Box, ComponentDrawInfo } from '@engine/types';
import { countBox } from '@engine/common/functions';
import Component from '@engine/common/Component';
import { SN } from '@engine/common/config';
import { DrawInfo as AxisBodyDrawInfo } from '@engine/Axis/AxisBody';

export interface DrawInfo extends ComponentDrawInfo{
    box: Readonly<Box>;
    bodyDrawInfo: Readonly<AxisBodyDrawInfo>;
    alignY: number;
    text: string;
}

export default abstract class AxisMilestone extends Component{
    name = SN.AxisMilestone;

    drawInfo:DrawInfo = {
        bodyDrawInfo: {} as any,
        alignY: 0,
        text: '0_o',

        box: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        },
    };

    apply() {
        if (!this.element) {
            this.element = AxisMilestone.createElement();
            this.container.appendChild(this.element);
        }

        this.element.innerHTML = this.drawInfo.text;

        const { width, height } = countBox(this.element);
        const x = this.drawInfo.bodyDrawInfo.box.x
            + this.drawInfo.bodyDrawInfo.box.width / 2
            - width / 2
        ;
        const y = this.drawInfo.alignY - height / 2;

        Object.assign(
            this.element.style,
            {
                left: `${x}px`,
                top: `${y}px`,
                visibility: 'hidden',
            },
        );

        this.drawInfo.box = countBox(this.element);

        return super.apply();
    }

    static createElement() {
        const elt = document.createElement('div');
        elt.className = 'axis-milestone';
        elt.style.visibility = 'hidden';
        return elt;
    }

    static is(comp:Component) :comp is AxisMilestone {
        return comp.name === SN.AxisMilestone;
    }
}
