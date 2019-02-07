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
const functions_1 = require("./functions");
var MUST_CALL_AND_RETURN_SUPER_METHOD;
(function (MUST_CALL_AND_RETURN_SUPER_METHOD) {
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_APPLY"] = 0] = "SUPER_APPLY";
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_DRAW"] = 1] = "SUPER_DRAW";
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_DESTROY"] = 2] = "SUPER_DESTROY";
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_CREATE_ELEMENT"] = 3] = "SUPER_CREATE_ELEMENT";
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_CREATE_BOX"] = 4] = "SUPER_CREATE_BOX";
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_HIDE"] = 5] = "SUPER_HIDE";
})(MUST_CALL_AND_RETURN_SUPER_METHOD || (MUST_CALL_AND_RETURN_SUPER_METHOD = {}));
class Component {
    constructor({ ext, canvas, container }) {
        /**
         * The data which be used in Extensions.
         * @property id - using in GeneratorId
         * @property boxElement - using in BoxElementGenerator
         * @property realLength - using in PositionCounter, existing in Axis only.
         * @property needed - using in ConflictFixer, existing in EventBody only.
         * @property space - using in ConflictFixer, existing in EventBody only.
         * */
        this.extraData = {};
        /**
         * Means that the component has been destroyed.
         * Call any method on component when it has destroyed will got an error.
         * */
        this.destroyed = false;
        this.ext = ext;
        this.canvas = canvas;
        this.container = container;
    }
    /**
     * Optional. Depend on the draw this component is need HTML element or not.
     * Create an HTML element base on this.drawInfo to fill this.element
     * and append to this.container.
     * Be called in this.apply and this.draw.
     * */
    createElement() {
        if (this.element)
            this.container.removeChild(this.element);
        this.element = document.createElement('div');
        this.element.classList.add('short-night', this.theme, this.name);
        this.container.appendChild(this.element);
        return MUST_CALL_AND_RETURN_SUPER_METHOD.SUPER_CREATE_ELEMENT;
    }
    /**
     * Create a box object to fill this.drawInfo.box.
     * Write this method if you need to change the behavior about box.
     * */
    createBox() {
        return MUST_CALL_AND_RETURN_SUPER_METHOD.SUPER_CREATE_BOX;
    }
    /**
     * Destroy self.
     * It should remove all element from dom and clear all trace in canvas if that's made by self.
     * */
    destroy() {
        this.checkDestroy();
        this.hide();
        this.destroyed = true;
        this.ext.onDestroy(this);
        return MUST_CALL_AND_RETURN_SUPER_METHOD.SUPER_DESTROY;
    }
    /**
     * Apply this.drawInfo in component.
     * This method should't change any property in this.drawInfo except this.drawInfo.box.
     * @async
     * */
    apply(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkDestroy();
            if (this.element) {
                this.drawInfo.box = functions_1.mergeBox(this.drawInfo.box, functions_1.parseBox(this.element));
            }
            yield this.ext.onApply(this);
            return MUST_CALL_AND_RETURN_SUPER_METHOD.SUPER_APPLY;
        });
    }
    /**
     * Draw self base on this.drawInfo.
     * It should can be call multiple times.
     * Call this.apply before this.draw.
     * */
    draw() {
        this.checkDestroy();
        this.ext.onDraw(this);
        return MUST_CALL_AND_RETURN_SUPER_METHOD.SUPER_DRAW;
    }
    /**
     * Hide all of trace created by self.
     * Hidden is not destroyed. Ensure the component is still available when this.hide have call.
     * This method will try set "visibility: 'hidden'" for this.element rather than remove it.
     * */
    hide() {
        this.checkDestroy();
        if (this.element)
            this.element.style.visibility = 'hidden';
        this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ext.onHide(this);
        return MUST_CALL_AND_RETURN_SUPER_METHOD.SUPER_HIDE;
    }
    /**
     * Set a whole drawInfo into component.
     * The component still need this.apply called before draw when this.importDrawInfo been called.
     * */
    importDrawInfo(drawInfo) {
        this.drawInfo = drawInfo;
        return this;
    }
    /**
     * Print log if the DEBUG is true.
     * @example this.l`Hello world`
     * */
    get l() {
        return functions_1.createLogFunction(`${this.theme}/${this.name}`);
    }
    /**
     * Verify a component is destroyed or not.
     * Throw an error if this.destroyed is true.
     * */
    checkDestroy() {
        if (this.destroyed) {
            throw new Error(`${this.theme}/${this.name} has bean destroyed,`
                + 'however, you still called it\'s method.');
        }
    }
}
exports.default = Component;
//# sourceMappingURL=Component.js.map