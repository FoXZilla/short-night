import { SN } from '../../common/definitions';
import EventBody from '../../Event/EventBody';
import { isOverlap } from '../../common/functions';
import { ExtensionManager } from '..';
import { Conflict as ComponentConflict } from '.';
import Timeline from '../../Timeline';
import AxisBody from '../../Axis/AxisBody';
import { Breakpoint } from '../BreakpointAnimation';
import { ConflictFixResult } from '../../types';

type Conflict = ComponentConflict<EventBody>;

export default class EventBody2EventBodyFloater {
    timeline ? :Timeline;
    axisBody ? :AxisBody;

    constructor(public ext :ExtensionManager) {}

    conflicts :Conflict[] = [];
    /**
     * above EventBody is above, below EventBody is below
     * */
    eventBodyList :EventBody[] = [];

    static isConflict(eb1 :EventBody, eb2 :EventBody) :boolean {
        if (eb1 === eb2) return false;
        if (eb1.drawInfo.floated || eb2.drawInfo.floated) return false;

        return isOverlap(eb1.drawInfo.box, eb2.drawInfo.box);
    }
    async float(conflicts :Conflict) {
        const maxWidthInConflict = Math.max(
            ...conflicts.with.map(c => c.drawInfo.box.width + c.drawInfo.offset.x),
        );
        conflicts.self.drawInfo.offset.x = maxWidthInConflict + 1;
        conflicts.self.drawInfo.maxWidth = Math.min(
            this.timeline!.grid.eventWidth,
            this.axisBody!.drawInfo.box.x - maxWidthInConflict,
        );
        conflicts.self.drawInfo.floated = true;
        await conflicts.self.apply();
    }

    async fix() :Promise<ConflictFixResult> {

        this.timeline = this.ext.components[SN.Timeline][0];
        this.axisBody = this.ext.components[SN.AxisBody][0];
        this.eventBodyList = Array.from(this.ext.components[SN.EventBody])
            .sort((eb1, eb2) =>
                eb1.drawInfo.markDrawInfo.target.y - eb2.drawInfo.markDrawInfo.target.y,
            )
        ;

        this.countConflict();
        if (this.conflicts.length === 0) {
            return ConflictFixResult.NoConflict;
        }

        const conflict = this.pickRingleader()!;

        const options = {
            components: [
                this.axisBody,
                conflict.self,
                ...conflict.with,
            ],
            protagonist: conflict.self,
        };

        await this.ext.breakpoint.block(Breakpoint.FixEventBody2EventBodyFloater, options);
        await this.float(conflict);
        await this.ext.breakpoint.block(
            Breakpoint.FixEventBody2EventBodyFloater,
            {
                ...options,
                forward: true,
            },
        );
        return ConflictFixResult.Alleviated;

    }

    protected pickRingleader() :Conflict|undefined {
        return this.conflicts.find(
            c1 => this.conflicts.every(c2 => c1.with.length >= c2.with.length),
        );
    }
    protected countConflict() {
        this.conflicts.length = 0;

        for (const eb of this.eventBodyList) {
            const conflict = {
                self: eb as EventBody,
                with: this.ext.components[SN.EventBody].filter(
                    target => EventBody2EventBodyFloater.isConflict(eb, target as EventBody),
                ) as EventBody[],
            };
            if (conflict.with.length) this.conflicts.push(conflict);
        }
    }

}
