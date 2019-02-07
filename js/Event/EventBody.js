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
 * Can conflict with AxisMilestone and EventBody.
 * */
class EventBody extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = definitions_1.SN.EventBody;
        /**
         * An EventBody must has a HTML element for allow user select and copy text from EventBody.
         * @type {HTMLElement}
         * */
        this.element = null;
        this.drawInfo = {
            markDrawInfo: null,
            offset: {
                x: 0,
                y: 0,
            },
            maxWidth: 300,
            date: null,
            title: 'untitled',
            floated: false,
            folded: false,
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
        if (this.drawInfo.floated)
            this.element.classList.add('floated');
        if (this.drawInfo.folded)
            this.element.classList.add('folded');
        this.element.innerHTML = `
            <div class="foldPlaceholder" title="${this.drawInfo.title}">
                ${this.drawInfo.foldPlaceholder || this.drawInfo.title}
            </div>
            <div class="title">${this.drawInfo.title}</div>
            <div class="date">${new Date(this.drawInfo.date).toLocaleDateString()}</div>
            <div class="description">${this.drawInfo.description}</div>
        `;
        if (!this.drawInfo.description) {
            this.element.removeChild(this.element.querySelector('.description'));
        }
        this.element.style.maxWidth = `${this.drawInfo.maxWidth}px`;
        return flag;
    }
    createBox() {
        const eltBox = functions_1.parseBox(this.element);
        const box = Object.assign({ width: eltBox.width, height: eltBox.height }, this.drawInfo.markDrawInfo.target);
        box.x -= box.width;
        box.y -= box.height / 2;
        box.x -= this.drawInfo.offset.x;
        box.y += this.drawInfo.offset.y;
        this.drawInfo.box = box;
        return super.createBox();
    }
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.createElement();
            this.createBox();
            this.applyBoxToElement();
            this.element.style.visibility = 'hidden';
            return _super("apply").call(this);
        });
    }
    draw() {
        this.createElement();
        this.applyBoxToElement();
        return super.draw();
    }
    applyBoxToElement() {
        this.element.style.left = `${this.drawInfo.box.x}px`;
        this.element.style.top = `${this.drawInfo.box.y}px`;
    }
    static is(comp) {
        return comp.name === definitions_1.SN.EventBody;
    }
}
exports.default = EventBody;
//# sourceMappingURL=EventBody.js.map