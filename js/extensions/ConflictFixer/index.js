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
const Timeline_1 = require("../../Timeline");
const functions_1 = require("../../common/functions");
const EventBody2AxisMilestone_1 = require("./EventBody2AxisMilestone");
const EventAxis2EventAxis_1 = require("./EventAxis2EventAxis");
const EventBody2EventBodyMover_1 = require("./EventBody2EventBodyMover");
const EventBody2EventBodyFloater_1 = require("./EventBody2EventBodyFloater");
/**
 * Fix the conflict between component and each other by:
 * 1. adjust component using fixers.
 * 2. stretch Axis.
 * */
class ConflictFixer {
    constructor(ext) {
        this.ext = ext;
        this.fixers = [
            new EventBody2AxisMilestone_1.default(this.ext),
            new EventAxis2EventAxis_1.default(this.ext),
            new EventBody2EventBodyMover_1.default(this.ext),
            new EventBody2EventBodyFloater_1.default(this.ext),
        ];
        this.counter = 0;
    }
    onApply(timeline) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Timeline_1.default.is(timeline))
                return;
            // Conflict is fixed
            if ((yield this.fixAll()) === "no-conflict" /* NoConflict */) {
                this.counter = 0;
                return;
            }
            // Try stretch length of Axis
            this.counter++;
            if (this.counter > 10) { // TODO: make configurable
                const msg = `Too many times(${this.counter}) of try fix conflict.`;
                if (definitions_1.DEBUG)
                    throw new Error(msg);
                else
                    console.warn(msg);
            }
            yield Promise.resolve().then(() => timeline.apply({
                axisLength: timeline.runtime.axisLength * 1.1,
            }));
        });
    }
    /**
     * Try fix all conflict by adjust components.
     * */
    fixAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield functions_1.walkLoop(() => __awaiter(this, void 0, void 0, function* () {
                const results = [];
                for (const fixer of this.fixers) {
                    results.push(yield fixer.fix());
                }
                return results;
            }));
        });
    }
}
exports.default = ConflictFixer;
//# sourceMappingURL=index.js.map