/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./docs/colors.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./docs/colors.ts":
/*!************************!*\
  !*** ./docs/colors.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const entry_1 = __webpack_require__(/*! @/themes/colors/entry */ "./src/themes/colors/entry.ts");
const events = [{
        date: new Date('2014-5'),
        title: '开始 自学Web开发',
    }, {
        title: '入学 青岛理工大学',
        date: new Date('2014-9-1'),
        endDate: new Date('2018-7-29'),
    }, {
        date: new Date('2014-12'),
        title: '青理Web开发协会',
        text: '创建青理Web开发协会，担当会长',
        endDate: new Date('2016-6'),
        endText: '协会换届',
    }, {
        date: new Date('2015-6'),
        title: '注册 青岛卓然独立网络科技有限公司',
        endDate: new Date('2017-6-19'),
    }, {
        title: '360前端星计划',
        text: '《360前端星计划》由360前端团队和校园招聘团队合办，面向在校大学生，为培养最优秀最有潜力的前端人才举办的前端技术系列课程',
        date: new Date('2017-4-9'),
        endDate: new Date('2017-4-14'),
        folded: true,
    }, {
        title: 'Mozilla 实习',
        date: new Date('2017-7-14'),
        endDate: new Date('2018-2-9'),
    }, {
        title: '百度 KITT.AI 实习',
        date: new Date('2018-3-21'),
        endDate: new Date('2018-5-28'),
        endText: 'Team 被解散',
    }, {
        title: 'KITT.AI 团队 2倍简单奖',
        date: new Date('2018-6-29'),
    }, {
        title: '百度 SWAN 团队',
        date: new Date('2018-7-4'),
        endDate: 'now',
    }, {
        title: 'Mozilla 实习 123',
        date: new Date('2017-9-10'),
    }, {
        title: 'Mozilla 实习 233',
        date: new Date('2017-8-10'),
    }, {
        title: '2015-7-25',
        date: new Date('2015-7-25'),
    }, {
        title: '2015-1',
        date: new Date('2015-1'),
    }, {
        title: '2015-5',
        date: new Date('2015-5-1'),
    }];
document.addEventListener('DOMContentLoaded', () => __awaiter(this, void 0, void 0, function* () {
    // Normal draw
    const timeline1 = yield entry_1.draw('#app', events);
    // // Draw with animation
    // await new Promise(r => setTimeout(r, 500));
    // timeline1.hide();
    // const timeline2 = await drawWithAnimation('#app', events);
    //
    // // Draw with a data of one timeline export
    // await new Promise(r => setTimeout(r, 500));
    // timeline2.hide();
    // await drawFrom('#app', timeline1.export());
}));


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/engine/styles.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/engine/styles.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".short-night {\n  position: relative;\n  box-sizing: border-box; }\n  .short-night {\n    margin: 0;\n    padding: 0; }\n  .short-night.axis_milestone {\n    font-family: sans-serif;\n    position: absolute;\n    padding: 5px 10px; }\n  .short-night.event_body {\n    position: absolute;\n    color: #000;\n    padding: 7px 10px 7px 5px;\n    text-align: right; }\n    .short-night.event_body.folded {\n      cursor: pointer; }\n      .short-night.event_body.folded .foldPlaceholder {\n        display: block; }\n    .short-night.event_body .title, .short-night.event_body .foldPlaceholder {\n      font-size: 1em;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n    .short-night.event_body .date {\n      font-size: 0.6em;\n      font-weight: normal;\n      font-style: italic; }\n    .short-night.event_body .foldPlaceholder {\n      display: none; }\n  .short-night.endText {\n    position: absolute;\n    padding: 0 0 2px 3px;\n    font-size: 0.8em;\n    text-indent: 0.5em; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/themes/colors/styles.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/themes/colors/styles.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".short-night.colors.axis_milestone {\n  font-size: 18px;\n  color: #333;\n  padding: 2px 7px; }\n\n.short-night.colors.event_body {\n  color: #fff; }\n  .short-night.colors.event_body .title, .short-night.colors.event_body .foldPlaceholder {\n    font-size: 1em;\n    padding-left: 10px; }\n  .short-night.colors.event_body .date {\n    font-size: 0.6em;\n    font-weight: normal;\n    font-style: italic; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/moveto/dist/moveTo.js":
/*!********************************************!*\
  !*** ./node_modules/moveto/dist/moveTo.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * MoveTo - A lightweight scroll animation javascript library without any dependency.
 * Version 1.7.4 (28-09-2018 16:02)
 * Licensed under MIT
 * Copyright 2018 Hasan Aydoğdu <hsnaydd@gmail.com>
 */


var MoveTo = function () {
  /**
                           * Defaults
                           * @type {object}
                           */
  var defaults = {
    tolerance: 0,
    duration: 800,
    easing: 'easeOutQuart',
    callback: function callback() {} };


  /**
                                         * easeOutQuart Easing Function
                                         * @param  {number} t - current time
                                         * @param  {number} b - start value
                                         * @param  {number} c - change in value
                                         * @param  {number} d - duration
                                         * @return {number} - calculated value
                                         */
  function easeOutQuart(t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
  }

  /**
     * Merge two object
     *
     * @param  {object} obj1
     * @param  {object} obj2
     * @return {object} merged object
     */
  function mergeObject(obj1, obj2) {
    var obj3 = {};
    Object.keys(obj1).forEach(function (propertyName) {
      obj3[propertyName] = obj1[propertyName];
    });

    Object.keys(obj2).forEach(function (propertyName) {
      obj3[propertyName] = obj2[propertyName];
    });
    return obj3;
  };

  /**
      * Converts camel case to kebab case
      * @param  {string} val the value to be converted
      * @return {string} the converted value
      */
  function kebabCase(val) {
    return val.replace(/([A-Z])/g, function ($1) {
      return '-' + $1.toLowerCase();
    });
  };

  /**
      * MoveTo Constructor
      * @param {object} options Options
      * @param {object} easeFunctions Custom ease functions
      */
  function MoveTo() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var easeFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.options = mergeObject(defaults, options);
    this.easeFunctions = mergeObject({ easeOutQuart: easeOutQuart }, easeFunctions);
  }

  /**
     * Register a dom element as trigger
     * @param  {HTMLElement} dom Dom trigger element
     * @param  {function} callback Callback function
     * @return {function|void} unregister function
     */
  MoveTo.prototype.registerTrigger = function (dom, callback) {var _this = this;
    if (!dom) {
      return;
    }

    var href = dom.getAttribute('href') || dom.getAttribute('data-target');
    // The element to be scrolled
    var target = href && href !== '#' ?
    document.getElementById(href.substring(1)) :
    document.body;
    var options = mergeObject(this.options, _getOptionsFromTriggerDom(dom, this.options));

    if (typeof callback === 'function') {
      options.callback = callback;
    }

    var listener = function listener(e) {
      e.preventDefault();
      _this.move(target, options);
    };

    dom.addEventListener('click', listener, false);

    return function () {return dom.removeEventListener('click', listener, false);};
  };

  /**
      * Move
      * Scrolls to given element by using easeOutQuart function
      * @param  {HTMLElement|number} target Target element to be scrolled or target position
      * @param  {object} options Custom options
      */
  MoveTo.prototype.move = function (target) {var _this2 = this;var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (target !== 0 && !target) {
      return;
    }

    options = mergeObject(this.options, options);

    var distance = typeof target === 'number' ? target : target.getBoundingClientRect().top;
    var from = window.pageYOffset;
    var startTime = null;
    var lastPageYOffset = void 0;
    distance -= options.tolerance;

    // rAF loop
    var loop = function loop(currentTime) {
      var currentPageYOffset = window.pageYOffset;

      if (!startTime) {
        // To starts time from 1, we subtracted 1 from current time
        // If time starts from 1 The first loop will not do anything,
        // because easing value will be zero
        startTime = currentTime - 1;
      }

      var timeElapsed = currentTime - startTime;

      if (lastPageYOffset) {
        if (
        distance > 0 && lastPageYOffset > currentPageYOffset ||
        distance < 0 && lastPageYOffset < currentPageYOffset)
        {
          return options.callback(target);
        }
      }
      lastPageYOffset = currentPageYOffset;

      var val = _this2.easeFunctions[options.easing](
      timeElapsed, from, distance, options.duration);


      window.scroll(0, val);

      if (timeElapsed < options.duration) {
        window.requestAnimationFrame(loop);
      } else {
        window.scroll(0, distance + from);
        options.callback(target);
      }
    };

    window.requestAnimationFrame(loop);
  };

  /**
      * Adds custom ease function
      * @param {string}   name Ease function name
      * @param {function} fn   Ease function
      */
  MoveTo.prototype.addEaseFunction = function (name, fn) {
    this.easeFunctions[name] = fn;
  };

  /**
      * Returns options which created from trigger dom element
      * @param  {HTMLElement} dom Trigger dom element
      * @param  {object} options The instance's options
      * @return {object} The options which created from trigger dom element
      */
  function _getOptionsFromTriggerDom(dom, options) {
    var domOptions = {};

    Object.keys(options).forEach(function (key) {
      var value = dom.getAttribute('data-mt-' + kebabCase(key));
      if (value) {
        domOptions[key] = isNaN(value) ? value : parseInt(value, 10);
      }
    });
    return domOptions;
  }

  return MoveTo;
}();

if (true) {
  module.exports = MoveTo;
} else {}

/***/ }),

/***/ "./node_modules/roughjs/bin/canvas-async.js":
/*!**************************************************!*\
  !*** ./node_modules/roughjs/bin/canvas-async.js ***!
  \**************************************************/
/*! exports provided: RoughCanvasAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughCanvasAsync", function() { return RoughCanvasAsync; });
/* harmony import */ var _generator_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator-async */ "./node_modules/roughjs/bin/generator-async.js");
/* harmony import */ var _canvas_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas-base */ "./node_modules/roughjs/bin/canvas-base.js");


class RoughCanvasAsync extends _canvas_base__WEBPACK_IMPORTED_MODULE_1__["RoughCanvasBase"] {
    constructor(canvas, config) {
        super(canvas);
        this.genAsync = new _generator_async__WEBPACK_IMPORTED_MODULE_0__["RoughGeneratorAsync"](config || null, this.canvas);
    }
    get generator() {
        return this.genAsync;
    }
    getDefaultOptions() {
        return this.genAsync.defaultOptions;
    }
    async line(x1, y1, x2, y2, options) {
        const d = await this.genAsync.line(x1, y1, x2, y2, options);
        this.draw(d);
        return d;
    }
    async rectangle(x, y, width, height, options) {
        const d = await this.genAsync.rectangle(x, y, width, height, options);
        this.draw(d);
        return d;
    }
    async ellipse(x, y, width, height, options) {
        const d = await this.genAsync.ellipse(x, y, width, height, options);
        this.draw(d);
        return d;
    }
    async circle(x, y, diameter, options) {
        const d = await this.genAsync.circle(x, y, diameter, options);
        this.draw(d);
        return d;
    }
    async linearPath(points, options) {
        const d = await this.genAsync.linearPath(points, options);
        this.draw(d);
        return d;
    }
    async polygon(points, options) {
        const d = await this.genAsync.polygon(points, options);
        this.draw(d);
        return d;
    }
    async arc(x, y, width, height, start, stop, closed = false, options) {
        const d = await this.genAsync.arc(x, y, width, height, start, stop, closed, options);
        this.draw(d);
        return d;
    }
    async curve(points, options) {
        const d = await this.genAsync.curve(points, options);
        this.draw(d);
        return d;
    }
    async path(d, options) {
        const drawing = await this.genAsync.path(d, options);
        this.draw(drawing);
        return drawing;
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/canvas-base.js":
/*!*************************************************!*\
  !*** ./node_modules/roughjs/bin/canvas-base.js ***!
  \*************************************************/
/*! exports provided: RoughCanvasBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughCanvasBase", function() { return RoughCanvasBase; });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ "./node_modules/roughjs/bin/renderer.js");

const hasDocument = typeof document !== 'undefined';
class RoughCanvasBase {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }
    static createRenderer() {
        return new _renderer__WEBPACK_IMPORTED_MODULE_0__["RoughRenderer"]();
    }
    draw(drawable) {
        const sets = drawable.sets || [];
        const o = drawable.options || this.getDefaultOptions();
        const ctx = this.ctx;
        for (const drawing of sets) {
            switch (drawing.type) {
                case 'path':
                    ctx.save();
                    ctx.strokeStyle = o.stroke;
                    ctx.lineWidth = o.strokeWidth;
                    this._drawToContext(ctx, drawing);
                    ctx.restore();
                    break;
                case 'fillPath':
                    ctx.save();
                    ctx.fillStyle = o.fill || '';
                    this._drawToContext(ctx, drawing);
                    ctx.restore();
                    break;
                case 'fillSketch':
                    this.fillSketch(ctx, drawing, o);
                    break;
                case 'path2Dfill': {
                    this.ctx.save();
                    this.ctx.fillStyle = o.fill || '';
                    const p2d = new Path2D(drawing.path);
                    this.ctx.fill(p2d);
                    this.ctx.restore();
                    break;
                }
                case 'path2Dpattern': {
                    const doc = this.canvas.ownerDocument || (hasDocument && document);
                    if (doc) {
                        const size = drawing.size;
                        const hcanvas = doc.createElement('canvas');
                        const hcontext = hcanvas.getContext('2d');
                        const bbox = this.computeBBox(drawing.path);
                        if (bbox && (bbox.width || bbox.height)) {
                            hcanvas.width = this.canvas.width;
                            hcanvas.height = this.canvas.height;
                            hcontext.translate(bbox.x || 0, bbox.y || 0);
                        }
                        else {
                            hcanvas.width = size[0];
                            hcanvas.height = size[1];
                        }
                        this.fillSketch(hcontext, drawing, o);
                        this.ctx.save();
                        this.ctx.fillStyle = this.ctx.createPattern(hcanvas, 'repeat');
                        const p2d = new Path2D(drawing.path);
                        this.ctx.fill(p2d);
                        this.ctx.restore();
                    }
                    else {
                        console.error('Cannot render path2Dpattern. No defs/document defined.');
                    }
                    break;
                }
            }
        }
    }
    computeBBox(d) {
        if (hasDocument) {
            try {
                const ns = 'http://www.w3.org/2000/svg';
                const svg = document.createElementNS(ns, 'svg');
                svg.setAttribute('width', '0');
                svg.setAttribute('height', '0');
                const pathNode = self.document.createElementNS(ns, 'path');
                pathNode.setAttribute('d', d);
                svg.appendChild(pathNode);
                document.body.appendChild(svg);
                const bbox = pathNode.getBBox();
                document.body.removeChild(svg);
                return bbox;
            }
            catch (err) { }
        }
        return null;
    }
    fillSketch(ctx, drawing, o) {
        let fweight = o.fillWeight;
        if (fweight < 0) {
            fweight = o.strokeWidth / 2;
        }
        ctx.save();
        ctx.strokeStyle = o.fill || '';
        ctx.lineWidth = fweight;
        this._drawToContext(ctx, drawing);
        ctx.restore();
    }
    _drawToContext(ctx, drawing) {
        ctx.beginPath();
        for (const item of drawing.ops) {
            const data = item.data;
            switch (item.op) {
                case 'move':
                    ctx.moveTo(data[0], data[1]);
                    break;
                case 'bcurveTo':
                    ctx.bezierCurveTo(data[0], data[1], data[2], data[3], data[4], data[5]);
                    break;
                case 'qcurveTo':
                    ctx.quadraticCurveTo(data[0], data[1], data[2], data[3]);
                    break;
                case 'lineTo':
                    ctx.lineTo(data[0], data[1]);
                    break;
            }
        }
        if (drawing.type === 'fillPath') {
            ctx.fill();
        }
        else {
            ctx.stroke();
        }
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/canvas.js":
/*!********************************************!*\
  !*** ./node_modules/roughjs/bin/canvas.js ***!
  \********************************************/
/*! exports provided: RoughCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughCanvas", function() { return RoughCanvas; });
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ "./node_modules/roughjs/bin/generator.js");
/* harmony import */ var _canvas_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas-base */ "./node_modules/roughjs/bin/canvas-base.js");


class RoughCanvas extends _canvas_base__WEBPACK_IMPORTED_MODULE_1__["RoughCanvasBase"] {
    constructor(canvas, config) {
        super(canvas);
        this.gen = new _generator__WEBPACK_IMPORTED_MODULE_0__["RoughGenerator"](config || null, this.canvas);
    }
    get generator() {
        return this.gen;
    }
    getDefaultOptions() {
        return this.gen.defaultOptions;
    }
    line(x1, y1, x2, y2, options) {
        const d = this.gen.line(x1, y1, x2, y2, options);
        this.draw(d);
        return d;
    }
    rectangle(x, y, width, height, options) {
        const d = this.gen.rectangle(x, y, width, height, options);
        this.draw(d);
        return d;
    }
    ellipse(x, y, width, height, options) {
        const d = this.gen.ellipse(x, y, width, height, options);
        this.draw(d);
        return d;
    }
    circle(x, y, diameter, options) {
        const d = this.gen.circle(x, y, diameter, options);
        this.draw(d);
        return d;
    }
    linearPath(points, options) {
        const d = this.gen.linearPath(points, options);
        this.draw(d);
        return d;
    }
    polygon(points, options) {
        const d = this.gen.polygon(points, options);
        this.draw(d);
        return d;
    }
    arc(x, y, width, height, start, stop, closed = false, options) {
        const d = this.gen.arc(x, y, width, height, start, stop, closed, options);
        this.draw(d);
        return d;
    }
    curve(points, options) {
        const d = this.gen.curve(points, options);
        this.draw(d);
        return d;
    }
    path(d, options) {
        const drawing = this.gen.path(d, options);
        this.draw(drawing);
        return drawing;
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/fillers/dot-filler.js":
/*!********************************************************!*\
  !*** ./node_modules/roughjs/bin/fillers/dot-filler.js ***!
  \********************************************************/
/*! exports provided: DotFiller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotFiller", function() { return DotFiller; });
/* harmony import */ var _filler_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filler-utils */ "./node_modules/roughjs/bin/fillers/filler-utils.js");

class DotFiller {
    constructor(renderer) {
        this.renderer = renderer;
    }
    fillPolygon(points, o) {
        o = Object.assign({}, o, { curveStepCount: 4, hachureAngle: 0 });
        const lines = Object(_filler_utils__WEBPACK_IMPORTED_MODULE_0__["hachureLinesForPolygon"])(points, o);
        return this.dotsOnLines(lines, o);
    }
    fillEllipse(cx, cy, width, height, o) {
        o = Object.assign({}, o, { curveStepCount: 4, hachureAngle: 0 });
        const lines = Object(_filler_utils__WEBPACK_IMPORTED_MODULE_0__["hachureLinesForEllipse"])(cx, cy, width, height, o, this.renderer);
        return this.dotsOnLines(lines, o);
    }
    dotsOnLines(lines, o) {
        let ops = [];
        let gap = o.hachureGap;
        if (gap < 0) {
            gap = o.strokeWidth * 4;
        }
        gap = Math.max(gap, 0.1);
        let fweight = o.fillWeight;
        if (fweight < 0) {
            fweight = o.strokeWidth / 2;
        }
        for (const line of lines) {
            const length = Object(_filler_utils__WEBPACK_IMPORTED_MODULE_0__["lineLength"])(line);
            const dl = length / gap;
            const count = Math.ceil(dl) - 1;
            const alpha = Math.atan((line[1][1] - line[0][1]) / (line[1][0] - line[0][0]));
            for (let i = 0; i < count; i++) {
                const l = gap * (i + 1);
                const dy = l * Math.sin(alpha);
                const dx = l * Math.cos(alpha);
                const c = [line[0][0] - dx, line[0][1] + dy];
                const cx = this.renderer.getOffset(c[0] - gap / 4, c[0] + gap / 4, o);
                const cy = this.renderer.getOffset(c[1] - gap / 4, c[1] + gap / 4, o);
                const ellipse = this.renderer.ellipse(cx, cy, fweight, fweight, o);
                ops = ops.concat(ellipse.ops);
            }
        }
        return { type: 'fillSketch', ops };
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/fillers/filler-utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/roughjs/bin/fillers/filler-utils.js ***!
  \**********************************************************/
/*! exports provided: lineLength, getIntersectingLines, affine, hachureLinesForPolygon, hachureLinesForEllipse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineLength", function() { return lineLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntersectingLines", function() { return getIntersectingLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "affine", function() { return affine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hachureLinesForPolygon", function() { return hachureLinesForPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hachureLinesForEllipse", function() { return hachureLinesForEllipse; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry */ "./node_modules/roughjs/bin/geometry.js");
/* harmony import */ var _utils_hachure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hachure */ "./node_modules/roughjs/bin/utils/hachure.js");


function lineLength(line) {
    const p1 = line[0];
    const p2 = line[1];
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}
function getIntersectingLines(line, points) {
    const intersections = [];
    const s1 = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Segment"]([line[0], line[1]], [line[2], line[3]]);
    for (let i = 0; i < points.length; i++) {
        const s2 = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Segment"](points[i], points[(i + 1) % points.length]);
        if (s1.intersects(s2)) {
            intersections.push([s1.xi, s1.yi]);
        }
    }
    return intersections;
}
function affine(x, y, cx, cy, sinAnglePrime, cosAnglePrime, R) {
    const A = -cx * cosAnglePrime - cy * sinAnglePrime + cx;
    const B = R * (cx * sinAnglePrime - cy * cosAnglePrime) + cy;
    const C = cosAnglePrime;
    const D = sinAnglePrime;
    const E = -R * sinAnglePrime;
    const F = R * cosAnglePrime;
    return [
        A + C * x + D * y,
        B + E * x + F * y
    ];
}
function hachureLinesForPolygon(points, o) {
    const ret = [];
    if (points && points.length) {
        let left = points[0][0];
        let right = points[0][0];
        let top = points[0][1];
        let bottom = points[0][1];
        for (let i = 1; i < points.length; i++) {
            left = Math.min(left, points[i][0]);
            right = Math.max(right, points[i][0]);
            top = Math.min(top, points[i][1]);
            bottom = Math.max(bottom, points[i][1]);
        }
        const angle = o.hachureAngle;
        let gap = o.hachureGap;
        if (gap < 0) {
            gap = o.strokeWidth * 4;
        }
        gap = Math.max(gap, 0.1);
        const radPerDeg = Math.PI / 180;
        const hachureAngle = (angle % 180) * radPerDeg;
        const cosAngle = Math.cos(hachureAngle);
        const sinAngle = Math.sin(hachureAngle);
        const tanAngle = Math.tan(hachureAngle);
        const it = new _utils_hachure__WEBPACK_IMPORTED_MODULE_1__["HachureIterator"](top - 1, bottom + 1, left - 1, right + 1, gap, sinAngle, cosAngle, tanAngle);
        let rect;
        while ((rect = it.nextLine()) != null) {
            const lines = getIntersectingLines(rect, points);
            for (let i = 0; i < lines.length; i++) {
                if (i < (lines.length - 1)) {
                    const p1 = lines[i];
                    const p2 = lines[i + 1];
                    ret.push([p1, p2]);
                }
            }
        }
    }
    return ret;
}
function hachureLinesForEllipse(cx, cy, width, height, o, renderer) {
    const ret = [];
    let rx = Math.abs(width / 2);
    let ry = Math.abs(height / 2);
    rx += renderer.getOffset(-rx * 0.05, rx * 0.05, o);
    ry += renderer.getOffset(-ry * 0.05, ry * 0.05, o);
    const angle = o.hachureAngle;
    let gap = o.hachureGap;
    if (gap <= 0) {
        gap = o.strokeWidth * 4;
    }
    let fweight = o.fillWeight;
    if (fweight < 0) {
        fweight = o.strokeWidth / 2;
    }
    const radPerDeg = Math.PI / 180;
    const hachureAngle = (angle % 180) * radPerDeg;
    const tanAngle = Math.tan(hachureAngle);
    const aspectRatio = ry / rx;
    const hyp = Math.sqrt(aspectRatio * tanAngle * aspectRatio * tanAngle + 1);
    const sinAnglePrime = aspectRatio * tanAngle / hyp;
    const cosAnglePrime = 1 / hyp;
    const gapPrime = gap / ((rx * ry / Math.sqrt((ry * cosAnglePrime) * (ry * cosAnglePrime) + (rx * sinAnglePrime) * (rx * sinAnglePrime))) / rx);
    let halfLen = Math.sqrt((rx * rx) - (cx - rx + gapPrime) * (cx - rx + gapPrime));
    for (let xPos = cx - rx + gapPrime; xPos < cx + rx; xPos += gapPrime) {
        halfLen = Math.sqrt((rx * rx) - (cx - xPos) * (cx - xPos));
        const p1 = affine(xPos, cy - halfLen, cx, cy, sinAnglePrime, cosAnglePrime, aspectRatio);
        const p2 = affine(xPos, cy + halfLen, cx, cy, sinAnglePrime, cosAnglePrime, aspectRatio);
        ret.push([p1, p2]);
    }
    return ret;
}


/***/ }),

/***/ "./node_modules/roughjs/bin/fillers/filler.js":
/*!****************************************************!*\
  !*** ./node_modules/roughjs/bin/fillers/filler.js ***!
  \****************************************************/
/*! exports provided: getFiller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiller", function() { return getFiller; });
/* harmony import */ var _hachure_filler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hachure-filler */ "./node_modules/roughjs/bin/fillers/hachure-filler.js");
/* harmony import */ var _zigzag_filler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zigzag-filler */ "./node_modules/roughjs/bin/fillers/zigzag-filler.js");
/* harmony import */ var _hatch_filler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hatch-filler */ "./node_modules/roughjs/bin/fillers/hatch-filler.js");
/* harmony import */ var _dot_filler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dot-filler */ "./node_modules/roughjs/bin/fillers/dot-filler.js");




const fillers = {};
function getFiller(renderer, o) {
    let fillerName = o.fillStyle || 'hachure';
    if (!fillers[fillerName]) {
        switch (fillerName) {
            case 'zigzag':
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new _zigzag_filler__WEBPACK_IMPORTED_MODULE_1__["ZigZagFiller"](renderer);
                }
                break;
            case 'cross-hatch':
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new _hatch_filler__WEBPACK_IMPORTED_MODULE_2__["HatchFiller"](renderer);
                }
                break;
            case 'dots':
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new _dot_filler__WEBPACK_IMPORTED_MODULE_3__["DotFiller"](renderer);
                }
                break;
            case 'hachure':
            default:
                fillerName = 'hachure';
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new _hachure_filler__WEBPACK_IMPORTED_MODULE_0__["HachureFiller"](renderer);
                }
                break;
        }
    }
    return fillers[fillerName];
}


/***/ }),

/***/ "./node_modules/roughjs/bin/fillers/hachure-filler.js":
/*!************************************************************!*\
  !*** ./node_modules/roughjs/bin/fillers/hachure-filler.js ***!
  \************************************************************/
/*! exports provided: HachureFiller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HachureFiller", function() { return HachureFiller; });
/* harmony import */ var _filler_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filler-utils */ "./node_modules/roughjs/bin/fillers/filler-utils.js");

class HachureFiller {
    constructor(renderer) {
        this.renderer = renderer;
    }
    fillPolygon(points, o) {
        return this._fillPolygon(points, o);
    }
    fillEllipse(cx, cy, width, height, o) {
        return this._fillEllipse(cx, cy, width, height, o);
    }
    _fillPolygon(points, o, connectEnds = false) {
        const lines = Object(_filler_utils__WEBPACK_IMPORTED_MODULE_0__["hachureLinesForPolygon"])(points, o);
        const ops = this.renderLines(lines, o, connectEnds);
        return { type: 'fillSketch', ops };
    }
    _fillEllipse(cx, cy, width, height, o, connectEnds = false) {
        const lines = Object(_filler_utils__WEBPACK_IMPORTED_MODULE_0__["hachureLinesForEllipse"])(cx, cy, width, height, o, this.renderer);
        const ops = this.renderLines(lines, o, connectEnds);
        return { type: 'fillSketch', ops };
    }
    renderLines(lines, o, connectEnds) {
        let ops = [];
        let prevPoint = null;
        for (const line of lines) {
            ops = ops.concat(this.renderer.doubleLine(line[0][0], line[0][1], line[1][0], line[1][1], o));
            if (connectEnds && prevPoint) {
                ops = ops.concat(this.renderer.doubleLine(prevPoint[0], prevPoint[1], line[0][0], line[0][1], o));
            }
            prevPoint = line[1];
        }
        return ops;
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/fillers/hatch-filler.js":
/*!**********************************************************!*\
  !*** ./node_modules/roughjs/bin/fillers/hatch-filler.js ***!
  \**********************************************************/
/*! exports provided: HatchFiller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HatchFiller", function() { return HatchFiller; });
/* harmony import */ var _hachure_filler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hachure-filler */ "./node_modules/roughjs/bin/fillers/hachure-filler.js");

class HatchFiller extends _hachure_filler__WEBPACK_IMPORTED_MODULE_0__["HachureFiller"] {
    fillPolygon(points, o) {
        const set = this._fillPolygon(points, o);
        const o2 = Object.assign({}, o, { hachureAngle: o.hachureAngle + 90 });
        const set2 = this._fillPolygon(points, o2);
        set.ops = set.ops.concat(set2.ops);
        return set;
    }
    fillEllipse(cx, cy, width, height, o) {
        const set = this._fillEllipse(cx, cy, width, height, o);
        const o2 = Object.assign({}, o, { hachureAngle: o.hachureAngle + 90 });
        const set2 = this._fillEllipse(cx, cy, width, height, o2);
        set.ops = set.ops.concat(set2.ops);
        return set;
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/fillers/zigzag-filler.js":
/*!***********************************************************!*\
  !*** ./node_modules/roughjs/bin/fillers/zigzag-filler.js ***!
  \***********************************************************/
/*! exports provided: ZigZagFiller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZigZagFiller", function() { return ZigZagFiller; });
/* harmony import */ var _hachure_filler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hachure-filler */ "./node_modules/roughjs/bin/fillers/hachure-filler.js");

class ZigZagFiller extends _hachure_filler__WEBPACK_IMPORTED_MODULE_0__["HachureFiller"] {
    fillPolygon(points, o) {
        return this._fillPolygon(points, o, true);
    }
    fillEllipse(cx, cy, width, height, o) {
        return this._fillEllipse(cx, cy, width, height, o, true);
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/generator-async.js":
/*!*****************************************************!*\
  !*** ./node_modules/roughjs/bin/generator-async.js ***!
  \*****************************************************/
/*! exports provided: RoughGeneratorAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughGeneratorAsync", function() { return RoughGeneratorAsync; });
/* harmony import */ var _generator_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator-base */ "./node_modules/roughjs/bin/generator-base.js");

class RoughGeneratorAsync extends _generator_base__WEBPACK_IMPORTED_MODULE_0__["RoughGeneratorBase"] {
    async line(x1, y1, x2, y2, options) {
        const o = this._options(options);
        return this._drawable('line', [await this.lib.line(x1, y1, x2, y2, o)], o);
    }
    async rectangle(x, y, width, height, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            const points = [[x, y], [x + width, y], [x + width, y + height], [x, y + height]];
            if (o.fillStyle === 'solid') {
                paths.push(await this.lib.solidFillPolygon(points, o));
            }
            else {
                paths.push(await this.lib.patternFillPolygon(points, o));
            }
        }
        paths.push(await this.lib.rectangle(x, y, width, height, o));
        return this._drawable('rectangle', paths, o);
    }
    async ellipse(x, y, width, height, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = await this.lib.ellipse(x, y, width, height, o);
                shape.type = 'fillPath';
                paths.push(shape);
            }
            else {
                paths.push(await this.lib.patternFillEllipse(x, y, width, height, o));
            }
        }
        paths.push(await this.lib.ellipse(x, y, width, height, o));
        return this._drawable('ellipse', paths, o);
    }
    async circle(x, y, diameter, options) {
        const ret = await this.ellipse(x, y, diameter, diameter, options);
        ret.shape = 'circle';
        return ret;
    }
    async linearPath(points, options) {
        const o = this._options(options);
        return this._drawable('linearPath', [await this.lib.linearPath(points, false, o)], o);
    }
    async arc(x, y, width, height, start, stop, closed = false, options) {
        const o = this._options(options);
        const paths = [];
        if (closed && o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = await this.lib.arc(x, y, width, height, start, stop, true, false, o);
                shape.type = 'fillPath';
                paths.push(shape);
            }
            else {
                paths.push(await this.lib.patternFillArc(x, y, width, height, start, stop, o));
            }
        }
        paths.push(await this.lib.arc(x, y, width, height, start, stop, closed, true, o));
        return this._drawable('arc', paths, o);
    }
    async curve(points, options) {
        const o = this._options(options);
        return this._drawable('curve', [await this.lib.curve(points, o)], o);
    }
    async polygon(points, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                paths.push(await this.lib.solidFillPolygon(points, o));
            }
            else {
                const size = this.computePolygonSize(points);
                const fillPoints = [
                    [0, 0],
                    [size[0], 0],
                    [size[0], size[1]],
                    [0, size[1]]
                ];
                const shape = await this.lib.patternFillPolygon(fillPoints, o);
                shape.type = 'path2Dpattern';
                shape.size = size;
                shape.path = this.polygonPath(points);
                paths.push(shape);
            }
        }
        paths.push(await this.lib.linearPath(points, true, o));
        return this._drawable('polygon', paths, o);
    }
    async path(d, options) {
        const o = this._options(options);
        const paths = [];
        if (!d) {
            return this._drawable('path', paths, o);
        }
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = { type: 'path2Dfill', path: d, ops: [] };
                paths.push(shape);
            }
            else {
                const size = this.computePathSize(d);
                const points = [
                    [0, 0],
                    [size[0], 0],
                    [size[0], size[1]],
                    [0, size[1]]
                ];
                const shape = await this.lib.patternFillPolygon(points, o);
                shape.type = 'path2Dpattern';
                shape.size = size;
                shape.path = d;
                paths.push(shape);
            }
        }
        paths.push(await this.lib.svgPath(d, o));
        return this._drawable('path', paths, o);
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/generator-base.js":
/*!****************************************************!*\
  !*** ./node_modules/roughjs/bin/generator-base.js ***!
  \****************************************************/
/*! exports provided: RoughGeneratorBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughGeneratorBase", function() { return RoughGeneratorBase; });
/* harmony import */ var _renderer_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer-factory.js */ "./node_modules/roughjs/bin/renderer-factory.js");

const hasSelf = typeof self !== 'undefined';
class RoughGeneratorBase {
    constructor(config, surface) {
        this.defaultOptions = {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: '#000',
            strokeWidth: 1,
            curveTightness: 0,
            curveStepCount: 9,
            fillStyle: 'hachure',
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1
        };
        this.config = config || {};
        this.surface = surface;
        this.renderer = Object(_renderer_factory_js__WEBPACK_IMPORTED_MODULE_0__["createRenderer"])(this.config);
        if (this.config.options) {
            this.defaultOptions = this._options(this.config.options);
        }
    }
    _options(options) {
        return options ? Object.assign({}, this.defaultOptions, options) : this.defaultOptions;
    }
    _drawable(shape, sets, options) {
        return { shape, sets: sets || [], options: options || this.defaultOptions };
    }
    get lib() {
        return this.renderer;
    }
    getCanvasSize() {
        const val = (w) => {
            if (w && typeof w === 'object') {
                if (w.baseVal && w.baseVal.value) {
                    return w.baseVal.value;
                }
            }
            return w || 100;
        };
        if (this.surface) {
            return [val(this.surface.width), val(this.surface.height)];
        }
        return [100, 100];
    }
    computePolygonSize(points) {
        if (points.length) {
            let left = points[0][0];
            let right = points[0][0];
            let top = points[0][1];
            let bottom = points[0][1];
            for (let i = 1; i < points.length; i++) {
                left = Math.min(left, points[i][0]);
                right = Math.max(right, points[i][0]);
                top = Math.min(top, points[i][1]);
                bottom = Math.max(bottom, points[i][1]);
            }
            return [(right - left), (bottom - top)];
        }
        return [0, 0];
    }
    polygonPath(points) {
        let d = '';
        if (points.length) {
            d = `M${points[0][0]},${points[0][1]}`;
            for (let i = 1; i < points.length; i++) {
                d = `${d} L${points[i][0]},${points[i][1]}`;
            }
        }
        return d;
    }
    computePathSize(d) {
        let size = [0, 0];
        if (hasSelf && self.document) {
            try {
                const ns = 'http://www.w3.org/2000/svg';
                const svg = self.document.createElementNS(ns, 'svg');
                svg.setAttribute('width', '0');
                svg.setAttribute('height', '0');
                const pathNode = self.document.createElementNS(ns, 'path');
                pathNode.setAttribute('d', d);
                svg.appendChild(pathNode);
                self.document.body.appendChild(svg);
                const bb = pathNode.getBBox();
                if (bb) {
                    size[0] = bb.width || 0;
                    size[1] = bb.height || 0;
                }
                self.document.body.removeChild(svg);
            }
            catch (err) { }
        }
        const canvasSize = this.getCanvasSize();
        if (!(size[0] * size[1])) {
            size = canvasSize;
        }
        return size;
    }
    toPaths(drawable) {
        const sets = drawable.sets || [];
        const o = drawable.options || this.defaultOptions;
        const paths = [];
        for (const drawing of sets) {
            let path = null;
            switch (drawing.type) {
                case 'path':
                    path = {
                        d: this.opsToPath(drawing),
                        stroke: o.stroke,
                        strokeWidth: o.strokeWidth,
                        fill: 'none'
                    };
                    break;
                case 'fillPath':
                    path = {
                        d: this.opsToPath(drawing),
                        stroke: 'none',
                        strokeWidth: 0,
                        fill: o.fill || 'none'
                    };
                    break;
                case 'fillSketch':
                    path = this.fillSketch(drawing, o);
                    break;
                case 'path2Dfill':
                    path = {
                        d: drawing.path || '',
                        stroke: 'none',
                        strokeWidth: 0,
                        fill: o.fill || 'none'
                    };
                    break;
                case 'path2Dpattern': {
                    const size = drawing.size;
                    const pattern = {
                        x: 0, y: 0, width: 1, height: 1,
                        viewBox: `0 0 ${Math.round(size[0])} ${Math.round(size[1])}`,
                        patternUnits: 'objectBoundingBox',
                        path: this.fillSketch(drawing, o)
                    };
                    path = {
                        d: drawing.path,
                        stroke: 'none',
                        strokeWidth: 0,
                        pattern: pattern
                    };
                    break;
                }
            }
            if (path) {
                paths.push(path);
            }
        }
        return paths;
    }
    fillSketch(drawing, o) {
        let fweight = o.fillWeight;
        if (fweight < 0) {
            fweight = o.strokeWidth / 2;
        }
        return {
            d: this.opsToPath(drawing),
            stroke: o.fill || 'none',
            strokeWidth: fweight,
            fill: 'none'
        };
    }
    opsToPath(drawing) {
        let path = '';
        for (const item of drawing.ops) {
            const data = item.data;
            switch (item.op) {
                case 'move':
                    path += `M${data[0]} ${data[1]} `;
                    break;
                case 'bcurveTo':
                    path += `C${data[0]} ${data[1]}, ${data[2]} ${data[3]}, ${data[4]} ${data[5]} `;
                    break;
                case 'qcurveTo':
                    path += `Q${data[0]} ${data[1]}, ${data[2]} ${data[3]} `;
                    break;
                case 'lineTo':
                    path += `L${data[0]} ${data[1]} `;
                    break;
            }
        }
        return path.trim();
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/generator.js":
/*!***********************************************!*\
  !*** ./node_modules/roughjs/bin/generator.js ***!
  \***********************************************/
/*! exports provided: RoughGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughGenerator", function() { return RoughGenerator; });
/* harmony import */ var _generator_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator-base */ "./node_modules/roughjs/bin/generator-base.js");

class RoughGenerator extends _generator_base__WEBPACK_IMPORTED_MODULE_0__["RoughGeneratorBase"] {
    constructor(config, surface) {
        super(config, surface);
    }
    line(x1, y1, x2, y2, options) {
        const o = this._options(options);
        return this._drawable('line', [this.lib.line(x1, y1, x2, y2, o)], o);
    }
    rectangle(x, y, width, height, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            const points = [[x, y], [x + width, y], [x + width, y + height], [x, y + height]];
            if (o.fillStyle === 'solid') {
                paths.push(this.lib.solidFillPolygon(points, o));
            }
            else {
                paths.push(this.lib.patternFillPolygon(points, o));
            }
        }
        paths.push(this.lib.rectangle(x, y, width, height, o));
        return this._drawable('rectangle', paths, o);
    }
    ellipse(x, y, width, height, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = this.lib.ellipse(x, y, width, height, o);
                shape.type = 'fillPath';
                paths.push(shape);
            }
            else {
                paths.push(this.lib.patternFillEllipse(x, y, width, height, o));
            }
        }
        paths.push(this.lib.ellipse(x, y, width, height, o));
        return this._drawable('ellipse', paths, o);
    }
    circle(x, y, diameter, options) {
        const ret = this.ellipse(x, y, diameter, diameter, options);
        ret.shape = 'circle';
        return ret;
    }
    linearPath(points, options) {
        const o = this._options(options);
        return this._drawable('linearPath', [this.lib.linearPath(points, false, o)], o);
    }
    arc(x, y, width, height, start, stop, closed = false, options) {
        const o = this._options(options);
        const paths = [];
        if (closed && o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = this.lib.arc(x, y, width, height, start, stop, true, false, o);
                shape.type = 'fillPath';
                paths.push(shape);
            }
            else {
                paths.push(this.lib.patternFillArc(x, y, width, height, start, stop, o));
            }
        }
        paths.push(this.lib.arc(x, y, width, height, start, stop, closed, true, o));
        return this._drawable('arc', paths, o);
    }
    curve(points, options) {
        const o = this._options(options);
        return this._drawable('curve', [this.lib.curve(points, o)], o);
    }
    polygon(points, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                paths.push(this.lib.solidFillPolygon(points, o));
            }
            else {
                const size = this.computePolygonSize(points);
                const fillPoints = [
                    [0, 0],
                    [size[0], 0],
                    [size[0], size[1]],
                    [0, size[1]]
                ];
                const shape = this.lib.patternFillPolygon(fillPoints, o);
                shape.type = 'path2Dpattern';
                shape.size = size;
                shape.path = this.polygonPath(points);
                paths.push(shape);
            }
        }
        paths.push(this.lib.linearPath(points, true, o));
        return this._drawable('polygon', paths, o);
    }
    path(d, options) {
        const o = this._options(options);
        const paths = [];
        if (!d) {
            return this._drawable('path', paths, o);
        }
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = { type: 'path2Dfill', path: d, ops: [] };
                paths.push(shape);
            }
            else {
                const size = this.computePathSize(d);
                const points = [
                    [0, 0],
                    [size[0], 0],
                    [size[0], size[1]],
                    [0, size[1]]
                ];
                const shape = this.lib.patternFillPolygon(points, o);
                shape.type = 'path2Dpattern';
                shape.size = size;
                shape.path = d;
                paths.push(shape);
            }
        }
        paths.push(this.lib.svgPath(d, o));
        return this._drawable('path', paths, o);
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/geometry.js":
/*!**********************************************!*\
  !*** ./node_modules/roughjs/bin/geometry.js ***!
  \**********************************************/
/*! exports provided: Segment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Segment", function() { return Segment; });
class Segment {
    constructor(p1, p2) {
        this.xi = Number.MAX_VALUE;
        this.yi = Number.MAX_VALUE;
        this.px1 = p1[0];
        this.py1 = p1[1];
        this.px2 = p2[0];
        this.py2 = p2[1];
        this.a = this.py2 - this.py1;
        this.b = this.px1 - this.px2;
        this.c = this.px2 * this.py1 - this.px1 * this.py2;
        this._undefined = ((this.a === 0) && (this.b === 0) && (this.c === 0));
    }
    isUndefined() {
        return this._undefined;
    }
    intersects(otherSegment) {
        if (this.isUndefined() || otherSegment.isUndefined()) {
            return false;
        }
        let grad1 = Number.MAX_VALUE;
        let grad2 = Number.MAX_VALUE;
        let int1 = 0, int2 = 0;
        const a = this.a, b = this.b, c = this.c;
        if (Math.abs(b) > 0.00001) {
            grad1 = -a / b;
            int1 = -c / b;
        }
        if (Math.abs(otherSegment.b) > 0.00001) {
            grad2 = -otherSegment.a / otherSegment.b;
            int2 = -otherSegment.c / otherSegment.b;
        }
        if (grad1 === Number.MAX_VALUE) {
            if (grad2 === Number.MAX_VALUE) {
                if ((-c / a) !== (-otherSegment.c / otherSegment.a)) {
                    return false;
                }
                if ((this.py1 >= Math.min(otherSegment.py1, otherSegment.py2)) && (this.py1 <= Math.max(otherSegment.py1, otherSegment.py2))) {
                    this.xi = this.px1;
                    this.yi = this.py1;
                    return true;
                }
                if ((this.py2 >= Math.min(otherSegment.py1, otherSegment.py2)) && (this.py2 <= Math.max(otherSegment.py1, otherSegment.py2))) {
                    this.xi = this.px2;
                    this.yi = this.py2;
                    return true;
                }
                return false;
            }
            this.xi = this.px1;
            this.yi = (grad2 * this.xi + int2);
            if (((this.py1 - this.yi) * (this.yi - this.py2) < -0.00001) || ((otherSegment.py1 - this.yi) * (this.yi - otherSegment.py2) < -0.00001)) {
                return false;
            }
            if (Math.abs(otherSegment.a) < 0.00001) {
                if ((otherSegment.px1 - this.xi) * (this.xi - otherSegment.px2) < -0.00001) {
                    return false;
                }
                return true;
            }
            return true;
        }
        if (grad2 === Number.MAX_VALUE) {
            this.xi = otherSegment.px1;
            this.yi = grad1 * this.xi + int1;
            if (((otherSegment.py1 - this.yi) * (this.yi - otherSegment.py2) < -0.00001) || ((this.py1 - this.yi) * (this.yi - this.py2) < -0.00001)) {
                return false;
            }
            if (Math.abs(a) < 0.00001) {
                if ((this.px1 - this.xi) * (this.xi - this.px2) < -0.00001) {
                    return false;
                }
                return true;
            }
            return true;
        }
        if (grad1 === grad2) {
            if (int1 !== int2) {
                return false;
            }
            if ((this.px1 >= Math.min(otherSegment.px1, otherSegment.px2)) && (this.px1 <= Math.max(otherSegment.py1, otherSegment.py2))) {
                this.xi = this.px1;
                this.yi = this.py1;
                return true;
            }
            if ((this.px2 >= Math.min(otherSegment.px1, otherSegment.px2)) && (this.px2 <= Math.max(otherSegment.px1, otherSegment.px2))) {
                this.xi = this.px2;
                this.yi = this.py2;
                return true;
            }
            return false;
        }
        this.xi = ((int2 - int1) / (grad1 - grad2));
        this.yi = (grad1 * this.xi + int1);
        if (((this.px1 - this.xi) * (this.xi - this.px2) < -0.00001) || ((otherSegment.px1 - this.xi) * (this.xi - otherSegment.px2) < -0.00001)) {
            return false;
        }
        return true;
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/path.js":
/*!******************************************!*\
  !*** ./node_modules/roughjs/bin/path.js ***!
  \******************************************/
/*! exports provided: RoughPath, RoughArcConverter, PathFitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughPath", function() { return RoughPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughArcConverter", function() { return RoughArcConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathFitter", function() { return PathFitter; });
function isType(token, type) {
    return token.type === type;
}
const PARAMS = {
    A: 7,
    a: 7,
    C: 6,
    c: 6,
    H: 1,
    h: 1,
    L: 2,
    l: 2,
    M: 2,
    m: 2,
    Q: 4,
    q: 4,
    S: 4,
    s: 4,
    T: 4,
    t: 2,
    V: 1,
    v: 1,
    Z: 0,
    z: 0
};
class ParsedPath {
    constructor(d) {
        this.COMMAND = 0;
        this.NUMBER = 1;
        this.EOD = 2;
        this.segments = [];
        this.parseData(d);
        this.processPoints();
    }
    tokenize(d) {
        const tokens = new Array();
        while (d !== '') {
            if (d.match(/^([ \t\r\n,]+)/)) {
                d = d.substr(RegExp.$1.length);
            }
            else if (d.match(/^([aAcChHlLmMqQsStTvVzZ])/)) {
                tokens[tokens.length] = { type: this.COMMAND, text: RegExp.$1 };
                d = d.substr(RegExp.$1.length);
            }
            else if (d.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) {
                tokens[tokens.length] = { type: this.NUMBER, text: `${parseFloat(RegExp.$1)}` };
                d = d.substr(RegExp.$1.length);
            }
            else {
                console.error('Unrecognized segment command: ' + d);
                return [];
            }
        }
        tokens[tokens.length] = { type: this.EOD, text: '' };
        return tokens;
    }
    parseData(d) {
        const tokens = this.tokenize(d);
        let index = 0;
        let token = tokens[index];
        let mode = 'BOD';
        this.segments = new Array();
        while (!isType(token, this.EOD)) {
            let param_length;
            const params = new Array();
            if (mode === 'BOD') {
                if (token.text === 'M' || token.text === 'm') {
                    index++;
                    param_length = PARAMS[token.text];
                    mode = token.text;
                }
                else {
                    this.parseData('M0,0' + d);
                    return;
                }
            }
            else {
                if (isType(token, this.NUMBER)) {
                    param_length = PARAMS[mode];
                }
                else {
                    index++;
                    param_length = PARAMS[token.text];
                    mode = token.text;
                }
            }
            if ((index + param_length) < tokens.length) {
                for (let i = index; i < index + param_length; i++) {
                    const numbeToken = tokens[i];
                    if (isType(numbeToken, this.NUMBER)) {
                        params[params.length] = +numbeToken.text;
                    }
                    else {
                        console.error('Parameter type is not a number: ' + mode + ',' + numbeToken.text);
                        return;
                    }
                }
                if (typeof PARAMS[mode] === 'number') {
                    const segment = { key: mode, data: params };
                    this.segments.push(segment);
                    index += param_length;
                    token = tokens[index];
                    if (mode === 'M')
                        mode = 'L';
                    if (mode === 'm')
                        mode = 'l';
                }
                else {
                    console.error('Unsupported segment type: ' + mode);
                    return;
                }
            }
            else {
                console.error('Path data ended before all parameters were found');
            }
        }
    }
    get closed() {
        if (typeof this._closed === 'undefined') {
            this._closed = false;
            for (const s of this.segments) {
                if (s.key.toLowerCase() === 'z') {
                    this._closed = true;
                }
            }
        }
        return this._closed;
    }
    processPoints() {
        let first = null;
        let currentPoint = [0, 0];
        for (let i = 0; i < this.segments.length; i++) {
            const s = this.segments[i];
            switch (s.key) {
                case 'M':
                case 'L':
                case 'T':
                    s.point = [s.data[0], s.data[1]];
                    break;
                case 'm':
                case 'l':
                case 't':
                    s.point = [s.data[0] + currentPoint[0], s.data[1] + currentPoint[1]];
                    break;
                case 'H':
                    s.point = [s.data[0], currentPoint[1]];
                    break;
                case 'h':
                    s.point = [s.data[0] + currentPoint[0], currentPoint[1]];
                    break;
                case 'V':
                    s.point = [currentPoint[0], s.data[0]];
                    break;
                case 'v':
                    s.point = [currentPoint[0], s.data[0] + currentPoint[1]];
                    break;
                case 'z':
                case 'Z':
                    if (first) {
                        s.point = [first[0], first[1]];
                    }
                    break;
                case 'C':
                    s.point = [s.data[4], s.data[5]];
                    break;
                case 'c':
                    s.point = [s.data[4] + currentPoint[0], s.data[5] + currentPoint[1]];
                    break;
                case 'S':
                    s.point = [s.data[2], s.data[3]];
                    break;
                case 's':
                    s.point = [s.data[2] + currentPoint[0], s.data[3] + currentPoint[1]];
                    break;
                case 'Q':
                    s.point = [s.data[2], s.data[3]];
                    break;
                case 'q':
                    s.point = [s.data[2] + currentPoint[0], s.data[3] + currentPoint[1]];
                    break;
                case 'A':
                    s.point = [s.data[5], s.data[6]];
                    break;
                case 'a':
                    s.point = [s.data[5] + currentPoint[0], s.data[6] + currentPoint[1]];
                    break;
            }
            if (s.key === 'm' || s.key === 'M') {
                first = null;
            }
            if (s.point) {
                currentPoint = s.point;
                if (!first) {
                    first = s.point;
                }
            }
            if (s.key === 'z' || s.key === 'Z') {
                first = null;
            }
        }
    }
}
class RoughPath {
    constructor(d) {
        this._position = [0, 0];
        this._first = null;
        this.bezierReflectionPoint = null;
        this.quadReflectionPoint = null;
        this.parsed = new ParsedPath(d);
    }
    get segments() {
        return this.parsed.segments;
    }
    get closed() {
        return this.parsed.closed;
    }
    get linearPoints() {
        if (!this._linearPoints) {
            const lp = [];
            let points = [];
            for (const s of this.parsed.segments) {
                const key = s.key.toLowerCase();
                if (key === 'm' || key === 'z') {
                    if (points.length) {
                        lp.push(points);
                        points = [];
                    }
                    if (key === 'z') {
                        continue;
                    }
                }
                if (s.point) {
                    points.push(s.point);
                }
            }
            if (points.length) {
                lp.push(points);
                points = [];
            }
            this._linearPoints = lp;
        }
        return this._linearPoints;
    }
    get first() {
        return this._first;
    }
    set first(v) {
        this._first = v;
    }
    setPosition(x, y) {
        this._position = [x, y];
        if (!this._first) {
            this._first = [x, y];
        }
    }
    get position() {
        return this._position;
    }
    get x() {
        return this._position[0];
    }
    get y() {
        return this._position[1];
    }
}
// Algorithm as described in https://www.w3.org/TR/SVG/implnote.html
// Code adapted from nsSVGPathDataParser.cpp in Mozilla 
// https://hg.mozilla.org/mozilla-central/file/17156fbebbc8/content/svg/content/src/nsSVGPathDataParser.cpp#l887
class RoughArcConverter {
    constructor(from, to, radii, angle, largeArcFlag, sweepFlag) {
        this._segIndex = 0;
        this._numSegs = 0;
        this._rx = 0;
        this._ry = 0;
        this._sinPhi = 0;
        this._cosPhi = 0;
        this._C = [0, 0];
        this._theta = 0;
        this._delta = 0;
        this._T = 0;
        this._from = from;
        if (from[0] === to[0] && from[1] === to[1]) {
            return;
        }
        const radPerDeg = Math.PI / 180;
        this._rx = Math.abs(radii[0]);
        this._ry = Math.abs(radii[1]);
        this._sinPhi = Math.sin(angle * radPerDeg);
        this._cosPhi = Math.cos(angle * radPerDeg);
        const x1dash = this._cosPhi * (from[0] - to[0]) / 2.0 + this._sinPhi * (from[1] - to[1]) / 2.0;
        const y1dash = -this._sinPhi * (from[0] - to[0]) / 2.0 + this._cosPhi * (from[1] - to[1]) / 2.0;
        let root = 0;
        const numerator = this._rx * this._rx * this._ry * this._ry - this._rx * this._rx * y1dash * y1dash - this._ry * this._ry * x1dash * x1dash;
        if (numerator < 0) {
            const s = Math.sqrt(1 - (numerator / (this._rx * this._rx * this._ry * this._ry)));
            this._rx = this._rx * s;
            this._ry = this._ry * s;
            root = 0;
        }
        else {
            root = (largeArcFlag === sweepFlag ? -1.0 : 1.0) *
                Math.sqrt(numerator / (this._rx * this._rx * y1dash * y1dash + this._ry * this._ry * x1dash * x1dash));
        }
        const cxdash = root * this._rx * y1dash / this._ry;
        const cydash = -root * this._ry * x1dash / this._rx;
        this._C = [0, 0];
        this._C[0] = this._cosPhi * cxdash - this._sinPhi * cydash + (from[0] + to[0]) / 2.0;
        this._C[1] = this._sinPhi * cxdash + this._cosPhi * cydash + (from[1] + to[1]) / 2.0;
        this._theta = this.calculateVectorAngle(1.0, 0.0, (x1dash - cxdash) / this._rx, (y1dash - cydash) / this._ry);
        let dtheta = this.calculateVectorAngle((x1dash - cxdash) / this._rx, (y1dash - cydash) / this._ry, (-x1dash - cxdash) / this._rx, (-y1dash - cydash) / this._ry);
        if ((!sweepFlag) && (dtheta > 0)) {
            dtheta -= 2 * Math.PI;
        }
        else if (sweepFlag && (dtheta < 0)) {
            dtheta += 2 * Math.PI;
        }
        this._numSegs = Math.ceil(Math.abs(dtheta / (Math.PI / 2)));
        this._delta = dtheta / this._numSegs;
        this._T = (8 / 3) * Math.sin(this._delta / 4) * Math.sin(this._delta / 4) / Math.sin(this._delta / 2);
    }
    getNextSegment() {
        if (this._segIndex === this._numSegs) {
            return null;
        }
        const cosTheta1 = Math.cos(this._theta);
        const sinTheta1 = Math.sin(this._theta);
        const theta2 = this._theta + this._delta;
        const cosTheta2 = Math.cos(theta2);
        const sinTheta2 = Math.sin(theta2);
        const to = [
            this._cosPhi * this._rx * cosTheta2 - this._sinPhi * this._ry * sinTheta2 + this._C[0],
            this._sinPhi * this._rx * cosTheta2 + this._cosPhi * this._ry * sinTheta2 + this._C[1]
        ];
        const cp1 = [
            this._from[0] + this._T * (-this._cosPhi * this._rx * sinTheta1 - this._sinPhi * this._ry * cosTheta1),
            this._from[1] + this._T * (-this._sinPhi * this._rx * sinTheta1 + this._cosPhi * this._ry * cosTheta1)
        ];
        const cp2 = [
            to[0] + this._T * (this._cosPhi * this._rx * sinTheta2 + this._sinPhi * this._ry * cosTheta2),
            to[1] + this._T * (this._sinPhi * this._rx * sinTheta2 - this._cosPhi * this._ry * cosTheta2)
        ];
        this._theta = theta2;
        this._from = [to[0], to[1]];
        this._segIndex++;
        return {
            cp1: cp1,
            cp2: cp2,
            to: to
        };
    }
    calculateVectorAngle(ux, uy, vx, vy) {
        const ta = Math.atan2(uy, ux);
        const tb = Math.atan2(vy, vx);
        if (tb >= ta)
            return tb - ta;
        return 2 * Math.PI - (ta - tb);
    }
}
class PathFitter {
    constructor(sets, closed) {
        this.sets = sets;
        this.closed = closed;
    }
    fit(simplification) {
        const outSets = [];
        for (const set of this.sets) {
            const length = set.length;
            let estLength = Math.floor(simplification * length);
            if (estLength < 5) {
                if (length <= 5) {
                    continue;
                }
                estLength = 5;
            }
            outSets.push(this.reduce(set, estLength));
        }
        let d = '';
        for (const set of outSets) {
            for (let i = 0; i < set.length; i++) {
                const point = set[i];
                if (i === 0) {
                    d += 'M' + point[0] + ',' + point[1];
                }
                else {
                    d += 'L' + point[0] + ',' + point[1];
                }
            }
            if (this.closed) {
                d += 'z ';
            }
        }
        return d;
    }
    distance(p1, p2) {
        return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
    }
    reduce(set, count) {
        if (set.length <= count) {
            return set;
        }
        const points = set.slice(0);
        while (points.length > count) {
            const areas = [];
            let minArea = -1;
            let minIndex = -1;
            for (let i = 1; i < (points.length - 1); i++) {
                const a = this.distance(points[i - 1], points[i]);
                const b = this.distance(points[i], points[i + 1]);
                const c = this.distance(points[i - 1], points[i + 1]);
                const s = (a + b + c) / 2.0;
                const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
                areas.push(area);
                if ((minArea < 0) || (area < minArea)) {
                    minArea = area;
                    minIndex = i;
                }
            }
            if (minIndex > 0) {
                points.splice(minIndex, 1);
            }
            else {
                break;
            }
        }
        return points;
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/renderer-factory.js":
/*!******************************************************!*\
  !*** ./node_modules/roughjs/bin/renderer-factory.js ***!
  \******************************************************/
/*! exports provided: createRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRenderer", function() { return createRenderer; });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ "./node_modules/roughjs/bin/renderer.js");

const hasSelf = typeof self !== 'undefined';
const roughScript = hasSelf && self && self.document && self.document.currentScript && self.document.currentScript.src;
function createRenderer(config) {
    if (hasSelf && roughScript && self && self.workly && config.async && (!config.noWorker)) {
        const worklySource = config.worklyURL || 'https://cdn.jsdelivr.net/gh/pshihn/workly/dist/workly.min.js';
        if (worklySource) {
            const code = `importScripts('${worklySource}', '${roughScript}');\nworkly.expose(self.rough.createRenderer());`;
            const ourl = URL.createObjectURL(new Blob([code]));
            return self.workly.proxy(ourl);
        }
    }
    return new _renderer__WEBPACK_IMPORTED_MODULE_0__["RoughRenderer"]();
}


/***/ }),

/***/ "./node_modules/roughjs/bin/renderer.js":
/*!**********************************************!*\
  !*** ./node_modules/roughjs/bin/renderer.js ***!
  \**********************************************/
/*! exports provided: RoughRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughRenderer", function() { return RoughRenderer; });
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./node_modules/roughjs/bin/path.js");
/* harmony import */ var _fillers_filler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fillers/filler */ "./node_modules/roughjs/bin/fillers/filler.js");


class RoughRenderer {
    line(x1, y1, x2, y2, o) {
        const ops = this.doubleLine(x1, y1, x2, y2, o);
        return { type: 'path', ops };
    }
    linearPath(points, close, o) {
        const len = (points || []).length;
        if (len > 2) {
            let ops = [];
            for (let i = 0; i < (len - 1); i++) {
                ops = ops.concat(this.doubleLine(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], o));
            }
            if (close) {
                ops = ops.concat(this.doubleLine(points[len - 1][0], points[len - 1][1], points[0][0], points[0][1], o));
            }
            return { type: 'path', ops };
        }
        else if (len === 2) {
            return this.line(points[0][0], points[0][1], points[1][0], points[1][1], o);
        }
        return { type: 'path', ops: [] };
    }
    polygon(points, o) {
        return this.linearPath(points, true, o);
    }
    rectangle(x, y, width, height, o) {
        const points = [
            [x, y], [x + width, y], [x + width, y + height], [x, y + height]
        ];
        return this.polygon(points, o);
    }
    curve(points, o) {
        const o1 = this._curveWithOffset(points, 1 * (1 + o.roughness * 0.2), o);
        const o2 = this._curveWithOffset(points, 1.5 * (1 + o.roughness * 0.22), o);
        return { type: 'path', ops: o1.concat(o2) };
    }
    ellipse(x, y, width, height, o) {
        const increment = (Math.PI * 2) / o.curveStepCount;
        let rx = Math.abs(width / 2);
        let ry = Math.abs(height / 2);
        rx += this.getOffset(-rx * 0.05, rx * 0.05, o);
        ry += this.getOffset(-ry * 0.05, ry * 0.05, o);
        const o1 = this._ellipse(increment, x, y, rx, ry, 1, increment * this.getOffset(0.1, this.getOffset(0.4, 1, o), o), o);
        const o2 = this._ellipse(increment, x, y, rx, ry, 1.5, 0, o);
        return { type: 'path', ops: o1.concat(o2) };
    }
    arc(x, y, width, height, start, stop, closed, roughClosure, o) {
        const cx = x;
        const cy = y;
        let rx = Math.abs(width / 2);
        let ry = Math.abs(height / 2);
        rx += this.getOffset(-rx * 0.01, rx * 0.01, o);
        ry += this.getOffset(-ry * 0.01, ry * 0.01, o);
        let strt = start;
        let stp = stop;
        while (strt < 0) {
            strt += Math.PI * 2;
            stp += Math.PI * 2;
        }
        if ((stp - strt) > (Math.PI * 2)) {
            strt = 0;
            stp = Math.PI * 2;
        }
        const ellipseInc = (Math.PI * 2) / o.curveStepCount;
        const arcInc = Math.min(ellipseInc / 2, (stp - strt) / 2);
        const o1 = this._arc(arcInc, cx, cy, rx, ry, strt, stp, 1, o);
        const o2 = this._arc(arcInc, cx, cy, rx, ry, strt, stp, 1.5, o);
        let ops = o1.concat(o2);
        if (closed) {
            if (roughClosure) {
                ops = ops.concat(this.doubleLine(cx, cy, cx + rx * Math.cos(strt), cy + ry * Math.sin(strt), o));
                ops = ops.concat(this.doubleLine(cx, cy, cx + rx * Math.cos(stp), cy + ry * Math.sin(stp), o));
            }
            else {
                ops.push({ op: 'lineTo', data: [cx, cy] });
                ops.push({ op: 'lineTo', data: [cx + rx * Math.cos(strt), cy + ry * Math.sin(strt)] });
            }
        }
        return { type: 'path', ops };
    }
    svgPath(path, o) {
        path = (path || '').replace(/\n/g, ' ').replace(/(-\s)/g, '-').replace('/(\s\s)/g', ' ');
        let p = new _path_js__WEBPACK_IMPORTED_MODULE_0__["RoughPath"](path);
        if (o.simplification) {
            const fitter = new _path_js__WEBPACK_IMPORTED_MODULE_0__["PathFitter"](p.linearPoints, p.closed);
            const d = fitter.fit(o.simplification);
            p = new _path_js__WEBPACK_IMPORTED_MODULE_0__["RoughPath"](d);
        }
        let ops = [];
        const segments = p.segments || [];
        for (let i = 0; i < segments.length; i++) {
            const s = segments[i];
            const prev = i > 0 ? segments[i - 1] : null;
            const opList = this._processSegment(p, s, prev, o);
            if (opList && opList.length) {
                ops = ops.concat(opList);
            }
        }
        return { type: 'path', ops };
    }
    solidFillPolygon(points, o) {
        const ops = [];
        if (points.length) {
            const offset = o.maxRandomnessOffset || 0;
            const len = points.length;
            if (len > 2) {
                ops.push({ op: 'move', data: [points[0][0] + this.getOffset(-offset, offset, o), points[0][1] + this.getOffset(-offset, offset, o)] });
                for (let i = 1; i < len; i++) {
                    ops.push({ op: 'lineTo', data: [points[i][0] + this.getOffset(-offset, offset, o), points[i][1] + this.getOffset(-offset, offset, o)] });
                }
            }
        }
        return { type: 'fillPath', ops };
    }
    patternFillPolygon(points, o) {
        const filler = Object(_fillers_filler__WEBPACK_IMPORTED_MODULE_1__["getFiller"])(this, o);
        return filler.fillPolygon(points, o);
    }
    patternFillEllipse(cx, cy, width, height, o) {
        const filler = Object(_fillers_filler__WEBPACK_IMPORTED_MODULE_1__["getFiller"])(this, o);
        return filler.fillEllipse(cx, cy, width, height, o);
    }
    patternFillArc(x, y, width, height, start, stop, o) {
        const cx = x;
        const cy = y;
        let rx = Math.abs(width / 2);
        let ry = Math.abs(height / 2);
        rx += this.getOffset(-rx * 0.01, rx * 0.01, o);
        ry += this.getOffset(-ry * 0.01, ry * 0.01, o);
        let strt = start;
        let stp = stop;
        while (strt < 0) {
            strt += Math.PI * 2;
            stp += Math.PI * 2;
        }
        if ((stp - strt) > (Math.PI * 2)) {
            strt = 0;
            stp = Math.PI * 2;
        }
        const increment = (stp - strt) / o.curveStepCount;
        const points = [];
        for (let angle = strt; angle <= stp; angle = angle + increment) {
            points.push([cx + rx * Math.cos(angle), cy + ry * Math.sin(angle)]);
        }
        points.push([cx + rx * Math.cos(stp), cy + ry * Math.sin(stp)]);
        points.push([cx, cy]);
        return this.patternFillPolygon(points, o);
    }
    /// 
    getOffset(min, max, ops) {
        return ops.roughness * ((Math.random() * (max - min)) + min);
    }
    doubleLine(x1, y1, x2, y2, o) {
        const o1 = this._line(x1, y1, x2, y2, o, true, false);
        const o2 = this._line(x1, y1, x2, y2, o, true, true);
        return o1.concat(o2);
    }
    _line(x1, y1, x2, y2, o, move, overlay) {
        const lengthSq = Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2);
        let offset = o.maxRandomnessOffset || 0;
        if ((offset * offset * 100) > lengthSq) {
            offset = Math.sqrt(lengthSq) / 10;
        }
        const halfOffset = offset / 2;
        const divergePoint = 0.2 + Math.random() * 0.2;
        let midDispX = o.bowing * o.maxRandomnessOffset * (y2 - y1) / 200;
        let midDispY = o.bowing * o.maxRandomnessOffset * (x1 - x2) / 200;
        midDispX = this.getOffset(-midDispX, midDispX, o);
        midDispY = this.getOffset(-midDispY, midDispY, o);
        const ops = [];
        if (move) {
            if (overlay) {
                ops.push({
                    op: 'move', data: [
                        x1 + this.getOffset(-halfOffset, halfOffset, o),
                        y1 + this.getOffset(-halfOffset, halfOffset, o)
                    ]
                });
            }
            else {
                ops.push({
                    op: 'move', data: [
                        x1 + this.getOffset(-offset, offset, o),
                        y1 + this.getOffset(-offset, offset, o)
                    ]
                });
            }
        }
        if (overlay) {
            ops.push({
                op: 'bcurveTo', data: [
                    midDispX + x1 + (x2 - x1) * divergePoint + this.getOffset(-halfOffset, halfOffset, o),
                    midDispY + y1 + (y2 - y1) * divergePoint + this.getOffset(-halfOffset, halfOffset, o),
                    midDispX + x1 + 2 * (x2 - x1) * divergePoint + this.getOffset(-halfOffset, halfOffset, o),
                    midDispY + y1 + 2 * (y2 - y1) * divergePoint + this.getOffset(-halfOffset, halfOffset, o),
                    x2 + this.getOffset(-halfOffset, halfOffset, o),
                    y2 + this.getOffset(-halfOffset, halfOffset, o)
                ]
            });
        }
        else {
            ops.push({
                op: 'bcurveTo', data: [
                    midDispX + x1 + (x2 - x1) * divergePoint + this.getOffset(-offset, offset, o),
                    midDispY + y1 + (y2 - y1) * divergePoint + this.getOffset(-offset, offset, o),
                    midDispX + x1 + 2 * (x2 - x1) * divergePoint + this.getOffset(-offset, offset, o),
                    midDispY + y1 + 2 * (y2 - y1) * divergePoint + this.getOffset(-offset, offset, o),
                    x2 + this.getOffset(-offset, offset, o),
                    y2 + this.getOffset(-offset, offset, o)
                ]
            });
        }
        return ops;
    }
    _curve(points, closePoint, o) {
        const len = points.length;
        let ops = [];
        if (len > 3) {
            const b = [];
            const s = 1 - o.curveTightness;
            ops.push({ op: 'move', data: [points[1][0], points[1][1]] });
            for (let i = 1; (i + 2) < len; i++) {
                const cachedVertArray = points[i];
                b[0] = [cachedVertArray[0], cachedVertArray[1]];
                b[1] = [cachedVertArray[0] + (s * points[i + 1][0] - s * points[i - 1][0]) / 6, cachedVertArray[1] + (s * points[i + 1][1] - s * points[i - 1][1]) / 6];
                b[2] = [points[i + 1][0] + (s * points[i][0] - s * points[i + 2][0]) / 6, points[i + 1][1] + (s * points[i][1] - s * points[i + 2][1]) / 6];
                b[3] = [points[i + 1][0], points[i + 1][1]];
                ops.push({ op: 'bcurveTo', data: [b[1][0], b[1][1], b[2][0], b[2][1], b[3][0], b[3][1]] });
            }
            if (closePoint && closePoint.length === 2) {
                const ro = o.maxRandomnessOffset;
                ops.push({ op: 'lineTo', data: [closePoint[0] + this.getOffset(-ro, ro, o), closePoint[1] + +this.getOffset(-ro, ro, o)] });
            }
        }
        else if (len === 3) {
            ops.push({ op: 'move', data: [points[1][0], points[1][1]] });
            ops.push({
                op: 'bcurveTo', data: [
                    points[1][0], points[1][1],
                    points[2][0], points[2][1],
                    points[2][0], points[2][1]
                ]
            });
        }
        else if (len === 2) {
            ops = ops.concat(this.doubleLine(points[0][0], points[0][1], points[1][0], points[1][1], o));
        }
        return ops;
    }
    _ellipse(increment, cx, cy, rx, ry, offset, overlap, o) {
        const radOffset = this.getOffset(-0.5, 0.5, o) - (Math.PI / 2);
        const points = [];
        points.push([
            this.getOffset(-offset, offset, o) + cx + 0.9 * rx * Math.cos(radOffset - increment),
            this.getOffset(-offset, offset, o) + cy + 0.9 * ry * Math.sin(radOffset - increment)
        ]);
        for (let angle = radOffset; angle < (Math.PI * 2 + radOffset - 0.01); angle = angle + increment) {
            points.push([
                this.getOffset(-offset, offset, o) + cx + rx * Math.cos(angle),
                this.getOffset(-offset, offset, o) + cy + ry * Math.sin(angle)
            ]);
        }
        points.push([
            this.getOffset(-offset, offset, o) + cx + rx * Math.cos(radOffset + Math.PI * 2 + overlap * 0.5),
            this.getOffset(-offset, offset, o) + cy + ry * Math.sin(radOffset + Math.PI * 2 + overlap * 0.5)
        ]);
        points.push([
            this.getOffset(-offset, offset, o) + cx + 0.98 * rx * Math.cos(radOffset + overlap),
            this.getOffset(-offset, offset, o) + cy + 0.98 * ry * Math.sin(radOffset + overlap)
        ]);
        points.push([
            this.getOffset(-offset, offset, o) + cx + 0.9 * rx * Math.cos(radOffset + overlap * 0.5),
            this.getOffset(-offset, offset, o) + cy + 0.9 * ry * Math.sin(radOffset + overlap * 0.5)
        ]);
        return this._curve(points, null, o);
    }
    _curveWithOffset(points, offset, o) {
        const ps = [];
        ps.push([
            points[0][0] + this.getOffset(-offset, offset, o),
            points[0][1] + this.getOffset(-offset, offset, o),
        ]);
        ps.push([
            points[0][0] + this.getOffset(-offset, offset, o),
            points[0][1] + this.getOffset(-offset, offset, o),
        ]);
        for (let i = 1; i < points.length; i++) {
            ps.push([
                points[i][0] + this.getOffset(-offset, offset, o),
                points[i][1] + this.getOffset(-offset, offset, o),
            ]);
            if (i === (points.length - 1)) {
                ps.push([
                    points[i][0] + this.getOffset(-offset, offset, o),
                    points[i][1] + this.getOffset(-offset, offset, o),
                ]);
            }
        }
        return this._curve(ps, null, o);
    }
    _arc(increment, cx, cy, rx, ry, strt, stp, offset, o) {
        const radOffset = strt + this.getOffset(-0.1, 0.1, o);
        const points = [];
        points.push([
            this.getOffset(-offset, offset, o) + cx + 0.9 * rx * Math.cos(radOffset - increment),
            this.getOffset(-offset, offset, o) + cy + 0.9 * ry * Math.sin(radOffset - increment)
        ]);
        for (let angle = radOffset; angle <= stp; angle = angle + increment) {
            points.push([
                this.getOffset(-offset, offset, o) + cx + rx * Math.cos(angle),
                this.getOffset(-offset, offset, o) + cy + ry * Math.sin(angle)
            ]);
        }
        points.push([
            cx + rx * Math.cos(stp),
            cy + ry * Math.sin(stp)
        ]);
        points.push([
            cx + rx * Math.cos(stp),
            cy + ry * Math.sin(stp)
        ]);
        return this._curve(points, null, o);
    }
    _bezierTo(x1, y1, x2, y2, x, y, path, o) {
        const ops = [];
        const ros = [o.maxRandomnessOffset || 1, (o.maxRandomnessOffset || 1) + 0.5];
        let f = [0, 0];
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                ops.push({ op: 'move', data: [path.x, path.y] });
            }
            else {
                ops.push({ op: 'move', data: [path.x + this.getOffset(-ros[0], ros[0], o), path.y + this.getOffset(-ros[0], ros[0], o)] });
            }
            f = [x + this.getOffset(-ros[i], ros[i], o), y + this.getOffset(-ros[i], ros[i], o)];
            ops.push({
                op: 'bcurveTo', data: [
                    x1 + this.getOffset(-ros[i], ros[i], o), y1 + this.getOffset(-ros[i], ros[i], o),
                    x2 + this.getOffset(-ros[i], ros[i], o), y2 + this.getOffset(-ros[i], ros[i], o),
                    f[0], f[1]
                ]
            });
        }
        path.setPosition(f[0], f[1]);
        return ops;
    }
    _processSegment(path, seg, prevSeg, o) {
        let ops = [];
        switch (seg.key) {
            case 'M':
            case 'm': {
                const delta = seg.key === 'm';
                if (seg.data.length >= 2) {
                    let x = +seg.data[0];
                    let y = +seg.data[1];
                    if (delta) {
                        x += path.x;
                        y += path.y;
                    }
                    const ro = 1 * (o.maxRandomnessOffset || 0);
                    x = x + this.getOffset(-ro, ro, o);
                    y = y + this.getOffset(-ro, ro, o);
                    path.setPosition(x, y);
                    ops.push({ op: 'move', data: [x, y] });
                }
                break;
            }
            case 'L':
            case 'l': {
                const delta = seg.key === 'l';
                if (seg.data.length >= 2) {
                    let x = +seg.data[0];
                    let y = +seg.data[1];
                    if (delta) {
                        x += path.x;
                        y += path.y;
                    }
                    ops = ops.concat(this.doubleLine(path.x, path.y, x, y, o));
                    path.setPosition(x, y);
                }
                break;
            }
            case 'H':
            case 'h': {
                const delta = seg.key === 'h';
                if (seg.data.length) {
                    let x = +seg.data[0];
                    if (delta) {
                        x += path.x;
                    }
                    ops = ops.concat(this.doubleLine(path.x, path.y, x, path.y, o));
                    path.setPosition(x, path.y);
                }
                break;
            }
            case 'V':
            case 'v': {
                const delta = seg.key === 'v';
                if (seg.data.length) {
                    let y = +seg.data[0];
                    if (delta) {
                        y += path.y;
                    }
                    ops = ops.concat(this.doubleLine(path.x, path.y, path.x, y, o));
                    path.setPosition(path.x, y);
                }
                break;
            }
            case 'Z':
            case 'z': {
                if (path.first) {
                    ops = ops.concat(this.doubleLine(path.x, path.y, path.first[0], path.first[1], o));
                    path.setPosition(path.first[0], path.first[1]);
                    path.first = null;
                }
                break;
            }
            case 'C':
            case 'c': {
                const delta = seg.key === 'c';
                if (seg.data.length >= 6) {
                    let x1 = +seg.data[0];
                    let y1 = +seg.data[1];
                    let x2 = +seg.data[2];
                    let y2 = +seg.data[3];
                    let x = +seg.data[4];
                    let y = +seg.data[5];
                    if (delta) {
                        x1 += path.x;
                        x2 += path.x;
                        x += path.x;
                        y1 += path.y;
                        y2 += path.y;
                        y += path.y;
                    }
                    const ob = this._bezierTo(x1, y1, x2, y2, x, y, path, o);
                    ops = ops.concat(ob);
                    path.bezierReflectionPoint = [x + (x - x2), y + (y - y2)];
                }
                break;
            }
            case 'S':
            case 's': {
                const delta = seg.key === 's';
                if (seg.data.length >= 4) {
                    let x2 = +seg.data[0];
                    let y2 = +seg.data[1];
                    let x = +seg.data[2];
                    let y = +seg.data[3];
                    if (delta) {
                        x2 += path.x;
                        x += path.x;
                        y2 += path.y;
                        y += path.y;
                    }
                    let x1 = x2;
                    let y1 = y2;
                    const prevKey = prevSeg ? prevSeg.key : '';
                    let ref = null;
                    if (prevKey === 'c' || prevKey === 'C' || prevKey === 's' || prevKey === 'S') {
                        ref = path.bezierReflectionPoint;
                    }
                    if (ref) {
                        x1 = ref[0];
                        y1 = ref[1];
                    }
                    const ob = this._bezierTo(x1, y1, x2, y2, x, y, path, o);
                    ops = ops.concat(ob);
                    path.bezierReflectionPoint = [x + (x - x2), y + (y - y2)];
                }
                break;
            }
            case 'Q':
            case 'q': {
                const delta = seg.key === 'q';
                if (seg.data.length >= 4) {
                    let x1 = +seg.data[0];
                    let y1 = +seg.data[1];
                    let x = +seg.data[2];
                    let y = +seg.data[3];
                    if (delta) {
                        x1 += path.x;
                        x += path.x;
                        y1 += path.y;
                        y += path.y;
                    }
                    const offset1 = 1 * (1 + o.roughness * 0.2);
                    const offset2 = 1.5 * (1 + o.roughness * 0.22);
                    ops.push({ op: 'move', data: [path.x + this.getOffset(-offset1, offset1, o), path.y + this.getOffset(-offset1, offset1, o)] });
                    let f = [x + this.getOffset(-offset1, offset1, o), y + this.getOffset(-offset1, offset1, o)];
                    ops.push({
                        op: 'qcurveTo', data: [
                            x1 + this.getOffset(-offset1, offset1, o), y1 + this.getOffset(-offset1, offset1, o),
                            f[0], f[1]
                        ]
                    });
                    ops.push({ op: 'move', data: [path.x + this.getOffset(-offset2, offset2, o), path.y + this.getOffset(-offset2, offset2, o)] });
                    f = [x + this.getOffset(-offset2, offset2, o), y + this.getOffset(-offset2, offset2, o)];
                    ops.push({
                        op: 'qcurveTo', data: [
                            x1 + this.getOffset(-offset2, offset2, o), y1 + this.getOffset(-offset2, offset2, o),
                            f[0], f[1]
                        ]
                    });
                    path.setPosition(f[0], f[1]);
                    path.quadReflectionPoint = [x + (x - x1), y + (y - y1)];
                }
                break;
            }
            case 'T':
            case 't': {
                const delta = seg.key === 't';
                if (seg.data.length >= 2) {
                    let x = +seg.data[0];
                    let y = +seg.data[1];
                    if (delta) {
                        x += path.x;
                        y += path.y;
                    }
                    let x1 = x;
                    let y1 = y;
                    const prevKey = prevSeg ? prevSeg.key : '';
                    let ref = null;
                    if (prevKey === 'q' || prevKey === 'Q' || prevKey === 't' || prevKey === 'T') {
                        ref = path.quadReflectionPoint;
                    }
                    if (ref) {
                        x1 = ref[0];
                        y1 = ref[1];
                    }
                    const offset1 = 1 * (1 + o.roughness * 0.2);
                    const offset2 = 1.5 * (1 + o.roughness * 0.22);
                    ops.push({ op: 'move', data: [path.x + this.getOffset(-offset1, offset1, o), path.y + this.getOffset(-offset1, offset1, o)] });
                    let f = [x + this.getOffset(-offset1, offset1, o), y + this.getOffset(-offset1, offset1, o)];
                    ops.push({
                        op: 'qcurveTo', data: [
                            x1 + this.getOffset(-offset1, offset1, o), y1 + this.getOffset(-offset1, offset1, o),
                            f[0], f[1]
                        ]
                    });
                    ops.push({ op: 'move', data: [path.x + this.getOffset(-offset2, offset2, o), path.y + this.getOffset(-offset2, offset2, o)] });
                    f = [x + this.getOffset(-offset2, offset2, o), y + this.getOffset(-offset2, offset2, o)];
                    ops.push({
                        op: 'qcurveTo', data: [
                            x1 + this.getOffset(-offset2, offset2, o), y1 + this.getOffset(-offset2, offset2, o),
                            f[0], f[1]
                        ]
                    });
                    path.setPosition(f[0], f[1]);
                    path.quadReflectionPoint = [x + (x - x1), y + (y - y1)];
                }
                break;
            }
            case 'A':
            case 'a': {
                const delta = seg.key === 'a';
                if (seg.data.length >= 7) {
                    const rx = +seg.data[0];
                    const ry = +seg.data[1];
                    const angle = +seg.data[2];
                    const largeArcFlag = +seg.data[3];
                    const sweepFlag = +seg.data[4];
                    let x = +seg.data[5];
                    let y = +seg.data[6];
                    if (delta) {
                        x += path.x;
                        y += path.y;
                    }
                    if (x === path.x && y === path.y) {
                        break;
                    }
                    if (rx === 0 || ry === 0) {
                        ops = ops.concat(this.doubleLine(path.x, path.y, x, y, o));
                        path.setPosition(x, y);
                    }
                    else {
                        for (let i = 0; i < 1; i++) {
                            const arcConverter = new _path_js__WEBPACK_IMPORTED_MODULE_0__["RoughArcConverter"]([path.x, path.y], [x, y], [rx, ry], angle, largeArcFlag ? true : false, sweepFlag ? true : false);
                            let segment = arcConverter.getNextSegment();
                            while (segment) {
                                const ob = this._bezierTo(segment.cp1[0], segment.cp1[1], segment.cp2[0], segment.cp2[1], segment.to[0], segment.to[1], path, o);
                                ops = ops.concat(ob);
                                segment = arcConverter.getNextSegment();
                            }
                        }
                    }
                }
                break;
            }
            default:
                break;
        }
        return ops;
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/rough.js":
/*!*******************************************!*\
  !*** ./node_modules/roughjs/bin/rough.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./node_modules/roughjs/bin/canvas.js");
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generator */ "./node_modules/roughjs/bin/generator.js");
/* harmony import */ var _generator_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generator-async */ "./node_modules/roughjs/bin/generator-async.js");
/* harmony import */ var _canvas_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas-async */ "./node_modules/roughjs/bin/canvas-async.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg */ "./node_modules/roughjs/bin/svg.js");
/* harmony import */ var _svg_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg-async */ "./node_modules/roughjs/bin/svg-async.js");






/* harmony default export */ __webpack_exports__["default"] = ({
    canvas(canvas, config) {
        if (config && config.async) {
            return new _canvas_async__WEBPACK_IMPORTED_MODULE_3__["RoughCanvasAsync"](canvas, config);
        }
        return new _canvas__WEBPACK_IMPORTED_MODULE_0__["RoughCanvas"](canvas, config);
    },
    svg(svg, config) {
        if (config && config.async) {
            return new _svg_async__WEBPACK_IMPORTED_MODULE_5__["RoughSVGAsync"](svg, config);
        }
        return new _svg__WEBPACK_IMPORTED_MODULE_4__["RoughSVG"](svg, config);
    },
    createRenderer() {
        return _canvas__WEBPACK_IMPORTED_MODULE_0__["RoughCanvas"].createRenderer();
    },
    generator(config, surface) {
        if (config && config.async) {
            return new _generator_async__WEBPACK_IMPORTED_MODULE_2__["RoughGeneratorAsync"](config, surface);
        }
        return new _generator__WEBPACK_IMPORTED_MODULE_1__["RoughGenerator"](config, surface);
    }
});


/***/ }),

/***/ "./node_modules/roughjs/bin/svg-async.js":
/*!***********************************************!*\
  !*** ./node_modules/roughjs/bin/svg-async.js ***!
  \***********************************************/
/*! exports provided: RoughSVGAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughSVGAsync", function() { return RoughSVGAsync; });
/* harmony import */ var _generator_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator-async */ "./node_modules/roughjs/bin/generator-async.js");
/* harmony import */ var _svg_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-base */ "./node_modules/roughjs/bin/svg-base.js");


class RoughSVGAsync extends _svg_base__WEBPACK_IMPORTED_MODULE_1__["RoughSVGBase"] {
    constructor(svg, config) {
        super(svg);
        this.genAsync = new _generator_async__WEBPACK_IMPORTED_MODULE_0__["RoughGeneratorAsync"](config || null, this.svg);
    }
    get generator() {
        return this.genAsync;
    }
    getDefaultOptions() {
        return this.genAsync.defaultOptions;
    }
    opsToPath(drawing) {
        return this.genAsync.opsToPath(drawing);
    }
    async line(x1, y1, x2, y2, options) {
        const d = await this.genAsync.line(x1, y1, x2, y2, options);
        return this.draw(d);
    }
    async rectangle(x, y, width, height, options) {
        const d = await this.genAsync.rectangle(x, y, width, height, options);
        return this.draw(d);
    }
    async ellipse(x, y, width, height, options) {
        const d = await this.genAsync.ellipse(x, y, width, height, options);
        return this.draw(d);
    }
    async circle(x, y, diameter, options) {
        const d = await this.genAsync.circle(x, y, diameter, options);
        return this.draw(d);
    }
    async linearPath(points, options) {
        const d = await this.genAsync.linearPath(points, options);
        return this.draw(d);
    }
    async polygon(points, options) {
        const d = await this.genAsync.polygon(points, options);
        return this.draw(d);
    }
    async arc(x, y, width, height, start, stop, closed = false, options) {
        const d = await this.genAsync.arc(x, y, width, height, start, stop, closed, options);
        return this.draw(d);
    }
    async curve(points, options) {
        const d = await this.genAsync.curve(points, options);
        return this.draw(d);
    }
    async path(d, options) {
        const drawing = await this.genAsync.path(d, options);
        return this.draw(drawing);
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/svg-base.js":
/*!**********************************************!*\
  !*** ./node_modules/roughjs/bin/svg-base.js ***!
  \**********************************************/
/*! exports provided: RoughSVGBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughSVGBase", function() { return RoughSVGBase; });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ "./node_modules/roughjs/bin/renderer.js");

const hasDocument = typeof document !== 'undefined';
class RoughSVGBase {
    constructor(svg) {
        this.svg = svg;
    }
    static createRenderer() {
        return new _renderer__WEBPACK_IMPORTED_MODULE_0__["RoughRenderer"]();
    }
    get defs() {
        const doc = this.svg.ownerDocument || (hasDocument && document);
        if (doc) {
            if (!this._defs) {
                const dnode = doc.createElementNS('http://www.w3.org/2000/svg', 'defs');
                if (this.svg.firstChild) {
                    this.svg.insertBefore(dnode, this.svg.firstChild);
                }
                else {
                    this.svg.appendChild(dnode);
                }
                this._defs = dnode;
            }
        }
        return this._defs || null;
    }
    draw(drawable) {
        const sets = drawable.sets || [];
        const o = drawable.options || this.getDefaultOptions();
        const doc = this.svg.ownerDocument || (hasDocument && document);
        const g = doc.createElementNS('http://www.w3.org/2000/svg', 'g');
        for (const drawing of sets) {
            let path = null;
            switch (drawing.type) {
                case 'path': {
                    path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('d', this.opsToPath(drawing));
                    path.style.stroke = o.stroke;
                    path.style.strokeWidth = o.strokeWidth + '';
                    path.style.fill = 'none';
                    break;
                }
                case 'fillPath': {
                    path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('d', this.opsToPath(drawing));
                    path.style.stroke = 'none';
                    path.style.strokeWidth = '0';
                    path.style.fill = o.fill || null;
                    break;
                }
                case 'fillSketch': {
                    path = this.fillSketch(doc, drawing, o);
                    break;
                }
                case 'path2Dfill': {
                    path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('d', drawing.path || '');
                    path.style.stroke = 'none';
                    path.style.strokeWidth = '0';
                    path.style.fill = o.fill || null;
                    break;
                }
                case 'path2Dpattern': {
                    if (!this.defs) {
                        console.error('Cannot render path2Dpattern. No defs/document defined.');
                    }
                    else {
                        const size = drawing.size;
                        const pattern = doc.createElementNS('http://www.w3.org/2000/svg', 'pattern');
                        const id = `rough-${Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER || 999999))}`;
                        pattern.setAttribute('id', id);
                        pattern.setAttribute('x', '0');
                        pattern.setAttribute('y', '0');
                        pattern.setAttribute('width', '1');
                        pattern.setAttribute('height', '1');
                        pattern.setAttribute('height', '1');
                        pattern.setAttribute('viewBox', `0 0 ${Math.round(size[0])} ${Math.round(size[1])}`);
                        pattern.setAttribute('patternUnits', 'objectBoundingBox');
                        const patternPath = this.fillSketch(doc, drawing, o);
                        pattern.appendChild(patternPath);
                        this.defs.appendChild(pattern);
                        path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
                        path.setAttribute('d', drawing.path || '');
                        path.style.stroke = 'none';
                        path.style.strokeWidth = '0';
                        path.style.fill = `url(#${id})`;
                    }
                    break;
                }
            }
            if (path) {
                g.appendChild(path);
            }
        }
        return g;
    }
    fillSketch(doc, drawing, o) {
        let fweight = o.fillWeight;
        if (fweight < 0) {
            fweight = o.strokeWidth / 2;
        }
        const path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', this.opsToPath(drawing));
        path.style.stroke = o.fill || null;
        path.style.strokeWidth = fweight + '';
        path.style.fill = 'none';
        return path;
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/svg.js":
/*!*****************************************!*\
  !*** ./node_modules/roughjs/bin/svg.js ***!
  \*****************************************/
/*! exports provided: RoughSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughSVG", function() { return RoughSVG; });
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ "./node_modules/roughjs/bin/generator.js");
/* harmony import */ var _svg_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-base */ "./node_modules/roughjs/bin/svg-base.js");


class RoughSVG extends _svg_base__WEBPACK_IMPORTED_MODULE_1__["RoughSVGBase"] {
    constructor(svg, config) {
        super(svg);
        this.gen = new _generator__WEBPACK_IMPORTED_MODULE_0__["RoughGenerator"](config || null, this.svg);
    }
    get generator() {
        return this.gen;
    }
    getDefaultOptions() {
        return this.gen.defaultOptions;
    }
    opsToPath(drawing) {
        return this.gen.opsToPath(drawing);
    }
    line(x1, y1, x2, y2, options) {
        const d = this.gen.line(x1, y1, x2, y2, options);
        return this.draw(d);
    }
    rectangle(x, y, width, height, options) {
        const d = this.gen.rectangle(x, y, width, height, options);
        return this.draw(d);
    }
    ellipse(x, y, width, height, options) {
        const d = this.gen.ellipse(x, y, width, height, options);
        return this.draw(d);
    }
    circle(x, y, diameter, options) {
        const d = this.gen.circle(x, y, diameter, options);
        return this.draw(d);
    }
    linearPath(points, options) {
        const d = this.gen.linearPath(points, options);
        return this.draw(d);
    }
    polygon(points, options) {
        const d = this.gen.polygon(points, options);
        return this.draw(d);
    }
    arc(x, y, width, height, start, stop, closed = false, options) {
        const d = this.gen.arc(x, y, width, height, start, stop, closed, options);
        return this.draw(d);
    }
    curve(points, options) {
        const d = this.gen.curve(points, options);
        return this.draw(d);
    }
    path(d, options) {
        const drawing = this.gen.path(d, options);
        return this.draw(drawing);
    }
}


/***/ }),

/***/ "./node_modules/roughjs/bin/utils/hachure.js":
/*!***************************************************!*\
  !*** ./node_modules/roughjs/bin/utils/hachure.js ***!
  \***************************************************/
/*! exports provided: HachureIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HachureIterator", function() { return HachureIterator; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry */ "./node_modules/roughjs/bin/geometry.js");

class HachureIterator {
    constructor(top, bottom, left, right, gap, sinAngle, cosAngle, tanAngle) {
        this.deltaX = 0;
        this.hGap = 0;
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
        this.gap = gap;
        this.sinAngle = sinAngle;
        this.tanAngle = tanAngle;
        if (Math.abs(sinAngle) < 0.0001) {
            this.pos = left + gap;
        }
        else if (Math.abs(sinAngle) > 0.9999) {
            this.pos = top + gap;
        }
        else {
            this.deltaX = (bottom - top) * Math.abs(tanAngle);
            this.pos = left - Math.abs(this.deltaX);
            this.hGap = Math.abs(gap / cosAngle);
            this.sLeft = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Segment"]([left, bottom], [left, top]);
            this.sRight = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Segment"]([right, bottom], [right, top]);
        }
    }
    nextLine() {
        if (Math.abs(this.sinAngle) < 0.0001) {
            if (this.pos < this.right) {
                const line = [this.pos, this.top, this.pos, this.bottom];
                this.pos += this.gap;
                return line;
            }
        }
        else if (Math.abs(this.sinAngle) > 0.9999) {
            if (this.pos < this.bottom) {
                const line = [this.left, this.pos, this.right, this.pos];
                this.pos += this.gap;
                return line;
            }
        }
        else {
            let xLower = this.pos - this.deltaX / 2;
            let xUpper = this.pos + this.deltaX / 2;
            let yLower = this.bottom;
            let yUpper = this.top;
            if (this.pos < (this.right + this.deltaX)) {
                while (((xLower < this.left) && (xUpper < this.left)) || ((xLower > this.right) && (xUpper > this.right))) {
                    this.pos += this.hGap;
                    xLower = this.pos - this.deltaX / 2;
                    xUpper = this.pos + this.deltaX / 2;
                    if (this.pos > (this.right + this.deltaX)) {
                        return null;
                    }
                }
                const s = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Segment"]([xLower, yLower], [xUpper, yUpper]);
                if (this.sLeft && s.intersects(this.sLeft)) {
                    xLower = s.xi;
                    yLower = s.yi;
                }
                if (this.sRight && s.intersects(this.sRight)) {
                    xUpper = s.xi;
                    yUpper = s.yi;
                }
                if (this.tanAngle > 0) {
                    xLower = this.right - (xLower - this.left);
                    xUpper = this.right - (xUpper - this.left);
                }
                const line = [xLower, yLower, xUpper, yUpper];
                this.pos += this.hGap;
                return line;
            }
        }
        return null;
    }
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, types, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"short-night","version":"0.0.1","description":"An engine for drawing timeline graph.","types":"src/engine/index.ts","scripts":{"fix-lint":"eslint src/**/*.js --fix && tslint --project tsconfig.json --fix","eslint":"eslint src/**/*.js","tslint":"tslint --project tsconfig.json","build":"cross-env NODE_ENV=production webpack --mode production","test":"npm run eslint && npm run tslint && tsc","dev":"cross-env NODE_ENV=development webpack --mode development --watch"},"repository":{"type":"git","url":"git+https://github.com/FoXZilla/short-night.git"},"keywords":["shortnight","short-night","timeline"],"author":"FoXZilla, pea3nut","license":"MIT","bugs":{"url":"https://github.com/FoXZilla/short-night/issues"},"homepage":"https://github.com/pea3nut/short-night#readme","devDependencies":{"@types/moveto":"^1.7.0","cross-env":"^5.2.0","css-loader":"^1.0.0","eslint":"^5.10.0","eslint-config-airbnb-base":"^13.1.0","eslint-import-resolver-alias":"^1.1.2","eslint-loader":"^2.1.1","eslint-plugin-import":"^2.14.0","node-sass":"^4.9.3","sass-loader":"^7.1.0","style-loader":"^0.23.0","ts-loader":"^4.4.2","tslint":"^5.11.0","tslint-config-airbnb":"^5.11.1","tslint-loader":"^3.5.4","tslint-webpack-plugin":"^1.3.0","typescript":"^2.9.2","webpack":"^4.16.0","webpack-cli":"^3.0.8"},"dependencies":{"moveto":"^1.7.4","roughjs":"^2.2.5"}};

/***/ }),

/***/ "./src/engine/Axis/AxisBody.ts":
/*!*************************************!*\
  !*** ./src/engine/Axis/AxisBody.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const Component_1 = __webpack_require__(/*! @engine/common/Component */ "./src/engine/common/Component.ts");
const definitions_1 = __webpack_require__(/*! @engine/common/definitions */ "./src/engine/common/definitions.ts");
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
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.drawInfo.box = {
                x: this.drawInfo.start.x - this.drawInfo.width / 2,
                y: this.drawInfo.start.y,
                width: this.drawInfo.width,
                height: this.drawInfo.length,
            };
            return _super("apply").call(this);
        });
    }
    static is(comp) {
        return comp.name === definitions_1.SN.AxisBody;
    }
}
exports.default = AxisBody;


/***/ }),

/***/ "./src/engine/Axis/AxisMilestone.ts":
/*!******************************************!*\
  !*** ./src/engine/Axis/AxisMilestone.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const functions_1 = __webpack_require__(/*! @engine/common/functions */ "./src/engine/common/functions.ts");
const Component_1 = __webpack_require__(/*! @engine/common/Component */ "./src/engine/common/Component.ts");
const definitions_1 = __webpack_require__(/*! @engine/common/definitions */ "./src/engine/common/definitions.ts");
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
            text: '0_o',
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
        this.element.innerHTML = this.drawInfo.text;
        const { width, height } = functions_1.parseBox(this.element);
        const x = this.drawInfo.bodyDrawInfo.box.x
            + this.drawInfo.bodyDrawInfo.box.width / 2
            - width / 2;
        const y = this.drawInfo.alignY - height / 2;
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
        return flag;
    }
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.createElement();
            this.element.style.visibility = 'hidden';
            this.drawInfo.box = functions_1.parseBox(this.element);
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


/***/ }),

/***/ "./src/engine/Axis/AxisScale.ts":
/*!**************************************!*\
  !*** ./src/engine/Axis/AxisScale.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const Component_1 = __webpack_require__(/*! @engine/common/Component */ "./src/engine/common/Component.ts");
const definitions_1 = __webpack_require__(/*! @engine/common/definitions */ "./src/engine/common/definitions.ts");
/**
 * In axis, mark a mark for recognize time easy.
 * Optional, a theme can omit this component by situation.
 * */
class AxisScale extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = definitions_1.SN.AxisScale;
        this.drawInfo = {
            bodyDrawInfo: {},
            alignY: 0,
            height: 0,
            box: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
        };
        this.ext.onConstruct(this);
    }
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.drawInfo.box = {
                x: this.drawInfo.bodyDrawInfo.box.x,
                y: this.drawInfo.alignY - this.drawInfo.height / 2,
                height: this.drawInfo.height,
                width: this.drawInfo.bodyDrawInfo.box.width,
            };
            return _super("apply").call(this);
        });
    }
    static is(comp) {
        return comp.name === definitions_1.SN.AxisScale;
    }
}
exports.default = AxisScale;


/***/ }),

/***/ "./src/engine/Axis/index.ts":
/*!**********************************!*\
  !*** ./src/engine/Axis/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const Component_1 = __webpack_require__(/*! @engine/common/Component */ "./src/engine/common/Component.ts");
const definitions_1 = __webpack_require__(/*! @engine/common/definitions */ "./src/engine/common/definitions.ts");
const functions_1 = __webpack_require__(/*! @engine/common/functions */ "./src/engine/common/functions.ts");
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
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                this.initBody(),
                ...this.initScales(),
                ...this.initMilestones(),
            ]);
            this.drawInfo.box = functions_1.mergeBox(this.body.drawInfo.box, ...this.milestones.map(m => m.drawInfo.box), ...this.scales.map(s => s.drawInfo.box));
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
        return this.body.apply();
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
        return this.scales.map(s => s.apply());
    }
    initMilestones() {
        this.milestones.forEach(m => m.destroy());
        this.milestones.length = 0;
        for (const { position, text } of this.drawInfo.milestones) {
            // @ts-ignore - realize a absolute class that will re-init in the theme.
            const milestone = new this.milestoneConstructor(this);
            milestone.drawInfo.bodyDrawInfo = functions_1.deepFreeze(this.body.drawInfo);
            milestone.drawInfo.alignY = position; // recomputed in PositionCounter
            milestone.drawInfo.text = text;
            this.milestones.push(milestone);
        }
        return this.milestones.map(m => m.apply());
    }
    static is(comp) {
        return comp.name === definitions_1.SN.Axis;
    }
}
exports.default = Axis;


/***/ }),

/***/ "./src/engine/Event/EventAxis.ts":
/*!***************************************!*\
  !*** ./src/engine/Event/EventAxis.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const functions_1 = __webpack_require__(/*! @engine/common/functions */ "./src/engine/common/functions.ts");
const Component_1 = __webpack_require__(/*! @engine/common/Component */ "./src/engine/common/Component.ts");
const definitions_1 = __webpack_require__(/*! @engine/common/definitions */ "./src/engine/common/definitions.ts");
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
            const target = this.drawInfo.markDrawInfo.target;
            this.drawInfo.box = {
                x: target.x,
                y: target.y - this.drawInfo.length,
                width: this.drawInfo.offsetX,
                height: this.drawInfo.length,
            };
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


/***/ }),

/***/ "./src/engine/Event/EventBody.ts":
/*!***************************************!*\
  !*** ./src/engine/Event/EventBody.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const functions_1 = __webpack_require__(/*! @engine/common/functions */ "./src/engine/common/functions.ts");
const Component_1 = __webpack_require__(/*! @engine/common/Component */ "./src/engine/common/Component.ts");
const definitions_1 = __webpack_require__(/*! @engine/common/definitions */ "./src/engine/common/definitions.ts");
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
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.createElement();
            this.initBoxFromElement();
            this.applyBoxToElement();
            this.element.style.visibility = 'hidden';
            return _super("apply").call(this);
        });
    }
    draw() {
        this.createElement();
        return super.draw();
    }
    initBoxFromElement() {
        const eltBox = functions_1.parseBox(this.element);
        const box = Object.assign({ width: eltBox.width, height: eltBox.height }, this.drawInfo.markDrawInfo.target);
        box.x -= box.width;
        box.y -= box.height / 2;
        box.x -= this.drawInfo.offset.x;
        box.y += this.drawInfo.offset.y;
        this.drawInfo.box = box;
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


/***/ }),

/***/ "./src/engine/Event/EventMark.ts":
/*!***************************************!*\
  !*** ./src/engine/Event/EventMark.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const Component_1 = __webpack_require__(/*! @engine/common/Component */ "./src/engine/common/Component.ts");
const definitions_1 = __webpack_require__(/*! @engine/common/definitions */ "./src/engine/common/definitions.ts");
/**
 * In axis, mark a mark for recognize event point when event take place.
 * Optional, a theme can omit this component by situation.
 * */
class EventMark extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = definitions_1.SN.EventMark;
        this.drawInfo = {
            axisBodyDrawInfo: {},
            box: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
            target: {
                x: 0,
                y: 0,
            },
            width: 0,
        };
        this.ext.onConstruct(this);
    }
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const width = this.drawInfo.width;
            const height = this.drawInfo.height || width;
            this.drawInfo.box = {
                width,
                height,
                x: this.drawInfo.target.x - width / 2,
                y: this.drawInfo.target.y - height / 2,
            };
            return _super("apply").call(this);
        });
    }
    static is(comp) {
        return comp.name === definitions_1.SN.EventMark;
    }
}
exports.default = EventMark;


/***/ }),

/***/ "./src/engine/Event/index.ts":
/*!***********************************!*\
  !*** ./src/engine/Event/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const Component_1 = __webpack_require__(/*! @engine/common/Component */ "./src/engine/common/Component.ts");
const functions_1 = __webpack_require__(/*! @engine/common/functions */ "./src/engine/common/functions.ts");
const definitions_1 = __webpack_require__(/*! @engine/common/definitions */ "./src/engine/common/definitions.ts");
/**
 * The whole Event. Contain an EventBody and an EventMark, maybe has a EventAxis too.
 * The Manage-Component. All of draw is resolved by child component.
 * */
class Event extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = definitions_1.SN.Event;
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
        // The instances
        this.mark = null;
        this.body = null;
        this.axis = null;
        this.grid = props.grid;
        this.ext.onConstruct(this);
    }
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                this.initMark(),
                this.initBody(),
                this.initAxis(),
            ]);
            this.drawInfo.box = functions_1.mergeBox(this.body.drawInfo.box, this.mark.drawInfo.box);
            if (this.axis) {
                this.drawInfo.box = functions_1.mergeBox(this.drawInfo.box, this.axis.drawInfo.box);
            }
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
        return this.mark.apply();
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
        return this.body.apply();
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
            axis.drawInfo.text = this.drawInfo.axisText;
            this.axis = axis;
            return axis.apply();
        }
        return Promise.resolve(null);
    }
    static is(comp) {
        return comp.name === definitions_1.SN.Event;
    }
}
exports.default = Event;


/***/ }),

/***/ "./src/engine/Timeline.ts":
/*!********************************!*\
  !*** ./src/engine/Timeline.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const Component_1 = __webpack_require__(/*! @engine/common/Component */ "./src/engine/common/Component.ts");
const functions_1 = __webpack_require__(/*! @engine/common/functions */ "./src/engine/common/functions.ts");
const definitions_1 = __webpack_require__(/*! @engine/common/definitions */ "./src/engine/common/definitions.ts");
const BreakpointAnimation_1 = __webpack_require__(/*! @/engine/extensions/BreakpointAnimation */ "./src/engine/extensions/BreakpointAnimation.ts");
/**
 * Timeline self. There are 2 way to draw a timeline.
 * 1. draw a timeline base on event list.
 * 2. draw a timeline base an TimelineData.
 * For No.1, there are like:
 * ```js
 * const timeline = new Timeline(...);
 * timeline.event = [...];
 * await timeline.apply();
 * timeline.draw();
 * ```js
 *
 * For No.2, Ensure you had a TimelineData, and run like this for draw a timeline:
 * (The TimelineData is generate by timeline.export())
 * ```js
 * const timeline = new Timeline(...);
 * await timeline.drawFrom(timelineData);
 * ```
 * */
class Timeline extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = definitions_1.SN.Timeline;
        this.grid = Timeline.defaultGrid;
        /**
         * Generated after timeline.apply() called.
         * If you wanna to specify some keys, passed a object when timeline.apply() called.
         * @see RuntimeInfo
         * */
        this.runtime = {};
        this.drawInfo = {
            box: { x: 0, y: 0, width: 0, height: 0 },
            events: [],
        };
        // The instances
        this.events = [];
        this.axis = null;
        this.grid = props.grid;
        this.ext.onConstruct(this);
    }
    /**
     * @param {Partial<RuntimeInfo>} - manually specify some runtime info.
     * */
    apply(runtime) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.initRuntime(runtime);
            this.canvas.width = this.grid.canvasWidth;
            this.canvas.height = this.runtime.axisLength + this.grid.axisStart.y * 2;
            // @ts-ignore
            yield this.createAxis();
            this.events.forEach(e => e.destroy());
            this.events.length = 0;
            yield this.createEvents();
            return _super("apply").call(this);
        });
    }
    draw() {
        this.axis.draw();
        this.events.forEach(event => event.draw());
        return super.draw();
    }
    hide() {
        this.events.forEach(event => event.hide());
        this.axis.hide();
        return super.hide();
    }
    /**
     * Draw a timeline base on a TimelineData.
     * (The TimelineData is generate by timeline.export())
     * @param (TimelineData) input
     * @return {Promise<void>>}
     * */
    drawFrom(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = typeof input === 'string' ? JSON.parse(input).data : input.data;
            // @ts-ignore
            const axis = new this.axisConstructor(this);
            // @ts-ignore
            const event = new this.eventConstructor(this);
            this.canvas.width = data.width;
            this.canvas.height = data.height;
            const allComponents = [];
            {
                const { bodyDrawInfo, scalesDrawInfo, milestonesDrawInfo } = data.axis;
                // @ts-ignore
                allComponents.push(new axis.bodyConstructor(this).importDrawInfo(bodyDrawInfo));
                const scalesAndMilestones = [];
                scalesDrawInfo.forEach((scaleDrawInfo) => {
                    scalesAndMilestones.push(
                    // @ts-ignore
                    new axis.scaleConstructor(this).importDrawInfo(scaleDrawInfo));
                });
                milestonesDrawInfo.forEach((milestoneDrawInfo) => {
                    scalesAndMilestones.push(
                    // @ts-ignore
                    new axis.milestoneConstructor(this).importDrawInfo(milestoneDrawInfo));
                });
                scalesAndMilestones.sort((comp1, comp2) => comp1.drawInfo.alignY - comp2.drawInfo.alignY);
                allComponents.push(...scalesAndMilestones);
            }
            const events = Array.from(data.events)
                .sort((e1, e2) => e1.drawInfo.target.y - e2.drawInfo.target.y);
            for (const { bodyDrawInfo, markDrawInfo, axisDrawInfo } of events) {
                // @ts-ignore
                allComponents.push(new event.markConstructor(this).importDrawInfo(markDrawInfo));
                // @ts-ignore
                allComponents.push(new event.bodyConstructor(this).importDrawInfo(bodyDrawInfo));
                if (axisDrawInfo !== null) {
                    // @ts-ignore
                    allComponents.push(new event.axisConstructor(this).importDrawInfo(axisDrawInfo));
                }
            }
            // TODO: Maybe there is slow when want not play animation?
            for (const comp of allComponents) {
                yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.DrawFrom);
                comp.draw();
            }
        });
    }
    /**
     * Export a TimelineData for current timeline.
     * Make sure call timeline.apply() before call this method.
     * @return {TimelineData}
     * */
    export() {
        const timeline = this.ext.components[definitions_1.SN.Timeline][0];
        return functions_1.deepFreeze(JSON.parse(JSON.stringify({
            theme: timeline.theme,
            version: definitions_1.SN_VERSION,
            data: {
                width: timeline.canvas.width,
                height: timeline.canvas.height,
                timeline: timeline.drawInfo,
                runtime: timeline.runtime,
                events: timeline.events.map(event => ({
                    drawInfo: event.drawInfo,
                    bodyDrawInfo: event.body.drawInfo,
                    markDrawInfo: event.mark.drawInfo,
                    axisDrawInfo: event.axis ? event.axis.drawInfo : null,
                })),
                axis: {
                    drawInfo: timeline.axis.drawInfo,
                    bodyDrawInfo: timeline.axis.body.drawInfo,
                    scalesDrawInfo: timeline.axis.scales.map(scale => scale.drawInfo),
                    milestonesDrawInfo: timeline.axis.milestones.map(milestone => milestone.drawInfo),
                },
            },
        })));
    }
    // Count runtime info
    initRuntime(runtime) {
        this.runtime = Object.create(runtime || Object.prototype);
        this.runtime.startDate = ('startDate' in this.runtime)
            ? new Date(this.runtime.startDate)
            : this.countStartData();
        this.runtime.endDate = ('endDate' in this.runtime)
            ? new Date(this.runtime.endDate)
            : this.countEndData();
        this.runtime.milestoneBy = ('milestoneBy' in this.runtime)
            ? this.runtime.milestoneBy
            : this.countMilestoneBy();
        this.runtime.scaleBy = ('scaleBy' in this.runtime)
            ? this.runtime.scaleBy
            : this.countScaleBy();
        this.runtime.axisLength = ('axisLength' in this.runtime)
            ? this.runtime.axisLength
            : this.countAxisLength();
        // FIXME: What is it???
        // aligning scaleBy
        this.runtime.startDate = new Date(new Date(this.runtime.startDate).getTime()
            - definitions_1.DATE_COUNT_EXTRA[this.runtime.scaleBy || "day" /* Day */]);
        this.runtime.endDate = new Date(new Date(this.runtime.endDate).getTime()
            + definitions_1.DATE_COUNT_EXTRA[this.runtime.scaleBy || "day" /* Day */]);
    }
    countStartData() {
        const events = Array.from(this.drawInfo.events).sort((e1, e2) => Number(new Date(e1.date)) - Number(new Date(e2.date)));
        return new Date(events[0].date);
    }
    countEndData() {
        const events = this.drawInfo.events;
        const maxStartData = Math.max(...events.map(event => Number(new Date(event.date))));
        const maxEndData = Math.max(...events
            .filter(event => ('endDate' in event))
            .map(event => Number(new Date(event.endDate)))) || -1;
        return new Date(Math.max(maxStartData, maxEndData));
    }
    countMilestoneBy() {
        const TWO_WEEK = 1000 * 60 * 60 * 24 * 7 * 2;
        const TWO_MONTH = 1000 * 60 * 60 * 24 * 30 * 2;
        const TWO_QUARTER = 1000 * 60 * 60 * 24 * 30 * 3 * 2;
        const TWO_YEAR = 1000 * 60 * 60 * 24 * 30 * 12 * 2;
        const dataScope = new Date(this.runtime.endDate).getTime()
            - new Date(this.runtime.startDate).getTime();
        switch (true) {
            case dataScope > TWO_YEAR:
                return "year" /* Year */;
            case dataScope > TWO_QUARTER:
                return "quarter" /* Quarter */;
            case dataScope > TWO_MONTH:
                return "month" /* Month */;
            case dataScope > TWO_WEEK:
                return "week" /* Week */;
        }
        return null;
    }
    countScaleBy() {
        switch (this.runtime.milestoneBy) {
            case "year" /* Year */:
                return "quarter" /* Quarter */;
            case "quarter" /* Quarter */:
                return "month" /* Month */;
            case "month" /* Month */:
                return "week" /* Week */;
            case "week" /* Week */:
                return "day" /* Day */;
        }
        return null;
    }
    countAxisLength() {
        return 500 + this.drawInfo.events.length * 100;
    }
    // Create instance
    createAxis() {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            if (!this.axis)
                this.axis = new this.axisConstructor(this);
            const endDate = new Date(this.runtime.endDate).getTime();
            const startDate = new Date(this.runtime.startDate).getTime();
            const dateLength = endDate - startDate;
            this.axis.drawInfo.length = this.runtime.axisLength;
            if (this.runtime.milestoneBy !== null) {
                this.axis.drawInfo.milestones =
                    functions_1.timeNodeGetter[this.runtime.milestoneBy](new Date(startDate), new Date(endDate)).map((date) => {
                        const result = {
                            position: (endDate - date.getTime())
                                / dateLength,
                            text: '',
                        };
                        const monthAbbr = date.toDateString().split(' ')[1];
                        switch (this.runtime.milestoneBy) {
                            case 'year':
                                result.text = `${date.getFullYear()}`;
                                break;
                            case 'quarter':
                                result.text = `${monthAbbr}. ${date.getFullYear()}`;
                                break;
                            case 'month':
                                result.text = `${monthAbbr}.`;
                                break;
                            case 'week':
                                result.text = `${date.getMonth() + 1}.${date.getDate()}`;
                                break;
                            case 'day':
                                result.text = `${date.getMonth() + 1}.${date.getDate()}`;
                                break;
                        }
                        return result;
                    });
            }
            if (this.runtime.scaleBy !== null) {
                this.axis.drawInfo.scales =
                    functions_1.timeNodeGetter[this.runtime.scaleBy](new Date(this.runtime.startDate), new Date(this.runtime.endDate)).map(date => (new Date(this.runtime.endDate).getTime() - date.getTime())
                        / dateLength);
            }
            yield this.axis.apply();
        });
    }
    createEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            const events = Array.from(this.drawInfo.events)
                .sort((e1, e2) => new Date(e1.date).getTime() - new Date(e2.date).getTime());
            const dateLength = new Date(this.runtime.endDate).getTime()
                - new Date(this.runtime.startDate).getTime();
            for (const data of events) {
                // @ts-ignore
                const event = new this.eventConstructor(this);
                event.drawInfo.target = {
                    x: this.axis.body.drawInfo.box.x + this.axis.body.drawInfo.box.width / 2,
                    // recomputed in PositionCounter
                    y: (new Date(this.runtime.endDate).getTime() - new Date(data.date).getTime())
                        / dateLength,
                };
                event.drawInfo.date = data.date;
                event.drawInfo.title = data.title;
                event.drawInfo.description = data.description;
                event.drawInfo.folded = Boolean(data.folded);
                event.drawInfo.foldPlaceholder = data.foldPlaceholder;
                event.drawInfo.axisText = data.endText;
                if (data.endDate) {
                    const endDate = new Date(data.endDate === 'now'
                        ? this.runtime.endDate
                        : data.endDate);
                    // recomputed in PositionCounter
                    event.drawInfo.axisLength =
                        (endDate.getTime() - new Date(data.date).getTime())
                            / dateLength;
                }
                yield event.apply();
                this.events.push(event);
            }
        });
    }
    static is(comp) {
        return comp.name === definitions_1.SN.Timeline;
    }
}
Timeline.defaultGrid = {
    eventOffset: { x: 20, y: 0 },
    minEventAxisOffset: 25,
    markWidth: 15,
    scaleHeight: 5,
    axisWidth: 12,
    axisStart: {
        x: 400,
        y: 10,
    },
    eventWidth: 350,
    canvasWidth: 700,
};
exports.default = Timeline;


/***/ }),

/***/ "./src/engine/common/Component.ts":
/*!****************************************!*\
  !*** ./src/engine/common/Component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const functions_1 = __webpack_require__(/*! @engine/common/functions */ "./src/engine/common/functions.ts");
var MUST_CALL_AND_RETURN_SUPER_METHOD;
(function (MUST_CALL_AND_RETURN_SUPER_METHOD) {
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_APPLY"] = 0] = "SUPER_APPLY";
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_DRAW"] = 1] = "SUPER_DRAW";
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_DESTROY"] = 2] = "SUPER_DESTROY";
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_CREATE_ELEMENT"] = 3] = "SUPER_CREATE_ELEMENT";
    MUST_CALL_AND_RETURN_SUPER_METHOD[MUST_CALL_AND_RETURN_SUPER_METHOD["SUPER_HIDE"] = 4] = "SUPER_HIDE";
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


/***/ }),

/***/ "./src/engine/common/definitions.ts":
/*!******************************************!*\
  !*** ./src/engine/common/definitions.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const packageJson = __webpack_require__(/*! @root/package.json */ "./package.json");
exports.DEBUG = "development" === 'development';
var SN;
(function (SN) {
    SN["Timeline"] = "time_line";
    SN["Axis"] = "axis";
    SN["AxisBody"] = "axis_body";
    SN["AxisScale"] = "axis_scale";
    SN["AxisMilestone"] = "axis_milestone";
    SN["Event"] = "event";
    SN["EventBody"] = "event_body";
    SN["EventMark"] = "event_mark";
    SN["EventAxis"] = "event_axis";
})(SN = exports.SN || (exports.SN = {}));
exports.DATE_COUNT_EXTRA = {
    ["day" /* Day */]: 1000 * 60 * 60 * 24 / 2,
    ["week" /* Week */]: 1000 * 60 * 60 * 24 * 7 / 2,
    ["month" /* Month */]: 1000 * 60 * 60 * 24 * 30 / 2,
    ["quarter" /* Quarter */]: 1000 * 60 * 60 * 24 * 30 * 3 / 2,
    ["year" /* Year */]: 1000 * 60 * 60 * 24 * 30 * 12 / 2,
};
exports.WALK_ON = {
    [SN.EventAxis]: {
        offsetOneStep: 15,
    },
};
exports.SN_VERSION = packageJson.version;


/***/ }),

/***/ "./src/engine/common/functions.ts":
/*!****************************************!*\
  !*** ./src/engine/common/functions.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const definitions_1 = __webpack_require__(/*! @engine/common/definitions */ "./src/engine/common/definitions.ts");
function isBox(obj) {
    return typeof obj === 'object'
        && typeof obj.x === 'number'
        && typeof obj.y === 'number'
        && typeof obj.width === 'number'
        && typeof obj.height === 'number';
}
exports.isBox = isBox;
function box2Lines(box) {
    return [
        {
            startX: box.x,
            startY: box.y,
            endX: box.x + box.width,
            endY: box.y,
        }, {
            startX: box.x + box.width,
            startY: box.y,
            endX: box.x + box.width,
            endY: box.y + box.height,
        }, {
            startX: box.x + box.width,
            startY: box.y + box.height,
            endX: box.x,
            endY: box.y + box.height,
        }, {
            startX: box.x,
            startY: box.y + box.height,
            endX: box.x,
            endY: box.y,
        },
    ];
}
exports.box2Lines = box2Lines;
function parseBox(elt) {
    const styles = getComputedStyle(elt);
    return {
        x: parseFloat(styles.left),
        y: parseFloat(styles.top),
        width: parseFloat(styles.width),
        height: parseFloat(styles.height),
    };
}
exports.parseBox = parseBox;
function mergeBox(...args) {
    const leftTop = {
        x: Infinity,
        y: Infinity,
    };
    const rightBottom = {
        x: -Infinity,
        y: -Infinity,
    };
    for (const box of args) {
        if (box.x < leftTop.x)
            leftTop.x = box.x;
        if (box.y < leftTop.y)
            leftTop.y = box.y;
        if (box.x + box.width > rightBottom.x)
            rightBottom.x = box.x + box.width;
        if (box.y + box.height > rightBottom.y)
            rightBottom.y = box.y + box.height;
    }
    return {
        x: leftTop.x,
        y: leftTop.y,
        width: rightBottom.x - leftTop.x,
        height: rightBottom.y - leftTop.y,
    };
}
exports.mergeBox = mergeBox;
function shrinkBox(box, distance = 1) {
    return {
        x: box.x + distance,
        y: box.y + distance,
        width: box.width - distance * 2,
        height: box.height - distance * 2,
    };
}
exports.shrinkBox = shrinkBox;
exports.timeNodeGetter = function () {
    const getNodes = function (start, end, step) {
        const startNode = function (origin) {
            const node = new Date(origin);
            node.setFullYear(origin.getFullYear() - 1, 0, 1);
            node.setHours(0, 0, 0, 0);
            return node;
        }(start);
        const endNode = function (origin) {
            const node = new Date(origin);
            node.setFullYear(origin.getFullYear() + 1, 0, 1);
            node.setHours(0, 0, 0, 0);
            return node;
        }(end);
        const nodes = [];
        {
            const tempNode = new Date(startNode);
            while (tempNode.getFullYear() <= endNode.getFullYear()) {
                nodes.push(new Date(tempNode));
                step(tempNode);
            }
        }
        return nodes.filter(date => date.getTime() < end.getTime() && date.getTime() > start.getTime());
    };
    return {
        year(start, end) {
            return getNodes(start, end, date => date.setFullYear(date.getFullYear() + 1));
        },
        quarter(start, end) {
            return getNodes(start, end, (date) => {
                if (date.getMonth() + 3 >= 12) {
                    date.setFullYear(date.getFullYear() + 1);
                    date.setMonth(0, 1);
                }
                else {
                    date.setMonth(date.getMonth() + 3, 1);
                }
            });
        },
        month(start, end) {
            return getNodes(start, end, (date) => {
                if (date.getMonth() === 11) {
                    date.setFullYear(date.getFullYear() + 1);
                    date.setMonth(0, 1);
                }
                else {
                    date.setMonth(date.getMonth() + 1, 1);
                }
            });
        },
        week(start, end) {
            return getNodes(start, end, (date) => {
                do {
                    date.setTime(date.getTime() + 1000 * 60 * 60 * 24);
                } while (date.getDay() !== 1);
            });
        },
        day(start, end) {
            return getNodes(start, end, date => date.setTime(date.getTime() + 1000 * 60 * 60 * 24));
        },
    };
}();
function isIntersecting(line1, line2) {
    let { startX: x1, startY: y1, endX: x2, endY: y2 } = line1;
    let { startX: x3, startY: y3, endX: x4, endY: y4 } = line2;
    if ([x1, x2, x3, x4, y1, y2, y3, y4].some(isNaN)) {
        throw TypeError('Unexpected NaN');
    }
    [x1, x2, x3, x4, y1, y2, y3, y4] = [x1, x2, x3, x4, y1, y2, y3, y4].map(Math.round);
    // Same slope
    const [slope1, slope2] = [
        Math.abs(x1 - x2) / Math.abs(y1 - y2),
        Math.abs(x3 - x4) / Math.abs(y3 - y4),
    ];
    if (slope1 === slope2) {
        const [bixX, smallX] = [x1, x2].sort((n1, n2) => n2 - n1);
        const [bixY, smallY] = [y1, y2].sort((n1, n2) => n2 - n1);
        if (slope1 === 0) {
            return ((y3 <= bixY && y3 >= smallY) || (y4 <= bixY && y4 >= smallY))
                && x1 === x3;
        }
        if (slope1 === Infinity) {
            return ((x3 <= bixX && x3 >= smallX) || (x4 <= bixX && x4 >= smallX))
                && y1 === y3;
        }
        return ((x3 <= bixX && x3 >= smallX) && (y3 <= bixY && y3 >= smallY))
            || ((x4 <= bixX && x4 >= smallX) || (y4 <= bixY && y4 >= smallY));
    }
    if (slope1 === Infinity)
        y1 += 0.0001;
    if (slope2 === Infinity)
        y3 += 0.0001;
    if (slope1 === 0)
        x1 += 0.0001;
    if (slope2 === 0)
        x3 += 0.0001;
    const x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4))
        / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
    const y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4))
        / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
    if (isNaN(x) || isNaN(y)) {
        return false;
    }
    else { // tslint:disable-line
        if (x1 >= x2) {
            if (!(x2 <= x && x <= x1)) {
                return false;
            }
        }
        else {
            if (!(x1 <= x && x <= x2)) {
                return false;
            }
        }
        if (y1 >= y2) {
            if (!(y2 <= y && y <= y1)) {
                return false;
            }
        }
        else {
            if (!(y1 <= y && y <= y2)) {
                return false;
            }
        }
        if (x3 >= x4) {
            if (!(x4 <= x && x <= x3)) {
                return false;
            }
        }
        else {
            if (!(x3 <= x && x <= x4)) {
                return false;
            }
        }
        if (y3 >= y4) {
            if (!(y4 <= y && y <= y3)) {
                return false;
            }
        }
        else {
            if (!(y3 <= y && y <= y4)) {
                return false;
            }
        }
    }
    return true;
}
exports.isIntersecting = isIntersecting;
function isOverlap(item1, item2) {
    const lines1 = isBox(item1) ? box2Lines(item1) : [item1];
    const lines2 = isBox(item2) ? box2Lines(item2) : [item2];
    return lines1.some(line1 => lines2.some(line2 => isIntersecting(line1, line2)));
}
exports.isOverlap = isOverlap;
/**
 * Instead of the while when fix conflict.
 * */
function walkLoop(fn, max = 10) {
    return __awaiter(this, void 0, void 0, function* () {
        let alleviated = false;
        for (let i = 0; i < max; i++) {
            const result = yield fn();
            if (result.includes("alleviated" /* Alleviated */)) {
                alleviated = true;
                continue;
            }
            if (result.every(r => r === "no-conflict" /* NoConflict */)) {
                return "no-conflict" /* NoConflict */;
            }
            if (result.includes("failed" /* Failed */)) {
                return alleviated
                    ? "alleviated" /* Alleviated */
                    : "failed" /* Failed */;
            }
        }
        throw new Error('too many loop');
    });
}
exports.walkLoop = walkLoop;
/**
 * Instead of the console.log.
 * @example
 * const l = createLogFunction('EventBody');
 * l`Hello, world`;
 * > Hello, world
 * */
function createLogFunction(prefix) {
    return function (stringArr, ...values) {
        if (!definitions_1.DEBUG)
            return;
        const message = [stringArr[0]];
        for (let index = 0; index < values.length; index++) {
            message.push(values[index], stringArr[index + 1]);
        }
        console.log(`${prefix} #`, ...message);
    };
}
exports.createLogFunction = createLogFunction;
/**
 * Return a new freezed object base on specified object.
 * Like Object.freeze, but it's deep and will not change origin object.
 * */
function deepFreeze(originObject) {
    const newObject = JSON.parse(JSON.stringify(originObject));
    const propNames = Object.getOwnPropertyNames(newObject);
    // Freeze it's all of properties before freezing itself.
    for (const name of propNames) {
        if (typeof newObject[name] === 'object') {
            newObject[name] = deepFreeze(newObject[name]);
        }
    }
    return Object.freeze(newObject);
}
exports.deepFreeze = deepFreeze;


/***/ }),

/***/ "./src/engine/extensions/BoxElementGenerator.ts":
/*!******************************************************!*\
  !*** ./src/engine/extensions/BoxElementGenerator.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./src/engine/extensions/BreakpointAnimation.ts":
/*!******************************************************!*\
  !*** ./src/engine/extensions/BreakpointAnimation.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const definitions_1 = __webpack_require__(/*! ../common/definitions */ "./src/engine/common/definitions.ts");
const moveto = __webpack_require__(/*! moveto */ "./node_modules/moveto/dist/moveTo.js");
const Axis_1 = __webpack_require__(/*! ../Axis */ "./src/engine/Axis/index.ts");
const AxisBody_1 = __webpack_require__(/*! ../Axis/AxisBody */ "./src/engine/Axis/AxisBody.ts");
const Timeline_1 = __webpack_require__(/*! ../Timeline */ "./src/engine/Timeline.ts");
/**
 * Supported all of Breakpoint.
 * @property {string} PushScalesAndMilestones
 * When recompute the position of Scales and Milestones
 * @property {string} FixEventBody2AxisMilestone
 * When fix conflict between EventBody and AxisMilestone.
 * @property {string} FixEventAxis2EventAxis
 * @property {string} FixEventBody2EventBodyMover
 * @property {string} FixEventBody2EventBodyFloater
 * @property {string} DrawFrom - when draw a timeline by data imported.
 * @property {string} Debug
 * Set a Breakpoint for debug.
 * When debug-mode enabled, short-night will blocking at Breakpoint.Debug automatically.
 * */
var Breakpoint;
(function (Breakpoint) {
    Breakpoint["PushScalesAndMilestones"] = "PushScalesAndMilestones";
    Breakpoint["FixEventBody2AxisMilestone"] = "FixEventBody2AxisMilestone";
    Breakpoint["FixEventAxis2EventAxis"] = "FixEventAxis2EventAxis";
    Breakpoint["FixEventBody2EventBodyMover"] = "FixEventBody2EventBodyMover";
    Breakpoint["FixEventBody2EventBodyFloater"] = "FixEventBody2EventBodyFloater";
    Breakpoint["DrawFrom"] = "DrawFrom";
    Breakpoint["Debug"] = "Debug";
})(Breakpoint = exports.Breakpoint || (exports.Breakpoint = {}));
/**
 * 1. Support that set a Breakpoint .
 * 2. Support that play animation base on Breakpoints.
 * */
class BreakpointAnimation {
    constructor(etx, { breakpoints = [], playAnimation = false } = {}) {
        this.etx = etx;
        this.breakpoints = breakpoints;
        this.playAnimation = playAnimation;
        if (this.playAnimation && this.breakpoints.length === 0) {
            this.breakpoints = BreakpointAnimation.defaultAnimationBreakpoints;
        }
        if (definitions_1.DEBUG) {
            this.breakpoints.push(Breakpoint.Debug);
            window.next = this.next.bind(this);
            window.abort = () => { delete this.stepIn; };
        }
    }
    /**
     * Scroll to top when end of play animation.
     * */
    onDraw(comp) {
        if (Timeline_1.default.is(comp) && this.playAnimation) {
            new moveto().move(this.etx.components[definitions_1.SN.Timeline][0].canvas);
        }
    }
    /**
     * Step into next breakpoint.
     * You can call window.next() to do same thing when DEBUG is true.
     * */
    next() {
        if (!this.stepIn) {
            throw new Error('Call next when not blocking.');
        }
        this.stepIn();
        delete this.stepIn;
    }
    /**
     * Blocking at a breakpoint util next called
     * */
    block(point, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { onBlock, onNext, components = [], forward = false } = config;
            if (!this.breakpoints.includes(point))
                return;
            console.log(`Blocking at ${point}.`);
            if (this.playAnimation) {
                const scrollTarget = this.countScrollTarget(config);
                if (scrollTarget) {
                    yield new Promise((resolve) => {
                        new moveto({ duration: 500 }).move(scrollTarget - document.documentElement.scrollTop, { callback: resolve });
                    });
                }
                setTimeout(() => this.next(), this.countInterval(point, forward));
            }
            return (() => __awaiter(this, void 0, void 0, function* () {
                if (onBlock)
                    yield onBlock();
                components.forEach(comp => comp.draw());
                yield new Promise((resolve) => {
                    this.stepIn = () => __awaiter(this, void 0, void 0, function* () {
                        if (onNext)
                            yield onNext();
                        components.forEach(comp => comp.hide());
                        resolve();
                        delete this.stepIn;
                    });
                });
            }))();
        });
    }
    /**
     * Count a number that be used scroll to focus when play animation.
     * */
    countScrollTarget(config) {
        const { components, protagonist } = config;
        const topPadding = 100;
        if (protagonist)
            return protagonist.drawInfo.box.y - topPadding;
        if (components && components.length) {
            const getTopped = (compList) => compList.find(comp1 => compList.every(comp2 => comp1.drawInfo.box.y >= comp2.drawInfo.box.y));
            const componentListWithoutAxis = components.filter(comp => !Axis_1.default.is(comp) && !AxisBody_1.default.is(comp));
            return getTopped(componentListWithoutAxis).drawInfo.box.x - topPadding;
        }
        return null;
    }
    /**
     * Count a number what ms is needed waiting for this point when playing animation.
     * @property {boolean} forward - @see BlockConfig.forward
     * */
    countInterval(point, forward) {
        if (point === Breakpoint.DrawFrom)
            return 300;
        return forward ? 200 : 300;
    }
}
/**
 * @see BreakpointAnimationConfig.playAnimation
 * */
BreakpointAnimation.defaultAnimationBreakpoints = [
    Breakpoint.FixEventBody2AxisMilestone,
    Breakpoint.FixEventAxis2EventAxis,
    Breakpoint.FixEventBody2EventBodyMover,
    Breakpoint.FixEventBody2EventBodyFloater,
    Breakpoint.DrawFrom,
];
exports.default = BreakpointAnimation;


/***/ }),

/***/ "./src/engine/extensions/ConflictFixer/EventAxis2EventAxis.ts":
/*!********************************************************************!*\
  !*** ./src/engine/extensions/ConflictFixer/EventAxis2EventAxis.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const definitions_1 = __webpack_require__(/*! ../../common/definitions */ "./src/engine/common/definitions.ts");
const functions_1 = __webpack_require__(/*! ../../common/functions */ "./src/engine/common/functions.ts");
const BreakpointAnimation_1 = __webpack_require__(/*! ../BreakpointAnimation */ "./src/engine/extensions/BreakpointAnimation.ts");
class EventAxis2EventAxis {
    constructor(ext) {
        this.ext = ext;
    }
    fix() {
        return __awaiter(this, void 0, void 0, function* () {
            const eventAxisList = Array.from(this.ext.components[definitions_1.SN.EventAxis])
                .sort((ea1, ea2) => ea2.drawInfo.length - ea1.drawInfo.length);
            while (eventAxisList.some(ea1 => eventAxisList.some(ea2 => EventAxis2EventAxis.isConflict(ea1, ea2)))) {
                for (const ea1 of eventAxisList) {
                    const conflictWith = eventAxisList.filter(ea2 => EventAxis2EventAxis.isConflict(ea1, ea2));
                    if (conflictWith.length) {
                        const options = {
                            protagonist: ea1,
                            components: [
                                ...this.ext.components[definitions_1.SN.AxisBody],
                                this.ext.getParent(ea1),
                                ...conflictWith.map(ea => this.ext.getParent(ea)),
                            ],
                        };
                        yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.FixEventAxis2EventAxis, options);
                        ea1.drawInfo.offsetX += 15; // TODO: configurable
                        yield ea1.apply();
                        yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.FixEventAxis2EventAxis, Object.assign({}, options, { forward: true }));
                        break;
                    }
                }
            }
            return "no-conflict" /* NoConflict */;
        });
    }
    static isConflict(ea1, ea2) {
        if (ea1 === ea2)
            return false;
        const line1 = {
            startX: ea1.drawInfo.markDrawInfo.target.x + ea1.drawInfo.offsetX,
            startY: ea1.drawInfo.markDrawInfo.target.y,
            endX: ea1.drawInfo.markDrawInfo.target.x + ea1.drawInfo.offsetX,
            endY: ea1.drawInfo.markDrawInfo.target.y - ea1.drawInfo.length,
        };
        const line2 = {
            startX: ea2.drawInfo.markDrawInfo.target.x + ea2.drawInfo.offsetX,
            startY: ea2.drawInfo.markDrawInfo.target.y,
            endX: ea2.drawInfo.markDrawInfo.target.x + ea2.drawInfo.offsetX,
            endY: ea2.drawInfo.markDrawInfo.target.y - ea2.drawInfo.length,
        };
        return functions_1.isIntersecting(line1, line2);
    }
}
exports.default = EventAxis2EventAxis;


/***/ }),

/***/ "./src/engine/extensions/ConflictFixer/EventBody2AxisMilestone.ts":
/*!************************************************************************!*\
  !*** ./src/engine/extensions/ConflictFixer/EventBody2AxisMilestone.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const definitions_1 = __webpack_require__(/*! ../../common/definitions */ "./src/engine/common/definitions.ts");
const functions_1 = __webpack_require__(/*! ../../common/functions */ "./src/engine/common/functions.ts");
const BreakpointAnimation_1 = __webpack_require__(/*! ../BreakpointAnimation */ "./src/engine/extensions/BreakpointAnimation.ts");
class EventBody2AxisMilestone {
    constructor(ext) {
        this.ext = ext;
    }
    fix() {
        return __awaiter(this, void 0, void 0, function* () {
            const eventBodyList = this.ext.components[definitions_1.SN.EventBody];
            const axisMilestoneList = this.ext.components[definitions_1.SN.AxisMilestone];
            for (const eventBody of eventBodyList) {
                for (const axisMilestone of axisMilestoneList) {
                    if (functions_1.isOverlap(eventBody.drawInfo.box, axisMilestone.drawInfo.box)) {
                        const options = {
                            protagonist: axisMilestone,
                            components: [
                                ...this.ext.components[definitions_1.SN.AxisBody],
                                axisMilestone,
                                eventBody,
                            ],
                        };
                        yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.FixEventBody2AxisMilestone, options);
                        eventBody.drawInfo.offset.x = axisMilestone.drawInfo.box.width / 2 + 1;
                        yield eventBody.apply();
                        yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.FixEventBody2AxisMilestone, Object.assign({}, options, { forward: true }));
                    }
                }
            }
            return "no-conflict" /* NoConflict */;
        });
    }
}
exports.default = EventBody2AxisMilestone;


/***/ }),

/***/ "./src/engine/extensions/ConflictFixer/EventBody2EventBodyFloater.ts":
/*!***************************************************************************!*\
  !*** ./src/engine/extensions/ConflictFixer/EventBody2EventBodyFloater.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const definitions_1 = __webpack_require__(/*! ../../common/definitions */ "./src/engine/common/definitions.ts");
const functions_1 = __webpack_require__(/*! ../../common/functions */ "./src/engine/common/functions.ts");
const BreakpointAnimation_1 = __webpack_require__(/*! ../BreakpointAnimation */ "./src/engine/extensions/BreakpointAnimation.ts");
class EventBody2EventBodyFloater {
    constructor(ext) {
        this.ext = ext;
        this.conflicts = [];
        /**
         * above EventBody is above, below EventBody is below
         * */
        this.eventBodyList = [];
    }
    static isConflict(eb1, eb2) {
        if (eb1 === eb2)
            return false;
        if (eb1.drawInfo.floated || eb2.drawInfo.floated)
            return false;
        return functions_1.isOverlap(eb1.drawInfo.box, eb2.drawInfo.box);
    }
    float(conflicts) {
        return __awaiter(this, void 0, void 0, function* () {
            const maxWidthInConflict = Math.max(...conflicts.with.map(c => c.drawInfo.box.width + c.drawInfo.offset.x));
            conflicts.self.drawInfo.offset.x = maxWidthInConflict + 1;
            conflicts.self.drawInfo.maxWidth = Math.min(this.timeline.grid.eventWidth, this.axisBody.drawInfo.box.x - maxWidthInConflict);
            conflicts.self.drawInfo.floated = true;
            yield conflicts.self.apply();
        });
    }
    fix() {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeline = this.ext.components[definitions_1.SN.Timeline][0];
            this.axisBody = this.ext.components[definitions_1.SN.AxisBody][0];
            this.eventBodyList = Array.from(this.ext.components[definitions_1.SN.EventBody])
                .sort((eb1, eb2) => eb1.drawInfo.markDrawInfo.target.y - eb2.drawInfo.markDrawInfo.target.y);
            this.countConflict();
            if (this.conflicts.length === 0) {
                return "no-conflict" /* NoConflict */;
            }
            const conflict = this.pickRingleader();
            const options = {
                components: [
                    this.axisBody,
                    conflict.self,
                    ...conflict.with,
                ],
                protagonist: conflict.self,
            };
            yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.FixEventBody2EventBodyFloater, options);
            yield this.float(conflict);
            yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.FixEventBody2EventBodyFloater, Object.assign({}, options, { forward: true }));
            return "alleviated" /* Alleviated */;
        });
    }
    pickRingleader() {
        return this.conflicts.find(c1 => this.conflicts.every(c2 => c1.with.length >= c2.with.length));
    }
    countConflict() {
        this.conflicts.length = 0;
        for (const eb of this.eventBodyList) {
            const conflict = {
                self: eb,
                with: this.ext.components[definitions_1.SN.EventBody].filter(target => EventBody2EventBodyFloater.isConflict(eb, target)),
            };
            if (conflict.with.length)
                this.conflicts.push(conflict);
        }
    }
}
exports.default = EventBody2EventBodyFloater;


/***/ }),

/***/ "./src/engine/extensions/ConflictFixer/EventBody2EventBodyMover.ts":
/*!*************************************************************************!*\
  !*** ./src/engine/extensions/ConflictFixer/EventBody2EventBodyMover.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const functions_1 = __webpack_require__(/*! ../../common/functions */ "./src/engine/common/functions.ts");
const definitions_1 = __webpack_require__(/*! ../../common/definitions */ "./src/engine/common/definitions.ts");
const BreakpointAnimation_1 = __webpack_require__(/*! ../BreakpointAnimation */ "./src/engine/extensions/BreakpointAnimation.ts");
class EventBody2EventBodyMover {
    constructor(ext) {
        this.ext = ext;
        this.conflicts = [];
        /**
         * above EventBody is above, below EventBody is below
         * */
        this.eventBodyList = [];
        this.spaceMap = new Map;
    }
    static avoid({ mover, fixed, direction }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (direction > 0) {
                mover.drawInfo.offset.y +=
                    (fixed.drawInfo.box.y + fixed.drawInfo.box.height)
                        - mover.drawInfo.box.y
                        + 1;
            }
            else {
                mover.drawInfo.offset.y -=
                    (mover.drawInfo.box.y + mover.drawInfo.box.height)
                        - fixed.drawInfo.box.y
                        + 1;
            }
            yield mover.apply();
        });
    }
    static isConflict(eb1, eb2) {
        if (eb1 === eb2)
            return false;
        if (eb1.drawInfo.floated !== eb2.drawInfo.floated) {
            const floated = (eb1.drawInfo.floated ? eb1 : eb2);
            const another = (eb1 === floated ? eb2 : eb1);
            if ( // floated's line overlapped with another's body
            (floated.drawInfo.markDrawInfo.target.y > another.drawInfo.box.y)
                && (floated.drawInfo.markDrawInfo.target.y
                    < (another.drawInfo.box.y + another.drawInfo.box.height)))
                return true;
        }
        return functions_1.isOverlap(eb1.drawInfo.box, eb2.drawInfo.box);
    }
    fix() {
        return __awaiter(this, void 0, void 0, function* () {
            this.eventBodyList = Array.from(this.ext.components[definitions_1.SN.EventBody])
                .sort((eb1, eb2) => (eb1.drawInfo.markDrawInfo.target.y
                - eb2.drawInfo.markDrawInfo.target.y));
            return yield functions_1.walkLoop(() => __awaiter(this, void 0, void 0, function* () {
                return [
                    yield this.tryFixOne(),
                ];
            }));
        });
    }
    /**
     * @return {boolean} have fixed one of conflicts?
     * */
    tryFixOne() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.countConflict();
            this.countSpace();
            if (this.conflicts.length === 0)
                return "no-conflict" /* NoConflict */;
            this.conflicts = this.conflicts.filter(conflict => this.isPossible(conflict));
            if (this.conflicts.length === 0)
                return "failed" /* Failed */;
            const conflict = this.conflicts.find(conflict1 => this.conflicts.every(conflict2 => this.countCast(conflict1) <= this.countCast(conflict2)));
            const options = {
                components: [
                    ...this.ext.components[definitions_1.SN.AxisBody],
                    conflict.self,
                    ...conflict.with,
                ],
                protagonist: conflict.self,
            };
            yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.FixEventBody2EventBodyMover, options);
            yield this.fixConflict(conflict);
            yield this.ext.breakpoint.block(BreakpointAnimation_1.Breakpoint.FixEventBody2EventBodyMover, Object.assign({}, options, { forward: true }));
            return "alleviated" /* Alleviated */;
        });
    }
    isPossible(conflict) {
        if (conflict.self.drawInfo.floated
            && conflict.with.some(eb => !eb.drawInfo.floated))
            return false;
        const needed = this.countNeeded(conflict);
        const space = this.spaceMap.get(conflict.self);
        return (needed.bottom === 0 || needed.top === 0)
            && (space.bottom >= needed.bottom && space.top >= needed.top);
    }
    fixConflict(conflict) {
        return __awaiter(this, void 0, void 0, function* () {
            const needed = this.countNeeded(conflict);
            const moveDistance = needed.top ? needed.top : -needed.bottom;
            const direction = moveDistance / Math.abs(moveDistance);
            // fix conflict
            conflict.self.drawInfo.offset.y += moveDistance;
            yield conflict.self.apply();
            // and fix side-effect
            const effectable = this.eventBodyList.filter(eb => eb.drawInfo.floated === conflict.self.drawInfo.floated);
            for (let i = effectable.indexOf(conflict.self) + direction; i >= 0 && i < effectable.length; i += direction) {
                const last = effectable[i - direction];
                const now = effectable[i];
                if (EventBody2EventBodyMover.isConflict(last, now)) {
                    yield EventBody2EventBodyMover.avoid({
                        direction,
                        mover: now,
                        fixed: last,
                    });
                }
                else
                    break;
            }
        });
    }
    countConflict() {
        return __awaiter(this, void 0, void 0, function* () {
            this.conflicts.length = 0;
            yield Promise.all(this.eventBodyList.map(eb => eb.apply()));
            for (const eb of this.eventBodyList) {
                const conflict = {
                    self: eb,
                    with: this.eventBodyList.filter(target => EventBody2EventBodyMover.isConflict(eb, target)),
                };
                if (conflict.with.length)
                    this.conflicts.push(conflict);
            }
        });
    }
    countCast(conflict) {
        const needed = this.countNeeded(conflict);
        return needed.bottom + needed.top;
    }
    /**
     * Count the number how many space needed for fix the conflict by verticalMove
     * */
    countNeeded(conflict) {
        const origin = conflict.self;
        const result = {
            top: 0,
            bottom: 0,
        };
        const above = conflict.with.filter(cb => cb.drawInfo.markDrawInfo.target.y < origin.drawInfo.markDrawInfo.target.y);
        const below = conflict.with.filter(cb => cb.drawInfo.markDrawInfo.target.y > origin.drawInfo.markDrawInfo.target.y);
        if (above.length) {
            result.top = Math.max(...above.map((upper) => {
                if (upper.drawInfo.floated === origin.drawInfo.floated) {
                    return (upper.drawInfo.box.y
                        + upper.drawInfo.box.height
                        - origin.drawInfo.box.y);
                }
                else if (origin.drawInfo.floated) {
                    return ((upper.drawInfo.box.y + upper.drawInfo.box.height)
                        - origin.drawInfo.markDrawInfo.target.y);
                }
                else if (upper.drawInfo.floated) {
                    return upper.drawInfo.markDrawInfo.target.y - origin.drawInfo.box.y;
                }
                throw SyntaxError('floated is not a boolean');
            }));
        }
        if (below.length) {
            result.bottom = Math.max(...below.map((lower) => {
                if (lower.drawInfo.floated === origin.drawInfo.floated) {
                    return (origin.drawInfo.box.y
                        + origin.drawInfo.box.height
                        - lower.drawInfo.box.y);
                }
                else if (origin.drawInfo.floated) {
                    return origin.drawInfo.markDrawInfo.target.y - lower.drawInfo.box.y;
                }
                else if (lower.drawInfo.floated) {
                    return ((origin.drawInfo.box.y + origin.drawInfo.box.height)
                        - lower.drawInfo.markDrawInfo.target.y);
                }
                throw SyntaxError('floated is not a boolean');
            }));
        }
        // margin 1 to target of conflict
        if (result.top)
            result.top++;
        if (result.bottom)
            result.bottom++;
        origin.extraData.needed = result;
        return result;
    }
    /**
     * Count the number how many space the component can move
     * */
    countSpace() {
        const spacePadding = 4; // FIXME: remove supported
        // Itself's can move space
        this.eventBodyList.forEach(eb => this.spaceMap.set(eb, {
            top: eb.drawInfo.markDrawInfo.target.y - eb.drawInfo.box.y - spacePadding,
            bottom: eb.drawInfo.box.y
                + eb.drawInfo.box.height
                - eb.drawInfo.markDrawInfo.target.y
                - spacePadding,
        }));
        const applyLimiting = (allEventBody) => {
            if (allEventBody.length === 0)
                return;
            // An item is limited from
            // it's first that prevent out of canvas
            const first = allEventBody[0];
            this.spaceMap.get(first).bottom = Math.min(this.spaceMap.get(first).bottom, first.drawInfo.box.y);
            // it's last that prevent out of canvas
            const last = allEventBody[allEventBody.length - 1];
            this.spaceMap.get(last).top = Math.min(this.spaceMap.get(last).top, last.canvas.height - (last.drawInfo.box.y + last.drawInfo.box.height));
            // clamp by neighbor
            for (let i = 1; i < allEventBody.length; i++) {
                const previous = allEventBody[i - 1];
                const now = allEventBody[i];
                const nowData = this.spaceMap.get(now);
                const previousData = this.spaceMap.get(previous);
                const distance = now.drawInfo.box.y -
                    (previous.drawInfo.box.y + previous.drawInfo.box.height);
                nowData.bottom = Math.min(nowData.bottom, distance + previousData.bottom);
            }
            for (let i = allEventBody.length - 2; i >= 0; i--) {
                const next = allEventBody[i + 1];
                const now = allEventBody[i];
                const nowData = this.spaceMap.get(now);
                const nextData = this.spaceMap.get(next);
                const distance = next.drawInfo.box.y -
                    (now.drawInfo.box.y + now.drawInfo.box.height);
                nowData.top = Math.min(nowData.top, distance + nextData.top);
            }
            // Set number which < 0 as 0
            Array.from(this.spaceMap.values()).forEach((value) => {
                value.top = Math.max(0, value.top);
                value.bottom = Math.max(0, value.bottom);
            });
        };
        applyLimiting(this.eventBodyList.filter(eb => eb.drawInfo.floated));
        applyLimiting(this.eventBodyList.filter(eb => !eb.drawInfo.floated));
        this.eventBodyList.forEach(eb => eb.extraData.space = this.spaceMap.get(eb));
    }
}
exports.default = EventBody2EventBodyMover;


/***/ }),

/***/ "./src/engine/extensions/ConflictFixer/index.ts":
/*!******************************************************!*\
  !*** ./src/engine/extensions/ConflictFixer/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const definitions_1 = __webpack_require__(/*! ../../common/definitions */ "./src/engine/common/definitions.ts");
const Timeline_1 = __webpack_require__(/*! ../../Timeline */ "./src/engine/Timeline.ts");
const functions_1 = __webpack_require__(/*! ../../common/functions */ "./src/engine/common/functions.ts");
const EventBody2AxisMilestone_1 = __webpack_require__(/*! ./EventBody2AxisMilestone */ "./src/engine/extensions/ConflictFixer/EventBody2AxisMilestone.ts");
const EventAxis2EventAxis_1 = __webpack_require__(/*! ./EventAxis2EventAxis */ "./src/engine/extensions/ConflictFixer/EventAxis2EventAxis.ts");
const EventBody2EventBodyMover_1 = __webpack_require__(/*! ./EventBody2EventBodyMover */ "./src/engine/extensions/ConflictFixer/EventBody2EventBodyMover.ts");
const EventBody2EventBodyFloater_1 = __webpack_require__(/*! ./EventBody2EventBodyFloater */ "./src/engine/extensions/ConflictFixer/EventBody2EventBodyFloater.ts");
/**
 * Fix the conflict between component and each other by:
 * 1. adjust component using fixers.
 * 2. stretch Axis.
 * */
class ConflictFixer {
    constructor(ext) {
        this.ext = ext;
        this.fixers = [
            new EventBody2AxisMilestone_1.default(this.ext),
            new EventAxis2EventAxis_1.default(this.ext),
            new EventBody2EventBodyMover_1.default(this.ext),
            new EventBody2EventBodyFloater_1.default(this.ext),
        ];
        this.counter = 0;
    }
    onApply(timeline) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Timeline_1.default.is(timeline))
                return;
            // Conflict is fixed
            if ((yield this.fixAll()) === "no-conflict" /* NoConflict */) {
                this.counter = 0;
                return;
            }
            // Try stretch length of Axis
            this.counter++;
            if (this.counter > 10) { // TODO: make configurable
                const msg = `Too many times(${this.counter}) of try fix conflict.`;
                if (definitions_1.DEBUG)
                    throw new Error(msg);
                else
                    console.warn(msg);
            }
            yield Promise.resolve().then(() => timeline.apply({
                axisLength: timeline.runtime.axisLength * 1.1,
            }));
        });
    }
    /**
     * Try fix all conflict by adjust components.
     * */
    fixAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield functions_1.walkLoop(() => __awaiter(this, void 0, void 0, function* () {
                const results = [];
                for (const fixer of this.fixers) {
                    results.push(yield fixer.fix());
                }
                return results;
            }));
        });
    }
}
exports.default = ConflictFixer;


/***/ }),

/***/ "./src/engine/extensions/GeneratorId.ts":
/*!**********************************************!*\
  !*** ./src/engine/extensions/GeneratorId.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const definitions_1 = __webpack_require__(/*! ../common/definitions */ "./src/engine/common/definitions.ts");
/**
 * 1. Set a id for every Component in component.extraData.id.
 * 2. Create a global variable using component's id if DEBUG is true when comp.apply been fired
 * */
class GeneratorId {
    constructor(etx) {
        this.etx = etx;
    }
    /**
     * Set component.extraData.id
     * */
    onConstruct(comp) {
        const randomString = Number(Math.random().toString().split('.')[1])
            .toString(36)
            .slice(0, 5);
        // comp.name is undefined now
        Object.defineProperty(comp.extraData, 'id', {
            get() { return `${comp.name}_${randomString}`; },
        });
    }
    /**
     * If the DEBUG is true, set a global variable using component.extraData.id in windows
     * to point the component.
     * */
    onApply(comp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (definitions_1.DEBUG)
                window[comp.extraData.id] = comp;
        });
    }
}
exports.default = GeneratorId;


/***/ }),

/***/ "./src/engine/extensions/PositionCounter.ts":
/*!**************************************************!*\
  !*** ./src/engine/extensions/PositionCounter.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const Axis_1 = __webpack_require__(/*! ../Axis */ "./src/engine/Axis/index.ts");
const functions_1 = __webpack_require__(/*! ../common/functions */ "./src/engine/common/functions.ts");
const BreakpointAnimation_1 = __webpack_require__(/*! ./BreakpointAnimation */ "./src/engine/extensions/BreakpointAnimation.ts");
const definitions_1 = __webpack_require__(/*! ../common/definitions */ "./src/engine/common/definitions.ts");
const Timeline_1 = __webpack_require__(/*! ../Timeline */ "./src/engine/Timeline.ts");
/**
 * Milestone shouldn't occupy the space of Axis.
 * So we move Event, Scale and Milestone if they upper has any Milestones.
 * */
class PositionCounter {
    constructor(etx) {
        this.etx = etx;
        this.pushConfigs = [];
    }
    onApply(comp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Axis_1.default.is(comp))
                return yield this.adjustAxis(comp);
            if (Timeline_1.default.is(comp))
                return yield this.adjustEvent(comp);
        });
    }
    /**
     * When a component destroyed, remove a config made by it.
     * */
    onDestroy(comp) {
        while (true) {
            const index = this.pushConfigs.findIndex(config => config.component === comp);
            if (index === -1)
                break;
            else
                this.pushConfigs.splice(index, 1);
        }
    }
    adjustAxis(axis) {
        return __awaiter(this, void 0, void 0, function* () {
            const childComponents = [
                axis.body,
                ...axis.scales,
                ...axis.milestones,
            ];
            // Milestone cannot occupy the space of Axis
            axis.extraData.realLength =
                axis.drawInfo.length
                    - axis.milestones.reduce(// Reserved space for Milestone
                    (h, m) => h + m.drawInfo.box.height, 0);
            // Set real Y in milestones and scales
            axis.milestones.forEach(m => m.drawInfo.alignY *= axis.extraData.realLength);
            axis.scales.forEach(s => s.drawInfo.alignY *= axis.extraData.realLength);
            yield Promise.all([...axis.milestones, ...axis.scales].map(c => c.apply()));
            // Set Push-config
            axis.milestones.forEach(milestone => this.addPushConfig({
                critical: milestone.drawInfo.box.y,
                additional: milestone.drawInfo.box.height,
                component: milestone,
            }));
            // Push milestones and scales
            yield this.etx.breakpoint.block(BreakpointAnimation_1.Breakpoint.PushScalesAndMilestones, {
                components: childComponents,
            });
            const pushTarget = [...axis.milestones, ...axis.scales].sort((comp1, comp2) => comp1.drawInfo.alignY - comp2.drawInfo.alignY);
            for (const comp of pushTarget) {
                const distance = this.countCritical(comp.drawInfo.alignY);
                if (distance === 0)
                    continue;
                if (comp.name === definitions_1.SN.AxisMilestone) {
                    yield Promise.all(pushTarget.map(comp => comp.apply()));
                    yield this.etx.breakpoint.block(BreakpointAnimation_1.Breakpoint.PushScalesAndMilestones, {
                        components: childComponents,
                    });
                }
                comp.drawInfo.alignY += distance;
            }
            yield Promise.all(pushTarget.map(comp => comp.apply()));
            yield this.etx.breakpoint.block(BreakpointAnimation_1.Breakpoint.PushScalesAndMilestones, {
                components: childComponents,
            });
            yield Promise.all(childComponents.map(c => c.apply()));
            axis.drawInfo.box = functions_1.mergeBox(...childComponents.map(c => c.drawInfo.box));
        });
    }
    adjustEvent(timeline) {
        return __awaiter(this, void 0, void 0, function* () {
            const events = timeline.events;
            const axis = this.etx.components[definitions_1.SN.Axis][0];
            for (const event of events) {
                event.drawInfo.target.y *= axis.extraData.realLength;
                event.drawInfo.target.y += axis.body.drawInfo.box.y;
                event.drawInfo.target.y += this.countCritical(event.drawInfo.target.y);
                if (event.drawInfo.axisLength) {
                    event.drawInfo.axisLength *= axis.extraData.realLength;
                    event.drawInfo.axisLength += this.countCritical(event.drawInfo.target.y);
                }
            }
            yield Promise.all(events.map(event => event.apply()));
        });
    }
    addPushConfig(config) {
        this.pushConfigs.push(config);
    }
    countCritical(num) {
        if (this.pushConfigs.length === 0)
            return num;
        return this.pushConfigs.reduce((result, config) => {
            return num > config.critical ? result + config.additional : result;
        }, 0);
    }
}
exports.default = PositionCounter;


/***/ }),

/***/ "./src/engine/extensions/index.js":
/*!****************************************!*\
  !*** ./src/engine/extensions/index.js ***!
  \****************************************/
/*! exports provided: BoxElementGenerator, GeneratorId, PositionCounter, BreakpointAnimation, ConflictFixer, Base, ExtensionManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionManager", function() { return ExtensionManager; });
/* harmony import */ var _engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/engine/common/definitions */ "./src/engine/common/definitions.ts");
/* harmony import */ var _engine_common_definitions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Axis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Axis */ "./src/engine/Axis/index.ts");
/* harmony import */ var _Axis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Axis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Axis_AxisBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Axis/AxisBody */ "./src/engine/Axis/AxisBody.ts");
/* harmony import */ var _Axis_AxisBody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Axis_AxisBody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Axis_AxisScale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Axis/AxisScale */ "./src/engine/Axis/AxisScale.ts");
/* harmony import */ var _Axis_AxisScale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Axis_AxisScale__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Axis_AxisMilestone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Axis/AxisMilestone */ "./src/engine/Axis/AxisMilestone.ts");
/* harmony import */ var _Axis_AxisMilestone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Axis_AxisMilestone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Event */ "./src/engine/Event/index.ts");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Event__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Event_EventBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Event/EventBody */ "./src/engine/Event/EventBody.ts");
/* harmony import */ var _Event_EventBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Event_EventBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Event_EventMark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Event/EventMark */ "./src/engine/Event/EventMark.ts");
/* harmony import */ var _Event_EventMark__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Event_EventMark__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Event_EventAxis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Event/EventAxis */ "./src/engine/Event/EventAxis.ts");
/* harmony import */ var _Event_EventAxis__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Event_EventAxis__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _BoxElementGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BoxElementGenerator */ "./src/engine/extensions/BoxElementGenerator.ts");
/* harmony import */ var _BoxElementGenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_BoxElementGenerator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "BoxElementGenerator", function() { return _BoxElementGenerator__WEBPACK_IMPORTED_MODULE_9___default.a; });
/* harmony import */ var _GeneratorId__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GeneratorId */ "./src/engine/extensions/GeneratorId.ts");
/* harmony import */ var _GeneratorId__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_GeneratorId__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "GeneratorId", function() { return _GeneratorId__WEBPACK_IMPORTED_MODULE_10___default.a; });
/* harmony import */ var _PositionCounter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PositionCounter */ "./src/engine/extensions/PositionCounter.ts");
/* harmony import */ var _PositionCounter__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_PositionCounter__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PositionCounter", function() { return _PositionCounter__WEBPACK_IMPORTED_MODULE_11___default.a; });
/* harmony import */ var _BreakpointAnimation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BreakpointAnimation */ "./src/engine/extensions/BreakpointAnimation.ts");
/* harmony import */ var _BreakpointAnimation__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_BreakpointAnimation__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "BreakpointAnimation", function() { return _BreakpointAnimation__WEBPACK_IMPORTED_MODULE_12___default.a; });
/* harmony import */ var _ConflictFixer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ConflictFixer */ "./src/engine/extensions/ConflictFixer/index.ts");
/* harmony import */ var _ConflictFixer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ConflictFixer__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ConflictFixer", function() { return _ConflictFixer__WEBPACK_IMPORTED_MODULE_13___default.a; });

















const METHODS = ['onConstruct', 'onApply', 'onDestroy', 'onHide', 'onDraw'];


/**
 * Manage ExtensionManager#components.
 * */
class Base {
    constructor(etx) {
        this.etx = etx;
    }

    onConstruct(comp) {
        this.etx.components[comp.name].push(comp);
    }

    onDestroy(comp) {
        this.etx.components[comp.name].splice(
            this.etx.components[comp.name].indexOf(comp),
            1,
        );
    }
}

/**
 * Create a ExtensionManager
 * @constructor
 * */
function ExtensionManager({ breakpointAnimation } = {}) {
    this.extraData = {};
    this.components = {
        [_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Timeline]: [],
        [_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Axis]: [],
        [_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].AxisBody]: [],
        [_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].AxisScale]: [],
        [_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].AxisMilestone]: [],
        [_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Event]: [],
        [_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].EventBody]: [],
        [_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].EventMark]: [],
        [_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].EventAxis]: [],
    };
    this.breakpoint = new _BreakpointAnimation__WEBPACK_IMPORTED_MODULE_12___default.a(this, breakpointAnimation);

    this.extensions = [
        new Base(this),
        new _GeneratorId__WEBPACK_IMPORTED_MODULE_10___default.a(this),
        new _PositionCounter__WEBPACK_IMPORTED_MODULE_11___default.a(this),
        new _ConflictFixer__WEBPACK_IMPORTED_MODULE_13___default.a(this),
        this.breakpoint,
    ];

    if (_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["DEBUG"]) {
        this.extensions.push(
            new _BoxElementGenerator__WEBPACK_IMPORTED_MODULE_9___default.a(this),
        );
    }
}
ExtensionManager.prototype.getParent = function getParent(comp) {
    if (_Axis__WEBPACK_IMPORTED_MODULE_1___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Timeline][0];
    if (_Event__WEBPACK_IMPORTED_MODULE_5___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Timeline][0];
    if (_Axis_AxisBody__WEBPACK_IMPORTED_MODULE_2___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Axis][0];
    if (_Axis_AxisMilestone__WEBPACK_IMPORTED_MODULE_4___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Axis][0];
    if (_Axis_AxisScale__WEBPACK_IMPORTED_MODULE_3___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Axis][0];
    if (_Event_EventBody__WEBPACK_IMPORTED_MODULE_6___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Event].find(event => event.body === comp);
    if (_Event_EventAxis__WEBPACK_IMPORTED_MODULE_8___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Event].find(event => event.axis === comp);
    if (_Event_EventMark__WEBPACK_IMPORTED_MODULE_7___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Event].find(event => event.mark === comp);

    throw new TypeError(`Cannot find parent of ${comp.constructor.name}`);
};

// Add methods on ExtensionManager.prototype from METHODS
METHODS.forEach((methodName) => {
    ExtensionManager.prototype[methodName] = async function extensionManagerMethod(...args) {
        for (const extension of this.extensions) { // eslint-disable-line no-restricted-syntax
            if (methodName in extension) {
                if (methodName === 'onApply') {
                    await extension[methodName](...args); // eslint-disable-line no-await-in-loop
                } else {
                    extension[methodName](...args);
                }
            }
        }
    };
});


/***/ }),

/***/ "./src/engine/index.ts":
/*!*****************************!*\
  !*** ./src/engine/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
console.log('The night is short, walk on girl.');
__webpack_require__(/*! ./styles.scss */ "./src/engine/styles.scss");
var Timeline_1 = __webpack_require__(/*! ./Timeline */ "./src/engine/Timeline.ts");
exports.Timeline = Timeline_1.default;
var Axis_1 = __webpack_require__(/*! ./Axis */ "./src/engine/Axis/index.ts");
exports.Axis = Axis_1.default;
var AxisScale_1 = __webpack_require__(/*! ./Axis/AxisScale */ "./src/engine/Axis/AxisScale.ts");
exports.AxisScale = AxisScale_1.default;
var AxisMilestone_1 = __webpack_require__(/*! ./Axis/AxisMilestone */ "./src/engine/Axis/AxisMilestone.ts");
exports.AxisMilestone = AxisMilestone_1.default;
var AxisBody_1 = __webpack_require__(/*! ./Axis/AxisBody */ "./src/engine/Axis/AxisBody.ts");
exports.AxisBody = AxisBody_1.default;
var Event_1 = __webpack_require__(/*! ./Event */ "./src/engine/Event/index.ts");
exports.Event = Event_1.default;
var EventMark_1 = __webpack_require__(/*! ./Event/EventMark */ "./src/engine/Event/EventMark.ts");
exports.EventMark = EventMark_1.default;
var EventAxis_1 = __webpack_require__(/*! ./Event/EventAxis */ "./src/engine/Event/EventAxis.ts");
exports.EventAxis = EventAxis_1.default;
var EventBody_1 = __webpack_require__(/*! ./Event/EventBody */ "./src/engine/Event/EventBody.ts");
exports.EventBody = EventBody_1.default;
var Component_1 = __webpack_require__(/*! ./common/Component */ "./src/engine/common/Component.ts");
exports.Component = Component_1.default;
var extensions_1 = __webpack_require__(/*! ./extensions */ "./src/engine/extensions/index.js");
exports.ExtensionManager = extensions_1.ExtensionManager;
exports.BoxElementGenerator = extensions_1.BoxElementGenerator;
exports.GeneratorId = extensions_1.GeneratorId;
exports.PositionCounter = extensions_1.PositionCounter;
exports.BreakpointAnimation = extensions_1.BreakpointAnimation;
exports.ConflictFixer = extensions_1.ConflictFixer;


/***/ }),

/***/ "./src/engine/styles.scss":
/*!********************************!*\
  !*** ./src/engine/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/engine/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/themes/colors/Axis/AxisBody.ts":
/*!********************************************!*\
  !*** ./src/themes/colors/Axis/AxisBody.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Engine = __webpack_require__(/*! @engine */ "./src/engine/index.ts");
class AxisBody extends Engine.AxisBody {
    constructor() {
        super(...arguments);
        this.theme = 'colors';
    }
    draw() {
        const box = this.drawInfo.box;
        this.ext.extraData.roughCanvas.line(box.x + box.width / 2, box.y, box.x + box.width / 2, box.y + box.height, {
            strokeWidth: box.width,
            stroke: '#333',
            hachureGap: 0,
            roughness: 0.2,
        });
        return super.draw();
    }
}
exports.default = AxisBody;


/***/ }),

/***/ "./src/themes/colors/Axis/AxisMilestone.ts":
/*!*************************************************!*\
  !*** ./src/themes/colors/Axis/AxisMilestone.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Engine = __webpack_require__(/*! @engine */ "./src/engine/index.ts");
class AxisMilestone extends Engine.AxisMilestone {
    constructor() {
        super(...arguments);
        this.theme = 'colors';
    }
    draw() {
        const box = this.drawInfo.box;
        this.ext.extraData.roughCanvas.rectangle(box.x, box.y, box.width, box.height, {
            stroke: '#333',
            strokeWidth: 1.5,
            fill: '#fff',
            fillWeight: 0.5,
            fillStyle: 'solid',
            hachureGap: 2,
            roughness: 0.7,
            bowing: 0.5,
        });
        return super.draw();
    }
}
exports.default = AxisMilestone;


/***/ }),

/***/ "./src/themes/colors/Axis/AxisScale.ts":
/*!*********************************************!*\
  !*** ./src/themes/colors/Axis/AxisScale.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Engine = __webpack_require__(/*! @engine */ "./src/engine/index.ts");
class AxisScale extends Engine.AxisScale {
    constructor() {
        super(...arguments);
        this.theme = 'colors';
    }
    draw() {
        const box = this.drawInfo.box;
        this.ext.extraData.roughCanvas.rectangle(box.x, box.y, box.width, box.height, {
            strokeWidth: 0,
            stroke: 'rgba(0,0,0,0)',
            fill: '#fff',
            fillWeight: 0.3,
            fillStyle: 'solid',
            hachureGap: 0,
            roughness: 0,
            bowing: 0,
        });
        return super.draw();
    }
}
exports.default = AxisScale;


/***/ }),

/***/ "./src/themes/colors/Axis/index.ts":
/*!*****************************************!*\
  !*** ./src/themes/colors/Axis/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Engine = __webpack_require__(/*! @engine */ "./src/engine/index.ts");
const AxisBody_1 = __webpack_require__(/*! ./AxisBody */ "./src/themes/colors/Axis/AxisBody.ts");
const AxisMilestone_1 = __webpack_require__(/*! ./AxisMilestone */ "./src/themes/colors/Axis/AxisMilestone.ts");
const AxisScale_1 = __webpack_require__(/*! ./AxisScale */ "./src/themes/colors/Axis/AxisScale.ts");
class Axis extends Engine.Axis {
    constructor() {
        super(...arguments);
        this.theme = 'colors';
        this.bodyConstructor = AxisBody_1.default;
        this.milestoneConstructor = AxisMilestone_1.default;
        this.scaleConstructor = AxisScale_1.default;
    }
}
exports.default = Axis;


/***/ }),

/***/ "./src/themes/colors/Event/EventAxis.ts":
/*!**********************************************!*\
  !*** ./src/themes/colors/Event/EventAxis.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Engine = __webpack_require__(/*! @engine */ "./src/engine/index.ts");
class EventAxis extends Engine.EventAxis {
    constructor() {
        super(...arguments);
        this.theme = 'colors';
        this.drawInfo = Object.assign({}, this.drawInfo, { mainColor: '' });
    }
    draw() {
        const strokeWidth = 1.5;
        const radius = 10;
        this.ext.extraData.roughCanvas.linearPath([
            [this.drawInfo.markDrawInfo.target.x, this.drawInfo.markDrawInfo.target.y],
            [
                this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX,
                this.drawInfo.markDrawInfo.target.y,
            ],
            [
                this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX,
                this.drawInfo.markDrawInfo.target.y - this.drawInfo.length + radius / 2,
            ],
        ], {
            strokeWidth,
            stroke: this.drawInfo.mainColor,
            roughness: 0.7,
            bowing: 0,
        });
        this.ext.extraData.roughCanvas.circle(this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX, this.drawInfo.markDrawInfo.target.y - this.drawInfo.length, radius, {
            strokeWidth,
            stroke: this.drawInfo.mainColor,
            roughness: 0.2,
        });
        return super.draw();
    }
}
exports.default = EventAxis;


/***/ }),

/***/ "./src/themes/colors/Event/EventBody.ts":
/*!**********************************************!*\
  !*** ./src/themes/colors/Event/EventBody.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Engine = __webpack_require__(/*! @engine */ "./src/engine/index.ts");
const functions_1 = __webpack_require__(/*! @engine/common/functions */ "./src/engine/common/functions.ts");
class EventBody extends Engine.EventBody {
    constructor() {
        super(...arguments);
        this.theme = 'colors';
        this.drawInfo = Object.assign({}, this.drawInfo, { mainColor: '' });
    }
    draw() {
        const strokeWidth = 1.5;
        const box = functions_1.shrinkBox(this.drawInfo.box, strokeWidth);
        this.ext.extraData.roughCanvas.rectangle(box.x, box.y, box.width, box.height, {
            strokeWidth: 0,
            stroke: 'rgba(0, 0, 0, 0)',
            fill: this.drawInfo.mainColor,
            fillWeight: 0.5,
            fillStyle: 'solid',
        });
        this.ext.extraData.roughCanvas.line(this.drawInfo.markDrawInfo.target.x + 2, this.drawInfo.markDrawInfo.target.y, this.drawInfo.box.x + this.drawInfo.box.width - 2, this.drawInfo.markDrawInfo.target.y, {
            strokeWidth,
            roughness: 1.3,
            bowing: 0.5,
            stroke: this.drawInfo.mainColor,
        });
        return super.draw();
    }
}
exports.default = EventBody;


/***/ }),

/***/ "./src/themes/colors/Event/EventMark.ts":
/*!**********************************************!*\
  !*** ./src/themes/colors/Event/EventMark.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Engine = __webpack_require__(/*! @engine */ "./src/engine/index.ts");
class EventMark extends Engine.EventMark {
    constructor() {
        super(...arguments);
        this.theme = 'colors';
        this.drawInfo = Object.assign({}, this.drawInfo, { mainColor: '' });
    }
    draw() {
        this.ext.extraData.roughCanvas.circle(this.drawInfo.target.x, this.drawInfo.target.y, this.drawInfo.width, {
            strokeWidth: 0,
            stroke: 'rgba(0, 0, 0, 0)',
            fill: this.drawInfo.mainColor,
            fillWeight: 0.5,
            fillStyle: 'solid',
            roughness: 0.5,
        });
        return super.draw();
    }
}
exports.default = EventMark;


/***/ }),

/***/ "./src/themes/colors/Event/index.ts":
/*!******************************************!*\
  !*** ./src/themes/colors/Event/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Engine = __webpack_require__(/*! @engine */ "./src/engine/index.ts");
const EventBody_1 = __webpack_require__(/*! ./EventBody */ "./src/themes/colors/Event/EventBody.ts");
const EventAxis_1 = __webpack_require__(/*! ./EventAxis */ "./src/themes/colors/Event/EventAxis.ts");
const EventMark_1 = __webpack_require__(/*! ./EventMark */ "./src/themes/colors/Event/EventMark.ts");
class Event extends Engine.Event {
    constructor() {
        super(...arguments);
        this.theme = 'colors';
        this.bodyConstructor = EventBody_1.default;
        this.axisConstructor = EventAxis_1.default;
        this.markConstructor = EventMark_1.default;
    }
}
exports.default = Event;


/***/ }),

/***/ "./src/themes/colors/Timeline.ts":
/*!***************************************!*\
  !*** ./src/themes/colors/Timeline.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const roughjs_1 = __webpack_require__(/*! roughjs */ "./node_modules/roughjs/bin/rough.js");
const Engine = __webpack_require__(/*! @engine */ "./src/engine/index.ts");
const Axis_1 = __webpack_require__(/*! ./Axis */ "./src/themes/colors/Axis/index.ts");
const Event_1 = __webpack_require__(/*! ./Event */ "./src/themes/colors/Event/index.ts");
const ColorPicker_1 = __webpack_require__(/*! ./extensions/ColorPicker */ "./src/themes/colors/extensions/ColorPicker.ts");
class Timeline extends Engine.Timeline {
    constructor(info) {
        super(Object.assign({ grid: Object.assign({}, Engine.Timeline.defaultGrid, { scaleHeight: 3, axisWidth: 5, markWidth: 10 }), ext: new Engine.ExtensionManager }, info));
        this.theme = 'colors';
        this.axisConstructor = Axis_1.default;
        this.eventConstructor = Event_1.default;
        this.ext.extensions.push(new ColorPicker_1.default(this.ext));
        this.ext.extraData.roughCanvas = roughjs_1.default.canvas(this.canvas);
    }
}
exports.default = Timeline;


/***/ }),

/***/ "./src/themes/colors/entry.ts":
/*!************************************!*\
  !*** ./src/themes/colors/entry.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const _1 = __webpack_require__(/*! ./ */ "./src/themes/colors/index.ts");
function draw(el, events) {
    return __awaiter(this, void 0, void 0, function* () {
        const { container, canvas } = mount(el);
        const timeline = new _1.Timeline({
            canvas,
            container,
            ext: new _1.ExtensionManager,
        });
        timeline.drawInfo.events = events;
        yield timeline.apply();
        timeline.draw();
        return timeline;
    });
}
exports.draw = draw;
function drawWithAnimation(el, events) {
    return __awaiter(this, void 0, void 0, function* () {
        const { container, canvas } = mount(el);
        const timeline = new _1.Timeline({
            canvas,
            container,
            ext: new _1.ExtensionManager({
                breakpointAnimation: {
                    playAnimation: true,
                },
            }),
        });
        timeline.drawInfo.events = events;
        yield timeline.apply();
        timeline.draw();
        return timeline;
    });
}
exports.drawWithAnimation = drawWithAnimation;
function drawFrom(el, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const { container, canvas } = mount(el);
        const timeline = new _1.Timeline({
            canvas,
            container,
            ext: new _1.ExtensionManager({
                breakpointAnimation: {
                    playAnimation: true,
                },
            }),
        });
        yield timeline.drawFrom(data);
        return timeline;
    });
}
exports.drawFrom = drawFrom;
function mount(el) {
    const container = typeof el === 'string'
        ? document.querySelector(el)
        : el;
    container.innerHTML = '';
    container.classList.add('short-night', 'colors', 'container');
    const canvas = document.createElement('canvas');
    container.classList.add('short-night', 'colors', 'canvas');
    container.appendChild(canvas);
    return { container, canvas };
}


/***/ }),

/***/ "./src/themes/colors/extensions/ColorPicker.ts":
/*!*****************************************************!*\
  !*** ./src/themes/colors/extensions/ColorPicker.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const _engine_1 = __webpack_require__(/*! @engine */ "./src/engine/index.ts");
class ColorPicker {
    constructor(etx) {
        this.etx = etx;
        this.colors = ['rgb(213, 57, 38)', 'rgb(252, 200, 29)', 'rgb(0, 163, 201)'];
        this.startIndex = Math.floor(Math.random() * 3);
    }
    onApply(comp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (_engine_1.Timeline.is(comp))
                this.createColor(comp);
            if (_engine_1.EventBody.is(comp)
                || _engine_1.EventMark.is(comp)
                || _engine_1.EventAxis.is(comp))
                this.setColorIntoDrawInfo(comp);
        });
    }
    onConstruct(comp) {
        if (_engine_1.Event.is(comp))
            comp.extraData.mainColor = '#000';
    }
    setColorIntoDrawInfo(comp) {
        const etx = this.etx;
        Object.defineProperty(comp.drawInfo, 'mainColor', {
            get() {
                return etx.getParent(comp).extraData.mainColor;
            },
        });
    }
    createColor(timeline) {
        for (let i = 0; i < timeline.events.length; i++) {
            const colorIndex = (i + this.startIndex) % this.colors.length;
            timeline.events[i].extraData.mainColor = this.colors[colorIndex];
        }
    }
}
exports.default = ColorPicker;


/***/ }),

/***/ "./src/themes/colors/index.ts":
/*!************************************!*\
  !*** ./src/themes/colors/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
console.log('おつ colors!');
__webpack_require__(/*! ./styles.scss */ "./src/themes/colors/styles.scss");
var Timeline_1 = __webpack_require__(/*! ./Timeline */ "./src/themes/colors/Timeline.ts");
exports.Timeline = Timeline_1.default;
var Axis_1 = __webpack_require__(/*! ./Axis */ "./src/themes/colors/Axis/index.ts");
exports.Axis = Axis_1.default;
var AxisScale_1 = __webpack_require__(/*! ./Axis/AxisScale */ "./src/themes/colors/Axis/AxisScale.ts");
exports.AxisScale = AxisScale_1.default;
var AxisMilestone_1 = __webpack_require__(/*! ./Axis/AxisMilestone */ "./src/themes/colors/Axis/AxisMilestone.ts");
exports.AxisMilestone = AxisMilestone_1.default;
var AxisBody_1 = __webpack_require__(/*! ./Axis/AxisBody */ "./src/themes/colors/Axis/AxisBody.ts");
exports.AxisBody = AxisBody_1.default;
var Event_1 = __webpack_require__(/*! ./Event */ "./src/themes/colors/Event/index.ts");
exports.Event = Event_1.default;
var EventMark_1 = __webpack_require__(/*! ./Event/EventMark */ "./src/themes/colors/Event/EventMark.ts");
exports.EventMark = EventMark_1.default;
var EventAxis_1 = __webpack_require__(/*! ./Event/EventAxis */ "./src/themes/colors/Event/EventAxis.ts");
exports.EventAxis = EventAxis_1.default;
var EventBody_1 = __webpack_require__(/*! ./Event/EventBody */ "./src/themes/colors/Event/EventBody.ts");
exports.EventBody = EventBody_1.default;
var Component_1 = __webpack_require__(/*! @engine/common/Component */ "./src/engine/common/Component.ts");
exports.Component = Component_1.default;
var ColorPicker_1 = __webpack_require__(/*! ./extensions/ColorPicker */ "./src/themes/colors/extensions/ColorPicker.ts");
exports.ColorPicker = ColorPicker_1.default;
var extensions_1 = __webpack_require__(/*! @engine/extensions */ "./src/engine/extensions/index.js");
exports.ExtensionManager = extensions_1.ExtensionManager;
exports.BoxElementGenerator = extensions_1.BoxElementGenerator;
exports.GeneratorId = extensions_1.GeneratorId;
exports.PositionCounter = extensions_1.PositionCounter;
exports.BreakpointAnimation = extensions_1.BreakpointAnimation;
exports.ConflictFixer = extensions_1.ConflictFixer;


/***/ }),

/***/ "./src/themes/colors/styles.scss":
/*!***************************************!*\
  !*** ./src/themes/colors/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/themes/colors/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vdmV0by9kaXN0L21vdmVUby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vY2FudmFzLWFzeW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9jYW52YXMtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vY2FudmFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9maWxsZXJzL2RvdC1maWxsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL2ZpbGxlcnMvZmlsbGVyLXV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9maWxsZXJzL2ZpbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vZmlsbGVycy9oYWNodXJlLWZpbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vZmlsbGVycy9oYXRjaC1maWxsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL2ZpbGxlcnMvemlnemFnLWZpbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vZ2VuZXJhdG9yLWFzeW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9nZW5lcmF0b3ItYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vZ2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9nZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vcmVuZGVyZXItZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL3JvdWdoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9zdmctYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL3N2Zy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL3V0aWxzL2hhY2h1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9BeGlzL0F4aXNCb2R5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvQXhpcy9BeGlzTWlsZXN0b25lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvQXhpcy9BeGlzU2NhbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9BeGlzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvRXZlbnQvRXZlbnRBeGlzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvRXZlbnQvRXZlbnRCb2R5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvRXZlbnQvRXZlbnRNYXJrLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvRXZlbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9UaW1lbGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2NvbW1vbi9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9jb21tb24vZGVmaW5pdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9jb21tb24vZnVuY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9Cb3hFbGVtZW50R2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9CcmVha3BvaW50QW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9Db25mbGljdEZpeGVyL0V2ZW50QXhpczJFdmVudEF4aXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9leHRlbnNpb25zL0NvbmZsaWN0Rml4ZXIvRXZlbnRCb2R5MkF4aXNNaWxlc3RvbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9leHRlbnNpb25zL0NvbmZsaWN0Rml4ZXIvRXZlbnRCb2R5MkV2ZW50Qm9keUZsb2F0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9leHRlbnNpb25zL0NvbmZsaWN0Rml4ZXIvRXZlbnRCb2R5MkV2ZW50Qm9keU1vdmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9Db25mbGljdEZpeGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9HZW5lcmF0b3JJZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2V4dGVuc2lvbnMvUG9zaXRpb25Db3VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvc3R5bGVzLnNjc3M/OWY1YiIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9BeGlzL0F4aXNCb2R5LnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvY29sb3JzL0F4aXMvQXhpc01pbGVzdG9uZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9BeGlzL0F4aXNTY2FsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9BeGlzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvY29sb3JzL0V2ZW50L0V2ZW50QXhpcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9FdmVudC9FdmVudEJvZHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lcy9jb2xvcnMvRXZlbnQvRXZlbnRNYXJrLnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvY29sb3JzL0V2ZW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvY29sb3JzL1RpbWVsaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvY29sb3JzL2VudHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvY29sb3JzL2V4dGVuc2lvbnMvQ29sb3JQaWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lcy9jb2xvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lcy9jb2xvcnMvc3R5bGVzLnNjc3M/YzIwNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFBQTtBQUFBO0FBQTJDO0FBQzNDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVEQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0hBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDZCQUE2QixzQkFBc0I7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJCQUEyQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtSEFBbUg7QUFDako7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLDhCQUE4QixtSEFBbUg7QUFDako7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJB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QUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM5QyxNQUFNLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwRixhQUFhO0lBQ2IsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0tBQ3hDLENBQUM7SUFDRixJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDbkIsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUQsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2QsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQzttQkFDOUQsRUFBRSxLQUFLLEVBQUUsQ0FDWDtTQUNSO1FBQ0QsSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLENBQUM7bUJBQzlELEVBQUUsS0FBSyxFQUFFLENBQ1g7U0FDUjtRQUNELE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLENBQUM7ZUFDOUQsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLENBQUMsQ0FDcEU7S0FDSjtJQUNELElBQUksTUFBTSxLQUFLLFFBQVE7UUFBRSxFQUFFLElBQUksTUFBTSxDQUFDO0lBQ3RDLElBQUksTUFBTSxLQUFLLFFBQVE7UUFBRSxFQUFFLElBQUksTUFBTSxDQUFDO0lBQ3RDLElBQUksTUFBTSxLQUFLLENBQUM7UUFBRSxFQUFFLElBQUksTUFBTSxDQUFDO0lBQy9CLElBQUksTUFBTSxLQUFLLENBQUM7UUFBRSxFQUFFLElBQUksTUFBTSxDQUFDO0lBRS9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1VBQ3ZFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FDcEQ7SUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztVQUN2RSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQ3BEO0lBQ0QsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3RCLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO1NBQU0sRUFBRSxzQkFBc0I7UUFDM0IsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ1YsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO1FBQ0QsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ1YsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO1FBQ0QsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ1YsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO1FBQ0QsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ1YsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO0tBQ0o7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBbkZELHdDQW1GQztBQUNELG1CQUEwQixLQUFjLEVBQUUsS0FBYztJQUNwRCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEQsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRixDQUFDO0FBSkQsOEJBSUM7QUFFRDs7S0FFSztBQUNMLGtCQUNJLEVBQXNDLEVBQ3RDLEdBQUcsR0FBRyxFQUFFOztRQUVSLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRyxDQUFDLEdBQUcsR0FBRyxFQUFHLENBQUMsRUFBRSxFQUFFO1lBQzVCLE1BQU0sTUFBTSxHQUFHLE1BQU0sRUFBRSxFQUFFLENBQUM7WUFFMUIsSUFBSSxNQUFNLENBQUMsUUFBUSwrQkFBOEIsRUFBRTtnQkFDL0MsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDbEIsU0FBUzthQUNaO1lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxtQ0FBaUMsQ0FBQyxFQUFFO2dCQUN2RCxzQ0FBb0M7YUFDdkM7WUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLHVCQUEwQixFQUFFO2dCQUMzQyxPQUFPLFVBQVU7b0JBQ2IsQ0FBQztvQkFDRCxDQUFDLHNCQUF5QixDQUM3QjthQUNKO1NBRUo7UUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXJDLENBQUM7Q0FBQTtBQTVCRCw0QkE0QkM7QUFDRDs7Ozs7O0tBTUs7QUFDTCwyQkFBa0MsTUFBYTtJQUMzQyxPQUFPLFVBQVUsU0FBOEIsRUFBRSxHQUFHLE1BQVk7UUFDNUQsSUFBSSxDQUFDLG1CQUFLO1lBQUUsT0FBTztRQUVuQixNQUFNLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQztBQUNOLENBQUM7QUFWRCw4Q0FVQztBQUNEOzs7S0FHSztBQUNMLG9CQUE4QixZQUFjO0lBQ3hDLE1BQU0sU0FBUyxHQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzdELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQWdCLENBQUM7SUFFdkUsd0RBQXdEO0lBQ3hELEtBQUssTUFBTSxJQUFJLElBQUksU0FBUyxFQUFFO1FBQzFCLElBQUksT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ3JDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFRLENBQUM7U0FDeEQ7S0FDSjtJQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBWkQsZ0NBWUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclREOzs7S0FHSztBQUNMO0lBQ0ksWUFBbUIsR0FBb0I7UUFBcEIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7SUFBRyxDQUFDO0lBQzNDOzs7U0FHSztJQUNDLE9BQU8sQ0FBQyxJQUFjOztZQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtnQkFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2xGO1lBRUQsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUMsb0VBQW9FO1lBQ3BFLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDdEQsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXO29CQUFFLFNBQVM7Z0JBRTNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNoRDtZQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDckIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTtnQkFDaEMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJO2dCQUMvQixLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUk7Z0JBQ3JDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSTtnQkFDdkMsTUFBTSxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2FBQzlFLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxTQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFDRDs7U0FFSztJQUNMLFNBQVMsQ0FBQyxJQUFjO1FBQ3BCLE1BQU0sR0FBRyxHQUEwQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUU3RCxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxFQUFFO1lBQzFCLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztDQUVKO0FBM0NELHNDQTJDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREQsNkdBQWtEO0FBQ2xELHlGQUFrQztBQUNsQyxnRkFBMkI7QUFDM0IsZ0dBQXdDO0FBQ3hDLHNGQUFtQztBQUVuQzs7Ozs7Ozs7Ozs7OztLQWFLO0FBQ0wsSUFBWSxVQVFYO0FBUkQsV0FBWSxVQUFVO0lBQ2xCLGlFQUFtRDtJQUNuRCx1RUFBeUQ7SUFDekQsK0RBQWlEO0lBQ2pELHlFQUEyRDtJQUMzRCw2RUFBK0Q7SUFDL0QsbUNBQXFCO0lBQ3JCLDZCQUFlO0FBQ25CLENBQUMsRUFSVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVFyQjtBQTJCRDs7O0tBR0s7QUFDTDtJQUNJLFlBQ1csR0FBb0IsRUFDM0IsRUFBRSxXQUFXLEdBQUUsRUFBRSxFQUFFLGFBQWEsR0FBRSxLQUFLLEtBQStCLEVBQUU7UUFEakUsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFHM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFDLDJCQUEyQixDQUFDO1NBQ3RFO1FBRUQsSUFBSSxtQkFBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLE1BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsTUFBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsR0FBRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7SUFDTCxDQUFDO0lBRUQ7O1NBRUs7SUFDTCxNQUFNLENBQUMsSUFBYztRQUNqQixJQUFJLGtCQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqRTtJQUNMLENBQUM7SUFXRDs7O1NBR0s7SUFDTCxJQUFJO1FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7U0FDbkQ7UUFFRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOztTQUVLO0lBQ0MsS0FBSyxDQUFDLEtBQWlCLEVBQUUsU0FBK0IsRUFBRTs7WUFDNUQsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxHQUFHLEVBQUUsRUFBRSxPQUFPLEdBQUcsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDO1lBRXJFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQUUsT0FBTztZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUVyQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3BCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFcEQsSUFBSSxZQUFZLEVBQUU7b0JBQ2QsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO3dCQUMxQixJQUFJLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDOUIsWUFBWSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUNqRCxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FDeEIsQ0FBQztvQkFDTixDQUFDLENBQUMsQ0FBQztpQkFDTjtnQkFFRCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDckU7WUFFRCxPQUFPLENBQUMsR0FBUyxFQUFFO2dCQUNmLElBQUksT0FBTztvQkFBRSxNQUFNLE9BQU8sRUFBRSxDQUFDO2dCQUM3QixVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBRXhDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFTLEVBQUU7d0JBQ3JCLElBQUksTUFBTTs0QkFBRSxNQUFNLE1BQU0sRUFBRSxDQUFDO3dCQUMzQixVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7d0JBQ3hDLE9BQU8sRUFBRSxDQUFDO3dCQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDdkIsQ0FBQyxFQUFDO2dCQUNOLENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxFQUFDLEVBQUUsQ0FBQztRQUNULENBQUM7S0FBQTtJQUVEOztTQUVLO0lBQ0ssaUJBQWlCLENBQUMsTUFBMkI7UUFDbkQsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFFM0MsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksV0FBVztZQUFFLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUNoRSxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ2pDLE1BQU0sU0FBUyxHQUFHLENBQUMsUUFBb0IsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDckQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUNuQixLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ3hELENBQ0osQ0FBQztZQUVGLE1BQU0sd0JBQXdCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FDOUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDL0MsQ0FBQztZQUVGLE9BQU8sU0FBUyxDQUFDLHdCQUF3QixDQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO1NBQzNFO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNEOzs7U0FHSztJQUNLLGFBQWEsQ0FBQyxLQUFpQixFQUFFLE9BQWdCO1FBQ3ZELElBQUksS0FBSyxLQUFLLFVBQVUsQ0FBQyxRQUFRO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFFOUMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQy9CLENBQUM7O0FBRUQ7O0tBRUs7QUFDRSwrQ0FBMkIsR0FBZ0I7SUFDOUMsVUFBVSxDQUFDLDBCQUEwQjtJQUNyQyxVQUFVLENBQUMsc0JBQXNCO0lBQ2pDLFVBQVUsQ0FBQywyQkFBMkI7SUFDdEMsVUFBVSxDQUFDLDZCQUE2QjtJQUN4QyxVQUFVLENBQUMsUUFBUTtDQUN0QixDQUFDO0FBcklOLHNDQXNJQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTUQsZ0hBQThDO0FBQzlDLDBHQUF3RDtBQUd4RCxrSUFBb0Q7QUFFcEQ7SUFDSSxZQUFtQixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtJQUFHLENBQUM7SUFFckMsR0FBRzs7WUFDTCxNQUFNLGFBQWEsR0FBZSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzFFLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQ2pFO1lBRUQsT0FDSSxhQUFhLENBQUMsSUFBSSxDQUNkLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FDN0UsRUFDSDtnQkFDRSxLQUFLLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRTtvQkFDN0IsTUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FDckMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUNsRCxDQUFDO29CQUNGLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTt3QkFDckIsTUFBTSxPQUFPLEdBQUc7NEJBQ1osV0FBVyxFQUFFLEdBQUc7NEJBQ2hCLFVBQVUsRUFBRTtnQ0FDUixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFFLENBQUMsUUFBUSxDQUFDO2dDQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7Z0NBQ3ZCLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUNwRDt5QkFDSixDQUFDO3dCQUNGLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGdDQUFVLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQzVFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjt3QkFDakQsTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ2xCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUMzQixnQ0FBVSxDQUFDLHNCQUFzQixvQkFFMUIsT0FBTyxJQUNWLE9BQU8sRUFBRSxJQUFJLElBRXBCLENBQUM7d0JBQ0YsTUFBTTtxQkFDVDtpQkFDSjthQUNKO1lBQ0Qsc0NBQW9DO1FBQ3hDLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUUsR0FBYSxFQUFFLEdBQWE7UUFDM0MsSUFBSSxHQUFHLEtBQUssR0FBRztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzlCLE1BQU0sS0FBSyxHQUFRO1lBQ2YsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQ2pFLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDL0QsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNO1NBQ2pFLENBQUM7UUFDRixNQUFNLEtBQUssR0FBUTtZQUNmLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTztZQUNqRSxNQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQy9ELElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTTtTQUNqRSxDQUFDO1FBQ0YsT0FBTywwQkFBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0o7QUEzREQsc0NBMkRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFRCxnSEFBOEM7QUFFOUMsMEdBQW1EO0FBQ25ELGtJQUFvRDtBQUVwRDtJQUNJLFlBQW1CLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO0lBQUcsQ0FBQztJQUVyQyxHQUFHOztZQUNMLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEQsTUFBTSxpQkFBaUIsR0FBbUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUVoRixLQUFLLE1BQU0sU0FBUyxJQUFJLGFBQWEsRUFBRTtnQkFDbkMsS0FBSyxNQUFNLGFBQWEsSUFBSSxpQkFBaUIsRUFBRTtvQkFDM0MsSUFBSSxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQy9ELE1BQU0sT0FBTyxHQUFHOzRCQUNaLFdBQVcsRUFBRSxhQUFhOzRCQUMxQixVQUFVLEVBQUU7Z0NBQ1IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBRSxDQUFDLFFBQVEsQ0FBQztnQ0FDbkMsYUFBYTtnQ0FDYixTQUFTOzZCQUNaO3lCQUNKLENBQUM7d0JBQ0YsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0NBQVUsQ0FBQywwQkFBMEIsRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDaEYsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN2RSxNQUFNLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDeEIsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQzNCLGdDQUFVLENBQUMsMEJBQTBCLG9CQUU5QixPQUFPLElBQ1YsT0FBTyxFQUFFLElBQUksSUFFcEIsQ0FBQztxQkFDTDtpQkFDSjthQUNKO1lBRUQsc0NBQW9DO1FBQ3hDLENBQUM7S0FBQTtDQUNKO0FBbENELDBDQWtDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0QsZ0hBQThDO0FBRTlDLDBHQUFtRDtBQUtuRCxrSUFBb0Q7QUFLcEQ7SUFJSSxZQUFtQixHQUFxQjtRQUFyQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUV4QyxjQUFTLEdBQWMsRUFBRSxDQUFDO1FBQzFCOzthQUVLO1FBQ0wsa0JBQWEsR0FBZ0IsRUFBRSxDQUFDO0lBTlcsQ0FBQztJQVE1QyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQWEsRUFBRSxHQUFhO1FBQzFDLElBQUksR0FBRyxLQUFLLEdBQUc7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUM5QixJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBRS9ELE9BQU8scUJBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDSyxLQUFLLENBQUMsU0FBa0I7O1lBQzFCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FDL0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDekUsQ0FBQztZQUNGLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1lBQzFELFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUN2QyxJQUFJLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQzlCLElBQUksQ0FBQyxRQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQ3JELENBQUM7WUFDRixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFFSyxHQUFHOztZQUVMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzdELElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUNmLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDMUUsQ0FDSjtZQUVELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDN0Isc0NBQW9DO2FBQ3ZDO1lBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRyxDQUFDO1lBRXhDLE1BQU0sT0FBTyxHQUFHO2dCQUNaLFVBQVUsRUFBRTtvQkFDUixJQUFJLENBQUMsUUFBUTtvQkFDYixRQUFRLENBQUMsSUFBSTtvQkFDYixHQUFHLFFBQVEsQ0FBQyxJQUFJO2lCQUNuQjtnQkFDRCxXQUFXLEVBQUUsUUFBUSxDQUFDLElBQUk7YUFDN0IsQ0FBQztZQUVGLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGdDQUFVLENBQUMsNkJBQTZCLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbkYsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUMzQixnQ0FBVSxDQUFDLDZCQUE2QixvQkFFakMsT0FBTyxJQUNWLE9BQU8sRUFBRSxJQUFJLElBRXBCLENBQUM7WUFDRixxQ0FBb0M7UUFFeEMsQ0FBQztLQUFBO0lBRVMsY0FBYztRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN0QixFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDckUsQ0FBQztJQUNOLENBQUM7SUFDUyxhQUFhO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUUxQixLQUFLLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDakMsTUFBTSxRQUFRLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLEVBQWU7Z0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FDMUMsTUFBTSxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLE1BQW1CLENBQUMsQ0FDNUQ7YUFDbkIsQ0FBQztZQUNGLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztDQUVKO0FBekZELDZDQXlGQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0QsMEdBQTZEO0FBQzdELGdIQUE4QztBQUc5QyxrSUFBb0Q7QUFLcEQ7SUFDSSxZQUFtQixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtRQUV2QyxjQUFTLEdBQWMsRUFBRSxDQUFDO1FBQzFCOzthQUVLO1FBQ0wsa0JBQWEsR0FBZSxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFHLElBQUksR0FBa0QsQ0FBQztJQVB4QixDQUFDO0lBUzNDLE1BQU0sQ0FBTyxLQUFLLENBQ2QsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFDMEI7O1lBRW5ELElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtnQkFDZixLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNuQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7MEJBQ2hELEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7MEJBQ3BCLENBQUMsQ0FBQzthQUNYO2lCQUFNO2dCQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ25CLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQzswQkFDaEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzswQkFDcEIsQ0FBQyxDQUFDO2FBQ1g7WUFDRCxNQUFNLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QixDQUFDO0tBQUE7SUFDRCxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQWEsRUFBRSxHQUFhO1FBQzFDLElBQUksR0FBRyxLQUFLLEdBQUc7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUU5QixJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQy9DLE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFjLENBQUM7WUFDaEUsTUFBTSxPQUFPLEdBQUksQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBYyxDQUFDO1lBRTVELEtBQUssZ0RBQWdEO1lBQ2pELENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7bUJBQzlELENBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7c0JBQ3BDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUMzRDtnQkFDSCxPQUFPLElBQUksQ0FBQztTQUVqQjtRQUVELE9BQU8scUJBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFWSxHQUFHOztZQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUM3RCxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUNoQixHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztrQkFDaEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDdkMsQ0FBQyxDQUNMO1lBRUQsT0FBTyxNQUFNLG9CQUFRLENBQUMsR0FBUyxFQUFFO2dCQUFDO29CQUM5QixNQUFNLElBQUksQ0FBQyxTQUFTLEVBQUU7aUJBQ3pCO2NBQUEsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRUQ7O1NBRUs7SUFDVyxTQUFTOztZQUNyQixNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFFbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLHNDQUFvQztZQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUNsQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQ3hDLENBQUM7WUFDRixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUUsNkJBQWdDO1lBRWpFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNoQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUM3QixTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FDdEUsQ0FDSCxDQUFDO1lBRUgsTUFBTSxPQUFPLEdBQUc7Z0JBQ1osVUFBVSxFQUFFO29CQUNSLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQ25DLFFBQVEsQ0FBQyxJQUFJO29CQUNiLEdBQUcsUUFBUSxDQUFDLElBQUk7aUJBQ25CO2dCQUNELFdBQVcsRUFBRSxRQUFRLENBQUMsSUFBSTthQUM3QixDQUFDO1lBRUYsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0NBQVUsQ0FBQywyQkFBMkIsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNqRixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQzNCLGdDQUFVLENBQUMsMkJBQTJCLG9CQUUvQixPQUFPLElBQ1YsT0FBTyxFQUFFLElBQUksSUFFcEIsQ0FBQztZQUVGLHFDQUFvQztRQUV4QyxDQUFDO0tBQUE7SUFDUyxVQUFVLENBQUMsUUFBaUI7UUFDbEMsSUFDSSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO2VBQzNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNuRCxPQUFPLEtBQUssQ0FBQztRQUVmLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxDQUFDO1FBRWhELE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztlQUN6QyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDNUQ7SUFDVCxDQUFDO0lBQ2UsV0FBVyxDQUFDLFFBQWlCOztZQUN6QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUM5RCxNQUFNLFNBQVMsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQWEsQ0FBQztZQUVwRSxlQUFlO1lBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUM7WUFDaEQsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRTVCLHNCQUFzQjtZQUN0QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQy9ELENBQUM7WUFDRixLQUNJLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsRUFDckQsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFDL0IsQ0FBQyxJQUFJLFNBQVMsRUFDaEI7Z0JBQ0UsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7b0JBQ2hELE1BQU0sd0JBQXdCLENBQUMsS0FBSyxDQUFDO3dCQUNqQyxTQUFTO3dCQUNULEtBQUssRUFBRSxHQUFHO3dCQUNWLEtBQUssRUFBRSxJQUFJO3FCQUNkLENBQUMsQ0FBQztpQkFDTjs7b0JBQU0sTUFBTTthQUNoQjtRQUVMLENBQUM7S0FBQTtJQUVlLGFBQWE7O1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUUxQixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTVELEtBQUssTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDakMsTUFBTSxRQUFRLEdBQUc7b0JBQ2IsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUMzQixNQUFNLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQWEsTUFBTSxDQUFDLENBQ3hEO2lCQUNuQixDQUFDO2dCQUNGLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNO29CQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzNEO1FBQ0wsQ0FBQztLQUFBO0lBQ1MsU0FBUyxDQUFDLFFBQWlCO1FBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDdEMsQ0FBQztJQUNEOztTQUVLO0lBQ0ssV0FBVyxDQUFDLFFBQWlCO1FBQ25DLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDN0IsTUFBTSxNQUFNLEdBQUc7WUFDWCxHQUFHLEVBQUUsQ0FBQztZQUNOLE1BQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUNGLE1BQU0sS0FBSyxHQUFlLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUMxQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDbEYsQ0FBQztRQUNGLE1BQU0sS0FBSyxHQUFlLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQ2hELEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDNUUsQ0FBQztRQUVGLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNkLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FDakIsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ25CLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BELE9BQU8sQ0FDSCxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzBCQUNsQixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNOzBCQUN6QixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQzFCLENBQUM7aUJBQ0w7cUJBQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtvQkFDaEMsT0FBTyxDQUFDLENBQ0osS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQzswQkFDL0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDMUMsQ0FBQztpQkFDTDtxQkFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO29CQUMvQixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN2RTtnQkFDRCxNQUFNLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBQyxDQUNMLENBQUM7U0FDTDtRQUNELElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNkLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FDcEIsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ25CLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BELE9BQU8sQ0FDSCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzBCQUNuQixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNOzBCQUMxQixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ3pCLENBQUM7aUJBQ0w7cUJBQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtvQkFDaEMsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDdkU7cUJBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtvQkFDL0IsT0FBTyxDQUNILENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQzswQkFDbEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDekMsQ0FBQztpQkFDTDtnQkFDRCxNQUFNLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBQyxDQUNMLENBQUM7U0FDTDtRQUVELGlDQUFpQztRQUNqQyxJQUFJLE1BQU0sQ0FBQyxHQUFHO1lBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksTUFBTSxDQUFDLE1BQU07WUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRWpDLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDRDs7U0FFSztJQUNLLFVBQVU7UUFDaEIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsMEJBQTBCO1FBRWxELDBCQUEwQjtRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FDdEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsR0FBRyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVk7WUFDekUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7a0JBQ25CLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU07a0JBQ3RCLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2tCQUNqQyxZQUFZO1NBRXJCLENBQUMsQ0FDTCxDQUFDO1FBRUYsTUFBTSxhQUFhLEdBQUcsQ0FBQyxZQUF3QixFQUFFLEVBQUU7WUFDL0MsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUUsT0FBTztZQUV0QywwQkFBMEI7WUFFMUIsd0NBQXdDO1lBQ3hDLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFFLENBQUMsTUFBTSxFQUNoQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ3ZCLENBQUM7WUFDRix1Q0FBdUM7WUFDdkMsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDLEdBQUcsRUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQ3hFLENBQUM7WUFDRixvQkFBb0I7WUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFDLE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUM7Z0JBQ3hDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUVsRCxNQUFNLFFBQVEsR0FDVixHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FDM0Q7Z0JBRUQsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUNyQixPQUFPLENBQUMsTUFBTSxFQUNkLFFBQVEsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUNqQyxDQUFDO2FBQ0w7WUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9DLE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLE1BQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUM7Z0JBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDO2dCQUUxQyxNQUFNLFFBQVEsR0FDVixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNuQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FDakQ7Z0JBRUQsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUNsQixPQUFPLENBQUMsR0FBRyxFQUNYLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUMxQixDQUFDO2FBQ0w7WUFFRCw0QkFBNEI7WUFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ2pELEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQUVGLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwRSxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVyRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztDQUNKO0FBeFRELDJDQXdUQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoVUQsZ0hBQWlEO0FBQ2pELHlGQUFzQztBQUN0QywwR0FBa0Q7QUFDbEQsMkpBQWdFO0FBQ2hFLCtJQUF3RDtBQUN4RCw4SkFBa0U7QUFDbEUsb0tBQXNFO0FBUXRFOzs7O0tBSUs7QUFDTDtJQUNJLFlBQW1CLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBRXZDLFdBQU0sR0FBMkM7WUFDN0MsSUFBSSxpQ0FBdUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3JDLElBQUksNkJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLGtDQUF3QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdEMsSUFBSSxvQ0FBMEIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQzNDLENBQUM7UUFFUSxZQUFPLEdBQUcsQ0FBQyxDQUFDO0lBVG9CLENBQUM7SUFVckMsT0FBTyxDQUFDLFFBQWtCOztZQUM1QixJQUFJLENBQUMsa0JBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUFFLE9BQU87WUFFbkMsb0JBQW9CO1lBQ3BCLElBQUksT0FBTSxJQUFJLENBQUMsTUFBTSxFQUFFLG9DQUFpQyxFQUFFO2dCQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDakIsT0FBTzthQUNWO1lBRUQsNkJBQTZCO1lBRTdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVmLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSwwQkFBMEI7Z0JBQy9DLE1BQU0sR0FBRyxHQUFHLGtCQUFrQixJQUFJLENBQUMsT0FBTyx3QkFBd0IsQ0FBQztnQkFFbkUsSUFBSSxtQkFBSztvQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztvQkFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMxQjtZQUVELE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUM5QyxVQUFVLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsR0FBRzthQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVSLENBQUM7S0FBQTtJQUVEOztTQUVLO0lBQ0MsTUFBTTs7WUFDUixPQUFPLE1BQU0sb0JBQVEsQ0FBQyxHQUFTLEVBQUU7Z0JBQzdCLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUM3QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQ25DO2dCQUNELE9BQU8sT0FBTyxDQUFDO1lBQ25CLENBQUMsRUFBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0NBRUo7QUFsREQsZ0NBa0RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFRCw2R0FBOEM7QUFFOUM7OztLQUdLO0FBQ0w7SUFDSSxZQUFtQixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtJQUFHLENBQUM7SUFDM0M7O1NBRUs7SUFDTCxXQUFXLENBQUMsSUFBYztRQUN0QixNQUFNLFlBQVksR0FDZCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QyxRQUFRLENBQUMsRUFBRSxDQUFDO2FBQ1osS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbkI7UUFDRCw2QkFBNkI7UUFDN0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRTtZQUN4QyxHQUFHLEtBQUssT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ25ELENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRDs7O1NBR0s7SUFDQyxPQUFPLENBQUMsSUFBYzs7WUFDeEIsSUFBSSxtQkFBSztnQkFBUSxNQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEQsQ0FBQztLQUFBO0NBQ0o7QUF2QkQsOEJBdUJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCRCxnRkFBMkI7QUFFM0IsdUdBQStDO0FBQy9DLGlJQUFtRDtBQUNuRCw2R0FBMkM7QUFDM0Msc0ZBQW1DO0FBZW5DOzs7S0FHSztBQUNMO0lBQ0ksWUFBbUIsR0FBb0I7UUFBcEIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFvRzdCLGdCQUFXLEdBQWdCLEVBQUUsQ0FBQztJQXBHRSxDQUFDO0lBRXJDLE9BQU8sQ0FBQyxJQUFjOztZQUN4QixJQUFJLGNBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU8sTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RELElBQUksa0JBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELENBQUM7S0FBQTtJQUNEOztTQUVLO0lBQ0wsU0FBUyxDQUFDLElBQWM7UUFDcEIsT0FBTyxJQUFJLEVBQUU7WUFDVCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUM7WUFFOUUsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDO2dCQUFFLE1BQU07O2dCQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUM7SUFDTCxDQUFDO0lBRUssVUFBVSxDQUFDLElBQVM7O1lBQ3RCLE1BQU0sZUFBZSxHQUFHO2dCQUNwQixJQUFJLENBQUMsSUFBSTtnQkFDVCxHQUFHLElBQUksQ0FBQyxNQUFNO2dCQUNkLEdBQUcsSUFBSSxDQUFDLFVBQVU7YUFDckIsQ0FBQztZQUVGLDRDQUE0QztZQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtzQkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUUsK0JBQStCO29CQUNyRCxDQUFDLENBQVEsRUFBRSxDQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUN6RCxDQUFDLENBQ0osQ0FDSjtZQUVELHNDQUFzQztZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVcsQ0FBQyxDQUFDO1lBRTFFLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTVFLGtCQUFrQjtZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ3BELFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxVQUFVLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTTtnQkFDekMsU0FBUyxFQUFFLFNBQVM7YUFDdkIsQ0FBQyxDQUFDLENBQUM7WUFFSiw2QkFBNkI7WUFFN0IsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0NBQVUsQ0FBQyx1QkFBdUIsRUFBRTtnQkFDaEUsVUFBVSxFQUFFLGVBQWU7YUFDOUIsQ0FBQyxDQUFDO1lBRUgsTUFBTSxVQUFVLEdBQ1osQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUNyQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUNsRSxDQUNKO1lBQ0QsS0FBSyxNQUFNLElBQUksSUFBSSxVQUFVLEVBQUU7Z0JBQzNCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUQsSUFBSSxRQUFRLEtBQUssQ0FBQztvQkFBRSxTQUFTO2dCQUU3QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQUUsQ0FBQyxhQUFhLEVBQUU7b0JBQ2hDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDeEQsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0NBQVUsQ0FBQyx1QkFBdUIsRUFBRTt3QkFDaEUsVUFBVSxFQUFFLGVBQWU7cUJBQzlCLENBQUMsQ0FBQztpQkFDTjtnQkFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUM7YUFDcEM7WUFFRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEQsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0NBQVUsQ0FBQyx1QkFBdUIsRUFBRTtnQkFDaEUsVUFBVSxFQUFFLGVBQWU7YUFDOUIsQ0FBQyxDQUFDO1lBRUgsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXZELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLG9CQUFRLENBQUMsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlFLENBQUM7S0FBQTtJQUNLLFdBQVcsQ0FBQyxRQUFpQjs7WUFDL0IsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUMvQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTdDLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO2dCQUN4QixLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFXLENBQUM7Z0JBQ3RELEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFdkUsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtvQkFDM0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFXLENBQUM7b0JBQ3hELEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVFO2FBQ0o7WUFFRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUQsQ0FBQztLQUFBO0lBR1MsYUFBYSxDQUFDLE1BQWlCO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDUyxhQUFhLENBQUMsR0FBVTtRQUM5QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLEdBQUcsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUMxQixDQUFDLE1BQWEsRUFBRSxNQUFpQixFQUFFLEVBQUU7WUFDakMsT0FBTyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFNLENBQUM7UUFDdEUsQ0FBQyxFQUNELENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztDQUNKO0FBbEhELGtDQWtIQzs7Ozs7Ozs7Ozs7OztBQzVJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0Q7QUFDN0I7QUFDYTtBQUNFO0FBQ1E7QUFDckI7QUFDYztBQUNBO0FBQ0E7QUFDYTtBQUNoQjtBQUNRO0FBQ1E7QUFDWjs7QUFRMUM7O0FBRUY7OztBQUdBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLDJCQUEyQixzQkFBc0IsS0FBSztBQUM3RDtBQUNBO0FBQ0EsU0FBUyw2REFBRTtBQUNYLFNBQVMsNkRBQUU7QUFDWCxTQUFTLDZEQUFFO0FBQ1gsU0FBUyw2REFBRTtBQUNYLFNBQVMsNkRBQUU7QUFDWCxTQUFTLDZEQUFFO0FBQ1gsU0FBUyw2REFBRTtBQUNYLFNBQVMsNkRBQUU7QUFDWCxTQUFTLDZEQUFFO0FBQ1g7QUFDQSwwQkFBMEIsNERBQW1COztBQUU3QztBQUNBO0FBQ0EsWUFBWSxvREFBVztBQUN2QixZQUFZLHdEQUFlO0FBQzNCLFlBQVksc0RBQWE7QUFDekI7QUFDQTs7QUFFQSxRQUFRLGdFQUFLO0FBQ2I7QUFDQSxnQkFBZ0IsMkRBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBSSxrQ0FBa0MsNkRBQUU7QUFDaEQsUUFBUSw2Q0FBSyxrQ0FBa0MsNkRBQUU7QUFDakQsUUFBUSxxREFBUSxrQ0FBa0MsNkRBQUU7QUFDcEQsUUFBUSwwREFBYSxrQ0FBa0MsNkRBQUU7QUFDekQsUUFBUSxzREFBUyxrQ0FBa0MsNkRBQUU7QUFDckQsUUFBUSx1REFBUyxrQ0FBa0MsNkRBQUU7QUFDckQsUUFBUSx1REFBUyxrQ0FBa0MsNkRBQUU7QUFDckQsUUFBUSx1REFBUyxrQ0FBa0MsNkRBQUU7O0FBRXJELGlEQUFpRCxzQkFBc0I7QUFDdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6R0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBRWpELHFFQUF1QjtBQUV2QixtRkFBeUY7QUFBaEYscUNBQU8sQ0FBWTtBQUU1Qiw2RUFBOEU7QUFBckUsNkJBQU8sQ0FBUTtBQUN4QixnR0FBd0Q7QUFBL0MsdUNBQU8sQ0FBYTtBQUM3Qiw0R0FBZ0U7QUFBdkQsK0NBQU8sQ0FBaUI7QUFDakMsNkZBQXNEO0FBQTdDLHFDQUFPLENBQVk7QUFFNUIsZ0ZBQWlGO0FBQXhFLCtCQUFPLENBQVM7QUFDekIsa0dBQXlEO0FBQWhELHVDQUFPLENBQWE7QUFDN0Isa0dBQXlEO0FBQWhELHVDQUFPLENBQWE7QUFDN0Isa0dBQXlEO0FBQWhELHVDQUFPLENBQWE7QUFFN0Isb0dBQTBEO0FBQWpELHVDQUFPLENBQWE7QUFDN0IsK0ZBUXNCO0FBUGxCLHdEQUFnQjtBQUNoQiw4REFBbUI7QUFDbkIsOENBQVc7QUFDWCxzREFBZTtBQUNmLDhEQUFtQjtBQUNuQixrREFBYTs7Ozs7Ozs7Ozs7OztBQ3RCakIsY0FBYyxtQkFBTyxDQUFDLHVNQUFxRzs7QUFFM0gsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7QUNuQmYsMkVBQWtDO0FBRWxDLGNBQThCLFNBQVEsTUFBTSxDQUFDLFFBQVE7SUFBckQ7O1FBQ0ksVUFBSyxHQUFHLFFBQVEsQ0FBQztJQXFCckIsQ0FBQztJQW5CRyxJQUFJO1FBQ0EsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFFOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDL0IsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDckIsR0FBRyxDQUFDLENBQUMsRUFDTCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUNyQixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQ2xCO1lBQ0ksV0FBVyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1lBQ3RCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsVUFBVSxFQUFFLENBQUM7WUFDYixTQUFTLEVBQUUsR0FBRztTQUNqQixDQUNKLENBQUM7UUFFRixPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBRUo7QUF0QkQsMkJBc0JDOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkQsMkVBQWtDO0FBRWxDLG1CQUFtQyxTQUFRLE1BQU0sQ0FBQyxhQUFhO0lBQS9EOztRQUNJLFVBQUssR0FBRyxRQUFRLENBQUM7SUEyQnJCLENBQUM7SUF6QkcsSUFBSTtRQUNBLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBRTlCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQ3BDLEdBQUcsQ0FBQyxDQUFDLEVBQ0wsR0FBRyxDQUFDLENBQUMsRUFDTCxHQUFHLENBQUMsS0FBSyxFQUNULEdBQUcsQ0FBQyxNQUFNLEVBQ1Y7WUFDSSxNQUFNLEVBQUUsTUFBTTtZQUNkLFdBQVcsRUFBRSxHQUFHO1lBRWhCLElBQUksRUFBRSxNQUFNO1lBQ1osVUFBVSxFQUFFLEdBQUc7WUFDZixTQUFTLEVBQUUsT0FBTztZQUVsQixVQUFVLEVBQUUsQ0FBQztZQUNiLFNBQVMsRUFBRSxHQUFHO1lBQ2QsTUFBTSxFQUFFLEdBQUc7U0FDZCxDQUNKLENBQUM7UUFFRixPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBRUo7QUE1QkQsZ0NBNEJDOzs7Ozs7Ozs7Ozs7Ozs7QUM5QkQsMkVBQWtDO0FBQ2xDLGVBQStCLFNBQVEsTUFBTSxDQUFDLFNBQVM7SUFBdkQ7O1FBQ0ksVUFBSyxHQUFHLFFBQVEsQ0FBQztJQTJCckIsQ0FBQztJQXpCRyxJQUFJO1FBQ0EsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFFOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDcEMsR0FBRyxDQUFDLENBQUMsRUFDTCxHQUFHLENBQUMsQ0FBQyxFQUNMLEdBQUcsQ0FBQyxLQUFLLEVBQ1QsR0FBRyxDQUFDLE1BQU0sRUFDVjtZQUNJLFdBQVcsRUFBRSxDQUFDO1lBQ2QsTUFBTSxFQUFFLGVBQWU7WUFFdkIsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxPQUFPO1lBRWxCLFVBQVUsRUFBRSxDQUFDO1lBQ2IsU0FBUyxFQUFFLENBQUM7WUFDWixNQUFNLEVBQUUsQ0FBQztTQUNaLENBQ0osQ0FBQztRQUVGLE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Q0FFSjtBQTVCRCw0QkE0QkM7Ozs7Ozs7Ozs7Ozs7OztBQzdCRCwyRUFBa0M7QUFDbEMsaUdBQWtDO0FBQ2xDLGdIQUE0QztBQUM1QyxvR0FBb0M7QUFFcEMsVUFBMEIsU0FBUSxNQUFNLENBQUMsSUFBSTtJQUE3Qzs7UUFDSSxVQUFLLEdBQUcsUUFBUSxDQUFDO1FBRWpCLG9CQUFlLEdBQUcsa0JBQVEsQ0FBQztRQUMzQix5QkFBb0IsR0FBRyx1QkFBYSxDQUFDO1FBQ3JDLHFCQUFnQixHQUFHLG1CQUFTLENBQUM7SUFFakMsQ0FBQztDQUFBO0FBUEQsdUJBT0M7Ozs7Ozs7Ozs7Ozs7OztBQ1pELDJFQUFrQztBQUVsQyxlQUErQixTQUFRLE1BQU0sQ0FBQyxTQUFTO0lBQXZEOztRQUNJLFVBQUssR0FBRyxRQUFRLENBQUM7UUFDakIsYUFBUSxHQUFzRCxNQUFNLENBQUMsTUFBTSxDQUN2RSxFQUFFLEVBQ0YsSUFBSSxDQUFDLFFBQVEsRUFDYixFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FDcEIsQ0FBQztJQTBDTixDQUFDO0lBeENHLElBQUk7UUFDQSxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDeEIsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQ3JDO1lBQ0ksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDMUU7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Z0JBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3RDO1lBQ0Q7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Z0JBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUM7YUFDMUU7U0FDSixFQUNEO1lBQ0ksV0FBVztZQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFFL0IsU0FBUyxFQUFFLEdBQUc7WUFDZCxNQUFNLEVBQUUsQ0FBQztTQUNaLENBQ0osQ0FBQztRQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQzFELE1BQU0sRUFDTjtZQUNJLFdBQVc7WUFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTO1lBRS9CLFNBQVMsRUFBRSxHQUFHO1NBQ2pCLENBQ0osQ0FBQztRQUVGLE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Q0FFSjtBQWhERCw0QkFnREM7Ozs7Ozs7Ozs7Ozs7OztBQ2xERCwyRUFBa0M7QUFDbEMsNEdBQXFEO0FBRXJELGVBQStCLFNBQVEsTUFBTSxDQUFDLFNBQVM7SUFBdkQ7O1FBRUksVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUNqQixhQUFRLEdBQXNELE1BQU0sQ0FBQyxNQUFNLENBQ3ZFLEVBQUUsRUFDRixJQUFJLENBQUMsUUFBUSxFQUNiLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUNwQixDQUFDO0lBb0NOLENBQUM7SUFsQ0csSUFBSTtRQUNBLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN4QixNQUFNLEdBQUcsR0FBRyxxQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQ3BDLEdBQUcsQ0FBQyxDQUFDLEVBQ0wsR0FBRyxDQUFDLENBQUMsRUFDTCxHQUFHLENBQUMsS0FBSyxFQUNULEdBQUcsQ0FBQyxNQUFNLEVBQ1Y7WUFDSSxXQUFXLEVBQUUsQ0FBQztZQUNkLE1BQU0sRUFBRSxrQkFBa0I7WUFFMUIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUztZQUM3QixVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxPQUFPO1NBQ3JCLENBQ0osQ0FBQztRQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDbkM7WUFDSSxXQUFXO1lBQ1gsU0FBUyxFQUFFLEdBQUc7WUFDZCxNQUFNLEVBQUUsR0FBRztZQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7U0FDbEMsQ0FDSixDQUFDO1FBRUYsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBM0NELDRCQTJDQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUNELDJFQUFrQztBQUVsQyxlQUErQixTQUFRLE1BQU0sQ0FBQyxTQUFTO0lBQXZEOztRQUNJLFVBQUssR0FBRyxRQUFRLENBQUM7UUFDakIsYUFBUSxHQUFzRCxNQUFNLENBQUMsTUFBTSxDQUN2RSxFQUFFLEVBQ0YsSUFBSSxDQUFDLFFBQVEsRUFDYixFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FDcEIsQ0FBQztJQXNCTixDQUFDO0lBcEJHLElBQUk7UUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQ25CO1lBQ0ksV0FBVyxFQUFFLENBQUM7WUFDZCxNQUFNLEVBQUUsa0JBQWtCO1lBRTFCLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFDN0IsVUFBVSxFQUFFLEdBQUc7WUFDZixTQUFTLEVBQUUsT0FBTztZQUVsQixTQUFTLEVBQUUsR0FBRztTQUNqQixDQUNKLENBQUM7UUFFRixPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBRUo7QUE1QkQsNEJBNEJDOzs7Ozs7Ozs7Ozs7Ozs7QUM5QkQsMkVBQWtDO0FBQ2xDLHFHQUFvQztBQUNwQyxxR0FBb0M7QUFDcEMscUdBQW9DO0FBRXBDLFdBQTJCLFNBQVEsTUFBTSxDQUFDLEtBQUs7SUFBL0M7O1FBQ0ksVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUVqQixvQkFBZSxHQUFHLG1CQUFTLENBQUM7UUFDNUIsb0JBQWUsR0FBRyxtQkFBUyxDQUFDO1FBQzVCLG9CQUFlLEdBQUcsbUJBQVMsQ0FBQztJQUVoQyxDQUFDO0NBQUE7QUFQRCx3QkFPQzs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsNEZBQThCO0FBQzlCLDJFQUFrQztBQUNsQyxzRkFBMEI7QUFDMUIseUZBQTRCO0FBRTVCLDJIQUFtRDtBQUVuRCxjQUE4QixTQUFRLE1BQU0sQ0FBQyxRQUFRO0lBQ2pELFlBQVksSUFBMkM7UUFDbkQsS0FBSyxpQkFDRCxJQUFJLG9CQUNHLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxJQUM5QixXQUFXLEVBQUUsQ0FBQyxFQUNkLFNBQVMsRUFBRSxDQUFDLEVBQ1osU0FBUyxFQUFFLEVBQUUsS0FFakIsR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDLGdCQUFnQixJQUM3QixJQUFJLEVBQ1QsQ0FBQztRQVFQLFVBQUssR0FBRyxRQUFRLENBQUM7UUFFakIsb0JBQWUsR0FBRyxjQUFJLENBQUM7UUFDdkIscUJBQWdCLEdBQUcsZUFBSyxDQUFDO1FBVHJCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDcEIsSUFBSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDNUIsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFnQixDQUFDO0lBQ2hGLENBQUM7Q0FNSjtBQXZCRCwyQkF1QkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJELHlFQUFnRDtBQUVoRCxjQUNJLEVBQXdCLEVBQ3hCLE1BQXFDOztRQUVyQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFdBQVEsQ0FBQztZQUMxQixNQUFNO1lBQ04sU0FBUztZQUNULEdBQUcsRUFBRSxJQUFJLG1CQUFnQjtTQUM1QixDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDbEMsTUFBTSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7Q0FBQTtBQWZELG9CQWVDO0FBRUQsMkJBQ0ksRUFBd0IsRUFDeEIsTUFBcUM7O1FBRXJDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksV0FBUSxDQUFDO1lBQzFCLE1BQU07WUFDTixTQUFTO1lBQ1QsR0FBRyxFQUFFLElBQUksbUJBQWdCLENBQUM7Z0JBQ3RCLG1CQUFtQixFQUFFO29CQUNqQixhQUFhLEVBQUUsSUFBSTtpQkFDdEI7YUFDSixDQUFDO1NBQ0wsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLE1BQU0sUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0NBQUE7QUFuQkQsOENBbUJDO0FBRUQsa0JBQ0ksRUFBd0IsRUFDeEIsSUFBUzs7UUFFVCxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFdBQVEsQ0FBQztZQUMxQixNQUFNO1lBQ04sU0FBUztZQUNULEdBQUcsRUFBRSxJQUFJLG1CQUFnQixDQUFDO2dCQUN0QixtQkFBbUIsRUFBRTtvQkFDakIsYUFBYSxFQUFFLElBQUk7aUJBQ3RCO2FBQ0osQ0FBQztTQUNMLENBQUMsQ0FBQztRQUVILE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0NBQUE7QUFqQkQsNEJBaUJDO0FBRUQsZUFBZSxFQUFtQjtJQUM5QixNQUFNLFNBQVMsR0FBZSxPQUFPLEVBQUUsS0FBSyxRQUFRO1FBQ2hELENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBaUI7UUFDNUMsQ0FBQyxDQUFDLEVBQWlCLENBQ3RCO0lBQ0QsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDekIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUU5RCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztJQUNyRSxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRTNELFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFOUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUVqQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFRCw4RUFBc0Y7QUFFdEY7SUFHSSxZQUFtQixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtRQUZ2QyxXQUFNLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3ZFLGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNELENBQUM7SUFDckMsT0FBTyxDQUFDLElBQWM7O1lBQ3hCLElBQUksa0JBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsSUFDSSxtQkFBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bUJBQ2YsbUJBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21CQUNsQixtQkFBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDO0tBQUE7SUFFRCxXQUFXLENBQUMsSUFBYztRQUN0QixJQUFJLGVBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQzFELENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxJQUFrQztRQUNuRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRXJCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUU7WUFDOUMsR0FBRztnQkFDQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUNuRCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUFpQjtRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQzlELFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0wsQ0FBQztDQUNKO0FBakNELDhCQWlDQzs7Ozs7Ozs7Ozs7Ozs7O0FDcENELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFMUIsNEVBQXVCO0FBRXZCLDBGQUFpRDtBQUF4QyxxQ0FBTyxDQUFZO0FBRTVCLG9GQUF5QztBQUFoQyw2QkFBTyxDQUFRO0FBQ3hCLHVHQUF3RDtBQUEvQyx1Q0FBTyxDQUFhO0FBQzdCLG1IQUFnRTtBQUF2RCwrQ0FBTyxDQUFpQjtBQUNqQyxvR0FBc0Q7QUFBN0MscUNBQU8sQ0FBWTtBQUU1Qix1RkFBMkM7QUFBbEMsK0JBQU8sQ0FBUztBQUN6Qix5R0FBeUQ7QUFBaEQsdUNBQU8sQ0FBYTtBQUM3Qix5R0FBeUQ7QUFBaEQsdUNBQU8sQ0FBYTtBQUM3Qix5R0FBeUQ7QUFBaEQsdUNBQU8sQ0FBYTtBQUU3QiwwR0FBZ0U7QUFBdkQsdUNBQU8sQ0FBYTtBQUU3Qix5SEFBa0U7QUFBekQsMkNBQU8sQ0FBZTtBQUMvQixxR0FPNEI7QUFOeEIsd0RBQWdCO0FBQ2hCLDhEQUFtQjtBQUNuQiw4Q0FBVztBQUNYLHNEQUFlO0FBQ2YsOERBQW1CO0FBQ25CLGtEQUFhOzs7Ozs7Ozs7Ozs7O0FDeEJqQixjQUFjLG1CQUFPLENBQUMsb05BQTJHOztBQUVqSSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImNvbG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZG9jcy9jb2xvcnMudHNcIik7XG4iLCJpbXBvcnQgeyBkcmF3LCBkcmF3RnJvbSwgZHJhd1dpdGhBbmltYXRpb24gfSBmcm9tICdAL3RoZW1lcy9jb2xvcnMvZW50cnknO1xuXG5jb25zdCBldmVudHMgPSBbe1xuICAgIGRhdGUgOm5ldyBEYXRlKCcyMDE0LTUnKSxcbiAgICB0aXRsZTon5byA5aeLIOiHquWtpldlYuW8gOWPkScsXG59LCB7XG4gICAgdGl0bGU6J+WFpeWtpiDpnZLlspvnkIblt6XlpKflraYnLFxuICAgIGRhdGUgOm5ldyBEYXRlKCcyMDE0LTktMScpLFxuICAgIGVuZERhdGUgOm5ldyBEYXRlKCcyMDE4LTctMjknKSxcbn0sIHtcbiAgICBkYXRlIDpuZXcgRGF0ZSgnMjAxNC0xMicpLFxuICAgIHRpdGxlOifpnZLnkIZXZWLlvIDlj5HljY/kvJonLFxuICAgIHRleHQgOifliJvlu7rpnZLnkIZXZWLlvIDlj5HljY/kvJrvvIzmi4XlvZPkvJrplb8nLFxuICAgIGVuZERhdGUgOm5ldyBEYXRlKCcyMDE2LTYnKSxcbiAgICBlbmRUZXh0IDon5Y2P5Lya5o2i5bGKJyxcbn0sIHtcbiAgICBkYXRlIDpuZXcgRGF0ZSgnMjAxNS02JyksXG4gICAgdGl0bGU6J+azqOWGjCDpnZLlspvljZPnhLbni6znq4vnvZHnu5znp5HmioDmnInpmZDlhazlj7gnLFxuICAgIGVuZERhdGUgOm5ldyBEYXRlKCcyMDE3LTYtMTknKSxcbn0sIHtcbiAgICB0aXRsZSA6JzM2MOWJjeerr+aYn+iuoeWIkicsXG4gICAgdGV4dCA6J+OAijM2MOWJjeerr+aYn+iuoeWIkuOAi+eUsTM2MOWJjeerr+WboumYn+WSjOagoeWbreaLm+iBmOWboumYn+WQiOWKnu+8jOmdouWQkeWcqOagoeWkp+WtpueUn++8jOS4uuWfueWFu+acgOS8mOengOacgOaciea9nOWKm+eahOWJjeerr+S6uuaJjeS4vuWKnueahOWJjeerr+aKgOacr+ezu+WIl+ivvueoiycsXG4gICAgZGF0ZSA6bmV3IERhdGUoJzIwMTctNC05JyksXG4gICAgZW5kRGF0ZSA6bmV3IERhdGUoJzIwMTctNC0xNCcpLFxuICAgIGZvbGRlZDogdHJ1ZSxcbn0sIHtcbiAgICB0aXRsZSA6J01vemlsbGEg5a6e5LmgJyxcbiAgICBkYXRlIDpuZXcgRGF0ZSgnMjAxNy03LTE0JyksXG4gICAgZW5kRGF0ZSA6bmV3IERhdGUoJzIwMTgtMi05JyksXG59LCB7XG4gICAgdGl0bGUgOifnmb7luqYgS0lUVC5BSSDlrp7kuaAnLFxuICAgIGRhdGUgOm5ldyBEYXRlKCcyMDE4LTMtMjEnKSxcbiAgICBlbmREYXRlIDpuZXcgRGF0ZSgnMjAxOC01LTI4JyksXG4gICAgZW5kVGV4dCA6ICdUZWFtIOiiq+ino+aVoycsXG59LCB7XG4gICAgdGl0bGUgOidLSVRULkFJIOWboumYnyAy5YCN566A5Y2V5aWWJyxcbiAgICBkYXRlIDpuZXcgRGF0ZSgnMjAxOC02LTI5JyksXG59LCB7XG4gICAgdGl0bGUgOifnmb7luqYgU1dBTiDlm6LpmJ8nLFxuICAgIGRhdGUgOm5ldyBEYXRlKCcyMDE4LTctNCcpLFxuICAgIGVuZERhdGUgOidub3cnIGFzICdub3cnLFxufSwge1xuICAgIHRpdGxlIDonTW96aWxsYSDlrp7kuaAgMTIzJyxcbiAgICBkYXRlIDpuZXcgRGF0ZSgnMjAxNy05LTEwJyksXG59LCB7XG4gICAgdGl0bGUgOidNb3ppbGxhIOWunuS5oCAyMzMnLFxuICAgIGRhdGUgOm5ldyBEYXRlKCcyMDE3LTgtMTAnKSxcbn0sIHtcbiAgICB0aXRsZTonMjAxNS03LTI1JyxcbiAgICBkYXRlIDpuZXcgRGF0ZSgnMjAxNS03LTI1JyksXG59LCB7XG4gICAgdGl0bGU6JzIwMTUtMScsXG4gICAgZGF0ZSA6bmV3IERhdGUoJzIwMTUtMScpLFxufSwge1xuICAgIHRpdGxlOicyMDE1LTUnLFxuICAgIGRhdGUgOm5ldyBEYXRlKCcyMDE1LTUtMScpLFxufV07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gICAgLy8gTm9ybWFsIGRyYXdcbiAgICBjb25zdCB0aW1lbGluZTEgPSBhd2FpdCBkcmF3KCcjYXBwJywgZXZlbnRzKTtcblxuICAgIC8vIC8vIERyYXcgd2l0aCBhbmltYXRpb25cbiAgICAvLyBhd2FpdCBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociwgNTAwKSk7XG4gICAgLy8gdGltZWxpbmUxLmhpZGUoKTtcbiAgICAvLyBjb25zdCB0aW1lbGluZTIgPSBhd2FpdCBkcmF3V2l0aEFuaW1hdGlvbignI2FwcCcsIGV2ZW50cyk7XG4gICAgLy9cbiAgICAvLyAvLyBEcmF3IHdpdGggYSBkYXRhIG9mIG9uZSB0aW1lbGluZSBleHBvcnRcbiAgICAvLyBhd2FpdCBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociwgNTAwKSk7XG4gICAgLy8gdGltZWxpbmUyLmhpZGUoKTtcbiAgICAvLyBhd2FpdCBkcmF3RnJvbSgnI2FwcCcsIHRpbWVsaW5lMS5leHBvcnQoKSk7XG59KTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNob3J0LW5pZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIC5zaG9ydC1uaWdodCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgLnNob3J0LW5pZ2h0LmF4aXNfbWlsZXN0b25lIHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7IH1cXG4gIC5zaG9ydC1uaWdodC5ldmVudF9ib2R5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgcGFkZGluZzogN3B4IDEwcHggN3B4IDVweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gICAgLnNob3J0LW5pZ2h0LmV2ZW50X2JvZHkuZm9sZGVkIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAuc2hvcnQtbmlnaHQuZXZlbnRfYm9keS5mb2xkZWQgLmZvbGRQbGFjZWhvbGRlciB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgICAuc2hvcnQtbmlnaHQuZXZlbnRfYm9keSAudGl0bGUsIC5zaG9ydC1uaWdodC5ldmVudF9ib2R5IC5mb2xkUGxhY2Vob2xkZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG4gICAgLnNob3J0LW5pZ2h0LmV2ZW50X2JvZHkgLmRhdGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMC42ZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG4gICAgLnNob3J0LW5pZ2h0LmV2ZW50X2JvZHkgLmZvbGRQbGFjZWhvbGRlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLnNob3J0LW5pZ2h0LmVuZFRleHQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDAgMCAycHggM3B4O1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICB0ZXh0LWluZGVudDogMC41ZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zaG9ydC1uaWdodC5jb2xvcnMuYXhpc19taWxlc3RvbmUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6ICMzMzM7XFxuICBwYWRkaW5nOiAycHggN3B4OyB9XFxuXFxuLnNob3J0LW5pZ2h0LmNvbG9ycy5ldmVudF9ib2R5IHtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuICAuc2hvcnQtbmlnaHQuY29sb3JzLmV2ZW50X2JvZHkgLnRpdGxlLCAuc2hvcnQtbmlnaHQuY29sb3JzLmV2ZW50X2JvZHkgLmZvbGRQbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cXG4gIC5zaG9ydC1uaWdodC5jb2xvcnMuZXZlbnRfYm9keSAuZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMC42ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qIVxuICogTW92ZVRvIC0gQSBsaWdodHdlaWdodCBzY3JvbGwgYW5pbWF0aW9uIGphdmFzY3JpcHQgbGlicmFyeSB3aXRob3V0IGFueSBkZXBlbmRlbmN5LlxuICogVmVyc2lvbiAxLjcuNCAoMjgtMDktMjAxOCAxNjowMilcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICogQ29weXJpZ2h0IDIwMTggSGFzYW4gQXlkb8SfZHUgPGhzbmF5ZGRAZ21haWwuY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcbnZhciBNb3ZlVG8gPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEZWZhdWx0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgdmFyIGRlZmF1bHRzID0ge1xuICAgIHRvbGVyYW5jZTogMCxcbiAgICBkdXJhdGlvbjogODAwLFxuICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFydCcsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKCkge30gfTtcblxuXG4gIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGVhc2VPdXRRdWFydCBFYXNpbmcgRnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHQgLSBjdXJyZW50IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGIgLSBzdGFydCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSAge251bWJlcn0gYyAtIGNoYW5nZSBpbiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSAge251bWJlcn0gZCAtIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHJldHVybiB7bnVtYmVyfSAtIGNhbGN1bGF0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgZnVuY3Rpb24gZWFzZU91dFF1YXJ0KHQsIGIsIGMsIGQpIHtcbiAgICB0IC89IGQ7XG4gICAgdC0tO1xuICAgIHJldHVybiAtYyAqICh0ICogdCAqIHQgKiB0IC0gMSkgKyBiO1xuICB9XG5cbiAgLyoqXG4gICAgICogTWVyZ2UgdHdvIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvYmoxXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvYmoyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBtZXJnZWQgb2JqZWN0XG4gICAgICovXG4gIGZ1bmN0aW9uIG1lcmdlT2JqZWN0KG9iajEsIG9iajIpIHtcbiAgICB2YXIgb2JqMyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKG9iajEpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgb2JqM1twcm9wZXJ0eU5hbWVdID0gb2JqMVtwcm9wZXJ0eU5hbWVdO1xuICAgIH0pO1xuXG4gICAgT2JqZWN0LmtleXMob2JqMikuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICBvYmozW3Byb3BlcnR5TmFtZV0gPSBvYmoyW3Byb3BlcnR5TmFtZV07XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajM7XG4gIH07XG5cbiAgLyoqXG4gICAgICAqIENvbnZlcnRzIGNhbWVsIGNhc2UgdG8ga2ViYWIgY2FzZVxuICAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbCB0aGUgdmFsdWUgdG8gYmUgY29udmVydGVkXG4gICAgICAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGNvbnZlcnRlZCB2YWx1ZVxuICAgICAgKi9cbiAgZnVuY3Rpb24ga2ViYWJDYXNlKHZhbCkge1xuICAgIHJldHVybiB2YWwucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbiAoJDEpIHtcbiAgICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgICAgKiBNb3ZlVG8gQ29uc3RydWN0b3JcbiAgICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT3B0aW9uc1xuICAgICAgKiBAcGFyYW0ge29iamVjdH0gZWFzZUZ1bmN0aW9ucyBDdXN0b20gZWFzZSBmdW5jdGlvbnNcbiAgICAgICovXG4gIGZ1bmN0aW9uIE1vdmVUbygpIHt2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307dmFyIGVhc2VGdW5jdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT2JqZWN0KGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLmVhc2VGdW5jdGlvbnMgPSBtZXJnZU9iamVjdCh7IGVhc2VPdXRRdWFydDogZWFzZU91dFF1YXJ0IH0sIGVhc2VGdW5jdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSBkb20gZWxlbWVudCBhcyB0cmlnZ2VyXG4gICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGRvbSBEb20gdHJpZ2dlciBlbGVtZW50XG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb258dm9pZH0gdW5yZWdpc3RlciBmdW5jdGlvblxuICAgICAqL1xuICBNb3ZlVG8ucHJvdG90eXBlLnJlZ2lzdGVyVHJpZ2dlciA9IGZ1bmN0aW9uIChkb20sIGNhbGxiYWNrKSB7dmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAoIWRvbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBocmVmID0gZG9tLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8IGRvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgLy8gVGhlIGVsZW1lbnQgdG8gYmUgc2Nyb2xsZWRcbiAgICB2YXIgdGFyZ2V0ID0gaHJlZiAmJiBocmVmICE9PSAnIycgP1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYuc3Vic3RyaW5nKDEpKSA6XG4gICAgZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgb3B0aW9ucyA9IG1lcmdlT2JqZWN0KHRoaXMub3B0aW9ucywgX2dldE9wdGlvbnNGcm9tVHJpZ2dlckRvbShkb20sIHRoaXMub3B0aW9ucykpO1xuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0aW9ucy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIF90aGlzLm1vdmUodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIsIGZhbHNlKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7cmV0dXJuIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyLCBmYWxzZSk7fTtcbiAgfTtcblxuICAvKipcbiAgICAgICogTW92ZVxuICAgICAgKiBTY3JvbGxzIHRvIGdpdmVuIGVsZW1lbnQgYnkgdXNpbmcgZWFzZU91dFF1YXJ0IGZ1bmN0aW9uXG4gICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fG51bWJlcn0gdGFyZ2V0IFRhcmdldCBlbGVtZW50IHRvIGJlIHNjcm9sbGVkIG9yIHRhcmdldCBwb3NpdGlvblxuICAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgQ3VzdG9tIG9wdGlvbnNcbiAgICAgICovXG4gIE1vdmVUby5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHt2YXIgX3RoaXMyID0gdGhpczt2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgaWYgKHRhcmdldCAhPT0gMCAmJiAhdGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG1lcmdlT2JqZWN0KHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICB2YXIgZGlzdGFuY2UgPSB0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJyA/IHRhcmdldCA6IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgdmFyIGZyb20gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgdmFyIHN0YXJ0VGltZSA9IG51bGw7XG4gICAgdmFyIGxhc3RQYWdlWU9mZnNldCA9IHZvaWQgMDtcbiAgICBkaXN0YW5jZSAtPSBvcHRpb25zLnRvbGVyYW5jZTtcblxuICAgIC8vIHJBRiBsb29wXG4gICAgdmFyIGxvb3AgPSBmdW5jdGlvbiBsb29wKGN1cnJlbnRUaW1lKSB7XG4gICAgICB2YXIgY3VycmVudFBhZ2VZT2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgICBpZiAoIXN0YXJ0VGltZSkge1xuICAgICAgICAvLyBUbyBzdGFydHMgdGltZSBmcm9tIDEsIHdlIHN1YnRyYWN0ZWQgMSBmcm9tIGN1cnJlbnQgdGltZVxuICAgICAgICAvLyBJZiB0aW1lIHN0YXJ0cyBmcm9tIDEgVGhlIGZpcnN0IGxvb3Agd2lsbCBub3QgZG8gYW55dGhpbmcsXG4gICAgICAgIC8vIGJlY2F1c2UgZWFzaW5nIHZhbHVlIHdpbGwgYmUgemVyb1xuICAgICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZSAtIDE7XG4gICAgICB9XG5cbiAgICAgIHZhciB0aW1lRWxhcHNlZCA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xuXG4gICAgICBpZiAobGFzdFBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgZGlzdGFuY2UgPiAwICYmIGxhc3RQYWdlWU9mZnNldCA+IGN1cnJlbnRQYWdlWU9mZnNldCB8fFxuICAgICAgICBkaXN0YW5jZSA8IDAgJiYgbGFzdFBhZ2VZT2Zmc2V0IDwgY3VycmVudFBhZ2VZT2Zmc2V0KVxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMuY2FsbGJhY2sodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGFzdFBhZ2VZT2Zmc2V0ID0gY3VycmVudFBhZ2VZT2Zmc2V0O1xuXG4gICAgICB2YXIgdmFsID0gX3RoaXMyLmVhc2VGdW5jdGlvbnNbb3B0aW9ucy5lYXNpbmddKFxuICAgICAgdGltZUVsYXBzZWQsIGZyb20sIGRpc3RhbmNlLCBvcHRpb25zLmR1cmF0aW9uKTtcblxuXG4gICAgICB3aW5kb3cuc2Nyb2xsKDAsIHZhbCk7XG5cbiAgICAgIGlmICh0aW1lRWxhcHNlZCA8IG9wdGlvbnMuZHVyYXRpb24pIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgZGlzdGFuY2UgKyBmcm9tKTtcbiAgICAgICAgb3B0aW9ucy5jYWxsYmFjayh0YXJnZXQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICB9O1xuXG4gIC8qKlxuICAgICAgKiBBZGRzIGN1c3RvbSBlYXNlIGZ1bmN0aW9uXG4gICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgIG5hbWUgRWFzZSBmdW5jdGlvbiBuYW1lXG4gICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuICAgRWFzZSBmdW5jdGlvblxuICAgICAgKi9cbiAgTW92ZVRvLnByb3RvdHlwZS5hZGRFYXNlRnVuY3Rpb24gPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICB0aGlzLmVhc2VGdW5jdGlvbnNbbmFtZV0gPSBmbjtcbiAgfTtcblxuICAvKipcbiAgICAgICogUmV0dXJucyBvcHRpb25zIHdoaWNoIGNyZWF0ZWQgZnJvbSB0cmlnZ2VyIGRvbSBlbGVtZW50XG4gICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBkb20gVHJpZ2dlciBkb20gZWxlbWVudFxuICAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgVGhlIGluc3RhbmNlJ3Mgb3B0aW9uc1xuICAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBvcHRpb25zIHdoaWNoIGNyZWF0ZWQgZnJvbSB0cmlnZ2VyIGRvbSBlbGVtZW50XG4gICAgICAqL1xuICBmdW5jdGlvbiBfZ2V0T3B0aW9uc0Zyb21UcmlnZ2VyRG9tKGRvbSwgb3B0aW9ucykge1xuICAgIHZhciBkb21PcHRpb25zID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGRvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbXQtJyArIGtlYmFiQ2FzZShrZXkpKTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBkb21PcHRpb25zW2tleV0gPSBpc05hTih2YWx1ZSkgPyB2YWx1ZSA6IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRvbU9wdGlvbnM7XG4gIH1cblxuICByZXR1cm4gTW92ZVRvO1xufSgpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBNb3ZlVG87XG59IGVsc2Uge1xuICB3aW5kb3cuTW92ZVRvID0gTW92ZVRvO1xufSIsImltcG9ydCB7IFJvdWdoR2VuZXJhdG9yQXN5bmMgfSBmcm9tICcuL2dlbmVyYXRvci1hc3luYyc7XG5pbXBvcnQgeyBSb3VnaENhbnZhc0Jhc2UgfSBmcm9tICcuL2NhbnZhcy1iYXNlJztcbmV4cG9ydCBjbGFzcyBSb3VnaENhbnZhc0FzeW5jIGV4dGVuZHMgUm91Z2hDYW52YXNCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbmZpZykge1xuICAgICAgICBzdXBlcihjYW52YXMpO1xuICAgICAgICB0aGlzLmdlbkFzeW5jID0gbmV3IFJvdWdoR2VuZXJhdG9yQXN5bmMoY29uZmlnIHx8IG51bGwsIHRoaXMuY2FudmFzKTtcbiAgICB9XG4gICAgZ2V0IGdlbmVyYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuQXN5bmM7XG4gICAgfVxuICAgIGdldERlZmF1bHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5Bc3luYy5kZWZhdWx0T3B0aW9ucztcbiAgICB9XG4gICAgYXN5bmMgbGluZSh4MSwgeTEsIHgyLCB5Miwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5saW5lKHgxLCB5MSwgeDIsIHkyLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgYXN5bmMgcmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMucmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBhc3luYyBlbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMuZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgYXN5bmMgY2lyY2xlKHgsIHksIGRpYW1ldGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmNpcmNsZSh4LCB5LCBkaWFtZXRlciwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGFzeW5jIGxpbmVhclBhdGgocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmxpbmVhclBhdGgocG9pbnRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgYXN5bmMgcG9seWdvbihwb2ludHMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMucG9seWdvbihwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBhc3luYyBhcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCA9IGZhbHNlLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgY2xvc2VkLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgYXN5bmMgY3VydmUocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmN1cnZlKHBvaW50cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGFzeW5jIHBhdGgoZCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkcmF3aW5nID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5wYXRoKGQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZHJhd2luZyk7XG4gICAgICAgIHJldHVybiBkcmF3aW5nO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJvdWdoUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVyJztcbmNvbnN0IGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydCBjbGFzcyBSb3VnaENhbnZhc0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlUmVuZGVyZXIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUm91Z2hSZW5kZXJlcigpO1xuICAgIH1cbiAgICBkcmF3KGRyYXdhYmxlKSB7XG4gICAgICAgIGNvbnN0IHNldHMgPSBkcmF3YWJsZS5zZXRzIHx8IFtdO1xuICAgICAgICBjb25zdCBvID0gZHJhd2FibGUub3B0aW9ucyB8fCB0aGlzLmdldERlZmF1bHRPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBmb3IgKGNvbnN0IGRyYXdpbmcgb2Ygc2V0cykge1xuICAgICAgICAgICAgc3dpdGNoIChkcmF3aW5nLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gby5zdHJva2U7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBvLnN0cm9rZVdpZHRoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3VG9Db250ZXh0KGN0eCwgZHJhd2luZyk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbGxQYXRoJzpcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IG8uZmlsbCB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1RvQ29udGV4dChjdHgsIGRyYXdpbmcpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdmaWxsU2tldGNoJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsU2tldGNoKGN0eCwgZHJhd2luZywgbyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdGgyRGZpbGwnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gby5maWxsIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwMmQgPSBuZXcgUGF0aDJEKGRyYXdpbmcucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwocDJkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAncGF0aDJEcGF0dGVybic6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jID0gdGhpcy5jYW52YXMub3duZXJEb2N1bWVudCB8fCAoaGFzRG9jdW1lbnQgJiYgZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gZHJhd2luZy5zaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGNhbnZhcyA9IGRvYy5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhjb250ZXh0ID0gaGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmJveCA9IHRoaXMuY29tcHV0ZUJCb3goZHJhd2luZy5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYm94ICYmIChiYm94LndpZHRoIHx8IGJib3guaGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhjYW52YXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoY29udGV4dC50cmFuc2xhdGUoYmJveC54IHx8IDAsIGJib3gueSB8fCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhjYW52YXMud2lkdGggPSBzaXplWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhjYW52YXMuaGVpZ2h0ID0gc2l6ZVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbFNrZXRjaChoY29udGV4dCwgZHJhd2luZywgbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmN0eC5jcmVhdGVQYXR0ZXJuKGhjYW52YXMsICdyZXBlYXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAyZCA9IG5ldyBQYXRoMkQoZHJhd2luZy5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwocDJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCByZW5kZXIgcGF0aDJEcGF0dGVybi4gTm8gZGVmcy9kb2N1bWVudCBkZWZpbmVkLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wdXRlQkJveChkKSB7XG4gICAgICAgIGlmIChoYXNEb2N1bWVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnc3ZnJyk7XG4gICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMCcpO1xuICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcwJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aE5vZGUgPSBzZWxmLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3BhdGgnKTtcbiAgICAgICAgICAgICAgICBwYXRoTm9kZS5zZXRBdHRyaWJ1dGUoJ2QnLCBkKTtcbiAgICAgICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aE5vZGUpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBiYm94ID0gcGF0aE5vZGUuZ2V0QkJveCgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc3ZnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmJveDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmaWxsU2tldGNoKGN0eCwgZHJhd2luZywgbykge1xuICAgICAgICBsZXQgZndlaWdodCA9IG8uZmlsbFdlaWdodDtcbiAgICAgICAgaWYgKGZ3ZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBmd2VpZ2h0ID0gby5zdHJva2VXaWR0aCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gby5maWxsIHx8ICcnO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gZndlaWdodDtcbiAgICAgICAgdGhpcy5fZHJhd1RvQ29udGV4dChjdHgsIGRyYXdpbmcpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgICBfZHJhd1RvQ29udGV4dChjdHgsIGRyYXdpbmcpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZHJhd2luZy5vcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBpdGVtLmRhdGE7XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0ub3ApIHtcbiAgICAgICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhkYXRhWzBdLCBkYXRhWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYmN1cnZlVG8nOlxuICAgICAgICAgICAgICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyhkYXRhWzBdLCBkYXRhWzFdLCBkYXRhWzJdLCBkYXRhWzNdLCBkYXRhWzRdLCBkYXRhWzVdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncWN1cnZlVG8nOlxuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhkYXRhWzBdLCBkYXRhWzFdLCBkYXRhWzJdLCBkYXRhWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkYXRhWzBdLCBkYXRhWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRyYXdpbmcudHlwZSA9PT0gJ2ZpbGxQYXRoJykge1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFJvdWdoR2VuZXJhdG9yIH0gZnJvbSAnLi9nZW5lcmF0b3InO1xuaW1wb3J0IHsgUm91Z2hDYW52YXNCYXNlIH0gZnJvbSAnLi9jYW52YXMtYmFzZSc7XG5leHBvcnQgY2xhc3MgUm91Z2hDYW52YXMgZXh0ZW5kcyBSb3VnaENhbnZhc0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNhbnZhcyk7XG4gICAgICAgIHRoaXMuZ2VuID0gbmV3IFJvdWdoR2VuZXJhdG9yKGNvbmZpZyB8fCBudWxsLCB0aGlzLmNhbnZhcyk7XG4gICAgfVxuICAgIGdldCBnZW5lcmF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbjtcbiAgICB9XG4gICAgZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbi5kZWZhdWx0T3B0aW9ucztcbiAgICB9XG4gICAgbGluZSh4MSwgeTEsIHgyLCB5Miwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4ubGluZSh4MSwgeTEsIHgyLCB5Miwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIHJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4uZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgY2lyY2xlKHgsIHksIGRpYW1ldGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5jaXJjbGUoeCwgeSwgZGlhbWV0ZXIsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBsaW5lYXJQYXRoKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4ubGluZWFyUGF0aChwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBwb2x5Z29uKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4ucG9seWdvbihwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBhcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCA9IGZhbHNlLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5hcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGN1cnZlKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4uY3VydmUocG9pbnRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgcGF0aChkLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRyYXdpbmcgPSB0aGlzLmdlbi5wYXRoKGQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZHJhd2luZyk7XG4gICAgICAgIHJldHVybiBkcmF3aW5nO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGhhY2h1cmVMaW5lc0ZvclBvbHlnb24sIGhhY2h1cmVMaW5lc0ZvckVsbGlwc2UsIGxpbmVMZW5ndGggfSBmcm9tICcuL2ZpbGxlci11dGlscyc7XG5leHBvcnQgY2xhc3MgRG90RmlsbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgfVxuICAgIGZpbGxQb2x5Z29uKHBvaW50cywgbykge1xuICAgICAgICBvID0gT2JqZWN0LmFzc2lnbih7fSwgbywgeyBjdXJ2ZVN0ZXBDb3VudDogNCwgaGFjaHVyZUFuZ2xlOiAwIH0pO1xuICAgICAgICBjb25zdCBsaW5lcyA9IGhhY2h1cmVMaW5lc0ZvclBvbHlnb24ocG9pbnRzLCBvKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG90c09uTGluZXMobGluZXMsIG8pO1xuICAgIH1cbiAgICBmaWxsRWxsaXBzZShjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIG8pIHtcbiAgICAgICAgbyA9IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgY3VydmVTdGVwQ291bnQ6IDQsIGhhY2h1cmVBbmdsZTogMCB9KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBoYWNodXJlTGluZXNGb3JFbGxpcHNlKGN4LCBjeSwgd2lkdGgsIGhlaWdodCwgbywgdGhpcy5yZW5kZXJlcik7XG4gICAgICAgIHJldHVybiB0aGlzLmRvdHNPbkxpbmVzKGxpbmVzLCBvKTtcbiAgICB9XG4gICAgZG90c09uTGluZXMobGluZXMsIG8pIHtcbiAgICAgICAgbGV0IG9wcyA9IFtdO1xuICAgICAgICBsZXQgZ2FwID0gby5oYWNodXJlR2FwO1xuICAgICAgICBpZiAoZ2FwIDwgMCkge1xuICAgICAgICAgICAgZ2FwID0gby5zdHJva2VXaWR0aCAqIDQ7XG4gICAgICAgIH1cbiAgICAgICAgZ2FwID0gTWF0aC5tYXgoZ2FwLCAwLjEpO1xuICAgICAgICBsZXQgZndlaWdodCA9IG8uZmlsbFdlaWdodDtcbiAgICAgICAgaWYgKGZ3ZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBmd2VpZ2h0ID0gby5zdHJva2VXaWR0aCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBsaW5lTGVuZ3RoKGxpbmUpO1xuICAgICAgICAgICAgY29uc3QgZGwgPSBsZW5ndGggLyBnYXA7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IE1hdGguY2VpbChkbCkgLSAxO1xuICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4oKGxpbmVbMV1bMV0gLSBsaW5lWzBdWzFdKSAvIChsaW5lWzFdWzBdIC0gbGluZVswXVswXSkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbCA9IGdhcCAqIChpICsgMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSBsICogTWF0aC5zaW4oYWxwaGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gbCAqIE1hdGguY29zKGFscGhhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gW2xpbmVbMF1bMF0gLSBkeCwgbGluZVswXVsxXSArIGR5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBjeCA9IHRoaXMucmVuZGVyZXIuZ2V0T2Zmc2V0KGNbMF0gLSBnYXAgLyA0LCBjWzBdICsgZ2FwIC8gNCwgbyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3kgPSB0aGlzLnJlbmRlcmVyLmdldE9mZnNldChjWzFdIC0gZ2FwIC8gNCwgY1sxXSArIGdhcCAvIDQsIG8pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsbGlwc2UgPSB0aGlzLnJlbmRlcmVyLmVsbGlwc2UoY3gsIGN5LCBmd2VpZ2h0LCBmd2VpZ2h0LCBvKTtcbiAgICAgICAgICAgICAgICBvcHMgPSBvcHMuY29uY2F0KGVsbGlwc2Uub3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0eXBlOiAnZmlsbFNrZXRjaCcsIG9wcyB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFNlZ21lbnQgfSBmcm9tICcuLi9nZW9tZXRyeSc7XG5pbXBvcnQgeyBIYWNodXJlSXRlcmF0b3IgfSBmcm9tICcuLi91dGlscy9oYWNodXJlJztcbmV4cG9ydCBmdW5jdGlvbiBsaW5lTGVuZ3RoKGxpbmUpIHtcbiAgICBjb25zdCBwMSA9IGxpbmVbMF07XG4gICAgY29uc3QgcDIgPSBsaW5lWzFdO1xuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDFbMF0gLSBwMlswXSwgMikgKyBNYXRoLnBvdyhwMVsxXSAtIHAyWzFdLCAyKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0SW50ZXJzZWN0aW5nTGluZXMobGluZSwgcG9pbnRzKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IFtdO1xuICAgIGNvbnN0IHMxID0gbmV3IFNlZ21lbnQoW2xpbmVbMF0sIGxpbmVbMV1dLCBbbGluZVsyXSwgbGluZVszXV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHMyID0gbmV3IFNlZ21lbnQocG9pbnRzW2ldLCBwb2ludHNbKGkgKyAxKSAlIHBvaW50cy5sZW5ndGhdKTtcbiAgICAgICAgaWYgKHMxLmludGVyc2VjdHMoczIpKSB7XG4gICAgICAgICAgICBpbnRlcnNlY3Rpb25zLnB1c2goW3MxLnhpLCBzMS55aV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFmZmluZSh4LCB5LCBjeCwgY3ksIHNpbkFuZ2xlUHJpbWUsIGNvc0FuZ2xlUHJpbWUsIFIpIHtcbiAgICBjb25zdCBBID0gLWN4ICogY29zQW5nbGVQcmltZSAtIGN5ICogc2luQW5nbGVQcmltZSArIGN4O1xuICAgIGNvbnN0IEIgPSBSICogKGN4ICogc2luQW5nbGVQcmltZSAtIGN5ICogY29zQW5nbGVQcmltZSkgKyBjeTtcbiAgICBjb25zdCBDID0gY29zQW5nbGVQcmltZTtcbiAgICBjb25zdCBEID0gc2luQW5nbGVQcmltZTtcbiAgICBjb25zdCBFID0gLVIgKiBzaW5BbmdsZVByaW1lO1xuICAgIGNvbnN0IEYgPSBSICogY29zQW5nbGVQcmltZTtcbiAgICByZXR1cm4gW1xuICAgICAgICBBICsgQyAqIHggKyBEICogeSxcbiAgICAgICAgQiArIEUgKiB4ICsgRiAqIHlcbiAgICBdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhhY2h1cmVMaW5lc0ZvclBvbHlnb24ocG9pbnRzLCBvKSB7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgaWYgKHBvaW50cyAmJiBwb2ludHMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBsZWZ0ID0gcG9pbnRzWzBdWzBdO1xuICAgICAgICBsZXQgcmlnaHQgPSBwb2ludHNbMF1bMF07XG4gICAgICAgIGxldCB0b3AgPSBwb2ludHNbMF1bMV07XG4gICAgICAgIGxldCBib3R0b20gPSBwb2ludHNbMF1bMV07XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZWZ0ID0gTWF0aC5taW4obGVmdCwgcG9pbnRzW2ldWzBdKTtcbiAgICAgICAgICAgIHJpZ2h0ID0gTWF0aC5tYXgocmlnaHQsIHBvaW50c1tpXVswXSk7XG4gICAgICAgICAgICB0b3AgPSBNYXRoLm1pbih0b3AsIHBvaW50c1tpXVsxXSk7XG4gICAgICAgICAgICBib3R0b20gPSBNYXRoLm1heChib3R0b20sIHBvaW50c1tpXVsxXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYW5nbGUgPSBvLmhhY2h1cmVBbmdsZTtcbiAgICAgICAgbGV0IGdhcCA9IG8uaGFjaHVyZUdhcDtcbiAgICAgICAgaWYgKGdhcCA8IDApIHtcbiAgICAgICAgICAgIGdhcCA9IG8uc3Ryb2tlV2lkdGggKiA0O1xuICAgICAgICB9XG4gICAgICAgIGdhcCA9IE1hdGgubWF4KGdhcCwgMC4xKTtcbiAgICAgICAgY29uc3QgcmFkUGVyRGVnID0gTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgY29uc3QgaGFjaHVyZUFuZ2xlID0gKGFuZ2xlICUgMTgwKSAqIHJhZFBlckRlZztcbiAgICAgICAgY29uc3QgY29zQW5nbGUgPSBNYXRoLmNvcyhoYWNodXJlQW5nbGUpO1xuICAgICAgICBjb25zdCBzaW5BbmdsZSA9IE1hdGguc2luKGhhY2h1cmVBbmdsZSk7XG4gICAgICAgIGNvbnN0IHRhbkFuZ2xlID0gTWF0aC50YW4oaGFjaHVyZUFuZ2xlKTtcbiAgICAgICAgY29uc3QgaXQgPSBuZXcgSGFjaHVyZUl0ZXJhdG9yKHRvcCAtIDEsIGJvdHRvbSArIDEsIGxlZnQgLSAxLCByaWdodCArIDEsIGdhcCwgc2luQW5nbGUsIGNvc0FuZ2xlLCB0YW5BbmdsZSk7XG4gICAgICAgIGxldCByZWN0O1xuICAgICAgICB3aGlsZSAoKHJlY3QgPSBpdC5uZXh0TGluZSgpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IGdldEludGVyc2VjdGluZ0xpbmVzKHJlY3QsIHBvaW50cyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPCAobGluZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcDEgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcDIgPSBsaW5lc1tpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKFtwMSwgcDJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYWNodXJlTGluZXNGb3JFbGxpcHNlKGN4LCBjeSwgd2lkdGgsIGhlaWdodCwgbywgcmVuZGVyZXIpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBsZXQgcnggPSBNYXRoLmFicyh3aWR0aCAvIDIpO1xuICAgIGxldCByeSA9IE1hdGguYWJzKGhlaWdodCAvIDIpO1xuICAgIHJ4ICs9IHJlbmRlcmVyLmdldE9mZnNldCgtcnggKiAwLjA1LCByeCAqIDAuMDUsIG8pO1xuICAgIHJ5ICs9IHJlbmRlcmVyLmdldE9mZnNldCgtcnkgKiAwLjA1LCByeSAqIDAuMDUsIG8pO1xuICAgIGNvbnN0IGFuZ2xlID0gby5oYWNodXJlQW5nbGU7XG4gICAgbGV0IGdhcCA9IG8uaGFjaHVyZUdhcDtcbiAgICBpZiAoZ2FwIDw9IDApIHtcbiAgICAgICAgZ2FwID0gby5zdHJva2VXaWR0aCAqIDQ7XG4gICAgfVxuICAgIGxldCBmd2VpZ2h0ID0gby5maWxsV2VpZ2h0O1xuICAgIGlmIChmd2VpZ2h0IDwgMCkge1xuICAgICAgICBmd2VpZ2h0ID0gby5zdHJva2VXaWR0aCAvIDI7XG4gICAgfVxuICAgIGNvbnN0IHJhZFBlckRlZyA9IE1hdGguUEkgLyAxODA7XG4gICAgY29uc3QgaGFjaHVyZUFuZ2xlID0gKGFuZ2xlICUgMTgwKSAqIHJhZFBlckRlZztcbiAgICBjb25zdCB0YW5BbmdsZSA9IE1hdGgudGFuKGhhY2h1cmVBbmdsZSk7XG4gICAgY29uc3QgYXNwZWN0UmF0aW8gPSByeSAvIHJ4O1xuICAgIGNvbnN0IGh5cCA9IE1hdGguc3FydChhc3BlY3RSYXRpbyAqIHRhbkFuZ2xlICogYXNwZWN0UmF0aW8gKiB0YW5BbmdsZSArIDEpO1xuICAgIGNvbnN0IHNpbkFuZ2xlUHJpbWUgPSBhc3BlY3RSYXRpbyAqIHRhbkFuZ2xlIC8gaHlwO1xuICAgIGNvbnN0IGNvc0FuZ2xlUHJpbWUgPSAxIC8gaHlwO1xuICAgIGNvbnN0IGdhcFByaW1lID0gZ2FwIC8gKChyeCAqIHJ5IC8gTWF0aC5zcXJ0KChyeSAqIGNvc0FuZ2xlUHJpbWUpICogKHJ5ICogY29zQW5nbGVQcmltZSkgKyAocnggKiBzaW5BbmdsZVByaW1lKSAqIChyeCAqIHNpbkFuZ2xlUHJpbWUpKSkgLyByeCk7XG4gICAgbGV0IGhhbGZMZW4gPSBNYXRoLnNxcnQoKHJ4ICogcngpIC0gKGN4IC0gcnggKyBnYXBQcmltZSkgKiAoY3ggLSByeCArIGdhcFByaW1lKSk7XG4gICAgZm9yIChsZXQgeFBvcyA9IGN4IC0gcnggKyBnYXBQcmltZTsgeFBvcyA8IGN4ICsgcng7IHhQb3MgKz0gZ2FwUHJpbWUpIHtcbiAgICAgICAgaGFsZkxlbiA9IE1hdGguc3FydCgocnggKiByeCkgLSAoY3ggLSB4UG9zKSAqIChjeCAtIHhQb3MpKTtcbiAgICAgICAgY29uc3QgcDEgPSBhZmZpbmUoeFBvcywgY3kgLSBoYWxmTGVuLCBjeCwgY3ksIHNpbkFuZ2xlUHJpbWUsIGNvc0FuZ2xlUHJpbWUsIGFzcGVjdFJhdGlvKTtcbiAgICAgICAgY29uc3QgcDIgPSBhZmZpbmUoeFBvcywgY3kgKyBoYWxmTGVuLCBjeCwgY3ksIHNpbkFuZ2xlUHJpbWUsIGNvc0FuZ2xlUHJpbWUsIGFzcGVjdFJhdGlvKTtcbiAgICAgICAgcmV0LnB1c2goW3AxLCBwMl0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuIiwiaW1wb3J0IHsgSGFjaHVyZUZpbGxlciB9IGZyb20gJy4vaGFjaHVyZS1maWxsZXInO1xuaW1wb3J0IHsgWmlnWmFnRmlsbGVyIH0gZnJvbSAnLi96aWd6YWctZmlsbGVyJztcbmltcG9ydCB7IEhhdGNoRmlsbGVyIH0gZnJvbSAnLi9oYXRjaC1maWxsZXInO1xuaW1wb3J0IHsgRG90RmlsbGVyIH0gZnJvbSAnLi9kb3QtZmlsbGVyJztcbmNvbnN0IGZpbGxlcnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxsZXIocmVuZGVyZXIsIG8pIHtcbiAgICBsZXQgZmlsbGVyTmFtZSA9IG8uZmlsbFN0eWxlIHx8ICdoYWNodXJlJztcbiAgICBpZiAoIWZpbGxlcnNbZmlsbGVyTmFtZV0pIHtcbiAgICAgICAgc3dpdGNoIChmaWxsZXJOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICd6aWd6YWcnOlxuICAgICAgICAgICAgICAgIGlmICghZmlsbGVyc1tmaWxsZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBmaWxsZXJzW2ZpbGxlck5hbWVdID0gbmV3IFppZ1phZ0ZpbGxlcihyZW5kZXJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3Jvc3MtaGF0Y2gnOlxuICAgICAgICAgICAgICAgIGlmICghZmlsbGVyc1tmaWxsZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBmaWxsZXJzW2ZpbGxlck5hbWVdID0gbmV3IEhhdGNoRmlsbGVyKHJlbmRlcmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkb3RzJzpcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGxlcnNbZmlsbGVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVyc1tmaWxsZXJOYW1lXSA9IG5ldyBEb3RGaWxsZXIocmVuZGVyZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hhY2h1cmUnOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmaWxsZXJOYW1lID0gJ2hhY2h1cmUnO1xuICAgICAgICAgICAgICAgIGlmICghZmlsbGVyc1tmaWxsZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBmaWxsZXJzW2ZpbGxlck5hbWVdID0gbmV3IEhhY2h1cmVGaWxsZXIocmVuZGVyZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmlsbGVyc1tmaWxsZXJOYW1lXTtcbn1cbiIsImltcG9ydCB7IGhhY2h1cmVMaW5lc0ZvclBvbHlnb24sIGhhY2h1cmVMaW5lc0ZvckVsbGlwc2UgfSBmcm9tICcuL2ZpbGxlci11dGlscyc7XG5leHBvcnQgY2xhc3MgSGFjaHVyZUZpbGxlciB7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIH1cbiAgICBmaWxsUG9seWdvbihwb2ludHMsIG8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbGxQb2x5Z29uKHBvaW50cywgbyk7XG4gICAgfVxuICAgIGZpbGxFbGxpcHNlKGN4LCBjeSwgd2lkdGgsIGhlaWdodCwgbykge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsbEVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvKTtcbiAgICB9XG4gICAgX2ZpbGxQb2x5Z29uKHBvaW50cywgbywgY29ubmVjdEVuZHMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBsaW5lcyA9IGhhY2h1cmVMaW5lc0ZvclBvbHlnb24ocG9pbnRzLCBvKTtcbiAgICAgICAgY29uc3Qgb3BzID0gdGhpcy5yZW5kZXJMaW5lcyhsaW5lcywgbywgY29ubmVjdEVuZHMpO1xuICAgICAgICByZXR1cm4geyB0eXBlOiAnZmlsbFNrZXRjaCcsIG9wcyB9O1xuICAgIH1cbiAgICBfZmlsbEVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvLCBjb25uZWN0RW5kcyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gaGFjaHVyZUxpbmVzRm9yRWxsaXBzZShjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIG8sIHRoaXMucmVuZGVyZXIpO1xuICAgICAgICBjb25zdCBvcHMgPSB0aGlzLnJlbmRlckxpbmVzKGxpbmVzLCBvLCBjb25uZWN0RW5kcyk7XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdmaWxsU2tldGNoJywgb3BzIH07XG4gICAgfVxuICAgIHJlbmRlckxpbmVzKGxpbmVzLCBvLCBjb25uZWN0RW5kcykge1xuICAgICAgICBsZXQgb3BzID0gW107XG4gICAgICAgIGxldCBwcmV2UG9pbnQgPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5yZW5kZXJlci5kb3VibGVMaW5lKGxpbmVbMF1bMF0sIGxpbmVbMF1bMV0sIGxpbmVbMV1bMF0sIGxpbmVbMV1bMV0sIG8pKTtcbiAgICAgICAgICAgIGlmIChjb25uZWN0RW5kcyAmJiBwcmV2UG9pbnQpIHtcbiAgICAgICAgICAgICAgICBvcHMgPSBvcHMuY29uY2F0KHRoaXMucmVuZGVyZXIuZG91YmxlTGluZShwcmV2UG9pbnRbMF0sIHByZXZQb2ludFsxXSwgbGluZVswXVswXSwgbGluZVswXVsxXSwgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldlBvaW50ID0gbGluZVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3BzO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEhhY2h1cmVGaWxsZXIgfSBmcm9tICcuL2hhY2h1cmUtZmlsbGVyJztcbmV4cG9ydCBjbGFzcyBIYXRjaEZpbGxlciBleHRlbmRzIEhhY2h1cmVGaWxsZXIge1xuICAgIGZpbGxQb2x5Z29uKHBvaW50cywgbykge1xuICAgICAgICBjb25zdCBzZXQgPSB0aGlzLl9maWxsUG9seWdvbihwb2ludHMsIG8pO1xuICAgICAgICBjb25zdCBvMiA9IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgaGFjaHVyZUFuZ2xlOiBvLmhhY2h1cmVBbmdsZSArIDkwIH0pO1xuICAgICAgICBjb25zdCBzZXQyID0gdGhpcy5fZmlsbFBvbHlnb24ocG9pbnRzLCBvMik7XG4gICAgICAgIHNldC5vcHMgPSBzZXQub3BzLmNvbmNhdChzZXQyLm9wcyk7XG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgfVxuICAgIGZpbGxFbGxpcHNlKGN4LCBjeSwgd2lkdGgsIGhlaWdodCwgbykge1xuICAgICAgICBjb25zdCBzZXQgPSB0aGlzLl9maWxsRWxsaXBzZShjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIG8pO1xuICAgICAgICBjb25zdCBvMiA9IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgaGFjaHVyZUFuZ2xlOiBvLmhhY2h1cmVBbmdsZSArIDkwIH0pO1xuICAgICAgICBjb25zdCBzZXQyID0gdGhpcy5fZmlsbEVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvMik7XG4gICAgICAgIHNldC5vcHMgPSBzZXQub3BzLmNvbmNhdChzZXQyLm9wcyk7XG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSGFjaHVyZUZpbGxlciB9IGZyb20gJy4vaGFjaHVyZS1maWxsZXInO1xuZXhwb3J0IGNsYXNzIFppZ1phZ0ZpbGxlciBleHRlbmRzIEhhY2h1cmVGaWxsZXIge1xuICAgIGZpbGxQb2x5Z29uKHBvaW50cywgbykge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsbFBvbHlnb24ocG9pbnRzLCBvLCB0cnVlKTtcbiAgICB9XG4gICAgZmlsbEVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWxsRWxsaXBzZShjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIG8sIHRydWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJvdWdoR2VuZXJhdG9yQmFzZSB9IGZyb20gJy4vZ2VuZXJhdG9yLWJhc2UnO1xuZXhwb3J0IGNsYXNzIFJvdWdoR2VuZXJhdG9yQXN5bmMgZXh0ZW5kcyBSb3VnaEdlbmVyYXRvckJhc2Uge1xuICAgIGFzeW5jIGxpbmUoeDEsIHkxLCB4MiwgeTIsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgnbGluZScsIFthd2FpdCB0aGlzLmxpYi5saW5lKHgxLCB5MSwgeDIsIHkyLCBvKV0sIG8pO1xuICAgIH1cbiAgICBhc3luYyByZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBbXTtcbiAgICAgICAgaWYgKG8uZmlsbCkge1xuICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gW1t4LCB5XSwgW3ggKyB3aWR0aCwgeV0sIFt4ICsgd2lkdGgsIHkgKyBoZWlnaHRdLCBbeCwgeSArIGhlaWdodF1dO1xuICAgICAgICAgICAgaWYgKG8uZmlsbFN0eWxlID09PSAnc29saWQnKSB7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChhd2FpdCB0aGlzLmxpYi5zb2xpZEZpbGxQb2x5Z29uKHBvaW50cywgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChhd2FpdCB0aGlzLmxpYi5wYXR0ZXJuRmlsbFBvbHlnb24ocG9pbnRzLCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGF0aHMucHVzaChhd2FpdCB0aGlzLmxpYi5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgbykpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ3JlY3RhbmdsZScsIHBhdGhzLCBvKTtcbiAgICB9XG4gICAgYXN5bmMgZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBwYXRocyA9IFtdO1xuICAgICAgICBpZiAoby5maWxsKSB7XG4gICAgICAgICAgICBpZiAoby5maWxsU3R5bGUgPT09ICdzb2xpZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZSA9IGF3YWl0IHRoaXMubGliLmVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgbyk7XG4gICAgICAgICAgICAgICAgc2hhcGUudHlwZSA9ICdmaWxsUGF0aCc7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChzaGFwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKGF3YWl0IHRoaXMubGliLnBhdHRlcm5GaWxsRWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGF0aHMucHVzaChhd2FpdCB0aGlzLmxpYi5lbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdlbGxpcHNlJywgcGF0aHMsIG8pO1xuICAgIH1cbiAgICBhc3luYyBjaXJjbGUoeCwgeSwgZGlhbWV0ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgdGhpcy5lbGxpcHNlKHgsIHksIGRpYW1ldGVyLCBkaWFtZXRlciwgb3B0aW9ucyk7XG4gICAgICAgIHJldC5zaGFwZSA9ICdjaXJjbGUnO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICBhc3luYyBsaW5lYXJQYXRoKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdsaW5lYXJQYXRoJywgW2F3YWl0IHRoaXMubGliLmxpbmVhclBhdGgocG9pbnRzLCBmYWxzZSwgbyldLCBvKTtcbiAgICB9XG4gICAgYXN5bmMgYXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCBjbG9zZWQgPSBmYWxzZSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBbXTtcbiAgICAgICAgaWYgKGNsb3NlZCAmJiBvLmZpbGwpIHtcbiAgICAgICAgICAgIGlmIChvLmZpbGxTdHlsZSA9PT0gJ3NvbGlkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gYXdhaXQgdGhpcy5saWIuYXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCB0cnVlLCBmYWxzZSwgbyk7XG4gICAgICAgICAgICAgICAgc2hhcGUudHlwZSA9ICdmaWxsUGF0aCc7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChzaGFwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKGF3YWl0IHRoaXMubGliLnBhdHRlcm5GaWxsQXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGF0aHMucHVzaChhd2FpdCB0aGlzLmxpYi5hcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCwgdHJ1ZSwgbykpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ2FyYycsIHBhdGhzLCBvKTtcbiAgICB9XG4gICAgYXN5bmMgY3VydmUocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ2N1cnZlJywgW2F3YWl0IHRoaXMubGliLmN1cnZlKHBvaW50cywgbyldLCBvKTtcbiAgICB9XG4gICAgYXN5bmMgcG9seWdvbihwb2ludHMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICAgIGlmIChvLmZpbGwpIHtcbiAgICAgICAgICAgIGlmIChvLmZpbGxTdHlsZSA9PT0gJ3NvbGlkJykge1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goYXdhaXQgdGhpcy5saWIuc29saWRGaWxsUG9seWdvbihwb2ludHMsIG8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmNvbXB1dGVQb2x5Z29uU2l6ZShwb2ludHMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxQb2ludHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW3NpemVbMF0sIDBdLFxuICAgICAgICAgICAgICAgICAgICBbc2l6ZVswXSwgc2l6ZVsxXV0sXG4gICAgICAgICAgICAgICAgICAgIFswLCBzaXplWzFdXVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBhd2FpdCB0aGlzLmxpYi5wYXR0ZXJuRmlsbFBvbHlnb24oZmlsbFBvaW50cywgbyk7XG4gICAgICAgICAgICAgICAgc2hhcGUudHlwZSA9ICdwYXRoMkRwYXR0ZXJuJztcbiAgICAgICAgICAgICAgICBzaGFwZS5zaXplID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBzaGFwZS5wYXRoID0gdGhpcy5wb2x5Z29uUGF0aChwb2ludHMpO1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goc2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLnB1c2goYXdhaXQgdGhpcy5saWIubGluZWFyUGF0aChwb2ludHMsIHRydWUsIG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdwb2x5Z29uJywgcGF0aHMsIG8pO1xuICAgIH1cbiAgICBhc3luYyBwYXRoKGQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdwYXRoJywgcGF0aHMsIG8pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvLmZpbGwpIHtcbiAgICAgICAgICAgIGlmIChvLmZpbGxTdHlsZSA9PT0gJ3NvbGlkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlID0geyB0eXBlOiAncGF0aDJEZmlsbCcsIHBhdGg6IGQsIG9wczogW10gfTtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHNoYXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmNvbXB1dGVQYXRoU2l6ZShkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW3NpemVbMF0sIDBdLFxuICAgICAgICAgICAgICAgICAgICBbc2l6ZVswXSwgc2l6ZVsxXV0sXG4gICAgICAgICAgICAgICAgICAgIFswLCBzaXplWzFdXVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBhd2FpdCB0aGlzLmxpYi5wYXR0ZXJuRmlsbFBvbHlnb24ocG9pbnRzLCBvKTtcbiAgICAgICAgICAgICAgICBzaGFwZS50eXBlID0gJ3BhdGgyRHBhdHRlcm4nO1xuICAgICAgICAgICAgICAgIHNoYXBlLnNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIHNoYXBlLnBhdGggPSBkO1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goc2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLnB1c2goYXdhaXQgdGhpcy5saWIuc3ZnUGF0aChkLCBvKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgncGF0aCcsIHBhdGhzLCBvKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXItZmFjdG9yeS5qcyc7XG5jb25zdCBoYXNTZWxmID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0IGNsYXNzIFJvdWdoR2VuZXJhdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBzdXJmYWNlKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtYXhSYW5kb21uZXNzT2Zmc2V0OiAyLFxuICAgICAgICAgICAgcm91Z2huZXNzOiAxLFxuICAgICAgICAgICAgYm93aW5nOiAxLFxuICAgICAgICAgICAgc3Ryb2tlOiAnIzAwMCcsXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogMSxcbiAgICAgICAgICAgIGN1cnZlVGlnaHRuZXNzOiAwLFxuICAgICAgICAgICAgY3VydmVTdGVwQ291bnQ6IDksXG4gICAgICAgICAgICBmaWxsU3R5bGU6ICdoYWNodXJlJyxcbiAgICAgICAgICAgIGZpbGxXZWlnaHQ6IC0xLFxuICAgICAgICAgICAgaGFjaHVyZUFuZ2xlOiAtNDEsXG4gICAgICAgICAgICBoYWNodXJlR2FwOiAtMVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgICAgdGhpcy5zdXJmYWNlID0gc3VyZmFjZTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IGNyZWF0ZVJlbmRlcmVyKHRoaXMuY29uZmlnKTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB0aGlzLl9vcHRpb25zKHRoaXMuY29uZmlnLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9vcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMgPyBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKSA6IHRoaXMuZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuICAgIF9kcmF3YWJsZShzaGFwZSwgc2V0cywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4geyBzaGFwZSwgc2V0czogc2V0cyB8fCBbXSwgb3B0aW9uczogb3B0aW9ucyB8fCB0aGlzLmRlZmF1bHRPcHRpb25zIH07XG4gICAgfVxuICAgIGdldCBsaWIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyO1xuICAgIH1cbiAgICBnZXRDYW52YXNTaXplKCkge1xuICAgICAgICBjb25zdCB2YWwgPSAodykgPT4ge1xuICAgICAgICAgICAgaWYgKHcgJiYgdHlwZW9mIHcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHcuYmFzZVZhbCAmJiB3LmJhc2VWYWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHcuYmFzZVZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdyB8fCAxMDA7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnN1cmZhY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBbdmFsKHRoaXMuc3VyZmFjZS53aWR0aCksIHZhbCh0aGlzLnN1cmZhY2UuaGVpZ2h0KV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsxMDAsIDEwMF07XG4gICAgfVxuICAgIGNvbXB1dGVQb2x5Z29uU2l6ZShwb2ludHMpIHtcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBsZWZ0ID0gcG9pbnRzWzBdWzBdO1xuICAgICAgICAgICAgbGV0IHJpZ2h0ID0gcG9pbnRzWzBdWzBdO1xuICAgICAgICAgICAgbGV0IHRvcCA9IHBvaW50c1swXVsxXTtcbiAgICAgICAgICAgIGxldCBib3R0b20gPSBwb2ludHNbMF1bMV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxlZnQgPSBNYXRoLm1pbihsZWZ0LCBwb2ludHNbaV1bMF0pO1xuICAgICAgICAgICAgICAgIHJpZ2h0ID0gTWF0aC5tYXgocmlnaHQsIHBvaW50c1tpXVswXSk7XG4gICAgICAgICAgICAgICAgdG9wID0gTWF0aC5taW4odG9wLCBwb2ludHNbaV1bMV0pO1xuICAgICAgICAgICAgICAgIGJvdHRvbSA9IE1hdGgubWF4KGJvdHRvbSwgcG9pbnRzW2ldWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbKHJpZ2h0IC0gbGVmdCksIChib3R0b20gLSB0b3ApXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzAsIDBdO1xuICAgIH1cbiAgICBwb2x5Z29uUGF0aChwb2ludHMpIHtcbiAgICAgICAgbGV0IGQgPSAnJztcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGQgPSBgTSR7cG9pbnRzWzBdWzBdfSwke3BvaW50c1swXVsxXX1gO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkID0gYCR7ZH0gTCR7cG9pbnRzW2ldWzBdfSwke3BvaW50c1tpXVsxXX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBjb21wdXRlUGF0aFNpemUoZCkge1xuICAgICAgICBsZXQgc2l6ZSA9IFswLCAwXTtcbiAgICAgICAgaWYgKGhhc1NlbGYgJiYgc2VsZi5kb2N1bWVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ZnID0gc2VsZi5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdzdmcnKTtcbiAgICAgICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcwJyk7XG4gICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzAnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoTm9kZSA9IHNlbGYuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xuICAgICAgICAgICAgICAgIHBhdGhOb2RlLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xuICAgICAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoTm9kZSk7XG4gICAgICAgICAgICAgICAgc2VsZi5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN2Zyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmIgPSBwYXRoTm9kZS5nZXRCQm94KCk7XG4gICAgICAgICAgICAgICAgaWYgKGJiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpemVbMF0gPSBiYi53aWR0aCB8fCAwO1xuICAgICAgICAgICAgICAgICAgICBzaXplWzFdID0gYmIuaGVpZ2h0IHx8IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzdmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgeyB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FudmFzU2l6ZSA9IHRoaXMuZ2V0Q2FudmFzU2l6ZSgpO1xuICAgICAgICBpZiAoIShzaXplWzBdICogc2l6ZVsxXSkpIHtcbiAgICAgICAgICAgIHNpemUgPSBjYW52YXNTaXplO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH1cbiAgICB0b1BhdGhzKGRyYXdhYmxlKSB7XG4gICAgICAgIGNvbnN0IHNldHMgPSBkcmF3YWJsZS5zZXRzIHx8IFtdO1xuICAgICAgICBjb25zdCBvID0gZHJhd2FibGUub3B0aW9ucyB8fCB0aGlzLmRlZmF1bHRPcHRpb25zO1xuICAgICAgICBjb25zdCBwYXRocyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGRyYXdpbmcgb2Ygc2V0cykge1xuICAgICAgICAgICAgbGV0IHBhdGggPSBudWxsO1xuICAgICAgICAgICAgc3dpdGNoIChkcmF3aW5nLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ6IHRoaXMub3BzVG9QYXRoKGRyYXdpbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBvLnN0cm9rZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBvLnN0cm9rZVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbGxQYXRoJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ6IHRoaXMub3BzVG9QYXRoKGRyYXdpbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IG8uZmlsbCB8fCAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZmlsbFNrZXRjaCc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB0aGlzLmZpbGxTa2V0Y2goZHJhd2luZywgbyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdGgyRGZpbGwnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZDogZHJhd2luZy5wYXRoIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IG8uZmlsbCB8fCAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncGF0aDJEcGF0dGVybic6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IGRyYXdpbmcuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAxLCBoZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBgMCAwICR7TWF0aC5yb3VuZChzaXplWzBdKX0gJHtNYXRoLnJvdW5kKHNpemVbMV0pfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVW5pdHM6ICdvYmplY3RCb3VuZGluZ0JveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiB0aGlzLmZpbGxTa2V0Y2goZHJhd2luZywgbylcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ6IGRyYXdpbmcucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgfVxuICAgIGZpbGxTa2V0Y2goZHJhd2luZywgbykge1xuICAgICAgICBsZXQgZndlaWdodCA9IG8uZmlsbFdlaWdodDtcbiAgICAgICAgaWYgKGZ3ZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBmd2VpZ2h0ID0gby5zdHJva2VXaWR0aCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGQ6IHRoaXMub3BzVG9QYXRoKGRyYXdpbmcpLFxuICAgICAgICAgICAgc3Ryb2tlOiBvLmZpbGwgfHwgJ25vbmUnLFxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IGZ3ZWlnaHQsXG4gICAgICAgICAgICBmaWxsOiAnbm9uZSdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb3BzVG9QYXRoKGRyYXdpbmcpIHtcbiAgICAgICAgbGV0IHBhdGggPSAnJztcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRyYXdpbmcub3BzKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gaXRlbS5kYXRhO1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtLm9wKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gYE0ke2RhdGFbMF19ICR7ZGF0YVsxXX0gYDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYmN1cnZlVG8nOlxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IGBDJHtkYXRhWzBdfSAke2RhdGFbMV19LCAke2RhdGFbMl19ICR7ZGF0YVszXX0sICR7ZGF0YVs0XX0gJHtkYXRhWzVdfSBgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdxY3VydmVUbyc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gYFEke2RhdGFbMF19ICR7ZGF0YVsxXX0sICR7ZGF0YVsyXX0gJHtkYXRhWzNdfSBgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IGBMJHtkYXRhWzBdfSAke2RhdGFbMV19IGA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoLnRyaW0oKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSb3VnaEdlbmVyYXRvckJhc2UgfSBmcm9tICcuL2dlbmVyYXRvci1iYXNlJztcbmV4cG9ydCBjbGFzcyBSb3VnaEdlbmVyYXRvciBleHRlbmRzIFJvdWdoR2VuZXJhdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBzdXJmYWNlKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZywgc3VyZmFjZSk7XG4gICAgfVxuICAgIGxpbmUoeDEsIHkxLCB4MiwgeTIsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgnbGluZScsIFt0aGlzLmxpYi5saW5lKHgxLCB5MSwgeDIsIHkyLCBvKV0sIG8pO1xuICAgIH1cbiAgICByZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBbXTtcbiAgICAgICAgaWYgKG8uZmlsbCkge1xuICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gW1t4LCB5XSwgW3ggKyB3aWR0aCwgeV0sIFt4ICsgd2lkdGgsIHkgKyBoZWlnaHRdLCBbeCwgeSArIGhlaWdodF1dO1xuICAgICAgICAgICAgaWYgKG8uZmlsbFN0eWxlID09PSAnc29saWQnKSB7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaCh0aGlzLmxpYi5zb2xpZEZpbGxQb2x5Z29uKHBvaW50cywgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaCh0aGlzLmxpYi5wYXR0ZXJuRmlsbFBvbHlnb24ocG9pbnRzLCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGF0aHMucHVzaCh0aGlzLmxpYi5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgbykpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ3JlY3RhbmdsZScsIHBhdGhzLCBvKTtcbiAgICB9XG4gICAgZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBwYXRocyA9IFtdO1xuICAgICAgICBpZiAoby5maWxsKSB7XG4gICAgICAgICAgICBpZiAoby5maWxsU3R5bGUgPT09ICdzb2xpZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMubGliLmVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgbyk7XG4gICAgICAgICAgICAgICAgc2hhcGUudHlwZSA9ICdmaWxsUGF0aCc7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChzaGFwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHRoaXMubGliLnBhdHRlcm5GaWxsRWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGF0aHMucHVzaCh0aGlzLmxpYi5lbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdlbGxpcHNlJywgcGF0aHMsIG8pO1xuICAgIH1cbiAgICBjaXJjbGUoeCwgeSwgZGlhbWV0ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gdGhpcy5lbGxpcHNlKHgsIHksIGRpYW1ldGVyLCBkaWFtZXRlciwgb3B0aW9ucyk7XG4gICAgICAgIHJldC5zaGFwZSA9ICdjaXJjbGUnO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICBsaW5lYXJQYXRoKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdsaW5lYXJQYXRoJywgW3RoaXMubGliLmxpbmVhclBhdGgocG9pbnRzLCBmYWxzZSwgbyldLCBvKTtcbiAgICB9XG4gICAgYXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCBjbG9zZWQgPSBmYWxzZSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBbXTtcbiAgICAgICAgaWYgKGNsb3NlZCAmJiBvLmZpbGwpIHtcbiAgICAgICAgICAgIGlmIChvLmZpbGxTdHlsZSA9PT0gJ3NvbGlkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5saWIuYXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCB0cnVlLCBmYWxzZSwgbyk7XG4gICAgICAgICAgICAgICAgc2hhcGUudHlwZSA9ICdmaWxsUGF0aCc7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChzaGFwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHRoaXMubGliLnBhdHRlcm5GaWxsQXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGF0aHMucHVzaCh0aGlzLmxpYi5hcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCwgdHJ1ZSwgbykpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ2FyYycsIHBhdGhzLCBvKTtcbiAgICB9XG4gICAgY3VydmUocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ2N1cnZlJywgW3RoaXMubGliLmN1cnZlKHBvaW50cywgbyldLCBvKTtcbiAgICB9XG4gICAgcG9seWdvbihwb2ludHMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICAgIGlmIChvLmZpbGwpIHtcbiAgICAgICAgICAgIGlmIChvLmZpbGxTdHlsZSA9PT0gJ3NvbGlkJykge1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2godGhpcy5saWIuc29saWRGaWxsUG9seWdvbihwb2ludHMsIG8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmNvbXB1dGVQb2x5Z29uU2l6ZShwb2ludHMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxQb2ludHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW3NpemVbMF0sIDBdLFxuICAgICAgICAgICAgICAgICAgICBbc2l6ZVswXSwgc2l6ZVsxXV0sXG4gICAgICAgICAgICAgICAgICAgIFswLCBzaXplWzFdXVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmxpYi5wYXR0ZXJuRmlsbFBvbHlnb24oZmlsbFBvaW50cywgbyk7XG4gICAgICAgICAgICAgICAgc2hhcGUudHlwZSA9ICdwYXRoMkRwYXR0ZXJuJztcbiAgICAgICAgICAgICAgICBzaGFwZS5zaXplID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBzaGFwZS5wYXRoID0gdGhpcy5wb2x5Z29uUGF0aChwb2ludHMpO1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goc2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLnB1c2godGhpcy5saWIubGluZWFyUGF0aChwb2ludHMsIHRydWUsIG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdwb2x5Z29uJywgcGF0aHMsIG8pO1xuICAgIH1cbiAgICBwYXRoKGQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdwYXRoJywgcGF0aHMsIG8pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvLmZpbGwpIHtcbiAgICAgICAgICAgIGlmIChvLmZpbGxTdHlsZSA9PT0gJ3NvbGlkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlID0geyB0eXBlOiAncGF0aDJEZmlsbCcsIHBhdGg6IGQsIG9wczogW10gfTtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHNoYXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmNvbXB1dGVQYXRoU2l6ZShkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW3NpemVbMF0sIDBdLFxuICAgICAgICAgICAgICAgICAgICBbc2l6ZVswXSwgc2l6ZVsxXV0sXG4gICAgICAgICAgICAgICAgICAgIFswLCBzaXplWzFdXVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmxpYi5wYXR0ZXJuRmlsbFBvbHlnb24ocG9pbnRzLCBvKTtcbiAgICAgICAgICAgICAgICBzaGFwZS50eXBlID0gJ3BhdGgyRHBhdHRlcm4nO1xuICAgICAgICAgICAgICAgIHNoYXBlLnNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIHNoYXBlLnBhdGggPSBkO1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goc2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLnB1c2godGhpcy5saWIuc3ZnUGF0aChkLCBvKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgncGF0aCcsIHBhdGhzLCBvKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2VnbWVudCB7XG4gICAgY29uc3RydWN0b3IocDEsIHAyKSB7XG4gICAgICAgIHRoaXMueGkgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICB0aGlzLnlpID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgdGhpcy5weDEgPSBwMVswXTtcbiAgICAgICAgdGhpcy5weTEgPSBwMVsxXTtcbiAgICAgICAgdGhpcy5weDIgPSBwMlswXTtcbiAgICAgICAgdGhpcy5weTIgPSBwMlsxXTtcbiAgICAgICAgdGhpcy5hID0gdGhpcy5weTIgLSB0aGlzLnB5MTtcbiAgICAgICAgdGhpcy5iID0gdGhpcy5weDEgLSB0aGlzLnB4MjtcbiAgICAgICAgdGhpcy5jID0gdGhpcy5weDIgKiB0aGlzLnB5MSAtIHRoaXMucHgxICogdGhpcy5weTI7XG4gICAgICAgIHRoaXMuX3VuZGVmaW5lZCA9ICgodGhpcy5hID09PSAwKSAmJiAodGhpcy5iID09PSAwKSAmJiAodGhpcy5jID09PSAwKSk7XG4gICAgfVxuICAgIGlzVW5kZWZpbmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpbnRlcnNlY3RzKG90aGVyU2VnbWVudCkge1xuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZCgpIHx8IG90aGVyU2VnbWVudC5pc1VuZGVmaW5lZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGdyYWQxID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgbGV0IGdyYWQyID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgbGV0IGludDEgPSAwLCBpbnQyID0gMDtcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuYSwgYiA9IHRoaXMuYiwgYyA9IHRoaXMuYztcbiAgICAgICAgaWYgKE1hdGguYWJzKGIpID4gMC4wMDAwMSkge1xuICAgICAgICAgICAgZ3JhZDEgPSAtYSAvIGI7XG4gICAgICAgICAgICBpbnQxID0gLWMgLyBiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChNYXRoLmFicyhvdGhlclNlZ21lbnQuYikgPiAwLjAwMDAxKSB7XG4gICAgICAgICAgICBncmFkMiA9IC1vdGhlclNlZ21lbnQuYSAvIG90aGVyU2VnbWVudC5iO1xuICAgICAgICAgICAgaW50MiA9IC1vdGhlclNlZ21lbnQuYyAvIG90aGVyU2VnbWVudC5iO1xuICAgICAgICB9XG4gICAgICAgIGlmIChncmFkMSA9PT0gTnVtYmVyLk1BWF9WQUxVRSkge1xuICAgICAgICAgICAgaWYgKGdyYWQyID09PSBOdW1iZXIuTUFYX1ZBTFVFKSB7XG4gICAgICAgICAgICAgICAgaWYgKCgtYyAvIGEpICE9PSAoLW90aGVyU2VnbWVudC5jIC8gb3RoZXJTZWdtZW50LmEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLnB5MSA+PSBNYXRoLm1pbihvdGhlclNlZ21lbnQucHkxLCBvdGhlclNlZ21lbnQucHkyKSkgJiYgKHRoaXMucHkxIDw9IE1hdGgubWF4KG90aGVyU2VnbWVudC5weTEsIG90aGVyU2VnbWVudC5weTIpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnhpID0gdGhpcy5weDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWkgPSB0aGlzLnB5MTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5weTIgPj0gTWF0aC5taW4ob3RoZXJTZWdtZW50LnB5MSwgb3RoZXJTZWdtZW50LnB5MikpICYmICh0aGlzLnB5MiA8PSBNYXRoLm1heChvdGhlclNlZ21lbnQucHkxLCBvdGhlclNlZ21lbnQucHkyKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aSA9IHRoaXMucHgyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnlpID0gdGhpcy5weTI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnhpID0gdGhpcy5weDE7XG4gICAgICAgICAgICB0aGlzLnlpID0gKGdyYWQyICogdGhpcy54aSArIGludDIpO1xuICAgICAgICAgICAgaWYgKCgodGhpcy5weTEgLSB0aGlzLnlpKSAqICh0aGlzLnlpIC0gdGhpcy5weTIpIDwgLTAuMDAwMDEpIHx8ICgob3RoZXJTZWdtZW50LnB5MSAtIHRoaXMueWkpICogKHRoaXMueWkgLSBvdGhlclNlZ21lbnQucHkyKSA8IC0wLjAwMDAxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhvdGhlclNlZ21lbnQuYSkgPCAwLjAwMDAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKChvdGhlclNlZ21lbnQucHgxIC0gdGhpcy54aSkgKiAodGhpcy54aSAtIG90aGVyU2VnbWVudC5weDIpIDwgLTAuMDAwMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChncmFkMiA9PT0gTnVtYmVyLk1BWF9WQUxVRSkge1xuICAgICAgICAgICAgdGhpcy54aSA9IG90aGVyU2VnbWVudC5weDE7XG4gICAgICAgICAgICB0aGlzLnlpID0gZ3JhZDEgKiB0aGlzLnhpICsgaW50MTtcbiAgICAgICAgICAgIGlmICgoKG90aGVyU2VnbWVudC5weTEgLSB0aGlzLnlpKSAqICh0aGlzLnlpIC0gb3RoZXJTZWdtZW50LnB5MikgPCAtMC4wMDAwMSkgfHwgKCh0aGlzLnB5MSAtIHRoaXMueWkpICogKHRoaXMueWkgLSB0aGlzLnB5MikgPCAtMC4wMDAwMSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYSkgPCAwLjAwMDAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLnB4MSAtIHRoaXMueGkpICogKHRoaXMueGkgLSB0aGlzLnB4MikgPCAtMC4wMDAwMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdyYWQxID09PSBncmFkMikge1xuICAgICAgICAgICAgaWYgKGludDEgIT09IGludDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHRoaXMucHgxID49IE1hdGgubWluKG90aGVyU2VnbWVudC5weDEsIG90aGVyU2VnbWVudC5weDIpKSAmJiAodGhpcy5weDEgPD0gTWF0aC5tYXgob3RoZXJTZWdtZW50LnB5MSwgb3RoZXJTZWdtZW50LnB5MikpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54aSA9IHRoaXMucHgxO1xuICAgICAgICAgICAgICAgIHRoaXMueWkgPSB0aGlzLnB5MTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgodGhpcy5weDIgPj0gTWF0aC5taW4ob3RoZXJTZWdtZW50LnB4MSwgb3RoZXJTZWdtZW50LnB4MikpICYmICh0aGlzLnB4MiA8PSBNYXRoLm1heChvdGhlclNlZ21lbnQucHgxLCBvdGhlclNlZ21lbnQucHgyKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhpID0gdGhpcy5weDI7XG4gICAgICAgICAgICAgICAgdGhpcy55aSA9IHRoaXMucHkyO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueGkgPSAoKGludDIgLSBpbnQxKSAvIChncmFkMSAtIGdyYWQyKSk7XG4gICAgICAgIHRoaXMueWkgPSAoZ3JhZDEgKiB0aGlzLnhpICsgaW50MSk7XG4gICAgICAgIGlmICgoKHRoaXMucHgxIC0gdGhpcy54aSkgKiAodGhpcy54aSAtIHRoaXMucHgyKSA8IC0wLjAwMDAxKSB8fCAoKG90aGVyU2VnbWVudC5weDEgLSB0aGlzLnhpKSAqICh0aGlzLnhpIC0gb3RoZXJTZWdtZW50LnB4MikgPCAtMC4wMDAwMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCJmdW5jdGlvbiBpc1R5cGUodG9rZW4sIHR5cGUpIHtcbiAgICByZXR1cm4gdG9rZW4udHlwZSA9PT0gdHlwZTtcbn1cbmNvbnN0IFBBUkFNUyA9IHtcbiAgICBBOiA3LFxuICAgIGE6IDcsXG4gICAgQzogNixcbiAgICBjOiA2LFxuICAgIEg6IDEsXG4gICAgaDogMSxcbiAgICBMOiAyLFxuICAgIGw6IDIsXG4gICAgTTogMixcbiAgICBtOiAyLFxuICAgIFE6IDQsXG4gICAgcTogNCxcbiAgICBTOiA0LFxuICAgIHM6IDQsXG4gICAgVDogNCxcbiAgICB0OiAyLFxuICAgIFY6IDEsXG4gICAgdjogMSxcbiAgICBaOiAwLFxuICAgIHo6IDBcbn07XG5jbGFzcyBQYXJzZWRQYXRoIHtcbiAgICBjb25zdHJ1Y3RvcihkKSB7XG4gICAgICAgIHRoaXMuQ09NTUFORCA9IDA7XG4gICAgICAgIHRoaXMuTlVNQkVSID0gMTtcbiAgICAgICAgdGhpcy5FT0QgPSAyO1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIHRoaXMucGFyc2VEYXRhKGQpO1xuICAgICAgICB0aGlzLnByb2Nlc3NQb2ludHMoKTtcbiAgICB9XG4gICAgdG9rZW5pemUoZCkge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgd2hpbGUgKGQgIT09ICcnKSB7XG4gICAgICAgICAgICBpZiAoZC5tYXRjaCgvXihbIFxcdFxcclxcbixdKykvKSkge1xuICAgICAgICAgICAgICAgIGQgPSBkLnN1YnN0cihSZWdFeHAuJDEubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGQubWF0Y2goL14oW2FBY0NoSGxMbU1xUXNTdFR2VnpaXSkvKSkge1xuICAgICAgICAgICAgICAgIHRva2Vuc1t0b2tlbnMubGVuZ3RoXSA9IHsgdHlwZTogdGhpcy5DT01NQU5ELCB0ZXh0OiBSZWdFeHAuJDEgfTtcbiAgICAgICAgICAgICAgICBkID0gZC5zdWJzdHIoUmVnRXhwLiQxLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkLm1hdGNoKC9eKChbLStdP1swLTldKyhcXC5bMC05XSopP3xbLStdP1xcLlswLTldKykoW2VFXVstK10/WzAtOV0rKT8pLykpIHtcbiAgICAgICAgICAgICAgICB0b2tlbnNbdG9rZW5zLmxlbmd0aF0gPSB7IHR5cGU6IHRoaXMuTlVNQkVSLCB0ZXh0OiBgJHtwYXJzZUZsb2F0KFJlZ0V4cC4kMSl9YCB9O1xuICAgICAgICAgICAgICAgIGQgPSBkLnN1YnN0cihSZWdFeHAuJDEubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VucmVjb2duaXplZCBzZWdtZW50IGNvbW1hbmQ6ICcgKyBkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zW3Rva2Vucy5sZW5ndGhdID0geyB0eXBlOiB0aGlzLkVPRCwgdGV4dDogJycgfTtcbiAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICB9XG4gICAgcGFyc2VEYXRhKGQpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlbml6ZShkKTtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IHRva2VuID0gdG9rZW5zW2luZGV4XTtcbiAgICAgICAgbGV0IG1vZGUgPSAnQk9EJztcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB3aGlsZSAoIWlzVHlwZSh0b2tlbiwgdGhpcy5FT0QpKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1fbGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gJ0JPRCcpIHtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4udGV4dCA9PT0gJ00nIHx8IHRva2VuLnRleHQgPT09ICdtJykge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbV9sZW5ndGggPSBQQVJBTVNbdG9rZW4udGV4dF07XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZURhdGEoJ00wLDAnICsgZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNUeXBlKHRva2VuLCB0aGlzLk5VTUJFUikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1fbGVuZ3RoID0gUEFSQU1TW21vZGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1fbGVuZ3RoID0gUEFSQU1TW3Rva2VuLnRleHRdO1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKGluZGV4ICsgcGFyYW1fbGVuZ3RoKSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIHBhcmFtX2xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlVG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1R5cGUobnVtYmVUb2tlbiwgdGhpcy5OVU1CRVIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNbcGFyYW1zLmxlbmd0aF0gPSArbnVtYmVUb2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGFyYW1ldGVyIHR5cGUgaXMgbm90IGEgbnVtYmVyOiAnICsgbW9kZSArICcsJyArIG51bWJlVG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBQQVJBTVNbbW9kZV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlZ21lbnQgPSB7IGtleTogbW9kZSwgZGF0YTogcGFyYW1zIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gcGFyYW1fbGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRva2Vuc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnTScpXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlID0gJ0wnO1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ20nKVxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vuc3VwcG9ydGVkIHNlZ21lbnQgdHlwZTogJyArIG1vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGF0aCBkYXRhIGVuZGVkIGJlZm9yZSBhbGwgcGFyYW1ldGVycyB3ZXJlIGZvdW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGNsb3NlZCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jbG9zZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcyBvZiB0aGlzLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMua2V5LnRvTG93ZXJDYXNlKCkgPT09ICd6Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2xvc2VkO1xuICAgIH1cbiAgICBwcm9jZXNzUG9pbnRzKCkge1xuICAgICAgICBsZXQgZmlyc3QgPSBudWxsO1xuICAgICAgICBsZXQgY3VycmVudFBvaW50ID0gWzAsIDBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLnNlZ21lbnRzW2ldO1xuICAgICAgICAgICAgc3dpdGNoIChzLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW3MuZGF0YVswXSwgcy5kYXRhWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbcy5kYXRhWzBdICsgY3VycmVudFBvaW50WzBdLCBzLmRhdGFbMV0gKyBjdXJyZW50UG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtzLmRhdGFbMF0sIGN1cnJlbnRQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW3MuZGF0YVswXSArIGN1cnJlbnRQb2ludFswXSwgY3VycmVudFBvaW50WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbY3VycmVudFBvaW50WzBdLCBzLmRhdGFbMF1dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtjdXJyZW50UG9pbnRbMF0sIHMuZGF0YVswXSArIGN1cnJlbnRQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3onOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1onOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbZmlyc3RbMF0sIGZpcnN0WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtzLmRhdGFbNF0sIHMuZGF0YVs1XV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW3MuZGF0YVs0XSArIGN1cnJlbnRQb2ludFswXSwgcy5kYXRhWzVdICsgY3VycmVudFBvaW50WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbcy5kYXRhWzJdLCBzLmRhdGFbM11dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtzLmRhdGFbMl0gKyBjdXJyZW50UG9pbnRbMF0sIHMuZGF0YVszXSArIGN1cnJlbnRQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW3MuZGF0YVsyXSwgcy5kYXRhWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbcy5kYXRhWzJdICsgY3VycmVudFBvaW50WzBdLCBzLmRhdGFbM10gKyBjdXJyZW50UG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtzLmRhdGFbNV0sIHMuZGF0YVs2XV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW3MuZGF0YVs1XSArIGN1cnJlbnRQb2ludFswXSwgcy5kYXRhWzZdICsgY3VycmVudFBvaW50WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5rZXkgPT09ICdtJyB8fCBzLmtleSA9PT0gJ00nKSB7XG4gICAgICAgICAgICAgICAgZmlyc3QgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucG9pbnQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9pbnQgPSBzLnBvaW50O1xuICAgICAgICAgICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBzLnBvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLmtleSA9PT0gJ3onIHx8IHMua2V5ID09PSAnWicpIHtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUm91Z2hQYXRoIHtcbiAgICBjb25zdHJ1Y3RvcihkKSB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gWzAsIDBdO1xuICAgICAgICB0aGlzLl9maXJzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuYmV6aWVyUmVmbGVjdGlvblBvaW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5xdWFkUmVmbGVjdGlvblBvaW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJzZWQgPSBuZXcgUGFyc2VkUGF0aChkKTtcbiAgICB9XG4gICAgZ2V0IHNlZ21lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZWQuc2VnbWVudHM7XG4gICAgfVxuICAgIGdldCBjbG9zZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlZC5jbG9zZWQ7XG4gICAgfVxuICAgIGdldCBsaW5lYXJQb2ludHMoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbGluZWFyUG9pbnRzKSB7XG4gICAgICAgICAgICBjb25zdCBscCA9IFtdO1xuICAgICAgICAgICAgbGV0IHBvaW50cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIHRoaXMucGFyc2VkLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcy5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnbScgfHwga2V5ID09PSAneicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxwLnB1c2gocG9pbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICd6Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzLnB1c2gocy5wb2ludCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBscC5wdXNoKHBvaW50cyk7XG4gICAgICAgICAgICAgICAgcG9pbnRzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9saW5lYXJQb2ludHMgPSBscDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbGluZWFyUG9pbnRzO1xuICAgIH1cbiAgICBnZXQgZmlyc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdDtcbiAgICB9XG4gICAgc2V0IGZpcnN0KHYpIHtcbiAgICAgICAgdGhpcy5fZmlyc3QgPSB2O1xuICAgIH1cbiAgICBzZXRQb3NpdGlvbih4LCB5KSB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gW3gsIHldO1xuICAgICAgICBpZiAoIXRoaXMuX2ZpcnN0KSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdCA9IFt4LCB5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgICB9XG4gICAgZ2V0IHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvblswXTtcbiAgICB9XG4gICAgZ2V0IHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvblsxXTtcbiAgICB9XG59XG4vLyBBbGdvcml0aG0gYXMgZGVzY3JpYmVkIGluIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcvaW1wbG5vdGUuaHRtbFxuLy8gQ29kZSBhZGFwdGVkIGZyb20gbnNTVkdQYXRoRGF0YVBhcnNlci5jcHAgaW4gTW96aWxsYSBcbi8vIGh0dHBzOi8vaGcubW96aWxsYS5vcmcvbW96aWxsYS1jZW50cmFsL2ZpbGUvMTcxNTZmYmViYmM4L2NvbnRlbnQvc3ZnL2NvbnRlbnQvc3JjL25zU1ZHUGF0aERhdGFQYXJzZXIuY3BwI2w4ODdcbmV4cG9ydCBjbGFzcyBSb3VnaEFyY0NvbnZlcnRlciB7XG4gICAgY29uc3RydWN0b3IoZnJvbSwgdG8sIHJhZGlpLCBhbmdsZSwgbGFyZ2VBcmNGbGFnLCBzd2VlcEZsYWcpIHtcbiAgICAgICAgdGhpcy5fc2VnSW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9udW1TZWdzID0gMDtcbiAgICAgICAgdGhpcy5fcnggPSAwO1xuICAgICAgICB0aGlzLl9yeSA9IDA7XG4gICAgICAgIHRoaXMuX3NpblBoaSA9IDA7XG4gICAgICAgIHRoaXMuX2Nvc1BoaSA9IDA7XG4gICAgICAgIHRoaXMuX0MgPSBbMCwgMF07XG4gICAgICAgIHRoaXMuX3RoZXRhID0gMDtcbiAgICAgICAgdGhpcy5fZGVsdGEgPSAwO1xuICAgICAgICB0aGlzLl9UID0gMDtcbiAgICAgICAgdGhpcy5fZnJvbSA9IGZyb207XG4gICAgICAgIGlmIChmcm9tWzBdID09PSB0b1swXSAmJiBmcm9tWzFdID09PSB0b1sxXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhZFBlckRlZyA9IE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMuX3J4ID0gTWF0aC5hYnMocmFkaWlbMF0pO1xuICAgICAgICB0aGlzLl9yeSA9IE1hdGguYWJzKHJhZGlpWzFdKTtcbiAgICAgICAgdGhpcy5fc2luUGhpID0gTWF0aC5zaW4oYW5nbGUgKiByYWRQZXJEZWcpO1xuICAgICAgICB0aGlzLl9jb3NQaGkgPSBNYXRoLmNvcyhhbmdsZSAqIHJhZFBlckRlZyk7XG4gICAgICAgIGNvbnN0IHgxZGFzaCA9IHRoaXMuX2Nvc1BoaSAqIChmcm9tWzBdIC0gdG9bMF0pIC8gMi4wICsgdGhpcy5fc2luUGhpICogKGZyb21bMV0gLSB0b1sxXSkgLyAyLjA7XG4gICAgICAgIGNvbnN0IHkxZGFzaCA9IC10aGlzLl9zaW5QaGkgKiAoZnJvbVswXSAtIHRvWzBdKSAvIDIuMCArIHRoaXMuX2Nvc1BoaSAqIChmcm9tWzFdIC0gdG9bMV0pIC8gMi4wO1xuICAgICAgICBsZXQgcm9vdCA9IDA7XG4gICAgICAgIGNvbnN0IG51bWVyYXRvciA9IHRoaXMuX3J4ICogdGhpcy5fcnggKiB0aGlzLl9yeSAqIHRoaXMuX3J5IC0gdGhpcy5fcnggKiB0aGlzLl9yeCAqIHkxZGFzaCAqIHkxZGFzaCAtIHRoaXMuX3J5ICogdGhpcy5fcnkgKiB4MWRhc2ggKiB4MWRhc2g7XG4gICAgICAgIGlmIChudW1lcmF0b3IgPCAwKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gTWF0aC5zcXJ0KDEgLSAobnVtZXJhdG9yIC8gKHRoaXMuX3J4ICogdGhpcy5fcnggKiB0aGlzLl9yeSAqIHRoaXMuX3J5KSkpO1xuICAgICAgICAgICAgdGhpcy5fcnggPSB0aGlzLl9yeCAqIHM7XG4gICAgICAgICAgICB0aGlzLl9yeSA9IHRoaXMuX3J5ICogcztcbiAgICAgICAgICAgIHJvb3QgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcm9vdCA9IChsYXJnZUFyY0ZsYWcgPT09IHN3ZWVwRmxhZyA/IC0xLjAgOiAxLjApICpcbiAgICAgICAgICAgICAgICBNYXRoLnNxcnQobnVtZXJhdG9yIC8gKHRoaXMuX3J4ICogdGhpcy5fcnggKiB5MWRhc2ggKiB5MWRhc2ggKyB0aGlzLl9yeSAqIHRoaXMuX3J5ICogeDFkYXNoICogeDFkYXNoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3hkYXNoID0gcm9vdCAqIHRoaXMuX3J4ICogeTFkYXNoIC8gdGhpcy5fcnk7XG4gICAgICAgIGNvbnN0IGN5ZGFzaCA9IC1yb290ICogdGhpcy5fcnkgKiB4MWRhc2ggLyB0aGlzLl9yeDtcbiAgICAgICAgdGhpcy5fQyA9IFswLCAwXTtcbiAgICAgICAgdGhpcy5fQ1swXSA9IHRoaXMuX2Nvc1BoaSAqIGN4ZGFzaCAtIHRoaXMuX3NpblBoaSAqIGN5ZGFzaCArIChmcm9tWzBdICsgdG9bMF0pIC8gMi4wO1xuICAgICAgICB0aGlzLl9DWzFdID0gdGhpcy5fc2luUGhpICogY3hkYXNoICsgdGhpcy5fY29zUGhpICogY3lkYXNoICsgKGZyb21bMV0gKyB0b1sxXSkgLyAyLjA7XG4gICAgICAgIHRoaXMuX3RoZXRhID0gdGhpcy5jYWxjdWxhdGVWZWN0b3JBbmdsZSgxLjAsIDAuMCwgKHgxZGFzaCAtIGN4ZGFzaCkgLyB0aGlzLl9yeCwgKHkxZGFzaCAtIGN5ZGFzaCkgLyB0aGlzLl9yeSk7XG4gICAgICAgIGxldCBkdGhldGEgPSB0aGlzLmNhbGN1bGF0ZVZlY3RvckFuZ2xlKCh4MWRhc2ggLSBjeGRhc2gpIC8gdGhpcy5fcngsICh5MWRhc2ggLSBjeWRhc2gpIC8gdGhpcy5fcnksICgteDFkYXNoIC0gY3hkYXNoKSAvIHRoaXMuX3J4LCAoLXkxZGFzaCAtIGN5ZGFzaCkgLyB0aGlzLl9yeSk7XG4gICAgICAgIGlmICgoIXN3ZWVwRmxhZykgJiYgKGR0aGV0YSA+IDApKSB7XG4gICAgICAgICAgICBkdGhldGEgLT0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3dlZXBGbGFnICYmIChkdGhldGEgPCAwKSkge1xuICAgICAgICAgICAgZHRoZXRhICs9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX251bVNlZ3MgPSBNYXRoLmNlaWwoTWF0aC5hYnMoZHRoZXRhIC8gKE1hdGguUEkgLyAyKSkpO1xuICAgICAgICB0aGlzLl9kZWx0YSA9IGR0aGV0YSAvIHRoaXMuX251bVNlZ3M7XG4gICAgICAgIHRoaXMuX1QgPSAoOCAvIDMpICogTWF0aC5zaW4odGhpcy5fZGVsdGEgLyA0KSAqIE1hdGguc2luKHRoaXMuX2RlbHRhIC8gNCkgLyBNYXRoLnNpbih0aGlzLl9kZWx0YSAvIDIpO1xuICAgIH1cbiAgICBnZXROZXh0U2VnbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlZ0luZGV4ID09PSB0aGlzLl9udW1TZWdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb3NUaGV0YTEgPSBNYXRoLmNvcyh0aGlzLl90aGV0YSk7XG4gICAgICAgIGNvbnN0IHNpblRoZXRhMSA9IE1hdGguc2luKHRoaXMuX3RoZXRhKTtcbiAgICAgICAgY29uc3QgdGhldGEyID0gdGhpcy5fdGhldGEgKyB0aGlzLl9kZWx0YTtcbiAgICAgICAgY29uc3QgY29zVGhldGEyID0gTWF0aC5jb3ModGhldGEyKTtcbiAgICAgICAgY29uc3Qgc2luVGhldGEyID0gTWF0aC5zaW4odGhldGEyKTtcbiAgICAgICAgY29uc3QgdG8gPSBbXG4gICAgICAgICAgICB0aGlzLl9jb3NQaGkgKiB0aGlzLl9yeCAqIGNvc1RoZXRhMiAtIHRoaXMuX3NpblBoaSAqIHRoaXMuX3J5ICogc2luVGhldGEyICsgdGhpcy5fQ1swXSxcbiAgICAgICAgICAgIHRoaXMuX3NpblBoaSAqIHRoaXMuX3J4ICogY29zVGhldGEyICsgdGhpcy5fY29zUGhpICogdGhpcy5fcnkgKiBzaW5UaGV0YTIgKyB0aGlzLl9DWzFdXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGNwMSA9IFtcbiAgICAgICAgICAgIHRoaXMuX2Zyb21bMF0gKyB0aGlzLl9UICogKC10aGlzLl9jb3NQaGkgKiB0aGlzLl9yeCAqIHNpblRoZXRhMSAtIHRoaXMuX3NpblBoaSAqIHRoaXMuX3J5ICogY29zVGhldGExKSxcbiAgICAgICAgICAgIHRoaXMuX2Zyb21bMV0gKyB0aGlzLl9UICogKC10aGlzLl9zaW5QaGkgKiB0aGlzLl9yeCAqIHNpblRoZXRhMSArIHRoaXMuX2Nvc1BoaSAqIHRoaXMuX3J5ICogY29zVGhldGExKVxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBjcDIgPSBbXG4gICAgICAgICAgICB0b1swXSArIHRoaXMuX1QgKiAodGhpcy5fY29zUGhpICogdGhpcy5fcnggKiBzaW5UaGV0YTIgKyB0aGlzLl9zaW5QaGkgKiB0aGlzLl9yeSAqIGNvc1RoZXRhMiksXG4gICAgICAgICAgICB0b1sxXSArIHRoaXMuX1QgKiAodGhpcy5fc2luUGhpICogdGhpcy5fcnggKiBzaW5UaGV0YTIgLSB0aGlzLl9jb3NQaGkgKiB0aGlzLl9yeSAqIGNvc1RoZXRhMilcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5fdGhldGEgPSB0aGV0YTI7XG4gICAgICAgIHRoaXMuX2Zyb20gPSBbdG9bMF0sIHRvWzFdXTtcbiAgICAgICAgdGhpcy5fc2VnSW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNwMTogY3AxLFxuICAgICAgICAgICAgY3AyOiBjcDIsXG4gICAgICAgICAgICB0bzogdG9cbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2FsY3VsYXRlVmVjdG9yQW5nbGUodXgsIHV5LCB2eCwgdnkpIHtcbiAgICAgICAgY29uc3QgdGEgPSBNYXRoLmF0YW4yKHV5LCB1eCk7XG4gICAgICAgIGNvbnN0IHRiID0gTWF0aC5hdGFuMih2eSwgdngpO1xuICAgICAgICBpZiAodGIgPj0gdGEpXG4gICAgICAgICAgICByZXR1cm4gdGIgLSB0YTtcbiAgICAgICAgcmV0dXJuIDIgKiBNYXRoLlBJIC0gKHRhIC0gdGIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQYXRoRml0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzZXRzLCBjbG9zZWQpIHtcbiAgICAgICAgdGhpcy5zZXRzID0gc2V0cztcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBjbG9zZWQ7XG4gICAgfVxuICAgIGZpdChzaW1wbGlmaWNhdGlvbikge1xuICAgICAgICBjb25zdCBvdXRTZXRzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc2V0IG9mIHRoaXMuc2V0cykge1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gc2V0Lmxlbmd0aDtcbiAgICAgICAgICAgIGxldCBlc3RMZW5ndGggPSBNYXRoLmZsb29yKHNpbXBsaWZpY2F0aW9uICogbGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChlc3RMZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA8PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlc3RMZW5ndGggPSA1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0U2V0cy5wdXNoKHRoaXMucmVkdWNlKHNldCwgZXN0TGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGQgPSAnJztcbiAgICAgICAgZm9yIChjb25zdCBzZXQgb2Ygb3V0U2V0cykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludCA9IHNldFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkICs9ICdNJyArIHBvaW50WzBdICsgJywnICsgcG9pbnRbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkICs9ICdMJyArIHBvaW50WzBdICsgJywnICsgcG9pbnRbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgZCArPSAneiAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBkaXN0YW5jZShwMSwgcDIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMVswXSAtIHAyWzBdLCAyKSArIE1hdGgucG93KHAxWzFdIC0gcDJbMV0sIDIpKTtcbiAgICB9XG4gICAgcmVkdWNlKHNldCwgY291bnQpIHtcbiAgICAgICAgaWYgKHNldC5sZW5ndGggPD0gY291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9pbnRzID0gc2V0LnNsaWNlKDApO1xuICAgICAgICB3aGlsZSAocG9pbnRzLmxlbmd0aCA+IGNvdW50KSB7XG4gICAgICAgICAgICBjb25zdCBhcmVhcyA9IFtdO1xuICAgICAgICAgICAgbGV0IG1pbkFyZWEgPSAtMTtcbiAgICAgICAgICAgIGxldCBtaW5JbmRleCA9IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAocG9pbnRzLmxlbmd0aCAtIDEpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gdGhpcy5kaXN0YW5jZShwb2ludHNbaSAtIDFdLCBwb2ludHNbaV0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGIgPSB0aGlzLmRpc3RhbmNlKHBvaW50c1tpXSwgcG9pbnRzW2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuZGlzdGFuY2UocG9pbnRzW2kgLSAxXSwgcG9pbnRzW2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IChhICsgYiArIGMpIC8gMi4wO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyZWEgPSBNYXRoLnNxcnQocyAqIChzIC0gYSkgKiAocyAtIGIpICogKHMgLSBjKSk7XG4gICAgICAgICAgICAgICAgYXJlYXMucHVzaChhcmVhKTtcbiAgICAgICAgICAgICAgICBpZiAoKG1pbkFyZWEgPCAwKSB8fCAoYXJlYSA8IG1pbkFyZWEpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkFyZWEgPSBhcmVhO1xuICAgICAgICAgICAgICAgICAgICBtaW5JbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1pbkluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIHBvaW50cy5zcGxpY2UobWluSW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSb3VnaFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XG5jb25zdCBoYXNTZWxmID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnO1xuY29uc3Qgcm91Z2hTY3JpcHQgPSBoYXNTZWxmICYmIHNlbGYgJiYgc2VsZi5kb2N1bWVudCAmJiBzZWxmLmRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgc2VsZi5kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZW5kZXJlcihjb25maWcpIHtcbiAgICBpZiAoaGFzU2VsZiAmJiByb3VnaFNjcmlwdCAmJiBzZWxmICYmIHNlbGYud29ya2x5ICYmIGNvbmZpZy5hc3luYyAmJiAoIWNvbmZpZy5ub1dvcmtlcikpIHtcbiAgICAgICAgY29uc3Qgd29ya2x5U291cmNlID0gY29uZmlnLndvcmtseVVSTCB8fCAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3BzaGlobi93b3JrbHkvZGlzdC93b3JrbHkubWluLmpzJztcbiAgICAgICAgaWYgKHdvcmtseVNvdXJjZSkge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IGBpbXBvcnRTY3JpcHRzKCcke3dvcmtseVNvdXJjZX0nLCAnJHtyb3VnaFNjcmlwdH0nKTtcXG53b3JrbHkuZXhwb3NlKHNlbGYucm91Z2guY3JlYXRlUmVuZGVyZXIoKSk7YDtcbiAgICAgICAgICAgIGNvbnN0IG91cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtjb2RlXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYud29ya2x5LnByb3h5KG91cmwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUm91Z2hSZW5kZXJlcigpO1xufVxuIiwiaW1wb3J0IHsgUm91Z2hQYXRoLCBSb3VnaEFyY0NvbnZlcnRlciwgUGF0aEZpdHRlciB9IGZyb20gJy4vcGF0aC5qcyc7XG5pbXBvcnQgeyBnZXRGaWxsZXIgfSBmcm9tICcuL2ZpbGxlcnMvZmlsbGVyJztcbmV4cG9ydCBjbGFzcyBSb3VnaFJlbmRlcmVyIHtcbiAgICBsaW5lKHgxLCB5MSwgeDIsIHkyLCBvKSB7XG4gICAgICAgIGNvbnN0IG9wcyA9IHRoaXMuZG91YmxlTGluZSh4MSwgeTEsIHgyLCB5Miwgbyk7XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdwYXRoJywgb3BzIH07XG4gICAgfVxuICAgIGxpbmVhclBhdGgocG9pbnRzLCBjbG9zZSwgbykge1xuICAgICAgICBjb25zdCBsZW4gPSAocG9pbnRzIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAyKSB7XG4gICAgICAgICAgICBsZXQgb3BzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChsZW4gLSAxKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdCh0aGlzLmRvdWJsZUxpbmUocG9pbnRzW2ldWzBdLCBwb2ludHNbaV1bMV0sIHBvaW50c1tpICsgMV1bMF0sIHBvaW50c1tpICsgMV1bMV0sIG8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbG9zZSkge1xuICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKHBvaW50c1tsZW4gLSAxXVswXSwgcG9pbnRzW2xlbiAtIDFdWzFdLCBwb2ludHNbMF1bMF0sIHBvaW50c1swXVsxXSwgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3BhdGgnLCBvcHMgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsZW4gPT09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmUocG9pbnRzWzBdWzBdLCBwb2ludHNbMF1bMV0sIHBvaW50c1sxXVswXSwgcG9pbnRzWzFdWzFdLCBvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0eXBlOiAncGF0aCcsIG9wczogW10gfTtcbiAgICB9XG4gICAgcG9seWdvbihwb2ludHMsIG8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGluZWFyUGF0aChwb2ludHMsIHRydWUsIG8pO1xuICAgIH1cbiAgICByZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgbykge1xuICAgICAgICBjb25zdCBwb2ludHMgPSBbXG4gICAgICAgICAgICBbeCwgeV0sIFt4ICsgd2lkdGgsIHldLCBbeCArIHdpZHRoLCB5ICsgaGVpZ2h0XSwgW3gsIHkgKyBoZWlnaHRdXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlnb24ocG9pbnRzLCBvKTtcbiAgICB9XG4gICAgY3VydmUocG9pbnRzLCBvKSB7XG4gICAgICAgIGNvbnN0IG8xID0gdGhpcy5fY3VydmVXaXRoT2Zmc2V0KHBvaW50cywgMSAqICgxICsgby5yb3VnaG5lc3MgKiAwLjIpLCBvKTtcbiAgICAgICAgY29uc3QgbzIgPSB0aGlzLl9jdXJ2ZVdpdGhPZmZzZXQocG9pbnRzLCAxLjUgKiAoMSArIG8ucm91Z2huZXNzICogMC4yMiksIG8pO1xuICAgICAgICByZXR1cm4geyB0eXBlOiAncGF0aCcsIG9wczogbzEuY29uY2F0KG8yKSB9O1xuICAgIH1cbiAgICBlbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG8pIHtcbiAgICAgICAgY29uc3QgaW5jcmVtZW50ID0gKE1hdGguUEkgKiAyKSAvIG8uY3VydmVTdGVwQ291bnQ7XG4gICAgICAgIGxldCByeCA9IE1hdGguYWJzKHdpZHRoIC8gMik7XG4gICAgICAgIGxldCByeSA9IE1hdGguYWJzKGhlaWdodCAvIDIpO1xuICAgICAgICByeCArPSB0aGlzLmdldE9mZnNldCgtcnggKiAwLjA1LCByeCAqIDAuMDUsIG8pO1xuICAgICAgICByeSArPSB0aGlzLmdldE9mZnNldCgtcnkgKiAwLjA1LCByeSAqIDAuMDUsIG8pO1xuICAgICAgICBjb25zdCBvMSA9IHRoaXMuX2VsbGlwc2UoaW5jcmVtZW50LCB4LCB5LCByeCwgcnksIDEsIGluY3JlbWVudCAqIHRoaXMuZ2V0T2Zmc2V0KDAuMSwgdGhpcy5nZXRPZmZzZXQoMC40LCAxLCBvKSwgbyksIG8pO1xuICAgICAgICBjb25zdCBvMiA9IHRoaXMuX2VsbGlwc2UoaW5jcmVtZW50LCB4LCB5LCByeCwgcnksIDEuNSwgMCwgbyk7XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdwYXRoJywgb3BzOiBvMS5jb25jYXQobzIpIH07XG4gICAgfVxuICAgIGFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgY2xvc2VkLCByb3VnaENsb3N1cmUsIG8pIHtcbiAgICAgICAgY29uc3QgY3ggPSB4O1xuICAgICAgICBjb25zdCBjeSA9IHk7XG4gICAgICAgIGxldCByeCA9IE1hdGguYWJzKHdpZHRoIC8gMik7XG4gICAgICAgIGxldCByeSA9IE1hdGguYWJzKGhlaWdodCAvIDIpO1xuICAgICAgICByeCArPSB0aGlzLmdldE9mZnNldCgtcnggKiAwLjAxLCByeCAqIDAuMDEsIG8pO1xuICAgICAgICByeSArPSB0aGlzLmdldE9mZnNldCgtcnkgKiAwLjAxLCByeSAqIDAuMDEsIG8pO1xuICAgICAgICBsZXQgc3RydCA9IHN0YXJ0O1xuICAgICAgICBsZXQgc3RwID0gc3RvcDtcbiAgICAgICAgd2hpbGUgKHN0cnQgPCAwKSB7XG4gICAgICAgICAgICBzdHJ0ICs9IE1hdGguUEkgKiAyO1xuICAgICAgICAgICAgc3RwICs9IE1hdGguUEkgKiAyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3RwIC0gc3RydCkgPiAoTWF0aC5QSSAqIDIpKSB7XG4gICAgICAgICAgICBzdHJ0ID0gMDtcbiAgICAgICAgICAgIHN0cCA9IE1hdGguUEkgKiAyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsbGlwc2VJbmMgPSAoTWF0aC5QSSAqIDIpIC8gby5jdXJ2ZVN0ZXBDb3VudDtcbiAgICAgICAgY29uc3QgYXJjSW5jID0gTWF0aC5taW4oZWxsaXBzZUluYyAvIDIsIChzdHAgLSBzdHJ0KSAvIDIpO1xuICAgICAgICBjb25zdCBvMSA9IHRoaXMuX2FyYyhhcmNJbmMsIGN4LCBjeSwgcngsIHJ5LCBzdHJ0LCBzdHAsIDEsIG8pO1xuICAgICAgICBjb25zdCBvMiA9IHRoaXMuX2FyYyhhcmNJbmMsIGN4LCBjeSwgcngsIHJ5LCBzdHJ0LCBzdHAsIDEuNSwgbyk7XG4gICAgICAgIGxldCBvcHMgPSBvMS5jb25jYXQobzIpO1xuICAgICAgICBpZiAoY2xvc2VkKSB7XG4gICAgICAgICAgICBpZiAocm91Z2hDbG9zdXJlKSB7XG4gICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdCh0aGlzLmRvdWJsZUxpbmUoY3gsIGN5LCBjeCArIHJ4ICogTWF0aC5jb3Moc3RydCksIGN5ICsgcnkgKiBNYXRoLnNpbihzdHJ0KSwgbykpO1xuICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKGN4LCBjeSwgY3ggKyByeCAqIE1hdGguY29zKHN0cCksIGN5ICsgcnkgKiBNYXRoLnNpbihzdHApLCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHMucHVzaCh7IG9wOiAnbGluZVRvJywgZGF0YTogW2N4LCBjeV0gfSk7XG4gICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ2xpbmVUbycsIGRhdGE6IFtjeCArIHJ4ICogTWF0aC5jb3Moc3RydCksIGN5ICsgcnkgKiBNYXRoLnNpbihzdHJ0KV0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3BhdGgnLCBvcHMgfTtcbiAgICB9XG4gICAgc3ZnUGF0aChwYXRoLCBvKSB7XG4gICAgICAgIHBhdGggPSAocGF0aCB8fCAnJykucmVwbGFjZSgvXFxuL2csICcgJykucmVwbGFjZSgvKC1cXHMpL2csICctJykucmVwbGFjZSgnLyhcXHNcXHMpL2cnLCAnICcpO1xuICAgICAgICBsZXQgcCA9IG5ldyBSb3VnaFBhdGgocGF0aCk7XG4gICAgICAgIGlmIChvLnNpbXBsaWZpY2F0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBmaXR0ZXIgPSBuZXcgUGF0aEZpdHRlcihwLmxpbmVhclBvaW50cywgcC5jbG9zZWQpO1xuICAgICAgICAgICAgY29uc3QgZCA9IGZpdHRlci5maXQoby5zaW1wbGlmaWNhdGlvbik7XG4gICAgICAgICAgICBwID0gbmV3IFJvdWdoUGF0aChkKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3BzID0gW107XG4gICAgICAgIGNvbnN0IHNlZ21lbnRzID0gcC5zZWdtZW50cyB8fCBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcyA9IHNlZ21lbnRzW2ldO1xuICAgICAgICAgICAgY29uc3QgcHJldiA9IGkgPiAwID8gc2VnbWVudHNbaSAtIDFdIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IG9wTGlzdCA9IHRoaXMuX3Byb2Nlc3NTZWdtZW50KHAsIHMsIHByZXYsIG8pO1xuICAgICAgICAgICAgaWYgKG9wTGlzdCAmJiBvcExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdChvcExpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdwYXRoJywgb3BzIH07XG4gICAgfVxuICAgIHNvbGlkRmlsbFBvbHlnb24ocG9pbnRzLCBvKSB7XG4gICAgICAgIGNvbnN0IG9wcyA9IFtdO1xuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gby5tYXhSYW5kb21uZXNzT2Zmc2V0IHx8IDA7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBwb2ludHMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGxlbiA+IDIpIHtcbiAgICAgICAgICAgICAgICBvcHMucHVzaCh7IG9wOiAnbW92ZScsIGRhdGE6IFtwb2ludHNbMF1bMF0gKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLCBwb2ludHNbMF1bMV0gKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pXSB9KTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wcy5wdXNoKHsgb3A6ICdsaW5lVG8nLCBkYXRhOiBbcG9pbnRzW2ldWzBdICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSwgcG9pbnRzW2ldWzFdICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKV0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdmaWxsUGF0aCcsIG9wcyB9O1xuICAgIH1cbiAgICBwYXR0ZXJuRmlsbFBvbHlnb24ocG9pbnRzLCBvKSB7XG4gICAgICAgIGNvbnN0IGZpbGxlciA9IGdldEZpbGxlcih0aGlzLCBvKTtcbiAgICAgICAgcmV0dXJuIGZpbGxlci5maWxsUG9seWdvbihwb2ludHMsIG8pO1xuICAgIH1cbiAgICBwYXR0ZXJuRmlsbEVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvKSB7XG4gICAgICAgIGNvbnN0IGZpbGxlciA9IGdldEZpbGxlcih0aGlzLCBvKTtcbiAgICAgICAgcmV0dXJuIGZpbGxlci5maWxsRWxsaXBzZShjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIG8pO1xuICAgIH1cbiAgICBwYXR0ZXJuRmlsbEFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgbykge1xuICAgICAgICBjb25zdCBjeCA9IHg7XG4gICAgICAgIGNvbnN0IGN5ID0geTtcbiAgICAgICAgbGV0IHJ4ID0gTWF0aC5hYnMod2lkdGggLyAyKTtcbiAgICAgICAgbGV0IHJ5ID0gTWF0aC5hYnMoaGVpZ2h0IC8gMik7XG4gICAgICAgIHJ4ICs9IHRoaXMuZ2V0T2Zmc2V0KC1yeCAqIDAuMDEsIHJ4ICogMC4wMSwgbyk7XG4gICAgICAgIHJ5ICs9IHRoaXMuZ2V0T2Zmc2V0KC1yeSAqIDAuMDEsIHJ5ICogMC4wMSwgbyk7XG4gICAgICAgIGxldCBzdHJ0ID0gc3RhcnQ7XG4gICAgICAgIGxldCBzdHAgPSBzdG9wO1xuICAgICAgICB3aGlsZSAoc3RydCA8IDApIHtcbiAgICAgICAgICAgIHN0cnQgKz0gTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICBzdHAgKz0gTWF0aC5QSSAqIDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzdHAgLSBzdHJ0KSA+IChNYXRoLlBJICogMikpIHtcbiAgICAgICAgICAgIHN0cnQgPSAwO1xuICAgICAgICAgICAgc3RwID0gTWF0aC5QSSAqIDI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5jcmVtZW50ID0gKHN0cCAtIHN0cnQpIC8gby5jdXJ2ZVN0ZXBDb3VudDtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gW107XG4gICAgICAgIGZvciAobGV0IGFuZ2xlID0gc3RydDsgYW5nbGUgPD0gc3RwOyBhbmdsZSA9IGFuZ2xlICsgaW5jcmVtZW50KSB7XG4gICAgICAgICAgICBwb2ludHMucHVzaChbY3ggKyByeCAqIE1hdGguY29zKGFuZ2xlKSwgY3kgKyByeSAqIE1hdGguc2luKGFuZ2xlKV0pO1xuICAgICAgICB9XG4gICAgICAgIHBvaW50cy5wdXNoKFtjeCArIHJ4ICogTWF0aC5jb3Moc3RwKSwgY3kgKyByeSAqIE1hdGguc2luKHN0cCldKTtcbiAgICAgICAgcG9pbnRzLnB1c2goW2N4LCBjeV0pO1xuICAgICAgICByZXR1cm4gdGhpcy5wYXR0ZXJuRmlsbFBvbHlnb24ocG9pbnRzLCBvKTtcbiAgICB9XG4gICAgLy8vIFxuICAgIGdldE9mZnNldChtaW4sIG1heCwgb3BzKSB7XG4gICAgICAgIHJldHVybiBvcHMucm91Z2huZXNzICogKChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluKTtcbiAgICB9XG4gICAgZG91YmxlTGluZSh4MSwgeTEsIHgyLCB5Miwgbykge1xuICAgICAgICBjb25zdCBvMSA9IHRoaXMuX2xpbmUoeDEsIHkxLCB4MiwgeTIsIG8sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgbzIgPSB0aGlzLl9saW5lKHgxLCB5MSwgeDIsIHkyLCBvLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG8xLmNvbmNhdChvMik7XG4gICAgfVxuICAgIF9saW5lKHgxLCB5MSwgeDIsIHkyLCBvLCBtb3ZlLCBvdmVybGF5KSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aFNxID0gTWF0aC5wb3coKHgxIC0geDIpLCAyKSArIE1hdGgucG93KCh5MSAtIHkyKSwgMik7XG4gICAgICAgIGxldCBvZmZzZXQgPSBvLm1heFJhbmRvbW5lc3NPZmZzZXQgfHwgMDtcbiAgICAgICAgaWYgKChvZmZzZXQgKiBvZmZzZXQgKiAxMDApID4gbGVuZ3RoU3EpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IE1hdGguc3FydChsZW5ndGhTcSkgLyAxMDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYWxmT2Zmc2V0ID0gb2Zmc2V0IC8gMjtcbiAgICAgICAgY29uc3QgZGl2ZXJnZVBvaW50ID0gMC4yICsgTWF0aC5yYW5kb20oKSAqIDAuMjtcbiAgICAgICAgbGV0IG1pZERpc3BYID0gby5ib3dpbmcgKiBvLm1heFJhbmRvbW5lc3NPZmZzZXQgKiAoeTIgLSB5MSkgLyAyMDA7XG4gICAgICAgIGxldCBtaWREaXNwWSA9IG8uYm93aW5nICogby5tYXhSYW5kb21uZXNzT2Zmc2V0ICogKHgxIC0geDIpIC8gMjAwO1xuICAgICAgICBtaWREaXNwWCA9IHRoaXMuZ2V0T2Zmc2V0KC1taWREaXNwWCwgbWlkRGlzcFgsIG8pO1xuICAgICAgICBtaWREaXNwWSA9IHRoaXMuZ2V0T2Zmc2V0KC1taWREaXNwWSwgbWlkRGlzcFksIG8pO1xuICAgICAgICBjb25zdCBvcHMgPSBbXTtcbiAgICAgICAgaWYgKG1vdmUpIHtcbiAgICAgICAgICAgIGlmIChvdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBvcDogJ21vdmUnLCBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB4MSArIHRoaXMuZ2V0T2Zmc2V0KC1oYWxmT2Zmc2V0LCBoYWxmT2Zmc2V0LCBvKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxICsgdGhpcy5nZXRPZmZzZXQoLWhhbGZPZmZzZXQsIGhhbGZPZmZzZXQsIG8pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgb3A6ICdtb3ZlJywgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeDEgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTEgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob3ZlcmxheSkge1xuICAgICAgICAgICAgb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9wOiAnYmN1cnZlVG8nLCBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgIG1pZERpc3BYICsgeDEgKyAoeDIgLSB4MSkgKiBkaXZlcmdlUG9pbnQgKyB0aGlzLmdldE9mZnNldCgtaGFsZk9mZnNldCwgaGFsZk9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgIG1pZERpc3BZICsgeTEgKyAoeTIgLSB5MSkgKiBkaXZlcmdlUG9pbnQgKyB0aGlzLmdldE9mZnNldCgtaGFsZk9mZnNldCwgaGFsZk9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgIG1pZERpc3BYICsgeDEgKyAyICogKHgyIC0geDEpICogZGl2ZXJnZVBvaW50ICsgdGhpcy5nZXRPZmZzZXQoLWhhbGZPZmZzZXQsIGhhbGZPZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgICAgICBtaWREaXNwWSArIHkxICsgMiAqICh5MiAtIHkxKSAqIGRpdmVyZ2VQb2ludCArIHRoaXMuZ2V0T2Zmc2V0KC1oYWxmT2Zmc2V0LCBoYWxmT2Zmc2V0LCBvKSxcbiAgICAgICAgICAgICAgICAgICAgeDIgKyB0aGlzLmdldE9mZnNldCgtaGFsZk9mZnNldCwgaGFsZk9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgIHkyICsgdGhpcy5nZXRPZmZzZXQoLWhhbGZPZmZzZXQsIGhhbGZPZmZzZXQsIG8pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgb3A6ICdiY3VydmVUbycsIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgbWlkRGlzcFggKyB4MSArICh4MiAtIHgxKSAqIGRpdmVyZ2VQb2ludCArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgIG1pZERpc3BZICsgeTEgKyAoeTIgLSB5MSkgKiBkaXZlcmdlUG9pbnQgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgICAgICBtaWREaXNwWCArIHgxICsgMiAqICh4MiAtIHgxKSAqIGRpdmVyZ2VQb2ludCArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgIG1pZERpc3BZICsgeTEgKyAyICogKHkyIC0geTEpICogZGl2ZXJnZVBvaW50ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSxcbiAgICAgICAgICAgICAgICAgICAgeDIgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgICAgICB5MiArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbylcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3BzO1xuICAgIH1cbiAgICBfY3VydmUocG9pbnRzLCBjbG9zZVBvaW50LCBvKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIGxldCBvcHMgPSBbXTtcbiAgICAgICAgaWYgKGxlbiA+IDMpIHtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSAxIC0gby5jdXJ2ZVRpZ2h0bmVzcztcbiAgICAgICAgICAgIG9wcy5wdXNoKHsgb3A6ICdtb3ZlJywgZGF0YTogW3BvaW50c1sxXVswXSwgcG9pbnRzWzFdWzFdXSB9KTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyAoaSArIDIpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWRWZXJ0QXJyYXkgPSBwb2ludHNbaV07XG4gICAgICAgICAgICAgICAgYlswXSA9IFtjYWNoZWRWZXJ0QXJyYXlbMF0sIGNhY2hlZFZlcnRBcnJheVsxXV07XG4gICAgICAgICAgICAgICAgYlsxXSA9IFtjYWNoZWRWZXJ0QXJyYXlbMF0gKyAocyAqIHBvaW50c1tpICsgMV1bMF0gLSBzICogcG9pbnRzW2kgLSAxXVswXSkgLyA2LCBjYWNoZWRWZXJ0QXJyYXlbMV0gKyAocyAqIHBvaW50c1tpICsgMV1bMV0gLSBzICogcG9pbnRzW2kgLSAxXVsxXSkgLyA2XTtcbiAgICAgICAgICAgICAgICBiWzJdID0gW3BvaW50c1tpICsgMV1bMF0gKyAocyAqIHBvaW50c1tpXVswXSAtIHMgKiBwb2ludHNbaSArIDJdWzBdKSAvIDYsIHBvaW50c1tpICsgMV1bMV0gKyAocyAqIHBvaW50c1tpXVsxXSAtIHMgKiBwb2ludHNbaSArIDJdWzFdKSAvIDZdO1xuICAgICAgICAgICAgICAgIGJbM10gPSBbcG9pbnRzW2kgKyAxXVswXSwgcG9pbnRzW2kgKyAxXVsxXV07XG4gICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ2JjdXJ2ZVRvJywgZGF0YTogW2JbMV1bMF0sIGJbMV1bMV0sIGJbMl1bMF0sIGJbMl1bMV0sIGJbM11bMF0sIGJbM11bMV1dIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNsb3NlUG9pbnQgJiYgY2xvc2VQb2ludC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBybyA9IG8ubWF4UmFuZG9tbmVzc09mZnNldDtcbiAgICAgICAgICAgICAgICBvcHMucHVzaCh7IG9wOiAnbGluZVRvJywgZGF0YTogW2Nsb3NlUG9pbnRbMF0gKyB0aGlzLmdldE9mZnNldCgtcm8sIHJvLCBvKSwgY2xvc2VQb2ludFsxXSArICt0aGlzLmdldE9mZnNldCgtcm8sIHJvLCBvKV0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGVuID09PSAzKSB7XG4gICAgICAgICAgICBvcHMucHVzaCh7IG9wOiAnbW92ZScsIGRhdGE6IFtwb2ludHNbMV1bMF0sIHBvaW50c1sxXVsxXV0gfSk7XG4gICAgICAgICAgICBvcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgb3A6ICdiY3VydmVUbycsIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzWzFdWzBdLCBwb2ludHNbMV1bMV0sXG4gICAgICAgICAgICAgICAgICAgIHBvaW50c1syXVswXSwgcG9pbnRzWzJdWzFdLFxuICAgICAgICAgICAgICAgICAgICBwb2ludHNbMl1bMF0sIHBvaW50c1syXVsxXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxlbiA9PT0gMikge1xuICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdCh0aGlzLmRvdWJsZUxpbmUocG9pbnRzWzBdWzBdLCBwb2ludHNbMF1bMV0sIHBvaW50c1sxXVswXSwgcG9pbnRzWzFdWzFdLCBvKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wcztcbiAgICB9XG4gICAgX2VsbGlwc2UoaW5jcmVtZW50LCBjeCwgY3ksIHJ4LCByeSwgb2Zmc2V0LCBvdmVybGFwLCBvKSB7XG4gICAgICAgIGNvbnN0IHJhZE9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KC0wLjUsIDAuNSwgbykgLSAoTWF0aC5QSSAvIDIpO1xuICAgICAgICBjb25zdCBwb2ludHMgPSBbXTtcbiAgICAgICAgcG9pbnRzLnB1c2goW1xuICAgICAgICAgICAgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSArIGN4ICsgMC45ICogcnggKiBNYXRoLmNvcyhyYWRPZmZzZXQgLSBpbmNyZW1lbnQpLFxuICAgICAgICAgICAgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSArIGN5ICsgMC45ICogcnkgKiBNYXRoLnNpbihyYWRPZmZzZXQgLSBpbmNyZW1lbnQpXG4gICAgICAgIF0pO1xuICAgICAgICBmb3IgKGxldCBhbmdsZSA9IHJhZE9mZnNldDsgYW5nbGUgPCAoTWF0aC5QSSAqIDIgKyByYWRPZmZzZXQgLSAwLjAxKTsgYW5nbGUgPSBhbmdsZSArIGluY3JlbWVudCkge1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goW1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeCArIHJ4ICogTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeSArIHJ5ICogTWF0aC5zaW4oYW5nbGUpXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgICBwb2ludHMucHVzaChbXG4gICAgICAgICAgICB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pICsgY3ggKyByeCAqIE1hdGguY29zKHJhZE9mZnNldCArIE1hdGguUEkgKiAyICsgb3ZlcmxhcCAqIDAuNSksXG4gICAgICAgICAgICB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pICsgY3kgKyByeSAqIE1hdGguc2luKHJhZE9mZnNldCArIE1hdGguUEkgKiAyICsgb3ZlcmxhcCAqIDAuNSlcbiAgICAgICAgXSk7XG4gICAgICAgIHBvaW50cy5wdXNoKFtcbiAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeCArIDAuOTggKiByeCAqIE1hdGguY29zKHJhZE9mZnNldCArIG92ZXJsYXApLFxuICAgICAgICAgICAgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSArIGN5ICsgMC45OCAqIHJ5ICogTWF0aC5zaW4ocmFkT2Zmc2V0ICsgb3ZlcmxhcClcbiAgICAgICAgXSk7XG4gICAgICAgIHBvaW50cy5wdXNoKFtcbiAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeCArIDAuOSAqIHJ4ICogTWF0aC5jb3MocmFkT2Zmc2V0ICsgb3ZlcmxhcCAqIDAuNSksXG4gICAgICAgICAgICB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pICsgY3kgKyAwLjkgKiByeSAqIE1hdGguc2luKHJhZE9mZnNldCArIG92ZXJsYXAgKiAwLjUpXG4gICAgICAgIF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VydmUocG9pbnRzLCBudWxsLCBvKTtcbiAgICB9XG4gICAgX2N1cnZlV2l0aE9mZnNldChwb2ludHMsIG9mZnNldCwgbykge1xuICAgICAgICBjb25zdCBwcyA9IFtdO1xuICAgICAgICBwcy5wdXNoKFtcbiAgICAgICAgICAgIHBvaW50c1swXVswXSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksXG4gICAgICAgICAgICBwb2ludHNbMF1bMV0gKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICBdKTtcbiAgICAgICAgcHMucHVzaChbXG4gICAgICAgICAgICBwb2ludHNbMF1bMF0gKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgcG9pbnRzWzBdWzFdICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSxcbiAgICAgICAgXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwcy5wdXNoKFtcbiAgICAgICAgICAgICAgICBwb2ludHNbaV1bMF0gKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgIHBvaW50c1tpXVsxXSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGlmIChpID09PSAocG9pbnRzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgcHMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgIHBvaW50c1tpXVswXSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgIHBvaW50c1tpXVsxXSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnZlKHBzLCBudWxsLCBvKTtcbiAgICB9XG4gICAgX2FyYyhpbmNyZW1lbnQsIGN4LCBjeSwgcngsIHJ5LCBzdHJ0LCBzdHAsIG9mZnNldCwgbykge1xuICAgICAgICBjb25zdCByYWRPZmZzZXQgPSBzdHJ0ICsgdGhpcy5nZXRPZmZzZXQoLTAuMSwgMC4xLCBvKTtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gW107XG4gICAgICAgIHBvaW50cy5wdXNoKFtcbiAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeCArIDAuOSAqIHJ4ICogTWF0aC5jb3MocmFkT2Zmc2V0IC0gaW5jcmVtZW50KSxcbiAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeSArIDAuOSAqIHJ5ICogTWF0aC5zaW4ocmFkT2Zmc2V0IC0gaW5jcmVtZW50KVxuICAgICAgICBdKTtcbiAgICAgICAgZm9yIChsZXQgYW5nbGUgPSByYWRPZmZzZXQ7IGFuZ2xlIDw9IHN0cDsgYW5nbGUgPSBhbmdsZSArIGluY3JlbWVudCkge1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goW1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeCArIHJ4ICogTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeSArIHJ5ICogTWF0aC5zaW4oYW5nbGUpXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgICBwb2ludHMucHVzaChbXG4gICAgICAgICAgICBjeCArIHJ4ICogTWF0aC5jb3Moc3RwKSxcbiAgICAgICAgICAgIGN5ICsgcnkgKiBNYXRoLnNpbihzdHApXG4gICAgICAgIF0pO1xuICAgICAgICBwb2ludHMucHVzaChbXG4gICAgICAgICAgICBjeCArIHJ4ICogTWF0aC5jb3Moc3RwKSxcbiAgICAgICAgICAgIGN5ICsgcnkgKiBNYXRoLnNpbihzdHApXG4gICAgICAgIF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VydmUocG9pbnRzLCBudWxsLCBvKTtcbiAgICB9XG4gICAgX2JlemllclRvKHgxLCB5MSwgeDIsIHkyLCB4LCB5LCBwYXRoLCBvKSB7XG4gICAgICAgIGNvbnN0IG9wcyA9IFtdO1xuICAgICAgICBjb25zdCByb3MgPSBbby5tYXhSYW5kb21uZXNzT2Zmc2V0IHx8IDEsIChvLm1heFJhbmRvbW5lc3NPZmZzZXQgfHwgMSkgKyAwLjVdO1xuICAgICAgICBsZXQgZiA9IFswLCAwXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbcGF0aC54LCBwYXRoLnldIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbcGF0aC54ICsgdGhpcy5nZXRPZmZzZXQoLXJvc1swXSwgcm9zWzBdLCBvKSwgcGF0aC55ICsgdGhpcy5nZXRPZmZzZXQoLXJvc1swXSwgcm9zWzBdLCBvKV0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmID0gW3ggKyB0aGlzLmdldE9mZnNldCgtcm9zW2ldLCByb3NbaV0sIG8pLCB5ICsgdGhpcy5nZXRPZmZzZXQoLXJvc1tpXSwgcm9zW2ldLCBvKV07XG4gICAgICAgICAgICBvcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgb3A6ICdiY3VydmVUbycsIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgeDEgKyB0aGlzLmdldE9mZnNldCgtcm9zW2ldLCByb3NbaV0sIG8pLCB5MSArIHRoaXMuZ2V0T2Zmc2V0KC1yb3NbaV0sIHJvc1tpXSwgbyksXG4gICAgICAgICAgICAgICAgICAgIHgyICsgdGhpcy5nZXRPZmZzZXQoLXJvc1tpXSwgcm9zW2ldLCBvKSwgeTIgKyB0aGlzLmdldE9mZnNldCgtcm9zW2ldLCByb3NbaV0sIG8pLFxuICAgICAgICAgICAgICAgICAgICBmWzBdLCBmWzFdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5zZXRQb3NpdGlvbihmWzBdLCBmWzFdKTtcbiAgICAgICAgcmV0dXJuIG9wcztcbiAgICB9XG4gICAgX3Byb2Nlc3NTZWdtZW50KHBhdGgsIHNlZywgcHJldlNlZywgbykge1xuICAgICAgICBsZXQgb3BzID0gW107XG4gICAgICAgIHN3aXRjaCAoc2VnLmtleSkge1xuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICBjYXNlICdtJzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gc2VnLmtleSA9PT0gJ20nO1xuICAgICAgICAgICAgICAgIGlmIChzZWcuZGF0YS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9ICtzZWcuZGF0YVswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSArc2VnLmRhdGFbMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBwYXRoLng7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ICs9IHBhdGgueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBybyA9IDEgKiAoby5tYXhSYW5kb21uZXNzT2Zmc2V0IHx8IDApO1xuICAgICAgICAgICAgICAgICAgICB4ID0geCArIHRoaXMuZ2V0T2Zmc2V0KC1ybywgcm8sIG8pO1xuICAgICAgICAgICAgICAgICAgICB5ID0geSArIHRoaXMuZ2V0T2Zmc2V0KC1ybywgcm8sIG8pO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICBvcHMucHVzaCh7IG9wOiAnbW92ZScsIGRhdGE6IFt4LCB5XSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgIGNhc2UgJ2wnOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBzZWcua2V5ID09PSAnbCc7XG4gICAgICAgICAgICAgICAgaWYgKHNlZy5kYXRhLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gK3NlZy5kYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9ICtzZWcuZGF0YVsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ICs9IHBhdGgueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgKz0gcGF0aC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKHBhdGgueCwgcGF0aC55LCB4LCB5LCBvKSk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguc2V0UG9zaXRpb24oeCwgeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICBjYXNlICdoJzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gc2VnLmtleSA9PT0gJ2gnO1xuICAgICAgICAgICAgICAgIGlmIChzZWcuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSArc2VnLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBwYXRoLng7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdCh0aGlzLmRvdWJsZUxpbmUocGF0aC54LCBwYXRoLnksIHgsIHBhdGgueSwgbykpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldFBvc2l0aW9uKHgsIHBhdGgueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICBjYXNlICd2Jzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gc2VnLmtleSA9PT0gJ3YnO1xuICAgICAgICAgICAgICAgIGlmIChzZWcuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSArc2VnLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdCh0aGlzLmRvdWJsZUxpbmUocGF0aC54LCBwYXRoLnksIHBhdGgueCwgeSwgbykpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldFBvc2l0aW9uKHBhdGgueCwgeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnWic6XG4gICAgICAgICAgICBjYXNlICd6Jzoge1xuICAgICAgICAgICAgICAgIGlmIChwYXRoLmZpcnN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKHBhdGgueCwgcGF0aC55LCBwYXRoLmZpcnN0WzBdLCBwYXRoLmZpcnN0WzFdLCBvKSk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguc2V0UG9zaXRpb24ocGF0aC5maXJzdFswXSwgcGF0aC5maXJzdFsxXSk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguZmlyc3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgY2FzZSAnYyc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IHNlZy5rZXkgPT09ICdjJztcbiAgICAgICAgICAgICAgICBpZiAoc2VnLmRhdGEubGVuZ3RoID49IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHgxID0gK3NlZy5kYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeTEgPSArc2VnLmRhdGFbMV07XG4gICAgICAgICAgICAgICAgICAgIGxldCB4MiA9ICtzZWcuZGF0YVsyXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkyID0gK3NlZy5kYXRhWzNdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9ICtzZWcuZGF0YVs0XTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSArc2VnLmRhdGFbNV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDEgKz0gcGF0aC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgeDIgKz0gcGF0aC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBwYXRoLng7XG4gICAgICAgICAgICAgICAgICAgICAgICB5MSArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB5MiArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ICs9IHBhdGgueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYiA9IHRoaXMuX2JlemllclRvKHgxLCB5MSwgeDIsIHkyLCB4LCB5LCBwYXRoLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdChvYik7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguYmV6aWVyUmVmbGVjdGlvblBvaW50ID0gW3ggKyAoeCAtIHgyKSwgeSArICh5IC0geTIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIGNhc2UgJ3MnOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBzZWcua2V5ID09PSAncyc7XG4gICAgICAgICAgICAgICAgaWYgKHNlZy5kYXRhLmxlbmd0aCA+PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4MiA9ICtzZWcuZGF0YVswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkyID0gK3NlZy5kYXRhWzFdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9ICtzZWcuZGF0YVsyXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSArc2VnLmRhdGFbM107XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDIgKz0gcGF0aC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBwYXRoLng7XG4gICAgICAgICAgICAgICAgICAgICAgICB5MiArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ICs9IHBhdGgueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgeDEgPSB4MjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkxID0geTI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZLZXkgPSBwcmV2U2VnID8gcHJldlNlZy5rZXkgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2S2V5ID09PSAnYycgfHwgcHJldktleSA9PT0gJ0MnIHx8IHByZXZLZXkgPT09ICdzJyB8fCBwcmV2S2V5ID09PSAnUycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9IHBhdGguYmV6aWVyUmVmbGVjdGlvblBvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxID0gcmVmWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgeTEgPSByZWZbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2IgPSB0aGlzLl9iZXppZXJUbyh4MSwgeTEsIHgyLCB5MiwgeCwgeSwgcGF0aCwgbyk7XG4gICAgICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQob2IpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLmJlemllclJlZmxlY3Rpb25Qb2ludCA9IFt4ICsgKHggLSB4MiksIHkgKyAoeSAtIHkyKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICBjYXNlICdxJzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gc2VnLmtleSA9PT0gJ3EnO1xuICAgICAgICAgICAgICAgIGlmIChzZWcuZGF0YS5sZW5ndGggPj0gNCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgeDEgPSArc2VnLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIGxldCB5MSA9ICtzZWcuZGF0YVsxXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSArc2VnLmRhdGFbMl07XG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gK3NlZy5kYXRhWzNdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxICs9IHBhdGgueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gcGF0aC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgeTEgKz0gcGF0aC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0MSA9IDEgKiAoMSArIG8ucm91Z2huZXNzICogMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0MiA9IDEuNSAqICgxICsgby5yb3VnaG5lc3MgKiAwLjIyKTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbcGF0aC54ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pLCBwYXRoLnkgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0MSwgb2Zmc2V0MSwgbyldIH0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZiA9IFt4ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pLCB5ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pXTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3A6ICdxY3VydmVUbycsIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQxLCBvZmZzZXQxLCBvKSwgeTEgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0MSwgb2Zmc2V0MSwgbyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZlswXSwgZlsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbcGF0aC54ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDIsIG9mZnNldDIsIG8pLCBwYXRoLnkgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0Miwgb2Zmc2V0MiwgbyldIH0pO1xuICAgICAgICAgICAgICAgICAgICBmID0gW3ggKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0Miwgb2Zmc2V0MiwgbyksIHkgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0Miwgb2Zmc2V0MiwgbyldO1xuICAgICAgICAgICAgICAgICAgICBvcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcDogJ3FjdXJ2ZVRvJywgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgxICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDIsIG9mZnNldDIsIG8pLCB5MSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQyLCBvZmZzZXQyLCBvKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmWzBdLCBmWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldFBvc2l0aW9uKGZbMF0sIGZbMV0pO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnF1YWRSZWZsZWN0aW9uUG9pbnQgPSBbeCArICh4IC0geDEpLCB5ICsgKHkgLSB5MSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgY2FzZSAndCc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IHNlZy5rZXkgPT09ICd0JztcbiAgICAgICAgICAgICAgICBpZiAoc2VnLmRhdGEubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSArc2VnLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gK3NlZy5kYXRhWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gcGF0aC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHgxID0geDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkxID0geTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldktleSA9IHByZXZTZWcgPyBwcmV2U2VnLmtleSA6ICcnO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZLZXkgPT09ICdxJyB8fCBwcmV2S2V5ID09PSAnUScgfHwgcHJldktleSA9PT0gJ3QnIHx8IHByZXZLZXkgPT09ICdUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0gcGF0aC5xdWFkUmVmbGVjdGlvblBvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxID0gcmVmWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgeTEgPSByZWZbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0MSA9IDEgKiAoMSArIG8ucm91Z2huZXNzICogMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0MiA9IDEuNSAqICgxICsgby5yb3VnaG5lc3MgKiAwLjIyKTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbcGF0aC54ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pLCBwYXRoLnkgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0MSwgb2Zmc2V0MSwgbyldIH0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZiA9IFt4ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pLCB5ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pXTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3A6ICdxY3VydmVUbycsIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQxLCBvZmZzZXQxLCBvKSwgeTEgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0MSwgb2Zmc2V0MSwgbyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZlswXSwgZlsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbcGF0aC54ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDIsIG9mZnNldDIsIG8pLCBwYXRoLnkgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0Miwgb2Zmc2V0MiwgbyldIH0pO1xuICAgICAgICAgICAgICAgICAgICBmID0gW3ggKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0Miwgb2Zmc2V0MiwgbyksIHkgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0Miwgb2Zmc2V0MiwgbyldO1xuICAgICAgICAgICAgICAgICAgICBvcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcDogJ3FjdXJ2ZVRvJywgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgxICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDIsIG9mZnNldDIsIG8pLCB5MSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQyLCBvZmZzZXQyLCBvKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmWzBdLCBmWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldFBvc2l0aW9uKGZbMF0sIGZbMV0pO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnF1YWRSZWZsZWN0aW9uUG9pbnQgPSBbeCArICh4IC0geDEpLCB5ICsgKHkgLSB5MSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgY2FzZSAnYSc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IHNlZy5rZXkgPT09ICdhJztcbiAgICAgICAgICAgICAgICBpZiAoc2VnLmRhdGEubGVuZ3RoID49IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcnggPSArc2VnLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ5ID0gK3NlZy5kYXRhWzFdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9ICtzZWcuZGF0YVsyXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFyZ2VBcmNGbGFnID0gK3NlZy5kYXRhWzNdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzd2VlcEZsYWcgPSArc2VnLmRhdGFbNF07XG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gK3NlZy5kYXRhWzVdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9ICtzZWcuZGF0YVs2XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ICs9IHBhdGgueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgKz0gcGF0aC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ID09PSBwYXRoLnggJiYgeSA9PT0gcGF0aC55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocnggPT09IDAgfHwgcnkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKHBhdGgueCwgcGF0aC55LCB4LCB5LCBvKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLnNldFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcmNDb252ZXJ0ZXIgPSBuZXcgUm91Z2hBcmNDb252ZXJ0ZXIoW3BhdGgueCwgcGF0aC55XSwgW3gsIHldLCBbcngsIHJ5XSwgYW5nbGUsIGxhcmdlQXJjRmxhZyA/IHRydWUgOiBmYWxzZSwgc3dlZXBGbGFnID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VnbWVudCA9IGFyY0NvbnZlcnRlci5nZXROZXh0U2VnbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iID0gdGhpcy5fYmV6aWVyVG8oc2VnbWVudC5jcDFbMF0sIHNlZ21lbnQuY3AxWzFdLCBzZWdtZW50LmNwMlswXSwgc2VnbWVudC5jcDJbMV0sIHNlZ21lbnQudG9bMF0sIHNlZ21lbnQudG9bMV0sIHBhdGgsIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHMgPSBvcHMuY29uY2F0KG9iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudCA9IGFyY0NvbnZlcnRlci5nZXROZXh0U2VnbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wcztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSb3VnaENhbnZhcyB9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7IFJvdWdoR2VuZXJhdG9yIH0gZnJvbSAnLi9nZW5lcmF0b3InO1xuaW1wb3J0IHsgUm91Z2hHZW5lcmF0b3JBc3luYyB9IGZyb20gJy4vZ2VuZXJhdG9yLWFzeW5jJztcbmltcG9ydCB7IFJvdWdoQ2FudmFzQXN5bmMgfSBmcm9tICcuL2NhbnZhcy1hc3luYyc7XG5pbXBvcnQgeyBSb3VnaFNWRyB9IGZyb20gJy4vc3ZnJztcbmltcG9ydCB7IFJvdWdoU1ZHQXN5bmMgfSBmcm9tICcuL3N2Zy1hc3luYyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY2FudmFzKGNhbnZhcywgY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJvdWdoQ2FudmFzQXN5bmMoY2FudmFzLCBjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUm91Z2hDYW52YXMoY2FudmFzLCBjb25maWcpO1xuICAgIH0sXG4gICAgc3ZnKHN2ZywgY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJvdWdoU1ZHQXN5bmMoc3ZnLCBjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUm91Z2hTVkcoc3ZnLCBjb25maWcpO1xuICAgIH0sXG4gICAgY3JlYXRlUmVuZGVyZXIoKSB7XG4gICAgICAgIHJldHVybiBSb3VnaENhbnZhcy5jcmVhdGVSZW5kZXJlcigpO1xuICAgIH0sXG4gICAgZ2VuZXJhdG9yKGNvbmZpZywgc3VyZmFjZSkge1xuICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSb3VnaEdlbmVyYXRvckFzeW5jKGNvbmZpZywgc3VyZmFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBSb3VnaEdlbmVyYXRvcihjb25maWcsIHN1cmZhY2UpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBSb3VnaEdlbmVyYXRvckFzeW5jIH0gZnJvbSAnLi9nZW5lcmF0b3ItYXN5bmMnO1xuaW1wb3J0IHsgUm91Z2hTVkdCYXNlIH0gZnJvbSAnLi9zdmctYmFzZSc7XG5leHBvcnQgY2xhc3MgUm91Z2hTVkdBc3luYyBleHRlbmRzIFJvdWdoU1ZHQmFzZSB7XG4gICAgY29uc3RydWN0b3Ioc3ZnLCBjb25maWcpIHtcbiAgICAgICAgc3VwZXIoc3ZnKTtcbiAgICAgICAgdGhpcy5nZW5Bc3luYyA9IG5ldyBSb3VnaEdlbmVyYXRvckFzeW5jKGNvbmZpZyB8fCBudWxsLCB0aGlzLnN2Zyk7XG4gICAgfVxuICAgIGdldCBnZW5lcmF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbkFzeW5jO1xuICAgIH1cbiAgICBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuQXN5bmMuZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuICAgIG9wc1RvUGF0aChkcmF3aW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbkFzeW5jLm9wc1RvUGF0aChkcmF3aW5nKTtcbiAgICB9XG4gICAgYXN5bmMgbGluZSh4MSwgeTEsIHgyLCB5Miwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5saW5lKHgxLCB5MSwgeDIsIHkyLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgYXN5bmMgcmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMucmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGQpO1xuICAgIH1cbiAgICBhc3luYyBlbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMuZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgYXN5bmMgY2lyY2xlKHgsIHksIGRpYW1ldGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmNpcmNsZSh4LCB5LCBkaWFtZXRlciwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIGFzeW5jIGxpbmVhclBhdGgocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmxpbmVhclBhdGgocG9pbnRzLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgYXN5bmMgcG9seWdvbihwb2ludHMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMucG9seWdvbihwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGQpO1xuICAgIH1cbiAgICBhc3luYyBhcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCA9IGZhbHNlLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgY2xvc2VkLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgYXN5bmMgY3VydmUocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmN1cnZlKHBvaW50cywgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIGFzeW5jIHBhdGgoZCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkcmF3aW5nID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5wYXRoKGQsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGRyYXdpbmcpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJvdWdoUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVyJztcbmNvbnN0IGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydCBjbGFzcyBSb3VnaFNWR0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHN2Zykge1xuICAgICAgICB0aGlzLnN2ZyA9IHN2ZztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJvdWdoUmVuZGVyZXIoKTtcbiAgICB9XG4gICAgZ2V0IGRlZnMoKSB7XG4gICAgICAgIGNvbnN0IGRvYyA9IHRoaXMuc3ZnLm93bmVyRG9jdW1lbnQgfHwgKGhhc0RvY3VtZW50ICYmIGRvY3VtZW50KTtcbiAgICAgICAgaWYgKGRvYykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9kZWZzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZG5vZGUgPSBkb2MuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdkZWZzJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ZnLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdmcuaW5zZXJ0QmVmb3JlKGRub2RlLCB0aGlzLnN2Zy5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKGRub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmcyA9IGRub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZzIHx8IG51bGw7XG4gICAgfVxuICAgIGRyYXcoZHJhd2FibGUpIHtcbiAgICAgICAgY29uc3Qgc2V0cyA9IGRyYXdhYmxlLnNldHMgfHwgW107XG4gICAgICAgIGNvbnN0IG8gPSBkcmF3YWJsZS5vcHRpb25zIHx8IHRoaXMuZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5zdmcub3duZXJEb2N1bWVudCB8fCAoaGFzRG9jdW1lbnQgJiYgZG9jdW1lbnQpO1xuICAgICAgICBjb25zdCBnID0gZG9jLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xuICAgICAgICBmb3IgKGNvbnN0IGRyYXdpbmcgb2Ygc2V0cykge1xuICAgICAgICAgICAgbGV0IHBhdGggPSBudWxsO1xuICAgICAgICAgICAgc3dpdGNoIChkcmF3aW5nLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwYXRoJzoge1xuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZG9jLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMub3BzVG9QYXRoKGRyYXdpbmcpKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5zdHJva2UgPSBvLnN0cm9rZTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5zdHJva2VXaWR0aCA9IG8uc3Ryb2tlV2lkdGggKyAnJztcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5maWxsID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnZmlsbFBhdGgnOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBkb2MuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgdGhpcy5vcHNUb1BhdGgoZHJhd2luZykpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnN0eWxlLnN0cm9rZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5zdHJva2VXaWR0aCA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5maWxsID0gby5maWxsIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdmaWxsU2tldGNoJzoge1xuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdGhpcy5maWxsU2tldGNoKGRvYywgZHJhd2luZywgbyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdwYXRoMkRmaWxsJzoge1xuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZG9jLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsIGRyYXdpbmcucGF0aCB8fCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguc3R5bGUuc3Ryb2tlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnN0eWxlLnN0cm9rZVdpZHRoID0gJzAnO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnN0eWxlLmZpbGwgPSBvLmZpbGwgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdGgyRHBhdHRlcm4nOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZWZzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW5ub3QgcmVuZGVyIHBhdGgyRHBhdHRlcm4uIE5vIGRlZnMvZG9jdW1lbnQgZGVmaW5lZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBkcmF3aW5nLnNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gZG9jLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0dGVybicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBgcm91Z2gtJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgOTk5OTk5KSl9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uc2V0QXR0cmlidXRlKCd4JywgJzAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uc2V0QXR0cmlidXRlKCd5JywgJzAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybi5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7TWF0aC5yb3VuZChzaXplWzBdKX0gJHtNYXRoLnJvdW5kKHNpemVbMV0pfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybi5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm5Vbml0cycsICdvYmplY3RCb3VuZGluZ0JveCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0dGVyblBhdGggPSB0aGlzLmZpbGxTa2V0Y2goZG9jLCBkcmF3aW5nLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uYXBwZW5kQ2hpbGQocGF0dGVyblBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZzLmFwcGVuZENoaWxkKHBhdHRlcm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGRvYy5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgZHJhd2luZy5wYXRoIHx8ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGguc3R5bGUuc3Ryb2tlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5zdHJva2VXaWR0aCA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGguc3R5bGUuZmlsbCA9IGB1cmwoIyR7aWR9KWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICBnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnO1xuICAgIH1cbiAgICBmaWxsU2tldGNoKGRvYywgZHJhd2luZywgbykge1xuICAgICAgICBsZXQgZndlaWdodCA9IG8uZmlsbFdlaWdodDtcbiAgICAgICAgaWYgKGZ3ZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBmd2VpZ2h0ID0gby5zdHJva2VXaWR0aCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF0aCA9IGRvYy5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCB0aGlzLm9wc1RvUGF0aChkcmF3aW5nKSk7XG4gICAgICAgIHBhdGguc3R5bGUuc3Ryb2tlID0gby5maWxsIHx8IG51bGw7XG4gICAgICAgIHBhdGguc3R5bGUuc3Ryb2tlV2lkdGggPSBmd2VpZ2h0ICsgJyc7XG4gICAgICAgIHBhdGguc3R5bGUuZmlsbCA9ICdub25lJztcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUm91Z2hHZW5lcmF0b3IgfSBmcm9tICcuL2dlbmVyYXRvcic7XG5pbXBvcnQgeyBSb3VnaFNWR0Jhc2UgfSBmcm9tICcuL3N2Zy1iYXNlJztcbmV4cG9ydCBjbGFzcyBSb3VnaFNWRyBleHRlbmRzIFJvdWdoU1ZHQmFzZSB7XG4gICAgY29uc3RydWN0b3Ioc3ZnLCBjb25maWcpIHtcbiAgICAgICAgc3VwZXIoc3ZnKTtcbiAgICAgICAgdGhpcy5nZW4gPSBuZXcgUm91Z2hHZW5lcmF0b3IoY29uZmlnIHx8IG51bGwsIHRoaXMuc3ZnKTtcbiAgICB9XG4gICAgZ2V0IGdlbmVyYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuO1xuICAgIH1cbiAgICBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuLmRlZmF1bHRPcHRpb25zO1xuICAgIH1cbiAgICBvcHNUb1BhdGgoZHJhd2luZykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW4ub3BzVG9QYXRoKGRyYXdpbmcpO1xuICAgIH1cbiAgICBsaW5lKHgxLCB5MSwgeDIsIHkyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5saW5lKHgxLCB5MSwgeDIsIHkyLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgcmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZ2VuLnJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5lbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGQpO1xuICAgIH1cbiAgICBjaXJjbGUoeCwgeSwgZGlhbWV0ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZ2VuLmNpcmNsZSh4LCB5LCBkaWFtZXRlciwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIGxpbmVhclBhdGgocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5saW5lYXJQYXRoKHBvaW50cywgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIHBvbHlnb24ocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5wb2x5Z29uKHBvaW50cywgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIGFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgY2xvc2VkID0gZmFsc2UsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZ2VuLmFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgY2xvc2VkLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgY3VydmUocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5jdXJ2ZShwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGQpO1xuICAgIH1cbiAgICBwYXRoKGQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZHJhd2luZyA9IHRoaXMuZ2VuLnBhdGgoZCwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZHJhd2luZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2VnbWVudCB9IGZyb20gJy4uL2dlb21ldHJ5JztcbmV4cG9ydCBjbGFzcyBIYWNodXJlSXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCwgZ2FwLCBzaW5BbmdsZSwgY29zQW5nbGUsIHRhbkFuZ2xlKSB7XG4gICAgICAgIHRoaXMuZGVsdGFYID0gMDtcbiAgICAgICAgdGhpcy5oR2FwID0gMDtcbiAgICAgICAgdGhpcy50b3AgPSB0b3A7XG4gICAgICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMuZ2FwID0gZ2FwO1xuICAgICAgICB0aGlzLnNpbkFuZ2xlID0gc2luQW5nbGU7XG4gICAgICAgIHRoaXMudGFuQW5nbGUgPSB0YW5BbmdsZTtcbiAgICAgICAgaWYgKE1hdGguYWJzKHNpbkFuZ2xlKSA8IDAuMDAwMSkge1xuICAgICAgICAgICAgdGhpcy5wb3MgPSBsZWZ0ICsgZ2FwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKHNpbkFuZ2xlKSA+IDAuOTk5OSkge1xuICAgICAgICAgICAgdGhpcy5wb3MgPSB0b3AgKyBnYXA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlbHRhWCA9IChib3R0b20gLSB0b3ApICogTWF0aC5hYnModGFuQW5nbGUpO1xuICAgICAgICAgICAgdGhpcy5wb3MgPSBsZWZ0IC0gTWF0aC5hYnModGhpcy5kZWx0YVgpO1xuICAgICAgICAgICAgdGhpcy5oR2FwID0gTWF0aC5hYnMoZ2FwIC8gY29zQW5nbGUpO1xuICAgICAgICAgICAgdGhpcy5zTGVmdCA9IG5ldyBTZWdtZW50KFtsZWZ0LCBib3R0b21dLCBbbGVmdCwgdG9wXSk7XG4gICAgICAgICAgICB0aGlzLnNSaWdodCA9IG5ldyBTZWdtZW50KFtyaWdodCwgYm90dG9tXSwgW3JpZ2h0LCB0b3BdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBuZXh0TGluZSgpIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc2luQW5nbGUpIDwgMC4wMDAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3MgPCB0aGlzLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IFt0aGlzLnBvcywgdGhpcy50b3AsIHRoaXMucG9zLCB0aGlzLmJvdHRvbV07XG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgKz0gdGhpcy5nYXA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnModGhpcy5zaW5BbmdsZSkgPiAwLjk5OTkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcyA8IHRoaXMuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IFt0aGlzLmxlZnQsIHRoaXMucG9zLCB0aGlzLnJpZ2h0LCB0aGlzLnBvc107XG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgKz0gdGhpcy5nYXA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgeExvd2VyID0gdGhpcy5wb3MgLSB0aGlzLmRlbHRhWCAvIDI7XG4gICAgICAgICAgICBsZXQgeFVwcGVyID0gdGhpcy5wb3MgKyB0aGlzLmRlbHRhWCAvIDI7XG4gICAgICAgICAgICBsZXQgeUxvd2VyID0gdGhpcy5ib3R0b207XG4gICAgICAgICAgICBsZXQgeVVwcGVyID0gdGhpcy50b3A7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3MgPCAodGhpcy5yaWdodCArIHRoaXMuZGVsdGFYKSkge1xuICAgICAgICAgICAgICAgIHdoaWxlICgoKHhMb3dlciA8IHRoaXMubGVmdCkgJiYgKHhVcHBlciA8IHRoaXMubGVmdCkpIHx8ICgoeExvd2VyID4gdGhpcy5yaWdodCkgJiYgKHhVcHBlciA+IHRoaXMucmlnaHQpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcyArPSB0aGlzLmhHYXA7XG4gICAgICAgICAgICAgICAgICAgIHhMb3dlciA9IHRoaXMucG9zIC0gdGhpcy5kZWx0YVggLyAyO1xuICAgICAgICAgICAgICAgICAgICB4VXBwZXIgPSB0aGlzLnBvcyArIHRoaXMuZGVsdGFYIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zID4gKHRoaXMucmlnaHQgKyB0aGlzLmRlbHRhWCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBuZXcgU2VnbWVudChbeExvd2VyLCB5TG93ZXJdLCBbeFVwcGVyLCB5VXBwZXJdKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zTGVmdCAmJiBzLmludGVyc2VjdHModGhpcy5zTGVmdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgeExvd2VyID0gcy54aTtcbiAgICAgICAgICAgICAgICAgICAgeUxvd2VyID0gcy55aTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc1JpZ2h0ICYmIHMuaW50ZXJzZWN0cyh0aGlzLnNSaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgeFVwcGVyID0gcy54aTtcbiAgICAgICAgICAgICAgICAgICAgeVVwcGVyID0gcy55aTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFuQW5nbGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHhMb3dlciA9IHRoaXMucmlnaHQgLSAoeExvd2VyIC0gdGhpcy5sZWZ0KTtcbiAgICAgICAgICAgICAgICAgICAgeFVwcGVyID0gdGhpcy5yaWdodCAtICh4VXBwZXIgLSB0aGlzLmxlZnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gW3hMb3dlciwgeUxvd2VyLCB4VXBwZXIsIHlVcHBlcl07XG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgKz0gdGhpcy5oR2FwO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCB7IENvbXBvbmVudENvbnN0cnVjdG9ySW5mbywgQ29tcG9uZW50RHJhd0luZm8sIENvb3JkaW5hdGUgfSBmcm9tICdAZW5naW5lL3R5cGVzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnQGVuZ2luZS9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IFNOIH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZGVmaW5pdGlvbnMnO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsZW5ndGggLSB0aGUgYXhpcyBsZW5ndGguXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGggLSB0aGUgd2lkdGggb2YgYXhpcy5cbiAqIEBwcm9wZXJ0eSB7Q29vcmRpbmF0ZX0gc3RhcnQgLSB3aGVyZSBjb29yZGluYXRlIHRvIHN0YXJ0IGF4aXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnQueCAtIHRoZSBheGlzIHdpbGwgYWxpZ24gdGhpcyBwb2ludCByYXRoZXIgdGhhbiBzdGFydC5cbiAqICovXG5pbnRlcmZhY2UgRHJhd0luZm8gZXh0ZW5kcyBDb21wb25lbnREcmF3SW5mb3tcbiAgICBsZW5ndGggOm51bWJlcjtcbiAgICB3aWR0aCA6bnVtYmVyO1xuICAgIHN0YXJ0OiBDb29yZGluYXRlO1xufVxuXG4vKipcbiAqIFRoZSBib2R5IG9mIEF4aXMuXG4gKiBEcmF3IHRoZSBheGlzIHVzaW5nIHRoaXMgY29tcG9uZW50LlxuICogKi9cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEF4aXNCb2R5IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOkNvbXBvbmVudENvbnN0cnVjdG9ySW5mbykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZXh0Lm9uQ29uc3RydWN0KHRoaXMpO1xuICAgIH1cblxuICAgIG5hbWUgPSBTTi5BeGlzQm9keTtcbiAgICBkcmF3SW5mbzogRHJhd0luZm8gPSB7XG4gICAgICAgIGJveDoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBhc3luYyBhcHBseSgpIHtcbiAgICAgICAgdGhpcy5kcmF3SW5mby5ib3ggPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmRyYXdJbmZvLnN0YXJ0LnggLSB0aGlzLmRyYXdJbmZvLndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHRoaXMuZHJhd0luZm8uc3RhcnQueSxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmRyYXdJbmZvLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmRyYXdJbmZvLmxlbmd0aCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmFwcGx5KCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzKGNvbXA6Q29tcG9uZW50KSA6Y29tcCBpcyBBeGlzQm9keSB7XG4gICAgICAgIHJldHVybiBjb21wLm5hbWUgPT09IFNOLkF4aXNCb2R5O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudENvbnN0cnVjdG9ySW5mbywgQ29tcG9uZW50RHJhd0luZm8gfSBmcm9tICdAZW5naW5lL3R5cGVzJztcbmltcG9ydCB7IHBhcnNlQm94IH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZnVuY3Rpb25zJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnQGVuZ2luZS9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IFNOIH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IEF4aXNCb2R5IGZyb20gJ0BlbmdpbmUvQXhpcy9BeGlzQm9keSc7XG5cbi8qKlxuICogQHByb3BlcnR5IHtSZWFkb25seTxBeGlzQm9keURyYXdJbmZvPn0gYm9keURyYXdJbmZvIC0gdGhlIERyYXdJbmZvIG9mIEF4aXNCb2R5LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGFsaWduWSAtIHRoZSB5IHBvaW50IHdoaWNoIGlzIHRoZSBBeGlzTWlsZXN0b25lIGFsaWduIHRhcmdldC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkZXNjcmlwdGlvbiAtIHRoZSBzaG93ZWQgZGVzY3JpcHRpb24gb2YgbWlsZXN0b25lLlxuICogKi9cbmludGVyZmFjZSBEcmF3SW5mbyBleHRlbmRzIENvbXBvbmVudERyYXdJbmZve1xuICAgIGJvZHlEcmF3SW5mbzogUmVhZG9ubHk8QXhpc0JvZHlbJ2RyYXdJbmZvJ10+O1xuICAgIGFsaWduWTogbnVtYmVyO1xuICAgIHRleHQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBUaGUgbWlsZXN0b25lIG9uIEF4aXMsIGZvciBpbmRpY2F0ZSB0aW1lIG9mIG5lYXJieSBhcmVhLlxuICogQ2FuIGNvbmZsaWN0IHdpdGggRXZlbnRCb2R5LlxuICogKi9cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEF4aXNNaWxlc3RvbmUgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHM6Q29tcG9uZW50Q29uc3RydWN0b3JJbmZvKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5leHQub25Db25zdHJ1Y3QodGhpcyk7XG4gICAgfVxuXG4gICAgbmFtZSA9IFNOLkF4aXNNaWxlc3RvbmU7XG4gICAgZHJhd0luZm86RHJhd0luZm8gPSB7XG4gICAgICAgIGJvZHlEcmF3SW5mbzoge30gYXMgYW55LFxuICAgICAgICBhbGlnblk6IDAsXG4gICAgICAgIHRleHQ6ICcwX28nLFxuXG4gICAgICAgIGJveDoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZmxhZyA9IHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTsgLy8gTXVzdCByZXR1cm4gdGhpcyBmbGFnXG5cbiAgICAgICAgdGhpcy5lbGVtZW50IS5pbm5lckhUTUwgPSB0aGlzLmRyYXdJbmZvLnRleHQ7XG5cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBwYXJzZUJveCh0aGlzLmVsZW1lbnQhKTtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMuZHJhd0luZm8uYm9keURyYXdJbmZvLmJveC54XG4gICAgICAgICAgICArIHRoaXMuZHJhd0luZm8uYm9keURyYXdJbmZvLmJveC53aWR0aCAvIDJcbiAgICAgICAgICAgIC0gd2lkdGggLyAyXG4gICAgICAgIDtcbiAgICAgICAgY29uc3QgeSA9IHRoaXMuZHJhd0luZm8uYWxpZ25ZIC0gaGVpZ2h0IC8gMjtcblxuICAgICAgICB0aGlzLmVsZW1lbnQhLnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50IS5zdHlsZS50b3AgPSBgJHt5fXB4YDtcblxuICAgICAgICByZXR1cm4gZmxhZztcbiAgICB9XG4gICAgYXN5bmMgYXBwbHkoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQhLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgdGhpcy5kcmF3SW5mby5ib3ggPSBwYXJzZUJveCh0aGlzLmVsZW1lbnQhKTtcblxuICAgICAgICByZXR1cm4gc3VwZXIuYXBwbHkoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgIHJldHVybiBzdXBlci5kcmF3KCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzKGNvbXA6Q29tcG9uZW50KSA6Y29tcCBpcyBBeGlzTWlsZXN0b25lIHtcbiAgICAgICAgcmV0dXJuIGNvbXAubmFtZSA9PT0gU04uQXhpc01pbGVzdG9uZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRDb25zdHJ1Y3RvckluZm8sIENvbXBvbmVudERyYXdJbmZvLCBDb29yZGluYXRlIH0gZnJvbSAnQGVuZ2luZS90eXBlcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BlbmdpbmUvY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBTTiB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2RlZmluaXRpb25zJztcbmltcG9ydCBBeGlzQm9keSBmcm9tICdAZW5naW5lL0F4aXMvQXhpc0JvZHknO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8QXhpc0JvZHlEcmF3SW5mbz59IGJvZHlEcmF3SW5mbyAtIHRoZSBEcmF3SW5mbyBvZiBBeGlzQm9keS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBhbGlnblkgLSB0aGUgeSBwb2ludCB3aGljaCBpcyB0aGUgQXhpc1NjYWxlIGFsaWduIHRhcmdldC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoZWlnaHQgLSB0aGUgaGVpZ2h0IG9mIEF4aXNTY2FsZS5cbiAqICovXG5pbnRlcmZhY2UgRHJhd0luZm8gZXh0ZW5kcyBDb21wb25lbnREcmF3SW5mb3tcbiAgICBib2R5RHJhd0luZm86IFJlYWRvbmx5PEF4aXNCb2R5WydkcmF3SW5mbyddPjtcbiAgICBhbGlnblk6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBJbiBheGlzLCBtYXJrIGEgbWFyayBmb3IgcmVjb2duaXplIHRpbWUgZWFzeS5cbiAqIE9wdGlvbmFsLCBhIHRoZW1lIGNhbiBvbWl0IHRoaXMgY29tcG9uZW50IGJ5IHNpdHVhdGlvbi5cbiAqICovXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBeGlzU2NhbGUgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHM6Q29tcG9uZW50Q29uc3RydWN0b3JJbmZvKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5leHQub25Db25zdHJ1Y3QodGhpcyk7XG4gICAgfVxuXG4gICAgbmFtZSA9IFNOLkF4aXNTY2FsZTtcbiAgICBkcmF3SW5mbzpEcmF3SW5mbyA9IHtcbiAgICAgICAgYm9keURyYXdJbmZvOiB7fSBhcyBhbnksXG4gICAgICAgIGFsaWduWTogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuXG4gICAgICAgIGJveDoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgYXN5bmMgYXBwbHkoKSB7XG4gICAgICAgIHRoaXMuZHJhd0luZm8uYm94ID0ge1xuICAgICAgICAgICAgeDogdGhpcy5kcmF3SW5mby5ib2R5RHJhd0luZm8uYm94LngsXG4gICAgICAgICAgICB5OiB0aGlzLmRyYXdJbmZvLmFsaWduWSAtIHRoaXMuZHJhd0luZm8uaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5kcmF3SW5mby5oZWlnaHQsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5kcmF3SW5mby5ib2R5RHJhd0luZm8uYm94LndpZHRoLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3VwZXIuYXBwbHkoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXMoY29tcDpDb21wb25lbnQpIDpjb21wIGlzIEF4aXNTY2FsZSB7XG4gICAgICAgIHJldHVybiBjb21wLm5hbWUgPT09IFNOLkF4aXNTY2FsZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRDb25zdHJ1Y3RvckluZm8sIENvbXBvbmVudERyYXdJbmZvLCBHcmlkQ29uZmlnIH0gZnJvbSAnQGVuZ2luZS90eXBlcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BlbmdpbmUvY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgQXhpc01pbGVzdG9uZSBmcm9tICdAZW5naW5lL0F4aXMvQXhpc01pbGVzdG9uZSc7XG5pbXBvcnQgQXhpc1NjYWxlIGZyb20gJ0BlbmdpbmUvQXhpcy9BeGlzU2NhbGUnO1xuaW1wb3J0IEF4aXNCb2R5IGZyb20gJ0BlbmdpbmUvQXhpcy9BeGlzQm9keSc7XG5pbXBvcnQgeyBTTiB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2RlZmluaXRpb25zJztcbmltcG9ydCB7IGRlZXBGcmVlemUsIG1lcmdlQm94IH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZnVuY3Rpb25zJztcblxuLyoqXG4gKiBAcHJvcGVydHkge251bWJlcltdfSBzY2FsZXMgLSB0aGUgcG9zaXRpb24gb2Ygc2NhbGVzLiBFdmVyeSBpdGVtIHNob3VsZCA8PSAxLlxuICogQHByb3BlcnR5IHtPYmplY3RbXX0gbWlsZXN0b25lcyAtIHRoZSBjb25maWcgb2YgbWlsZXN0b25lcy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBtaWxlc3RvbmVzW10ucG9zaXRpb24uIC0gdGhlIHBvc2l0aW9uIG9mIG1pbGVzdG9uZS4gRXZlcnkgaXRlbSBzaG91bGQgPD0gMS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtaWxlc3RvbmVzW10udGV4dC4gLSB0aGUgc2hvd2VkIHRleHQgb2YgbWlsZXN0b25lLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlbmd0aCAtIHRoZSBheGlzIGxlbmd0aC5cbiAqICovXG5pbnRlcmZhY2UgRHJhd0luZm8gZXh0ZW5kcyBDb21wb25lbnREcmF3SW5mb3tcbiAgICBzY2FsZXM6IG51bWJlcltdO1xuICAgIG1pbGVzdG9uZXM6IHtcbiAgICAgICAgcG9zaXRpb246IG51bWJlcjtcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgIH1bXTtcbiAgICBsZW5ndGg6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAcHJvcGVydHkge0dyaWRDb25maWd9IGdyaWQgLSB0aGUgd2hvbGUgY29uZmlnIG9mIEdSSUQuXG4gKiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb25zdHJ1Y3RJbmZvIGV4dGVuZHMgQ29tcG9uZW50Q29uc3RydWN0b3JJbmZve1xuICAgIGdyaWQgOkdyaWRDb25maWc7XG59XG5cbi8qKlxuICogVGhlIHdob2xlIEF4aXMuIENvbnRhaW4gc29tZSBBeGlzTWlsZXN0b25lLCBzb21lIEF4aXNTY2FsZSBhbmQgYSBBeGlzQm9keS5cbiAqIFRoZSBNYW5hZ2UtQ29tcG9uZW50LiBBbGwgb2YgZHJhdyBpcyByZXNvbHZlZCBieSBjaGlsZCBjb21wb25lbnQuXG4gKiAqL1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQXhpcyBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpDb25zdHJ1Y3RJbmZvKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5ncmlkID0gcHJvcHMuZ3JpZDtcbiAgICAgICAgdGhpcy5leHQub25Db25zdHJ1Y3QodGhpcyk7XG4gICAgfVxuXG4gICAgZ3JpZCA6R3JpZENvbmZpZztcbiAgICBuYW1lID0gU04uQXhpcztcbiAgICBkcmF3SW5mbzpEcmF3SW5mbyA9IHtcbiAgICAgICAgc2NhbGVzOiBbXSxcbiAgICAgICAgbWlsZXN0b25lczogW10sXG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgYm94OiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICAvLyBUaGUgaW5zdGFuY2VzXG4gICAgbWlsZXN0b25lczpBeGlzTWlsZXN0b25lW10gPSBbXTtcbiAgICBzY2FsZXM6QXhpc1NjYWxlW10gPSBbXTtcbiAgICBib2R5OkF4aXNCb2R5ID0gbnVsbCBhcyBhbnk7XG5cbiAgICAvLyBUaGUgQ29uc3RydWN0b3JzXG4gICAgYWJzdHJhY3QgbWlsZXN0b25lQ29uc3RydWN0b3IgOnR5cGVvZiBBeGlzTWlsZXN0b25lO1xuICAgIGFic3RyYWN0IHNjYWxlQ29uc3RydWN0b3IgOnR5cGVvZiBBeGlzU2NhbGU7XG4gICAgYWJzdHJhY3QgYm9keUNvbnN0cnVjdG9yIDp0eXBlb2YgQXhpc0JvZHk7XG5cbiAgICBhc3luYyBhcHBseSgpIHtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5pbml0Qm9keSgpLFxuICAgICAgICAgICAgLi4udGhpcy5pbml0U2NhbGVzKCksXG4gICAgICAgICAgICAuLi50aGlzLmluaXRNaWxlc3RvbmVzKCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuZHJhd0luZm8uYm94ID0gbWVyZ2VCb3goXG4gICAgICAgICAgICB0aGlzLmJvZHkuZHJhd0luZm8uYm94LFxuICAgICAgICAgICAgLi4udGhpcy5taWxlc3RvbmVzLm1hcChtID0+IG0uZHJhd0luZm8uYm94KSxcbiAgICAgICAgICAgIC4uLnRoaXMuc2NhbGVzLm1hcChzID0+IHMuZHJhd0luZm8uYm94KSxcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gc3VwZXIuYXBwbHkoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5ib2R5LmRyYXcoKTtcbiAgICAgICAgdGhpcy5zY2FsZXMuZm9yRWFjaChzID0+IHMuZHJhdygpKTtcbiAgICAgICAgdGhpcy5taWxlc3RvbmVzLmZvckVhY2gobSA9PiBtLmRyYXcoKSk7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmRyYXcoKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5ib2R5LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zY2FsZXMuZm9yRWFjaChzID0+IHMuZGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5taWxlc3RvbmVzLmZvckVhY2gobSA9PiBtLmRlc3Ryb3koKSk7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5ib2R5LmhpZGUoKTtcbiAgICAgICAgdGhpcy5zY2FsZXMuZm9yRWFjaChzID0+IHMuaGlkZSgpKTtcbiAgICAgICAgdGhpcy5taWxlc3RvbmVzLmZvckVhY2gobSA9PiBtLmhpZGUoKSk7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmhpZGUoKTtcbiAgICB9XG5cbiAgICBpbml0Qm9keSgpIDpQcm9taXNlPGFueT4ge1xuICAgICAgICBpZiAodGhpcy5ib2R5KSB7XG4gICAgICAgICAgICB0aGlzLmJvZHkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSByZWFsaXplIGEgYWJzb2x1dGUgY2xhc3MgdGhhdCB3aWxsIHJlLWluaXQgaW4gdGhlIHRoZW1lLlxuICAgICAgICB0aGlzLmJvZHkgPSBuZXcgdGhpcy5ib2R5Q29uc3RydWN0b3IodGhpcyk7XG4gICAgICAgIHRoaXMuYm9keS5kcmF3SW5mby5sZW5ndGggPSB0aGlzLmRyYXdJbmZvLmxlbmd0aDtcbiAgICAgICAgdGhpcy5ib2R5LmRyYXdJbmZvLndpZHRoID0gdGhpcy5ncmlkLmF4aXNXaWR0aDtcbiAgICAgICAgdGhpcy5ib2R5LmRyYXdJbmZvLnN0YXJ0ID0gdGhpcy5ncmlkLmF4aXNTdGFydDtcblxuICAgICAgICByZXR1cm4gdGhpcy5ib2R5LmFwcGx5KCk7XG4gICAgfVxuICAgIGluaXRTY2FsZXMoKSA6UHJvbWlzZTxhbnk+W10ge1xuICAgICAgICB0aGlzLnNjYWxlcy5mb3JFYWNoKHMgPT4gcy5kZXN0cm95KCkpO1xuICAgICAgICB0aGlzLnNjYWxlcy5sZW5ndGggPSAwO1xuXG4gICAgICAgIGZvciAoY29uc3QgcG9zaXRpb24gb2YgdGhpcy5kcmF3SW5mby5zY2FsZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYXdJbmZvLm1pbGVzdG9uZXMuc29tZShtID0+IG0ucG9zaXRpb24gPT09IHBvc2l0aW9uKSkgY29udGludWU7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIC0gcmVhbGl6ZSBhIGFic29sdXRlIGNsYXNzIHRoYXQgd2lsbCByZS1pbml0IGluIHRoZSB0aGVtZS5cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlOkF4aXNTY2FsZSA9IG5ldyB0aGlzLnNjYWxlQ29uc3RydWN0b3IodGhpcyk7XG4gICAgICAgICAgICBzY2FsZS5kcmF3SW5mby5ib2R5RHJhd0luZm8gPSBkZWVwRnJlZXplKHRoaXMuYm9keS5kcmF3SW5mbyk7XG4gICAgICAgICAgICBzY2FsZS5kcmF3SW5mby5hbGlnblkgPSBwb3NpdGlvbjsgLy8gcmVjb21wdXRlZCBpbiBQb3NpdGlvbkNvdW50ZXJcbiAgICAgICAgICAgIHNjYWxlLmRyYXdJbmZvLmhlaWdodCA9IHRoaXMuZ3JpZC5zY2FsZUhlaWdodDsgLy8gcmVjb21wdXRlZCBpbiBQb3NpdGlvbkNvdW50ZXJcbiAgICAgICAgICAgIHRoaXMuc2NhbGVzLnB1c2goc2NhbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGVzLm1hcChzID0+IHMuYXBwbHkoKSk7XG4gICAgfVxuICAgIGluaXRNaWxlc3RvbmVzKCkgOlByb21pc2U8YW55PltdIHtcbiAgICAgICAgdGhpcy5taWxlc3RvbmVzLmZvckVhY2gobSA9PiBtLmRlc3Ryb3koKSk7XG4gICAgICAgIHRoaXMubWlsZXN0b25lcy5sZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHsgcG9zaXRpb24sIHRleHQgfSBvZiB0aGlzLmRyYXdJbmZvLm1pbGVzdG9uZXMpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgLSByZWFsaXplIGEgYWJzb2x1dGUgY2xhc3MgdGhhdCB3aWxsIHJlLWluaXQgaW4gdGhlIHRoZW1lLlxuICAgICAgICAgICAgY29uc3QgbWlsZXN0b25lID0gbmV3IHRoaXMubWlsZXN0b25lQ29uc3RydWN0b3IodGhpcyk7XG4gICAgICAgICAgICBtaWxlc3RvbmUuZHJhd0luZm8uYm9keURyYXdJbmZvID0gZGVlcEZyZWV6ZSh0aGlzLmJvZHkuZHJhd0luZm8pO1xuICAgICAgICAgICAgbWlsZXN0b25lLmRyYXdJbmZvLmFsaWduWSA9IHBvc2l0aW9uOyAvLyByZWNvbXB1dGVkIGluIFBvc2l0aW9uQ291bnRlclxuICAgICAgICAgICAgbWlsZXN0b25lLmRyYXdJbmZvLnRleHQgPSB0ZXh0O1xuICAgICAgICAgICAgdGhpcy5taWxlc3RvbmVzLnB1c2gobWlsZXN0b25lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm1pbGVzdG9uZXMubWFwKG0gPT4gbS5hcHBseSgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXMoY29tcDpDb21wb25lbnQpIDpjb21wIGlzIEF4aXMge1xuICAgICAgICByZXR1cm4gY29tcC5uYW1lID09PSBTTi5BeGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudENvbnN0cnVjdG9ySW5mbywgQ29tcG9uZW50RHJhd0luZm8gfSBmcm9tICdAZW5naW5lL3R5cGVzJztcbmltcG9ydCB7IHBhcnNlQm94IH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZnVuY3Rpb25zJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnQGVuZ2luZS9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IFNOIH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IEF4aXMgZnJvbSAnQGVuZ2luZS9BeGlzJztcbmltcG9ydCBFdmVudE1hcmsgZnJvbSAnQGVuZ2luZS9FdmVudC9FdmVudE1hcmsnO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8QXhpc1snZHJhd0luZm8nXT59IGF4aXNCb2R5RHJhd0luZm8gLSB0aGUgRHJhd0luZm8gb2YgQXhpc0JvZHkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PEV2ZW50TWFya1snZHJhd0luZm8nXT59IG1hcmtEcmF3SW5mbyAtIHRoZSBEcmF3SW5mbyBvZiBFdmVudE1hcmsuXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGVuZ3RoIC0gdGhlIGxlbmd0aCBvZiBFdmVudEF4aXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gb2Zmc2V0WCAtIHRoZSBvZmZzZXQgWCB3aXRoIEF4aXMgaW4gRXZlbnRBeGlzLlxuICogQHByb3BlcnR5IHtbc3RyaW5nXX0gdGV4dCAtIHRoZSBkZXNjcmlwdGlvbiBhYm91dCBldmVudCBlbmRlZC5cbiAqICovXG5pbnRlcmZhY2UgRHJhd0luZm8gZXh0ZW5kcyBDb21wb25lbnREcmF3SW5mb3tcbiAgICBheGlzQm9keURyYXdJbmZvOiBSZWFkb25seTxBeGlzWydkcmF3SW5mbyddPjtcbiAgICBtYXJrRHJhd0luZm86IFJlYWRvbmx5PEV2ZW50TWFya1snZHJhd0luZm8nXT47XG5cbiAgICBsZW5ndGg6IG51bWJlcjtcbiAgICBvZmZzZXRYOiBudW1iZXI7XG4gICAgdGV4dD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBSZWNvZ25pemUgYSBldmVudCB0aW1lIG9mIGR1cmF0aW9uIGFuZCBlbmQgdGltZSBwb2ludC5cbiAqIFNvbWUgRXZlbnQgaGF2ZSBubyBkdXJhdGlvbiwgc28gaXQgbmVlZG4ndCBFdmVudEF4aXMuXG4gKiBDYW4gY29uZmxpY3Qgd2l0aCBBeGlzTWlsZXN0b25lIGFuZCBFdmVudEF4aXMuXG4gKiAqL1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRXZlbnRBeGlzIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOkNvbXBvbmVudENvbnN0cnVjdG9ySW5mbykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZXh0Lm9uQ29uc3RydWN0KHRoaXMpO1xuICAgIH1cblxuICAgIG5hbWUgPSBTTi5FdmVudEF4aXM7XG4gICAgZHJhd0luZm86RHJhd0luZm8gPSB7XG4gICAgICAgIGF4aXNCb2R5RHJhd0luZm86IHt9IGFzIGFueSxcbiAgICAgICAgbWFya0RyYXdJbmZvOiB7fSBhcyBhbnksXG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgb2Zmc2V0WDogMCxcblxuICAgICAgICBib3g6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGZsYWcgPSBzdXBlci5jcmVhdGVFbGVtZW50KCk7IC8vIE11c3QgcmV0dXJuIHRoaXMgZmxhZ1xuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldDtcblxuICAgICAgICB0aGlzLmVsZW1lbnQhLmNsYXNzTGlzdC5hZGQoJ2VuZFRleHQnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50IS5pbm5lckhUTUwgPSB0aGlzLmRyYXdJbmZvLnRleHQhO1xuXG4gICAgICAgIGNvbnN0IGJveCA9IHBhcnNlQm94KHRoaXMuZWxlbWVudCEpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCEuc3R5bGUubGVmdCA9IGAke3RhcmdldC54ICsgdGhpcy5kcmF3SW5mby5vZmZzZXRYfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50IS5zdHlsZS50b3AgPSBgJHt0YXJnZXQueSAtIHRoaXMuZHJhd0luZm8ubGVuZ3RoIC0gYm94LmhlaWdodCAvIDJ9cHhgO1xuXG4gICAgICAgIHJldHVybiBmbGFnO1xuICAgIH1cbiAgICBhc3luYyBhcHBseSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhd0luZm8udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQhLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldDtcblxuICAgICAgICB0aGlzLmRyYXdJbmZvLmJveCA9IHtcbiAgICAgICAgICAgIHg6IHRhcmdldC54LFxuICAgICAgICAgICAgeTogdGFyZ2V0LnkgLSB0aGlzLmRyYXdJbmZvLmxlbmd0aCxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmRyYXdJbmZvLm9mZnNldFgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZHJhd0luZm8ubGVuZ3RoLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBzdXBlci5hcHBseSgpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBpZiAodGhpcy5kcmF3SW5mby50ZXh0KSB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmRyYXcoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXMoY29tcDpDb21wb25lbnQpIDpjb21wIGlzIEV2ZW50QXhpcyB7XG4gICAgICAgIHJldHVybiBjb21wLm5hbWUgPT09IFNOLkV2ZW50QXhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudERyYXdJbmZvLCBDb29yZGluYXRlLCBCb3gsIENvbXBvbmVudENvbnN0cnVjdG9ySW5mbyB9IGZyb20gJ0BlbmdpbmUvdHlwZXMnO1xuaW1wb3J0IHsgcGFyc2VCb3ggfSBmcm9tICdAZW5naW5lL2NvbW1vbi9mdW5jdGlvbnMnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZW5naW5lL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgU04gfSBmcm9tICdAZW5naW5lL2NvbW1vbi9kZWZpbml0aW9ucyc7XG5pbXBvcnQgRXZlbnRNYXJrIGZyb20gJ0BlbmdpbmUvRXZlbnQvRXZlbnRNYXJrJztcblxuLyoqXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PEV2ZW50TWFya1snZHJhd0luZm8nXT59IG1hcmtEcmF3SW5mbyAtIHRoZSBEcmF3SW5mbyBvZiBFdmVudE1hcmsuXG4gKiBAcHJvcGVydHkge0Nvb3JkaW5hdGV9IG9mZnNldCAtIGNvbmZpZ3VyZSBhIGNvb3JkaW5hdGUgdGhhdCBvZmZzZXQgd2l0aCBBeGlzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IG1heFdpZHRoIC0gdGhlIEV2ZW50Qm9keSBjYW4gYmUgc3RyZXRjaGVkIG1heCB3aWR0aC5cbiAqIEBwcm9wZXJ0eSB7RGF0ZX0gZGF0ZSAtIHRoZSBkYXRhIG9mIGV2ZW50LlxuICogQHByb3BlcnR5IHtzdHJpbmd9IHRpdGxlIC0gdGhlIHRpdGxlIG9mIGV2ZW50LlxuICogQHByb3BlcnR5IHtbc3RyaW5nXX0gZGVzY3JpcHRpb24gLSB0aGUgZGVzY3JpcHRpb24gb2YgZXZlbnQuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGZsb2F0ZWQgLSBpbmRpY2F0ZSB0aGUgRXZlbnRCb2R5IHdhcyBmbG9hdGVkIG9yIG5vdC5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZm9sZGVkIC0gaW5kaWNhdGUgdGhlIEV2ZW50Qm9keSB3YXMgaW4gZm9sZC1tb2RlIG9yIG5vdC5cbiAqIEBwcm9wZXJ0eSB7W3N0cmluZ119IGZvbGRQbGFjZWhvbGRlciAtIGEgdGV4dCB0byBzaG93IHdoZW4gdGhlIEV2ZW50Qm9keSB3YXMgaW4gZm9sZC1tb2RlLlxuICogKi9cbmludGVyZmFjZSBEcmF3SW5mbyBleHRlbmRzIENvbXBvbmVudERyYXdJbmZve1xuICAgIG1hcmtEcmF3SW5mbzogRXZlbnRNYXJrWydkcmF3SW5mbyddO1xuICAgIG9mZnNldDogQ29vcmRpbmF0ZTtcbiAgICBtYXhXaWR0aDogbnVtYmVyO1xuXG4gICAgZGF0ZTogRGF0ZTtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gICAgZmxvYXRlZDogYm9vbGVhbjtcblxuICAgIGZvbGRlZDogYm9vbGVhbjtcbiAgICBmb2xkUGxhY2Vob2xkZXI/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ2FuIGNvbmZsaWN0IHdpdGggQXhpc01pbGVzdG9uZSBhbmQgRXZlbnRCb2R5LlxuICogKi9cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEV2ZW50Qm9keSBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpDb21wb25lbnRDb25zdHJ1Y3RvckluZm8pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmV4dC5vbkNvbnN0cnVjdCh0aGlzKTtcbiAgICB9XG5cbiAgICBuYW1lID0gU04uRXZlbnRCb2R5O1xuICAgIC8qKlxuICAgICAqIEFuIEV2ZW50Qm9keSBtdXN0IGhhcyBhIEhUTUwgZWxlbWVudCBmb3IgYWxsb3cgdXNlciBzZWxlY3QgYW5kIGNvcHkgdGV4dCBmcm9tIEV2ZW50Qm9keS5cbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogKi9cbiAgICBlbGVtZW50IDpIVE1MRWxlbWVudCA9IG51bGwgYXMgYW55O1xuICAgIGRyYXdJbmZvOkRyYXdJbmZvID0ge1xuICAgICAgICBtYXJrRHJhd0luZm86IG51bGwgYXMgYW55LFxuXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIG1heFdpZHRoOiAzMDAsXG5cbiAgICAgICAgZGF0ZTogbnVsbCBhcyBhbnksXG4gICAgICAgIHRpdGxlOiAndW50aXRsZWQnLFxuXG4gICAgICAgIGZsb2F0ZWQ6IGZhbHNlLFxuICAgICAgICBmb2xkZWQ6IGZhbHNlLFxuXG4gICAgICAgIGJveDoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZmxhZyA9IHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTsgLy8gTXVzdCByZXR1cm4gdGhpcyBmbGFnXG5cbiAgICAgICAgaWYgKHRoaXMuZHJhd0luZm8uZmxvYXRlZCkgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zsb2F0ZWQnKTtcbiAgICAgICAgaWYgKHRoaXMuZHJhd0luZm8uZm9sZGVkKSB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9sZGVkJyk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb2xkUGxhY2Vob2xkZXJcIiB0aXRsZT1cIiR7dGhpcy5kcmF3SW5mby50aXRsZX1cIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuZHJhd0luZm8uZm9sZFBsYWNlaG9sZGVyIHx8IHRoaXMuZHJhd0luZm8udGl0bGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7dGhpcy5kcmF3SW5mby50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+JHtuZXcgRGF0ZSh0aGlzLmRyYXdJbmZvLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHt0aGlzLmRyYXdJbmZvLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIGlmICghdGhpcy5kcmF3SW5mby5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKSEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heFdpZHRoID0gYCR7dGhpcy5kcmF3SW5mby5tYXhXaWR0aH1weGA7XG5cbiAgICAgICAgcmV0dXJuIGZsYWc7XG4gICAgfVxuICAgIGFzeW5jIGFwcGx5KCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5pbml0Qm94RnJvbUVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5hcHBseUJveFRvRWxlbWVudCgpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmFwcGx5KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgICAgICByZXR1cm4gc3VwZXIuZHJhdygpO1xuICAgIH1cblxuICAgIGluaXRCb3hGcm9tRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZWx0Qm94ID0gcGFyc2VCb3godGhpcy5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgYm94OkJveCA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBlbHRCb3gud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGVsdEJveC5oZWlnaHQsXG4gICAgICAgICAgICAuLi50aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQsXG4gICAgICAgIH07XG5cbiAgICAgICAgYm94LnggLT0gYm94LndpZHRoO1xuICAgICAgICBib3gueSAtPSBib3guaGVpZ2h0IC8gMjtcblxuICAgICAgICBib3gueCAtPSB0aGlzLmRyYXdJbmZvLm9mZnNldC54O1xuICAgICAgICBib3gueSArPSB0aGlzLmRyYXdJbmZvLm9mZnNldC55O1xuXG4gICAgICAgIHRoaXMuZHJhd0luZm8uYm94ID0gYm94O1xuICAgIH1cbiAgICBhcHBseUJveFRvRWxlbWVudCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt0aGlzLmRyYXdJbmZvLmJveC54fXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke3RoaXMuZHJhd0luZm8uYm94Lnl9cHhgO1xuICAgIH1cblxuICAgIHN0YXRpYyBpcyhjb21wOkNvbXBvbmVudCkgOmNvbXAgaXMgRXZlbnRCb2R5IHtcbiAgICAgICAgcmV0dXJuIGNvbXAubmFtZSA9PT0gU04uRXZlbnRCb2R5O1xuICAgIH1cblxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZW5naW5lL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50Q29uc3RydWN0b3JJbmZvLCBDb21wb25lbnREcmF3SW5mbywgQ29vcmRpbmF0ZSB9IGZyb20gJ0BlbmdpbmUvdHlwZXMnO1xuaW1wb3J0IHsgU04gfSBmcm9tICdAZW5naW5lL2NvbW1vbi9kZWZpbml0aW9ucyc7XG5pbXBvcnQgQXhpcyBmcm9tICdAZW5naW5lL0F4aXMnO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8QXhpc0JvZHlEcmF3SW5mbz59IGJvZHlEcmF3SW5mbyAtIHRoZSBEcmF3SW5mbyBvZiBBeGlzQm9keS5cbiAqIEBwcm9wZXJ0eSB7Q29vcmRpbmF0ZX0gdGFyZ2V0IC0gdGhlIHRhcmdldCBjb29yZGluYXRlIGluIEF4aXMuXG4gKiBAcHJvcGVydHkge3dpZHRofSB3aWR0aCAtIHRoZSB3aWR0aCBvZiBtYXJrLlxuICogQHByb3BlcnR5IHtbbnVtYmVyXX0gaGVpZ2h0IC0gdGhlIGhlaWdodCBvZiBtYXJrLlxuICogKi9cbmludGVyZmFjZSBEcmF3SW5mbyBleHRlbmRzIENvbXBvbmVudERyYXdJbmZve1xuICAgIGF4aXNCb2R5RHJhd0luZm86IFJlYWRvbmx5PEF4aXNbJ2RyYXdJbmZvJ10+O1xuICAgIHRhcmdldDogQ29vcmRpbmF0ZTtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBJbiBheGlzLCBtYXJrIGEgbWFyayBmb3IgcmVjb2duaXplIGV2ZW50IHBvaW50IHdoZW4gZXZlbnQgdGFrZSBwbGFjZS5cbiAqIE9wdGlvbmFsLCBhIHRoZW1lIGNhbiBvbWl0IHRoaXMgY29tcG9uZW50IGJ5IHNpdHVhdGlvbi5cbiAqICovXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBFdmVudE1hcmsgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHM6Q29tcG9uZW50Q29uc3RydWN0b3JJbmZvKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5leHQub25Db25zdHJ1Y3QodGhpcyk7XG4gICAgfVxuXG4gICAgbmFtZSA9IFNOLkV2ZW50TWFyaztcbiAgICBkcmF3SW5mbzpEcmF3SW5mbyA9IHtcbiAgICAgICAgYXhpc0JvZHlEcmF3SW5mbzoge30gYXMgYW55LFxuICAgICAgICBib3g6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoOiAwLFxuICAgIH07XG5cbiAgICBhc3luYyBhcHBseSgpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmRyYXdJbmZvLndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmRyYXdJbmZvLmhlaWdodCB8fCB3aWR0aDtcbiAgICAgICAgdGhpcy5kcmF3SW5mby5ib3ggPSB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHg6IHRoaXMuZHJhd0luZm8udGFyZ2V0LnggLSB3aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmRyYXdJbmZvLnRhcmdldC55IC0gaGVpZ2h0IC8gMixcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gc3VwZXIuYXBwbHkoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXMoY29tcDpDb21wb25lbnQpIDpjb21wIGlzIEV2ZW50TWFyayB7XG4gICAgICAgIHJldHVybiBjb21wLm5hbWUgPT09IFNOLkV2ZW50TWFyaztcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BlbmdpbmUvY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnRDb25zdHJ1Y3RvckluZm8sIENvbXBvbmVudERyYXdJbmZvLCBDb29yZGluYXRlLCBHcmlkQ29uZmlnIH0gZnJvbSAnQGVuZ2luZS90eXBlcyc7XG5pbXBvcnQgRXZlbnRNYXJrIGZyb20gJ0BlbmdpbmUvRXZlbnQvRXZlbnRNYXJrJztcbmltcG9ydCBFdmVudEJvZHkgZnJvbSAnQGVuZ2luZS9FdmVudC9FdmVudEJvZHknO1xuaW1wb3J0IEV2ZW50QXhpcyBmcm9tICdAZW5naW5lL0V2ZW50L0V2ZW50QXhpcyc7XG5pbXBvcnQgeyBkZWVwRnJlZXplLCBtZXJnZUJveCB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBTTiB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2RlZmluaXRpb25zJztcblxuLyoqXG4gKiBAcHJvcGVydHkge0Nvb3JkaW5hdGV9IHRhcmdldCAtIGEgY29vcmRpbmF0ZSB0aGUgRXZlbnQgbmVlZCB0byBhcHByb2FjaC5cbiAqIEBwcm9wZXJ0eSB7Q29vcmRpbmF0ZX0gb2Zmc2V0IC0gYSBjb29yZGluYXRlIG9mZnNldCB3aXRoIHRoZSB0aGlzLnRhcmdldC5cbiAqXG4gKiBAcHJvcGVydHkge0RhdGV9IGRhdGUgLSBhIGRhdGEgb2YgZXZlbnQuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdGl0bGUgLSB0aGUgdGl0bGUgb2YgZXZlbnQuXG4gKiBAcHJvcGVydHkge1tzdHJpbmddfSBkZXNjcmlwdGlvbiAtIHRoZSBkZXNjcmlwdGlvbiBvZiBldmVudC5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZm9sZGVkIC0gaW5kaWNhdGUgdGhlIEV2ZW50Qm9keSB3YXMgaW4gZm9sZC1tb2RlIG9yIG5vdC5cbiAqIEBwcm9wZXJ0eSB7W3N0cmluZ119IGZvbGRQbGFjZWhvbGRlciAtIGEgdGV4dCB0byBzaG93IGluIEV2ZW50Qm9keSB3aGVuIGl0IHdhcyBpbiBmb2xkLW1vZGUuXG4gKlxuICogQHByb3BlcnR5IHtbbnVtYmVyXX0gYXhpc0xlbmd0aCAtIHRoZSBsZW5ndGggb2YgRXZlbnRBeGlzLlxuICogQHByb3BlcnR5IHtbbnVtYmVyXX0gYXhpc09mZnNldCAtIHRoZSBvZmZzZXQgWCB3aXRoIEF4aXMgaW4gRXZlbnRBeGlzLlxuICogQHByb3BlcnR5IHtbc3RyaW5nXX0gYXhpc1RleHQgLSB0aGUgZGVzY3JpcHRpb24gYWJvdXQgZXZlbnQgZW5kZWQuXG4gKiAqL1xuaW50ZXJmYWNlIERyYXdJbmZvIGV4dGVuZHMgQ29tcG9uZW50RHJhd0luZm97XG4gICAgdGFyZ2V0OiBDb29yZGluYXRlO1xuICAgIG9mZnNldDogQ29vcmRpbmF0ZTtcblxuICAgIGRhdGU6IERhdGU7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBmb2xkZWQ6IGJvb2xlYW47XG4gICAgZm9sZFBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gICAgYXhpc0xlbmd0aD86IG51bWJlcjtcbiAgICBheGlzT2Zmc2V0PzogbnVtYmVyO1xuICAgIGF4aXNUZXh0Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBwcm9wZXJ0eSB7R3JpZENvbmZpZ30gZ3JpZCAtIHRoZSB3aG9sZSBjb25maWcgb2YgR1JJRC5cbiAqICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnN0cnVjdEluZm8gZXh0ZW5kcyBDb21wb25lbnRDb25zdHJ1Y3RvckluZm97XG4gICAgZ3JpZCA6R3JpZENvbmZpZztcbn1cblxuLyoqXG4gKiBUaGUgd2hvbGUgRXZlbnQuIENvbnRhaW4gYW4gRXZlbnRCb2R5IGFuZCBhbiBFdmVudE1hcmssIG1heWJlIGhhcyBhIEV2ZW50QXhpcyB0b28uXG4gKiBUaGUgTWFuYWdlLUNvbXBvbmVudC4gQWxsIG9mIGRyYXcgaXMgcmVzb2x2ZWQgYnkgY2hpbGQgY29tcG9uZW50LlxuICogKi9cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEV2ZW50IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOkNvbnN0cnVjdEluZm8pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmdyaWQgPSBwcm9wcy5ncmlkO1xuICAgICAgICB0aGlzLmV4dC5vbkNvbnN0cnVjdCh0aGlzKTtcbiAgICB9XG5cbiAgICBncmlkIDpHcmlkQ29uZmlnO1xuICAgIG5hbWUgPSBTTi5FdmVudDtcbiAgICBkcmF3SW5mbzpEcmF3SW5mbyA9IHtcbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICB4OiAzMCxcbiAgICAgICAgICAgIHk6IDUwLFxuICAgICAgICB9LFxuICAgICAgICBvZmZzZXQ6IHRoaXMuZ3JpZC5ldmVudE9mZnNldCxcblxuICAgICAgICBkYXRlOiBudWxsIGFzIGFueSxcbiAgICAgICAgdGl0bGU6IG51bGwgYXMgYW55LFxuICAgICAgICBmb2xkZWQ6IGZhbHNlLFxuXG4gICAgICAgIGJveDoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIFRoZSBpbnN0YW5jZXNcbiAgICBtYXJrOkV2ZW50TWFyayA9IG51bGwgYXMgYW55O1xuICAgIGJvZHk6RXZlbnRCb2R5ID0gbnVsbCBhcyBhbnk7XG4gICAgYXhpczpFdmVudEF4aXN8bnVsbCA9IG51bGw7XG5cbiAgICAvLyBUaGUgQ29uc3RydWN0b3JzXG4gICAgYWJzdHJhY3QgYm9keUNvbnN0cnVjdG9yIDp0eXBlb2YgRXZlbnRCb2R5O1xuICAgIGFic3RyYWN0IGF4aXNDb25zdHJ1Y3RvciA6dHlwZW9mIEV2ZW50QXhpcztcbiAgICBhYnN0cmFjdCBtYXJrQ29uc3RydWN0b3IgOnR5cGVvZiBFdmVudE1hcms7XG5cbiAgICBhc3luYyBhcHBseSgpIHtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5pbml0TWFyaygpLFxuICAgICAgICAgICAgdGhpcy5pbml0Qm9keSgpLFxuICAgICAgICAgICAgdGhpcy5pbml0QXhpcygpLFxuICAgICAgICBdKTtcblxuICAgICAgICB0aGlzLmRyYXdJbmZvLmJveCA9IG1lcmdlQm94KFxuICAgICAgICAgICAgdGhpcy5ib2R5LmRyYXdJbmZvLmJveCxcbiAgICAgICAgICAgIHRoaXMubWFyay5kcmF3SW5mby5ib3gsXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGlzLmF4aXMpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0luZm8uYm94ID0gbWVyZ2VCb3goXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3SW5mby5ib3gsXG4gICAgICAgICAgICAgICAgdGhpcy5heGlzLmRyYXdJbmZvLmJveCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuYXBwbHkoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5ib2R5LmRyYXcoKTtcbiAgICAgICAgdGhpcy5heGlzICYmIHRoaXMuYXhpcy5kcmF3KCk7XG4gICAgICAgIHRoaXMubWFyay5kcmF3KCk7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmRyYXcoKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5tYXJrLmhpZGUoKTtcbiAgICAgICAgdGhpcy5ib2R5LmhpZGUoKTtcbiAgICAgICAgdGhpcy5heGlzICYmIHRoaXMuYXhpcy5oaWRlKCk7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmhpZGUoKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5tYXJrLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5ib2R5LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5heGlzICYmIHRoaXMuYXhpcy5kZXN0cm95KCk7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBpbml0TWFyaygpIDpQcm9taXNlPGFueT4ge1xuICAgICAgICBpZiAodGhpcy5tYXJrKSB0aGlzLm1hcmsuZGVzdHJveSgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlIC0gcmVhbGl6ZSBhIGFic29sdXRlIGNsYXNzIHRoYXQgd2lsbCByZS1pbml0IGluIHRoZSB0aGVtZS5cbiAgICAgICAgdGhpcy5tYXJrID0gbmV3IHRoaXMubWFya0NvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICB0aGlzLm1hcmsuZHJhd0luZm8udGFyZ2V0ID0gdGhpcy5kcmF3SW5mby50YXJnZXQ7XG4gICAgICAgIHRoaXMubWFyay5kcmF3SW5mby53aWR0aCA9IHRoaXMuZ3JpZC5tYXJrV2lkdGg7XG4gICAgICAgIHRoaXMubWFyay5kcmF3SW5mby5oZWlnaHQgPSB0aGlzLmdyaWQubWFya0hlaWdodDtcblxuICAgICAgICByZXR1cm4gdGhpcy5tYXJrLmFwcGx5KCk7XG4gICAgfVxuICAgIGluaXRCb2R5KCkgOlByb21pc2U8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLmJvZHkpIHRoaXMuYm9keS5kZXN0cm95KCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSByZWFsaXplIGEgYWJzb2x1dGUgY2xhc3MgdGhhdCB3aWxsIHJlLWluaXQgaW4gdGhlIHRoZW1lLlxuICAgICAgICB0aGlzLmJvZHkgPSBuZXcgdGhpcy5ib2R5Q29uc3RydWN0b3IodGhpcyk7XG4gICAgICAgIHRoaXMuYm9keS5kcmF3SW5mby5tYXJrRHJhd0luZm8gPSBkZWVwRnJlZXplKHRoaXMubWFyay5kcmF3SW5mbyk7XG4gICAgICAgIHRoaXMuYm9keS5kcmF3SW5mby5tYXhXaWR0aCA9IHRoaXMuZ3JpZC5ldmVudFdpZHRoO1xuICAgICAgICB0aGlzLmJvZHkuZHJhd0luZm8uZGF0ZSA9IHRoaXMuZHJhd0luZm8uZGF0ZTtcbiAgICAgICAgdGhpcy5ib2R5LmRyYXdJbmZvLnRpdGxlID0gdGhpcy5kcmF3SW5mby50aXRsZTtcbiAgICAgICAgdGhpcy5ib2R5LmRyYXdJbmZvLmRlc2NyaXB0aW9uID0gdGhpcy5kcmF3SW5mby5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5ib2R5LmRyYXdJbmZvLmZvbGRlZCA9IHRoaXMuZHJhd0luZm8uZm9sZGVkO1xuICAgICAgICB0aGlzLmJvZHkuZHJhd0luZm8uZm9sZFBsYWNlaG9sZGVyID0gdGhpcy5kcmF3SW5mby5mb2xkUGxhY2Vob2xkZXI7XG4gICAgICAgIHRoaXMuYm9keS5kcmF3SW5mby5vZmZzZXQgPSAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kcmF3SW5mby5vZmZzZXQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmJvZHkuYXBwbHkoKTtcbiAgICB9XG4gICAgaW5pdEF4aXMoKSA6UHJvbWlzZTxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMuYXhpcykge1xuICAgICAgICAgICAgdGhpcy5heGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuYXhpcyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kcmF3SW5mby5heGlzTGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIC0gcmVhbGl6ZSBhIGFic29sdXRlIGNsYXNzIHRoYXQgd2lsbCByZS1pbml0IGluIHRoZSB0aGVtZS5cbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSB0aGlzLmF4aXMgfHwgbmV3IHRoaXMuYXhpc0NvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICAgICAgYXhpcy5kcmF3SW5mby5heGlzQm9keURyYXdJbmZvID0gZGVlcEZyZWV6ZSh0aGlzLmV4dC5jb21wb25lbnRzW1NOLkF4aXNdWzBdLmRyYXdJbmZvKTtcbiAgICAgICAgICAgIGF4aXMuZHJhd0luZm8ubWFya0RyYXdJbmZvID0gZGVlcEZyZWV6ZSh0aGlzLm1hcmsuZHJhd0luZm8pO1xuICAgICAgICAgICAgYXhpcy5kcmF3SW5mby5vZmZzZXRYID0gdGhpcy5ncmlkLm1pbkV2ZW50QXhpc09mZnNldDtcbiAgICAgICAgICAgIGF4aXMuZHJhd0luZm8ubGVuZ3RoID0gdGhpcy5kcmF3SW5mby5heGlzTGVuZ3RoO1xuICAgICAgICAgICAgYXhpcy5kcmF3SW5mby50ZXh0ID0gdGhpcy5kcmF3SW5mby5heGlzVGV4dDtcbiAgICAgICAgICAgIHRoaXMuYXhpcyA9IGF4aXM7XG4gICAgICAgICAgICByZXR1cm4gYXhpcy5hcHBseSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXMoY29tcDpDb21wb25lbnQpIDpjb21wIGlzIEV2ZW50IHtcbiAgICAgICAgcmV0dXJuIGNvbXAubmFtZSA9PT0gU04uRXZlbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnRDb25zdHJ1Y3RvckluZm8sXG4gICAgQ29tcG9uZW50RHJhd0luZm8sXG4gICAgRGF0ZUJ5LFxuICAgIEdyaWRDb25maWcsXG4gICAgVGltZWxpbmVEYXRhLFxufSBmcm9tICdAZW5naW5lL3R5cGVzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnQGVuZ2luZS9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCBFdmVudCBmcm9tICdAZW5naW5lL0V2ZW50JztcbmltcG9ydCBBeGlzIGZyb20gJ0BlbmdpbmUvQXhpcyc7XG5pbXBvcnQgeyBkZWVwRnJlZXplLCB0aW1lTm9kZUdldHRlciB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBEQVRFX0NPVU5UX0VYVFJBLCBTTiwgU05fVkVSU0lPTiB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2RlZmluaXRpb25zJztcbmltcG9ydCBBeGlzU2NhbGUgZnJvbSAnQGVuZ2luZS9BeGlzL0F4aXNTY2FsZSc7XG5pbXBvcnQgQXhpc01pbGVzdG9uZSBmcm9tICdAZW5naW5lL0F4aXMvQXhpc01pbGVzdG9uZSc7XG5pbXBvcnQgeyBCcmVha3BvaW50IH0gZnJvbSAnQC9lbmdpbmUvZXh0ZW5zaW9ucy9CcmVha3BvaW50QW5pbWF0aW9uJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFdmVudEluZm9cbiAqIEBwcm9wZXJ0eSB7RGF0ZX0gZGF0ZSAtIGEgZGF0ZSBvZiBldmVudCBmaXJlZC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0aXRsZSAtIHRoZSB0aXRsZSBvZiBldmVudC5cbiAqXG4gKiBAcHJvcGVydHkge1tzdHJpbmddfSBkZXNjcmlwdGlvbiAtIHRoZSBkZXNjcmlwdGlvbiBvZiBldmVudC5cbiAqIEBwcm9wZXJ0eSB7W0RhdGV8J25vdyddfSBlbmREYXRlXG4gKiBBIGRhdGUgb2YgZXZlbnQgZW5kZWQgaWYgZXZlbnQgaGFzLlxuICogU2V0IFwibm93XCIgdG8gc3BlY2lmeSB0aGUgZXZlbnQgaXMgY29udGludW91cy5cbiAqIEBwcm9wZXJ0eSB7W3N0cmluZ119IGVuZFRleHQgLSB0aGUgZGVzY3JpcHRpb24gb2YgZXZlbnQgZW5kZWQgaWYgZXZlbnQgaGFzLlxuICpcbiAqIEBwcm9wZXJ0eSB7W2Jvb2xlYW5dfSBmb2xkZWQgLSB0aGUgZXZlbnQgaXMgZm9sZGVkIG9yIG5vdCB3aGVuIHRpbWVsaW5lIGRyYXduLlxuICogQHByb3BlcnR5IHtbc3RyaW5nXX0gZm9sZFBsYWNlaG9sZGVyIC0gYSB0ZXh0IHRvIHJlcGxhY2UgdGl0bGUgd2hlbiBldmVudCBpcyBmb2xkZWQuXG4gKiAqL1xuLyoqXG4gKiBAcHJvcGVydHkge0V2ZW50SW5mb1tdfSAtIGEgZXZlbnQgbGlzdCB0aGF0IGJlIGRyYXduIG9uIHRpbWVsaW5lLlxuICogKi9cbmludGVyZmFjZSBEcmF3SW5mbyBleHRlbmRzIENvbXBvbmVudERyYXdJbmZve1xuICAgIGV2ZW50czoge1xuICAgICAgICBkYXRlOiBEYXRlLFxuICAgICAgICB0aXRsZTogc3RyaW5nLFxuXG4gICAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxuICAgICAgICBlbmREYXRlPzogRGF0ZSB8ICdub3cnLFxuICAgICAgICBlbmRUZXh0Pzogc3RyaW5nLFxuXG4gICAgICAgIGZvbGRlZD86IGJvb2xlYW4sXG4gICAgICAgIGZvbGRQbGFjZWhvbGRlcj86IHN0cmluZyxcbiAgICB9W107XG59XG4vKipcbiAqIFRoZSBydW50aW1lIGluZm8gb2YgVGltZWxpbmUuXG4gKiBAcHJvcGVydHkge0RhdGV9IHN0YXJ0RGF0ZSAtIHRoZSBzdGFydCBkYXRlIG9mIHRpbWVsaW5lLlxuICogQHByb3BlcnR5IHtEYXRlfSBlbmREYXRlIC0gdGhlIGVuZCBkYXRlIG9mIHRpbWVsaW5lLlxuICogQHByb3BlcnR5IHtEYXRlQnl8bnVsbH0gbWlsZXN0b25lQnkgLSB3aGljaCB0aW1lIHR5cGUgaXMgdXNlZCBpbiBzcGxpdCB0aGUgbWlsZXN0b25lLlxuICogQHByb3BlcnR5IHtEYXRlQnl8bnVsbH0gc2NhbGVCeSAtIHdoaWNoIHRpbWUgdHlwZSBpcyB1c2VkIGluIHNwbGl0IHRoZSBzY2FsZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBheGlzTGVuZ3RoIC0gdGhlIHB4IG9mIHRpbWVsaW5lIGxlbmd0aC4gSXQncyBub3QgYSB3aG9sZSB0aW1lbGluZSBsZW5ndGguXG4gKiAqL1xuZXhwb3J0IGludGVyZmFjZSBSdW50aW1lSW5mb3tcbiAgICBzdGFydERhdGU6IERhdGU7XG4gICAgZW5kRGF0ZTogRGF0ZTtcbiAgICBtaWxlc3RvbmVCeTogRGF0ZUJ5IHwgbnVsbDtcbiAgICBzY2FsZUJ5OiBEYXRlQnkgfCBudWxsO1xuICAgIGF4aXNMZW5ndGg6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3RydWN0SW5mbyBleHRlbmRzIENvbXBvbmVudENvbnN0cnVjdG9ySW5mb3tcbiAgICBncmlkIDpHcmlkQ29uZmlnO1xufVxuXG4vKipcbiAqIFRpbWVsaW5lIHNlbGYuIFRoZXJlIGFyZSAyIHdheSB0byBkcmF3IGEgdGltZWxpbmUuXG4gKiAxLiBkcmF3IGEgdGltZWxpbmUgYmFzZSBvbiBldmVudCBsaXN0LlxuICogMi4gZHJhdyBhIHRpbWVsaW5lIGJhc2UgYW4gVGltZWxpbmVEYXRhLlxuICogRm9yIE5vLjEsIHRoZXJlIGFyZSBsaWtlOlxuICogYGBganNcbiAqIGNvbnN0IHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKC4uLik7XG4gKiB0aW1lbGluZS5ldmVudCA9IFsuLi5dO1xuICogYXdhaXQgdGltZWxpbmUuYXBwbHkoKTtcbiAqIHRpbWVsaW5lLmRyYXcoKTtcbiAqIGBgYGpzXG4gKlxuICogRm9yIE5vLjIsIEVuc3VyZSB5b3UgaGFkIGEgVGltZWxpbmVEYXRhLCBhbmQgcnVuIGxpa2UgdGhpcyBmb3IgZHJhdyBhIHRpbWVsaW5lOlxuICogKFRoZSBUaW1lbGluZURhdGEgaXMgZ2VuZXJhdGUgYnkgdGltZWxpbmUuZXhwb3J0KCkpXG4gKiBgYGBqc1xuICogY29uc3QgdGltZWxpbmUgPSBuZXcgVGltZWxpbmUoLi4uKTtcbiAqIGF3YWl0IHRpbWVsaW5lLmRyYXdGcm9tKHRpbWVsaW5lRGF0YSk7XG4gKiBgYGBcbiAqICovXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBUaW1lbGluZSBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpDb25zdHJ1Y3RJbmZvKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5ncmlkID0gcHJvcHMuZ3JpZDtcbiAgICAgICAgdGhpcy5leHQub25Db25zdHJ1Y3QodGhpcyk7XG4gICAgfVxuXG4gICAgbmFtZSA9IFNOLlRpbWVsaW5lO1xuICAgIGdyaWQ6R3JpZENvbmZpZyA9IFRpbWVsaW5lLmRlZmF1bHRHcmlkO1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlZCBhZnRlciB0aW1lbGluZS5hcHBseSgpIGNhbGxlZC5cbiAgICAgKiBJZiB5b3Ugd2FubmEgdG8gc3BlY2lmeSBzb21lIGtleXMsIHBhc3NlZCBhIG9iamVjdCB3aGVuIHRpbWVsaW5lLmFwcGx5KCkgY2FsbGVkLlxuICAgICAqIEBzZWUgUnVudGltZUluZm9cbiAgICAgKiAqL1xuICAgIHJ1bnRpbWUgOlJ1bnRpbWVJbmZvID0ge30gYXMgYW55O1xuICAgIGRyYXdJbmZvOiBEcmF3SW5mbyA9IHtcbiAgICAgICAgYm94OiB7IHg6MCwgeTowLCB3aWR0aDowLCBoZWlnaHQ6MCB9LFxuICAgICAgICBldmVudHM6IFtdLFxuICAgIH07XG5cbiAgICAvLyBUaGUgaW5zdGFuY2VzXG4gICAgZXZlbnRzOkV2ZW50W10gPSBbXTtcbiAgICBheGlzIDpBeGlzID0gbnVsbCBhcyBhbnk7XG5cbiAgICAvLyBUaGUgQ29uc3RydWN0b3JzXG4gICAgYWJzdHJhY3QgYXhpc0NvbnN0cnVjdG9yIDp0eXBlb2YgQXhpcztcbiAgICBhYnN0cmFjdCBldmVudENvbnN0cnVjdG9yIDp0eXBlb2YgRXZlbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1BhcnRpYWw8UnVudGltZUluZm8+fSAtIG1hbnVhbGx5IHNwZWNpZnkgc29tZSBydW50aW1lIGluZm8uXG4gICAgICogKi9cbiAgICBhc3luYyBhcHBseShydW50aW1lPzpQYXJ0aWFsPFJ1bnRpbWVJbmZvPikge1xuICAgICAgICB0aGlzLmluaXRSdW50aW1lKHJ1bnRpbWUpO1xuXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5ncmlkLmNhbnZhc1dpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLnJ1bnRpbWUuYXhpc0xlbmd0aCArIHRoaXMuZ3JpZC5heGlzU3RhcnQueSAqIDI7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUF4aXMoKTtcblxuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGUgPT4gZS5kZXN0cm95KCkpO1xuICAgICAgICB0aGlzLmV2ZW50cy5sZW5ndGggPSAwO1xuICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUV2ZW50cygpO1xuXG4gICAgICAgIHJldHVybiBzdXBlci5hcHBseSgpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmF4aXMuZHJhdygpO1xuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGV2ZW50LmRyYXcoKSk7XG4gICAgICAgIHJldHVybiBzdXBlci5kcmF3KCk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gZXZlbnQuaGlkZSgpKTtcbiAgICAgICAgdGhpcy5heGlzLmhpZGUoKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3IGEgdGltZWxpbmUgYmFzZSBvbiBhIFRpbWVsaW5lRGF0YS5cbiAgICAgKiAoVGhlIFRpbWVsaW5lRGF0YSBpcyBnZW5lcmF0ZSBieSB0aW1lbGluZS5leHBvcnQoKSlcbiAgICAgKiBAcGFyYW0gKFRpbWVsaW5lRGF0YSkgaW5wdXRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+Pn1cbiAgICAgKiAqL1xuICAgIGFzeW5jIGRyYXdGcm9tKGlucHV0OlRpbWVsaW5lRGF0YSkgOlByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBkYXRhOmFueSAgPSB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShpbnB1dCkuZGF0YSA6IGlucHV0LmRhdGE7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgYXhpczpBeGlzID0gbmV3IHRoaXMuYXhpc0NvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGV2ZW50OkV2ZW50ID0gbmV3IHRoaXMuZXZlbnRDb25zdHJ1Y3Rvcih0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IGRhdGEud2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xuXG4gICAgICAgIGNvbnN0IGFsbENvbXBvbmVudHM6Q29tcG9uZW50W10gPSBbXTtcblxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB7IGJvZHlEcmF3SW5mbywgc2NhbGVzRHJhd0luZm8sIG1pbGVzdG9uZXNEcmF3SW5mbyB9ID0gZGF0YS5heGlzO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgYWxsQ29tcG9uZW50cy5wdXNoKG5ldyBheGlzLmJvZHlDb25zdHJ1Y3Rvcih0aGlzKS5pbXBvcnREcmF3SW5mbyhib2R5RHJhd0luZm8pKTtcblxuICAgICAgICAgICAgY29uc3Qgc2NhbGVzQW5kTWlsZXN0b25lczooQXhpc1NjYWxlIHwgQXhpc01pbGVzdG9uZSlbXSA9IFtdO1xuICAgICAgICAgICAgc2NhbGVzRHJhd0luZm8uZm9yRWFjaCgoc2NhbGVEcmF3SW5mbzphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBzY2FsZXNBbmRNaWxlc3RvbmVzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgbmV3IGF4aXMuc2NhbGVDb25zdHJ1Y3Rvcih0aGlzKS5pbXBvcnREcmF3SW5mbyhzY2FsZURyYXdJbmZvKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1pbGVzdG9uZXNEcmF3SW5mby5mb3JFYWNoKChtaWxlc3RvbmVEcmF3SW5mbzphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBzY2FsZXNBbmRNaWxlc3RvbmVzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgbmV3IGF4aXMubWlsZXN0b25lQ29uc3RydWN0b3IodGhpcykuaW1wb3J0RHJhd0luZm8obWlsZXN0b25lRHJhd0luZm8pLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2NhbGVzQW5kTWlsZXN0b25lcy5zb3J0KFxuICAgICAgICAgICAgICAgIChjb21wMSwgY29tcDIpID0+IGNvbXAxLmRyYXdJbmZvLmFsaWduWSAtIGNvbXAyLmRyYXdJbmZvLmFsaWduWSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGFsbENvbXBvbmVudHMucHVzaCguLi5zY2FsZXNBbmRNaWxlc3RvbmVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV2ZW50czphbnlbXSA9IEFycmF5LmZyb20oZGF0YS5ldmVudHMpXG4gICAgICAgICAgICAuc29ydCgoZTE6YW55LCBlMjphbnkpID0+IGUxLmRyYXdJbmZvLnRhcmdldC55IC0gZTIuZHJhd0luZm8udGFyZ2V0LnkpXG4gICAgICAgIDtcbiAgICAgICAgZm9yIChjb25zdCB7IGJvZHlEcmF3SW5mbywgbWFya0RyYXdJbmZvLCBheGlzRHJhd0luZm8gfSBvZiBldmVudHMpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGFsbENvbXBvbmVudHMucHVzaChuZXcgZXZlbnQubWFya0NvbnN0cnVjdG9yKHRoaXMpLmltcG9ydERyYXdJbmZvKG1hcmtEcmF3SW5mbykpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgYWxsQ29tcG9uZW50cy5wdXNoKG5ldyBldmVudC5ib2R5Q29uc3RydWN0b3IodGhpcykuaW1wb3J0RHJhd0luZm8oYm9keURyYXdJbmZvKSk7XG5cbiAgICAgICAgICAgIGlmIChheGlzRHJhd0luZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgYWxsQ29tcG9uZW50cy5wdXNoKG5ldyBldmVudC5heGlzQ29uc3RydWN0b3IodGhpcykuaW1wb3J0RHJhd0luZm8oYXhpc0RyYXdJbmZvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBNYXliZSB0aGVyZSBpcyBzbG93IHdoZW4gd2FudCBub3QgcGxheSBhbmltYXRpb24/XG4gICAgICAgIGZvciAoY29uc3QgY29tcCBvZiBhbGxDb21wb25lbnRzKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmV4dC5icmVha3BvaW50LmJsb2NrKEJyZWFrcG9pbnQuRHJhd0Zyb20pO1xuICAgICAgICAgICAgY29tcC5kcmF3KCk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHBvcnQgYSBUaW1lbGluZURhdGEgZm9yIGN1cnJlbnQgdGltZWxpbmUuXG4gICAgICogTWFrZSBzdXJlIGNhbGwgdGltZWxpbmUuYXBwbHkoKSBiZWZvcmUgY2FsbCB0aGlzIG1ldGhvZC5cbiAgICAgKiBAcmV0dXJuIHtUaW1lbGluZURhdGF9XG4gICAgICogKi9cbiAgICBleHBvcnQoKSA6VGltZWxpbmVEYXRhIHtcbiAgICAgICAgY29uc3QgdGltZWxpbmUgPSB0aGlzLmV4dC5jb21wb25lbnRzW1NOLlRpbWVsaW5lXVswXTtcbiAgICAgICAgcmV0dXJuIGRlZXBGcmVlemUoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0aGVtZTogdGltZWxpbmUudGhlbWUsXG4gICAgICAgICAgICB2ZXJzaW9uOiBTTl9WRVJTSU9OLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB0aW1lbGluZS5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aW1lbGluZS5jYW52YXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRpbWVsaW5lOiB0aW1lbGluZS5kcmF3SW5mbyxcbiAgICAgICAgICAgICAgICBydW50aW1lOiB0aW1lbGluZS5ydW50aW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50czogdGltZWxpbmUuZXZlbnRzLm1hcChldmVudCA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBkcmF3SW5mbzogZXZlbnQuZHJhd0luZm8sXG4gICAgICAgICAgICAgICAgICAgIGJvZHlEcmF3SW5mbzogZXZlbnQuYm9keS5kcmF3SW5mbyxcbiAgICAgICAgICAgICAgICAgICAgbWFya0RyYXdJbmZvOiBldmVudC5tYXJrLmRyYXdJbmZvLFxuICAgICAgICAgICAgICAgICAgICBheGlzRHJhd0luZm86IGV2ZW50LmF4aXMgPyBldmVudC5heGlzLmRyYXdJbmZvIDpudWxsLFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICBheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRyYXdJbmZvOiB0aW1lbGluZS5heGlzLmRyYXdJbmZvLFxuICAgICAgICAgICAgICAgICAgICBib2R5RHJhd0luZm86IHRpbWVsaW5lLmF4aXMuYm9keS5kcmF3SW5mbyxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVzRHJhd0luZm86IHRpbWVsaW5lLmF4aXMuc2NhbGVzLm1hcChzY2FsZSA9PiBzY2FsZS5kcmF3SW5mbyksXG4gICAgICAgICAgICAgICAgICAgIG1pbGVzdG9uZXNEcmF3SW5mbzogdGltZWxpbmUuYXhpcy5taWxlc3RvbmVzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbGVzdG9uZSA9PiBtaWxlc3RvbmUuZHJhd0luZm8sXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgLy8gQ291bnQgcnVudGltZSBpbmZvXG4gICAgcHJvdGVjdGVkIGluaXRSdW50aW1lKHJ1bnRpbWU/OlBhcnRpYWw8UnVudGltZUluZm8+KSB7XG4gICAgICAgIHRoaXMucnVudGltZSA9IE9iamVjdC5jcmVhdGUocnVudGltZSB8fCBPYmplY3QucHJvdG90eXBlKTtcblxuICAgICAgICB0aGlzLnJ1bnRpbWUuc3RhcnREYXRlICAgPSAoJ3N0YXJ0RGF0ZScgICBpbiB0aGlzLnJ1bnRpbWUpXG4gICAgICAgICAgICA/IG5ldyBEYXRlKHRoaXMucnVudGltZS5zdGFydERhdGUpXG4gICAgICAgICAgICA6IHRoaXMuY291bnRTdGFydERhdGEoKTtcbiAgICAgICAgdGhpcy5ydW50aW1lLmVuZERhdGUgICAgID0gKCdlbmREYXRlJyAgICAgaW4gdGhpcy5ydW50aW1lKVxuICAgICAgICAgICAgPyBuZXcgRGF0ZSh0aGlzLnJ1bnRpbWUuZW5kRGF0ZSlcbiAgICAgICAgICAgIDogdGhpcy5jb3VudEVuZERhdGEoKTtcbiAgICAgICAgdGhpcy5ydW50aW1lLm1pbGVzdG9uZUJ5ID0gKCdtaWxlc3RvbmVCeScgaW4gdGhpcy5ydW50aW1lKVxuICAgICAgICAgICAgPyB0aGlzLnJ1bnRpbWUubWlsZXN0b25lQnlcbiAgICAgICAgICAgIDogdGhpcy5jb3VudE1pbGVzdG9uZUJ5KCk7XG4gICAgICAgIHRoaXMucnVudGltZS5zY2FsZUJ5ICAgICA9ICgnc2NhbGVCeScgICAgIGluIHRoaXMucnVudGltZSlcbiAgICAgICAgICAgID8gdGhpcy5ydW50aW1lLnNjYWxlQnlcbiAgICAgICAgICAgIDogdGhpcy5jb3VudFNjYWxlQnkoKTtcbiAgICAgICAgdGhpcy5ydW50aW1lLmF4aXNMZW5ndGggID0gKCdheGlzTGVuZ3RoJyAgaW4gdGhpcy5ydW50aW1lKVxuICAgICAgICAgICAgPyB0aGlzLnJ1bnRpbWUuYXhpc0xlbmd0aFxuICAgICAgICAgICAgOiB0aGlzLmNvdW50QXhpc0xlbmd0aCgpO1xuXG4gICAgICAgIC8vIEZJWE1FOiBXaGF0IGlzIGl0Pz8/XG4gICAgICAgIC8vIGFsaWduaW5nIHNjYWxlQnlcbiAgICAgICAgdGhpcy5ydW50aW1lLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgbmV3IERhdGUodGhpcy5ydW50aW1lLnN0YXJ0RGF0ZSEpLmdldFRpbWUoKVxuICAgICAgICAgICAgLSBEQVRFX0NPVU5UX0VYVFJBW3RoaXMucnVudGltZS5zY2FsZUJ5IHx8IERhdGVCeS5EYXldLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJ1bnRpbWUuZW5kRGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgbmV3IERhdGUodGhpcy5ydW50aW1lLmVuZERhdGUhKS5nZXRUaW1lKClcbiAgICAgICAgICAgICsgREFURV9DT1VOVF9FWFRSQVt0aGlzLnJ1bnRpbWUuc2NhbGVCeSB8fCBEYXRlQnkuRGF5XSxcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNvdW50U3RhcnREYXRhKCkgOkRhdGUge1xuICAgICAgICBjb25zdCBldmVudHMgPSBBcnJheS5mcm9tKHRoaXMuZHJhd0luZm8uZXZlbnRzKS5zb3J0KFxuICAgICAgICAgICAgKGUxLCBlMikgPT4gTnVtYmVyKG5ldyBEYXRlKGUxLmRhdGUpKSAtIE51bWJlcihuZXcgRGF0ZShlMi5kYXRlKSksXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShldmVudHNbMF0uZGF0ZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjb3VudEVuZERhdGEoKSA6RGF0ZSB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZHJhd0luZm8uZXZlbnRzO1xuXG4gICAgICAgIGNvbnN0IG1heFN0YXJ0RGF0YSA9IE1hdGgubWF4KC4uLmV2ZW50cy5tYXAoZXZlbnQgPT4gTnVtYmVyKG5ldyBEYXRlKGV2ZW50LmRhdGUpKSkpO1xuICAgICAgICBjb25zdCBtYXhFbmREYXRhID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAuLi5ldmVudHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGV2ZW50ID0+ICgnZW5kRGF0ZScgaW4gZXZlbnQpKVxuICAgICAgICAgICAgICAgIC5tYXAoZXZlbnQgPT4gTnVtYmVyKG5ldyBEYXRlKGV2ZW50LmVuZERhdGUhKSkpLFxuICAgICAgICApIHx8IC0xO1xuXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShNYXRoLm1heChtYXhTdGFydERhdGEgLCBtYXhFbmREYXRhKSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjb3VudE1pbGVzdG9uZUJ5KCkgOkRhdGVCeSB8IG51bGwge1xuICAgICAgICBjb25zdCBUV09fV0VFSyAgICAgID0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDcgKiAyO1xuICAgICAgICBjb25zdCBUV09fTU9OVEggICAgID0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwICogMjtcbiAgICAgICAgY29uc3QgVFdPX1FVQVJURVIgICA9IDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCAqIDMgKiAyO1xuICAgICAgICBjb25zdCBUV09fWUVBUiAgICAgID0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwICogMTIgKiAyO1xuXG4gICAgICAgIGNvbnN0IGRhdGFTY29wZSA9XG4gICAgICAgICAgICBuZXcgRGF0ZSh0aGlzLnJ1bnRpbWUuZW5kRGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAtIG5ldyBEYXRlKHRoaXMucnVudGltZS5zdGFydERhdGUpLmdldFRpbWUoKVxuICAgICAgICA7XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGRhdGFTY29wZSA+IFRXT19ZRUFSOlxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlQnkuWWVhcjtcbiAgICAgICAgICAgIGNhc2UgZGF0YVNjb3BlID4gVFdPX1FVQVJURVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVCeS5RdWFydGVyO1xuICAgICAgICAgICAgY2FzZSBkYXRhU2NvcGUgPiBUV09fTU9OVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVCeS5Nb250aDtcbiAgICAgICAgICAgIGNhc2UgZGF0YVNjb3BlID4gVFdPX1dFRUs6XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVCeS5XZWVrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICB9XG4gICAgcHJvdGVjdGVkIGNvdW50U2NhbGVCeSgpIDpEYXRlQnkgfCBudWxsIHtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMucnVudGltZS5taWxlc3RvbmVCeSkge1xuICAgICAgICAgICAgY2FzZSBEYXRlQnkuWWVhcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZUJ5LlF1YXJ0ZXI7XG4gICAgICAgICAgICBjYXNlIERhdGVCeS5RdWFydGVyOlxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlQnkuTW9udGg7XG4gICAgICAgICAgICBjYXNlIERhdGVCeS5Nb250aDpcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZUJ5LldlZWs7XG4gICAgICAgICAgICBjYXNlIERhdGVCeS5XZWVrOlxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlQnkuRGF5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICB9XG4gICAgcHJvdGVjdGVkIGNvdW50QXhpc0xlbmd0aCgpIDpudW1iZXIge1xuICAgICAgICByZXR1cm4gNTAwICsgdGhpcy5kcmF3SW5mby5ldmVudHMubGVuZ3RoICogMTAwO1xuICAgIH1cbiAgICAvLyBDcmVhdGUgaW5zdGFuY2VcbiAgICBwcm90ZWN0ZWQgYXN5bmMgY3JlYXRlQXhpcygpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIXRoaXMuYXhpcykgdGhpcy5heGlzID0gbmV3IHRoaXMuYXhpc0NvbnN0cnVjdG9yKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IGVuZERhdGU6bnVtYmVyID0gbmV3IERhdGUodGhpcy5ydW50aW1lLmVuZERhdGUpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3Qgc3RhcnREYXRlOm51bWJlciA9IG5ldyBEYXRlKHRoaXMucnVudGltZS5zdGFydERhdGUpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgZGF0ZUxlbmd0aCA9IGVuZERhdGUgLSBzdGFydERhdGU7XG4gICAgICAgIHRoaXMuYXhpcy5kcmF3SW5mby5sZW5ndGggPSB0aGlzLnJ1bnRpbWUuYXhpc0xlbmd0aDtcbiAgICAgICAgaWYgKHRoaXMucnVudGltZS5taWxlc3RvbmVCeSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5heGlzLmRyYXdJbmZvLm1pbGVzdG9uZXMgPVxuICAgICAgICAgICAgICAgIHRpbWVOb2RlR2V0dGVyW3RoaXMucnVudGltZS5taWxlc3RvbmVCeV0oXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHN0YXJ0RGF0ZSksIG5ldyBEYXRlKGVuZERhdGUpLFxuICAgICAgICAgICAgICAgICkubWFwKChkYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAoZW5kRGF0ZSAtIGRhdGUuZ2V0VGltZSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8gZGF0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb250aEFiYnIgPSBkYXRlLnRvRGF0ZVN0cmluZygpLnNwbGl0KCcgJylbMV07XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5ydW50aW1lLm1pbGVzdG9uZUJ5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC50ZXh0ID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQudGV4dCA9IGAke21vbnRoQWJicn0uICR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnRleHQgPSBgJHttb250aEFiYnJ9LmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQudGV4dCA9IGAke2RhdGUuZ2V0TW9udGgoKSArIDF9LiR7ZGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnRleHQgPSBgJHtkYXRlLmdldE1vbnRoKCkgKyAxfS4ke2RhdGUuZ2V0RGF0ZSgpfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJ1bnRpbWUuc2NhbGVCeSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5heGlzLmRyYXdJbmZvLnNjYWxlcyA9XG4gICAgICAgICAgICAgICAgdGltZU5vZGVHZXR0ZXJbdGhpcy5ydW50aW1lLnNjYWxlQnldKFxuICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSh0aGlzLnJ1bnRpbWUuc3RhcnREYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUodGhpcy5ydW50aW1lLmVuZERhdGUpLFxuICAgICAgICAgICAgICAgICkubWFwKGRhdGUgPT5cbiAgICAgICAgICAgICAgICAgICAgKG5ldyBEYXRlKHRoaXMucnVudGltZS5lbmREYXRlKS5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKSlcbiAgICAgICAgICAgICAgICAgICAgLyBkYXRlTGVuZ3RoLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmF4aXMuYXBwbHkoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGFzeW5jIGNyZWF0ZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgZXZlbnRzID0gQXJyYXkuZnJvbSh0aGlzLmRyYXdJbmZvLmV2ZW50cylcbiAgICAgICAgICAgIC5zb3J0KChlMSwgZTIpID0+IG5ldyBEYXRlKGUxLmRhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGUyLmRhdGUpLmdldFRpbWUoKSlcbiAgICAgICAgO1xuICAgICAgICBjb25zdCBkYXRlTGVuZ3RoID1cbiAgICAgICAgICAgIG5ldyBEYXRlKHRoaXMucnVudGltZS5lbmREYXRlKS5nZXRUaW1lKClcbiAgICAgICAgICAgIC0gbmV3IERhdGUodGhpcy5ydW50aW1lLnN0YXJ0RGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgIDtcbiAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIGV2ZW50cykge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgdGhpcy5ldmVudENvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICAgICAgZXZlbnQuZHJhd0luZm8udGFyZ2V0ID0ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuYXhpcy5ib2R5LmRyYXdJbmZvLmJveC54ICsgdGhpcy5heGlzLmJvZHkuZHJhd0luZm8uYm94LndpZHRoIC8gMixcbiAgICAgICAgICAgICAgICAvLyByZWNvbXB1dGVkIGluIFBvc2l0aW9uQ291bnRlclxuICAgICAgICAgICAgICAgIHk6XG4gICAgICAgICAgICAgICAgICAgIChuZXcgRGF0ZSh0aGlzLnJ1bnRpbWUuZW5kRGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoZGF0YS5kYXRlKS5nZXRUaW1lKCkpXG4gICAgICAgICAgICAgICAgICAgIC8gZGF0ZUxlbmd0aFxuICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBldmVudC5kcmF3SW5mby5kYXRlID0gZGF0YS5kYXRlO1xuICAgICAgICAgICAgZXZlbnQuZHJhd0luZm8udGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgICAgICAgICAgZXZlbnQuZHJhd0luZm8uZGVzY3JpcHRpb24gPSBkYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZXZlbnQuZHJhd0luZm8uZm9sZGVkID0gQm9vbGVhbihkYXRhLmZvbGRlZCk7XG4gICAgICAgICAgICBldmVudC5kcmF3SW5mby5mb2xkUGxhY2Vob2xkZXIgPSBkYXRhLmZvbGRQbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIGV2ZW50LmRyYXdJbmZvLmF4aXNUZXh0ID0gZGF0YS5lbmRUZXh0O1xuICAgICAgICAgICAgaWYgKGRhdGEuZW5kRGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZERhdGUgOkRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5lbmREYXRlID09PSAnbm93J1xuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJ1bnRpbWUuZW5kRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhLmVuZERhdGVcbiAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gcmVjb21wdXRlZCBpbiBQb3NpdGlvbkNvdW50ZXJcbiAgICAgICAgICAgICAgICBldmVudC5kcmF3SW5mby5heGlzTGVuZ3RoID1cbiAgICAgICAgICAgICAgICAgICAgKGVuZERhdGUuZ2V0VGltZSgpIC0gbmV3IERhdGUoZGF0YS5kYXRlKS5nZXRUaW1lKCkpXG4gICAgICAgICAgICAgICAgICAgIC8gZGF0ZUxlbmd0aFxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IGV2ZW50LmFwcGx5KCk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRHcmlkOkdyaWRDb25maWcgPSB7XG4gICAgICAgIGV2ZW50T2Zmc2V0OiB7IHg6MjAsIHk6MCB9LFxuICAgICAgICBtaW5FdmVudEF4aXNPZmZzZXQ6IDI1LFxuICAgICAgICBtYXJrV2lkdGg6IDE1LFxuICAgICAgICBzY2FsZUhlaWdodDogNSxcbiAgICAgICAgYXhpc1dpZHRoOiAxMixcbiAgICAgICAgYXhpc1N0YXJ0OiB7XG4gICAgICAgICAgICB4OiA0MDAsXG4gICAgICAgICAgICB5OiAxMCxcbiAgICAgICAgfSxcbiAgICAgICAgZXZlbnRXaWR0aDogMzUwLFxuICAgICAgICBjYW52YXNXaWR0aDogNzAwLFxuICAgIH07XG5cbiAgICBzdGF0aWMgaXMoY29tcDpDb21wb25lbnQpIDpjb21wIGlzIFRpbWVsaW5lIHtcbiAgICAgICAgcmV0dXJuIGNvbXAubmFtZSA9PT0gU04uVGltZWxpbmU7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnREcmF3SW5mbywgQ29tcG9uZW50Q29uc3RydWN0b3JJbmZvIH0gZnJvbSAnQGVuZ2luZS90eXBlcyc7XG5pbXBvcnQgeyBFeHRlbnNpb25NYW5hZ2VyIH0gZnJvbSAnQC9lbmdpbmUvZXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBTTiB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2RlZmluaXRpb25zJztcbmltcG9ydCB7IHBhcnNlQm94LCBtZXJnZUJveCwgY3JlYXRlTG9nRnVuY3Rpb24gfSBmcm9tICdAZW5naW5lL2NvbW1vbi9mdW5jdGlvbnMnO1xuXG5lbnVtIE1VU1RfQ0FMTF9BTkRfUkVUVVJOX1NVUEVSX01FVEhPRCB7XG4gICAgU1VQRVJfQVBQTFksXG4gICAgU1VQRVJfRFJBVyxcbiAgICBTVVBFUl9ERVNUUk9ZLFxuICAgIFNVUEVSX0NSRUFURV9FTEVNRU5ULFxuICAgIFNVUEVSX0hJREUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcih7IGV4dCwgY2FudmFzLCBjb250YWluZXIgfTpDb21wb25lbnRDb25zdHJ1Y3RvckluZm8pIHtcbiAgICAgICAgdGhpcy5leHQgPSBleHQ7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXMgYXMgYW55O1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lciBhcyBhbnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgbmFtZS5cbiAgICAgKiBCZSBmaWxsZWQgd2hlbiB0aGUgdGhlbWUncyBjbGFzcyBjb25zdHJ1Y3RlZC5cbiAgICAgKiAqL1xuICAgIGFic3RyYWN0IHRoZW1lIDpzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQ29tcG9uZW50IG5hbWUuXG4gICAgICogQmUgZmlsbGVkIHdoZW4gdGhlIGVuZ2luZSdzIGNsYXNzIGNvbnN0cnVjdGVkLlxuICAgICAqICovXG4gICAgYWJzdHJhY3QgbmFtZSA6U047XG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgd2hpY2ggYmUgdXNlZCBpbiBFeHRlbnNpb25zLlxuICAgICAqIEBwcm9wZXJ0eSBpZCAtIHVzaW5nIGluIEdlbmVyYXRvcklkXG4gICAgICogQHByb3BlcnR5IGJveEVsZW1lbnQgLSB1c2luZyBpbiBCb3hFbGVtZW50R2VuZXJhdG9yXG4gICAgICogQHByb3BlcnR5IHJlYWxMZW5ndGggLSB1c2luZyBpbiBQb3NpdGlvbkNvdW50ZXIsIGV4aXN0aW5nIGluIEF4aXMgb25seS5cbiAgICAgKiBAcHJvcGVydHkgbmVlZGVkIC0gdXNpbmcgaW4gQ29uZmxpY3RGaXhlciwgZXhpc3RpbmcgaW4gRXZlbnRCb2R5IG9ubHkuXG4gICAgICogQHByb3BlcnR5IHNwYWNlIC0gdXNpbmcgaW4gQ29uZmxpY3RGaXhlciwgZXhpc3RpbmcgaW4gRXZlbnRCb2R5IG9ubHkuXG4gICAgICogKi9cbiAgICBleHRyYURhdGEgOntcbiAgICAgICAgaWQgPzpzdHJpbmcsXG4gICAgICAgIGJveEVsZW1lbnQgPzpIVE1MRWxlbWVudCxcbiAgICAgICAgcmVhbExlbmd0aCA/Om51bWJlcixcbiAgICAgICAgbmVlZGVkPzoge3RvcDpudW1iZXIsIGJvdHRvbTpudW1iZXJ9LFxuICAgICAgICBzcGFjZT86IHt0b3A6bnVtYmVyLCBib3R0b206bnVtYmVyfSxcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55LFxuICAgIH0gPSB7fTtcbiAgICAvKipcbiAgICAgKiBUaGUgY2FudmFzIHdoZXJlIGNvbXBvbmVudCBkcmF3IG9uLlxuICAgICAqIE11c3QgYmUgZmlsbGVkIGJlZm9yZSBhcHBseSgpIGNhbGxlZC5cbiAgICAgKiAqL1xuICAgIGNhbnZhcyA6SFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRhaW5lciB3aGljaCBjb250YWluIGFsbCBvZiBjb21wb25lbnQncyBlbGVtZW50LlxuICAgICAqIE11c3QgYmUgZmlsbGVkIGJlZm9yZSBhcHBseSgpIGNhbGxlZC5cbiAgICAgKiAqL1xuICAgIGNvbnRhaW5lciA6SFRNTEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogTWFuYWdlIGFsbCBleHRlbnNpb25zICYgSGVscCBjb21wb25lbnQgY29tbXVuaWNhdGUgZm9yIGVhY2ggb3RoZXIuXG4gICAgICogQmUgZmlsbGVkIHdoZW4gY29uc3RydWN0LlxuICAgICAqICovXG4gICAgZXh0OiBFeHRlbnNpb25NYW5hZ2VyO1xuICAgIC8qKlxuICAgICAqIEFsbCBpbmZvIGFib3V0IGRyYXcuIEV4Y2VwdCBkcmF3SW5mbywgbm8gbW9yZSBzdGF0ZXMgYmUgZGVwZW5kZWQgYWJvdXQgZHJhdy5cbiAgICAgKiBUaGUgc2FtZSBkcmF3SW5mbyBtdXN0IGhhcyBzYW1lIGRyYXduIG9uIGNhbnZhcyBhbmQgY29udGFpbmVyLlxuICAgICAqIFRoZSB0aGlzLmdpcmQgc2hvdWxkIGJlIG1lcmdpbmcgaW4gdGhlcmUgaW4gdGhpcy5hcHBseSBiZSBjYWxsZWQuXG4gICAgICogTXVzdCBjYW4gYmUgSlNPTi5zdHJpbmdpZnkuXG4gICAgICogKi9cbiAgICBhYnN0cmFjdCByZWFkb25seSBkcmF3SW5mbzogQ29tcG9uZW50RHJhd0luZm87XG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25hbC4gQmUgZmlsbGVkIGluIHRoaXMuY3JlYXRlRWxlbWVudC5cbiAgICAgKiBUaGUgSFRNTCBlbGVtZW50IHdoaWNoIGJlIG5lZWRlZCBieSBjb21wb25lbnQgZHJhdy5cbiAgICAgKiAqL1xuICAgIGVsZW1lbnQgPzpIVE1MRWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBPcHRpb25hbC4gRGVwZW5kIG9uIHRoZSBkcmF3IHRoaXMgY29tcG9uZW50IGlzIG5lZWQgSFRNTCBlbGVtZW50IG9yIG5vdC5cbiAgICAgKiBDcmVhdGUgYW4gSFRNTCBlbGVtZW50IGJhc2Ugb24gdGhpcy5kcmF3SW5mbyB0byBmaWxsIHRoaXMuZWxlbWVudFxuICAgICAqIGFuZCBhcHBlbmQgdG8gdGhpcy5jb250YWluZXIuXG4gICAgICogQmUgY2FsbGVkIGluIHRoaXMuYXBwbHkgYW5kIHRoaXMuZHJhdy5cbiAgICAgKiAqL1xuICAgIGNyZWF0ZUVsZW1lbnQoKSA6TVVTVF9DQUxMX0FORF9SRVRVUk5fU1VQRVJfTUVUSE9EIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3J0LW5pZ2h0JywgdGhpcy50aGVtZSwgdGhpcy5uYW1lKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcblxuICAgICAgICByZXR1cm4gTVVTVF9DQUxMX0FORF9SRVRVUk5fU1VQRVJfTUVUSE9ELlNVUEVSX0NSRUFURV9FTEVNRU5UO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lYW5zIHRoYXQgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuXG4gICAgICogQ2FsbCBhbnkgbWV0aG9kIG9uIGNvbXBvbmVudCB3aGVuIGl0IGhhcyBkZXN0cm95ZWQgd2lsbCBnb3QgYW4gZXJyb3IuXG4gICAgICogKi9cbiAgICBkZXN0cm95ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHNlbGYuXG4gICAgICogSXQgc2hvdWxkIHJlbW92ZSBhbGwgZWxlbWVudCBmcm9tIGRvbSBhbmQgY2xlYXIgYWxsIHRyYWNlIGluIGNhbnZhcyBpZiB0aGF0J3MgbWFkZSBieSBzZWxmLlxuICAgICAqICovXG4gICAgZGVzdHJveSgpIDpNVVNUX0NBTExfQU5EX1JFVFVSTl9TVVBFUl9NRVRIT0Qge1xuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveSgpO1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZXh0Lm9uRGVzdHJveSh0aGlzKTtcblxuICAgICAgICByZXR1cm4gTVVTVF9DQUxMX0FORF9SRVRVUk5fU1VQRVJfTUVUSE9ELlNVUEVSX0RFU1RST1k7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhpcy5kcmF3SW5mbyBpbiBjb21wb25lbnQuXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkJ3QgY2hhbmdlIGFueSBwcm9wZXJ0eSBpbiB0aGlzLmRyYXdJbmZvIGV4Y2VwdCB0aGlzLmRyYXdJbmZvLmJveC5cbiAgICAgKiBAYXN5bmNcbiAgICAgKiAqL1xuICAgIGFzeW5jIGFwcGx5KC4uLmFyZ3MgOmFueVtdKSA6UHJvbWlzZTxNVVNUX0NBTExfQU5EX1JFVFVSTl9TVVBFUl9NRVRIT0Q+IHtcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3koKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5kcmF3SW5mby5ib3ggPSBtZXJnZUJveChcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdJbmZvLmJveCxcbiAgICAgICAgICAgICAgICBwYXJzZUJveCh0aGlzLmVsZW1lbnQpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmV4dC5vbkFwcGx5KHRoaXMpO1xuXG4gICAgICAgIHJldHVybiBNVVNUX0NBTExfQU5EX1JFVFVSTl9TVVBFUl9NRVRIT0QuU1VQRVJfQVBQTFk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXcgc2VsZiBiYXNlIG9uIHRoaXMuZHJhd0luZm8uXG4gICAgICogSXQgc2hvdWxkIGNhbiBiZSBjYWxsIG11bHRpcGxlIHRpbWVzLlxuICAgICAqIENhbGwgdGhpcy5hcHBseSBiZWZvcmUgdGhpcy5kcmF3LlxuICAgICAqICovXG4gICAgZHJhdygpIDpNVVNUX0NBTExfQU5EX1JFVFVSTl9TVVBFUl9NRVRIT0Qge1xuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveSgpO1xuXG4gICAgICAgIHRoaXMuZXh0Lm9uRHJhdyh0aGlzKTtcblxuICAgICAgICByZXR1cm4gTVVTVF9DQUxMX0FORF9SRVRVUk5fU1VQRVJfTUVUSE9ELlNVUEVSX0RSQVc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhpZGUgYWxsIG9mIHRyYWNlIGNyZWF0ZWQgYnkgc2VsZi5cbiAgICAgKiBIaWRkZW4gaXMgbm90IGRlc3Ryb3llZC4gRW5zdXJlIHRoZSBjb21wb25lbnQgaXMgc3RpbGwgYXZhaWxhYmxlIHdoZW4gdGhpcy5oaWRlIGhhdmUgY2FsbC5cbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIHRyeSBzZXQgXCJ2aXNpYmlsaXR5OiAnaGlkZGVuJ1wiIGZvciB0aGlzLmVsZW1lbnQgcmF0aGVyIHRoYW4gcmVtb3ZlIGl0LlxuICAgICAqICovXG4gICAgaGlkZSgpIDpNVVNUX0NBTExfQU5EX1JFVFVSTl9TVVBFUl9NRVRIT0Qge1xuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHRoaXMuZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykhLmNsZWFyUmVjdChcbiAgICAgICAgICAgIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5leHQub25IaWRlKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiBNVVNUX0NBTExfQU5EX1JFVFVSTl9TVVBFUl9NRVRIT0QuU1VQRVJfSElERTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSB3aG9sZSBkcmF3SW5mbyBpbnRvIGNvbXBvbmVudC5cbiAgICAgKiBUaGUgY29tcG9uZW50IHN0aWxsIG5lZWQgdGhpcy5hcHBseSBjYWxsZWQgYmVmb3JlIGRyYXcgd2hlbiB0aGlzLmltcG9ydERyYXdJbmZvIGJlZW4gY2FsbGVkLlxuICAgICAqICovXG4gICAgaW1wb3J0RHJhd0luZm8oZHJhd0luZm86Q29tcG9uZW50RHJhd0luZm8pIHtcbiAgICAgICAgKDxhbnk+dGhpcykuZHJhd0luZm8gPSBkcmF3SW5mbztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJpbnQgbG9nIGlmIHRoZSBERUJVRyBpcyB0cnVlLlxuICAgICAqIEBleGFtcGxlIHRoaXMubGBIZWxsbyB3b3JsZGBcbiAgICAgKiAqL1xuICAgIHByb3RlY3RlZCBnZXQgbCgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxvZ0Z1bmN0aW9uKGAke3RoaXMudGhlbWV9LyR7dGhpcy5uYW1lfWApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBWZXJpZnkgYSBjb21wb25lbnQgaXMgZGVzdHJveWVkIG9yIG5vdC5cbiAgICAgKiBUaHJvdyBhbiBlcnJvciBpZiB0aGlzLmRlc3Ryb3llZCBpcyB0cnVlLlxuICAgICAqICovXG4gICAgcHJvdGVjdGVkIGNoZWNrRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYCR7dGhpcy50aGVtZX0vJHt0aGlzLm5hbWV9IGhhcyBiZWFuIGRlc3Ryb3llZCxgXG4gICAgICAgICAgICAgICAgKyAnaG93ZXZlciwgeW91IHN0aWxsIGNhbGxlZCBpdFxcJ3MgbWV0aG9kLicsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGF0ZUJ5IH0gZnJvbSAnQGVuZ2luZS90eXBlcyc7XG5pbXBvcnQgcGFja2FnZUpzb24gPSByZXF1aXJlKCdAcm9vdC9wYWNrYWdlLmpzb24nKTtcblxuZXhwb3J0IGNvbnN0IERFQlVHOkJvb2xlYW4gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcblxuZXhwb3J0IGVudW0gU057XG4gICAgVGltZWxpbmUgPSAndGltZV9saW5lJyxcbiAgICBBeGlzID0gJ2F4aXMnLFxuICAgIEF4aXNCb2R5ID0gJ2F4aXNfYm9keScsXG4gICAgQXhpc1NjYWxlID0gJ2F4aXNfc2NhbGUnLFxuICAgIEF4aXNNaWxlc3RvbmUgPSAnYXhpc19taWxlc3RvbmUnLFxuICAgIEV2ZW50ID0gJ2V2ZW50JyxcbiAgICBFdmVudEJvZHkgPSAnZXZlbnRfYm9keScsXG4gICAgRXZlbnRNYXJrID0gJ2V2ZW50X21hcmsnLFxuICAgIEV2ZW50QXhpcyA9ICdldmVudF9heGlzJyxcbn1cblxuZXhwb3J0IGNvbnN0IERBVEVfQ09VTlRfRVhUUkEgPSB7XG4gICAgW0RhdGVCeS5EYXldOiAgICAgICAxMDAwICogNjAgKiA2MCAqIDI0IC8gMixcbiAgICBbRGF0ZUJ5LldlZWtdOiAgICAgIDEwMDAgKiA2MCAqIDYwICogMjQgKiA3IC8gMixcbiAgICBbRGF0ZUJ5Lk1vbnRoXTogICAgIDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCAvIDIsXG4gICAgW0RhdGVCeS5RdWFydGVyXTogICAxMDAwICogNjAgKiA2MCAqIDI0ICogMzAgKiAzIC8gMixcbiAgICBbRGF0ZUJ5LlllYXJdOiAgICAgIDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCAqIDEyIC8gMixcbn07XG5cbmV4cG9ydCBjb25zdCBXQUxLX09OID0ge1xuICAgIFtTTi5FdmVudEF4aXNdOiB7XG4gICAgICAgIG9mZnNldE9uZVN0ZXA6IDE1LFxuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3QgU05fVkVSU0lPTjpzdHJpbmcgPSAgcGFja2FnZUpzb24udmVyc2lvbjtcbiIsImltcG9ydCB7IEJveCwgRGF0ZUJ5LCBMaW5lLCBDb25mbGljdEZpeFJlc3VsdCB9IGZyb20gJ0BlbmdpbmUvdHlwZXMnO1xuaW1wb3J0IHsgREVCVUcgfSBmcm9tICdAZW5naW5lL2NvbW1vbi9kZWZpbml0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JveChvYmo6YW55KTogb2JqIGlzIEJveCB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG4gICAgICAgICYmIHR5cGVvZiBvYmoueCA9PT0gJ251bWJlcidcbiAgICAgICAgJiYgdHlwZW9mIG9iai55ID09PSAnbnVtYmVyJ1xuICAgICAgICAmJiB0eXBlb2Ygb2JqLndpZHRoID09PSAnbnVtYmVyJ1xuICAgICAgICAmJiB0eXBlb2Ygb2JqLmhlaWdodCA9PT0gJ251bWJlcidcbiAgICA7XG59XG5leHBvcnQgZnVuY3Rpb24gYm94MkxpbmVzKGJveDpCb3gpOkxpbmVbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhcnRYOiBib3gueCxcbiAgICAgICAgICAgIHN0YXJ0WTogYm94LnksXG4gICAgICAgICAgICBlbmRYOiBib3gueCArIGJveC53aWR0aCxcbiAgICAgICAgICAgIGVuZFk6IGJveC55LFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzdGFydFg6IGJveC54ICsgYm94LndpZHRoLFxuICAgICAgICAgICAgc3RhcnRZOiBib3gueSxcbiAgICAgICAgICAgIGVuZFg6IGJveC54ICsgYm94LndpZHRoLFxuICAgICAgICAgICAgZW5kWTogYm94LnkgKyBib3guaGVpZ2h0LFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzdGFydFg6IGJveC54ICsgYm94LndpZHRoLFxuICAgICAgICAgICAgc3RhcnRZOiBib3gueSArIGJveC5oZWlnaHQsXG4gICAgICAgICAgICBlbmRYOiBib3gueCxcbiAgICAgICAgICAgIGVuZFk6IGJveC55ICsgYm94LmhlaWdodCxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc3RhcnRYOiBib3gueCxcbiAgICAgICAgICAgIHN0YXJ0WTogYm94LnkgKyBib3guaGVpZ2h0LFxuICAgICAgICAgICAgZW5kWDogYm94LngsXG4gICAgICAgICAgICBlbmRZOiBib3gueSxcbiAgICAgICAgfSxcbiAgICBdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQm94KGVsdDpIVE1MRWxlbWVudCk6Qm94IHtcbiAgICBjb25zdCBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGVsdCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogcGFyc2VGbG9hdChzdHlsZXMubGVmdCEpLFxuICAgICAgICB5OiBwYXJzZUZsb2F0KHN0eWxlcy50b3AhKSxcbiAgICAgICAgd2lkdGg6IHBhcnNlRmxvYXQoc3R5bGVzLndpZHRoISksXG4gICAgICAgIGhlaWdodDogcGFyc2VGbG9hdChzdHlsZXMuaGVpZ2h0ISksXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUJveCguLi5hcmdzOkJveFtdKTpCb3gge1xuICAgIGNvbnN0IGxlZnRUb3AgPSB7XG4gICAgICAgIHg6IEluZmluaXR5LFxuICAgICAgICB5OiBJbmZpbml0eSxcbiAgICB9O1xuICAgIGNvbnN0IHJpZ2h0Qm90dG9tID0ge1xuICAgICAgICB4OiAtSW5maW5pdHksXG4gICAgICAgIHk6IC1JbmZpbml0eSxcbiAgICB9O1xuICAgIGZvciAoY29uc3QgYm94IG9mIGFyZ3MpIHtcbiAgICAgICAgaWYgKGJveC54IDwgbGVmdFRvcC54KSBsZWZ0VG9wLnggPSBib3gueDtcbiAgICAgICAgaWYgKGJveC55IDwgbGVmdFRvcC55KSBsZWZ0VG9wLnkgPSBib3gueTtcbiAgICAgICAgaWYgKGJveC54ICsgYm94LndpZHRoID4gcmlnaHRCb3R0b20ueCkgcmlnaHRCb3R0b20ueCA9IGJveC54ICsgYm94LndpZHRoO1xuICAgICAgICBpZiAoYm94LnkgKyBib3guaGVpZ2h0ID4gcmlnaHRCb3R0b20ueSkgcmlnaHRCb3R0b20ueSA9IGJveC55ICsgYm94LmhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogbGVmdFRvcC54LFxuICAgICAgICB5OiBsZWZ0VG9wLnksXG4gICAgICAgIHdpZHRoOiByaWdodEJvdHRvbS54IC0gbGVmdFRvcC54LFxuICAgICAgICBoZWlnaHQ6IHJpZ2h0Qm90dG9tLnkgLSBsZWZ0VG9wLnksXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaHJpbmtCb3goYm94OkJveCwgZGlzdGFuY2U9IDEpIDpCb3gge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGJveC54ICsgZGlzdGFuY2UsXG4gICAgICAgIHk6IGJveC55ICsgZGlzdGFuY2UsXG4gICAgICAgIHdpZHRoOiBib3gud2lkdGggLSBkaXN0YW5jZSAqIDIsXG4gICAgICAgIGhlaWdodDogYm94LmhlaWdodCAtIGRpc3RhbmNlICogMixcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgdGltZU5vZGVHZXR0ZXI6IHtcbiAgICBba2V5IGluIERhdGVCeV06IChzdGFydDogRGF0ZSAsIGVuZDogRGF0ZSkgPT4gRGF0ZVtdXG59ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGdldE5vZGVzID0gZnVuY3Rpb24gKHN0YXJ0OiBEYXRlICwgZW5kOiBEYXRlICwgc3RlcDogKGRhdGU6IERhdGUpID0+IHZvaWQpOiBEYXRlW10ge1xuICAgICAgICBjb25zdCBzdGFydE5vZGU6IERhdGUgPSBmdW5jdGlvbiAob3JpZ2luIDpEYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IERhdGUob3JpZ2luKTtcbiAgICAgICAgICAgIG5vZGUuc2V0RnVsbFllYXIob3JpZ2luLmdldEZ1bGxZZWFyKCkgLSAxICwgMCAsIDEpO1xuICAgICAgICAgICAgbm9kZS5zZXRIb3VycygwICwgMCAsIDAgLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9KHN0YXJ0KTtcbiAgICAgICAgY29uc3QgZW5kTm9kZTogRGF0ZSA9IGZ1bmN0aW9uIChvcmlnaW4gOkRhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgRGF0ZShvcmlnaW4pO1xuICAgICAgICAgICAgbm9kZS5zZXRGdWxsWWVhcihvcmlnaW4uZ2V0RnVsbFllYXIoKSArIDEgLCAwICwgMSk7XG4gICAgICAgICAgICBub2RlLnNldEhvdXJzKDAgLCAwICwgMCAsIDApO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0oZW5kKTtcbiAgICAgICAgY29uc3Qgbm9kZXM6IERhdGVbXSA9IFtdO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTm9kZSA9IG5ldyBEYXRlKHN0YXJ0Tm9kZSk7XG4gICAgICAgICAgICB3aGlsZSAodGVtcE5vZGUuZ2V0RnVsbFllYXIoKSA8PSBlbmROb2RlLmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKG5ldyBEYXRlKHRlbXBOb2RlKSk7XG4gICAgICAgICAgICAgICAgc3RlcCh0ZW1wTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGVzLmZpbHRlcihcbiAgICAgICAgICAgIGRhdGUgPT4gZGF0ZS5nZXRUaW1lKCkgPCBlbmQuZ2V0VGltZSgpICYmIGRhdGUuZ2V0VGltZSgpID4gc3RhcnQuZ2V0VGltZSgpLFxuICAgICAgICApO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcihzdGFydDogRGF0ZSAsIGVuZDogRGF0ZSk6IERhdGVbXSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Tm9kZXMoXG4gICAgICAgICAgICAgICAgc3RhcnQgLCBlbmQgLFxuICAgICAgICAgICAgICAgIGRhdGUgPT4gZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyAxKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gLFxuICAgICAgICBxdWFydGVyKHN0YXJ0OiBEYXRlICwgZW5kOiBEYXRlKTogRGF0ZVtdIHtcbiAgICAgICAgICAgIHJldHVybiBnZXROb2RlcyhcbiAgICAgICAgICAgICAgICBzdGFydCAsIGVuZCAsXG4gICAgICAgICAgICAgICAgKGRhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSArIDMgPj0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKDAgLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgMyAsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gLFxuICAgICAgICBtb250aChzdGFydDogRGF0ZSAsIGVuZDogRGF0ZSk6IERhdGVbXSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Tm9kZXMoXG4gICAgICAgICAgICAgICAgc3RhcnQgLCBlbmQgLFxuICAgICAgICAgICAgICAgIChkYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldE1vbnRoKCkgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aCgwICwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIDEgLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9ICxcbiAgICAgICAgd2VlayhzdGFydDogRGF0ZSAsIGVuZDogRGF0ZSk6IERhdGVbXSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Tm9kZXMoXG4gICAgICAgICAgICAgICAgc3RhcnQgLCBlbmQgLFxuICAgICAgICAgICAgICAgIChkYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIDEwMDAgKiA2MCAqIDYwICogMjQpO1xuICAgICAgICAgICAgICAgICAgICB9d2hpbGUgKGRhdGUuZ2V0RGF5KCkgIT09IDEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9ICxcbiAgICAgICAgZGF5KHN0YXJ0OiBEYXRlICwgZW5kOiBEYXRlKTogRGF0ZVtdIHtcbiAgICAgICAgICAgIHJldHVybiBnZXROb2RlcyhcbiAgICAgICAgICAgICAgICBzdGFydCAsIGVuZCAsXG4gICAgICAgICAgICAgICAgZGF0ZSA9PiBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAxMDAwICogNjAgKiA2MCAqIDI0KSAsXG4gICAgICAgICAgICApO1xuICAgICAgICB9ICxcbiAgICB9O1xufSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlcnNlY3RpbmcobGluZTE6IExpbmUsIGxpbmUyOiBMaW5lKTogYm9vbGVhbiB7XG4gICAgbGV0IHsgc3RhcnRYOiB4MSwgc3RhcnRZOiB5MSwgZW5kWDogeDIsIGVuZFk6IHkyIH0gPSBsaW5lMTtcbiAgICBsZXQgeyBzdGFydFg6IHgzLCBzdGFydFk6IHkzLCBlbmRYOiB4NCwgZW5kWTogeTQgfSA9IGxpbmUyO1xuXG4gICAgaWYgKFt4MSwgeDIsIHgzLCB4NCwgeTEsIHkyLCB5MywgeTRdLnNvbWUoaXNOYU4pKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignVW5leHBlY3RlZCBOYU4nKTtcbiAgICB9XG4gICAgW3gxLCB4MiwgeDMsIHg0LCB5MSwgeTIsIHkzLCB5NF0gPSBbeDEsIHgyLCB4MywgeDQsIHkxLCB5MiwgeTMsIHk0XS5tYXAoTWF0aC5yb3VuZCk7XG5cbiAgICAvLyBTYW1lIHNsb3BlXG4gICAgY29uc3QgW3Nsb3BlMSwgc2xvcGUyXSA9IFtcbiAgICAgICAgTWF0aC5hYnMoeDEgLSB4MikgLyBNYXRoLmFicyh5MSAtIHkyKSxcbiAgICAgICAgTWF0aC5hYnMoeDMgLSB4NCkgLyBNYXRoLmFicyh5MyAtIHk0KSxcbiAgICBdO1xuICAgIGlmIChzbG9wZTEgPT09IHNsb3BlMikge1xuICAgICAgICBjb25zdCBbYml4WCwgc21hbGxYXSA9IFt4MSwgeDJdLnNvcnQoKG4xLCBuMikgPT4gbjIgLSBuMSk7XG4gICAgICAgIGNvbnN0IFtiaXhZLCBzbWFsbFldID0gW3kxLCB5Ml0uc29ydCgobjEsIG4yKSA9PiBuMiAtIG4xKTtcbiAgICAgICAgaWYgKHNsb3BlMSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICgoeTMgPD0gYml4WSAmJiB5MyA+PSBzbWFsbFkpIHx8ICh5NCA8PSBiaXhZICYmIHk0ID49IHNtYWxsWSkpXG4gICAgICAgICAgICAgICAgJiYgeDEgPT09IHgzXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzbG9wZTEgPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gKCh4MyA8PSBiaXhYICYmIHgzID49IHNtYWxsWCkgfHwgKHg0IDw9IGJpeFggJiYgeDQgPj0gc21hbGxYKSlcbiAgICAgICAgICAgICAgICAmJiB5MSA9PT0geTNcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgoeDMgPD0gYml4WCAmJiB4MyA+PSBzbWFsbFgpICYmICh5MyA8PSBiaXhZICYmIHkzID49IHNtYWxsWSkpXG4gICAgICAgICAgICB8fCAoKHg0IDw9IGJpeFggJiYgeDQgPj0gc21hbGxYKSB8fCAoeTQgPD0gYml4WSAmJiB5NCA+PSBzbWFsbFkpKVxuICAgICAgICA7XG4gICAgfVxuICAgIGlmIChzbG9wZTEgPT09IEluZmluaXR5KSB5MSArPSAwLjAwMDE7XG4gICAgaWYgKHNsb3BlMiA9PT0gSW5maW5pdHkpIHkzICs9IDAuMDAwMTtcbiAgICBpZiAoc2xvcGUxID09PSAwKSB4MSArPSAwLjAwMDE7XG4gICAgaWYgKHNsb3BlMiA9PT0gMCkgeDMgKz0gMC4wMDAxO1xuXG4gICAgY29uc3QgeCA9ICgoeDEgKiB5MiAtIHkxICogeDIpICogKHgzIC0geDQpIC0gKHgxIC0geDIpICogKHgzICogeTQgLSB5MyAqIHg0KSlcbiAgICAgICAgLyAoKHgxIC0geDIpICogKHkzIC0geTQpIC0gKHkxIC0geTIpICogKHgzIC0geDQpKVxuICAgIDtcbiAgICBjb25zdCB5ID0gKCh4MSAqIHkyIC0geTEgKiB4MikgKiAoeTMgLSB5NCkgLSAoeTEgLSB5MikgKiAoeDMgKiB5NCAtIHkzICogeDQpKVxuICAgICAgICAvICgoeDEgLSB4MikgKiAoeTMgLSB5NCkgLSAoeTEgLSB5MikgKiAoeDMgLSB4NCkpXG4gICAgO1xuICAgIGlmIChpc05hTih4KSB8fCBpc05hTih5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICBpZiAoeDEgPj0geDIpIHtcbiAgICAgICAgICAgIGlmICghKHgyIDw9IHggJiYgeCA8PSB4MSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoISh4MSA8PSB4ICYmIHggPD0geDIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh5MSA+PSB5Mikge1xuICAgICAgICAgICAgaWYgKCEoeTIgPD0geSAmJiB5IDw9IHkxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghKHkxIDw9IHkgJiYgeSA8PSB5MikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHgzID49IHg0KSB7XG4gICAgICAgICAgICBpZiAoISh4NCA8PSB4ICYmIHggPD0geDMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEoeDMgPD0geCAmJiB4IDw9IHg0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoeTMgPj0geTQpIHtcbiAgICAgICAgICAgIGlmICghKHk0IDw9IHkgJiYgeSA8PSB5MykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoISh5MyA8PSB5ICYmIHkgPD0geTQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzT3ZlcmxhcChpdGVtMTpCb3h8TGluZSwgaXRlbTI6Qm94fExpbmUpIDpib29sZWFuIHtcbiAgICBjb25zdCBsaW5lczEgPSBpc0JveChpdGVtMSkgPyBib3gyTGluZXMoaXRlbTEpIDpbaXRlbTFdO1xuICAgIGNvbnN0IGxpbmVzMiA9IGlzQm94KGl0ZW0yKSA/IGJveDJMaW5lcyhpdGVtMikgOltpdGVtMl07XG4gICAgcmV0dXJuIGxpbmVzMS5zb21lKGxpbmUxID0+IGxpbmVzMi5zb21lKGxpbmUyID0+IGlzSW50ZXJzZWN0aW5nKGxpbmUxLCBsaW5lMikpKTtcbn1cblxuLyoqXG4gKiBJbnN0ZWFkIG9mIHRoZSB3aGlsZSB3aGVuIGZpeCBjb25mbGljdC5cbiAqICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2Fsa0xvb3AoXG4gICAgZm46ICgpID0+IFByb21pc2U8Q29uZmxpY3RGaXhSZXN1bHRbXT4sXG4gICAgbWF4ID0gMTAsXG4pIDpQcm9taXNlPENvbmZsaWN0Rml4UmVzdWx0PiB7XG4gICAgbGV0IGFsbGV2aWF0ZWQgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IG1heCA7IGkrKykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbigpO1xuXG4gICAgICAgIGlmIChyZXN1bHQuaW5jbHVkZXMoQ29uZmxpY3RGaXhSZXN1bHQuQWxsZXZpYXRlZCkpIHtcbiAgICAgICAgICAgIGFsbGV2aWF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5ldmVyeShyID0+IHIgPT09IENvbmZsaWN0Rml4UmVzdWx0Lk5vQ29uZmxpY3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29uZmxpY3RGaXhSZXN1bHQuTm9Db25mbGljdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQuaW5jbHVkZXMoQ29uZmxpY3RGaXhSZXN1bHQuRmFpbGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFsbGV2aWF0ZWRcbiAgICAgICAgICAgICAgICA/IENvbmZsaWN0Rml4UmVzdWx0LkFsbGV2aWF0ZWRcbiAgICAgICAgICAgICAgICA6IENvbmZsaWN0Rml4UmVzdWx0LkZhaWxlZFxuICAgICAgICAgICAgO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3RvbyBtYW55IGxvb3AnKTtcblxufVxuLyoqXG4gKiBJbnN0ZWFkIG9mIHRoZSBjb25zb2xlLmxvZy5cbiAqIEBleGFtcGxlXG4gKiBjb25zdCBsID0gY3JlYXRlTG9nRnVuY3Rpb24oJ0V2ZW50Qm9keScpO1xuICogbGBIZWxsbywgd29ybGRgO1xuICogPiBIZWxsbywgd29ybGRcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9nRnVuY3Rpb24ocHJlZml4OnN0cmluZykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nQXJyOlRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6YW55W10pIHtcbiAgICAgICAgaWYgKCFERUJVRykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBbc3RyaW5nQXJyWzBdXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIG1lc3NhZ2UucHVzaCh2YWx1ZXNbaW5kZXhdLCBzdHJpbmdBcnJbaW5kZXggKyAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSAjYCwgLi4ubWVzc2FnZSk7XG4gICAgfTtcbn1cbi8qKlxuICogUmV0dXJuIGEgbmV3IGZyZWV6ZWQgb2JqZWN0IGJhc2Ugb24gc3BlY2lmaWVkIG9iamVjdC5cbiAqIExpa2UgT2JqZWN0LmZyZWV6ZSwgYnV0IGl0J3MgZGVlcCBhbmQgd2lsbCBub3QgY2hhbmdlIG9yaWdpbiBvYmplY3QuXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBGcmVlemU8VD4ob3JpZ2luT2JqZWN0OlQpIDpSZWFkb25seTxUPiB7XG4gICAgY29uc3QgbmV3T2JqZWN0OlQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9yaWdpbk9iamVjdCkpO1xuICAgIGNvbnN0IHByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG5ld09iamVjdCkgYXMgKGtleW9mIFQpW107XG5cbiAgICAvLyBGcmVlemUgaXQncyBhbGwgb2YgcHJvcGVydGllcyBiZWZvcmUgZnJlZXppbmcgaXRzZWxmLlxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBwcm9wTmFtZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdPYmplY3RbbmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBuZXdPYmplY3RbbmFtZV0gPSBkZWVwRnJlZXplKG5ld09iamVjdFtuYW1lXSkgYXMgYW55O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUobmV3T2JqZWN0KTtcbn1cbiIsImltcG9ydCB7IEV4dGVuc2lvbiwgRXh0ZW5zaW9uTWFuYWdlciB9IGZyb20gJy4vJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQ3JlYXRlIGVsZW1lbnQgZm9sbG93aW5nIGNvbXAuZHJhd0luZm8uYm94IGZvciBkZWJ1Zy5cbiAqIFVzaW5nIHRoaXMgZXh0ZW5zaW9uLCB0aGUgZGV2ZWxvcG1lbnQgY2FuIGluc3BlY3QgYW4gU2hvcnQtTmlnaHQgQ29tcG9uZW50IGJ5IFdlYiBDb25zb2xlLlxuICogKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveEVsZW1lbnRHZW5lcmF0b3IgaW1wbGVtZW50cyBQYXJ0aWFsPEV4dGVuc2lvbj57XG4gICAgY29uc3RydWN0b3IocHVibGljIGV0eDpFeHRlbnNpb25NYW5hZ2VyKSB7fVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGVsZW1lbnQgYXBwZW5kIHRvIGNvbnRhaW5lci5cbiAgICAgKiBUaGUgZWxlbWVudCBzaXplIGVxdWFsIGNvbXBvbmVudC5kcmF3SW5mby5ib3guXG4gICAgICogKi9cbiAgICBhc3luYyBvbkFwcGx5KGNvbXA6Q29tcG9uZW50KSB7XG4gICAgICAgIGlmIChjb21wLmV4dHJhRGF0YS5ib3hFbGVtZW50ICYmIGNvbXAuZXh0cmFEYXRhLmJveEVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgY29tcC5leHRyYURhdGEuYm94RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNvbXAuZXh0cmFEYXRhLmJveEVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb21wLm5hbWUpO1xuXG4gICAgICAgIC8vICBNYXAgZXZlcnkgcHJvcGVydHkgb2YgY29tcG9uZW50LmRyYXdJbmZvIHRvIEhUTUwgZWxlbWVudCBkYXRhLSouXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbXAuZHJhd0luZm8pKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykgY29udGludWU7XG5cbiAgICAgICAgICAgIGVsdC5zZXRBdHRyaWJ1dGUoa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbHQuc3R5bGUsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogYCR7Y29tcC5kcmF3SW5mby5ib3gueH1weGAsXG4gICAgICAgICAgICB0b3A6IGAke2NvbXAuZHJhd0luZm8uYm94Lnl9cHhgLFxuICAgICAgICAgICAgd2lkdGg6IGAke2NvbXAuZHJhd0luZm8uYm94LndpZHRofXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7Y29tcC5kcmF3SW5mby5ib3guaGVpZ2h0fXB4YCxcbiAgICAgICAgICAgIHpJbmRleDogMjE0NzQ4MzY0NyAtIH5+KGNvbXAuZHJhd0luZm8uYm94LndpZHRoICogY29tcC5kcmF3SW5mby5ib3guaGVpZ2h0KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29tcC5jb250YWluZXIhLmFwcGVuZENoaWxkKGVsdCk7XG4gICAgICAgIGNvbXAuZXh0cmFEYXRhLmJveEVsZW1lbnQgPSBlbHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbGVtZW50IGNyZWF0ZWQgaW4gb25BcHBseS5cbiAgICAgKiAqL1xuICAgIG9uRGVzdHJveShjb21wOkNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBlbHQgOkhUTUxFbGVtZW50fHVuZGVmaW5lZCA9IGNvbXAuZXh0cmFEYXRhLmJveEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGVsdCAmJiBlbHQucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgZWx0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgRXh0ZW5zaW9uLCBFeHRlbnNpb25NYW5hZ2VyIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgREVCVUcsIFNOIH0gZnJvbSAnLi4vY29tbW9uL2RlZmluaXRpb25zJztcbmltcG9ydCBtb3ZldG8gPSByZXF1aXJlKCdtb3ZldG8nKTtcbmltcG9ydCBBeGlzIGZyb20gJy4uL0F4aXMnO1xuaW1wb3J0IEF4aXNCb2R5IGZyb20gJy4uL0F4aXMvQXhpc0JvZHknO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4uL1RpbWVsaW5lJztcblxuLyoqXG4gKiBTdXBwb3J0ZWQgYWxsIG9mIEJyZWFrcG9pbnQuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUHVzaFNjYWxlc0FuZE1pbGVzdG9uZXNcbiAqIFdoZW4gcmVjb21wdXRlIHRoZSBwb3NpdGlvbiBvZiBTY2FsZXMgYW5kIE1pbGVzdG9uZXNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGaXhFdmVudEJvZHkyQXhpc01pbGVzdG9uZVxuICogV2hlbiBmaXggY29uZmxpY3QgYmV0d2VlbiBFdmVudEJvZHkgYW5kIEF4aXNNaWxlc3RvbmUuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRml4RXZlbnRBeGlzMkV2ZW50QXhpc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEZpeEV2ZW50Qm9keTJFdmVudEJvZHlNb3ZlclxuICogQHByb3BlcnR5IHtzdHJpbmd9IEZpeEV2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRHJhd0Zyb20gLSB3aGVuIGRyYXcgYSB0aW1lbGluZSBieSBkYXRhIGltcG9ydGVkLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IERlYnVnXG4gKiBTZXQgYSBCcmVha3BvaW50IGZvciBkZWJ1Zy5cbiAqIFdoZW4gZGVidWctbW9kZSBlbmFibGVkLCBzaG9ydC1uaWdodCB3aWxsIGJsb2NraW5nIGF0IEJyZWFrcG9pbnQuRGVidWcgYXV0b21hdGljYWxseS5cbiAqICovXG5leHBvcnQgZW51bSBCcmVha3BvaW50e1xuICAgIFB1c2hTY2FsZXNBbmRNaWxlc3RvbmVzID0gJ1B1c2hTY2FsZXNBbmRNaWxlc3RvbmVzJyxcbiAgICBGaXhFdmVudEJvZHkyQXhpc01pbGVzdG9uZSA9ICdGaXhFdmVudEJvZHkyQXhpc01pbGVzdG9uZScsXG4gICAgRml4RXZlbnRBeGlzMkV2ZW50QXhpcyA9ICdGaXhFdmVudEF4aXMyRXZlbnRBeGlzJyxcbiAgICBGaXhFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIgPSAnRml4RXZlbnRCb2R5MkV2ZW50Qm9keU1vdmVyJyxcbiAgICBGaXhFdmVudEJvZHkyRXZlbnRCb2R5RmxvYXRlciA9ICdGaXhFdmVudEJvZHkyRXZlbnRCb2R5RmxvYXRlcicsXG4gICAgRHJhd0Zyb20gPSAnRHJhd0Zyb20nLFxuICAgIERlYnVnID0gJ0RlYnVnJyxcbn1cblxuLyoqXG4gKiBDb25maWcgZm9yIHRoaXMgZXh0ZW5zaW9uLlxuICogQHByb3BlcnR5IHtCcmVha3BvaW50W119IGJyZWFrcG9pbnRzXG4gKiBBIGxpc3Qgb2YgcG9pbnQsIHNob3J0LW5pZ2h0IHdpbGwgYmxvY2tpbmcgd2hlbiBlbmNvdW50ZXIgdGhhdCBwb2ludHMuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHBsYXlBbmltYXRpb25cbiAqIFRoZSBzaG9ydC1uaWdodCB3aWxsIHVuYmxvY2sgb25lIGJyZWFrcG9pbnQgYWZ0ZXIgc29tZSB0aW1lcyB3aGVuIHRoaXMgYmVlbiBzZXQgdHJ1ZS5cbiAqIFdoZW4gdGhpcyBiZSBzZXQgdHJ1ZSBhbmQgbm90IHNwZWNpZnkgYnJlYWtwb2ludHMsIHRoZSBicmVha3BvaW50cyB3aWxsIGJlXG4gKiBzZXQgYXMgQnJlYWtwb2ludEFuaW1hdGlvbi5kZWZhdWx0QW5pbWF0aW9uQnJlYWtwb2ludHMgdG8gcGxheSBhbmltYXRpb24uXG4gKiAqL1xuZXhwb3J0IGludGVyZmFjZSBCcmVha3BvaW50QW5pbWF0aW9uQ29uZmlnIHtcbiAgICBicmVha3BvaW50cz86IEJyZWFrcG9pbnRbXTtcbiAgICBwbGF5QW5pbWF0aW9uPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBDb25maWcgZm9yIHRoaXMgZXh0ZW5zaW9uLlxuICogKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tDb25maWcge1xuICAgIHByb3RhZ29uaXN0IDpDb21wb25lbnQ7XG4gICAgY29tcG9uZW50cyA6Q29tcG9uZW50W107XG4gICAgZm9yd2FyZCA6Ym9vbGVhbjtcbiAgICBvbkJsb2NrIDooKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIG9uTmV4dCA6KCkgPT4gUHJvbWlzZTx2b2lkPjtcbn1cblxuLyoqXG4gKiAxLiBTdXBwb3J0IHRoYXQgc2V0IGEgQnJlYWtwb2ludCAuXG4gKiAyLiBTdXBwb3J0IHRoYXQgcGxheSBhbmltYXRpb24gYmFzZSBvbiBCcmVha3BvaW50cy5cbiAqICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmVha3BvaW50QW5pbWF0aW9uIGltcGxlbWVudHMgUGFydGlhbDxFeHRlbnNpb24+e1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZXR4OkV4dGVuc2lvbk1hbmFnZXIsXG4gICAgICAgIHsgYnJlYWtwb2ludHM9IFtdLCBwbGF5QW5pbWF0aW9uPSBmYWxzZSB9OkJyZWFrcG9pbnRBbmltYXRpb25Db25maWcgPSB7fSxcbiAgICApIHtcbiAgICAgICAgdGhpcy5icmVha3BvaW50cyA9IGJyZWFrcG9pbnRzO1xuICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24gPSBwbGF5QW5pbWF0aW9uO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXlBbmltYXRpb24gJiYgdGhpcy5icmVha3BvaW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludHMgPSBCcmVha3BvaW50QW5pbWF0aW9uLmRlZmF1bHRBbmltYXRpb25CcmVha3BvaW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50cy5wdXNoKEJyZWFrcG9pbnQuRGVidWcpO1xuICAgICAgICAgICAgKDxhbnk+d2luZG93KS5uZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICAoPGFueT53aW5kb3cpLmFib3J0ID0gKCkgPT4geyBkZWxldGUgdGhpcy5zdGVwSW47IH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gdG9wIHdoZW4gZW5kIG9mIHBsYXkgYW5pbWF0aW9uLlxuICAgICAqICovXG4gICAgb25EcmF3KGNvbXA6Q29tcG9uZW50KSB7XG4gICAgICAgIGlmIChUaW1lbGluZS5pcyhjb21wKSAmJiB0aGlzLnBsYXlBbmltYXRpb24pIHtcbiAgICAgICAgICAgIG5ldyBtb3ZldG8oKS5tb3ZlKHRoaXMuZXR4LmNvbXBvbmVudHNbU04uVGltZWxpbmVdWzBdLmNhbnZhcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQHNlZSBCcmVha3BvaW50QW5pbWF0aW9uQ29uZmlnLmJyZWFrcG9pbnRzICovXG4gICAgcHJvdGVjdGVkIGJyZWFrcG9pbnRzOkJyZWFrcG9pbnRbXTtcbiAgICAvKiogQHNlZSBCcmVha3BvaW50QW5pbWF0aW9uQ29uZmlnLnBsYXlBbmltYXRpb24gKi9cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcGxheUFuaW1hdGlvbjogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBGaWxsIHdoZW4gc2hvcnQtbmlnaHQgaXMgYmxvY2tpbmcuIFN0ZXAgaW4gYSBicmVha3BvaW50LlxuICAgICAqICovXG4gICAgcHJvdGVjdGVkIHN0ZXBJbiA/OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgLyoqXG4gICAgICogU3RlcCBpbnRvIG5leHQgYnJlYWtwb2ludC5cbiAgICAgKiBZb3UgY2FuIGNhbGwgd2luZG93Lm5leHQoKSB0byBkbyBzYW1lIHRoaW5nIHdoZW4gREVCVUcgaXMgdHJ1ZS5cbiAgICAgKiAqL1xuICAgIG5leHQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGVwSW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbCBuZXh0IHdoZW4gbm90IGJsb2NraW5nLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGVwSW4oKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc3RlcEluO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJsb2NraW5nIGF0IGEgYnJlYWtwb2ludCB1dGlsIG5leHQgY2FsbGVkXG4gICAgICogKi9cbiAgICBhc3luYyBibG9jayhwb2ludCA6QnJlYWtwb2ludCwgY29uZmlnIDpQYXJ0aWFsPEJsb2NrQ29uZmlnPiA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgb25CbG9jaywgb25OZXh0LCBjb21wb25lbnRzID0gW10sIGZvcndhcmQgPSBmYWxzZSB9ID0gY29uZmlnO1xuXG4gICAgICAgIGlmICghdGhpcy5icmVha3BvaW50cy5pbmNsdWRlcyhwb2ludCkpIHJldHVybjtcbiAgICAgICAgY29uc29sZS5sb2coYEJsb2NraW5nIGF0ICR7cG9pbnR9LmApO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXlBbmltYXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IHRoaXMuY291bnRTY3JvbGxUYXJnZXQoY29uZmlnKTtcblxuICAgICAgICAgICAgaWYgKHNjcm9sbFRhcmdldCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBtb3ZldG8oeyBkdXJhdGlvbjogNTAwIH0pLm1vdmUoXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUYXJnZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjYWxsYmFjazogcmVzb2x2ZSB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmV4dCgpLCB0aGlzLmNvdW50SW50ZXJ2YWwocG9pbnQsIGZvcndhcmQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9uQmxvY2spIGF3YWl0IG9uQmxvY2soKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wID0+IGNvbXAuZHJhdygpKTtcblxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uTmV4dCkgYXdhaXQgb25OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wID0+IGNvbXAuaGlkZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zdGVwSW47XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ291bnQgYSBudW1iZXIgdGhhdCBiZSB1c2VkIHNjcm9sbCB0byBmb2N1cyB3aGVuIHBsYXkgYW5pbWF0aW9uLlxuICAgICAqICovXG4gICAgcHJvdGVjdGVkIGNvdW50U2Nyb2xsVGFyZ2V0KGNvbmZpZzpQYXJ0aWFsPEJsb2NrQ29uZmlnPikgOm51bWJlcnxudWxsIHtcbiAgICAgICAgY29uc3QgeyBjb21wb25lbnRzLCBwcm90YWdvbmlzdCB9ID0gY29uZmlnO1xuXG4gICAgICAgIGNvbnN0IHRvcFBhZGRpbmcgPSAxMDA7XG4gICAgICAgIGlmIChwcm90YWdvbmlzdCkgcmV0dXJuIHByb3RhZ29uaXN0LmRyYXdJbmZvLmJveC55IC0gdG9wUGFkZGluZztcbiAgICAgICAgaWYgKGNvbXBvbmVudHMgJiYgY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGdldFRvcHBlZCA9IChjb21wTGlzdDpDb21wb25lbnRbXSkgPT4gY29tcExpc3QuZmluZChcbiAgICAgICAgICAgICAgICBjb21wMSA9PiBjb21wTGlzdC5ldmVyeShcbiAgICAgICAgICAgICAgICAgICAgY29tcDIgPT4gY29tcDEuZHJhd0luZm8uYm94LnkgPj0gY29tcDIuZHJhd0luZm8uYm94LnksXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudExpc3RXaXRob3V0QXhpcyA9IGNvbXBvbmVudHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIGNvbXAgPT4gIUF4aXMuaXMoY29tcCkgJiYgIUF4aXNCb2R5LmlzKGNvbXApLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuIGdldFRvcHBlZChjb21wb25lbnRMaXN0V2l0aG91dEF4aXMpIS5kcmF3SW5mby5ib3gueCAtIHRvcFBhZGRpbmc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ291bnQgYSBudW1iZXIgd2hhdCBtcyBpcyBuZWVkZWQgd2FpdGluZyBmb3IgdGhpcyBwb2ludCB3aGVuIHBsYXlpbmcgYW5pbWF0aW9uLlxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZm9yd2FyZCAtIEBzZWUgQmxvY2tDb25maWcuZm9yd2FyZFxuICAgICAqICovXG4gICAgcHJvdGVjdGVkIGNvdW50SW50ZXJ2YWwocG9pbnQgOkJyZWFrcG9pbnQsIGZvcndhcmQgOmJvb2xlYW4pIDpudW1iZXIge1xuICAgICAgICBpZiAocG9pbnQgPT09IEJyZWFrcG9pbnQuRHJhd0Zyb20pIHJldHVybiAzMDA7XG5cbiAgICAgICAgcmV0dXJuIGZvcndhcmQgPyAyMDAgOiAzMDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHNlZSBCcmVha3BvaW50QW5pbWF0aW9uQ29uZmlnLnBsYXlBbmltYXRpb25cbiAgICAgKiAqL1xuICAgIHN0YXRpYyBkZWZhdWx0QW5pbWF0aW9uQnJlYWtwb2ludHM6QnJlYWtwb2ludFtdID0gW1xuICAgICAgICBCcmVha3BvaW50LkZpeEV2ZW50Qm9keTJBeGlzTWlsZXN0b25lLFxuICAgICAgICBCcmVha3BvaW50LkZpeEV2ZW50QXhpczJFdmVudEF4aXMsXG4gICAgICAgIEJyZWFrcG9pbnQuRml4RXZlbnRCb2R5MkV2ZW50Qm9keU1vdmVyLFxuICAgICAgICBCcmVha3BvaW50LkZpeEV2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyLFxuICAgICAgICBCcmVha3BvaW50LkRyYXdGcm9tLFxuICAgIF07XG59XG4iLCJpbXBvcnQgeyBFeHRlbnNpb25NYW5hZ2VyIH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IFNOIH0gZnJvbSAnLi4vLi4vY29tbW9uL2RlZmluaXRpb25zJztcbmltcG9ydCB7IGlzSW50ZXJzZWN0aW5nIH0gZnJvbSAnLi4vLi4vY29tbW9uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgRXZlbnRBeGlzIGZyb20gJy4uLy4uL0V2ZW50L0V2ZW50QXhpcyc7XG5pbXBvcnQgeyBDb25mbGljdEZpeFJlc3VsdCwgTGluZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IEJyZWFrcG9pbnQgfSBmcm9tICcuLi9CcmVha3BvaW50QW5pbWF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRBeGlzMkV2ZW50QXhpcyB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGV4dDpFeHRlbnNpb25NYW5hZ2VyKSB7fVxuXG4gICAgYXN5bmMgZml4KCk6UHJvbWlzZTxDb25mbGljdEZpeFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBldmVudEF4aXNMaXN0OkV2ZW50QXhpc1tdID0gQXJyYXkuZnJvbSh0aGlzLmV4dC5jb21wb25lbnRzW1NOLkV2ZW50QXhpc10pXG4gICAgICAgICAgICAuc29ydCgoZWExLCBlYTIpID0+IGVhMi5kcmF3SW5mby5sZW5ndGggLSBlYTEuZHJhd0luZm8ubGVuZ3RoKVxuICAgICAgICA7XG5cbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgZXZlbnRBeGlzTGlzdC5zb21lKFxuICAgICAgICAgICAgICAgIGVhMSA9PiBldmVudEF4aXNMaXN0LnNvbWUoZWEyID0+IEV2ZW50QXhpczJFdmVudEF4aXMuaXNDb25mbGljdChlYTEsIGVhMikpLFxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWExIG9mIGV2ZW50QXhpc0xpc3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25mbGljdFdpdGggPSBldmVudEF4aXNMaXN0LmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgZWEyID0+IEV2ZW50QXhpczJFdmVudEF4aXMuaXNDb25mbGljdChlYTEsIGVhMiksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmxpY3RXaXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdGFnb25pc3Q6IGVhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmV4dC5jb21wb25lbnRzW1NOLkF4aXNCb2R5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dC5nZXRQYXJlbnQoZWExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jb25mbGljdFdpdGgubWFwKGVhID0+IHRoaXMuZXh0LmdldFBhcmVudChlYSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5leHQuYnJlYWtwb2ludC5ibG9jayhCcmVha3BvaW50LkZpeEV2ZW50QXhpczJFdmVudEF4aXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBlYTEuZHJhd0luZm8ub2Zmc2V0WCArPSAxNTsgLy8gVE9ETzogY29uZmlndXJhYmxlXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGVhMS5hcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmV4dC5icmVha3BvaW50LmJsb2NrKFxuICAgICAgICAgICAgICAgICAgICAgICAgQnJlYWtwb2ludC5GaXhFdmVudEF4aXMyRXZlbnRBeGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ29uZmxpY3RGaXhSZXN1bHQuTm9Db25mbGljdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNDb25mbGljdCAoZWExOkV2ZW50QXhpcywgZWEyOkV2ZW50QXhpcykgOmJvb2xlYW4ge1xuICAgICAgICBpZiAoZWExID09PSBlYTIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgbGluZTE6TGluZSA9IHtcbiAgICAgICAgICAgIHN0YXJ0WDogZWExLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueCArIGVhMS5kcmF3SW5mby5vZmZzZXRYLFxuICAgICAgICAgICAgc3RhcnRZOiBlYTEuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55LFxuICAgICAgICAgICAgZW5kWDogZWExLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueCArIGVhMS5kcmF3SW5mby5vZmZzZXRYLFxuICAgICAgICAgICAgZW5kWTogZWExLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSAtIGVhMS5kcmF3SW5mby5sZW5ndGgsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGxpbmUyOkxpbmUgPSB7XG4gICAgICAgICAgICBzdGFydFg6IGVhMi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnggKyBlYTIuZHJhd0luZm8ub2Zmc2V0WCxcbiAgICAgICAgICAgIHN0YXJ0WTogZWEyLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSxcbiAgICAgICAgICAgIGVuZFg6IGVhMi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnggKyBlYTIuZHJhd0luZm8ub2Zmc2V0WCxcbiAgICAgICAgICAgIGVuZFk6IGVhMi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgLSBlYTIuZHJhd0luZm8ubGVuZ3RoLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gaXNJbnRlcnNlY3RpbmcobGluZTEsIGxpbmUyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFeHRlbnNpb25NYW5hZ2VyIH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IENvbmZsaWN0Rml4UmVzdWx0IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgU04gfSBmcm9tICcuLi8uLi9jb21tb24vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IEF4aXNNaWxlc3RvbmUgZnJvbSAnLi4vLi4vQXhpcy9BeGlzTWlsZXN0b25lJztcbmltcG9ydCB7IGlzT3ZlcmxhcCB9IGZyb20gJy4uLy4uL2NvbW1vbi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludCB9IGZyb20gJy4uL0JyZWFrcG9pbnRBbmltYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJvZHkyQXhpc01pbGVzdG9uZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGV4dDpFeHRlbnNpb25NYW5hZ2VyKSB7fVxuXG4gICAgYXN5bmMgZml4KCk6UHJvbWlzZTxDb25mbGljdEZpeFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBldmVudEJvZHlMaXN0ID0gdGhpcy5leHQuY29tcG9uZW50c1tTTi5FdmVudEJvZHldO1xuICAgICAgICBjb25zdCBheGlzTWlsZXN0b25lTGlzdDpBeGlzTWlsZXN0b25lW10gPSB0aGlzLmV4dC5jb21wb25lbnRzW1NOLkF4aXNNaWxlc3RvbmVdO1xuXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnRCb2R5IG9mIGV2ZW50Qm9keUxpc3QpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXhpc01pbGVzdG9uZSBvZiBheGlzTWlsZXN0b25lTGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChpc092ZXJsYXAoZXZlbnRCb2R5LmRyYXdJbmZvLmJveCwgYXhpc01pbGVzdG9uZS5kcmF3SW5mby5ib3gpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm90YWdvbmlzdDogYXhpc01pbGVzdG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmV4dC5jb21wb25lbnRzW1NOLkF4aXNCb2R5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlzTWlsZXN0b25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Qm9keSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZXh0LmJyZWFrcG9pbnQuYmxvY2soQnJlYWtwb2ludC5GaXhFdmVudEJvZHkyQXhpc01pbGVzdG9uZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Qm9keS5kcmF3SW5mby5vZmZzZXQueCA9IGF4aXNNaWxlc3RvbmUuZHJhd0luZm8uYm94LndpZHRoIC8gMiArIDE7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGV2ZW50Qm9keS5hcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmV4dC5icmVha3BvaW50LmJsb2NrKFxuICAgICAgICAgICAgICAgICAgICAgICAgQnJlYWtwb2ludC5GaXhFdmVudEJvZHkyQXhpc01pbGVzdG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDb25mbGljdEZpeFJlc3VsdC5Ob0NvbmZsaWN0O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFNOIH0gZnJvbSAnLi4vLi4vY29tbW9uL2RlZmluaXRpb25zJztcbmltcG9ydCBFdmVudEJvZHkgZnJvbSAnLi4vLi4vRXZlbnQvRXZlbnRCb2R5JztcbmltcG9ydCB7IGlzT3ZlcmxhcCB9IGZyb20gJy4uLy4uL2NvbW1vbi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgRXh0ZW5zaW9uTWFuYWdlciB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBDb25mbGljdCBhcyBDb21wb25lbnRDb25mbGljdCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4uLy4uL1RpbWVsaW5lJztcbmltcG9ydCBBeGlzQm9keSBmcm9tICcuLi8uLi9BeGlzL0F4aXNCb2R5JztcbmltcG9ydCB7IEJyZWFrcG9pbnQgfSBmcm9tICcuLi9CcmVha3BvaW50QW5pbWF0aW9uJztcbmltcG9ydCB7IENvbmZsaWN0Rml4UmVzdWx0IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG50eXBlIENvbmZsaWN0ID0gQ29tcG9uZW50Q29uZmxpY3Q8RXZlbnRCb2R5PjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRCb2R5MkV2ZW50Qm9keUZsb2F0ZXIge1xuICAgIHRpbWVsaW5lID86VGltZWxpbmU7XG4gICAgYXhpc0JvZHkgPzpBeGlzQm9keTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBleHQ6IEV4dGVuc2lvbk1hbmFnZXIpIHt9XG5cbiAgICBjb25mbGljdHM6Q29uZmxpY3RbXSA9IFtdO1xuICAgIC8qKlxuICAgICAqIGFib3ZlIEV2ZW50Qm9keSBpcyBhYm92ZSwgYmVsb3cgRXZlbnRCb2R5IGlzIGJlbG93XG4gICAgICogKi9cbiAgICBldmVudEJvZHlMaXN0IDpFdmVudEJvZHlbXSA9IFtdO1xuXG4gICAgc3RhdGljIGlzQ29uZmxpY3QoZWIxOkV2ZW50Qm9keSwgZWIyOkV2ZW50Qm9keSkgOmJvb2xlYW4ge1xuICAgICAgICBpZiAoZWIxID09PSBlYjIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGViMS5kcmF3SW5mby5mbG9hdGVkIHx8IGViMi5kcmF3SW5mby5mbG9hdGVkKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIGlzT3ZlcmxhcChlYjEuZHJhd0luZm8uYm94LCBlYjIuZHJhd0luZm8uYm94KTtcbiAgICB9XG4gICAgYXN5bmMgZmxvYXQoY29uZmxpY3RzOkNvbmZsaWN0KSB7XG4gICAgICAgIGNvbnN0IG1heFdpZHRoSW5Db25mbGljdCA9IE1hdGgubWF4KFxuICAgICAgICAgICAgLi4uY29uZmxpY3RzLndpdGgubWFwKGMgPT4gYy5kcmF3SW5mby5ib3gud2lkdGggKyBjLmRyYXdJbmZvLm9mZnNldC54KSxcbiAgICAgICAgKTtcbiAgICAgICAgY29uZmxpY3RzLnNlbGYuZHJhd0luZm8ub2Zmc2V0LnggPSBtYXhXaWR0aEluQ29uZmxpY3QgKyAxO1xuICAgICAgICBjb25mbGljdHMuc2VsZi5kcmF3SW5mby5tYXhXaWR0aCA9IE1hdGgubWluKFxuICAgICAgICAgICAgdGhpcy50aW1lbGluZSEuZ3JpZC5ldmVudFdpZHRoLFxuICAgICAgICAgICAgdGhpcy5heGlzQm9keSEuZHJhd0luZm8uYm94LnggLSBtYXhXaWR0aEluQ29uZmxpY3QsXG4gICAgICAgICk7XG4gICAgICAgIGNvbmZsaWN0cy5zZWxmLmRyYXdJbmZvLmZsb2F0ZWQgPSB0cnVlO1xuICAgICAgICBhd2FpdCBjb25mbGljdHMuc2VsZi5hcHBseSgpO1xuICAgIH1cblxuICAgIGFzeW5jIGZpeCgpIDpQcm9taXNlPENvbmZsaWN0Rml4UmVzdWx0PiB7XG5cbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRoaXMuZXh0LmNvbXBvbmVudHNbU04uVGltZWxpbmVdWzBdO1xuICAgICAgICB0aGlzLmF4aXNCb2R5ID0gdGhpcy5leHQuY29tcG9uZW50c1tTTi5BeGlzQm9keV1bMF07XG4gICAgICAgIHRoaXMuZXZlbnRCb2R5TGlzdCA9IEFycmF5LmZyb20odGhpcy5leHQuY29tcG9uZW50c1tTTi5FdmVudEJvZHldKVxuICAgICAgICAgICAgLnNvcnQoKGViMSwgZWIyKSA9PlxuICAgICAgICAgICAgICAgIGViMS5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgLSBlYjIuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55LFxuICAgICAgICAgICAgKVxuICAgICAgICA7XG5cbiAgICAgICAgdGhpcy5jb3VudENvbmZsaWN0KCk7XG4gICAgICAgIGlmICh0aGlzLmNvbmZsaWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBDb25mbGljdEZpeFJlc3VsdC5Ob0NvbmZsaWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29uZmxpY3QgPSB0aGlzLnBpY2tSaW5nbGVhZGVyKCkhO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgICAgICAgICAgdGhpcy5heGlzQm9keSxcbiAgICAgICAgICAgICAgICBjb25mbGljdC5zZWxmLFxuICAgICAgICAgICAgICAgIC4uLmNvbmZsaWN0LndpdGgsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcHJvdGFnb25pc3Q6IGNvbmZsaWN0LnNlbGYsXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgdGhpcy5leHQuYnJlYWtwb2ludC5ibG9jayhCcmVha3BvaW50LkZpeEV2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyLCBvcHRpb25zKTtcbiAgICAgICAgYXdhaXQgdGhpcy5mbG9hdChjb25mbGljdCk7XG4gICAgICAgIGF3YWl0IHRoaXMuZXh0LmJyZWFrcG9pbnQuYmxvY2soXG4gICAgICAgICAgICBCcmVha3BvaW50LkZpeEV2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBDb25mbGljdEZpeFJlc3VsdC5BbGxldmlhdGVkO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHBpY2tSaW5nbGVhZGVyKCkgOkNvbmZsaWN0fHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZsaWN0cy5maW5kKFxuICAgICAgICAgICAgYzEgPT4gdGhpcy5jb25mbGljdHMuZXZlcnkoYzIgPT4gYzEud2l0aC5sZW5ndGggPj0gYzIud2l0aC5sZW5ndGgpLFxuICAgICAgICApO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY291bnRDb25mbGljdCgpIHtcbiAgICAgICAgdGhpcy5jb25mbGljdHMubGVuZ3RoID0gMDtcblxuICAgICAgICBmb3IgKGNvbnN0IGViIG9mIHRoaXMuZXZlbnRCb2R5TGlzdCkge1xuICAgICAgICAgICAgY29uc3QgY29uZmxpY3QgPSB7XG4gICAgICAgICAgICAgICAgc2VsZjogZWIgYXMgRXZlbnRCb2R5LFxuICAgICAgICAgICAgICAgIHdpdGg6IHRoaXMuZXh0LmNvbXBvbmVudHNbU04uRXZlbnRCb2R5XS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9PiBFdmVudEJvZHkyRXZlbnRCb2R5RmxvYXRlci5pc0NvbmZsaWN0KGViLCB0YXJnZXQgYXMgRXZlbnRCb2R5KSxcbiAgICAgICAgICAgICAgICApIGFzIEV2ZW50Qm9keVtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjb25mbGljdC53aXRoLmxlbmd0aCkgdGhpcy5jb25mbGljdHMucHVzaChjb25mbGljdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBFdmVudEJvZHkgZnJvbSAnLi4vLi4vRXZlbnQvRXZlbnRCb2R5JztcbmltcG9ydCB7IGlzT3ZlcmxhcCwgd2Fsa0xvb3AgfSBmcm9tICcuLi8uLi9jb21tb24vZnVuY3Rpb25zJztcbmltcG9ydCB7IFNOIH0gZnJvbSAnLi4vLi4vY29tbW9uL2RlZmluaXRpb25zJztcbmltcG9ydCB7IEV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgQ29uZmxpY3QgYXMgQ29tcG9uZW50Q29uZmxpY3QgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IEJyZWFrcG9pbnQgfSBmcm9tICcuLi9CcmVha3BvaW50QW5pbWF0aW9uJztcbmltcG9ydCB7IENvbmZsaWN0Rml4UmVzdWx0IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG50eXBlIENvbmZsaWN0ID0gQ29tcG9uZW50Q29uZmxpY3Q8RXZlbnRCb2R5PjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRCb2R5MkV2ZW50Qm9keU1vdmVyIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZXh0OkV4dGVuc2lvbk1hbmFnZXIpIHt9XG5cbiAgICBjb25mbGljdHM6Q29uZmxpY3RbXSA9IFtdO1xuICAgIC8qKlxuICAgICAqIGFib3ZlIEV2ZW50Qm9keSBpcyBhYm92ZSwgYmVsb3cgRXZlbnRCb2R5IGlzIGJlbG93XG4gICAgICogKi9cbiAgICBldmVudEJvZHlMaXN0OkV2ZW50Qm9keVtdID0gW107XG4gICAgc3BhY2VNYXAgPSBuZXcgTWFwIGFzIE1hcDxFdmVudEJvZHksIHt0b3A6bnVtYmVyLCBib3R0b206bnVtYmVyfT47XG5cbiAgICBzdGF0aWMgYXN5bmMgYXZvaWQoXG4gICAgICAgIHsgbW92ZXIsIGZpeGVkLCBkaXJlY3Rpb24gfVxuICAgICAgICA6e21vdmVyOkV2ZW50Qm9keSwgZml4ZWQ6RXZlbnRCb2R5LCBkaXJlY3Rpb246MXwtMX0sXG4gICAgKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XG4gICAgICAgICAgICBtb3Zlci5kcmF3SW5mby5vZmZzZXQueSArPVxuICAgICAgICAgICAgICAgIChmaXhlZC5kcmF3SW5mby5ib3gueSArIGZpeGVkLmRyYXdJbmZvLmJveC5oZWlnaHQpXG4gICAgICAgICAgICAgICAgLSBtb3Zlci5kcmF3SW5mby5ib3gueVxuICAgICAgICAgICAgICAgICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vdmVyLmRyYXdJbmZvLm9mZnNldC55IC09XG4gICAgICAgICAgICAgICAgKG1vdmVyLmRyYXdJbmZvLmJveC55ICsgbW92ZXIuZHJhd0luZm8uYm94LmhlaWdodClcbiAgICAgICAgICAgICAgICAtIGZpeGVkLmRyYXdJbmZvLmJveC55XG4gICAgICAgICAgICAgICAgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG1vdmVyLmFwcGx5KCk7XG4gICAgfVxuICAgIHN0YXRpYyBpc0NvbmZsaWN0KGViMTpFdmVudEJvZHksIGViMjpFdmVudEJvZHkpIHtcbiAgICAgICAgaWYgKGViMSA9PT0gZWIyKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKGViMS5kcmF3SW5mby5mbG9hdGVkICE9PSBlYjIuZHJhd0luZm8uZmxvYXRlZCkge1xuICAgICAgICAgICAgY29uc3QgZmxvYXRlZCA9IChlYjEuZHJhd0luZm8uZmxvYXRlZCA/IGViMSA6IGViMikgYXMgRXZlbnRCb2R5O1xuICAgICAgICAgICAgY29uc3QgYW5vdGhlciA9ICAoZWIxID09PSBmbG9hdGVkID8gZWIyIDogZWIxKSBhcyBFdmVudEJvZHk7XG5cbiAgICAgICAgICAgIGlmICggLy8gZmxvYXRlZCdzIGxpbmUgb3ZlcmxhcHBlZCB3aXRoIGFub3RoZXIncyBib2R5XG4gICAgICAgICAgICAgICAgKGZsb2F0ZWQuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55ID4gYW5vdGhlci5kcmF3SW5mby5ib3gueSlcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0ZWQuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55XG4gICAgICAgICAgICAgICAgICAgIDwgKGFub3RoZXIuZHJhd0luZm8uYm94LnkgKyBhbm90aGVyLmRyYXdJbmZvLmJveC5oZWlnaHQpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzT3ZlcmxhcChlYjEuZHJhd0luZm8uYm94LCBlYjIuZHJhd0luZm8uYm94KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZml4KCkgOlByb21pc2U8Q29uZmxpY3RGaXhSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5ldmVudEJvZHlMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLmV4dC5jb21wb25lbnRzW1NOLkV2ZW50Qm9keV0pXG4gICAgICAgICAgICAuc29ydCgoZWIxLCBlYjIpID0+IChcbiAgICAgICAgICAgICAgICBlYjEuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55XG4gICAgICAgICAgICAgICAgLSBlYjIuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55XG4gICAgICAgICAgICApKVxuICAgICAgICA7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHdhbGtMb29wKGFzeW5jICgpID0+IFtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudHJ5Rml4T25lKCksXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGhhdmUgZml4ZWQgb25lIG9mIGNvbmZsaWN0cz9cbiAgICAgKiAqL1xuICAgIHByb3RlY3RlZCBhc3luYyB0cnlGaXhPbmUoKSA6UHJvbWlzZTxDb25mbGljdEZpeFJlc3VsdD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmNvdW50Q29uZmxpY3QoKTtcbiAgICAgICAgdGhpcy5jb3VudFNwYWNlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmxpY3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIENvbmZsaWN0Rml4UmVzdWx0Lk5vQ29uZmxpY3Q7XG4gICAgICAgIHRoaXMuY29uZmxpY3RzID0gdGhpcy5jb25mbGljdHMuZmlsdGVyKFxuICAgICAgICAgICAgY29uZmxpY3QgPT4gdGhpcy5pc1Bvc3NpYmxlKGNvbmZsaWN0KSxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmxpY3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIENvbmZsaWN0Rml4UmVzdWx0LkZhaWxlZDtcblxuICAgICAgICBjb25zdCBjb25mbGljdCA9IHRoaXMuY29uZmxpY3RzLmZpbmQoXG4gICAgICAgICAgICBjb25mbGljdDEgPT4gdGhpcy5jb25mbGljdHMuZXZlcnkoXG4gICAgICAgICAgICAgICAgY29uZmxpY3QyID0+IHRoaXMuY291bnRDYXN0KGNvbmZsaWN0MSkgPD0gdGhpcy5jb3VudENhc3QoY29uZmxpY3QyKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICkhO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5leHQuY29tcG9uZW50c1tTTi5BeGlzQm9keV0sXG4gICAgICAgICAgICAgICAgY29uZmxpY3Quc2VsZixcbiAgICAgICAgICAgICAgICAuLi5jb25mbGljdC53aXRoLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHByb3RhZ29uaXN0OiBjb25mbGljdC5zZWxmLFxuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZXh0LmJyZWFrcG9pbnQuYmxvY2soQnJlYWtwb2ludC5GaXhFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIsIG9wdGlvbnMpO1xuICAgICAgICBhd2FpdCB0aGlzLmZpeENvbmZsaWN0KGNvbmZsaWN0KTtcbiAgICAgICAgYXdhaXQgdGhpcy5leHQuYnJlYWtwb2ludC5ibG9jayhcbiAgICAgICAgICAgIEJyZWFrcG9pbnQuRml4RXZlbnRCb2R5MkV2ZW50Qm9keU1vdmVyLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIENvbmZsaWN0Rml4UmVzdWx0LkFsbGV2aWF0ZWQ7XG5cbiAgICB9XG4gICAgcHJvdGVjdGVkIGlzUG9zc2libGUoY29uZmxpY3Q6Q29uZmxpY3QpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29uZmxpY3Quc2VsZi5kcmF3SW5mby5mbG9hdGVkXG4gICAgICAgICAgICAmJiBjb25mbGljdC53aXRoLnNvbWUoZWIgPT4gIWViLmRyYXdJbmZvLmZsb2F0ZWQpXG4gICAgICAgICkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5lZWRlZCA9IHRoaXMuY291bnROZWVkZWQoY29uZmxpY3QpO1xuICAgICAgICBjb25zdCBzcGFjZSA9IHRoaXMuc3BhY2VNYXAuZ2V0KGNvbmZsaWN0LnNlbGYpITtcblxuICAgICAgICByZXR1cm4gKG5lZWRlZC5ib3R0b20gPT09IDAgfHwgbmVlZGVkLnRvcCA9PT0gMClcbiAgICAgICAgICAgICYmIChzcGFjZS5ib3R0b20gPj0gbmVlZGVkLmJvdHRvbSAmJiBzcGFjZS50b3AgPj0gbmVlZGVkLnRvcClcbiAgICAgICAgICAgIDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGFzeW5jIGZpeENvbmZsaWN0KGNvbmZsaWN0OkNvbmZsaWN0KSB7XG4gICAgICAgIGNvbnN0IG5lZWRlZCA9IHRoaXMuY291bnROZWVkZWQoY29uZmxpY3QpO1xuICAgICAgICBjb25zdCBtb3ZlRGlzdGFuY2UgPSBuZWVkZWQudG9wID8gbmVlZGVkLnRvcCA6IC1uZWVkZWQuYm90dG9tO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBtb3ZlRGlzdGFuY2UgLyBNYXRoLmFicyhtb3ZlRGlzdGFuY2UpIGFzICgxIHwgLTEpO1xuXG4gICAgICAgIC8vIGZpeCBjb25mbGljdFxuICAgICAgICBjb25mbGljdC5zZWxmLmRyYXdJbmZvLm9mZnNldC55ICs9IG1vdmVEaXN0YW5jZTtcbiAgICAgICAgYXdhaXQgY29uZmxpY3Quc2VsZi5hcHBseSgpO1xuXG4gICAgICAgIC8vIGFuZCBmaXggc2lkZS1lZmZlY3RcbiAgICAgICAgY29uc3QgZWZmZWN0YWJsZSA9IHRoaXMuZXZlbnRCb2R5TGlzdC5maWx0ZXIoXG4gICAgICAgICAgICBlYiA9PiBlYi5kcmF3SW5mby5mbG9hdGVkID09PSBjb25mbGljdC5zZWxmLmRyYXdJbmZvLmZsb2F0ZWQsXG4gICAgICAgICk7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgICBsZXQgaSA9IGVmZmVjdGFibGUuaW5kZXhPZihjb25mbGljdC5zZWxmKSArIGRpcmVjdGlvbjtcbiAgICAgICAgICAgIGkgPj0gMCAmJiBpIDwgZWZmZWN0YWJsZS5sZW5ndGg7XG4gICAgICAgICAgICBpICs9IGRpcmVjdGlvblxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBlZmZlY3RhYmxlW2kgLSBkaXJlY3Rpb25dO1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gZWZmZWN0YWJsZVtpXTtcbiAgICAgICAgICAgIGlmIChFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIuaXNDb25mbGljdChsYXN0LCBub3cpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgRXZlbnRCb2R5MkV2ZW50Qm9keU1vdmVyLmF2b2lkKHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBtb3Zlcjogbm93LFxuICAgICAgICAgICAgICAgICAgICBmaXhlZDogbGFzdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGNvdW50Q29uZmxpY3QoKSB7XG4gICAgICAgIHRoaXMuY29uZmxpY3RzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodGhpcy5ldmVudEJvZHlMaXN0Lm1hcChlYiA9PiBlYi5hcHBseSgpKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBlYiBvZiB0aGlzLmV2ZW50Qm9keUxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZsaWN0ID0ge1xuICAgICAgICAgICAgICAgIHNlbGY6IGViLFxuICAgICAgICAgICAgICAgIHdpdGg6IHRoaXMuZXZlbnRCb2R5TGlzdC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9PiBFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIuaXNDb25mbGljdChlYiwgPEV2ZW50Qm9keT50YXJnZXQpLFxuICAgICAgICAgICAgICAgICkgYXMgRXZlbnRCb2R5W10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGNvbmZsaWN0LndpdGgubGVuZ3RoKSB0aGlzLmNvbmZsaWN0cy5wdXNoKGNvbmZsaWN0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgY291bnRDYXN0KGNvbmZsaWN0OkNvbmZsaWN0KSB7XG4gICAgICAgIGNvbnN0IG5lZWRlZCA9IHRoaXMuY291bnROZWVkZWQoY29uZmxpY3QpO1xuICAgICAgICByZXR1cm4gbmVlZGVkLmJvdHRvbSArIG5lZWRlZC50b3A7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvdW50IHRoZSBudW1iZXIgaG93IG1hbnkgc3BhY2UgbmVlZGVkIGZvciBmaXggdGhlIGNvbmZsaWN0IGJ5IHZlcnRpY2FsTW92ZVxuICAgICAqICovXG4gICAgcHJvdGVjdGVkIGNvdW50TmVlZGVkKGNvbmZsaWN0OkNvbmZsaWN0KSA6e3RvcDpudW1iZXIsIGJvdHRvbTpudW1iZXJ9IHtcbiAgICAgICAgY29uc3Qgb3JpZ2luID0gY29uZmxpY3Quc2VsZjtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhYm92ZTpFdmVudEJvZHlbXSA9IGNvbmZsaWN0LndpdGguZmlsdGVyKFxuICAgICAgICAgICAgY2IgPT4gY2IuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55IDwgb3JpZ2luLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYmVsb3c6RXZlbnRCb2R5W10gPSBjb25mbGljdC53aXRoLmZpbHRlcihjYiA9PlxuICAgICAgICAgICAgY2IuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55ID4gb3JpZ2luLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSxcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoYWJvdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHQudG9wID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgLi4uYWJvdmUubWFwKCh1cHBlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodXBwZXIuZHJhd0luZm8uZmxvYXRlZCA9PT0gb3JpZ2luLmRyYXdJbmZvLmZsb2F0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXIuZHJhd0luZm8uYm94LnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHVwcGVyLmRyYXdJbmZvLmJveC5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIG9yaWdpbi5kcmF3SW5mby5ib3gueVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmlnaW4uZHJhd0luZm8uZmxvYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXIuZHJhd0luZm8uYm94LnkgKyB1cHBlci5kcmF3SW5mby5ib3guaGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gb3JpZ2luLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh1cHBlci5kcmF3SW5mby5mbG9hdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBwZXIuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55IC0gb3JpZ2luLmRyYXdJbmZvLmJveC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFN5bnRheEVycm9yKCdmbG9hdGVkIGlzIG5vdCBhIGJvb2xlYW4nKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlbG93Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0LmJvdHRvbSA9IE1hdGgubWF4KFxuICAgICAgICAgICAgICAgIC4uLmJlbG93Lm1hcCgobG93ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvd2VyLmRyYXdJbmZvLmZsb2F0ZWQgPT09IG9yaWdpbi5kcmF3SW5mby5mbG9hdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbi5kcmF3SW5mby5ib3gueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgb3JpZ2luLmRyYXdJbmZvLmJveC5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGxvd2VyLmRyYXdJbmZvLmJveC55XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWdpbi5kcmF3SW5mby5mbG9hdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSAtIGxvd2VyLmRyYXdJbmZvLmJveC55O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvd2VyLmRyYXdJbmZvLmZsb2F0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9yaWdpbi5kcmF3SW5mby5ib3gueSArIG9yaWdpbi5kcmF3SW5mby5ib3guaGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gbG93ZXIuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFN5bnRheEVycm9yKCdmbG9hdGVkIGlzIG5vdCBhIGJvb2xlYW4nKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYXJnaW4gMSB0byB0YXJnZXQgb2YgY29uZmxpY3RcbiAgICAgICAgaWYgKHJlc3VsdC50b3ApIHJlc3VsdC50b3ArKztcbiAgICAgICAgaWYgKHJlc3VsdC5ib3R0b20pIHJlc3VsdC5ib3R0b20rKztcblxuICAgICAgICBvcmlnaW4uZXh0cmFEYXRhLm5lZWRlZCA9IHJlc3VsdDtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3VudCB0aGUgbnVtYmVyIGhvdyBtYW55IHNwYWNlIHRoZSBjb21wb25lbnQgY2FuIG1vdmVcbiAgICAgKiAqL1xuICAgIHByb3RlY3RlZCBjb3VudFNwYWNlKCkge1xuICAgICAgICBjb25zdCBzcGFjZVBhZGRpbmcgPSA0OyAvLyBGSVhNRTogcmVtb3ZlIHN1cHBvcnRlZFxuXG4gICAgICAgIC8vIEl0c2VsZidzIGNhbiBtb3ZlIHNwYWNlXG4gICAgICAgIHRoaXMuZXZlbnRCb2R5TGlzdC5mb3JFYWNoKFxuICAgICAgICAgICAgZWIgPT4gdGhpcy5zcGFjZU1hcC5zZXQoZWIsIHtcbiAgICAgICAgICAgICAgICB0b3A6IGViLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSAtIGViLmRyYXdJbmZvLmJveC55IC0gc3BhY2VQYWRkaW5nLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogZWIuZHJhd0luZm8uYm94LnlcbiAgICAgICAgICAgICAgICAgICAgKyBlYi5kcmF3SW5mby5ib3guaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIC0gZWIuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55XG4gICAgICAgICAgICAgICAgICAgIC0gc3BhY2VQYWRkaW5nXG4gICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYXBwbHlMaW1pdGluZyA9IChhbGxFdmVudEJvZHk6RXZlbnRCb2R5W10pID0+IHtcbiAgICAgICAgICAgIGlmIChhbGxFdmVudEJvZHkubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIEFuIGl0ZW0gaXMgbGltaXRlZCBmcm9tXG5cbiAgICAgICAgICAgIC8vIGl0J3MgZmlyc3QgdGhhdCBwcmV2ZW50IG91dCBvZiBjYW52YXNcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gYWxsRXZlbnRCb2R5WzBdO1xuICAgICAgICAgICAgdGhpcy5zcGFjZU1hcC5nZXQoZmlyc3QpIS5ib3R0b20gPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICB0aGlzLnNwYWNlTWFwLmdldChmaXJzdCkhLmJvdHRvbSxcbiAgICAgICAgICAgICAgICBmaXJzdC5kcmF3SW5mby5ib3gueSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBpdCdzIGxhc3QgdGhhdCBwcmV2ZW50IG91dCBvZiBjYW52YXNcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBhbGxFdmVudEJvZHlbYWxsRXZlbnRCb2R5Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdGhpcy5zcGFjZU1hcC5nZXQobGFzdCkhLnRvcCA9IE1hdGgubWluKFxuICAgICAgICAgICAgICAgIHRoaXMuc3BhY2VNYXAuZ2V0KGxhc3QpIS50b3AsXG4gICAgICAgICAgICAgICAgbGFzdC5jYW52YXMuaGVpZ2h0IC0gKGxhc3QuZHJhd0luZm8uYm94LnkgKyBsYXN0LmRyYXdJbmZvLmJveC5oZWlnaHQpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIGNsYW1wIGJ5IG5laWdoYm9yXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFsbEV2ZW50Qm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gYWxsRXZlbnRCb2R5W2kgLSAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBhbGxFdmVudEJvZHlbaV07XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93RGF0YSA9IHRoaXMuc3BhY2VNYXAuZ2V0KG5vdykhO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzRGF0YSA9IHRoaXMuc3BhY2VNYXAuZ2V0KHByZXZpb3VzKSE7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9XG4gICAgICAgICAgICAgICAgICAgIG5vdy5kcmF3SW5mby5ib3gueSAtXG4gICAgICAgICAgICAgICAgICAgIChwcmV2aW91cy5kcmF3SW5mby5ib3gueSArIHByZXZpb3VzLmRyYXdJbmZvLmJveC5oZWlnaHQpXG4gICAgICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICAgICAgbm93RGF0YS5ib3R0b20gPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgbm93RGF0YS5ib3R0b20sXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlICsgcHJldmlvdXNEYXRhLmJvdHRvbSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGFsbEV2ZW50Qm9keS5sZW5ndGggLSAyOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBhbGxFdmVudEJvZHlbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IGFsbEV2ZW50Qm9keVtpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3dEYXRhID0gdGhpcy5zcGFjZU1hcC5nZXQobm93KSE7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dERhdGEgPSB0aGlzLnNwYWNlTWFwLmdldChuZXh0KSE7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9XG4gICAgICAgICAgICAgICAgICAgIG5leHQuZHJhd0luZm8uYm94LnkgLVxuICAgICAgICAgICAgICAgICAgICAobm93LmRyYXdJbmZvLmJveC55ICsgbm93LmRyYXdJbmZvLmJveC5oZWlnaHQpXG4gICAgICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICAgICAgbm93RGF0YS50b3AgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgbm93RGF0YS50b3AsXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlICsgbmV4dERhdGEudG9wLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBudW1iZXIgd2hpY2ggPCAwIGFzIDBcbiAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5zcGFjZU1hcC52YWx1ZXMoKSkuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB2YWx1ZS50b3AgPSBNYXRoLm1heCgwLCB2YWx1ZS50b3ApO1xuICAgICAgICAgICAgICAgIHZhbHVlLmJvdHRvbSA9IE1hdGgubWF4KDAsIHZhbHVlLmJvdHRvbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBhcHBseUxpbWl0aW5nKHRoaXMuZXZlbnRCb2R5TGlzdC5maWx0ZXIoZWIgPT4gZWIuZHJhd0luZm8uZmxvYXRlZCkpO1xuICAgICAgICBhcHBseUxpbWl0aW5nKHRoaXMuZXZlbnRCb2R5TGlzdC5maWx0ZXIoZWIgPT4gIWViLmRyYXdJbmZvLmZsb2F0ZWQpKTtcblxuICAgICAgICB0aGlzLmV2ZW50Qm9keUxpc3QuZm9yRWFjaChlYiA9PiBlYi5leHRyYURhdGEuc3BhY2UgPSB0aGlzLnNwYWNlTWFwLmdldChlYikpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEV4dGVuc2lvbiwgRXh0ZW5zaW9uTWFuYWdlciB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBERUJVRyB9IGZyb20gJy4uLy4uL2NvbW1vbi9kZWZpbml0aW9ucyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vLi4vVGltZWxpbmUnO1xuaW1wb3J0IHsgd2Fsa0xvb3AgfSBmcm9tICcuLi8uLi9jb21tb24vZnVuY3Rpb25zJztcbmltcG9ydCBFdmVudEJvZHkyQXhpc01pbGVzdG9uZSBmcm9tICcuL0V2ZW50Qm9keTJBeGlzTWlsZXN0b25lJztcbmltcG9ydCBFdmVudEF4aXMyRXZlbnRBeGlzIGZyb20gJy4vRXZlbnRBeGlzMkV2ZW50QXhpcyc7XG5pbXBvcnQgRXZlbnRCb2R5MkV2ZW50Qm9keU1vdmVyIGZyb20gJy4vRXZlbnRCb2R5MkV2ZW50Qm9keU1vdmVyJztcbmltcG9ydCBFdmVudEJvZHkyRXZlbnRCb2R5RmxvYXRlciBmcm9tICcuL0V2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyJztcbmltcG9ydCB7IENvbmZsaWN0Rml4UmVzdWx0IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZsaWN0PFQgPSBDb21wb25lbnQ+e1xuICAgIHdpdGg6IFRbXTtcbiAgICBzZWxmOiBUO1xufVxuXG4vKipcbiAqIEZpeCB0aGUgY29uZmxpY3QgYmV0d2VlbiBjb21wb25lbnQgYW5kIGVhY2ggb3RoZXIgYnk6XG4gKiAxLiBhZGp1c3QgY29tcG9uZW50IHVzaW5nIGZpeGVycy5cbiAqIDIuIHN0cmV0Y2ggQXhpcy5cbiAqICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25mbGljdEZpeGVyIGltcGxlbWVudHMgUGFydGlhbDxFeHRlbnNpb24+IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZXh0OkV4dGVuc2lvbk1hbmFnZXIpIHt9XG5cbiAgICBmaXhlcnMgOnsgZml4KCk6UHJvbWlzZTxDb25mbGljdEZpeFJlc3VsdD4gfVtdID0gW1xuICAgICAgICBuZXcgRXZlbnRCb2R5MkF4aXNNaWxlc3RvbmUodGhpcy5leHQpLFxuICAgICAgICBuZXcgRXZlbnRBeGlzMkV2ZW50QXhpcyh0aGlzLmV4dCksXG4gICAgICAgIG5ldyBFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIodGhpcy5leHQpLFxuICAgICAgICBuZXcgRXZlbnRCb2R5MkV2ZW50Qm9keUZsb2F0ZXIodGhpcy5leHQpLFxuICAgIF07XG5cbiAgICBwcm90ZWN0ZWQgY291bnRlciA9IDA7XG4gICAgYXN5bmMgb25BcHBseSh0aW1lbGluZTpDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKCFUaW1lbGluZS5pcyh0aW1lbGluZSkpIHJldHVybjtcblxuICAgICAgICAvLyBDb25mbGljdCBpcyBmaXhlZFxuICAgICAgICBpZiAoYXdhaXQgdGhpcy5maXhBbGwoKSA9PT0gQ29uZmxpY3RGaXhSZXN1bHQuTm9Db25mbGljdCkge1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyeSBzdHJldGNoIGxlbmd0aCBvZiBBeGlzXG5cbiAgICAgICAgdGhpcy5jb3VudGVyKys7XG5cbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+IDEwKSB7IC8vIFRPRE86IG1ha2UgY29uZmlndXJhYmxlXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBgVG9vIG1hbnkgdGltZXMoJHt0aGlzLmNvdW50ZXJ9KSBvZiB0cnkgZml4IGNvbmZsaWN0LmA7XG5cbiAgICAgICAgICAgIGlmIChERUJVRykgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICAgICAgICBlbHNlIGNvbnNvbGUud2Fybihtc2cpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aW1lbGluZS5hcHBseSh7XG4gICAgICAgICAgICBheGlzTGVuZ3RoOiB0aW1lbGluZS5ydW50aW1lLmF4aXNMZW5ndGggKiAxLjEsXG4gICAgICAgIH0pKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyeSBmaXggYWxsIGNvbmZsaWN0IGJ5IGFkanVzdCBjb21wb25lbnRzLlxuICAgICAqICovXG4gICAgYXN5bmMgZml4QWxsKCk6UHJvbWlzZTxDb25mbGljdEZpeFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgd2Fsa0xvb3AoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBmaXhlciBvZiB0aGlzLmZpeGVycykge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChhd2FpdCBmaXhlci5maXgoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBFeHRlbnNpb24sIEV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tICcuLyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgREVCVUcgfSBmcm9tICcuLi9jb21tb24vZGVmaW5pdGlvbnMnO1xuXG4vKipcbiAqIDEuIFNldCBhIGlkIGZvciBldmVyeSBDb21wb25lbnQgaW4gY29tcG9uZW50LmV4dHJhRGF0YS5pZC5cbiAqIDIuIENyZWF0ZSBhIGdsb2JhbCB2YXJpYWJsZSB1c2luZyBjb21wb25lbnQncyBpZCBpZiBERUJVRyBpcyB0cnVlIHdoZW4gY29tcC5hcHBseSBiZWVuIGZpcmVkXG4gKiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJhdG9ySWQgaW1wbGVtZW50cyBQYXJ0aWFsPEV4dGVuc2lvbj4ge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBldHg6RXh0ZW5zaW9uTWFuYWdlcikge31cbiAgICAvKipcbiAgICAgKiBTZXQgY29tcG9uZW50LmV4dHJhRGF0YS5pZFxuICAgICAqICovXG4gICAgb25Db25zdHJ1Y3QoY29tcDpDb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tU3RyaW5nIDpzdHJpbmcgPVxuICAgICAgICAgICAgTnVtYmVyKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdKVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygzNilcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgNSlcbiAgICAgICAgO1xuICAgICAgICAvLyBjb21wLm5hbWUgaXMgdW5kZWZpbmVkIG5vd1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29tcC5leHRyYURhdGEsICdpZCcsIHtcbiAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIGAke2NvbXAubmFtZX1fJHtyYW5kb21TdHJpbmd9YDsgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIHRoZSBERUJVRyBpcyB0cnVlLCBzZXQgYSBnbG9iYWwgdmFyaWFibGUgdXNpbmcgY29tcG9uZW50LmV4dHJhRGF0YS5pZCBpbiB3aW5kb3dzXG4gICAgICogdG8gcG9pbnQgdGhlIGNvbXBvbmVudC5cbiAgICAgKiAqL1xuICAgIGFzeW5jIG9uQXBwbHkoY29tcDpDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKERFQlVHKSAoPGFueT53aW5kb3cpW2NvbXAuZXh0cmFEYXRhLmlkIV0gPSBjb21wO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEV4dGVuc2lvbiwgRXh0ZW5zaW9uTWFuYWdlciB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCBBeGlzIGZyb20gJy4uL0F4aXMnO1xuaW1wb3J0IEF4aXNNaWxlc3RvbmUgZnJvbSAnLi4vQXhpcy9BeGlzTWlsZXN0b25lJztcbmltcG9ydCB7IG1lcmdlQm94IH0gZnJvbSAnLi4vY29tbW9uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBCcmVha3BvaW50IH0gZnJvbSAnLi9CcmVha3BvaW50QW5pbWF0aW9uJztcbmltcG9ydCB7IFNOIH0gZnJvbSAnLi4vY29tbW9uL2RlZmluaXRpb25zJztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9UaW1lbGluZSc7XG5pbXBvcnQgQXhpc1NjYWxlIGZyb20gJy4uL0F4aXMvQXhpc1NjYWxlJztcblxuLyoqXG4gKiBTZXQgYSBwb2ludCB0aGF0IHNvbWUgY29tcG9uZW50cyBuZWVkIG1vdmUgaWYgdGhleSB1cHBlciBoYXMgdGhpcyBwb2ludC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjcml0aWNhbCAtIGEgY3JpdGljYWwgcG9pbnQgdG8ganVkZ2UgYSBjb21wb25lbnQgbmVlZCBtb3ZlIG9yIG5vdC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBhZGRpdGlvbmFsIC0gd2hhdCBudW1iZXIgYSBjb21wb25lbnQgbmVlZCBtb3ZlIGZvciB0aGlzIGNvbmZpZy5cbiAqIEBwcm9wZXJ0eSB7Q29tcG9uZW50fSBjb21wb25lbnQgLSB3aGljaCBjb21wb25lbnQgbWFkZSB0aGlzIGNvbmZpZy5cbiAqICovXG5pbnRlcmZhY2UgUHVzaENvbmZpZ3tcbiAgICBjcml0aWNhbDogbnVtYmVyO1xuICAgIGFkZGl0aW9uYWw6IG51bWJlcjtcbiAgICBjb21wb25lbnQ6IENvbXBvbmVudDtcbn1cblxuLyoqXG4gKiBNaWxlc3RvbmUgc2hvdWxkbid0IG9jY3VweSB0aGUgc3BhY2Ugb2YgQXhpcy5cbiAqIFNvIHdlIG1vdmUgRXZlbnQsIFNjYWxlIGFuZCBNaWxlc3RvbmUgaWYgdGhleSB1cHBlciBoYXMgYW55IE1pbGVzdG9uZXMuXG4gKiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb25Db3VudGVyIGltcGxlbWVudHMgUGFydGlhbDxFeHRlbnNpb24+IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZXR4OkV4dGVuc2lvbk1hbmFnZXIpIHt9XG5cbiAgICBhc3luYyBvbkFwcGx5KGNvbXA6Q29tcG9uZW50KSB7XG4gICAgICAgIGlmIChBeGlzLmlzKGNvbXApKSByZXR1cm4gYXdhaXQgdGhpcy5hZGp1c3RBeGlzKGNvbXApO1xuICAgICAgICBpZiAoVGltZWxpbmUuaXMoY29tcCkpIHJldHVybiBhd2FpdCB0aGlzLmFkanVzdEV2ZW50KGNvbXApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGVuIGEgY29tcG9uZW50IGRlc3Ryb3llZCwgcmVtb3ZlIGEgY29uZmlnIG1hZGUgYnkgaXQuXG4gICAgICogKi9cbiAgICBvbkRlc3Ryb3koY29tcDpDb21wb25lbnQpIHtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wdXNoQ29uZmlncy5maW5kSW5kZXgoY29uZmlnID0+IGNvbmZpZy5jb21wb25lbnQgPT09IGNvbXApO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSBicmVhaztcbiAgICAgICAgICAgIGVsc2UgdGhpcy5wdXNoQ29uZmlncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgYWRqdXN0QXhpcyhheGlzOkF4aXMpIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb21wb25lbnRzID0gW1xuICAgICAgICAgICAgYXhpcy5ib2R5LFxuICAgICAgICAgICAgLi4uYXhpcy5zY2FsZXMsXG4gICAgICAgICAgICAuLi5heGlzLm1pbGVzdG9uZXMsXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gTWlsZXN0b25lIGNhbm5vdCBvY2N1cHkgdGhlIHNwYWNlIG9mIEF4aXNcbiAgICAgICAgYXhpcy5leHRyYURhdGEucmVhbExlbmd0aCA9XG4gICAgICAgICAgICBheGlzLmRyYXdJbmZvLmxlbmd0aFxuICAgICAgICAgICAgLSBheGlzLm1pbGVzdG9uZXMucmVkdWNlKCAvLyBSZXNlcnZlZCBzcGFjZSBmb3IgTWlsZXN0b25lXG4gICAgICAgICAgICAgICAgKGg6bnVtYmVyLCBtOiBBeGlzTWlsZXN0b25lKSA9PiBoICsgbS5kcmF3SW5mby5ib3guaGVpZ2h0LFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICApXG4gICAgICAgIDtcblxuICAgICAgICAvLyBTZXQgcmVhbCBZIGluIG1pbGVzdG9uZXMgYW5kIHNjYWxlc1xuICAgICAgICBheGlzLm1pbGVzdG9uZXMuZm9yRWFjaChtID0+IG0uZHJhd0luZm8uYWxpZ25ZICo9IGF4aXMuZXh0cmFEYXRhLnJlYWxMZW5ndGghKTtcbiAgICAgICAgYXhpcy5zY2FsZXMuZm9yRWFjaChzID0+IHMuZHJhd0luZm8uYWxpZ25ZICo9IGF4aXMuZXh0cmFEYXRhLnJlYWxMZW5ndGghKTtcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbLi4uYXhpcy5taWxlc3RvbmVzLCAuLi5heGlzLnNjYWxlc10ubWFwKGMgPT4gYy5hcHBseSgpKSk7XG5cbiAgICAgICAgLy8gU2V0IFB1c2gtY29uZmlnXG4gICAgICAgIGF4aXMubWlsZXN0b25lcy5mb3JFYWNoKG1pbGVzdG9uZSA9PiB0aGlzLmFkZFB1c2hDb25maWcoe1xuICAgICAgICAgICAgY3JpdGljYWw6IG1pbGVzdG9uZS5kcmF3SW5mby5ib3gueSxcbiAgICAgICAgICAgIGFkZGl0aW9uYWw6IG1pbGVzdG9uZS5kcmF3SW5mby5ib3guaGVpZ2h0LFxuICAgICAgICAgICAgY29tcG9uZW50OiBtaWxlc3RvbmUsXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyBQdXNoIG1pbGVzdG9uZXMgYW5kIHNjYWxlc1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZXR4LmJyZWFrcG9pbnQuYmxvY2soQnJlYWtwb2ludC5QdXNoU2NhbGVzQW5kTWlsZXN0b25lcywge1xuICAgICAgICAgICAgY29tcG9uZW50czogY2hpbGRDb21wb25lbnRzLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwdXNoVGFyZ2V0IDooQXhpc01pbGVzdG9uZXxBeGlzU2NhbGUpW10gPVxuICAgICAgICAgICAgWy4uLmF4aXMubWlsZXN0b25lcywgLi4uYXhpcy5zY2FsZXNdLnNvcnQoXG4gICAgICAgICAgICAgICAgKGNvbXAxLCBjb21wMikgPT4gY29tcDEuZHJhd0luZm8uYWxpZ25ZIC0gY29tcDIuZHJhd0luZm8uYWxpZ25ZLFxuICAgICAgICAgICAgKVxuICAgICAgICA7XG4gICAgICAgIGZvciAoY29uc3QgY29tcCBvZiBwdXNoVGFyZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuY291bnRDcml0aWNhbChjb21wLmRyYXdJbmZvLmFsaWduWSk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBpZiAoY29tcC5uYW1lID09PSBTTi5BeGlzTWlsZXN0b25lKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHVzaFRhcmdldC5tYXAoY29tcCA9PiBjb21wLmFwcGx5KCkpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmV0eC5icmVha3BvaW50LmJsb2NrKEJyZWFrcG9pbnQuUHVzaFNjYWxlc0FuZE1pbGVzdG9uZXMsIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50czogY2hpbGRDb21wb25lbnRzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21wLmRyYXdJbmZvLmFsaWduWSArPSBkaXN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHB1c2hUYXJnZXQubWFwKGNvbXAgPT4gY29tcC5hcHBseSgpKSk7XG4gICAgICAgIGF3YWl0IHRoaXMuZXR4LmJyZWFrcG9pbnQuYmxvY2soQnJlYWtwb2ludC5QdXNoU2NhbGVzQW5kTWlsZXN0b25lcywge1xuICAgICAgICAgICAgY29tcG9uZW50czogY2hpbGRDb21wb25lbnRzLFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChjaGlsZENvbXBvbmVudHMubWFwKGMgPT4gYy5hcHBseSgpKSk7XG5cbiAgICAgICAgYXhpcy5kcmF3SW5mby5ib3ggPSBtZXJnZUJveCguLi5jaGlsZENvbXBvbmVudHMubWFwKGMgPT4gYy5kcmF3SW5mby5ib3gpKTtcbiAgICB9XG4gICAgYXN5bmMgYWRqdXN0RXZlbnQodGltZWxpbmU6VGltZWxpbmUpIHtcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGltZWxpbmUuZXZlbnRzO1xuICAgICAgICBjb25zdCBheGlzID0gdGhpcy5ldHguY29tcG9uZW50c1tTTi5BeGlzXVswXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgICAgICAgZXZlbnQuZHJhd0luZm8udGFyZ2V0LnkgKj0gYXhpcy5leHRyYURhdGEucmVhbExlbmd0aCE7XG4gICAgICAgICAgICBldmVudC5kcmF3SW5mby50YXJnZXQueSArPSBheGlzLmJvZHkuZHJhd0luZm8uYm94Lnk7XG4gICAgICAgICAgICBldmVudC5kcmF3SW5mby50YXJnZXQueSArPSB0aGlzLmNvdW50Q3JpdGljYWwoZXZlbnQuZHJhd0luZm8udGFyZ2V0LnkpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuZHJhd0luZm8uYXhpc0xlbmd0aCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LmRyYXdJbmZvLmF4aXNMZW5ndGggKj0gYXhpcy5leHRyYURhdGEucmVhbExlbmd0aCE7XG4gICAgICAgICAgICAgICAgZXZlbnQuZHJhd0luZm8uYXhpc0xlbmd0aCArPSB0aGlzLmNvdW50Q3JpdGljYWwoZXZlbnQuZHJhd0luZm8udGFyZ2V0LnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoZXZlbnRzLm1hcChldmVudCA9PiBldmVudC5hcHBseSgpKSk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcHVzaENvbmZpZ3M6UHVzaENvbmZpZ1tdID0gW107XG4gICAgcHJvdGVjdGVkIGFkZFB1c2hDb25maWcoY29uZmlnOlB1c2hDb25maWcpIHtcbiAgICAgICAgdGhpcy5wdXNoQ29uZmlncy5wdXNoKGNvbmZpZyk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjb3VudENyaXRpY2FsKG51bTpudW1iZXIpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLnB1c2hDb25maWdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaENvbmZpZ3MucmVkdWNlKFxuICAgICAgICAgICAgKHJlc3VsdDpudW1iZXIsIGNvbmZpZzpQdXNoQ29uZmlnKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bSA+IGNvbmZpZy5jcml0aWNhbCA/IHJlc3VsdCArIGNvbmZpZy5hZGRpdGlvbmFsIDpyZXN1bHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBERUJVRywgU04gfSBmcm9tICdAL2VuZ2luZS9jb21tb24vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IEF4aXMgZnJvbSAnLi4vQXhpcyc7XG5pbXBvcnQgQXhpc0JvZHkgZnJvbSAnLi4vQXhpcy9BeGlzQm9keSc7XG5pbXBvcnQgQXhpc1NjYWxlIGZyb20gJy4uL0F4aXMvQXhpc1NjYWxlJztcbmltcG9ydCBBeGlzTWlsZXN0b25lIGZyb20gJy4uL0F4aXMvQXhpc01pbGVzdG9uZSc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vRXZlbnQnO1xuaW1wb3J0IEV2ZW50Qm9keSBmcm9tICcuLi9FdmVudC9FdmVudEJvZHknO1xuaW1wb3J0IEV2ZW50TWFyayBmcm9tICcuLi9FdmVudC9FdmVudE1hcmsnO1xuaW1wb3J0IEV2ZW50QXhpcyBmcm9tICcuLi9FdmVudC9FdmVudEF4aXMnO1xuaW1wb3J0IEJveEVsZW1lbnRHZW5lcmF0b3IgZnJvbSAnLi9Cb3hFbGVtZW50R2VuZXJhdG9yJztcbmltcG9ydCBHZW5lcmF0b3JJZCBmcm9tICcuL0dlbmVyYXRvcklkJztcbmltcG9ydCBQb3NpdGlvbkNvdW50ZXIgZnJvbSAnLi9Qb3NpdGlvbkNvdW50ZXInO1xuaW1wb3J0IEJyZWFrcG9pbnRBbmltYXRpb24gZnJvbSAnLi9CcmVha3BvaW50QW5pbWF0aW9uJztcbmltcG9ydCBDb25mbGljdEZpeGVyIGZyb20gJy4vQ29uZmxpY3RGaXhlcic7XG5cbmV4cG9ydCB7XG4gICAgQm94RWxlbWVudEdlbmVyYXRvcixcbiAgICBHZW5lcmF0b3JJZCxcbiAgICBQb3NpdGlvbkNvdW50ZXIsXG4gICAgQnJlYWtwb2ludEFuaW1hdGlvbixcbiAgICBDb25mbGljdEZpeGVyLFxufTtcblxuY29uc3QgTUVUSE9EUyA9IFsnb25Db25zdHJ1Y3QnLCAnb25BcHBseScsICdvbkRlc3Ryb3knLCAnb25IaWRlJywgJ29uRHJhdyddO1xuXG5cbi8qKlxuICogTWFuYWdlIEV4dGVuc2lvbk1hbmFnZXIjY29tcG9uZW50cy5cbiAqICovXG5leHBvcnQgY2xhc3MgQmFzZSB7XG4gICAgY29uc3RydWN0b3IoZXR4KSB7XG4gICAgICAgIHRoaXMuZXR4ID0gZXR4O1xuICAgIH1cblxuICAgIG9uQ29uc3RydWN0KGNvbXApIHtcbiAgICAgICAgdGhpcy5ldHguY29tcG9uZW50c1tjb21wLm5hbWVdLnB1c2goY29tcCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KGNvbXApIHtcbiAgICAgICAgdGhpcy5ldHguY29tcG9uZW50c1tjb21wLm5hbWVdLnNwbGljZShcbiAgICAgICAgICAgIHRoaXMuZXR4LmNvbXBvbmVudHNbY29tcC5uYW1lXS5pbmRleE9mKGNvbXApLFxuICAgICAgICAgICAgMSxcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgRXh0ZW5zaW9uTWFuYWdlclxuICogQGNvbnN0cnVjdG9yXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEV4dGVuc2lvbk1hbmFnZXIoeyBicmVha3BvaW50QW5pbWF0aW9uIH0gPSB7fSkge1xuICAgIHRoaXMuZXh0cmFEYXRhID0ge307XG4gICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICBbU04uVGltZWxpbmVdOiBbXSxcbiAgICAgICAgW1NOLkF4aXNdOiBbXSxcbiAgICAgICAgW1NOLkF4aXNCb2R5XTogW10sXG4gICAgICAgIFtTTi5BeGlzU2NhbGVdOiBbXSxcbiAgICAgICAgW1NOLkF4aXNNaWxlc3RvbmVdOiBbXSxcbiAgICAgICAgW1NOLkV2ZW50XTogW10sXG4gICAgICAgIFtTTi5FdmVudEJvZHldOiBbXSxcbiAgICAgICAgW1NOLkV2ZW50TWFya106IFtdLFxuICAgICAgICBbU04uRXZlbnRBeGlzXTogW10sXG4gICAgfTtcbiAgICB0aGlzLmJyZWFrcG9pbnQgPSBuZXcgQnJlYWtwb2ludEFuaW1hdGlvbih0aGlzLCBicmVha3BvaW50QW5pbWF0aW9uKTtcblxuICAgIHRoaXMuZXh0ZW5zaW9ucyA9IFtcbiAgICAgICAgbmV3IEJhc2UodGhpcyksXG4gICAgICAgIG5ldyBHZW5lcmF0b3JJZCh0aGlzKSxcbiAgICAgICAgbmV3IFBvc2l0aW9uQ291bnRlcih0aGlzKSxcbiAgICAgICAgbmV3IENvbmZsaWN0Rml4ZXIodGhpcyksXG4gICAgICAgIHRoaXMuYnJlYWtwb2ludCxcbiAgICBdO1xuXG4gICAgaWYgKERFQlVHKSB7XG4gICAgICAgIHRoaXMuZXh0ZW5zaW9ucy5wdXNoKFxuICAgICAgICAgICAgbmV3IEJveEVsZW1lbnRHZW5lcmF0b3IodGhpcyksXG4gICAgICAgICk7XG4gICAgfVxufVxuRXh0ZW5zaW9uTWFuYWdlci5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gZ2V0UGFyZW50KGNvbXApIHtcbiAgICBpZiAoQXhpcy5pcyhjb21wKSkgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tTTi5UaW1lbGluZV1bMF07XG4gICAgaWYgKEV2ZW50LmlzKGNvbXApKSByZXR1cm4gdGhpcy5jb21wb25lbnRzW1NOLlRpbWVsaW5lXVswXTtcbiAgICBpZiAoQXhpc0JvZHkuaXMoY29tcCkpIHJldHVybiB0aGlzLmNvbXBvbmVudHNbU04uQXhpc11bMF07XG4gICAgaWYgKEF4aXNNaWxlc3RvbmUuaXMoY29tcCkpIHJldHVybiB0aGlzLmNvbXBvbmVudHNbU04uQXhpc11bMF07XG4gICAgaWYgKEF4aXNTY2FsZS5pcyhjb21wKSkgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tTTi5BeGlzXVswXTtcbiAgICBpZiAoRXZlbnRCb2R5LmlzKGNvbXApKSByZXR1cm4gdGhpcy5jb21wb25lbnRzW1NOLkV2ZW50XS5maW5kKGV2ZW50ID0+IGV2ZW50LmJvZHkgPT09IGNvbXApO1xuICAgIGlmIChFdmVudEF4aXMuaXMoY29tcCkpIHJldHVybiB0aGlzLmNvbXBvbmVudHNbU04uRXZlbnRdLmZpbmQoZXZlbnQgPT4gZXZlbnQuYXhpcyA9PT0gY29tcCk7XG4gICAgaWYgKEV2ZW50TWFyay5pcyhjb21wKSkgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tTTi5FdmVudF0uZmluZChldmVudCA9PiBldmVudC5tYXJrID09PSBjb21wKTtcblxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYENhbm5vdCBmaW5kIHBhcmVudCBvZiAke2NvbXAuY29uc3RydWN0b3IubmFtZX1gKTtcbn07XG5cbi8vIEFkZCBtZXRob2RzIG9uIEV4dGVuc2lvbk1hbmFnZXIucHJvdG90eXBlIGZyb20gTUVUSE9EU1xuTUVUSE9EUy5mb3JFYWNoKChtZXRob2ROYW1lKSA9PiB7XG4gICAgRXh0ZW5zaW9uTWFuYWdlci5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBhc3luYyBmdW5jdGlvbiBleHRlbnNpb25NYW5hZ2VyTWV0aG9kKC4uLmFyZ3MpIHtcbiAgICAgICAgZm9yIChjb25zdCBleHRlbnNpb24gb2YgdGhpcy5leHRlbnNpb25zKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgICAgICAgIGlmIChtZXRob2ROYW1lIGluIGV4dGVuc2lvbikge1xuICAgICAgICAgICAgICAgIGlmIChtZXRob2ROYW1lID09PSAnb25BcHBseScpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZXh0ZW5zaW9uW21ldGhvZE5hbWVdKC4uLmFyZ3MpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25bbWV0aG9kTmFtZV0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0pO1xuIiwiY29uc29sZS5sb2coJ1RoZSBuaWdodCBpcyBzaG9ydCwgd2FsayBvbiBnaXJsLicpO1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRpbWVsaW5lLCBDb25zdHJ1Y3RJbmZvIGFzIFRpbWVsaW5lQ29uc3RydWN0SW5mbyB9IGZyb20gJy4vVGltZWxpbmUnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEF4aXMsIENvbnN0cnVjdEluZm8gYXMgQXhpc0NvbnN0cnVjdEluZm8gIH0gZnJvbSAnLi9BeGlzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXhpc1NjYWxlIH0gZnJvbSAnLi9BeGlzL0F4aXNTY2FsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEF4aXNNaWxlc3RvbmUgfSBmcm9tICcuL0F4aXMvQXhpc01pbGVzdG9uZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEF4aXNCb2R5IH0gZnJvbSAnLi9BeGlzL0F4aXNCb2R5JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdmVudCwgQ29uc3RydWN0SW5mbyBhcyBFdmVudENvbnN0cnVjdEluZm8gIH0gZnJvbSAnLi9FdmVudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV2ZW50TWFyayB9IGZyb20gJy4vRXZlbnQvRXZlbnRNYXJrJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXZlbnRBeGlzIH0gZnJvbSAnLi9FdmVudC9FdmVudEF4aXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdmVudEJvZHkgfSBmcm9tICcuL0V2ZW50L0V2ZW50Qm9keSc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCB7XG4gICAgRXh0ZW5zaW9uTWFuYWdlcixcbiAgICBCb3hFbGVtZW50R2VuZXJhdG9yLFxuICAgIEdlbmVyYXRvcklkLFxuICAgIFBvc2l0aW9uQ291bnRlcixcbiAgICBCcmVha3BvaW50QW5pbWF0aW9uLFxuICAgIENvbmZsaWN0Rml4ZXIsXG4gICAgRXh0RGF0YSxcbn0gZnJvbSAnLi9leHRlbnNpb25zJztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIEVuZ2luZSBmcm9tICdAZW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpc0JvZHkgZXh0ZW5kcyBFbmdpbmUuQXhpc0JvZHkge1xuICAgIHRoZW1lID0gJ2NvbG9ycyc7XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zdCBib3ggPSB0aGlzLmRyYXdJbmZvLmJveDtcblxuICAgICAgICB0aGlzLmV4dC5leHRyYURhdGEucm91Z2hDYW52YXMubGluZShcbiAgICAgICAgICAgIGJveC54ICsgYm94LndpZHRoIC8gMixcbiAgICAgICAgICAgIGJveC55LFxuICAgICAgICAgICAgYm94LnggKyBib3gud2lkdGggLyAyLFxuICAgICAgICAgICAgYm94LnkgKyBib3guaGVpZ2h0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBib3gud2lkdGgsXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAnIzMzMycsXG4gICAgICAgICAgICAgICAgaGFjaHVyZUdhcDogMCxcbiAgICAgICAgICAgICAgICByb3VnaG5lc3M6IDAuMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmRyYXcoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCAqIGFzIEVuZ2luZSBmcm9tICdAZW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpc01pbGVzdG9uZSBleHRlbmRzIEVuZ2luZS5BeGlzTWlsZXN0b25lIHtcbiAgICB0aGVtZSA9ICdjb2xvcnMnO1xuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5kcmF3SW5mby5ib3g7XG5cbiAgICAgICAgdGhpcy5leHQuZXh0cmFEYXRhLnJvdWdoQ2FudmFzLnJlY3RhbmdsZShcbiAgICAgICAgICAgIGJveC54LFxuICAgICAgICAgICAgYm94LnksXG4gICAgICAgICAgICBib3gud2lkdGgsXG4gICAgICAgICAgICBib3guaGVpZ2h0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cm9rZTogJyMzMzMnLFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAxLjUsXG5cbiAgICAgICAgICAgICAgICBmaWxsOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgZmlsbFdlaWdodDogMC41LFxuICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ3NvbGlkJyxcblxuICAgICAgICAgICAgICAgIGhhY2h1cmVHYXA6IDIsXG4gICAgICAgICAgICAgICAgcm91Z2huZXNzOiAwLjcsXG4gICAgICAgICAgICAgICAgYm93aW5nOiAwLjUsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBzdXBlci5kcmF3KCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgKiBhcyBFbmdpbmUgZnJvbSAnQGVuZ2luZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlzU2NhbGUgZXh0ZW5kcyBFbmdpbmUuQXhpc1NjYWxlIHtcbiAgICB0aGVtZSA9ICdjb2xvcnMnO1xuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5kcmF3SW5mby5ib3g7XG5cbiAgICAgICAgdGhpcy5leHQuZXh0cmFEYXRhLnJvdWdoQ2FudmFzLnJlY3RhbmdsZShcbiAgICAgICAgICAgIGJveC54LFxuICAgICAgICAgICAgYm94LnksXG4gICAgICAgICAgICBib3gud2lkdGgsXG4gICAgICAgICAgICBib3guaGVpZ2h0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIHN0cm9rZTogJ3JnYmEoMCwwLDAsMCknLFxuXG4gICAgICAgICAgICAgICAgZmlsbDogJyNmZmYnLFxuICAgICAgICAgICAgICAgIGZpbGxXZWlnaHQ6IDAuMyxcbiAgICAgICAgICAgICAgICBmaWxsU3R5bGU6ICdzb2xpZCcsXG5cbiAgICAgICAgICAgICAgICBoYWNodXJlR2FwOiAwLFxuICAgICAgICAgICAgICAgIHJvdWdobmVzczogMCxcbiAgICAgICAgICAgICAgICBib3dpbmc6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBzdXBlci5kcmF3KCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgKiBhcyBFbmdpbmUgZnJvbSAnQGVuZ2luZSc7XG5pbXBvcnQgQXhpc0JvZHkgZnJvbSAnLi9BeGlzQm9keSc7XG5pbXBvcnQgQXhpc01pbGVzdG9uZSBmcm9tICcuL0F4aXNNaWxlc3RvbmUnO1xuaW1wb3J0IEF4aXNTY2FsZSBmcm9tICcuL0F4aXNTY2FsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aXMgZXh0ZW5kcyBFbmdpbmUuQXhpcyB7XG4gICAgdGhlbWUgPSAnY29sb3JzJztcblxuICAgIGJvZHlDb25zdHJ1Y3RvciA9IEF4aXNCb2R5O1xuICAgIG1pbGVzdG9uZUNvbnN0cnVjdG9yID0gQXhpc01pbGVzdG9uZTtcbiAgICBzY2FsZUNvbnN0cnVjdG9yID0gQXhpc1NjYWxlO1xuXG59XG4iLCJpbXBvcnQgKiBhcyBFbmdpbmUgZnJvbSAnQGVuZ2luZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50QXhpcyBleHRlbmRzIEVuZ2luZS5FdmVudEF4aXMge1xuICAgIHRoZW1lID0gJ2NvbG9ycyc7XG4gICAgZHJhd0luZm86IEVuZ2luZS5FdmVudEF4aXNbJ2RyYXdJbmZvJ10gJiB7bWFpbkNvbG9yOnN0cmluZ30gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgdGhpcy5kcmF3SW5mbyxcbiAgICAgICAgeyBtYWluQ29sb3I6ICcnIH0sXG4gICAgKTtcblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGNvbnN0IHN0cm9rZVdpZHRoID0gMS41O1xuICAgICAgICBjb25zdCByYWRpdXMgPSAxMDtcblxuICAgICAgICB0aGlzLmV4dC5leHRyYURhdGEucm91Z2hDYW52YXMubGluZWFyUGF0aChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBbdGhpcy5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LngsIHRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55XSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC54ICsgdGhpcy5kcmF3SW5mby5vZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnggKyB0aGlzLmRyYXdJbmZvLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55IC0gdGhpcy5kcmF3SW5mby5sZW5ndGggKyByYWRpdXMgLyAyLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoLFxuICAgICAgICAgICAgICAgIHN0cm9rZTogdGhpcy5kcmF3SW5mby5tYWluQ29sb3IsXG5cbiAgICAgICAgICAgICAgICByb3VnaG5lc3M6IDAuNyxcbiAgICAgICAgICAgICAgICBib3dpbmc6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZXh0LmV4dHJhRGF0YS5yb3VnaENhbnZhcy5jaXJjbGUoXG4gICAgICAgICAgICB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueCArIHRoaXMuZHJhd0luZm8ub2Zmc2V0WCxcbiAgICAgICAgICAgIHRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55IC0gdGhpcy5kcmF3SW5mby5sZW5ndGgsXG4gICAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGgsXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB0aGlzLmRyYXdJbmZvLm1haW5Db2xvcixcblxuICAgICAgICAgICAgICAgIHJvdWdobmVzczogMC4yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gc3VwZXIuZHJhdygpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0ICogYXMgRW5naW5lIGZyb20gJ0BlbmdpbmUnO1xuaW1wb3J0IHsgc2hyaW5rQm94IH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRCb2R5IGV4dGVuZHMgRW5naW5lLkV2ZW50Qm9keSB7XG5cbiAgICB0aGVtZSA9ICdjb2xvcnMnO1xuICAgIGRyYXdJbmZvOiBFbmdpbmUuRXZlbnRCb2R5WydkcmF3SW5mbyddICYge21haW5Db2xvcjpzdHJpbmd9ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHRoaXMuZHJhd0luZm8sXG4gICAgICAgIHsgbWFpbkNvbG9yOiAnJyB9LFxuICAgICk7XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zdCBzdHJva2VXaWR0aCA9IDEuNTtcbiAgICAgICAgY29uc3QgYm94ID0gc2hyaW5rQm94KHRoaXMuZHJhd0luZm8uYm94LCBzdHJva2VXaWR0aCk7XG5cbiAgICAgICAgdGhpcy5leHQuZXh0cmFEYXRhLnJvdWdoQ2FudmFzLnJlY3RhbmdsZShcbiAgICAgICAgICAgIGJveC54LFxuICAgICAgICAgICAgYm94LnksXG4gICAgICAgICAgICBib3gud2lkdGgsXG4gICAgICAgICAgICBib3guaGVpZ2h0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIHN0cm9rZTogJ3JnYmEoMCwgMCwgMCwgMCknLFxuXG4gICAgICAgICAgICAgICAgZmlsbDogdGhpcy5kcmF3SW5mby5tYWluQ29sb3IsXG4gICAgICAgICAgICAgICAgZmlsbFdlaWdodDogMC41LFxuICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5leHQuZXh0cmFEYXRhLnJvdWdoQ2FudmFzLmxpbmUoXG4gICAgICAgICAgICB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueCArIDIsXG4gICAgICAgICAgICB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSxcbiAgICAgICAgICAgIHRoaXMuZHJhd0luZm8uYm94LnggKyB0aGlzLmRyYXdJbmZvLmJveC53aWR0aCAtIDIsXG4gICAgICAgICAgICB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aCxcbiAgICAgICAgICAgICAgICByb3VnaG5lc3M6IDEuMyxcbiAgICAgICAgICAgICAgICBib3dpbmc6IDAuNSxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHRoaXMuZHJhd0luZm8ubWFpbkNvbG9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gc3VwZXIuZHJhdygpO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEVuZ2luZSBmcm9tICdAZW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRNYXJrIGV4dGVuZHMgRW5naW5lLkV2ZW50TWFyayB7XG4gICAgdGhlbWUgPSAnY29sb3JzJztcbiAgICBkcmF3SW5mbyA6RW5naW5lLkV2ZW50TWFya1snZHJhd0luZm8nXSAmIHttYWluQ29sb3I6c3RyaW5nfSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICB0aGlzLmRyYXdJbmZvLFxuICAgICAgICB7IG1haW5Db2xvcjogJycgfSxcbiAgICApO1xuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5leHQuZXh0cmFEYXRhLnJvdWdoQ2FudmFzLmNpcmNsZShcbiAgICAgICAgICAgIHRoaXMuZHJhd0luZm8udGFyZ2V0LngsXG4gICAgICAgICAgICB0aGlzLmRyYXdJbmZvLnRhcmdldC55LFxuICAgICAgICAgICAgdGhpcy5kcmF3SW5mby53aWR0aCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBzdHJva2U6ICdyZ2JhKDAsIDAsIDAsIDApJyxcblxuICAgICAgICAgICAgICAgIGZpbGw6IHRoaXMuZHJhd0luZm8ubWFpbkNvbG9yLFxuICAgICAgICAgICAgICAgIGZpbGxXZWlnaHQ6IDAuNSxcbiAgICAgICAgICAgICAgICBmaWxsU3R5bGU6ICdzb2xpZCcsXG5cbiAgICAgICAgICAgICAgICByb3VnaG5lc3M6IDAuNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmRyYXcoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCAqIGFzIEVuZ2luZSBmcm9tICdAZW5naW5lJztcbmltcG9ydCBFdmVudEJvZHkgZnJvbSAnLi9FdmVudEJvZHknO1xuaW1wb3J0IEV2ZW50QXhpcyBmcm9tICcuL0V2ZW50QXhpcyc7XG5pbXBvcnQgRXZlbnRNYXJrIGZyb20gJy4vRXZlbnRNYXJrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnQgZXh0ZW5kcyBFbmdpbmUuRXZlbnQge1xuICAgIHRoZW1lID0gJ2NvbG9ycyc7XG5cbiAgICBib2R5Q29uc3RydWN0b3IgPSBFdmVudEJvZHk7XG4gICAgYXhpc0NvbnN0cnVjdG9yID0gRXZlbnRBeGlzO1xuICAgIG1hcmtDb25zdHJ1Y3RvciA9IEV2ZW50TWFyaztcblxufVxuIiwiaW1wb3J0IHJvdWdoanMgZnJvbSAncm91Z2hqcyc7XG5pbXBvcnQgKiBhcyBFbmdpbmUgZnJvbSAnQGVuZ2luZSc7XG5pbXBvcnQgQXhpcyBmcm9tICcuL0F4aXMnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuaW1wb3J0IHsgUm91Z2hDYW52YXMgfSBmcm9tICdyb3VnaGpzL2Jpbi9jYW52YXMnO1xuaW1wb3J0IENvbG9yUGlja2VyIGZyb20gJy4vZXh0ZW5zaW9ucy9Db2xvclBpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgRW5naW5lLlRpbWVsaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihpbmZvIDpQYXJ0aWFsPEVuZ2luZS5UaW1lbGluZUNvbnN0cnVjdEluZm8+KSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICAuLi5FbmdpbmUuVGltZWxpbmUuZGVmYXVsdEdyaWQsXG4gICAgICAgICAgICAgICAgc2NhbGVIZWlnaHQ6IDMsXG4gICAgICAgICAgICAgICAgYXhpc1dpZHRoOiA1LFxuICAgICAgICAgICAgICAgIG1hcmtXaWR0aDogMTAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXh0OiBuZXcgRW5naW5lLkV4dGVuc2lvbk1hbmFnZXIsXG4gICAgICAgICAgICAuLi5pbmZvLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmV4dC5leHRlbnNpb25zLnB1c2goXG4gICAgICAgICAgICBuZXcgQ29sb3JQaWNrZXIodGhpcy5leHQpLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmV4dC5leHRyYURhdGEucm91Z2hDYW52YXMgPSByb3VnaGpzLmNhbnZhcyh0aGlzLmNhbnZhcykgYXMgUm91Z2hDYW52YXM7XG4gICAgfVxuXG4gICAgdGhlbWUgPSAnY29sb3JzJztcblxuICAgIGF4aXNDb25zdHJ1Y3RvciA9IEF4aXM7XG4gICAgZXZlbnRDb25zdHJ1Y3RvciA9IEV2ZW50O1xufVxuIiwiaW1wb3J0IHsgVGltZWxpbmUsIEV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tICcuLyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkcmF3KFxuICAgIGVsOiBzdHJpbmcgfCBIVE1MRWxlbWVudCxcbiAgICBldmVudHM6VGltZWxpbmVbJ2RyYXdJbmZvJ11bJ2V2ZW50cyddLFxuKTpQcm9taXNlPFRpbWVsaW5lPiB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGNhbnZhcyB9ID0gbW91bnQoZWwpO1xuICAgIGNvbnN0IHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcbiAgICAgICAgY2FudmFzLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGV4dDogbmV3IEV4dGVuc2lvbk1hbmFnZXIsXG4gICAgfSk7XG5cbiAgICB0aW1lbGluZS5kcmF3SW5mby5ldmVudHMgPSBldmVudHM7XG4gICAgYXdhaXQgdGltZWxpbmUuYXBwbHkoKTtcbiAgICB0aW1lbGluZS5kcmF3KCk7XG4gICAgcmV0dXJuIHRpbWVsaW5lO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZHJhd1dpdGhBbmltYXRpb24oXG4gICAgZWw6IHN0cmluZyB8IEhUTUxFbGVtZW50LFxuICAgIGV2ZW50czpUaW1lbGluZVsnZHJhd0luZm8nXVsnZXZlbnRzJ10sXG4pOlByb21pc2U8VGltZWxpbmU+IHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgY2FudmFzIH0gPSBtb3VudChlbCk7XG4gICAgY29uc3QgdGltZWxpbmUgPSBuZXcgVGltZWxpbmUoe1xuICAgICAgICBjYW52YXMsXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgZXh0OiBuZXcgRXh0ZW5zaW9uTWFuYWdlcih7XG4gICAgICAgICAgICBicmVha3BvaW50QW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgcGxheUFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgdGltZWxpbmUuZHJhd0luZm8uZXZlbnRzID0gZXZlbnRzO1xuICAgIGF3YWl0IHRpbWVsaW5lLmFwcGx5KCk7XG4gICAgdGltZWxpbmUuZHJhdygpO1xuICAgIHJldHVybiB0aW1lbGluZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRyYXdGcm9tKFxuICAgIGVsOiBzdHJpbmcgfCBIVE1MRWxlbWVudCxcbiAgICBkYXRhOiBhbnksXG4pOlByb21pc2U8VGltZWxpbmU+IHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgY2FudmFzIH0gPSBtb3VudChlbCk7XG4gICAgY29uc3QgdGltZWxpbmUgPSBuZXcgVGltZWxpbmUoe1xuICAgICAgICBjYW52YXMsXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgZXh0OiBuZXcgRXh0ZW5zaW9uTWFuYWdlcih7XG4gICAgICAgICAgICBicmVha3BvaW50QW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgcGxheUFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdGltZWxpbmUuZHJhd0Zyb20oZGF0YSk7XG4gICAgcmV0dXJuIHRpbWVsaW5lO1xufVxuXG5mdW5jdGlvbiBtb3VudChlbDpzdHJpbmcgfCBFbGVtZW50KSA6e2NvbnRhaW5lcjpIVE1MRWxlbWVudCwgY2FudmFzOkhUTUxDYW52YXNFbGVtZW50fSB7XG4gICAgY29uc3QgY29udGFpbmVyOkhUTUxFbGVtZW50ID0gdHlwZW9mIGVsID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpISBhcyBIVE1MRWxlbWVudFxuICAgICAgICA6IGVsIGFzIEhUTUxFbGVtZW50XG4gICAgO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hvcnQtbmlnaHQnLCAnY29sb3JzJywgJ2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nob3J0LW5pZ2h0JywgJ2NvbG9ycycsICdjYW52YXMnKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBjYW52YXMgfTtcblxufVxuIiwiaW1wb3J0IHsgRXh0ZW5zaW9uLCBFeHRlbnNpb25NYW5hZ2VyIH0gZnJvbSAnQC9lbmdpbmUvZXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBUaW1lbGluZSwgRXZlbnQsIEV2ZW50Qm9keSwgRXZlbnRNYXJrLCBFdmVudEF4aXMsIENvbXBvbmVudCB9IGZyb20gJ0BlbmdpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclBpY2tlciBpbXBsZW1lbnRzIFBhcnRpYWw8RXh0ZW5zaW9uPiB7XG4gICAgY29sb3JzID0gWydyZ2IoMjEzLCA1NywgMzgpJywgJ3JnYigyNTIsIDIwMCwgMjkpJywgJ3JnYigwLCAxNjMsIDIwMSknXTtcbiAgICBzdGFydEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XG4gICAgY29uc3RydWN0b3IocHVibGljIGV0eDpFeHRlbnNpb25NYW5hZ2VyKSB7fVxuICAgIGFzeW5jIG9uQXBwbHkoY29tcDpDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKFRpbWVsaW5lLmlzKGNvbXApKSB0aGlzLmNyZWF0ZUNvbG9yKGNvbXApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBFdmVudEJvZHkuaXMoY29tcClcbiAgICAgICAgICAgIHx8IEV2ZW50TWFyay5pcyhjb21wKVxuICAgICAgICAgICAgfHwgRXZlbnRBeGlzLmlzKGNvbXApXG4gICAgICAgICkgdGhpcy5zZXRDb2xvckludG9EcmF3SW5mbyhjb21wKTtcbiAgICB9XG5cbiAgICBvbkNvbnN0cnVjdChjb21wOkNvbXBvbmVudCkge1xuICAgICAgICBpZiAoRXZlbnQuaXMoY29tcCkpIGNvbXAuZXh0cmFEYXRhLm1haW5Db2xvciA9ICcjMDAwJztcbiAgICB9XG5cbiAgICBzZXRDb2xvckludG9EcmF3SW5mbyhjb21wOkV2ZW50Qm9keXxFdmVudE1hcmt8RXZlbnRBeGlzKSB7XG4gICAgICAgIGNvbnN0IGV0eCA9IHRoaXMuZXR4O1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb21wLmRyYXdJbmZvLCAnbWFpbkNvbG9yJywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldHguZ2V0UGFyZW50KGNvbXApLmV4dHJhRGF0YS5tYWluQ29sb3I7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb2xvcih0aW1lbGluZTpUaW1lbGluZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVsaW5lLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29sb3JJbmRleCA9IChpICsgdGhpcy5zdGFydEluZGV4KSAlIHRoaXMuY29sb3JzLmxlbmd0aDtcbiAgICAgICAgICAgIHRpbWVsaW5lLmV2ZW50c1tpXS5leHRyYURhdGEubWFpbkNvbG9yID0gdGhpcy5jb2xvcnNbY29sb3JJbmRleF07XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJjb25zb2xlLmxvZygn44GK44GkIGNvbG9ycyEnKTtcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaW1lbGluZSB9IGZyb20gJy4vVGltZWxpbmUnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEF4aXMgfSBmcm9tICcuL0F4aXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBeGlzU2NhbGUgfSBmcm9tICcuL0F4aXMvQXhpc1NjYWxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXhpc01pbGVzdG9uZSB9IGZyb20gJy4vQXhpcy9BeGlzTWlsZXN0b25lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXhpc0JvZHkgfSBmcm9tICcuL0F4aXMvQXhpc0JvZHknO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEV2ZW50IH0gZnJvbSAnLi9FdmVudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV2ZW50TWFyayB9IGZyb20gJy4vRXZlbnQvRXZlbnRNYXJrJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXZlbnRBeGlzIH0gZnJvbSAnLi9FdmVudC9FdmVudEF4aXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdmVudEJvZHkgfSBmcm9tICcuL0V2ZW50L0V2ZW50Qm9keSc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tcG9uZW50IH0gZnJvbSAnQGVuZ2luZS9jb21tb24vQ29tcG9uZW50JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2xvclBpY2tlciB9IGZyb20gJy4vZXh0ZW5zaW9ucy9Db2xvclBpY2tlcic7XG5leHBvcnQge1xuICAgIEV4dGVuc2lvbk1hbmFnZXIsXG4gICAgQm94RWxlbWVudEdlbmVyYXRvcixcbiAgICBHZW5lcmF0b3JJZCxcbiAgICBQb3NpdGlvbkNvdW50ZXIsXG4gICAgQnJlYWtwb2ludEFuaW1hdGlvbixcbiAgICBDb25mbGljdEZpeGVyLFxufSBmcm9tICdAZW5naW5lL2V4dGVuc2lvbnMnO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==