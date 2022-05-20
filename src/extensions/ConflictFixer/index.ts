import { Extension, ExtensionManager } from '..';
import Component from '../../common/Component';
import { DEBUG } from '../../common/definitions';
import Timeline from '../../Timeline';
import { walkLoop } from '../../common/functions';
import EventBody2AxisMilestone from './EventBody2AxisMilestone';
import EventAxis2EventAxis from './EventAxis2EventAxis';
import EventBody2EventBodyMover from './EventBody2EventBodyMover';
import EventBody2EventBodyFloater from './EventBody2EventBodyFloater';
import { ConflictFixResult } from '../../types';

export interface Conflict<T = Component>{
    with :T[];
    self :T;
}

/**
 * Fix the conflict between component and each other by:
 * 1. adjust component using fixers.
 * 2. stretch Axis.
 * */
export default class ConflictFixer implements Partial<Extension> {
    constructor(public ext :ExtensionManager) {}

    fixers :{ fix() :Promise<ConflictFixResult> }[] = [
        new EventBody2AxisMilestone(this.ext),
        new EventAxis2EventAxis(this.ext),
        new EventBody2EventBodyMover(this.ext),
        new EventBody2EventBodyFloater(this.ext),
    ];

    protected counter = 0;
    async onApply(timeline :Component) {
        if (!Timeline.is(timeline)) return;

        // Conflict is fixed
        if (await this.fixAll() === ConflictFixResult.NoConflict) {
            if (this.counter > 3) {
                console.warn(`[ShortNight]: the conflict fixed by ${this.counter} times.`);
            }
            this.counter = 0;
            return;
        }

        // Try stretch length of Axis

        this.counter++;

        if (this.counter > 10) { // TODO: make configurable

            if (this.ext.conflicts.event_body.length) {

                const userData =  this.ext.components.timeline[0].drawInfo.events;

                let filterData: any[] = [];

                userData.forEach(ud => {
                    return this.ext.conflicts.event_body.forEach(eb => {

                        if (eb.self.drawInfo.date === ud.date) {

                            filterData.push(JSON.stringify(ud));
                        }
                    })
                });

                filterData = filterData.filter((v, i, arr) => arr.indexOf(v) === i);

                let x = `%cAn error was received:`;

                if (filterData.length === 1 ) {

                    x = `${x} %c“Too many long text found.”`;
                } else {

                    const dates = filterData.map(v => JSON.parse(v)).map(v => new Date(v.date).getTime());

                    const dateDiff = dates.map((v, i, arr) => Math.abs(new Date(v).getTime() - new Date(arr[i + 1]).getTime()) / (1000 * 60 * 60 * 24)).filter(v => !Number.isNaN(v));

                    if (!dateDiff.sort().reverse()[0]) {
                        x = `${x} %c“Duplicate entry found for event.date”`;
                    } else {
                        x = `${x} %c“Too close entry found for event.date”`;
                    }
                }

                x = `${x} %c${filterData.toString()}`;

                console.log(x, 'color: #D0342C; font-size: 16px;', 'color: #D0342C; font-size: 16px;', 'color: #F6E7D8; font-size: 16px; border: 1px groove  #F5F5F5; padding: 4px;');
            }

            const msg = `[ShortNight]: Too many times(${this.counter}) of try fix conflict.`;

            if (DEBUG) {
                throw new Error(msg);
            } else {
                console.warn(msg);
                return;
            }
        }

        await Promise.resolve().then(() => timeline.apply({
            axisLength: timeline.runtime.axisLength * 1.3,
        }));

    }

    /**
     * Try fix all conflict by adjust components.
     * */
    async fixAll() :Promise<ConflictFixResult> {
        return await walkLoop(async () => {
            const results = [];
            for (const fixer of this.fixers) {
                results.push(await fixer.fix());
            }
            return results;
        });
    }

}
