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
const functions_1 = require("../common/functions");
const Component_1 = require("../common/Component");
const definitions_1 = require("../common/definitions");
/**
 * Recognize a event time of duration and end time point.
 * Some Event have no duration, so it needn't EventAxis.
 * Can conflict with AxisMilestone and EventAxis.
 * */
class EventAxis extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = definitions_1.SN.EventAxis;
        this.drawInfo = {
            axisBodyDrawInfo: {},
            markDrawInfo: {},
            length: 0,
            offsetX: 0,
            box: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
        };
        this.ext.onConstruct(this);
    }
    createElement() {
        const flag = super.createElement(); // Must return this flag
        const target = this.drawInfo.markDrawInfo.target;
        this.element.classList.add('endText');
        this.element.innerHTML = this.drawInfo.text;
        const box = functions_1.parseBox(this.element);
        this.element.style.left = `${target.x + this.drawInfo.offsetX}px`;
        this.element.style.top = `${target.y - this.drawInfo.length - box.height / 2}px`;
        return flag;
    }
    createBox() {
        const target = this.drawInfo.markDrawInfo.target;
        this.drawInfo.box = {
            x: target.x,
            y: target.y - this.drawInfo.length,
            width: this.drawInfo.offsetX,
            height: this.drawInfo.length,
        };
        return super.createBox();
    }
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            if (this.drawInfo.text) {
                this.createElement();
                this.element.style.visibility = 'hidden';
            }
            else if (this.element) {
                this.element.parentNode.removeChild(this.element);
                delete this.element;
            }
            this.createBox();
            return _super("apply").call(this);
        });
    }
    draw() {
        if (this.drawInfo.text)
            this.createElement();
        return super.draw();
    }
    static is(comp) {
        return comp.name === definitions_1.SN.EventAxis;
    }
}
exports.default = EventAxis;
//# sourceMappingURL=EventAxis.js.map