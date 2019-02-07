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
const functions_1 = require("../common/functions");
/**
 * The whole Axis. Contain some AxisMilestone, some AxisScale and a AxisBody.
 * The Manage-Component. All of draw is resolved by child component.
 * */
class Axis extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = definitions_1.SN.Axis;
        this.drawInfo = {
            scales: [],
            milestones: [],
            length: 0,
            box: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
        };
        // The instances
        this.milestones = [];
        this.scales = [];
        this.body = null;
        this.grid = props.grid;
        this.ext.onConstruct(this);
    }
    createBox() {
        this.drawInfo.box = functions_1.mergeBox(this.body.drawInfo.box, ...this.milestones.map(m => m.drawInfo.box), ...this.scales.map(s => s.drawInfo.box));
        return super.createBox();
    }
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.initBody();
            yield this.body.apply();
            this.initScales();
            this.initMilestones();
            yield Promise.all([
                ...this.scales.map(s => s.apply()),
                ...this.milestones.map(m => m.apply()),
            ]);
            this.createBox();
            return _super("apply").call(this);
        });
    }
    draw() {
        this.body.draw();
        this.scales.forEach(s => s.draw());
        this.milestones.forEach(m => m.draw());
        return super.draw();
    }
    destroy() {
        this.body.destroy();
        this.scales.forEach(s => s.destroy());
        this.milestones.forEach(m => m.destroy());
        return super.destroy();
    }
    hide() {
        this.body.hide();
        this.scales.forEach(s => s.hide());
        this.milestones.forEach(m => m.hide());
        return super.hide();
    }
    initBody() {
        if (this.body) {
            this.body.destroy();
        }
        // @ts-ignore - realize a absolute class that will re-init in the theme.
        this.body = new this.bodyConstructor(this);
        this.body.drawInfo.length = this.drawInfo.length;
        this.body.drawInfo.width = this.grid.axisWidth;
        this.body.drawInfo.start = this.grid.axisStart;
    }
    initScales() {
        this.scales.forEach(s => s.destroy());
        this.scales.length = 0;
        for (const position of this.drawInfo.scales) {
            if (this.drawInfo.milestones.some(m => m.position === position))
                continue;
            // @ts-ignore - realize a absolute class that will re-init in the theme.
            const scale = new this.scaleConstructor(this);
            scale.drawInfo.bodyDrawInfo = functions_1.deepFreeze(this.body.drawInfo);
            scale.drawInfo.alignY = position; // recomputed in PositionCounter
            scale.drawInfo.height = this.grid.scaleHeight; // recomputed in PositionCounter
            this.scales.push(scale);
        }
    }
    initMilestones() {
        this.milestones.forEach(m => m.destroy());
        this.milestones.length = 0;
        for (const { position, content } of this.drawInfo.milestones) {
            // @ts-ignore - realize a absolute class that will re-init in the theme.
            const milestone = new this.milestoneConstructor(this);
            milestone.drawInfo.bodyDrawInfo = functions_1.deepFreeze(this.body.drawInfo);
            milestone.drawInfo.alignY = position; // recomputed in PositionCounter
            milestone.drawInfo.content = content;
            this.milestones.push(milestone);
        }
    }
    static is(comp) {
        return comp.name === definitions_1.SN.Axis;
    }
}
exports.default = Axis;
//# sourceMappingURL=index.js.map