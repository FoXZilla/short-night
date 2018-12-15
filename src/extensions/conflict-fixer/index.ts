import { Extension, ExtensionManager } from '@/extensions/index';
import Component from '@engine/common/Component';
import { DEBUG } from '@engine/common/config';
import Timeline from '@engine/Timeline';
import EventBody from '@engine/Event/EventBody';
import { walkLoop } from '@engine/common/functions';
import EventBody2AxisMilestone from './EventBody2AxisMilestone';
import EventAxis2EventAxis from './EventAxis2EventAxis';
import EventBody2EventBodyMover from './EventBody2EventBodyMover';
import EventBody2EventBodyFloater from './EventBody2EventBodyFloater';

export enum FixResult {
    Failed = 'failed', // the conflict cannot be fixed
    Alleviated = 'alleviated', // fixed, but still has conflict
    NoConflict = 'no-conflict', // no conflict or all conflict have been fixed
}
export interface Conflict{
    with: EventBody[];
    self: EventBody;
}

export default class ConflictFixer implements Partial<Extension> {
    constructor(public ext:ExtensionManager) {}

    fixers :{ fix():Promise<FixResult> }[] = [
        new EventBody2AxisMilestone(this.ext),
        new EventAxis2EventAxis(this.ext),
        new EventBody2EventBodyMover(this.ext),
        new EventBody2EventBodyFloater(this.ext),
    ];

    private counter = 0;
    async onApply(timeline:Component) {
        if (!Timeline.is(timeline)) return;
        if (await this.fixAll() === FixResult.NoConflict) {
            this.counter = 0;
            return;
        }

        if (++this.counter > 10) { // TODO: make configurable
            const msg = 'Too many times of try fix conflict.';

            if (DEBUG) throw new Error(msg);
            else console.warn(msg);
        }

        return Promise.resolve().then(() => timeline.apply({
            axisLength: timeline.runtime.axisLength * 1.1,
        }));

    }

    async fixAll():Promise<FixResult> {
        return await walkLoop(async () => {
            const results = [];
            for (const fixer of this.fixers) {
                results.push(await fixer.fix());
            }
            return results;
        });
    }

}
