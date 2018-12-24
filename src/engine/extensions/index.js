import { DEBUG, SN } from '@/engine/common/config';
import BoxElementGenerator from '@/engine/extensions/BoxElementGenerator';
import GeneratorId from '@/engine/extensions/GeneratorId';
import PositionCounter from '@/engine/extensions/position-counter';
import BreakpointAnimation from '@/engine/extensions/BreakpointAnimation';
import ConflictFixer from '@/engine/extensions/ConflictFixer';
import AxisBody from '@/engine/Axis/AxisBody';
import AxisMilestone from '@/engine/Axis/AxisMilestone';
import AxisScale from '@/engine/Axis/AxisScale';
import EventBody from '@/engine/Event/EventBody';
import EventAxis from '@/engine/Event/EventAxis';
import EventMark from '@/engine/Event/EventMark';
import Axis from '@/engine/Axis';
import Event from '@/engine/Event';

const METHODS = ['onConstruct', 'onApply', 'onDestroy', 'onHide', 'onDraw'];

/**
 * Manage ExtensionManager#components.
 * */
export class Base {
    constructor(etx) {
        this.etx = etx;
    }

    onConstruct(comp) {
        this.etx.components[comp.name].push(comp);
    }

    onDestroy(comp) {
        this.etx.components[comp.name].splice(
            this.etx.components[comp.name].indexOf(comp),
            1,
        );
    }
}

/**
 * Create a ExtensionManager
 * @constructor
 * */
export function ExtensionManager({ breakpointAnimation } = {}) {
    this.components = {
        [SN.Timeline]: [],
        [SN.Axis]: [],
        [SN.AxisBody]: [],
        [SN.AxisScale]: [],
        [SN.AxisMilestone]: [],
        [SN.Event]: [],
        [SN.EventBody]: [],
        [SN.EventMark]: [],
        [SN.EventAxis]: [],
    };
    this.breakpoint = new BreakpointAnimation(this, breakpointAnimation);

    this.extensions = [
        new Base(this),
        new GeneratorId(this),
        new PositionCounter(this),
        new ConflictFixer(this),
        this.breakpoint,
    ];

    if (DEBUG) {
        this.extensions.push(
            new BoxElementGenerator(this),
        );
    }
}
ExtensionManager.prototype.getParent = function getParent(comp) {
    if (Axis.is(comp)) return this.components[SN.Timeline][0];
    if (Event.is(comp)) return this.components[SN.Timeline][0];
    if (AxisBody.is(comp)) return this.components[SN.Axis][0];
    if (AxisMilestone.is(comp)) return this.components[SN.Axis][0];
    if (AxisScale.is(comp)) return this.components[SN.Axis][0];
    if (EventBody.is(comp)) return this.components[SN.Event].find(event => event.body === comp);
    if (EventAxis.is(comp)) return this.components[SN.Event].find(event => event.axis === comp);
    if (EventMark.is(comp)) return this.components[SN.Event].find(event => event.mark === comp);

    throw new TypeError(`Cannot find parent of ${comp.constructor.name}`);
};

// Add methods on ExtensionManager.prototype from METHODS
METHODS.forEach((methodName) => {
    ExtensionManager.prototype[methodName] = async function extensionManagerMethod(...args) {
        for (const extension of this.extensions) { // eslint-disable-line no-restricted-syntax
            if (methodName in extension) {
                if (methodName === 'onConstruct') {
                    extension[methodName](...args);
                } else {
                    await extension[methodName](...args); // eslint-disable-line no-await-in-loop
                }
            }
        }
    };
});

export { default as BoxElementGenerator } from '@/engine/extensions/BoxElementGenerator';
export { default as GeneratorId } from '@/engine/extensions/GeneratorId';
export { default as PositionCounter } from '@/engine/extensions/position-counter';
export { default as BreakpointAnimation } from '@/engine/extensions/BreakpointAnimation';
export { default as ConflictFixer } from '@/engine/extensions/ConflictFixer';
