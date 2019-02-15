"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
// @ts-ignore
var packageJson = require("../package.json");
try {
    // @ts-ignore
    exports.DEBUG = process.env.NODE_ENV === 'development';
}
catch (e) {
    exports.DEBUG = false;
}
var SN;
(function (SN) {
    SN["Timeline"] = "timeline";
    SN["Axis"] = "axis";
    SN["AxisBody"] = "axis_body";
    SN["AxisScale"] = "axis_scale";
    SN["AxisMilestone"] = "axis_milestone";
    SN["Event"] = "event";
    SN["EventBody"] = "event_body";
    SN["EventMark"] = "event_mark";
    SN["EventAxis"] = "event_axis";
})(SN = exports.SN || (exports.SN = {}));
exports.DATE_COUNT_EXTRA = (_a = {},
    _a["day" /* Day */] = 1000 * 60 * 60 * 24 / 2,
    _a["week" /* Week */] = 1000 * 60 * 60 * 24 * 7 / 2,
    _a["month" /* Month */] = 1000 * 60 * 60 * 24 * 30 / 2,
    _a["quarter" /* Quarter */] = 1000 * 60 * 60 * 24 * 30 * 3 / 2,
    _a["year" /* Year */] = 1000 * 60 * 60 * 24 * 30 * 12 / 2,
    _a);
exports.WALK_ON = (_b = {},
    _b[SN.EventAxis] = {
        offsetOneStep: 15,
    },
    _b);
exports.SN_VERSION = packageJson.version;
