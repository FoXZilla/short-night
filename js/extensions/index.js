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
const Axis_1 = require("../Axis");
const AxisBody_1 = require("../Axis/AxisBody");
const AxisScale_1 = require("../Axis/AxisScale");
const AxisMilestone_1 = require("../Axis/AxisMilestone");
const Event_1 = require("../Event");
const EventBody_1 = require("../Event/EventBody");
const EventMark_1 = require("../Event/EventMark");
const EventAxis_1 = require("../Event/EventAxis");
const BreakpointAnimation_1 = require("./BreakpointAnimation");
exports.BreakpointAnimation = BreakpointAnimation_1.default;
const BoxElementGenerator_1 = require("./BoxElementGenerator");
exports.BoxElementGenerator = BoxElementGenerator_1.default;
const GeneratorId_1 = require("./GeneratorId");
exports.GeneratorId = GeneratorId_1.default;
const PositionCounter_1 = require("./PositionCounter");
exports.PositionCounter = PositionCounter_1.default;
const ConflictFixer_1 = require("./ConflictFixer");
exports.ConflictFixer = ConflictFixer_1.default;
const METHODS = ['onConstruct', 'onApply', 'onDestroy', 'onHide', 'onDraw'];
/**
 * Manage ExtensionManager#components.
 * */
class Base {
    constructor(etx) {
        this.etx = etx;
    }
    onConstruct(comp) {
        this.etx.components[comp.name].push(comp);
    }
    onDestroy(comp) {
        this.etx.components[comp.name].splice(this.etx.components[comp.name].indexOf(comp), 1);
    }
}
exports.Base = Base;
class ExtensionManager {
    constructor({ breakpointAnimation } = {}) {
        /**
         * A shared object for every Component.
         * For extends, re-declare the ExtData.
         * */
        this.extraData = {};
        this.components = {
            [definitions_1.SN.Timeline]: [],
            [definitions_1.SN.Axis]: [],
            [definitions_1.SN.AxisBody]: [],
            [definitions_1.SN.AxisScale]: [],
            [definitions_1.SN.AxisMilestone]: [],
            [definitions_1.SN.Event]: [],
            [definitions_1.SN.EventBody]: [],
            [definitions_1.SN.EventMark]: [],
            [definitions_1.SN.EventAxis]: [],
        };
        this.extensions = [
            new Base(this),
            new GeneratorId_1.default(this),
            new PositionCounter_1.default(this),
            new ConflictFixer_1.default(this),
            this.breakpoint,
        ];
        this.onConstruct = createHandler('onConstruct', this);
        this.onApply = createHandler('onApply', this);
        this.onHide = createHandler('onHide', this);
        this.onDraw = createHandler('onDraw', this);
        this.onDestroy = createHandler('onDestroy', this);
        this.breakpoint = new BreakpointAnimation_1.default(this, breakpointAnimation);
        if (definitions_1.DEBUG) {
            this.extensions.push(new BoxElementGenerator_1.default(this));
        }
    }
    getParent(comp) {
        if (Axis_1.default.is(comp))
            return this.components[definitions_1.SN.Timeline][0];
        if (Event_1.default.is(comp))
            return this.components[definitions_1.SN.Timeline][0];
        if (AxisBody_1.default.is(comp))
            return this.components[definitions_1.SN.Axis][0];
        if (AxisMilestone_1.default.is(comp))
            return this.components[definitions_1.SN.Axis][0];
        if (AxisScale_1.default.is(comp))
            return this.components[definitions_1.SN.Axis][0];
        if (EventBody_1.default.is(comp))
            return this.components[definitions_1.SN.Event].find(event => event.body === comp);
        if (EventAxis_1.default.is(comp))
            return this.components[definitions_1.SN.Event].find(event => event.axis === comp);
        if (EventMark_1.default.is(comp))
            return this.components[definitions_1.SN.Event].find(event => event.mark === comp);
        throw new TypeError(`Cannot find parent of ${comp.constructor.name}`);
    }
}
exports.ExtensionManager = ExtensionManager;
function createHandler(methodName, etx) {
    return function extensionManagerMethod(comp) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const extension of etx.extensions) { // eslint-disable-line no-restricted-syntax
                if (methodName in extension) {
                    if (methodName === 'onApply') {
                        yield extension[methodName](comp); // eslint-disable-line no-await-in-loop
                    }
                    else {
                        extension[methodName](comp);
                    }
                }
            }
        });
    };
}
//# sourceMappingURL=index.js.map