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
import EventBody from '../../Event/EventBody';

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

    conflicts: {event_body: Conflict<EventBody>[]} = {event_body: []};

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

            const msg = `[ShortNight]: Too many times(${this.counter}) of try fix conflict.`;

            if (DEBUG) {

                /**
                 * Holds the filter data from the event which have generated the conflicts
                 * */
                const filterData = ((ud) => {

                    const eventsData = ud.map(ud => {
                        return this.conflicts.event_body.map(eb => {
                            if (eb.self.drawInfo.date === ud.date) {
                                return JSON.stringify(ud);
                            }
                        })
                    });

                    const flatenTheEvents = eventsData.flat(1);

                    return flatenTheEvents.filter(Boolean) as string[];
                    
                })(this.ext.components.timeline[0].drawInfo.events);

                let errorMsg = `[ShortNight]:`;

                if (filterData.length === 1) {

                    const description = JSON.parse(filterData.find(Boolean) as string).description;

                    errorMsg = `${errorMsg} Description “${description}” is overlapping the other event data.`;

                } else {

                    /**
                     * Finding the difference between two date and return the day
                     * */
                    const dayDifference = ((dateList) => {

                        const oneDayMs = 1000 * 60 * 60 * 24;
                        
                        const countDiff = (date1: Date, date2: Date) => Math.abs(date1.getTime() - (date2 || new Date(date2)).getTime()) / oneDayMs;
    
                        const dateListMS = dateList.map((v, i, arr) => countDiff(v, arr[i + 1]));
    
                        return dateListMS.filter(v => !Number.isNaN(v)).sort().reverse()[0];
    
                    })(filterData.map(v => JSON.parse(v)).map(v => new Date(v.date)));

                    if (!dayDifference) {
                        errorMsg = `${errorMsg} “Duplicate entry found for event.date”`;
                    } else {
                        errorMsg = `${errorMsg} “Too close entry found for event.date”`;
                    }
                }

                if (filterData.length > 1) {

                    errorMsg = `${errorMsg} ${filterData.toString()}`;
                }

                console.error(errorMsg);
                
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
