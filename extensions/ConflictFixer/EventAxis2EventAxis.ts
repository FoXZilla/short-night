import { ExtensionManager } from '..';
import { SN } from '../../common/definitions';
import { isIntersecting } from '../../common/functions';
import EventAxis from '../../Event/EventAxis';
import { ConflictFixResult, Line } from '../../types';
import { Breakpoint } from '../BreakpointAnimation';

export default class EventAxis2EventAxis {
    constructor(public ext :ExtensionManager) {}

    async fix() :Promise<ConflictFixResult> {
        const eventAxisList :EventAxis[] = Array.from(this.ext.components[SN.EventAxis])
            .sort((ea1, ea2) => ea2.drawInfo.length - ea1.drawInfo.length)
        ;

        while (
            eventAxisList.some(
                ea1 => eventAxisList.some(ea2 => EventAxis2EventAxis.isConflict(ea1, ea2)),
            )
        ) {
            for (const ea1 of eventAxisList) {
                const conflictWith = eventAxisList.filter(
                    ea2 => EventAxis2EventAxis.isConflict(ea1, ea2),
                );
                if (conflictWith.length) {
                    const options = {
                        protagonist: ea1,
                        components: [
                            ...this.ext.components[SN.AxisBody],
                            this.ext.getParent(ea1),
                            ...conflictWith.map(ea => this.ext.getParent(ea)),
                        ],
                    };
                    await this.ext.breakpoint.block(Breakpoint.FixEventAxis2EventAxis, options);
                    ea1.drawInfo.offsetX += 15; // TODO: configurable
                    await ea1.apply();
                    await this.ext.breakpoint.block(
                        Breakpoint.FixEventAxis2EventAxis,
                        {
                            ...options,
                            forward: true,
                        },
                    );
                    break;
                }
            }
        }
        return ConflictFixResult.NoConflict;
    }

    static isConflict (ea1 :EventAxis, ea2 :EventAxis) :boolean {
        if (ea1 === ea2) return false;
        const line1 :Line = {
            startX: ea1.drawInfo.markDrawInfo.target.x + ea1.drawInfo.offsetX,
            startY: ea1.drawInfo.markDrawInfo.target.y + 1,
            endX: ea1.drawInfo.markDrawInfo.target.x + ea1.drawInfo.offsetX,
            endY: ea1.drawInfo.markDrawInfo.target.y - ea1.drawInfo.length - 1,
        };
        const line2 :Line = {
            startX: ea2.drawInfo.markDrawInfo.target.x + ea2.drawInfo.offsetX,
            startY: ea2.drawInfo.markDrawInfo.target.y + 1,
            endX: ea2.drawInfo.markDrawInfo.target.x + ea2.drawInfo.offsetX,
            endY: ea2.drawInfo.markDrawInfo.target.y - ea2.drawInfo.length - 1,
        };
        return isIntersecting(line1, line2);
    }
}
