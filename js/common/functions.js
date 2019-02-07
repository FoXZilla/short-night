"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const definitions_1 = require("./definitions");
function isBox(obj) {
    return typeof obj === 'object'
        && typeof obj.x === 'number'
        && typeof obj.y === 'number'
        && typeof obj.width === 'number'
        && typeof obj.height === 'number';
}
exports.isBox = isBox;
function box2Lines(box) {
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
exports.box2Lines = box2Lines;
function parseBox(elt) {
    const styles = getComputedStyle(elt);
    return {
        x: parseFloat(styles.left),
        y: parseFloat(styles.top),
        width: parseFloat(styles.width),
        height: parseFloat(styles.height),
    };
}
exports.parseBox = parseBox;
function mergeBox(...args) {
    const leftTop = {
        x: Infinity,
        y: Infinity,
    };
    const rightBottom = {
        x: -Infinity,
        y: -Infinity,
    };
    for (const box of args) {
        if (box.x < leftTop.x)
            leftTop.x = box.x;
        if (box.y < leftTop.y)
            leftTop.y = box.y;
        if (box.x + box.width > rightBottom.x)
            rightBottom.x = box.x + box.width;
        if (box.y + box.height > rightBottom.y)
            rightBottom.y = box.y + box.height;
    }
    return {
        x: leftTop.x,
        y: leftTop.y,
        width: rightBottom.x - leftTop.x,
        height: rightBottom.y - leftTop.y,
    };
}
exports.mergeBox = mergeBox;
function shrinkBox(box, distance = 1) {
    return {
        x: box.x + distance,
        y: box.y + distance,
        width: box.width - distance * 2,
        height: box.height - distance * 2,
    };
}
exports.shrinkBox = shrinkBox;
function isIntersecting(line1, line2) {
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
                && x1 === x3;
        }
        if (slope1 === Infinity) {
            return ((x3 <= bixX && x3 >= smallX) || (x4 <= bixX && x4 >= smallX))
                && y1 === y3;
        }
        return ((x3 <= bixX && x3 >= smallX) && (y3 <= bixY && y3 >= smallY))
            || ((x4 <= bixX && x4 >= smallX) || (y4 <= bixY && y4 >= smallY));
    }
    if (slope1 === Infinity)
        y1 += 0.0001;
    if (slope2 === Infinity)
        y3 += 0.0001;
    if (slope1 === 0)
        x1 += 0.0001;
    if (slope2 === 0)
        x3 += 0.0001;
    const x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4))
        / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
    const y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4))
        / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
    if (isNaN(x) || isNaN(y)) {
        return false;
    }
    else { // tslint:disable-line
        if (x1 >= x2) {
            if (!(x2 <= x && x <= x1)) {
                return false;
            }
        }
        else {
            if (!(x1 <= x && x <= x2)) {
                return false;
            }
        }
        if (y1 >= y2) {
            if (!(y2 <= y && y <= y1)) {
                return false;
            }
        }
        else {
            if (!(y1 <= y && y <= y2)) {
                return false;
            }
        }
        if (x3 >= x4) {
            if (!(x4 <= x && x <= x3)) {
                return false;
            }
        }
        else {
            if (!(x3 <= x && x <= x4)) {
                return false;
            }
        }
        if (y3 >= y4) {
            if (!(y4 <= y && y <= y3)) {
                return false;
            }
        }
        else {
            if (!(y3 <= y && y <= y4)) {
                return false;
            }
        }
    }
    return true;
}
exports.isIntersecting = isIntersecting;
function isOverlap(item1, item2) {
    const lines1 = isBox(item1) ? box2Lines(item1) : [item1];
    const lines2 = isBox(item2) ? box2Lines(item2) : [item2];
    return lines1.some(line1 => lines2.some(line2 => isIntersecting(line1, line2)));
}
exports.isOverlap = isOverlap;
/**
 * Instead of the while when fix conflict.
 * */
function walkLoop(fn, max = 10) {
    return __awaiter(this, void 0, void 0, function* () {
        let alleviated = false;
        for (let i = 0; i < max; i++) {
            const result = yield fn();
            if (result.includes("alleviated" /* Alleviated */)) {
                alleviated = true;
                continue;
            }
            if (result.every(r => r === "no-conflict" /* NoConflict */)) {
                return "no-conflict" /* NoConflict */;
            }
            if (result.includes("failed" /* Failed */)) {
                return alleviated
                    ? "alleviated" /* Alleviated */
                    : "failed" /* Failed */;
            }
        }
        throw new Error('too many loop');
    });
}
exports.walkLoop = walkLoop;
/**
 * Instead of the console.log.
 * @example
 * const l = createLogFunction('EventBody');
 * l`Hello, world`;
 * > Hello, world
 * */
function createLogFunction(prefix) {
    return function (stringArr, ...values) {
        if (!definitions_1.DEBUG)
            return;
        const message = [stringArr[0]];
        for (let index = 0; index < values.length; index++) {
            message.push(values[index], stringArr[index + 1]);
        }
        console.log(`${prefix} #`, ...message);
    };
}
exports.createLogFunction = createLogFunction;
/**
 * Return a new freezed object base on specified object.
 * Like Object.freeze, but it's deep and will not change origin object.
 * */
function deepFreeze(originObject) {
    const newObject = JSON.parse(JSON.stringify(originObject));
    const propNames = Object.getOwnPropertyNames(newObject);
    // Freeze it's all of properties before freezing itself.
    for (const name of propNames) {
        if (typeof newObject[name] === 'object' && newObject[name] !== null) {
            newObject[name] = deepFreeze(newObject[name]);
        }
    }
    return Object.freeze(newObject);
}
exports.deepFreeze = deepFreeze;
//# sourceMappingURL=functions.js.map