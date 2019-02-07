"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Split a date scope to node by node.
 * @example
 * new TimeSpliter('2017-01-01 00:00:01', '2019-01-01 00:00:01').split(DateBy.Year)
 * > [ '2018-1-1 00:00:00', '2019-1-1 00:00:00' ]
 * */
class TimeSpliter {
    constructor(start, end) {
        this.bigger = +new Date(start) > +new Date(end) ? new Date(start) : new Date(end);
        this.smaller = +new Date(start) <= +new Date(end) ? new Date(start) : new Date(end);
    }
    /**
     * Return a array of split Date object.
     * */
    split(by, step) {
        const result = [];
        const date = new Date(this.smaller);
        while (+TimeSpliter.increment[by](date, step) < +this.bigger) {
            result.push(new Date(date));
        }
        return result;
    }
}
TimeSpliter.increment = {
    year(date, step = 1) {
        date.setMonth(0, 1);
        date.setHours(0, 0, 0, 1);
        date.setFullYear(date.getFullYear() + step);
        return date;
    },
    quarter(date) {
        date.setMonth(~~(date.getMonth() / 3) * 3, 1);
        date.setHours(0, 0, 0, 1);
        if (date.getMonth() + 3 >= 12) {
            date.setFullYear(date.getFullYear() + 1);
            date.setMonth(0, 1);
        }
        else {
            date.setMonth(date.getMonth() + 3, 1);
        }
        return date;
    },
    month(date) {
        date.setDate(1);
        date.setHours(0, 0, 0, 1);
        if (date.getMonth() === 11) {
            date.setFullYear(date.getFullYear() + 1);
            date.setMonth(0, 1);
        }
        else {
            date.setMonth(date.getMonth() + 1, 1);
        }
        return date;
    },
    week(date) {
        date.setHours(0, 0, 0, 1);
        do {
            date.setTime(date.getTime() + 1000 * 60 * 60 * 24);
        } while (date.getDay() !== 1);
        return date;
    },
    day(date) {
        date.setHours(0, 0, 0, 1);
        date.setTime(date.getTime() + 1000 * 60 * 60 * 24);
        return date;
    },
};
exports.default = TimeSpliter;
//# sourceMappingURL=TimeSpliter.js.map