import { ComponentDrawInfo, ComponentConstructorInfo } from '../types';
import { ExtensionManager } from '../extensions';
import { DEBUG, SN } from './definitions';
import { createLogFunction } from './functions';

export enum MustCallAndReturnSuperMethod {
    SUPER_APPLY,
    SUPER_DRAW,
    SUPER_DESTROY,
    SUPER_CREATE_ELEMENT,
    SUPER_HIDE,
}

/**
 * The data which be used in Extensions.
 * @property id - using in IdGenerator
 * @property boxElement - using in BoxElementGenerator
 * @property realLength - using in PositionCounter, existing in Axis only.
 * @property needed - using in ConflictFixer, existing in EventBody only.
 * @property space - using in ConflictFixer, existing in EventBody only.
 * */
export interface ExtraData {
    id ?:string;
    boxElement ?:HTMLElement;
    realLength ?:number;
    needed ?:{ top :number, bottom :number };
    space ?:{ top :number, bottom :number };
}

export default abstract class Component {
    constructor({ ext, canvas, container } :ComponentConstructorInfo) {
        this.ext = ext;

        this.canvas = canvas as any;
        this.container = container as any;
    }

    /**
     * Theme name.
     * Be filled when the theme's class constructed.
     * */
    abstract theme :string;
    /**
     * Component name.
     * Be filled when the engine's class constructed.
     * */
    abstract name :SN;
    /**
     * An ext extra
     * @see ExtraData
     * */
    extraData :ExtraData = {};
    /**
     * The canvas where component draw on.
     * */
    canvas :HTMLCanvasElement;
    /**
     * The container which contain all of component's element.
     * */
    container :HTMLElement;
    /**
     * Manage all extensions & Help component communicate for each other.
     * */
    ext :ExtensionManager;
    /**
     * All info about draw. Except drawInfo, no more states be depended about draw.
     * The same drawInfo must has same drawn on canvas and container.
     * The this.gird should be merging in there in this.apply be called.
     * Must can unscathed passed this.drawInfo = JSON.parse(JSON.stringify(this.drawInfo)).
     * */
    abstract readonly drawInfo :ComponentDrawInfo;

    /** A ratio for draw, it's using when draw on High DPI display */
    ratio :number = window.devicePixelRatio || 1;
    /** Setup for High DPI */
    setupRadio() {
        const ctx = this.canvas.getContext('2d')!;

        this.canvas.style.width = `${this.canvas.width}px`;
        this.canvas.width *= this.ratio;
        this.canvas.height *= this.ratio;
        ctx.setTransform(1, 0, 0, 1, 0, 0); // reset the scale set
        ctx.scale(this.ratio, this.ratio);
    }

    /**
     * Optional. Be filled in this.createElement.
     * The HTML element which be needed by component draw.
     * */
    element ?:HTMLElement;
    /**
     * Optional. Depend on the draw this component is need HTML element or not.
     * Create an HTML element base on this.drawInfo to fill this.element
     * and append to this.container.
     * Be called in this.apply and this.draw.
     * */
    createElement() :MustCallAndReturnSuperMethod {
        if (this.element) this.container.removeChild(this.element);

        this.element = document.createElement('div');
        this.element.classList.add('short-night', `sn-${this.theme}`, `sn-${this.name}`);
        this.container.appendChild(this.element);

        return MustCallAndReturnSuperMethod.SUPER_CREATE_ELEMENT;
    }
    /**
     * Create a box object to fill this.drawInfo.box.
     * It should be called in apply() at least once.
     * Write this method if you need to change the behavior about box.
     * */
    abstract createBox() :void;

    /**
     * Means that the component has been destroyed.
     * Call any method on component when it has destroyed will got an error.
     * */
    destroyed :boolean = false;
    /**
     * Destroy self.
     * It should remove all element from dom and clear all trace in canvas if that's made by self.
     * */
    destroy() :MustCallAndReturnSuperMethod {
        this.checkDestroy();

        this.destroyed = true;
        if (this.element) {
            this.container.removeChild(this.element);
            delete this.element;
        }

        this.ext.onDestroy(this);

        return MustCallAndReturnSuperMethod.SUPER_DESTROY;
    }

    /**
     * Apply this.drawInfo in component.
     * This method should't change any property in this.drawInfo except this.drawInfo.box.
     * @async
     * */
    async apply(...args :any[]) :Promise<MustCallAndReturnSuperMethod> {
        this.checkDestroy();

        await this.ext.onApply(this);

        return MustCallAndReturnSuperMethod.SUPER_APPLY;
    }
    /**
     * Draw self base on this.drawInfo.
     * It should can be call multiple times.
     * Call this.apply before this.draw.
     * */
    draw() :MustCallAndReturnSuperMethod {
        this.checkDestroy();

        this.ext.onDraw(this);

        return MustCallAndReturnSuperMethod.SUPER_DRAW;
    }
    /**
     * Hide all of trace created by self.
     * Hidden is not destroyed. Ensure the component is still available when this.hide have call.
     * This method will try set "visibility: 'hidden'" for this.element rather than remove it.
     * */
    hide() :MustCallAndReturnSuperMethod {
        this.checkDestroy();

        if (this.element) this.element.style.visibility = 'hidden';
        this.canvas.getContext('2d')!.clearRect(
            0, 0, this.canvas.width, this.canvas.height,
        );

        this.ext.onHide(this);

        return MustCallAndReturnSuperMethod.SUPER_HIDE;
    }

    /**
     * Set a whole drawInfo into component.
     * The component still need this.apply called before draw when this.importDrawInfo been called.
     * */
    importDrawInfo(drawInfo :ComponentDrawInfo) {
        (<any> this).drawInfo = drawInfo;
        return this;
    }

    /**
     * Print log if the DEBUG is true.
     * @example this.l`Hello world`
     * */
    protected get l() {
        return createLogFunction(`${this.theme}/${this.name}`);
    }
    /**
     * Verify a component is destroyed or not.
     * Throw an error if this.destroyed is true.
     * */
    protected checkDestroy() {
        if (this.destroyed) {
            const msg = `${this.theme}/${this.name} has bean destroyed,`
                + 'however, you still called it\'s method.';
            if (DEBUG) {
                throw new Error(msg);
            } else {
                console.warn(msg);
            }
        }
    }
}
