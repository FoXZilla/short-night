"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
var MUST_CALL_AND_RETURN_SUPER_METHOD;
(function (MUST_CALL_AND_RETURN_SUPER_METHOD) {
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_APPLY"] = 0] = "SUPER_APPLY";
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_DRAW"] = 1] = "SUPER_DRAW";
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_DESTROY"] = 2] = "SUPER_DESTROY";
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_CREATE_ELEMENT"] = 3] = "SUPER_CREATE_ELEMENT";
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_CREATE_BOX"] = 4] = "SUPER_CREATE_BOX";
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_HIDE"] = 5] = "SUPER_HIDE";
})(MUST_CALL_AND_RETURN_SUPER_METHOD || (MUST_CALL_AND_RETURN_SUPER_METHOD = {}));
var Component = /** @class */ (function () {
    function Component(_a) {
        var ext = _a.ext, canvas = _a.canvas, container = _a.container;
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
    Component.prototype.createElement = function () {
        if (this.element)
            this.container.removeChild(this.element);
        this.element = document.createElement('div');
        this.element.classList.add('short-night', this.theme, this.name);
        this.container.appendChild(this.element);
        return MUST_CALL_AND_RETURN_SUPER_METHOD.SUPER_CREATE_ELEMENT;
    };
    /**
     * Create a box object to fill this.drawInfo.box.
     * Write this method if you need to change the behavior about box.
     * */
    Component.prototype.createBox = function () {
        return MUST_CALL_AND_RETURN_SUPER_METHOD.SUPER_CREATE_BOX;
    };
    /**
     * Destroy self.
     * It should remove all element from dom and clear all trace in canvas if that's made by self.
     * */
    Component.prototype.destroy = function () {
        this.checkDestroy();
        this.destroyed = true;
        this.ext.onDestroy(this);
        return MUST_CALL_AND_RETURN_SUPER_METHOD.SUPER_DESTROY;
    };
    /**
     * Apply this.drawInfo in component.
     * This method should't change any property in this.drawInfo except this.drawInfo.box.
     * @async
     * */
    Component.prototype.apply = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkDestroy();
                        if (this.element) {
                            this.drawInfo.box = functions_1.mergeBox(this.drawInfo.box, functions_1.parseBox(this.element));
                        }
                        return [4 /*yield*/, this.ext.onApply(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, MUST_CALL_AND_RETURN_SUPER_METHOD.SUPER_APPLY];
                }
            });
        });
    };
    /**
     * Draw self base on this.drawInfo.
     * It should can be call multiple times.
     * Call this.apply before this.draw.
     * */
    Component.prototype.draw = function () {
        this.checkDestroy();
        this.ext.onDraw(this);
        return MUST_CALL_AND_RETURN_SUPER_METHOD.SUPER_DRAW;
    };
    /**
     * Hide all of trace created by self.
     * Hidden is not destroyed. Ensure the component is still available when this.hide have call.
     * This method will try set "visibility: 'hidden'" for this.element rather than remove it.
     * */
    Component.prototype.hide = function () {
        this.checkDestroy();
        if (this.element)
            this.element.style.visibility = 'hidden';
        this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ext.onHide(this);
        return MUST_CALL_AND_RETURN_SUPER_METHOD.SUPER_HIDE;
    };
    /**
     * Set a whole drawInfo into component.
     * The component still need this.apply called before draw when this.importDrawInfo been called.
     * */
    Component.prototype.importDrawInfo = function (drawInfo) {
        this.drawInfo = drawInfo;
        return this;
    };
    Object.defineProperty(Component.prototype, "l", {
        /**
         * Print log if the DEBUG is true.
         * @example this.l`Hello world`
         * */
        get: function () {
            return functions_1.createLogFunction(this.theme + "/" + this.name);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Verify a component is destroyed or not.
     * Throw an error if this.destroyed is true.
     * */
    Component.prototype.checkDestroy = function () {
        if (this.destroyed) {
            throw new Error(this.theme + "/" + this.name + " has bean destroyed,"
                + 'however, you still called it\'s method.');
        }
    };
    return Component;
}());
exports.default = Component;
