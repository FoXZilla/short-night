"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const definitions_1 = require("../common/definitions");
/**
 * 1. Set a id for every Component in component.extraData.id.
 * 2. Create a global variable using component's id if DEBUG is true when comp.apply been fired
 * */
class GeneratorId {
    constructor(etx) {
        this.etx = etx;
    }
    /**
     * Set component.extraData.id
     * */
    onConstruct(comp) {
        const randomString = Number(Math.random().toString().split('.')[1])
            .toString(36)
            .slice(0, 5);
        // comp.name is undefined now
        Object.defineProperty(comp.extraData, 'id', {
            get() { return `${comp.name}_${randomString}`; },
        });
    }
    /**
     * If the DEBUG is true, set a global variable using component.extraData.id in windows
     * to point the component.
     * */
    onApply(comp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (definitions_1.DEBUG)
                window[comp.extraData.id] = comp;
        });
    }
}
exports.default = GeneratorId;
//# sourceMappingURL=GeneratorId.js.map