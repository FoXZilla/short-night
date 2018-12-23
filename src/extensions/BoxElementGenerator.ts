import { Extension, ExtensionManager } from '@/extensions/index';
import Component from '@engine/common/Component';

/**
 * Create element following comp.drawInfo.box
 * @depend GeneratorId
 * */
export default class BoxElementGenerator implements Partial<Extension>{
    constructor(public etx:ExtensionManager) {}
    /**
     * Create a element append to container.
     * The element size equal component.drawInfo.box
     * */
    async onApply(comp:Component) {
        let elt = comp.extraData.boxElement;
        if (!elt) {
            elt = document.createElement(comp.name);
            elt.id = comp.extraData.id!;
            comp.extraData.boxElement = elt;
        }

        for (const [key, value] of Object.entries(comp.drawInfo)) {
            if (typeof value === 'undefined') continue;
            elt.dataset[key] = JSON.stringify(value);
        }

        Object.assign(elt.style, {
            position: 'absolute',
            left: `${comp.drawInfo.box.x}px`,
            top: `${comp.drawInfo.box.y}px`,
            width: `${comp.drawInfo.box.width}px`,
            height: `${comp.drawInfo.box.height}px`,
            zIndex: 9999999 - ~~(comp.drawInfo.box.width * comp.drawInfo.box.height),
        });

        comp.container!.appendChild(elt);
    }
    /**
     * Remove element created in onApply
     * */
    onDestroy(comp:Component) {
        const elt :HTMLElement|undefined = comp.extraData.boxElement;

        if (elt && elt.parentNode) {
            elt.parentNode.removeChild(elt);
        }
    }

}
