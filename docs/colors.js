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
        date: '2014-5',
        title: '开始 自学Web开发',
    }, {
        title: '入学 青岛理工大学',
        date: '2014-9-1',
        endDate: '2018-7-29',
    }, {
        date: '2014-12',
        title: '青理Web开发协会',
        text: '创建青理Web开发协会，担当会长',
        endDate: '2016-6',
        endText: '协会换届',
    }, {
        date: '2015-6',
        title: '注册 青岛卓然独立网络科技有限公司',
        endDate: '2017-6-19',
    }, {
        title: '360前端星计划',
        text: '《360前端星计划》由360前端团队和校园招聘团队合办，面向在校大学生，为培养最优秀最有潜力的前端人才举办的前端技术系列课程',
        date: '2017-4-9',
        endDate: '2017-4-14',
        folded: true,
    }, {
        title: 'Mozilla 实习',
        date: '2017-7-14',
        endDate: '2018-2-9',
    }, {
        title: '百度 KITT.AI 实习',
        date: '2018-3-21',
        endDate: '2018-5-28',
        endText: 'Team 被解散',
    }, {
        title: 'KITT.AI 团队 2倍简单奖',
        date: '2018-6-29',
    }, {
        title: '百度 SWAN 团队',
        date: '2018-7-4',
        endDate: 'now',
    }, {
        title: 'Mozilla 实习 123',
        date: '2017-9-10',
    }, {
        title: 'Mozilla 实习 233',
        date: '2017-8-10',
    }, {
        title: '2015-7-25',
        date: '2015-7-25',
    }, {
        title: '2015-1',
        date: '2015-1',
    }, {
        title: '2015-5',
        date: '2015-5-1',
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
exports.push([module.i, ".short-night {\n  position: relative;\n  box-sizing: border-box; }\n  .short-night {\n    margin: 0;\n    padding: 0; }\n  .short-night.axis_milestone {\n    font-family: sans-serif;\n    position: absolute;\n    padding: 5px 10px; }\n  .short-night.event_body {\n    position: absolute;\n    color: #000;\n    padding: 7px 10px 7px 5px;\n    text-align: right; }\n    .short-night.event_body.folded {\n      cursor: pointer; }\n      .short-night.event_body.folded .title, .short-night.event_body.folded .foldedText {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap; }\n    .short-night.event_body .title, .short-night.event_body .foldedText {\n      font-size: 1em;\n      padding-left: 10px; }\n    .short-night.event_body .date {\n      font-size: 0.6em;\n      font-weight: normal;\n      font-style: italic; }\n  .short-night.event_axis-endText {\n    position: absolute;\n    padding: 0 0 2px 3px;\n    font-size: 0.8em;\n    text-indent: 0.5em; }\n", ""]);

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
exports.push([module.i, ".short-night.colors.axis_milestone {\n  font-size: 18px;\n  color: #333;\n  padding: 2px 7px; }\n\n.short-night.colors.event_body {\n  color: #fff;\n  padding: 7px 10px 7px 5px;\n  text-align: right; }\n  .short-night.colors.event_body .folded {\n    cursor: pointer; }\n    .short-night.colors.event_body .folded .title, .short-night.colors.event_body .folded .foldedText {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n  .short-night.colors.event_body .title, .short-night.colors.event_body .foldedText {\n    font-size: 1em;\n    padding-left: 10px; }\n  .short-night.colors.event_body .date {\n    font-size: 0.6em;\n    font-weight: normal;\n    font-style: italic; }\n\n.short-night.colors.event_axis-endText {\n  padding: 0 0 2px 3px;\n  font-size: 0.8em; }\n", ""]);

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
            // @ts-ignore
            if (!this.body)
                this.body = new this.bodyConstructor(this);
            this.body.drawInfo.length = this.drawInfo.length;
            this.body.drawInfo.width = this.grid.axisWidth;
            this.body.drawInfo.start = this.grid.axisStart;
            yield this.body.apply();
            // Clear
            this.milestones.forEach(m => m.destroy());
            this.milestones.length = 0;
            this.scales.forEach(s => s.destroy());
            this.scales.length = 0;
            // Init scales
            for (const position of this.drawInfo.scales) {
                if (this.drawInfo.milestones.some(m => m.position === position))
                    continue;
                // @ts-ignore
                const scale = new this.scaleConstructor(this);
                scale.drawInfo.bodyDrawInfo = functions_1.deepFreeze(this.body.drawInfo);
                scale.drawInfo.alignY = position; // recomputed in PositionCounter
                scale.drawInfo.height = this.grid.scaleHeight; // recomputed in PositionCounter
                this.scales.push(scale);
            }
            // Init milestones
            for (const { position, text } of this.drawInfo.milestones) {
                // @ts-ignore
                const milestone = new this.milestoneConstructor(this);
                milestone.drawInfo.bodyDrawInfo = functions_1.deepFreeze(this.body.drawInfo);
                milestone.drawInfo.alignY = position; // recomputed in PositionCounter
                milestone.drawInfo.text = text;
                this.milestones.push(milestone);
            }
            yield Promise.all([
                this.milestones.map(m => m.apply()),
                this.scales.map(s => s.apply()),
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
        this.element.classList.add('event_axis-endText');
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
                width: 300,
                height: 0,
            },
        };
        this.ext.onConstruct(this);
    }
    createElement() {
        const flag = super.createElement(); // Must return this flag
        this.resetElement();
        this.element.style.left = `${this.drawInfo.box.x}px`;
        this.element.style.top = `${this.drawInfo.box.y}px`;
        return flag;
    }
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.createElement();
            this.initBoxFromElement();
            this.createElement();
            this.element.style.visibility = 'hidden';
            return _super("apply").call(this);
        });
    }
    draw() {
        this.createElement();
        return super.draw();
    }
    resetElement() {
        if (this.drawInfo.folded) { // TODO: reconstruct here
            this.element.innerHTML = `
                <h4 class="foldedText">${this.drawInfo.foldedText || this.drawInfo.title}</h4>
                <h5 class="date">${new Date(this.drawInfo.date).toDateString()}</h5>
            `;
        }
        else {
            this.element.innerHTML = `
                <h4 class="title">${this.drawInfo.title}</h4>
                <h5 class="date">${new Date(this.drawInfo.date).toDateString()}</h5>
                ${this.drawInfo.contentText ? `<p>${this.drawInfo.contentText}</p>` : ''}
            `;
        }
        if (this.drawInfo.folded) {
            this.element.classList.add('folded');
        }
        else {
            this.element.classList.remove('folded');
        }
        Object.assign(this.element.style, {
            left: 0,
            top: 0,
            width: null,
            height: null,
            maxWidth: `${this.drawInfo.maxWidth}px`,
        });
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
            bodyWidth: 300,
            date: null,
            title: null,
            folded: false,
            foldedText: null,
            box: {
                x: 0,
                y: 0,
                width: 500,
                height: 500,
            },
        };
        this.mark = null;
        this.body = null;
        this.axis = null;
        this.grid = props.grid;
        this.ext.onConstruct(this);
    }
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            if (!this.mark)
                this.mark = new this.markConstructor(this);
            this.mark.drawInfo.target = this.drawInfo.target;
            this.mark.drawInfo.width = this.grid.markWidth;
            this.mark.drawInfo.height = this.grid.markHeight;
            yield this.mark.apply();
            // @ts-ignore
            if (!this.body)
                this.body = new this.bodyConstructor(this);
            this.body.drawInfo.markDrawInfo = functions_1.deepFreeze(this.mark.drawInfo);
            this.body.drawInfo.maxWidth = this.grid.eventWidth;
            this.body.drawInfo.date = this.drawInfo.date;
            this.body.drawInfo.title = this.drawInfo.title;
            this.body.drawInfo.contentText = this.drawInfo.contentText;
            this.body.drawInfo.folded = this.drawInfo.folded;
            this.body.drawInfo.foldedText = this.drawInfo.foldedText;
            this.body.drawInfo.offset = Object.assign({}, this.drawInfo.offset);
            yield this.body.apply();
            if (this.drawInfo.axisLength) {
                // @ts-ignore
                const axis = this.axis || new this.axisConstructor(this);
                axis.drawInfo.axisBodyDrawInfo = functions_1.deepFreeze(this.ext.components[definitions_1.SN.Axis][0].drawInfo);
                axis.drawInfo.markDrawInfo = functions_1.deepFreeze(this.mark.drawInfo);
                axis.drawInfo.offsetX = this.grid.minEventAxisOffset;
                axis.drawInfo.length = this.drawInfo.axisLength;
                axis.drawInfo.text = this.drawInfo.axisText;
                yield axis.apply();
                this.axis = axis;
            }
            else if (this.axis) {
                this.axis.destroy();
                this.axis = null;
            }
            this.drawInfo.box = functions_1.mergeBox(this.body.drawInfo.box, this.mark.drawInfo.box);
            if (this.axis) {
                this.drawInfo.box = functions_1.mergeBox(this.drawInfo.box, this.axis.drawInfo.box);
            }
            return _super("apply").call(this);
        });
    }
    destroy() {
        this.mark.destroy();
        this.body.destroy();
        this.axis && this.axis.destroy();
        return super.destroy();
    }
    hide() {
        this.mark.hide();
        this.body.hide();
        this.axis && this.axis.hide();
        return super.hide();
    }
    draw() {
        this.body.draw();
        this.axis && this.axis.draw();
        this.mark.draw();
        return super.draw();
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
class Timeline extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = definitions_1.SN.Timeline;
        /**
         * All component's config of what style to draw.
         * E.g. The border width of Axis.
         * Must be filled before apply() called.
         * */
        this.grid = Timeline.defaultGrid;
        this.runtime = {};
        this.drawInfo = {
            box: { x: 0, y: 0, width: 0, height: 0 },
            events: [],
        };
        this.events = [];
        this.axis = null;
        this.grid = props.grid;
        this.ext.onConstruct(this);
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
    initRuntime(runtime) {
        this.runtime = Object.create(runtime || Object.prototype);
        this.runtime.startDate = ('startDate' in this.runtime)
            ? new Date(this.runtime.startDate).toISOString()
            : this.countStartData().toISOString();
        this.runtime.endDate = ('endDate' in this.runtime)
            ? new Date(this.runtime.endDate).toISOString()
            : this.countEndData().toISOString();
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
            - definitions_1.DATE_COUNT_EXTRA[this.runtime.scaleBy || "day" /* Day */]).toISOString();
        this.runtime.endDate = new Date(new Date(this.runtime.endDate).getTime()
            + definitions_1.DATE_COUNT_EXTRA[this.runtime.scaleBy || "day" /* Day */]).toISOString();
        return runtime;
    }
    apply(runtime) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.initRuntime(runtime);
            this.canvas.width = this.grid.canvasWidth;
            this.canvas.height = this.runtime.axisLength + this.grid.axisStart.y * 2;
            // @ts-ignore
            if (!this.axis)
                this.axis = new this.axisConstructor(this);
            yield this.updateAxis();
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
    updateAxis() {
        return __awaiter(this, void 0, void 0, function* () {
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
                event.drawInfo.bodyWidth = this.grid.eventWidth;
                event.drawInfo.date = data.date;
                event.drawInfo.title = data.title;
                event.drawInfo.contentText = data.text;
                event.drawInfo.folded = Boolean(data.folded);
                event.drawInfo.foldedText = data.foldedText;
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
                    // @ts-ignore
                    scalesAndMilestones.push(new axis.scaleConstructor(this).importDrawInfo(scaleDrawInfo));
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
                events: timeline.events.map((event) => {
                    return {
                        drawInfo: event.drawInfo,
                        bodyDrawInfo: event.body.drawInfo,
                        markDrawInfo: event.mark.drawInfo,
                        axisDrawInfo: event.axis ? event.axis.drawInfo : null,
                    };
                }),
                axis: {
                    drawInfo: timeline.axis.drawInfo,
                    bodyDrawInfo: timeline.axis.body.drawInfo,
                    scalesDrawInfo: timeline.axis.scales.map(scale => scale.drawInfo),
                    milestonesDrawInfo: timeline.axis.milestones.map(milestone => milestone.drawInfo),
                },
            },
        })));
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
 * Create element following comp.drawInfo.box
 * @depend GeneratorId
 * */
class BoxElementGenerator {
    constructor(etx) {
        this.etx = etx;
    }
    /**
     * Create a element append to container.
     * The element size equal component.drawInfo.box
     * */
    onApply(comp) {
        return __awaiter(this, void 0, void 0, function* () {
            let elt = comp.extraData.boxElement;
            if (!elt) {
                elt = document.createElement(comp.name);
                elt.id = comp.extraData.id;
                comp.extraData.boxElement = elt;
            }
            for (const [key, value] of Object.entries(comp.drawInfo)) {
                if (typeof value === 'undefined')
                    continue;
                elt.dataset[key] = JSON.stringify(value);
            }
            Object.assign(elt.style, {
                position: 'absolute',
                left: `${comp.drawInfo.box.x}px`,
                top: `${comp.drawInfo.box.y}px`,
                width: `${comp.drawInfo.box.width}px`,
                height: `${comp.drawInfo.box.height}px`,
                zIndex: 9999999 - ~~(comp.drawInfo.box.width * comp.drawInfo.box.height),
            });
            comp.container.appendChild(elt);
        });
    }
    /**
     * Remove element created in onApply
     * */
    onDestroy(comp) {
        const elt = comp.extraData.boxElement;
        if (elt && elt.parentNode) {
            elt.parentNode.removeChild(elt);
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
class BreakpointAnimation {
    constructor(etx, { breakpoints = [], playAnimation = false } = {}) {
        this.etx = etx;
        this.stepIn = null;
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
        if (this.stepIn) {
            this.stepIn();
            this.stepIn = null;
        }
        else
            console.error('cannot next');
    }
    /**
     * Blocking at a breakpoint util next called
     * */
    block(name, { onBlock, onNext, components = [], protagonist, forward = false } = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const animationInterval = name === Breakpoint.DrawFrom
                ? 300
                : forward ? 200 : 300;
            const getMoveTarget = function () {
                const topPadding = 100;
                if (protagonist)
                    return protagonist.drawInfo.box.y - topPadding;
                if (components && components.length) {
                    const getTopped = (compList) => compList.find(comp1 => compList.every(comp2 => comp1.drawInfo.box.y >= comp2.drawInfo.box.y));
                    const componentListWithoutAxis = components.filter(comp => !Axis_1.default.is(comp) && !AxisBody_1.default.is(comp));
                    return getTopped(componentListWithoutAxis).drawInfo.box.x - topPadding;
                }
                return null;
            };
            if (this.breakpoints.includes(name)) {
                console.log(`blocking at ${name}`);
                if (this.playAnimation) {
                    const scrollTarget = getMoveTarget();
                    if (scrollTarget && !forward) {
                        new moveto({ duration: 500 }).move(scrollTarget - document.documentElement.scrollTop, { callback: () => setTimeout(() => this.next(), animationInterval) });
                    }
                    else {
                        setTimeout(() => this.next(), animationInterval);
                    }
                }
                return (() => __awaiter(this, void 0, void 0, function* () {
                    if (onBlock)
                        yield onBlock();
                    yield Promise.all(components.map(c => c.draw()));
                    yield new Promise((resolve) => {
                        this.stepIn = () => __awaiter(this, void 0, void 0, function* () {
                            if (onNext)
                                yield onNext();
                            yield Promise.all(components.map(c => c.hide()));
                            resolve();
                        });
                    });
                }))();
            }
        });
    }
}
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
            if ((yield this.fixAll()) === "no-conflict" /* NoConflict */) {
                this.counter = 0;
                return;
            }
            if (++this.counter > 10) { // TODO: make configurable
                const msg = 'Too many times of try fix conflict.';
                if (definitions_1.DEBUG)
                    throw new Error(msg);
                else
                    console.warn(msg);
            }
            return Promise.resolve().then(() => timeline.apply({
                axisLength: timeline.runtime.axisLength * 1.1,
            }));
        });
    }
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
 * Set a id for every Component in component.extraData.id.
 * Create a global variable using component's id if DEBUG is true when comp.apply fired
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
        // Now comp.name is undefined
        Object.defineProperty(comp.extraData, 'id', {
            get() {
                return `${comp.name}_${randomString}`;
            },
        });
    }
    /**
     * If in debug mode, set a global variable
     * from component.extraData.id to point the component.
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

/***/ "./src/engine/extensions/index.js":
/*!****************************************!*\
  !*** ./src/engine/extensions/index.js ***!
  \****************************************/
/*! exports provided: Base, ExtensionManager, BoxElementGenerator, GeneratorId, PositionCounter, BreakpointAnimation, ConflictFixer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionManager", function() { return ExtensionManager; });
/* harmony import */ var _engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/engine/common/definitions */ "./src/engine/common/definitions.ts");
/* harmony import */ var _engine_common_definitions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _engine_extensions_BoxElementGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/engine/extensions/BoxElementGenerator */ "./src/engine/extensions/BoxElementGenerator.ts");
/* harmony import */ var _engine_extensions_BoxElementGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_engine_extensions_BoxElementGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _engine_extensions_GeneratorId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/engine/extensions/GeneratorId */ "./src/engine/extensions/GeneratorId.ts");
/* harmony import */ var _engine_extensions_GeneratorId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_engine_extensions_GeneratorId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _engine_extensions_position_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/engine/extensions/position-counter */ "./src/engine/extensions/position-counter.ts");
/* harmony import */ var _engine_extensions_position_counter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_engine_extensions_position_counter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _engine_extensions_BreakpointAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/engine/extensions/BreakpointAnimation */ "./src/engine/extensions/BreakpointAnimation.ts");
/* harmony import */ var _engine_extensions_BreakpointAnimation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_engine_extensions_BreakpointAnimation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _engine_extensions_ConflictFixer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/engine/extensions/ConflictFixer */ "./src/engine/extensions/ConflictFixer/index.ts");
/* harmony import */ var _engine_extensions_ConflictFixer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_engine_extensions_ConflictFixer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _engine_Axis_AxisBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/engine/Axis/AxisBody */ "./src/engine/Axis/AxisBody.ts");
/* harmony import */ var _engine_Axis_AxisBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_engine_Axis_AxisBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _engine_Axis_AxisMilestone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/engine/Axis/AxisMilestone */ "./src/engine/Axis/AxisMilestone.ts");
/* harmony import */ var _engine_Axis_AxisMilestone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_engine_Axis_AxisMilestone__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _engine_Axis_AxisScale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/engine/Axis/AxisScale */ "./src/engine/Axis/AxisScale.ts");
/* harmony import */ var _engine_Axis_AxisScale__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_engine_Axis_AxisScale__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _engine_Event_EventBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/engine/Event/EventBody */ "./src/engine/Event/EventBody.ts");
/* harmony import */ var _engine_Event_EventBody__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_engine_Event_EventBody__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _engine_Event_EventAxis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/engine/Event/EventAxis */ "./src/engine/Event/EventAxis.ts");
/* harmony import */ var _engine_Event_EventAxis__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_engine_Event_EventAxis__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _engine_Event_EventMark__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/engine/Event/EventMark */ "./src/engine/Event/EventMark.ts");
/* harmony import */ var _engine_Event_EventMark__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_engine_Event_EventMark__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _engine_Axis__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/engine/Axis */ "./src/engine/Axis/index.ts");
/* harmony import */ var _engine_Axis__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_engine_Axis__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _engine_Event__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/engine/Event */ "./src/engine/Event/index.ts");
/* harmony import */ var _engine_Event__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_engine_Event__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "BoxElementGenerator", function() { return _engine_extensions_BoxElementGenerator__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "GeneratorId", function() { return _engine_extensions_GeneratorId__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PositionCounter", function() { return _engine_extensions_position_counter__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "BreakpointAnimation", function() { return _engine_extensions_BreakpointAnimation__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ConflictFixer", function() { return _engine_extensions_ConflictFixer__WEBPACK_IMPORTED_MODULE_5___default.a; });















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
    this.breakpoint = new _engine_extensions_BreakpointAnimation__WEBPACK_IMPORTED_MODULE_4___default.a(this, breakpointAnimation);

    this.extensions = [
        new Base(this),
        new _engine_extensions_GeneratorId__WEBPACK_IMPORTED_MODULE_2___default.a(this),
        new _engine_extensions_position_counter__WEBPACK_IMPORTED_MODULE_3___default.a(this),
        new _engine_extensions_ConflictFixer__WEBPACK_IMPORTED_MODULE_5___default.a(this),
        this.breakpoint,
    ];

    if (_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["DEBUG"]) {
        this.extensions.push(
            new _engine_extensions_BoxElementGenerator__WEBPACK_IMPORTED_MODULE_1___default.a(this),
        );
    }
}
ExtensionManager.prototype.getParent = function getParent(comp) {
    if (_engine_Axis__WEBPACK_IMPORTED_MODULE_12___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Timeline][0];
    if (_engine_Event__WEBPACK_IMPORTED_MODULE_13___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Timeline][0];
    if (_engine_Axis_AxisBody__WEBPACK_IMPORTED_MODULE_6___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Axis][0];
    if (_engine_Axis_AxisMilestone__WEBPACK_IMPORTED_MODULE_7___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Axis][0];
    if (_engine_Axis_AxisScale__WEBPACK_IMPORTED_MODULE_8___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Axis][0];
    if (_engine_Event_EventBody__WEBPACK_IMPORTED_MODULE_9___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Event].find(event => event.body === comp);
    if (_engine_Event_EventAxis__WEBPACK_IMPORTED_MODULE_10___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Event].find(event => event.axis === comp);
    if (_engine_Event_EventMark__WEBPACK_IMPORTED_MODULE_11___default.a.is(comp)) return this.components[_engine_common_definitions__WEBPACK_IMPORTED_MODULE_0__["SN"].Event].find(event => event.mark === comp);

    throw new TypeError(`Cannot find parent of ${comp.constructor.name}`);
};

// Add methods on ExtensionManager.prototype from METHODS
METHODS.forEach((methodName) => {
    ExtensionManager.prototype[methodName] = async function extensionManagerMethod(...args) {
        for (const extension of this.extensions) { // eslint-disable-line no-restricted-syntax
            if (methodName in extension) {
                if (methodName === 'onConstruct') {
                    extension[methodName](...args);
                } else {
                    await extension[methodName](...args); // eslint-disable-line no-await-in-loop
                }
            }
        }
    };
});








/***/ }),

/***/ "./src/engine/extensions/position-counter.ts":
/*!***************************************************!*\
  !*** ./src/engine/extensions/position-counter.ts ***!
  \***************************************************/
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
 * Milestone cannot occupy the space of Axis.
 * So we move Event, Scale and Milestone if they upper has any Milestone.
 * */
class PositionCounter {
    constructor(etx) {
        this.etx = etx;
        this.pushConfigs = [];
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
    onApply(comp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Axis_1.default.is(comp))
                return yield this.adjustAxis(comp);
            if (Timeline_1.default.is(comp))
                return yield this.adjustEvent(comp);
        });
    }
    onDestroy(comp) {
        while (true) {
            const index = this.pushConfigs.findIndex(config => config.component === comp);
            if (index === -1)
                break;
            else
                this.pushConfigs.splice(index, 1);
        }
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
    constructor(info) {
        super(info);
        this.theme = 'colors';
        this.roughCanvas = info.roughCanvas;
    }
    draw() {
        const box = this.drawInfo.box;
        this.roughCanvas.line(box.x + box.width / 2, box.y, box.x + box.width / 2, box.y + box.height, {
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
    constructor(info) {
        super(info);
        this.theme = 'colors';
        this.roughCanvas = info.roughCanvas;
    }
    draw() {
        const box = this.drawInfo.box;
        this.roughCanvas.rectangle(box.x, box.y, box.width, box.height, {
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
    constructor(info) {
        super(info);
        this.theme = 'colors';
        this.roughCanvas = info.roughCanvas;
    }
    draw() {
        const box = this.drawInfo.box;
        this.roughCanvas.rectangle(box.x, box.y, box.width, box.height, {
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
    constructor(info) {
        super(info);
        this.theme = 'colors';
        this.bodyConstructor = AxisBody_1.default;
        this.milestoneConstructor = AxisMilestone_1.default;
        this.scaleConstructor = AxisScale_1.default;
        this.roughCanvas = info.roughCanvas;
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
    constructor(info) {
        super(info);
        this.theme = 'colors';
        this.drawInfo = Object.assign({}, this.drawInfo, { mainColor: '' });
        this.roughCanvas = info.roughCanvas;
    }
    draw() {
        const strokeWidth = 1.5;
        const radius = 10;
        this.roughCanvas.linearPath([
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
        this.roughCanvas.circle(this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX, this.drawInfo.markDrawInfo.target.y - this.drawInfo.length, radius, {
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
    constructor(info) {
        super(info);
        this.theme = 'colors';
        this.drawInfo = Object.assign({}, this.drawInfo, { mainColor: '' });
        this.roughCanvas = info.roughCanvas;
    }
    draw() {
        const strokeWidth = 1.5;
        const box = functions_1.shrinkBox(this.drawInfo.box, strokeWidth);
        this.roughCanvas.rectangle(box.x, box.y, box.width, box.height, {
            strokeWidth: 0,
            stroke: 'rgba(0, 0, 0, 0)',
            fill: this.drawInfo.mainColor,
            fillWeight: 0.5,
            fillStyle: 'solid',
        });
        this.roughCanvas.line(this.drawInfo.markDrawInfo.target.x + 2, this.drawInfo.markDrawInfo.target.y, this.drawInfo.box.x + this.drawInfo.box.width - 2, this.drawInfo.markDrawInfo.target.y, {
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
    constructor(info) {
        super(info);
        this.theme = 'colors';
        this.drawInfo = Object.assign({}, this.drawInfo, { mainColor: '' });
        this.roughCanvas = info.roughCanvas;
    }
    draw() {
        this.roughCanvas.circle(this.drawInfo.target.x, this.drawInfo.target.y, this.drawInfo.width, {
            strokeWidth: 0,
            stroke: 'rgba(0, 0, 0, 0)',
            fill: this.drawInfo.mainColor,
            fillWeight: 0.5,
            fillStyle: 'solid',
            roughness: 0.5,
        });
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
    constructor(info) {
        super(info);
        this.theme = 'colors';
        this.bodyConstructor = EventBody_1.default;
        this.axisConstructor = EventAxis_1.default;
        this.markConstructor = EventMark_1.default;
        this.roughCanvas = info.roughCanvas;
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
        super(info);
        this.theme = 'colors';
        this.grid = Object.assign({}, Engine.Timeline.defaultGrid, { scaleHeight: 3, axisWidth: 5, markWidth: 10 });
        this.axisConstructor = Axis_1.default;
        this.eventConstructor = Event_1.default;
        this.ext.extensions.push(new ColorPicker_1.default(info.ext));
        this.roughCanvas = roughjs_1.default.canvas(this.canvas);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vdmV0by9kaXN0L21vdmVUby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vY2FudmFzLWFzeW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9jYW52YXMtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vY2FudmFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9maWxsZXJzL2RvdC1maWxsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL2ZpbGxlcnMvZmlsbGVyLXV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9maWxsZXJzL2ZpbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vZmlsbGVycy9oYWNodXJlLWZpbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vZmlsbGVycy9oYXRjaC1maWxsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL2ZpbGxlcnMvemlnemFnLWZpbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vZ2VuZXJhdG9yLWFzeW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9nZW5lcmF0b3ItYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vZ2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9nZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vcmVuZGVyZXItZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL3JvdWdoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9zdmctYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL3N2Zy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL3V0aWxzL2hhY2h1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9BeGlzL0F4aXNCb2R5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvQXhpcy9BeGlzTWlsZXN0b25lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvQXhpcy9BeGlzU2NhbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9BeGlzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvRXZlbnQvRXZlbnRBeGlzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvRXZlbnQvRXZlbnRCb2R5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvRXZlbnQvRXZlbnRNYXJrLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvRXZlbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9UaW1lbGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2NvbW1vbi9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9jb21tb24vZGVmaW5pdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9jb21tb24vZnVuY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9Cb3hFbGVtZW50R2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9CcmVha3BvaW50QW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9Db25mbGljdEZpeGVyL0V2ZW50QXhpczJFdmVudEF4aXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9leHRlbnNpb25zL0NvbmZsaWN0Rml4ZXIvRXZlbnRCb2R5MkF4aXNNaWxlc3RvbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9leHRlbnNpb25zL0NvbmZsaWN0Rml4ZXIvRXZlbnRCb2R5MkV2ZW50Qm9keUZsb2F0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9leHRlbnNpb25zL0NvbmZsaWN0Rml4ZXIvRXZlbnRCb2R5MkV2ZW50Qm9keU1vdmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9Db25mbGljdEZpeGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9HZW5lcmF0b3JJZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2V4dGVuc2lvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9leHRlbnNpb25zL3Bvc2l0aW9uLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3N0eWxlcy5zY3NzPzlmNWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lcy9jb2xvcnMvQXhpcy9BeGlzQm9keS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9BeGlzL0F4aXNNaWxlc3RvbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lcy9jb2xvcnMvQXhpcy9BeGlzU2NhbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lcy9jb2xvcnMvQXhpcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9FdmVudC9FdmVudEF4aXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lcy9jb2xvcnMvRXZlbnQvRXZlbnRCb2R5LnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvY29sb3JzL0V2ZW50L0V2ZW50TWFyay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9FdmVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9UaW1lbGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9lbnRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9leHRlbnNpb25zL0NvbG9yUGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvY29sb3JzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvY29sb3JzL3N0eWxlcy5zY3NzP2MyMDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9IQTtBQUFBO0FBQUE7QUFBQTtBQUE2QztBQUNHO0FBQ3pDLDBCQUEwQiw0REFBZTtBQUNoRDtBQUNBO0FBQ0EsdUJBQXVCLHlEQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFBQTtBQUFBO0FBQTRGO0FBQ3JGO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTSxxQ0FBcUM7QUFDdkUsc0JBQXNCLDRFQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTSxxQ0FBcUM7QUFDdkUsc0JBQXNCLDRFQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdFQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNhO0FBQzVDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsbUJBQW1CLGlEQUFPO0FBQzFCLG1CQUFtQixtQkFBbUI7QUFDdEMsdUJBQXVCLGlEQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4REFBZTtBQUN0QztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGdCQUFnQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUQ7QUFDRjtBQUNGO0FBQ0o7QUFDekM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsMkRBQVk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMseURBQVc7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMscURBQVM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDZEQUFhO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBZ0Y7QUFDekU7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0RUFBc0I7QUFDNUM7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLHNCQUFzQiw0RUFBc0I7QUFDNUM7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBaUQ7QUFDMUMsMEJBQTBCLDZEQUFhO0FBQzlDO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSxvQ0FBb0M7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sb0NBQW9DO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQWlEO0FBQzFDLDJCQUEyQiw2REFBYTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFzRDtBQUMvQyxrQ0FBa0Msa0VBQWtCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hIQTtBQUFBO0FBQUE7QUFBdUQ7QUFDdkQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJFQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhLEdBQUcsYUFBYTtBQUNqRCwyQkFBMkIsbUJBQW1CO0FBQzlDLHVCQUF1QixFQUFFLElBQUksYUFBYSxHQUFHLGFBQWE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msb0JBQW9CLEdBQUcsb0JBQW9CO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxRQUFRLEdBQUcsUUFBUTtBQUNuRDtBQUNBO0FBQ0EsZ0NBQWdDLFFBQVEsR0FBRyxRQUFRLElBQUksUUFBUSxHQUFHLFFBQVEsSUFBSSxRQUFRLEdBQUcsUUFBUTtBQUNqRztBQUNBO0FBQ0EsZ0NBQWdDLFFBQVEsR0FBRyxRQUFRLElBQUksUUFBUSxHQUFHLFFBQVE7QUFDMUU7QUFDQTtBQUNBLGdDQUFnQyxRQUFRLEdBQUcsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5TEE7QUFBQTtBQUFBO0FBQXNEO0FBQy9DLDZCQUE2QixrRUFBa0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0hBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDZCQUE2QixzQkFBc0I7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIseUJBQXlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtSEFBbUg7QUFDako7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLDhCQUE4QixtSEFBbUg7QUFDako7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1IQUFtSDtBQUNqSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsOEJBQThCLG1IQUFtSDtBQUNqSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkEsNEdBQWlEO0FBQ2pELGtIQUFnRDtBQWNoRDs7O0tBR0s7QUFDTCxjQUF1QyxTQUFRLG1CQUFTO0lBQ3BELFlBQVksS0FBOEI7UUFDdEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSWpCLFNBQUksR0FBRyxnQkFBRSxDQUFDLFFBQVEsQ0FBQztRQUNuQixhQUFRLEdBQWE7WUFDakIsR0FBRyxFQUFFO2dCQUNELENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSxDQUFDO2FBQ1o7WUFDRCxNQUFNLEVBQUUsQ0FBQztZQUNULEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFO2dCQUNILENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2FBQ1A7U0FDSixDQUFDO1FBakJFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFrQkssS0FBSzs7O1lBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUc7Z0JBQ2hCLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQztnQkFDbEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7Z0JBQzFCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07YUFDL0IsQ0FBQztZQUNGLE9BQU8sZUFBVyxZQUFHO1FBQ3pCLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQUUsQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztDQUNKO0FBbkNELDJCQW1DQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REQsNEdBQW9EO0FBQ3BELDRHQUFpRDtBQUNqRCxrSEFBZ0Q7QUFjaEQ7OztLQUdLO0FBQ0wsbUJBQTRDLFNBQVEsbUJBQVM7SUFDekQsWUFBWSxLQUE4QjtRQUN0QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFJakIsU0FBSSxHQUFHLGdCQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3hCLGFBQVEsR0FBWTtZQUNoQixZQUFZLEVBQUUsRUFBUztZQUN2QixNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxLQUFLO1lBRVgsR0FBRyxFQUFFO2dCQUNELENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSxDQUFDO2FBQ1o7U0FDSixDQUFDO1FBZkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWdCRCxhQUFhO1FBQ1QsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsd0JBQXdCO1FBRTVELElBQUksQ0FBQyxPQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRTdDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsb0JBQVEsQ0FBQyxJQUFJLENBQUMsT0FBUSxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7Y0FDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDO2NBQ3hDLEtBQUssR0FBRyxDQUFDLENBQ2Q7UUFDRCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxPQUFRLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRW5DLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDSyxLQUFLOzs7WUFDUCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxvQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFRLENBQUMsQ0FBQztZQUU1QyxPQUFPLGVBQVcsWUFBRztRQUN6QixDQUFDO0tBQUE7SUFDRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDLElBQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGdCQUFFLENBQUMsYUFBYSxDQUFDO0lBQzFDLENBQUM7Q0FDSjtBQXBERCxnQ0FvREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVELDRHQUFpRDtBQUNqRCxrSEFBZ0Q7QUFjaEQ7OztLQUdLO0FBQ0wsZUFBd0MsU0FBUSxtQkFBUztJQUNyRCxZQUFZLEtBQThCO1FBQ3RDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUlqQixTQUFJLEdBQUcsZ0JBQUUsQ0FBQyxTQUFTLENBQUM7UUFDcEIsYUFBUSxHQUFZO1lBQ2hCLFlBQVksRUFBRSxFQUFTO1lBQ3ZCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUM7WUFFVCxHQUFHLEVBQUU7Z0JBQ0QsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLENBQUM7YUFDWjtTQUNKLENBQUM7UUFmRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBZ0JLLEtBQUs7OztZQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHO2dCQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25DLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUNsRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUs7YUFDOUMsQ0FBQztZQUNGLE9BQU8sZUFBVyxZQUFHO1FBQ3pCLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQUUsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztDQUNKO0FBakNELDRCQWlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREQsNEdBQWlEO0FBSWpELGtIQUFnRDtBQUNoRCw0R0FBZ0U7QUF5QmhFOzs7S0FHSztBQUNMLFVBQW1DLFNBQVEsbUJBQVM7SUFDaEQsWUFBWSxLQUFtQjtRQUMzQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFNakIsU0FBSSxHQUFHLGdCQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2YsYUFBUSxHQUFZO1lBQ2hCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsQ0FBQztZQUNULEdBQUcsRUFBRTtnQkFDRCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNLEVBQUUsQ0FBQzthQUNaO1NBQ0osQ0FBQztRQUVGLGdCQUFnQjtRQUNoQixlQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUNoQyxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFNBQUksR0FBWSxJQUFXLENBQUM7UUFyQnhCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBMEJLLEtBQUs7OztZQUNQLGFBQWE7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDL0MsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXhCLFFBQVE7WUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUV2QixjQUFjO1lBQ2QsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDekMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQztvQkFBRSxTQUFTO2dCQUMxRSxhQUFhO2dCQUNiLE1BQU0sS0FBSyxHQUFhLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxzQkFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdELEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLGdDQUFnQztnQkFDbEUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxnQ0FBZ0M7Z0JBQy9FLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1lBRUQsa0JBQWtCO1lBQ2xCLEtBQUssTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFDdkQsYUFBYTtnQkFDYixNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsc0JBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxnQ0FBZ0M7Z0JBQ3RFLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbkM7WUFFRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2xDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLG9CQUFRLENBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFDdEIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQzNDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUMxQyxDQUFDO1lBRUYsT0FBTyxlQUFXLFlBQUc7UUFDekIsQ0FBQztLQUFBO0lBQ0QsSUFBSTtRQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXZDLE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFMUMsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUk7UUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUV2QyxPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxnQkFBRSxDQUFDLElBQUksQ0FBQztJQUNqQyxDQUFDO0NBQ0o7QUF4R0QsdUJBd0dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFJRCw0R0FBb0Q7QUFDcEQsNEdBQWlEO0FBQ2pELGtIQUFnRDtBQW9CaEQ7Ozs7S0FJSztBQUNMLGVBQXdDLFNBQVEsbUJBQVM7SUFDckQsWUFBWSxLQUE4QjtRQUN0QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFJakIsU0FBSSxHQUFHLGdCQUFFLENBQUMsU0FBUyxDQUFDO1FBQ3BCLGFBQVEsR0FBWTtZQUNoQixnQkFBZ0IsRUFBRSxFQUFTO1lBQzNCLFlBQVksRUFBRSxFQUFTO1lBQ3ZCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUM7WUFFVixHQUFHLEVBQUU7Z0JBQ0QsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLENBQUM7YUFDWjtTQUNKLENBQUM7UUFoQkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWlCRCxhQUFhO1FBQ1QsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsd0JBQXdCO1FBRTVELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUVqRCxJQUFJLENBQUMsT0FBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUssQ0FBQztRQUU5QyxNQUFNLEdBQUcsR0FBRyxvQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFRLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsT0FBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRWxGLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDSyxLQUFLOzs7WUFDUCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxPQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7YUFDN0M7aUJBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdkI7WUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFFakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUc7Z0JBQ2hCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDWCxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Z0JBQ2xDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Z0JBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07YUFDL0IsQ0FBQztZQUVGLE9BQU8sZUFBVyxZQUFHO1FBQ3pCLENBQUM7S0FBQTtJQUNELElBQUk7UUFDQSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM3QyxPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxnQkFBRSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0NBRUo7QUFqRUQsNEJBaUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGRCw0R0FBb0Q7QUFDcEQsNEdBQWlEO0FBQ2pELGtIQUFnRDtBQXFCaEQ7O0tBRUs7QUFDTCxlQUF3QyxTQUFRLG1CQUFTO0lBQ3JELFlBQVksS0FBOEI7UUFDdEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSWpCLFNBQUksR0FBRyxnQkFBRSxDQUFDLFNBQVMsQ0FBQztRQUNwQixZQUFPLEdBQWdCLElBQVcsQ0FBQztRQUNuQyxhQUFRLEdBQVk7WUFDaEIsWUFBWSxFQUFFLElBQVc7WUFFekIsTUFBTSxFQUFFO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2FBQ1A7WUFDRCxRQUFRLEVBQUUsR0FBRztZQUViLElBQUksRUFBRSxJQUFXO1lBQ2pCLEtBQUssRUFBRSxVQUFVO1lBRWpCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFFLEtBQUs7WUFFYixHQUFHLEVBQUU7Z0JBQ0QsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsTUFBTSxFQUFFLENBQUM7YUFDWjtTQUNKLENBQUM7UUExQkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQTJCRCxhQUFhO1FBQ1QsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsd0JBQXdCO1FBRTVELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVwRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0ssS0FBSzs7O1lBQ1AsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBRXpDLE9BQU8sZUFBVyxZQUFHO1FBQ3pCLENBQUM7S0FBQTtJQUNELElBQUk7UUFDQSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUseUJBQXlCO1lBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHO3lDQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSzttQ0FDckQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUU7YUFDakUsQ0FBQztTQUNMO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRztvQ0FDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7bUNBQ3BCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFO2tCQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsTUFBTSxDQUFDLENBQUMsR0FBRTthQUMxRSxDQUFDO1NBQ0w7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FDVCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFDbEI7WUFDSSxJQUFJLEVBQUUsQ0FBQztZQUNQLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLElBQUk7WUFDWCxNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJO1NBQzFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFDRCxrQkFBa0I7UUFDZCxNQUFNLE1BQU0sR0FBRyxvQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxNQUFNLEdBQUcsbUJBQ0wsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQ25CLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxJQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQ3ZDLENBQUM7UUFDRixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDbkIsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUV4QixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDNUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQUUsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztDQUVKO0FBekdELDRCQXlHQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUQsNEdBQWlEO0FBRWpELGtIQUFnRDtBQWdCaEQ7OztLQUdLO0FBQ0wsZUFBd0MsU0FBUSxtQkFBUztJQUNyRCxZQUFZLEtBQThCO1FBQ3RDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUlqQixTQUFJLEdBQUcsZ0JBQUUsQ0FBQyxTQUFTLENBQUM7UUFDcEIsYUFBUSxHQUFZO1lBQ2hCLGdCQUFnQixFQUFFLEVBQVM7WUFDM0IsR0FBRyxFQUFFO2dCQUNELENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSxDQUFDO2FBQ1o7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDUDtZQUNELEtBQUssRUFBRSxDQUFDO1NBQ1gsQ0FBQztRQWpCRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBa0JLLEtBQUs7OztZQUNQLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2xDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRztnQkFDaEIsS0FBSztnQkFDTCxNQUFNO2dCQUNOLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUM7Z0JBQ3JDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUM7YUFDekMsQ0FBQztZQUVGLE9BQU8sZUFBVyxZQUFHO1FBQ3pCLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQUUsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztDQUNKO0FBdENELDRCQXNDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REQsNEdBQWlEO0FBS2pELDRHQUFnRTtBQUNoRSxrSEFBZ0Q7QUE2QmhEOzs7S0FHSztBQUNMLFdBQW9DLFNBQVEsbUJBQVM7SUFTakQsWUFBWSxLQUFtQjtRQUMzQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFIakIsU0FBSSxHQUFHLGdCQUFFLENBQUMsS0FBSyxDQUFDO1FBUWhCLGFBQVEsR0FBWTtZQUNoQixNQUFNLEVBQUU7Z0JBQ0osQ0FBQyxFQUFFLEVBQUU7Z0JBQ0wsQ0FBQyxFQUFFLEVBQUU7YUFDUjtZQUNELE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLEdBQUc7WUFFZCxJQUFJLEVBQUUsSUFBVztZQUNqQixLQUFLLEVBQUUsSUFBVztZQUVsQixNQUFNLEVBQUUsS0FBSztZQUNiLFVBQVUsRUFBRSxJQUFXO1lBRXZCLEdBQUcsRUFBRTtnQkFDRCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixLQUFLLEVBQUUsR0FBRztnQkFDVixNQUFNLEVBQUUsR0FBRzthQUNkO1NBQ0osQ0FBQztRQUtGLFNBQUksR0FBYSxJQUFXLENBQUM7UUFDN0IsU0FBSSxHQUFhLElBQVcsQ0FBQztRQUM3QixTQUFJLEdBQWtCLElBQUksQ0FBQztRQS9CdkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUErQkssS0FBSzs7O1lBQ1AsYUFBYTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNqRCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFeEIsYUFBYTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsc0JBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUV4QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO2dCQUMxQixhQUFhO2dCQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLHNCQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsc0JBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2dCQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQzVDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNwQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1lBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsb0JBQVEsQ0FDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQ3pCLENBQUM7WUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsb0JBQVEsQ0FDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDekIsQ0FBQzthQUNMO1lBRUQsT0FBTyxlQUFXLFlBQUc7UUFDekIsQ0FBQztLQUFBO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFakMsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlCLE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVqQixPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxnQkFBRSxDQUFDLEtBQUssQ0FBQztJQUNsQyxDQUFDO0NBRUo7QUF6SEQsd0JBeUhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9KRCw0R0FBaUQ7QUFHakQsNEdBQXNFO0FBQ3RFLGtIQUE4RTtBQUc5RSxtSkFBcUU7QUEyQnJFLGNBQXVDLFNBQVEsbUJBQVM7SUFHcEQsWUFBWSxLQUFtQjtRQUMzQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFIakIsU0FBSSxHQUFHLGdCQUFFLENBQUMsUUFBUSxDQUFDO1FBUW5COzs7O2FBSUs7UUFDTCxTQUFJLEdBQWMsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUV2QyxZQUFPLEdBQWdCLEVBQVMsQ0FBQztRQUVqQyxhQUFRLEdBQWE7WUFDakIsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBRTtZQUNwQyxNQUFNLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFJRixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFNBQUksR0FBUyxJQUFXLENBQUM7UUFyQnJCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBcUJELGNBQWM7UUFDVixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUNoRCxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3BFLENBQUM7UUFDRixPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsWUFBWTtRQUNSLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRXBDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUN2QixHQUFHLE1BQU07YUFDSixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsQ0FBQzthQUNyQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVEsQ0FBQyxDQUFDLENBQUMsQ0FDdEQsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVSLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsZ0JBQWdCO1FBQ1osTUFBTSxRQUFRLEdBQVEsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsTUFBTSxTQUFTLEdBQU8sSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkQsTUFBTSxXQUFXLEdBQUssSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sUUFBUSxHQUFRLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV4RCxNQUFNLFNBQVMsR0FDWCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRTtjQUN0QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUMvQztRQUVELFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxTQUFTLEdBQUcsUUFBUTtnQkFDckIseUJBQW1CO1lBQ3ZCLEtBQUssU0FBUyxHQUFHLFdBQVc7Z0JBQ3hCLCtCQUFzQjtZQUMxQixLQUFLLFNBQVMsR0FBRyxTQUFTO2dCQUN0QiwyQkFBb0I7WUFDeEIsS0FBSyxTQUFTLEdBQUcsUUFBUTtnQkFDckIseUJBQW1CO1NBQzFCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUNELFlBQVk7UUFFUixRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQzlCO2dCQUNJLCtCQUFzQjtZQUMxQjtnQkFDSSwyQkFBb0I7WUFDeEI7Z0JBQ0kseUJBQW1CO1lBQ3ZCO2dCQUNJLHVCQUFrQjtTQUN6QjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFDRCxlQUFlO1FBQ1gsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsV0FBVyxDQUFDLE9BQTZCO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFLLENBQUMsV0FBVyxJQUFNLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEQsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFO1lBQ2hELENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQU8sQ0FBQyxTQUFTLElBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN0RCxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDOUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFPLENBQUMsU0FBUyxJQUFRLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztZQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFJLENBQUMsWUFBWSxJQUFLLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtZQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRTdCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQzdCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBVSxDQUFDLENBQUMsT0FBTyxFQUFFO2NBQ3pDLDhCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxtQkFBYyxDQUFDLENBQ3pELENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQzNCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBUSxDQUFDLENBQUMsT0FBTyxFQUFFO2NBQ3ZDLDhCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxtQkFBYyxDQUFDLENBQ3pELENBQUMsV0FBVyxFQUFFLENBQUM7UUFFaEIsT0FBTyxPQUFzQixDQUFDO0lBQ2xDLENBQUM7SUFDSyxLQUFLLENBQUMsT0FBNkI7OztZQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTFCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFekUsYUFBYTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUV4QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN2QixNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUUxQixPQUFPLGVBQVcsWUFBRztRQUN6QixDQUFDO0tBQUE7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pCLE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFSyxVQUFVOztZQUNaLE1BQU0sT0FBTyxHQUFVLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEUsTUFBTSxTQUFTLEdBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwRSxNQUFNLFVBQVUsR0FBRyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNwRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVTtvQkFDekIsMEJBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDWCxNQUFNLE1BQU0sR0FBRzs0QkFDWCxRQUFRLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2tDQUM5QixVQUFVOzRCQUNoQixJQUFJLEVBQUUsRUFBRTt5QkFDWCxDQUFDO3dCQUNGLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BELFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUM7NEJBQzdCLEtBQUssTUFBTTtnQ0FDUCxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7Z0NBQ3RDLE1BQU07NEJBQ1YsS0FBSyxTQUFTO2dDQUNWLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxTQUFTLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7Z0NBQ3BELE1BQU07NEJBQ1YsS0FBSyxPQUFPO2dDQUNSLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxTQUFTLEdBQUcsQ0FBQztnQ0FDOUIsTUFBTTs0QkFDVixLQUFLLE1BQU07Z0NBQ1AsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7Z0NBQ3pELE1BQU07NEJBQ1YsS0FBSyxLQUFLO2dDQUNOLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2dDQUN6RCxNQUFNO3lCQUNiO3dCQUNELE9BQU8sTUFBTSxDQUFDO29CQUNsQixDQUFDLENBQUMsQ0FDTDthQUNKO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07b0JBQ3JCLDBCQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FDaEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFDaEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FDakMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDVCxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOzBCQUN6RCxVQUFVLENBQ2YsQ0FDSjthQUNKO1lBQ0QsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLENBQUM7S0FBQTtJQUNLLFlBQVk7O1lBQ2QsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztpQkFDMUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUMvRTtZQUNELE1BQU0sVUFBVSxHQUNaLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFO2tCQUN0QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUMvQztZQUNELEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxFQUFFO2dCQUN2QixhQUFhO2dCQUNiLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRztvQkFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUM7b0JBQ3hFLGdDQUFnQztvQkFDaEMsQ0FBQyxFQUNHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7MEJBQ3hFLFVBQVU7aUJBRW5CLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ2hELEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQzVDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDZCxNQUFNLE9BQU8sR0FBUyxJQUFJLElBQUksQ0FDMUIsSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLO3dCQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO3dCQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FFckIsQ0FBQztvQkFDRixnQ0FBZ0M7b0JBQ2hDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVTt3QkFDckIsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDOzhCQUNqRCxVQUFVLENBQ2Y7aUJBQ0o7Z0JBQ0QsTUFBTSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1FBRUwsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxnQkFBRSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBZ0JLLFFBQVEsQ0FBQyxLQUFTOztZQUNwQixNQUFNLElBQUksR0FBUSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2xGLGFBQWE7WUFDYixNQUFNLElBQUksR0FBUSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsYUFBYTtZQUNiLE1BQU0sS0FBSyxHQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUVqQyxNQUFNLGFBQWEsR0FBZSxFQUFFLENBQUM7WUFFckM7Z0JBQ0ksTUFBTSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN2RSxhQUFhO2dCQUNiLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUVoRixNQUFNLG1CQUFtQixHQUFpQyxFQUFFLENBQUM7Z0JBQzdELGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFpQixFQUFFLEVBQUU7b0JBQ3pDLGFBQWE7b0JBQ2IsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUM1RixDQUFDLENBQUMsQ0FBQztnQkFFSCxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxpQkFBcUIsRUFBRSxFQUFFO29CQUNqRCxtQkFBbUIsQ0FBQyxJQUFJO29CQUNwQixhQUFhO29CQUNiLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUN4RSxDQUFDO2dCQUNOLENBQUMsQ0FBQyxDQUFDO2dCQUVILG1CQUFtQixDQUFDLElBQUksQ0FDcEIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDbEUsQ0FBQztnQkFFRixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQzthQUM5QztZQUVELE1BQU0sTUFBTSxHQUFTLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDdkMsSUFBSSxDQUFDLENBQUMsRUFBTSxFQUFFLEVBQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUN6RTtZQUNELEtBQUssTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLElBQUksTUFBTSxFQUFFO2dCQUMvRCxhQUFhO2dCQUNiLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNqRixhQUFhO2dCQUNiLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUVqRixJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7b0JBQ3ZCLGFBQWE7b0JBQ2IsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQ3BGO2FBQ0o7WUFFRCwwREFBMEQ7WUFDMUQsS0FBSyxNQUFNLElBQUksSUFBSSxhQUFhLEVBQUU7Z0JBQzlCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGdDQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNmO1FBRUwsQ0FBQztLQUFBO0lBQ0QsTUFBTTtRQUNGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsT0FBTyxzQkFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN4QyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7WUFDckIsT0FBTyxFQUFFLHdCQUFVO1lBQ25CLElBQUksRUFBRTtnQkFDRixLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUM1QixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2dCQUM5QixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7Z0JBQzNCLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTztnQkFDekIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2xDLE9BQU87d0JBQ0gsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO3dCQUN4QixZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRO3dCQUNqQyxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRO3dCQUNqQyxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFJO3FCQUN2RCxDQUFDO2dCQUNOLENBQUMsQ0FBQztnQkFDRixJQUFJLEVBQUU7b0JBQ0YsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUTtvQkFDaEMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7b0JBQ3pDLGNBQWMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO29CQUNqRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQzVDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDbEM7aUJBQ0o7YUFDSjtTQUNKLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDOztBQXJHTSxvQkFBVyxHQUFjO0lBQzVCLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRTtJQUMxQixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLFNBQVMsRUFBRSxFQUFFO0lBQ2IsV0FBVyxFQUFFLENBQUM7SUFDZCxTQUFTLEVBQUUsRUFBRTtJQUNiLFNBQVMsRUFBRTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEVBQUU7S0FDUjtJQUNELFVBQVUsRUFBRSxHQUFHO0lBQ2YsV0FBVyxFQUFFLEdBQUc7Q0FDbkIsQ0FBQztBQXJRTiwyQkErVkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1hELDRHQUFpRjtBQUVqRixJQUFLLGlDQU1KO0FBTkQsV0FBSyxpQ0FBaUM7SUFDbEMsdUdBQVc7SUFDWCxxR0FBVTtJQUNWLDJHQUFhO0lBQ2IseUhBQW9CO0lBQ3BCLHFHQUFVO0FBQ2QsQ0FBQyxFQU5JLGlDQUFpQyxLQUFqQyxpQ0FBaUMsUUFNckM7QUFFRDtJQUNJLFlBQVksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBMkI7UUFpQi9EOzs7Ozs7O2FBT0s7UUFDTCxjQUFTLEdBT0wsRUFBRSxDQUFDO1FBNkNQOzs7YUFHSztRQUNMLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFoRnZCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWYsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFhLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFnQixDQUFDO0lBQ3RDLENBQUM7SUF3REQ7Ozs7O1NBS0s7SUFDTCxhQUFhO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekMsT0FBTyxpQ0FBaUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUNsRSxDQUFDO0lBT0Q7OztTQUdLO0lBQ0wsT0FBTztRQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QixPQUFPLGlDQUFpQyxDQUFDLGFBQWEsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7Ozs7U0FJSztJQUNDLEtBQUssQ0FBQyxHQUFHLElBQVc7O1lBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsb0JBQVEsQ0FDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQ2pCLG9CQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUN6QixDQUFDO2FBQ0w7WUFDRCxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTdCLE9BQU8saUNBQWlDLENBQUMsV0FBVyxDQUFDO1FBQ3pELENBQUM7S0FBQTtJQUNEOzs7O1NBSUs7SUFDTCxJQUFJO1FBQ0EsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLE9BQU8saUNBQWlDLENBQUMsVUFBVSxDQUFDO0lBQ3hELENBQUM7SUFDRDs7OztTQUlLO0lBQ0wsSUFBSTtRQUNBLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsQ0FBQyxTQUFTLENBQ25DLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQzlDLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QixPQUFPLGlDQUFpQyxDQUFDLFVBQVUsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7OztTQUdLO0lBQ0wsY0FBYyxDQUFDLFFBQTBCO1FBQy9CLElBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7O1NBR0s7SUFDTCxJQUFZLENBQUM7UUFDVCxPQUFPLDZCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0Q7OztTQUdLO0lBQ0csWUFBWTtRQUNoQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDWCxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksc0JBQXNCO2tCQUM5Qyx5Q0FBeUMsQ0FDOUMsQ0FBQztTQUNMO0lBQ0wsQ0FBQztDQUNKO0FBNUtELDRCQTRLQzs7Ozs7Ozs7Ozs7Ozs7O0FDeExELG9GQUFtRDtBQUV0QyxhQUFLLEdBQVcsYUFBb0IsS0FBSyxhQUFhLENBQUM7QUFFcEUsSUFBWSxFQVVYO0FBVkQsV0FBWSxFQUFFO0lBQ1YsNEJBQXNCO0lBQ3RCLG1CQUFhO0lBQ2IsNEJBQXNCO0lBQ3RCLDhCQUF3QjtJQUN4QixzQ0FBZ0M7SUFDaEMscUJBQWU7SUFDZiw4QkFBd0I7SUFDeEIsOEJBQXdCO0lBQ3hCLDhCQUF3QjtBQUM1QixDQUFDLEVBVlcsRUFBRSxHQUFGLFVBQUUsS0FBRixVQUFFLFFBVWI7QUFFWSx3QkFBZ0IsR0FBRztJQUM1QixpQkFBWSxFQUFRLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzNDLG1CQUFhLEVBQU8sSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQy9DLHFCQUFjLEVBQU0sSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ2hELHlCQUFnQixFQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDcEQsbUJBQWEsRUFBTyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3hELENBQUM7QUFFVyxlQUFPLEdBQUc7SUFDbkIsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDWixhQUFhLEVBQUUsRUFBRTtLQUNwQjtDQUNKLENBQUM7QUFFVyxrQkFBVSxHQUFXLFdBQVcsQ0FBQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJ0RCxrSEFBbUQ7QUFFbkQsZUFBc0IsR0FBTztJQUN6QixPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVE7V0FDdkIsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLFFBQVE7V0FDekIsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLFFBQVE7V0FDekIsT0FBTyxHQUFHLENBQUMsS0FBSyxLQUFLLFFBQVE7V0FDN0IsT0FBTyxHQUFHLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FDcEM7QUFDTCxDQUFDO0FBUEQsc0JBT0M7QUFDRCxtQkFBMEIsR0FBTztJQUM3QixPQUFPO1FBQ0g7WUFDSSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDYixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSztZQUN2QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDZCxFQUFFO1lBQ0MsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUs7WUFDekIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUs7WUFDdkIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU07U0FDM0IsRUFBRTtZQUNDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLO1lBQ3pCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNO1lBQzFCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNYLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNO1NBQzNCLEVBQUU7WUFDQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDYixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTTtZQUMxQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDWCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDZDtLQUNKLENBQUM7QUFDTixDQUFDO0FBeEJELDhCQXdCQztBQUNELGtCQUF5QixHQUFlO0lBQ3BDLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLE9BQU87UUFDSCxDQUFDLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBSSxDQUFDO1FBQzFCLEtBQUssRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQztRQUNoQyxNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFPLENBQUM7S0FDckMsQ0FBQztBQUNOLENBQUM7QUFSRCw0QkFRQztBQUNELGtCQUF5QixHQUFHLElBQVU7SUFDbEMsTUFBTSxPQUFPLEdBQUc7UUFDWixDQUFDLEVBQUUsUUFBUTtRQUNYLENBQUMsRUFBRSxRQUFRO0tBQ2QsQ0FBQztJQUNGLE1BQU0sV0FBVyxHQUFHO1FBQ2hCLENBQUMsRUFBRSxDQUFDLFFBQVE7UUFDWixDQUFDLEVBQUUsQ0FBQyxRQUFRO0tBQ2YsQ0FBQztJQUNGLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3BCLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN6RSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUFFLFdBQVcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0tBQzlFO0lBQ0QsT0FBTztRQUNILENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNaLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNaLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0tBQ3BDLENBQUM7QUFDTixDQUFDO0FBckJELDRCQXFCQztBQUNELG1CQUEwQixHQUFPLEVBQUUsUUFBUSxHQUFFLENBQUM7SUFDMUMsT0FBTztRQUNILENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVE7UUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUTtRQUNuQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxRQUFRLEdBQUcsQ0FBQztRQUMvQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxRQUFRLEdBQUcsQ0FBQztLQUNwQyxDQUFDO0FBQ04sQ0FBQztBQVBELDhCQU9DO0FBRVksc0JBQWMsR0FFdkI7SUFDQSxNQUFNLFFBQVEsR0FBRyxVQUFVLEtBQVcsRUFBRyxHQUFTLEVBQUcsSUFBMEI7UUFDM0UsTUFBTSxTQUFTLEdBQVMsVUFBVSxNQUFZO1lBQzFDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztZQUM3QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDVCxNQUFNLE9BQU8sR0FBUyxVQUFVLE1BQVk7WUFDeEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNQLE1BQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQztRQUN6QjtZQUNJLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDcEQsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEI7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FDZixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FDN0UsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUNGLE9BQU87UUFDSCxJQUFJLENBQUMsS0FBVyxFQUFHLEdBQVM7WUFDeEIsT0FBTyxRQUFRLENBQ1gsS0FBSyxFQUFHLEdBQUcsRUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUNuRCxDQUFDO1FBQ04sQ0FBQztRQUNELE9BQU8sQ0FBQyxLQUFXLEVBQUcsR0FBUztZQUMzQixPQUFPLFFBQVEsQ0FDWCxLQUFLLEVBQUcsR0FBRyxFQUNYLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN4QjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzFDO1lBQ0wsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDO1FBQ0QsS0FBSyxDQUFDLEtBQVcsRUFBRyxHQUFTO1lBQ3pCLE9BQU8sUUFBUSxDQUNYLEtBQUssRUFBRyxHQUFHLEVBQ1gsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDTCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUMxQztZQUNMLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQztRQUNELElBQUksQ0FBQyxLQUFXLEVBQUcsR0FBUztZQUN4QixPQUFPLFFBQVEsQ0FDWCxLQUFLLEVBQUcsR0FBRyxFQUNYLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ0wsR0FBRztvQkFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztpQkFDdEQsUUFBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQztRQUNELEdBQUcsQ0FBQyxLQUFXLEVBQUcsR0FBUztZQUN2QixPQUFPLFFBQVEsQ0FDWCxLQUFLLEVBQUcsR0FBRyxFQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQzdELENBQUM7UUFDTixDQUFDO0tBQ0osQ0FBQztBQUNOLENBQUMsRUFBRSxDQUFDO0FBRUosd0JBQStCLEtBQVcsRUFBRSxLQUFXO0lBQ25ELElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQzNELElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBRTNELElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzlDLE1BQU0sU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDckM7SUFDRCxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBGLGFBQWE7SUFDYixNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7S0FDeEMsQ0FBQztJQUNGLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUNuQixNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDZCxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxDQUFDO21CQUM5RCxFQUFFLEtBQUssRUFBRSxDQUNYO1NBQ1I7UUFDRCxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDckIsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQzttQkFDOUQsRUFBRSxLQUFLLEVBQUUsQ0FDWDtTQUNSO1FBQ0QsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQztlQUM5RCxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUNwRTtLQUNKO0lBQ0QsSUFBSSxNQUFNLEtBQUssUUFBUTtRQUFFLEVBQUUsSUFBSSxNQUFNLENBQUM7SUFDdEMsSUFBSSxNQUFNLEtBQUssUUFBUTtRQUFFLEVBQUUsSUFBSSxNQUFNLENBQUM7SUFDdEMsSUFBSSxNQUFNLEtBQUssQ0FBQztRQUFFLEVBQUUsSUFBSSxNQUFNLENBQUM7SUFDL0IsSUFBSSxNQUFNLEtBQUssQ0FBQztRQUFFLEVBQUUsSUFBSSxNQUFNLENBQUM7SUFFL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7VUFDdkUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUNwRDtJQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1VBQ3ZFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcs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Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUUxQiw0RUFBdUI7QUFFdkIsMEZBQWlEO0FBQXhDLHFDQUFPLENBQVk7QUFFNUIsb0ZBQXlDO0FBQWhDLDZCQUFPLENBQVE7QUFDeEIsdUdBQXdEO0FBQS9DLHVDQUFPLENBQWE7QUFDN0IsbUhBQWdFO0FBQXZELCtDQUFPLENBQWlCO0FBQ2pDLG9HQUFzRDtBQUE3QyxxQ0FBTyxDQUFZO0FBRTVCLHVGQUEyQztBQUFsQywrQkFBTyxDQUFTO0FBQ3pCLHlHQUF5RDtBQUFoRCx1Q0FBTyxDQUFhO0FBQzdCLHlHQUF5RDtBQUFoRCx1Q0FBTyxDQUFhO0FBQzdCLHlHQUF5RDtBQUFoRCx1Q0FBTyxDQUFhO0FBRTdCLDBHQUFnRTtBQUF2RCx1Q0FBTyxDQUFhO0FBRTdCLHlIQUFrRTtBQUF6RCwyQ0FBTyxDQUFlO0FBQy9CLHFHQU80QjtBQU54Qix3REFBZ0I7QUFDaEIsOERBQW1CO0FBQ25CLDhDQUFXO0FBQ1gsc0RBQWU7QUFDZiw4REFBbUI7QUFDbkIsa0RBQWE7Ozs7Ozs7Ozs7Ozs7QUN4QmpCLGNBQWMsbUJBQU8sQ0FBQyxvTkFBMkc7O0FBRWpJLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx5R0FBc0Q7O0FBRTNFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoiY29sb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kb2NzL2NvbG9ycy50c1wiKTtcbiIsImltcG9ydCB7IGRyYXcsIGRyYXdGcm9tLCBkcmF3V2l0aEFuaW1hdGlvbiB9IGZyb20gJ0AvdGhlbWVzL2NvbG9ycy9lbnRyeSc7XHJcblxyXG5jb25zdCBldmVudHMgPSBbe1xyXG4gICAgZGF0ZSA6JzIwMTQtNScsXHJcbiAgICB0aXRsZTon5byA5aeLIOiHquWtpldlYuW8gOWPkScsXHJcbn0sIHtcclxuICAgIHRpdGxlOiflhaXlraYg6Z2S5bKb55CG5bel5aSn5a2mJyxcclxuICAgIGRhdGUgOicyMDE0LTktMScsXHJcbiAgICBlbmREYXRlIDonMjAxOC03LTI5JyxcclxufSwge1xyXG4gICAgZGF0ZSA6JzIwMTQtMTInLFxyXG4gICAgdGl0bGU6J+mdkueQhldlYuW8gOWPkeWNj+S8micsXHJcbiAgICB0ZXh0IDon5Yib5bu66Z2S55CGV2Vi5byA5Y+R5Y2P5Lya77yM5ouF5b2T5Lya6ZW/JyxcclxuICAgIGVuZERhdGUgOicyMDE2LTYnLFxyXG4gICAgZW5kVGV4dCA6J+WNj+S8muaNouWxiicsXHJcbn0sIHtcclxuICAgIGRhdGUgOicyMDE1LTYnLFxyXG4gICAgdGl0bGU6J+azqOWGjCDpnZLlspvljZPnhLbni6znq4vnvZHnu5znp5HmioDmnInpmZDlhazlj7gnLFxyXG4gICAgZW5kRGF0ZSA6JzIwMTctNi0xOScsXHJcbn0sIHtcclxuICAgIHRpdGxlIDonMzYw5YmN56uv5pif6K6h5YiSJyxcclxuICAgIHRleHQgOifjgIozNjDliY3nq6/mmJ/orqHliJLjgIvnlLEzNjDliY3nq6/lm6LpmJ/lkozmoKHlm63mi5vogZjlm6LpmJ/lkIjlip7vvIzpnaLlkJHlnKjmoKHlpKflrabnlJ/vvIzkuLrln7nlhbvmnIDkvJjnp4DmnIDmnInmvZzlipvnmoTliY3nq6/kurrmiY3kuL7lip7nmoTliY3nq6/mioDmnK/ns7vliJfor77nqIsnLFxyXG4gICAgZGF0ZSA6JzIwMTctNC05JyxcclxuICAgIGVuZERhdGUgOicyMDE3LTQtMTQnLFxyXG4gICAgZm9sZGVkOiB0cnVlLFxyXG59LCB7XHJcbiAgICB0aXRsZSA6J01vemlsbGEg5a6e5LmgJyxcclxuICAgIGRhdGUgOicyMDE3LTctMTQnLFxyXG4gICAgZW5kRGF0ZSA6JzIwMTgtMi05JyxcclxufSwge1xyXG4gICAgdGl0bGUgOifnmb7luqYgS0lUVC5BSSDlrp7kuaAnLFxyXG4gICAgZGF0ZSA6JzIwMTgtMy0yMScsXHJcbiAgICBlbmREYXRlIDonMjAxOC01LTI4JyxcclxuICAgIGVuZFRleHQgOiAnVGVhbSDooqvop6PmlaMnLFxyXG59LCB7XHJcbiAgICB0aXRsZSA6J0tJVFQuQUkg5Zui6ZifIDLlgI3nroDljZXlpZYnLFxyXG4gICAgZGF0ZSA6JzIwMTgtNi0yOScsXHJcbn0sIHtcclxuICAgIHRpdGxlIDon55m+5bqmIFNXQU4g5Zui6ZifJyxcclxuICAgIGRhdGUgOicyMDE4LTctNCcsXHJcbiAgICBlbmREYXRlIDonbm93JyxcclxufSwge1xyXG4gICAgdGl0bGUgOidNb3ppbGxhIOWunuS5oCAxMjMnLFxyXG4gICAgZGF0ZSA6JzIwMTctOS0xMCcsXHJcbn0sIHtcclxuICAgIHRpdGxlIDonTW96aWxsYSDlrp7kuaAgMjMzJyxcclxuICAgIGRhdGUgOicyMDE3LTgtMTAnLFxyXG59LCB7XHJcbiAgICB0aXRsZTonMjAxNS03LTI1JyxcclxuICAgIGRhdGUgOicyMDE1LTctMjUnLFxyXG59LCB7XHJcbiAgICB0aXRsZTonMjAxNS0xJyxcclxuICAgIGRhdGUgOicyMDE1LTEnLFxyXG59LCB7XHJcbiAgICB0aXRsZTonMjAxNS01JyxcclxuICAgIGRhdGUgOicyMDE1LTUtMScsXHJcbn1dO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcclxuICAgIC8vIE5vcm1hbCBkcmF3XHJcbiAgICBjb25zdCB0aW1lbGluZTEgPSBhd2FpdCBkcmF3KCcjYXBwJywgZXZlbnRzKTtcclxuXHJcbiAgICAvLyAvLyBEcmF3IHdpdGggYW5pbWF0aW9uXHJcbiAgICAvLyBhd2FpdCBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociwgNTAwKSk7XHJcbiAgICAvLyB0aW1lbGluZTEuaGlkZSgpO1xyXG4gICAgLy8gY29uc3QgdGltZWxpbmUyID0gYXdhaXQgZHJhd1dpdGhBbmltYXRpb24oJyNhcHAnLCBldmVudHMpO1xyXG4gICAgLy9cclxuICAgIC8vIC8vIERyYXcgd2l0aCBhIGRhdGEgb2Ygb25lIHRpbWVsaW5lIGV4cG9ydFxyXG4gICAgLy8gYXdhaXQgbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIDUwMCkpO1xyXG4gICAgLy8gdGltZWxpbmUyLmhpZGUoKTtcclxuICAgIC8vIGF3YWl0IGRyYXdGcm9tKCcjYXBwJywgdGltZWxpbmUxLmV4cG9ydCgpKTtcclxufSk7XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNob3J0LW5pZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIC5zaG9ydC1uaWdodCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgLnNob3J0LW5pZ2h0LmF4aXNfbWlsZXN0b25lIHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7IH1cXG4gIC5zaG9ydC1uaWdodC5ldmVudF9ib2R5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgcGFkZGluZzogN3B4IDEwcHggN3B4IDVweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gICAgLnNob3J0LW5pZ2h0LmV2ZW50X2JvZHkuZm9sZGVkIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAuc2hvcnQtbmlnaHQuZXZlbnRfYm9keS5mb2xkZWQgLnRpdGxlLCAuc2hvcnQtbmlnaHQuZXZlbnRfYm9keS5mb2xkZWQgLmZvbGRlZFRleHQge1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcbiAgICAuc2hvcnQtbmlnaHQuZXZlbnRfYm9keSAudGl0bGUsIC5zaG9ydC1uaWdodC5ldmVudF9ib2R5IC5mb2xkZWRUZXh0IHtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cXG4gICAgLnNob3J0LW5pZ2h0LmV2ZW50X2JvZHkgLmRhdGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMC42ZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG4gIC5zaG9ydC1uaWdodC5ldmVudF9heGlzLWVuZFRleHQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDAgMCAycHggM3B4O1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICB0ZXh0LWluZGVudDogMC41ZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zaG9ydC1uaWdodC5jb2xvcnMuYXhpc19taWxlc3RvbmUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6ICMzMzM7XFxuICBwYWRkaW5nOiAycHggN3B4OyB9XFxuXFxuLnNob3J0LW5pZ2h0LmNvbG9ycy5ldmVudF9ib2R5IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogN3B4IDEwcHggN3B4IDVweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAuc2hvcnQtbmlnaHQuY29sb3JzLmV2ZW50X2JvZHkgLmZvbGRlZCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuc2hvcnQtbmlnaHQuY29sb3JzLmV2ZW50X2JvZHkgLmZvbGRlZCAudGl0bGUsIC5zaG9ydC1uaWdodC5jb2xvcnMuZXZlbnRfYm9keSAuZm9sZGVkIC5mb2xkZWRUZXh0IHtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG4gIC5zaG9ydC1uaWdodC5jb2xvcnMuZXZlbnRfYm9keSAudGl0bGUsIC5zaG9ydC1uaWdodC5jb2xvcnMuZXZlbnRfYm9keSAuZm9sZGVkVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cXG4gIC5zaG9ydC1uaWdodC5jb2xvcnMuZXZlbnRfYm9keSAuZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMC42ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi5zaG9ydC1uaWdodC5jb2xvcnMuZXZlbnRfYXhpcy1lbmRUZXh0IHtcXG4gIHBhZGRpbmc6IDAgMCAycHggM3B4O1xcbiAgZm9udC1zaXplOiAwLjhlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qIVxuICogTW92ZVRvIC0gQSBsaWdodHdlaWdodCBzY3JvbGwgYW5pbWF0aW9uIGphdmFzY3JpcHQgbGlicmFyeSB3aXRob3V0IGFueSBkZXBlbmRlbmN5LlxuICogVmVyc2lvbiAxLjcuNCAoMjgtMDktMjAxOCAxNjowMilcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICogQ29weXJpZ2h0IDIwMTggSGFzYW4gQXlkb8SfZHUgPGhzbmF5ZGRAZ21haWwuY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcbnZhciBNb3ZlVG8gPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEZWZhdWx0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgdmFyIGRlZmF1bHRzID0ge1xuICAgIHRvbGVyYW5jZTogMCxcbiAgICBkdXJhdGlvbjogODAwLFxuICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFydCcsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKCkge30gfTtcblxuXG4gIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGVhc2VPdXRRdWFydCBFYXNpbmcgRnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHQgLSBjdXJyZW50IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGIgLSBzdGFydCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSAge251bWJlcn0gYyAtIGNoYW5nZSBpbiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSAge251bWJlcn0gZCAtIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHJldHVybiB7bnVtYmVyfSAtIGNhbGN1bGF0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgZnVuY3Rpb24gZWFzZU91dFF1YXJ0KHQsIGIsIGMsIGQpIHtcbiAgICB0IC89IGQ7XG4gICAgdC0tO1xuICAgIHJldHVybiAtYyAqICh0ICogdCAqIHQgKiB0IC0gMSkgKyBiO1xuICB9XG5cbiAgLyoqXG4gICAgICogTWVyZ2UgdHdvIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvYmoxXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvYmoyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBtZXJnZWQgb2JqZWN0XG4gICAgICovXG4gIGZ1bmN0aW9uIG1lcmdlT2JqZWN0KG9iajEsIG9iajIpIHtcbiAgICB2YXIgb2JqMyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKG9iajEpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgb2JqM1twcm9wZXJ0eU5hbWVdID0gb2JqMVtwcm9wZXJ0eU5hbWVdO1xuICAgIH0pO1xuXG4gICAgT2JqZWN0LmtleXMob2JqMikuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICBvYmozW3Byb3BlcnR5TmFtZV0gPSBvYmoyW3Byb3BlcnR5TmFtZV07XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajM7XG4gIH07XG5cbiAgLyoqXG4gICAgICAqIENvbnZlcnRzIGNhbWVsIGNhc2UgdG8ga2ViYWIgY2FzZVxuICAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbCB0aGUgdmFsdWUgdG8gYmUgY29udmVydGVkXG4gICAgICAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGNvbnZlcnRlZCB2YWx1ZVxuICAgICAgKi9cbiAgZnVuY3Rpb24ga2ViYWJDYXNlKHZhbCkge1xuICAgIHJldHVybiB2YWwucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbiAoJDEpIHtcbiAgICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgICAgKiBNb3ZlVG8gQ29uc3RydWN0b3JcbiAgICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT3B0aW9uc1xuICAgICAgKiBAcGFyYW0ge29iamVjdH0gZWFzZUZ1bmN0aW9ucyBDdXN0b20gZWFzZSBmdW5jdGlvbnNcbiAgICAgICovXG4gIGZ1bmN0aW9uIE1vdmVUbygpIHt2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307dmFyIGVhc2VGdW5jdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT2JqZWN0KGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLmVhc2VGdW5jdGlvbnMgPSBtZXJnZU9iamVjdCh7IGVhc2VPdXRRdWFydDogZWFzZU91dFF1YXJ0IH0sIGVhc2VGdW5jdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSBkb20gZWxlbWVudCBhcyB0cmlnZ2VyXG4gICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGRvbSBEb20gdHJpZ2dlciBlbGVtZW50XG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb258dm9pZH0gdW5yZWdpc3RlciBmdW5jdGlvblxuICAgICAqL1xuICBNb3ZlVG8ucHJvdG90eXBlLnJlZ2lzdGVyVHJpZ2dlciA9IGZ1bmN0aW9uIChkb20sIGNhbGxiYWNrKSB7dmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAoIWRvbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBocmVmID0gZG9tLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8IGRvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgLy8gVGhlIGVsZW1lbnQgdG8gYmUgc2Nyb2xsZWRcbiAgICB2YXIgdGFyZ2V0ID0gaHJlZiAmJiBocmVmICE9PSAnIycgP1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYuc3Vic3RyaW5nKDEpKSA6XG4gICAgZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgb3B0aW9ucyA9IG1lcmdlT2JqZWN0KHRoaXMub3B0aW9ucywgX2dldE9wdGlvbnNGcm9tVHJpZ2dlckRvbShkb20sIHRoaXMub3B0aW9ucykpO1xuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0aW9ucy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIF90aGlzLm1vdmUodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIsIGZhbHNlKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7cmV0dXJuIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyLCBmYWxzZSk7fTtcbiAgfTtcblxuICAvKipcbiAgICAgICogTW92ZVxuICAgICAgKiBTY3JvbGxzIHRvIGdpdmVuIGVsZW1lbnQgYnkgdXNpbmcgZWFzZU91dFF1YXJ0IGZ1bmN0aW9uXG4gICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fG51bWJlcn0gdGFyZ2V0IFRhcmdldCBlbGVtZW50IHRvIGJlIHNjcm9sbGVkIG9yIHRhcmdldCBwb3NpdGlvblxuICAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgQ3VzdG9tIG9wdGlvbnNcbiAgICAgICovXG4gIE1vdmVUby5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHt2YXIgX3RoaXMyID0gdGhpczt2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgaWYgKHRhcmdldCAhPT0gMCAmJiAhdGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG1lcmdlT2JqZWN0KHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICB2YXIgZGlzdGFuY2UgPSB0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJyA/IHRhcmdldCA6IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgdmFyIGZyb20gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgdmFyIHN0YXJ0VGltZSA9IG51bGw7XG4gICAgdmFyIGxhc3RQYWdlWU9mZnNldCA9IHZvaWQgMDtcbiAgICBkaXN0YW5jZSAtPSBvcHRpb25zLnRvbGVyYW5jZTtcblxuICAgIC8vIHJBRiBsb29wXG4gICAgdmFyIGxvb3AgPSBmdW5jdGlvbiBsb29wKGN1cnJlbnRUaW1lKSB7XG4gICAgICB2YXIgY3VycmVudFBhZ2VZT2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgICBpZiAoIXN0YXJ0VGltZSkge1xuICAgICAgICAvLyBUbyBzdGFydHMgdGltZSBmcm9tIDEsIHdlIHN1YnRyYWN0ZWQgMSBmcm9tIGN1cnJlbnQgdGltZVxuICAgICAgICAvLyBJZiB0aW1lIHN0YXJ0cyBmcm9tIDEgVGhlIGZpcnN0IGxvb3Agd2lsbCBub3QgZG8gYW55dGhpbmcsXG4gICAgICAgIC8vIGJlY2F1c2UgZWFzaW5nIHZhbHVlIHdpbGwgYmUgemVyb1xuICAgICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZSAtIDE7XG4gICAgICB9XG5cbiAgICAgIHZhciB0aW1lRWxhcHNlZCA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xuXG4gICAgICBpZiAobGFzdFBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgZGlzdGFuY2UgPiAwICYmIGxhc3RQYWdlWU9mZnNldCA+IGN1cnJlbnRQYWdlWU9mZnNldCB8fFxuICAgICAgICBkaXN0YW5jZSA8IDAgJiYgbGFzdFBhZ2VZT2Zmc2V0IDwgY3VycmVudFBhZ2VZT2Zmc2V0KVxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMuY2FsbGJhY2sodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGFzdFBhZ2VZT2Zmc2V0ID0gY3VycmVudFBhZ2VZT2Zmc2V0O1xuXG4gICAgICB2YXIgdmFsID0gX3RoaXMyLmVhc2VGdW5jdGlvbnNbb3B0aW9ucy5lYXNpbmddKFxuICAgICAgdGltZUVsYXBzZWQsIGZyb20sIGRpc3RhbmNlLCBvcHRpb25zLmR1cmF0aW9uKTtcblxuXG4gICAgICB3aW5kb3cuc2Nyb2xsKDAsIHZhbCk7XG5cbiAgICAgIGlmICh0aW1lRWxhcHNlZCA8IG9wdGlvbnMuZHVyYXRpb24pIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgZGlzdGFuY2UgKyBmcm9tKTtcbiAgICAgICAgb3B0aW9ucy5jYWxsYmFjayh0YXJnZXQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICB9O1xuXG4gIC8qKlxuICAgICAgKiBBZGRzIGN1c3RvbSBlYXNlIGZ1bmN0aW9uXG4gICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgIG5hbWUgRWFzZSBmdW5jdGlvbiBuYW1lXG4gICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuICAgRWFzZSBmdW5jdGlvblxuICAgICAgKi9cbiAgTW92ZVRvLnByb3RvdHlwZS5hZGRFYXNlRnVuY3Rpb24gPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICB0aGlzLmVhc2VGdW5jdGlvbnNbbmFtZV0gPSBmbjtcbiAgfTtcblxuICAvKipcbiAgICAgICogUmV0dXJucyBvcHRpb25zIHdoaWNoIGNyZWF0ZWQgZnJvbSB0cmlnZ2VyIGRvbSBlbGVtZW50XG4gICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBkb20gVHJpZ2dlciBkb20gZWxlbWVudFxuICAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgVGhlIGluc3RhbmNlJ3Mgb3B0aW9uc1xuICAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBvcHRpb25zIHdoaWNoIGNyZWF0ZWQgZnJvbSB0cmlnZ2VyIGRvbSBlbGVtZW50XG4gICAgICAqL1xuICBmdW5jdGlvbiBfZ2V0T3B0aW9uc0Zyb21UcmlnZ2VyRG9tKGRvbSwgb3B0aW9ucykge1xuICAgIHZhciBkb21PcHRpb25zID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGRvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbXQtJyArIGtlYmFiQ2FzZShrZXkpKTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBkb21PcHRpb25zW2tleV0gPSBpc05hTih2YWx1ZSkgPyB2YWx1ZSA6IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRvbU9wdGlvbnM7XG4gIH1cblxuICByZXR1cm4gTW92ZVRvO1xufSgpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBNb3ZlVG87XG59IGVsc2Uge1xuICB3aW5kb3cuTW92ZVRvID0gTW92ZVRvO1xufSIsImltcG9ydCB7IFJvdWdoR2VuZXJhdG9yQXN5bmMgfSBmcm9tICcuL2dlbmVyYXRvci1hc3luYyc7XG5pbXBvcnQgeyBSb3VnaENhbnZhc0Jhc2UgfSBmcm9tICcuL2NhbnZhcy1iYXNlJztcbmV4cG9ydCBjbGFzcyBSb3VnaENhbnZhc0FzeW5jIGV4dGVuZHMgUm91Z2hDYW52YXNCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbmZpZykge1xuICAgICAgICBzdXBlcihjYW52YXMpO1xuICAgICAgICB0aGlzLmdlbkFzeW5jID0gbmV3IFJvdWdoR2VuZXJhdG9yQXN5bmMoY29uZmlnIHx8IG51bGwsIHRoaXMuY2FudmFzKTtcbiAgICB9XG4gICAgZ2V0IGdlbmVyYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuQXN5bmM7XG4gICAgfVxuICAgIGdldERlZmF1bHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5Bc3luYy5kZWZhdWx0T3B0aW9ucztcbiAgICB9XG4gICAgYXN5bmMgbGluZSh4MSwgeTEsIHgyLCB5Miwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5saW5lKHgxLCB5MSwgeDIsIHkyLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgYXN5bmMgcmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMucmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBhc3luYyBlbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMuZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgYXN5bmMgY2lyY2xlKHgsIHksIGRpYW1ldGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmNpcmNsZSh4LCB5LCBkaWFtZXRlciwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGFzeW5jIGxpbmVhclBhdGgocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmxpbmVhclBhdGgocG9pbnRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgYXN5bmMgcG9seWdvbihwb2ludHMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMucG9seWdvbihwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBhc3luYyBhcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCA9IGZhbHNlLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgY2xvc2VkLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgYXN5bmMgY3VydmUocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmN1cnZlKHBvaW50cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGFzeW5jIHBhdGgoZCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkcmF3aW5nID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5wYXRoKGQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZHJhd2luZyk7XG4gICAgICAgIHJldHVybiBkcmF3aW5nO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJvdWdoUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVyJztcbmNvbnN0IGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydCBjbGFzcyBSb3VnaENhbnZhc0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlUmVuZGVyZXIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUm91Z2hSZW5kZXJlcigpO1xuICAgIH1cbiAgICBkcmF3KGRyYXdhYmxlKSB7XG4gICAgICAgIGNvbnN0IHNldHMgPSBkcmF3YWJsZS5zZXRzIHx8IFtdO1xuICAgICAgICBjb25zdCBvID0gZHJhd2FibGUub3B0aW9ucyB8fCB0aGlzLmdldERlZmF1bHRPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBmb3IgKGNvbnN0IGRyYXdpbmcgb2Ygc2V0cykge1xuICAgICAgICAgICAgc3dpdGNoIChkcmF3aW5nLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gby5zdHJva2U7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBvLnN0cm9rZVdpZHRoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3VG9Db250ZXh0KGN0eCwgZHJhd2luZyk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbGxQYXRoJzpcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IG8uZmlsbCB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1RvQ29udGV4dChjdHgsIGRyYXdpbmcpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdmaWxsU2tldGNoJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsU2tldGNoKGN0eCwgZHJhd2luZywgbyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdGgyRGZpbGwnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gby5maWxsIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwMmQgPSBuZXcgUGF0aDJEKGRyYXdpbmcucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwocDJkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAncGF0aDJEcGF0dGVybic6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jID0gdGhpcy5jYW52YXMub3duZXJEb2N1bWVudCB8fCAoaGFzRG9jdW1lbnQgJiYgZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gZHJhd2luZy5zaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGNhbnZhcyA9IGRvYy5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhjb250ZXh0ID0gaGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmJveCA9IHRoaXMuY29tcHV0ZUJCb3goZHJhd2luZy5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYm94ICYmIChiYm94LndpZHRoIHx8IGJib3guaGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhjYW52YXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoY29udGV4dC50cmFuc2xhdGUoYmJveC54IHx8IDAsIGJib3gueSB8fCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhjYW52YXMud2lkdGggPSBzaXplWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhjYW52YXMuaGVpZ2h0ID0gc2l6ZVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbFNrZXRjaChoY29udGV4dCwgZHJhd2luZywgbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmN0eC5jcmVhdGVQYXR0ZXJuKGhjYW52YXMsICdyZXBlYXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAyZCA9IG5ldyBQYXRoMkQoZHJhd2luZy5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwocDJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCByZW5kZXIgcGF0aDJEcGF0dGVybi4gTm8gZGVmcy9kb2N1bWVudCBkZWZpbmVkLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wdXRlQkJveChkKSB7XG4gICAgICAgIGlmIChoYXNEb2N1bWVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnc3ZnJyk7XG4gICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMCcpO1xuICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcwJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aE5vZGUgPSBzZWxmLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3BhdGgnKTtcbiAgICAgICAgICAgICAgICBwYXRoTm9kZS5zZXRBdHRyaWJ1dGUoJ2QnLCBkKTtcbiAgICAgICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aE5vZGUpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBiYm94ID0gcGF0aE5vZGUuZ2V0QkJveCgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc3ZnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmJveDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmaWxsU2tldGNoKGN0eCwgZHJhd2luZywgbykge1xuICAgICAgICBsZXQgZndlaWdodCA9IG8uZmlsbFdlaWdodDtcbiAgICAgICAgaWYgKGZ3ZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBmd2VpZ2h0ID0gby5zdHJva2VXaWR0aCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gby5maWxsIHx8ICcnO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gZndlaWdodDtcbiAgICAgICAgdGhpcy5fZHJhd1RvQ29udGV4dChjdHgsIGRyYXdpbmcpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgICBfZHJhd1RvQ29udGV4dChjdHgsIGRyYXdpbmcpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZHJhd2luZy5vcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBpdGVtLmRhdGE7XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0ub3ApIHtcbiAgICAgICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhkYXRhWzBdLCBkYXRhWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYmN1cnZlVG8nOlxuICAgICAgICAgICAgICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyhkYXRhWzBdLCBkYXRhWzFdLCBkYXRhWzJdLCBkYXRhWzNdLCBkYXRhWzRdLCBkYXRhWzVdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncWN1cnZlVG8nOlxuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhkYXRhWzBdLCBkYXRhWzFdLCBkYXRhWzJdLCBkYXRhWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkYXRhWzBdLCBkYXRhWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRyYXdpbmcudHlwZSA9PT0gJ2ZpbGxQYXRoJykge1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFJvdWdoR2VuZXJhdG9yIH0gZnJvbSAnLi9nZW5lcmF0b3InO1xuaW1wb3J0IHsgUm91Z2hDYW52YXNCYXNlIH0gZnJvbSAnLi9jYW52YXMtYmFzZSc7XG5leHBvcnQgY2xhc3MgUm91Z2hDYW52YXMgZXh0ZW5kcyBSb3VnaENhbnZhc0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNhbnZhcyk7XG4gICAgICAgIHRoaXMuZ2VuID0gbmV3IFJvdWdoR2VuZXJhdG9yKGNvbmZpZyB8fCBudWxsLCB0aGlzLmNhbnZhcyk7XG4gICAgfVxuICAgIGdldCBnZW5lcmF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbjtcbiAgICB9XG4gICAgZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbi5kZWZhdWx0T3B0aW9ucztcbiAgICB9XG4gICAgbGluZSh4MSwgeTEsIHgyLCB5Miwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4ubGluZSh4MSwgeTEsIHgyLCB5Miwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIHJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4uZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgY2lyY2xlKHgsIHksIGRpYW1ldGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5jaXJjbGUoeCwgeSwgZGlhbWV0ZXIsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBsaW5lYXJQYXRoKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4ubGluZWFyUGF0aChwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBwb2x5Z29uKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4ucG9seWdvbihwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBhcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCA9IGZhbHNlLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5hcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGN1cnZlKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4uY3VydmUocG9pbnRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgcGF0aChkLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRyYXdpbmcgPSB0aGlzLmdlbi5wYXRoKGQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZHJhd2luZyk7XG4gICAgICAgIHJldHVybiBkcmF3aW5nO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGhhY2h1cmVMaW5lc0ZvclBvbHlnb24sIGhhY2h1cmVMaW5lc0ZvckVsbGlwc2UsIGxpbmVMZW5ndGggfSBmcm9tICcuL2ZpbGxlci11dGlscyc7XG5leHBvcnQgY2xhc3MgRG90RmlsbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgfVxuICAgIGZpbGxQb2x5Z29uKHBvaW50cywgbykge1xuICAgICAgICBvID0gT2JqZWN0LmFzc2lnbih7fSwgbywgeyBjdXJ2ZVN0ZXBDb3VudDogNCwgaGFjaHVyZUFuZ2xlOiAwIH0pO1xuICAgICAgICBjb25zdCBsaW5lcyA9IGhhY2h1cmVMaW5lc0ZvclBvbHlnb24ocG9pbnRzLCBvKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG90c09uTGluZXMobGluZXMsIG8pO1xuICAgIH1cbiAgICBmaWxsRWxsaXBzZShjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIG8pIHtcbiAgICAgICAgbyA9IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgY3VydmVTdGVwQ291bnQ6IDQsIGhhY2h1cmVBbmdsZTogMCB9KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBoYWNodXJlTGluZXNGb3JFbGxpcHNlKGN4LCBjeSwgd2lkdGgsIGhlaWdodCwgbywgdGhpcy5yZW5kZXJlcik7XG4gICAgICAgIHJldHVybiB0aGlzLmRvdHNPbkxpbmVzKGxpbmVzLCBvKTtcbiAgICB9XG4gICAgZG90c09uTGluZXMobGluZXMsIG8pIHtcbiAgICAgICAgbGV0IG9wcyA9IFtdO1xuICAgICAgICBsZXQgZ2FwID0gby5oYWNodXJlR2FwO1xuICAgICAgICBpZiAoZ2FwIDwgMCkge1xuICAgICAgICAgICAgZ2FwID0gby5zdHJva2VXaWR0aCAqIDQ7XG4gICAgICAgIH1cbiAgICAgICAgZ2FwID0gTWF0aC5tYXgoZ2FwLCAwLjEpO1xuICAgICAgICBsZXQgZndlaWdodCA9IG8uZmlsbFdlaWdodDtcbiAgICAgICAgaWYgKGZ3ZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBmd2VpZ2h0ID0gby5zdHJva2VXaWR0aCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBsaW5lTGVuZ3RoKGxpbmUpO1xuICAgICAgICAgICAgY29uc3QgZGwgPSBsZW5ndGggLyBnYXA7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IE1hdGguY2VpbChkbCkgLSAxO1xuICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4oKGxpbmVbMV1bMV0gLSBsaW5lWzBdWzFdKSAvIChsaW5lWzFdWzBdIC0gbGluZVswXVswXSkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbCA9IGdhcCAqIChpICsgMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSBsICogTWF0aC5zaW4oYWxwaGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gbCAqIE1hdGguY29zKGFscGhhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gW2xpbmVbMF1bMF0gLSBkeCwgbGluZVswXVsxXSArIGR5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBjeCA9IHRoaXMucmVuZGVyZXIuZ2V0T2Zmc2V0KGNbMF0gLSBnYXAgLyA0LCBjWzBdICsgZ2FwIC8gNCwgbyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3kgPSB0aGlzLnJlbmRlcmVyLmdldE9mZnNldChjWzFdIC0gZ2FwIC8gNCwgY1sxXSArIGdhcCAvIDQsIG8pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsbGlwc2UgPSB0aGlzLnJlbmRlcmVyLmVsbGlwc2UoY3gsIGN5LCBmd2VpZ2h0LCBmd2VpZ2h0LCBvKTtcbiAgICAgICAgICAgICAgICBvcHMgPSBvcHMuY29uY2F0KGVsbGlwc2Uub3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0eXBlOiAnZmlsbFNrZXRjaCcsIG9wcyB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFNlZ21lbnQgfSBmcm9tICcuLi9nZW9tZXRyeSc7XG5pbXBvcnQgeyBIYWNodXJlSXRlcmF0b3IgfSBmcm9tICcuLi91dGlscy9oYWNodXJlJztcbmV4cG9ydCBmdW5jdGlvbiBsaW5lTGVuZ3RoKGxpbmUpIHtcbiAgICBjb25zdCBwMSA9IGxpbmVbMF07XG4gICAgY29uc3QgcDIgPSBsaW5lWzFdO1xuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDFbMF0gLSBwMlswXSwgMikgKyBNYXRoLnBvdyhwMVsxXSAtIHAyWzFdLCAyKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0SW50ZXJzZWN0aW5nTGluZXMobGluZSwgcG9pbnRzKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IFtdO1xuICAgIGNvbnN0IHMxID0gbmV3IFNlZ21lbnQoW2xpbmVbMF0sIGxpbmVbMV1dLCBbbGluZVsyXSwgbGluZVszXV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHMyID0gbmV3IFNlZ21lbnQocG9pbnRzW2ldLCBwb2ludHNbKGkgKyAxKSAlIHBvaW50cy5sZW5ndGhdKTtcbiAgICAgICAgaWYgKHMxLmludGVyc2VjdHMoczIpKSB7XG4gICAgICAgICAgICBpbnRlcnNlY3Rpb25zLnB1c2goW3MxLnhpLCBzMS55aV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFmZmluZSh4LCB5LCBjeCwgY3ksIHNpbkFuZ2xlUHJpbWUsIGNvc0FuZ2xlUHJpbWUsIFIpIHtcbiAgICBjb25zdCBBID0gLWN4ICogY29zQW5nbGVQcmltZSAtIGN5ICogc2luQW5nbGVQcmltZSArIGN4O1xuICAgIGNvbnN0IEIgPSBSICogKGN4ICogc2luQW5nbGVQcmltZSAtIGN5ICogY29zQW5nbGVQcmltZSkgKyBjeTtcbiAgICBjb25zdCBDID0gY29zQW5nbGVQcmltZTtcbiAgICBjb25zdCBEID0gc2luQW5nbGVQcmltZTtcbiAgICBjb25zdCBFID0gLVIgKiBzaW5BbmdsZVByaW1lO1xuICAgIGNvbnN0IEYgPSBSICogY29zQW5nbGVQcmltZTtcbiAgICByZXR1cm4gW1xuICAgICAgICBBICsgQyAqIHggKyBEICogeSxcbiAgICAgICAgQiArIEUgKiB4ICsgRiAqIHlcbiAgICBdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhhY2h1cmVMaW5lc0ZvclBvbHlnb24ocG9pbnRzLCBvKSB7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgaWYgKHBvaW50cyAmJiBwb2ludHMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBsZWZ0ID0gcG9pbnRzWzBdWzBdO1xuICAgICAgICBsZXQgcmlnaHQgPSBwb2ludHNbMF1bMF07XG4gICAgICAgIGxldCB0b3AgPSBwb2ludHNbMF1bMV07XG4gICAgICAgIGxldCBib3R0b20gPSBwb2ludHNbMF1bMV07XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZWZ0ID0gTWF0aC5taW4obGVmdCwgcG9pbnRzW2ldWzBdKTtcbiAgICAgICAgICAgIHJpZ2h0ID0gTWF0aC5tYXgocmlnaHQsIHBvaW50c1tpXVswXSk7XG4gICAgICAgICAgICB0b3AgPSBNYXRoLm1pbih0b3AsIHBvaW50c1tpXVsxXSk7XG4gICAgICAgICAgICBib3R0b20gPSBNYXRoLm1heChib3R0b20sIHBvaW50c1tpXVsxXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYW5nbGUgPSBvLmhhY2h1cmVBbmdsZTtcbiAgICAgICAgbGV0IGdhcCA9IG8uaGFjaHVyZUdhcDtcbiAgICAgICAgaWYgKGdhcCA8IDApIHtcbiAgICAgICAgICAgIGdhcCA9IG8uc3Ryb2tlV2lkdGggKiA0O1xuICAgICAgICB9XG4gICAgICAgIGdhcCA9IE1hdGgubWF4KGdhcCwgMC4xKTtcbiAgICAgICAgY29uc3QgcmFkUGVyRGVnID0gTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgY29uc3QgaGFjaHVyZUFuZ2xlID0gKGFuZ2xlICUgMTgwKSAqIHJhZFBlckRlZztcbiAgICAgICAgY29uc3QgY29zQW5nbGUgPSBNYXRoLmNvcyhoYWNodXJlQW5nbGUpO1xuICAgICAgICBjb25zdCBzaW5BbmdsZSA9IE1hdGguc2luKGhhY2h1cmVBbmdsZSk7XG4gICAgICAgIGNvbnN0IHRhbkFuZ2xlID0gTWF0aC50YW4oaGFjaHVyZUFuZ2xlKTtcbiAgICAgICAgY29uc3QgaXQgPSBuZXcgSGFjaHVyZUl0ZXJhdG9yKHRvcCAtIDEsIGJvdHRvbSArIDEsIGxlZnQgLSAxLCByaWdodCArIDEsIGdhcCwgc2luQW5nbGUsIGNvc0FuZ2xlLCB0YW5BbmdsZSk7XG4gICAgICAgIGxldCByZWN0O1xuICAgICAgICB3aGlsZSAoKHJlY3QgPSBpdC5uZXh0TGluZSgpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IGdldEludGVyc2VjdGluZ0xpbmVzKHJlY3QsIHBvaW50cyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPCAobGluZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcDEgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcDIgPSBsaW5lc1tpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKFtwMSwgcDJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYWNodXJlTGluZXNGb3JFbGxpcHNlKGN4LCBjeSwgd2lkdGgsIGhlaWdodCwgbywgcmVuZGVyZXIpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBsZXQgcnggPSBNYXRoLmFicyh3aWR0aCAvIDIpO1xuICAgIGxldCByeSA9IE1hdGguYWJzKGhlaWdodCAvIDIpO1xuICAgIHJ4ICs9IHJlbmRlcmVyLmdldE9mZnNldCgtcnggKiAwLjA1LCByeCAqIDAuMDUsIG8pO1xuICAgIHJ5ICs9IHJlbmRlcmVyLmdldE9mZnNldCgtcnkgKiAwLjA1LCByeSAqIDAuMDUsIG8pO1xuICAgIGNvbnN0IGFuZ2xlID0gby5oYWNodXJlQW5nbGU7XG4gICAgbGV0IGdhcCA9IG8uaGFjaHVyZUdhcDtcbiAgICBpZiAoZ2FwIDw9IDApIHtcbiAgICAgICAgZ2FwID0gby5zdHJva2VXaWR0aCAqIDQ7XG4gICAgfVxuICAgIGxldCBmd2VpZ2h0ID0gby5maWxsV2VpZ2h0O1xuICAgIGlmIChmd2VpZ2h0IDwgMCkge1xuICAgICAgICBmd2VpZ2h0ID0gby5zdHJva2VXaWR0aCAvIDI7XG4gICAgfVxuICAgIGNvbnN0IHJhZFBlckRlZyA9IE1hdGguUEkgLyAxODA7XG4gICAgY29uc3QgaGFjaHVyZUFuZ2xlID0gKGFuZ2xlICUgMTgwKSAqIHJhZFBlckRlZztcbiAgICBjb25zdCB0YW5BbmdsZSA9IE1hdGgudGFuKGhhY2h1cmVBbmdsZSk7XG4gICAgY29uc3QgYXNwZWN0UmF0aW8gPSByeSAvIHJ4O1xuICAgIGNvbnN0IGh5cCA9IE1hdGguc3FydChhc3BlY3RSYXRpbyAqIHRhbkFuZ2xlICogYXNwZWN0UmF0aW8gKiB0YW5BbmdsZSArIDEpO1xuICAgIGNvbnN0IHNpbkFuZ2xlUHJpbWUgPSBhc3BlY3RSYXRpbyAqIHRhbkFuZ2xlIC8gaHlwO1xuICAgIGNvbnN0IGNvc0FuZ2xlUHJpbWUgPSAxIC8gaHlwO1xuICAgIGNvbnN0IGdhcFByaW1lID0gZ2FwIC8gKChyeCAqIHJ5IC8gTWF0aC5zcXJ0KChyeSAqIGNvc0FuZ2xlUHJpbWUpICogKHJ5ICogY29zQW5nbGVQcmltZSkgKyAocnggKiBzaW5BbmdsZVByaW1lKSAqIChyeCAqIHNpbkFuZ2xlUHJpbWUpKSkgLyByeCk7XG4gICAgbGV0IGhhbGZMZW4gPSBNYXRoLnNxcnQoKHJ4ICogcngpIC0gKGN4IC0gcnggKyBnYXBQcmltZSkgKiAoY3ggLSByeCArIGdhcFByaW1lKSk7XG4gICAgZm9yIChsZXQgeFBvcyA9IGN4IC0gcnggKyBnYXBQcmltZTsgeFBvcyA8IGN4ICsgcng7IHhQb3MgKz0gZ2FwUHJpbWUpIHtcbiAgICAgICAgaGFsZkxlbiA9IE1hdGguc3FydCgocnggKiByeCkgLSAoY3ggLSB4UG9zKSAqIChjeCAtIHhQb3MpKTtcbiAgICAgICAgY29uc3QgcDEgPSBhZmZpbmUoeFBvcywgY3kgLSBoYWxmTGVuLCBjeCwgY3ksIHNpbkFuZ2xlUHJpbWUsIGNvc0FuZ2xlUHJpbWUsIGFzcGVjdFJhdGlvKTtcbiAgICAgICAgY29uc3QgcDIgPSBhZmZpbmUoeFBvcywgY3kgKyBoYWxmTGVuLCBjeCwgY3ksIHNpbkFuZ2xlUHJpbWUsIGNvc0FuZ2xlUHJpbWUsIGFzcGVjdFJhdGlvKTtcbiAgICAgICAgcmV0LnB1c2goW3AxLCBwMl0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuIiwiaW1wb3J0IHsgSGFjaHVyZUZpbGxlciB9IGZyb20gJy4vaGFjaHVyZS1maWxsZXInO1xuaW1wb3J0IHsgWmlnWmFnRmlsbGVyIH0gZnJvbSAnLi96aWd6YWctZmlsbGVyJztcbmltcG9ydCB7IEhhdGNoRmlsbGVyIH0gZnJvbSAnLi9oYXRjaC1maWxsZXInO1xuaW1wb3J0IHsgRG90RmlsbGVyIH0gZnJvbSAnLi9kb3QtZmlsbGVyJztcbmNvbnN0IGZpbGxlcnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxsZXIocmVuZGVyZXIsIG8pIHtcbiAgICBsZXQgZmlsbGVyTmFtZSA9IG8uZmlsbFN0eWxlIHx8ICdoYWNodXJlJztcbiAgICBpZiAoIWZpbGxlcnNbZmlsbGVyTmFtZV0pIHtcbiAgICAgICAgc3dpdGNoIChmaWxsZXJOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICd6aWd6YWcnOlxuICAgICAgICAgICAgICAgIGlmICghZmlsbGVyc1tmaWxsZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBmaWxsZXJzW2ZpbGxlck5hbWVdID0gbmV3IFppZ1phZ0ZpbGxlcihyZW5kZXJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3Jvc3MtaGF0Y2gnOlxuICAgICAgICAgICAgICAgIGlmICghZmlsbGVyc1tmaWxsZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBmaWxsZXJzW2ZpbGxlck5hbWVdID0gbmV3IEhhdGNoRmlsbGVyKHJlbmRlcmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkb3RzJzpcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGxlcnNbZmlsbGVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVyc1tmaWxsZXJOYW1lXSA9IG5ldyBEb3RGaWxsZXIocmVuZGVyZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hhY2h1cmUnOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmaWxsZXJOYW1lID0gJ2hhY2h1cmUnO1xuICAgICAgICAgICAgICAgIGlmICghZmlsbGVyc1tmaWxsZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBmaWxsZXJzW2ZpbGxlck5hbWVdID0gbmV3IEhhY2h1cmVGaWxsZXIocmVuZGVyZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmlsbGVyc1tmaWxsZXJOYW1lXTtcbn1cbiIsImltcG9ydCB7IGhhY2h1cmVMaW5lc0ZvclBvbHlnb24sIGhhY2h1cmVMaW5lc0ZvckVsbGlwc2UgfSBmcm9tICcuL2ZpbGxlci11dGlscyc7XG5leHBvcnQgY2xhc3MgSGFjaHVyZUZpbGxlciB7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIH1cbiAgICBmaWxsUG9seWdvbihwb2ludHMsIG8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbGxQb2x5Z29uKHBvaW50cywgbyk7XG4gICAgfVxuICAgIGZpbGxFbGxpcHNlKGN4LCBjeSwgd2lkdGgsIGhlaWdodCwgbykge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsbEVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvKTtcbiAgICB9XG4gICAgX2ZpbGxQb2x5Z29uKHBvaW50cywgbywgY29ubmVjdEVuZHMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBsaW5lcyA9IGhhY2h1cmVMaW5lc0ZvclBvbHlnb24ocG9pbnRzLCBvKTtcbiAgICAgICAgY29uc3Qgb3BzID0gdGhpcy5yZW5kZXJMaW5lcyhsaW5lcywgbywgY29ubmVjdEVuZHMpO1xuICAgICAgICByZXR1cm4geyB0eXBlOiAnZmlsbFNrZXRjaCcsIG9wcyB9O1xuICAgIH1cbiAgICBfZmlsbEVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvLCBjb25uZWN0RW5kcyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gaGFjaHVyZUxpbmVzRm9yRWxsaXBzZShjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIG8sIHRoaXMucmVuZGVyZXIpO1xuICAgICAgICBjb25zdCBvcHMgPSB0aGlzLnJlbmRlckxpbmVzKGxpbmVzLCBvLCBjb25uZWN0RW5kcyk7XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdmaWxsU2tldGNoJywgb3BzIH07XG4gICAgfVxuICAgIHJlbmRlckxpbmVzKGxpbmVzLCBvLCBjb25uZWN0RW5kcykge1xuICAgICAgICBsZXQgb3BzID0gW107XG4gICAgICAgIGxldCBwcmV2UG9pbnQgPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5yZW5kZXJlci5kb3VibGVMaW5lKGxpbmVbMF1bMF0sIGxpbmVbMF1bMV0sIGxpbmVbMV1bMF0sIGxpbmVbMV1bMV0sIG8pKTtcbiAgICAgICAgICAgIGlmIChjb25uZWN0RW5kcyAmJiBwcmV2UG9pbnQpIHtcbiAgICAgICAgICAgICAgICBvcHMgPSBvcHMuY29uY2F0KHRoaXMucmVuZGVyZXIuZG91YmxlTGluZShwcmV2UG9pbnRbMF0sIHByZXZQb2ludFsxXSwgbGluZVswXVswXSwgbGluZVswXVsxXSwgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldlBvaW50ID0gbGluZVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3BzO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEhhY2h1cmVGaWxsZXIgfSBmcm9tICcuL2hhY2h1cmUtZmlsbGVyJztcbmV4cG9ydCBjbGFzcyBIYXRjaEZpbGxlciBleHRlbmRzIEhhY2h1cmVGaWxsZXIge1xuICAgIGZpbGxQb2x5Z29uKHBvaW50cywgbykge1xuICAgICAgICBjb25zdCBzZXQgPSB0aGlzLl9maWxsUG9seWdvbihwb2ludHMsIG8pO1xuICAgICAgICBjb25zdCBvMiA9IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgaGFjaHVyZUFuZ2xlOiBvLmhhY2h1cmVBbmdsZSArIDkwIH0pO1xuICAgICAgICBjb25zdCBzZXQyID0gdGhpcy5fZmlsbFBvbHlnb24ocG9pbnRzLCBvMik7XG4gICAgICAgIHNldC5vcHMgPSBzZXQub3BzLmNvbmNhdChzZXQyLm9wcyk7XG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgfVxuICAgIGZpbGxFbGxpcHNlKGN4LCBjeSwgd2lkdGgsIGhlaWdodCwgbykge1xuICAgICAgICBjb25zdCBzZXQgPSB0aGlzLl9maWxsRWxsaXBzZShjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIG8pO1xuICAgICAgICBjb25zdCBvMiA9IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgaGFjaHVyZUFuZ2xlOiBvLmhhY2h1cmVBbmdsZSArIDkwIH0pO1xuICAgICAgICBjb25zdCBzZXQyID0gdGhpcy5fZmlsbEVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvMik7XG4gICAgICAgIHNldC5vcHMgPSBzZXQub3BzLmNvbmNhdChzZXQyLm9wcyk7XG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSGFjaHVyZUZpbGxlciB9IGZyb20gJy4vaGFjaHVyZS1maWxsZXInO1xuZXhwb3J0IGNsYXNzIFppZ1phZ0ZpbGxlciBleHRlbmRzIEhhY2h1cmVGaWxsZXIge1xuICAgIGZpbGxQb2x5Z29uKHBvaW50cywgbykge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsbFBvbHlnb24ocG9pbnRzLCBvLCB0cnVlKTtcbiAgICB9XG4gICAgZmlsbEVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWxsRWxsaXBzZShjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIG8sIHRydWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJvdWdoR2VuZXJhdG9yQmFzZSB9IGZyb20gJy4vZ2VuZXJhdG9yLWJhc2UnO1xuZXhwb3J0IGNsYXNzIFJvdWdoR2VuZXJhdG9yQXN5bmMgZXh0ZW5kcyBSb3VnaEdlbmVyYXRvckJhc2Uge1xuICAgIGFzeW5jIGxpbmUoeDEsIHkxLCB4MiwgeTIsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgnbGluZScsIFthd2FpdCB0aGlzLmxpYi5saW5lKHgxLCB5MSwgeDIsIHkyLCBvKV0sIG8pO1xuICAgIH1cbiAgICBhc3luYyByZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBbXTtcbiAgICAgICAgaWYgKG8uZmlsbCkge1xuICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gW1t4LCB5XSwgW3ggKyB3aWR0aCwgeV0sIFt4ICsgd2lkdGgsIHkgKyBoZWlnaHRdLCBbeCwgeSArIGhlaWdodF1dO1xuICAgICAgICAgICAgaWYgKG8uZmlsbFN0eWxlID09PSAnc29saWQnKSB7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChhd2FpdCB0aGlzLmxpYi5zb2xpZEZpbGxQb2x5Z29uKHBvaW50cywgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChhd2FpdCB0aGlzLmxpYi5wYXR0ZXJuRmlsbFBvbHlnb24ocG9pbnRzLCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGF0aHMucHVzaChhd2FpdCB0aGlzLmxpYi5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgbykpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ3JlY3RhbmdsZScsIHBhdGhzLCBvKTtcbiAgICB9XG4gICAgYXN5bmMgZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBwYXRocyA9IFtdO1xuICAgICAgICBpZiAoby5maWxsKSB7XG4gICAgICAgICAgICBpZiAoby5maWxsU3R5bGUgPT09ICdzb2xpZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZSA9IGF3YWl0IHRoaXMubGliLmVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgbyk7XG4gICAgICAgICAgICAgICAgc2hhcGUudHlwZSA9ICdmaWxsUGF0aCc7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChzaGFwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKGF3YWl0IHRoaXMubGliLnBhdHRlcm5GaWxsRWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGF0aHMucHVzaChhd2FpdCB0aGlzLmxpYi5lbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdlbGxpcHNlJywgcGF0aHMsIG8pO1xuICAgIH1cbiAgICBhc3luYyBjaXJjbGUoeCwgeSwgZGlhbWV0ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgdGhpcy5lbGxpcHNlKHgsIHksIGRpYW1ldGVyLCBkaWFtZXRlciwgb3B0aW9ucyk7XG4gICAgICAgIHJldC5zaGFwZSA9ICdjaXJjbGUnO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICBhc3luYyBsaW5lYXJQYXRoKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdsaW5lYXJQYXRoJywgW2F3YWl0IHRoaXMubGliLmxpbmVhclBhdGgocG9pbnRzLCBmYWxzZSwgbyldLCBvKTtcbiAgICB9XG4gICAgYXN5bmMgYXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCBjbG9zZWQgPSBmYWxzZSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBbXTtcbiAgICAgICAgaWYgKGNsb3NlZCAmJiBvLmZpbGwpIHtcbiAgICAgICAgICAgIGlmIChvLmZpbGxTdHlsZSA9PT0gJ3NvbGlkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gYXdhaXQgdGhpcy5saWIuYXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCB0cnVlLCBmYWxzZSwgbyk7XG4gICAgICAgICAgICAgICAgc2hhcGUudHlwZSA9ICdmaWxsUGF0aCc7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChzaGFwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKGF3YWl0IHRoaXMubGliLnBhdHRlcm5GaWxsQXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGF0aHMucHVzaChhd2FpdCB0aGlzLmxpYi5hcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCwgdHJ1ZSwgbykpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ2FyYycsIHBhdGhzLCBvKTtcbiAgICB9XG4gICAgYXN5bmMgY3VydmUocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ2N1cnZlJywgW2F3YWl0IHRoaXMubGliLmN1cnZlKHBvaW50cywgbyldLCBvKTtcbiAgICB9XG4gICAgYXN5bmMgcG9seWdvbihwb2ludHMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICAgIGlmIChvLmZpbGwpIHtcbiAgICAgICAgICAgIGlmIChvLmZpbGxTdHlsZSA9PT0gJ3NvbGlkJykge1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goYXdhaXQgdGhpcy5saWIuc29saWRGaWxsUG9seWdvbihwb2ludHMsIG8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmNvbXB1dGVQb2x5Z29uU2l6ZShwb2ludHMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxQb2ludHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW3NpemVbMF0sIDBdLFxuICAgICAgICAgICAgICAgICAgICBbc2l6ZVswXSwgc2l6ZVsxXV0sXG4gICAgICAgICAgICAgICAgICAgIFswLCBzaXplWzFdXVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBhd2FpdCB0aGlzLmxpYi5wYXR0ZXJuRmlsbFBvbHlnb24oZmlsbFBvaW50cywgbyk7XG4gICAgICAgICAgICAgICAgc2hhcGUudHlwZSA9ICdwYXRoMkRwYXR0ZXJuJztcbiAgICAgICAgICAgICAgICBzaGFwZS5zaXplID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBzaGFwZS5wYXRoID0gdGhpcy5wb2x5Z29uUGF0aChwb2ludHMpO1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goc2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLnB1c2goYXdhaXQgdGhpcy5saWIubGluZWFyUGF0aChwb2ludHMsIHRydWUsIG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdwb2x5Z29uJywgcGF0aHMsIG8pO1xuICAgIH1cbiAgICBhc3luYyBwYXRoKGQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdwYXRoJywgcGF0aHMsIG8pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvLmZpbGwpIHtcbiAgICAgICAgICAgIGlmIChvLmZpbGxTdHlsZSA9PT0gJ3NvbGlkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlID0geyB0eXBlOiAncGF0aDJEZmlsbCcsIHBhdGg6IGQsIG9wczogW10gfTtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHNoYXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmNvbXB1dGVQYXRoU2l6ZShkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW3NpemVbMF0sIDBdLFxuICAgICAgICAgICAgICAgICAgICBbc2l6ZVswXSwgc2l6ZVsxXV0sXG4gICAgICAgICAgICAgICAgICAgIFswLCBzaXplWzFdXVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBhd2FpdCB0aGlzLmxpYi5wYXR0ZXJuRmlsbFBvbHlnb24ocG9pbnRzLCBvKTtcbiAgICAgICAgICAgICAgICBzaGFwZS50eXBlID0gJ3BhdGgyRHBhdHRlcm4nO1xuICAgICAgICAgICAgICAgIHNoYXBlLnNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIHNoYXBlLnBhdGggPSBkO1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goc2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLnB1c2goYXdhaXQgdGhpcy5saWIuc3ZnUGF0aChkLCBvKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgncGF0aCcsIHBhdGhzLCBvKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXItZmFjdG9yeS5qcyc7XG5jb25zdCBoYXNTZWxmID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0IGNsYXNzIFJvdWdoR2VuZXJhdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBzdXJmYWNlKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtYXhSYW5kb21uZXNzT2Zmc2V0OiAyLFxuICAgICAgICAgICAgcm91Z2huZXNzOiAxLFxuICAgICAgICAgICAgYm93aW5nOiAxLFxuICAgICAgICAgICAgc3Ryb2tlOiAnIzAwMCcsXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogMSxcbiAgICAgICAgICAgIGN1cnZlVGlnaHRuZXNzOiAwLFxuICAgICAgICAgICAgY3VydmVTdGVwQ291bnQ6IDksXG4gICAgICAgICAgICBmaWxsU3R5bGU6ICdoYWNodXJlJyxcbiAgICAgICAgICAgIGZpbGxXZWlnaHQ6IC0xLFxuICAgICAgICAgICAgaGFjaHVyZUFuZ2xlOiAtNDEsXG4gICAgICAgICAgICBoYWNodXJlR2FwOiAtMVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgICAgdGhpcy5zdXJmYWNlID0gc3VyZmFjZTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IGNyZWF0ZVJlbmRlcmVyKHRoaXMuY29uZmlnKTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB0aGlzLl9vcHRpb25zKHRoaXMuY29uZmlnLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9vcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMgPyBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKSA6IHRoaXMuZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuICAgIF9kcmF3YWJsZShzaGFwZSwgc2V0cywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4geyBzaGFwZSwgc2V0czogc2V0cyB8fCBbXSwgb3B0aW9uczogb3B0aW9ucyB8fCB0aGlzLmRlZmF1bHRPcHRpb25zIH07XG4gICAgfVxuICAgIGdldCBsaWIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyO1xuICAgIH1cbiAgICBnZXRDYW52YXNTaXplKCkge1xuICAgICAgICBjb25zdCB2YWwgPSAodykgPT4ge1xuICAgICAgICAgICAgaWYgKHcgJiYgdHlwZW9mIHcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHcuYmFzZVZhbCAmJiB3LmJhc2VWYWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHcuYmFzZVZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdyB8fCAxMDA7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnN1cmZhY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBbdmFsKHRoaXMuc3VyZmFjZS53aWR0aCksIHZhbCh0aGlzLnN1cmZhY2UuaGVpZ2h0KV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsxMDAsIDEwMF07XG4gICAgfVxuICAgIGNvbXB1dGVQb2x5Z29uU2l6ZShwb2ludHMpIHtcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBsZWZ0ID0gcG9pbnRzWzBdWzBdO1xuICAgICAgICAgICAgbGV0IHJpZ2h0ID0gcG9pbnRzWzBdWzBdO1xuICAgICAgICAgICAgbGV0IHRvcCA9IHBvaW50c1swXVsxXTtcbiAgICAgICAgICAgIGxldCBib3R0b20gPSBwb2ludHNbMF1bMV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxlZnQgPSBNYXRoLm1pbihsZWZ0LCBwb2ludHNbaV1bMF0pO1xuICAgICAgICAgICAgICAgIHJpZ2h0ID0gTWF0aC5tYXgocmlnaHQsIHBvaW50c1tpXVswXSk7XG4gICAgICAgICAgICAgICAgdG9wID0gTWF0aC5taW4odG9wLCBwb2ludHNbaV1bMV0pO1xuICAgICAgICAgICAgICAgIGJvdHRvbSA9IE1hdGgubWF4KGJvdHRvbSwgcG9pbnRzW2ldWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbKHJpZ2h0IC0gbGVmdCksIChib3R0b20gLSB0b3ApXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzAsIDBdO1xuICAgIH1cbiAgICBwb2x5Z29uUGF0aChwb2ludHMpIHtcbiAgICAgICAgbGV0IGQgPSAnJztcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGQgPSBgTSR7cG9pbnRzWzBdWzBdfSwke3BvaW50c1swXVsxXX1gO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkID0gYCR7ZH0gTCR7cG9pbnRzW2ldWzBdfSwke3BvaW50c1tpXVsxXX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBjb21wdXRlUGF0aFNpemUoZCkge1xuICAgICAgICBsZXQgc2l6ZSA9IFswLCAwXTtcbiAgICAgICAgaWYgKGhhc1NlbGYgJiYgc2VsZi5kb2N1bWVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ZnID0gc2VsZi5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdzdmcnKTtcbiAgICAgICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcwJyk7XG4gICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzAnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoTm9kZSA9IHNlbGYuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAncGF0aCcpO1xuICAgICAgICAgICAgICAgIHBhdGhOb2RlLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xuICAgICAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoTm9kZSk7XG4gICAgICAgICAgICAgICAgc2VsZi5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN2Zyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmIgPSBwYXRoTm9kZS5nZXRCQm94KCk7XG4gICAgICAgICAgICAgICAgaWYgKGJiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpemVbMF0gPSBiYi53aWR0aCB8fCAwO1xuICAgICAgICAgICAgICAgICAgICBzaXplWzFdID0gYmIuaGVpZ2h0IHx8IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzdmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgeyB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FudmFzU2l6ZSA9IHRoaXMuZ2V0Q2FudmFzU2l6ZSgpO1xuICAgICAgICBpZiAoIShzaXplWzBdICogc2l6ZVsxXSkpIHtcbiAgICAgICAgICAgIHNpemUgPSBjYW52YXNTaXplO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH1cbiAgICB0b1BhdGhzKGRyYXdhYmxlKSB7XG4gICAgICAgIGNvbnN0IHNldHMgPSBkcmF3YWJsZS5zZXRzIHx8IFtdO1xuICAgICAgICBjb25zdCBvID0gZHJhd2FibGUub3B0aW9ucyB8fCB0aGlzLmRlZmF1bHRPcHRpb25zO1xuICAgICAgICBjb25zdCBwYXRocyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGRyYXdpbmcgb2Ygc2V0cykge1xuICAgICAgICAgICAgbGV0IHBhdGggPSBudWxsO1xuICAgICAgICAgICAgc3dpdGNoIChkcmF3aW5nLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ6IHRoaXMub3BzVG9QYXRoKGRyYXdpbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBvLnN0cm9rZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBvLnN0cm9rZVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbGxQYXRoJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ6IHRoaXMub3BzVG9QYXRoKGRyYXdpbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IG8uZmlsbCB8fCAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZmlsbFNrZXRjaCc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB0aGlzLmZpbGxTa2V0Y2goZHJhd2luZywgbyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdGgyRGZpbGwnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZDogZHJhd2luZy5wYXRoIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IG8uZmlsbCB8fCAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncGF0aDJEcGF0dGVybic6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IGRyYXdpbmcuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAxLCBoZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBgMCAwICR7TWF0aC5yb3VuZChzaXplWzBdKX0gJHtNYXRoLnJvdW5kKHNpemVbMV0pfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVW5pdHM6ICdvYmplY3RCb3VuZGluZ0JveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiB0aGlzLmZpbGxTa2V0Y2goZHJhd2luZywgbylcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ6IGRyYXdpbmcucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgfVxuICAgIGZpbGxTa2V0Y2goZHJhd2luZywgbykge1xuICAgICAgICBsZXQgZndlaWdodCA9IG8uZmlsbFdlaWdodDtcbiAgICAgICAgaWYgKGZ3ZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBmd2VpZ2h0ID0gby5zdHJva2VXaWR0aCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGQ6IHRoaXMub3BzVG9QYXRoKGRyYXdpbmcpLFxuICAgICAgICAgICAgc3Ryb2tlOiBvLmZpbGwgfHwgJ25vbmUnLFxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IGZ3ZWlnaHQsXG4gICAgICAgICAgICBmaWxsOiAnbm9uZSdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb3BzVG9QYXRoKGRyYXdpbmcpIHtcbiAgICAgICAgbGV0IHBhdGggPSAnJztcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRyYXdpbmcub3BzKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gaXRlbS5kYXRhO1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtLm9wKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gYE0ke2RhdGFbMF19ICR7ZGF0YVsxXX0gYDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYmN1cnZlVG8nOlxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IGBDJHtkYXRhWzBdfSAke2RhdGFbMV19LCAke2RhdGFbMl19ICR7ZGF0YVszXX0sICR7ZGF0YVs0XX0gJHtkYXRhWzVdfSBgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdxY3VydmVUbyc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gYFEke2RhdGFbMF19ICR7ZGF0YVsxXX0sICR7ZGF0YVsyXX0gJHtkYXRhWzNdfSBgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IGBMJHtkYXRhWzBdfSAke2RhdGFbMV19IGA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoLnRyaW0oKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSb3VnaEdlbmVyYXRvckJhc2UgfSBmcm9tICcuL2dlbmVyYXRvci1iYXNlJztcbmV4cG9ydCBjbGFzcyBSb3VnaEdlbmVyYXRvciBleHRlbmRzIFJvdWdoR2VuZXJhdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBzdXJmYWNlKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZywgc3VyZmFjZSk7XG4gICAgfVxuICAgIGxpbmUoeDEsIHkxLCB4MiwgeTIsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgnbGluZScsIFt0aGlzLmxpYi5saW5lKHgxLCB5MSwgeDIsIHkyLCBvKV0sIG8pO1xuICAgIH1cbiAgICByZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBbXTtcbiAgICAgICAgaWYgKG8uZmlsbCkge1xuICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gW1t4LCB5XSwgW3ggKyB3aWR0aCwgeV0sIFt4ICsgd2lkdGgsIHkgKyBoZWlnaHRdLCBbeCwgeSArIGhlaWdodF1dO1xuICAgICAgICAgICAgaWYgKG8uZmlsbFN0eWxlID09PSAnc29saWQnKSB7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaCh0aGlzLmxpYi5zb2xpZEZpbGxQb2x5Z29uKHBvaW50cywgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaCh0aGlzLmxpYi5wYXR0ZXJuRmlsbFBvbHlnb24ocG9pbnRzLCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGF0aHMucHVzaCh0aGlzLmxpYi5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgbykpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ3JlY3RhbmdsZScsIHBhdGhzLCBvKTtcbiAgICB9XG4gICAgZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBwYXRocyA9IFtdO1xuICAgICAgICBpZiAoby5maWxsKSB7XG4gICAgICAgICAgICBpZiAoby5maWxsU3R5bGUgPT09ICdzb2xpZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMubGliLmVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgbyk7XG4gICAgICAgICAgICAgICAgc2hhcGUudHlwZSA9ICdmaWxsUGF0aCc7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChzaGFwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHRoaXMubGliLnBhdHRlcm5GaWxsRWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGF0aHMucHVzaCh0aGlzLmxpYi5lbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdlbGxpcHNlJywgcGF0aHMsIG8pO1xuICAgIH1cbiAgICBjaXJjbGUoeCwgeSwgZGlhbWV0ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gdGhpcy5lbGxpcHNlKHgsIHksIGRpYW1ldGVyLCBkaWFtZXRlciwgb3B0aW9ucyk7XG4gICAgICAgIHJldC5zaGFwZSA9ICdjaXJjbGUnO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICBsaW5lYXJQYXRoKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdsaW5lYXJQYXRoJywgW3RoaXMubGliLmxpbmVhclBhdGgocG9pbnRzLCBmYWxzZSwgbyldLCBvKTtcbiAgICB9XG4gICAgYXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCBjbG9zZWQgPSBmYWxzZSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBbXTtcbiAgICAgICAgaWYgKGNsb3NlZCAmJiBvLmZpbGwpIHtcbiAgICAgICAgICAgIGlmIChvLmZpbGxTdHlsZSA9PT0gJ3NvbGlkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5saWIuYXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCB0cnVlLCBmYWxzZSwgbyk7XG4gICAgICAgICAgICAgICAgc2hhcGUudHlwZSA9ICdmaWxsUGF0aCc7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChzaGFwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHRoaXMubGliLnBhdHRlcm5GaWxsQXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGF0aHMucHVzaCh0aGlzLmxpYi5hcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCwgdHJ1ZSwgbykpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ2FyYycsIHBhdGhzLCBvKTtcbiAgICB9XG4gICAgY3VydmUocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ2N1cnZlJywgW3RoaXMubGliLmN1cnZlKHBvaW50cywgbyldLCBvKTtcbiAgICB9XG4gICAgcG9seWdvbihwb2ludHMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICAgIGlmIChvLmZpbGwpIHtcbiAgICAgICAgICAgIGlmIChvLmZpbGxTdHlsZSA9PT0gJ3NvbGlkJykge1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2godGhpcy5saWIuc29saWRGaWxsUG9seWdvbihwb2ludHMsIG8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmNvbXB1dGVQb2x5Z29uU2l6ZShwb2ludHMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxQb2ludHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW3NpemVbMF0sIDBdLFxuICAgICAgICAgICAgICAgICAgICBbc2l6ZVswXSwgc2l6ZVsxXV0sXG4gICAgICAgICAgICAgICAgICAgIFswLCBzaXplWzFdXVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmxpYi5wYXR0ZXJuRmlsbFBvbHlnb24oZmlsbFBvaW50cywgbyk7XG4gICAgICAgICAgICAgICAgc2hhcGUudHlwZSA9ICdwYXRoMkRwYXR0ZXJuJztcbiAgICAgICAgICAgICAgICBzaGFwZS5zaXplID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBzaGFwZS5wYXRoID0gdGhpcy5wb2x5Z29uUGF0aChwb2ludHMpO1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goc2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLnB1c2godGhpcy5saWIubGluZWFyUGF0aChwb2ludHMsIHRydWUsIG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdwb2x5Z29uJywgcGF0aHMsIG8pO1xuICAgIH1cbiAgICBwYXRoKGQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdwYXRoJywgcGF0aHMsIG8pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvLmZpbGwpIHtcbiAgICAgICAgICAgIGlmIChvLmZpbGxTdHlsZSA9PT0gJ3NvbGlkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlID0geyB0eXBlOiAncGF0aDJEZmlsbCcsIHBhdGg6IGQsIG9wczogW10gfTtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHNoYXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmNvbXB1dGVQYXRoU2l6ZShkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW3NpemVbMF0sIDBdLFxuICAgICAgICAgICAgICAgICAgICBbc2l6ZVswXSwgc2l6ZVsxXV0sXG4gICAgICAgICAgICAgICAgICAgIFswLCBzaXplWzFdXVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmxpYi5wYXR0ZXJuRmlsbFBvbHlnb24ocG9pbnRzLCBvKTtcbiAgICAgICAgICAgICAgICBzaGFwZS50eXBlID0gJ3BhdGgyRHBhdHRlcm4nO1xuICAgICAgICAgICAgICAgIHNoYXBlLnNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIHNoYXBlLnBhdGggPSBkO1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goc2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLnB1c2godGhpcy5saWIuc3ZnUGF0aChkLCBvKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgncGF0aCcsIHBhdGhzLCBvKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2VnbWVudCB7XG4gICAgY29uc3RydWN0b3IocDEsIHAyKSB7XG4gICAgICAgIHRoaXMueGkgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICB0aGlzLnlpID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgdGhpcy5weDEgPSBwMVswXTtcbiAgICAgICAgdGhpcy5weTEgPSBwMVsxXTtcbiAgICAgICAgdGhpcy5weDIgPSBwMlswXTtcbiAgICAgICAgdGhpcy5weTIgPSBwMlsxXTtcbiAgICAgICAgdGhpcy5hID0gdGhpcy5weTIgLSB0aGlzLnB5MTtcbiAgICAgICAgdGhpcy5iID0gdGhpcy5weDEgLSB0aGlzLnB4MjtcbiAgICAgICAgdGhpcy5jID0gdGhpcy5weDIgKiB0aGlzLnB5MSAtIHRoaXMucHgxICogdGhpcy5weTI7XG4gICAgICAgIHRoaXMuX3VuZGVmaW5lZCA9ICgodGhpcy5hID09PSAwKSAmJiAodGhpcy5iID09PSAwKSAmJiAodGhpcy5jID09PSAwKSk7XG4gICAgfVxuICAgIGlzVW5kZWZpbmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpbnRlcnNlY3RzKG90aGVyU2VnbWVudCkge1xuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZCgpIHx8IG90aGVyU2VnbWVudC5pc1VuZGVmaW5lZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGdyYWQxID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgbGV0IGdyYWQyID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgbGV0IGludDEgPSAwLCBpbnQyID0gMDtcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuYSwgYiA9IHRoaXMuYiwgYyA9IHRoaXMuYztcbiAgICAgICAgaWYgKE1hdGguYWJzKGIpID4gMC4wMDAwMSkge1xuICAgICAgICAgICAgZ3JhZDEgPSAtYSAvIGI7XG4gICAgICAgICAgICBpbnQxID0gLWMgLyBiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChNYXRoLmFicyhvdGhlclNlZ21lbnQuYikgPiAwLjAwMDAxKSB7XG4gICAgICAgICAgICBncmFkMiA9IC1vdGhlclNlZ21lbnQuYSAvIG90aGVyU2VnbWVudC5iO1xuICAgICAgICAgICAgaW50MiA9IC1vdGhlclNlZ21lbnQuYyAvIG90aGVyU2VnbWVudC5iO1xuICAgICAgICB9XG4gICAgICAgIGlmIChncmFkMSA9PT0gTnVtYmVyLk1BWF9WQUxVRSkge1xuICAgICAgICAgICAgaWYgKGdyYWQyID09PSBOdW1iZXIuTUFYX1ZBTFVFKSB7XG4gICAgICAgICAgICAgICAgaWYgKCgtYyAvIGEpICE9PSAoLW90aGVyU2VnbWVudC5jIC8gb3RoZXJTZWdtZW50LmEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLnB5MSA+PSBNYXRoLm1pbihvdGhlclNlZ21lbnQucHkxLCBvdGhlclNlZ21lbnQucHkyKSkgJiYgKHRoaXMucHkxIDw9IE1hdGgubWF4KG90aGVyU2VnbWVudC5weTEsIG90aGVyU2VnbWVudC5weTIpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnhpID0gdGhpcy5weDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWkgPSB0aGlzLnB5MTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5weTIgPj0gTWF0aC5taW4ob3RoZXJTZWdtZW50LnB5MSwgb3RoZXJTZWdtZW50LnB5MikpICYmICh0aGlzLnB5MiA8PSBNYXRoLm1heChvdGhlclNlZ21lbnQucHkxLCBvdGhlclNlZ21lbnQucHkyKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aSA9IHRoaXMucHgyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnlpID0gdGhpcy5weTI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnhpID0gdGhpcy5weDE7XG4gICAgICAgICAgICB0aGlzLnlpID0gKGdyYWQyICogdGhpcy54aSArIGludDIpO1xuICAgICAgICAgICAgaWYgKCgodGhpcy5weTEgLSB0aGlzLnlpKSAqICh0aGlzLnlpIC0gdGhpcy5weTIpIDwgLTAuMDAwMDEpIHx8ICgob3RoZXJTZWdtZW50LnB5MSAtIHRoaXMueWkpICogKHRoaXMueWkgLSBvdGhlclNlZ21lbnQucHkyKSA8IC0wLjAwMDAxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhvdGhlclNlZ21lbnQuYSkgPCAwLjAwMDAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKChvdGhlclNlZ21lbnQucHgxIC0gdGhpcy54aSkgKiAodGhpcy54aSAtIG90aGVyU2VnbWVudC5weDIpIDwgLTAuMDAwMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChncmFkMiA9PT0gTnVtYmVyLk1BWF9WQUxVRSkge1xuICAgICAgICAgICAgdGhpcy54aSA9IG90aGVyU2VnbWVudC5weDE7XG4gICAgICAgICAgICB0aGlzLnlpID0gZ3JhZDEgKiB0aGlzLnhpICsgaW50MTtcbiAgICAgICAgICAgIGlmICgoKG90aGVyU2VnbWVudC5weTEgLSB0aGlzLnlpKSAqICh0aGlzLnlpIC0gb3RoZXJTZWdtZW50LnB5MikgPCAtMC4wMDAwMSkgfHwgKCh0aGlzLnB5MSAtIHRoaXMueWkpICogKHRoaXMueWkgLSB0aGlzLnB5MikgPCAtMC4wMDAwMSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYSkgPCAwLjAwMDAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLnB4MSAtIHRoaXMueGkpICogKHRoaXMueGkgLSB0aGlzLnB4MikgPCAtMC4wMDAwMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdyYWQxID09PSBncmFkMikge1xuICAgICAgICAgICAgaWYgKGludDEgIT09IGludDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHRoaXMucHgxID49IE1hdGgubWluKG90aGVyU2VnbWVudC5weDEsIG90aGVyU2VnbWVudC5weDIpKSAmJiAodGhpcy5weDEgPD0gTWF0aC5tYXgob3RoZXJTZWdtZW50LnB5MSwgb3RoZXJTZWdtZW50LnB5MikpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54aSA9IHRoaXMucHgxO1xuICAgICAgICAgICAgICAgIHRoaXMueWkgPSB0aGlzLnB5MTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgodGhpcy5weDIgPj0gTWF0aC5taW4ob3RoZXJTZWdtZW50LnB4MSwgb3RoZXJTZWdtZW50LnB4MikpICYmICh0aGlzLnB4MiA8PSBNYXRoLm1heChvdGhlclNlZ21lbnQucHgxLCBvdGhlclNlZ21lbnQucHgyKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhpID0gdGhpcy5weDI7XG4gICAgICAgICAgICAgICAgdGhpcy55aSA9IHRoaXMucHkyO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueGkgPSAoKGludDIgLSBpbnQxKSAvIChncmFkMSAtIGdyYWQyKSk7XG4gICAgICAgIHRoaXMueWkgPSAoZ3JhZDEgKiB0aGlzLnhpICsgaW50MSk7XG4gICAgICAgIGlmICgoKHRoaXMucHgxIC0gdGhpcy54aSkgKiAodGhpcy54aSAtIHRoaXMucHgyKSA8IC0wLjAwMDAxKSB8fCAoKG90aGVyU2VnbWVudC5weDEgLSB0aGlzLnhpKSAqICh0aGlzLnhpIC0gb3RoZXJTZWdtZW50LnB4MikgPCAtMC4wMDAwMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCJmdW5jdGlvbiBpc1R5cGUodG9rZW4sIHR5cGUpIHtcbiAgICByZXR1cm4gdG9rZW4udHlwZSA9PT0gdHlwZTtcbn1cbmNvbnN0IFBBUkFNUyA9IHtcbiAgICBBOiA3LFxuICAgIGE6IDcsXG4gICAgQzogNixcbiAgICBjOiA2LFxuICAgIEg6IDEsXG4gICAgaDogMSxcbiAgICBMOiAyLFxuICAgIGw6IDIsXG4gICAgTTogMixcbiAgICBtOiAyLFxuICAgIFE6IDQsXG4gICAgcTogNCxcbiAgICBTOiA0LFxuICAgIHM6IDQsXG4gICAgVDogNCxcbiAgICB0OiAyLFxuICAgIFY6IDEsXG4gICAgdjogMSxcbiAgICBaOiAwLFxuICAgIHo6IDBcbn07XG5jbGFzcyBQYXJzZWRQYXRoIHtcbiAgICBjb25zdHJ1Y3RvcihkKSB7XG4gICAgICAgIHRoaXMuQ09NTUFORCA9IDA7XG4gICAgICAgIHRoaXMuTlVNQkVSID0gMTtcbiAgICAgICAgdGhpcy5FT0QgPSAyO1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIHRoaXMucGFyc2VEYXRhKGQpO1xuICAgICAgICB0aGlzLnByb2Nlc3NQb2ludHMoKTtcbiAgICB9XG4gICAgdG9rZW5pemUoZCkge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgd2hpbGUgKGQgIT09ICcnKSB7XG4gICAgICAgICAgICBpZiAoZC5tYXRjaCgvXihbIFxcdFxcclxcbixdKykvKSkge1xuICAgICAgICAgICAgICAgIGQgPSBkLnN1YnN0cihSZWdFeHAuJDEubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGQubWF0Y2goL14oW2FBY0NoSGxMbU1xUXNTdFR2VnpaXSkvKSkge1xuICAgICAgICAgICAgICAgIHRva2Vuc1t0b2tlbnMubGVuZ3RoXSA9IHsgdHlwZTogdGhpcy5DT01NQU5ELCB0ZXh0OiBSZWdFeHAuJDEgfTtcbiAgICAgICAgICAgICAgICBkID0gZC5zdWJzdHIoUmVnRXhwLiQxLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkLm1hdGNoKC9eKChbLStdP1swLTldKyhcXC5bMC05XSopP3xbLStdP1xcLlswLTldKykoW2VFXVstK10/WzAtOV0rKT8pLykpIHtcbiAgICAgICAgICAgICAgICB0b2tlbnNbdG9rZW5zLmxlbmd0aF0gPSB7IHR5cGU6IHRoaXMuTlVNQkVSLCB0ZXh0OiBgJHtwYXJzZUZsb2F0KFJlZ0V4cC4kMSl9YCB9O1xuICAgICAgICAgICAgICAgIGQgPSBkLnN1YnN0cihSZWdFeHAuJDEubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VucmVjb2duaXplZCBzZWdtZW50IGNvbW1hbmQ6ICcgKyBkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zW3Rva2Vucy5sZW5ndGhdID0geyB0eXBlOiB0aGlzLkVPRCwgdGV4dDogJycgfTtcbiAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICB9XG4gICAgcGFyc2VEYXRhKGQpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlbml6ZShkKTtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IHRva2VuID0gdG9rZW5zW2luZGV4XTtcbiAgICAgICAgbGV0IG1vZGUgPSAnQk9EJztcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB3aGlsZSAoIWlzVHlwZSh0b2tlbiwgdGhpcy5FT0QpKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1fbGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gJ0JPRCcpIHtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4udGV4dCA9PT0gJ00nIHx8IHRva2VuLnRleHQgPT09ICdtJykge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbV9sZW5ndGggPSBQQVJBTVNbdG9rZW4udGV4dF07XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZURhdGEoJ00wLDAnICsgZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNUeXBlKHRva2VuLCB0aGlzLk5VTUJFUikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1fbGVuZ3RoID0gUEFSQU1TW21vZGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1fbGVuZ3RoID0gUEFSQU1TW3Rva2VuLnRleHRdO1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKGluZGV4ICsgcGFyYW1fbGVuZ3RoKSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIHBhcmFtX2xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlVG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1R5cGUobnVtYmVUb2tlbiwgdGhpcy5OVU1CRVIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNbcGFyYW1zLmxlbmd0aF0gPSArbnVtYmVUb2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGFyYW1ldGVyIHR5cGUgaXMgbm90IGEgbnVtYmVyOiAnICsgbW9kZSArICcsJyArIG51bWJlVG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBQQVJBTVNbbW9kZV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlZ21lbnQgPSB7IGtleTogbW9kZSwgZGF0YTogcGFyYW1zIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gcGFyYW1fbGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRva2Vuc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnTScpXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlID0gJ0wnO1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ20nKVxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vuc3VwcG9ydGVkIHNlZ21lbnQgdHlwZTogJyArIG1vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGF0aCBkYXRhIGVuZGVkIGJlZm9yZSBhbGwgcGFyYW1ldGVycyB3ZXJlIGZvdW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGNsb3NlZCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jbG9zZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcyBvZiB0aGlzLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMua2V5LnRvTG93ZXJDYXNlKCkgPT09ICd6Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2xvc2VkO1xuICAgIH1cbiAgICBwcm9jZXNzUG9pbnRzKCkge1xuICAgICAgICBsZXQgZmlyc3QgPSBudWxsO1xuICAgICAgICBsZXQgY3VycmVudFBvaW50ID0gWzAsIDBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLnNlZ21lbnRzW2ldO1xuICAgICAgICAgICAgc3dpdGNoIChzLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW3MuZGF0YVswXSwgcy5kYXRhWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbcy5kYXRhWzBdICsgY3VycmVudFBvaW50WzBdLCBzLmRhdGFbMV0gKyBjdXJyZW50UG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtzLmRhdGFbMF0sIGN1cnJlbnRQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW3MuZGF0YVswXSArIGN1cnJlbnRQb2ludFswXSwgY3VycmVudFBvaW50WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbY3VycmVudFBvaW50WzBdLCBzLmRhdGFbMF1dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtjdXJyZW50UG9pbnRbMF0sIHMuZGF0YVswXSArIGN1cnJlbnRQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3onOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1onOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbZmlyc3RbMF0sIGZpcnN0WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtzLmRhdGFbNF0sIHMuZGF0YVs1XV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW3MuZGF0YVs0XSArIGN1cnJlbnRQb2ludFswXSwgcy5kYXRhWzVdICsgY3VycmVudFBvaW50WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbcy5kYXRhWzJdLCBzLmRhdGFbM11dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtzLmRhdGFbMl0gKyBjdXJyZW50UG9pbnRbMF0sIHMuZGF0YVszXSArIGN1cnJlbnRQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW3MuZGF0YVsyXSwgcy5kYXRhWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbcy5kYXRhWzJdICsgY3VycmVudFBvaW50WzBdLCBzLmRhdGFbM10gKyBjdXJyZW50UG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtzLmRhdGFbNV0sIHMuZGF0YVs2XV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW3MuZGF0YVs1XSArIGN1cnJlbnRQb2ludFswXSwgcy5kYXRhWzZdICsgY3VycmVudFBvaW50WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5rZXkgPT09ICdtJyB8fCBzLmtleSA9PT0gJ00nKSB7XG4gICAgICAgICAgICAgICAgZmlyc3QgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucG9pbnQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9pbnQgPSBzLnBvaW50O1xuICAgICAgICAgICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBzLnBvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLmtleSA9PT0gJ3onIHx8IHMua2V5ID09PSAnWicpIHtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUm91Z2hQYXRoIHtcbiAgICBjb25zdHJ1Y3RvcihkKSB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gWzAsIDBdO1xuICAgICAgICB0aGlzLl9maXJzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuYmV6aWVyUmVmbGVjdGlvblBvaW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5xdWFkUmVmbGVjdGlvblBvaW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJzZWQgPSBuZXcgUGFyc2VkUGF0aChkKTtcbiAgICB9XG4gICAgZ2V0IHNlZ21lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZWQuc2VnbWVudHM7XG4gICAgfVxuICAgIGdldCBjbG9zZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlZC5jbG9zZWQ7XG4gICAgfVxuICAgIGdldCBsaW5lYXJQb2ludHMoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbGluZWFyUG9pbnRzKSB7XG4gICAgICAgICAgICBjb25zdCBscCA9IFtdO1xuICAgICAgICAgICAgbGV0IHBvaW50cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIHRoaXMucGFyc2VkLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcy5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnbScgfHwga2V5ID09PSAneicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxwLnB1c2gocG9pbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICd6Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzLnB1c2gocy5wb2ludCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBscC5wdXNoKHBvaW50cyk7XG4gICAgICAgICAgICAgICAgcG9pbnRzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9saW5lYXJQb2ludHMgPSBscDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbGluZWFyUG9pbnRzO1xuICAgIH1cbiAgICBnZXQgZmlyc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdDtcbiAgICB9XG4gICAgc2V0IGZpcnN0KHYpIHtcbiAgICAgICAgdGhpcy5fZmlyc3QgPSB2O1xuICAgIH1cbiAgICBzZXRQb3NpdGlvbih4LCB5KSB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gW3gsIHldO1xuICAgICAgICBpZiAoIXRoaXMuX2ZpcnN0KSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdCA9IFt4LCB5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgICB9XG4gICAgZ2V0IHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvblswXTtcbiAgICB9XG4gICAgZ2V0IHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvblsxXTtcbiAgICB9XG59XG4vLyBBbGdvcml0aG0gYXMgZGVzY3JpYmVkIGluIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcvaW1wbG5vdGUuaHRtbFxuLy8gQ29kZSBhZGFwdGVkIGZyb20gbnNTVkdQYXRoRGF0YVBhcnNlci5jcHAgaW4gTW96aWxsYSBcbi8vIGh0dHBzOi8vaGcubW96aWxsYS5vcmcvbW96aWxsYS1jZW50cmFsL2ZpbGUvMTcxNTZmYmViYmM4L2NvbnRlbnQvc3ZnL2NvbnRlbnQvc3JjL25zU1ZHUGF0aERhdGFQYXJzZXIuY3BwI2w4ODdcbmV4cG9ydCBjbGFzcyBSb3VnaEFyY0NvbnZlcnRlciB7XG4gICAgY29uc3RydWN0b3IoZnJvbSwgdG8sIHJhZGlpLCBhbmdsZSwgbGFyZ2VBcmNGbGFnLCBzd2VlcEZsYWcpIHtcbiAgICAgICAgdGhpcy5fc2VnSW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9udW1TZWdzID0gMDtcbiAgICAgICAgdGhpcy5fcnggPSAwO1xuICAgICAgICB0aGlzLl9yeSA9IDA7XG4gICAgICAgIHRoaXMuX3NpblBoaSA9IDA7XG4gICAgICAgIHRoaXMuX2Nvc1BoaSA9IDA7XG4gICAgICAgIHRoaXMuX0MgPSBbMCwgMF07XG4gICAgICAgIHRoaXMuX3RoZXRhID0gMDtcbiAgICAgICAgdGhpcy5fZGVsdGEgPSAwO1xuICAgICAgICB0aGlzLl9UID0gMDtcbiAgICAgICAgdGhpcy5fZnJvbSA9IGZyb207XG4gICAgICAgIGlmIChmcm9tWzBdID09PSB0b1swXSAmJiBmcm9tWzFdID09PSB0b1sxXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhZFBlckRlZyA9IE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMuX3J4ID0gTWF0aC5hYnMocmFkaWlbMF0pO1xuICAgICAgICB0aGlzLl9yeSA9IE1hdGguYWJzKHJhZGlpWzFdKTtcbiAgICAgICAgdGhpcy5fc2luUGhpID0gTWF0aC5zaW4oYW5nbGUgKiByYWRQZXJEZWcpO1xuICAgICAgICB0aGlzLl9jb3NQaGkgPSBNYXRoLmNvcyhhbmdsZSAqIHJhZFBlckRlZyk7XG4gICAgICAgIGNvbnN0IHgxZGFzaCA9IHRoaXMuX2Nvc1BoaSAqIChmcm9tWzBdIC0gdG9bMF0pIC8gMi4wICsgdGhpcy5fc2luUGhpICogKGZyb21bMV0gLSB0b1sxXSkgLyAyLjA7XG4gICAgICAgIGNvbnN0IHkxZGFzaCA9IC10aGlzLl9zaW5QaGkgKiAoZnJvbVswXSAtIHRvWzBdKSAvIDIuMCArIHRoaXMuX2Nvc1BoaSAqIChmcm9tWzFdIC0gdG9bMV0pIC8gMi4wO1xuICAgICAgICBsZXQgcm9vdCA9IDA7XG4gICAgICAgIGNvbnN0IG51bWVyYXRvciA9IHRoaXMuX3J4ICogdGhpcy5fcnggKiB0aGlzLl9yeSAqIHRoaXMuX3J5IC0gdGhpcy5fcnggKiB0aGlzLl9yeCAqIHkxZGFzaCAqIHkxZGFzaCAtIHRoaXMuX3J5ICogdGhpcy5fcnkgKiB4MWRhc2ggKiB4MWRhc2g7XG4gICAgICAgIGlmIChudW1lcmF0b3IgPCAwKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gTWF0aC5zcXJ0KDEgLSAobnVtZXJhdG9yIC8gKHRoaXMuX3J4ICogdGhpcy5fcnggKiB0aGlzLl9yeSAqIHRoaXMuX3J5KSkpO1xuICAgICAgICAgICAgdGhpcy5fcnggPSB0aGlzLl9yeCAqIHM7XG4gICAgICAgICAgICB0aGlzLl9yeSA9IHRoaXMuX3J5ICogcztcbiAgICAgICAgICAgIHJvb3QgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcm9vdCA9IChsYXJnZUFyY0ZsYWcgPT09IHN3ZWVwRmxhZyA/IC0xLjAgOiAxLjApICpcbiAgICAgICAgICAgICAgICBNYXRoLnNxcnQobnVtZXJhdG9yIC8gKHRoaXMuX3J4ICogdGhpcy5fcnggKiB5MWRhc2ggKiB5MWRhc2ggKyB0aGlzLl9yeSAqIHRoaXMuX3J5ICogeDFkYXNoICogeDFkYXNoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3hkYXNoID0gcm9vdCAqIHRoaXMuX3J4ICogeTFkYXNoIC8gdGhpcy5fcnk7XG4gICAgICAgIGNvbnN0IGN5ZGFzaCA9IC1yb290ICogdGhpcy5fcnkgKiB4MWRhc2ggLyB0aGlzLl9yeDtcbiAgICAgICAgdGhpcy5fQyA9IFswLCAwXTtcbiAgICAgICAgdGhpcy5fQ1swXSA9IHRoaXMuX2Nvc1BoaSAqIGN4ZGFzaCAtIHRoaXMuX3NpblBoaSAqIGN5ZGFzaCArIChmcm9tWzBdICsgdG9bMF0pIC8gMi4wO1xuICAgICAgICB0aGlzLl9DWzFdID0gdGhpcy5fc2luUGhpICogY3hkYXNoICsgdGhpcy5fY29zUGhpICogY3lkYXNoICsgKGZyb21bMV0gKyB0b1sxXSkgLyAyLjA7XG4gICAgICAgIHRoaXMuX3RoZXRhID0gdGhpcy5jYWxjdWxhdGVWZWN0b3JBbmdsZSgxLjAsIDAuMCwgKHgxZGFzaCAtIGN4ZGFzaCkgLyB0aGlzLl9yeCwgKHkxZGFzaCAtIGN5ZGFzaCkgLyB0aGlzLl9yeSk7XG4gICAgICAgIGxldCBkdGhldGEgPSB0aGlzLmNhbGN1bGF0ZVZlY3RvckFuZ2xlKCh4MWRhc2ggLSBjeGRhc2gpIC8gdGhpcy5fcngsICh5MWRhc2ggLSBjeWRhc2gpIC8gdGhpcy5fcnksICgteDFkYXNoIC0gY3hkYXNoKSAvIHRoaXMuX3J4LCAoLXkxZGFzaCAtIGN5ZGFzaCkgLyB0aGlzLl9yeSk7XG4gICAgICAgIGlmICgoIXN3ZWVwRmxhZykgJiYgKGR0aGV0YSA+IDApKSB7XG4gICAgICAgICAgICBkdGhldGEgLT0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3dlZXBGbGFnICYmIChkdGhldGEgPCAwKSkge1xuICAgICAgICAgICAgZHRoZXRhICs9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX251bVNlZ3MgPSBNYXRoLmNlaWwoTWF0aC5hYnMoZHRoZXRhIC8gKE1hdGguUEkgLyAyKSkpO1xuICAgICAgICB0aGlzLl9kZWx0YSA9IGR0aGV0YSAvIHRoaXMuX251bVNlZ3M7XG4gICAgICAgIHRoaXMuX1QgPSAoOCAvIDMpICogTWF0aC5zaW4odGhpcy5fZGVsdGEgLyA0KSAqIE1hdGguc2luKHRoaXMuX2RlbHRhIC8gNCkgLyBNYXRoLnNpbih0aGlzLl9kZWx0YSAvIDIpO1xuICAgIH1cbiAgICBnZXROZXh0U2VnbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlZ0luZGV4ID09PSB0aGlzLl9udW1TZWdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb3NUaGV0YTEgPSBNYXRoLmNvcyh0aGlzLl90aGV0YSk7XG4gICAgICAgIGNvbnN0IHNpblRoZXRhMSA9IE1hdGguc2luKHRoaXMuX3RoZXRhKTtcbiAgICAgICAgY29uc3QgdGhldGEyID0gdGhpcy5fdGhldGEgKyB0aGlzLl9kZWx0YTtcbiAgICAgICAgY29uc3QgY29zVGhldGEyID0gTWF0aC5jb3ModGhldGEyKTtcbiAgICAgICAgY29uc3Qgc2luVGhldGEyID0gTWF0aC5zaW4odGhldGEyKTtcbiAgICAgICAgY29uc3QgdG8gPSBbXG4gICAgICAgICAgICB0aGlzLl9jb3NQaGkgKiB0aGlzLl9yeCAqIGNvc1RoZXRhMiAtIHRoaXMuX3NpblBoaSAqIHRoaXMuX3J5ICogc2luVGhldGEyICsgdGhpcy5fQ1swXSxcbiAgICAgICAgICAgIHRoaXMuX3NpblBoaSAqIHRoaXMuX3J4ICogY29zVGhldGEyICsgdGhpcy5fY29zUGhpICogdGhpcy5fcnkgKiBzaW5UaGV0YTIgKyB0aGlzLl9DWzFdXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGNwMSA9IFtcbiAgICAgICAgICAgIHRoaXMuX2Zyb21bMF0gKyB0aGlzLl9UICogKC10aGlzLl9jb3NQaGkgKiB0aGlzLl9yeCAqIHNpblRoZXRhMSAtIHRoaXMuX3NpblBoaSAqIHRoaXMuX3J5ICogY29zVGhldGExKSxcbiAgICAgICAgICAgIHRoaXMuX2Zyb21bMV0gKyB0aGlzLl9UICogKC10aGlzLl9zaW5QaGkgKiB0aGlzLl9yeCAqIHNpblRoZXRhMSArIHRoaXMuX2Nvc1BoaSAqIHRoaXMuX3J5ICogY29zVGhldGExKVxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBjcDIgPSBbXG4gICAgICAgICAgICB0b1swXSArIHRoaXMuX1QgKiAodGhpcy5fY29zUGhpICogdGhpcy5fcnggKiBzaW5UaGV0YTIgKyB0aGlzLl9zaW5QaGkgKiB0aGlzLl9yeSAqIGNvc1RoZXRhMiksXG4gICAgICAgICAgICB0b1sxXSArIHRoaXMuX1QgKiAodGhpcy5fc2luUGhpICogdGhpcy5fcnggKiBzaW5UaGV0YTIgLSB0aGlzLl9jb3NQaGkgKiB0aGlzLl9yeSAqIGNvc1RoZXRhMilcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5fdGhldGEgPSB0aGV0YTI7XG4gICAgICAgIHRoaXMuX2Zyb20gPSBbdG9bMF0sIHRvWzFdXTtcbiAgICAgICAgdGhpcy5fc2VnSW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNwMTogY3AxLFxuICAgICAgICAgICAgY3AyOiBjcDIsXG4gICAgICAgICAgICB0bzogdG9cbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2FsY3VsYXRlVmVjdG9yQW5nbGUodXgsIHV5LCB2eCwgdnkpIHtcbiAgICAgICAgY29uc3QgdGEgPSBNYXRoLmF0YW4yKHV5LCB1eCk7XG4gICAgICAgIGNvbnN0IHRiID0gTWF0aC5hdGFuMih2eSwgdngpO1xuICAgICAgICBpZiAodGIgPj0gdGEpXG4gICAgICAgICAgICByZXR1cm4gdGIgLSB0YTtcbiAgICAgICAgcmV0dXJuIDIgKiBNYXRoLlBJIC0gKHRhIC0gdGIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQYXRoRml0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzZXRzLCBjbG9zZWQpIHtcbiAgICAgICAgdGhpcy5zZXRzID0gc2V0cztcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBjbG9zZWQ7XG4gICAgfVxuICAgIGZpdChzaW1wbGlmaWNhdGlvbikge1xuICAgICAgICBjb25zdCBvdXRTZXRzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc2V0IG9mIHRoaXMuc2V0cykge1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gc2V0Lmxlbmd0aDtcbiAgICAgICAgICAgIGxldCBlc3RMZW5ndGggPSBNYXRoLmZsb29yKHNpbXBsaWZpY2F0aW9uICogbGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChlc3RMZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA8PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlc3RMZW5ndGggPSA1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0U2V0cy5wdXNoKHRoaXMucmVkdWNlKHNldCwgZXN0TGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGQgPSAnJztcbiAgICAgICAgZm9yIChjb25zdCBzZXQgb2Ygb3V0U2V0cykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludCA9IHNldFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkICs9ICdNJyArIHBvaW50WzBdICsgJywnICsgcG9pbnRbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkICs9ICdMJyArIHBvaW50WzBdICsgJywnICsgcG9pbnRbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgZCArPSAneiAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBkaXN0YW5jZShwMSwgcDIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMVswXSAtIHAyWzBdLCAyKSArIE1hdGgucG93KHAxWzFdIC0gcDJbMV0sIDIpKTtcbiAgICB9XG4gICAgcmVkdWNlKHNldCwgY291bnQpIHtcbiAgICAgICAgaWYgKHNldC5sZW5ndGggPD0gY291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9pbnRzID0gc2V0LnNsaWNlKDApO1xuICAgICAgICB3aGlsZSAocG9pbnRzLmxlbmd0aCA+IGNvdW50KSB7XG4gICAgICAgICAgICBjb25zdCBhcmVhcyA9IFtdO1xuICAgICAgICAgICAgbGV0IG1pbkFyZWEgPSAtMTtcbiAgICAgICAgICAgIGxldCBtaW5JbmRleCA9IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAocG9pbnRzLmxlbmd0aCAtIDEpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gdGhpcy5kaXN0YW5jZShwb2ludHNbaSAtIDFdLCBwb2ludHNbaV0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGIgPSB0aGlzLmRpc3RhbmNlKHBvaW50c1tpXSwgcG9pbnRzW2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuZGlzdGFuY2UocG9pbnRzW2kgLSAxXSwgcG9pbnRzW2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IChhICsgYiArIGMpIC8gMi4wO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyZWEgPSBNYXRoLnNxcnQocyAqIChzIC0gYSkgKiAocyAtIGIpICogKHMgLSBjKSk7XG4gICAgICAgICAgICAgICAgYXJlYXMucHVzaChhcmVhKTtcbiAgICAgICAgICAgICAgICBpZiAoKG1pbkFyZWEgPCAwKSB8fCAoYXJlYSA8IG1pbkFyZWEpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkFyZWEgPSBhcmVhO1xuICAgICAgICAgICAgICAgICAgICBtaW5JbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1pbkluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIHBvaW50cy5zcGxpY2UobWluSW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSb3VnaFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XG5jb25zdCBoYXNTZWxmID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnO1xuY29uc3Qgcm91Z2hTY3JpcHQgPSBoYXNTZWxmICYmIHNlbGYgJiYgc2VsZi5kb2N1bWVudCAmJiBzZWxmLmRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgc2VsZi5kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZW5kZXJlcihjb25maWcpIHtcbiAgICBpZiAoaGFzU2VsZiAmJiByb3VnaFNjcmlwdCAmJiBzZWxmICYmIHNlbGYud29ya2x5ICYmIGNvbmZpZy5hc3luYyAmJiAoIWNvbmZpZy5ub1dvcmtlcikpIHtcbiAgICAgICAgY29uc3Qgd29ya2x5U291cmNlID0gY29uZmlnLndvcmtseVVSTCB8fCAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3BzaGlobi93b3JrbHkvZGlzdC93b3JrbHkubWluLmpzJztcbiAgICAgICAgaWYgKHdvcmtseVNvdXJjZSkge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IGBpbXBvcnRTY3JpcHRzKCcke3dvcmtseVNvdXJjZX0nLCAnJHtyb3VnaFNjcmlwdH0nKTtcXG53b3JrbHkuZXhwb3NlKHNlbGYucm91Z2guY3JlYXRlUmVuZGVyZXIoKSk7YDtcbiAgICAgICAgICAgIGNvbnN0IG91cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtjb2RlXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYud29ya2x5LnByb3h5KG91cmwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUm91Z2hSZW5kZXJlcigpO1xufVxuIiwiaW1wb3J0IHsgUm91Z2hQYXRoLCBSb3VnaEFyY0NvbnZlcnRlciwgUGF0aEZpdHRlciB9IGZyb20gJy4vcGF0aC5qcyc7XG5pbXBvcnQgeyBnZXRGaWxsZXIgfSBmcm9tICcuL2ZpbGxlcnMvZmlsbGVyJztcbmV4cG9ydCBjbGFzcyBSb3VnaFJlbmRlcmVyIHtcbiAgICBsaW5lKHgxLCB5MSwgeDIsIHkyLCBvKSB7XG4gICAgICAgIGNvbnN0IG9wcyA9IHRoaXMuZG91YmxlTGluZSh4MSwgeTEsIHgyLCB5Miwgbyk7XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdwYXRoJywgb3BzIH07XG4gICAgfVxuICAgIGxpbmVhclBhdGgocG9pbnRzLCBjbG9zZSwgbykge1xuICAgICAgICBjb25zdCBsZW4gPSAocG9pbnRzIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAyKSB7XG4gICAgICAgICAgICBsZXQgb3BzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChsZW4gLSAxKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdCh0aGlzLmRvdWJsZUxpbmUocG9pbnRzW2ldWzBdLCBwb2ludHNbaV1bMV0sIHBvaW50c1tpICsgMV1bMF0sIHBvaW50c1tpICsgMV1bMV0sIG8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbG9zZSkge1xuICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKHBvaW50c1tsZW4gLSAxXVswXSwgcG9pbnRzW2xlbiAtIDFdWzFdLCBwb2ludHNbMF1bMF0sIHBvaW50c1swXVsxXSwgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3BhdGgnLCBvcHMgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsZW4gPT09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmUocG9pbnRzWzBdWzBdLCBwb2ludHNbMF1bMV0sIHBvaW50c1sxXVswXSwgcG9pbnRzWzFdWzFdLCBvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0eXBlOiAncGF0aCcsIG9wczogW10gfTtcbiAgICB9XG4gICAgcG9seWdvbihwb2ludHMsIG8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGluZWFyUGF0aChwb2ludHMsIHRydWUsIG8pO1xuICAgIH1cbiAgICByZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgbykge1xuICAgICAgICBjb25zdCBwb2ludHMgPSBbXG4gICAgICAgICAgICBbeCwgeV0sIFt4ICsgd2lkdGgsIHldLCBbeCArIHdpZHRoLCB5ICsgaGVpZ2h0XSwgW3gsIHkgKyBoZWlnaHRdXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlnb24ocG9pbnRzLCBvKTtcbiAgICB9XG4gICAgY3VydmUocG9pbnRzLCBvKSB7XG4gICAgICAgIGNvbnN0IG8xID0gdGhpcy5fY3VydmVXaXRoT2Zmc2V0KHBvaW50cywgMSAqICgxICsgby5yb3VnaG5lc3MgKiAwLjIpLCBvKTtcbiAgICAgICAgY29uc3QgbzIgPSB0aGlzLl9jdXJ2ZVdpdGhPZmZzZXQocG9pbnRzLCAxLjUgKiAoMSArIG8ucm91Z2huZXNzICogMC4yMiksIG8pO1xuICAgICAgICByZXR1cm4geyB0eXBlOiAncGF0aCcsIG9wczogbzEuY29uY2F0KG8yKSB9O1xuICAgIH1cbiAgICBlbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG8pIHtcbiAgICAgICAgY29uc3QgaW5jcmVtZW50ID0gKE1hdGguUEkgKiAyKSAvIG8uY3VydmVTdGVwQ291bnQ7XG4gICAgICAgIGxldCByeCA9IE1hdGguYWJzKHdpZHRoIC8gMik7XG4gICAgICAgIGxldCByeSA9IE1hdGguYWJzKGhlaWdodCAvIDIpO1xuICAgICAgICByeCArPSB0aGlzLmdldE9mZnNldCgtcnggKiAwLjA1LCByeCAqIDAuMDUsIG8pO1xuICAgICAgICByeSArPSB0aGlzLmdldE9mZnNldCgtcnkgKiAwLjA1LCByeSAqIDAuMDUsIG8pO1xuICAgICAgICBjb25zdCBvMSA9IHRoaXMuX2VsbGlwc2UoaW5jcmVtZW50LCB4LCB5LCByeCwgcnksIDEsIGluY3JlbWVudCAqIHRoaXMuZ2V0T2Zmc2V0KDAuMSwgdGhpcy5nZXRPZmZzZXQoMC40LCAxLCBvKSwgbyksIG8pO1xuICAgICAgICBjb25zdCBvMiA9IHRoaXMuX2VsbGlwc2UoaW5jcmVtZW50LCB4LCB5LCByeCwgcnksIDEuNSwgMCwgbyk7XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdwYXRoJywgb3BzOiBvMS5jb25jYXQobzIpIH07XG4gICAgfVxuICAgIGFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgY2xvc2VkLCByb3VnaENsb3N1cmUsIG8pIHtcbiAgICAgICAgY29uc3QgY3ggPSB4O1xuICAgICAgICBjb25zdCBjeSA9IHk7XG4gICAgICAgIGxldCByeCA9IE1hdGguYWJzKHdpZHRoIC8gMik7XG4gICAgICAgIGxldCByeSA9IE1hdGguYWJzKGhlaWdodCAvIDIpO1xuICAgICAgICByeCArPSB0aGlzLmdldE9mZnNldCgtcnggKiAwLjAxLCByeCAqIDAuMDEsIG8pO1xuICAgICAgICByeSArPSB0aGlzLmdldE9mZnNldCgtcnkgKiAwLjAxLCByeSAqIDAuMDEsIG8pO1xuICAgICAgICBsZXQgc3RydCA9IHN0YXJ0O1xuICAgICAgICBsZXQgc3RwID0gc3RvcDtcbiAgICAgICAgd2hpbGUgKHN0cnQgPCAwKSB7XG4gICAgICAgICAgICBzdHJ0ICs9IE1hdGguUEkgKiAyO1xuICAgICAgICAgICAgc3RwICs9IE1hdGguUEkgKiAyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3RwIC0gc3RydCkgPiAoTWF0aC5QSSAqIDIpKSB7XG4gICAgICAgICAgICBzdHJ0ID0gMDtcbiAgICAgICAgICAgIHN0cCA9IE1hdGguUEkgKiAyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsbGlwc2VJbmMgPSAoTWF0aC5QSSAqIDIpIC8gby5jdXJ2ZVN0ZXBDb3VudDtcbiAgICAgICAgY29uc3QgYXJjSW5jID0gTWF0aC5taW4oZWxsaXBzZUluYyAvIDIsIChzdHAgLSBzdHJ0KSAvIDIpO1xuICAgICAgICBjb25zdCBvMSA9IHRoaXMuX2FyYyhhcmNJbmMsIGN4LCBjeSwgcngsIHJ5LCBzdHJ0LCBzdHAsIDEsIG8pO1xuICAgICAgICBjb25zdCBvMiA9IHRoaXMuX2FyYyhhcmNJbmMsIGN4LCBjeSwgcngsIHJ5LCBzdHJ0LCBzdHAsIDEuNSwgbyk7XG4gICAgICAgIGxldCBvcHMgPSBvMS5jb25jYXQobzIpO1xuICAgICAgICBpZiAoY2xvc2VkKSB7XG4gICAgICAgICAgICBpZiAocm91Z2hDbG9zdXJlKSB7XG4gICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdCh0aGlzLmRvdWJsZUxpbmUoY3gsIGN5LCBjeCArIHJ4ICogTWF0aC5jb3Moc3RydCksIGN5ICsgcnkgKiBNYXRoLnNpbihzdHJ0KSwgbykpO1xuICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKGN4LCBjeSwgY3ggKyByeCAqIE1hdGguY29zKHN0cCksIGN5ICsgcnkgKiBNYXRoLnNpbihzdHApLCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHMucHVzaCh7IG9wOiAnbGluZVRvJywgZGF0YTogW2N4LCBjeV0gfSk7XG4gICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ2xpbmVUbycsIGRhdGE6IFtjeCArIHJ4ICogTWF0aC5jb3Moc3RydCksIGN5ICsgcnkgKiBNYXRoLnNpbihzdHJ0KV0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3BhdGgnLCBvcHMgfTtcbiAgICB9XG4gICAgc3ZnUGF0aChwYXRoLCBvKSB7XG4gICAgICAgIHBhdGggPSAocGF0aCB8fCAnJykucmVwbGFjZSgvXFxuL2csICcgJykucmVwbGFjZSgvKC1cXHMpL2csICctJykucmVwbGFjZSgnLyhcXHNcXHMpL2cnLCAnICcpO1xuICAgICAgICBsZXQgcCA9IG5ldyBSb3VnaFBhdGgocGF0aCk7XG4gICAgICAgIGlmIChvLnNpbXBsaWZpY2F0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBmaXR0ZXIgPSBuZXcgUGF0aEZpdHRlcihwLmxpbmVhclBvaW50cywgcC5jbG9zZWQpO1xuICAgICAgICAgICAgY29uc3QgZCA9IGZpdHRlci5maXQoby5zaW1wbGlmaWNhdGlvbik7XG4gICAgICAgICAgICBwID0gbmV3IFJvdWdoUGF0aChkKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3BzID0gW107XG4gICAgICAgIGNvbnN0IHNlZ21lbnRzID0gcC5zZWdtZW50cyB8fCBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcyA9IHNlZ21lbnRzW2ldO1xuICAgICAgICAgICAgY29uc3QgcHJldiA9IGkgPiAwID8gc2VnbWVudHNbaSAtIDFdIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IG9wTGlzdCA9IHRoaXMuX3Byb2Nlc3NTZWdtZW50KHAsIHMsIHByZXYsIG8pO1xuICAgICAgICAgICAgaWYgKG9wTGlzdCAmJiBvcExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdChvcExpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdwYXRoJywgb3BzIH07XG4gICAgfVxuICAgIHNvbGlkRmlsbFBvbHlnb24ocG9pbnRzLCBvKSB7XG4gICAgICAgIGNvbnN0IG9wcyA9IFtdO1xuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gby5tYXhSYW5kb21uZXNzT2Zmc2V0IHx8IDA7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBwb2ludHMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGxlbiA+IDIpIHtcbiAgICAgICAgICAgICAgICBvcHMucHVzaCh7IG9wOiAnbW92ZScsIGRhdGE6IFtwb2ludHNbMF1bMF0gKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLCBwb2ludHNbMF1bMV0gKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pXSB9KTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wcy5wdXNoKHsgb3A6ICdsaW5lVG8nLCBkYXRhOiBbcG9pbnRzW2ldWzBdICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSwgcG9pbnRzW2ldWzFdICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKV0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdmaWxsUGF0aCcsIG9wcyB9O1xuICAgIH1cbiAgICBwYXR0ZXJuRmlsbFBvbHlnb24ocG9pbnRzLCBvKSB7XG4gICAgICAgIGNvbnN0IGZpbGxlciA9IGdldEZpbGxlcih0aGlzLCBvKTtcbiAgICAgICAgcmV0dXJuIGZpbGxlci5maWxsUG9seWdvbihwb2ludHMsIG8pO1xuICAgIH1cbiAgICBwYXR0ZXJuRmlsbEVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvKSB7XG4gICAgICAgIGNvbnN0IGZpbGxlciA9IGdldEZpbGxlcih0aGlzLCBvKTtcbiAgICAgICAgcmV0dXJuIGZpbGxlci5maWxsRWxsaXBzZShjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIG8pO1xuICAgIH1cbiAgICBwYXR0ZXJuRmlsbEFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgbykge1xuICAgICAgICBjb25zdCBjeCA9IHg7XG4gICAgICAgIGNvbnN0IGN5ID0geTtcbiAgICAgICAgbGV0IHJ4ID0gTWF0aC5hYnMod2lkdGggLyAyKTtcbiAgICAgICAgbGV0IHJ5ID0gTWF0aC5hYnMoaGVpZ2h0IC8gMik7XG4gICAgICAgIHJ4ICs9IHRoaXMuZ2V0T2Zmc2V0KC1yeCAqIDAuMDEsIHJ4ICogMC4wMSwgbyk7XG4gICAgICAgIHJ5ICs9IHRoaXMuZ2V0T2Zmc2V0KC1yeSAqIDAuMDEsIHJ5ICogMC4wMSwgbyk7XG4gICAgICAgIGxldCBzdHJ0ID0gc3RhcnQ7XG4gICAgICAgIGxldCBzdHAgPSBzdG9wO1xuICAgICAgICB3aGlsZSAoc3RydCA8IDApIHtcbiAgICAgICAgICAgIHN0cnQgKz0gTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICBzdHAgKz0gTWF0aC5QSSAqIDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzdHAgLSBzdHJ0KSA+IChNYXRoLlBJICogMikpIHtcbiAgICAgICAgICAgIHN0cnQgPSAwO1xuICAgICAgICAgICAgc3RwID0gTWF0aC5QSSAqIDI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5jcmVtZW50ID0gKHN0cCAtIHN0cnQpIC8gby5jdXJ2ZVN0ZXBDb3VudDtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gW107XG4gICAgICAgIGZvciAobGV0IGFuZ2xlID0gc3RydDsgYW5nbGUgPD0gc3RwOyBhbmdsZSA9IGFuZ2xlICsgaW5jcmVtZW50KSB7XG4gICAgICAgICAgICBwb2ludHMucHVzaChbY3ggKyByeCAqIE1hdGguY29zKGFuZ2xlKSwgY3kgKyByeSAqIE1hdGguc2luKGFuZ2xlKV0pO1xuICAgICAgICB9XG4gICAgICAgIHBvaW50cy5wdXNoKFtjeCArIHJ4ICogTWF0aC5jb3Moc3RwKSwgY3kgKyByeSAqIE1hdGguc2luKHN0cCldKTtcbiAgICAgICAgcG9pbnRzLnB1c2goW2N4LCBjeV0pO1xuICAgICAgICByZXR1cm4gdGhpcy5wYXR0ZXJuRmlsbFBvbHlnb24ocG9pbnRzLCBvKTtcbiAgICB9XG4gICAgLy8vIFxuICAgIGdldE9mZnNldChtaW4sIG1heCwgb3BzKSB7XG4gICAgICAgIHJldHVybiBvcHMucm91Z2huZXNzICogKChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluKTtcbiAgICB9XG4gICAgZG91YmxlTGluZSh4MSwgeTEsIHgyLCB5Miwgbykge1xuICAgICAgICBjb25zdCBvMSA9IHRoaXMuX2xpbmUoeDEsIHkxLCB4MiwgeTIsIG8sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgbzIgPSB0aGlzLl9saW5lKHgxLCB5MSwgeDIsIHkyLCBvLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG8xLmNvbmNhdChvMik7XG4gICAgfVxuICAgIF9saW5lKHgxLCB5MSwgeDIsIHkyLCBvLCBtb3ZlLCBvdmVybGF5KSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aFNxID0gTWF0aC5wb3coKHgxIC0geDIpLCAyKSArIE1hdGgucG93KCh5MSAtIHkyKSwgMik7XG4gICAgICAgIGxldCBvZmZzZXQgPSBvLm1heFJhbmRvbW5lc3NPZmZzZXQgfHwgMDtcbiAgICAgICAgaWYgKChvZmZzZXQgKiBvZmZzZXQgKiAxMDApID4gbGVuZ3RoU3EpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IE1hdGguc3FydChsZW5ndGhTcSkgLyAxMDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYWxmT2Zmc2V0ID0gb2Zmc2V0IC8gMjtcbiAgICAgICAgY29uc3QgZGl2ZXJnZVBvaW50ID0gMC4yICsgTWF0aC5yYW5kb20oKSAqIDAuMjtcbiAgICAgICAgbGV0IG1pZERpc3BYID0gby5ib3dpbmcgKiBvLm1heFJhbmRvbW5lc3NPZmZzZXQgKiAoeTIgLSB5MSkgLyAyMDA7XG4gICAgICAgIGxldCBtaWREaXNwWSA9IG8uYm93aW5nICogby5tYXhSYW5kb21uZXNzT2Zmc2V0ICogKHgxIC0geDIpIC8gMjAwO1xuICAgICAgICBtaWREaXNwWCA9IHRoaXMuZ2V0T2Zmc2V0KC1taWREaXNwWCwgbWlkRGlzcFgsIG8pO1xuICAgICAgICBtaWREaXNwWSA9IHRoaXMuZ2V0T2Zmc2V0KC1taWREaXNwWSwgbWlkRGlzcFksIG8pO1xuICAgICAgICBjb25zdCBvcHMgPSBbXTtcbiAgICAgICAgaWYgKG1vdmUpIHtcbiAgICAgICAgICAgIGlmIChvdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBvcDogJ21vdmUnLCBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB4MSArIHRoaXMuZ2V0T2Zmc2V0KC1oYWxmT2Zmc2V0LCBoYWxmT2Zmc2V0LCBvKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxICsgdGhpcy5nZXRPZmZzZXQoLWhhbGZPZmZzZXQsIGhhbGZPZmZzZXQsIG8pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgb3A6ICdtb3ZlJywgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeDEgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTEgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob3ZlcmxheSkge1xuICAgICAgICAgICAgb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9wOiAnYmN1cnZlVG8nLCBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgIG1pZERpc3BYICsgeDEgKyAoeDIgLSB4MSkgKiBkaXZlcmdlUG9pbnQgKyB0aGlzLmdldE9mZnNldCgtaGFsZk9mZnNldCwgaGFsZk9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgIG1pZERpc3BZICsgeTEgKyAoeTIgLSB5MSkgKiBkaXZlcmdlUG9pbnQgKyB0aGlzLmdldE9mZnNldCgtaGFsZk9mZnNldCwgaGFsZk9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgIG1pZERpc3BYICsgeDEgKyAyICogKHgyIC0geDEpICogZGl2ZXJnZVBvaW50ICsgdGhpcy5nZXRPZmZzZXQoLWhhbGZPZmZzZXQsIGhhbGZPZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgICAgICBtaWREaXNwWSArIHkxICsgMiAqICh5MiAtIHkxKSAqIGRpdmVyZ2VQb2ludCArIHRoaXMuZ2V0T2Zmc2V0KC1oYWxmT2Zmc2V0LCBoYWxmT2Zmc2V0LCBvKSxcbiAgICAgICAgICAgICAgICAgICAgeDIgKyB0aGlzLmdldE9mZnNldCgtaGFsZk9mZnNldCwgaGFsZk9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgIHkyICsgdGhpcy5nZXRPZmZzZXQoLWhhbGZPZmZzZXQsIGhhbGZPZmZzZXQsIG8pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgb3A6ICdiY3VydmVUbycsIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgbWlkRGlzcFggKyB4MSArICh4MiAtIHgxKSAqIGRpdmVyZ2VQb2ludCArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgIG1pZERpc3BZICsgeTEgKyAoeTIgLSB5MSkgKiBkaXZlcmdlUG9pbnQgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgICAgICBtaWREaXNwWCArIHgxICsgMiAqICh4MiAtIHgxKSAqIGRpdmVyZ2VQb2ludCArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgIG1pZERpc3BZICsgeTEgKyAyICogKHkyIC0geTEpICogZGl2ZXJnZVBvaW50ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSxcbiAgICAgICAgICAgICAgICAgICAgeDIgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgICAgICB5MiArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbylcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3BzO1xuICAgIH1cbiAgICBfY3VydmUocG9pbnRzLCBjbG9zZVBvaW50LCBvKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIGxldCBvcHMgPSBbXTtcbiAgICAgICAgaWYgKGxlbiA+IDMpIHtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSAxIC0gby5jdXJ2ZVRpZ2h0bmVzcztcbiAgICAgICAgICAgIG9wcy5wdXNoKHsgb3A6ICdtb3ZlJywgZGF0YTogW3BvaW50c1sxXVswXSwgcG9pbnRzWzFdWzFdXSB9KTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyAoaSArIDIpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWRWZXJ0QXJyYXkgPSBwb2ludHNbaV07XG4gICAgICAgICAgICAgICAgYlswXSA9IFtjYWNoZWRWZXJ0QXJyYXlbMF0sIGNhY2hlZFZlcnRBcnJheVsxXV07XG4gICAgICAgICAgICAgICAgYlsxXSA9IFtjYWNoZWRWZXJ0QXJyYXlbMF0gKyAocyAqIHBvaW50c1tpICsgMV1bMF0gLSBzICogcG9pbnRzW2kgLSAxXVswXSkgLyA2LCBjYWNoZWRWZXJ0QXJyYXlbMV0gKyAocyAqIHBvaW50c1tpICsgMV1bMV0gLSBzICogcG9pbnRzW2kgLSAxXVsxXSkgLyA2XTtcbiAgICAgICAgICAgICAgICBiWzJdID0gW3BvaW50c1tpICsgMV1bMF0gKyAocyAqIHBvaW50c1tpXVswXSAtIHMgKiBwb2ludHNbaSArIDJdWzBdKSAvIDYsIHBvaW50c1tpICsgMV1bMV0gKyAocyAqIHBvaW50c1tpXVsxXSAtIHMgKiBwb2ludHNbaSArIDJdWzFdKSAvIDZdO1xuICAgICAgICAgICAgICAgIGJbM10gPSBbcG9pbnRzW2kgKyAxXVswXSwgcG9pbnRzW2kgKyAxXVsxXV07XG4gICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ2JjdXJ2ZVRvJywgZGF0YTogW2JbMV1bMF0sIGJbMV1bMV0sIGJbMl1bMF0sIGJbMl1bMV0sIGJbM11bMF0sIGJbM11bMV1dIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNsb3NlUG9pbnQgJiYgY2xvc2VQb2ludC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBybyA9IG8ubWF4UmFuZG9tbmVzc09mZnNldDtcbiAgICAgICAgICAgICAgICBvcHMucHVzaCh7IG9wOiAnbGluZVRvJywgZGF0YTogW2Nsb3NlUG9pbnRbMF0gKyB0aGlzLmdldE9mZnNldCgtcm8sIHJvLCBvKSwgY2xvc2VQb2ludFsxXSArICt0aGlzLmdldE9mZnNldCgtcm8sIHJvLCBvKV0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGVuID09PSAzKSB7XG4gICAgICAgICAgICBvcHMucHVzaCh7IG9wOiAnbW92ZScsIGRhdGE6IFtwb2ludHNbMV1bMF0sIHBvaW50c1sxXVsxXV0gfSk7XG4gICAgICAgICAgICBvcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgb3A6ICdiY3VydmVUbycsIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzWzFdWzBdLCBwb2ludHNbMV1bMV0sXG4gICAgICAgICAgICAgICAgICAgIHBvaW50c1syXVswXSwgcG9pbnRzWzJdWzFdLFxuICAgICAgICAgICAgICAgICAgICBwb2ludHNbMl1bMF0sIHBvaW50c1syXVsxXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxlbiA9PT0gMikge1xuICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdCh0aGlzLmRvdWJsZUxpbmUocG9pbnRzWzBdWzBdLCBwb2ludHNbMF1bMV0sIHBvaW50c1sxXVswXSwgcG9pbnRzWzFdWzFdLCBvKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wcztcbiAgICB9XG4gICAgX2VsbGlwc2UoaW5jcmVtZW50LCBjeCwgY3ksIHJ4LCByeSwgb2Zmc2V0LCBvdmVybGFwLCBvKSB7XG4gICAgICAgIGNvbnN0IHJhZE9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KC0wLjUsIDAuNSwgbykgLSAoTWF0aC5QSSAvIDIpO1xuICAgICAgICBjb25zdCBwb2ludHMgPSBbXTtcbiAgICAgICAgcG9pbnRzLnB1c2goW1xuICAgICAgICAgICAgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSArIGN4ICsgMC45ICogcnggKiBNYXRoLmNvcyhyYWRPZmZzZXQgLSBpbmNyZW1lbnQpLFxuICAgICAgICAgICAgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSArIGN5ICsgMC45ICogcnkgKiBNYXRoLnNpbihyYWRPZmZzZXQgLSBpbmNyZW1lbnQpXG4gICAgICAgIF0pO1xuICAgICAgICBmb3IgKGxldCBhbmdsZSA9IHJhZE9mZnNldDsgYW5nbGUgPCAoTWF0aC5QSSAqIDIgKyByYWRPZmZzZXQgLSAwLjAxKTsgYW5nbGUgPSBhbmdsZSArIGluY3JlbWVudCkge1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goW1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeCArIHJ4ICogTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeSArIHJ5ICogTWF0aC5zaW4oYW5nbGUpXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgICBwb2ludHMucHVzaChbXG4gICAgICAgICAgICB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pICsgY3ggKyByeCAqIE1hdGguY29zKHJhZE9mZnNldCArIE1hdGguUEkgKiAyICsgb3ZlcmxhcCAqIDAuNSksXG4gICAgICAgICAgICB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pICsgY3kgKyByeSAqIE1hdGguc2luKHJhZE9mZnNldCArIE1hdGguUEkgKiAyICsgb3ZlcmxhcCAqIDAuNSlcbiAgICAgICAgXSk7XG4gICAgICAgIHBvaW50cy5wdXNoKFtcbiAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeCArIDAuOTggKiByeCAqIE1hdGguY29zKHJhZE9mZnNldCArIG92ZXJsYXApLFxuICAgICAgICAgICAgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSArIGN5ICsgMC45OCAqIHJ5ICogTWF0aC5zaW4ocmFkT2Zmc2V0ICsgb3ZlcmxhcClcbiAgICAgICAgXSk7XG4gICAgICAgIHBvaW50cy5wdXNoKFtcbiAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeCArIDAuOSAqIHJ4ICogTWF0aC5jb3MocmFkT2Zmc2V0ICsgb3ZlcmxhcCAqIDAuNSksXG4gICAgICAgICAgICB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pICsgY3kgKyAwLjkgKiByeSAqIE1hdGguc2luKHJhZE9mZnNldCArIG92ZXJsYXAgKiAwLjUpXG4gICAgICAgIF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VydmUocG9pbnRzLCBudWxsLCBvKTtcbiAgICB9XG4gICAgX2N1cnZlV2l0aE9mZnNldChwb2ludHMsIG9mZnNldCwgbykge1xuICAgICAgICBjb25zdCBwcyA9IFtdO1xuICAgICAgICBwcy5wdXNoKFtcbiAgICAgICAgICAgIHBvaW50c1swXVswXSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksXG4gICAgICAgICAgICBwb2ludHNbMF1bMV0gKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICBdKTtcbiAgICAgICAgcHMucHVzaChbXG4gICAgICAgICAgICBwb2ludHNbMF1bMF0gKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgcG9pbnRzWzBdWzFdICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSxcbiAgICAgICAgXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwcy5wdXNoKFtcbiAgICAgICAgICAgICAgICBwb2ludHNbaV1bMF0gKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgIHBvaW50c1tpXVsxXSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGlmIChpID09PSAocG9pbnRzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgcHMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgIHBvaW50c1tpXVswXSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgIHBvaW50c1tpXVsxXSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnZlKHBzLCBudWxsLCBvKTtcbiAgICB9XG4gICAgX2FyYyhpbmNyZW1lbnQsIGN4LCBjeSwgcngsIHJ5LCBzdHJ0LCBzdHAsIG9mZnNldCwgbykge1xuICAgICAgICBjb25zdCByYWRPZmZzZXQgPSBzdHJ0ICsgdGhpcy5nZXRPZmZzZXQoLTAuMSwgMC4xLCBvKTtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gW107XG4gICAgICAgIHBvaW50cy5wdXNoKFtcbiAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeCArIDAuOSAqIHJ4ICogTWF0aC5jb3MocmFkT2Zmc2V0IC0gaW5jcmVtZW50KSxcbiAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeSArIDAuOSAqIHJ5ICogTWF0aC5zaW4ocmFkT2Zmc2V0IC0gaW5jcmVtZW50KVxuICAgICAgICBdKTtcbiAgICAgICAgZm9yIChsZXQgYW5nbGUgPSByYWRPZmZzZXQ7IGFuZ2xlIDw9IHN0cDsgYW5nbGUgPSBhbmdsZSArIGluY3JlbWVudCkge1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goW1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeCArIHJ4ICogTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeSArIHJ5ICogTWF0aC5zaW4oYW5nbGUpXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgICBwb2ludHMucHVzaChbXG4gICAgICAgICAgICBjeCArIHJ4ICogTWF0aC5jb3Moc3RwKSxcbiAgICAgICAgICAgIGN5ICsgcnkgKiBNYXRoLnNpbihzdHApXG4gICAgICAgIF0pO1xuICAgICAgICBwb2ludHMucHVzaChbXG4gICAgICAgICAgICBjeCArIHJ4ICogTWF0aC5jb3Moc3RwKSxcbiAgICAgICAgICAgIGN5ICsgcnkgKiBNYXRoLnNpbihzdHApXG4gICAgICAgIF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VydmUocG9pbnRzLCBudWxsLCBvKTtcbiAgICB9XG4gICAgX2JlemllclRvKHgxLCB5MSwgeDIsIHkyLCB4LCB5LCBwYXRoLCBvKSB7XG4gICAgICAgIGNvbnN0IG9wcyA9IFtdO1xuICAgICAgICBjb25zdCByb3MgPSBbby5tYXhSYW5kb21uZXNzT2Zmc2V0IHx8IDEsIChvLm1heFJhbmRvbW5lc3NPZmZzZXQgfHwgMSkgKyAwLjVdO1xuICAgICAgICBsZXQgZiA9IFswLCAwXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbcGF0aC54LCBwYXRoLnldIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbcGF0aC54ICsgdGhpcy5nZXRPZmZzZXQoLXJvc1swXSwgcm9zWzBdLCBvKSwgcGF0aC55ICsgdGhpcy5nZXRPZmZzZXQoLXJvc1swXSwgcm9zWzBdLCBvKV0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmID0gW3ggKyB0aGlzLmdldE9mZnNldCgtcm9zW2ldLCByb3NbaV0sIG8pLCB5ICsgdGhpcy5nZXRPZmZzZXQoLXJvc1tpXSwgcm9zW2ldLCBvKV07XG4gICAgICAgICAgICBvcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgb3A6ICdiY3VydmVUbycsIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgeDEgKyB0aGlzLmdldE9mZnNldCgtcm9zW2ldLCByb3NbaV0sIG8pLCB5MSArIHRoaXMuZ2V0T2Zmc2V0KC1yb3NbaV0sIHJvc1tpXSwgbyksXG4gICAgICAgICAgICAgICAgICAgIHgyICsgdGhpcy5nZXRPZmZzZXQoLXJvc1tpXSwgcm9zW2ldLCBvKSwgeTIgKyB0aGlzLmdldE9mZnNldCgtcm9zW2ldLCByb3NbaV0sIG8pLFxuICAgICAgICAgICAgICAgICAgICBmWzBdLCBmWzFdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5zZXRQb3NpdGlvbihmWzBdLCBmWzFdKTtcbiAgICAgICAgcmV0dXJuIG9wcztcbiAgICB9XG4gICAgX3Byb2Nlc3NTZWdtZW50KHBhdGgsIHNlZywgcHJldlNlZywgbykge1xuICAgICAgICBsZXQgb3BzID0gW107XG4gICAgICAgIHN3aXRjaCAoc2VnLmtleSkge1xuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICBjYXNlICdtJzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gc2VnLmtleSA9PT0gJ20nO1xuICAgICAgICAgICAgICAgIGlmIChzZWcuZGF0YS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9ICtzZWcuZGF0YVswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSArc2VnLmRhdGFbMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBwYXRoLng7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ICs9IHBhdGgueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBybyA9IDEgKiAoby5tYXhSYW5kb21uZXNzT2Zmc2V0IHx8IDApO1xuICAgICAgICAgICAgICAgICAgICB4ID0geCArIHRoaXMuZ2V0T2Zmc2V0KC1ybywgcm8sIG8pO1xuICAgICAgICAgICAgICAgICAgICB5ID0geSArIHRoaXMuZ2V0T2Zmc2V0KC1ybywgcm8sIG8pO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICBvcHMucHVzaCh7IG9wOiAnbW92ZScsIGRhdGE6IFt4LCB5XSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgIGNhc2UgJ2wnOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBzZWcua2V5ID09PSAnbCc7XG4gICAgICAgICAgICAgICAgaWYgKHNlZy5kYXRhLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gK3NlZy5kYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9ICtzZWcuZGF0YVsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ICs9IHBhdGgueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgKz0gcGF0aC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKHBhdGgueCwgcGF0aC55LCB4LCB5LCBvKSk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguc2V0UG9zaXRpb24oeCwgeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICBjYXNlICdoJzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gc2VnLmtleSA9PT0gJ2gnO1xuICAgICAgICAgICAgICAgIGlmIChzZWcuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSArc2VnLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBwYXRoLng7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdCh0aGlzLmRvdWJsZUxpbmUocGF0aC54LCBwYXRoLnksIHgsIHBhdGgueSwgbykpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldFBvc2l0aW9uKHgsIHBhdGgueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICBjYXNlICd2Jzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gc2VnLmtleSA9PT0gJ3YnO1xuICAgICAgICAgICAgICAgIGlmIChzZWcuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSArc2VnLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdCh0aGlzLmRvdWJsZUxpbmUocGF0aC54LCBwYXRoLnksIHBhdGgueCwgeSwgbykpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldFBvc2l0aW9uKHBhdGgueCwgeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnWic6XG4gICAgICAgICAgICBjYXNlICd6Jzoge1xuICAgICAgICAgICAgICAgIGlmIChwYXRoLmZpcnN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKHBhdGgueCwgcGF0aC55LCBwYXRoLmZpcnN0WzBdLCBwYXRoLmZpcnN0WzFdLCBvKSk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguc2V0UG9zaXRpb24ocGF0aC5maXJzdFswXSwgcGF0aC5maXJzdFsxXSk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguZmlyc3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgY2FzZSAnYyc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IHNlZy5rZXkgPT09ICdjJztcbiAgICAgICAgICAgICAgICBpZiAoc2VnLmRhdGEubGVuZ3RoID49IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHgxID0gK3NlZy5kYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeTEgPSArc2VnLmRhdGFbMV07XG4gICAgICAgICAgICAgICAgICAgIGxldCB4MiA9ICtzZWcuZGF0YVsyXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkyID0gK3NlZy5kYXRhWzNdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9ICtzZWcuZGF0YVs0XTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSArc2VnLmRhdGFbNV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDEgKz0gcGF0aC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgeDIgKz0gcGF0aC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBwYXRoLng7XG4gICAgICAgICAgICAgICAgICAgICAgICB5MSArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB5MiArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ICs9IHBhdGgueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYiA9IHRoaXMuX2JlemllclRvKHgxLCB5MSwgeDIsIHkyLCB4LCB5LCBwYXRoLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdChvYik7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguYmV6aWVyUmVmbGVjdGlvblBvaW50ID0gW3ggKyAoeCAtIHgyKSwgeSArICh5IC0geTIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIGNhc2UgJ3MnOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBzZWcua2V5ID09PSAncyc7XG4gICAgICAgICAgICAgICAgaWYgKHNlZy5kYXRhLmxlbmd0aCA+PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4MiA9ICtzZWcuZGF0YVswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkyID0gK3NlZy5kYXRhWzFdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9ICtzZWcuZGF0YVsyXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSArc2VnLmRhdGFbM107XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDIgKz0gcGF0aC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBwYXRoLng7XG4gICAgICAgICAgICAgICAgICAgICAgICB5MiArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ICs9IHBhdGgueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgeDEgPSB4MjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkxID0geTI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZLZXkgPSBwcmV2U2VnID8gcHJldlNlZy5rZXkgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2S2V5ID09PSAnYycgfHwgcHJldktleSA9PT0gJ0MnIHx8IHByZXZLZXkgPT09ICdzJyB8fCBwcmV2S2V5ID09PSAnUycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9IHBhdGguYmV6aWVyUmVmbGVjdGlvblBvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxID0gcmVmWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgeTEgPSByZWZbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2IgPSB0aGlzLl9iZXppZXJUbyh4MSwgeTEsIHgyLCB5MiwgeCwgeSwgcGF0aCwgbyk7XG4gICAgICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQob2IpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLmJlemllclJlZmxlY3Rpb25Qb2ludCA9IFt4ICsgKHggLSB4MiksIHkgKyAoeSAtIHkyKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICBjYXNlICdxJzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gc2VnLmtleSA9PT0gJ3EnO1xuICAgICAgICAgICAgICAgIGlmIChzZWcuZGF0YS5sZW5ndGggPj0gNCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgeDEgPSArc2VnLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIGxldCB5MSA9ICtzZWcuZGF0YVsxXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSArc2VnLmRhdGFbMl07XG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gK3NlZy5kYXRhWzNdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxICs9IHBhdGgueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gcGF0aC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgeTEgKz0gcGF0aC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0MSA9IDEgKiAoMSArIG8ucm91Z2huZXNzICogMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0MiA9IDEuNSAqICgxICsgby5yb3VnaG5lc3MgKiAwLjIyKTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbcGF0aC54ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pLCBwYXRoLnkgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0MSwgb2Zmc2V0MSwgbyldIH0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZiA9IFt4ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pLCB5ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pXTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3A6ICdxY3VydmVUbycsIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQxLCBvZmZzZXQxLCBvKSwgeTEgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0MSwgb2Zmc2V0MSwgbyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZlswXSwgZlsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbcGF0aC54ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDIsIG9mZnNldDIsIG8pLCBwYXRoLnkgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0Miwgb2Zmc2V0MiwgbyldIH0pO1xuICAgICAgICAgICAgICAgICAgICBmID0gW3ggKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0Miwgb2Zmc2V0MiwgbyksIHkgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0Miwgb2Zmc2V0MiwgbyldO1xuICAgICAgICAgICAgICAgICAgICBvcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcDogJ3FjdXJ2ZVRvJywgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgxICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDIsIG9mZnNldDIsIG8pLCB5MSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQyLCBvZmZzZXQyLCBvKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmWzBdLCBmWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldFBvc2l0aW9uKGZbMF0sIGZbMV0pO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnF1YWRSZWZsZWN0aW9uUG9pbnQgPSBbeCArICh4IC0geDEpLCB5ICsgKHkgLSB5MSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgY2FzZSAndCc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IHNlZy5rZXkgPT09ICd0JztcbiAgICAgICAgICAgICAgICBpZiAoc2VnLmRhdGEubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSArc2VnLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gK3NlZy5kYXRhWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gcGF0aC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHgxID0geDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkxID0geTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldktleSA9IHByZXZTZWcgPyBwcmV2U2VnLmtleSA6ICcnO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZLZXkgPT09ICdxJyB8fCBwcmV2S2V5ID09PSAnUScgfHwgcHJldktleSA9PT0gJ3QnIHx8IHByZXZLZXkgPT09ICdUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0gcGF0aC5xdWFkUmVmbGVjdGlvblBvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxID0gcmVmWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgeTEgPSByZWZbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0MSA9IDEgKiAoMSArIG8ucm91Z2huZXNzICogMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0MiA9IDEuNSAqICgxICsgby5yb3VnaG5lc3MgKiAwLjIyKTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbcGF0aC54ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pLCBwYXRoLnkgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0MSwgb2Zmc2V0MSwgbyldIH0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZiA9IFt4ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pLCB5ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pXTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3A6ICdxY3VydmVUbycsIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQxLCBvZmZzZXQxLCBvKSwgeTEgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0MSwgb2Zmc2V0MSwgbyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZlswXSwgZlsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbcGF0aC54ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDIsIG9mZnNldDIsIG8pLCBwYXRoLnkgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0Miwgb2Zmc2V0MiwgbyldIH0pO1xuICAgICAgICAgICAgICAgICAgICBmID0gW3ggKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0Miwgb2Zmc2V0MiwgbyksIHkgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0Miwgb2Zmc2V0MiwgbyldO1xuICAgICAgICAgICAgICAgICAgICBvcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcDogJ3FjdXJ2ZVRvJywgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgxICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDIsIG9mZnNldDIsIG8pLCB5MSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQyLCBvZmZzZXQyLCBvKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmWzBdLCBmWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldFBvc2l0aW9uKGZbMF0sIGZbMV0pO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnF1YWRSZWZsZWN0aW9uUG9pbnQgPSBbeCArICh4IC0geDEpLCB5ICsgKHkgLSB5MSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgY2FzZSAnYSc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IHNlZy5rZXkgPT09ICdhJztcbiAgICAgICAgICAgICAgICBpZiAoc2VnLmRhdGEubGVuZ3RoID49IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcnggPSArc2VnLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ5ID0gK3NlZy5kYXRhWzFdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9ICtzZWcuZGF0YVsyXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFyZ2VBcmNGbGFnID0gK3NlZy5kYXRhWzNdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzd2VlcEZsYWcgPSArc2VnLmRhdGFbNF07XG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gK3NlZy5kYXRhWzVdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9ICtzZWcuZGF0YVs2XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ICs9IHBhdGgueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgKz0gcGF0aC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ID09PSBwYXRoLnggJiYgeSA9PT0gcGF0aC55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocnggPT09IDAgfHwgcnkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKHBhdGgueCwgcGF0aC55LCB4LCB5LCBvKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLnNldFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcmNDb252ZXJ0ZXIgPSBuZXcgUm91Z2hBcmNDb252ZXJ0ZXIoW3BhdGgueCwgcGF0aC55XSwgW3gsIHldLCBbcngsIHJ5XSwgYW5nbGUsIGxhcmdlQXJjRmxhZyA/IHRydWUgOiBmYWxzZSwgc3dlZXBGbGFnID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VnbWVudCA9IGFyY0NvbnZlcnRlci5nZXROZXh0U2VnbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iID0gdGhpcy5fYmV6aWVyVG8oc2VnbWVudC5jcDFbMF0sIHNlZ21lbnQuY3AxWzFdLCBzZWdtZW50LmNwMlswXSwgc2VnbWVudC5jcDJbMV0sIHNlZ21lbnQudG9bMF0sIHNlZ21lbnQudG9bMV0sIHBhdGgsIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHMgPSBvcHMuY29uY2F0KG9iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudCA9IGFyY0NvbnZlcnRlci5nZXROZXh0U2VnbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wcztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSb3VnaENhbnZhcyB9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7IFJvdWdoR2VuZXJhdG9yIH0gZnJvbSAnLi9nZW5lcmF0b3InO1xuaW1wb3J0IHsgUm91Z2hHZW5lcmF0b3JBc3luYyB9IGZyb20gJy4vZ2VuZXJhdG9yLWFzeW5jJztcbmltcG9ydCB7IFJvdWdoQ2FudmFzQXN5bmMgfSBmcm9tICcuL2NhbnZhcy1hc3luYyc7XG5pbXBvcnQgeyBSb3VnaFNWRyB9IGZyb20gJy4vc3ZnJztcbmltcG9ydCB7IFJvdWdoU1ZHQXN5bmMgfSBmcm9tICcuL3N2Zy1hc3luYyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY2FudmFzKGNhbnZhcywgY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJvdWdoQ2FudmFzQXN5bmMoY2FudmFzLCBjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUm91Z2hDYW52YXMoY2FudmFzLCBjb25maWcpO1xuICAgIH0sXG4gICAgc3ZnKHN2ZywgY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJvdWdoU1ZHQXN5bmMoc3ZnLCBjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUm91Z2hTVkcoc3ZnLCBjb25maWcpO1xuICAgIH0sXG4gICAgY3JlYXRlUmVuZGVyZXIoKSB7XG4gICAgICAgIHJldHVybiBSb3VnaENhbnZhcy5jcmVhdGVSZW5kZXJlcigpO1xuICAgIH0sXG4gICAgZ2VuZXJhdG9yKGNvbmZpZywgc3VyZmFjZSkge1xuICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSb3VnaEdlbmVyYXRvckFzeW5jKGNvbmZpZywgc3VyZmFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBSb3VnaEdlbmVyYXRvcihjb25maWcsIHN1cmZhY2UpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBSb3VnaEdlbmVyYXRvckFzeW5jIH0gZnJvbSAnLi9nZW5lcmF0b3ItYXN5bmMnO1xuaW1wb3J0IHsgUm91Z2hTVkdCYXNlIH0gZnJvbSAnLi9zdmctYmFzZSc7XG5leHBvcnQgY2xhc3MgUm91Z2hTVkdBc3luYyBleHRlbmRzIFJvdWdoU1ZHQmFzZSB7XG4gICAgY29uc3RydWN0b3Ioc3ZnLCBjb25maWcpIHtcbiAgICAgICAgc3VwZXIoc3ZnKTtcbiAgICAgICAgdGhpcy5nZW5Bc3luYyA9IG5ldyBSb3VnaEdlbmVyYXRvckFzeW5jKGNvbmZpZyB8fCBudWxsLCB0aGlzLnN2Zyk7XG4gICAgfVxuICAgIGdldCBnZW5lcmF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbkFzeW5jO1xuICAgIH1cbiAgICBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuQXN5bmMuZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuICAgIG9wc1RvUGF0aChkcmF3aW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbkFzeW5jLm9wc1RvUGF0aChkcmF3aW5nKTtcbiAgICB9XG4gICAgYXN5bmMgbGluZSh4MSwgeTEsIHgyLCB5Miwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5saW5lKHgxLCB5MSwgeDIsIHkyLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgYXN5bmMgcmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMucmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGQpO1xuICAgIH1cbiAgICBhc3luYyBlbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMuZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgYXN5bmMgY2lyY2xlKHgsIHksIGRpYW1ldGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmNpcmNsZSh4LCB5LCBkaWFtZXRlciwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIGFzeW5jIGxpbmVhclBhdGgocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmxpbmVhclBhdGgocG9pbnRzLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgYXN5bmMgcG9seWdvbihwb2ludHMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMucG9seWdvbihwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGQpO1xuICAgIH1cbiAgICBhc3luYyBhcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCA9IGZhbHNlLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgY2xvc2VkLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgYXN5bmMgY3VydmUocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmN1cnZlKHBvaW50cywgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIGFzeW5jIHBhdGgoZCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkcmF3aW5nID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5wYXRoKGQsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGRyYXdpbmcpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJvdWdoUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVyJztcbmNvbnN0IGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydCBjbGFzcyBSb3VnaFNWR0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHN2Zykge1xuICAgICAgICB0aGlzLnN2ZyA9IHN2ZztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJvdWdoUmVuZGVyZXIoKTtcbiAgICB9XG4gICAgZ2V0IGRlZnMoKSB7XG4gICAgICAgIGNvbnN0IGRvYyA9IHRoaXMuc3ZnLm93bmVyRG9jdW1lbnQgfHwgKGhhc0RvY3VtZW50ICYmIGRvY3VtZW50KTtcbiAgICAgICAgaWYgKGRvYykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9kZWZzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZG5vZGUgPSBkb2MuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdkZWZzJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ZnLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdmcuaW5zZXJ0QmVmb3JlKGRub2RlLCB0aGlzLnN2Zy5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKGRub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmcyA9IGRub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZzIHx8IG51bGw7XG4gICAgfVxuICAgIGRyYXcoZHJhd2FibGUpIHtcbiAgICAgICAgY29uc3Qgc2V0cyA9IGRyYXdhYmxlLnNldHMgfHwgW107XG4gICAgICAgIGNvbnN0IG8gPSBkcmF3YWJsZS5vcHRpb25zIHx8IHRoaXMuZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5zdmcub3duZXJEb2N1bWVudCB8fCAoaGFzRG9jdW1lbnQgJiYgZG9jdW1lbnQpO1xuICAgICAgICBjb25zdCBnID0gZG9jLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xuICAgICAgICBmb3IgKGNvbnN0IGRyYXdpbmcgb2Ygc2V0cykge1xuICAgICAgICAgICAgbGV0IHBhdGggPSBudWxsO1xuICAgICAgICAgICAgc3dpdGNoIChkcmF3aW5nLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwYXRoJzoge1xuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZG9jLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMub3BzVG9QYXRoKGRyYXdpbmcpKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5zdHJva2UgPSBvLnN0cm9rZTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5zdHJva2VXaWR0aCA9IG8uc3Ryb2tlV2lkdGggKyAnJztcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5maWxsID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnZmlsbFBhdGgnOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBkb2MuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgdGhpcy5vcHNUb1BhdGgoZHJhd2luZykpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnN0eWxlLnN0cm9rZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5zdHJva2VXaWR0aCA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5maWxsID0gby5maWxsIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdmaWxsU2tldGNoJzoge1xuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdGhpcy5maWxsU2tldGNoKGRvYywgZHJhd2luZywgbyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdwYXRoMkRmaWxsJzoge1xuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZG9jLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsIGRyYXdpbmcucGF0aCB8fCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguc3R5bGUuc3Ryb2tlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnN0eWxlLnN0cm9rZVdpZHRoID0gJzAnO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnN0eWxlLmZpbGwgPSBvLmZpbGwgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdGgyRHBhdHRlcm4nOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZWZzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW5ub3QgcmVuZGVyIHBhdGgyRHBhdHRlcm4uIE5vIGRlZnMvZG9jdW1lbnQgZGVmaW5lZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBkcmF3aW5nLnNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gZG9jLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0dGVybicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBgcm91Z2gtJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgOTk5OTk5KSl9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uc2V0QXR0cmlidXRlKCd4JywgJzAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uc2V0QXR0cmlidXRlKCd5JywgJzAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybi5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7TWF0aC5yb3VuZChzaXplWzBdKX0gJHtNYXRoLnJvdW5kKHNpemVbMV0pfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybi5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm5Vbml0cycsICdvYmplY3RCb3VuZGluZ0JveCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0dGVyblBhdGggPSB0aGlzLmZpbGxTa2V0Y2goZG9jLCBkcmF3aW5nLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uYXBwZW5kQ2hpbGQocGF0dGVyblBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZzLmFwcGVuZENoaWxkKHBhdHRlcm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGRvYy5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgZHJhd2luZy5wYXRoIHx8ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGguc3R5bGUuc3Ryb2tlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5zdHJva2VXaWR0aCA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGguc3R5bGUuZmlsbCA9IGB1cmwoIyR7aWR9KWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICBnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnO1xuICAgIH1cbiAgICBmaWxsU2tldGNoKGRvYywgZHJhd2luZywgbykge1xuICAgICAgICBsZXQgZndlaWdodCA9IG8uZmlsbFdlaWdodDtcbiAgICAgICAgaWYgKGZ3ZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBmd2VpZ2h0ID0gby5zdHJva2VXaWR0aCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF0aCA9IGRvYy5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCB0aGlzLm9wc1RvUGF0aChkcmF3aW5nKSk7XG4gICAgICAgIHBhdGguc3R5bGUuc3Ryb2tlID0gby5maWxsIHx8IG51bGw7XG4gICAgICAgIHBhdGguc3R5bGUuc3Ryb2tlV2lkdGggPSBmd2VpZ2h0ICsgJyc7XG4gICAgICAgIHBhdGguc3R5bGUuZmlsbCA9ICdub25lJztcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUm91Z2hHZW5lcmF0b3IgfSBmcm9tICcuL2dlbmVyYXRvcic7XG5pbXBvcnQgeyBSb3VnaFNWR0Jhc2UgfSBmcm9tICcuL3N2Zy1iYXNlJztcbmV4cG9ydCBjbGFzcyBSb3VnaFNWRyBleHRlbmRzIFJvdWdoU1ZHQmFzZSB7XG4gICAgY29uc3RydWN0b3Ioc3ZnLCBjb25maWcpIHtcbiAgICAgICAgc3VwZXIoc3ZnKTtcbiAgICAgICAgdGhpcy5nZW4gPSBuZXcgUm91Z2hHZW5lcmF0b3IoY29uZmlnIHx8IG51bGwsIHRoaXMuc3ZnKTtcbiAgICB9XG4gICAgZ2V0IGdlbmVyYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuO1xuICAgIH1cbiAgICBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuLmRlZmF1bHRPcHRpb25zO1xuICAgIH1cbiAgICBvcHNUb1BhdGgoZHJhd2luZykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW4ub3BzVG9QYXRoKGRyYXdpbmcpO1xuICAgIH1cbiAgICBsaW5lKHgxLCB5MSwgeDIsIHkyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5saW5lKHgxLCB5MSwgeDIsIHkyLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgcmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZ2VuLnJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5lbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGQpO1xuICAgIH1cbiAgICBjaXJjbGUoeCwgeSwgZGlhbWV0ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZ2VuLmNpcmNsZSh4LCB5LCBkaWFtZXRlciwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIGxpbmVhclBhdGgocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5saW5lYXJQYXRoKHBvaW50cywgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIHBvbHlnb24ocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5wb2x5Z29uKHBvaW50cywgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIGFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgY2xvc2VkID0gZmFsc2UsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZ2VuLmFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgY2xvc2VkLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgY3VydmUocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5jdXJ2ZShwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGQpO1xuICAgIH1cbiAgICBwYXRoKGQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZHJhd2luZyA9IHRoaXMuZ2VuLnBhdGgoZCwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZHJhd2luZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2VnbWVudCB9IGZyb20gJy4uL2dlb21ldHJ5JztcbmV4cG9ydCBjbGFzcyBIYWNodXJlSXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCwgZ2FwLCBzaW5BbmdsZSwgY29zQW5nbGUsIHRhbkFuZ2xlKSB7XG4gICAgICAgIHRoaXMuZGVsdGFYID0gMDtcbiAgICAgICAgdGhpcy5oR2FwID0gMDtcbiAgICAgICAgdGhpcy50b3AgPSB0b3A7XG4gICAgICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMuZ2FwID0gZ2FwO1xuICAgICAgICB0aGlzLnNpbkFuZ2xlID0gc2luQW5nbGU7XG4gICAgICAgIHRoaXMudGFuQW5nbGUgPSB0YW5BbmdsZTtcbiAgICAgICAgaWYgKE1hdGguYWJzKHNpbkFuZ2xlKSA8IDAuMDAwMSkge1xuICAgICAgICAgICAgdGhpcy5wb3MgPSBsZWZ0ICsgZ2FwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKHNpbkFuZ2xlKSA+IDAuOTk5OSkge1xuICAgICAgICAgICAgdGhpcy5wb3MgPSB0b3AgKyBnYXA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlbHRhWCA9IChib3R0b20gLSB0b3ApICogTWF0aC5hYnModGFuQW5nbGUpO1xuICAgICAgICAgICAgdGhpcy5wb3MgPSBsZWZ0IC0gTWF0aC5hYnModGhpcy5kZWx0YVgpO1xuICAgICAgICAgICAgdGhpcy5oR2FwID0gTWF0aC5hYnMoZ2FwIC8gY29zQW5nbGUpO1xuICAgICAgICAgICAgdGhpcy5zTGVmdCA9IG5ldyBTZWdtZW50KFtsZWZ0LCBib3R0b21dLCBbbGVmdCwgdG9wXSk7XG4gICAgICAgICAgICB0aGlzLnNSaWdodCA9IG5ldyBTZWdtZW50KFtyaWdodCwgYm90dG9tXSwgW3JpZ2h0LCB0b3BdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBuZXh0TGluZSgpIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc2luQW5nbGUpIDwgMC4wMDAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3MgPCB0aGlzLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IFt0aGlzLnBvcywgdGhpcy50b3AsIHRoaXMucG9zLCB0aGlzLmJvdHRvbV07XG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgKz0gdGhpcy5nYXA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnModGhpcy5zaW5BbmdsZSkgPiAwLjk5OTkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcyA8IHRoaXMuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IFt0aGlzLmxlZnQsIHRoaXMucG9zLCB0aGlzLnJpZ2h0LCB0aGlzLnBvc107XG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgKz0gdGhpcy5nYXA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgeExvd2VyID0gdGhpcy5wb3MgLSB0aGlzLmRlbHRhWCAvIDI7XG4gICAgICAgICAgICBsZXQgeFVwcGVyID0gdGhpcy5wb3MgKyB0aGlzLmRlbHRhWCAvIDI7XG4gICAgICAgICAgICBsZXQgeUxvd2VyID0gdGhpcy5ib3R0b207XG4gICAgICAgICAgICBsZXQgeVVwcGVyID0gdGhpcy50b3A7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3MgPCAodGhpcy5yaWdodCArIHRoaXMuZGVsdGFYKSkge1xuICAgICAgICAgICAgICAgIHdoaWxlICgoKHhMb3dlciA8IHRoaXMubGVmdCkgJiYgKHhVcHBlciA8IHRoaXMubGVmdCkpIHx8ICgoeExvd2VyID4gdGhpcy5yaWdodCkgJiYgKHhVcHBlciA+IHRoaXMucmlnaHQpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcyArPSB0aGlzLmhHYXA7XG4gICAgICAgICAgICAgICAgICAgIHhMb3dlciA9IHRoaXMucG9zIC0gdGhpcy5kZWx0YVggLyAyO1xuICAgICAgICAgICAgICAgICAgICB4VXBwZXIgPSB0aGlzLnBvcyArIHRoaXMuZGVsdGFYIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zID4gKHRoaXMucmlnaHQgKyB0aGlzLmRlbHRhWCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBuZXcgU2VnbWVudChbeExvd2VyLCB5TG93ZXJdLCBbeFVwcGVyLCB5VXBwZXJdKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zTGVmdCAmJiBzLmludGVyc2VjdHModGhpcy5zTGVmdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgeExvd2VyID0gcy54aTtcbiAgICAgICAgICAgICAgICAgICAgeUxvd2VyID0gcy55aTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc1JpZ2h0ICYmIHMuaW50ZXJzZWN0cyh0aGlzLnNSaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgeFVwcGVyID0gcy54aTtcbiAgICAgICAgICAgICAgICAgICAgeVVwcGVyID0gcy55aTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFuQW5nbGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHhMb3dlciA9IHRoaXMucmlnaHQgLSAoeExvd2VyIC0gdGhpcy5sZWZ0KTtcbiAgICAgICAgICAgICAgICAgICAgeFVwcGVyID0gdGhpcy5yaWdodCAtICh4VXBwZXIgLSB0aGlzLmxlZnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gW3hMb3dlciwgeUxvd2VyLCB4VXBwZXIsIHlVcHBlcl07XG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgKz0gdGhpcy5oR2FwO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCB7IENvbXBvbmVudENvbnN0cnVjdG9ySW5mbywgQ29tcG9uZW50RHJhd0luZm8sIENvb3JkaW5hdGUgfSBmcm9tICdAZW5naW5lL3R5cGVzJztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZW5naW5lL2NvbW1vbi9Db21wb25lbnQnO1xyXG5pbXBvcnQgeyBTTiB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2RlZmluaXRpb25zJztcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGVuZ3RoIC0gdGhlIGF4aXMgbGVuZ3RoLlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGggLSB0aGUgd2lkdGggb2YgYXhpcy5cclxuICogQHByb3BlcnR5IHtDb29yZGluYXRlfSBzdGFydCAtIHdoZXJlIGNvb3JkaW5hdGUgdG8gc3RhcnQgYXhpcy5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0LnggLSB0aGUgYXhpcyB3aWxsIGFsaWduIHRoaXMgcG9pbnQgcmF0aGVyIHRoYW4gc3RhcnQuXHJcbiAqICovXHJcbmludGVyZmFjZSBEcmF3SW5mbyBleHRlbmRzIENvbXBvbmVudERyYXdJbmZve1xyXG4gICAgbGVuZ3RoIDpudW1iZXI7XHJcbiAgICB3aWR0aCA6bnVtYmVyO1xyXG4gICAgc3RhcnQ6IENvb3JkaW5hdGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgYm9keSBvZiBBeGlzLlxyXG4gKiBEcmF3IHRoZSBheGlzIHVzaW5nIHRoaXMgY29tcG9uZW50LlxyXG4gKiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBeGlzQm9keSBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkNvbXBvbmVudENvbnN0cnVjdG9ySW5mbykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmV4dC5vbkNvbnN0cnVjdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBuYW1lID0gU04uQXhpc0JvZHk7XHJcbiAgICBkcmF3SW5mbzogRHJhd0luZm8gPSB7XHJcbiAgICAgICAgYm94OiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgc3RhcnQ6IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBhcHBseSgpIHtcclxuICAgICAgICB0aGlzLmRyYXdJbmZvLmJveCA9IHtcclxuICAgICAgICAgICAgeDogdGhpcy5kcmF3SW5mby5zdGFydC54IC0gdGhpcy5kcmF3SW5mby53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IHRoaXMuZHJhd0luZm8uc3RhcnQueSxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZHJhd0luZm8ud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5kcmF3SW5mby5sZW5ndGgsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gc3VwZXIuYXBwbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXMoY29tcDpDb21wb25lbnQpIDpjb21wIGlzIEF4aXNCb2R5IHtcclxuICAgICAgICByZXR1cm4gY29tcC5uYW1lID09PSBTTi5BeGlzQm9keTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnRDb25zdHJ1Y3RvckluZm8sIENvbXBvbmVudERyYXdJbmZvIH0gZnJvbSAnQGVuZ2luZS90eXBlcyc7XHJcbmltcG9ydCB7IHBhcnNlQm94IH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZnVuY3Rpb25zJztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZW5naW5lL2NvbW1vbi9Db21wb25lbnQnO1xyXG5pbXBvcnQgeyBTTiB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2RlZmluaXRpb25zJztcclxuaW1wb3J0IHsgRHJhd0luZm8gYXMgQXhpc0JvZHlEcmF3SW5mbyB9IGZyb20gJ0BlbmdpbmUvQXhpcy9BeGlzQm9keSc7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtSZWFkb25seTxBeGlzQm9keURyYXdJbmZvPn0gYm9keURyYXdJbmZvIC0gdGhlIERyYXdJbmZvIG9mIEF4aXNCb2R5LlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gYWxpZ25ZIC0gdGhlIHkgcG9pbnQgd2hpY2ggaXMgdGhlIEF4aXNNaWxlc3RvbmUgYWxpZ24gdGFyZ2V0LlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGV4dCAtIHRoZSBzaG93ZWQgdGV4dCBvZiBtaWxlc3RvbmUuXHJcbiAqICovXHJcbmludGVyZmFjZSBEcmF3SW5mbyBleHRlbmRzIENvbXBvbmVudERyYXdJbmZve1xyXG4gICAgYm9keURyYXdJbmZvOiBSZWFkb25seTxBeGlzQm9keURyYXdJbmZvPjtcclxuICAgIGFsaWduWTogbnVtYmVyO1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIG1pbGVzdG9uZSBvbiBBeGlzLCBmb3IgaW5kaWNhdGUgdGltZSBvZiBuZWFyYnkgYXJlYS5cclxuICogQ2FuIGNvbmZsaWN0IHdpdGggRXZlbnRCb2R5LlxyXG4gKiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBeGlzTWlsZXN0b25lIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6Q29tcG9uZW50Q29uc3RydWN0b3JJbmZvKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuZXh0Lm9uQ29uc3RydWN0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5hbWUgPSBTTi5BeGlzTWlsZXN0b25lO1xyXG4gICAgZHJhd0luZm86RHJhd0luZm8gPSB7XHJcbiAgICAgICAgYm9keURyYXdJbmZvOiB7fSBhcyBhbnksXHJcbiAgICAgICAgYWxpZ25ZOiAwLFxyXG4gICAgICAgIHRleHQ6ICcwX28nLFxyXG5cclxuICAgICAgICBib3g6IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGVFbGVtZW50KCkge1xyXG4gICAgICAgIGNvbnN0IGZsYWcgPSBzdXBlci5jcmVhdGVFbGVtZW50KCk7IC8vIE11c3QgcmV0dXJuIHRoaXMgZmxhZ1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQhLmlubmVySFRNTCA9IHRoaXMuZHJhd0luZm8udGV4dDtcclxuXHJcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBwYXJzZUJveCh0aGlzLmVsZW1lbnQhKTtcclxuICAgICAgICBjb25zdCB4ID0gdGhpcy5kcmF3SW5mby5ib2R5RHJhd0luZm8uYm94LnhcclxuICAgICAgICAgICAgKyB0aGlzLmRyYXdJbmZvLmJvZHlEcmF3SW5mby5ib3gud2lkdGggLyAyXHJcbiAgICAgICAgICAgIC0gd2lkdGggLyAyXHJcbiAgICAgICAgO1xyXG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLmRyYXdJbmZvLmFsaWduWSAtIGhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCEuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCEuc3R5bGUudG9wID0gYCR7eX1weGA7XHJcblxyXG4gICAgICAgIHJldHVybiBmbGFnO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgYXBwbHkoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50IS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgdGhpcy5kcmF3SW5mby5ib3ggPSBwYXJzZUJveCh0aGlzLmVsZW1lbnQhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmFwcGx5KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgICAgIHJldHVybiBzdXBlci5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzKGNvbXA6Q29tcG9uZW50KSA6Y29tcCBpcyBBeGlzTWlsZXN0b25lIHtcclxuICAgICAgICByZXR1cm4gY29tcC5uYW1lID09PSBTTi5BeGlzTWlsZXN0b25lO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudENvbnN0cnVjdG9ySW5mbywgQ29tcG9uZW50RHJhd0luZm8sIENvb3JkaW5hdGUgfSBmcm9tICdAZW5naW5lL3R5cGVzJztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZW5naW5lL2NvbW1vbi9Db21wb25lbnQnO1xyXG5pbXBvcnQgeyBTTiB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2RlZmluaXRpb25zJztcclxuaW1wb3J0IHsgRHJhd0luZm8gYXMgQXhpc0JvZHlEcmF3SW5mbyB9IGZyb20gJ0BlbmdpbmUvQXhpcy9BeGlzQm9keSc7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtSZWFkb25seTxBeGlzQm9keURyYXdJbmZvPn0gYm9keURyYXdJbmZvIC0gdGhlIERyYXdJbmZvIG9mIEF4aXNCb2R5LlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gYWxpZ25ZIC0gdGhlIHkgcG9pbnQgd2hpY2ggaXMgdGhlIEF4aXNTY2FsZSBhbGlnbiB0YXJnZXQuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoZWlnaHQgLSB0aGUgaGVpZ2h0IG9mIEF4aXNTY2FsZS5cclxuICogKi9cclxuaW50ZXJmYWNlIERyYXdJbmZvIGV4dGVuZHMgQ29tcG9uZW50RHJhd0luZm97XHJcbiAgICBib2R5RHJhd0luZm86IFJlYWRvbmx5PEF4aXNCb2R5RHJhd0luZm8+O1xyXG4gICAgYWxpZ25ZOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluIGF4aXMsIG1hcmsgYSBtYXJrIGZvciByZWNvZ25pemUgdGltZSBlYXN5LlxyXG4gKiBPcHRpb25hbCwgYSB0aGVtZSBjYW4gb21pdCB0aGlzIGNvbXBvbmVudCBieSBzaXR1YXRpb24uXHJcbiAqICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEF4aXNTY2FsZSBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkNvbXBvbmVudENvbnN0cnVjdG9ySW5mbykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmV4dC5vbkNvbnN0cnVjdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBuYW1lID0gU04uQXhpc1NjYWxlO1xyXG4gICAgZHJhd0luZm86RHJhd0luZm8gPSB7XHJcbiAgICAgICAgYm9keURyYXdJbmZvOiB7fSBhcyBhbnksXHJcbiAgICAgICAgYWxpZ25ZOiAwLFxyXG4gICAgICAgIGhlaWdodDogMCxcclxuXHJcbiAgICAgICAgYm94OiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgYXBwbHkoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3SW5mby5ib3ggPSB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuZHJhd0luZm8uYm9keURyYXdJbmZvLmJveC54LFxyXG4gICAgICAgICAgICB5OiB0aGlzLmRyYXdJbmZvLmFsaWduWSAtIHRoaXMuZHJhd0luZm8uaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmRyYXdJbmZvLmhlaWdodCxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZHJhd0luZm8uYm9keURyYXdJbmZvLmJveC53aWR0aCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBzdXBlci5hcHBseSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpcyhjb21wOkNvbXBvbmVudCkgOmNvbXAgaXMgQXhpc1NjYWxlIHtcclxuICAgICAgICByZXR1cm4gY29tcC5uYW1lID09PSBTTi5BeGlzU2NhbGU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50Q29uc3RydWN0b3JJbmZvLCBDb21wb25lbnREcmF3SW5mbywgR3JpZENvbmZpZyB9IGZyb20gJ0BlbmdpbmUvdHlwZXMnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BlbmdpbmUvY29tbW9uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBBeGlzTWlsZXN0b25lIGZyb20gJ0BlbmdpbmUvQXhpcy9BeGlzTWlsZXN0b25lJztcclxuaW1wb3J0IEF4aXNTY2FsZSBmcm9tICdAZW5naW5lL0F4aXMvQXhpc1NjYWxlJztcclxuaW1wb3J0IEF4aXNCb2R5IGZyb20gJ0BlbmdpbmUvQXhpcy9BeGlzQm9keSc7XHJcbmltcG9ydCB7IFNOIH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBkZWVwRnJlZXplLCBtZXJnZUJveCB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2Z1bmN0aW9ucyc7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gc2NhbGVzIC0gdGhlIHBvc2l0aW9uIG9mIHNjYWxlcy4gRXZlcnkgaXRlbSBzaG91bGQgPD0gMS5cclxuICogQHByb3BlcnR5IHtPYmplY3RbXX0gbWlsZXN0b25lcyAtIHRoZSBjb25maWcgb2YgbWlsZXN0b25lcy5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IG1pbGVzdG9uZXNbXS5wb3NpdGlvbi4gLSB0aGUgcG9zaXRpb24gb2YgbWlsZXN0b25lLiBFdmVyeSBpdGVtIHNob3VsZCA8PSAxLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbWlsZXN0b25lc1tdLnRleHQuIC0gdGhlIHNob3dlZCB0ZXh0IG9mIG1pbGVzdG9uZS5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlbmd0aCAtIHRoZSBheGlzIGxlbmd0aC5cclxuICogKi9cclxuaW50ZXJmYWNlIERyYXdJbmZvIGV4dGVuZHMgQ29tcG9uZW50RHJhd0luZm97XHJcbiAgICBzY2FsZXM6IG51bWJlcltdO1xyXG4gICAgbWlsZXN0b25lczoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBudW1iZXI7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgfVtdO1xyXG4gICAgbGVuZ3RoOiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge0dyaWRDb25maWd9IGdyaWQgLSB0aGUgd2hvbGUgY29uZmlnIG9mIEdSSUQuXHJcbiAqICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3RydWN0SW5mbyBleHRlbmRzIENvbXBvbmVudENvbnN0cnVjdG9ySW5mb3tcclxuICAgIGdyaWQgOkdyaWRDb25maWc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgd2hvbGUgQXhpcy4gQ29udGFpbiBzb21lIEF4aXNNaWxlc3RvbmUsIHNvbWUgQXhpc1NjYWxlIGFuZCBhIEF4aXNCb2R5LlxyXG4gKiBUaGUgTWFuYWdlLUNvbXBvbmVudC4gQWxsIG9mIGRyYXcgaXMgcmVzb2x2ZWQgYnkgY2hpbGQgY29tcG9uZW50LlxyXG4gKiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBeGlzIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6Q29uc3RydWN0SW5mbykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmdyaWQgPSBwcm9wcy5ncmlkO1xyXG4gICAgICAgIHRoaXMuZXh0Lm9uQ29uc3RydWN0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdyaWQgOkdyaWRDb25maWc7XHJcbiAgICBuYW1lID0gU04uQXhpcztcclxuICAgIGRyYXdJbmZvOkRyYXdJbmZvID0ge1xyXG4gICAgICAgIHNjYWxlczogW10sXHJcbiAgICAgICAgbWlsZXN0b25lczogW10sXHJcbiAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIGJveDoge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFRoZSBpbnN0YW5jZXNcclxuICAgIG1pbGVzdG9uZXM6QXhpc01pbGVzdG9uZVtdID0gW107XHJcbiAgICBzY2FsZXM6QXhpc1NjYWxlW10gPSBbXTtcclxuICAgIGJvZHk6QXhpc0JvZHkgPSBudWxsIGFzIGFueTtcclxuXHJcbiAgICAvLyBUaGUgQ29uc3RydWN0b3JzXHJcbiAgICBhYnN0cmFjdCBtaWxlc3RvbmVDb25zdHJ1Y3RvciA6dHlwZW9mIEF4aXNNaWxlc3RvbmU7XHJcbiAgICBhYnN0cmFjdCBzY2FsZUNvbnN0cnVjdG9yIDp0eXBlb2YgQXhpc1NjYWxlO1xyXG4gICAgYWJzdHJhY3QgYm9keUNvbnN0cnVjdG9yIDp0eXBlb2YgQXhpc0JvZHk7XHJcblxyXG4gICAgYXN5bmMgYXBwbHkoKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGlmICghdGhpcy5ib2R5KSB0aGlzLmJvZHkgPSBuZXcgdGhpcy5ib2R5Q29uc3RydWN0b3IodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ib2R5LmRyYXdJbmZvLmxlbmd0aCA9IHRoaXMuZHJhd0luZm8ubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuYm9keS5kcmF3SW5mby53aWR0aCA9IHRoaXMuZ3JpZC5heGlzV2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib2R5LmRyYXdJbmZvLnN0YXJ0ID0gdGhpcy5ncmlkLmF4aXNTdGFydDtcclxuICAgICAgICBhd2FpdCB0aGlzLmJvZHkuYXBwbHkoKTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXJcclxuICAgICAgICB0aGlzLm1pbGVzdG9uZXMuZm9yRWFjaChtID0+IG0uZGVzdHJveSgpKTtcclxuICAgICAgICB0aGlzLm1pbGVzdG9uZXMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnNjYWxlcy5mb3JFYWNoKHMgPT4gcy5kZXN0cm95KCkpO1xyXG4gICAgICAgIHRoaXMuc2NhbGVzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIC8vIEluaXQgc2NhbGVzXHJcbiAgICAgICAgZm9yIChjb25zdCBwb3NpdGlvbiBvZiB0aGlzLmRyYXdJbmZvLnNjYWxlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3SW5mby5taWxlc3RvbmVzLnNvbWUobSA9PiBtLnBvc2l0aW9uID09PSBwb3NpdGlvbikpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlOkF4aXNTY2FsZSA9IG5ldyB0aGlzLnNjYWxlQ29uc3RydWN0b3IodGhpcyk7XHJcbiAgICAgICAgICAgIHNjYWxlLmRyYXdJbmZvLmJvZHlEcmF3SW5mbyA9IGRlZXBGcmVlemUodGhpcy5ib2R5LmRyYXdJbmZvKTtcclxuICAgICAgICAgICAgc2NhbGUuZHJhd0luZm8uYWxpZ25ZID0gcG9zaXRpb247IC8vIHJlY29tcHV0ZWQgaW4gUG9zaXRpb25Db3VudGVyXHJcbiAgICAgICAgICAgIHNjYWxlLmRyYXdJbmZvLmhlaWdodCA9IHRoaXMuZ3JpZC5zY2FsZUhlaWdodDsgLy8gcmVjb21wdXRlZCBpbiBQb3NpdGlvbkNvdW50ZXJcclxuICAgICAgICAgICAgdGhpcy5zY2FsZXMucHVzaChzY2FsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbml0IG1pbGVzdG9uZXNcclxuICAgICAgICBmb3IgKGNvbnN0IHsgcG9zaXRpb24sIHRleHQgfSBvZiB0aGlzLmRyYXdJbmZvLm1pbGVzdG9uZXMpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBjb25zdCBtaWxlc3RvbmUgPSBuZXcgdGhpcy5taWxlc3RvbmVDb25zdHJ1Y3Rvcih0aGlzKTtcclxuICAgICAgICAgICAgbWlsZXN0b25lLmRyYXdJbmZvLmJvZHlEcmF3SW5mbyA9IGRlZXBGcmVlemUodGhpcy5ib2R5LmRyYXdJbmZvKTtcclxuICAgICAgICAgICAgbWlsZXN0b25lLmRyYXdJbmZvLmFsaWduWSA9IHBvc2l0aW9uOyAvLyByZWNvbXB1dGVkIGluIFBvc2l0aW9uQ291bnRlclxyXG4gICAgICAgICAgICBtaWxlc3RvbmUuZHJhd0luZm8udGV4dCA9IHRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMubWlsZXN0b25lcy5wdXNoKG1pbGVzdG9uZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIHRoaXMubWlsZXN0b25lcy5tYXAobSA9PiBtLmFwcGx5KCkpLFxyXG4gICAgICAgICAgICB0aGlzLnNjYWxlcy5tYXAocyA9PiBzLmFwcGx5KCkpLFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXdJbmZvLmJveCA9IG1lcmdlQm94KFxyXG4gICAgICAgICAgICB0aGlzLmJvZHkuZHJhd0luZm8uYm94LFxyXG4gICAgICAgICAgICAuLi50aGlzLm1pbGVzdG9uZXMubWFwKG0gPT4gbS5kcmF3SW5mby5ib3gpLFxyXG4gICAgICAgICAgICAuLi50aGlzLnNjYWxlcy5tYXAocyA9PiBzLmRyYXdJbmZvLmJveCksXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmFwcGx5KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuYm9keS5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5zY2FsZXMuZm9yRWFjaChzID0+IHMuZHJhdygpKTtcclxuICAgICAgICB0aGlzLm1pbGVzdG9uZXMuZm9yRWFjaChtID0+IG0uZHJhdygpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmRyYXcoKTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnNjYWxlcy5mb3JFYWNoKHMgPT4gcy5kZXN0cm95KCkpO1xyXG4gICAgICAgIHRoaXMubWlsZXN0b25lcy5mb3JFYWNoKG0gPT4gbS5kZXN0cm95KCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3VwZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLmJvZHkuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2NhbGVzLmZvckVhY2gocyA9PiBzLmhpZGUoKSk7XHJcbiAgICAgICAgdGhpcy5taWxlc3RvbmVzLmZvckVhY2gobSA9PiBtLmhpZGUoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdXBlci5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzKGNvbXA6Q29tcG9uZW50KSA6Y29tcCBpcyBBeGlzIHtcclxuICAgICAgICByZXR1cm4gY29tcC5uYW1lID09PSBTTi5BeGlzO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudENvbnN0cnVjdG9ySW5mbywgQ29tcG9uZW50RHJhd0luZm8gfSBmcm9tICdAZW5naW5lL3R5cGVzJztcclxuaW1wb3J0IHsgcGFyc2VCb3ggfSBmcm9tICdAZW5naW5lL2NvbW1vbi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BlbmdpbmUvY29tbW9uL0NvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNOIH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgQXhpcyBmcm9tICdAZW5naW5lL0F4aXMnO1xyXG5pbXBvcnQgRXZlbnRNYXJrIGZyb20gJ0BlbmdpbmUvRXZlbnQvRXZlbnRNYXJrJztcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PEF4aXNbJ2RyYXdJbmZvJ10+fSBheGlzQm9keURyYXdJbmZvIC0gdGhlIERyYXdJbmZvIG9mIEF4aXNCb2R5LlxyXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PEV2ZW50TWFya1snZHJhd0luZm8nXT59IG1hcmtEcmF3SW5mbyAtIHRoZSBEcmF3SW5mbyBvZiBFdmVudE1hcmsuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsZW5ndGggLSB0aGUgbGVuZ3RoIG9mIEV2ZW50QXhpcy5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldFggLSB0aGUgb2Zmc2V0WCBvZiBFdmVudEF4aXMuXHJcbiAqIEBwcm9wZXJ0eSB7W3N0cmluZ119IHRleHQgLSB0aGUgZGVzY3JpcHRpb24gYWJvdXQgZXZlbnQgZW5kZWQuXHJcbiAqICovXHJcbmludGVyZmFjZSBEcmF3SW5mbyBleHRlbmRzIENvbXBvbmVudERyYXdJbmZve1xyXG4gICAgYXhpc0JvZHlEcmF3SW5mbzogUmVhZG9ubHk8QXhpc1snZHJhd0luZm8nXT47XHJcbiAgICBtYXJrRHJhd0luZm86IFJlYWRvbmx5PEV2ZW50TWFya1snZHJhd0luZm8nXT47XHJcblxyXG4gICAgbGVuZ3RoOiBudW1iZXI7XHJcbiAgICBvZmZzZXRYOiBudW1iZXI7XHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogUmVjb2duaXplIGEgZXZlbnQgdGltZSBvZiBkdXJhdGlvbiBhbmQgZW5kIHRpbWUgcG9pbnQuXHJcbiAqIFNvbWUgRXZlbnQgaGF2ZSBubyBkdXJhdGlvbiwgc28gaXQgbmVlZG4ndCBFdmVudEF4aXMuXHJcbiAqIENhbiBjb25mbGljdCB3aXRoIEF4aXNNaWxlc3RvbmUgYW5kIEV2ZW50QXhpcy5cclxuICogKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRXZlbnRBeGlzIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6Q29tcG9uZW50Q29uc3RydWN0b3JJbmZvKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuZXh0Lm9uQ29uc3RydWN0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5hbWUgPSBTTi5FdmVudEF4aXM7XHJcbiAgICBkcmF3SW5mbzpEcmF3SW5mbyA9IHtcclxuICAgICAgICBheGlzQm9keURyYXdJbmZvOiB7fSBhcyBhbnksXHJcbiAgICAgICAgbWFya0RyYXdJbmZvOiB7fSBhcyBhbnksXHJcbiAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIG9mZnNldFg6IDAsXHJcblxyXG4gICAgICAgIGJveDoge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgZmxhZyA9IHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTsgLy8gTXVzdCByZXR1cm4gdGhpcyBmbGFnXHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldDtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50IS5jbGFzc0xpc3QuYWRkKCdldmVudF9heGlzLWVuZFRleHQnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQhLmlubmVySFRNTCA9IHRoaXMuZHJhd0luZm8udGV4dCE7XHJcblxyXG4gICAgICAgIGNvbnN0IGJveCA9IHBhcnNlQm94KHRoaXMuZWxlbWVudCEpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQhLnN0eWxlLmxlZnQgPSBgJHt0YXJnZXQueCArIHRoaXMuZHJhd0luZm8ub2Zmc2V0WH1weGA7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50IS5zdHlsZS50b3AgPSBgJHt0YXJnZXQueSAtIHRoaXMuZHJhd0luZm8ubGVuZ3RoIC0gYm94LmhlaWdodCAvIDJ9cHhgO1xyXG5cclxuICAgICAgICByZXR1cm4gZmxhZztcclxuICAgIH1cclxuICAgIGFzeW5jIGFwcGx5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRyYXdJbmZvLnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCEuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5lbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0O1xyXG5cclxuICAgICAgICB0aGlzLmRyYXdJbmZvLmJveCA9IHtcclxuICAgICAgICAgICAgeDogdGFyZ2V0LngsXHJcbiAgICAgICAgICAgIHk6IHRhcmdldC55IC0gdGhpcy5kcmF3SW5mby5sZW5ndGgsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmRyYXdJbmZvLm9mZnNldFgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5kcmF3SW5mby5sZW5ndGgsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmFwcGx5KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRyYXdJbmZvLnRleHQpIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgICAgIHJldHVybiBzdXBlci5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzKGNvbXA6Q29tcG9uZW50KSA6Y29tcCBpcyBFdmVudEF4aXMge1xyXG4gICAgICAgIHJldHVybiBjb21wLm5hbWUgPT09IFNOLkV2ZW50QXhpcztcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudERyYXdJbmZvLFxyXG4gICAgQ29vcmRpbmF0ZSxcclxuICAgIEJveCxcclxuICAgIENvbXBvbmVudENvbnN0cnVjdG9ySW5mbyxcclxufSBmcm9tICdAZW5naW5lL3R5cGVzJztcclxuaW1wb3J0IHsgcGFyc2VCb3ggfSBmcm9tICdAZW5naW5lL2NvbW1vbi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BlbmdpbmUvY29tbW9uL0NvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNOIH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgRXZlbnRNYXJrIGZyb20gJ0BlbmdpbmUvRXZlbnQvRXZlbnRNYXJrJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiAqL1xyXG5pbnRlcmZhY2UgRHJhd0luZm8gZXh0ZW5kcyBDb21wb25lbnREcmF3SW5mb3tcclxuICAgIG1hcmtEcmF3SW5mbzogRXZlbnRNYXJrWydkcmF3SW5mbyddO1xyXG4gICAgb2Zmc2V0OiBDb29yZGluYXRlO1xyXG4gICAgbWF4V2lkdGg6IG51bWJlcjtcclxuXHJcbiAgICBkYXRlOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgY29udGVudFRleHQ/OiBzdHJpbmc7XHJcblxyXG4gICAgZmxvYXRlZDogYm9vbGVhbjtcclxuXHJcbiAgICBmb2xkZWQ6IGJvb2xlYW47XHJcbiAgICBmb2xkZWRUZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQ2FuIGNvbmZsaWN0IHdpdGggQXhpc01pbGVzdG9uZSBhbmQgRXZlbnRCb2R5LlxyXG4gKiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBFdmVudEJvZHkgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpDb21wb25lbnRDb25zdHJ1Y3RvckluZm8pIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5leHQub25Db25zdHJ1Y3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmFtZSA9IFNOLkV2ZW50Qm9keTtcclxuICAgIGVsZW1lbnQgOkhUTUxFbGVtZW50ID0gbnVsbCBhcyBhbnk7XHJcbiAgICBkcmF3SW5mbzpEcmF3SW5mbyA9IHtcclxuICAgICAgICBtYXJrRHJhd0luZm86IG51bGwgYXMgYW55LFxyXG5cclxuICAgICAgICBvZmZzZXQ6IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1heFdpZHRoOiAzMDAsXHJcblxyXG4gICAgICAgIGRhdGU6IG51bGwgYXMgYW55LFxyXG4gICAgICAgIHRpdGxlOiAndW50aXRsZWQnLFxyXG5cclxuICAgICAgICBmbG9hdGVkOiBmYWxzZSxcclxuICAgICAgICBmb2xkZWQ6IGZhbHNlLFxyXG5cclxuICAgICAgICBib3g6IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgZmxhZyA9IHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTsgLy8gTXVzdCByZXR1cm4gdGhpcyBmbGFnXHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5kcmF3SW5mby5ib3gueH1weGA7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke3RoaXMuZHJhd0luZm8uYm94Lnl9cHhgO1xyXG5cclxuICAgICAgICByZXR1cm4gZmxhZztcclxuICAgIH1cclxuICAgIGFzeW5jIGFwcGx5KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEJveEZyb21FbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmFwcGx5KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgICAgIHJldHVybiBzdXBlci5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRFbGVtZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRyYXdJbmZvLmZvbGRlZCkgeyAvLyBUT0RPOiByZWNvbnN0cnVjdCBoZXJlXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJmb2xkZWRUZXh0XCI+JHt0aGlzLmRyYXdJbmZvLmZvbGRlZFRleHQgfHwgdGhpcy5kcmF3SW5mby50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZGF0ZVwiPiR7bmV3IERhdGUodGhpcy5kcmF3SW5mby5kYXRlKS50b0RhdGVTdHJpbmcoKX08L2g1PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0aXRsZVwiPiR7dGhpcy5kcmF3SW5mby50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZGF0ZVwiPiR7bmV3IERhdGUodGhpcy5kcmF3SW5mby5kYXRlKS50b0RhdGVTdHJpbmcoKX08L2g1PlxyXG4gICAgICAgICAgICAgICAgJHt0aGlzLmRyYXdJbmZvLmNvbnRlbnRUZXh0ID8gYDxwPiR7dGhpcy5kcmF3SW5mby5jb250ZW50VGV4dH08L3A+YCA6Jyd9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kcmF3SW5mby5mb2xkZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbGRlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmb2xkZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IGAke3RoaXMuZHJhd0luZm8ubWF4V2lkdGh9cHhgLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpbml0Qm94RnJvbUVsZW1lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgZWx0Qm94ID0gcGFyc2VCb3godGhpcy5lbGVtZW50KTtcclxuICAgICAgICBjb25zdCBib3g6Qm94ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogZWx0Qm94LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGVsdEJveC5oZWlnaHQsXHJcbiAgICAgICAgICAgIC4uLnRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJveC54IC09IGJveC53aWR0aDtcclxuICAgICAgICBib3gueSAtPSBib3guaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgICAgYm94LnggLT0gdGhpcy5kcmF3SW5mby5vZmZzZXQueDtcclxuICAgICAgICBib3gueSArPSB0aGlzLmRyYXdJbmZvLm9mZnNldC55O1xyXG5cclxuICAgICAgICB0aGlzLmRyYXdJbmZvLmJveCA9IGJveDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXMoY29tcDpDb21wb25lbnQpIDpjb21wIGlzIEV2ZW50Qm9keSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXAubmFtZSA9PT0gU04uRXZlbnRCb2R5O1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BlbmdpbmUvY29tbW9uL0NvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudENvbnN0cnVjdG9ySW5mbywgQ29tcG9uZW50RHJhd0luZm8sIENvb3JkaW5hdGUgfSBmcm9tICdAZW5naW5lL3R5cGVzJztcclxuaW1wb3J0IHsgU04gfSBmcm9tICdAZW5naW5lL2NvbW1vbi9kZWZpbml0aW9ucyc7XHJcbmltcG9ydCBBeGlzIGZyb20gJ0BlbmdpbmUvQXhpcyc7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtSZWFkb25seTxBeGlzQm9keURyYXdJbmZvPn0gYm9keURyYXdJbmZvIC0gdGhlIERyYXdJbmZvIG9mIEF4aXNCb2R5LlxyXG4gKiBAcHJvcGVydHkge0Nvb3JkaW5hdGV9IHRhcmdldCAtIHRoZSB0YXJnZXQgY29vcmRpbmF0ZSBpbiBBeGlzLlxyXG4gKiBAcHJvcGVydHkge3dpZHRofSB3aWR0aCAtIHRoZSB3aWR0aCBvZiBtYXJrLlxyXG4gKiBAcHJvcGVydHkge1tudW1iZXJdfSBoZWlnaHQgLSB0aGUgaGVpZ2h0IG9mIG1hcmsuXHJcbiAqICovXHJcbmludGVyZmFjZSBEcmF3SW5mbyBleHRlbmRzIENvbXBvbmVudERyYXdJbmZve1xyXG4gICAgYXhpc0JvZHlEcmF3SW5mbzogUmVhZG9ubHk8QXhpc1snZHJhd0luZm8nXT47XHJcbiAgICB0YXJnZXQ6IENvb3JkaW5hdGU7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0PzogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogSW4gYXhpcywgbWFyayBhIG1hcmsgZm9yIHJlY29nbml6ZSBldmVudCBwb2ludCB3aGVuIGV2ZW50IHRha2UgcGxhY2UuXHJcbiAqIE9wdGlvbmFsLCBhIHRoZW1lIGNhbiBvbWl0IHRoaXMgY29tcG9uZW50IGJ5IHNpdHVhdGlvbi5cclxuICogKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRXZlbnRNYXJrIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6Q29tcG9uZW50Q29uc3RydWN0b3JJbmZvKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuZXh0Lm9uQ29uc3RydWN0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5hbWUgPSBTTi5FdmVudE1hcms7XHJcbiAgICBkcmF3SW5mbzpEcmF3SW5mbyA9IHtcclxuICAgICAgICBheGlzQm9keURyYXdJbmZvOiB7fSBhcyBhbnksXHJcbiAgICAgICAgYm94OiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoOiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBhcHBseSgpIHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZHJhd0luZm8ud2lkdGg7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5kcmF3SW5mby5oZWlnaHQgfHwgd2lkdGg7XHJcbiAgICAgICAgdGhpcy5kcmF3SW5mby5ib3ggPSB7XHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICAgIHg6IHRoaXMuZHJhd0luZm8udGFyZ2V0LnggLSB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IHRoaXMuZHJhd0luZm8udGFyZ2V0LnkgLSBoZWlnaHQgLyAyLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBzdXBlci5hcHBseSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpcyhjb21wOkNvbXBvbmVudCkgOmNvbXAgaXMgRXZlbnRNYXJrIHtcclxuICAgICAgICByZXR1cm4gY29tcC5uYW1lID09PSBTTi5FdmVudE1hcms7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZW5naW5lL2NvbW1vbi9Db21wb25lbnQnO1xyXG5pbXBvcnQge0NvbXBvbmVudENvbnN0cnVjdG9ySW5mbywgQ29tcG9uZW50RHJhd0luZm8sIEdyaWRDb25maWd9IGZyb20gJ0BlbmdpbmUvdHlwZXMnO1xyXG5pbXBvcnQgRXZlbnRNYXJrIGZyb20gJ0BlbmdpbmUvRXZlbnQvRXZlbnRNYXJrJztcclxuaW1wb3J0IEV2ZW50Qm9keSBmcm9tICdAZW5naW5lL0V2ZW50L0V2ZW50Qm9keSc7XHJcbmltcG9ydCBFdmVudEF4aXMgZnJvbSAnQGVuZ2luZS9FdmVudC9FdmVudEF4aXMnO1xyXG5pbXBvcnQgeyBkZWVwRnJlZXplLCBtZXJnZUJveCB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IFNOIH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZGVmaW5pdGlvbnMnO1xyXG5cclxuaW50ZXJmYWNlIERyYXdJbmZvIGV4dGVuZHMgQ29tcG9uZW50RHJhd0luZm97XHJcbiAgICB0YXJnZXQ6IHtcclxuICAgICAgICB4OiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyLFxyXG4gICAgfTtcclxuICAgIG9mZnNldDoge1xyXG4gICAgICAgIHg6IG51bWJlcixcclxuICAgICAgICB5OiBudW1iZXIsXHJcbiAgICB9O1xyXG4gICAgYm9keVdpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgZGF0ZTogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNvbnRlbnRUZXh0Pzogc3RyaW5nO1xyXG5cclxuICAgIGZvbGRlZDogYm9vbGVhbjtcclxuICAgIGZvbGRlZFRleHQ/OiBzdHJpbmc7XHJcblxyXG4gICAgYXhpc1RleHQ/OiBzdHJpbmc7XHJcbiAgICBheGlzTGVuZ3RoPzogbnVtYmVyO1xyXG4gICAgYXhpc09mZnNldD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25zdHJ1Y3RJbmZvIGV4dGVuZHMgQ29tcG9uZW50Q29uc3RydWN0b3JJbmZve1xyXG4gICAgZ3JpZCA6R3JpZENvbmZpZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSB3aG9sZSBFdmVudC4gQ29udGFpbiBhbiBFdmVudEJvZHkgYW5kIGFuIEV2ZW50TWFyaywgbWF5YmUgaGFzIGEgRXZlbnRBeGlzIHRvby5cclxuICogVGhlIE1hbmFnZS1Db21wb25lbnQuIEFsbCBvZiBkcmF3IGlzIHJlc29sdmVkIGJ5IGNoaWxkIGNvbXBvbmVudC5cclxuICogKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRXZlbnQgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICAvKipcclxuICAgICAqIEFsbCBjb21wb25lbnQncyBjb25maWcgb2Ygd2hhdCBzdHlsZSB0byBkcmF3LlxyXG4gICAgICogRS5nLiBUaGUgYm9yZGVyIHdpZHRoIG9mIEF4aXMuXHJcbiAgICAgKiBNdXN0IGJlIGZpbGxlZCBiZWZvcmUgYXBwbHkoKSBjYWxsZWQuXHJcbiAgICAgKiAqL1xyXG4gICAgZ3JpZCA6R3JpZENvbmZpZztcclxuICAgIG5hbWUgPSBTTi5FdmVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpDb25zdHJ1Y3RJbmZvKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuZ3JpZCA9IHByb3BzLmdyaWQ7XHJcbiAgICAgICAgdGhpcy5leHQub25Db25zdHJ1Y3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0luZm86RHJhd0luZm8gPSB7XHJcbiAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgIHg6IDMwLFxyXG4gICAgICAgICAgICB5OiA1MCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9mZnNldDogdGhpcy5ncmlkLmV2ZW50T2Zmc2V0LFxyXG4gICAgICAgIGJvZHlXaWR0aDogMzAwLFxyXG5cclxuICAgICAgICBkYXRlOiBudWxsIGFzIGFueSxcclxuICAgICAgICB0aXRsZTogbnVsbCBhcyBhbnksXHJcblxyXG4gICAgICAgIGZvbGRlZDogZmFsc2UsXHJcbiAgICAgICAgZm9sZGVkVGV4dDogbnVsbCBhcyBhbnksXHJcblxyXG4gICAgICAgIGJveDoge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogNTAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwMCxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBhYnN0cmFjdCBib2R5Q29uc3RydWN0b3IgOnR5cGVvZiBFdmVudEJvZHk7XHJcbiAgICBhYnN0cmFjdCBheGlzQ29uc3RydWN0b3IgOnR5cGVvZiBFdmVudEF4aXM7XHJcbiAgICBhYnN0cmFjdCBtYXJrQ29uc3RydWN0b3IgOnR5cGVvZiBFdmVudE1hcms7XHJcbiAgICBtYXJrOkV2ZW50TWFyayA9IG51bGwgYXMgYW55O1xyXG4gICAgYm9keTpFdmVudEJvZHkgPSBudWxsIGFzIGFueTtcclxuICAgIGF4aXM6RXZlbnRBeGlzfG51bGwgPSBudWxsO1xyXG5cclxuICAgIGFzeW5jIGFwcGx5KCkge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBpZiAoIXRoaXMubWFyaykgdGhpcy5tYXJrID0gbmV3IHRoaXMubWFya0NvbnN0cnVjdG9yKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWFyay5kcmF3SW5mby50YXJnZXQgPSB0aGlzLmRyYXdJbmZvLnRhcmdldDtcclxuICAgICAgICB0aGlzLm1hcmsuZHJhd0luZm8ud2lkdGggPSB0aGlzLmdyaWQubWFya1dpZHRoO1xyXG4gICAgICAgIHRoaXMubWFyay5kcmF3SW5mby5oZWlnaHQgPSB0aGlzLmdyaWQubWFya0hlaWdodDtcclxuICAgICAgICBhd2FpdCB0aGlzLm1hcmsuYXBwbHkoKTtcclxuXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGlmICghdGhpcy5ib2R5KSB0aGlzLmJvZHkgPSBuZXcgdGhpcy5ib2R5Q29uc3RydWN0b3IodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ib2R5LmRyYXdJbmZvLm1hcmtEcmF3SW5mbyA9IGRlZXBGcmVlemUodGhpcy5tYXJrLmRyYXdJbmZvKTtcclxuICAgICAgICB0aGlzLmJvZHkuZHJhd0luZm8ubWF4V2lkdGggPSB0aGlzLmdyaWQuZXZlbnRXaWR0aDtcclxuICAgICAgICB0aGlzLmJvZHkuZHJhd0luZm8uZGF0ZSA9IHRoaXMuZHJhd0luZm8uZGF0ZTtcclxuICAgICAgICB0aGlzLmJvZHkuZHJhd0luZm8udGl0bGUgPSB0aGlzLmRyYXdJbmZvLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuYm9keS5kcmF3SW5mby5jb250ZW50VGV4dCA9IHRoaXMuZHJhd0luZm8uY29udGVudFRleHQ7XHJcbiAgICAgICAgdGhpcy5ib2R5LmRyYXdJbmZvLmZvbGRlZCA9IHRoaXMuZHJhd0luZm8uZm9sZGVkO1xyXG4gICAgICAgIHRoaXMuYm9keS5kcmF3SW5mby5mb2xkZWRUZXh0ID0gdGhpcy5kcmF3SW5mby5mb2xkZWRUZXh0O1xyXG4gICAgICAgIHRoaXMuYm9keS5kcmF3SW5mby5vZmZzZXQgPSAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kcmF3SW5mby5vZmZzZXQpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYm9keS5hcHBseSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kcmF3SW5mby5heGlzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgY29uc3QgYXhpcyA9IHRoaXMuYXhpcyB8fCBuZXcgdGhpcy5heGlzQ29uc3RydWN0b3IodGhpcyk7XHJcbiAgICAgICAgICAgIGF4aXMuZHJhd0luZm8uYXhpc0JvZHlEcmF3SW5mbyA9IGRlZXBGcmVlemUodGhpcy5leHQuY29tcG9uZW50c1tTTi5BeGlzXVswXS5kcmF3SW5mbyk7XHJcbiAgICAgICAgICAgIGF4aXMuZHJhd0luZm8ubWFya0RyYXdJbmZvID0gZGVlcEZyZWV6ZSh0aGlzLm1hcmsuZHJhd0luZm8pO1xyXG4gICAgICAgICAgICBheGlzLmRyYXdJbmZvLm9mZnNldFggPSB0aGlzLmdyaWQubWluRXZlbnRBeGlzT2Zmc2V0O1xyXG4gICAgICAgICAgICBheGlzLmRyYXdJbmZvLmxlbmd0aCA9IHRoaXMuZHJhd0luZm8uYXhpc0xlbmd0aDtcclxuICAgICAgICAgICAgYXhpcy5kcmF3SW5mby50ZXh0ID0gdGhpcy5kcmF3SW5mby5heGlzVGV4dDtcclxuICAgICAgICAgICAgYXdhaXQgYXhpcy5hcHBseSgpO1xyXG4gICAgICAgICAgICB0aGlzLmF4aXMgPSBheGlzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5heGlzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXhpcyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYXdJbmZvLmJveCA9IG1lcmdlQm94KFxyXG4gICAgICAgICAgICB0aGlzLmJvZHkuZHJhd0luZm8uYm94LFxyXG4gICAgICAgICAgICB0aGlzLm1hcmsuZHJhd0luZm8uYm94LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXhpcykge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdJbmZvLmJveCA9IG1lcmdlQm94KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3SW5mby5ib3gsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF4aXMuZHJhd0luZm8uYm94LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmFwcGx5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm1hcmsuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuYm9keS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5heGlzICYmIHRoaXMuYXhpcy5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdXBlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLm1hcmsuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuYm9keS5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5heGlzICYmIHRoaXMuYXhpcy5oaWRlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdXBlci5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmJvZHkuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuYXhpcyAmJiB0aGlzLmF4aXMuZHJhdygpO1xyXG4gICAgICAgIHRoaXMubWFyay5kcmF3KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdXBlci5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzKGNvbXA6Q29tcG9uZW50KSA6Y29tcCBpcyBFdmVudCB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXAubmFtZSA9PT0gU04uRXZlbnQ7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudENvbnN0cnVjdG9ySW5mbywgQ29tcG9uZW50RHJhd0luZm8sIERhdGVCeSwgR3JpZENvbmZpZyB9IGZyb20gJ0BlbmdpbmUvdHlwZXMnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BlbmdpbmUvY29tbW9uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBFdmVudCBmcm9tICdAZW5naW5lL0V2ZW50JztcclxuaW1wb3J0IEF4aXMgZnJvbSAnQGVuZ2luZS9BeGlzJztcclxuaW1wb3J0IHsgZGVlcEZyZWV6ZSwgdGltZU5vZGVHZXR0ZXIgfSBmcm9tICdAZW5naW5lL2NvbW1vbi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBEQVRFX0NPVU5UX0VYVFJBLCBTTiwgU05fVkVSU0lPTiB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2RlZmluaXRpb25zJztcclxuaW1wb3J0IEF4aXNTY2FsZSBmcm9tICdAZW5naW5lL0F4aXMvQXhpc1NjYWxlJztcclxuaW1wb3J0IEF4aXNNaWxlc3RvbmUgZnJvbSAnQGVuZ2luZS9BeGlzL0F4aXNNaWxlc3RvbmUnO1xyXG5pbXBvcnQgeyBCcmVha3BvaW50IH0gZnJvbSAnQC9lbmdpbmUvZXh0ZW5zaW9ucy9CcmVha3BvaW50QW5pbWF0aW9uJztcclxuXHJcbmludGVyZmFjZSBEcmF3SW5mbyBleHRlbmRzIENvbXBvbmVudERyYXdJbmZve1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgZGF0ZTogc3RyaW5nLFxyXG4gICAgICAgIHRpdGxlOiBzdHJpbmcsXHJcblxyXG4gICAgICAgIHRleHQ/OiBzdHJpbmcsXHJcbiAgICAgICAgZW5kRGF0ZT86IHN0cmluZyB8ICdub3cnLFxyXG4gICAgICAgIGVuZFRleHQ/OiBzdHJpbmcsXHJcblxyXG4gICAgICAgIGZvbGRlZD86IGJvb2xlYW4sXHJcbiAgICAgICAgZm9sZGVkVGV4dD86IHN0cmluZyxcclxuICAgIH1bXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bnRpbWVJbmZve1xyXG4gICAgc3RhcnREYXRlOiBzdHJpbmc7XHJcbiAgICBlbmREYXRlOiBzdHJpbmc7XHJcbiAgICBtaWxlc3RvbmVCeTogRGF0ZUJ5IHwgbnVsbDtcclxuICAgIHNjYWxlQnk6IERhdGVCeSB8IG51bGw7XHJcbiAgICBheGlzTGVuZ3RoOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDb25zdHJ1Y3RJbmZvIGV4dGVuZHMgQ29tcG9uZW50Q29uc3RydWN0b3JJbmZve1xyXG4gICAgZ3JpZCA6R3JpZENvbmZpZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgbmFtZSA9IFNOLlRpbWVsaW5lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkNvbnN0cnVjdEluZm8pIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ncmlkID0gcHJvcHMuZ3JpZDtcclxuICAgICAgICB0aGlzLmV4dC5vbkNvbnN0cnVjdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbCBjb21wb25lbnQncyBjb25maWcgb2Ygd2hhdCBzdHlsZSB0byBkcmF3LlxyXG4gICAgICogRS5nLiBUaGUgYm9yZGVyIHdpZHRoIG9mIEF4aXMuXHJcbiAgICAgKiBNdXN0IGJlIGZpbGxlZCBiZWZvcmUgYXBwbHkoKSBjYWxsZWQuXHJcbiAgICAgKiAqL1xyXG4gICAgZ3JpZDpHcmlkQ29uZmlnID0gVGltZWxpbmUuZGVmYXVsdEdyaWQ7XHJcblxyXG4gICAgcnVudGltZSA6UnVudGltZUluZm8gPSB7fSBhcyBhbnk7XHJcblxyXG4gICAgZHJhd0luZm86IERyYXdJbmZvID0ge1xyXG4gICAgICAgIGJveDogeyB4OjAsIHk6MCwgd2lkdGg6MCwgaGVpZ2h0OjAgfSxcclxuICAgICAgICBldmVudHM6IFtdLFxyXG4gICAgfTtcclxuXHJcbiAgICBhYnN0cmFjdCBheGlzQ29uc3RydWN0b3IgOnR5cGVvZiBBeGlzO1xyXG4gICAgYWJzdHJhY3QgZXZlbnRDb25zdHJ1Y3RvciA6dHlwZW9mIEV2ZW50O1xyXG4gICAgZXZlbnRzOkV2ZW50W10gPSBbXTtcclxuICAgIGF4aXMgOkF4aXMgPSBudWxsIGFzIGFueTtcclxuXHJcbiAgICBjb3VudFN0YXJ0RGF0YSgpIDpEYXRlIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSBBcnJheS5mcm9tKHRoaXMuZHJhd0luZm8uZXZlbnRzKS5zb3J0KFxyXG4gICAgICAgICAgICAoZTEsIGUyKSA9PiBOdW1iZXIobmV3IERhdGUoZTEuZGF0ZSkpIC0gTnVtYmVyKG5ldyBEYXRlKGUyLmRhdGUpKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShldmVudHNbMF0uZGF0ZSk7XHJcbiAgICB9XHJcbiAgICBjb3VudEVuZERhdGEoKSA6RGF0ZSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5kcmF3SW5mby5ldmVudHM7XHJcblxyXG4gICAgICAgIGNvbnN0IG1heFN0YXJ0RGF0YSA9IE1hdGgubWF4KC4uLmV2ZW50cy5tYXAoZXZlbnQgPT4gTnVtYmVyKG5ldyBEYXRlKGV2ZW50LmRhdGUpKSkpO1xyXG4gICAgICAgIGNvbnN0IG1heEVuZERhdGEgPSBNYXRoLm1heChcclxuICAgICAgICAgICAgLi4uZXZlbnRzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGV2ZW50ID0+ICgnZW5kRGF0ZScgaW4gZXZlbnQpKVxyXG4gICAgICAgICAgICAgICAgLm1hcChldmVudCA9PiBOdW1iZXIobmV3IERhdGUoZXZlbnQuZW5kRGF0ZSEpKSksXHJcbiAgICAgICAgKSB8fCAtMTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKE1hdGgubWF4KG1heFN0YXJ0RGF0YSAsIG1heEVuZERhdGEpKTtcclxuICAgIH1cclxuICAgIGNvdW50TWlsZXN0b25lQnkoKSA6RGF0ZUJ5IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgVFdPX1dFRUsgICAgICA9IDEwMDAgKiA2MCAqIDYwICogMjQgKiA3ICogMjtcclxuICAgICAgICBjb25zdCBUV09fTU9OVEggICAgID0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwICogMjtcclxuICAgICAgICBjb25zdCBUV09fUVVBUlRFUiAgID0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwICogMyAqIDI7XHJcbiAgICAgICAgY29uc3QgVFdPX1lFQVIgICAgICA9IDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCAqIDEyICogMjtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YVNjb3BlID1cclxuICAgICAgICAgICAgbmV3IERhdGUodGhpcy5ydW50aW1lLmVuZERhdGUpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAtIG5ldyBEYXRlKHRoaXMucnVudGltZS5zdGFydERhdGUpLmdldFRpbWUoKVxyXG4gICAgICAgIDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZGF0YVNjb3BlID4gVFdPX1lFQVI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZUJ5LlllYXI7XHJcbiAgICAgICAgICAgIGNhc2UgZGF0YVNjb3BlID4gVFdPX1FVQVJURVI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZUJ5LlF1YXJ0ZXI7XHJcbiAgICAgICAgICAgIGNhc2UgZGF0YVNjb3BlID4gVFdPX01PTlRIOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVCeS5Nb250aDtcclxuICAgICAgICAgICAgY2FzZSBkYXRhU2NvcGUgPiBUV09fV0VFSzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlQnkuV2VlaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIH1cclxuICAgIGNvdW50U2NhbGVCeSgpIDpEYXRlQnkgfCBudWxsIHtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnJ1bnRpbWUubWlsZXN0b25lQnkpIHtcclxuICAgICAgICAgICAgY2FzZSBEYXRlQnkuWWVhcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlQnkuUXVhcnRlcjtcclxuICAgICAgICAgICAgY2FzZSBEYXRlQnkuUXVhcnRlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlQnkuTW9udGg7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0ZUJ5Lk1vbnRoOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVCeS5XZWVrO1xyXG4gICAgICAgICAgICBjYXNlIERhdGVCeS5XZWVrOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVCeS5EYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICB9XHJcbiAgICBjb3VudEF4aXNMZW5ndGgoKSA6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gNTAwICsgdGhpcy5kcmF3SW5mby5ldmVudHMubGVuZ3RoICogMTAwO1xyXG4gICAgfVxyXG4gICAgaW5pdFJ1bnRpbWUocnVudGltZT86UGFydGlhbDxSdW50aW1lSW5mbz4pIDpSdW50aW1lSW5mbyB7XHJcbiAgICAgICAgdGhpcy5ydW50aW1lID0gT2JqZWN0LmNyZWF0ZShydW50aW1lIHx8IE9iamVjdC5wcm90b3R5cGUpO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bnRpbWUuc3RhcnREYXRlICAgPSAoJ3N0YXJ0RGF0ZScgICBpbiB0aGlzLnJ1bnRpbWUpXHJcbiAgICAgICAgICAgID8gbmV3IERhdGUodGhpcy5ydW50aW1lLnN0YXJ0RGF0ZSkudG9JU09TdHJpbmcoKVxyXG4gICAgICAgICAgICA6IHRoaXMuY291bnRTdGFydERhdGEoKS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMucnVudGltZS5lbmREYXRlICAgICA9ICgnZW5kRGF0ZScgICAgIGluIHRoaXMucnVudGltZSlcclxuICAgICAgICAgICAgPyBuZXcgRGF0ZSh0aGlzLnJ1bnRpbWUuZW5kRGF0ZSkudG9JU09TdHJpbmcoKVxyXG4gICAgICAgICAgICA6IHRoaXMuY291bnRFbmREYXRhKCkudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnJ1bnRpbWUubWlsZXN0b25lQnkgPSAoJ21pbGVzdG9uZUJ5JyBpbiB0aGlzLnJ1bnRpbWUpXHJcbiAgICAgICAgICAgID8gdGhpcy5ydW50aW1lLm1pbGVzdG9uZUJ5XHJcbiAgICAgICAgICAgIDogdGhpcy5jb3VudE1pbGVzdG9uZUJ5KCk7XHJcbiAgICAgICAgdGhpcy5ydW50aW1lLnNjYWxlQnkgICAgID0gKCdzY2FsZUJ5JyAgICAgaW4gdGhpcy5ydW50aW1lKVxyXG4gICAgICAgICAgICA/IHRoaXMucnVudGltZS5zY2FsZUJ5XHJcbiAgICAgICAgICAgIDogdGhpcy5jb3VudFNjYWxlQnkoKTtcclxuICAgICAgICB0aGlzLnJ1bnRpbWUuYXhpc0xlbmd0aCAgPSAoJ2F4aXNMZW5ndGgnICBpbiB0aGlzLnJ1bnRpbWUpXHJcbiAgICAgICAgICAgID8gdGhpcy5ydW50aW1lLmF4aXNMZW5ndGhcclxuICAgICAgICAgICAgOiB0aGlzLmNvdW50QXhpc0xlbmd0aCgpO1xyXG5cclxuICAgICAgICAvLyBGSVhNRTogV2hhdCBpcyBpdD8/P1xyXG4gICAgICAgIC8vIGFsaWduaW5nIHNjYWxlQnlcclxuICAgICAgICB0aGlzLnJ1bnRpbWUuc3RhcnREYXRlID0gbmV3IERhdGUoXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKHRoaXMucnVudGltZS5zdGFydERhdGUhKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgLSBEQVRFX0NPVU5UX0VYVFJBW3RoaXMucnVudGltZS5zY2FsZUJ5IHx8IERhdGVCeS5EYXldLFxyXG4gICAgICAgICkudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnJ1bnRpbWUuZW5kRGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgICBuZXcgRGF0ZSh0aGlzLnJ1bnRpbWUuZW5kRGF0ZSEpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICArIERBVEVfQ09VTlRfRVhUUkFbdGhpcy5ydW50aW1lLnNjYWxlQnkgfHwgRGF0ZUJ5LkRheV0sXHJcbiAgICAgICAgKS50b0lTT1N0cmluZygpO1xyXG5cclxuICAgICAgICByZXR1cm4gcnVudGltZSBhcyBSdW50aW1lSW5mbztcclxuICAgIH1cclxuICAgIGFzeW5jIGFwcGx5KHJ1bnRpbWU/OlBhcnRpYWw8UnVudGltZUluZm8+KSB7XHJcbiAgICAgICAgdGhpcy5pbml0UnVudGltZShydW50aW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmdyaWQuY2FudmFzV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5ydW50aW1lLmF4aXNMZW5ndGggKyB0aGlzLmdyaWQuYXhpc1N0YXJ0LnkgKiAyO1xyXG5cclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKCF0aGlzLmF4aXMpIHRoaXMuYXhpcyA9IG5ldyB0aGlzLmF4aXNDb25zdHJ1Y3Rvcih0aGlzKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUF4aXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChlID0+IGUuZGVzdHJveSgpKTtcclxuICAgICAgICB0aGlzLmV2ZW50cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdXBlci5hcHBseSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5heGlzLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGV2ZW50LmRyYXcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmRyYXcoKTtcclxuICAgIH1cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChldmVudCA9PiBldmVudC5oaWRlKCkpO1xyXG4gICAgICAgIHRoaXMuYXhpcy5oaWRlKCk7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVBeGlzKCkge1xyXG4gICAgICAgIGNvbnN0IGVuZERhdGU6bnVtYmVyID0gbmV3IERhdGUodGhpcy5ydW50aW1lLmVuZERhdGUpLmdldFRpbWUoKTtcclxuICAgICAgICBjb25zdCBzdGFydERhdGU6bnVtYmVyID0gbmV3IERhdGUodGhpcy5ydW50aW1lLnN0YXJ0RGF0ZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVMZW5ndGggPSBlbmREYXRlIC0gc3RhcnREYXRlO1xyXG4gICAgICAgIHRoaXMuYXhpcy5kcmF3SW5mby5sZW5ndGggPSB0aGlzLnJ1bnRpbWUuYXhpc0xlbmd0aDtcclxuICAgICAgICBpZiAodGhpcy5ydW50aW1lLm1pbGVzdG9uZUJ5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXhpcy5kcmF3SW5mby5taWxlc3RvbmVzID1cclxuICAgICAgICAgICAgICAgIHRpbWVOb2RlR2V0dGVyW3RoaXMucnVudGltZS5taWxlc3RvbmVCeV0oXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoc3RhcnREYXRlKSwgbmV3IERhdGUoZW5kRGF0ZSksXHJcbiAgICAgICAgICAgICAgICApLm1hcCgoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IChlbmREYXRlIC0gZGF0ZS5nZXRUaW1lKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvIGRhdGVMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9udGhBYmJyID0gZGF0ZS50b0RhdGVTdHJpbmcoKS5zcGxpdCgnICcpWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5ydW50aW1lLm1pbGVzdG9uZUJ5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAneWVhcic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQudGV4dCA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnRleHQgPSBgJHttb250aEFiYnJ9LiAke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC50ZXh0ID0gYCR7bW9udGhBYmJyfS5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnRleHQgPSBgJHtkYXRlLmdldE1vbnRoKCkgKyAxfS4ke2RhdGUuZ2V0RGF0ZSgpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC50ZXh0ID0gYCR7ZGF0ZS5nZXRNb250aCgpICsgMX0uJHtkYXRlLmdldERhdGUoKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJ1bnRpbWUuc2NhbGVCeSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmF4aXMuZHJhd0luZm8uc2NhbGVzID1cclxuICAgICAgICAgICAgICAgIHRpbWVOb2RlR2V0dGVyW3RoaXMucnVudGltZS5zY2FsZUJ5XShcclxuICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSh0aGlzLnJ1bnRpbWUuc3RhcnREYXRlKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSh0aGlzLnJ1bnRpbWUuZW5kRGF0ZSksXHJcbiAgICAgICAgICAgICAgICApLm1hcChkYXRlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKG5ldyBEYXRlKHRoaXMucnVudGltZS5lbmREYXRlKS5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKSlcclxuICAgICAgICAgICAgICAgICAgICAvIGRhdGVMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgdGhpcy5heGlzLmFwcGx5KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjcmVhdGVFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gQXJyYXkuZnJvbSh0aGlzLmRyYXdJbmZvLmV2ZW50cylcclxuICAgICAgICAgICAgLnNvcnQoKGUxLCBlMikgPT4gbmV3IERhdGUoZTEuZGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoZTIuZGF0ZSkuZ2V0VGltZSgpKVxyXG4gICAgICAgIDtcclxuICAgICAgICBjb25zdCBkYXRlTGVuZ3RoID1cclxuICAgICAgICAgICAgbmV3IERhdGUodGhpcy5ydW50aW1lLmVuZERhdGUpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAtIG5ldyBEYXRlKHRoaXMucnVudGltZS5zdGFydERhdGUpLmdldFRpbWUoKVxyXG4gICAgICAgIDtcclxuICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgdGhpcy5ldmVudENvbnN0cnVjdG9yKHRoaXMpO1xyXG4gICAgICAgICAgICBldmVudC5kcmF3SW5mby50YXJnZXQgPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmF4aXMuYm9keS5kcmF3SW5mby5ib3gueCArIHRoaXMuYXhpcy5ib2R5LmRyYXdJbmZvLmJveC53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAvLyByZWNvbXB1dGVkIGluIFBvc2l0aW9uQ291bnRlclxyXG4gICAgICAgICAgICAgICAgeTpcclxuICAgICAgICAgICAgICAgICAgICAobmV3IERhdGUodGhpcy5ydW50aW1lLmVuZERhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGRhdGEuZGF0ZSkuZ2V0VGltZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8gZGF0ZUxlbmd0aFxyXG4gICAgICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBldmVudC5kcmF3SW5mby5ib2R5V2lkdGggPSB0aGlzLmdyaWQuZXZlbnRXaWR0aDtcclxuICAgICAgICAgICAgZXZlbnQuZHJhd0luZm8uZGF0ZSA9IGRhdGEuZGF0ZTtcclxuICAgICAgICAgICAgZXZlbnQuZHJhd0luZm8udGl0bGUgPSBkYXRhLnRpdGxlO1xyXG4gICAgICAgICAgICBldmVudC5kcmF3SW5mby5jb250ZW50VGV4dCA9IGRhdGEudGV4dDtcclxuICAgICAgICAgICAgZXZlbnQuZHJhd0luZm8uZm9sZGVkID0gQm9vbGVhbihkYXRhLmZvbGRlZCk7XHJcbiAgICAgICAgICAgIGV2ZW50LmRyYXdJbmZvLmZvbGRlZFRleHQgPSBkYXRhLmZvbGRlZFRleHQ7XHJcbiAgICAgICAgICAgIGV2ZW50LmRyYXdJbmZvLmF4aXNUZXh0ID0gZGF0YS5lbmRUZXh0O1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lbmREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmREYXRlIDpEYXRlID0gbmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5lbmREYXRlID09PSAnbm93J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucnVudGltZS5lbmREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YS5lbmREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIC8vIHJlY29tcHV0ZWQgaW4gUG9zaXRpb25Db3VudGVyXHJcbiAgICAgICAgICAgICAgICBldmVudC5kcmF3SW5mby5heGlzTGVuZ3RoID1cclxuICAgICAgICAgICAgICAgICAgICAoZW5kRGF0ZS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShkYXRhLmRhdGUpLmdldFRpbWUoKSlcclxuICAgICAgICAgICAgICAgICAgICAvIGRhdGVMZW5ndGhcclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCBldmVudC5hcHBseSgpO1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpcyhjb21wOkNvbXBvbmVudCkgOmNvbXAgaXMgVGltZWxpbmUge1xyXG4gICAgICAgIHJldHVybiBjb21wLm5hbWUgPT09IFNOLlRpbWVsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0R3JpZDpHcmlkQ29uZmlnID0ge1xyXG4gICAgICAgIGV2ZW50T2Zmc2V0OiB7IHg6MjAsIHk6MCB9LFxyXG4gICAgICAgIG1pbkV2ZW50QXhpc09mZnNldDogMjUsXHJcbiAgICAgICAgbWFya1dpZHRoOiAxNSxcclxuICAgICAgICBzY2FsZUhlaWdodDogNSxcclxuICAgICAgICBheGlzV2lkdGg6IDEyLFxyXG4gICAgICAgIGF4aXNTdGFydDoge1xyXG4gICAgICAgICAgICB4OiA0MDAsXHJcbiAgICAgICAgICAgIHk6IDEwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXZlbnRXaWR0aDogMzUwLFxyXG4gICAgICAgIGNhbnZhc1dpZHRoOiA3MDAsXHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIGRyYXdGcm9tKGlucHV0OmFueSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGE6YW55ICA9IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGlucHV0KS5kYXRhIDogaW5wdXQuZGF0YTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgY29uc3QgYXhpczpBeGlzID0gbmV3IHRoaXMuYXhpc0NvbnN0cnVjdG9yKHRoaXMpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBjb25zdCBldmVudDpFdmVudCA9IG5ldyB0aGlzLmV2ZW50Q29uc3RydWN0b3IodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gZGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBkYXRhLmhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgYWxsQ29tcG9uZW50czpDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgYm9keURyYXdJbmZvLCBzY2FsZXNEcmF3SW5mbywgbWlsZXN0b25lc0RyYXdJbmZvIH0gPSBkYXRhLmF4aXM7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgYWxsQ29tcG9uZW50cy5wdXNoKG5ldyBheGlzLmJvZHlDb25zdHJ1Y3Rvcih0aGlzKS5pbXBvcnREcmF3SW5mbyhib2R5RHJhd0luZm8pKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlc0FuZE1pbGVzdG9uZXM6KEF4aXNTY2FsZSB8IEF4aXNNaWxlc3RvbmUpW10gPSBbXTtcclxuICAgICAgICAgICAgc2NhbGVzRHJhd0luZm8uZm9yRWFjaCgoc2NhbGVEcmF3SW5mbzphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHNjYWxlc0FuZE1pbGVzdG9uZXMucHVzaChuZXcgYXhpcy5zY2FsZUNvbnN0cnVjdG9yKHRoaXMpLmltcG9ydERyYXdJbmZvKHNjYWxlRHJhd0luZm8pKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBtaWxlc3RvbmVzRHJhd0luZm8uZm9yRWFjaCgobWlsZXN0b25lRHJhd0luZm86YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZXNBbmRNaWxlc3RvbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBheGlzLm1pbGVzdG9uZUNvbnN0cnVjdG9yKHRoaXMpLmltcG9ydERyYXdJbmZvKG1pbGVzdG9uZURyYXdJbmZvKSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2NhbGVzQW5kTWlsZXN0b25lcy5zb3J0KFxyXG4gICAgICAgICAgICAgICAgKGNvbXAxLCBjb21wMikgPT4gY29tcDEuZHJhd0luZm8uYWxpZ25ZIC0gY29tcDIuZHJhd0luZm8uYWxpZ25ZLFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgYWxsQ29tcG9uZW50cy5wdXNoKC4uLnNjYWxlc0FuZE1pbGVzdG9uZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXZlbnRzOmFueVtdID0gQXJyYXkuZnJvbShkYXRhLmV2ZW50cylcclxuICAgICAgICAgICAgLnNvcnQoKGUxOmFueSwgZTI6YW55KSA9PiBlMS5kcmF3SW5mby50YXJnZXQueSAtIGUyLmRyYXdJbmZvLnRhcmdldC55KVxyXG4gICAgICAgIDtcclxuICAgICAgICBmb3IgKGNvbnN0IHsgYm9keURyYXdJbmZvLCBtYXJrRHJhd0luZm8sIGF4aXNEcmF3SW5mbyB9IG9mIGV2ZW50cykge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGFsbENvbXBvbmVudHMucHVzaChuZXcgZXZlbnQubWFya0NvbnN0cnVjdG9yKHRoaXMpLmltcG9ydERyYXdJbmZvKG1hcmtEcmF3SW5mbykpO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGFsbENvbXBvbmVudHMucHVzaChuZXcgZXZlbnQuYm9keUNvbnN0cnVjdG9yKHRoaXMpLmltcG9ydERyYXdJbmZvKGJvZHlEcmF3SW5mbykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGF4aXNEcmF3SW5mbyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgYWxsQ29tcG9uZW50cy5wdXNoKG5ldyBldmVudC5heGlzQ29uc3RydWN0b3IodGhpcykuaW1wb3J0RHJhd0luZm8oYXhpc0RyYXdJbmZvKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRPRE86IE1heWJlIHRoZXJlIGlzIHNsb3cgd2hlbiB3YW50IG5vdCBwbGF5IGFuaW1hdGlvbj9cclxuICAgICAgICBmb3IgKGNvbnN0IGNvbXAgb2YgYWxsQ29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmV4dC5icmVha3BvaW50LmJsb2NrKEJyZWFrcG9pbnQuRHJhd0Zyb20pO1xyXG4gICAgICAgICAgICBjb21wLmRyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgZXhwb3J0KCkge1xyXG4gICAgICAgIGNvbnN0IHRpbWVsaW5lID0gdGhpcy5leHQuY29tcG9uZW50c1tTTi5UaW1lbGluZV1bMF07XHJcbiAgICAgICAgcmV0dXJuIGRlZXBGcmVlemUoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHRoZW1lOiB0aW1lbGluZS50aGVtZSxcclxuICAgICAgICAgICAgdmVyc2lvbjogU05fVkVSU0lPTixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRpbWVsaW5lLmNhbnZhcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogdGltZWxpbmUuY2FudmFzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIHRpbWVsaW5lOiB0aW1lbGluZS5kcmF3SW5mbyxcclxuICAgICAgICAgICAgICAgIHJ1bnRpbWU6IHRpbWVsaW5lLnJ1bnRpbWUsXHJcbiAgICAgICAgICAgICAgICBldmVudHM6IHRpbWVsaW5lLmV2ZW50cy5tYXAoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0luZm86IGV2ZW50LmRyYXdJbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5RHJhd0luZm86IGV2ZW50LmJvZHkuZHJhd0luZm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtEcmF3SW5mbzogZXZlbnQubWFyay5kcmF3SW5mbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpc0RyYXdJbmZvOiBldmVudC5heGlzID8gZXZlbnQuYXhpcy5kcmF3SW5mbyA6bnVsbCxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhd0luZm86IHRpbWVsaW5lLmF4aXMuZHJhd0luZm8sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keURyYXdJbmZvOiB0aW1lbGluZS5heGlzLmJvZHkuZHJhd0luZm8sXHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVzRHJhd0luZm86IHRpbWVsaW5lLmF4aXMuc2NhbGVzLm1hcChzY2FsZSA9PiBzY2FsZS5kcmF3SW5mbyksXHJcbiAgICAgICAgICAgICAgICAgICAgbWlsZXN0b25lc0RyYXdJbmZvOiB0aW1lbGluZS5heGlzLm1pbGVzdG9uZXMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaWxlc3RvbmUgPT4gbWlsZXN0b25lLmRyYXdJbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50RHJhd0luZm8sIENvbXBvbmVudENvbnN0cnVjdG9ySW5mbyB9IGZyb20gJ0BlbmdpbmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBFeHRlbnNpb25NYW5hZ2VyIH0gZnJvbSAnQC9lbmdpbmUvZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IFNOIH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBwYXJzZUJveCwgbWVyZ2VCb3gsIGNyZWF0ZUxvZ0Z1bmN0aW9uIH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZnVuY3Rpb25zJztcclxuXHJcbmVudW0gTVVTVF9DQUxMX0FORF9SRVRVUk5fU1VQRVJfTUVUSE9EIHtcclxuICAgIFNVUEVSX0FQUExZLFxyXG4gICAgU1VQRVJfRFJBVyxcclxuICAgIFNVUEVSX0RFU1RST1ksXHJcbiAgICBTVVBFUl9DUkVBVEVfRUxFTUVOVCxcclxuICAgIFNVUEVSX0hJREUsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHsgZXh0LCBjYW52YXMsIGNvbnRhaW5lciB9OkNvbXBvbmVudENvbnN0cnVjdG9ySW5mbykge1xyXG4gICAgICAgIHRoaXMuZXh0ID0gZXh0O1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcyBhcyBhbnk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXIgYXMgYW55O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlbWUgbmFtZS5cclxuICAgICAqIEJlIGZpbGxlZCB3aGVuIHRoZSB0aGVtZSdzIGNsYXNzIGNvbnN0cnVjdGVkLlxyXG4gICAgICogKi9cclxuICAgIGFic3RyYWN0IHRoZW1lIDpzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIENvbXBvbmVudCBuYW1lLlxyXG4gICAgICogQmUgZmlsbGVkIHdoZW4gdGhlIGVuZ2luZSdzIGNsYXNzIGNvbnN0cnVjdGVkLlxyXG4gICAgICogKi9cclxuICAgIGFic3RyYWN0IG5hbWUgOlNOO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGF0YSB3aGljaCBiZSB1c2VkIGluIEV4dGVuc2lvbnMuXHJcbiAgICAgKiBAcHJvcGVydHkgaWQgLSB1c2luZyBpbiBHZW5lcmF0b3JJZFxyXG4gICAgICogQHByb3BlcnR5IGJveEVsZW1lbnQgLSB1c2luZyBpbiBCb3hFbGVtZW50R2VuZXJhdG9yXHJcbiAgICAgKiBAcHJvcGVydHkgcmVhbExlbmd0aCAtIHVzaW5nIGluIFBvc2l0aW9uQ291bnRlciwgZXhpc3RpbmcgaW4gQXhpcyBvbmx5LlxyXG4gICAgICogQHByb3BlcnR5IG5lZWRlZCAtIHVzaW5nIGluIENvbmZsaWN0Rml4ZXIsIGV4aXN0aW5nIGluIEV2ZW50Qm9keSBvbmx5LlxyXG4gICAgICogQHByb3BlcnR5IHNwYWNlIC0gdXNpbmcgaW4gQ29uZmxpY3RGaXhlciwgZXhpc3RpbmcgaW4gRXZlbnRCb2R5IG9ubHkuXHJcbiAgICAgKiAqL1xyXG4gICAgZXh0cmFEYXRhIDp7XHJcbiAgICAgICAgaWQgPzpzdHJpbmcsXHJcbiAgICAgICAgYm94RWxlbWVudCA/OkhUTUxFbGVtZW50LFxyXG4gICAgICAgIHJlYWxMZW5ndGggPzpudW1iZXIsXHJcbiAgICAgICAgbmVlZGVkPzoge3RvcDpudW1iZXIsIGJvdHRvbTpudW1iZXJ9LFxyXG4gICAgICAgIHNwYWNlPzoge3RvcDpudW1iZXIsIGJvdHRvbTpudW1iZXJ9LFxyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueSxcclxuICAgIH0gPSB7fTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNhbnZhcyB3aGVyZSBjb21wb25lbnQgZHJhdyBvbi5cclxuICAgICAqIE11c3QgYmUgZmlsbGVkIGJlZm9yZSBhcHBseSgpIGNhbGxlZC5cclxuICAgICAqICovXHJcbiAgICBjYW52YXMgOkhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29udGFpbmVyIHdoaWNoIGNvbnRhaW4gYWxsIG9mIGNvbXBvbmVudCdzIGVsZW1lbnQuXHJcbiAgICAgKiBNdXN0IGJlIGZpbGxlZCBiZWZvcmUgYXBwbHkoKSBjYWxsZWQuXHJcbiAgICAgKiAqL1xyXG4gICAgY29udGFpbmVyIDpIVE1MRWxlbWVudDtcclxuICAgIC8qKlxyXG4gICAgICogTWFuYWdlIGFsbCBleHRlbnNpb25zICYgSGVscCBjb21wb25lbnQgY29tbXVuaWNhdGUgZm9yIGVhY2ggb3RoZXIuXHJcbiAgICAgKiBCZSBmaWxsZWQgd2hlbiBjb25zdHJ1Y3QuXHJcbiAgICAgKiAqL1xyXG4gICAgZXh0OiBFeHRlbnNpb25NYW5hZ2VyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbGwgaW5mbyBhYm91dCBkcmF3LiBFeGNlcHQgZHJhd0luZm8sIG5vIG1vcmUgc3RhdGVzIGJlIGRlcGVuZGVkIGFib3V0IGRyYXcuXHJcbiAgICAgKiBUaGUgc2FtZSBkcmF3SW5mbyBtdXN0IGhhcyBzYW1lIGRyYXduIG9uIGNhbnZhcyBhbmQgY29udGFpbmVyLlxyXG4gICAgICogVGhlIHRoaXMuZ2lyZCBzaG91bGQgYmUgbWVyZ2luZyBpbiB0aGVyZSBpbiB0aGlzLmFwcGx5IGJlIGNhbGxlZC5cclxuICAgICAqIE11c3QgY2FuIGJlIEpTT04uc3RyaW5naWZ5LlxyXG4gICAgICogKi9cclxuICAgIGFic3RyYWN0IHJlYWRvbmx5IGRyYXdJbmZvOiBDb21wb25lbnREcmF3SW5mbztcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wdGlvbmFsLiBCZSBmaWxsZWQgaW4gdGhpcy5jcmVhdGVFbGVtZW50LlxyXG4gICAgICogVGhlIEhUTUwgZWxlbWVudCB3aGljaCBiZSBuZWVkZWQgYnkgY29tcG9uZW50IGRyYXcuXHJcbiAgICAgKiAqL1xyXG4gICAgZWxlbWVudCA/OkhUTUxFbGVtZW50O1xyXG4gICAgLyoqXHJcbiAgICAgKiBPcHRpb25hbC4gRGVwZW5kIG9uIHRoZSBkcmF3IHRoaXMgY29tcG9uZW50IGlzIG5lZWQgSFRNTCBlbGVtZW50IG9yIG5vdC5cclxuICAgICAqIENyZWF0ZSBhbiBIVE1MIGVsZW1lbnQgYmFzZSBvbiB0aGlzLmRyYXdJbmZvIHRvIGZpbGwgdGhpcy5lbGVtZW50XHJcbiAgICAgKiBhbmQgYXBwZW5kIHRvIHRoaXMuY29udGFpbmVyLlxyXG4gICAgICogQmUgY2FsbGVkIGluIHRoaXMuYXBwbHkgYW5kIHRoaXMuZHJhdy5cclxuICAgICAqICovXHJcbiAgICBjcmVhdGVFbGVtZW50KCkgOk1VU1RfQ0FMTF9BTkRfUkVUVVJOX1NVUEVSX01FVEhPRCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3J0LW5pZ2h0JywgdGhpcy50aGVtZSwgdGhpcy5uYW1lKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gTVVTVF9DQUxMX0FORF9SRVRVUk5fU1VQRVJfTUVUSE9ELlNVUEVSX0NSRUFURV9FTEVNRU5UO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWVhbnMgdGhhdCB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZC5cclxuICAgICAqIENhbGwgYW55IG1ldGhvZCBvbiBjb21wb25lbnQgd2hlbiBpdCBoYXMgZGVzdHJveWVkIHdpbGwgZ290IGFuIGVycm9yLlxyXG4gICAgICogKi9cclxuICAgIGRlc3Ryb3llZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95IHNlbGYuXHJcbiAgICAgKiBJdCBzaG91bGQgcmVtb3ZlIGFsbCBlbGVtZW50IGZyb20gZG9tIGFuZCBjbGVhciBhbGwgdHJhY2UgaW4gY2FudmFzIGlmIHRoYXQncyBtYWRlIGJ5IHNlbGYuXHJcbiAgICAgKiAqL1xyXG4gICAgZGVzdHJveSgpIDpNVVNUX0NBTExfQU5EX1JFVFVSTl9TVVBFUl9NRVRIT0Qge1xyXG4gICAgICAgIHRoaXMuY2hlY2tEZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmV4dC5vbkRlc3Ryb3kodGhpcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBNVVNUX0NBTExfQU5EX1JFVFVSTl9TVVBFUl9NRVRIT0QuU1VQRVJfREVTVFJPWTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IHRoaXMuZHJhd0luZm8gaW4gY29tcG9uZW50LlxyXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkJ3QgY2hhbmdlIGFueSBwcm9wZXJ0eSBpbiB0aGlzLmRyYXdJbmZvIGV4Y2VwdCB0aGlzLmRyYXdJbmZvLmJveC5cclxuICAgICAqIEBhc3luY1xyXG4gICAgICogKi9cclxuICAgIGFzeW5jIGFwcGx5KC4uLmFyZ3MgOmFueVtdKSA6UHJvbWlzZTxNVVNUX0NBTExfQU5EX1JFVFVSTl9TVVBFUl9NRVRIT0Q+IHtcclxuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3SW5mby5ib3ggPSBtZXJnZUJveChcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0luZm8uYm94LFxyXG4gICAgICAgICAgICAgICAgcGFyc2VCb3godGhpcy5lbGVtZW50KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgdGhpcy5leHQub25BcHBseSh0aGlzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1VU1RfQ0FMTF9BTkRfUkVUVVJOX1NVUEVSX01FVEhPRC5TVVBFUl9BUFBMWTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRHJhdyBzZWxmIGJhc2Ugb24gdGhpcy5kcmF3SW5mby5cclxuICAgICAqIEl0IHNob3VsZCBjYW4gYmUgY2FsbCBtdWx0aXBsZSB0aW1lcy5cclxuICAgICAqIENhbGwgdGhpcy5hcHBseSBiZWZvcmUgdGhpcy5kcmF3LlxyXG4gICAgICogKi9cclxuICAgIGRyYXcoKSA6TVVTVF9DQUxMX0FORF9SRVRVUk5fU1VQRVJfTUVUSE9EIHtcclxuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLmV4dC5vbkRyYXcodGhpcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBNVVNUX0NBTExfQU5EX1JFVFVSTl9TVVBFUl9NRVRIT0QuU1VQRVJfRFJBVztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSGlkZSBhbGwgb2YgdHJhY2UgY3JlYXRlZCBieSBzZWxmLlxyXG4gICAgICogSGlkZGVuIGlzIG5vdCBkZXN0cm95ZWQuIEVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHN0aWxsIGF2YWlsYWJsZSB3aGVuIHRoaXMuaGlkZSBoYXZlIGNhbGwuXHJcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIHRyeSBzZXQgXCJ2aXNpYmlsaXR5OiAnaGlkZGVuJ1wiIGZvciB0aGlzLmVsZW1lbnQgcmF0aGVyIHRoYW4gcmVtb3ZlIGl0LlxyXG4gICAgICogKi9cclxuICAgIGhpZGUoKSA6TVVTVF9DQUxMX0FORF9SRVRVUk5fU1VQRVJfTUVUSE9EIHtcclxuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB0aGlzLmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykhLmNsZWFyUmVjdChcclxuICAgICAgICAgICAgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmV4dC5vbkhpZGUodGhpcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBNVVNUX0NBTExfQU5EX1JFVFVSTl9TVVBFUl9NRVRIT0QuU1VQRVJfSElERTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBhIHdob2xlIGRyYXdJbmZvIGludG8gY29tcG9uZW50LlxyXG4gICAgICogVGhlIGNvbXBvbmVudCBzdGlsbCBuZWVkIHRoaXMuYXBwbHkgY2FsbGVkIGJlZm9yZSBkcmF3IHdoZW4gdGhpcy5pbXBvcnREcmF3SW5mbyBiZWVuIGNhbGxlZC5cclxuICAgICAqICovXHJcbiAgICBpbXBvcnREcmF3SW5mbyhkcmF3SW5mbzpDb21wb25lbnREcmF3SW5mbykge1xyXG4gICAgICAgICg8YW55PnRoaXMpLmRyYXdJbmZvID0gZHJhd0luZm87XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcmludCBsb2cgaWYgdGhlIERFQlVHIGlzIHRydWUuXHJcbiAgICAgKiBAZXhhbXBsZSB0aGlzLmxgSGVsbG8gd29ybGRgXHJcbiAgICAgKiAqL1xyXG4gICAgcHJpdmF0ZSBnZXQgbCgpIHtcclxuICAgICAgICByZXR1cm4gY3JlYXRlTG9nRnVuY3Rpb24oYCR7dGhpcy50aGVtZX0vJHt0aGlzLm5hbWV9YCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFZlcmlmeSBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgb3Igbm90LlxyXG4gICAgICogVGhyb3cgYW4gZXJyb3IgaWYgdGhpcy5kZXN0cm95ZWQgaXMgdHJ1ZS5cclxuICAgICAqICovXHJcbiAgICBwcml2YXRlIGNoZWNrRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgYCR7dGhpcy50aGVtZX0vJHt0aGlzLm5hbWV9IGhhcyBiZWFuIGRlc3Ryb3llZCxgXHJcbiAgICAgICAgICAgICAgICArICdob3dldmVyLCB5b3Ugc3RpbGwgY2FsbGVkIGl0XFwncyBtZXRob2QuJyxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0ZUJ5IH0gZnJvbSAnQGVuZ2luZS90eXBlcyc7XHJcbmltcG9ydCBwYWNrYWdlSnNvbiA9IHJlcXVpcmUoJ0Byb290L3BhY2thZ2UuanNvbicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFQlVHOkJvb2xlYW4gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcclxuXHJcbmV4cG9ydCBlbnVtIFNOe1xyXG4gICAgVGltZWxpbmUgPSAndGltZV9saW5lJyxcclxuICAgIEF4aXMgPSAnYXhpcycsXHJcbiAgICBBeGlzQm9keSA9ICdheGlzX2JvZHknLFxyXG4gICAgQXhpc1NjYWxlID0gJ2F4aXNfc2NhbGUnLFxyXG4gICAgQXhpc01pbGVzdG9uZSA9ICdheGlzX21pbGVzdG9uZScsXHJcbiAgICBFdmVudCA9ICdldmVudCcsXHJcbiAgICBFdmVudEJvZHkgPSAnZXZlbnRfYm9keScsXHJcbiAgICBFdmVudE1hcmsgPSAnZXZlbnRfbWFyaycsXHJcbiAgICBFdmVudEF4aXMgPSAnZXZlbnRfYXhpcycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEQVRFX0NPVU5UX0VYVFJBID0ge1xyXG4gICAgW0RhdGVCeS5EYXldOiAgICAgICAxMDAwICogNjAgKiA2MCAqIDI0IC8gMixcclxuICAgIFtEYXRlQnkuV2Vla106ICAgICAgMTAwMCAqIDYwICogNjAgKiAyNCAqIDcgLyAyLFxyXG4gICAgW0RhdGVCeS5Nb250aF06ICAgICAxMDAwICogNjAgKiA2MCAqIDI0ICogMzAgLyAyLFxyXG4gICAgW0RhdGVCeS5RdWFydGVyXTogICAxMDAwICogNjAgKiA2MCAqIDI0ICogMzAgKiAzIC8gMixcclxuICAgIFtEYXRlQnkuWWVhcl06ICAgICAgMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwICogMTIgLyAyLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdBTEtfT04gPSB7XHJcbiAgICBbU04uRXZlbnRBeGlzXToge1xyXG4gICAgICAgIG9mZnNldE9uZVN0ZXA6IDE1LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTTl9WRVJTSU9OOnN0cmluZyA9ICBwYWNrYWdlSnNvbi52ZXJzaW9uO1xyXG4iLCJpbXBvcnQgeyBCb3gsIERhdGVCeSwgTGluZSwgQ29uZmxpY3RGaXhSZXN1bHQgfSBmcm9tICdAZW5naW5lL3R5cGVzJztcclxuaW1wb3J0IHsgREVCVUcgfSBmcm9tICdAZW5naW5lL2NvbW1vbi9kZWZpbml0aW9ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNCb3gob2JqOmFueSk6IG9iaiBpcyBCb3gge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXHJcbiAgICAgICAgJiYgdHlwZW9mIG9iai54ID09PSAnbnVtYmVyJ1xyXG4gICAgICAgICYmIHR5cGVvZiBvYmoueSA9PT0gJ251bWJlcidcclxuICAgICAgICAmJiB0eXBlb2Ygb2JqLndpZHRoID09PSAnbnVtYmVyJ1xyXG4gICAgICAgICYmIHR5cGVvZiBvYmouaGVpZ2h0ID09PSAnbnVtYmVyJ1xyXG4gICAgO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBib3gyTGluZXMoYm94OkJveCk6TGluZVtdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdGFydFg6IGJveC54LFxyXG4gICAgICAgICAgICBzdGFydFk6IGJveC55LFxyXG4gICAgICAgICAgICBlbmRYOiBib3gueCArIGJveC53aWR0aCxcclxuICAgICAgICAgICAgZW5kWTogYm94LnksXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzdGFydFg6IGJveC54ICsgYm94LndpZHRoLFxyXG4gICAgICAgICAgICBzdGFydFk6IGJveC55LFxyXG4gICAgICAgICAgICBlbmRYOiBib3gueCArIGJveC53aWR0aCxcclxuICAgICAgICAgICAgZW5kWTogYm94LnkgKyBib3guaGVpZ2h0LFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3RhcnRYOiBib3gueCArIGJveC53aWR0aCxcclxuICAgICAgICAgICAgc3RhcnRZOiBib3gueSArIGJveC5oZWlnaHQsXHJcbiAgICAgICAgICAgIGVuZFg6IGJveC54LFxyXG4gICAgICAgICAgICBlbmRZOiBib3gueSArIGJveC5oZWlnaHQsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzdGFydFg6IGJveC54LFxyXG4gICAgICAgICAgICBzdGFydFk6IGJveC55ICsgYm94LmhlaWdodCxcclxuICAgICAgICAgICAgZW5kWDogYm94LngsXHJcbiAgICAgICAgICAgIGVuZFk6IGJveC55LFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJveChlbHQ6SFRNTEVsZW1lbnQpOkJveCB7XHJcbiAgICBjb25zdCBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGVsdCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IHBhcnNlRmxvYXQoc3R5bGVzLmxlZnQhKSxcclxuICAgICAgICB5OiBwYXJzZUZsb2F0KHN0eWxlcy50b3AhKSxcclxuICAgICAgICB3aWR0aDogcGFyc2VGbG9hdChzdHlsZXMud2lkdGghKSxcclxuICAgICAgICBoZWlnaHQ6IHBhcnNlRmxvYXQoc3R5bGVzLmhlaWdodCEpLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VCb3goLi4uYXJnczpCb3hbXSk6Qm94IHtcclxuICAgIGNvbnN0IGxlZnRUb3AgPSB7XHJcbiAgICAgICAgeDogSW5maW5pdHksXHJcbiAgICAgICAgeTogSW5maW5pdHksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmlnaHRCb3R0b20gPSB7XHJcbiAgICAgICAgeDogLUluZmluaXR5LFxyXG4gICAgICAgIHk6IC1JbmZpbml0eSxcclxuICAgIH07XHJcbiAgICBmb3IgKGNvbnN0IGJveCBvZiBhcmdzKSB7XHJcbiAgICAgICAgaWYgKGJveC54IDwgbGVmdFRvcC54KSBsZWZ0VG9wLnggPSBib3gueDtcclxuICAgICAgICBpZiAoYm94LnkgPCBsZWZ0VG9wLnkpIGxlZnRUb3AueSA9IGJveC55O1xyXG4gICAgICAgIGlmIChib3gueCArIGJveC53aWR0aCA+IHJpZ2h0Qm90dG9tLngpIHJpZ2h0Qm90dG9tLnggPSBib3gueCArIGJveC53aWR0aDtcclxuICAgICAgICBpZiAoYm94LnkgKyBib3guaGVpZ2h0ID4gcmlnaHRCb3R0b20ueSkgcmlnaHRCb3R0b20ueSA9IGJveC55ICsgYm94LmhlaWdodDtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogbGVmdFRvcC54LFxyXG4gICAgICAgIHk6IGxlZnRUb3AueSxcclxuICAgICAgICB3aWR0aDogcmlnaHRCb3R0b20ueCAtIGxlZnRUb3AueCxcclxuICAgICAgICBoZWlnaHQ6IHJpZ2h0Qm90dG9tLnkgLSBsZWZ0VG9wLnksXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaHJpbmtCb3goYm94OkJveCwgZGlzdGFuY2U9IDEpIDpCb3gge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBib3gueCArIGRpc3RhbmNlLFxyXG4gICAgICAgIHk6IGJveC55ICsgZGlzdGFuY2UsXHJcbiAgICAgICAgd2lkdGg6IGJveC53aWR0aCAtIGRpc3RhbmNlICogMixcclxuICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHQgLSBkaXN0YW5jZSAqIDIsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGltZU5vZGVHZXR0ZXI6IHtcclxuICAgIFtrZXkgaW4gRGF0ZUJ5XTogKHN0YXJ0OiBEYXRlICwgZW5kOiBEYXRlKSA9PiBEYXRlW11cclxufSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGdldE5vZGVzID0gZnVuY3Rpb24gKHN0YXJ0OiBEYXRlICwgZW5kOiBEYXRlICwgc3RlcDogKGRhdGU6IERhdGUpID0+IHZvaWQpOiBEYXRlW10ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0Tm9kZTogRGF0ZSA9IGZ1bmN0aW9uIChvcmlnaW4gOkRhdGUpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBEYXRlKG9yaWdpbik7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0RnVsbFllYXIob3JpZ2luLmdldEZ1bGxZZWFyKCkgLSAxICwgMCAsIDEpO1xyXG4gICAgICAgICAgICBub2RlLnNldEhvdXJzKDAgLCAwICwgMCAsIDApO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9KHN0YXJ0KTtcclxuICAgICAgICBjb25zdCBlbmROb2RlOiBEYXRlID0gZnVuY3Rpb24gKG9yaWdpbiA6RGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IERhdGUob3JpZ2luKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRGdWxsWWVhcihvcmlnaW4uZ2V0RnVsbFllYXIoKSArIDEgLCAwICwgMSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0SG91cnMoMCAsIDAgLCAwICwgMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH0oZW5kKTtcclxuICAgICAgICBjb25zdCBub2RlczogRGF0ZVtdID0gW107XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wTm9kZSA9IG5ldyBEYXRlKHN0YXJ0Tm9kZSk7XHJcbiAgICAgICAgICAgIHdoaWxlICh0ZW1wTm9kZS5nZXRGdWxsWWVhcigpIDw9IGVuZE5vZGUuZ2V0RnVsbFllYXIoKSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaChuZXcgRGF0ZSh0ZW1wTm9kZSkpO1xyXG4gICAgICAgICAgICAgICAgc3RlcCh0ZW1wTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGVzLmZpbHRlcihcclxuICAgICAgICAgICAgZGF0ZSA9PiBkYXRlLmdldFRpbWUoKSA8IGVuZC5nZXRUaW1lKCkgJiYgZGF0ZS5nZXRUaW1lKCkgPiBzdGFydC5nZXRUaW1lKCksXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHllYXIoc3RhcnQ6IERhdGUgLCBlbmQ6IERhdGUpOiBEYXRlW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0Tm9kZXMoXHJcbiAgICAgICAgICAgICAgICBzdGFydCAsIGVuZCAsXHJcbiAgICAgICAgICAgICAgICBkYXRlID0+IGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpICsgMSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSAsXHJcbiAgICAgICAgcXVhcnRlcihzdGFydDogRGF0ZSAsIGVuZDogRGF0ZSk6IERhdGVbXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXROb2RlcyhcclxuICAgICAgICAgICAgICAgIHN0YXJ0ICwgZW5kICxcclxuICAgICAgICAgICAgICAgIChkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSArIDMgPj0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aCgwICwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyAzICwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9ICxcclxuICAgICAgICBtb250aChzdGFydDogRGF0ZSAsIGVuZDogRGF0ZSk6IERhdGVbXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXROb2RlcyhcclxuICAgICAgICAgICAgICAgIHN0YXJ0ICwgZW5kICxcclxuICAgICAgICAgICAgICAgIChkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSA9PT0gMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aCgwICwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyAxICwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9ICxcclxuICAgICAgICB3ZWVrKHN0YXJ0OiBEYXRlICwgZW5kOiBEYXRlKTogRGF0ZVtdIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldE5vZGVzKFxyXG4gICAgICAgICAgICAgICAgc3RhcnQgLCBlbmQgLFxyXG4gICAgICAgICAgICAgICAgKGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIDEwMDAgKiA2MCAqIDYwICogMjQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH13aGlsZSAoZGF0ZS5nZXREYXkoKSAhPT0gMSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gLFxyXG4gICAgICAgIGRheShzdGFydDogRGF0ZSAsIGVuZDogRGF0ZSk6IERhdGVbXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXROb2RlcyhcclxuICAgICAgICAgICAgICAgIHN0YXJ0ICwgZW5kICxcclxuICAgICAgICAgICAgICAgIGRhdGUgPT4gZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgMTAwMCAqIDYwICogNjAgKiAyNCkgLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gLFxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZXJzZWN0aW5nKGxpbmUxOiBMaW5lLCBsaW5lMjogTGluZSk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHsgc3RhcnRYOiB4MSwgc3RhcnRZOiB5MSwgZW5kWDogeDIsIGVuZFk6IHkyIH0gPSBsaW5lMTtcclxuICAgIGxldCB7IHN0YXJ0WDogeDMsIHN0YXJ0WTogeTMsIGVuZFg6IHg0LCBlbmRZOiB5NCB9ID0gbGluZTI7XHJcblxyXG4gICAgaWYgKFt4MSwgeDIsIHgzLCB4NCwgeTEsIHkyLCB5MywgeTRdLnNvbWUoaXNOYU4pKSB7XHJcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdVbmV4cGVjdGVkIE5hTicpO1xyXG4gICAgfVxyXG4gICAgW3gxLCB4MiwgeDMsIHg0LCB5MSwgeTIsIHkzLCB5NF0gPSBbeDEsIHgyLCB4MywgeDQsIHkxLCB5MiwgeTMsIHk0XS5tYXAoTWF0aC5yb3VuZCk7XHJcblxyXG4gICAgLy8gU2FtZSBzbG9wZVxyXG4gICAgY29uc3QgW3Nsb3BlMSwgc2xvcGUyXSA9IFtcclxuICAgICAgICBNYXRoLmFicyh4MSAtIHgyKSAvIE1hdGguYWJzKHkxIC0geTIpLFxyXG4gICAgICAgIE1hdGguYWJzKHgzIC0geDQpIC8gTWF0aC5hYnMoeTMgLSB5NCksXHJcbiAgICBdO1xyXG4gICAgaWYgKHNsb3BlMSA9PT0gc2xvcGUyKSB7XHJcbiAgICAgICAgY29uc3QgW2JpeFgsIHNtYWxsWF0gPSBbeDEsIHgyXS5zb3J0KChuMSwgbjIpID0+IG4yIC0gbjEpO1xyXG4gICAgICAgIGNvbnN0IFtiaXhZLCBzbWFsbFldID0gW3kxLCB5Ml0uc29ydCgobjEsIG4yKSA9PiBuMiAtIG4xKTtcclxuICAgICAgICBpZiAoc2xvcGUxID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKHkzIDw9IGJpeFkgJiYgeTMgPj0gc21hbGxZKSB8fCAoeTQgPD0gYml4WSAmJiB5NCA+PSBzbWFsbFkpKVxyXG4gICAgICAgICAgICAgICAgJiYgeDEgPT09IHgzXHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbG9wZTEgPT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKHgzIDw9IGJpeFggJiYgeDMgPj0gc21hbGxYKSB8fCAoeDQgPD0gYml4WCAmJiB4NCA+PSBzbWFsbFgpKVxyXG4gICAgICAgICAgICAgICAgJiYgeTEgPT09IHkzXHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoKHgzIDw9IGJpeFggJiYgeDMgPj0gc21hbGxYKSAmJiAoeTMgPD0gYml4WSAmJiB5MyA+PSBzbWFsbFkpKVxyXG4gICAgICAgICAgICB8fCAoKHg0IDw9IGJpeFggJiYgeDQgPj0gc21hbGxYKSB8fCAoeTQgPD0gYml4WSAmJiB5NCA+PSBzbWFsbFkpKVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIGlmIChzbG9wZTEgPT09IEluZmluaXR5KSB5MSArPSAwLjAwMDE7XHJcbiAgICBpZiAoc2xvcGUyID09PSBJbmZpbml0eSkgeTMgKz0gMC4wMDAxO1xyXG4gICAgaWYgKHNsb3BlMSA9PT0gMCkgeDEgKz0gMC4wMDAxO1xyXG4gICAgaWYgKHNsb3BlMiA9PT0gMCkgeDMgKz0gMC4wMDAxO1xyXG5cclxuICAgIGNvbnN0IHggPSAoKHgxICogeTIgLSB5MSAqIHgyKSAqICh4MyAtIHg0KSAtICh4MSAtIHgyKSAqICh4MyAqIHk0IC0geTMgKiB4NCkpXHJcbiAgICAgICAgLyAoKHgxIC0geDIpICogKHkzIC0geTQpIC0gKHkxIC0geTIpICogKHgzIC0geDQpKVxyXG4gICAgO1xyXG4gICAgY29uc3QgeSA9ICgoeDEgKiB5MiAtIHkxICogeDIpICogKHkzIC0geTQpIC0gKHkxIC0geTIpICogKHgzICogeTQgLSB5MyAqIHg0KSlcclxuICAgICAgICAvICgoeDEgLSB4MikgKiAoeTMgLSB5NCkgLSAoeTEgLSB5MikgKiAoeDMgLSB4NCkpXHJcbiAgICA7XHJcbiAgICBpZiAoaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcbiAgICAgICAgaWYgKHgxID49IHgyKSB7XHJcbiAgICAgICAgICAgIGlmICghKHgyIDw9IHggJiYgeCA8PSB4MSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghKHgxIDw9IHggJiYgeCA8PSB4MikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeTEgPj0geTIpIHtcclxuICAgICAgICAgICAgaWYgKCEoeTIgPD0geSAmJiB5IDw9IHkxKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCEoeTEgPD0geSAmJiB5IDw9IHkyKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4MyA+PSB4NCkge1xyXG4gICAgICAgICAgICBpZiAoISh4NCA8PSB4ICYmIHggPD0geDMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoISh4MyA8PSB4ICYmIHggPD0geDQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkzID49IHk0KSB7XHJcbiAgICAgICAgICAgIGlmICghKHk0IDw9IHkgJiYgeSA8PSB5MykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghKHkzIDw9IHkgJiYgeSA8PSB5NCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc092ZXJsYXAoaXRlbTE6Qm94fExpbmUsIGl0ZW0yOkJveHxMaW5lKSA6Ym9vbGVhbiB7XHJcbiAgICBjb25zdCBsaW5lczEgPSBpc0JveChpdGVtMSkgPyBib3gyTGluZXMoaXRlbTEpIDpbaXRlbTFdO1xyXG4gICAgY29uc3QgbGluZXMyID0gaXNCb3goaXRlbTIpID8gYm94MkxpbmVzKGl0ZW0yKSA6W2l0ZW0yXTtcclxuICAgIHJldHVybiBsaW5lczEuc29tZShsaW5lMSA9PiBsaW5lczIuc29tZShsaW5lMiA9PiBpc0ludGVyc2VjdGluZyhsaW5lMSwgbGluZTIpKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnN0ZWFkIG9mIHRoZSB3aGlsZSB3aGVuIGZpeCBjb25mbGljdC5cclxuICogKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhbGtMb29wKFxyXG4gICAgZm46ICgpID0+IFByb21pc2U8Q29uZmxpY3RGaXhSZXN1bHRbXT4sXHJcbiAgICBtYXggPSAxMCxcclxuKSA6UHJvbWlzZTxDb25mbGljdEZpeFJlc3VsdD4ge1xyXG4gICAgbGV0IGFsbGV2aWF0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBtYXggOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbigpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0LmluY2x1ZGVzKENvbmZsaWN0Rml4UmVzdWx0LkFsbGV2aWF0ZWQpKSB7XHJcbiAgICAgICAgICAgIGFsbGV2aWF0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3VsdC5ldmVyeShyID0+IHIgPT09IENvbmZsaWN0Rml4UmVzdWx0Lk5vQ29uZmxpY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb25mbGljdEZpeFJlc3VsdC5Ob0NvbmZsaWN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5pbmNsdWRlcyhDb25mbGljdEZpeFJlc3VsdC5GYWlsZWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGxldmlhdGVkXHJcbiAgICAgICAgICAgICAgICA/IENvbmZsaWN0Rml4UmVzdWx0LkFsbGV2aWF0ZWRcclxuICAgICAgICAgICAgICAgIDogQ29uZmxpY3RGaXhSZXN1bHQuRmFpbGVkXHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcigndG9vIG1hbnkgbG9vcCcpO1xyXG5cclxufVxyXG4vKipcclxuICogSW5zdGVhZCBvZiB0aGUgY29uc29sZS5sb2cuXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNvbnN0IGwgPSBjcmVhdGVMb2dGdW5jdGlvbignRXZlbnRCb2R5Jyk7XHJcbiAqIGxgSGVsbG8sIHdvcmxkYDtcclxuICogPiBIZWxsbywgd29ybGRcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvZ0Z1bmN0aW9uKHByZWZpeDpzdHJpbmcpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nQXJyOlRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6YW55W10pIHtcclxuICAgICAgICBpZiAoIURFQlVHKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBbc3RyaW5nQXJyWzBdXTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBtZXNzYWdlLnB1c2godmFsdWVzW2luZGV4XSwgc3RyaW5nQXJyW2luZGV4ICsgMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICNgLCAuLi5tZXNzYWdlKTtcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybiBhIG5ldyBmcmVlemVkIG9iamVjdCBiYXNlIG9uIHNwZWNpZmllZCBvYmplY3QuXHJcbiAqIExpa2UgT2JqZWN0LmZyZWV6ZSwgYnV0IGl0J3MgZGVlcCBhbmQgd2lsbCBub3QgY2hhbmdlIG9yaWdpbiBvYmplY3QuXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwRnJlZXplPFQ+KG9yaWdpbk9iamVjdDpUKSA6UmVhZG9ubHk8VD4ge1xyXG4gICAgY29uc3QgbmV3T2JqZWN0OlQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9yaWdpbk9iamVjdCkpO1xyXG4gICAgY29uc3QgcHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobmV3T2JqZWN0KSBhcyAoa2V5b2YgVClbXTtcclxuXHJcbiAgICAvLyBGcmVlemUgaXQncyBhbGwgb2YgcHJvcGVydGllcyBiZWZvcmUgZnJlZXppbmcgaXRzZWxmLlxyXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIHByb3BOYW1lcykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmV3T2JqZWN0W25hbWVdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBuZXdPYmplY3RbbmFtZV0gPSBkZWVwRnJlZXplKG5ld09iamVjdFtuYW1lXSkgYXMgYW55O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShuZXdPYmplY3QpO1xyXG59XHJcbiIsImltcG9ydCB7IEV4dGVuc2lvbiwgRXh0ZW5zaW9uTWFuYWdlciB9IGZyb20gJy4vJztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgZWxlbWVudCBmb2xsb3dpbmcgY29tcC5kcmF3SW5mby5ib3hcclxuICogQGRlcGVuZCBHZW5lcmF0b3JJZFxyXG4gKiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3hFbGVtZW50R2VuZXJhdG9yIGltcGxlbWVudHMgUGFydGlhbDxFeHRlbnNpb24+e1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGV0eDpFeHRlbnNpb25NYW5hZ2VyKSB7fVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBlbGVtZW50IGFwcGVuZCB0byBjb250YWluZXIuXHJcbiAgICAgKiBUaGUgZWxlbWVudCBzaXplIGVxdWFsIGNvbXBvbmVudC5kcmF3SW5mby5ib3hcclxuICAgICAqICovXHJcbiAgICBhc3luYyBvbkFwcGx5KGNvbXA6Q29tcG9uZW50KSB7XHJcbiAgICAgICAgbGV0IGVsdCA9IGNvbXAuZXh0cmFEYXRhLmJveEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKCFlbHQpIHtcclxuICAgICAgICAgICAgZWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb21wLm5hbWUpO1xyXG4gICAgICAgICAgICBlbHQuaWQgPSBjb21wLmV4dHJhRGF0YS5pZCE7XHJcbiAgICAgICAgICAgIGNvbXAuZXh0cmFEYXRhLmJveEVsZW1lbnQgPSBlbHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjb21wLmRyYXdJbmZvKSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykgY29udGludWU7XHJcbiAgICAgICAgICAgIGVsdC5kYXRhc2V0W2tleV0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKGVsdC5zdHlsZSwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgbGVmdDogYCR7Y29tcC5kcmF3SW5mby5ib3gueH1weGAsXHJcbiAgICAgICAgICAgIHRvcDogYCR7Y29tcC5kcmF3SW5mby5ib3gueX1weGAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHtjb21wLmRyYXdJbmZvLmJveC53aWR0aH1weGAsXHJcbiAgICAgICAgICAgIGhlaWdodDogYCR7Y29tcC5kcmF3SW5mby5ib3guaGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgekluZGV4OiA5OTk5OTk5IC0gfn4oY29tcC5kcmF3SW5mby5ib3gud2lkdGggKiBjb21wLmRyYXdJbmZvLmJveC5oZWlnaHQpLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb21wLmNvbnRhaW5lciEuYXBwZW5kQ2hpbGQoZWx0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGVsZW1lbnQgY3JlYXRlZCBpbiBvbkFwcGx5XHJcbiAgICAgKiAqL1xyXG4gICAgb25EZXN0cm95KGNvbXA6Q29tcG9uZW50KSB7XHJcbiAgICAgICAgY29uc3QgZWx0IDpIVE1MRWxlbWVudHx1bmRlZmluZWQgPSBjb21wLmV4dHJhRGF0YS5ib3hFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoZWx0ICYmIGVsdC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIGVsdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBFeHRlbnNpb24sIEV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcclxuaW1wb3J0IHsgREVCVUcsIFNOIH0gZnJvbSAnLi4vY29tbW9uL2RlZmluaXRpb25zJztcclxuaW1wb3J0IG1vdmV0byA9IHJlcXVpcmUoJ21vdmV0bycpO1xyXG5pbXBvcnQgQXhpcyBmcm9tICcuLi9BeGlzJztcclxuaW1wb3J0IEF4aXNCb2R5IGZyb20gJy4uL0F4aXMvQXhpc0JvZHknO1xyXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vVGltZWxpbmUnO1xyXG5cclxuZXhwb3J0IGVudW0gQnJlYWtwb2ludHtcclxuICAgIFB1c2hTY2FsZXNBbmRNaWxlc3RvbmVzID0gJ1B1c2hTY2FsZXNBbmRNaWxlc3RvbmVzJyxcclxuICAgIEZpeEV2ZW50Qm9keTJBeGlzTWlsZXN0b25lID0gJ0ZpeEV2ZW50Qm9keTJBeGlzTWlsZXN0b25lJyxcclxuICAgIEZpeEV2ZW50QXhpczJFdmVudEF4aXMgPSAnRml4RXZlbnRBeGlzMkV2ZW50QXhpcycsXHJcbiAgICBGaXhFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIgPSAnRml4RXZlbnRCb2R5MkV2ZW50Qm9keU1vdmVyJyxcclxuICAgIEZpeEV2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyID0gJ0ZpeEV2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyJyxcclxuICAgIERyYXdGcm9tID0gJ0RyYXdGcm9tJyxcclxuICAgIERlYnVnID0gJ0RlYnVnJyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCcmVha3BvaW50QW5pbWF0aW9uQ29uZmlnIHtcclxuICAgIGJyZWFrcG9pbnRzPzogQnJlYWtwb2ludFtdO1xyXG4gICAgcGxheUFuaW1hdGlvbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyZWFrcG9pbnRBbmltYXRpb24gaW1wbGVtZW50cyBQYXJ0aWFsPEV4dGVuc2lvbj57XHJcbiAgICBwcml2YXRlIGJyZWFrcG9pbnRzOkJyZWFrcG9pbnRbXTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGxheUFuaW1hdGlvbjogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgZXR4OkV4dGVuc2lvbk1hbmFnZXIsXHJcbiAgICAgICAgeyBicmVha3BvaW50cz0gW10sIHBsYXlBbmltYXRpb249IGZhbHNlIH06QnJlYWtwb2ludEFuaW1hdGlvbkNvbmZpZyA9IHt9LFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5icmVha3BvaW50cyA9IGJyZWFrcG9pbnRzO1xyXG4gICAgICAgIHRoaXMucGxheUFuaW1hdGlvbiA9IHBsYXlBbmltYXRpb247XHJcbiAgICAgICAgaWYgKHRoaXMucGxheUFuaW1hdGlvbiAmJiB0aGlzLmJyZWFrcG9pbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmJyZWFrcG9pbnRzID0gQnJlYWtwb2ludEFuaW1hdGlvbi5kZWZhdWx0QW5pbWF0aW9uQnJlYWtwb2ludHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChERUJVRykge1xyXG4gICAgICAgICAgICB0aGlzLmJyZWFrcG9pbnRzLnB1c2goQnJlYWtwb2ludC5EZWJ1Zyk7XHJcbiAgICAgICAgICAgICg8YW55PndpbmRvdykubmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAoPGFueT53aW5kb3cpLmFib3J0ID0gKCkgPT4geyBkZWxldGUgdGhpcy5zdGVwSW47IH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhdyhjb21wOkNvbXBvbmVudCkge1xyXG4gICAgICAgIGlmIChUaW1lbGluZS5pcyhjb21wKSAmJiB0aGlzLnBsYXlBbmltYXRpb24pIHtcclxuICAgICAgICAgICAgbmV3IG1vdmV0bygpLm1vdmUodGhpcy5ldHguY29tcG9uZW50c1tTTi5UaW1lbGluZV1bMF0uY2FudmFzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGVwSW4gOlxyXG4gICAgICAgICgodmFsdWUgPzphbnkgfCBQcm9taXNlTGlrZTxhbnk+KSA9PiB2b2lkKVxyXG4gICAgICAgIHwgbnVsbFxyXG4gICAgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdGVwIGludG8gbmV4dCBicmVha3BvaW50LlxyXG4gICAgICogWW91IGNhbiBjYWxsIHdpbmRvdy5uZXh0KCkgdG8gZG8gc2FtZSB0aGluZyB3aGVuIERFQlVHIGlzIHRydWUuXHJcbiAgICAgKiAqL1xyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGVwSW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwSW4oKTtcclxuICAgICAgICAgICAgdGhpcy5zdGVwSW4gPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBjb25zb2xlLmVycm9yKCdjYW5ub3QgbmV4dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmxvY2tpbmcgYXQgYSBicmVha3BvaW50IHV0aWwgbmV4dCBjYWxsZWRcclxuICAgICAqICovXHJcbiAgICBhc3luYyBibG9jayhcclxuICAgICAgICBuYW1lIDpCcmVha3BvaW50LFxyXG4gICAgICAgIHsgb25CbG9jaywgb25OZXh0LCBjb21wb25lbnRzID0gW10sIHByb3RhZ29uaXN0LCBmb3J3YXJkID0gZmFsc2UgfTp7XHJcbiAgICAgICAgICAgIHByb3RhZ29uaXN0PzogQ29tcG9uZW50LFxyXG4gICAgICAgICAgICBjb21wb25lbnRzPzogQ29tcG9uZW50W10sXHJcbiAgICAgICAgICAgIGZvcndhcmQ/OiBib29sZWFuLFxyXG4gICAgICAgICAgICBvbkJsb2NrPzogKCkgPT4gdm9pZCxcclxuICAgICAgICAgICAgb25OZXh0PzogKCkgPT4gdm9pZCxcclxuICAgICAgICB9ID0ge30sXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25JbnRlcnZhbCA9XHJcbiAgICAgICAgICAgIG5hbWUgPT09IEJyZWFrcG9pbnQuRHJhd0Zyb21cclxuICAgICAgICAgICAgICAgID8gMzAwXHJcbiAgICAgICAgICAgICAgICA6IGZvcndhcmQgPyAyMDAgOiAzMDBcclxuICAgICAgICA7XHJcblxyXG4gICAgICAgIGNvbnN0IGdldE1vdmVUYXJnZXQgPSBmdW5jdGlvbiAoKTpudW1iZXJ8bnVsbCB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvcFBhZGRpbmcgPSAxMDA7XHJcbiAgICAgICAgICAgIGlmIChwcm90YWdvbmlzdCkgcmV0dXJuIHByb3RhZ29uaXN0LmRyYXdJbmZvLmJveC55IC0gdG9wUGFkZGluZztcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMgJiYgY29tcG9uZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdldFRvcHBlZCA9IChjb21wTGlzdDpDb21wb25lbnRbXSkgPT4gY29tcExpc3QuZmluZChcclxuICAgICAgICAgICAgICAgICAgICBjb21wMSA9PiBjb21wTGlzdC5ldmVyeShcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcDIgPT4gY29tcDEuZHJhd0luZm8uYm94LnkgPj0gY29tcDIuZHJhd0luZm8uYm94LnksXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50TGlzdFdpdGhvdXRBeGlzID0gY29tcG9uZW50cy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcCA9PiAhQXhpcy5pcyhjb21wKSAmJiAhQXhpc0JvZHkuaXMoY29tcCksXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRUb3BwZWQoY29tcG9uZW50TGlzdFdpdGhvdXRBeGlzKSEuZHJhd0luZm8uYm94LnggLSB0b3BQYWRkaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBibG9ja2luZyBhdCAke25hbWV9YCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXlBbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IGdldE1vdmVUYXJnZXQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUYXJnZXQgJiYgIWZvcndhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgbW92ZXRvKHsgZHVyYXRpb246IDUwMCB9KS5tb3ZlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUYXJnZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxiYWNrOiAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmV4dCgpLCBhbmltYXRpb25JbnRlcnZhbCkgfSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmV4dCgpLCBhbmltYXRpb25JbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob25CbG9jaykgYXdhaXQgb25CbG9jaygpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoY29tcG9uZW50cy5tYXAoYyA9PiBjLmRyYXcoKSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbk5leHQpIGF3YWl0IG9uTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChjb21wb25lbnRzLm1hcChjID0+IGMuaGlkZSgpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdEFuaW1hdGlvbkJyZWFrcG9pbnRzOkJyZWFrcG9pbnRbXSA9IFtcclxuICAgICAgICBCcmVha3BvaW50LkZpeEV2ZW50Qm9keTJBeGlzTWlsZXN0b25lLFxyXG4gICAgICAgIEJyZWFrcG9pbnQuRml4RXZlbnRBeGlzMkV2ZW50QXhpcyxcclxuICAgICAgICBCcmVha3BvaW50LkZpeEV2ZW50Qm9keTJFdmVudEJvZHlNb3ZlcixcclxuICAgICAgICBCcmVha3BvaW50LkZpeEV2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyLFxyXG4gICAgICAgIEJyZWFrcG9pbnQuRHJhd0Zyb20sXHJcbiAgICBdO1xyXG59XHJcbiIsImltcG9ydCB7IEV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tICcuLi8nO1xyXG5pbXBvcnQgeyBTTiB9IGZyb20gJy4uLy4uL2NvbW1vbi9kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IGlzSW50ZXJzZWN0aW5nIH0gZnJvbSAnLi4vLi4vY29tbW9uL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBFdmVudEF4aXMgZnJvbSAnLi4vLi4vRXZlbnQvRXZlbnRBeGlzJztcclxuaW1wb3J0IHsgQ29uZmxpY3RGaXhSZXN1bHQsIExpbmUgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcbmltcG9ydCB7IEJyZWFrcG9pbnQgfSBmcm9tICcuLi9CcmVha3BvaW50QW5pbWF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50QXhpczJFdmVudEF4aXMge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGV4dDpFeHRlbnNpb25NYW5hZ2VyKSB7fVxyXG5cclxuICAgIGFzeW5jIGZpeCgpOlByb21pc2U8Q29uZmxpY3RGaXhSZXN1bHQ+IHtcclxuICAgICAgICBjb25zdCBldmVudEF4aXNMaXN0OkV2ZW50QXhpc1tdID0gQXJyYXkuZnJvbSh0aGlzLmV4dC5jb21wb25lbnRzW1NOLkV2ZW50QXhpc10pXHJcbiAgICAgICAgICAgIC5zb3J0KChlYTEsIGVhMikgPT4gZWEyLmRyYXdJbmZvLmxlbmd0aCAtIGVhMS5kcmF3SW5mby5sZW5ndGgpXHJcbiAgICAgICAgO1xyXG5cclxuICAgICAgICB3aGlsZSAoXHJcbiAgICAgICAgICAgIGV2ZW50QXhpc0xpc3Quc29tZShcclxuICAgICAgICAgICAgICAgIGVhMSA9PiBldmVudEF4aXNMaXN0LnNvbWUoZWEyID0+IEV2ZW50QXhpczJFdmVudEF4aXMuaXNDb25mbGljdChlYTEsIGVhMikpLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWExIG9mIGV2ZW50QXhpc0xpc3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZsaWN0V2l0aCA9IGV2ZW50QXhpc0xpc3QuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGVhMiA9PiBFdmVudEF4aXMyRXZlbnRBeGlzLmlzQ29uZmxpY3QoZWExLCBlYTIpLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb25mbGljdFdpdGgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdGFnb25pc3Q6IGVhMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50czogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5leHQuY29tcG9uZW50c1tTTi5BeGlzQm9keV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dC5nZXRQYXJlbnQoZWExKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbmZsaWN0V2l0aC5tYXAoZWEgPT4gdGhpcy5leHQuZ2V0UGFyZW50KGVhKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmV4dC5icmVha3BvaW50LmJsb2NrKEJyZWFrcG9pbnQuRml4RXZlbnRBeGlzMkV2ZW50QXhpcywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWExLmRyYXdJbmZvLm9mZnNldFggKz0gMTU7IC8vIFRPRE86IGNvbmZpZ3VyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGVhMS5hcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZXh0LmJyZWFrcG9pbnQuYmxvY2soXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyZWFrcG9pbnQuRml4RXZlbnRBeGlzMkV2ZW50QXhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQ29uZmxpY3RGaXhSZXN1bHQuTm9Db25mbGljdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNDb25mbGljdCAoZWExOkV2ZW50QXhpcywgZWEyOkV2ZW50QXhpcykgOmJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChlYTEgPT09IGVhMikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGxpbmUxOkxpbmUgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0WDogZWExLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueCArIGVhMS5kcmF3SW5mby5vZmZzZXRYLFxyXG4gICAgICAgICAgICBzdGFydFk6IGVhMS5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnksXHJcbiAgICAgICAgICAgIGVuZFg6IGVhMS5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnggKyBlYTEuZHJhd0luZm8ub2Zmc2V0WCxcclxuICAgICAgICAgICAgZW5kWTogZWExLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSAtIGVhMS5kcmF3SW5mby5sZW5ndGgsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBsaW5lMjpMaW5lID0ge1xyXG4gICAgICAgICAgICBzdGFydFg6IGVhMi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnggKyBlYTIuZHJhd0luZm8ub2Zmc2V0WCxcclxuICAgICAgICAgICAgc3RhcnRZOiBlYTIuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55LFxyXG4gICAgICAgICAgICBlbmRYOiBlYTIuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC54ICsgZWEyLmRyYXdJbmZvLm9mZnNldFgsXHJcbiAgICAgICAgICAgIGVuZFk6IGVhMi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgLSBlYTIuZHJhd0luZm8ubGVuZ3RoLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGlzSW50ZXJzZWN0aW5nKGxpbmUxLCBsaW5lMik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRXh0ZW5zaW9uTWFuYWdlciB9IGZyb20gJy4uLyc7XHJcbmltcG9ydCB7IENvbmZsaWN0Rml4UmVzdWx0IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBTTiB9IGZyb20gJy4uLy4uL2NvbW1vbi9kZWZpbml0aW9ucyc7XHJcbmltcG9ydCBBeGlzTWlsZXN0b25lIGZyb20gJy4uLy4uL0F4aXMvQXhpc01pbGVzdG9uZSc7XHJcbmltcG9ydCB7IGlzT3ZlcmxhcCB9IGZyb20gJy4uLy4uL2NvbW1vbi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBCcmVha3BvaW50IH0gZnJvbSAnLi4vQnJlYWtwb2ludEFuaW1hdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJvZHkyQXhpc01pbGVzdG9uZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZXh0OkV4dGVuc2lvbk1hbmFnZXIpIHt9XHJcblxyXG4gICAgYXN5bmMgZml4KCk6UHJvbWlzZTxDb25mbGljdEZpeFJlc3VsdD4ge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50Qm9keUxpc3QgPSB0aGlzLmV4dC5jb21wb25lbnRzW1NOLkV2ZW50Qm9keV07XHJcbiAgICAgICAgY29uc3QgYXhpc01pbGVzdG9uZUxpc3Q6QXhpc01pbGVzdG9uZVtdID0gdGhpcy5leHQuY29tcG9uZW50c1tTTi5BeGlzTWlsZXN0b25lXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBldmVudEJvZHkgb2YgZXZlbnRCb2R5TGlzdCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGF4aXNNaWxlc3RvbmUgb2YgYXhpc01pbGVzdG9uZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc092ZXJsYXAoZXZlbnRCb2R5LmRyYXdJbmZvLmJveCwgYXhpc01pbGVzdG9uZS5kcmF3SW5mby5ib3gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdGFnb25pc3Q6IGF4aXNNaWxlc3RvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZXh0LmNvbXBvbmVudHNbU04uQXhpc0JvZHldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpc01pbGVzdG9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Qm9keSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZXh0LmJyZWFrcG9pbnQuYmxvY2soQnJlYWtwb2ludC5GaXhFdmVudEJvZHkyQXhpc01pbGVzdG9uZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRCb2R5LmRyYXdJbmZvLm9mZnNldC54ID0gYXhpc01pbGVzdG9uZS5kcmF3SW5mby5ib3gud2lkdGggLyAyICsgMTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBldmVudEJvZHkuYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmV4dC5icmVha3BvaW50LmJsb2NrKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmVha3BvaW50LkZpeEV2ZW50Qm9keTJBeGlzTWlsZXN0b25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gQ29uZmxpY3RGaXhSZXN1bHQuTm9Db25mbGljdDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTTiB9IGZyb20gJy4uLy4uL2NvbW1vbi9kZWZpbml0aW9ucyc7XHJcbmltcG9ydCBFdmVudEJvZHkgZnJvbSAnLi4vLi4vRXZlbnQvRXZlbnRCb2R5JztcclxuaW1wb3J0IHsgaXNPdmVybGFwIH0gZnJvbSAnLi4vLi4vY29tbW9uL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IEV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tICcuLi8nO1xyXG5pbXBvcnQgeyBDb25mbGljdCBhcyBDb21wb25lbnRDb25mbGljdCB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vLi4vVGltZWxpbmUnO1xyXG5pbXBvcnQgQXhpc0JvZHkgZnJvbSAnLi4vLi4vQXhpcy9BeGlzQm9keSc7XHJcbmltcG9ydCB7IEJyZWFrcG9pbnQgfSBmcm9tICcuLi9CcmVha3BvaW50QW5pbWF0aW9uJztcclxuaW1wb3J0IHsgQ29uZmxpY3RGaXhSZXN1bHQgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG50eXBlIENvbmZsaWN0ID0gQ29tcG9uZW50Q29uZmxpY3Q8RXZlbnRCb2R5PjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyIHtcclxuICAgIHRpbWVsaW5lID86VGltZWxpbmU7XHJcbiAgICBheGlzQm9keSA/OkF4aXNCb2R5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBleHQ6IEV4dGVuc2lvbk1hbmFnZXIpIHt9XHJcblxyXG4gICAgY29uZmxpY3RzOkNvbmZsaWN0W10gPSBbXTtcclxuICAgIC8qKlxyXG4gICAgICogYWJvdmUgRXZlbnRCb2R5IGlzIGFib3ZlLCBiZWxvdyBFdmVudEJvZHkgaXMgYmVsb3dcclxuICAgICAqICovXHJcbiAgICBldmVudEJvZHlMaXN0IDpFdmVudEJvZHlbXSA9IFtdO1xyXG5cclxuICAgIHN0YXRpYyBpc0NvbmZsaWN0KGViMTpFdmVudEJvZHksIGViMjpFdmVudEJvZHkpIDpib29sZWFuIHtcclxuICAgICAgICBpZiAoZWIxID09PSBlYjIpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoZWIxLmRyYXdJbmZvLmZsb2F0ZWQgfHwgZWIyLmRyYXdJbmZvLmZsb2F0ZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzT3ZlcmxhcChlYjEuZHJhd0luZm8uYm94LCBlYjIuZHJhd0luZm8uYm94KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZsb2F0KGNvbmZsaWN0czpDb25mbGljdCkge1xyXG4gICAgICAgIGNvbnN0IG1heFdpZHRoSW5Db25mbGljdCA9IE1hdGgubWF4KFxyXG4gICAgICAgICAgICAuLi5jb25mbGljdHMud2l0aC5tYXAoYyA9PiBjLmRyYXdJbmZvLmJveC53aWR0aCArIGMuZHJhd0luZm8ub2Zmc2V0LngpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uZmxpY3RzLnNlbGYuZHJhd0luZm8ub2Zmc2V0LnggPSBtYXhXaWR0aEluQ29uZmxpY3QgKyAxO1xyXG4gICAgICAgIGNvbmZsaWN0cy5zZWxmLmRyYXdJbmZvLm1heFdpZHRoID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgIHRoaXMudGltZWxpbmUhLmdyaWQuZXZlbnRXaWR0aCxcclxuICAgICAgICAgICAgdGhpcy5heGlzQm9keSEuZHJhd0luZm8uYm94LnggLSBtYXhXaWR0aEluQ29uZmxpY3QsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25mbGljdHMuc2VsZi5kcmF3SW5mby5mbG9hdGVkID0gdHJ1ZTtcclxuICAgICAgICBhd2FpdCBjb25mbGljdHMuc2VsZi5hcHBseSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZpeCgpIDpQcm9taXNlPENvbmZsaWN0Rml4UmVzdWx0PiB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aGlzLmV4dC5jb21wb25lbnRzW1NOLlRpbWVsaW5lXVswXTtcclxuICAgICAgICB0aGlzLmF4aXNCb2R5ID0gdGhpcy5leHQuY29tcG9uZW50c1tTTi5BeGlzQm9keV1bMF07XHJcbiAgICAgICAgdGhpcy5ldmVudEJvZHlMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLmV4dC5jb21wb25lbnRzW1NOLkV2ZW50Qm9keV0pXHJcbiAgICAgICAgICAgIC5zb3J0KChlYjEsIGViMikgPT5cclxuICAgICAgICAgICAgICAgIGViMS5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgLSBlYjIuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55LFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgO1xyXG5cclxuICAgICAgICB0aGlzLmNvdW50Q29uZmxpY3QoKTtcclxuICAgICAgICBpZiAodGhpcy5jb25mbGljdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb25mbGljdEZpeFJlc3VsdC5Ob0NvbmZsaWN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29uZmxpY3QgPSB0aGlzLnBpY2tSaW5nbGVhZGVyKCkhO1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF4aXNCb2R5LFxyXG4gICAgICAgICAgICAgICAgY29uZmxpY3Quc2VsZixcclxuICAgICAgICAgICAgICAgIC4uLmNvbmZsaWN0LndpdGgsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHByb3RhZ29uaXN0OiBjb25mbGljdC5zZWxmLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuZXh0LmJyZWFrcG9pbnQuYmxvY2soQnJlYWtwb2ludC5GaXhFdmVudEJvZHkyRXZlbnRCb2R5RmxvYXRlciwgb3B0aW9ucyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5mbG9hdChjb25mbGljdCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5leHQuYnJlYWtwb2ludC5ibG9jayhcclxuICAgICAgICAgICAgQnJlYWtwb2ludC5GaXhFdmVudEJvZHkyRXZlbnRCb2R5RmxvYXRlcixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gQ29uZmxpY3RGaXhSZXN1bHQuQWxsZXZpYXRlZDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwaWNrUmluZ2xlYWRlcigpIDpDb25mbGljdHx1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZsaWN0cy5maW5kKFxyXG4gICAgICAgICAgICBjMSA9PiB0aGlzLmNvbmZsaWN0cy5ldmVyeShjMiA9PiBjMS53aXRoLmxlbmd0aCA+PSBjMi53aXRoLmxlbmd0aCksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY291bnRDb25mbGljdCgpIHtcclxuICAgICAgICB0aGlzLmNvbmZsaWN0cy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGViIG9mIHRoaXMuZXZlbnRCb2R5TGlzdCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25mbGljdCA9IHtcclxuICAgICAgICAgICAgICAgIHNlbGY6IGViIGFzIEV2ZW50Qm9keSxcclxuICAgICAgICAgICAgICAgIHdpdGg6IHRoaXMuZXh0LmNvbXBvbmVudHNbU04uRXZlbnRCb2R5XS5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0+IEV2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyLmlzQ29uZmxpY3QoZWIsIHRhcmdldCBhcyBFdmVudEJvZHkpLFxyXG4gICAgICAgICAgICAgICAgKSBhcyBFdmVudEJvZHlbXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGNvbmZsaWN0LndpdGgubGVuZ3RoKSB0aGlzLmNvbmZsaWN0cy5wdXNoKGNvbmZsaWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCBFdmVudEJvZHkgZnJvbSAnLi4vLi4vRXZlbnQvRXZlbnRCb2R5JztcclxuaW1wb3J0IHsgaXNPdmVybGFwLCB3YWxrTG9vcCB9IGZyb20gJy4uLy4uL2NvbW1vbi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBTTiB9IGZyb20gJy4uLy4uL2NvbW1vbi9kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IEV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tICcuLi8nO1xyXG5pbXBvcnQgeyBDb25mbGljdCBhcyBDb21wb25lbnRDb25mbGljdCB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBCcmVha3BvaW50IH0gZnJvbSAnLi4vQnJlYWtwb2ludEFuaW1hdGlvbic7XHJcbmltcG9ydCB7IENvbmZsaWN0Rml4UmVzdWx0IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxudHlwZSBDb25mbGljdCA9IENvbXBvbmVudENvbmZsaWN0PEV2ZW50Qm9keT47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGV4dDpFeHRlbnNpb25NYW5hZ2VyKSB7fVxyXG5cclxuICAgIGNvbmZsaWN0czpDb25mbGljdFtdID0gW107XHJcbiAgICAvKipcclxuICAgICAqIGFib3ZlIEV2ZW50Qm9keSBpcyBhYm92ZSwgYmVsb3cgRXZlbnRCb2R5IGlzIGJlbG93XHJcbiAgICAgKiAqL1xyXG4gICAgZXZlbnRCb2R5TGlzdDpFdmVudEJvZHlbXSA9IFtdO1xyXG4gICAgc3BhY2VNYXAgPSBuZXcgTWFwIGFzIE1hcDxFdmVudEJvZHksIHt0b3A6bnVtYmVyLCBib3R0b206bnVtYmVyfT47XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGF2b2lkKFxyXG4gICAgICAgIHsgbW92ZXIsIGZpeGVkLCBkaXJlY3Rpb24gfVxyXG4gICAgICAgIDp7bW92ZXI6RXZlbnRCb2R5LCBmaXhlZDpFdmVudEJvZHksIGRpcmVjdGlvbjoxfC0xfSxcclxuICAgICkge1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIG1vdmVyLmRyYXdJbmZvLm9mZnNldC55ICs9XHJcbiAgICAgICAgICAgICAgICAoZml4ZWQuZHJhd0luZm8uYm94LnkgKyBmaXhlZC5kcmF3SW5mby5ib3guaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLSBtb3Zlci5kcmF3SW5mby5ib3gueVxyXG4gICAgICAgICAgICAgICAgKyAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1vdmVyLmRyYXdJbmZvLm9mZnNldC55IC09XHJcbiAgICAgICAgICAgICAgICAobW92ZXIuZHJhd0luZm8uYm94LnkgKyBtb3Zlci5kcmF3SW5mby5ib3guaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLSBmaXhlZC5kcmF3SW5mby5ib3gueVxyXG4gICAgICAgICAgICAgICAgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBtb3Zlci5hcHBseSgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGlzQ29uZmxpY3QoZWIxOkV2ZW50Qm9keSwgZWIyOkV2ZW50Qm9keSkge1xyXG4gICAgICAgIGlmIChlYjEgPT09IGViMikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoZWIxLmRyYXdJbmZvLmZsb2F0ZWQgIT09IGViMi5kcmF3SW5mby5mbG9hdGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZsb2F0ZWQgPSAoZWIxLmRyYXdJbmZvLmZsb2F0ZWQgPyBlYjEgOiBlYjIpIGFzIEV2ZW50Qm9keTtcclxuICAgICAgICAgICAgY29uc3QgYW5vdGhlciA9ICAoZWIxID09PSBmbG9hdGVkID8gZWIyIDogZWIxKSBhcyBFdmVudEJvZHk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIC8vIGZsb2F0ZWQncyBsaW5lIG92ZXJsYXBwZWQgd2l0aCBhbm90aGVyJ3MgYm9keVxyXG4gICAgICAgICAgICAgICAgKGZsb2F0ZWQuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55ID4gYW5vdGhlci5kcmF3SW5mby5ib3gueSlcclxuICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdGVkLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueVxyXG4gICAgICAgICAgICAgICAgICAgIDwgKGFub3RoZXIuZHJhd0luZm8uYm94LnkgKyBhbm90aGVyLmRyYXdJbmZvLmJveC5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGlzT3ZlcmxhcChlYjEuZHJhd0luZm8uYm94LCBlYjIuZHJhd0luZm8uYm94KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZml4KCkgOlByb21pc2U8Q29uZmxpY3RGaXhSZXN1bHQ+IHtcclxuICAgICAgICB0aGlzLmV2ZW50Qm9keUxpc3QgPSBBcnJheS5mcm9tKHRoaXMuZXh0LmNvbXBvbmVudHNbU04uRXZlbnRCb2R5XSlcclxuICAgICAgICAgICAgLnNvcnQoKGViMSwgZWIyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICBlYjEuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55XHJcbiAgICAgICAgICAgICAgICAtIGViMi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnlcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICA7XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB3YWxrTG9vcChhc3luYyAoKSA9PiBbXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudHJ5Rml4T25lKCksXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBoYXZlIGZpeGVkIG9uZSBvZiBjb25mbGljdHM/XHJcbiAgICAgKiAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyB0cnlGaXhPbmUoKSA6UHJvbWlzZTxDb25mbGljdEZpeFJlc3VsdD4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY291bnRDb25mbGljdCgpO1xyXG4gICAgICAgIHRoaXMuY291bnRTcGFjZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25mbGljdHMubGVuZ3RoID09PSAwKSByZXR1cm4gQ29uZmxpY3RGaXhSZXN1bHQuTm9Db25mbGljdDtcclxuICAgICAgICB0aGlzLmNvbmZsaWN0cyA9IHRoaXMuY29uZmxpY3RzLmZpbHRlcihcclxuICAgICAgICAgICAgY29uZmxpY3QgPT4gdGhpcy5pc1Bvc3NpYmxlKGNvbmZsaWN0KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZsaWN0cy5sZW5ndGggPT09IDApIHJldHVybiBDb25mbGljdEZpeFJlc3VsdC5GYWlsZWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbmZsaWN0ID0gdGhpcy5jb25mbGljdHMuZmluZChcclxuICAgICAgICAgICAgY29uZmxpY3QxID0+IHRoaXMuY29uZmxpY3RzLmV2ZXJ5KFxyXG4gICAgICAgICAgICAgICAgY29uZmxpY3QyID0+IHRoaXMuY291bnRDYXN0KGNvbmZsaWN0MSkgPD0gdGhpcy5jb3VudENhc3QoY29uZmxpY3QyKSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICApITtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29tcG9uZW50czogW1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5leHQuY29tcG9uZW50c1tTTi5BeGlzQm9keV0sXHJcbiAgICAgICAgICAgICAgICBjb25mbGljdC5zZWxmLFxyXG4gICAgICAgICAgICAgICAgLi4uY29uZmxpY3Qud2l0aCxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJvdGFnb25pc3Q6IGNvbmZsaWN0LnNlbGYsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5leHQuYnJlYWtwb2ludC5ibG9jayhCcmVha3BvaW50LkZpeEV2ZW50Qm9keTJFdmVudEJvZHlNb3Zlciwgb3B0aW9ucyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5maXhDb25mbGljdChjb25mbGljdCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5leHQuYnJlYWtwb2ludC5ibG9jayhcclxuICAgICAgICAgICAgQnJlYWtwb2ludC5GaXhFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBDb25mbGljdEZpeFJlc3VsdC5BbGxldmlhdGVkO1xyXG5cclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNQb3NzaWJsZShjb25mbGljdDpDb25mbGljdCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY29uZmxpY3Quc2VsZi5kcmF3SW5mby5mbG9hdGVkXHJcbiAgICAgICAgICAgICYmIGNvbmZsaWN0LndpdGguc29tZShlYiA9PiAhZWIuZHJhd0luZm8uZmxvYXRlZClcclxuICAgICAgICApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgbmVlZGVkID0gdGhpcy5jb3VudE5lZWRlZChjb25mbGljdCk7XHJcbiAgICAgICAgY29uc3Qgc3BhY2UgPSB0aGlzLnNwYWNlTWFwLmdldChjb25mbGljdC5zZWxmKSE7XHJcblxyXG4gICAgICAgIHJldHVybiAobmVlZGVkLmJvdHRvbSA9PT0gMCB8fCBuZWVkZWQudG9wID09PSAwKVxyXG4gICAgICAgICAgICAmJiAoc3BhY2UuYm90dG9tID49IG5lZWRlZC5ib3R0b20gJiYgc3BhY2UudG9wID49IG5lZWRlZC50b3ApXHJcbiAgICAgICAgICAgIDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXN5bmMgZml4Q29uZmxpY3QoY29uZmxpY3Q6Q29uZmxpY3QpIHtcclxuICAgICAgICBjb25zdCBuZWVkZWQgPSB0aGlzLmNvdW50TmVlZGVkKGNvbmZsaWN0KTtcclxuICAgICAgICBjb25zdCBtb3ZlRGlzdGFuY2UgPSBuZWVkZWQudG9wID8gbmVlZGVkLnRvcCA6IC1uZWVkZWQuYm90dG9tO1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IG1vdmVEaXN0YW5jZSAvIE1hdGguYWJzKG1vdmVEaXN0YW5jZSkgYXMgKDEgfCAtMSk7XHJcblxyXG4gICAgICAgIC8vIGZpeCBjb25mbGljdFxyXG4gICAgICAgIGNvbmZsaWN0LnNlbGYuZHJhd0luZm8ub2Zmc2V0LnkgKz0gbW92ZURpc3RhbmNlO1xyXG4gICAgICAgIGF3YWl0IGNvbmZsaWN0LnNlbGYuYXBwbHkoKTtcclxuXHJcbiAgICAgICAgLy8gYW5kIGZpeCBzaWRlLWVmZmVjdFxyXG4gICAgICAgIGNvbnN0IGVmZmVjdGFibGUgPSB0aGlzLmV2ZW50Qm9keUxpc3QuZmlsdGVyKFxyXG4gICAgICAgICAgICBlYiA9PiBlYi5kcmF3SW5mby5mbG9hdGVkID09PSBjb25mbGljdC5zZWxmLmRyYXdJbmZvLmZsb2F0ZWQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICBsZXQgaSA9IGVmZmVjdGFibGUuaW5kZXhPZihjb25mbGljdC5zZWxmKSArIGRpcmVjdGlvbjtcclxuICAgICAgICAgICAgaSA+PSAwICYmIGkgPCBlZmZlY3RhYmxlLmxlbmd0aDtcclxuICAgICAgICAgICAgaSArPSBkaXJlY3Rpb25cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdCA9IGVmZmVjdGFibGVbaSAtIGRpcmVjdGlvbl07XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IGVmZmVjdGFibGVbaV07XHJcbiAgICAgICAgICAgIGlmIChFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIuaXNDb25mbGljdChsYXN0LCBub3cpKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIuYXZvaWQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBtb3Zlcjogbm93LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkOiBsYXN0LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgY291bnRDb25mbGljdCgpIHtcclxuICAgICAgICB0aGlzLmNvbmZsaWN0cy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLmV2ZW50Qm9keUxpc3QubWFwKGViID0+IGViLmFwcGx5KCkpKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlYiBvZiB0aGlzLmV2ZW50Qm9keUxpc3QpIHtcclxuICAgICAgICAgICAgY29uc3QgY29uZmxpY3QgPSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmOiBlYixcclxuICAgICAgICAgICAgICAgIHdpdGg6IHRoaXMuZXZlbnRCb2R5TGlzdC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0+IEV2ZW50Qm9keTJFdmVudEJvZHlNb3Zlci5pc0NvbmZsaWN0KGViLCA8RXZlbnRCb2R5PnRhcmdldCksXHJcbiAgICAgICAgICAgICAgICApIGFzIEV2ZW50Qm9keVtdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoY29uZmxpY3Qud2l0aC5sZW5ndGgpIHRoaXMuY29uZmxpY3RzLnB1c2goY29uZmxpY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgY291bnRDYXN0KGNvbmZsaWN0OkNvbmZsaWN0KSB7XHJcbiAgICAgICAgY29uc3QgbmVlZGVkID0gdGhpcy5jb3VudE5lZWRlZChjb25mbGljdCk7XHJcbiAgICAgICAgcmV0dXJuIG5lZWRlZC5ib3R0b20gKyBuZWVkZWQudG9wO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb3VudCB0aGUgbnVtYmVyIGhvdyBtYW55IHNwYWNlIG5lZWRlZCBmb3IgZml4IHRoZSBjb25mbGljdCBieSB2ZXJ0aWNhbE1vdmVcclxuICAgICAqICovXHJcbiAgICBwcml2YXRlIGNvdW50TmVlZGVkKGNvbmZsaWN0OkNvbmZsaWN0KSA6e3RvcDpudW1iZXIsIGJvdHRvbTpudW1iZXJ9IHtcclxuICAgICAgICBjb25zdCBvcmlnaW4gPSBjb25mbGljdC5zZWxmO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBhYm92ZTpFdmVudEJvZHlbXSA9IGNvbmZsaWN0LndpdGguZmlsdGVyKFxyXG4gICAgICAgICAgICBjYiA9PiBjYi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgPCBvcmlnaW4uZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgYmVsb3c6RXZlbnRCb2R5W10gPSBjb25mbGljdC53aXRoLmZpbHRlcihjYiA9PlxyXG4gICAgICAgICAgICBjYi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgPiBvcmlnaW4uZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55LFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChhYm92ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnRvcCA9IE1hdGgubWF4KFxyXG4gICAgICAgICAgICAgICAgLi4uYWJvdmUubWFwKCh1cHBlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cHBlci5kcmF3SW5mby5mbG9hdGVkID09PSBvcmlnaW4uZHJhd0luZm8uZmxvYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXIuZHJhd0luZm8uYm94LnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgdXBwZXIuZHJhd0luZm8uYm94LmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBvcmlnaW4uZHJhd0luZm8uYm94LnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWdpbi5kcmF3SW5mby5mbG9hdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXIuZHJhd0luZm8uYm94LnkgKyB1cHBlci5kcmF3SW5mby5ib3guaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBvcmlnaW4uZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh1cHBlci5kcmF3SW5mby5mbG9hdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1cHBlci5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgLSBvcmlnaW4uZHJhd0luZm8uYm94Lnk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFN5bnRheEVycm9yKCdmbG9hdGVkIGlzIG5vdCBhIGJvb2xlYW4nKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmVsb3cubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5ib3R0b20gPSBNYXRoLm1heChcclxuICAgICAgICAgICAgICAgIC4uLmJlbG93Lm1hcCgobG93ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXIuZHJhd0luZm8uZmxvYXRlZCA9PT0gb3JpZ2luLmRyYXdJbmZvLmZsb2F0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbi5kcmF3SW5mby5ib3gueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBvcmlnaW4uZHJhd0luZm8uYm94LmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBsb3dlci5kcmF3SW5mby5ib3gueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZ2luLmRyYXdJbmZvLmZsb2F0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgLSBsb3dlci5kcmF3SW5mby5ib3gueTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvd2VyLmRyYXdJbmZvLmZsb2F0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcmlnaW4uZHJhd0luZm8uYm94LnkgKyBvcmlnaW4uZHJhd0luZm8uYm94LmhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gbG93ZXIuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFN5bnRheEVycm9yKCdmbG9hdGVkIGlzIG5vdCBhIGJvb2xlYW4nKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbWFyZ2luIDEgdG8gdGFyZ2V0IG9mIGNvbmZsaWN0XHJcbiAgICAgICAgaWYgKHJlc3VsdC50b3ApIHJlc3VsdC50b3ArKztcclxuICAgICAgICBpZiAocmVzdWx0LmJvdHRvbSkgcmVzdWx0LmJvdHRvbSsrO1xyXG5cclxuICAgICAgICBvcmlnaW4uZXh0cmFEYXRhLm5lZWRlZCA9IHJlc3VsdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ291bnQgdGhlIG51bWJlciBob3cgbWFueSBzcGFjZSB0aGUgY29tcG9uZW50IGNhbiBtb3ZlXHJcbiAgICAgKiAqL1xyXG4gICAgcHJpdmF0ZSBjb3VudFNwYWNlKCkge1xyXG4gICAgICAgIGNvbnN0IHNwYWNlUGFkZGluZyA9IDQ7IC8vIEZJWE1FOiByZW1vdmUgc3VwcG9ydGVkXHJcblxyXG4gICAgICAgIC8vIEl0c2VsZidzIGNhbiBtb3ZlIHNwYWNlXHJcbiAgICAgICAgdGhpcy5ldmVudEJvZHlMaXN0LmZvckVhY2goXHJcbiAgICAgICAgICAgIGViID0+IHRoaXMuc3BhY2VNYXAuc2V0KGViLCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IGViLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSAtIGViLmRyYXdJbmZvLmJveC55IC0gc3BhY2VQYWRkaW5nLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiBlYi5kcmF3SW5mby5ib3gueVxyXG4gICAgICAgICAgICAgICAgICAgICsgZWIuZHJhd0luZm8uYm94LmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIC0gZWIuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55XHJcbiAgICAgICAgICAgICAgICAgICAgLSBzcGFjZVBhZGRpbmdcclxuICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgYXBwbHlMaW1pdGluZyA9IChhbGxFdmVudEJvZHk6RXZlbnRCb2R5W10pID0+IHtcclxuICAgICAgICAgICAgaWYgKGFsbEV2ZW50Qm9keS5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIC8vIEFuIGl0ZW0gaXMgbGltaXRlZCBmcm9tXHJcblxyXG4gICAgICAgICAgICAvLyBpdCdzIGZpcnN0IHRoYXQgcHJldmVudCBvdXQgb2YgY2FudmFzXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gYWxsRXZlbnRCb2R5WzBdO1xyXG4gICAgICAgICAgICB0aGlzLnNwYWNlTWFwLmdldChmaXJzdCkhLmJvdHRvbSA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGFjZU1hcC5nZXQoZmlyc3QpIS5ib3R0b20sXHJcbiAgICAgICAgICAgICAgICBmaXJzdC5kcmF3SW5mby5ib3gueSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gaXQncyBsYXN0IHRoYXQgcHJldmVudCBvdXQgb2YgY2FudmFzXHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBhbGxFdmVudEJvZHlbYWxsRXZlbnRCb2R5Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICB0aGlzLnNwYWNlTWFwLmdldChsYXN0KSEudG9wID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYWNlTWFwLmdldChsYXN0KSEudG9wLFxyXG4gICAgICAgICAgICAgICAgbGFzdC5jYW52YXMuaGVpZ2h0IC0gKGxhc3QuZHJhd0luZm8uYm94LnkgKyBsYXN0LmRyYXdJbmZvLmJveC5oZWlnaHQpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyBjbGFtcCBieSBuZWlnaGJvclxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFsbEV2ZW50Qm9keS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXMgPSBhbGxFdmVudEJvZHlbaSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gYWxsRXZlbnRCb2R5W2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93RGF0YSA9IHRoaXMuc3BhY2VNYXAuZ2V0KG5vdykhO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNEYXRhID0gdGhpcy5zcGFjZU1hcC5nZXQocHJldmlvdXMpITtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgbm93LmRyYXdJbmZvLmJveC55IC1cclxuICAgICAgICAgICAgICAgICAgICAocHJldmlvdXMuZHJhd0luZm8uYm94LnkgKyBwcmV2aW91cy5kcmF3SW5mby5ib3guaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vd0RhdGEuYm90dG9tID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICAgICAgbm93RGF0YS5ib3R0b20sXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgKyBwcmV2aW91c0RhdGEuYm90dG9tLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gYWxsRXZlbnRCb2R5Lmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gYWxsRXZlbnRCb2R5W2kgKyAxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IGFsbEV2ZW50Qm9keVtpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vd0RhdGEgPSB0aGlzLnNwYWNlTWFwLmdldChub3cpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHREYXRhID0gdGhpcy5zcGFjZU1hcC5nZXQobmV4dCkhO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID1cclxuICAgICAgICAgICAgICAgICAgICBuZXh0LmRyYXdJbmZvLmJveC55IC1cclxuICAgICAgICAgICAgICAgICAgICAobm93LmRyYXdJbmZvLmJveC55ICsgbm93LmRyYXdJbmZvLmJveC5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICA7XHJcblxyXG4gICAgICAgICAgICAgICAgbm93RGF0YS50b3AgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgICAgICAgICBub3dEYXRhLnRvcCxcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSArIG5leHREYXRhLnRvcCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBudW1iZXIgd2hpY2ggPCAwIGFzIDBcclxuICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLnNwYWNlTWFwLnZhbHVlcygpKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUudG9wID0gTWF0aC5tYXgoMCwgdmFsdWUudG9wKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlLmJvdHRvbSA9IE1hdGgubWF4KDAsIHZhbHVlLmJvdHRvbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFwcGx5TGltaXRpbmcodGhpcy5ldmVudEJvZHlMaXN0LmZpbHRlcihlYiA9PiBlYi5kcmF3SW5mby5mbG9hdGVkKSk7XHJcbiAgICAgICAgYXBwbHlMaW1pdGluZyh0aGlzLmV2ZW50Qm9keUxpc3QuZmlsdGVyKGViID0+ICFlYi5kcmF3SW5mby5mbG9hdGVkKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRCb2R5TGlzdC5mb3JFYWNoKGViID0+IGViLmV4dHJhRGF0YS5zcGFjZSA9IHRoaXMuc3BhY2VNYXAuZ2V0KGViKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRXh0ZW5zaW9uLCBFeHRlbnNpb25NYW5hZ2VyIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2NvbW1vbi9Db21wb25lbnQnO1xyXG5pbXBvcnQgeyBERUJVRyB9IGZyb20gJy4uLy4uL2NvbW1vbi9kZWZpbml0aW9ucyc7XHJcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi8uLi9UaW1lbGluZSc7XHJcbmltcG9ydCB7IHdhbGtMb29wIH0gZnJvbSAnLi4vLi4vY29tbW9uL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBFdmVudEJvZHkyQXhpc01pbGVzdG9uZSBmcm9tICcuL0V2ZW50Qm9keTJBeGlzTWlsZXN0b25lJztcclxuaW1wb3J0IEV2ZW50QXhpczJFdmVudEF4aXMgZnJvbSAnLi9FdmVudEF4aXMyRXZlbnRBeGlzJztcclxuaW1wb3J0IEV2ZW50Qm9keTJFdmVudEJvZHlNb3ZlciBmcm9tICcuL0V2ZW50Qm9keTJFdmVudEJvZHlNb3Zlcic7XHJcbmltcG9ydCBFdmVudEJvZHkyRXZlbnRCb2R5RmxvYXRlciBmcm9tICcuL0V2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyJztcclxuaW1wb3J0IHsgQ29uZmxpY3RGaXhSZXN1bHQgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZsaWN0PFQgPSBDb21wb25lbnQ+e1xyXG4gICAgd2l0aDogVFtdO1xyXG4gICAgc2VsZjogVDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmxpY3RGaXhlciBpbXBsZW1lbnRzIFBhcnRpYWw8RXh0ZW5zaW9uPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZXh0OkV4dGVuc2lvbk1hbmFnZXIpIHt9XHJcblxyXG4gICAgZml4ZXJzIDp7IGZpeCgpOlByb21pc2U8Q29uZmxpY3RGaXhSZXN1bHQ+IH1bXSA9IFtcclxuICAgICAgICBuZXcgRXZlbnRCb2R5MkF4aXNNaWxlc3RvbmUodGhpcy5leHQpLFxyXG4gICAgICAgIG5ldyBFdmVudEF4aXMyRXZlbnRBeGlzKHRoaXMuZXh0KSxcclxuICAgICAgICBuZXcgRXZlbnRCb2R5MkV2ZW50Qm9keU1vdmVyKHRoaXMuZXh0KSxcclxuICAgICAgICBuZXcgRXZlbnRCb2R5MkV2ZW50Qm9keUZsb2F0ZXIodGhpcy5leHQpLFxyXG4gICAgXTtcclxuXHJcbiAgICBwcml2YXRlIGNvdW50ZXIgPSAwO1xyXG4gICAgYXN5bmMgb25BcHBseSh0aW1lbGluZTpDb21wb25lbnQpIHtcclxuICAgICAgICBpZiAoIVRpbWVsaW5lLmlzKHRpbWVsaW5lKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChhd2FpdCB0aGlzLmZpeEFsbCgpID09PSBDb25mbGljdEZpeFJlc3VsdC5Ob0NvbmZsaWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgrK3RoaXMuY291bnRlciA+IDEwKSB7IC8vIFRPRE86IG1ha2UgY29uZmlndXJhYmxlXHJcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9ICdUb28gbWFueSB0aW1lcyBvZiB0cnkgZml4IGNvbmZsaWN0Lic7XHJcblxyXG4gICAgICAgICAgICBpZiAoREVCVUcpIHRocm93IG5ldyBFcnJvcihtc2cpO1xyXG4gICAgICAgICAgICBlbHNlIGNvbnNvbGUud2Fybihtc2cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGltZWxpbmUuYXBwbHkoe1xyXG4gICAgICAgICAgICBheGlzTGVuZ3RoOiB0aW1lbGluZS5ydW50aW1lLmF4aXNMZW5ndGggKiAxLjEsXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmaXhBbGwoKTpQcm9taXNlPENvbmZsaWN0Rml4UmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHdhbGtMb29wKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZpeGVyIG9mIHRoaXMuZml4ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goYXdhaXQgZml4ZXIuZml4KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBFeHRlbnNpb24sIEV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tICcuLyc7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XHJcbmltcG9ydCB7IERFQlVHIH0gZnJvbSAnLi4vY29tbW9uL2RlZmluaXRpb25zJztcclxuXHJcbi8qKlxyXG4gKiBTZXQgYSBpZCBmb3IgZXZlcnkgQ29tcG9uZW50IGluIGNvbXBvbmVudC5leHRyYURhdGEuaWQuXHJcbiAqIENyZWF0ZSBhIGdsb2JhbCB2YXJpYWJsZSB1c2luZyBjb21wb25lbnQncyBpZCBpZiBERUJVRyBpcyB0cnVlIHdoZW4gY29tcC5hcHBseSBmaXJlZFxyXG4gKiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmF0b3JJZCBpbXBsZW1lbnRzIFBhcnRpYWw8RXh0ZW5zaW9uPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZXR4OkV4dGVuc2lvbk1hbmFnZXIpIHt9XHJcbiAgICAvKipcclxuICAgICAqIFNldCBjb21wb25lbnQuZXh0cmFEYXRhLmlkXHJcbiAgICAgKiAqL1xyXG4gICAgb25Db25zdHJ1Y3QoY29tcDpDb21wb25lbnQpIHtcclxuICAgICAgICBjb25zdCByYW5kb21TdHJpbmcgOnN0cmluZyA9XHJcbiAgICAgICAgICAgIE51bWJlcihNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXSlcclxuICAgICAgICAgICAgICAgIC50b1N0cmluZygzNilcclxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCA1KVxyXG4gICAgICAgIDtcclxuICAgICAgICAvLyBOb3cgY29tcC5uYW1lIGlzIHVuZGVmaW5lZFxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb21wLmV4dHJhRGF0YSwgJ2lkJywge1xyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Y29tcC5uYW1lfV8ke3JhbmRvbVN0cmluZ31gO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBpbiBkZWJ1ZyBtb2RlLCBzZXQgYSBnbG9iYWwgdmFyaWFibGVcclxuICAgICAqIGZyb20gY29tcG9uZW50LmV4dHJhRGF0YS5pZCB0byBwb2ludCB0aGUgY29tcG9uZW50LlxyXG4gICAgICogKi9cclxuICAgIGFzeW5jIG9uQXBwbHkoY29tcDpDb21wb25lbnQpIHtcclxuICAgICAgICBpZiAoREVCVUcpICg8YW55PndpbmRvdylbY29tcC5leHRyYURhdGEuaWQhXSA9IGNvbXA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgREVCVUcsIFNOIH0gZnJvbSAnQC9lbmdpbmUvY29tbW9uL2RlZmluaXRpb25zJztcclxuaW1wb3J0IEJveEVsZW1lbnRHZW5lcmF0b3IgZnJvbSAnQC9lbmdpbmUvZXh0ZW5zaW9ucy9Cb3hFbGVtZW50R2VuZXJhdG9yJztcclxuaW1wb3J0IEdlbmVyYXRvcklkIGZyb20gJ0AvZW5naW5lL2V4dGVuc2lvbnMvR2VuZXJhdG9ySWQnO1xyXG5pbXBvcnQgUG9zaXRpb25Db3VudGVyIGZyb20gJ0AvZW5naW5lL2V4dGVuc2lvbnMvcG9zaXRpb24tY291bnRlcic7XHJcbmltcG9ydCBCcmVha3BvaW50QW5pbWF0aW9uIGZyb20gJ0AvZW5naW5lL2V4dGVuc2lvbnMvQnJlYWtwb2ludEFuaW1hdGlvbic7XHJcbmltcG9ydCBDb25mbGljdEZpeGVyIGZyb20gJ0AvZW5naW5lL2V4dGVuc2lvbnMvQ29uZmxpY3RGaXhlcic7XHJcbmltcG9ydCBBeGlzQm9keSBmcm9tICdAL2VuZ2luZS9BeGlzL0F4aXNCb2R5JztcclxuaW1wb3J0IEF4aXNNaWxlc3RvbmUgZnJvbSAnQC9lbmdpbmUvQXhpcy9BeGlzTWlsZXN0b25lJztcclxuaW1wb3J0IEF4aXNTY2FsZSBmcm9tICdAL2VuZ2luZS9BeGlzL0F4aXNTY2FsZSc7XHJcbmltcG9ydCBFdmVudEJvZHkgZnJvbSAnQC9lbmdpbmUvRXZlbnQvRXZlbnRCb2R5JztcclxuaW1wb3J0IEV2ZW50QXhpcyBmcm9tICdAL2VuZ2luZS9FdmVudC9FdmVudEF4aXMnO1xyXG5pbXBvcnQgRXZlbnRNYXJrIGZyb20gJ0AvZW5naW5lL0V2ZW50L0V2ZW50TWFyayc7XHJcbmltcG9ydCBBeGlzIGZyb20gJ0AvZW5naW5lL0F4aXMnO1xyXG5pbXBvcnQgRXZlbnQgZnJvbSAnQC9lbmdpbmUvRXZlbnQnO1xyXG5cclxuY29uc3QgTUVUSE9EUyA9IFsnb25Db25zdHJ1Y3QnLCAnb25BcHBseScsICdvbkRlc3Ryb3knLCAnb25IaWRlJywgJ29uRHJhdyddO1xyXG5cclxuLyoqXHJcbiAqIE1hbmFnZSBFeHRlbnNpb25NYW5hZ2VyI2NvbXBvbmVudHMuXHJcbiAqICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGV0eCkge1xyXG4gICAgICAgIHRoaXMuZXR4ID0gZXR4O1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29uc3RydWN0KGNvbXApIHtcclxuICAgICAgICB0aGlzLmV0eC5jb21wb25lbnRzW2NvbXAubmFtZV0ucHVzaChjb21wKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koY29tcCkge1xyXG4gICAgICAgIHRoaXMuZXR4LmNvbXBvbmVudHNbY29tcC5uYW1lXS5zcGxpY2UoXHJcbiAgICAgICAgICAgIHRoaXMuZXR4LmNvbXBvbmVudHNbY29tcC5uYW1lXS5pbmRleE9mKGNvbXApLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBFeHRlbnNpb25NYW5hZ2VyXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRXh0ZW5zaW9uTWFuYWdlcih7IGJyZWFrcG9pbnRBbmltYXRpb24gfSA9IHt9KSB7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgW1NOLlRpbWVsaW5lXTogW10sXHJcbiAgICAgICAgW1NOLkF4aXNdOiBbXSxcclxuICAgICAgICBbU04uQXhpc0JvZHldOiBbXSxcclxuICAgICAgICBbU04uQXhpc1NjYWxlXTogW10sXHJcbiAgICAgICAgW1NOLkF4aXNNaWxlc3RvbmVdOiBbXSxcclxuICAgICAgICBbU04uRXZlbnRdOiBbXSxcclxuICAgICAgICBbU04uRXZlbnRCb2R5XTogW10sXHJcbiAgICAgICAgW1NOLkV2ZW50TWFya106IFtdLFxyXG4gICAgICAgIFtTTi5FdmVudEF4aXNdOiBbXSxcclxuICAgIH07XHJcbiAgICB0aGlzLmJyZWFrcG9pbnQgPSBuZXcgQnJlYWtwb2ludEFuaW1hdGlvbih0aGlzLCBicmVha3BvaW50QW5pbWF0aW9uKTtcclxuXHJcbiAgICB0aGlzLmV4dGVuc2lvbnMgPSBbXHJcbiAgICAgICAgbmV3IEJhc2UodGhpcyksXHJcbiAgICAgICAgbmV3IEdlbmVyYXRvcklkKHRoaXMpLFxyXG4gICAgICAgIG5ldyBQb3NpdGlvbkNvdW50ZXIodGhpcyksXHJcbiAgICAgICAgbmV3IENvbmZsaWN0Rml4ZXIodGhpcyksXHJcbiAgICAgICAgdGhpcy5icmVha3BvaW50LFxyXG4gICAgXTtcclxuXHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbnMucHVzaChcclxuICAgICAgICAgICAgbmV3IEJveEVsZW1lbnRHZW5lcmF0b3IodGhpcyksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5FeHRlbnNpb25NYW5hZ2VyLnByb3RvdHlwZS5nZXRQYXJlbnQgPSBmdW5jdGlvbiBnZXRQYXJlbnQoY29tcCkge1xyXG4gICAgaWYgKEF4aXMuaXMoY29tcCkpIHJldHVybiB0aGlzLmNvbXBvbmVudHNbU04uVGltZWxpbmVdWzBdO1xyXG4gICAgaWYgKEV2ZW50LmlzKGNvbXApKSByZXR1cm4gdGhpcy5jb21wb25lbnRzW1NOLlRpbWVsaW5lXVswXTtcclxuICAgIGlmIChBeGlzQm9keS5pcyhjb21wKSkgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tTTi5BeGlzXVswXTtcclxuICAgIGlmIChBeGlzTWlsZXN0b25lLmlzKGNvbXApKSByZXR1cm4gdGhpcy5jb21wb25lbnRzW1NOLkF4aXNdWzBdO1xyXG4gICAgaWYgKEF4aXNTY2FsZS5pcyhjb21wKSkgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tTTi5BeGlzXVswXTtcclxuICAgIGlmIChFdmVudEJvZHkuaXMoY29tcCkpIHJldHVybiB0aGlzLmNvbXBvbmVudHNbU04uRXZlbnRdLmZpbmQoZXZlbnQgPT4gZXZlbnQuYm9keSA9PT0gY29tcCk7XHJcbiAgICBpZiAoRXZlbnRBeGlzLmlzKGNvbXApKSByZXR1cm4gdGhpcy5jb21wb25lbnRzW1NOLkV2ZW50XS5maW5kKGV2ZW50ID0+IGV2ZW50LmF4aXMgPT09IGNvbXApO1xyXG4gICAgaWYgKEV2ZW50TWFyay5pcyhjb21wKSkgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tTTi5FdmVudF0uZmluZChldmVudCA9PiBldmVudC5tYXJrID09PSBjb21wKTtcclxuXHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBDYW5ub3QgZmluZCBwYXJlbnQgb2YgJHtjb21wLmNvbnN0cnVjdG9yLm5hbWV9YCk7XHJcbn07XHJcblxyXG4vLyBBZGQgbWV0aG9kcyBvbiBFeHRlbnNpb25NYW5hZ2VyLnByb3RvdHlwZSBmcm9tIE1FVEhPRFNcclxuTUVUSE9EUy5mb3JFYWNoKChtZXRob2ROYW1lKSA9PiB7XHJcbiAgICBFeHRlbnNpb25NYW5hZ2VyLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGFzeW5jIGZ1bmN0aW9uIGV4dGVuc2lvbk1hbmFnZXJNZXRob2QoLi4uYXJncykge1xyXG4gICAgICAgIGZvciAoY29uc3QgZXh0ZW5zaW9uIG9mIHRoaXMuZXh0ZW5zaW9ucykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICAgICAgICAgIGlmIChtZXRob2ROYW1lIGluIGV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdvbkNvbnN0cnVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25bbWV0aG9kTmFtZV0oLi4uYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGV4dGVuc2lvblttZXRob2ROYW1lXSguLi5hcmdzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1hd2FpdC1pbi1sb29wXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94RWxlbWVudEdlbmVyYXRvciB9IGZyb20gJ0AvZW5naW5lL2V4dGVuc2lvbnMvQm94RWxlbWVudEdlbmVyYXRvcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2VuZXJhdG9ySWQgfSBmcm9tICdAL2VuZ2luZS9leHRlbnNpb25zL0dlbmVyYXRvcklkJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQb3NpdGlvbkNvdW50ZXIgfSBmcm9tICdAL2VuZ2luZS9leHRlbnNpb25zL3Bvc2l0aW9uLWNvdW50ZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJyZWFrcG9pbnRBbmltYXRpb24gfSBmcm9tICdAL2VuZ2luZS9leHRlbnNpb25zL0JyZWFrcG9pbnRBbmltYXRpb24nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbmZsaWN0Rml4ZXIgfSBmcm9tICdAL2VuZ2luZS9leHRlbnNpb25zL0NvbmZsaWN0Rml4ZXInO1xyXG4iLCJpbXBvcnQgeyBFeHRlbnNpb24sIEV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcclxuaW1wb3J0IEF4aXMgZnJvbSAnLi4vQXhpcyc7XHJcbmltcG9ydCBBeGlzTWlsZXN0b25lIGZyb20gJy4uL0F4aXMvQXhpc01pbGVzdG9uZSc7XHJcbmltcG9ydCB7IG1lcmdlQm94IH0gZnJvbSAnLi4vY29tbW9uL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IEJyZWFrcG9pbnQgfSBmcm9tICcuL0JyZWFrcG9pbnRBbmltYXRpb24nO1xyXG5pbXBvcnQgeyBTTiB9IGZyb20gJy4uL2NvbW1vbi9kZWZpbml0aW9ucyc7XHJcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9UaW1lbGluZSc7XHJcbmltcG9ydCBBeGlzU2NhbGUgZnJvbSAnLi4vQXhpcy9BeGlzU2NhbGUnO1xyXG5cclxuaW50ZXJmYWNlIFB1c2hDb25maWd7XHJcbiAgICBjcml0aWNhbDogbnVtYmVyO1xyXG4gICAgYWRkaXRpb25hbDogbnVtYmVyO1xyXG4gICAgY29tcG9uZW50OiBDb21wb25lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNaWxlc3RvbmUgY2Fubm90IG9jY3VweSB0aGUgc3BhY2Ugb2YgQXhpcy5cclxuICogU28gd2UgbW92ZSBFdmVudCwgU2NhbGUgYW5kIE1pbGVzdG9uZSBpZiB0aGV5IHVwcGVyIGhhcyBhbnkgTWlsZXN0b25lLlxyXG4gKiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbkNvdW50ZXIgaW1wbGVtZW50cyBQYXJ0aWFsPEV4dGVuc2lvbj4ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGV0eDpFeHRlbnNpb25NYW5hZ2VyKSB7fVxyXG5cclxuICAgIGFzeW5jIGFkanVzdEF4aXMoYXhpczpBeGlzKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRDb21wb25lbnRzID0gW1xyXG4gICAgICAgICAgICBheGlzLmJvZHksXHJcbiAgICAgICAgICAgIC4uLmF4aXMuc2NhbGVzLFxyXG4gICAgICAgICAgICAuLi5heGlzLm1pbGVzdG9uZXMsXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gTWlsZXN0b25lIGNhbm5vdCBvY2N1cHkgdGhlIHNwYWNlIG9mIEF4aXNcclxuICAgICAgICBheGlzLmV4dHJhRGF0YS5yZWFsTGVuZ3RoID1cclxuICAgICAgICAgICAgYXhpcy5kcmF3SW5mby5sZW5ndGhcclxuICAgICAgICAgICAgLSBheGlzLm1pbGVzdG9uZXMucmVkdWNlKCAvLyBSZXNlcnZlZCBzcGFjZSBmb3IgTWlsZXN0b25lXHJcbiAgICAgICAgICAgICAgICAoaDpudW1iZXIsIG06IEF4aXNNaWxlc3RvbmUpID0+IGggKyBtLmRyYXdJbmZvLmJveC5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgO1xyXG5cclxuICAgICAgICAvLyBTZXQgcmVhbCBZIGluIG1pbGVzdG9uZXMgYW5kIHNjYWxlc1xyXG4gICAgICAgIGF4aXMubWlsZXN0b25lcy5mb3JFYWNoKG0gPT4gbS5kcmF3SW5mby5hbGlnblkgKj0gYXhpcy5leHRyYURhdGEucmVhbExlbmd0aCEpO1xyXG4gICAgICAgIGF4aXMuc2NhbGVzLmZvckVhY2gocyA9PiBzLmRyYXdJbmZvLmFsaWduWSAqPSBheGlzLmV4dHJhRGF0YS5yZWFsTGVuZ3RoISk7XHJcblxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFsuLi5heGlzLm1pbGVzdG9uZXMsIC4uLmF4aXMuc2NhbGVzXS5tYXAoYyA9PiBjLmFwcGx5KCkpKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IFB1c2gtY29uZmlnXHJcbiAgICAgICAgYXhpcy5taWxlc3RvbmVzLmZvckVhY2gobWlsZXN0b25lID0+IHRoaXMuYWRkUHVzaENvbmZpZyh7XHJcbiAgICAgICAgICAgIGNyaXRpY2FsOiBtaWxlc3RvbmUuZHJhd0luZm8uYm94LnksXHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWw6IG1pbGVzdG9uZS5kcmF3SW5mby5ib3guaGVpZ2h0LFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6IG1pbGVzdG9uZSxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIC8vIFB1c2ggbWlsZXN0b25lcyBhbmQgc2NhbGVzXHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuZXR4LmJyZWFrcG9pbnQuYmxvY2soQnJlYWtwb2ludC5QdXNoU2NhbGVzQW5kTWlsZXN0b25lcywge1xyXG4gICAgICAgICAgICBjb21wb25lbnRzOiBjaGlsZENvbXBvbmVudHMsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHB1c2hUYXJnZXQgOihBeGlzTWlsZXN0b25lfEF4aXNTY2FsZSlbXSA9XHJcbiAgICAgICAgICAgIFsuLi5heGlzLm1pbGVzdG9uZXMsIC4uLmF4aXMuc2NhbGVzXS5zb3J0KFxyXG4gICAgICAgICAgICAgICAgKGNvbXAxLCBjb21wMikgPT4gY29tcDEuZHJhd0luZm8uYWxpZ25ZIC0gY29tcDIuZHJhd0luZm8uYWxpZ25ZLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29tcCBvZiBwdXNoVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5jb3VudENyaXRpY2FsKGNvbXAuZHJhd0luZm8uYWxpZ25ZKTtcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID09PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb21wLm5hbWUgPT09IFNOLkF4aXNNaWxlc3RvbmUpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHB1c2hUYXJnZXQubWFwKGNvbXAgPT4gY29tcC5hcHBseSgpKSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmV0eC5icmVha3BvaW50LmJsb2NrKEJyZWFrcG9pbnQuUHVzaFNjYWxlc0FuZE1pbGVzdG9uZXMsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzOiBjaGlsZENvbXBvbmVudHMsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29tcC5kcmF3SW5mby5hbGlnblkgKz0gZGlzdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwdXNoVGFyZ2V0Lm1hcChjb21wID0+IGNvbXAuYXBwbHkoKSkpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZXR4LmJyZWFrcG9pbnQuYmxvY2soQnJlYWtwb2ludC5QdXNoU2NhbGVzQW5kTWlsZXN0b25lcywge1xyXG4gICAgICAgICAgICBjb21wb25lbnRzOiBjaGlsZENvbXBvbmVudHMsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGNoaWxkQ29tcG9uZW50cy5tYXAoYyA9PiBjLmFwcGx5KCkpKTtcclxuXHJcbiAgICAgICAgYXhpcy5kcmF3SW5mby5ib3ggPSBtZXJnZUJveCguLi5jaGlsZENvbXBvbmVudHMubWFwKGMgPT4gYy5kcmF3SW5mby5ib3gpKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGFkanVzdEV2ZW50KHRpbWVsaW5lOlRpbWVsaW5lKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGltZWxpbmUuZXZlbnRzO1xyXG4gICAgICAgIGNvbnN0IGF4aXMgPSB0aGlzLmV0eC5jb21wb25lbnRzW1NOLkF4aXNdWzBdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xyXG4gICAgICAgICAgICBldmVudC5kcmF3SW5mby50YXJnZXQueSAqPSBheGlzLmV4dHJhRGF0YS5yZWFsTGVuZ3RoITtcclxuICAgICAgICAgICAgZXZlbnQuZHJhd0luZm8udGFyZ2V0LnkgKz0gYXhpcy5ib2R5LmRyYXdJbmZvLmJveC55O1xyXG4gICAgICAgICAgICBldmVudC5kcmF3SW5mby50YXJnZXQueSArPSB0aGlzLmNvdW50Q3JpdGljYWwoZXZlbnQuZHJhd0luZm8udGFyZ2V0LnkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV2ZW50LmRyYXdJbmZvLmF4aXNMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmRyYXdJbmZvLmF4aXNMZW5ndGggKj0gYXhpcy5leHRyYURhdGEucmVhbExlbmd0aCE7XHJcbiAgICAgICAgICAgICAgICBldmVudC5kcmF3SW5mby5heGlzTGVuZ3RoICs9IHRoaXMuY291bnRDcml0aWNhbChldmVudC5kcmF3SW5mby50YXJnZXQueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGV2ZW50cy5tYXAoZXZlbnQgPT4gZXZlbnQuYXBwbHkoKSkpO1xyXG5cclxuICAgIH1cclxuICAgIGFzeW5jIG9uQXBwbHkoY29tcDpDb21wb25lbnQpIHtcclxuICAgICAgICBpZiAoQXhpcy5pcyhjb21wKSkgcmV0dXJuIGF3YWl0IHRoaXMuYWRqdXN0QXhpcyhjb21wKTtcclxuICAgICAgICBpZiAoVGltZWxpbmUuaXMoY29tcCkpIHJldHVybiBhd2FpdCB0aGlzLmFkanVzdEV2ZW50KGNvbXApO1xyXG4gICAgfVxyXG4gICAgb25EZXN0cm95KGNvbXA6Q29tcG9uZW50KSB7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnB1c2hDb25maWdzLmZpbmRJbmRleChjb25maWcgPT4gY29uZmlnLmNvbXBvbmVudCA9PT0gY29tcCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSBicmVhaztcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnB1c2hDb25maWdzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHVzaENvbmZpZ3M6UHVzaENvbmZpZ1tdID0gW107XHJcbiAgICBwcml2YXRlIGFkZFB1c2hDb25maWcoY29uZmlnOlB1c2hDb25maWcpIHtcclxuICAgICAgICB0aGlzLnB1c2hDb25maWdzLnB1c2goY29uZmlnKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY291bnRDcml0aWNhbChudW06bnVtYmVyKTpudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLnB1c2hDb25maWdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdXNoQ29uZmlncy5yZWR1Y2UoKHJlc3VsdDpudW1iZXIsIGNvbmZpZzpQdXNoQ29uZmlnKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBudW0gPiBjb25maWcuY3JpdGljYWwgPyByZXN1bHQgKyBjb25maWcuYWRkaXRpb25hbCA6cmVzdWx0O1xyXG4gICAgICAgIH0gLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAwKTtcclxuICAgIH1cclxufVxyXG4iLCJjb25zb2xlLmxvZygnVGhlIG5pZ2h0IGlzIHNob3J0LCB3YWxrIG9uIGdpcmwuJyk7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaW1lbGluZSB9IGZyb20gJy4vVGltZWxpbmUnO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBeGlzIH0gZnJvbSAnLi9BeGlzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBeGlzU2NhbGUgfSBmcm9tICcuL0F4aXMvQXhpc1NjYWxlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBeGlzTWlsZXN0b25lIH0gZnJvbSAnLi9BeGlzL0F4aXNNaWxlc3RvbmUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEF4aXNCb2R5IH0gZnJvbSAnLi9BeGlzL0F4aXNCb2R5JztcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXZlbnQgfSBmcm9tICcuL0V2ZW50JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdmVudE1hcmsgfSBmcm9tICcuL0V2ZW50L0V2ZW50TWFyayc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXZlbnRBeGlzIH0gZnJvbSAnLi9FdmVudC9FdmVudEF4aXMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEV2ZW50Qm9keSB9IGZyb20gJy4vRXZlbnQvRXZlbnRCb2R5JztcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tb24vQ29tcG9uZW50JztcclxuZXhwb3J0IHtcclxuICAgIEV4dGVuc2lvbk1hbmFnZXIsXHJcbiAgICBCb3hFbGVtZW50R2VuZXJhdG9yLFxyXG4gICAgR2VuZXJhdG9ySWQsXHJcbiAgICBQb3NpdGlvbkNvdW50ZXIsXHJcbiAgICBCcmVha3BvaW50QW5pbWF0aW9uLFxyXG4gICAgQ29uZmxpY3RGaXhlcixcclxufSBmcm9tICcuL2V4dGVuc2lvbnMnO1xyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBFbmdpbmUgZnJvbSAnQGVuZ2luZSc7XHJcbmltcG9ydCB7IFJvdWdoQ2FudmFzIH0gZnJvbSAncm91Z2hqcy9iaW4vY2FudmFzJztcclxuaW1wb3J0IHsgQ29sb3JzQ29uc3RydWN0b3JJbmZvIH0gZnJvbSAnQC90aGVtZXMvY29sb3JzL1RpbWVsaW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aXNCb2R5IGV4dGVuZHMgRW5naW5lLkF4aXNCb2R5IHtcclxuICAgIHRoZW1lID0gJ2NvbG9ycyc7XHJcblxyXG4gICAgcm91Z2hDYW52YXM6Um91Z2hDYW52YXM7XHJcbiAgICBjb25zdHJ1Y3RvcihpbmZvOkNvbG9yc0NvbnN0cnVjdG9ySW5mbykge1xyXG4gICAgICAgIHN1cGVyKGluZm8pO1xyXG4gICAgICAgIHRoaXMucm91Z2hDYW52YXMgPSBpbmZvLnJvdWdoQ2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5kcmF3SW5mby5ib3g7XHJcblxyXG4gICAgICAgIHRoaXMucm91Z2hDYW52YXMubGluZShcclxuICAgICAgICAgICAgYm94LnggKyBib3gud2lkdGggLyAyLFxyXG4gICAgICAgICAgICBib3gueSxcclxuICAgICAgICAgICAgYm94LnggKyBib3gud2lkdGggLyAyLFxyXG4gICAgICAgICAgICBib3gueSArIGJveC5oZWlnaHQsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBib3gud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6ICcjMzMzJyxcclxuICAgICAgICAgICAgICAgIGhhY2h1cmVHYXA6IDAsXHJcbiAgICAgICAgICAgICAgICByb3VnaG5lc3M6IDAuMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gc3VwZXIuZHJhdygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIEVuZ2luZSBmcm9tICdAZW5naW5lJztcclxuaW1wb3J0IHsgUm91Z2hDYW52YXMgfSBmcm9tICdyb3VnaGpzL2Jpbi9jYW52YXMnO1xyXG5pbXBvcnQgeyBDb2xvcnNDb25zdHJ1Y3RvckluZm8gfSBmcm9tICdAL3RoZW1lcy9jb2xvcnMvVGltZWxpbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpc01pbGVzdG9uZSBleHRlbmRzIEVuZ2luZS5BeGlzTWlsZXN0b25lIHtcclxuICAgIHRoZW1lID0gJ2NvbG9ycyc7XHJcblxyXG4gICAgcm91Z2hDYW52YXM6Um91Z2hDYW52YXM7XHJcbiAgICBjb25zdHJ1Y3RvcihpbmZvOkNvbG9yc0NvbnN0cnVjdG9ySW5mbykge1xyXG4gICAgICAgIHN1cGVyKGluZm8pO1xyXG4gICAgICAgIHRoaXMucm91Z2hDYW52YXMgPSBpbmZvLnJvdWdoQ2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5kcmF3SW5mby5ib3g7XHJcblxyXG4gICAgICAgIHRoaXMucm91Z2hDYW52YXMucmVjdGFuZ2xlKFxyXG4gICAgICAgICAgICBib3gueCxcclxuICAgICAgICAgICAgYm94LnksXHJcbiAgICAgICAgICAgIGJveC53aWR0aCxcclxuICAgICAgICAgICAgYm94LmhlaWdodCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAnIzMzMycsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMS41LFxyXG5cclxuICAgICAgICAgICAgICAgIGZpbGw6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIGZpbGxXZWlnaHQ6IDAuNSxcclxuICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ3NvbGlkJyxcclxuXHJcbiAgICAgICAgICAgICAgICBoYWNodXJlR2FwOiAyLFxyXG4gICAgICAgICAgICAgICAgcm91Z2huZXNzOiAwLjcsXHJcbiAgICAgICAgICAgICAgICBib3dpbmc6IDAuNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBzdXBlci5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgRW5naW5lIGZyb20gJ0BlbmdpbmUnO1xyXG5pbXBvcnQgeyBSb3VnaENhbnZhcyB9IGZyb20gJ3JvdWdoanMvYmluL2NhbnZhcyc7XHJcbmltcG9ydCB7IENvbG9yc0NvbnN0cnVjdG9ySW5mbyB9IGZyb20gJ0AvdGhlbWVzL2NvbG9ycy9UaW1lbGluZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlzU2NhbGUgZXh0ZW5kcyBFbmdpbmUuQXhpc1NjYWxlIHtcclxuICAgIHRoZW1lID0gJ2NvbG9ycyc7XHJcblxyXG4gICAgcm91Z2hDYW52YXM6Um91Z2hDYW52YXM7XHJcbiAgICBjb25zdHJ1Y3RvcihpbmZvOkNvbG9yc0NvbnN0cnVjdG9ySW5mbykge1xyXG4gICAgICAgIHN1cGVyKGluZm8pO1xyXG4gICAgICAgIHRoaXMucm91Z2hDYW52YXMgPSBpbmZvLnJvdWdoQ2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5kcmF3SW5mby5ib3g7XHJcblxyXG4gICAgICAgIHRoaXMucm91Z2hDYW52YXMucmVjdGFuZ2xlKFxyXG4gICAgICAgICAgICBib3gueCxcclxuICAgICAgICAgICAgYm94LnksXHJcbiAgICAgICAgICAgIGJveC53aWR0aCxcclxuICAgICAgICAgICAgYm94LmhlaWdodCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6ICdyZ2JhKDAsMCwwLDApJyxcclxuXHJcbiAgICAgICAgICAgICAgICBmaWxsOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBmaWxsV2VpZ2h0OiAwLjMsXHJcbiAgICAgICAgICAgICAgICBmaWxsU3R5bGU6ICdzb2xpZCcsXHJcblxyXG4gICAgICAgICAgICAgICAgaGFjaHVyZUdhcDogMCxcclxuICAgICAgICAgICAgICAgIHJvdWdobmVzczogMCxcclxuICAgICAgICAgICAgICAgIGJvd2luZzogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBzdXBlci5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgRW5naW5lIGZyb20gJ0BlbmdpbmUnO1xyXG5pbXBvcnQgeyBSb3VnaENhbnZhcyB9IGZyb20gJ3JvdWdoanMvYmluL2NhbnZhcyc7XHJcbmltcG9ydCB7IENvbG9yc0NvbnN0cnVjdG9ySW5mbyB9IGZyb20gJ0AvdGhlbWVzL2NvbG9ycy9UaW1lbGluZSc7XHJcbmltcG9ydCBBeGlzQm9keSBmcm9tICcuL0F4aXNCb2R5JztcclxuaW1wb3J0IEF4aXNNaWxlc3RvbmUgZnJvbSAnLi9BeGlzTWlsZXN0b25lJztcclxuaW1wb3J0IEF4aXNTY2FsZSBmcm9tICcuL0F4aXNTY2FsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlzIGV4dGVuZHMgRW5naW5lLkF4aXMge1xyXG4gICAgdGhlbWUgPSAnY29sb3JzJztcclxuXHJcbiAgICByb3VnaENhbnZhczpSb3VnaENhbnZhcztcclxuICAgIGNvbnN0cnVjdG9yKGluZm86Q29sb3JzQ29uc3RydWN0b3JJbmZvKSB7XHJcbiAgICAgICAgc3VwZXIoaW5mbyk7XHJcbiAgICAgICAgdGhpcy5yb3VnaENhbnZhcyA9IGluZm8ucm91Z2hDYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgYm9keUNvbnN0cnVjdG9yID0gQXhpc0JvZHk7XHJcbiAgICBtaWxlc3RvbmVDb25zdHJ1Y3RvciA9IEF4aXNNaWxlc3RvbmU7XHJcbiAgICBzY2FsZUNvbnN0cnVjdG9yID0gQXhpc1NjYWxlO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBFbmdpbmUgZnJvbSAnQGVuZ2luZSc7XHJcbmltcG9ydCB7IFJvdWdoQ2FudmFzIH0gZnJvbSAncm91Z2hqcy9iaW4vY2FudmFzJztcclxuaW1wb3J0IHsgQ29sb3JzQ29uc3RydWN0b3JJbmZvIH0gZnJvbSAnQC90aGVtZXMvY29sb3JzL1RpbWVsaW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50QXhpcyBleHRlbmRzIEVuZ2luZS5FdmVudEF4aXMge1xyXG4gICAgdGhlbWUgPSAnY29sb3JzJztcclxuXHJcbiAgICByb3VnaENhbnZhczpSb3VnaENhbnZhcztcclxuICAgIGNvbnN0cnVjdG9yKGluZm86Q29sb3JzQ29uc3RydWN0b3JJbmZvKSB7XHJcbiAgICAgICAgc3VwZXIoaW5mbyk7XHJcbiAgICAgICAgdGhpcy5yb3VnaENhbnZhcyA9IGluZm8ucm91Z2hDYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0luZm86IEVuZ2luZS5FdmVudEF4aXNbJ2RyYXdJbmZvJ10gJiB7bWFpbkNvbG9yOnN0cmluZ30gPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHRoaXMuZHJhd0luZm8sXHJcbiAgICAgICAgeyBtYWluQ29sb3I6ICcnIH0sXHJcbiAgICApO1xyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgY29uc3Qgc3Ryb2tlV2lkdGggPSAxLjU7XHJcbiAgICAgICAgY29uc3QgcmFkaXVzID0gMTA7XHJcblxyXG4gICAgICAgIHRoaXMucm91Z2hDYW52YXMubGluZWFyUGF0aChcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgW3RoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC54LCB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueV0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnggKyB0aGlzLmRyYXdJbmZvLm9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnksXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC54ICsgdGhpcy5kcmF3SW5mby5vZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55IC0gdGhpcy5kcmF3SW5mby5sZW5ndGggKyByYWRpdXMgLyAyLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IHRoaXMuZHJhd0luZm8ubWFpbkNvbG9yLFxyXG5cclxuICAgICAgICAgICAgICAgIHJvdWdobmVzczogMC43LFxyXG4gICAgICAgICAgICAgICAgYm93aW5nOiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucm91Z2hDYW52YXMuY2lyY2xlKFxyXG4gICAgICAgICAgICB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueCArIHRoaXMuZHJhd0luZm8ub2Zmc2V0WCxcclxuICAgICAgICAgICAgdGhpcy5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgLSB0aGlzLmRyYXdJbmZvLmxlbmd0aCxcclxuICAgICAgICAgICAgcmFkaXVzLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aCxcclxuICAgICAgICAgICAgICAgIHN0cm9rZTogdGhpcy5kcmF3SW5mby5tYWluQ29sb3IsXHJcblxyXG4gICAgICAgICAgICAgICAgcm91Z2huZXNzOiAwLjIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0ICogYXMgRW5naW5lIGZyb20gJ0BlbmdpbmUnO1xyXG5pbXBvcnQgeyBSb3VnaENhbnZhcyB9IGZyb20gJ3JvdWdoanMvYmluL2NhbnZhcyc7XHJcbmltcG9ydCB7IENvbG9yc0NvbnN0cnVjdG9ySW5mbyB9IGZyb20gJ0AvdGhlbWVzL2NvbG9ycy9UaW1lbGluZSc7XHJcbmltcG9ydCB7IHNocmlua0JveCB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2Z1bmN0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJvZHkgZXh0ZW5kcyBFbmdpbmUuRXZlbnRCb2R5IHtcclxuICAgIHRoZW1lID0gJ2NvbG9ycyc7XHJcblxyXG4gICAgcm91Z2hDYW52YXM6Um91Z2hDYW52YXM7XHJcbiAgICBjb25zdHJ1Y3RvcihpbmZvOkNvbG9yc0NvbnN0cnVjdG9ySW5mbykge1xyXG4gICAgICAgIHN1cGVyKGluZm8pO1xyXG4gICAgICAgIHRoaXMucm91Z2hDYW52YXMgPSBpbmZvLnJvdWdoQ2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdJbmZvOiBFbmdpbmUuRXZlbnRCb2R5WydkcmF3SW5mbyddICYge21haW5Db2xvcjpzdHJpbmd9ID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICB7fSxcclxuICAgICAgICB0aGlzLmRyYXdJbmZvLFxyXG4gICAgICAgIHsgbWFpbkNvbG9yOiAnJyB9LFxyXG4gICAgKTtcclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIGNvbnN0IHN0cm9rZVdpZHRoID0gMS41O1xyXG4gICAgICAgIGNvbnN0IGJveCA9IHNocmlua0JveCh0aGlzLmRyYXdJbmZvLmJveCwgc3Ryb2tlV2lkdGgpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdWdoQ2FudmFzLnJlY3RhbmdsZShcclxuICAgICAgICAgICAgYm94LngsXHJcbiAgICAgICAgICAgIGJveC55LFxyXG4gICAgICAgICAgICBib3gud2lkdGgsXHJcbiAgICAgICAgICAgIGJveC5oZWlnaHQsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcblxyXG4gICAgICAgICAgICAgICAgZmlsbDogdGhpcy5kcmF3SW5mby5tYWluQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBmaWxsV2VpZ2h0OiAwLjUsXHJcbiAgICAgICAgICAgICAgICBmaWxsU3R5bGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3VnaENhbnZhcy5saW5lKFxyXG4gICAgICAgICAgICB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueCArIDIsXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55LFxyXG4gICAgICAgICAgICB0aGlzLmRyYXdJbmZvLmJveC54ICsgdGhpcy5kcmF3SW5mby5ib3gud2lkdGggLSAyLFxyXG4gICAgICAgICAgICB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICByb3VnaG5lc3M6IDEuMyxcclxuICAgICAgICAgICAgICAgIGJvd2luZzogMC41LFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB0aGlzLmRyYXdJbmZvLm1haW5Db2xvcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gc3VwZXIuZHJhdygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIEVuZ2luZSBmcm9tICdAZW5naW5lJztcclxuaW1wb3J0IHsgUm91Z2hDYW52YXMgfSBmcm9tICdyb3VnaGpzL2Jpbi9jYW52YXMnO1xyXG5pbXBvcnQgeyBDb2xvcnNDb25zdHJ1Y3RvckluZm8gfSBmcm9tICdAL3RoZW1lcy9jb2xvcnMvVGltZWxpbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRNYXJrIGV4dGVuZHMgRW5naW5lLkV2ZW50TWFyayB7XHJcbiAgICB0aGVtZSA9ICdjb2xvcnMnO1xyXG5cclxuICAgIHJvdWdoQ2FudmFzOlJvdWdoQ2FudmFzO1xyXG4gICAgY29uc3RydWN0b3IoaW5mbzpDb2xvcnNDb25zdHJ1Y3RvckluZm8pIHtcclxuICAgICAgICBzdXBlcihpbmZvKTtcclxuICAgICAgICB0aGlzLnJvdWdoQ2FudmFzID0gaW5mby5yb3VnaENhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3SW5mbzogRW5naW5lLkV2ZW50TWFya1snZHJhd0luZm8nXSAmIHttYWluQ29sb3I6c3RyaW5nfSA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAge30sXHJcbiAgICAgICAgdGhpcy5kcmF3SW5mbyxcclxuICAgICAgICB7IG1haW5Db2xvcjogJycgfSxcclxuICAgICk7XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLnJvdWdoQ2FudmFzLmNpcmNsZShcclxuICAgICAgICAgICAgdGhpcy5kcmF3SW5mby50YXJnZXQueCxcclxuICAgICAgICAgICAgdGhpcy5kcmF3SW5mby50YXJnZXQueSxcclxuICAgICAgICAgICAgdGhpcy5kcmF3SW5mby53aWR0aCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuXHJcbiAgICAgICAgICAgICAgICBmaWxsOiB0aGlzLmRyYXdJbmZvLm1haW5Db2xvcixcclxuICAgICAgICAgICAgICAgIGZpbGxXZWlnaHQ6IDAuNSxcclxuICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ3NvbGlkJyxcclxuXHJcbiAgICAgICAgICAgICAgICByb3VnaG5lc3M6IDAuNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIEVuZ2luZSBmcm9tICdAZW5naW5lJztcclxuaW1wb3J0IHsgUm91Z2hDYW52YXMgfSBmcm9tICdyb3VnaGpzL2Jpbi9jYW52YXMnO1xyXG5pbXBvcnQgeyBDb2xvcnNDb25zdHJ1Y3RvckluZm8gfSBmcm9tICdAL3RoZW1lcy9jb2xvcnMvVGltZWxpbmUnO1xyXG5pbXBvcnQgRXZlbnRCb2R5IGZyb20gJy4vRXZlbnRCb2R5JztcclxuaW1wb3J0IEV2ZW50QXhpcyBmcm9tICcuL0V2ZW50QXhpcyc7XHJcbmltcG9ydCBFdmVudE1hcmsgZnJvbSAnLi9FdmVudE1hcmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnQgZXh0ZW5kcyBFbmdpbmUuRXZlbnQge1xyXG4gICAgdGhlbWUgPSAnY29sb3JzJztcclxuXHJcbiAgICByb3VnaENhbnZhczpSb3VnaENhbnZhcztcclxuICAgIGNvbnN0cnVjdG9yKGluZm86Q29sb3JzQ29uc3RydWN0b3JJbmZvKSB7XHJcbiAgICAgICAgc3VwZXIoaW5mbyk7XHJcbiAgICAgICAgdGhpcy5yb3VnaENhbnZhcyA9IGluZm8ucm91Z2hDYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgYm9keUNvbnN0cnVjdG9yID0gRXZlbnRCb2R5O1xyXG4gICAgYXhpc0NvbnN0cnVjdG9yID0gRXZlbnRBeGlzO1xyXG4gICAgbWFya0NvbnN0cnVjdG9yID0gRXZlbnRNYXJrO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgcm91Z2hqcyBmcm9tICdyb3VnaGpzJztcclxuaW1wb3J0ICogYXMgRW5naW5lIGZyb20gJ0BlbmdpbmUnO1xyXG5pbXBvcnQgQXhpcyBmcm9tICcuL0F4aXMnO1xyXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudENvbnN0cnVjdG9ySW5mbyB9IGZyb20gJ0BlbmdpbmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBSb3VnaENhbnZhcyB9IGZyb20gJ3JvdWdoanMvYmluL2NhbnZhcyc7XHJcbmltcG9ydCBDb2xvclBpY2tlciBmcm9tICcuL2V4dGVuc2lvbnMvQ29sb3JQaWNrZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvcnNDb25zdHJ1Y3RvckluZm8gZXh0ZW5kcyBDb21wb25lbnRDb25zdHJ1Y3RvckluZm97XHJcbiAgICByb3VnaENhbnZhczogUm91Z2hDYW52YXM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgRW5naW5lLlRpbWVsaW5lIHtcclxuICAgIHRoZW1lID0gJ2NvbG9ycyc7XHJcblxyXG4gICAgZ3JpZCA9IHtcclxuICAgICAgICAuLi5FbmdpbmUuVGltZWxpbmUuZGVmYXVsdEdyaWQsXHJcbiAgICAgICAgc2NhbGVIZWlnaHQ6IDMsXHJcbiAgICAgICAgYXhpc1dpZHRoOiA1LFxyXG4gICAgICAgIG1hcmtXaWR0aDogMTAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJvdWdoQ2FudmFzOiBSb3VnaENhbnZhcztcclxuICAgIGNvbnN0cnVjdG9yKGluZm86Q29tcG9uZW50Q29uc3RydWN0b3JJbmZvKSB7XHJcbiAgICAgICAgc3VwZXIoaW5mbyk7XHJcbiAgICAgICAgdGhpcy5leHQuZXh0ZW5zaW9ucy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQ29sb3JQaWNrZXIoaW5mby5leHQpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5yb3VnaENhbnZhcyA9IHJvdWdoanMuY2FudmFzKHRoaXMuY2FudmFzKSBhcyBSb3VnaENhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBheGlzQ29uc3RydWN0b3IgPSBBeGlzO1xyXG4gICAgZXZlbnRDb25zdHJ1Y3RvciA9IEV2ZW50O1xyXG59XHJcbiIsImltcG9ydCB7IFRpbWVsaW5lLCBFeHRlbnNpb25NYW5hZ2VyIH0gZnJvbSAnLi8nO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRyYXcoXHJcbiAgICBlbDogc3RyaW5nIHwgSFRNTEVsZW1lbnQsXHJcbiAgICBldmVudHM6VGltZWxpbmVbJ2RyYXdJbmZvJ11bJ2V2ZW50cyddLFxyXG4pOlByb21pc2U8VGltZWxpbmU+IHtcclxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBjYW52YXMgfSA9IG1vdW50KGVsKTtcclxuICAgIGNvbnN0IHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcclxuICAgICAgICBjYW52YXMsXHJcbiAgICAgICAgY29udGFpbmVyLFxyXG4gICAgICAgIGV4dDogbmV3IEV4dGVuc2lvbk1hbmFnZXIsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aW1lbGluZS5kcmF3SW5mby5ldmVudHMgPSBldmVudHM7XHJcbiAgICBhd2FpdCB0aW1lbGluZS5hcHBseSgpO1xyXG4gICAgdGltZWxpbmUuZHJhdygpO1xyXG4gICAgcmV0dXJuIHRpbWVsaW5lO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZHJhd1dpdGhBbmltYXRpb24oXHJcbiAgICBlbDogc3RyaW5nIHwgSFRNTEVsZW1lbnQsXHJcbiAgICBldmVudHM6VGltZWxpbmVbJ2RyYXdJbmZvJ11bJ2V2ZW50cyddLFxyXG4pOlByb21pc2U8VGltZWxpbmU+IHtcclxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBjYW52YXMgfSA9IG1vdW50KGVsKTtcclxuICAgIGNvbnN0IHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcclxuICAgICAgICBjYW52YXMsXHJcbiAgICAgICAgY29udGFpbmVyLFxyXG4gICAgICAgIGV4dDogbmV3IEV4dGVuc2lvbk1hbmFnZXIoe1xyXG4gICAgICAgICAgICBicmVha3BvaW50QW5pbWF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBwbGF5QW5pbWF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGltZWxpbmUuZHJhd0luZm8uZXZlbnRzID0gZXZlbnRzO1xyXG4gICAgYXdhaXQgdGltZWxpbmUuYXBwbHkoKTtcclxuICAgIHRpbWVsaW5lLmRyYXcoKTtcclxuICAgIHJldHVybiB0aW1lbGluZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRyYXdGcm9tKFxyXG4gICAgZWw6IHN0cmluZyB8IEhUTUxFbGVtZW50LFxyXG4gICAgZGF0YTogYW55LFxyXG4pOlByb21pc2U8VGltZWxpbmU+IHtcclxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBjYW52YXMgfSA9IG1vdW50KGVsKTtcclxuICAgIGNvbnN0IHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcclxuICAgICAgICBjYW52YXMsXHJcbiAgICAgICAgY29udGFpbmVyLFxyXG4gICAgICAgIGV4dDogbmV3IEV4dGVuc2lvbk1hbmFnZXIoe1xyXG4gICAgICAgICAgICBicmVha3BvaW50QW5pbWF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBwbGF5QW5pbWF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgdGltZWxpbmUuZHJhd0Zyb20oZGF0YSk7XHJcbiAgICByZXR1cm4gdGltZWxpbmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdW50KGVsOnN0cmluZyB8IEVsZW1lbnQpIDp7Y29udGFpbmVyOkhUTUxFbGVtZW50LCBjYW52YXM6SFRNTENhbnZhc0VsZW1lbnR9IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lcjpIVE1MRWxlbWVudCA9IHR5cGVvZiBlbCA9PT0gJ3N0cmluZydcclxuICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpISBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgIDogZWwgYXMgSFRNTEVsZW1lbnRcclxuICAgIDtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaG9ydC1uaWdodCcsICdjb2xvcnMnLCAnY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hvcnQtbmlnaHQnLCAnY29sb3JzJywgJ2NhbnZhcycpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgY2FudmFzIH07XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEV4dGVuc2lvbiwgRXh0ZW5zaW9uTWFuYWdlciB9IGZyb20gJ0AvZW5naW5lL2V4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBUaW1lbGluZSwgRXZlbnQsIEV2ZW50Qm9keSwgRXZlbnRNYXJrLCBFdmVudEF4aXMsIENvbXBvbmVudCB9IGZyb20gJ0BlbmdpbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JQaWNrZXIgaW1wbGVtZW50cyBQYXJ0aWFsPEV4dGVuc2lvbj4ge1xyXG4gICAgY29sb3JzID0gWydyZ2IoMjEzLCA1NywgMzgpJywgJ3JnYigyNTIsIDIwMCwgMjkpJywgJ3JnYigwLCAxNjMsIDIwMSknXTtcclxuICAgIHN0YXJ0SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBldHg6RXh0ZW5zaW9uTWFuYWdlcikge31cclxuICAgIGFzeW5jIG9uQXBwbHkoY29tcDpDb21wb25lbnQpIHtcclxuICAgICAgICBpZiAoVGltZWxpbmUuaXMoY29tcCkpIHRoaXMuY3JlYXRlQ29sb3IoY29tcCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBFdmVudEJvZHkuaXMoY29tcClcclxuICAgICAgICAgICAgfHwgRXZlbnRNYXJrLmlzKGNvbXApXHJcbiAgICAgICAgICAgIHx8IEV2ZW50QXhpcy5pcyhjb21wKVxyXG4gICAgICAgICkgdGhpcy5zZXRDb2xvckludG9EcmF3SW5mbyhjb21wKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbnN0cnVjdChjb21wOkNvbXBvbmVudCkge1xyXG4gICAgICAgIGlmIChFdmVudC5pcyhjb21wKSkgY29tcC5leHRyYURhdGEubWFpbkNvbG9yID0gJyMwMDAnO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbG9ySW50b0RyYXdJbmZvKGNvbXA6RXZlbnRCb2R5fEV2ZW50TWFya3xFdmVudEF4aXMpIHtcclxuICAgICAgICBjb25zdCBldHggPSB0aGlzLmV0eDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbXAuZHJhd0luZm8sICdtYWluQ29sb3InLCB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldHguZ2V0UGFyZW50KGNvbXApLmV4dHJhRGF0YS5tYWluQ29sb3I7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ29sb3IodGltZWxpbmU6VGltZWxpbmUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVsaW5lLmV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvckluZGV4ID0gKGkgKyB0aGlzLnN0YXJ0SW5kZXgpICUgdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aW1lbGluZS5ldmVudHNbaV0uZXh0cmFEYXRhLm1haW5Db2xvciA9IHRoaXMuY29sb3JzW2NvbG9ySW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJjb25zb2xlLmxvZygn44GK44GkIGNvbG9ycyEnKTtcclxuXHJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRpbWVsaW5lIH0gZnJvbSAnLi9UaW1lbGluZSc7XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEF4aXMgfSBmcm9tICcuL0F4aXMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEF4aXNTY2FsZSB9IGZyb20gJy4vQXhpcy9BeGlzU2NhbGUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEF4aXNNaWxlc3RvbmUgfSBmcm9tICcuL0F4aXMvQXhpc01pbGVzdG9uZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXhpc0JvZHkgfSBmcm9tICcuL0F4aXMvQXhpc0JvZHknO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdmVudCB9IGZyb20gJy4vRXZlbnQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEV2ZW50TWFyayB9IGZyb20gJy4vRXZlbnQvRXZlbnRNYXJrJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdmVudEF4aXMgfSBmcm9tICcuL0V2ZW50L0V2ZW50QXhpcyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXZlbnRCb2R5IH0gZnJvbSAnLi9FdmVudC9FdmVudEJvZHknO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21wb25lbnQgfSBmcm9tICdAZW5naW5lL2NvbW1vbi9Db21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2xvclBpY2tlciB9IGZyb20gJy4vZXh0ZW5zaW9ucy9Db2xvclBpY2tlcic7XHJcbmV4cG9ydCB7XHJcbiAgICBFeHRlbnNpb25NYW5hZ2VyLFxyXG4gICAgQm94RWxlbWVudEdlbmVyYXRvcixcclxuICAgIEdlbmVyYXRvcklkLFxyXG4gICAgUG9zaXRpb25Db3VudGVyLFxyXG4gICAgQnJlYWtwb2ludEFuaW1hdGlvbixcclxuICAgIENvbmZsaWN0Rml4ZXIsXHJcbn0gZnJvbSAnQGVuZ2luZS9leHRlbnNpb25zJztcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==