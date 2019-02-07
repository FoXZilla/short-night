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
class EventBody2EventBodyFloater {
    constructor(ext) {
        this.ext = ext;
        this.conflicts = [];
        /**
         * above EventBody is above, below EventBody is below
         * */
        this.eventBodyList = [];
    }
    static isConflict(eb1, eb2) {
        if (eb1 === eb2)
            return false;
        if (eb1.drawInfo.floated || eb2.drawInfo.floated)
            return false;
        return functions_1.isOverlap(eb1.drawInfo.box, eb2.drawInfo.box);
    }
    float(conflicts) {
        return __awaiter(this, void 0, void 0, function* () {
            const maxWidthInConflict = Math.max(...conflicts.with.map(c => c.drawInfo.box.width + c.drawInfo.offset.x));
            conflicts.self.drawInfo.offset.x = maxWidthInConflict + 1;
            conflicts.self.drawInfo.maxWidth = Math.min(this.timeline.grid.eventWidth, this.axisBody.drawInfo.box.x - maxWidthInConflict);
            conflicts.self.drawInfo.floated = true;
            yield conflicts.self.apply();
        });
    }
    fix() {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeline = this.ext.components[definitions_1.SN.Timeline][0];
            this.axisBody = this.ext.components[definitions_1.SN.AxisBody][0];
            this.eventBodyList = Array.from(this.ext.components[definitions_1.SN.EventBody])
                .sort((eb1, eb2) => eb1.drawInfo.markDrawInfo.target.y - eb2.drawInfo.markDrawInfo.target.y);
            this.countConflict();
            if (this.conflicts.length === 0) {
                return "no-conflict" /* NoConflict */;
            }
            const conflict = this.pickRingleader();
            const options = {
                components: [
                    this.axisBody,
                    conflict.self,
                    ...conflict.with,
                ],
                protagonist: conflict.self,
            };
            yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.FixEventBody2EventBodyFloater, options);
            yield this.float(conflict);
            yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.FixEventBody2EventBodyFloater, Object.assign({}, options, { forward: true }));
            return "alleviated" /* Alleviated */;
        });
    }
    pickRingleader() {
        return this.conflicts.find(c1 => this.conflicts.every(c2 => c1.with.length >= c2.with.length));
    }
    countConflict() {
        this.conflicts.length = 0;
        for (const eb of this.eventBodyList) {
            const conflict = {
                self: eb,
                with: this.ext.components[definitions_1.SN.EventBody].filter(target => EventBody2EventBodyFloater.isConflict(eb, target)),
            };
            if (conflict.with.length)
                this.conflicts.push(conflict);
        }
    }
}
exports.default = EventBody2EventBodyFloater;
//# sourceMappingURL=EventBody2EventBodyFloater.js.map