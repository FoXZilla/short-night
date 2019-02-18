import { Extension, ExtensionManager } from '.';
import Component from '../common/Component';
import { DEBUG } from '../common/definitions';

/**
 * 1. Set a id for every Component in component.extraData.id.
 * 2. Create a global variable using component's id if DEBUG is true when comp.apply been fired
 * */
export default class IdGenerator implements Partial<Extension> {
    constructor(public ext :ExtensionManager) {}
    /**
     * Set component.extraData.id
     * */
    onConstruct(comp :Component) {
        const randomString :string =
            Number(Math.random().toString().split('.')[1])
                .toString(36)
                .slice(0, 5)
        ;
        // comp.name is undefined now
        Object.defineProperty(comp.extraData, 'id', {
            get() { return `${comp.name}_${randomString}`; },
        });
    }
    /**
     * If the DEBUG is true, set a global variable using component.extraData.id in windows
     * to point the component.
     * */
    async onApply(comp :Component) {
        if (DEBUG) (<any>window)[comp.extraData.id!] = comp;
    }
}
