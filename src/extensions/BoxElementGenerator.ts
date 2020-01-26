import { Extension, ExtensionManager, ExtensionType } from '.';
import Component from '../common/Component';
import { DEBUG } from '../common/definitions';

/**
 * Create element following comp.drawInfo.box for debug.
 * Using this extension, the development can inspect an Short-Night Component by Web Console.
 * */
export default class BoxElementGenerator implements Partial<Extension>{
    constructor(public ext :ExtensionManager) {
        if (DEBUG) {
            (<any>window).clearBox = () => {
                const componentMap :any = this.ext.components;
                for (const snName in componentMap) {
                    for (const component of componentMap[snName]) {
                        const elt = component.extraData.boxElement;
                        if (elt && elt.parentElement) {
                            elt.parentElement.removeChild(elt);
                        }
                    }
                }
            };
        }
    }
    type = ExtensionType.DebugOnly;
    /**
     * Create a element append to container.
     * The element size equal component.drawInfo.box.
     * */
    async onApply(comp :Component) {
        if (comp.extraData.boxElement && comp.extraData.boxElement.parentElement) {
            comp.extraData.boxElement.parentElement.removeChild(comp.extraData.boxElement);
        }

        const elt = document.createElement(comp.name);
        elt.id = comp.extraData.id!;

        //  Map every property of component.drawInfo to HTML element data-*.
        for (const [key, value] of Object.entries(comp.drawInfo)) {
            if (typeof value === 'undefined') continue;

            elt.setAttribute(key, JSON.stringify(value));
        }

        Object.assign(elt.style, {
            position: 'absolute',
            left: `${comp.drawInfo.box.x}px`,
            top: `${comp.drawInfo.box.y}px`,
            width: `${comp.drawInfo.box.width}px`,
            height: `${comp.drawInfo.box.height}px`,
            zIndex: 2147483647 - ~~(comp.drawInfo.box.width * comp.drawInfo.box.height),
        });

        comp.container!.appendChild(elt);
        comp.extraData.boxElement = elt;
    }
    /**
     * Remove element created in onApply.
     * */
    onDestroy(comp :Component) {
        const elt :HTMLElement|undefined = comp.extraData.boxElement;

        if (elt && elt.parentElement) {
            elt.parentElement.removeChild(elt);
        }
    }

}
