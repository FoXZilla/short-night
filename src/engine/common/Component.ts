import { ComponentDrawInfo, GridConfig } from '@engine/types';
import { ExtensionManager } from '@/extensions';
import { DEBUG, SN } from '@engine/common/config';

export interface ComponentConstructorInfo {
    ext:ExtensionManager;
    grid?: GridConfig;
    canvas?:HTMLCanvasElement;
    container?:HTMLElement;
}

export default abstract class Component{
    abstract theme :string;
    name :SN;

    /**
     * The data which be used in Extensions.
     * @property id - using in GeneratorId
     * @property boxElement - using in BoxElementGenerator
     * @property realLength - using in PositionCounter, existing in Axis only.
     * @property needed - using in ConflictFixer, existing in EventBody only.
     * @property space - using in ConflictFixer, existing in EventBody only.
     * */
    extraData :{
        boxElement ?:HTMLElement,
        id ?:string,
        realLength ?:number,
        needed?: {top:number, bottom:number},
        space?: {top:number, bottom:number},
        [key: string]: any,
    } = {};

    /**
     * There are must be init before self.apply called.
     * */
    grid :GridConfig;
    canvas :HTMLCanvasElement;
    container :HTMLElement;

    ext: ExtensionManager;
    public constructor({ ext, canvas, container, grid }:ComponentConstructorInfo) {
        if (!(this.constructor.name in SN)) {
            throw new TypeError(
                `Class name "${this.constructor.name}" illegal, `
                + `it must following ${Object.keys(SN)}`,
            );
        }

        this.name = SN[this.constructor.name as any] as SN;

        this.ext = ext;

        this.grid = grid as any;
        this.canvas = canvas as any;
        this.container = container as any;

        this.ext.onConstruct(this);
    }

    /**
     * All info about draw.
     * Must can be JSON.stringify.
     * */
    abstract drawInfo: ComponentDrawInfo;

    /**
     * Draw self base on self.drawInfo.
     * There should not count any runtime states.
     * It should can be call multiple times.
     * */
    draw() {
        this.checkDestroy();

        this.ext.onDraw(this);
    }

    createElement() {
        if (this.element) this.container.removeChild(this.element);

        this.element = document.createElement('div');
        this.element.classList.add('short-night', this.theme, this.name);
        this.container.appendChild(this.element);
    }

    /**
     * If the view of component depend on DOM element, that's element will set here.
     * */
    element ?:HTMLElement;

    /**
     * Hide self. It should hide all element created by self.
     * Don't clear Canvas in there!
     * This method will try set "visibility: 'hidden'" for self.element
     * */
    hide() {
        this.checkDestroy();

        if (this.element) this.element.style.visibility = 'hidden';
        this.canvas.getContext('2d')!.clearRect(
            0, 0, this.canvas.width, this.canvas.height,
        );

        this.ext.onHide(this);
    }

    /**
     * Update component use self.drawInfo
     * */
    async apply(...args :any[]) :Promise<any> {
        this.checkDestroy();
        await this.ext.onApply(this);
    }

    /**
     * The component has bean destroyed.
     * Call any method on component destroyed will got an error.
     * */
    destroyed: boolean = false;
    /**
     * Destroy this component.
     * It should remove all element from dom if that's created by this component
     * */
    destroy() {
        this.checkDestroy();
        this.destroyed = true;

        this.ext.onDestroy(this);
    }

    /**
     * Print log if DEBUG is true.
     * @example this.l`Hello world`
     * */
    l(stringArr:TemplateStringsArray, ...values:any[]) {// tslint:disable-line: function-name
        if (!DEBUG) return;

        const message = [stringArr[0]];
        for (let index = 0; index < values.length; index++) {
            message.push(values[index], stringArr[index + 1]);
        }
        console.log(`${this.name} #`, ...message);
    }

    /**
     * Verify a component is destroyed or not, if yes throw an error.
     * */
    private checkDestroy() {
        if (this.destroyed) {
            throw new Error(
                `${this.name} has bean destroyed, however, you still call it's method.`,
            );
        }
    }

    from(drawInfo:ComponentDrawInfo) {
        this.drawInfo = drawInfo;
        return this;
    }
}
