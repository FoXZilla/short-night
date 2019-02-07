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
const functions_1 = require("../common/functions");
const definitions_1 = require("../common/definitions");
/**
 * The whole Event. Contain an EventBody and an EventMark, maybe has a EventAxis too.
 * The Manage-Component. All of draw is resolved by child component.
 * */
class Event extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = definitions_1.SN.Event;
        // The instances
        this.mark = null;
        this.body = null;
        this.axis = null;
        this.grid = props.grid;
        this.drawInfo = {
            target: {
                x: 30,
                y: 50,
            },
            offset: this.grid.eventOffset,
            date: null,
            title: null,
            folded: false,
            box: {
                x: 0,
                y: 0,
                width: 500,
                height: 500,
            },
        };
        this.ext.onConstruct(this);
    }
    createBox() {
        this.drawInfo.box = functions_1.mergeBox(this.body.drawInfo.box, this.mark.drawInfo.box);
        if (this.axis) {
            this.drawInfo.box = functions_1.mergeBox(this.drawInfo.box, this.axis.drawInfo.box);
        }
        return super.createBox();
    }
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.initMark();
            yield this.mark.apply();
            this.initBody();
            yield this.body.apply();
            this.initAxis();
            if (this.axis)
                yield this.axis.apply();
            this.createBox();
            return _super("apply").call(this);
        });
    }
    draw() {
        this.body.draw();
        this.axis && this.axis.draw();
        this.mark.draw();
        return super.draw();
    }
    hide() {
        this.mark.hide();
        this.body.hide();
        this.axis && this.axis.hide();
        return super.hide();
    }
    destroy() {
        this.mark.destroy();
        this.body.destroy();
        this.axis && this.axis.destroy();
        return super.destroy();
    }
    initMark() {
        if (this.mark)
            this.mark.destroy();
        // @ts-ignore - realize a absolute class that will re-init in the theme.
        this.mark = new this.markConstructor(this);
        this.mark.drawInfo.target = this.drawInfo.target;
        this.mark.drawInfo.width = this.grid.markWidth;
        this.mark.drawInfo.height = this.grid.markHeight;
    }
    initBody() {
        if (this.body)
            this.body.destroy();
        // @ts-ignore - realize a absolute class that will re-init in the theme.
        this.body = new this.bodyConstructor(this);
        this.body.drawInfo.markDrawInfo = functions_1.deepFreeze(this.mark.drawInfo);
        this.body.drawInfo.maxWidth = this.grid.eventWidth;
        this.body.drawInfo.date = this.drawInfo.date;
        this.body.drawInfo.title = this.drawInfo.title;
        this.body.drawInfo.description = this.drawInfo.description;
        this.body.drawInfo.folded = this.drawInfo.folded;
        this.body.drawInfo.foldPlaceholder = this.drawInfo.foldPlaceholder;
        this.body.drawInfo.offset = Object.assign({}, this.drawInfo.offset);
        this.body.drawInfo.endText = this.drawInfo.endText;
        this.body.drawInfo.endDate = this.drawInfo.endDate;
    }
    initAxis() {
        if (this.axis) {
            this.axis.destroy();
            this.axis = null;
        }
        if (this.drawInfo.axisLength) {
            // @ts-ignore - realize a absolute class that will re-init in the theme.
            const axis = this.axis || new this.axisConstructor(this);
            axis.drawInfo.axisBodyDrawInfo = functions_1.deepFreeze(this.ext.components[definitions_1.SN.Axis][0].drawInfo);
            axis.drawInfo.markDrawInfo = functions_1.deepFreeze(this.mark.drawInfo);
            axis.drawInfo.offsetX = this.grid.minEventAxisOffset;
            axis.drawInfo.length = this.drawInfo.axisLength;
            axis.drawInfo.text = this.drawInfo.endText;
            this.axis = axis;
        }
    }
    static is(comp) {
        return comp.name === definitions_1.SN.Event;
    }
}
exports.default = Event;
//# sourceMappingURL=index.js.map