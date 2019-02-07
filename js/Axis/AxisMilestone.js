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
 * The milestone on Axis, for indicate time of nearby area.
 * Can conflict with EventBody.
 * */
class AxisMilestone extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = definitions_1.SN.AxisMilestone;
        this.drawInfo = {
            bodyDrawInfo: {},
            alignY: 0,
            content: '0_o',
            box: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
        };
        this.ext.onConstruct(this);
    }
    formatDate(date, by) {
        const monthAbbr = date.toDateString().split(' ')[1];
        switch (by) {
            case "year" /* Year */: return `${date.getFullYear()}`;
            case "quarter" /* Quarter */: return `${monthAbbr}. ${date.getFullYear()}`;
            case "month" /* Month */: return `${monthAbbr}.`;
            case "week" /* Week */: return `${date.getMonth() + 1}.${date.getDate()}`;
            case "day" /* Day */: return `${date.getMonth() + 1}.${date.getDate()}`;
            default: return date.toLocaleString();
        }
    }
    createElement() {
        const flag = super.createElement(); // Must return this flag
        this.element.innerHTML = typeof this.drawInfo.content === 'string'
            ? this.drawInfo.content
            : this.formatDate(new Date(this.drawInfo.content.date), this.drawInfo.content.by);
        const { width, height } = functions_1.parseBox(this.element);
        const x = this.drawInfo.bodyDrawInfo.box.x
            + this.drawInfo.bodyDrawInfo.box.width / 2
            - width / 2;
        const y = this.drawInfo.alignY - height / 2;
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
        return flag;
    }
    createBox() {
        this.drawInfo.box = functions_1.parseBox(this.element);
        return super.createBox();
    }
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.createElement();
            this.element.style.visibility = 'hidden';
            this.createBox();
            return _super("apply").call(this);
        });
    }
    draw() {
        this.createElement();
        return super.draw();
    }
    static is(comp) {
        return comp.name === definitions_1.SN.AxisMilestone;
    }
}
exports.default = AxisMilestone;
//# sourceMappingURL=AxisMilestone.js.map