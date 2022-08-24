import { Box, DateBy, Line, ConflictFixResult, TimelineData } from '../types';
import { DEBUG } from './definitions';
import Timeline from '../Timeline';

export function isBox(obj :any) :obj is Box {
    return typeof obj === 'object'
        && typeof obj.x === 'number'
        && typeof obj.y === 'number'
        && typeof obj.width === 'number'
        && typeof obj.height === 'number'
    ;
}
export function box2Lines(box :Box) :Line[] {
    return [
        {
            startX: box.x,
            startY: box.y,
            endX: box.x + box.width,
            endY: box.y,
        }, {
            startX: box.x + box.width,
            startY: box.y,
            endX: box.x + box.width,
            endY: box.y + box.height,
        }, {
            startX: box.x + box.width,
            startY: box.y + box.height,
            endX: box.x,
            endY: box.y + box.height,
        }, {
            startX: box.x,
            startY: box.y + box.height,
            endX: box.x,
            endY: box.y,
        },
    ];
}
export function parseBox(elt :HTMLElement) :Box {
    const styles = getComputedStyle(elt);
    return {
        x: parseFloat(styles.left!),
        y: parseFloat(styles.top!),
        width: parseFloat(styles.width!),
        height: parseFloat(styles.height!),
    };
}
export function mergeBox(...args :Box[]) :Box {
    const leftTop = {
        x: Infinity,
        y: Infinity,
    };
    const rightBottom = {
        x: -Infinity,
        y: -Infinity,
    };
    for (const box of args) {
        if (box.x < leftTop.x) leftTop.x = box.x;
        if (box.y < leftTop.y) leftTop.y = box.y;
        if (box.x + box.width > rightBottom.x) rightBottom.x = box.x + box.width;
        if (box.y + box.height > rightBottom.y) rightBottom.y = box.y + box.height;
    }
    return {
        x: leftTop.x,
        y: leftTop.y,
        width: rightBottom.x - leftTop.x,
        height: rightBottom.y - leftTop.y,
    };
}
export function shrinkBox(box :Box, distance= 1) :Box {
    return {
        x: box.x + distance,
        y: box.y + distance,
        width: box.width - distance * 2,
        height: box.height - distance * 2,
    };
}

export function isIntersecting(line1 :Line, line2 :Line) :boolean {
    let { startX: x1, startY: y1, endX: x2, endY: y2 } = line1;
    let { startX: x3, startY: y3, endX: x4, endY: y4 } = line2;

    if ([x1, x2, x3, x4, y1, y2, y3, y4].some(isNaN)) {
        throw TypeError('Unexpected NaN');
    }
    [x1, x2, x3, x4, y1, y2, y3, y4] = [x1, x2, x3, x4, y1, y2, y3, y4].map(Math.round);

    // Same slope
    const [slope1, slope2] = [
        Math.abs(x1 - x2) / Math.abs(y1 - y2),
        Math.abs(x3 - x4) / Math.abs(y3 - y4),
    ];
    if (slope1 === slope2) {
        const [bixX, smallX] = [x1, x2].sort((n1, n2) => n2 - n1);
        const [bixY, smallY] = [y1, y2].sort((n1, n2) => n2 - n1);
        if (slope1 === 0) {
            return ((y3 <= bixY && y3 >= smallY) || (y4 <= bixY && y4 >= smallY))
                && x1 === x3
            ;
        }
        if (slope1 === Infinity) {
            return ((x3 <= bixX && x3 >= smallX) || (x4 <= bixX && x4 >= smallX))
                && y1 === y3
            ;
        }
        return ((x3 <= bixX && x3 >= smallX) && (y3 <= bixY && y3 >= smallY))
            || ((x4 <= bixX && x4 >= smallX) || (y4 <= bixY && y4 >= smallY))
        ;
    }
    if (slope1 === Infinity) y1 += 0.0001;
    if (slope2 === Infinity) y3 += 0.0001;
    if (slope1 === 0) x1 += 0.0001;
    if (slope2 === 0) x3 += 0.0001;

    const x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4))
        / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4))
    ;
    const y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4))
        / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4))
    ;
    if (isNaN(x) || isNaN(y)) {
        return false;
        // eslint-disable-next-line no-else-return
    } else {
        if (x1 >= x2) {
            if (!(x2 <= x && x <= x1)) {
                return false;
            }
        } else {
            if (!(x1 <= x && x <= x2)) {
                return false;
            }
        }
        if (y1 >= y2) {
            if (!(y2 <= y && y <= y1)) {
                return false;
            }
        } else {
            if (!(y1 <= y && y <= y2)) {
                return false;
            }
        }
        if (x3 >= x4) {
            if (!(x4 <= x && x <= x3)) {
                return false;
            }
        } else {
            if (!(x3 <= x && x <= x4)) {
                return false;
            }
        }
        if (y3 >= y4) {
            if (!(y4 <= y && y <= y3)) {
                return false;
            }
        } else {
            if (!(y3 <= y && y <= y4)) {
                return false;
            }
        }
    }
    return true;
}
export function isOverlap(item1 :Box|Line, item2 :Box|Line) :boolean {
    const lines1 = isBox(item1) ? box2Lines(item1) :[item1];
    const lines2 = isBox(item2) ? box2Lines(item2) :[item2];
    return lines1.some(line1 => lines2.some(line2 => isIntersecting(line1, line2)));
}

/**
 * Instead of the while when fix conflict.
 * */
export async function walkLoop(
    fn :() => Promise<ConflictFixResult[]>,
    max = 10,
) :Promise<ConflictFixResult> {
    let alleviated = false;

    for (let i = 0 ; i < max ; i++) {
        const result = await fn();

        if (result.includes(ConflictFixResult.Alleviated)) {
            alleviated = true;
            continue;
        }
        if (result.every(r => r === ConflictFixResult.NoConflict)) {
            return ConflictFixResult.NoConflict;
        }

        if (result.includes(ConflictFixResult.Failed)) {
            return alleviated
                ? ConflictFixResult.Alleviated
                : ConflictFixResult.Failed
            ;
        }

    }

    throw new Error('too many loop');

}
/**
 * Instead of the console.log.
 * @example
 * const l = createLogFunction('EventBody');
 * l`Hello, world`;
 * > Hello, world
 * */
export function createLogFunction(prefix :string) {
    return function (stringArr :TemplateStringsArray, ...values :any[]) {
        if (!DEBUG) return;

        const message = [stringArr[0]];
        for (let index = 0; index < values.length; index++) {
            message.push(values[index], stringArr[index + 1]);
        }
        console.log(`${prefix} #`, ...message);
    };
}
/**
 * Return a new freezed object base on specified object.
 * Like Object.freeze, but it's deep and will not change origin object.
 * */
export function deepFreeze<T>(originObject :T) :Readonly<T> {
    const newObject :T = JSON.parse(JSON.stringify(originObject));
    const propNames = Object.getOwnPropertyNames(newObject) as (keyof T)[];

    // Freeze it's all of properties before freezing itself.
    for (const name of propNames) {
        if (typeof newObject[name] === 'object' && newObject[name] !== null) {
            newObject[name] = deepFreeze(newObject[name]) as any;
        }
    }

    return Object.freeze(newObject);
}

export function parseDate(material :any) :Date {
    const pureNumberString = typeof material === 'string'
        && String(Number(material)) === material
    ;
    if (pureNumberString) {
        const date = new Date();
        date.setFullYear(Number(material));
        return date;
    }

    return new Date(material);
}

export function createDraw<
    T extends Timeline,
    U extends typeof Timeline,
>(name :string, timelineConstructor :U) {
    return async function (
        el :string | HTMLElement,
        data :Timeline['drawInfo']['events'] | TimelineData,
    ) {
        const { container, canvas } = Timeline.mount(el, name);
        const timeline :T = new (timelineConstructor as any)({
            canvas,
            container,
        });

        if (Array.isArray(data)) {
            timeline.drawInfo.events = data;
            await timeline.apply();
            timeline.draw();
        } else {
            await timeline.import(data);
        }

        return timeline;
    };
}
