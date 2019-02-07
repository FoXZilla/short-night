"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packageJson = require("../package.json");
exports.DEBUG = process.env.NODE_ENV === 'development';
var SN;
(function (SN) {
    SN["Timeline"] = "time_line";
    SN["Axis"] = "axis";
    SN["AxisBody"] = "axis_body";
    SN["AxisScale"] = "axis_scale";
    SN["AxisMilestone"] = "axis_milestone";
    SN["Event"] = "event";
    SN["EventBody"] = "event_body";
    SN["EventMark"] = "event_mark";
    SN["EventAxis"] = "event_axis";
})(SN = exports.SN || (exports.SN = {}));
exports.DATE_COUNT_EXTRA = {
    ["day" /* Day */]: 1000 * 60 * 60 * 24 / 2,
    ["week" /* Week */]: 1000 * 60 * 60 * 24 * 7 / 2,
    ["month" /* Month */]: 1000 * 60 * 60 * 24 * 30 / 2,
    ["quarter" /* Quarter */]: 1000 * 60 * 60 * 24 * 30 * 3 / 2,
    ["year" /* Year */]: 1000 * 60 * 60 * 24 * 30 * 12 / 2,
};
exports.WALK_ON = {
    [SN.EventAxis]: {
        offsetOneStep: 15,
    },
};
exports.SN_VERSION = packageJson.version;
//# sourceMappingURL=definitions.js.map