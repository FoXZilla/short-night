import { Extension, ExtensionManager, ExtensionType } from '.';
import Component from '../common/Component';

/**
 * Manage ExtensionManager#components.
 * */
export default class Base implements Partial<Extension> {
    constructor(public ext :ExtensionManager) {}

    onConstruct(comp :Component) {
        (<any> this.ext.components)[comp.name].push(comp);
    }

    onDestroy(comp :Component) {
        (<any> this.ext.components)[comp.name].splice(
            (<any> this.ext.components)[comp.name].indexOf(comp),
            1,
        );
    }
}
