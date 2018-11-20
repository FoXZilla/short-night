import {Extension, ExtensionManager} from "@/extensions/index";
import Component from "@engine/common/component";
import {DEBUG} from "@engine/common/config";

/**
 * Set a id for every Component in component.extraData.id.
 * Create a global variable using component's id if DEBUG is true when comp.apply fired
 * */
export default class GeneratorId implements Partial<Extension> {
    constructor(public etx:ExtensionManager){}
    /**
     * Set component.extraData.id
     * */
    onConstruct(comp:Component){
        const randomString :string =
            Number(Math.random().toString().split('.')[1])
                .toString(36)
                .slice(0,5)
        ;
        //Now comp.name is undefined
        Object.defineProperty(comp.extraData, 'id', {
            get(){
                return `${comp.name}_${randomString}`;
            }
        });
    }
    /**
     * If in debug mode, set a global variable
     * from component.extraData.id to point the component.
     * */
    async onApply(comp:Component){
        if(DEBUG) (<any>window)[comp.extraData.id!] = comp;
    }
}