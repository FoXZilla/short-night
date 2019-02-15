"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var definitions_1 = require("./definitions");
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
    var styles = getComputedStyle(elt);
    return {
        x: parseFloat(styles.left),
        y: parseFloat(styles.top),
        width: parseFloat(styles.width),
        height: parseFloat(styles.height),
    };
}
exports.parseBox = parseBox;
function mergeBox() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var e_1, _a;
    var leftTop = {
        x: Infinity,
        y: Infinity,
    };
    var rightBottom = {
        x: -Infinity,
        y: -Infinity,
    };
    try {
        for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
            var box = args_1_1.value;
            if (box.x < leftTop.x)
                leftTop.x = box.x;
            if (box.y < leftTop.y)
                leftTop.y = box.y;
            if (box.x + box.width > rightBottom.x)
                rightBottom.x = box.x + box.width;
            if (box.y + box.height > rightBottom.y)
                rightBottom.y = box.y + box.height;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return {
        x: leftTop.x,
        y: leftTop.y,
        width: rightBottom.x - leftTop.x,
        height: rightBottom.y - leftTop.y,
    };
}
exports.mergeBox = mergeBox;
function shrinkBox(box, distance) {
    if (distance === void 0) { distance = 1; }
    return {
        x: box.x + distance,
        y: box.y + distance,
        width: box.width - distance * 2,
        height: box.height - distance * 2,
    };
}
exports.shrinkBox = shrinkBox;
function isIntersecting(line1, line2) {
    var _a;
    var x1 = line1.startX, y1 = line1.startY, x2 = line1.endX, y2 = line1.endY;
    var x3 = line2.startX, y3 = line2.startY, x4 = line2.endX, y4 = line2.endY;
    if ([x1, x2, x3, x4, y1, y2, y3, y4].some(isNaN)) {
        throw TypeError('Unexpected NaN');
    }
    _a = __read([x1, x2, x3, x4, y1, y2, y3, y4].map(Math.round), 8), x1 = _a[0], x2 = _a[1], x3 = _a[2], x4 = _a[3], y1 = _a[4], y2 = _a[5], y3 = _a[6], y4 = _a[7];
    // Same slope
    var _b = __read([
        Math.abs(x1 - x2) / Math.abs(y1 - y2),
        Math.abs(x3 - x4) / Math.abs(y3 - y4),
    ], 2), slope1 = _b[0], slope2 = _b[1];
    if (slope1 === slope2) {
        var _c = __read([x1, x2].sort(function (n1, n2) { return n2 - n1; }), 2), bixX = _c[0], smallX = _c[1];
        var _d = __read([y1, y2].sort(function (n1, n2) { return n2 - n1; }), 2), bixY = _d[0], smallY = _d[1];
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
    var x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4))
        / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
    var y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4))
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
    var lines1 = isBox(item1) ? box2Lines(item1) : [item1];
    var lines2 = isBox(item2) ? box2Lines(item2) : [item2];
    return lines1.some(function (line1) { return lines2.some(function (line2) { return isIntersecting(line1, line2); }); });
}
exports.isOverlap = isOverlap;
/**
 * Instead of the while when fix conflict.
 * */
function walkLoop(fn, max) {
    if (max === void 0) { max = 10; }
    return __awaiter(this, void 0, void 0, function () {
        var alleviated, i, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    alleviated = false;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < max)) return [3 /*break*/, 4];
                    return [4 /*yield*/, fn()];
                case 2:
                    result = _a.sent();
                    if (result.includes("alleviated" /* Alleviated */)) {
                        alleviated = true;
                        return [3 /*break*/, 3];
                    }
                    if (result.every(function (r) { return r === "no-conflict" /* NoConflict */; })) {
                        return [2 /*return*/, "no-conflict" /* NoConflict */];
                    }
                    if (result.includes("failed" /* Failed */)) {
                        return [2 /*return*/, alleviated
                                ? "alleviated" /* Alleviated */
                                : "failed" /* Failed */];
                    }
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: throw new Error('too many loop');
            }
        });
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
    return function (stringArr) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        if (!definitions_1.DEBUG)
            return;
        var message = [stringArr[0]];
        for (var index = 0; index < values.length; index++) {
            message.push(values[index], stringArr[index + 1]);
        }
        console.log.apply(console, __spread([prefix + " #"], message));
    };
}
exports.createLogFunction = createLogFunction;
/**
 * Return a new freezed object base on specified object.
 * Like Object.freeze, but it's deep and will not change origin object.
 * */
function deepFreeze(originObject) {
    var e_2, _a;
    var newObject = JSON.parse(JSON.stringify(originObject));
    var propNames = Object.getOwnPropertyNames(newObject);
    try {
        // Freeze it's all of properties before freezing itself.
        for (var propNames_1 = __values(propNames), propNames_1_1 = propNames_1.next(); !propNames_1_1.done; propNames_1_1 = propNames_1.next()) {
            var name_1 = propNames_1_1.value;
            if (typeof newObject[name_1] === 'object' && newObject[name_1] !== null) {
                newObject[name_1] = deepFreeze(newObject[name_1]);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (propNames_1_1 && !propNames_1_1.done && (_a = propNames_1.return)) _a.call(propNames_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return Object.freeze(newObject);
}
exports.deepFreeze = deepFreeze;
