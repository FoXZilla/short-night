import {ExtensionManager} from "@/extensions/index";
import Component from "@engine/common/component";
import {DEBUG} from "@engine/common/config";

export enum Breakpoint{
    PushScalesAndMilestones = 'PushScalesAndMilestones',
    FixEventBody2AxisMilestone = 'FixEventBody2AxisMilestone',
    FixEventAxis2EventAxis = 'FixEventAxis2EventAxis',
    FixEventBody2EventBody__move = 'FixEventBody2EventBody__move',
    FixEventBody2EventBody__float = 'FixEventBody2EventBody__float',
    Debug = 'Debug',
}

export default class BreakpointAnimation {
    breakpoints:Breakpoint[] = [
        Breakpoint.PushScalesAndMilestones,
        Breakpoint.FixEventBody2AxisMilestone,
        Breakpoint.FixEventAxis2EventAxis,
        Breakpoint.FixEventBody2EventBody__move,
        Breakpoint.FixEventBody2EventBody__float,
    ];

    constructor(public etx:ExtensionManager){
        if(DEBUG) {
            this.breakpoints.push(Breakpoint.Debug);
            (<any>window).next = this.next.bind(this);
        }
    }

    private _next :
        ( (value ?:any | PromiseLike<any>) => void )
        | null
    = null;
    /**
     * Step into next breakpoint.
     * You can call window.next() to do same thing when DEBUG is true.
     * */
    next(){
        if(this._next) {
            this._next();
            this._next = null;
        } else console.error('cannot next');
    };

    /**
     * Blocking at a breakpoint util next called
     * */
    async block(
        name :Breakpoint,
        {onBlock, onNext, components=[] }:{
            components?: Component[],
            onBlock?: () => void,
            onNext?: () => void,
        } = {},
    ){
        if(this.breakpoints.includes(name)){
            console.log(`blocking at ${name}`);
            return (async () => {
                if(onBlock) await onBlock();
                await Promise.all(components.map(c => c.draw()));

                await new Promise(resolve => {
                    this._next = async () => {
                        if(onNext) await onNext();
                        await Promise.all(components.map(c => c.hide()));
                        resolve();
                    };
                });

            })();
        }
    };

}