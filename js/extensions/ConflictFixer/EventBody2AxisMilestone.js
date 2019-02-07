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
class EventBody2AxisMilestone {
    constructor(ext) {
        this.ext = ext;
    }
    fix() {
        return __awaiter(this, void 0, void 0, function* () {
            const eventBodyList = this.ext.components[definitions_1.SN.EventBody];
            const axisMilestoneList = this.ext.components[definitions_1.SN.AxisMilestone];
            for (const eventBody of eventBodyList) {
                for (const axisMilestone of axisMilestoneList) {
                    if (functions_1.isOverlap(eventBody.drawInfo.box, axisMilestone.drawInfo.box)) {
                        const options = {
                            protagonist: axisMilestone,
                            components: [
                                ...this.ext.components[definitions_1.SN.AxisBody],
                                axisMilestone,
                                eventBody,
                            ],
                        };
                        yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.FixEventBody2AxisMilestone, options);
                        eventBody.drawInfo.offset.x = axisMilestone.drawInfo.box.width / 2 + 1;
                        yield eventBody.apply();
                        yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.FixEventBody2AxisMilestone, Object.assign({}, options, { forward: true }));
                    }
                }
            }
            return "no-conflict" /* NoConflict */;
        });
    }
}
exports.default = EventBody2AxisMilestone;
//# sourceMappingURL=EventBody2AxisMilestone.js.map