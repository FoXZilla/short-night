import { DateBy } from '../types';
// @ts-ignore
import packageJson = require('../package.json');

// @ts-ignore
export const DEBUG :boolean = typeof process === 'undefined' ? false : process.env.NODE_ENV === 'development';

export enum SN {
    Timeline = 'timeline',
    Axis = 'axis',
    AxisBody = 'axis_body',
    AxisScale = 'axis_scale',
    AxisMilestone = 'axis_milestone',
    Event = 'event',
    EventBody = 'event_body',
    EventMark = 'event_mark',
    EventAxis = 'event_axis',
}

export const DATE_COUNT_EXTRA = {
    [DateBy.Day]: 1000 * 60 * 60 * 24 / 2,
    [DateBy.Week]: 1000 * 60 * 60 * 24 * 7 / 2,
    [DateBy.Month]: 1000 * 60 * 60 * 24 * 30 / 2,
    [DateBy.Quarter]: 1000 * 60 * 60 * 24 * 30 * 3 / 2,
    [DateBy.Year]: 1000 * 60 * 60 * 24 * 30 * 12 / 2,
    [DateBy.TenYear]: 1000 * 60 * 60 * 24 * 30 * 12 * 10 / 2,
    [DateBy.Century]: 1000 * 60 * 60 * 24 * 30 * 12 * 100 / 2,
    [DateBy.FiveCentury]: 1000 * 60 * 60 * 24 * 30 * 12 * 100 * 5 / 2,
};

export const WALK_ON = {
    [SN.EventAxis]: {
        offsetOneStep: 15,
    },
};

export const SN_VERSION :string = packageJson.version;
