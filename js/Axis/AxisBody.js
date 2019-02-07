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
const Component_1 = require("../common/Component");
const definitions_1 = require("../common/definitions");
/**
 * The body of Axis.
 * Draw the axis using this component.
 * */
class AxisBody extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = definitions_1.SN.AxisBody;
        this.drawInfo = {
            box: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
            length: 0,
            width: 0,
            start: {
                x: 0,
                y: 0,
            },
        };
        this.ext.onConstruct(this);
    }
    createBox() {
        this.drawInfo.box = {
            x: this.drawInfo.start.x - this.drawInfo.width / 2,
            y: this.drawInfo.start.y,
            width: this.drawInfo.width,
            height: this.drawInfo.length,
        };
        return super.createBox();
    }
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.createBox();
            return _super("apply").call(this);
        });
    }
    static is(comp) {
        return comp.name === definitions_1.SN.AxisBody;
    }
}
exports.default = AxisBody;
//# sourceMappingURL=AxisBody.js.map