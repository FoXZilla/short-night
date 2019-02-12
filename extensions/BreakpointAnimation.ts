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
export enum Breakpoint{
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
 * */
export interface BreakpointAnimationConfig {
    breakpoints? :Breakpoint[];
    playAnimation? :boolean;
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
export default class BreakpointAnimation implements Partial<Extension>{
    constructor(
        public ext :ExtensionManager,
        { breakpoints= [], playAnimation= false } :BreakpointAnimationConfig = {},
    ) {
        this.breakpoints = breakpoints;
        this.playAnimation = playAnimation;

        if (this.playAnimation && this.breakpoints.length === 0) {
            this.breakpoints = BreakpointAnimation.defaultAnimationBreakpoints;
        }

        if (DEBUG) {
            this.breakpoints.push(Breakpoint.Debug);
            (<any>window).next = this.next.bind(this);
            (<any>window).abort = () => { delete this.stepIn; };
        }
    }

    /**
     * Scroll to top when end of play animation.
     * */
    onDraw(comp :Component) {
        if (Timeline.is(comp) && this.playAnimation) {
            new moveto().move(this.ext.components[SN.Timeline][0].canvas);
        }
    }

    /** @see BreakpointAnimationConfig.breakpoints */
    protected breakpoints :Breakpoint[];
    /** @see BreakpointAnimationConfig.playAnimation */
    protected readonly playAnimation :boolean;
    /**
     * Fill when short-night is blocking. Step in a breakpoint.
     * */
    protected stepIn ? :() => Promise<void>;

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
    async block(point :Breakpoint, config :Partial<BlockConfig> = {}) {
        const { onBlock, onNext, components = [], forward = false } = config;

        if (!this.breakpoints.includes(point)) return;
        console.log(`Blocking at ${point}.`);

        if (this.playAnimation) {
            const scrollTarget = this.countScrollTarget(config);

            if (scrollTarget) {
                new moveto({ duration: 50 }).move(
                    scrollTarget - document.documentElement.scrollTop,
                );
            }

            setTimeout(() => this.next(), this.countInterval(point, forward));
        }

        return (async () => {
            if (onBlock) await onBlock();
            components.forEach(comp => comp.draw());

            await new Promise((resolve) => {
                this.stepIn = async () => {
                    if (onNext) await onNext();
                    components.forEach(comp => comp.hide());
                    resolve();
                };
            });

        })();
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
     * Count a number what ms is needed waiting for this point when playing animation.
     * @property {boolean} forward - @see BlockConfig.forward
     * */
    protected countInterval(point :Breakpoint, forward :boolean) :number {
        if (point === Breakpoint.DrawFrom) return 300;

        return forward ? 200 : 300;
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
