import Component from "@engine/common/component";
import BreakpointAnimation from "@/extensions/breakpoint-animation";
import {SN} from "@engine/common/config";
import Timeline from "@engine/timeline";
import Axis from "@engine/axis";
import AxisBody from "@engine/axis/body";
import AxisScale from "@engine/axis/scale";
import AxisMilestone from "@engine/axis/milestone";
import Event from "@engine/event";
import EventBody from "@engine/event/body";
import EventMark from "@engine/event/mark";
import EventAxis from "@engine/event/axis";

export interface Extension {
    onConstruct(comp:Component) :void;
    onApply(comp:Component) :Promise<void>;
    onHide(comp:Component) :Promise<void>|void;
    onDraw(comp:Component) :Promise<void>|void;
    onDestroy(comp:Component) :Promise<void>|void;
}

export declare class ExtensionManager implements Extension {
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

