import { Extension, ExtensionManager } from '.';
import Component from '../common/Component';
import { DEBUG, SN } from '../common/definitions';
import moveto = require('moveto');
import Axis from '../Axis';
import AxisBody from '../Axis/AxisBody';
import Timeline from '../Timeline';

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
export enum Breakpoint {
    PushScalesAndMilestones = 'PushScalesAndMilestones',
    FixEventBody2AxisMilestone = 'FixEventBody2AxisMilestone',
    FixEventAxis2EventAxis = 'FixEventAxis2EventAxis',
    FixEventBody2EventBodyMover = 'FixEventBody2EventBodyMover',
    FixEventBody2EventBodyFloater = 'FixEventBody2EventBodyFloater',
    DrawFrom = 'DrawFrom',
    Debug = 'Debug',
}

/**
 * Config for this extension.
 * @property {Breakpoint[]} breakpoints
 * A list of point, short-night will blocking when encounter that points.
 * @property {boolean} playAnimation
 * The short-night will unblock one breakpoint after some times when this been set true.
 * When this be set true and not specify breakpoints, the breakpoints will be
 * set as BreakpointAnimation.defaultAnimationBreakpoints to play animation.
 * @property {boolean} autoScroll - auto scroll to focus when playing animation.
 * @property {function} timeoutCounter - count a timeout to wait that point.
 * @property {boolean} scrollDuration - the duration of scroll.
 * @property {boolean} scrollContainer - scroll what. The default value is window.
 * */
export interface BreakpointAnimationConfig {
    breakpoints :Breakpoint[];
    playAnimation :boolean;

    // About animation
    autoScroll :boolean;
    timeoutCounter :(point :Breakpoint, config :Partial<BlockConfig>) => number;
    scrollDuration :number;
    scrollContainer :Window | HTMLElement;
}

/**
 * Config for this extension.
 * */
export interface BlockConfig {
    protagonist :Component;
    components :Component[];
    forward :boolean;
    onBlock :() => Promise<void>;
    onNext :() => Promise<void>;
}

/**
 * 1. Support that set a Breakpoint .
 * 2. Support that play animation base on Breakpoints.
 * */
export default class BreakpointAnimation implements Partial<Extension>, BreakpointAnimationConfig {
    constructor(
        public ext :ExtensionManager,
        {
            breakpoints = [],
            playAnimation = false,
            autoScroll = false,
            timeoutCounter = (point, config) => {
                if (point === Breakpoint.DrawFrom) return 100;

                return config.forward ? 200 : 300;
            },
            scrollDuration = 50,
            scrollContainer = window,
        } :Partial<BreakpointAnimationConfig> = {},
    ) {
        this.breakpoints = breakpoints;
        this.playAnimation = playAnimation;
        this.autoScroll = autoScroll;
        this.timeoutCounter = timeoutCounter;
        this.scrollDuration = scrollDuration;
        this.scrollContainer = scrollContainer;

        if (this.playAnimation && this.breakpoints.length === 0) {
            this.breakpoints = BreakpointAnimation.defaultAnimationBreakpoints;
        }

        if (DEBUG) {
            this.breakpoints.push(Breakpoint.Debug);
            (<any>window).next = this.next.bind(this);
            (<any>window).abort = () => { delete this.stepIn; };
        }
    }

    // Extend BreakpointAnimationConfig
    breakpoints :BreakpointAnimationConfig['breakpoints'];
    readonly playAnimation :BreakpointAnimationConfig['playAnimation'];
    timeoutCounter :BreakpointAnimationConfig['timeoutCounter'];
    autoScroll :BreakpointAnimationConfig['autoScroll'];
    scrollDuration :BreakpointAnimationConfig['scrollDuration'];
    scrollContainer :BreakpointAnimationConfig['scrollContainer'];

    /**
     * Scroll to top when end of play animation.
     * */
    onDraw(comp :Component) {
        if (Timeline.is(comp) && this.playAnimation) {
            this.moveTo.move(this.ext.components[SN.Timeline][0].canvas);
        }
    }

    /**
     * Blocking at a breakpoint util next called
     * */
    public async block(point :Breakpoint, config :Partial<BlockConfig> = {}) {
        const { onBlock, onNext, components = [] } = config;

        if (!this.breakpoints.includes(point)) return;
        console.log(`Blocking at ${point}.`);

        if (this.playAnimation) {
            if (this.autoScroll) {
                const scrollTarget = this.countScrollTarget(config);

                if (scrollTarget) {
                    const scrollDistance = scrollTarget - document.documentElement.scrollTop;
                    if (Math.abs(scrollDistance) > 10) {
                        this.moveTo.move(scrollTarget - document.documentElement.scrollTop);
                    }
                }
            }

            setTimeout(() => this.next(), this.timeoutCounter(point, config));
        }

        return (async () => {
            if (onBlock) await onBlock();
            components.forEach(comp => comp.draw());

            await new Promise<void>((resolve) => {
                this.stepIn = async () => {
                    if (onNext) await onNext();
                    components.forEach(comp => comp.hide());
                    resolve();
                };
            });

        })();
    }
    /**
     * Step into next breakpoint.
     * You can call window.next() to do same thing when DEBUG is true.
     * */
    public next() {
        if (!this.stepIn) {
            throw new Error('Call next when not blocking.');
        }

        this.stepIn();
        delete this.stepIn;
    }

    /**
     * Fill when short-night is blocking. Step in a breakpoint.
     * */
    protected stepIn ? :() => Promise<void>;
    /** Get a instance of moveto */
    protected get moveTo () :moveto {
        return new moveto({
            duration: this.scrollDuration,
            container: this.scrollContainer,
        });
    }
    /**
     * Count a number that be used scroll to focus when play animation.
     * */
    protected countScrollTarget(config :Partial<BlockConfig>) :number|null {
        const { components, protagonist } = config;

        const topPadding = 100;
        if (protagonist) return protagonist.drawInfo.box.y - topPadding;
        if (components && components.length) {
            const getTopped = (compList :Component[]) => compList.find(
                comp1 => compList.every(
                    comp2 => comp1.drawInfo.box.y >= comp2.drawInfo.box.y,
                ),
            );

            const componentListWithoutAxis = components.filter(
                comp => !Axis.is(comp) && !AxisBody.is(comp),
            );

            return getTopped(componentListWithoutAxis)!.drawInfo.box.x - topPadding;
        }

        return null;
    }

    /**
     * @see BreakpointAnimationConfig.playAnimation
     * */
    static defaultAnimationBreakpoints :Breakpoint[] = [
        Breakpoint.FixEventBody2AxisMilestone,
        Breakpoint.FixEventAxis2EventAxis,
        Breakpoint.FixEventBody2EventBodyMover,
        Breakpoint.FixEventBody2EventBodyFloater,
        Breakpoint.DrawFrom,
    ];
}
