import Component from '@engine/common/Component';
import BreakpointAnimation, { BreakpointAnimationConfig } from '@/extensions/BreakpointAnimation';
import { SN } from '@engine/common/config';
import Timeline from '@engine/Timeline';
import Axis from '@engine/Axis';
import AxisBody from '@engine/Axis/AxisBody';
import AxisScale from '@engine/Axis/AxisScale';
import AxisMilestone from '@engine/Axis/AxisMilestone';
import Event from '@engine/Event';
import EventBody from '@engine/Event/EventBody';
import EventMark from '@engine/Event/EventMark';
import EventAxis from '@engine/Event/EventAxis';

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
