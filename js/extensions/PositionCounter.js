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
const Axis_1 = require("../Axis");
const functions_1 = require("../common/functions");
const BreakpointAnimation_1 = require("./BreakpointAnimation");
const definitions_1 = require("../common/definitions");
const Timeline_1 = require("../Timeline");
/**
 * Milestone shouldn't occupy the space of Axis.
 * So we move Event, Scale and Milestone if they upper has any Milestones.
 * */
class PositionCounter {
    constructor(etx) {
        this.etx = etx;
        this.pushConfigs = [];
    }
    onApply(comp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Axis_1.default.is(comp))
                return yield this.adjustAxis(comp);
            if (Timeline_1.default.is(comp))
                return yield this.adjustEvent(comp);
        });
    }
    /**
     * When a component destroyed, remove a config made by it.
     * */
    onDestroy(comp) {
        while (true) {
            const index = this.pushConfigs.findIndex(config => config.component === comp);
            if (index === -1)
                break;
            else
                this.pushConfigs.splice(index, 1);
        }
    }
    adjustAxis(axis) {
        return __awaiter(this, void 0, void 0, function* () {
            const childComponents = [
                axis.body,
                ...axis.scales,
                ...axis.milestones,
            ];
            // Milestone cannot occupy the space of Axis
            axis.extraData.realLength =
                axis.drawInfo.length
                    - axis.milestones.reduce(// Reserved space for Milestone
                    (h, m) => h + m.drawInfo.box.height, 0);
            // Set real Y in milestones and scales
            axis.milestones.forEach(m => m.drawInfo.alignY *= axis.extraData.realLength);
            axis.scales.forEach(s => s.drawInfo.alignY *= axis.extraData.realLength);
            yield Promise.all([...axis.milestones, ...axis.scales].map(c => c.apply()));
            // Set Push-config
            axis.milestones.forEach(milestone => this.addPushConfig({
                critical: milestone.drawInfo.box.y,
                additional: milestone.drawInfo.box.height,
                component: milestone,
            }));
            // Push milestones and scales
            yield this.etx.breakpoint.block(BreakpointAnimation_1.Breakpoint.PushScalesAndMilestones, {
                components: childComponents,
            });
            const pushTarget = [...axis.milestones, ...axis.scales].sort((comp1, comp2) => comp1.drawInfo.alignY - comp2.drawInfo.alignY);
            for (const comp of pushTarget) {
                const distance = this.countCritical(comp.drawInfo.alignY);
                if (distance === 0)
                    continue;
                if (comp.name === definitions_1.SN.AxisMilestone) {
                    yield Promise.all(pushTarget.map(comp => comp.apply()));
                    yield this.etx.breakpoint.block(BreakpointAnimation_1.Breakpoint.PushScalesAndMilestones, {
                        components: childComponents,
                    });
                }
                comp.drawInfo.alignY += distance;
            }
            yield Promise.all(pushTarget.map(comp => comp.apply()));
            yield this.etx.breakpoint.block(BreakpointAnimation_1.Breakpoint.PushScalesAndMilestones, {
                components: childComponents,
            });
            yield Promise.all(childComponents.map(c => c.apply()));
            axis.drawInfo.box = functions_1.mergeBox(...childComponents.map(c => c.drawInfo.box));
        });
    }
    adjustEvent(timeline) {
        return __awaiter(this, void 0, void 0, function* () {
            const events = timeline.events;
            const axis = this.etx.components[definitions_1.SN.Axis][0];
            for (const event of events) {
                event.drawInfo.target.y *= axis.extraData.realLength;
                event.drawInfo.target.y += axis.body.drawInfo.box.y;
                event.drawInfo.target.y += this.countCritical(event.drawInfo.target.y);
                if (event.drawInfo.axisLength) {
                    event.drawInfo.axisLength *= axis.extraData.realLength;
                    event.drawInfo.axisLength += this.countCritical(event.drawInfo.target.y);
                }
            }
            yield Promise.all(events.map(event => event.apply()));
        });
    }
    addPushConfig(config) {
        this.pushConfigs.push(config);
    }
    countCritical(num) {
        if (this.pushConfigs.length === 0)
            return num;
        return this.pushConfigs.reduce((result, config) => {
            return num > config.critical ? result + config.additional : result;
        }, 0);
    }
}
exports.default = PositionCounter;
//# sourceMappingURL=PositionCounter.js.map