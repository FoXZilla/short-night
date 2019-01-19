import { DEBUG, SN } from '@/engine/common/definitions';
import BoxElementGenerator from './BoxElementGenerator';
import GeneratorId from './GeneratorId';
import PositionCounter from './position-counter';
import BreakpointAnimation from './BreakpointAnimation';
import ConflictFixer from './ConflictFixer';
import Axis from '../Axis';
import AxisBody from '../Axis/AxisBody';
import AxisScale from '../Axis/AxisScale';
import AxisMilestone from '../Axis/AxisMilestone';
import Event from '../Event';
import EventBody from '../Event/EventBody';
import EventMark from '../Event/EventMark';
import EventAxis from '../Event/EventAxis';

const METHODS = ['onConstruct', 'onApply', 'onDestroy', 'onHide', 'onDraw'];

Use mixin!
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
                if (methodName === 'onApply') {
                    await extension[methodName](...args); // eslint-disable-line no-await-in-loop
                } else {
                    extension[methodName](...args);
                }
            }
        }
    };
});

export { default as BoxElementGenerator } from './BoxElementGenerator';
export { default as GeneratorId } from './GeneratorId';
export { default as PositionCounter } from './position-counter';
export { default as BreakpointAnimation } from './BreakpointAnimation';
export { default as ConflictFixer } from './ConflictFixer';
