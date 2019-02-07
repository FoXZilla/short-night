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
const definitions_1 = require("../../common/definitions");
const functions_1 = require("../../common/functions");
const BreakpointAnimation_1 = require("../BreakpointAnimation");
class EventAxis2EventAxis {
    constructor(ext) {
        this.ext = ext;
    }
    fix() {
        return __awaiter(this, void 0, void 0, function* () {
            const eventAxisList = Array.from(this.ext.components[definitions_1.SN.EventAxis])
                .sort((ea1, ea2) => ea2.drawInfo.length - ea1.drawInfo.length);
            while (eventAxisList.some(ea1 => eventAxisList.some(ea2 => EventAxis2EventAxis.isConflict(ea1, ea2)))) {
                for (const ea1 of eventAxisList) {
                    const conflictWith = eventAxisList.filter(ea2 => EventAxis2EventAxis.isConflict(ea1, ea2));
                    if (conflictWith.length) {
                        const options = {
                            protagonist: ea1,
                            components: [
                                ...this.ext.components[definitions_1.SN.AxisBody],
                                this.ext.getParent(ea1),
                                ...conflictWith.map(ea => this.ext.getParent(ea)),
                            ],
                        };
                        yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.FixEventAxis2EventAxis, options);
                        ea1.drawInfo.offsetX += 15; // TODO: configurable
                        yield ea1.apply();
                        yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.FixEventAxis2EventAxis, Object.assign({}, options, { forward: true }));
                        break;
                    }
                }
            }
            return "no-conflict" /* NoConflict */;
        });
    }
    static isConflict(ea1, ea2) {
        if (ea1 === ea2)
            return false;
        const line1 = {
            startX: ea1.drawInfo.markDrawInfo.target.x + ea1.drawInfo.offsetX,
            startY: ea1.drawInfo.markDrawInfo.target.y,
            endX: ea1.drawInfo.markDrawInfo.target.x + ea1.drawInfo.offsetX,
            endY: ea1.drawInfo.markDrawInfo.target.y - ea1.drawInfo.length,
        };
        const line2 = {
            startX: ea2.drawInfo.markDrawInfo.target.x + ea2.drawInfo.offsetX,
            startY: ea2.drawInfo.markDrawInfo.target.y,
            endX: ea2.drawInfo.markDrawInfo.target.x + ea2.drawInfo.offsetX,
            endY: ea2.drawInfo.markDrawInfo.target.y - ea2.drawInfo.length,
        };
        return functions_1.isIntersecting(line1, line2);
    }
}
exports.default = EventAxis2EventAxis;
//# sourceMappingURL=EventAxis2EventAxis.js.map