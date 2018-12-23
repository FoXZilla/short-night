import { ExtensionManager } from '@/extensions';
import { ConflictFixResult } from '@engine/types';
import { SN } from '@engine/common/config';
import AxisMilestone from '@engine/Axis/AxisMilestone';
import { isOverlap } from '@engine/common/functions';
import { Breakpoint } from '@/extensions/BreakpointAnimation';

export default class EventBody2AxisMilestone {
    constructor(public ext:ExtensionManager) {}

    async fix():Promise<ConflictFixResult> {
        const eventBodyList = this.ext.components[SN.EventBody];
        const axisMilestoneList:AxisMilestone[] = this.ext.components[SN.AxisMilestone];

        for (const eventBody of eventBodyList) {
            for (const axisMilestone of axisMilestoneList) {
                if (isOverlap(eventBody.drawInfo.box, axisMilestone.drawInfo.box)) {
                    const options = {
                        protagonist: axisMilestone,
                        components: [
                            ...this.ext.components[SN.AxisBody],
                            axisMilestone,
                            eventBody,
                        ],
                    };
                    await this.ext.breakpoint.block(Breakpoint.FixEventBody2AxisMilestone, options);
                    eventBody.drawInfo.offset.x = axisMilestone.drawInfo.box.width / 2 + 1;
                    await eventBody.apply();
                    await this.ext.breakpoint.block(
                        Breakpoint.FixEventBody2AxisMilestone,
                        {
                            ...options,
                            forward: true,
                        },
                    );
                }
            }
        }

        return ConflictFixResult.NoConflict;
    }
}
