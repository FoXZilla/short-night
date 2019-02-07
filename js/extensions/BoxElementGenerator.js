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
/**
 * Create element following comp.drawInfo.box for debug.
 * Using this extension, the development can inspect an Short-Night Component by Web Console.
 * */
class BoxElementGenerator {
    constructor(etx) {
        this.etx = etx;
    }
    /**
     * Create a element append to container.
     * The element size equal component.drawInfo.box.
     * */
    onApply(comp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (comp.extraData.boxElement && comp.extraData.boxElement.parentElement) {
                comp.extraData.boxElement.parentElement.removeChild(comp.extraData.boxElement);
            }
            const elt = document.createElement(comp.name);
            elt.id = comp.extraData.id;
            //  Map every property of component.drawInfo to HTML element data-*.
            for (const [key, value] of Object.entries(comp.drawInfo)) {
                if (typeof value === 'undefined')
                    continue;
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
            comp.container.appendChild(elt);
            comp.extraData.boxElement = elt;
        });
    }
    /**
     * Remove element created in onApply.
     * */
    onDestroy(comp) {
        const elt = comp.extraData.boxElement;
        if (elt && elt.parentElement) {
            elt.parentElement.removeChild(elt);
        }
    }
}
exports.default = BoxElementGenerator;
//# sourceMappingURL=BoxElementGenerator.js.map