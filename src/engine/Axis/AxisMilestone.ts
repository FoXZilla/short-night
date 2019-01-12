import { Box, ComponentConstructorInfo, ComponentDrawInfo } from '@engine/types';
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

    constructor(props:ComponentConstructorInfo) {
        super(props);
        this.ext.onConstruct(this);
    }

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
        this.createElement();
        this.element!.style.visibility = 'hidden';
        this.drawInfo.box = countBox(this.element!);

        return super.apply();
    }

    static is(comp:Component) :comp is AxisMilestone {
        return comp.name === SN.AxisMilestone;
    }

    createElement() {
        super.createElement();
        this.element!.innerHTML = this.drawInfo.text;

        const { width, height } = countBox(this.element!);
        const x = this.drawInfo.bodyDrawInfo.box.x
            + this.drawInfo.bodyDrawInfo.box.width / 2
            - width / 2
        ;
        const y = this.drawInfo.alignY - height / 2;

        this.element!.style.left = `${x}px`;
        this.element!.style.top = `${y}px`;

    }

    draw() {
        this.createElement();
        return super.draw();
    }
}
