import * as Engine from '@engine';
import EventBody from './EventBody';
import EventAxis from './EventAxis';
import { SN } from '@engine/common/definitions';

export default class Event extends Engine.Event {
    theme = 'rules';

    body :EventBody = null as any;

    bodyConstructor = EventBody;
    axisConstructor = EventAxis;
    markConstructor = Engine.EventMark;

    initAxis() {
        const axis = this.ext.components[SN.AxisBody][0].drawInfo;

        this.grid.minEventAxisOffset = Math.max(
            ...this.ext.components[SN.AxisMilestone].map(
                m => m.drawInfo.box.x + m.drawInfo.box.width - (axis.box.x - axis.width / 2),
            ),
        );
        super.initAxis();
    }
    initBody() {
        super.initBody();
        this.body.drawInfo.originOffsetX = this.grid.eventOffset.x;
    }

}
