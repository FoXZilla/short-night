"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = require("../common/Component");
var definitions_1 = require("../common/definitions");
var functions_1 = require("../common/functions");
/**
 * The whole Axis. Contain some AxisMilestone, some AxisScale and a AxisBody.
 * The Manage-Component. All of draw is resolved by child component.
 * */
var Axis = /** @class */ (function (_super) {
    __extends(Axis, _super);
    function Axis(props) {
        var _this = _super.call(this, props) || this;
        _this.name = definitions_1.SN.Axis;
        _this.drawInfo = {
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
        _this.milestones = [];
        _this.scales = [];
        _this.body = null;
        _this.grid = props.grid;
        _this.ext.onConstruct(_this);
        return _this;
    }
    Axis.prototype.createBox = function () {
        this.drawInfo.box = functions_1.mergeBox.apply(void 0, __spread([this.body.drawInfo.box], this.milestones.map(function (m) { return m.drawInfo.box; }), this.scales.map(function (s) { return s.drawInfo.box; })));
        return _super.prototype.createBox.call(this);
    };
    Axis.prototype.apply = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.initBody();
                        return [4 /*yield*/, this.body.apply()];
                    case 1:
                        _a.sent();
                        this.initScales();
                        this.initMilestones();
                        return [4 /*yield*/, Promise.all(__spread(this.scales.map(function (s) { return s.apply(); }), this.milestones.map(function (m) { return m.apply(); })))];
                    case 2:
                        _a.sent();
                        this.createBox();
                        return [2 /*return*/, _super.prototype.apply.call(this)];
                }
            });
        });
    };
    Axis.prototype.draw = function () {
        this.body.draw();
        this.scales.forEach(function (s) { return s.draw(); });
        this.milestones.forEach(function (m) { return m.draw(); });
        return _super.prototype.draw.call(this);
    };
    Axis.prototype.destroy = function () {
        this.body.destroy();
        this.scales.forEach(function (s) { return s.destroy(); });
        this.milestones.forEach(function (m) { return m.destroy(); });
        return _super.prototype.destroy.call(this);
    };
    Axis.prototype.hide = function () {
        this.body.hide();
        this.scales.forEach(function (s) { return s.hide(); });
        this.milestones.forEach(function (m) { return m.hide(); });
        return _super.prototype.hide.call(this);
    };
    Axis.prototype.initBody = function () {
        if (this.body) {
            this.body.destroy();
        }
        // @ts-ignore - realize a absolute class that will re-init in the theme.
        this.body = new this.bodyConstructor(this);
        this.body.drawInfo.length = this.drawInfo.length;
        this.body.drawInfo.width = this.grid.axisWidth;
        this.body.drawInfo.start = this.grid.axisStart;
    };
    Axis.prototype.initScales = function () {
        var e_1, _a;
        this.scales.forEach(function (s) { return s.destroy(); });
        this.scales.length = 0;
        var _loop_1 = function (position) {
            if (this_1.drawInfo.milestones.some(function (m) { return m.position === position; }))
                return "continue";
            // @ts-ignore - realize a absolute class that will re-init in the theme.
            var scale = new this_1.scaleConstructor(this_1);
            scale.drawInfo.bodyDrawInfo = functions_1.deepFreeze(this_1.body.drawInfo);
            scale.drawInfo.alignY = position; // recomputed in PositionCounter
            scale.drawInfo.height = this_1.grid.scaleHeight; // recomputed in PositionCounter
            this_1.scales.push(scale);
        };
        var this_1 = this;
        try {
            for (var _b = __values(this.drawInfo.scales), _c = _b.next(); !_c.done; _c = _b.next()) {
                var position = _c.value;
                _loop_1(position);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Axis.prototype.initMilestones = function () {
        var e_2, _a;
        this.milestones.forEach(function (m) { return m.destroy(); });
        this.milestones.length = 0;
        try {
            for (var _b = __values(this.drawInfo.milestones), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = _c.value, position = _d.position, content = _d.content;
                // @ts-ignore - realize a absolute class that will re-init in the theme.
                var milestone = new this.milestoneConstructor(this);
                milestone.drawInfo.bodyDrawInfo = functions_1.deepFreeze(this.body.drawInfo);
                milestone.drawInfo.alignY = position; // recomputed in PositionCounter
                milestone.drawInfo.content = content;
                this.milestones.push(milestone);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Axis.is = function (comp) {
        return comp.name === definitions_1.SN.Axis;
    };
    return Axis;
}(Component_1.default));
exports.default = Axis;
