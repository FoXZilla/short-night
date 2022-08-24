import Component from '../common/Component';
import { DEBUG, SN } from '../common/definitions';
import Timeline from '../Timeline';
import Axis from '../Axis';
import AxisBody from '../Axis/AxisBody';
import AxisScale from '../Axis/AxisScale';
import AxisMilestone from '../Axis/AxisMilestone';
import Event from '../Event';
import EventBody from '../Event/EventBody';
import EventMark from '../Event/EventMark';
import EventAxis from '../Event/EventAxis';

import BreakpointAnimation, { BreakpointAnimationConfig } from './BreakpointAnimation';
import BoxElementGenerator from './BoxElementGenerator';
import IdGenerator from './IdGenerator';
import PositionCounter from './PositionCounter';
import ConflictFixer from './ConflictFixer';

export {
    BoxElementGenerator,
    IdGenerator,
    PositionCounter,
    BreakpointAnimation,
    ConflictFixer,
};

/**
 * @property {string} Debug - enable the extension both normal and disableAllButDebug
 * @property {string} DebugOnly - enable the extension only the debug is true
 * */
export enum ExtensionType {
    Debug = 'debug',
    DebugOnly = 'debug-only',
}

export interface Extension {
    /**
     * Specify the purpose of extension.
     * */
    type? :ExtensionType;

    onConstruct(comp :Component) :void;
    onApply(comp :Component) :Promise<void>;
    onDraw(comp :Component) :void;
    onHide(comp :Component) :void;
    onDestroy(comp :Component) :void;
}
type ExtensionHandler = 'onConstruct' | 'onApply' | 'onDraw' | 'onHide' | 'onDestroy';

export interface ExtraData {}

const METHODS :ExtensionHandler[] = ['onConstruct', 'onApply', 'onDestroy', 'onHide', 'onDraw'];

/**
 * Manage ExtensionManager#components.
 * */
export class Base implements Partial<Extension>{
    constructor(public ext :ExtensionManager) {}

    onConstruct(comp :Component) {
        (<any> this.ext.components)[comp.name].push(comp);
    }

    onDestroy(comp :Component) {
        (<any> this.ext.components)[comp.name].splice(
            (<any> this.ext.components)[comp.name].indexOf(comp),
            1,
        );
    }
}

export class ExtensionManager implements Extension {
    constructor(
        { breakpointAnimation, disableAll = false, disableAllButDebug = false }
        :{
            disableAll? :boolean,
            disableAllButDebug? :boolean,
            breakpointAnimation? :Partial<BreakpointAnimationConfig>,
        } = {},
    ) {
        this.disableAll = disableAll;
        this.disableAllButDebug = disableAllButDebug;
        this.breakpoint = new BreakpointAnimation(this, breakpointAnimation);
        this.extensions  = [
            new Base(this),
            new IdGenerator(this),
            new BoxElementGenerator(this),
            new PositionCounter(this),
            new ConflictFixer(this),
            this.breakpoint,
        ];
    }

    /**
     * Disable all of extensions but enable the extensions supported debug.
     * */
    disableAllButDebug :boolean;
    /**
     * Disable all of extensions.
     * */
    disableAll :boolean;
    /**
     * A shared object for every Component.
     * For extends, re-declare the ExtData.
     * */
    extraData :ExtraData = {};
    breakpoint :BreakpointAnimation;
    components :{
        [SN.Timeline] :Timeline[];
        [SN.Axis] :Axis[];
        [SN.AxisBody] :AxisBody[];
        [SN.AxisScale] :AxisScale[];
        [SN.AxisMilestone] :AxisMilestone[];
        [SN.Event] :Event[];
        [SN.EventBody] :EventBody[];
        [SN.EventMark] :EventMark[];
        [SN.EventAxis] :EventAxis[];
    } = {
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
    extensions :Partial<Extension>[];

    getParent(comp :EventAxis|EventBody|EventMark) :Event;
    getParent(comp :AxisBody|AxisMilestone|AxisScale) :Axis;
    getParent(comp :Event|Axis) :Timeline;
    getParent(comp :any) :any {
        if (Axis.is(comp)) return this.components[SN.Timeline][0];
        if (Event.is(comp)) return this.components[SN.Timeline][0];
        if (AxisBody.is(comp)) return this.components[SN.Axis][0];
        if (AxisMilestone.is(comp)) return this.components[SN.Axis][0];
        if (AxisScale.is(comp)) return this.components[SN.Axis][0];
        if (EventBody.is(comp)) return this.components[SN.Event].find(event => event.body === comp);
        if (EventAxis.is(comp)) return this.components[SN.Event].find(event => event.axis === comp);
        if (EventMark.is(comp)) return this.components[SN.Event].find(event => event.mark === comp);

        throw new TypeError(`Cannot find parent of ${comp.constructor.name}`);
    }

    onConstruct = createHandler('onConstruct', this);
    onApply = createHandler('onApply', this);
    onHide = createHandler('onHide', this);
    onDraw = createHandler('onDraw', this);
    onDestroy = createHandler('onDestroy', this);
}

function createHandler(methodName :ExtensionHandler, ext :ExtensionManager) {
    return async function extensionManagerMethod(comp :Component) {
        if (ext.disableAll) return;
        // eslint-disable-next-line no-restricted-syntax
        skip_extension: for (const extension of ext.extensions) {
            if (extension.type === ExtensionType.DebugOnly && !DEBUG) continue skip_extension;
            if (ext.disableAllButDebug) {
                if (!DEBUG) continue skip_extension;
                if (!extension.type) continue skip_extension;
                if (
                    ![ExtensionType.DebugOnly, ExtensionType.Debug].includes(extension.type)
                ) continue skip_extension;
            }

            if (methodName in extension) {
                if (methodName === 'onApply') {
                    await extension[methodName]!(comp); // eslint-disable-line no-await-in-loop
                } else {
                    extension[methodName]!(comp);
                }
            }
        }
    };
}
