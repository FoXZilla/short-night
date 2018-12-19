import { ExtensionManager } from '@/extensions/index';
import Component from '@engine/common/Component';
import { DEBUG, SN } from '@engine/common/config';
import * as moveto from 'moveto';
import Axis from '@engine/Axis';
import AxisBody from '@engine/Axis/AxisBody';

export enum Breakpoint{
    PushScalesAndMilestones = 'PushScalesAndMilestones',
    FixEventBody2AxisMilestone = 'FixEventBody2AxisMilestone',
    FixEventAxis2EventAxis = 'FixEventAxis2EventAxis',
    FixEventBody2EventBodyMover = 'FixEventBody2EventBodyMover',
    FixEventBody2EventBodyFloater = 'FixEventBody2EventBodyFloater',
    Debug = 'Debug',
}

export interface BreakpointAnimationConfig {
    breakpoints?: Breakpoint[];
    playAnimation?: boolean;
}

export default class BreakpointAnimation {
    breakpoints:Breakpoint[];
    playAnimation: boolean;

    constructor(
        public etx:ExtensionManager,
        { breakpoints= [], playAnimation= false }:BreakpointAnimationConfig = {},
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

    private stepIn :
        ((value ?:any | PromiseLike<any>) => void)
        | null
    = null;
    /**
     * Step into next breakpoint.
     * You can call window.next() to do same thing when DEBUG is true.
     * */
    next() {
        if (this.stepIn) {
            this.stepIn();
            this.stepIn = null;
        } else console.error('cannot next');
    }

    /**
     * Blocking at a breakpoint util next called
     * */
    async block(
        name :Breakpoint,
        { onBlock, onNext, components = [], protagonist, forward = false }:{
            protagonist?: Component,
            components?: Component[],
            forward?: boolean,
            onBlock?: () => void,
            onNext?: () => void,
        } = {},
    ) {
        const getMoveTarget = function ():number|null {
            const topPadding = 100;
            if (protagonist) return protagonist.drawInfo.box.y - topPadding;
            if (components && components.length) {
                const getTopped = (compList:Component[]) => compList.find(
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
        };
        if (this.breakpoints.includes(name)) {
            console.log(`blocking at ${name}`);
            if (this.playAnimation) {
                const scrollTarget = getMoveTarget();
                if (scrollTarget && !forward) {
                    console.log('scrollTarget', scrollTarget);
                    new moveto({ duration: 500 }).move(
                        scrollTarget - document.documentElement.scrollTop,
                        { callback: () => setTimeout(() => this.next(), 200) },
                    );
                } else {
                    setTimeout(() => this.next(), 300);
                }
            }
            return (async () => {
                if (onBlock) await onBlock();
                await Promise.all(components.map(c => c.draw()));

                await new Promise((resolve) => {
                    this.stepIn = async () => {
                        if (onNext) await onNext();
                        await Promise.all(components.map(c => c.hide()));
                        resolve();
                    };
                });

            })();
        }
    }

    static defaultAnimationBreakpoints:Breakpoint[] = [
        Breakpoint.FixEventBody2AxisMilestone,
        Breakpoint.FixEventAxis2EventAxis,
        Breakpoint.FixEventBody2EventBodyMover,
        Breakpoint.FixEventBody2EventBodyFloater,
    ];
}
