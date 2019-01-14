import Component from '../common/Component';
import BreakpointAnimation, { BreakpointAnimationConfig } from './BreakpointAnimation';
import { SN } from '../common/definitions';
import Timeline from '../Timeline';
import Axis from '../Axis';
import AxisBody from '../Axis/AxisBody';
import AxisScale from '../Axis/AxisScale';
import AxisMilestone from '../Axis/AxisMilestone';
import Event from '../Event';
import EventBody from '../Event/EventBody';
import EventMark from '../Event/EventMark';
import EventAxis from '../Event/EventAxis';

export interface Extension {
    onConstruct(comp:Component) :void;
    onApply(comp:Component) :Promise<void>;
    onHide(comp:Component) :Promise<void>|void;
    onDraw(comp:Component) :Promise<void>|void;
    onDestroy(comp:Component) :Promise<void>|void;
}

export declare class ExtensionManager implements Extension {
    constructor(
        { breakpointAnimation }
        ?:{
            breakpointAnimation ?:BreakpointAnimationConfig,
        },
    );

    breakpoint: BreakpointAnimation;
    components: {
        [SN.Timeline]: Timeline[];
        [SN.Axis]: Axis[];
        [SN.AxisBody]: AxisBody[];
        [SN.AxisScale]: AxisScale[];
        [SN.AxisMilestone]: AxisMilestone[];
        [SN.Event]: Event[];
        [SN.EventBody]: EventBody[];
        [SN.EventMark]: EventMark[];
        [SN.EventAxis]: EventAxis[];
    };
    extensions :Partial<Extension>[];

    getParent(comp:EventAxis|EventBody|EventMark) :Event;
    getParent(comp:AxisBody|AxisMilestone|AxisScale) :Axis;
    getParent(comp:Event|Axis) :Timeline;

    onConstruct(comp:Component) :void;
    onApply(comp:Component) :Promise<void>;
    onHide(comp:Component) :Promise<void>|void;
    onDraw(comp:Component) :Promise<void>|void;
    onDestroy(comp:Component) :Promise<void>|void;
}

export { default as  BoxElementGenerator } from '@/engine/extensions/BoxElementGenerator';
export { default as  GeneratorId } from '@/engine/extensions/GeneratorId';
export { default as  PositionCounter } from '@/engine/extensions/position-counter';
export { default as  BreakpointAnimation } from '@/engine/extensions/BreakpointAnimation';
export { default as  ConflictFixer } from '@/engine/extensions/ConflictFixer';
