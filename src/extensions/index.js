import { DEBUG, SN } from '@/engine/common/config';
import BoxElementGenerator from '@/extensions/box-element-generator';
import GeneratorId from '@/extensions/generator-id';
import PositionCounter from '@/extensions/position-counter';
import BreakpointAnimation from '@/extensions/breakpoint-animation';
import ConflictFixer from '@/extensions/conflict-fixer';
import AxisBody from '@/engine/axis/body';
import AxisMilestone from '@/engine/axis/milestone';
import AxisScale from '@/engine/axis/scale';
import EventBody from '@/engine/event/body';
import EventAxis from '@/engine/event/axis';
import EventMark from '@/engine/event/mark';
import Axis from '@/engine/axis';
import Event from '@/engine/event';

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
