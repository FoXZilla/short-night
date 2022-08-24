import { DateBy } from '../types';

/**
 * Split a date scope to node by node.
 * @example
 * new TimeSpliter('2017-01-01 00:00:01', '2019-01-01 00:00:01').split(DateBy.Year)
 * > [ '2018-1-1 00:00:00', '2019-1-1 00:00:00' ]
 * */
export default class TimeSpliter {
    constructor(start :number | string | Date, end :number | string | Date) {
        this.bigger = +new Date(start) > +new Date(end) ? new Date(start) : new Date(end);
        this.smaller = +new Date(start) <= +new Date(end) ? new Date(start) : new Date(end);
    }

    bigger :Date;
    smaller :Date;

    /**
     * Return a array of split Date object.
     * */
    split(by :DateBy, step? :number) :Date[] {
        const result = [];
        const date = new Date(this.smaller);
        while (+TimeSpliter.increment[by](date, step) < +this.bigger) {
            result.push(new Date(date));
        }

        return result;
    }

    static increment :{
        [methName in DateBy]: (date :Date, step? :number) => Date
    } = {
            fiveCentury(date :Date, step = 1) {
                date.setMonth(0, 1);
                date.setHours(0, 0, 0, 1);

                date.setFullYear(Math.floor(date.getFullYear() / 500) * 500 + (step * 100 * 5));

                return date;
            },
            century(date :Date, step = 1) {
                date.setMonth(0, 1);
                date.setHours(0, 0, 0, 1);

                date.setFullYear(Math.floor(date.getFullYear() / 100) * 100 + (step * 100));

                return date;
            },
            tenYear(date :Date, step = 1) {
                date.setMonth(0, 1);
                date.setHours(0, 0, 0, 1);

                date.setFullYear(Math.floor(date.getFullYear() / 10) * 10 + (step * 10));

                return date;
            },
            year(date :Date, step = 1) {
                date.setMonth(0, 1);
                date.setHours(0, 0, 0, 1);

                date.setFullYear(date.getFullYear() + step);

                return date;
            },
            quarter(date :Date) {
                date.setMonth(~~(date.getMonth() / 3) * 3, 1);
                date.setHours(0, 0, 0, 1);

                if (date.getMonth() + 3 >= 12) {
                    date.setFullYear(date.getFullYear() + 1);
                    date.setMonth(0, 1);
                } else {
                    date.setMonth(date.getMonth() + 3, 1);
                }

                return date;
            },
            month(date :Date) {
                date.setDate(1);
                date.setHours(0, 0, 0, 1);

                if (date.getMonth() === 11) {
                    date.setFullYear(date.getFullYear() + 1);
                    date.setMonth(0, 1);
                } else {
                    date.setMonth(date.getMonth() + 1, 1);
                }

                return date;
            },
            week(date :Date) {
                date.setHours(0, 0, 0, 1);

                do {
                    date.setTime(date.getTime() + 1000 * 60 * 60 * 24);
                } while (date.getDay() !== 1);

                return date;
            },
            day(date :Date) {
                date.setHours(0, 0, 0, 1);

                date.setTime(date.getTime() + 1000 * 60 * 60 * 24);

                return date;
            },
        };

}
