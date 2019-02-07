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
const definitions_1 = require("../common/definitions");
const moveto = require("moveto");
const Axis_1 = require("../Axis");
const AxisBody_1 = require("../Axis/AxisBody");
const Timeline_1 = require("../Timeline");
/**
 * Supported all of Breakpoint.
 * @property {string} PushScalesAndMilestones
 * When recompute the position of Scales and Milestones
 * @property {string} FixEventBody2AxisMilestone
 * When fix conflict between EventBody and AxisMilestone.
 * @property {string} FixEventAxis2EventAxis
 * @property {string} FixEventBody2EventBodyMover
 * @property {string} FixEventBody2EventBodyFloater
 * @property {string} DrawFrom - when draw a timeline by data imported.
 * @property {string} Debug
 * Set a Breakpoint for debug.
 * When debug-mode enabled, short-night will blocking at Breakpoint.Debug automatically.
 * */
var Breakpoint;
(function (Breakpoint) {
    Breakpoint["PushScalesAndMilestones"] = "PushScalesAndMilestones";
    Breakpoint["FixEventBody2AxisMilestone"] = "FixEventBody2AxisMilestone";
    Breakpoint["FixEventAxis2EventAxis"] = "FixEventAxis2EventAxis";
    Breakpoint["FixEventBody2EventBodyMover"] = "FixEventBody2EventBodyMover";
    Breakpoint["FixEventBody2EventBodyFloater"] = "FixEventBody2EventBodyFloater";
    Breakpoint["DrawFrom"] = "DrawFrom";
    Breakpoint["Debug"] = "Debug";
})(Breakpoint = exports.Breakpoint || (exports.Breakpoint = {}));
/**
 * 1. Support that set a Breakpoint .
 * 2. Support that play animation base on Breakpoints.
 * */
class BreakpointAnimation {
    constructor(etx, { breakpoints = [], playAnimation = false } = {}) {
        this.etx = etx;
        this.breakpoints = breakpoints;
        this.playAnimation = playAnimation;
        if (this.playAnimation && this.breakpoints.length === 0) {
            this.breakpoints = BreakpointAnimation.defaultAnimationBreakpoints;
        }
        if (definitions_1.DEBUG) {
            this.breakpoints.push(Breakpoint.Debug);
            window.next = this.next.bind(this);
            window.abort = () => { delete this.stepIn; };
        }
    }
    /**
     * Scroll to top when end of play animation.
     * */
    onDraw(comp) {
        if (Timeline_1.default.is(comp) && this.playAnimation) {
            new moveto().move(this.etx.components[definitions_1.SN.Timeline][0].canvas);
        }
    }
    /**
     * Step into next breakpoint.
     * You can call window.next() to do same thing when DEBUG is true.
     * */
    next() {
        if (!this.stepIn) {
            throw new Error('Call next when not blocking.');
        }
        this.stepIn();
        delete this.stepIn;
    }
    /**
     * Blocking at a breakpoint util next called
     * */
    block(point, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { onBlock, onNext, components = [], forward = false } = config;
            if (!this.breakpoints.includes(point))
                return;
            console.log(`Blocking at ${point}.`);
            if (this.playAnimation) {
                const scrollTarget = this.countScrollTarget(config);
                if (scrollTarget) {
                    new moveto({ duration: 50 }).move(scrollTarget - document.documentElement.scrollTop);
                }
                setTimeout(() => this.next(), this.countInterval(point, forward));
            }
            return (() => __awaiter(this, void 0, void 0, function* () {
                if (onBlock)
                    yield onBlock();
                components.forEach(comp => comp.draw());
                yield new Promise((resolve) => {
                    this.stepIn = () => __awaiter(this, void 0, void 0, function* () {
                        if (onNext)
                            yield onNext();
                        components.forEach(comp => comp.hide());
                        resolve();
                    });
                });
            }))();
        });
    }
    /**
     * Count a number that be used scroll to focus when play animation.
     * */
    countScrollTarget(config) {
        const { components, protagonist } = config;
        const topPadding = 100;
        if (protagonist)
            return protagonist.drawInfo.box.y - topPadding;
        if (components && components.length) {
            const getTopped = (compList) => compList.find(comp1 => compList.every(comp2 => comp1.drawInfo.box.y >= comp2.drawInfo.box.y));
            const componentListWithoutAxis = components.filter(comp => !Axis_1.default.is(comp) && !AxisBody_1.default.is(comp));
            return getTopped(componentListWithoutAxis).drawInfo.box.x - topPadding;
        }
        return null;
    }
    /**
     * Count a number what ms is needed waiting for this point when playing animation.
     * @property {boolean} forward - @see BlockConfig.forward
     * */
    countInterval(point, forward) {
        if (point === Breakpoint.DrawFrom)
            return 300;
        return forward ? 200 : 300;
    }
}
/**
 * @see BreakpointAnimationConfig.playAnimation
 * */
BreakpointAnimation.defaultAnimationBreakpoints = [
    Breakpoint.FixEventBody2AxisMilestone,
    Breakpoint.FixEventAxis2EventAxis,
    Breakpoint.FixEventBody2EventBodyMover,
    Breakpoint.FixEventBody2EventBodyFloater,
    Breakpoint.DrawFrom,
];
exports.default = BreakpointAnimation;
//# sourceMappingURL=BreakpointAnimation.js.map