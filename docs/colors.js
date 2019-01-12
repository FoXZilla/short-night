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
const config_1 = __webpack_require__(/*! @engine/common/config */ "./src/engine/common/config.ts");
class AxisBody extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = config_1.SN.AxisBody;
        this.drawInfo = {
            box: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
            length: 0,
        };
        this.ext.onConstruct(this);
    }
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.drawInfo.box = {
                x: this.grid.axisStart.x - this.grid.axisWidth / 2,
                y: this.grid.axisStart.y,
                width: this.grid.axisWidth,
                height: this.drawInfo.length,
            };
            return _super("apply").call(this);
        });
    }
    static is(comp) {
        return comp.name === config_1.SN.AxisBody;
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

Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = __webpack_require__(/*! @engine/common/functions */ "./src/engine/common/functions.ts");
const Component_1 = __webpack_require__(/*! @engine/common/Component */ "./src/engine/common/Component.ts");
const config_1 = __webpack_require__(/*! @engine/common/config */ "./src/engine/common/config.ts");
class AxisMilestone extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = config_1.SN.AxisMilestone;
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
    apply() {
        this.createElement();
        this.element.style.visibility = 'hidden';
        this.drawInfo.box = functions_1.countBox(this.element);
        return super.apply();
    }
    static is(comp) {
        return comp.name === config_1.SN.AxisMilestone;
    }
    createElement() {
        super.createElement();
        this.element.innerHTML = this.drawInfo.text;
        const { width, height } = functions_1.countBox(this.element);
        const x = this.drawInfo.bodyDrawInfo.box.x
            + this.drawInfo.bodyDrawInfo.box.width / 2
            - width / 2;
        const y = this.drawInfo.alignY - height / 2;
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
    }
    draw() {
        this.createElement();
        return super.draw();
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
const config_1 = __webpack_require__(/*! @engine/common/config */ "./src/engine/common/config.ts");
class AxisScale extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = config_1.SN.AxisScale;
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
        return comp.name === config_1.SN.AxisScale;
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
const config_1 = __webpack_require__(/*! @engine/common/config */ "./src/engine/common/config.ts");
const functions_1 = __webpack_require__(/*! @engine/common/functions */ "./src/engine/common/functions.ts");
class Axis extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = config_1.SN.Axis;
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
        this.milestones = [];
        this.scales = [];
        this.body = null;
        this.ext.onConstruct(this);
    }
    apply() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            if (!this.body)
                this.body = new this.bodyConstructor(this);
            this.body.drawInfo.length = this.drawInfo.length;
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
        return comp.name === config_1.SN.Axis;
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

Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = __webpack_require__(/*! @engine/common/functions */ "./src/engine/common/functions.ts");
const Component_1 = __webpack_require__(/*! @engine/common/Component */ "./src/engine/common/Component.ts");
const config_1 = __webpack_require__(/*! @engine/common/config */ "./src/engine/common/config.ts");
class EventAxis extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = config_1.SN.EventAxis;
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
    apply() {
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
        return super.apply();
    }
    createElement() {
        super.createElement();
        const target = this.drawInfo.markDrawInfo.target;
        this.element.classList.add('event_axis-endText');
        this.element.innerHTML = this.drawInfo.text;
        const box = functions_1.countBox(this.element);
        this.element.style.left = `${target.x + this.drawInfo.offsetX}px`;
        this.element.style.top = `${target.y - this.drawInfo.length - box.height / 2}px`;
    }
    static is(comp) {
        return comp.name === config_1.SN.EventAxis;
    }
    draw() {
        if (this.drawInfo.text)
            this.createElement();
        return super.draw();
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
const config_1 = __webpack_require__(/*! @engine/common/config */ "./src/engine/common/config.ts");
class EventBody extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = config_1.SN.EventBody;
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
        const eltBox = functions_1.countBox(this.element);
        const box = Object.assign({ width: eltBox.width, height: eltBox.height }, this.drawInfo.markDrawInfo.target);
        box.x -= box.width;
        box.y -= box.height / 2;
        box.x -= this.drawInfo.offset.x;
        box.y += this.drawInfo.offset.y;
        this.drawInfo.box = box;
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
    createElement() {
        super.createElement();
        this.resetElement();
        this.element.style.left = `${this.drawInfo.box.x}px`;
        this.element.style.top = `${this.drawInfo.box.y}px`;
    }
    static is(comp) {
        return comp.name === config_1.SN.EventBody;
    }
    draw() {
        this.createElement();
        return super.draw();
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
const config_1 = __webpack_require__(/*! @engine/common/config */ "./src/engine/common/config.ts");
class EventMark extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = config_1.SN.EventMark;
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
        return comp.name === config_1.SN.EventMark;
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
const config_1 = __webpack_require__(/*! @engine/common/config */ "./src/engine/common/config.ts");
class Event extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = config_1.SN.Event;
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
                axis.drawInfo.axisBodyDrawInfo = functions_1.deepFreeze(this.ext.components[config_1.SN.Axis][0].drawInfo);
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
        return comp.name === config_1.SN.Event;
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
const config_1 = __webpack_require__(/*! @engine/common/config */ "./src/engine/common/config.ts");
const BreakpointAnimation_1 = __webpack_require__(/*! @/engine/extensions/BreakpointAnimation */ "./src/engine/extensions/BreakpointAnimation.ts");
class Timeline extends Component_1.default {
    constructor(props) {
        super(props);
        this.name = config_1.SN.Timeline;
        this.grid = Timeline.defaultGrid;
        this.runtime = {};
        this.drawInfo = {
            box: { x: 0, y: 0, width: 0, height: 0 },
            events: [],
        };
        this.events = [];
        this.axis = null;
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
            - config_1.DATE_COUNT_EXTRA[this.runtime.scaleBy || "day" /* Day */]).toISOString();
        this.runtime.endDate = new Date(new Date(this.runtime.endDate).getTime()
            + config_1.DATE_COUNT_EXTRA[this.runtime.scaleBy || "day" /* Day */]).toISOString();
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
        return comp.name === config_1.SN.Timeline;
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
                allComponents.push(new axis.bodyConstructor(this).from(bodyDrawInfo));
                const scalesAndMilestones = [];
                scalesDrawInfo.forEach((scaleDrawInfo) => {
                    // @ts-ignore
                    scalesAndMilestones.push(new axis.scaleConstructor(this).from(scaleDrawInfo));
                });
                milestonesDrawInfo.forEach((milestoneDrawInfo) => {
                    scalesAndMilestones.push(
                    // @ts-ignore
                    new axis.milestoneConstructor(this).from(milestoneDrawInfo));
                });
                scalesAndMilestones.sort((comp1, comp2) => comp1.drawInfo.alignY - comp2.drawInfo.alignY);
                allComponents.push(...scalesAndMilestones);
            }
            const events = Array.from(data.events)
                .sort((e1, e2) => e1.drawInfo.target.y - e2.drawInfo.target.y);
            for (const { bodyDrawInfo, markDrawInfo, axisDrawInfo } of events) {
                // @ts-ignore
                allComponents.push(new event.markConstructor(this).from(markDrawInfo));
                // @ts-ignore
                allComponents.push(new event.bodyConstructor(this).from(bodyDrawInfo));
                if (axisDrawInfo !== null) {
                    // @ts-ignore
                    allComponents.push(new event.axisConstructor(this).from(axisDrawInfo));
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
        const timeline = this.ext.components[config_1.SN.Timeline][0];
        return functions_1.deepFreeze(JSON.parse(JSON.stringify({
            theme: timeline.theme,
            version: config_1.SN_VERSION,
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
const config_1 = __webpack_require__(/*! @engine/common/config */ "./src/engine/common/config.ts");
const functions_1 = __webpack_require__(/*! @engine/common/functions */ "./src/engine/common/functions.ts");
class Component {
    constructor({ ext, canvas, container, grid }) {
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
         * The component has bean destroyed.
         * Call any method on component destroyed will got an error.
         * */
        this.destroyed = false;
        this.ext = ext;
        this.grid = grid;
        this.canvas = canvas;
        this.container = container;
    }
    /**
     * Draw self base on self.drawInfo.
     * It should can be call multiple times.
     * */
    draw() {
        this.checkDestroy();
        this.ext.onDraw(this);
    }
    createElement() {
        if (this.element)
            this.container.removeChild(this.element);
        this.element = document.createElement('div');
        this.element.classList.add('short-night', this.theme, this.name);
        this.container.appendChild(this.element);
    }
    /**
     * Hide self. It should hide all element created by self.
     * Don't clear Canvas in there!
     * This method will try set "visibility: 'hidden'" for self.element
     * */
    hide() {
        this.checkDestroy();
        if (this.element)
            this.element.style.visibility = 'hidden';
        this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ext.onHide(this);
    }
    /**
     * Update component use self.drawInfo
     * */
    apply(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkDestroy();
            if (this.element) {
                this.drawInfo.box = functions_1.mergeBox(this.drawInfo.box, functions_1.countBox(this.element));
            }
            yield this.ext.onApply(this);
        });
    }
    /**
     * Destroy this component.
     * It should remove all element from dom if that's created by this component
     * */
    destroy() {
        this.checkDestroy();
        this.destroyed = true;
        this.ext.onDestroy(this);
    }
    /**
     * Print log if DEBUG is true.
     * @example this.l`Hello world`
     * */
    l(stringArr, ...values) {
        if (!config_1.DEBUG)
            return;
        const message = [stringArr[0]];
        for (let index = 0; index < values.length; index++) {
            message.push(values[index], stringArr[index + 1]);
        }
        console.log(`${this.name} #`, ...message);
    }
    /**
     * Verify a component is destroyed or not, if yes throw an error.
     * */
    checkDestroy() {
        if (this.destroyed) {
            throw new Error(`${this.name} has bean destroyed, however, you still call it's method.`);
        }
    }
    from(drawInfo) {
        this.drawInfo = drawInfo;
        return this;
    }
}
exports.default = Component;


/***/ }),

/***/ "./src/engine/common/config.ts":
/*!*************************************!*\
  !*** ./src/engine/common/config.ts ***!
  \*************************************/
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
const config_1 = __webpack_require__(/*! @engine/common/config */ "./src/engine/common/config.ts");
function isBox(obj) {
    return typeof obj === 'object'
        && typeof obj.x === 'number'
        && typeof obj.y === 'number'
        && typeof obj.width === 'number'
        && typeof obj.height === 'number';
}
exports.isBox = isBox;
function isLine(obj) {
    return typeof obj === 'object'
        && typeof obj.startX === 'number'
        && typeof obj.startY === 'number'
        && typeof obj.endX === 'number'
        && typeof obj.endY === 'number';
}
exports.isLine = isLine;
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
function countBox(elt) {
    const styles = getComputedStyle(elt);
    return {
        x: parseFloat(styles.left),
        y: parseFloat(styles.top),
        width: parseFloat(styles.width),
        height: parseFloat(styles.height),
    };
}
exports.countBox = countBox;
function deepAssign(...args) {
    const result = args.shift();
    for (const obj of args) {
        for (const [key, value] of Object.entries(obj)) {
            if (key in result) {
                if (Array.isArray(value) && Array.isArray(result[key])) {
                    result[key].push(...value);
                }
                else if (typeof value === 'object' && typeof result[key] === 'object') {
                    deepAssign(result[key], value);
                }
                else {
                    result[key] = value;
                }
            }
            else {
                result[key] = value;
            }
        }
    }
    return result;
}
exports.deepAssign = deepAssign;
exports.timeNodeGetter = function () {
    const getNodes = function (start, end, step) {
        const startNode = function (template) {
            const node = new Date(template);
            node.setFullYear(template.getFullYear() - 1, 0, 1);
            node.setHours(0, 0, 0, 0);
            return node;
        }(start);
        const endNode = function (template) {
            const node = new Date(template);
            node.setFullYear(template.getFullYear() + 1, 0, 1);
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
function drawLine(ctx, line) {
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#f00';
    ctx.moveTo(line.startX, line.startY);
    ctx.lineTo(line.endX, line.endY);
    ctx.stroke();
}
exports.drawLine = drawLine;
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
function createLogFunction(prefix) {
    return function (stringArr, ...values) {
        if (!config_1.DEBUG)
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
 * Return a freezed object base on specified object.
 * */
function deepFreeze(originObject) {
    const object = JSON.parse(JSON.stringify(originObject));
    // Retrieve the property names defined on object
    const propNames = Object.getOwnPropertyNames(object);
    // Freeze properties before freezing self
    for (const name of propNames) {
        const value = object[name];
        object[name] = (value && typeof value === 'object'
            ? deepFreeze(value)
            : value);
    }
    return Object.freeze(object);
}
exports.deepFreeze = deepFreeze;
function shrinkBox(box, distance = 1) {
    return {
        x: box.x + distance,
        y: box.y + distance,
        width: box.width - distance * 2,
        height: box.height - distance * 2,
    };
}
exports.shrinkBox = shrinkBox;


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
const config_1 = __webpack_require__(/*! ../common/config */ "./src/engine/common/config.ts");
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
        if (config_1.DEBUG) {
            this.breakpoints.push(Breakpoint.Debug);
            window.next = this.next.bind(this);
            window.abort = () => { delete this.stepIn; };
        }
    }
    onDraw(comp) {
        if (Timeline_1.default.is(comp) && this.playAnimation) {
            new moveto().move(this.etx.components[config_1.SN.Timeline][0].canvas);
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
const config_1 = __webpack_require__(/*! ../../common/config */ "./src/engine/common/config.ts");
const functions_1 = __webpack_require__(/*! ../../common/functions */ "./src/engine/common/functions.ts");
const BreakpointAnimation_1 = __webpack_require__(/*! ../BreakpointAnimation */ "./src/engine/extensions/BreakpointAnimation.ts");
class EventAxis2EventAxis {
    constructor(ext) {
        this.ext = ext;
    }
    fix() {
        return __awaiter(this, void 0, void 0, function* () {
            const eventAxisList = Array.from(this.ext.components[config_1.SN.EventAxis])
                .sort((ea1, ea2) => ea2.drawInfo.length - ea1.drawInfo.length);
            while (eventAxisList.some(ea1 => eventAxisList.some(ea2 => EventAxis2EventAxis.isConflict(ea1, ea2)))) {
                for (const ea1 of eventAxisList) {
                    const conflictWith = eventAxisList.filter(ea2 => EventAxis2EventAxis.isConflict(ea1, ea2));
                    if (conflictWith.length) {
                        const options = {
                            protagonist: ea1,
                            components: [
                                ...this.ext.components[config_1.SN.AxisBody],
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
const config_1 = __webpack_require__(/*! ../../common/config */ "./src/engine/common/config.ts");
const functions_1 = __webpack_require__(/*! ../../common/functions */ "./src/engine/common/functions.ts");
const BreakpointAnimation_1 = __webpack_require__(/*! ../BreakpointAnimation */ "./src/engine/extensions/BreakpointAnimation.ts");
class EventBody2AxisMilestone {
    constructor(ext) {
        this.ext = ext;
    }
    fix() {
        return __awaiter(this, void 0, void 0, function* () {
            const eventBodyList = this.ext.components[config_1.SN.EventBody];
            const axisMilestoneList = this.ext.components[config_1.SN.AxisMilestone];
            for (const eventBody of eventBodyList) {
                for (const axisMilestone of axisMilestoneList) {
                    if (functions_1.isOverlap(eventBody.drawInfo.box, axisMilestone.drawInfo.box)) {
                        const options = {
                            protagonist: axisMilestone,
                            components: [
                                ...this.ext.components[config_1.SN.AxisBody],
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
const config_1 = __webpack_require__(/*! ../../common/config */ "./src/engine/common/config.ts");
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
            this.timeline = this.ext.components[config_1.SN.Timeline][0];
            this.axisBody = this.ext.components[config_1.SN.AxisBody][0];
            this.eventBodyList = Array.from(this.ext.components[config_1.SN.EventBody])
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
                with: this.ext.components[config_1.SN.EventBody].filter(target => EventBody2EventBodyFloater.isConflict(eb, target)),
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
const config_1 = __webpack_require__(/*! ../../common/config */ "./src/engine/common/config.ts");
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
            this.eventBodyList = Array.from(this.ext.components[config_1.SN.EventBody])
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
                    ...this.ext.components[config_1.SN.AxisBody],
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
const config_1 = __webpack_require__(/*! ../../common/config */ "./src/engine/common/config.ts");
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
                if (config_1.DEBUG)
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
const config_1 = __webpack_require__(/*! ../common/config */ "./src/engine/common/config.ts");
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
            if (config_1.DEBUG)
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
/* harmony import */ var _engine_common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/engine/common/config */ "./src/engine/common/config.ts");
/* harmony import */ var _engine_common_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_engine_common_config__WEBPACK_IMPORTED_MODULE_0__);
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
        [_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].Timeline]: [],
        [_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].Axis]: [],
        [_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].AxisBody]: [],
        [_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].AxisScale]: [],
        [_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].AxisMilestone]: [],
        [_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].Event]: [],
        [_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].EventBody]: [],
        [_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].EventMark]: [],
        [_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].EventAxis]: [],
    };
    this.breakpoint = new _engine_extensions_BreakpointAnimation__WEBPACK_IMPORTED_MODULE_4___default.a(this, breakpointAnimation);

    this.extensions = [
        new Base(this),
        new _engine_extensions_GeneratorId__WEBPACK_IMPORTED_MODULE_2___default.a(this),
        new _engine_extensions_position_counter__WEBPACK_IMPORTED_MODULE_3___default.a(this),
        new _engine_extensions_ConflictFixer__WEBPACK_IMPORTED_MODULE_5___default.a(this),
        this.breakpoint,
    ];

    if (_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["DEBUG"]) {
        this.extensions.push(
            new _engine_extensions_BoxElementGenerator__WEBPACK_IMPORTED_MODULE_1___default.a(this),
        );
    }
}
ExtensionManager.prototype.getParent = function getParent(comp) {
    if (_engine_Axis__WEBPACK_IMPORTED_MODULE_12___default.a.is(comp)) return this.components[_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].Timeline][0];
    if (_engine_Event__WEBPACK_IMPORTED_MODULE_13___default.a.is(comp)) return this.components[_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].Timeline][0];
    if (_engine_Axis_AxisBody__WEBPACK_IMPORTED_MODULE_6___default.a.is(comp)) return this.components[_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].Axis][0];
    if (_engine_Axis_AxisMilestone__WEBPACK_IMPORTED_MODULE_7___default.a.is(comp)) return this.components[_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].Axis][0];
    if (_engine_Axis_AxisScale__WEBPACK_IMPORTED_MODULE_8___default.a.is(comp)) return this.components[_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].Axis][0];
    if (_engine_Event_EventBody__WEBPACK_IMPORTED_MODULE_9___default.a.is(comp)) return this.components[_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].Event].find(event => event.body === comp);
    if (_engine_Event_EventAxis__WEBPACK_IMPORTED_MODULE_10___default.a.is(comp)) return this.components[_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].Event].find(event => event.axis === comp);
    if (_engine_Event_EventMark__WEBPACK_IMPORTED_MODULE_11___default.a.is(comp)) return this.components[_engine_common_config__WEBPACK_IMPORTED_MODULE_0__["SN"].Event].find(event => event.mark === comp);

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
const config_1 = __webpack_require__(/*! ../common/config */ "./src/engine/common/config.ts");
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
                if (comp.name === config_1.SN.AxisMilestone) {
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
            const axis = this.etx.components[config_1.SN.Axis][0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vdmV0by9kaXN0L21vdmVUby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vY2FudmFzLWFzeW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9jYW52YXMtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vY2FudmFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9maWxsZXJzL2RvdC1maWxsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL2ZpbGxlcnMvZmlsbGVyLXV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9maWxsZXJzL2ZpbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vZmlsbGVycy9oYWNodXJlLWZpbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vZmlsbGVycy9oYXRjaC1maWxsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL2ZpbGxlcnMvemlnemFnLWZpbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vZ2VuZXJhdG9yLWFzeW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9nZW5lcmF0b3ItYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vZ2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9nZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vcmVuZGVyZXItZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm91Z2hqcy9iaW4vcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL3JvdWdoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9zdmctYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL3N2Zy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb3VnaGpzL2Jpbi9zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvdWdoanMvYmluL3V0aWxzL2hhY2h1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9BeGlzL0F4aXNCb2R5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvQXhpcy9BeGlzTWlsZXN0b25lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvQXhpcy9BeGlzU2NhbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9BeGlzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvRXZlbnQvRXZlbnRBeGlzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvRXZlbnQvRXZlbnRCb2R5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvRXZlbnQvRXZlbnRNYXJrLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvRXZlbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9UaW1lbGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2NvbW1vbi9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9jb21tb24vY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvY29tbW9uL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2V4dGVuc2lvbnMvQm94RWxlbWVudEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2V4dGVuc2lvbnMvQnJlYWtwb2ludEFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2V4dGVuc2lvbnMvQ29uZmxpY3RGaXhlci9FdmVudEF4aXMyRXZlbnRBeGlzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9Db25mbGljdEZpeGVyL0V2ZW50Qm9keTJBeGlzTWlsZXN0b25lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9Db25mbGljdEZpeGVyL0V2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9Db25mbGljdEZpeGVyL0V2ZW50Qm9keTJFdmVudEJvZHlNb3Zlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2V4dGVuc2lvbnMvQ29uZmxpY3RGaXhlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2V4dGVuc2lvbnMvR2VuZXJhdG9ySWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9leHRlbnNpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXh0ZW5zaW9ucy9wb3NpdGlvbi1jb3VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9zdHlsZXMuc2Nzcz85ZjViIiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvY29sb3JzL0F4aXMvQXhpc0JvZHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lcy9jb2xvcnMvQXhpcy9BeGlzTWlsZXN0b25lLnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvY29sb3JzL0F4aXMvQXhpc1NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvY29sb3JzL0F4aXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lcy9jb2xvcnMvRXZlbnQvRXZlbnRBeGlzLnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvY29sb3JzL0V2ZW50L0V2ZW50Qm9keS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9FdmVudC9FdmVudE1hcmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lcy9jb2xvcnMvRXZlbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lcy9jb2xvcnMvVGltZWxpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lcy9jb2xvcnMvZW50cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lcy9jb2xvcnMvZXh0ZW5zaW9ucy9Db2xvclBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2NvbG9ycy9zdHlsZXMuc2Nzcz9jMjA0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLGlHQUEwRTtBQUUxRSxNQUFNLE1BQU0sR0FBRyxDQUFDO1FBQ1osSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUMsWUFBWTtLQUNyQixFQUFFO1FBQ0MsS0FBSyxFQUFDLFdBQVc7UUFDakIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsT0FBTyxFQUFFLFdBQVc7S0FDdkIsRUFBRTtRQUNDLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFDLFdBQVc7UUFDakIsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixPQUFPLEVBQUUsUUFBUTtRQUNqQixPQUFPLEVBQUUsTUFBTTtLQUNsQixFQUFFO1FBQ0MsSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUMsbUJBQW1CO1FBQ3pCLE9BQU8sRUFBRSxXQUFXO0tBQ3ZCLEVBQUU7UUFDQyxLQUFLLEVBQUUsVUFBVTtRQUNqQixJQUFJLEVBQUUsZ0VBQWdFO1FBQ3RFLElBQUksRUFBRSxVQUFVO1FBQ2hCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLE1BQU0sRUFBRSxJQUFJO0tBQ2YsRUFBRTtRQUNDLEtBQUssRUFBRSxZQUFZO1FBQ25CLElBQUksRUFBRSxXQUFXO1FBQ2pCLE9BQU8sRUFBRSxVQUFVO0tBQ3RCLEVBQUU7UUFDQyxLQUFLLEVBQUUsZUFBZTtRQUN0QixJQUFJLEVBQUUsV0FBVztRQUNqQixPQUFPLEVBQUUsV0FBVztRQUNwQixPQUFPLEVBQUcsVUFBVTtLQUN2QixFQUFFO1FBQ0MsS0FBSyxFQUFFLGtCQUFrQjtRQUN6QixJQUFJLEVBQUUsV0FBVztLQUNwQixFQUFFO1FBQ0MsS0FBSyxFQUFFLFlBQVk7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsT0FBTyxFQUFFLEtBQUs7S0FDakIsRUFBRTtRQUNDLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkIsSUFBSSxFQUFFLFdBQVc7S0FDcEIsRUFBRTtRQUNDLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkIsSUFBSSxFQUFFLFdBQVc7S0FDcEIsRUFBRTtRQUNDLEtBQUssRUFBQyxXQUFXO1FBQ2pCLElBQUksRUFBRSxXQUFXO0tBQ3BCLEVBQUU7UUFDQyxLQUFLLEVBQUMsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO0tBQ2pCLEVBQUU7UUFDQyxLQUFLLEVBQUMsUUFBUTtRQUNkLElBQUksRUFBRSxVQUFVO0tBQ25CLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFTLEVBQUU7SUFDckQsY0FBYztJQUNkLE1BQU0sU0FBUyxHQUFHLE1BQU0sWUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUU3Qyx5QkFBeUI7SUFDekIsOENBQThDO0lBQzlDLG9CQUFvQjtJQUNwQiw2REFBNkQ7SUFDN0QsRUFBRTtJQUNGLDZDQUE2QztJQUM3Qyw4Q0FBOEM7SUFDOUMsb0JBQW9CO0lBQ3BCLDhDQUE4QztBQUNsRCxDQUFDLEVBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkVILDJCQUEyQixtQkFBTyxDQUFDLGdHQUErQztBQUNsRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsaUJBQWlCLHVCQUF1QiwyQkFBMkIsRUFBRSxrQkFBa0IsZ0JBQWdCLGlCQUFpQixFQUFFLGlDQUFpQyw4QkFBOEIseUJBQXlCLHdCQUF3QixFQUFFLDZCQUE2Qix5QkFBeUIsa0JBQWtCLGdDQUFnQyx3QkFBd0IsRUFBRSxzQ0FBc0Msd0JBQXdCLEVBQUUsMkZBQTJGLDJCQUEyQixrQ0FBa0MsOEJBQThCLEVBQUUsMkVBQTJFLHVCQUF1QiwyQkFBMkIsRUFBRSxxQ0FBcUMseUJBQXlCLDRCQUE0QiwyQkFBMkIsRUFBRSxxQ0FBcUMseUJBQXlCLDJCQUEyQix1QkFBdUIseUJBQXlCLEVBQUU7O0FBRTkvQjs7Ozs7Ozs7Ozs7O0FDUEEsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyx1Q0FBdUMsb0JBQW9CLGdCQUFnQixxQkFBcUIsRUFBRSxvQ0FBb0MsZ0JBQWdCLDhCQUE4QixzQkFBc0IsRUFBRSw0Q0FBNEMsc0JBQXNCLEVBQUUseUdBQXlHLHlCQUF5QixnQ0FBZ0MsNEJBQTRCLEVBQUUsdUZBQXVGLHFCQUFxQix5QkFBeUIsRUFBRSwwQ0FBMEMsdUJBQXVCLDBCQUEwQix5QkFBeUIsRUFBRSw0Q0FBNEMseUJBQXlCLHFCQUFxQixFQUFFOztBQUVoMEI7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7OztBQUdwQztBQUNBO0FBQ0Esb0RBQW9ELE9BQU87QUFDM0Qsb0RBQW9ELE9BQU87QUFDM0Qsb0RBQW9ELE9BQU87QUFDM0Qsb0RBQW9ELE9BQU87QUFDM0Qsb0RBQW9ELE9BQU87QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EscUJBQXFCLHFGQUFxRjtBQUMxRztBQUNBLHNDQUFzQyw2QkFBNkI7QUFDbkU7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixZQUFZO0FBQzVCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixjQUFjO0FBQzlCO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0EsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QixpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCxJQUFJLElBQTZCO0FBQ2pDO0FBQ0EsQ0FBQyxNQUFNLEU7Ozs7Ozs7Ozs7OztBQ3JNUDtBQUFBO0FBQUE7QUFBQTtBQUF3RDtBQUNSO0FBQ3pDLCtCQUErQiw0REFBZTtBQUNyRDtBQUNBO0FBQ0EsNEJBQTRCLG9FQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUEyQztBQUMzQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1REFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7QUFDRztBQUN6QywwQkFBMEIsNERBQWU7QUFDaEQ7QUFDQTtBQUNBLHVCQUF1Qix5REFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUE0RjtBQUNyRjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU0scUNBQXFDO0FBQ3ZFLHNCQUFzQiw0RUFBc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU0scUNBQXFDO0FBQ3ZFLHNCQUFzQiw0RUFBc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnRUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsV0FBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0M7QUFDYTtBQUM1QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLG1CQUFtQixpREFBTztBQUMxQixtQkFBbUIsbUJBQW1CO0FBQ3RDLHVCQUF1QixpREFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOERBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxnQkFBZ0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQ0Y7QUFDRjtBQUNKO0FBQ3pDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDJEQUFZO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHlEQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHFEQUFTO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw2REFBYTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQWdGO0FBQ3pFO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEVBQXNCO0FBQzVDO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxzQkFBc0IsNEVBQXNCO0FBQzVDO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQWlEO0FBQzFDLDBCQUEwQiw2REFBYTtBQUM5QztBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sb0NBQW9DO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLG9DQUFvQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFpRDtBQUMxQywyQkFBMkIsNkRBQWE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBc0Q7QUFDL0Msa0NBQWtDLGtFQUFrQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4SEE7QUFBQTtBQUFBO0FBQXVEO0FBQ3ZEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyRUFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYSxHQUFHLGFBQWE7QUFDakQsMkJBQTJCLG1CQUFtQjtBQUM5Qyx1QkFBdUIsRUFBRSxJQUFJLGFBQWEsR0FBRyxhQUFhO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG9CQUFvQixHQUFHLG9CQUFvQjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsUUFBUSxHQUFHLFFBQVE7QUFDbkQ7QUFDQTtBQUNBLGdDQUFnQyxRQUFRLEdBQUcsUUFBUSxJQUFJLFFBQVEsR0FBRyxRQUFRLElBQUksUUFBUSxHQUFHLFFBQVE7QUFDakc7QUFDQTtBQUNBLGdDQUFnQyxRQUFRLEdBQUcsUUFBUSxJQUFJLFFBQVEsR0FBRyxRQUFRO0FBQzFFO0FBQ0E7QUFDQSxnQ0FBZ0MsUUFBUSxHQUFHLFFBQVE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUxBO0FBQUE7QUFBQTtBQUFzRDtBQUMvQyw2QkFBNkIsa0VBQWtCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyw2QkFBNkIsc0JBQXNCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUhBQW1IO0FBQ2pKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw4QkFBOEIsbUhBQW1IO0FBQ2pKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtSEFBbUg7QUFDako7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLDhCQUE4QixtSEFBbUg7QUFDako7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBLDRHQUFpRDtBQUNqRCxtR0FBMkM7QUFPM0MsY0FBdUMsU0FBUSxtQkFBUztJQUdwRCxZQUFZLEtBQThCO1FBQ3RDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUhqQixTQUFJLEdBQUcsV0FBRSxDQUFDLFFBQVEsQ0FBQztRQU9uQixhQUFRLEdBQWE7WUFDakIsR0FBRyxFQUFFO2dCQUNELENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSxDQUFDO2FBQ1o7WUFDRCxNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUM7UUFYRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBWUssS0FBSzs7O1lBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUc7Z0JBQ2hCLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQztnQkFDbEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7Z0JBQzFCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07YUFDL0IsQ0FBQztZQUNGLE9BQU8sZUFBVyxZQUFHO1FBQ3pCLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBRSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0NBQ0o7QUEvQkQsMkJBK0JDOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0QsNEdBQW9EO0FBQ3BELDRHQUFpRDtBQUNqRCxtR0FBMkM7QUFVM0MsbUJBQTRDLFNBQVEsbUJBQVM7SUFHekQsWUFBWSxLQUE4QjtRQUN0QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFIakIsU0FBSSxHQUFHLFdBQUUsQ0FBQyxhQUFhLENBQUM7UUFPeEIsYUFBUSxHQUFZO1lBQ2hCLFlBQVksRUFBRSxFQUFTO1lBQ3ZCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxFQUFFLEtBQUs7WUFFWCxHQUFHLEVBQUU7Z0JBQ0QsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLENBQUM7YUFDWjtTQUNKLENBQUM7UUFkRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBZUQsS0FBSztRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLG9CQUFRLENBQUMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxDQUFDO1FBRTVDLE9BQU8sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDLElBQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQUUsQ0FBQyxhQUFhLENBQUM7SUFDMUMsQ0FBQztJQUVELGFBQWE7UUFDVCxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFN0MsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxvQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFRLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztjQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUM7Y0FDeEMsS0FBSyxHQUFHLENBQUMsQ0FDZDtRQUNELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFdkMsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBckRELGdDQXFEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUQsNEdBQWlEO0FBQ2pELG1HQUEyQztBQVUzQyxlQUF3QyxTQUFRLG1CQUFTO0lBR3JELFlBQVksS0FBOEI7UUFDdEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSGpCLFNBQUksR0FBRyxXQUFFLENBQUMsU0FBUyxDQUFDO1FBT3BCLGFBQVEsR0FBWTtZQUNoQixZQUFZLEVBQUUsRUFBUztZQUN2QixNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRSxDQUFDO1lBRVQsR0FBRyxFQUFFO2dCQUNELENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSxDQUFDO2FBQ1o7U0FDSixDQUFDO1FBZEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWVLLEtBQUs7OztZQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHO2dCQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25DLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUNsRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUs7YUFDOUMsQ0FBQztZQUNGLE9BQU8sZUFBVyxZQUFHO1FBQ3pCLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBRSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0NBQ0o7QUFsQ0QsNEJBa0NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDRCw0R0FBaUQ7QUFJakQsbUdBQTJDO0FBQzNDLDRHQUFnRTtBQVdoRSxVQUFtQyxTQUFRLG1CQUFTO0lBR2hELFlBQVksS0FBOEI7UUFDdEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSGpCLFNBQUksR0FBRyxXQUFFLENBQUMsSUFBSSxDQUFDO1FBT1IsYUFBUSxHQUFZO1lBQ3ZCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsQ0FBQztZQUNULEdBQUcsRUFBRTtnQkFDRCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNLEVBQUUsQ0FBQzthQUNaO1NBQ0osQ0FBQztRQUtGLGVBQVUsR0FBbUIsRUFBRSxDQUFDO1FBQ2hDLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsU0FBSSxHQUFZLElBQVcsQ0FBQztRQXBCeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQXFCSyxLQUFLOzs7WUFDUCxhQUFhO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNqRCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFeEIsUUFBUTtZQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBRXZCLGNBQWM7WUFDZCxLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUN6QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDO29CQUFFLFNBQVM7Z0JBQzFFLGFBQWE7Z0JBQ2IsTUFBTSxLQUFLLEdBQWEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hELEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLHNCQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsZ0NBQWdDO2dCQUNsRSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGdDQUFnQztnQkFDL0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0I7WUFFRCxrQkFBa0I7WUFDbEIsS0FBSyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO2dCQUN2RCxhQUFhO2dCQUNiLE1BQU0sU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0RCxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxzQkFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pFLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLGdDQUFnQztnQkFDdEUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNuQztZQUVELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDbEMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsb0JBQVEsQ0FDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUN0QixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDM0MsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQzFDLENBQUM7WUFFRixPQUFPLGVBQVcsWUFBRztRQUN6QixDQUFDO0tBQUE7SUFDRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFdkMsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELE9BQU87UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUUxQyxPQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSTtRQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXZDLE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDLElBQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQUUsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztDQUNKO0FBbEdELHVCQWtHQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEhELDRHQUErRDtBQUMvRCw0R0FBaUQ7QUFDakQsbUdBQTJDO0FBYTNDLGVBQXdDLFNBQVEsbUJBQVM7SUFHckQsWUFBWSxLQUE4QjtRQUN0QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFIakIsU0FBSSxHQUFHLFdBQUUsQ0FBQyxTQUFTLENBQUM7UUFPcEIsYUFBUSxHQUFZO1lBQ2hCLGdCQUFnQixFQUFFLEVBQVM7WUFDM0IsWUFBWSxFQUFFLEVBQVM7WUFDdkIsTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQztZQUVWLEdBQUcsRUFBRTtnQkFDRCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNLEVBQUUsQ0FBQzthQUNaO1NBQ0osQ0FBQztRQWZFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFlRCxLQUFLO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztTQUM3QzthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtRQUVELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUVqRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRztZQUNoQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDWCxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDbEMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTztZQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1NBQy9CLENBQUM7UUFFRixPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsYUFBYTtRQUNULEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV0QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFFakQsSUFBSSxDQUFDLE9BQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFLLENBQUM7UUFFOUMsTUFBTSxHQUFHLEdBQUcsb0JBQVEsQ0FBQyxJQUFJLENBQUMsT0FBUSxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxDQUFDO1FBQ25FLElBQUksQ0FBQyxPQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQztJQUV0RixDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxXQUFFLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFJO1FBQ0EsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0MsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBakVELDRCQWlFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUQsNEdBQWdFO0FBQ2hFLDRHQUFpRDtBQUNqRCxtR0FBMkM7QUFrQjNDLGVBQXdDLFNBQVEsbUJBQVM7SUFHckQsWUFBWSxLQUE4QjtRQUN0QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFIakIsU0FBSSxHQUFHLFdBQUUsQ0FBQyxTQUFTLENBQUM7UUFPcEIsWUFBTyxHQUFnQixJQUFXLENBQUM7UUFFbkMsYUFBUSxHQUFZO1lBQ2hCLFlBQVksRUFBRSxJQUFXO1lBRXpCLE1BQU0sRUFBRTtnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNQO1lBQ0QsUUFBUSxFQUFFLEdBQUc7WUFFYixJQUFJLEVBQUUsSUFBVztZQUNqQixLQUFLLEVBQUUsVUFBVTtZQUVqQixPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxLQUFLO1lBRWIsR0FBRyxFQUFFO2dCQUNELENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLEtBQUssRUFBRSxHQUFHO2dCQUNWLE1BQU0sRUFBRSxDQUFDO2FBQ1o7U0FDSixDQUFDO1FBMUJFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUEyQkQsWUFBWTtRQUNSLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSx5QkFBeUI7WUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUc7eUNBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO21DQUNyRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRTthQUNqRSxDQUFDO1NBQ0w7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHO29DQUNELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSzttQ0FDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUU7a0JBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxNQUFNLENBQUMsQ0FBQyxHQUFFO2FBQzFFLENBQUM7U0FDTDtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0M7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUNULElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUNsQjtZQUNJLElBQUksRUFBRSxDQUFDO1lBQ1AsR0FBRyxFQUFFLENBQUM7WUFDTixLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxJQUFJO1lBQ1osUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUk7U0FDMUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUNELGtCQUFrQjtRQUNkLE1BQU0sTUFBTSxHQUFHLG9CQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sR0FBRyxtQkFDTCxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFDbkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FDdkMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNuQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBQ0ssS0FBSzs7O1lBQ1AsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBRXpDLE9BQU8sZUFBVyxZQUFHO1FBQ3pCLENBQUM7S0FBQTtJQUVELGFBQWE7UUFDVCxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3hELENBQUM7SUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDLElBQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQUUsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBeEdELDRCQXdHQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSUQsNEdBQWlEO0FBRWpELG1HQUEyQztBQVUzQyxlQUF3QyxTQUFRLG1CQUFTO0lBR3JELFlBQVksS0FBOEI7UUFDdEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSGpCLFNBQUksR0FBRyxXQUFFLENBQUMsU0FBUyxDQUFDO1FBT3BCLGFBQVEsR0FBWTtZQUNoQixnQkFBZ0IsRUFBRSxFQUFTO1lBQzNCLEdBQUcsRUFBRTtnQkFDRCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNLEVBQUUsQ0FBQzthQUNaO1lBQ0QsTUFBTSxFQUFFO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2FBQ1A7WUFDRCxLQUFLLEVBQUUsQ0FBQztTQUNYLENBQUM7UUFoQkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWlCSyxLQUFLOzs7WUFDUCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7WUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUc7Z0JBQ2hCLEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDO2dCQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDO2FBQ3pDLENBQUM7WUFDRixPQUFPLGVBQVcsWUFBRztRQUN6QixDQUFDO0tBQUE7SUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDLElBQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQUUsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztDQUNKO0FBdENELDRCQXNDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREQsNEdBQWlEO0FBS2pELDRHQUFnRTtBQUNoRSxtR0FBMkM7QUF5QjNDLFdBQW9DLFNBQVEsbUJBQVM7SUFHakQsWUFBWSxLQUE4QjtRQUN0QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFIakIsU0FBSSxHQUFHLFdBQUUsQ0FBQyxLQUFLLENBQUM7UUFPaEIsYUFBUSxHQUFZO1lBQ2hCLE1BQU0sRUFBRTtnQkFDSixDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsRUFBRTthQUNSO1lBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUM3QixTQUFTLEVBQUUsR0FBRztZQUVkLElBQUksRUFBRSxJQUFXO1lBQ2pCLEtBQUssRUFBRSxJQUFXO1lBRWxCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsVUFBVSxFQUFFLElBQVc7WUFFdkIsR0FBRyxFQUFFO2dCQUNELENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLEtBQUssRUFBRSxHQUFHO2dCQUNWLE1BQU0sRUFBRSxHQUFHO2FBQ2Q7U0FDSixDQUFDO1FBS0YsU0FBSSxHQUFhLElBQVcsQ0FBQztRQUM3QixTQUFJLEdBQWEsSUFBVyxDQUFDO1FBQzdCLFNBQUksR0FBa0IsSUFBSSxDQUFDO1FBOUJ2QixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBK0JLLEtBQUs7OztZQUNQLGFBQWE7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDakQsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXhCLGFBQWE7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLHNCQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFDMUIsYUFBYTtnQkFDYixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxzQkFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFdBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsc0JBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2dCQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQzVDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNwQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1lBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsb0JBQVEsQ0FDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQ3pCLENBQUM7WUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsb0JBQVEsQ0FDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDekIsQ0FBQzthQUNMO1lBRUQsT0FBTyxlQUFXLFlBQUc7UUFDekIsQ0FBQztLQUFBO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFakMsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlCLE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVqQixPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxXQUFFLENBQUMsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Q0FFSjtBQWxIRCx3QkFrSEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEpELDRHQUFpRDtBQUdqRCw0R0FBc0U7QUFDdEUsbUdBQXlFO0FBR3pFLG1KQUFxRTtBQXVCckUsY0FBdUMsU0FBUSxtQkFBUztJQUdwRCxZQUFZLEtBQThCO1FBQ3RDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUhqQixTQUFJLEdBQUcsV0FBRSxDQUFDLFFBQVEsQ0FBQztRQU9uQixTQUFJLEdBQWMsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUV2QyxZQUFPLEdBQWdCLEVBQVMsQ0FBQztRQUVqQyxhQUFRLEdBQWE7WUFDakIsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBRTtZQUNwQyxNQUFNLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFJRixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFNBQUksR0FBUyxJQUFXLENBQUM7UUFmckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWdCRCxjQUFjO1FBQ1YsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDaEQsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNwRSxDQUFDO1FBQ0YsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELFlBQVk7UUFDUixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUVwQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FDdkIsR0FBRyxNQUFNO2FBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLENBQUM7YUFDckMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFRLENBQUMsQ0FBQyxDQUFDLENBQ3RELElBQUksQ0FBQyxDQUFDLENBQUM7UUFFUixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELGdCQUFnQjtRQUNaLE1BQU0sUUFBUSxHQUFRLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sU0FBUyxHQUFPLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sV0FBVyxHQUFLLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxNQUFNLFFBQVEsR0FBUSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFeEQsTUFBTSxTQUFTLEdBQ1gsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUU7Y0FDdEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FDL0M7UUFFRCxRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssU0FBUyxHQUFHLFFBQVE7Z0JBQ3JCLHlCQUFtQjtZQUN2QixLQUFLLFNBQVMsR0FBRyxXQUFXO2dCQUN4QiwrQkFBc0I7WUFDMUIsS0FBSyxTQUFTLEdBQUcsU0FBUztnQkFDdEIsMkJBQW9CO1lBQ3hCLEtBQUssU0FBUyxHQUFHLFFBQVE7Z0JBQ3JCLHlCQUFtQjtTQUMxQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFDRCxZQUFZO1FBRVIsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUM5QjtnQkFDSSwrQkFBc0I7WUFDMUI7Z0JBQ0ksMkJBQW9CO1lBQ3hCO2dCQUNJLHlCQUFtQjtZQUN2QjtnQkFDSSx1QkFBa0I7U0FDekI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBQ0QsZUFBZTtRQUNYLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDbkQsQ0FBQztJQUNELFdBQVcsQ0FBQyxPQUE2QjtRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBSyxDQUFDLFdBQVcsSUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUNoRCxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFPLENBQUMsU0FBUyxJQUFRLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEQsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFO1lBQzlDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN0RCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBTyxDQUFDLFNBQVMsSUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87WUFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBSSxDQUFDLFlBQVksSUFBSyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUU3Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUM3QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtjQUN6Qyx5QkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sbUJBQWMsQ0FBQyxDQUN6RCxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUMzQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRTtjQUN2Qyx5QkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sbUJBQWMsQ0FBQyxDQUN6RCxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWhCLE9BQU8sT0FBc0IsQ0FBQztJQUNsQyxDQUFDO0lBQ0ssS0FBSyxDQUFDLE9BQTZCOzs7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUUxQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXpFLGFBQWE7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFFeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDdkIsTUFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFMUIsT0FBTyxlQUFXLFlBQUc7UUFDekIsQ0FBQztLQUFBO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzQyxPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSTtRQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQixPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUssVUFBVTs7WUFDWixNQUFNLE9BQU8sR0FBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hFLE1BQU0sU0FBUyxHQUFVLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEUsTUFBTSxVQUFVLEdBQUcsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDcEQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVU7b0JBQ3pCLDBCQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQ1gsTUFBTSxNQUFNLEdBQUc7NEJBQ1gsUUFBUSxFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztrQ0FDOUIsVUFBVTs0QkFDaEIsSUFBSSxFQUFFLEVBQUU7eUJBQ1gsQ0FBQzt3QkFDRixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwRCxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFDOzRCQUM3QixLQUFLLE1BQU07Z0NBQ1AsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO2dDQUN0QyxNQUFNOzRCQUNWLEtBQUssU0FBUztnQ0FDVixNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsU0FBUyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO2dDQUNwRCxNQUFNOzRCQUNWLEtBQUssT0FBTztnQ0FDUixNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUM7Z0NBQzlCLE1BQU07NEJBQ1YsS0FBSyxNQUFNO2dDQUNQLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2dDQUN6RCxNQUFNOzRCQUNWLEtBQUssS0FBSztnQ0FDTixNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztnQ0FDekQsTUFBTTt5QkFDYjt3QkFDRCxPQUFPLE1BQU0sQ0FBQztvQkFDbEIsQ0FBQyxDQUFDLENBQ0w7YUFDSjtZQUNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO29CQUNyQiwwQkFBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQ2pDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ1QsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzswQkFDekQsVUFBVSxDQUNmLENBQ0o7YUFDSjtZQUNELE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixDQUFDO0tBQUE7SUFDSyxZQUFZOztZQUNkLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQzFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FDL0U7WUFDRCxNQUFNLFVBQVUsR0FDWixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRTtrQkFDdEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FDL0M7WUFDRCxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sRUFBRTtnQkFDdkIsYUFBYTtnQkFDYixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUc7b0JBQ3BCLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDO29CQUN4RSxnQ0FBZ0M7b0JBQ2hDLENBQUMsRUFDRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDOzBCQUN4RSxVQUFVO2lCQUVuQixDQUFDO2dCQUNGLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNoRCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNoQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNsQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN2QyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUM1QyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN2QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2QsTUFBTSxPQUFPLEdBQVMsSUFBSSxJQUFJLENBQzFCLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSzt3QkFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzt3QkFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBRXJCLENBQUM7b0JBQ0YsZ0NBQWdDO29CQUNoQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVU7d0JBQ3JCLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs4QkFDakQsVUFBVSxDQUNmO2lCQUNKO2dCQUNELE1BQU0sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQjtRQUVMLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBRSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBZ0JLLFFBQVEsQ0FBQyxLQUFTOztZQUNwQixNQUFNLElBQUksR0FBUSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2xGLGFBQWE7WUFDYixNQUFNLElBQUksR0FBUSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsYUFBYTtZQUNiLE1BQU0sS0FBSyxHQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUVqQyxNQUFNLGFBQWEsR0FBZSxFQUFFLENBQUM7WUFFckM7Z0JBQ0ksTUFBTSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN2RSxhQUFhO2dCQUNiLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUV0RSxNQUFNLG1CQUFtQixHQUFpQyxFQUFFLENBQUM7Z0JBQzdELGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFpQixFQUFFLEVBQUU7b0JBQ3pDLGFBQWE7b0JBQ2IsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUNsRixDQUFDLENBQUMsQ0FBQztnQkFFSCxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxpQkFBcUIsRUFBRSxFQUFFO29CQUNqRCxtQkFBbUIsQ0FBQyxJQUFJO29CQUNwQixhQUFhO29CQUNiLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUM5RCxDQUFDO2dCQUNOLENBQUMsQ0FBQyxDQUFDO2dCQUVILG1CQUFtQixDQUFDLElBQUksQ0FDcEIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDbEUsQ0FBQztnQkFFRixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQzthQUM5QztZQUVELE1BQU0sTUFBTSxHQUFTLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDdkMsSUFBSSxDQUFDLENBQUMsRUFBTSxFQUFFLEVBQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUN6RTtZQUNELEtBQUssTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLElBQUksTUFBTSxFQUFFO2dCQUMvRCxhQUFhO2dCQUNiLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxhQUFhO2dCQUNiLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUV2RSxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7b0JBQ3ZCLGFBQWE7b0JBQ2IsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQzFFO2FBQ0o7WUFFRCwwREFBMEQ7WUFDMUQsS0FBSyxNQUFNLElBQUksSUFBSSxhQUFhLEVBQUU7Z0JBQzlCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGdDQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNmO1FBRUwsQ0FBQztLQUFBO0lBQ0QsTUFBTTtRQUNGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFdBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxPQUFPLHNCQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3hDLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztZQUNyQixPQUFPLEVBQUUsbUJBQVU7WUFDbkIsSUFBSSxFQUFFO2dCQUNGLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQzVCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU07Z0JBQzlCLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtnQkFDM0IsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPO2dCQUN6QixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDbEMsT0FBTzt3QkFDSCxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7d0JBQ3hCLFlBQVksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVE7d0JBQ2pDLFlBQVksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVE7d0JBQ2pDLFlBQVksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUk7cUJBQ3ZELENBQUM7Z0JBQ04sQ0FBQyxDQUFDO2dCQUNGLElBQUksRUFBRTtvQkFDRixRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRO29CQUNoQyxZQUFZLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtvQkFDekMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7b0JBQ2pFLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FDNUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNsQztpQkFDSjthQUNKO1NBQ0osQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7O0FBckdNLG9CQUFXLEdBQWM7SUFDNUIsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFO0lBQzFCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsU0FBUyxFQUFFLEVBQUU7SUFDYixXQUFXLEVBQUUsQ0FBQztJQUNkLFNBQVMsRUFBRSxFQUFFO0lBQ2IsU0FBUyxFQUFFO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsRUFBRTtLQUNSO0lBQ0QsVUFBVSxFQUFFLEdBQUc7SUFDZixXQUFXLEVBQUUsR0FBRztDQUNuQixDQUFDO0FBL1BOLDJCQXlWQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0WEQsbUdBQWtEO0FBQ2xELDRHQUE4RDtBQUU5RDtJQUNJLFlBQVksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQTJCO1FBaUJyRTs7Ozs7OzthQU9LO1FBQ0wsY0FBUyxHQU9MLEVBQUUsQ0FBQztRQW1GUDs7O2FBR0s7UUFDTCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBdEh2QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBVyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBYSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBZ0IsQ0FBQztJQUN0QyxDQUFDO0lBd0REOzs7U0FHSztJQUNMLElBQUk7UUFDQSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGFBQWE7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBT0Q7Ozs7U0FJSztJQUNMLElBQUk7UUFDQSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUMsU0FBUyxDQUNuQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUM5QyxDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVEOztTQUVLO0lBQ0MsS0FBSyxDQUFDLEdBQUcsSUFBVzs7WUFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxvQkFBUSxDQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFDakIsb0JBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQ3pCLENBQUM7YUFDTDtZQUNELE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQztLQUFBO0lBT0Q7OztTQUdLO0lBQ0wsT0FBTztRQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7OztTQUdLO0lBQ0wsQ0FBQyxDQUFDLFNBQThCLEVBQUUsR0FBRyxNQUFZO1FBQzdDLElBQUksQ0FBQyxjQUFLO1lBQUUsT0FBTztRQUVuQixNQUFNLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7O1NBRUs7SUFDRyxZQUFZO1FBQ2hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNYLEdBQUcsSUFBSSxDQUFDLElBQUksMkRBQTJELENBQzFFLENBQUM7U0FDTDtJQUNMLENBQUM7SUFFRCxJQUFJLENBQUMsUUFBMEI7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBaktELDRCQWlLQzs7Ozs7Ozs7Ozs7Ozs7O0FDcktELG9GQUFtRDtBQUV0QyxhQUFLLEdBQVcsYUFBb0IsS0FBSyxhQUFhLENBQUM7QUFFcEUsSUFBWSxFQVVYO0FBVkQsV0FBWSxFQUFFO0lBQ1YsNEJBQXNCO0lBQ3RCLG1CQUFhO0lBQ2IsNEJBQXNCO0lBQ3RCLDhCQUF3QjtJQUN4QixzQ0FBZ0M7SUFDaEMscUJBQWU7SUFDZiw4QkFBd0I7SUFDeEIsOEJBQXdCO0lBQ3hCLDhCQUF3QjtBQUM1QixDQUFDLEVBVlcsRUFBRSxHQUFGLFVBQUUsS0FBRixVQUFFLFFBVWI7QUFFWSx3QkFBZ0IsR0FBRztJQUM1QixpQkFBWSxFQUFRLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzNDLG1CQUFhLEVBQU8sSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQy9DLHFCQUFjLEVBQU0sSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ2hELHlCQUFnQixFQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDcEQsbUJBQWEsRUFBTyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3hELENBQUM7QUFFVyxlQUFPLEdBQUc7SUFDbkIsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDWixhQUFhLEVBQUUsRUFBRTtLQUNwQjtDQUNKLENBQUM7QUFFVyxrQkFBVSxHQUFXLFdBQVcsQ0FBQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJ0RCxtR0FBOEM7QUFFOUMsZUFBc0IsR0FBTztJQUN6QixPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVE7V0FDdkIsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLFFBQVE7V0FDekIsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLFFBQVE7V0FDekIsT0FBTyxHQUFHLENBQUMsS0FBSyxLQUFLLFFBQVE7V0FDN0IsT0FBTyxHQUFHLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FDcEM7QUFDTCxDQUFDO0FBUEQsc0JBT0M7QUFDRCxnQkFBdUIsR0FBTztJQUMxQixPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVE7V0FDdkIsT0FBTyxHQUFHLENBQUMsTUFBTSxLQUFLLFFBQVE7V0FDOUIsT0FBTyxHQUFHLENBQUMsTUFBTSxLQUFLLFFBQVE7V0FDOUIsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVE7V0FDNUIsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FDbEM7QUFDTCxDQUFDO0FBUEQsd0JBT0M7QUFDRCxtQkFBMEIsR0FBTztJQUM3QixPQUFPO1FBQ0g7WUFDSSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDYixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSztZQUN2QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDZCxFQUFFO1lBQ0MsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUs7WUFDekIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUs7WUFDdkIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU07U0FDM0IsRUFBRTtZQUNDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLO1lBQ3pCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNO1lBQzFCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNYLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNO1NBQzNCLEVBQUU7WUFDQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDYixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTTtZQUMxQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDWCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDZDtLQUNKLENBQUM7QUFDTixDQUFDO0FBeEJELDhCQXdCQztBQUVELGtCQUF5QixHQUFlO0lBQ3BDLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLE9BQU87UUFDSCxDQUFDLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBSSxDQUFDO1FBQzFCLEtBQUssRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQztRQUNoQyxNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFPLENBQUM7S0FDckMsQ0FBQztBQUNOLENBQUM7QUFSRCw0QkFRQztBQUVELG9CQUEyQixHQUFHLElBQVU7SUFDcEMsTUFBTSxNQUFNLEdBQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3BCLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzVDLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtnQkFDZixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDcEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO2lCQUM5QjtxQkFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQ3JFLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNILE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQ3ZCO2FBQ0o7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUN2QjtTQUNKO0tBQ0o7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBbEJELGdDQWtCQztBQUVZLHNCQUFjLEdBRXZCO0lBQ0EsTUFBTSxRQUFRLEdBQUcsVUFBVSxLQUFXLEVBQUcsR0FBUyxFQUFHLElBQTBCO1FBQzNFLE1BQU0sU0FBUyxHQUFTLFVBQVUsUUFBUTtZQUN0QyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ1QsTUFBTSxPQUFPLEdBQVMsVUFBVSxRQUFRO1lBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztZQUM3QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDUCxNQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7UUFDekI7WUFDSSxNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQyxPQUFPLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3BELEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2xCO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQzdFLENBQUM7SUFDTixDQUFDLENBQUM7SUFDRixPQUFPO1FBQ0gsSUFBSSxDQUFDLEtBQVcsRUFBRyxHQUFTO1lBQ3hCLE9BQU8sUUFBUSxDQUNYLEtBQUssRUFBRyxHQUFHLEVBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FDbkQsQ0FBQztRQUNOLENBQUM7UUFDRCxPQUFPLENBQUMsS0FBVyxFQUFHLEdBQVM7WUFDM0IsT0FBTyxRQUFRLENBQ1gsS0FBSyxFQUFHLEdBQUcsRUFDWCxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUMxQztZQUNMLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQztRQUNELEtBQUssQ0FBQyxLQUFXLEVBQUcsR0FBUztZQUN6QixPQUFPLFFBQVEsQ0FDWCxLQUFLLEVBQUcsR0FBRyxFQUNYLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3hCO3FCQUFNO29CQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztpQkFDMUM7WUFDTCxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBVyxFQUFHLEdBQVM7WUFDeEIsT0FBTyxRQUFRLENBQ1gsS0FBSyxFQUFHLEdBQUcsRUFDWCxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNMLEdBQUc7b0JBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQ3RELFFBQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNqQyxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUM7UUFDRCxHQUFHLENBQUMsS0FBVyxFQUFHLEdBQVM7WUFDdkIsT0FBTyxRQUFRLENBQ1gsS0FBSyxFQUFHLEdBQUcsRUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUM3RCxDQUFDO1FBQ04sQ0FBQztLQUNKLENBQUM7QUFDTixDQUFDLEVBQUUsQ0FBQztBQUVKLGtCQUF5QixHQUFHLElBQVU7SUFDbEMsTUFBTSxPQUFPLEdBQUc7UUFDWixDQUFDLEVBQUUsUUFBUTtRQUNYLENBQUMsRUFBRSxRQUFRO0tBQ2QsQ0FBQztJQUNGLE1BQU0sV0FBVyxHQUFHO1FBQ2hCLENBQUMsRUFBRSxDQUFDLFFBQVE7UUFDWixDQUFDLEVBQUUsQ0FBQyxRQUFRO0tBQ2YsQ0FBQztJQUNGLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3BCLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN6RSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUFFLFdBQVcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0tBQzlFO0lBQ0QsT0FBTztRQUNILENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNaLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNaLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0tBQ3BDLENBQUM7QUFDTixDQUFDO0FBckJELDRCQXFCQztBQUVELHdCQUErQixLQUFXLEVBQUUsS0FBVztJQUNuRCxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUMzRCxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUUzRCxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM5QyxNQUFNLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwRixhQUFhO0lBQ2IsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0tBQ3hDLENBQUM7SUFDRixJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDbkIsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUQsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2QsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQzttQkFDOUQsRUFBRSxLQUFLLEVBQUUsQ0FDWDtTQUNSO1FBQ0QsSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLENBQUM7bUJBQzlELEVBQUUsS0FBSyxFQUFFLENBQ1g7U0FDUjtRQUNELE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLENBQUM7ZUFDOUQsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLENBQUMsQ0FDcEU7S0FDSjtJQUNELElBQUksTUFBTSxLQUFLLFFBQVE7UUFBRSxFQUFFLElBQUksTUFBTSxDQUFDO0lBQ3RDLElBQUksTUFBTSxLQUFLLFFBQVE7UUFBRSxFQUFFLElBQUksTUFBTSxDQUFDO0lBQ3RDLElBQUksTUFBTSxLQUFLLENBQUM7UUFBRSxFQUFFLElBQUksTUFBTSxDQUFDO0lBQy9CLElBQUksTUFBTSxLQUFLLENBQUM7UUFBRSxFQUFFLElBQUksTUFBTSxDQUFDO0lBRS9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1VBQ3ZFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FDcEQ7SUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztVQUN2RSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQ3BEO0lBQ0QsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3RCLE9B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YTtBQUU3QiwwR0FBZ0U7QUFBdkQsdUNBQU8sQ0FBYTtBQUU3Qix5SEFBa0U7QUFBekQsMkNBQU8sQ0FBZTtBQUMvQixxR0FPNEI7QUFOeEIsd0RBQWdCO0FBQ2hCLDhEQUFtQjtBQUNuQiw4Q0FBVztBQUNYLHNEQUFlO0FBQ2YsOERBQW1CO0FBQ25CLGtEQUFhOzs7Ozs7Ozs7Ozs7O0FDeEJqQixjQUFjLG1CQUFPLENBQUMsb05BQTJHOztBQUVqSSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImNvbG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZG9jcy9jb2xvcnMudHNcIik7XG4iLCJpbXBvcnQgeyBkcmF3LCBkcmF3RnJvbSwgZHJhd1dpdGhBbmltYXRpb24gfSBmcm9tICdAL3RoZW1lcy9jb2xvcnMvZW50cnknO1xuXG5jb25zdCBldmVudHMgPSBbe1xuICAgIGRhdGUgOicyMDE0LTUnLFxuICAgIHRpdGxlOiflvIDlp4sg6Ieq5a2mV2Vi5byA5Y+RJyxcbn0sIHtcbiAgICB0aXRsZTon5YWl5a2mIOmdkuWym+eQhuW3peWkp+WtpicsXG4gICAgZGF0ZSA6JzIwMTQtOS0xJyxcbiAgICBlbmREYXRlIDonMjAxOC03LTI5Jyxcbn0sIHtcbiAgICBkYXRlIDonMjAxNC0xMicsXG4gICAgdGl0bGU6J+mdkueQhldlYuW8gOWPkeWNj+S8micsXG4gICAgdGV4dCA6J+WIm+W7uumdkueQhldlYuW8gOWPkeWNj+S8mu+8jOaLheW9k+S8mumVvycsXG4gICAgZW5kRGF0ZSA6JzIwMTYtNicsXG4gICAgZW5kVGV4dCA6J+WNj+S8muaNouWxiicsXG59LCB7XG4gICAgZGF0ZSA6JzIwMTUtNicsXG4gICAgdGl0bGU6J+azqOWGjCDpnZLlspvljZPnhLbni6znq4vnvZHnu5znp5HmioDmnInpmZDlhazlj7gnLFxuICAgIGVuZERhdGUgOicyMDE3LTYtMTknLFxufSwge1xuICAgIHRpdGxlIDonMzYw5YmN56uv5pif6K6h5YiSJyxcbiAgICB0ZXh0IDon44CKMzYw5YmN56uv5pif6K6h5YiS44CL55SxMzYw5YmN56uv5Zui6Zif5ZKM5qCh5Zut5oub6IGY5Zui6Zif5ZCI5Yqe77yM6Z2i5ZCR5Zyo5qCh5aSn5a2m55Sf77yM5Li65Z+55YW75pyA5LyY56eA5pyA5pyJ5r2c5Yqb55qE5YmN56uv5Lq65omN5Li+5Yqe55qE5YmN56uv5oqA5pyv57O75YiX6K++56iLJyxcbiAgICBkYXRlIDonMjAxNy00LTknLFxuICAgIGVuZERhdGUgOicyMDE3LTQtMTQnLFxuICAgIGZvbGRlZDogdHJ1ZSxcbn0sIHtcbiAgICB0aXRsZSA6J01vemlsbGEg5a6e5LmgJyxcbiAgICBkYXRlIDonMjAxNy03LTE0JyxcbiAgICBlbmREYXRlIDonMjAxOC0yLTknLFxufSwge1xuICAgIHRpdGxlIDon55m+5bqmIEtJVFQuQUkg5a6e5LmgJyxcbiAgICBkYXRlIDonMjAxOC0zLTIxJyxcbiAgICBlbmREYXRlIDonMjAxOC01LTI4JyxcbiAgICBlbmRUZXh0IDogJ1RlYW0g6KKr6Kej5pWjJyxcbn0sIHtcbiAgICB0aXRsZSA6J0tJVFQuQUkg5Zui6ZifIDLlgI3nroDljZXlpZYnLFxuICAgIGRhdGUgOicyMDE4LTYtMjknLFxufSwge1xuICAgIHRpdGxlIDon55m+5bqmIFNXQU4g5Zui6ZifJyxcbiAgICBkYXRlIDonMjAxOC03LTQnLFxuICAgIGVuZERhdGUgOidub3cnLFxufSwge1xuICAgIHRpdGxlIDonTW96aWxsYSDlrp7kuaAgMTIzJyxcbiAgICBkYXRlIDonMjAxNy05LTEwJyxcbn0sIHtcbiAgICB0aXRsZSA6J01vemlsbGEg5a6e5LmgIDIzMycsXG4gICAgZGF0ZSA6JzIwMTctOC0xMCcsXG59LCB7XG4gICAgdGl0bGU6JzIwMTUtNy0yNScsXG4gICAgZGF0ZSA6JzIwMTUtNy0yNScsXG59LCB7XG4gICAgdGl0bGU6JzIwMTUtMScsXG4gICAgZGF0ZSA6JzIwMTUtMScsXG59LCB7XG4gICAgdGl0bGU6JzIwMTUtNScsXG4gICAgZGF0ZSA6JzIwMTUtNS0xJyxcbn1dO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICAgIC8vIE5vcm1hbCBkcmF3XG4gICAgY29uc3QgdGltZWxpbmUxID0gYXdhaXQgZHJhdygnI2FwcCcsIGV2ZW50cyk7XG5cbiAgICAvLyAvLyBEcmF3IHdpdGggYW5pbWF0aW9uXG4gICAgLy8gYXdhaXQgbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIDUwMCkpO1xuICAgIC8vIHRpbWVsaW5lMS5oaWRlKCk7XG4gICAgLy8gY29uc3QgdGltZWxpbmUyID0gYXdhaXQgZHJhd1dpdGhBbmltYXRpb24oJyNhcHAnLCBldmVudHMpO1xuICAgIC8vXG4gICAgLy8gLy8gRHJhdyB3aXRoIGEgZGF0YSBvZiBvbmUgdGltZWxpbmUgZXhwb3J0XG4gICAgLy8gYXdhaXQgbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIDUwMCkpO1xuICAgIC8vIHRpbWVsaW5lMi5oaWRlKCk7XG4gICAgLy8gYXdhaXQgZHJhd0Zyb20oJyNhcHAnLCB0aW1lbGluZTEuZXhwb3J0KCkpO1xufSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zaG9ydC1uaWdodCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAuc2hvcnQtbmlnaHQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gIC5zaG9ydC1uaWdodC5heGlzX21pbGVzdG9uZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4OyB9XFxuICAuc2hvcnQtbmlnaHQuZXZlbnRfYm9keSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIHBhZGRpbmc6IDdweCAxMHB4IDdweCA1cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAgIC5zaG9ydC1uaWdodC5ldmVudF9ib2R5LmZvbGRlZCB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgLnNob3J0LW5pZ2h0LmV2ZW50X2JvZHkuZm9sZGVkIC50aXRsZSwgLnNob3J0LW5pZ2h0LmV2ZW50X2JvZHkuZm9sZGVkIC5mb2xkZWRUZXh0IHtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG4gICAgLnNob3J0LW5pZ2h0LmV2ZW50X2JvZHkgLnRpdGxlLCAuc2hvcnQtbmlnaHQuZXZlbnRfYm9keSAuZm9sZGVkVGV4dCB7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XFxuICAgIC5zaG9ydC1uaWdodC5ldmVudF9ib2R5IC5kYXRlIHtcXG4gICAgICBmb250LXNpemU6IDAuNmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuICAuc2hvcnQtbmlnaHQuZXZlbnRfYXhpcy1lbmRUZXh0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAwIDAgMnB4IDNweDtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgdGV4dC1pbmRlbnQ6IDAuNWVtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2hvcnQtbmlnaHQuY29sb3JzLmF4aXNfbWlsZXN0b25lIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgcGFkZGluZzogMnB4IDdweDsgfVxcblxcbi5zaG9ydC1uaWdodC5jb2xvcnMuZXZlbnRfYm9keSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDdweCAxMHB4IDdweCA1cHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgLnNob3J0LW5pZ2h0LmNvbG9ycy5ldmVudF9ib2R5IC5mb2xkZWQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnNob3J0LW5pZ2h0LmNvbG9ycy5ldmVudF9ib2R5IC5mb2xkZWQgLnRpdGxlLCAuc2hvcnQtbmlnaHQuY29sb3JzLmV2ZW50X2JvZHkgLmZvbGRlZCAuZm9sZGVkVGV4dCB7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuICAuc2hvcnQtbmlnaHQuY29sb3JzLmV2ZW50X2JvZHkgLnRpdGxlLCAuc2hvcnQtbmlnaHQuY29sb3JzLmV2ZW50X2JvZHkgLmZvbGRlZFRleHQge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XFxuICAuc2hvcnQtbmlnaHQuY29sb3JzLmV2ZW50X2JvZHkgLmRhdGUge1xcbiAgICBmb250LXNpemU6IDAuNmVtO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4uc2hvcnQtbmlnaHQuY29sb3JzLmV2ZW50X2F4aXMtZW5kVGV4dCB7XFxuICBwYWRkaW5nOiAwIDAgMnB4IDNweDtcXG4gIGZvbnQtc2l6ZTogMC44ZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKiFcbiAqIE1vdmVUbyAtIEEgbGlnaHR3ZWlnaHQgc2Nyb2xsIGFuaW1hdGlvbiBqYXZhc2NyaXB0IGxpYnJhcnkgd2l0aG91dCBhbnkgZGVwZW5kZW5jeS5cbiAqIFZlcnNpb24gMS43LjQgKDI4LTA5LTIwMTggMTY6MDIpXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqIENvcHlyaWdodCAyMDE4IEhhc2FuIEF5ZG/En2R1IDxoc25heWRkQGdtYWlsLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG52YXIgTW92ZVRvID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICogRGVmYXVsdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICB0b2xlcmFuY2U6IDAsXG4gICAgZHVyYXRpb246IDgwMCxcbiAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjaygpIHt9IH07XG5cblxuICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBlYXNlT3V0UXVhcnQgRWFzaW5nIEZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtICB7bnVtYmVyfSB0IC0gY3VycmVudCB0aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtICB7bnVtYmVyfSBiIC0gc3RhcnQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGMgLSBjaGFuZ2UgaW4gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGQgLSBkdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBjYWxjdWxhdGVkIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIGZ1bmN0aW9uIGVhc2VPdXRRdWFydCh0LCBiLCBjLCBkKSB7XG4gICAgdCAvPSBkO1xuICAgIHQtLTtcbiAgICByZXR1cm4gLWMgKiAodCAqIHQgKiB0ICogdCAtIDEpICsgYjtcbiAgfVxuXG4gIC8qKlxuICAgICAqIE1lcmdlIHR3byBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gb2JqMVxuICAgICAqIEBwYXJhbSAge29iamVjdH0gb2JqMlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gbWVyZ2VkIG9iamVjdFxuICAgICAqL1xuICBmdW5jdGlvbiBtZXJnZU9iamVjdChvYmoxLCBvYmoyKSB7XG4gICAgdmFyIG9iajMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhvYmoxKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIG9iajNbcHJvcGVydHlOYW1lXSA9IG9iajFbcHJvcGVydHlOYW1lXTtcbiAgICB9KTtcblxuICAgIE9iamVjdC5rZXlzKG9iajIpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgb2JqM1twcm9wZXJ0eU5hbWVdID0gb2JqMltwcm9wZXJ0eU5hbWVdO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmozO1xuICB9O1xuXG4gIC8qKlxuICAgICAgKiBDb252ZXJ0cyBjYW1lbCBjYXNlIHRvIGtlYmFiIGNhc2VcbiAgICAgICogQHBhcmFtICB7c3RyaW5nfSB2YWwgdGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAgICAgICovXG4gIGZ1bmN0aW9uIGtlYmFiQ2FzZSh2YWwpIHtcbiAgICByZXR1cm4gdmFsLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24gKCQxKSB7XG4gICAgICByZXR1cm4gJy0nICsgJDEudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICAgICogTW92ZVRvIENvbnN0cnVjdG9yXG4gICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9wdGlvbnNcbiAgICAgICogQHBhcmFtIHtvYmplY3R9IGVhc2VGdW5jdGlvbnMgQ3VzdG9tIGVhc2UgZnVuY3Rpb25zXG4gICAgICAqL1xuICBmdW5jdGlvbiBNb3ZlVG8oKSB7dmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O3ZhciBlYXNlRnVuY3Rpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZU9iamVjdChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5lYXNlRnVuY3Rpb25zID0gbWVyZ2VPYmplY3QoeyBlYXNlT3V0UXVhcnQ6IGVhc2VPdXRRdWFydCB9LCBlYXNlRnVuY3Rpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIFJlZ2lzdGVyIGEgZG9tIGVsZW1lbnQgYXMgdHJpZ2dlclxuICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBkb20gRG9tIHRyaWdnZXIgZWxlbWVudFxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufHZvaWR9IHVucmVnaXN0ZXIgZnVuY3Rpb25cbiAgICAgKi9cbiAgTW92ZVRvLnByb3RvdHlwZS5yZWdpc3RlclRyaWdnZXIgPSBmdW5jdGlvbiAoZG9tLCBjYWxsYmFjaykge3ZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKCFkb20pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaHJlZiA9IGRvbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCBkb20uZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuICAgIC8vIFRoZSBlbGVtZW50IHRvIGJlIHNjcm9sbGVkXG4gICAgdmFyIHRhcmdldCA9IGhyZWYgJiYgaHJlZiAhPT0gJyMnID9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmLnN1YnN0cmluZygxKSkgOlxuICAgIGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIG9wdGlvbnMgPSBtZXJnZU9iamVjdCh0aGlzLm9wdGlvbnMsIF9nZXRPcHRpb25zRnJvbVRyaWdnZXJEb20oZG9tLCB0aGlzLm9wdGlvbnMpKTtcblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdGlvbnMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfdGhpcy5tb3ZlKHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyLCBmYWxzZSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge3JldHVybiBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lciwgZmFsc2UpO307XG4gIH07XG5cbiAgLyoqXG4gICAgICAqIE1vdmVcbiAgICAgICogU2Nyb2xscyB0byBnaXZlbiBlbGVtZW50IGJ5IHVzaW5nIGVhc2VPdXRRdWFydCBmdW5jdGlvblxuICAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudHxudW1iZXJ9IHRhcmdldCBUYXJnZXQgZWxlbWVudCB0byBiZSBzY3JvbGxlZCBvciB0YXJnZXQgcG9zaXRpb25cbiAgICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIEN1c3RvbSBvcHRpb25zXG4gICAgICAqL1xuICBNb3ZlVG8ucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7dmFyIF90aGlzMiA9IHRoaXM7dmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIGlmICh0YXJnZXQgIT09IDAgJiYgIXRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBtZXJnZU9iamVjdCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgdmFyIGRpc3RhbmNlID0gdHlwZW9mIHRhcmdldCA9PT0gJ251bWJlcicgPyB0YXJnZXQgOiB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIHZhciBmcm9tID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHZhciBzdGFydFRpbWUgPSBudWxsO1xuICAgIHZhciBsYXN0UGFnZVlPZmZzZXQgPSB2b2lkIDA7XG4gICAgZGlzdGFuY2UgLT0gb3B0aW9ucy50b2xlcmFuY2U7XG5cbiAgICAvLyByQUYgbG9vcFxuICAgIHZhciBsb29wID0gZnVuY3Rpb24gbG9vcChjdXJyZW50VGltZSkge1xuICAgICAgdmFyIGN1cnJlbnRQYWdlWU9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgICAgaWYgKCFzdGFydFRpbWUpIHtcbiAgICAgICAgLy8gVG8gc3RhcnRzIHRpbWUgZnJvbSAxLCB3ZSBzdWJ0cmFjdGVkIDEgZnJvbSBjdXJyZW50IHRpbWVcbiAgICAgICAgLy8gSWYgdGltZSBzdGFydHMgZnJvbSAxIFRoZSBmaXJzdCBsb29wIHdpbGwgbm90IGRvIGFueXRoaW5nLFxuICAgICAgICAvLyBiZWNhdXNlIGVhc2luZyB2YWx1ZSB3aWxsIGJlIHplcm9cbiAgICAgICAgc3RhcnRUaW1lID0gY3VycmVudFRpbWUgLSAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGltZUVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcblxuICAgICAgaWYgKGxhc3RQYWdlWU9mZnNldCkge1xuICAgICAgICBpZiAoXG4gICAgICAgIGRpc3RhbmNlID4gMCAmJiBsYXN0UGFnZVlPZmZzZXQgPiBjdXJyZW50UGFnZVlPZmZzZXQgfHxcbiAgICAgICAgZGlzdGFuY2UgPCAwICYmIGxhc3RQYWdlWU9mZnNldCA8IGN1cnJlbnRQYWdlWU9mZnNldClcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLmNhbGxiYWNrKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxhc3RQYWdlWU9mZnNldCA9IGN1cnJlbnRQYWdlWU9mZnNldDtcblxuICAgICAgdmFyIHZhbCA9IF90aGlzMi5lYXNlRnVuY3Rpb25zW29wdGlvbnMuZWFzaW5nXShcbiAgICAgIHRpbWVFbGFwc2VkLCBmcm9tLCBkaXN0YW5jZSwgb3B0aW9ucy5kdXJhdGlvbik7XG5cblxuICAgICAgd2luZG93LnNjcm9sbCgwLCB2YWwpO1xuXG4gICAgICBpZiAodGltZUVsYXBzZWQgPCBvcHRpb25zLmR1cmF0aW9uKSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIGRpc3RhbmNlICsgZnJvbSk7XG4gICAgICAgIG9wdGlvbnMuY2FsbGJhY2sodGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgfTtcblxuICAvKipcbiAgICAgICogQWRkcyBjdXN0b20gZWFzZSBmdW5jdGlvblxuICAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBuYW1lIEVhc2UgZnVuY3Rpb24gbmFtZVxuICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAgIEVhc2UgZnVuY3Rpb25cbiAgICAgICovXG4gIE1vdmVUby5wcm90b3R5cGUuYWRkRWFzZUZ1bmN0aW9uID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgdGhpcy5lYXNlRnVuY3Rpb25zW25hbWVdID0gZm47XG4gIH07XG5cbiAgLyoqXG4gICAgICAqIFJldHVybnMgb3B0aW9ucyB3aGljaCBjcmVhdGVkIGZyb20gdHJpZ2dlciBkb20gZWxlbWVudFxuICAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZG9tIFRyaWdnZXIgZG9tIGVsZW1lbnRcbiAgICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIFRoZSBpbnN0YW5jZSdzIG9wdGlvbnNcbiAgICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgb3B0aW9ucyB3aGljaCBjcmVhdGVkIGZyb20gdHJpZ2dlciBkb20gZWxlbWVudFxuICAgICAgKi9cbiAgZnVuY3Rpb24gX2dldE9wdGlvbnNGcm9tVHJpZ2dlckRvbShkb20sIG9wdGlvbnMpIHtcbiAgICB2YXIgZG9tT3B0aW9ucyA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgdmFsdWUgPSBkb20uZ2V0QXR0cmlidXRlKCdkYXRhLW10LScgKyBrZWJhYkNhc2Uoa2V5KSk7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZG9tT3B0aW9uc1trZXldID0gaXNOYU4odmFsdWUpID8gdmFsdWUgOiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkb21PcHRpb25zO1xuICB9XG5cbiAgcmV0dXJuIE1vdmVUbztcbn0oKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gTW92ZVRvO1xufSBlbHNlIHtcbiAgd2luZG93Lk1vdmVUbyA9IE1vdmVUbztcbn0iLCJpbXBvcnQgeyBSb3VnaEdlbmVyYXRvckFzeW5jIH0gZnJvbSAnLi9nZW5lcmF0b3ItYXN5bmMnO1xuaW1wb3J0IHsgUm91Z2hDYW52YXNCYXNlIH0gZnJvbSAnLi9jYW52YXMtYmFzZSc7XG5leHBvcnQgY2xhc3MgUm91Z2hDYW52YXNBc3luYyBleHRlbmRzIFJvdWdoQ2FudmFzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY2FudmFzKTtcbiAgICAgICAgdGhpcy5nZW5Bc3luYyA9IG5ldyBSb3VnaEdlbmVyYXRvckFzeW5jKGNvbmZpZyB8fCBudWxsLCB0aGlzLmNhbnZhcyk7XG4gICAgfVxuICAgIGdldCBnZW5lcmF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbkFzeW5jO1xuICAgIH1cbiAgICBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuQXN5bmMuZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuICAgIGFzeW5jIGxpbmUoeDEsIHkxLCB4MiwgeTIsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMubGluZSh4MSwgeTEsIHgyLCB5Miwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGFzeW5jIHJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLnJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgYXN5bmMgZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGFzeW5jIGNpcmNsZSh4LCB5LCBkaWFtZXRlciwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5jaXJjbGUoeCwgeSwgZGlhbWV0ZXIsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBhc3luYyBsaW5lYXJQYXRoKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5saW5lYXJQYXRoKHBvaW50cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGFzeW5jIHBvbHlnb24ocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLnBvbHlnb24ocG9pbnRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgYXN5bmMgYXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCBjbG9zZWQgPSBmYWxzZSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5hcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGFzeW5jIGN1cnZlKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5jdXJ2ZShwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBhc3luYyBwYXRoKGQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZHJhd2luZyA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMucGF0aChkLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGRyYXdpbmcpO1xuICAgICAgICByZXR1cm4gZHJhd2luZztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSb3VnaFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XG5jb25zdCBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnQgY2xhc3MgUm91Z2hDYW52YXNCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJvdWdoUmVuZGVyZXIoKTtcbiAgICB9XG4gICAgZHJhdyhkcmF3YWJsZSkge1xuICAgICAgICBjb25zdCBzZXRzID0gZHJhd2FibGUuc2V0cyB8fCBbXTtcbiAgICAgICAgY29uc3QgbyA9IGRyYXdhYmxlLm9wdGlvbnMgfHwgdGhpcy5nZXREZWZhdWx0T3B0aW9ucygpO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgZm9yIChjb25zdCBkcmF3aW5nIG9mIHNldHMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZHJhd2luZy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IG8uc3Ryb2tlO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gby5zdHJva2VXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1RvQ29udGV4dChjdHgsIGRyYXdpbmcpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdmaWxsUGF0aCc6XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBvLmZpbGwgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdUb0NvbnRleHQoY3R4LCBkcmF3aW5nKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZmlsbFNrZXRjaCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbFNrZXRjaChjdHgsIGRyYXdpbmcsIG8pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwYXRoMkRmaWxsJzoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IG8uZmlsbCB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcDJkID0gbmV3IFBhdGgyRChkcmF3aW5nLnBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKHAyZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdGgyRHBhdHRlcm4nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvYyA9IHRoaXMuY2FudmFzLm93bmVyRG9jdW1lbnQgfHwgKGhhc0RvY3VtZW50ICYmIGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IGRyYXdpbmcuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhjYW52YXMgPSBkb2MuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoY29udGV4dCA9IGhjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJib3ggPSB0aGlzLmNvbXB1dGVCQm94KGRyYXdpbmcucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmJveCAmJiAoYmJveC53aWR0aCB8fCBiYm94LmhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGNvbnRleHQudHJhbnNsYXRlKGJib3gueCB8fCAwLCBiYm94LnkgfHwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoY2FudmFzLndpZHRoID0gc2l6ZVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoY2FudmFzLmhlaWdodCA9IHNpemVbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGxTa2V0Y2goaGNvbnRleHQsIGRyYXdpbmcsIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jdHguY3JlYXRlUGF0dGVybihoY2FudmFzLCAncmVwZWF0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwMmQgPSBuZXcgUGF0aDJEKGRyYXdpbmcucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKHAyZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW5ub3QgcmVuZGVyIHBhdGgyRHBhdHRlcm4uIE5vIGRlZnMvZG9jdW1lbnQgZGVmaW5lZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcHV0ZUJCb3goZCkge1xuICAgICAgICBpZiAoaGFzRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3N2ZycpO1xuICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzAnKTtcbiAgICAgICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGhOb2RlID0gc2VsZi5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdwYXRoJyk7XG4gICAgICAgICAgICAgICAgcGF0aE5vZGUuc2V0QXR0cmlidXRlKCdkJywgZCk7XG4gICAgICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHBhdGhOb2RlKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN2Zyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmJveCA9IHBhdGhOb2RlLmdldEJCb3goKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHN2Zyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJib3g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZmlsbFNrZXRjaChjdHgsIGRyYXdpbmcsIG8pIHtcbiAgICAgICAgbGV0IGZ3ZWlnaHQgPSBvLmZpbGxXZWlnaHQ7XG4gICAgICAgIGlmIChmd2VpZ2h0IDwgMCkge1xuICAgICAgICAgICAgZndlaWdodCA9IG8uc3Ryb2tlV2lkdGggLyAyO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IG8uZmlsbCB8fCAnJztcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGZ3ZWlnaHQ7XG4gICAgICAgIHRoaXMuX2RyYXdUb0NvbnRleHQoY3R4LCBkcmF3aW5nKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gICAgX2RyYXdUb0NvbnRleHQoY3R4LCBkcmF3aW5nKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRyYXdpbmcub3BzKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gaXRlbS5kYXRhO1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtLm9wKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oZGF0YVswXSwgZGF0YVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2JjdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlemllckN1cnZlVG8oZGF0YVswXSwgZGF0YVsxXSwgZGF0YVsyXSwgZGF0YVszXSwgZGF0YVs0XSwgZGF0YVs1XSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3FjdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oZGF0YVswXSwgZGF0YVsxXSwgZGF0YVsyXSwgZGF0YVszXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xpbmVUbyc6XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oZGF0YVswXSwgZGF0YVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkcmF3aW5nLnR5cGUgPT09ICdmaWxsUGF0aCcpIHtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSb3VnaEdlbmVyYXRvciB9IGZyb20gJy4vZ2VuZXJhdG9yJztcbmltcG9ydCB7IFJvdWdoQ2FudmFzQmFzZSB9IGZyb20gJy4vY2FudmFzLWJhc2UnO1xuZXhwb3J0IGNsYXNzIFJvdWdoQ2FudmFzIGV4dGVuZHMgUm91Z2hDYW52YXNCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbmZpZykge1xuICAgICAgICBzdXBlcihjYW52YXMpO1xuICAgICAgICB0aGlzLmdlbiA9IG5ldyBSb3VnaEdlbmVyYXRvcihjb25maWcgfHwgbnVsbCwgdGhpcy5jYW52YXMpO1xuICAgIH1cbiAgICBnZXQgZ2VuZXJhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW47XG4gICAgfVxuICAgIGdldERlZmF1bHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW4uZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuICAgIGxpbmUoeDEsIHkxLCB4MiwgeTIsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZ2VuLmxpbmUoeDEsIHkxLCB4MiwgeTIsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICByZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4ucmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBlbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZ2VuLmVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGNpcmNsZSh4LCB5LCBkaWFtZXRlciwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4uY2lyY2xlKHgsIHksIGRpYW1ldGVyLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgbGluZWFyUGF0aChwb2ludHMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZ2VuLmxpbmVhclBhdGgocG9pbnRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgcG9seWdvbihwb2ludHMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZ2VuLnBvbHlnb24ocG9pbnRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgYXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCBjbG9zZWQgPSBmYWxzZSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4uYXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCBjbG9zZWQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRyYXcoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBjdXJ2ZShwb2ludHMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZ2VuLmN1cnZlKHBvaW50cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZHJhdyhkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIHBhdGgoZCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkcmF3aW5nID0gdGhpcy5nZW4ucGF0aChkLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kcmF3KGRyYXdpbmcpO1xuICAgICAgICByZXR1cm4gZHJhd2luZztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBoYWNodXJlTGluZXNGb3JQb2x5Z29uLCBoYWNodXJlTGluZXNGb3JFbGxpcHNlLCBsaW5lTGVuZ3RoIH0gZnJvbSAnLi9maWxsZXItdXRpbHMnO1xuZXhwb3J0IGNsYXNzIERvdEZpbGxlciB7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIH1cbiAgICBmaWxsUG9seWdvbihwb2ludHMsIG8pIHtcbiAgICAgICAgbyA9IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgY3VydmVTdGVwQ291bnQ6IDQsIGhhY2h1cmVBbmdsZTogMCB9KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBoYWNodXJlTGluZXNGb3JQb2x5Z29uKHBvaW50cywgbyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRvdHNPbkxpbmVzKGxpbmVzLCBvKTtcbiAgICB9XG4gICAgZmlsbEVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvKSB7XG4gICAgICAgIG8gPSBPYmplY3QuYXNzaWduKHt9LCBvLCB7IGN1cnZlU3RlcENvdW50OiA0LCBoYWNodXJlQW5nbGU6IDAgfSk7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gaGFjaHVyZUxpbmVzRm9yRWxsaXBzZShjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIG8sIHRoaXMucmVuZGVyZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5kb3RzT25MaW5lcyhsaW5lcywgbyk7XG4gICAgfVxuICAgIGRvdHNPbkxpbmVzKGxpbmVzLCBvKSB7XG4gICAgICAgIGxldCBvcHMgPSBbXTtcbiAgICAgICAgbGV0IGdhcCA9IG8uaGFjaHVyZUdhcDtcbiAgICAgICAgaWYgKGdhcCA8IDApIHtcbiAgICAgICAgICAgIGdhcCA9IG8uc3Ryb2tlV2lkdGggKiA0O1xuICAgICAgICB9XG4gICAgICAgIGdhcCA9IE1hdGgubWF4KGdhcCwgMC4xKTtcbiAgICAgICAgbGV0IGZ3ZWlnaHQgPSBvLmZpbGxXZWlnaHQ7XG4gICAgICAgIGlmIChmd2VpZ2h0IDwgMCkge1xuICAgICAgICAgICAgZndlaWdodCA9IG8uc3Ryb2tlV2lkdGggLyAyO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbGluZUxlbmd0aChsaW5lKTtcbiAgICAgICAgICAgIGNvbnN0IGRsID0gbGVuZ3RoIC8gZ2FwO1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSBNYXRoLmNlaWwoZGwpIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuKChsaW5lWzFdWzFdIC0gbGluZVswXVsxXSkgLyAobGluZVsxXVswXSAtIGxpbmVbMF1bMF0pKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGwgPSBnYXAgKiAoaSArIDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gbCAqIE1hdGguc2luKGFscGhhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkeCA9IGwgKiBNYXRoLmNvcyhhbHBoYSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IFtsaW5lWzBdWzBdIC0gZHgsIGxpbmVbMF1bMV0gKyBkeV07XG4gICAgICAgICAgICAgICAgY29uc3QgY3ggPSB0aGlzLnJlbmRlcmVyLmdldE9mZnNldChjWzBdIC0gZ2FwIC8gNCwgY1swXSArIGdhcCAvIDQsIG8pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN5ID0gdGhpcy5yZW5kZXJlci5nZXRPZmZzZXQoY1sxXSAtIGdhcCAvIDQsIGNbMV0gKyBnYXAgLyA0LCBvKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGxpcHNlID0gdGhpcy5yZW5kZXJlci5lbGxpcHNlKGN4LCBjeSwgZndlaWdodCwgZndlaWdodCwgbyk7XG4gICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdChlbGxpcHNlLm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2ZpbGxTa2V0Y2gnLCBvcHMgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTZWdtZW50IH0gZnJvbSAnLi4vZ2VvbWV0cnknO1xuaW1wb3J0IHsgSGFjaHVyZUl0ZXJhdG9yIH0gZnJvbSAnLi4vdXRpbHMvaGFjaHVyZSc7XG5leHBvcnQgZnVuY3Rpb24gbGluZUxlbmd0aChsaW5lKSB7XG4gICAgY29uc3QgcDEgPSBsaW5lWzBdO1xuICAgIGNvbnN0IHAyID0gbGluZVsxXTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAxWzBdIC0gcDJbMF0sIDIpICsgTWF0aC5wb3cocDFbMV0gLSBwMlsxXSwgMikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEludGVyc2VjdGluZ0xpbmVzKGxpbmUsIHBvaW50cykge1xuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSBbXTtcbiAgICBjb25zdCBzMSA9IG5ldyBTZWdtZW50KFtsaW5lWzBdLCBsaW5lWzFdXSwgW2xpbmVbMl0sIGxpbmVbM11dKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzMiA9IG5ldyBTZWdtZW50KHBvaW50c1tpXSwgcG9pbnRzWyhpICsgMSkgJSBwb2ludHMubGVuZ3RoXSk7XG4gICAgICAgIGlmIChzMS5pbnRlcnNlY3RzKHMyKSkge1xuICAgICAgICAgICAgaW50ZXJzZWN0aW9ucy5wdXNoKFtzMS54aSwgczEueWldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZmZpbmUoeCwgeSwgY3gsIGN5LCBzaW5BbmdsZVByaW1lLCBjb3NBbmdsZVByaW1lLCBSKSB7XG4gICAgY29uc3QgQSA9IC1jeCAqIGNvc0FuZ2xlUHJpbWUgLSBjeSAqIHNpbkFuZ2xlUHJpbWUgKyBjeDtcbiAgICBjb25zdCBCID0gUiAqIChjeCAqIHNpbkFuZ2xlUHJpbWUgLSBjeSAqIGNvc0FuZ2xlUHJpbWUpICsgY3k7XG4gICAgY29uc3QgQyA9IGNvc0FuZ2xlUHJpbWU7XG4gICAgY29uc3QgRCA9IHNpbkFuZ2xlUHJpbWU7XG4gICAgY29uc3QgRSA9IC1SICogc2luQW5nbGVQcmltZTtcbiAgICBjb25zdCBGID0gUiAqIGNvc0FuZ2xlUHJpbWU7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgQSArIEMgKiB4ICsgRCAqIHksXG4gICAgICAgIEIgKyBFICogeCArIEYgKiB5XG4gICAgXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYWNodXJlTGluZXNGb3JQb2x5Z29uKHBvaW50cywgbykge1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIGlmIChwb2ludHMgJiYgcG9pbnRzLmxlbmd0aCkge1xuICAgICAgICBsZXQgbGVmdCA9IHBvaW50c1swXVswXTtcbiAgICAgICAgbGV0IHJpZ2h0ID0gcG9pbnRzWzBdWzBdO1xuICAgICAgICBsZXQgdG9wID0gcG9pbnRzWzBdWzFdO1xuICAgICAgICBsZXQgYm90dG9tID0gcG9pbnRzWzBdWzFdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGVmdCA9IE1hdGgubWluKGxlZnQsIHBvaW50c1tpXVswXSk7XG4gICAgICAgICAgICByaWdodCA9IE1hdGgubWF4KHJpZ2h0LCBwb2ludHNbaV1bMF0pO1xuICAgICAgICAgICAgdG9wID0gTWF0aC5taW4odG9wLCBwb2ludHNbaV1bMV0pO1xuICAgICAgICAgICAgYm90dG9tID0gTWF0aC5tYXgoYm90dG9tLCBwb2ludHNbaV1bMV0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gby5oYWNodXJlQW5nbGU7XG4gICAgICAgIGxldCBnYXAgPSBvLmhhY2h1cmVHYXA7XG4gICAgICAgIGlmIChnYXAgPCAwKSB7XG4gICAgICAgICAgICBnYXAgPSBvLnN0cm9rZVdpZHRoICogNDtcbiAgICAgICAgfVxuICAgICAgICBnYXAgPSBNYXRoLm1heChnYXAsIDAuMSk7XG4gICAgICAgIGNvbnN0IHJhZFBlckRlZyA9IE1hdGguUEkgLyAxODA7XG4gICAgICAgIGNvbnN0IGhhY2h1cmVBbmdsZSA9IChhbmdsZSAlIDE4MCkgKiByYWRQZXJEZWc7XG4gICAgICAgIGNvbnN0IGNvc0FuZ2xlID0gTWF0aC5jb3MoaGFjaHVyZUFuZ2xlKTtcbiAgICAgICAgY29uc3Qgc2luQW5nbGUgPSBNYXRoLnNpbihoYWNodXJlQW5nbGUpO1xuICAgICAgICBjb25zdCB0YW5BbmdsZSA9IE1hdGgudGFuKGhhY2h1cmVBbmdsZSk7XG4gICAgICAgIGNvbnN0IGl0ID0gbmV3IEhhY2h1cmVJdGVyYXRvcih0b3AgLSAxLCBib3R0b20gKyAxLCBsZWZ0IC0gMSwgcmlnaHQgKyAxLCBnYXAsIHNpbkFuZ2xlLCBjb3NBbmdsZSwgdGFuQW5nbGUpO1xuICAgICAgICBsZXQgcmVjdDtcbiAgICAgICAgd2hpbGUgKChyZWN0ID0gaXQubmV4dExpbmUoKSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBnZXRJbnRlcnNlY3RpbmdMaW5lcyhyZWN0LCBwb2ludHMpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpIDwgKGxpbmVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAxID0gbGluZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAyID0gbGluZXNbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICByZXQucHVzaChbcDEsIHAyXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaGFjaHVyZUxpbmVzRm9yRWxsaXBzZShjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIG8sIHJlbmRlcmVyKSB7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgbGV0IHJ4ID0gTWF0aC5hYnMod2lkdGggLyAyKTtcbiAgICBsZXQgcnkgPSBNYXRoLmFicyhoZWlnaHQgLyAyKTtcbiAgICByeCArPSByZW5kZXJlci5nZXRPZmZzZXQoLXJ4ICogMC4wNSwgcnggKiAwLjA1LCBvKTtcbiAgICByeSArPSByZW5kZXJlci5nZXRPZmZzZXQoLXJ5ICogMC4wNSwgcnkgKiAwLjA1LCBvKTtcbiAgICBjb25zdCBhbmdsZSA9IG8uaGFjaHVyZUFuZ2xlO1xuICAgIGxldCBnYXAgPSBvLmhhY2h1cmVHYXA7XG4gICAgaWYgKGdhcCA8PSAwKSB7XG4gICAgICAgIGdhcCA9IG8uc3Ryb2tlV2lkdGggKiA0O1xuICAgIH1cbiAgICBsZXQgZndlaWdodCA9IG8uZmlsbFdlaWdodDtcbiAgICBpZiAoZndlaWdodCA8IDApIHtcbiAgICAgICAgZndlaWdodCA9IG8uc3Ryb2tlV2lkdGggLyAyO1xuICAgIH1cbiAgICBjb25zdCByYWRQZXJEZWcgPSBNYXRoLlBJIC8gMTgwO1xuICAgIGNvbnN0IGhhY2h1cmVBbmdsZSA9IChhbmdsZSAlIDE4MCkgKiByYWRQZXJEZWc7XG4gICAgY29uc3QgdGFuQW5nbGUgPSBNYXRoLnRhbihoYWNodXJlQW5nbGUpO1xuICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gcnkgLyByeDtcbiAgICBjb25zdCBoeXAgPSBNYXRoLnNxcnQoYXNwZWN0UmF0aW8gKiB0YW5BbmdsZSAqIGFzcGVjdFJhdGlvICogdGFuQW5nbGUgKyAxKTtcbiAgICBjb25zdCBzaW5BbmdsZVByaW1lID0gYXNwZWN0UmF0aW8gKiB0YW5BbmdsZSAvIGh5cDtcbiAgICBjb25zdCBjb3NBbmdsZVByaW1lID0gMSAvIGh5cDtcbiAgICBjb25zdCBnYXBQcmltZSA9IGdhcCAvICgocnggKiByeSAvIE1hdGguc3FydCgocnkgKiBjb3NBbmdsZVByaW1lKSAqIChyeSAqIGNvc0FuZ2xlUHJpbWUpICsgKHJ4ICogc2luQW5nbGVQcmltZSkgKiAocnggKiBzaW5BbmdsZVByaW1lKSkpIC8gcngpO1xuICAgIGxldCBoYWxmTGVuID0gTWF0aC5zcXJ0KChyeCAqIHJ4KSAtIChjeCAtIHJ4ICsgZ2FwUHJpbWUpICogKGN4IC0gcnggKyBnYXBQcmltZSkpO1xuICAgIGZvciAobGV0IHhQb3MgPSBjeCAtIHJ4ICsgZ2FwUHJpbWU7IHhQb3MgPCBjeCArIHJ4OyB4UG9zICs9IGdhcFByaW1lKSB7XG4gICAgICAgIGhhbGZMZW4gPSBNYXRoLnNxcnQoKHJ4ICogcngpIC0gKGN4IC0geFBvcykgKiAoY3ggLSB4UG9zKSk7XG4gICAgICAgIGNvbnN0IHAxID0gYWZmaW5lKHhQb3MsIGN5IC0gaGFsZkxlbiwgY3gsIGN5LCBzaW5BbmdsZVByaW1lLCBjb3NBbmdsZVByaW1lLCBhc3BlY3RSYXRpbyk7XG4gICAgICAgIGNvbnN0IHAyID0gYWZmaW5lKHhQb3MsIGN5ICsgaGFsZkxlbiwgY3gsIGN5LCBzaW5BbmdsZVByaW1lLCBjb3NBbmdsZVByaW1lLCBhc3BlY3RSYXRpbyk7XG4gICAgICAgIHJldC5wdXNoKFtwMSwgcDJdKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbiIsImltcG9ydCB7IEhhY2h1cmVGaWxsZXIgfSBmcm9tICcuL2hhY2h1cmUtZmlsbGVyJztcbmltcG9ydCB7IFppZ1phZ0ZpbGxlciB9IGZyb20gJy4vemlnemFnLWZpbGxlcic7XG5pbXBvcnQgeyBIYXRjaEZpbGxlciB9IGZyb20gJy4vaGF0Y2gtZmlsbGVyJztcbmltcG9ydCB7IERvdEZpbGxlciB9IGZyb20gJy4vZG90LWZpbGxlcic7XG5jb25zdCBmaWxsZXJzID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsbGVyKHJlbmRlcmVyLCBvKSB7XG4gICAgbGV0IGZpbGxlck5hbWUgPSBvLmZpbGxTdHlsZSB8fCAnaGFjaHVyZSc7XG4gICAgaWYgKCFmaWxsZXJzW2ZpbGxlck5hbWVdKSB7XG4gICAgICAgIHN3aXRjaCAoZmlsbGVyTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnemlnemFnJzpcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGxlcnNbZmlsbGVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVyc1tmaWxsZXJOYW1lXSA9IG5ldyBaaWdaYWdGaWxsZXIocmVuZGVyZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Nyb3NzLWhhdGNoJzpcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGxlcnNbZmlsbGVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVyc1tmaWxsZXJOYW1lXSA9IG5ldyBIYXRjaEZpbGxlcihyZW5kZXJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZG90cyc6XG4gICAgICAgICAgICAgICAgaWYgKCFmaWxsZXJzW2ZpbGxlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxlcnNbZmlsbGVyTmFtZV0gPSBuZXcgRG90RmlsbGVyKHJlbmRlcmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoYWNodXJlJzpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZmlsbGVyTmFtZSA9ICdoYWNodXJlJztcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGxlcnNbZmlsbGVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVyc1tmaWxsZXJOYW1lXSA9IG5ldyBIYWNodXJlRmlsbGVyKHJlbmRlcmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpbGxlcnNbZmlsbGVyTmFtZV07XG59XG4iLCJpbXBvcnQgeyBoYWNodXJlTGluZXNGb3JQb2x5Z29uLCBoYWNodXJlTGluZXNGb3JFbGxpcHNlIH0gZnJvbSAnLi9maWxsZXItdXRpbHMnO1xuZXhwb3J0IGNsYXNzIEhhY2h1cmVGaWxsZXIge1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB9XG4gICAgZmlsbFBvbHlnb24ocG9pbnRzLCBvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWxsUG9seWdvbihwb2ludHMsIG8pO1xuICAgIH1cbiAgICBmaWxsRWxsaXBzZShjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIG8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbGxFbGxpcHNlKGN4LCBjeSwgd2lkdGgsIGhlaWdodCwgbyk7XG4gICAgfVxuICAgIF9maWxsUG9seWdvbihwb2ludHMsIG8sIGNvbm5lY3RFbmRzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBoYWNodXJlTGluZXNGb3JQb2x5Z29uKHBvaW50cywgbyk7XG4gICAgICAgIGNvbnN0IG9wcyA9IHRoaXMucmVuZGVyTGluZXMobGluZXMsIG8sIGNvbm5lY3RFbmRzKTtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2ZpbGxTa2V0Y2gnLCBvcHMgfTtcbiAgICB9XG4gICAgX2ZpbGxFbGxpcHNlKGN4LCBjeSwgd2lkdGgsIGhlaWdodCwgbywgY29ubmVjdEVuZHMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBsaW5lcyA9IGhhY2h1cmVMaW5lc0ZvckVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvLCB0aGlzLnJlbmRlcmVyKTtcbiAgICAgICAgY29uc3Qgb3BzID0gdGhpcy5yZW5kZXJMaW5lcyhsaW5lcywgbywgY29ubmVjdEVuZHMpO1xuICAgICAgICByZXR1cm4geyB0eXBlOiAnZmlsbFNrZXRjaCcsIG9wcyB9O1xuICAgIH1cbiAgICByZW5kZXJMaW5lcyhsaW5lcywgbywgY29ubmVjdEVuZHMpIHtcbiAgICAgICAgbGV0IG9wcyA9IFtdO1xuICAgICAgICBsZXQgcHJldlBvaW50ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgICAgICBvcHMgPSBvcHMuY29uY2F0KHRoaXMucmVuZGVyZXIuZG91YmxlTGluZShsaW5lWzBdWzBdLCBsaW5lWzBdWzFdLCBsaW5lWzFdWzBdLCBsaW5lWzFdWzFdLCBvKSk7XG4gICAgICAgICAgICBpZiAoY29ubmVjdEVuZHMgJiYgcHJldlBvaW50KSB7XG4gICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdCh0aGlzLnJlbmRlcmVyLmRvdWJsZUxpbmUocHJldlBvaW50WzBdLCBwcmV2UG9pbnRbMV0sIGxpbmVbMF1bMF0sIGxpbmVbMF1bMV0sIG8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZQb2ludCA9IGxpbmVbMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wcztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBIYWNodXJlRmlsbGVyIH0gZnJvbSAnLi9oYWNodXJlLWZpbGxlcic7XG5leHBvcnQgY2xhc3MgSGF0Y2hGaWxsZXIgZXh0ZW5kcyBIYWNodXJlRmlsbGVyIHtcbiAgICBmaWxsUG9seWdvbihwb2ludHMsIG8pIHtcbiAgICAgICAgY29uc3Qgc2V0ID0gdGhpcy5fZmlsbFBvbHlnb24ocG9pbnRzLCBvKTtcbiAgICAgICAgY29uc3QgbzIgPSBPYmplY3QuYXNzaWduKHt9LCBvLCB7IGhhY2h1cmVBbmdsZTogby5oYWNodXJlQW5nbGUgKyA5MCB9KTtcbiAgICAgICAgY29uc3Qgc2V0MiA9IHRoaXMuX2ZpbGxQb2x5Z29uKHBvaW50cywgbzIpO1xuICAgICAgICBzZXQub3BzID0gc2V0Lm9wcy5jb25jYXQoc2V0Mi5vcHMpO1xuICAgICAgICByZXR1cm4gc2V0O1xuICAgIH1cbiAgICBmaWxsRWxsaXBzZShjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIG8pIHtcbiAgICAgICAgY29uc3Qgc2V0ID0gdGhpcy5fZmlsbEVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvKTtcbiAgICAgICAgY29uc3QgbzIgPSBPYmplY3QuYXNzaWduKHt9LCBvLCB7IGhhY2h1cmVBbmdsZTogby5oYWNodXJlQW5nbGUgKyA5MCB9KTtcbiAgICAgICAgY29uc3Qgc2V0MiA9IHRoaXMuX2ZpbGxFbGxpcHNlKGN4LCBjeSwgd2lkdGgsIGhlaWdodCwgbzIpO1xuICAgICAgICBzZXQub3BzID0gc2V0Lm9wcy5jb25jYXQoc2V0Mi5vcHMpO1xuICAgICAgICByZXR1cm4gc2V0O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEhhY2h1cmVGaWxsZXIgfSBmcm9tICcuL2hhY2h1cmUtZmlsbGVyJztcbmV4cG9ydCBjbGFzcyBaaWdaYWdGaWxsZXIgZXh0ZW5kcyBIYWNodXJlRmlsbGVyIHtcbiAgICBmaWxsUG9seWdvbihwb2ludHMsIG8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbGxQb2x5Z29uKHBvaW50cywgbywgdHJ1ZSk7XG4gICAgfVxuICAgIGZpbGxFbGxpcHNlKGN4LCBjeSwgd2lkdGgsIGhlaWdodCwgbykge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsbEVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvLCB0cnVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSb3VnaEdlbmVyYXRvckJhc2UgfSBmcm9tICcuL2dlbmVyYXRvci1iYXNlJztcbmV4cG9ydCBjbGFzcyBSb3VnaEdlbmVyYXRvckFzeW5jIGV4dGVuZHMgUm91Z2hHZW5lcmF0b3JCYXNlIHtcbiAgICBhc3luYyBsaW5lKHgxLCB5MSwgeDIsIHkyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ2xpbmUnLCBbYXdhaXQgdGhpcy5saWIubGluZSh4MSwgeTEsIHgyLCB5MiwgbyldLCBvKTtcbiAgICB9XG4gICAgYXN5bmMgcmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICAgIGlmIChvLmZpbGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50cyA9IFtbeCwgeV0sIFt4ICsgd2lkdGgsIHldLCBbeCArIHdpZHRoLCB5ICsgaGVpZ2h0XSwgW3gsIHkgKyBoZWlnaHRdXTtcbiAgICAgICAgICAgIGlmIChvLmZpbGxTdHlsZSA9PT0gJ3NvbGlkJykge1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goYXdhaXQgdGhpcy5saWIuc29saWRGaWxsUG9seWdvbihwb2ludHMsIG8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goYXdhaXQgdGhpcy5saWIucGF0dGVybkZpbGxQb2x5Z29uKHBvaW50cywgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLnB1c2goYXdhaXQgdGhpcy5saWIucmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdyZWN0YW5nbGUnLCBwYXRocywgbyk7XG4gICAgfVxuICAgIGFzeW5jIGVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBbXTtcbiAgICAgICAgaWYgKG8uZmlsbCkge1xuICAgICAgICAgICAgaWYgKG8uZmlsbFN0eWxlID09PSAnc29saWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBhd2FpdCB0aGlzLmxpYi5lbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG8pO1xuICAgICAgICAgICAgICAgIHNoYXBlLnR5cGUgPSAnZmlsbFBhdGgnO1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goc2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChhd2FpdCB0aGlzLmxpYi5wYXR0ZXJuRmlsbEVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLnB1c2goYXdhaXQgdGhpcy5saWIuZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgnZWxsaXBzZScsIHBhdGhzLCBvKTtcbiAgICB9XG4gICAgYXN5bmMgY2lyY2xlKHgsIHksIGRpYW1ldGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IHRoaXMuZWxsaXBzZSh4LCB5LCBkaWFtZXRlciwgZGlhbWV0ZXIsIG9wdGlvbnMpO1xuICAgICAgICByZXQuc2hhcGUgPSAnY2lyY2xlJztcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgYXN5bmMgbGluZWFyUGF0aChwb2ludHMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgnbGluZWFyUGF0aCcsIFthd2FpdCB0aGlzLmxpYi5saW5lYXJQYXRoKHBvaW50cywgZmFsc2UsIG8pXSwgbyk7XG4gICAgfVxuICAgIGFzeW5jIGFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgY2xvc2VkID0gZmFsc2UsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICAgIGlmIChjbG9zZWQgJiYgby5maWxsKSB7XG4gICAgICAgICAgICBpZiAoby5maWxsU3R5bGUgPT09ICdzb2xpZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZSA9IGF3YWl0IHRoaXMubGliLmFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgdHJ1ZSwgZmFsc2UsIG8pO1xuICAgICAgICAgICAgICAgIHNoYXBlLnR5cGUgPSAnZmlsbFBhdGgnO1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goc2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChhd2FpdCB0aGlzLmxpYi5wYXR0ZXJuRmlsbEFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLnB1c2goYXdhaXQgdGhpcy5saWIuYXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCBjbG9zZWQsIHRydWUsIG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdhcmMnLCBwYXRocywgbyk7XG4gICAgfVxuICAgIGFzeW5jIGN1cnZlKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdjdXJ2ZScsIFthd2FpdCB0aGlzLmxpYi5jdXJ2ZShwb2ludHMsIG8pXSwgbyk7XG4gICAgfVxuICAgIGFzeW5jIHBvbHlnb24ocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBwYXRocyA9IFtdO1xuICAgICAgICBpZiAoby5maWxsKSB7XG4gICAgICAgICAgICBpZiAoby5maWxsU3R5bGUgPT09ICdzb2xpZCcpIHtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKGF3YWl0IHRoaXMubGliLnNvbGlkRmlsbFBvbHlnb24ocG9pbnRzLCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gdGhpcy5jb21wdXRlUG9seWdvblNpemUocG9pbnRzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxsUG9pbnRzID0gW1xuICAgICAgICAgICAgICAgICAgICBbMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgIFtzaXplWzBdLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW3NpemVbMF0sIHNpemVbMV1dLFxuICAgICAgICAgICAgICAgICAgICBbMCwgc2l6ZVsxXV1cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gYXdhaXQgdGhpcy5saWIucGF0dGVybkZpbGxQb2x5Z29uKGZpbGxQb2ludHMsIG8pO1xuICAgICAgICAgICAgICAgIHNoYXBlLnR5cGUgPSAncGF0aDJEcGF0dGVybic7XG4gICAgICAgICAgICAgICAgc2hhcGUuc2l6ZSA9IHNpemU7XG4gICAgICAgICAgICAgICAgc2hhcGUucGF0aCA9IHRoaXMucG9seWdvblBhdGgocG9pbnRzKTtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHNoYXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwYXRocy5wdXNoKGF3YWl0IHRoaXMubGliLmxpbmVhclBhdGgocG9pbnRzLCB0cnVlLCBvKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgncG9seWdvbicsIHBhdGhzLCBvKTtcbiAgICB9XG4gICAgYXN5bmMgcGF0aChkLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBwYXRocyA9IFtdO1xuICAgICAgICBpZiAoIWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgncGF0aCcsIHBhdGhzLCBvKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoby5maWxsKSB7XG4gICAgICAgICAgICBpZiAoby5maWxsU3R5bGUgPT09ICdzb2xpZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZSA9IHsgdHlwZTogJ3BhdGgyRGZpbGwnLCBwYXRoOiBkLCBvcHM6IFtdIH07XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChzaGFwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gdGhpcy5jb21wdXRlUGF0aFNpemUoZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gW1xuICAgICAgICAgICAgICAgICAgICBbMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgIFtzaXplWzBdLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW3NpemVbMF0sIHNpemVbMV1dLFxuICAgICAgICAgICAgICAgICAgICBbMCwgc2l6ZVsxXV1cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gYXdhaXQgdGhpcy5saWIucGF0dGVybkZpbGxQb2x5Z29uKHBvaW50cywgbyk7XG4gICAgICAgICAgICAgICAgc2hhcGUudHlwZSA9ICdwYXRoMkRwYXR0ZXJuJztcbiAgICAgICAgICAgICAgICBzaGFwZS5zaXplID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBzaGFwZS5wYXRoID0gZDtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHNoYXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwYXRocy5wdXNoKGF3YWl0IHRoaXMubGliLnN2Z1BhdGgoZCwgbykpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ3BhdGgnLCBwYXRocywgbyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVyLWZhY3RvcnkuanMnO1xuY29uc3QgaGFzU2VsZiA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydCBjbGFzcyBSb3VnaEdlbmVyYXRvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgc3VyZmFjZSkge1xuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgbWF4UmFuZG9tbmVzc09mZnNldDogMixcbiAgICAgICAgICAgIHJvdWdobmVzczogMSxcbiAgICAgICAgICAgIGJvd2luZzogMSxcbiAgICAgICAgICAgIHN0cm9rZTogJyMwMDAnLFxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDEsXG4gICAgICAgICAgICBjdXJ2ZVRpZ2h0bmVzczogMCxcbiAgICAgICAgICAgIGN1cnZlU3RlcENvdW50OiA5LFxuICAgICAgICAgICAgZmlsbFN0eWxlOiAnaGFjaHVyZScsXG4gICAgICAgICAgICBmaWxsV2VpZ2h0OiAtMSxcbiAgICAgICAgICAgIGhhY2h1cmVBbmdsZTogLTQxLFxuICAgICAgICAgICAgaGFjaHVyZUdhcDogLTFcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XG4gICAgICAgIHRoaXMuc3VyZmFjZSA9IHN1cmZhY2U7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBjcmVhdGVSZW5kZXJlcih0aGlzLmNvbmZpZyk7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5vcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0gdGhpcy5fb3B0aW9ucyh0aGlzLmNvbmZpZy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfb3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zID8gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucykgOiB0aGlzLmRlZmF1bHRPcHRpb25zO1xuICAgIH1cbiAgICBfZHJhd2FibGUoc2hhcGUsIHNldHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHsgc2hhcGUsIHNldHM6IHNldHMgfHwgW10sIG9wdGlvbnM6IG9wdGlvbnMgfHwgdGhpcy5kZWZhdWx0T3B0aW9ucyB9O1xuICAgIH1cbiAgICBnZXQgbGliKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcjtcbiAgICB9XG4gICAgZ2V0Q2FudmFzU2l6ZSgpIHtcbiAgICAgICAgY29uc3QgdmFsID0gKHcpID0+IHtcbiAgICAgICAgICAgIGlmICh3ICYmIHR5cGVvZiB3ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGlmICh3LmJhc2VWYWwgJiYgdy5iYXNlVmFsLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3LmJhc2VWYWwudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHcgfHwgMTAwO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5zdXJmYWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gW3ZhbCh0aGlzLnN1cmZhY2Uud2lkdGgpLCB2YWwodGhpcy5zdXJmYWNlLmhlaWdodCldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMTAwLCAxMDBdO1xuICAgIH1cbiAgICBjb21wdXRlUG9seWdvblNpemUocG9pbnRzKSB7XG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgbGVmdCA9IHBvaW50c1swXVswXTtcbiAgICAgICAgICAgIGxldCByaWdodCA9IHBvaW50c1swXVswXTtcbiAgICAgICAgICAgIGxldCB0b3AgPSBwb2ludHNbMF1bMV07XG4gICAgICAgICAgICBsZXQgYm90dG9tID0gcG9pbnRzWzBdWzFdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gTWF0aC5taW4obGVmdCwgcG9pbnRzW2ldWzBdKTtcbiAgICAgICAgICAgICAgICByaWdodCA9IE1hdGgubWF4KHJpZ2h0LCBwb2ludHNbaV1bMF0pO1xuICAgICAgICAgICAgICAgIHRvcCA9IE1hdGgubWluKHRvcCwgcG9pbnRzW2ldWzFdKTtcbiAgICAgICAgICAgICAgICBib3R0b20gPSBNYXRoLm1heChib3R0b20sIHBvaW50c1tpXVsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gWyhyaWdodCAtIGxlZnQpLCAoYm90dG9tIC0gdG9wKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFswLCAwXTtcbiAgICB9XG4gICAgcG9seWdvblBhdGgocG9pbnRzKSB7XG4gICAgICAgIGxldCBkID0gJyc7XG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBkID0gYE0ke3BvaW50c1swXVswXX0sJHtwb2ludHNbMF1bMV19YDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZCA9IGAke2R9IEwke3BvaW50c1tpXVswXX0sJHtwb2ludHNbaV1bMV19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgY29tcHV0ZVBhdGhTaXplKGQpIHtcbiAgICAgICAgbGV0IHNpemUgPSBbMCwgMF07XG4gICAgICAgIGlmIChoYXNTZWxmICYmIHNlbGYuZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN2ZyA9IHNlbGYuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnc3ZnJyk7XG4gICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMCcpO1xuICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcwJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aE5vZGUgPSBzZWxmLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3BhdGgnKTtcbiAgICAgICAgICAgICAgICBwYXRoTm9kZS5zZXRBdHRyaWJ1dGUoJ2QnLCBkKTtcbiAgICAgICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aE5vZGUpO1xuICAgICAgICAgICAgICAgIHNlbGYuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdmcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJiID0gcGF0aE5vZGUuZ2V0QkJveCgpO1xuICAgICAgICAgICAgICAgIGlmIChiYikge1xuICAgICAgICAgICAgICAgICAgICBzaXplWzBdID0gYmIud2lkdGggfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVsxXSA9IGJiLmhlaWdodCB8fCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc3ZnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHsgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbnZhc1NpemUgPSB0aGlzLmdldENhbnZhc1NpemUoKTtcbiAgICAgICAgaWYgKCEoc2l6ZVswXSAqIHNpemVbMV0pKSB7XG4gICAgICAgICAgICBzaXplID0gY2FudmFzU2l6ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG4gICAgdG9QYXRocyhkcmF3YWJsZSkge1xuICAgICAgICBjb25zdCBzZXRzID0gZHJhd2FibGUuc2V0cyB8fCBbXTtcbiAgICAgICAgY29uc3QgbyA9IGRyYXdhYmxlLm9wdGlvbnMgfHwgdGhpcy5kZWZhdWx0T3B0aW9ucztcbiAgICAgICAgY29uc3QgcGF0aHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBkcmF3aW5nIG9mIHNldHMpIHtcbiAgICAgICAgICAgIGxldCBwYXRoID0gbnVsbDtcbiAgICAgICAgICAgIHN3aXRjaCAoZHJhd2luZy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkOiB0aGlzLm9wc1RvUGF0aChkcmF3aW5nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogby5zdHJva2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogby5zdHJva2VXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdmaWxsUGF0aCc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkOiB0aGlzLm9wc1RvUGF0aChkcmF3aW5nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBvLmZpbGwgfHwgJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbGxTa2V0Y2gnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdGhpcy5maWxsU2tldGNoKGRyYXdpbmcsIG8pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwYXRoMkRmaWxsJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ6IGRyYXdpbmcucGF0aCB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBvLmZpbGwgfHwgJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdGgyRHBhdHRlcm4nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBkcmF3aW5nLnNpemU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMSwgaGVpZ2h0OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogYDAgMCAke01hdGgucm91bmQoc2l6ZVswXSl9ICR7TWF0aC5yb3VuZChzaXplWzFdKX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVyblVuaXRzOiAnb2JqZWN0Qm91bmRpbmdCb3gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogdGhpcy5maWxsU2tldGNoKGRyYXdpbmcsIG8pXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkOiBkcmF3aW5nLnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVyblxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGhzO1xuICAgIH1cbiAgICBmaWxsU2tldGNoKGRyYXdpbmcsIG8pIHtcbiAgICAgICAgbGV0IGZ3ZWlnaHQgPSBvLmZpbGxXZWlnaHQ7XG4gICAgICAgIGlmIChmd2VpZ2h0IDwgMCkge1xuICAgICAgICAgICAgZndlaWdodCA9IG8uc3Ryb2tlV2lkdGggLyAyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkOiB0aGlzLm9wc1RvUGF0aChkcmF3aW5nKSxcbiAgICAgICAgICAgIHN0cm9rZTogby5maWxsIHx8ICdub25lJyxcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBmd2VpZ2h0LFxuICAgICAgICAgICAgZmlsbDogJ25vbmUnXG4gICAgICAgIH07XG4gICAgfVxuICAgIG9wc1RvUGF0aChkcmF3aW5nKSB7XG4gICAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkcmF3aW5nLm9wcykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGl0ZW0uZGF0YTtcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbS5vcCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IGBNJHtkYXRhWzBdfSAke2RhdGFbMV19IGA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2JjdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSBgQyR7ZGF0YVswXX0gJHtkYXRhWzFdfSwgJHtkYXRhWzJdfSAke2RhdGFbM119LCAke2RhdGFbNF19ICR7ZGF0YVs1XX0gYDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncWN1cnZlVG8nOlxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IGBRJHtkYXRhWzBdfSAke2RhdGFbMV19LCAke2RhdGFbMl19ICR7ZGF0YVszXX0gYDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSBgTCR7ZGF0YVswXX0gJHtkYXRhWzFdfSBgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aC50cmltKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUm91Z2hHZW5lcmF0b3JCYXNlIH0gZnJvbSAnLi9nZW5lcmF0b3ItYmFzZSc7XG5leHBvcnQgY2xhc3MgUm91Z2hHZW5lcmF0b3IgZXh0ZW5kcyBSb3VnaEdlbmVyYXRvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgc3VyZmFjZSkge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cmZhY2UpO1xuICAgIH1cbiAgICBsaW5lKHgxLCB5MSwgeDIsIHkyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ2xpbmUnLCBbdGhpcy5saWIubGluZSh4MSwgeTEsIHgyLCB5MiwgbyldLCBvKTtcbiAgICB9XG4gICAgcmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICAgIGlmIChvLmZpbGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50cyA9IFtbeCwgeV0sIFt4ICsgd2lkdGgsIHldLCBbeCArIHdpZHRoLCB5ICsgaGVpZ2h0XSwgW3gsIHkgKyBoZWlnaHRdXTtcbiAgICAgICAgICAgIGlmIChvLmZpbGxTdHlsZSA9PT0gJ3NvbGlkJykge1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2godGhpcy5saWIuc29saWRGaWxsUG9seWdvbihwb2ludHMsIG8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2godGhpcy5saWIucGF0dGVybkZpbGxQb2x5Z29uKHBvaW50cywgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLnB1c2godGhpcy5saWIucmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdyZWN0YW5nbGUnLCBwYXRocywgbyk7XG4gICAgfVxuICAgIGVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBbXTtcbiAgICAgICAgaWYgKG8uZmlsbCkge1xuICAgICAgICAgICAgaWYgKG8uZmlsbFN0eWxlID09PSAnc29saWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmxpYi5lbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG8pO1xuICAgICAgICAgICAgICAgIHNoYXBlLnR5cGUgPSAnZmlsbFBhdGgnO1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goc2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaCh0aGlzLmxpYi5wYXR0ZXJuRmlsbEVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLnB1c2godGhpcy5saWIuZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgnZWxsaXBzZScsIHBhdGhzLCBvKTtcbiAgICB9XG4gICAgY2lyY2xlKHgsIHksIGRpYW1ldGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHRoaXMuZWxsaXBzZSh4LCB5LCBkaWFtZXRlciwgZGlhbWV0ZXIsIG9wdGlvbnMpO1xuICAgICAgICByZXQuc2hhcGUgPSAnY2lyY2xlJztcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgbGluZWFyUGF0aChwb2ludHMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgnbGluZWFyUGF0aCcsIFt0aGlzLmxpYi5saW5lYXJQYXRoKHBvaW50cywgZmFsc2UsIG8pXSwgbyk7XG4gICAgfVxuICAgIGFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgY2xvc2VkID0gZmFsc2UsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuX29wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICAgIGlmIChjbG9zZWQgJiYgby5maWxsKSB7XG4gICAgICAgICAgICBpZiAoby5maWxsU3R5bGUgPT09ICdzb2xpZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMubGliLmFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgdHJ1ZSwgZmFsc2UsIG8pO1xuICAgICAgICAgICAgICAgIHNoYXBlLnR5cGUgPSAnZmlsbFBhdGgnO1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goc2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaCh0aGlzLmxpYi5wYXR0ZXJuRmlsbEFyYyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGFydCwgc3RvcCwgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzLnB1c2godGhpcy5saWIuYXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCBjbG9zZWQsIHRydWUsIG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdhcmMnLCBwYXRocywgbyk7XG4gICAgfVxuICAgIGN1cnZlKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBvID0gdGhpcy5fb3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdhYmxlKCdjdXJ2ZScsIFt0aGlzLmxpYi5jdXJ2ZShwb2ludHMsIG8pXSwgbyk7XG4gICAgfVxuICAgIHBvbHlnb24ocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBwYXRocyA9IFtdO1xuICAgICAgICBpZiAoby5maWxsKSB7XG4gICAgICAgICAgICBpZiAoby5maWxsU3R5bGUgPT09ICdzb2xpZCcpIHtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHRoaXMubGliLnNvbGlkRmlsbFBvbHlnb24ocG9pbnRzLCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gdGhpcy5jb21wdXRlUG9seWdvblNpemUocG9pbnRzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxsUG9pbnRzID0gW1xuICAgICAgICAgICAgICAgICAgICBbMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgIFtzaXplWzBdLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW3NpemVbMF0sIHNpemVbMV1dLFxuICAgICAgICAgICAgICAgICAgICBbMCwgc2l6ZVsxXV1cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5saWIucGF0dGVybkZpbGxQb2x5Z29uKGZpbGxQb2ludHMsIG8pO1xuICAgICAgICAgICAgICAgIHNoYXBlLnR5cGUgPSAncGF0aDJEcGF0dGVybic7XG4gICAgICAgICAgICAgICAgc2hhcGUuc2l6ZSA9IHNpemU7XG4gICAgICAgICAgICAgICAgc2hhcGUucGF0aCA9IHRoaXMucG9seWdvblBhdGgocG9pbnRzKTtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHNoYXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwYXRocy5wdXNoKHRoaXMubGliLmxpbmVhclBhdGgocG9pbnRzLCB0cnVlLCBvKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgncG9seWdvbicsIHBhdGhzLCBvKTtcbiAgICB9XG4gICAgcGF0aChkLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBwYXRocyA9IFtdO1xuICAgICAgICBpZiAoIWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kcmF3YWJsZSgncGF0aCcsIHBhdGhzLCBvKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoby5maWxsKSB7XG4gICAgICAgICAgICBpZiAoby5maWxsU3R5bGUgPT09ICdzb2xpZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZSA9IHsgdHlwZTogJ3BhdGgyRGZpbGwnLCBwYXRoOiBkLCBvcHM6IFtdIH07XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChzaGFwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gdGhpcy5jb21wdXRlUGF0aFNpemUoZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gW1xuICAgICAgICAgICAgICAgICAgICBbMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgIFtzaXplWzBdLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW3NpemVbMF0sIHNpemVbMV1dLFxuICAgICAgICAgICAgICAgICAgICBbMCwgc2l6ZVsxXV1cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5saWIucGF0dGVybkZpbGxQb2x5Z29uKHBvaW50cywgbyk7XG4gICAgICAgICAgICAgICAgc2hhcGUudHlwZSA9ICdwYXRoMkRwYXR0ZXJuJztcbiAgICAgICAgICAgICAgICBzaGFwZS5zaXplID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBzaGFwZS5wYXRoID0gZDtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHNoYXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwYXRocy5wdXNoKHRoaXMubGliLnN2Z1BhdGgoZCwgbykpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2FibGUoJ3BhdGgnLCBwYXRocywgbyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlZ21lbnQge1xuICAgIGNvbnN0cnVjdG9yKHAxLCBwMikge1xuICAgICAgICB0aGlzLnhpID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgdGhpcy55aSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIHRoaXMucHgxID0gcDFbMF07XG4gICAgICAgIHRoaXMucHkxID0gcDFbMV07XG4gICAgICAgIHRoaXMucHgyID0gcDJbMF07XG4gICAgICAgIHRoaXMucHkyID0gcDJbMV07XG4gICAgICAgIHRoaXMuYSA9IHRoaXMucHkyIC0gdGhpcy5weTE7XG4gICAgICAgIHRoaXMuYiA9IHRoaXMucHgxIC0gdGhpcy5weDI7XG4gICAgICAgIHRoaXMuYyA9IHRoaXMucHgyICogdGhpcy5weTEgLSB0aGlzLnB4MSAqIHRoaXMucHkyO1xuICAgICAgICB0aGlzLl91bmRlZmluZWQgPSAoKHRoaXMuYSA9PT0gMCkgJiYgKHRoaXMuYiA9PT0gMCkgJiYgKHRoaXMuYyA9PT0gMCkpO1xuICAgIH1cbiAgICBpc1VuZGVmaW5lZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VuZGVmaW5lZDtcbiAgICB9XG4gICAgaW50ZXJzZWN0cyhvdGhlclNlZ21lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWQoKSB8fCBvdGhlclNlZ21lbnQuaXNVbmRlZmluZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBncmFkMSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGxldCBncmFkMiA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGxldCBpbnQxID0gMCwgaW50MiA9IDA7XG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLmEsIGIgPSB0aGlzLmIsIGMgPSB0aGlzLmM7XG4gICAgICAgIGlmIChNYXRoLmFicyhiKSA+IDAuMDAwMDEpIHtcbiAgICAgICAgICAgIGdyYWQxID0gLWEgLyBiO1xuICAgICAgICAgICAgaW50MSA9IC1jIC8gYjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTWF0aC5hYnMob3RoZXJTZWdtZW50LmIpID4gMC4wMDAwMSkge1xuICAgICAgICAgICAgZ3JhZDIgPSAtb3RoZXJTZWdtZW50LmEgLyBvdGhlclNlZ21lbnQuYjtcbiAgICAgICAgICAgIGludDIgPSAtb3RoZXJTZWdtZW50LmMgLyBvdGhlclNlZ21lbnQuYjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ3JhZDEgPT09IE51bWJlci5NQVhfVkFMVUUpIHtcbiAgICAgICAgICAgIGlmIChncmFkMiA9PT0gTnVtYmVyLk1BWF9WQUxVRSkge1xuICAgICAgICAgICAgICAgIGlmICgoLWMgLyBhKSAhPT0gKC1vdGhlclNlZ21lbnQuYyAvIG90aGVyU2VnbWVudC5hKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5weTEgPj0gTWF0aC5taW4ob3RoZXJTZWdtZW50LnB5MSwgb3RoZXJTZWdtZW50LnB5MikpICYmICh0aGlzLnB5MSA8PSBNYXRoLm1heChvdGhlclNlZ21lbnQucHkxLCBvdGhlclNlZ21lbnQucHkyKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aSA9IHRoaXMucHgxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnlpID0gdGhpcy5weTE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMucHkyID49IE1hdGgubWluKG90aGVyU2VnbWVudC5weTEsIG90aGVyU2VnbWVudC5weTIpKSAmJiAodGhpcy5weTIgPD0gTWF0aC5tYXgob3RoZXJTZWdtZW50LnB5MSwgb3RoZXJTZWdtZW50LnB5MikpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueGkgPSB0aGlzLnB4MjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55aSA9IHRoaXMucHkyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy54aSA9IHRoaXMucHgxO1xuICAgICAgICAgICAgdGhpcy55aSA9IChncmFkMiAqIHRoaXMueGkgKyBpbnQyKTtcbiAgICAgICAgICAgIGlmICgoKHRoaXMucHkxIC0gdGhpcy55aSkgKiAodGhpcy55aSAtIHRoaXMucHkyKSA8IC0wLjAwMDAxKSB8fCAoKG90aGVyU2VnbWVudC5weTEgLSB0aGlzLnlpKSAqICh0aGlzLnlpIC0gb3RoZXJTZWdtZW50LnB5MikgPCAtMC4wMDAwMSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMob3RoZXJTZWdtZW50LmEpIDwgMC4wMDAwMSkge1xuICAgICAgICAgICAgICAgIGlmICgob3RoZXJTZWdtZW50LnB4MSAtIHRoaXMueGkpICogKHRoaXMueGkgLSBvdGhlclNlZ21lbnQucHgyKSA8IC0wLjAwMDAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ3JhZDIgPT09IE51bWJlci5NQVhfVkFMVUUpIHtcbiAgICAgICAgICAgIHRoaXMueGkgPSBvdGhlclNlZ21lbnQucHgxO1xuICAgICAgICAgICAgdGhpcy55aSA9IGdyYWQxICogdGhpcy54aSArIGludDE7XG4gICAgICAgICAgICBpZiAoKChvdGhlclNlZ21lbnQucHkxIC0gdGhpcy55aSkgKiAodGhpcy55aSAtIG90aGVyU2VnbWVudC5weTIpIDwgLTAuMDAwMDEpIHx8ICgodGhpcy5weTEgLSB0aGlzLnlpKSAqICh0aGlzLnlpIC0gdGhpcy5weTIpIDwgLTAuMDAwMDEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGEpIDwgMC4wMDAwMSkge1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy5weDEgLSB0aGlzLnhpKSAqICh0aGlzLnhpIC0gdGhpcy5weDIpIDwgLTAuMDAwMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChncmFkMSA9PT0gZ3JhZDIpIHtcbiAgICAgICAgICAgIGlmIChpbnQxICE9PSBpbnQyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0aGlzLnB4MSA+PSBNYXRoLm1pbihvdGhlclNlZ21lbnQucHgxLCBvdGhlclNlZ21lbnQucHgyKSkgJiYgKHRoaXMucHgxIDw9IE1hdGgubWF4KG90aGVyU2VnbWVudC5weTEsIG90aGVyU2VnbWVudC5weTIpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMueGkgPSB0aGlzLnB4MTtcbiAgICAgICAgICAgICAgICB0aGlzLnlpID0gdGhpcy5weTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHRoaXMucHgyID49IE1hdGgubWluKG90aGVyU2VnbWVudC5weDEsIG90aGVyU2VnbWVudC5weDIpKSAmJiAodGhpcy5weDIgPD0gTWF0aC5tYXgob3RoZXJTZWdtZW50LnB4MSwgb3RoZXJTZWdtZW50LnB4MikpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54aSA9IHRoaXMucHgyO1xuICAgICAgICAgICAgICAgIHRoaXMueWkgPSB0aGlzLnB5MjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnhpID0gKChpbnQyIC0gaW50MSkgLyAoZ3JhZDEgLSBncmFkMikpO1xuICAgICAgICB0aGlzLnlpID0gKGdyYWQxICogdGhpcy54aSArIGludDEpO1xuICAgICAgICBpZiAoKCh0aGlzLnB4MSAtIHRoaXMueGkpICogKHRoaXMueGkgLSB0aGlzLnB4MikgPCAtMC4wMDAwMSkgfHwgKChvdGhlclNlZ21lbnQucHgxIC0gdGhpcy54aSkgKiAodGhpcy54aSAtIG90aGVyU2VnbWVudC5weDIpIDwgLTAuMDAwMDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiZnVuY3Rpb24gaXNUeXBlKHRva2VuLCB0eXBlKSB7XG4gICAgcmV0dXJuIHRva2VuLnR5cGUgPT09IHR5cGU7XG59XG5jb25zdCBQQVJBTVMgPSB7XG4gICAgQTogNyxcbiAgICBhOiA3LFxuICAgIEM6IDYsXG4gICAgYzogNixcbiAgICBIOiAxLFxuICAgIGg6IDEsXG4gICAgTDogMixcbiAgICBsOiAyLFxuICAgIE06IDIsXG4gICAgbTogMixcbiAgICBROiA0LFxuICAgIHE6IDQsXG4gICAgUzogNCxcbiAgICBzOiA0LFxuICAgIFQ6IDQsXG4gICAgdDogMixcbiAgICBWOiAxLFxuICAgIHY6IDEsXG4gICAgWjogMCxcbiAgICB6OiAwXG59O1xuY2xhc3MgUGFyc2VkUGF0aCB7XG4gICAgY29uc3RydWN0b3IoZCkge1xuICAgICAgICB0aGlzLkNPTU1BTkQgPSAwO1xuICAgICAgICB0aGlzLk5VTUJFUiA9IDE7XG4gICAgICAgIHRoaXMuRU9EID0gMjtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnBhcnNlRGF0YShkKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzUG9pbnRzKCk7XG4gICAgfVxuICAgIHRva2VuaXplKGQpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHdoaWxlIChkICE9PSAnJykge1xuICAgICAgICAgICAgaWYgKGQubWF0Y2goL14oWyBcXHRcXHJcXG4sXSspLykpIHtcbiAgICAgICAgICAgICAgICBkID0gZC5zdWJzdHIoUmVnRXhwLiQxLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkLm1hdGNoKC9eKFthQWNDaEhsTG1NcVFzU3RUdlZ6Wl0pLykpIHtcbiAgICAgICAgICAgICAgICB0b2tlbnNbdG9rZW5zLmxlbmd0aF0gPSB7IHR5cGU6IHRoaXMuQ09NTUFORCwgdGV4dDogUmVnRXhwLiQxIH07XG4gICAgICAgICAgICAgICAgZCA9IGQuc3Vic3RyKFJlZ0V4cC4kMS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZC5tYXRjaCgvXigoWy0rXT9bMC05XSsoXFwuWzAtOV0qKT98Wy0rXT9cXC5bMC05XSspKFtlRV1bLStdP1swLTldKyk/KS8pKSB7XG4gICAgICAgICAgICAgICAgdG9rZW5zW3Rva2Vucy5sZW5ndGhdID0geyB0eXBlOiB0aGlzLk5VTUJFUiwgdGV4dDogYCR7cGFyc2VGbG9hdChSZWdFeHAuJDEpfWAgfTtcbiAgICAgICAgICAgICAgICBkID0gZC5zdWJzdHIoUmVnRXhwLiQxLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbnJlY29nbml6ZWQgc2VnbWVudCBjb21tYW5kOiAnICsgZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRva2Vuc1t0b2tlbnMubGVuZ3RoXSA9IHsgdHlwZTogdGhpcy5FT0QsIHRleHQ6ICcnIH07XG4gICAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgfVxuICAgIHBhcnNlRGF0YShkKSB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMudG9rZW5pemUoZCk7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCB0b2tlbiA9IHRva2Vuc1tpbmRleF07XG4gICAgICAgIGxldCBtb2RlID0gJ0JPRCc7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgd2hpbGUgKCFpc1R5cGUodG9rZW4sIHRoaXMuRU9EKSkge1xuICAgICAgICAgICAgbGV0IHBhcmFtX2xlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdCT0QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnRleHQgPT09ICdNJyB8fCB0b2tlbi50ZXh0ID09PSAnbScpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1fbGVuZ3RoID0gUEFSQU1TW3Rva2VuLnRleHRdO1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VEYXRhKCdNMCwwJyArIGQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzVHlwZSh0b2tlbiwgdGhpcy5OVU1CRVIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtX2xlbmd0aCA9IFBBUkFNU1ttb2RlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtX2xlbmd0aCA9IFBBUkFNU1t0b2tlbi50ZXh0XTtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChpbmRleCArIHBhcmFtX2xlbmd0aCkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyBwYXJhbV9sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBudW1iZVRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUeXBlKG51bWJlVG9rZW4sIHRoaXMuTlVNQkVSKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zW3BhcmFtcy5sZW5ndGhdID0gK251bWJlVG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhcmFtZXRlciB0eXBlIGlzIG5vdCBhIG51bWJlcjogJyArIG1vZGUgKyAnLCcgKyBudW1iZVRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgUEFSQU1TW21vZGVdID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWdtZW50ID0geyBrZXk6IG1vZGUsIGRhdGE6IHBhcmFtcyB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IHBhcmFtX2xlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0b2tlbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ00nKVxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdMJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGUgPSAnbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbnN1cHBvcnRlZCBzZWdtZW50IHR5cGU6ICcgKyBtb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhdGggZGF0YSBlbmRlZCBiZWZvcmUgYWxsIHBhcmFtZXRlcnMgd2VyZSBmb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBjbG9zZWQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY2xvc2VkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHMgb2YgdGhpcy5zZWdtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChzLmtleS50b0xvd2VyQ2FzZSgpID09PSAneicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb3NlZDtcbiAgICB9XG4gICAgcHJvY2Vzc1BvaW50cygpIHtcbiAgICAgICAgbGV0IGZpcnN0ID0gbnVsbDtcbiAgICAgICAgbGV0IGN1cnJlbnRQb2ludCA9IFswLCAwXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gdGhpcy5zZWdtZW50c1tpXTtcbiAgICAgICAgICAgIHN3aXRjaCAocy5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtzLmRhdGFbMF0sIHMuZGF0YVsxXV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW3MuZGF0YVswXSArIGN1cnJlbnRQb2ludFswXSwgcy5kYXRhWzFdICsgY3VycmVudFBvaW50WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbcy5kYXRhWzBdLCBjdXJyZW50UG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtzLmRhdGFbMF0gKyBjdXJyZW50UG9pbnRbMF0sIGN1cnJlbnRQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW2N1cnJlbnRQb2ludFswXSwgcy5kYXRhWzBdXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbY3VycmVudFBvaW50WzBdLCBzLmRhdGFbMF0gKyBjdXJyZW50UG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd6JzpcbiAgICAgICAgICAgICAgICBjYXNlICdaJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW2ZpcnN0WzBdLCBmaXJzdFsxXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbcy5kYXRhWzRdLCBzLmRhdGFbNV1dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtzLmRhdGFbNF0gKyBjdXJyZW50UG9pbnRbMF0sIHMuZGF0YVs1XSArIGN1cnJlbnRQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW3MuZGF0YVsyXSwgcy5kYXRhWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbcy5kYXRhWzJdICsgY3VycmVudFBvaW50WzBdLCBzLmRhdGFbM10gKyBjdXJyZW50UG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtzLmRhdGFbMl0sIHMuZGF0YVszXV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgICAgICAgICBzLnBvaW50ID0gW3MuZGF0YVsyXSArIGN1cnJlbnRQb2ludFswXSwgcy5kYXRhWzNdICsgY3VycmVudFBvaW50WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICAgICAgICAgIHMucG9pbnQgPSBbcy5kYXRhWzVdLCBzLmRhdGFbNl1dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICAgICAgcy5wb2ludCA9IFtzLmRhdGFbNV0gKyBjdXJyZW50UG9pbnRbMF0sIHMuZGF0YVs2XSArIGN1cnJlbnRQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMua2V5ID09PSAnbScgfHwgcy5rZXkgPT09ICdNJykge1xuICAgICAgICAgICAgICAgIGZpcnN0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBvaW50KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBvaW50ID0gcy5wb2ludDtcbiAgICAgICAgICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gcy5wb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5rZXkgPT09ICd6JyB8fCBzLmtleSA9PT0gJ1onKSB7XG4gICAgICAgICAgICAgICAgZmlyc3QgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJvdWdoUGF0aCB7XG4gICAgY29uc3RydWN0b3IoZCkge1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IFswLCAwXTtcbiAgICAgICAgdGhpcy5fZmlyc3QgPSBudWxsO1xuICAgICAgICB0aGlzLmJlemllclJlZmxlY3Rpb25Qb2ludCA9IG51bGw7XG4gICAgICAgIHRoaXMucXVhZFJlZmxlY3Rpb25Qb2ludCA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyc2VkID0gbmV3IFBhcnNlZFBhdGgoZCk7XG4gICAgfVxuICAgIGdldCBzZWdtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VkLnNlZ21lbnRzO1xuICAgIH1cbiAgICBnZXQgY2xvc2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZWQuY2xvc2VkO1xuICAgIH1cbiAgICBnZXQgbGluZWFyUG9pbnRzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2xpbmVhclBvaW50cykge1xuICAgICAgICAgICAgY29uc3QgbHAgPSBbXTtcbiAgICAgICAgICAgIGxldCBwb2ludHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcyBvZiB0aGlzLnBhcnNlZC5zZWdtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHMua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ20nIHx8IGtleSA9PT0gJ3onKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBscC5wdXNoKHBvaW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAneicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHMucG9pbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb2ludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbHAucHVzaChwb2ludHMpO1xuICAgICAgICAgICAgICAgIHBvaW50cyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbGluZWFyUG9pbnRzID0gbHA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVhclBvaW50cztcbiAgICB9XG4gICAgZ2V0IGZpcnN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlyc3Q7XG4gICAgfVxuICAgIHNldCBmaXJzdCh2KSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0ID0gdjtcbiAgICB9XG4gICAgc2V0UG9zaXRpb24oeCwgeSkge1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IFt4LCB5XTtcbiAgICAgICAgaWYgKCF0aGlzLl9maXJzdCkge1xuICAgICAgICAgICAgdGhpcy5fZmlyc3QgPSBbeCwgeV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gICAgfVxuICAgIGdldCB4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb25bMF07XG4gICAgfVxuICAgIGdldCB5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb25bMV07XG4gICAgfVxufVxuLy8gQWxnb3JpdGhtIGFzIGRlc2NyaWJlZCBpbiBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHL2ltcGxub3RlLmh0bWxcbi8vIENvZGUgYWRhcHRlZCBmcm9tIG5zU1ZHUGF0aERhdGFQYXJzZXIuY3BwIGluIE1vemlsbGEgXG4vLyBodHRwczovL2hnLm1vemlsbGEub3JnL21vemlsbGEtY2VudHJhbC9maWxlLzE3MTU2ZmJlYmJjOC9jb250ZW50L3N2Zy9jb250ZW50L3NyYy9uc1NWR1BhdGhEYXRhUGFyc2VyLmNwcCNsODg3XG5leHBvcnQgY2xhc3MgUm91Z2hBcmNDb252ZXJ0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGZyb20sIHRvLCByYWRpaSwgYW5nbGUsIGxhcmdlQXJjRmxhZywgc3dlZXBGbGFnKSB7XG4gICAgICAgIHRoaXMuX3NlZ0luZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fbnVtU2VncyA9IDA7XG4gICAgICAgIHRoaXMuX3J4ID0gMDtcbiAgICAgICAgdGhpcy5fcnkgPSAwO1xuICAgICAgICB0aGlzLl9zaW5QaGkgPSAwO1xuICAgICAgICB0aGlzLl9jb3NQaGkgPSAwO1xuICAgICAgICB0aGlzLl9DID0gWzAsIDBdO1xuICAgICAgICB0aGlzLl90aGV0YSA9IDA7XG4gICAgICAgIHRoaXMuX2RlbHRhID0gMDtcbiAgICAgICAgdGhpcy5fVCA9IDA7XG4gICAgICAgIHRoaXMuX2Zyb20gPSBmcm9tO1xuICAgICAgICBpZiAoZnJvbVswXSA9PT0gdG9bMF0gJiYgZnJvbVsxXSA9PT0gdG9bMV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYWRQZXJEZWcgPSBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB0aGlzLl9yeCA9IE1hdGguYWJzKHJhZGlpWzBdKTtcbiAgICAgICAgdGhpcy5fcnkgPSBNYXRoLmFicyhyYWRpaVsxXSk7XG4gICAgICAgIHRoaXMuX3NpblBoaSA9IE1hdGguc2luKGFuZ2xlICogcmFkUGVyRGVnKTtcbiAgICAgICAgdGhpcy5fY29zUGhpID0gTWF0aC5jb3MoYW5nbGUgKiByYWRQZXJEZWcpO1xuICAgICAgICBjb25zdCB4MWRhc2ggPSB0aGlzLl9jb3NQaGkgKiAoZnJvbVswXSAtIHRvWzBdKSAvIDIuMCArIHRoaXMuX3NpblBoaSAqIChmcm9tWzFdIC0gdG9bMV0pIC8gMi4wO1xuICAgICAgICBjb25zdCB5MWRhc2ggPSAtdGhpcy5fc2luUGhpICogKGZyb21bMF0gLSB0b1swXSkgLyAyLjAgKyB0aGlzLl9jb3NQaGkgKiAoZnJvbVsxXSAtIHRvWzFdKSAvIDIuMDtcbiAgICAgICAgbGV0IHJvb3QgPSAwO1xuICAgICAgICBjb25zdCBudW1lcmF0b3IgPSB0aGlzLl9yeCAqIHRoaXMuX3J4ICogdGhpcy5fcnkgKiB0aGlzLl9yeSAtIHRoaXMuX3J4ICogdGhpcy5fcnggKiB5MWRhc2ggKiB5MWRhc2ggLSB0aGlzLl9yeSAqIHRoaXMuX3J5ICogeDFkYXNoICogeDFkYXNoO1xuICAgICAgICBpZiAobnVtZXJhdG9yIDwgMCkge1xuICAgICAgICAgICAgY29uc3QgcyA9IE1hdGguc3FydCgxIC0gKG51bWVyYXRvciAvICh0aGlzLl9yeCAqIHRoaXMuX3J4ICogdGhpcy5fcnkgKiB0aGlzLl9yeSkpKTtcbiAgICAgICAgICAgIHRoaXMuX3J4ID0gdGhpcy5fcnggKiBzO1xuICAgICAgICAgICAgdGhpcy5fcnkgPSB0aGlzLl9yeSAqIHM7XG4gICAgICAgICAgICByb290ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJvb3QgPSAobGFyZ2VBcmNGbGFnID09PSBzd2VlcEZsYWcgPyAtMS4wIDogMS4wKSAqXG4gICAgICAgICAgICAgICAgTWF0aC5zcXJ0KG51bWVyYXRvciAvICh0aGlzLl9yeCAqIHRoaXMuX3J4ICogeTFkYXNoICogeTFkYXNoICsgdGhpcy5fcnkgKiB0aGlzLl9yeSAqIHgxZGFzaCAqIHgxZGFzaCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN4ZGFzaCA9IHJvb3QgKiB0aGlzLl9yeCAqIHkxZGFzaCAvIHRoaXMuX3J5O1xuICAgICAgICBjb25zdCBjeWRhc2ggPSAtcm9vdCAqIHRoaXMuX3J5ICogeDFkYXNoIC8gdGhpcy5fcng7XG4gICAgICAgIHRoaXMuX0MgPSBbMCwgMF07XG4gICAgICAgIHRoaXMuX0NbMF0gPSB0aGlzLl9jb3NQaGkgKiBjeGRhc2ggLSB0aGlzLl9zaW5QaGkgKiBjeWRhc2ggKyAoZnJvbVswXSArIHRvWzBdKSAvIDIuMDtcbiAgICAgICAgdGhpcy5fQ1sxXSA9IHRoaXMuX3NpblBoaSAqIGN4ZGFzaCArIHRoaXMuX2Nvc1BoaSAqIGN5ZGFzaCArIChmcm9tWzFdICsgdG9bMV0pIC8gMi4wO1xuICAgICAgICB0aGlzLl90aGV0YSA9IHRoaXMuY2FsY3VsYXRlVmVjdG9yQW5nbGUoMS4wLCAwLjAsICh4MWRhc2ggLSBjeGRhc2gpIC8gdGhpcy5fcngsICh5MWRhc2ggLSBjeWRhc2gpIC8gdGhpcy5fcnkpO1xuICAgICAgICBsZXQgZHRoZXRhID0gdGhpcy5jYWxjdWxhdGVWZWN0b3JBbmdsZSgoeDFkYXNoIC0gY3hkYXNoKSAvIHRoaXMuX3J4LCAoeTFkYXNoIC0gY3lkYXNoKSAvIHRoaXMuX3J5LCAoLXgxZGFzaCAtIGN4ZGFzaCkgLyB0aGlzLl9yeCwgKC15MWRhc2ggLSBjeWRhc2gpIC8gdGhpcy5fcnkpO1xuICAgICAgICBpZiAoKCFzd2VlcEZsYWcpICYmIChkdGhldGEgPiAwKSkge1xuICAgICAgICAgICAgZHRoZXRhIC09IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN3ZWVwRmxhZyAmJiAoZHRoZXRhIDwgMCkpIHtcbiAgICAgICAgICAgIGR0aGV0YSArPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9udW1TZWdzID0gTWF0aC5jZWlsKE1hdGguYWJzKGR0aGV0YSAvIChNYXRoLlBJIC8gMikpKTtcbiAgICAgICAgdGhpcy5fZGVsdGEgPSBkdGhldGEgLyB0aGlzLl9udW1TZWdzO1xuICAgICAgICB0aGlzLl9UID0gKDggLyAzKSAqIE1hdGguc2luKHRoaXMuX2RlbHRhIC8gNCkgKiBNYXRoLnNpbih0aGlzLl9kZWx0YSAvIDQpIC8gTWF0aC5zaW4odGhpcy5fZGVsdGEgLyAyKTtcbiAgICB9XG4gICAgZ2V0TmV4dFNlZ21lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWdJbmRleCA9PT0gdGhpcy5fbnVtU2Vncykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29zVGhldGExID0gTWF0aC5jb3ModGhpcy5fdGhldGEpO1xuICAgICAgICBjb25zdCBzaW5UaGV0YTEgPSBNYXRoLnNpbih0aGlzLl90aGV0YSk7XG4gICAgICAgIGNvbnN0IHRoZXRhMiA9IHRoaXMuX3RoZXRhICsgdGhpcy5fZGVsdGE7XG4gICAgICAgIGNvbnN0IGNvc1RoZXRhMiA9IE1hdGguY29zKHRoZXRhMik7XG4gICAgICAgIGNvbnN0IHNpblRoZXRhMiA9IE1hdGguc2luKHRoZXRhMik7XG4gICAgICAgIGNvbnN0IHRvID0gW1xuICAgICAgICAgICAgdGhpcy5fY29zUGhpICogdGhpcy5fcnggKiBjb3NUaGV0YTIgLSB0aGlzLl9zaW5QaGkgKiB0aGlzLl9yeSAqIHNpblRoZXRhMiArIHRoaXMuX0NbMF0sXG4gICAgICAgICAgICB0aGlzLl9zaW5QaGkgKiB0aGlzLl9yeCAqIGNvc1RoZXRhMiArIHRoaXMuX2Nvc1BoaSAqIHRoaXMuX3J5ICogc2luVGhldGEyICsgdGhpcy5fQ1sxXVxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBjcDEgPSBbXG4gICAgICAgICAgICB0aGlzLl9mcm9tWzBdICsgdGhpcy5fVCAqICgtdGhpcy5fY29zUGhpICogdGhpcy5fcnggKiBzaW5UaGV0YTEgLSB0aGlzLl9zaW5QaGkgKiB0aGlzLl9yeSAqIGNvc1RoZXRhMSksXG4gICAgICAgICAgICB0aGlzLl9mcm9tWzFdICsgdGhpcy5fVCAqICgtdGhpcy5fc2luUGhpICogdGhpcy5fcnggKiBzaW5UaGV0YTEgKyB0aGlzLl9jb3NQaGkgKiB0aGlzLl9yeSAqIGNvc1RoZXRhMSlcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgY3AyID0gW1xuICAgICAgICAgICAgdG9bMF0gKyB0aGlzLl9UICogKHRoaXMuX2Nvc1BoaSAqIHRoaXMuX3J4ICogc2luVGhldGEyICsgdGhpcy5fc2luUGhpICogdGhpcy5fcnkgKiBjb3NUaGV0YTIpLFxuICAgICAgICAgICAgdG9bMV0gKyB0aGlzLl9UICogKHRoaXMuX3NpblBoaSAqIHRoaXMuX3J4ICogc2luVGhldGEyIC0gdGhpcy5fY29zUGhpICogdGhpcy5fcnkgKiBjb3NUaGV0YTIpXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuX3RoZXRhID0gdGhldGEyO1xuICAgICAgICB0aGlzLl9mcm9tID0gW3RvWzBdLCB0b1sxXV07XG4gICAgICAgIHRoaXMuX3NlZ0luZGV4Kys7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcDE6IGNwMSxcbiAgICAgICAgICAgIGNwMjogY3AyLFxuICAgICAgICAgICAgdG86IHRvXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNhbGN1bGF0ZVZlY3RvckFuZ2xlKHV4LCB1eSwgdngsIHZ5KSB7XG4gICAgICAgIGNvbnN0IHRhID0gTWF0aC5hdGFuMih1eSwgdXgpO1xuICAgICAgICBjb25zdCB0YiA9IE1hdGguYXRhbjIodnksIHZ4KTtcbiAgICAgICAgaWYgKHRiID49IHRhKVxuICAgICAgICAgICAgcmV0dXJuIHRiIC0gdGE7XG4gICAgICAgIHJldHVybiAyICogTWF0aC5QSSAtICh0YSAtIHRiKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUGF0aEZpdHRlciB7XG4gICAgY29uc3RydWN0b3Ioc2V0cywgY2xvc2VkKSB7XG4gICAgICAgIHRoaXMuc2V0cyA9IHNldHM7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gY2xvc2VkO1xuICAgIH1cbiAgICBmaXQoc2ltcGxpZmljYXRpb24pIHtcbiAgICAgICAgY29uc3Qgb3V0U2V0cyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHNldCBvZiB0aGlzLnNldHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHNldC5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgZXN0TGVuZ3RoID0gTWF0aC5mbG9vcihzaW1wbGlmaWNhdGlvbiAqIGxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoZXN0TGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPD0gNSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXN0TGVuZ3RoID0gNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dFNldHMucHVzaCh0aGlzLnJlZHVjZShzZXQsIGVzdExlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkID0gJyc7XG4gICAgICAgIGZvciAoY29uc3Qgc2V0IG9mIG91dFNldHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBzZXRbaV07XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZCArPSAnTScgKyBwb2ludFswXSArICcsJyArIHBvaW50WzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZCArPSAnTCcgKyBwb2ludFswXSArICcsJyArIHBvaW50WzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIGQgKz0gJ3ogJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgZGlzdGFuY2UocDEsIHAyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDFbMF0gLSBwMlswXSwgMikgKyBNYXRoLnBvdyhwMVsxXSAtIHAyWzFdLCAyKSk7XG4gICAgfVxuICAgIHJlZHVjZShzZXQsIGNvdW50KSB7XG4gICAgICAgIGlmIChzZXQubGVuZ3RoIDw9IGNvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IHNldC5zbGljZSgwKTtcbiAgICAgICAgd2hpbGUgKHBvaW50cy5sZW5ndGggPiBjb3VudCkge1xuICAgICAgICAgICAgY29uc3QgYXJlYXMgPSBbXTtcbiAgICAgICAgICAgIGxldCBtaW5BcmVhID0gLTE7XG4gICAgICAgICAgICBsZXQgbWluSW5kZXggPSAtMTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgKHBvaW50cy5sZW5ndGggLSAxKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYSA9IHRoaXMuZGlzdGFuY2UocG9pbnRzW2kgLSAxXSwgcG9pbnRzW2ldKTtcbiAgICAgICAgICAgICAgICBjb25zdCBiID0gdGhpcy5kaXN0YW5jZShwb2ludHNbaV0sIHBvaW50c1tpICsgMV0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmRpc3RhbmNlKHBvaW50c1tpIC0gMV0sIHBvaW50c1tpICsgMV0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSAoYSArIGIgKyBjKSAvIDIuMDtcbiAgICAgICAgICAgICAgICBjb25zdCBhcmVhID0gTWF0aC5zcXJ0KHMgKiAocyAtIGEpICogKHMgLSBiKSAqIChzIC0gYykpO1xuICAgICAgICAgICAgICAgIGFyZWFzLnB1c2goYXJlYSk7XG4gICAgICAgICAgICAgICAgaWYgKChtaW5BcmVhIDwgMCkgfHwgKGFyZWEgPCBtaW5BcmVhKSkge1xuICAgICAgICAgICAgICAgICAgICBtaW5BcmVhID0gYXJlYTtcbiAgICAgICAgICAgICAgICAgICAgbWluSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtaW5JbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb2ludHMuc3BsaWNlKG1pbkluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUm91Z2hSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXInO1xuY29uc3QgaGFzU2VsZiA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJztcbmNvbnN0IHJvdWdoU2NyaXB0ID0gaGFzU2VsZiAmJiBzZWxmICYmIHNlbGYuZG9jdW1lbnQgJiYgc2VsZi5kb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIHNlbGYuZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVuZGVyZXIoY29uZmlnKSB7XG4gICAgaWYgKGhhc1NlbGYgJiYgcm91Z2hTY3JpcHQgJiYgc2VsZiAmJiBzZWxmLndvcmtseSAmJiBjb25maWcuYXN5bmMgJiYgKCFjb25maWcubm9Xb3JrZXIpKSB7XG4gICAgICAgIGNvbnN0IHdvcmtseVNvdXJjZSA9IGNvbmZpZy53b3JrbHlVUkwgfHwgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9wc2hpaG4vd29ya2x5L2Rpc3Qvd29ya2x5Lm1pbi5qcyc7XG4gICAgICAgIGlmICh3b3JrbHlTb3VyY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBgaW1wb3J0U2NyaXB0cygnJHt3b3JrbHlTb3VyY2V9JywgJyR7cm91Z2hTY3JpcHR9Jyk7XFxud29ya2x5LmV4cG9zZShzZWxmLnJvdWdoLmNyZWF0ZVJlbmRlcmVyKCkpO2A7XG4gICAgICAgICAgICBjb25zdCBvdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbY29kZV0pKTtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLndvcmtseS5wcm94eShvdXJsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJvdWdoUmVuZGVyZXIoKTtcbn1cbiIsImltcG9ydCB7IFJvdWdoUGF0aCwgUm91Z2hBcmNDb252ZXJ0ZXIsIFBhdGhGaXR0ZXIgfSBmcm9tICcuL3BhdGguanMnO1xuaW1wb3J0IHsgZ2V0RmlsbGVyIH0gZnJvbSAnLi9maWxsZXJzL2ZpbGxlcic7XG5leHBvcnQgY2xhc3MgUm91Z2hSZW5kZXJlciB7XG4gICAgbGluZSh4MSwgeTEsIHgyLCB5Miwgbykge1xuICAgICAgICBjb25zdCBvcHMgPSB0aGlzLmRvdWJsZUxpbmUoeDEsIHkxLCB4MiwgeTIsIG8pO1xuICAgICAgICByZXR1cm4geyB0eXBlOiAncGF0aCcsIG9wcyB9O1xuICAgIH1cbiAgICBsaW5lYXJQYXRoKHBvaW50cywgY2xvc2UsIG8pIHtcbiAgICAgICAgY29uc3QgbGVuID0gKHBvaW50cyB8fCBbXSkubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID4gMikge1xuICAgICAgICAgICAgbGV0IG9wcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAobGVuIC0gMSk7IGkrKykge1xuICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKHBvaW50c1tpXVswXSwgcG9pbnRzW2ldWzFdLCBwb2ludHNbaSArIDFdWzBdLCBwb2ludHNbaSArIDFdWzFdLCBvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2xvc2UpIHtcbiAgICAgICAgICAgICAgICBvcHMgPSBvcHMuY29uY2F0KHRoaXMuZG91YmxlTGluZShwb2ludHNbbGVuIC0gMV1bMF0sIHBvaW50c1tsZW4gLSAxXVsxXSwgcG9pbnRzWzBdWzBdLCBwb2ludHNbMF1bMV0sIG8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdwYXRoJywgb3BzIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGVuID09PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5lKHBvaW50c1swXVswXSwgcG9pbnRzWzBdWzFdLCBwb2ludHNbMV1bMF0sIHBvaW50c1sxXVsxXSwgbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3BhdGgnLCBvcHM6IFtdIH07XG4gICAgfVxuICAgIHBvbHlnb24ocG9pbnRzLCBvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmVhclBhdGgocG9pbnRzLCB0cnVlLCBvKTtcbiAgICB9XG4gICAgcmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIG8pIHtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gW1xuICAgICAgICAgICAgW3gsIHldLCBbeCArIHdpZHRoLCB5XSwgW3ggKyB3aWR0aCwgeSArIGhlaWdodF0sIFt4LCB5ICsgaGVpZ2h0XVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29uKHBvaW50cywgbyk7XG4gICAgfVxuICAgIGN1cnZlKHBvaW50cywgbykge1xuICAgICAgICBjb25zdCBvMSA9IHRoaXMuX2N1cnZlV2l0aE9mZnNldChwb2ludHMsIDEgKiAoMSArIG8ucm91Z2huZXNzICogMC4yKSwgbyk7XG4gICAgICAgIGNvbnN0IG8yID0gdGhpcy5fY3VydmVXaXRoT2Zmc2V0KHBvaW50cywgMS41ICogKDEgKyBvLnJvdWdobmVzcyAqIDAuMjIpLCBvKTtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3BhdGgnLCBvcHM6IG8xLmNvbmNhdChvMikgfTtcbiAgICB9XG4gICAgZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvKSB7XG4gICAgICAgIGNvbnN0IGluY3JlbWVudCA9IChNYXRoLlBJICogMikgLyBvLmN1cnZlU3RlcENvdW50O1xuICAgICAgICBsZXQgcnggPSBNYXRoLmFicyh3aWR0aCAvIDIpO1xuICAgICAgICBsZXQgcnkgPSBNYXRoLmFicyhoZWlnaHQgLyAyKTtcbiAgICAgICAgcnggKz0gdGhpcy5nZXRPZmZzZXQoLXJ4ICogMC4wNSwgcnggKiAwLjA1LCBvKTtcbiAgICAgICAgcnkgKz0gdGhpcy5nZXRPZmZzZXQoLXJ5ICogMC4wNSwgcnkgKiAwLjA1LCBvKTtcbiAgICAgICAgY29uc3QgbzEgPSB0aGlzLl9lbGxpcHNlKGluY3JlbWVudCwgeCwgeSwgcngsIHJ5LCAxLCBpbmNyZW1lbnQgKiB0aGlzLmdldE9mZnNldCgwLjEsIHRoaXMuZ2V0T2Zmc2V0KDAuNCwgMSwgbyksIG8pLCBvKTtcbiAgICAgICAgY29uc3QgbzIgPSB0aGlzLl9lbGxpcHNlKGluY3JlbWVudCwgeCwgeSwgcngsIHJ5LCAxLjUsIDAsIG8pO1xuICAgICAgICByZXR1cm4geyB0eXBlOiAncGF0aCcsIG9wczogbzEuY29uY2F0KG8yKSB9O1xuICAgIH1cbiAgICBhcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCwgcm91Z2hDbG9zdXJlLCBvKSB7XG4gICAgICAgIGNvbnN0IGN4ID0geDtcbiAgICAgICAgY29uc3QgY3kgPSB5O1xuICAgICAgICBsZXQgcnggPSBNYXRoLmFicyh3aWR0aCAvIDIpO1xuICAgICAgICBsZXQgcnkgPSBNYXRoLmFicyhoZWlnaHQgLyAyKTtcbiAgICAgICAgcnggKz0gdGhpcy5nZXRPZmZzZXQoLXJ4ICogMC4wMSwgcnggKiAwLjAxLCBvKTtcbiAgICAgICAgcnkgKz0gdGhpcy5nZXRPZmZzZXQoLXJ5ICogMC4wMSwgcnkgKiAwLjAxLCBvKTtcbiAgICAgICAgbGV0IHN0cnQgPSBzdGFydDtcbiAgICAgICAgbGV0IHN0cCA9IHN0b3A7XG4gICAgICAgIHdoaWxlIChzdHJ0IDwgMCkge1xuICAgICAgICAgICAgc3RydCArPSBNYXRoLlBJICogMjtcbiAgICAgICAgICAgIHN0cCArPSBNYXRoLlBJICogMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN0cCAtIHN0cnQpID4gKE1hdGguUEkgKiAyKSkge1xuICAgICAgICAgICAgc3RydCA9IDA7XG4gICAgICAgICAgICBzdHAgPSBNYXRoLlBJICogMjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGxpcHNlSW5jID0gKE1hdGguUEkgKiAyKSAvIG8uY3VydmVTdGVwQ291bnQ7XG4gICAgICAgIGNvbnN0IGFyY0luYyA9IE1hdGgubWluKGVsbGlwc2VJbmMgLyAyLCAoc3RwIC0gc3RydCkgLyAyKTtcbiAgICAgICAgY29uc3QgbzEgPSB0aGlzLl9hcmMoYXJjSW5jLCBjeCwgY3ksIHJ4LCByeSwgc3RydCwgc3RwLCAxLCBvKTtcbiAgICAgICAgY29uc3QgbzIgPSB0aGlzLl9hcmMoYXJjSW5jLCBjeCwgY3ksIHJ4LCByeSwgc3RydCwgc3RwLCAxLjUsIG8pO1xuICAgICAgICBsZXQgb3BzID0gbzEuY29uY2F0KG8yKTtcbiAgICAgICAgaWYgKGNsb3NlZCkge1xuICAgICAgICAgICAgaWYgKHJvdWdoQ2xvc3VyZSkge1xuICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKGN4LCBjeSwgY3ggKyByeCAqIE1hdGguY29zKHN0cnQpLCBjeSArIHJ5ICogTWF0aC5zaW4oc3RydCksIG8pKTtcbiAgICAgICAgICAgICAgICBvcHMgPSBvcHMuY29uY2F0KHRoaXMuZG91YmxlTGluZShjeCwgY3ksIGN4ICsgcnggKiBNYXRoLmNvcyhzdHApLCBjeSArIHJ5ICogTWF0aC5zaW4oc3RwKSwgbykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ2xpbmVUbycsIGRhdGE6IFtjeCwgY3ldIH0pO1xuICAgICAgICAgICAgICAgIG9wcy5wdXNoKHsgb3A6ICdsaW5lVG8nLCBkYXRhOiBbY3ggKyByeCAqIE1hdGguY29zKHN0cnQpLCBjeSArIHJ5ICogTWF0aC5zaW4oc3RydCldIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdwYXRoJywgb3BzIH07XG4gICAgfVxuICAgIHN2Z1BhdGgocGF0aCwgbykge1xuICAgICAgICBwYXRoID0gKHBhdGggfHwgJycpLnJlcGxhY2UoL1xcbi9nLCAnICcpLnJlcGxhY2UoLygtXFxzKS9nLCAnLScpLnJlcGxhY2UoJy8oXFxzXFxzKS9nJywgJyAnKTtcbiAgICAgICAgbGV0IHAgPSBuZXcgUm91Z2hQYXRoKHBhdGgpO1xuICAgICAgICBpZiAoby5zaW1wbGlmaWNhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgZml0dGVyID0gbmV3IFBhdGhGaXR0ZXIocC5saW5lYXJQb2ludHMsIHAuY2xvc2VkKTtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBmaXR0ZXIuZml0KG8uc2ltcGxpZmljYXRpb24pO1xuICAgICAgICAgICAgcCA9IG5ldyBSb3VnaFBhdGgoZCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9wcyA9IFtdO1xuICAgICAgICBjb25zdCBzZWdtZW50cyA9IHAuc2VnbWVudHMgfHwgW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBzZWdtZW50c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHByZXYgPSBpID4gMCA/IHNlZ21lbnRzW2kgLSAxXSA6IG51bGw7XG4gICAgICAgICAgICBjb25zdCBvcExpc3QgPSB0aGlzLl9wcm9jZXNzU2VnbWVudChwLCBzLCBwcmV2LCBvKTtcbiAgICAgICAgICAgIGlmIChvcExpc3QgJiYgb3BMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQob3BMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0eXBlOiAncGF0aCcsIG9wcyB9O1xuICAgIH1cbiAgICBzb2xpZEZpbGxQb2x5Z29uKHBvaW50cywgbykge1xuICAgICAgICBjb25zdCBvcHMgPSBbXTtcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IG8ubWF4UmFuZG9tbmVzc09mZnNldCB8fCAwO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChsZW4gPiAyKSB7XG4gICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbcG9pbnRzWzBdWzBdICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSwgcG9pbnRzWzBdWzFdICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKV0gfSk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBvcHMucHVzaCh7IG9wOiAnbGluZVRvJywgZGF0YTogW3BvaW50c1tpXVswXSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksIHBvaW50c1tpXVsxXSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyldIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0eXBlOiAnZmlsbFBhdGgnLCBvcHMgfTtcbiAgICB9XG4gICAgcGF0dGVybkZpbGxQb2x5Z29uKHBvaW50cywgbykge1xuICAgICAgICBjb25zdCBmaWxsZXIgPSBnZXRGaWxsZXIodGhpcywgbyk7XG4gICAgICAgIHJldHVybiBmaWxsZXIuZmlsbFBvbHlnb24ocG9pbnRzLCBvKTtcbiAgICB9XG4gICAgcGF0dGVybkZpbGxFbGxpcHNlKGN4LCBjeSwgd2lkdGgsIGhlaWdodCwgbykge1xuICAgICAgICBjb25zdCBmaWxsZXIgPSBnZXRGaWxsZXIodGhpcywgbyk7XG4gICAgICAgIHJldHVybiBmaWxsZXIuZmlsbEVsbGlwc2UoY3gsIGN5LCB3aWR0aCwgaGVpZ2h0LCBvKTtcbiAgICB9XG4gICAgcGF0dGVybkZpbGxBcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIG8pIHtcbiAgICAgICAgY29uc3QgY3ggPSB4O1xuICAgICAgICBjb25zdCBjeSA9IHk7XG4gICAgICAgIGxldCByeCA9IE1hdGguYWJzKHdpZHRoIC8gMik7XG4gICAgICAgIGxldCByeSA9IE1hdGguYWJzKGhlaWdodCAvIDIpO1xuICAgICAgICByeCArPSB0aGlzLmdldE9mZnNldCgtcnggKiAwLjAxLCByeCAqIDAuMDEsIG8pO1xuICAgICAgICByeSArPSB0aGlzLmdldE9mZnNldCgtcnkgKiAwLjAxLCByeSAqIDAuMDEsIG8pO1xuICAgICAgICBsZXQgc3RydCA9IHN0YXJ0O1xuICAgICAgICBsZXQgc3RwID0gc3RvcDtcbiAgICAgICAgd2hpbGUgKHN0cnQgPCAwKSB7XG4gICAgICAgICAgICBzdHJ0ICs9IE1hdGguUEkgKiAyO1xuICAgICAgICAgICAgc3RwICs9IE1hdGguUEkgKiAyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3RwIC0gc3RydCkgPiAoTWF0aC5QSSAqIDIpKSB7XG4gICAgICAgICAgICBzdHJ0ID0gMDtcbiAgICAgICAgICAgIHN0cCA9IE1hdGguUEkgKiAyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluY3JlbWVudCA9IChzdHAgLSBzdHJ0KSAvIG8uY3VydmVTdGVwQ291bnQ7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBhbmdsZSA9IHN0cnQ7IGFuZ2xlIDw9IHN0cDsgYW5nbGUgPSBhbmdsZSArIGluY3JlbWVudCkge1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goW2N4ICsgcnggKiBNYXRoLmNvcyhhbmdsZSksIGN5ICsgcnkgKiBNYXRoLnNpbihhbmdsZSldKTtcbiAgICAgICAgfVxuICAgICAgICBwb2ludHMucHVzaChbY3ggKyByeCAqIE1hdGguY29zKHN0cCksIGN5ICsgcnkgKiBNYXRoLnNpbihzdHApXSk7XG4gICAgICAgIHBvaW50cy5wdXNoKFtjeCwgY3ldKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0dGVybkZpbGxQb2x5Z29uKHBvaW50cywgbyk7XG4gICAgfVxuICAgIC8vLyBcbiAgICBnZXRPZmZzZXQobWluLCBtYXgsIG9wcykge1xuICAgICAgICByZXR1cm4gb3BzLnJvdWdobmVzcyAqICgoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbik7XG4gICAgfVxuICAgIGRvdWJsZUxpbmUoeDEsIHkxLCB4MiwgeTIsIG8pIHtcbiAgICAgICAgY29uc3QgbzEgPSB0aGlzLl9saW5lKHgxLCB5MSwgeDIsIHkyLCBvLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IG8yID0gdGhpcy5fbGluZSh4MSwgeTEsIHgyLCB5MiwgbywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBvMS5jb25jYXQobzIpO1xuICAgIH1cbiAgICBfbGluZSh4MSwgeTEsIHgyLCB5MiwgbywgbW92ZSwgb3ZlcmxheSkge1xuICAgICAgICBjb25zdCBsZW5ndGhTcSA9IE1hdGgucG93KCh4MSAtIHgyKSwgMikgKyBNYXRoLnBvdygoeTEgLSB5MiksIDIpO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gby5tYXhSYW5kb21uZXNzT2Zmc2V0IHx8IDA7XG4gICAgICAgIGlmICgob2Zmc2V0ICogb2Zmc2V0ICogMTAwKSA+IGxlbmd0aFNxKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBNYXRoLnNxcnQobGVuZ3RoU3EpIC8gMTA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFsZk9mZnNldCA9IG9mZnNldCAvIDI7XG4gICAgICAgIGNvbnN0IGRpdmVyZ2VQb2ludCA9IDAuMiArIE1hdGgucmFuZG9tKCkgKiAwLjI7XG4gICAgICAgIGxldCBtaWREaXNwWCA9IG8uYm93aW5nICogby5tYXhSYW5kb21uZXNzT2Zmc2V0ICogKHkyIC0geTEpIC8gMjAwO1xuICAgICAgICBsZXQgbWlkRGlzcFkgPSBvLmJvd2luZyAqIG8ubWF4UmFuZG9tbmVzc09mZnNldCAqICh4MSAtIHgyKSAvIDIwMDtcbiAgICAgICAgbWlkRGlzcFggPSB0aGlzLmdldE9mZnNldCgtbWlkRGlzcFgsIG1pZERpc3BYLCBvKTtcbiAgICAgICAgbWlkRGlzcFkgPSB0aGlzLmdldE9mZnNldCgtbWlkRGlzcFksIG1pZERpc3BZLCBvKTtcbiAgICAgICAgY29uc3Qgb3BzID0gW107XG4gICAgICAgIGlmIChtb3ZlKSB7XG4gICAgICAgICAgICBpZiAob3ZlcmxheSkge1xuICAgICAgICAgICAgICAgIG9wcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgb3A6ICdtb3ZlJywgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeDEgKyB0aGlzLmdldE9mZnNldCgtaGFsZk9mZnNldCwgaGFsZk9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgICAgICB5MSArIHRoaXMuZ2V0T2Zmc2V0KC1oYWxmT2Zmc2V0LCBoYWxmT2Zmc2V0LCBvKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG9wOiAnbW92ZScsIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgICAgICAgIG9wcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBvcDogJ2JjdXJ2ZVRvJywgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICBtaWREaXNwWCArIHgxICsgKHgyIC0geDEpICogZGl2ZXJnZVBvaW50ICsgdGhpcy5nZXRPZmZzZXQoLWhhbGZPZmZzZXQsIGhhbGZPZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgICAgICBtaWREaXNwWSArIHkxICsgKHkyIC0geTEpICogZGl2ZXJnZVBvaW50ICsgdGhpcy5nZXRPZmZzZXQoLWhhbGZPZmZzZXQsIGhhbGZPZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgICAgICBtaWREaXNwWCArIHgxICsgMiAqICh4MiAtIHgxKSAqIGRpdmVyZ2VQb2ludCArIHRoaXMuZ2V0T2Zmc2V0KC1oYWxmT2Zmc2V0LCBoYWxmT2Zmc2V0LCBvKSxcbiAgICAgICAgICAgICAgICAgICAgbWlkRGlzcFkgKyB5MSArIDIgKiAoeTIgLSB5MSkgKiBkaXZlcmdlUG9pbnQgKyB0aGlzLmdldE9mZnNldCgtaGFsZk9mZnNldCwgaGFsZk9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgIHgyICsgdGhpcy5nZXRPZmZzZXQoLWhhbGZPZmZzZXQsIGhhbGZPZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgICAgICB5MiArIHRoaXMuZ2V0T2Zmc2V0KC1oYWxmT2Zmc2V0LCBoYWxmT2Zmc2V0LCBvKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9wOiAnYmN1cnZlVG8nLCBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgIG1pZERpc3BYICsgeDEgKyAoeDIgLSB4MSkgKiBkaXZlcmdlUG9pbnQgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgICAgICBtaWREaXNwWSArIHkxICsgKHkyIC0geTEpICogZGl2ZXJnZVBvaW50ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSxcbiAgICAgICAgICAgICAgICAgICAgbWlkRGlzcFggKyB4MSArIDIgKiAoeDIgLSB4MSkgKiBkaXZlcmdlUG9pbnQgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgICAgICBtaWREaXNwWSArIHkxICsgMiAqICh5MiAtIHkxKSAqIGRpdmVyZ2VQb2ludCArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksXG4gICAgICAgICAgICAgICAgICAgIHgyICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSxcbiAgICAgICAgICAgICAgICAgICAgeTIgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wcztcbiAgICB9XG4gICAgX2N1cnZlKHBvaW50cywgY2xvc2VQb2ludCwgbykge1xuICAgICAgICBjb25zdCBsZW4gPSBwb2ludHMubGVuZ3RoO1xuICAgICAgICBsZXQgb3BzID0gW107XG4gICAgICAgIGlmIChsZW4gPiAzKSB7XG4gICAgICAgICAgICBjb25zdCBiID0gW107XG4gICAgICAgICAgICBjb25zdCBzID0gMSAtIG8uY3VydmVUaWdodG5lc3M7XG4gICAgICAgICAgICBvcHMucHVzaCh7IG9wOiAnbW92ZScsIGRhdGE6IFtwb2ludHNbMV1bMF0sIHBvaW50c1sxXVsxXV0gfSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgKGkgKyAyKSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkVmVydEFycmF5ID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgICAgIGJbMF0gPSBbY2FjaGVkVmVydEFycmF5WzBdLCBjYWNoZWRWZXJ0QXJyYXlbMV1dO1xuICAgICAgICAgICAgICAgIGJbMV0gPSBbY2FjaGVkVmVydEFycmF5WzBdICsgKHMgKiBwb2ludHNbaSArIDFdWzBdIC0gcyAqIHBvaW50c1tpIC0gMV1bMF0pIC8gNiwgY2FjaGVkVmVydEFycmF5WzFdICsgKHMgKiBwb2ludHNbaSArIDFdWzFdIC0gcyAqIHBvaW50c1tpIC0gMV1bMV0pIC8gNl07XG4gICAgICAgICAgICAgICAgYlsyXSA9IFtwb2ludHNbaSArIDFdWzBdICsgKHMgKiBwb2ludHNbaV1bMF0gLSBzICogcG9pbnRzW2kgKyAyXVswXSkgLyA2LCBwb2ludHNbaSArIDFdWzFdICsgKHMgKiBwb2ludHNbaV1bMV0gLSBzICogcG9pbnRzW2kgKyAyXVsxXSkgLyA2XTtcbiAgICAgICAgICAgICAgICBiWzNdID0gW3BvaW50c1tpICsgMV1bMF0sIHBvaW50c1tpICsgMV1bMV1dO1xuICAgICAgICAgICAgICAgIG9wcy5wdXNoKHsgb3A6ICdiY3VydmVUbycsIGRhdGE6IFtiWzFdWzBdLCBiWzFdWzFdLCBiWzJdWzBdLCBiWzJdWzFdLCBiWzNdWzBdLCBiWzNdWzFdXSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbG9zZVBvaW50ICYmIGNsb3NlUG9pbnQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm8gPSBvLm1heFJhbmRvbW5lc3NPZmZzZXQ7XG4gICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ2xpbmVUbycsIGRhdGE6IFtjbG9zZVBvaW50WzBdICsgdGhpcy5nZXRPZmZzZXQoLXJvLCBybywgbyksIGNsb3NlUG9pbnRbMV0gKyArdGhpcy5nZXRPZmZzZXQoLXJvLCBybywgbyldIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxlbiA9PT0gMykge1xuICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbcG9pbnRzWzFdWzBdLCBwb2ludHNbMV1bMV1dIH0pO1xuICAgICAgICAgICAgb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9wOiAnYmN1cnZlVG8nLCBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgIHBvaW50c1sxXVswXSwgcG9pbnRzWzFdWzFdLFxuICAgICAgICAgICAgICAgICAgICBwb2ludHNbMl1bMF0sIHBvaW50c1syXVsxXSxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzWzJdWzBdLCBwb2ludHNbMl1bMV1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsZW4gPT09IDIpIHtcbiAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKHBvaW50c1swXVswXSwgcG9pbnRzWzBdWzFdLCBwb2ludHNbMV1bMF0sIHBvaW50c1sxXVsxXSwgbykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHM7XG4gICAgfVxuICAgIF9lbGxpcHNlKGluY3JlbWVudCwgY3gsIGN5LCByeCwgcnksIG9mZnNldCwgb3ZlcmxhcCwgbykge1xuICAgICAgICBjb25zdCByYWRPZmZzZXQgPSB0aGlzLmdldE9mZnNldCgtMC41LCAwLjUsIG8pIC0gKE1hdGguUEkgLyAyKTtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gW107XG4gICAgICAgIHBvaW50cy5wdXNoKFtcbiAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeCArIDAuOSAqIHJ4ICogTWF0aC5jb3MocmFkT2Zmc2V0IC0gaW5jcmVtZW50KSxcbiAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeSArIDAuOSAqIHJ5ICogTWF0aC5zaW4ocmFkT2Zmc2V0IC0gaW5jcmVtZW50KVxuICAgICAgICBdKTtcbiAgICAgICAgZm9yIChsZXQgYW5nbGUgPSByYWRPZmZzZXQ7IGFuZ2xlIDwgKE1hdGguUEkgKiAyICsgcmFkT2Zmc2V0IC0gMC4wMSk7IGFuZ2xlID0gYW5nbGUgKyBpbmNyZW1lbnQpIHtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pICsgY3ggKyByeCAqIE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pICsgY3kgKyByeSAqIE1hdGguc2luKGFuZ2xlKVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICAgICAgcG9pbnRzLnB1c2goW1xuICAgICAgICAgICAgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSArIGN4ICsgcnggKiBNYXRoLmNvcyhyYWRPZmZzZXQgKyBNYXRoLlBJICogMiArIG92ZXJsYXAgKiAwLjUpLFxuICAgICAgICAgICAgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSArIGN5ICsgcnkgKiBNYXRoLnNpbihyYWRPZmZzZXQgKyBNYXRoLlBJICogMiArIG92ZXJsYXAgKiAwLjUpXG4gICAgICAgIF0pO1xuICAgICAgICBwb2ludHMucHVzaChbXG4gICAgICAgICAgICB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pICsgY3ggKyAwLjk4ICogcnggKiBNYXRoLmNvcyhyYWRPZmZzZXQgKyBvdmVybGFwKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbykgKyBjeSArIDAuOTggKiByeSAqIE1hdGguc2luKHJhZE9mZnNldCArIG92ZXJsYXApXG4gICAgICAgIF0pO1xuICAgICAgICBwb2ludHMucHVzaChbXG4gICAgICAgICAgICB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pICsgY3ggKyAwLjkgKiByeCAqIE1hdGguY29zKHJhZE9mZnNldCArIG92ZXJsYXAgKiAwLjUpLFxuICAgICAgICAgICAgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSArIGN5ICsgMC45ICogcnkgKiBNYXRoLnNpbihyYWRPZmZzZXQgKyBvdmVybGFwICogMC41KVxuICAgICAgICBdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnZlKHBvaW50cywgbnVsbCwgbyk7XG4gICAgfVxuICAgIF9jdXJ2ZVdpdGhPZmZzZXQocG9pbnRzLCBvZmZzZXQsIG8pIHtcbiAgICAgICAgY29uc3QgcHMgPSBbXTtcbiAgICAgICAgcHMucHVzaChbXG4gICAgICAgICAgICBwb2ludHNbMF1bMF0gKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgcG9pbnRzWzBdWzFdICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSxcbiAgICAgICAgXSk7XG4gICAgICAgIHBzLnB1c2goW1xuICAgICAgICAgICAgcG9pbnRzWzBdWzBdICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSxcbiAgICAgICAgICAgIHBvaW50c1swXVsxXSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQsIG9mZnNldCwgbyksXG4gICAgICAgIF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcHMucHVzaChbXG4gICAgICAgICAgICAgICAgcG9pbnRzW2ldWzBdICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldCwgb2Zmc2V0LCBvKSxcbiAgICAgICAgICAgICAgICBwb2ludHNbaV1bMV0gKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gKHBvaW50cy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgIHBzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICBwb2ludHNbaV1bMF0gKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgICAgICBwb2ludHNbaV1bMV0gKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJ2ZShwcywgbnVsbCwgbyk7XG4gICAgfVxuICAgIF9hcmMoaW5jcmVtZW50LCBjeCwgY3ksIHJ4LCByeSwgc3RydCwgc3RwLCBvZmZzZXQsIG8pIHtcbiAgICAgICAgY29uc3QgcmFkT2Zmc2V0ID0gc3RydCArIHRoaXMuZ2V0T2Zmc2V0KC0wLjEsIDAuMSwgbyk7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFtdO1xuICAgICAgICBwb2ludHMucHVzaChbXG4gICAgICAgICAgICB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pICsgY3ggKyAwLjkgKiByeCAqIE1hdGguY29zKHJhZE9mZnNldCAtIGluY3JlbWVudCksXG4gICAgICAgICAgICB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pICsgY3kgKyAwLjkgKiByeSAqIE1hdGguc2luKHJhZE9mZnNldCAtIGluY3JlbWVudClcbiAgICAgICAgXSk7XG4gICAgICAgIGZvciAobGV0IGFuZ2xlID0gcmFkT2Zmc2V0OyBhbmdsZSA8PSBzdHA7IGFuZ2xlID0gYW5nbGUgKyBpbmNyZW1lbnQpIHtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pICsgY3ggKyByeCAqIE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9mZnNldCgtb2Zmc2V0LCBvZmZzZXQsIG8pICsgY3kgKyByeSAqIE1hdGguc2luKGFuZ2xlKVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICAgICAgcG9pbnRzLnB1c2goW1xuICAgICAgICAgICAgY3ggKyByeCAqIE1hdGguY29zKHN0cCksXG4gICAgICAgICAgICBjeSArIHJ5ICogTWF0aC5zaW4oc3RwKVxuICAgICAgICBdKTtcbiAgICAgICAgcG9pbnRzLnB1c2goW1xuICAgICAgICAgICAgY3ggKyByeCAqIE1hdGguY29zKHN0cCksXG4gICAgICAgICAgICBjeSArIHJ5ICogTWF0aC5zaW4oc3RwKVxuICAgICAgICBdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnZlKHBvaW50cywgbnVsbCwgbyk7XG4gICAgfVxuICAgIF9iZXppZXJUbyh4MSwgeTEsIHgyLCB5MiwgeCwgeSwgcGF0aCwgbykge1xuICAgICAgICBjb25zdCBvcHMgPSBbXTtcbiAgICAgICAgY29uc3Qgcm9zID0gW28ubWF4UmFuZG9tbmVzc09mZnNldCB8fCAxLCAoby5tYXhSYW5kb21uZXNzT2Zmc2V0IHx8IDEpICsgMC41XTtcbiAgICAgICAgbGV0IGYgPSBbMCwgMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG9wcy5wdXNoKHsgb3A6ICdtb3ZlJywgZGF0YTogW3BhdGgueCwgcGF0aC55XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wcy5wdXNoKHsgb3A6ICdtb3ZlJywgZGF0YTogW3BhdGgueCArIHRoaXMuZ2V0T2Zmc2V0KC1yb3NbMF0sIHJvc1swXSwgbyksIHBhdGgueSArIHRoaXMuZ2V0T2Zmc2V0KC1yb3NbMF0sIHJvc1swXSwgbyldIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZiA9IFt4ICsgdGhpcy5nZXRPZmZzZXQoLXJvc1tpXSwgcm9zW2ldLCBvKSwgeSArIHRoaXMuZ2V0T2Zmc2V0KC1yb3NbaV0sIHJvc1tpXSwgbyldO1xuICAgICAgICAgICAgb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9wOiAnYmN1cnZlVG8nLCBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgIHgxICsgdGhpcy5nZXRPZmZzZXQoLXJvc1tpXSwgcm9zW2ldLCBvKSwgeTEgKyB0aGlzLmdldE9mZnNldCgtcm9zW2ldLCByb3NbaV0sIG8pLFxuICAgICAgICAgICAgICAgICAgICB4MiArIHRoaXMuZ2V0T2Zmc2V0KC1yb3NbaV0sIHJvc1tpXSwgbyksIHkyICsgdGhpcy5nZXRPZmZzZXQoLXJvc1tpXSwgcm9zW2ldLCBvKSxcbiAgICAgICAgICAgICAgICAgICAgZlswXSwgZlsxXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHBhdGguc2V0UG9zaXRpb24oZlswXSwgZlsxXSk7XG4gICAgICAgIHJldHVybiBvcHM7XG4gICAgfVxuICAgIF9wcm9jZXNzU2VnbWVudChwYXRoLCBzZWcsIHByZXZTZWcsIG8pIHtcbiAgICAgICAgbGV0IG9wcyA9IFtdO1xuICAgICAgICBzd2l0Y2ggKHNlZy5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgY2FzZSAnbSc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IHNlZy5rZXkgPT09ICdtJztcbiAgICAgICAgICAgICAgICBpZiAoc2VnLmRhdGEubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSArc2VnLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gK3NlZy5kYXRhWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gcGF0aC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm8gPSAxICogKG8ubWF4UmFuZG9tbmVzc09mZnNldCB8fCAwKTtcbiAgICAgICAgICAgICAgICAgICAgeCA9IHggKyB0aGlzLmdldE9mZnNldCgtcm8sIHJvLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHkgKyB0aGlzLmdldE9mZnNldCgtcm8sIHJvLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zZXRQb3NpdGlvbih4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goeyBvcDogJ21vdmUnLCBkYXRhOiBbeCwgeV0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICBjYXNlICdsJzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gc2VnLmtleSA9PT0gJ2wnO1xuICAgICAgICAgICAgICAgIGlmIChzZWcuZGF0YS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9ICtzZWcuZGF0YVswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSArc2VnLmRhdGFbMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBwYXRoLng7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ICs9IHBhdGgueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvcHMgPSBvcHMuY29uY2F0KHRoaXMuZG91YmxlTGluZShwYXRoLngsIHBhdGgueSwgeCwgeSwgbykpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgY2FzZSAnaCc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IHNlZy5rZXkgPT09ICdoJztcbiAgICAgICAgICAgICAgICBpZiAoc2VnLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gK3NlZy5kYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gcGF0aC54O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKHBhdGgueCwgcGF0aC55LCB4LCBwYXRoLnksIG8pKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zZXRQb3NpdGlvbih4LCBwYXRoLnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgICAgY2FzZSAndic6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IHNlZy5rZXkgPT09ICd2JztcbiAgICAgICAgICAgICAgICBpZiAoc2VnLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gK3NlZy5kYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgKz0gcGF0aC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQodGhpcy5kb3VibGVMaW5lKHBhdGgueCwgcGF0aC55LCBwYXRoLngsIHksIG8pKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zZXRQb3NpdGlvbihwYXRoLngsIHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ1onOlxuICAgICAgICAgICAgY2FzZSAneic6IHtcbiAgICAgICAgICAgICAgICBpZiAocGF0aC5maXJzdCkge1xuICAgICAgICAgICAgICAgICAgICBvcHMgPSBvcHMuY29uY2F0KHRoaXMuZG91YmxlTGluZShwYXRoLngsIHBhdGgueSwgcGF0aC5maXJzdFswXSwgcGF0aC5maXJzdFsxXSwgbykpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldFBvc2l0aW9uKHBhdGguZmlyc3RbMF0sIHBhdGguZmlyc3RbMV0pO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLmZpcnN0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgIGNhc2UgJ2MnOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBzZWcua2V5ID09PSAnYyc7XG4gICAgICAgICAgICAgICAgaWYgKHNlZy5kYXRhLmxlbmd0aCA+PSA2KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4MSA9ICtzZWcuZGF0YVswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkxID0gK3NlZy5kYXRhWzFdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeDIgPSArc2VnLmRhdGFbMl07XG4gICAgICAgICAgICAgICAgICAgIGxldCB5MiA9ICtzZWcuZGF0YVszXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSArc2VnLmRhdGFbNF07XG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gK3NlZy5kYXRhWzVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxICs9IHBhdGgueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyICs9IHBhdGgueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gcGF0aC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgeTEgKz0gcGF0aC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgeTIgKz0gcGF0aC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2IgPSB0aGlzLl9iZXppZXJUbyh4MSwgeTEsIHgyLCB5MiwgeCwgeSwgcGF0aCwgbyk7XG4gICAgICAgICAgICAgICAgICAgIG9wcyA9IG9wcy5jb25jYXQob2IpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLmJlemllclJlZmxlY3Rpb25Qb2ludCA9IFt4ICsgKHggLSB4MiksIHkgKyAoeSAtIHkyKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICBjYXNlICdzJzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gc2VnLmtleSA9PT0gJ3MnO1xuICAgICAgICAgICAgICAgIGlmIChzZWcuZGF0YS5sZW5ndGggPj0gNCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgeDIgPSArc2VnLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIGxldCB5MiA9ICtzZWcuZGF0YVsxXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSArc2VnLmRhdGFbMl07XG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gK3NlZy5kYXRhWzNdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyICs9IHBhdGgueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gcGF0aC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgeTIgKz0gcGF0aC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArPSBwYXRoLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHgxID0geDI7XG4gICAgICAgICAgICAgICAgICAgIGxldCB5MSA9IHkyO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2S2V5ID0gcHJldlNlZyA/IHByZXZTZWcua2V5IDogJyc7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJldktleSA9PT0gJ2MnIHx8IHByZXZLZXkgPT09ICdDJyB8fCBwcmV2S2V5ID09PSAncycgfHwgcHJldktleSA9PT0gJ1MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWYgPSBwYXRoLmJlemllclJlZmxlY3Rpb25Qb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4MSA9IHJlZlswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxID0gcmVmWzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iID0gdGhpcy5fYmV6aWVyVG8oeDEsIHkxLCB4MiwgeTIsIHgsIHksIHBhdGgsIG8pO1xuICAgICAgICAgICAgICAgICAgICBvcHMgPSBvcHMuY29uY2F0KG9iKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5iZXppZXJSZWZsZWN0aW9uUG9pbnQgPSBbeCArICh4IC0geDIpLCB5ICsgKHkgLSB5MildO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgY2FzZSAncSc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IHNlZy5rZXkgPT09ICdxJztcbiAgICAgICAgICAgICAgICBpZiAoc2VnLmRhdGEubGVuZ3RoID49IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHgxID0gK3NlZy5kYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeTEgPSArc2VnLmRhdGFbMV07XG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gK3NlZy5kYXRhWzJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9ICtzZWcuZGF0YVszXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4MSArPSBwYXRoLng7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ICs9IHBhdGgueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxICs9IHBhdGgueTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgKz0gcGF0aC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldDEgPSAxICogKDEgKyBvLnJvdWdobmVzcyAqIDAuMik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldDIgPSAxLjUgKiAoMSArIG8ucm91Z2huZXNzICogMC4yMik7XG4gICAgICAgICAgICAgICAgICAgIG9wcy5wdXNoKHsgb3A6ICdtb3ZlJywgZGF0YTogW3BhdGgueCArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQxLCBvZmZzZXQxLCBvKSwgcGF0aC55ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGYgPSBbeCArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQxLCBvZmZzZXQxLCBvKSwgeSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQxLCBvZmZzZXQxLCBvKV07XG4gICAgICAgICAgICAgICAgICAgIG9wcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wOiAncWN1cnZlVG8nLCBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDEgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0MSwgb2Zmc2V0MSwgbyksIHkxICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZbMF0sIGZbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG9wcy5wdXNoKHsgb3A6ICdtb3ZlJywgZGF0YTogW3BhdGgueCArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQyLCBvZmZzZXQyLCBvKSwgcGF0aC55ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDIsIG9mZnNldDIsIG8pXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZiA9IFt4ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDIsIG9mZnNldDIsIG8pLCB5ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDIsIG9mZnNldDIsIG8pXTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3A6ICdxY3VydmVUbycsIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQyLCBvZmZzZXQyLCBvKSwgeTEgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0Miwgb2Zmc2V0MiwgbyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZlswXSwgZlsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zZXRQb3NpdGlvbihmWzBdLCBmWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5xdWFkUmVmbGVjdGlvblBvaW50ID0gW3ggKyAoeCAtIHgxKSwgeSArICh5IC0geTEpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgIGNhc2UgJ3QnOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBzZWcua2V5ID09PSAndCc7XG4gICAgICAgICAgICAgICAgaWYgKHNlZy5kYXRhLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gK3NlZy5kYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9ICtzZWcuZGF0YVsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ICs9IHBhdGgueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgKz0gcGF0aC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB4MSA9IHg7XG4gICAgICAgICAgICAgICAgICAgIGxldCB5MSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZLZXkgPSBwcmV2U2VnID8gcHJldlNlZy5rZXkgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2S2V5ID09PSAncScgfHwgcHJldktleSA9PT0gJ1EnIHx8IHByZXZLZXkgPT09ICd0JyB8fCBwcmV2S2V5ID09PSAnVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9IHBhdGgucXVhZFJlZmxlY3Rpb25Qb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4MSA9IHJlZlswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxID0gcmVmWzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldDEgPSAxICogKDEgKyBvLnJvdWdobmVzcyAqIDAuMik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldDIgPSAxLjUgKiAoMSArIG8ucm91Z2huZXNzICogMC4yMik7XG4gICAgICAgICAgICAgICAgICAgIG9wcy5wdXNoKHsgb3A6ICdtb3ZlJywgZGF0YTogW3BhdGgueCArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQxLCBvZmZzZXQxLCBvKSwgcGF0aC55ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGYgPSBbeCArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQxLCBvZmZzZXQxLCBvKSwgeSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQxLCBvZmZzZXQxLCBvKV07XG4gICAgICAgICAgICAgICAgICAgIG9wcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wOiAncWN1cnZlVG8nLCBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDEgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0MSwgb2Zmc2V0MSwgbyksIHkxICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDEsIG9mZnNldDEsIG8pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZbMF0sIGZbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG9wcy5wdXNoKHsgb3A6ICdtb3ZlJywgZGF0YTogW3BhdGgueCArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQyLCBvZmZzZXQyLCBvKSwgcGF0aC55ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDIsIG9mZnNldDIsIG8pXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZiA9IFt4ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDIsIG9mZnNldDIsIG8pLCB5ICsgdGhpcy5nZXRPZmZzZXQoLW9mZnNldDIsIG9mZnNldDIsIG8pXTtcbiAgICAgICAgICAgICAgICAgICAgb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3A6ICdxY3VydmVUbycsIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MSArIHRoaXMuZ2V0T2Zmc2V0KC1vZmZzZXQyLCBvZmZzZXQyLCBvKSwgeTEgKyB0aGlzLmdldE9mZnNldCgtb2Zmc2V0Miwgb2Zmc2V0MiwgbyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZlswXSwgZlsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zZXRQb3NpdGlvbihmWzBdLCBmWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5xdWFkUmVmbGVjdGlvblBvaW50ID0gW3ggKyAoeCAtIHgxKSwgeSArICh5IC0geTEpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgIGNhc2UgJ2EnOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBzZWcua2V5ID09PSAnYSc7XG4gICAgICAgICAgICAgICAgaWYgKHNlZy5kYXRhLmxlbmd0aCA+PSA3KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ4ID0gK3NlZy5kYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByeSA9ICtzZWcuZGF0YVsxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSArc2VnLmRhdGFbMl07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhcmdlQXJjRmxhZyA9ICtzZWcuZGF0YVszXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3dlZXBGbGFnID0gK3NlZy5kYXRhWzRdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9ICtzZWcuZGF0YVs1XTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSArc2VnLmRhdGFbNl07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBwYXRoLng7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ICs9IHBhdGgueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeCA9PT0gcGF0aC54ICYmIHkgPT09IHBhdGgueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ4ID09PSAwIHx8IHJ5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHMgPSBvcHMuY29uY2F0KHRoaXMuZG91YmxlTGluZShwYXRoLngsIHBhdGgueSwgeCwgeSwgbykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aC5zZXRQb3NpdGlvbih4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJjQ29udmVydGVyID0gbmV3IFJvdWdoQXJjQ29udmVydGVyKFtwYXRoLngsIHBhdGgueV0sIFt4LCB5XSwgW3J4LCByeV0sIGFuZ2xlLCBsYXJnZUFyY0ZsYWcgPyB0cnVlIDogZmFsc2UsIHN3ZWVwRmxhZyA/IHRydWUgOiBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlZ21lbnQgPSBhcmNDb252ZXJ0ZXIuZ2V0TmV4dFNlZ21lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYiA9IHRoaXMuX2JlemllclRvKHNlZ21lbnQuY3AxWzBdLCBzZWdtZW50LmNwMVsxXSwgc2VnbWVudC5jcDJbMF0sIHNlZ21lbnQuY3AyWzFdLCBzZWdtZW50LnRvWzBdLCBzZWdtZW50LnRvWzFdLCBwYXRoLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BzID0gb3BzLmNvbmNhdChvYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnQgPSBhcmNDb252ZXJ0ZXIuZ2V0TmV4dFNlZ21lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUm91Z2hDYW52YXMgfSBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQgeyBSb3VnaEdlbmVyYXRvciB9IGZyb20gJy4vZ2VuZXJhdG9yJztcbmltcG9ydCB7IFJvdWdoR2VuZXJhdG9yQXN5bmMgfSBmcm9tICcuL2dlbmVyYXRvci1hc3luYyc7XG5pbXBvcnQgeyBSb3VnaENhbnZhc0FzeW5jIH0gZnJvbSAnLi9jYW52YXMtYXN5bmMnO1xuaW1wb3J0IHsgUm91Z2hTVkcgfSBmcm9tICcuL3N2Zyc7XG5pbXBvcnQgeyBSb3VnaFNWR0FzeW5jIH0gZnJvbSAnLi9zdmctYXN5bmMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNhbnZhcyhjYW52YXMsIGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSb3VnaENhbnZhc0FzeW5jKGNhbnZhcywgY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFJvdWdoQ2FudmFzKGNhbnZhcywgY29uZmlnKTtcbiAgICB9LFxuICAgIHN2ZyhzdmcsIGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSb3VnaFNWR0FzeW5jKHN2ZywgY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFJvdWdoU1ZHKHN2ZywgY29uZmlnKTtcbiAgICB9LFxuICAgIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgICAgICByZXR1cm4gUm91Z2hDYW52YXMuY3JlYXRlUmVuZGVyZXIoKTtcbiAgICB9LFxuICAgIGdlbmVyYXRvcihjb25maWcsIHN1cmZhY2UpIHtcbiAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcuYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUm91Z2hHZW5lcmF0b3JBc3luYyhjb25maWcsIHN1cmZhY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUm91Z2hHZW5lcmF0b3IoY29uZmlnLCBzdXJmYWNlKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgUm91Z2hHZW5lcmF0b3JBc3luYyB9IGZyb20gJy4vZ2VuZXJhdG9yLWFzeW5jJztcbmltcG9ydCB7IFJvdWdoU1ZHQmFzZSB9IGZyb20gJy4vc3ZnLWJhc2UnO1xuZXhwb3J0IGNsYXNzIFJvdWdoU1ZHQXN5bmMgZXh0ZW5kcyBSb3VnaFNWR0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHN2ZywgY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKHN2Zyk7XG4gICAgICAgIHRoaXMuZ2VuQXN5bmMgPSBuZXcgUm91Z2hHZW5lcmF0b3JBc3luYyhjb25maWcgfHwgbnVsbCwgdGhpcy5zdmcpO1xuICAgIH1cbiAgICBnZXQgZ2VuZXJhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5Bc3luYztcbiAgICB9XG4gICAgZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbkFzeW5jLmRlZmF1bHRPcHRpb25zO1xuICAgIH1cbiAgICBvcHNUb1BhdGgoZHJhd2luZykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5Bc3luYy5vcHNUb1BhdGgoZHJhd2luZyk7XG4gICAgfVxuICAgIGFzeW5jIGxpbmUoeDEsIHkxLCB4MiwgeTIsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMubGluZSh4MSwgeTEsIHgyLCB5Miwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIGFzeW5jIHJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLnJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgYXN5bmMgZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLmVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIGFzeW5jIGNpcmNsZSh4LCB5LCBkaWFtZXRlciwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5jaXJjbGUoeCwgeSwgZGlhbWV0ZXIsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGQpO1xuICAgIH1cbiAgICBhc3luYyBsaW5lYXJQYXRoKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5saW5lYXJQYXRoKHBvaW50cywgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIGFzeW5jIHBvbHlnb24ocG9pbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSBhd2FpdCB0aGlzLmdlbkFzeW5jLnBvbHlnb24ocG9pbnRzLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgYXN5bmMgYXJjKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXJ0LCBzdG9wLCBjbG9zZWQgPSBmYWxzZSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5hcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIGFzeW5jIGN1cnZlKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5nZW5Bc3luYy5jdXJ2ZShwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGQpO1xuICAgIH1cbiAgICBhc3luYyBwYXRoKGQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZHJhd2luZyA9IGF3YWl0IHRoaXMuZ2VuQXN5bmMucGF0aChkLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkcmF3aW5nKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSb3VnaFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XG5jb25zdCBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnQgY2xhc3MgUm91Z2hTVkdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihzdmcpIHtcbiAgICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVSZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSb3VnaFJlbmRlcmVyKCk7XG4gICAgfVxuICAgIGdldCBkZWZzKCkge1xuICAgICAgICBjb25zdCBkb2MgPSB0aGlzLnN2Zy5vd25lckRvY3VtZW50IHx8IChoYXNEb2N1bWVudCAmJiBkb2N1bWVudCk7XG4gICAgICAgIGlmIChkb2MpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZGVmcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRub2RlID0gZG9jLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZGVmcycpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN2Zy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ZnLmluc2VydEJlZm9yZShkbm9kZSwgdGhpcy5zdmcuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChkbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2RlZnMgPSBkbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmcyB8fCBudWxsO1xuICAgIH1cbiAgICBkcmF3KGRyYXdhYmxlKSB7XG4gICAgICAgIGNvbnN0IHNldHMgPSBkcmF3YWJsZS5zZXRzIHx8IFtdO1xuICAgICAgICBjb25zdCBvID0gZHJhd2FibGUub3B0aW9ucyB8fCB0aGlzLmdldERlZmF1bHRPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IGRvYyA9IHRoaXMuc3ZnLm93bmVyRG9jdW1lbnQgfHwgKGhhc0RvY3VtZW50ICYmIGRvY3VtZW50KTtcbiAgICAgICAgY29uc3QgZyA9IGRvYy5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcbiAgICAgICAgZm9yIChjb25zdCBkcmF3aW5nIG9mIHNldHMpIHtcbiAgICAgICAgICAgIGxldCBwYXRoID0gbnVsbDtcbiAgICAgICAgICAgIHN3aXRjaCAoZHJhd2luZy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncGF0aCc6IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGRvYy5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCB0aGlzLm9wc1RvUGF0aChkcmF3aW5nKSk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguc3R5bGUuc3Ryb2tlID0gby5zdHJva2U7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguc3R5bGUuc3Ryb2tlV2lkdGggPSBvLnN0cm9rZVdpZHRoICsgJyc7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguc3R5bGUuZmlsbCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbGxQYXRoJzoge1xuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZG9jLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMub3BzVG9QYXRoKGRyYXdpbmcpKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5zdHJva2UgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguc3R5bGUuc3Ryb2tlV2lkdGggPSAnMCc7XG4gICAgICAgICAgICAgICAgICAgIHBhdGguc3R5bGUuZmlsbCA9IG8uZmlsbCB8fCBudWxsO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnZmlsbFNrZXRjaCc6IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHRoaXMuZmlsbFNrZXRjaChkb2MsIGRyYXdpbmcsIG8pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAncGF0aDJEZmlsbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGRvYy5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBkcmF3aW5nLnBhdGggfHwgJycpO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnN0eWxlLnN0cm9rZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5zdHJva2VXaWR0aCA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5maWxsID0gby5maWxsIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdwYXRoMkRwYXR0ZXJuJzoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGVmcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2Fubm90IHJlbmRlciBwYXRoMkRwYXR0ZXJuLiBObyBkZWZzL2RvY3VtZW50IGRlZmluZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gZHJhd2luZy5zaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IGRvYy5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdHRlcm4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gYHJvdWdoLSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IDk5OTk5OSkpfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuLnNldEF0dHJpYnV0ZSgneCcsICcwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuLnNldEF0dHJpYnV0ZSgneScsICcwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybi5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAke01hdGgucm91bmQoc2l6ZVswXSl9ICR7TWF0aC5yb3VuZChzaXplWzFdKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uc2V0QXR0cmlidXRlKCdwYXR0ZXJuVW5pdHMnLCAnb2JqZWN0Qm91bmRpbmdCb3gnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdHRlcm5QYXRoID0gdGhpcy5maWxsU2tldGNoKGRvYywgZHJhd2luZywgbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuLmFwcGVuZENoaWxkKHBhdHRlcm5QYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmcy5hcHBlbmRDaGlsZChwYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggPSBkb2MuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsIGRyYXdpbmcucGF0aCB8fCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLnN0eWxlLnN0cm9rZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGguc3R5bGUuc3Ryb2tlV2lkdGggPSAnMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLnN0eWxlLmZpbGwgPSBgdXJsKCMke2lkfSlgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgZy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZztcbiAgICB9XG4gICAgZmlsbFNrZXRjaChkb2MsIGRyYXdpbmcsIG8pIHtcbiAgICAgICAgbGV0IGZ3ZWlnaHQgPSBvLmZpbGxXZWlnaHQ7XG4gICAgICAgIGlmIChmd2VpZ2h0IDwgMCkge1xuICAgICAgICAgICAgZndlaWdodCA9IG8uc3Ryb2tlV2lkdGggLyAyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhdGggPSBkb2MuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgdGhpcy5vcHNUb1BhdGgoZHJhd2luZykpO1xuICAgICAgICBwYXRoLnN0eWxlLnN0cm9rZSA9IG8uZmlsbCB8fCBudWxsO1xuICAgICAgICBwYXRoLnN0eWxlLnN0cm9rZVdpZHRoID0gZndlaWdodCArICcnO1xuICAgICAgICBwYXRoLnN0eWxlLmZpbGwgPSAnbm9uZSc7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJvdWdoR2VuZXJhdG9yIH0gZnJvbSAnLi9nZW5lcmF0b3InO1xuaW1wb3J0IHsgUm91Z2hTVkdCYXNlIH0gZnJvbSAnLi9zdmctYmFzZSc7XG5leHBvcnQgY2xhc3MgUm91Z2hTVkcgZXh0ZW5kcyBSb3VnaFNWR0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHN2ZywgY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKHN2Zyk7XG4gICAgICAgIHRoaXMuZ2VuID0gbmV3IFJvdWdoR2VuZXJhdG9yKGNvbmZpZyB8fCBudWxsLCB0aGlzLnN2Zyk7XG4gICAgfVxuICAgIGdldCBnZW5lcmF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbjtcbiAgICB9XG4gICAgZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbi5kZWZhdWx0T3B0aW9ucztcbiAgICB9XG4gICAgb3BzVG9QYXRoKGRyYXdpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuLm9wc1RvUGF0aChkcmF3aW5nKTtcbiAgICB9XG4gICAgbGluZSh4MSwgeTEsIHgyLCB5Miwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4ubGluZSh4MSwgeTEsIHgyLCB5Miwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIHJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIGVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4uZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgY2lyY2xlKHgsIHksIGRpYW1ldGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5jaXJjbGUoeCwgeSwgZGlhbWV0ZXIsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGQpO1xuICAgIH1cbiAgICBsaW5lYXJQYXRoKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4ubGluZWFyUGF0aChwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGQpO1xuICAgIH1cbiAgICBwb2x5Z29uKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4ucG9seWdvbihwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGQpO1xuICAgIH1cbiAgICBhcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCA9IGZhbHNlLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmdlbi5hcmMoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhcnQsIHN0b3AsIGNsb3NlZCwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoZCk7XG4gICAgfVxuICAgIGN1cnZlKHBvaW50cywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5nZW4uY3VydmUocG9pbnRzLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhdyhkKTtcbiAgICB9XG4gICAgcGF0aChkLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRyYXdpbmcgPSB0aGlzLmdlbi5wYXRoKGQsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KGRyYXdpbmcpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFNlZ21lbnQgfSBmcm9tICcuLi9nZW9tZXRyeSc7XG5leHBvcnQgY2xhc3MgSGFjaHVyZUl0ZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQsIGdhcCwgc2luQW5nbGUsIGNvc0FuZ2xlLCB0YW5BbmdsZSkge1xuICAgICAgICB0aGlzLmRlbHRhWCA9IDA7XG4gICAgICAgIHRoaXMuaEdhcCA9IDA7XG4gICAgICAgIHRoaXMudG9wID0gdG9wO1xuICAgICAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmdhcCA9IGdhcDtcbiAgICAgICAgdGhpcy5zaW5BbmdsZSA9IHNpbkFuZ2xlO1xuICAgICAgICB0aGlzLnRhbkFuZ2xlID0gdGFuQW5nbGU7XG4gICAgICAgIGlmIChNYXRoLmFicyhzaW5BbmdsZSkgPCAwLjAwMDEpIHtcbiAgICAgICAgICAgIHRoaXMucG9zID0gbGVmdCArIGdhcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhzaW5BbmdsZSkgPiAwLjk5OTkpIHtcbiAgICAgICAgICAgIHRoaXMucG9zID0gdG9wICsgZ2FwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWx0YVggPSAoYm90dG9tIC0gdG9wKSAqIE1hdGguYWJzKHRhbkFuZ2xlKTtcbiAgICAgICAgICAgIHRoaXMucG9zID0gbGVmdCAtIE1hdGguYWJzKHRoaXMuZGVsdGFYKTtcbiAgICAgICAgICAgIHRoaXMuaEdhcCA9IE1hdGguYWJzKGdhcCAvIGNvc0FuZ2xlKTtcbiAgICAgICAgICAgIHRoaXMuc0xlZnQgPSBuZXcgU2VnbWVudChbbGVmdCwgYm90dG9tXSwgW2xlZnQsIHRvcF0pO1xuICAgICAgICAgICAgdGhpcy5zUmlnaHQgPSBuZXcgU2VnbWVudChbcmlnaHQsIGJvdHRvbV0sIFtyaWdodCwgdG9wXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmV4dExpbmUoKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnNpbkFuZ2xlKSA8IDAuMDAwMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zIDwgdGhpcy5yaWdodCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBbdGhpcy5wb3MsIHRoaXMudG9wLCB0aGlzLnBvcywgdGhpcy5ib3R0b21dO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zICs9IHRoaXMuZ2FwO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKHRoaXMuc2luQW5nbGUpID4gMC45OTk5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3MgPCB0aGlzLmJvdHRvbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBbdGhpcy5sZWZ0LCB0aGlzLnBvcywgdGhpcy5yaWdodCwgdGhpcy5wb3NdO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zICs9IHRoaXMuZ2FwO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHhMb3dlciA9IHRoaXMucG9zIC0gdGhpcy5kZWx0YVggLyAyO1xuICAgICAgICAgICAgbGV0IHhVcHBlciA9IHRoaXMucG9zICsgdGhpcy5kZWx0YVggLyAyO1xuICAgICAgICAgICAgbGV0IHlMb3dlciA9IHRoaXMuYm90dG9tO1xuICAgICAgICAgICAgbGV0IHlVcHBlciA9IHRoaXMudG9wO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zIDwgKHRoaXMucmlnaHQgKyB0aGlzLmRlbHRhWCkpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoKCh4TG93ZXIgPCB0aGlzLmxlZnQpICYmICh4VXBwZXIgPCB0aGlzLmxlZnQpKSB8fCAoKHhMb3dlciA+IHRoaXMucmlnaHQpICYmICh4VXBwZXIgPiB0aGlzLnJpZ2h0KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3MgKz0gdGhpcy5oR2FwO1xuICAgICAgICAgICAgICAgICAgICB4TG93ZXIgPSB0aGlzLnBvcyAtIHRoaXMuZGVsdGFYIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgeFVwcGVyID0gdGhpcy5wb3MgKyB0aGlzLmRlbHRhWCAvIDI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvcyA+ICh0aGlzLnJpZ2h0ICsgdGhpcy5kZWx0YVgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBzID0gbmV3IFNlZ21lbnQoW3hMb3dlciwgeUxvd2VyXSwgW3hVcHBlciwgeVVwcGVyXSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc0xlZnQgJiYgcy5pbnRlcnNlY3RzKHRoaXMuc0xlZnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHhMb3dlciA9IHMueGk7XG4gICAgICAgICAgICAgICAgICAgIHlMb3dlciA9IHMueWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNSaWdodCAmJiBzLmludGVyc2VjdHModGhpcy5zUmlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHhVcHBlciA9IHMueGk7XG4gICAgICAgICAgICAgICAgICAgIHlVcHBlciA9IHMueWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhbkFuZ2xlID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB4TG93ZXIgPSB0aGlzLnJpZ2h0IC0gKHhMb3dlciAtIHRoaXMubGVmdCk7XG4gICAgICAgICAgICAgICAgICAgIHhVcHBlciA9IHRoaXMucmlnaHQgLSAoeFVwcGVyIC0gdGhpcy5sZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IFt4TG93ZXIsIHlMb3dlciwgeFVwcGVyLCB5VXBwZXJdO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zICs9IHRoaXMuaEdhcDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgeyBCb3gsIENvbXBvbmVudENvbnN0cnVjdG9ySW5mbywgQ29tcG9uZW50RHJhd0luZm8gfSBmcm9tICdAZW5naW5lL3R5cGVzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnQGVuZ2luZS9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IFNOIH0gZnJvbSAnQGVuZ2luZS9jb21tb24vY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBEcmF3SW5mbyBleHRlbmRzIENvbXBvbmVudERyYXdJbmZve1xuICAgIGJveDogUmVhZG9ubHk8Qm94PjtcbiAgICBsZW5ndGggOm51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQXhpc0JvZHkgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgbmFtZSA9IFNOLkF4aXNCb2R5O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6Q29tcG9uZW50Q29uc3RydWN0b3JJbmZvKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5leHQub25Db25zdHJ1Y3QodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd0luZm86IERyYXdJbmZvID0ge1xuICAgICAgICBib3g6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGxlbmd0aDogMCxcbiAgICB9O1xuXG4gICAgYXN5bmMgYXBwbHkoKSB7XG4gICAgICAgIHRoaXMuZHJhd0luZm8uYm94ID0ge1xuICAgICAgICAgICAgeDogdGhpcy5ncmlkLmF4aXNTdGFydC54IC0gdGhpcy5ncmlkLmF4aXNXaWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmdyaWQuYXhpc1N0YXJ0LnksXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5ncmlkLmF4aXNXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5kcmF3SW5mby5sZW5ndGgsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzdXBlci5hcHBseSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpcyhjb21wOkNvbXBvbmVudCkgOmNvbXAgaXMgQXhpc0JvZHkge1xuICAgICAgICByZXR1cm4gY29tcC5uYW1lID09PSBTTi5BeGlzQm9keTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCb3gsIENvbXBvbmVudENvbnN0cnVjdG9ySW5mbywgQ29tcG9uZW50RHJhd0luZm8gfSBmcm9tICdAZW5naW5lL3R5cGVzJztcbmltcG9ydCB7IGNvdW50Qm94IH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZnVuY3Rpb25zJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnQGVuZ2luZS9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IFNOIH0gZnJvbSAnQGVuZ2luZS9jb21tb24vY29uZmlnJztcbmltcG9ydCB7IERyYXdJbmZvIGFzIEF4aXNCb2R5RHJhd0luZm8gfSBmcm9tICdAZW5naW5lL0F4aXMvQXhpc0JvZHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdJbmZvIGV4dGVuZHMgQ29tcG9uZW50RHJhd0luZm97XG4gICAgYm94OiBSZWFkb25seTxCb3g+O1xuICAgIGJvZHlEcmF3SW5mbzogUmVhZG9ubHk8QXhpc0JvZHlEcmF3SW5mbz47XG4gICAgYWxpZ25ZOiBudW1iZXI7XG4gICAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBeGlzTWlsZXN0b25lIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIG5hbWUgPSBTTi5BeGlzTWlsZXN0b25lO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6Q29tcG9uZW50Q29uc3RydWN0b3JJbmZvKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5leHQub25Db25zdHJ1Y3QodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd0luZm86RHJhd0luZm8gPSB7XG4gICAgICAgIGJvZHlEcmF3SW5mbzoge30gYXMgYW55LFxuICAgICAgICBhbGlnblk6IDAsXG4gICAgICAgIHRleHQ6ICcwX28nLFxuXG4gICAgICAgIGJveDoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgYXBwbHkoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQhLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgdGhpcy5kcmF3SW5mby5ib3ggPSBjb3VudEJveCh0aGlzLmVsZW1lbnQhKTtcblxuICAgICAgICByZXR1cm4gc3VwZXIuYXBwbHkoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXMoY29tcDpDb21wb25lbnQpIDpjb21wIGlzIEF4aXNNaWxlc3RvbmUge1xuICAgICAgICByZXR1cm4gY29tcC5uYW1lID09PSBTTi5BeGlzTWlsZXN0b25lO1xuICAgIH1cblxuICAgIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50IS5pbm5lckhUTUwgPSB0aGlzLmRyYXdJbmZvLnRleHQ7XG5cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjb3VudEJveCh0aGlzLmVsZW1lbnQhKTtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMuZHJhd0luZm8uYm9keURyYXdJbmZvLmJveC54XG4gICAgICAgICAgICArIHRoaXMuZHJhd0luZm8uYm9keURyYXdJbmZvLmJveC53aWR0aCAvIDJcbiAgICAgICAgICAgIC0gd2lkdGggLyAyXG4gICAgICAgIDtcbiAgICAgICAgY29uc3QgeSA9IHRoaXMuZHJhd0luZm8uYWxpZ25ZIC0gaGVpZ2h0IC8gMjtcblxuICAgICAgICB0aGlzLmVsZW1lbnQhLnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50IS5zdHlsZS50b3AgPSBgJHt5fXB4YDtcblxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgICAgICByZXR1cm4gc3VwZXIuZHJhdygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJveCwgQ29tcG9uZW50Q29uc3RydWN0b3JJbmZvLCBDb21wb25lbnREcmF3SW5mbywgQ29vcmRpbmF0ZSB9IGZyb20gJ0BlbmdpbmUvdHlwZXMnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZW5naW5lL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgU04gfSBmcm9tICdAZW5naW5lL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IHsgRHJhd0luZm8gYXMgQXhpc0JvZHlEcmF3SW5mbyB9IGZyb20gJ0BlbmdpbmUvQXhpcy9BeGlzQm9keSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd0luZm8gZXh0ZW5kcyBDb21wb25lbnREcmF3SW5mb3tcbiAgICBib3g6IFJlYWRvbmx5PEJveD47XG4gICAgYm9keURyYXdJbmZvOiBSZWFkb25seTxBeGlzQm9keURyYXdJbmZvPjtcbiAgICBhbGlnblk6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQXhpc1NjYWxlIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIG5hbWUgPSBTTi5BeGlzU2NhbGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpDb21wb25lbnRDb25zdHJ1Y3RvckluZm8pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmV4dC5vbkNvbnN0cnVjdCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3SW5mbzpEcmF3SW5mbyA9IHtcbiAgICAgICAgYm9keURyYXdJbmZvOiB7fSBhcyBhbnksXG4gICAgICAgIGFsaWduWTogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuXG4gICAgICAgIGJveDoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgYXN5bmMgYXBwbHkoKSB7XG4gICAgICAgIHRoaXMuZHJhd0luZm8uYm94ID0ge1xuICAgICAgICAgICAgeDogdGhpcy5kcmF3SW5mby5ib2R5RHJhd0luZm8uYm94LngsXG4gICAgICAgICAgICB5OiB0aGlzLmRyYXdJbmZvLmFsaWduWSAtIHRoaXMuZHJhd0luZm8uaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5kcmF3SW5mby5oZWlnaHQsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5kcmF3SW5mby5ib2R5RHJhd0luZm8uYm94LndpZHRoLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3VwZXIuYXBwbHkoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXMoY29tcDpDb21wb25lbnQpIDpjb21wIGlzIEF4aXNTY2FsZSB7XG4gICAgICAgIHJldHVybiBjb21wLm5hbWUgPT09IFNOLkF4aXNTY2FsZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRDb25zdHJ1Y3RvckluZm8sIENvbXBvbmVudERyYXdJbmZvIH0gZnJvbSAnQGVuZ2luZS90eXBlcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BlbmdpbmUvY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgQXhpc01pbGVzdG9uZSBmcm9tICdAZW5naW5lL0F4aXMvQXhpc01pbGVzdG9uZSc7XG5pbXBvcnQgQXhpc1NjYWxlIGZyb20gJ0BlbmdpbmUvQXhpcy9BeGlzU2NhbGUnO1xuaW1wb3J0IEF4aXNCb2R5IGZyb20gJ0BlbmdpbmUvQXhpcy9BeGlzQm9keSc7XG5pbXBvcnQgeyBTTiB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2NvbmZpZyc7XG5pbXBvcnQgeyBkZWVwRnJlZXplLCBtZXJnZUJveCB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd0luZm8gZXh0ZW5kcyBDb21wb25lbnREcmF3SW5mb3tcbiAgICBzY2FsZXM6IG51bWJlcltdO1xuICAgIG1pbGVzdG9uZXM6IHtcbiAgICAgICAgcG9zaXRpb246IG51bWJlcjtcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgIH1bXTtcbiAgICBsZW5ndGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQXhpcyBleHRlbmRzIENvbXBvbmVudHtcbiAgICBuYW1lID0gU04uQXhpcztcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkNvbXBvbmVudENvbnN0cnVjdG9ySW5mbykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZXh0Lm9uQ29uc3RydWN0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3SW5mbzpEcmF3SW5mbyA9IHtcbiAgICAgICAgc2NhbGVzOiBbXSxcbiAgICAgICAgbWlsZXN0b25lczogW10sXG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgYm94OiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBhYnN0cmFjdCBtaWxlc3RvbmVDb25zdHJ1Y3RvciA6dHlwZW9mIEF4aXNNaWxlc3RvbmU7XG4gICAgYWJzdHJhY3Qgc2NhbGVDb25zdHJ1Y3RvciA6dHlwZW9mIEF4aXNTY2FsZTtcbiAgICBhYnN0cmFjdCBib2R5Q29uc3RydWN0b3IgOnR5cGVvZiBBeGlzQm9keTtcbiAgICBtaWxlc3RvbmVzOkF4aXNNaWxlc3RvbmVbXSA9IFtdO1xuICAgIHNjYWxlczpBeGlzU2NhbGVbXSA9IFtdO1xuICAgIGJvZHk6QXhpc0JvZHkgPSBudWxsIGFzIGFueTtcblxuICAgIGFzeW5jIGFwcGx5KCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICghdGhpcy5ib2R5KSB0aGlzLmJvZHkgPSBuZXcgdGhpcy5ib2R5Q29uc3RydWN0b3IodGhpcyk7XG4gICAgICAgIHRoaXMuYm9keS5kcmF3SW5mby5sZW5ndGggPSB0aGlzLmRyYXdJbmZvLmxlbmd0aDtcbiAgICAgICAgYXdhaXQgdGhpcy5ib2R5LmFwcGx5KCk7XG5cbiAgICAgICAgLy8gQ2xlYXJcbiAgICAgICAgdGhpcy5taWxlc3RvbmVzLmZvckVhY2gobSA9PiBtLmRlc3Ryb3koKSk7XG4gICAgICAgIHRoaXMubWlsZXN0b25lcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLnNjYWxlcy5mb3JFYWNoKHMgPT4gcy5kZXN0cm95KCkpO1xuICAgICAgICB0aGlzLnNjYWxlcy5sZW5ndGggPSAwO1xuXG4gICAgICAgIC8vIEluaXQgc2NhbGVzXG4gICAgICAgIGZvciAoY29uc3QgcG9zaXRpb24gb2YgdGhpcy5kcmF3SW5mby5zY2FsZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYXdJbmZvLm1pbGVzdG9uZXMuc29tZShtID0+IG0ucG9zaXRpb24gPT09IHBvc2l0aW9uKSkgY29udGludWU7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBzY2FsZTpBeGlzU2NhbGUgPSBuZXcgdGhpcy5zY2FsZUNvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICAgICAgc2NhbGUuZHJhd0luZm8uYm9keURyYXdJbmZvID0gZGVlcEZyZWV6ZSh0aGlzLmJvZHkuZHJhd0luZm8pO1xuICAgICAgICAgICAgc2NhbGUuZHJhd0luZm8uYWxpZ25ZID0gcG9zaXRpb247IC8vIHJlY29tcHV0ZWQgaW4gUG9zaXRpb25Db3VudGVyXG4gICAgICAgICAgICBzY2FsZS5kcmF3SW5mby5oZWlnaHQgPSB0aGlzLmdyaWQuc2NhbGVIZWlnaHQ7IC8vIHJlY29tcHV0ZWQgaW4gUG9zaXRpb25Db3VudGVyXG4gICAgICAgICAgICB0aGlzLnNjYWxlcy5wdXNoKHNjYWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgbWlsZXN0b25lc1xuICAgICAgICBmb3IgKGNvbnN0IHsgcG9zaXRpb24sIHRleHQgfSBvZiB0aGlzLmRyYXdJbmZvLm1pbGVzdG9uZXMpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IG1pbGVzdG9uZSA9IG5ldyB0aGlzLm1pbGVzdG9uZUNvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICAgICAgbWlsZXN0b25lLmRyYXdJbmZvLmJvZHlEcmF3SW5mbyA9IGRlZXBGcmVlemUodGhpcy5ib2R5LmRyYXdJbmZvKTtcbiAgICAgICAgICAgIG1pbGVzdG9uZS5kcmF3SW5mby5hbGlnblkgPSBwb3NpdGlvbjsgLy8gcmVjb21wdXRlZCBpbiBQb3NpdGlvbkNvdW50ZXJcbiAgICAgICAgICAgIG1pbGVzdG9uZS5kcmF3SW5mby50ZXh0ID0gdGV4dDtcbiAgICAgICAgICAgIHRoaXMubWlsZXN0b25lcy5wdXNoKG1pbGVzdG9uZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLm1pbGVzdG9uZXMubWFwKG0gPT4gbS5hcHBseSgpKSxcbiAgICAgICAgICAgIHRoaXMuc2NhbGVzLm1hcChzID0+IHMuYXBwbHkoKSksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuZHJhd0luZm8uYm94ID0gbWVyZ2VCb3goXG4gICAgICAgICAgICB0aGlzLmJvZHkuZHJhd0luZm8uYm94LFxuICAgICAgICAgICAgLi4udGhpcy5taWxlc3RvbmVzLm1hcChtID0+IG0uZHJhd0luZm8uYm94KSxcbiAgICAgICAgICAgIC4uLnRoaXMuc2NhbGVzLm1hcChzID0+IHMuZHJhd0luZm8uYm94KSxcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gc3VwZXIuYXBwbHkoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5ib2R5LmRyYXcoKTtcbiAgICAgICAgdGhpcy5zY2FsZXMuZm9yRWFjaChzID0+IHMuZHJhdygpKTtcbiAgICAgICAgdGhpcy5taWxlc3RvbmVzLmZvckVhY2gobSA9PiBtLmRyYXcoKSk7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmRyYXcoKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5ib2R5LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zY2FsZXMuZm9yRWFjaChzID0+IHMuZGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5taWxlc3RvbmVzLmZvckVhY2gobSA9PiBtLmRlc3Ryb3koKSk7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5ib2R5LmhpZGUoKTtcbiAgICAgICAgdGhpcy5zY2FsZXMuZm9yRWFjaChzID0+IHMuaGlkZSgpKTtcbiAgICAgICAgdGhpcy5taWxlc3RvbmVzLmZvckVhY2gobSA9PiBtLmhpZGUoKSk7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmhpZGUoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXMoY29tcDpDb21wb25lbnQpIDpjb21wIGlzIEF4aXMge1xuICAgICAgICByZXR1cm4gY29tcC5uYW1lID09PSBTTi5BeGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudENvbnN0cnVjdG9ySW5mbywgQ29tcG9uZW50RHJhd0luZm8gfSBmcm9tICdAZW5naW5lL3R5cGVzJztcbmltcG9ydCB7IGNvdW50Qm94ICwgbWVyZ2VCb3ggfSBmcm9tICdAZW5naW5lL2NvbW1vbi9mdW5jdGlvbnMnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZW5naW5lL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgU04gfSBmcm9tICdAZW5naW5lL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IEF4aXMgZnJvbSAnQGVuZ2luZS9BeGlzJztcbmltcG9ydCBFdmVudE1hcmsgZnJvbSAnQGVuZ2luZS9FdmVudC9FdmVudE1hcmsnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdJbmZvIGV4dGVuZHMgQ29tcG9uZW50RHJhd0luZm97XG4gICAgYXhpc0JvZHlEcmF3SW5mbzogUmVhZG9ubHk8QXhpc1snZHJhd0luZm8nXT47XG4gICAgbWFya0RyYXdJbmZvOiBSZWFkb25seTxFdmVudE1hcmtbJ2RyYXdJbmZvJ10+O1xuXG4gICAgdGV4dD86IHN0cmluZztcbiAgICBsZW5ndGg6IG51bWJlcjtcbiAgICBvZmZzZXRYOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEV2ZW50QXhpcyBleHRlbmRzIENvbXBvbmVudHtcbiAgICBuYW1lID0gU04uRXZlbnRBeGlzO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6Q29tcG9uZW50Q29uc3RydWN0b3JJbmZvKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5leHQub25Db25zdHJ1Y3QodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd0luZm86RHJhd0luZm8gPSB7XG4gICAgICAgIGF4aXNCb2R5RHJhd0luZm86IHt9IGFzIGFueSxcbiAgICAgICAgbWFya0RyYXdJbmZvOiB7fSBhcyBhbnksXG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgb2Zmc2V0WDogMCxcblxuICAgICAgICBib3g6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBhcHBseSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhd0luZm8udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQhLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldDtcblxuICAgICAgICB0aGlzLmRyYXdJbmZvLmJveCA9IHtcbiAgICAgICAgICAgIHg6IHRhcmdldC54LFxuICAgICAgICAgICAgeTogdGFyZ2V0LnkgLSB0aGlzLmRyYXdJbmZvLmxlbmd0aCxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmRyYXdJbmZvLm9mZnNldFgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZHJhd0luZm8ubGVuZ3RoLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBzdXBlci5hcHBseSgpO1xuICAgIH1cblxuICAgIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQ7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50IS5jbGFzc0xpc3QuYWRkKCdldmVudF9heGlzLWVuZFRleHQnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50IS5pbm5lckhUTUwgPSB0aGlzLmRyYXdJbmZvLnRleHQhO1xuXG4gICAgICAgIGNvbnN0IGJveCA9IGNvdW50Qm94KHRoaXMuZWxlbWVudCEpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCEuc3R5bGUubGVmdCA9IGAke3RhcmdldC54ICsgdGhpcy5kcmF3SW5mby5vZmZzZXRYfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50IS5zdHlsZS50b3AgPSBgJHt0YXJnZXQueSAtIHRoaXMuZHJhd0luZm8ubGVuZ3RoIC0gYm94LmhlaWdodCAvIDJ9cHhgO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGlzKGNvbXA6Q29tcG9uZW50KSA6Y29tcCBpcyBFdmVudEF4aXMge1xuICAgICAgICByZXR1cm4gY29tcC5uYW1lID09PSBTTi5FdmVudEF4aXM7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhd0luZm8udGV4dCkgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgIHJldHVybiBzdXBlci5kcmF3KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnREcmF3SW5mbyxcbiAgICBDb29yZGluYXRlLFxuICAgIEJveCxcbiAgICBDb21wb25lbnRDb25zdHJ1Y3RvckluZm8sXG59IGZyb20gJ0BlbmdpbmUvdHlwZXMnO1xuaW1wb3J0IHsgY291bnRCb3gsIGRlZXBBc3NpZ24gfSBmcm9tICdAZW5naW5lL2NvbW1vbi9mdW5jdGlvbnMnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZW5naW5lL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgU04gfSBmcm9tICdAZW5naW5lL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IEV2ZW50TWFyayBmcm9tICdAZW5naW5lL0V2ZW50L0V2ZW50TWFyayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd0luZm8gZXh0ZW5kcyBDb21wb25lbnREcmF3SW5mb3tcbiAgICBtYXJrRHJhd0luZm86IEV2ZW50TWFya1snZHJhd0luZm8nXTtcbiAgICBvZmZzZXQ6IENvb3JkaW5hdGU7XG4gICAgbWF4V2lkdGg6IG51bWJlcjtcblxuICAgIGRhdGU6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNvbnRlbnRUZXh0Pzogc3RyaW5nO1xuXG4gICAgZmxvYXRlZDogYm9vbGVhbjtcblxuICAgIGZvbGRlZDogYm9vbGVhbjtcbiAgICBmb2xkZWRUZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBFdmVudEJvZHkgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgbmFtZSA9IFNOLkV2ZW50Qm9keTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkNvbXBvbmVudENvbnN0cnVjdG9ySW5mbykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZXh0Lm9uQ29uc3RydWN0KHRoaXMpO1xuICAgIH1cblxuICAgIGVsZW1lbnQgOkhUTUxFbGVtZW50ID0gbnVsbCBhcyBhbnk7XG5cbiAgICBkcmF3SW5mbzpEcmF3SW5mbyA9IHtcbiAgICAgICAgbWFya0RyYXdJbmZvOiBudWxsIGFzIGFueSxcblxuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICB9LFxuICAgICAgICBtYXhXaWR0aDogMzAwLFxuXG4gICAgICAgIGRhdGU6IG51bGwgYXMgYW55LFxuICAgICAgICB0aXRsZTogJ3VudGl0bGVkJyxcblxuICAgICAgICBmbG9hdGVkOiBmYWxzZSxcbiAgICAgICAgZm9sZGVkOiBmYWxzZSxcblxuICAgICAgICBib3g6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmVzZXRFbGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy5kcmF3SW5mby5mb2xkZWQpIHsgLy8gVE9ETzogcmVjb25zdHJ1Y3QgaGVyZVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJmb2xkZWRUZXh0XCI+JHt0aGlzLmRyYXdJbmZvLmZvbGRlZFRleHQgfHwgdGhpcy5kcmF3SW5mby50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRhdGVcIj4ke25ldyBEYXRlKHRoaXMuZHJhd0luZm8uZGF0ZSkudG9EYXRlU3RyaW5nKCl9PC9oNT5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRpdGxlXCI+JHt0aGlzLmRyYXdJbmZvLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZGF0ZVwiPiR7bmV3IERhdGUodGhpcy5kcmF3SW5mby5kYXRlKS50b0RhdGVTdHJpbmcoKX08L2g1PlxuICAgICAgICAgICAgICAgICR7dGhpcy5kcmF3SW5mby5jb250ZW50VGV4dCA/IGA8cD4ke3RoaXMuZHJhd0luZm8uY29udGVudFRleHR9PC9wPmAgOicnfVxuICAgICAgICAgICAgYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRyYXdJbmZvLmZvbGRlZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbGRlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZvbGRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IGAke3RoaXMuZHJhd0luZm8ubWF4V2lkdGh9cHhgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG4gICAgaW5pdEJveEZyb21FbGVtZW50KCkge1xuICAgICAgICBjb25zdCBlbHRCb3ggPSBjb3VudEJveCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICBjb25zdCBib3g6Qm94ID0ge1xuICAgICAgICAgICAgd2lkdGg6IGVsdEJveC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogZWx0Qm94LmhlaWdodCxcbiAgICAgICAgICAgIC4uLnRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldCxcbiAgICAgICAgfTtcbiAgICAgICAgYm94LnggLT0gYm94LndpZHRoO1xuICAgICAgICBib3gueSAtPSBib3guaGVpZ2h0IC8gMjtcblxuICAgICAgICBib3gueCAtPSB0aGlzLmRyYXdJbmZvLm9mZnNldC54O1xuICAgICAgICBib3gueSArPSB0aGlzLmRyYXdJbmZvLm9mZnNldC55O1xuXG4gICAgICAgIHRoaXMuZHJhd0luZm8uYm94ID0gYm94O1xuICAgIH1cbiAgICBhc3luYyBhcHBseSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuaW5pdEJveEZyb21FbGVtZW50KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgICAgIHJldHVybiBzdXBlci5hcHBseSgpO1xuICAgIH1cblxuICAgIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5yZXNldEVsZW1lbnQoKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3RoaXMuZHJhd0luZm8uYm94Lnh9cHhgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7dGhpcy5kcmF3SW5mby5ib3gueX1weGA7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzKGNvbXA6Q29tcG9uZW50KSA6Y29tcCBpcyBFdmVudEJvZHkge1xuICAgICAgICByZXR1cm4gY29tcC5uYW1lID09PSBTTi5FdmVudEJvZHk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgIHJldHVybiBzdXBlci5kcmF3KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZW5naW5lL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50Q29uc3RydWN0b3JJbmZvLCBDb21wb25lbnREcmF3SW5mbywgQ29vcmRpbmF0ZSB9IGZyb20gJ0BlbmdpbmUvdHlwZXMnO1xuaW1wb3J0IHsgU04gfSBmcm9tICdAZW5naW5lL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IEF4aXMgZnJvbSAnQGVuZ2luZS9BeGlzJztcblxuZXhwb3J0IGludGVyZmFjZSBEcmF3SW5mbyBleHRlbmRzIENvbXBvbmVudERyYXdJbmZve1xuICAgIGF4aXNCb2R5RHJhd0luZm86IFJlYWRvbmx5PEF4aXNbJ2RyYXdJbmZvJ10+O1xuICAgIHRhcmdldDogQ29vcmRpbmF0ZTtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRXZlbnRNYXJrIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIG5hbWUgPSBTTi5FdmVudE1hcms7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpDb21wb25lbnRDb25zdHJ1Y3RvckluZm8pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmV4dC5vbkNvbnN0cnVjdCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3SW5mbzpEcmF3SW5mbyA9IHtcbiAgICAgICAgYXhpc0JvZHlEcmF3SW5mbzoge30gYXMgYW55LFxuICAgICAgICBib3g6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoOiAwLFxuICAgIH07XG5cbiAgICBhc3luYyBhcHBseSgpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmRyYXdJbmZvLndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmRyYXdJbmZvLmhlaWdodCB8fCB3aWR0aDtcbiAgICAgICAgdGhpcy5kcmF3SW5mby5ib3ggPSB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHg6IHRoaXMuZHJhd0luZm8udGFyZ2V0LnggLSB3aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmRyYXdJbmZvLnRhcmdldC55IC0gaGVpZ2h0IC8gMixcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmFwcGx5KCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzKGNvbXA6Q29tcG9uZW50KSA6Y29tcCBpcyBFdmVudE1hcmsge1xuICAgICAgICByZXR1cm4gY29tcC5uYW1lID09PSBTTi5FdmVudE1hcms7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZW5naW5lL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50Q29uc3RydWN0b3JJbmZvLCBDb21wb25lbnREcmF3SW5mbyB9IGZyb20gJ0BlbmdpbmUvdHlwZXMnO1xuaW1wb3J0IEV2ZW50TWFyayBmcm9tICdAZW5naW5lL0V2ZW50L0V2ZW50TWFyayc7XG5pbXBvcnQgRXZlbnRCb2R5IGZyb20gJ0BlbmdpbmUvRXZlbnQvRXZlbnRCb2R5JztcbmltcG9ydCBFdmVudEF4aXMgZnJvbSAnQGVuZ2luZS9FdmVudC9FdmVudEF4aXMnO1xuaW1wb3J0IHsgZGVlcEZyZWV6ZSwgbWVyZ2VCb3ggfSBmcm9tICdAZW5naW5lL2NvbW1vbi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgU04gfSBmcm9tICdAZW5naW5lL2NvbW1vbi9jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdJbmZvIGV4dGVuZHMgQ29tcG9uZW50RHJhd0luZm97XG4gICAgdGFyZ2V0OiB7XG4gICAgICAgIHg6IG51bWJlcixcbiAgICAgICAgeTogbnVtYmVyLFxuICAgIH07XG4gICAgb2Zmc2V0OiB7XG4gICAgICAgIHg6IG51bWJlcixcbiAgICAgICAgeTogbnVtYmVyLFxuICAgIH07XG4gICAgYm9keVdpZHRoOiBudW1iZXI7XG5cbiAgICBkYXRlOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBjb250ZW50VGV4dD86IHN0cmluZztcblxuICAgIGZvbGRlZDogYm9vbGVhbjtcbiAgICBmb2xkZWRUZXh0Pzogc3RyaW5nO1xuXG4gICAgYXhpc1RleHQ/OiBzdHJpbmc7XG4gICAgYXhpc0xlbmd0aD86IG51bWJlcjtcbiAgICBheGlzT2Zmc2V0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBFdmVudCBleHRlbmRzIENvbXBvbmVudHtcbiAgICBuYW1lID0gU04uRXZlbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpDb21wb25lbnRDb25zdHJ1Y3RvckluZm8pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmV4dC5vbkNvbnN0cnVjdCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3SW5mbzpEcmF3SW5mbyA9IHtcbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICB4OiAzMCxcbiAgICAgICAgICAgIHk6IDUwLFxuICAgICAgICB9LFxuICAgICAgICBvZmZzZXQ6IHRoaXMuZ3JpZC5ldmVudE9mZnNldCxcbiAgICAgICAgYm9keVdpZHRoOiAzMDAsXG5cbiAgICAgICAgZGF0ZTogbnVsbCBhcyBhbnksXG4gICAgICAgIHRpdGxlOiBudWxsIGFzIGFueSxcblxuICAgICAgICBmb2xkZWQ6IGZhbHNlLFxuICAgICAgICBmb2xkZWRUZXh0OiBudWxsIGFzIGFueSxcblxuICAgICAgICBib3g6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICAgIGhlaWdodDogNTAwLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBhYnN0cmFjdCBib2R5Q29uc3RydWN0b3IgOnR5cGVvZiBFdmVudEJvZHk7XG4gICAgYWJzdHJhY3QgYXhpc0NvbnN0cnVjdG9yIDp0eXBlb2YgRXZlbnRBeGlzO1xuICAgIGFic3RyYWN0IG1hcmtDb25zdHJ1Y3RvciA6dHlwZW9mIEV2ZW50TWFyaztcbiAgICBtYXJrOkV2ZW50TWFyayA9IG51bGwgYXMgYW55O1xuICAgIGJvZHk6RXZlbnRCb2R5ID0gbnVsbCBhcyBhbnk7XG4gICAgYXhpczpFdmVudEF4aXN8bnVsbCA9IG51bGw7XG5cbiAgICBhc3luYyBhcHBseSgpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIXRoaXMubWFyaykgdGhpcy5tYXJrID0gbmV3IHRoaXMubWFya0NvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICB0aGlzLm1hcmsuZHJhd0luZm8udGFyZ2V0ID0gdGhpcy5kcmF3SW5mby50YXJnZXQ7XG4gICAgICAgIHRoaXMubWFyay5kcmF3SW5mby53aWR0aCA9IHRoaXMuZ3JpZC5tYXJrV2lkdGg7XG4gICAgICAgIHRoaXMubWFyay5kcmF3SW5mby5oZWlnaHQgPSB0aGlzLmdyaWQubWFya0hlaWdodDtcbiAgICAgICAgYXdhaXQgdGhpcy5tYXJrLmFwcGx5KCk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIXRoaXMuYm9keSkgdGhpcy5ib2R5ID0gbmV3IHRoaXMuYm9keUNvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICB0aGlzLmJvZHkuZHJhd0luZm8ubWFya0RyYXdJbmZvID0gZGVlcEZyZWV6ZSh0aGlzLm1hcmsuZHJhd0luZm8pO1xuICAgICAgICB0aGlzLmJvZHkuZHJhd0luZm8ubWF4V2lkdGggPSB0aGlzLmdyaWQuZXZlbnRXaWR0aDtcbiAgICAgICAgdGhpcy5ib2R5LmRyYXdJbmZvLmRhdGUgPSB0aGlzLmRyYXdJbmZvLmRhdGU7XG4gICAgICAgIHRoaXMuYm9keS5kcmF3SW5mby50aXRsZSA9IHRoaXMuZHJhd0luZm8udGl0bGU7XG4gICAgICAgIHRoaXMuYm9keS5kcmF3SW5mby5jb250ZW50VGV4dCA9IHRoaXMuZHJhd0luZm8uY29udGVudFRleHQ7XG4gICAgICAgIHRoaXMuYm9keS5kcmF3SW5mby5mb2xkZWQgPSB0aGlzLmRyYXdJbmZvLmZvbGRlZDtcbiAgICAgICAgdGhpcy5ib2R5LmRyYXdJbmZvLmZvbGRlZFRleHQgPSB0aGlzLmRyYXdJbmZvLmZvbGRlZFRleHQ7XG4gICAgICAgIHRoaXMuYm9keS5kcmF3SW5mby5vZmZzZXQgPSAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kcmF3SW5mby5vZmZzZXQpO1xuICAgICAgICBhd2FpdCB0aGlzLmJvZHkuYXBwbHkoKTtcblxuICAgICAgICBpZiAodGhpcy5kcmF3SW5mby5heGlzTGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBheGlzID0gdGhpcy5heGlzIHx8IG5ldyB0aGlzLmF4aXNDb25zdHJ1Y3Rvcih0aGlzKTtcbiAgICAgICAgICAgIGF4aXMuZHJhd0luZm8uYXhpc0JvZHlEcmF3SW5mbyA9IGRlZXBGcmVlemUodGhpcy5leHQuY29tcG9uZW50c1tTTi5BeGlzXVswXS5kcmF3SW5mbyk7XG4gICAgICAgICAgICBheGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mbyA9IGRlZXBGcmVlemUodGhpcy5tYXJrLmRyYXdJbmZvKTtcbiAgICAgICAgICAgIGF4aXMuZHJhd0luZm8ub2Zmc2V0WCA9IHRoaXMuZ3JpZC5taW5FdmVudEF4aXNPZmZzZXQ7XG4gICAgICAgICAgICBheGlzLmRyYXdJbmZvLmxlbmd0aCA9IHRoaXMuZHJhd0luZm8uYXhpc0xlbmd0aDtcbiAgICAgICAgICAgIGF4aXMuZHJhd0luZm8udGV4dCA9IHRoaXMuZHJhd0luZm8uYXhpc1RleHQ7XG4gICAgICAgICAgICBhd2FpdCBheGlzLmFwcGx5KCk7XG4gICAgICAgICAgICB0aGlzLmF4aXMgPSBheGlzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXhpcykge1xuICAgICAgICAgICAgdGhpcy5heGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuYXhpcyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYXdJbmZvLmJveCA9IG1lcmdlQm94KFxuICAgICAgICAgICAgdGhpcy5ib2R5LmRyYXdJbmZvLmJveCxcbiAgICAgICAgICAgIHRoaXMubWFyay5kcmF3SW5mby5ib3gsXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGlzLmF4aXMpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0luZm8uYm94ID0gbWVyZ2VCb3goXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3SW5mby5ib3gsXG4gICAgICAgICAgICAgICAgdGhpcy5heGlzLmRyYXdJbmZvLmJveCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuYXBwbHkoKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLm1hcmsuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmJvZHkuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmF4aXMgJiYgdGhpcy5heGlzLmRlc3Ryb3koKTtcblxuICAgICAgICByZXR1cm4gc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMubWFyay5oaWRlKCk7XG4gICAgICAgIHRoaXMuYm9keS5oaWRlKCk7XG4gICAgICAgIHRoaXMuYXhpcyAmJiB0aGlzLmF4aXMuaGlkZSgpO1xuXG4gICAgICAgIHJldHVybiBzdXBlci5oaWRlKCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5ib2R5LmRyYXcoKTtcbiAgICAgICAgdGhpcy5heGlzICYmIHRoaXMuYXhpcy5kcmF3KCk7XG4gICAgICAgIHRoaXMubWFyay5kcmF3KCk7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmRyYXcoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXMoY29tcDpDb21wb25lbnQpIDpjb21wIGlzIEV2ZW50IHtcbiAgICAgICAgcmV0dXJuIGNvbXAubmFtZSA9PT0gU04uRXZlbnQ7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRDb25zdHJ1Y3RvckluZm8sIENvbXBvbmVudERyYXdJbmZvLCBEYXRlQnksIEdyaWRDb25maWcgfSBmcm9tICdAZW5naW5lL3R5cGVzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnQGVuZ2luZS9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCBFdmVudCBmcm9tICdAZW5naW5lL0V2ZW50JztcbmltcG9ydCBBeGlzIGZyb20gJ0BlbmdpbmUvQXhpcyc7XG5pbXBvcnQgeyBkZWVwRnJlZXplLCB0aW1lTm9kZUdldHRlciB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBEQVRFX0NPVU5UX0VYVFJBLCBTTiwgU05fVkVSU0lPTiB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2NvbmZpZyc7XG5pbXBvcnQgQXhpc1NjYWxlIGZyb20gJ0BlbmdpbmUvQXhpcy9BeGlzU2NhbGUnO1xuaW1wb3J0IEF4aXNNaWxlc3RvbmUgZnJvbSAnQGVuZ2luZS9BeGlzL0F4aXNNaWxlc3RvbmUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludCB9IGZyb20gJ0AvZW5naW5lL2V4dGVuc2lvbnMvQnJlYWtwb2ludEFuaW1hdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd0luZm8gZXh0ZW5kcyBDb21wb25lbnREcmF3SW5mb3tcbiAgICBldmVudHM6IHtcbiAgICAgICAgZGF0ZTogc3RyaW5nLFxuICAgICAgICB0aXRsZTogc3RyaW5nLFxuXG4gICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gICAgICAgIGVuZERhdGU/OiBzdHJpbmcgfCAnbm93JyxcbiAgICAgICAgZW5kVGV4dD86IHN0cmluZyxcblxuICAgICAgICBmb2xkZWQ/OiBib29sZWFuLFxuICAgICAgICBmb2xkZWRUZXh0Pzogc3RyaW5nLFxuICAgIH1bXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUnVudGltZUluZm97XG4gICAgc3RhcnREYXRlOiBzdHJpbmc7XG4gICAgZW5kRGF0ZTogc3RyaW5nO1xuICAgIG1pbGVzdG9uZUJ5OiBEYXRlQnkgfCBudWxsO1xuICAgIHNjYWxlQnk6IERhdGVCeSB8IG51bGw7XG4gICAgYXhpc0xlbmd0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBUaW1lbGluZSBleHRlbmRzIENvbXBvbmVudHtcbiAgICBuYW1lID0gU04uVGltZWxpbmU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpDb21wb25lbnRDb25zdHJ1Y3RvckluZm8pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmV4dC5vbkNvbnN0cnVjdCh0aGlzKTtcbiAgICB9XG5cbiAgICBncmlkOkdyaWRDb25maWcgPSBUaW1lbGluZS5kZWZhdWx0R3JpZDtcblxuICAgIHJ1bnRpbWUgOlJ1bnRpbWVJbmZvID0ge30gYXMgYW55O1xuXG4gICAgZHJhd0luZm86IERyYXdJbmZvID0ge1xuICAgICAgICBib3g6IHsgeDowLCB5OjAsIHdpZHRoOjAsIGhlaWdodDowIH0sXG4gICAgICAgIGV2ZW50czogW10sXG4gICAgfTtcblxuICAgIGFic3RyYWN0IGF4aXNDb25zdHJ1Y3RvciA6dHlwZW9mIEF4aXM7XG4gICAgYWJzdHJhY3QgZXZlbnRDb25zdHJ1Y3RvciA6dHlwZW9mIEV2ZW50O1xuICAgIGV2ZW50czpFdmVudFtdID0gW107XG4gICAgYXhpcyA6QXhpcyA9IG51bGwgYXMgYW55O1xuXG4gICAgY291bnRTdGFydERhdGEoKSA6RGF0ZSB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IEFycmF5LmZyb20odGhpcy5kcmF3SW5mby5ldmVudHMpLnNvcnQoXG4gICAgICAgICAgICAoZTEsIGUyKSA9PiBOdW1iZXIobmV3IERhdGUoZTEuZGF0ZSkpIC0gTnVtYmVyKG5ldyBEYXRlKGUyLmRhdGUpKSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGV2ZW50c1swXS5kYXRlKTtcbiAgICB9XG4gICAgY291bnRFbmREYXRhKCkgOkRhdGUge1xuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLmRyYXdJbmZvLmV2ZW50cztcblxuICAgICAgICBjb25zdCBtYXhTdGFydERhdGEgPSBNYXRoLm1heCguLi5ldmVudHMubWFwKGV2ZW50ID0+IE51bWJlcihuZXcgRGF0ZShldmVudC5kYXRlKSkpKTtcbiAgICAgICAgY29uc3QgbWF4RW5kRGF0YSA9IE1hdGgubWF4KFxuICAgICAgICAgICAgLi4uZXZlbnRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihldmVudCA9PiAoJ2VuZERhdGUnIGluIGV2ZW50KSlcbiAgICAgICAgICAgICAgICAubWFwKGV2ZW50ID0+IE51bWJlcihuZXcgRGF0ZShldmVudC5lbmREYXRlISkpKSxcbiAgICAgICAgKSB8fCAtMTtcblxuICAgICAgICByZXR1cm4gbmV3IERhdGUoTWF0aC5tYXgobWF4U3RhcnREYXRhICwgbWF4RW5kRGF0YSkpO1xuICAgIH1cbiAgICBjb3VudE1pbGVzdG9uZUJ5KCkgOkRhdGVCeSB8IG51bGwge1xuICAgICAgICBjb25zdCBUV09fV0VFSyAgICAgID0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDcgKiAyO1xuICAgICAgICBjb25zdCBUV09fTU9OVEggICAgID0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwICogMjtcbiAgICAgICAgY29uc3QgVFdPX1FVQVJURVIgICA9IDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCAqIDMgKiAyO1xuICAgICAgICBjb25zdCBUV09fWUVBUiAgICAgID0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwICogMTIgKiAyO1xuXG4gICAgICAgIGNvbnN0IGRhdGFTY29wZSA9XG4gICAgICAgICAgICBuZXcgRGF0ZSh0aGlzLnJ1bnRpbWUuZW5kRGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAtIG5ldyBEYXRlKHRoaXMucnVudGltZS5zdGFydERhdGUpLmdldFRpbWUoKVxuICAgICAgICA7XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGRhdGFTY29wZSA+IFRXT19ZRUFSOlxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlQnkuWWVhcjtcbiAgICAgICAgICAgIGNhc2UgZGF0YVNjb3BlID4gVFdPX1FVQVJURVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVCeS5RdWFydGVyO1xuICAgICAgICAgICAgY2FzZSBkYXRhU2NvcGUgPiBUV09fTU9OVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVCeS5Nb250aDtcbiAgICAgICAgICAgIGNhc2UgZGF0YVNjb3BlID4gVFdPX1dFRUs6XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVCeS5XZWVrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICB9XG4gICAgY291bnRTY2FsZUJ5KCkgOkRhdGVCeSB8IG51bGwge1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5ydW50aW1lLm1pbGVzdG9uZUJ5KSB7XG4gICAgICAgICAgICBjYXNlIERhdGVCeS5ZZWFyOlxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlQnkuUXVhcnRlcjtcbiAgICAgICAgICAgIGNhc2UgRGF0ZUJ5LlF1YXJ0ZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVCeS5Nb250aDtcbiAgICAgICAgICAgIGNhc2UgRGF0ZUJ5Lk1vbnRoOlxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlQnkuV2VlaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZUJ5LldlZWs6XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVCeS5EYXk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgIH1cbiAgICBjb3VudEF4aXNMZW5ndGgoKSA6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDUwMCArIHRoaXMuZHJhd0luZm8uZXZlbnRzLmxlbmd0aCAqIDEwMDtcbiAgICB9XG4gICAgaW5pdFJ1bnRpbWUocnVudGltZT86UGFydGlhbDxSdW50aW1lSW5mbz4pIDpSdW50aW1lSW5mbyB7XG4gICAgICAgIHRoaXMucnVudGltZSA9IE9iamVjdC5jcmVhdGUocnVudGltZSB8fCBPYmplY3QucHJvdG90eXBlKTtcblxuICAgICAgICB0aGlzLnJ1bnRpbWUuc3RhcnREYXRlICAgPSAoJ3N0YXJ0RGF0ZScgICBpbiB0aGlzLnJ1bnRpbWUpXG4gICAgICAgICAgICA/IG5ldyBEYXRlKHRoaXMucnVudGltZS5zdGFydERhdGUpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgIDogdGhpcy5jb3VudFN0YXJ0RGF0YSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIHRoaXMucnVudGltZS5lbmREYXRlICAgICA9ICgnZW5kRGF0ZScgICAgIGluIHRoaXMucnVudGltZSlcbiAgICAgICAgICAgID8gbmV3IERhdGUodGhpcy5ydW50aW1lLmVuZERhdGUpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgIDogdGhpcy5jb3VudEVuZERhdGEoKS50b0lTT1N0cmluZygpO1xuICAgICAgICB0aGlzLnJ1bnRpbWUubWlsZXN0b25lQnkgPSAoJ21pbGVzdG9uZUJ5JyBpbiB0aGlzLnJ1bnRpbWUpXG4gICAgICAgICAgICA/IHRoaXMucnVudGltZS5taWxlc3RvbmVCeVxuICAgICAgICAgICAgOiB0aGlzLmNvdW50TWlsZXN0b25lQnkoKTtcbiAgICAgICAgdGhpcy5ydW50aW1lLnNjYWxlQnkgICAgID0gKCdzY2FsZUJ5JyAgICAgaW4gdGhpcy5ydW50aW1lKVxuICAgICAgICAgICAgPyB0aGlzLnJ1bnRpbWUuc2NhbGVCeVxuICAgICAgICAgICAgOiB0aGlzLmNvdW50U2NhbGVCeSgpO1xuICAgICAgICB0aGlzLnJ1bnRpbWUuYXhpc0xlbmd0aCAgPSAoJ2F4aXNMZW5ndGgnICBpbiB0aGlzLnJ1bnRpbWUpXG4gICAgICAgICAgICA/IHRoaXMucnVudGltZS5heGlzTGVuZ3RoXG4gICAgICAgICAgICA6IHRoaXMuY291bnRBeGlzTGVuZ3RoKCk7XG5cbiAgICAgICAgLy8gRklYTUU6IFdoYXQgaXMgaXQ/Pz9cbiAgICAgICAgLy8gYWxpZ25pbmcgc2NhbGVCeVxuICAgICAgICB0aGlzLnJ1bnRpbWUuc3RhcnREYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICBuZXcgRGF0ZSh0aGlzLnJ1bnRpbWUuc3RhcnREYXRlISkuZ2V0VGltZSgpXG4gICAgICAgICAgICAtIERBVEVfQ09VTlRfRVhUUkFbdGhpcy5ydW50aW1lLnNjYWxlQnkgfHwgRGF0ZUJ5LkRheV0sXG4gICAgICAgICkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5ydW50aW1lLmVuZERhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIG5ldyBEYXRlKHRoaXMucnVudGltZS5lbmREYXRlISkuZ2V0VGltZSgpXG4gICAgICAgICAgICArIERBVEVfQ09VTlRfRVhUUkFbdGhpcy5ydW50aW1lLnNjYWxlQnkgfHwgRGF0ZUJ5LkRheV0sXG4gICAgICAgICkudG9JU09TdHJpbmcoKTtcblxuICAgICAgICByZXR1cm4gcnVudGltZSBhcyBSdW50aW1lSW5mbztcbiAgICB9XG4gICAgYXN5bmMgYXBwbHkocnVudGltZT86UGFydGlhbDxSdW50aW1lSW5mbz4pIHtcbiAgICAgICAgdGhpcy5pbml0UnVudGltZShydW50aW1lKTtcblxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuZ3JpZC5jYW52YXNXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5ydW50aW1lLmF4aXNMZW5ndGggKyB0aGlzLmdyaWQuYXhpc1N0YXJ0LnkgKiAyO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKCF0aGlzLmF4aXMpIHRoaXMuYXhpcyA9IG5ldyB0aGlzLmF4aXNDb25zdHJ1Y3Rvcih0aGlzKTtcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVBeGlzKCk7XG5cbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChlID0+IGUuZGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5ldmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVFdmVudHMoKTtcblxuICAgICAgICByZXR1cm4gc3VwZXIuYXBwbHkoKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmF4aXMuZHJhdygpO1xuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGV2ZW50LmRyYXcoKSk7XG4gICAgICAgIHJldHVybiBzdXBlci5kcmF3KCk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gZXZlbnQuaGlkZSgpKTtcbiAgICAgICAgdGhpcy5heGlzLmhpZGUoKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhpZGUoKTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVBeGlzKCkge1xuICAgICAgICBjb25zdCBlbmREYXRlOm51bWJlciA9IG5ldyBEYXRlKHRoaXMucnVudGltZS5lbmREYXRlKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0RGF0ZTpudW1iZXIgPSBuZXcgRGF0ZSh0aGlzLnJ1bnRpbWUuc3RhcnREYXRlKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IGRhdGVMZW5ndGggPSBlbmREYXRlIC0gc3RhcnREYXRlO1xuICAgICAgICB0aGlzLmF4aXMuZHJhd0luZm8ubGVuZ3RoID0gdGhpcy5ydW50aW1lLmF4aXNMZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLnJ1bnRpbWUubWlsZXN0b25lQnkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYXhpcy5kcmF3SW5mby5taWxlc3RvbmVzID1cbiAgICAgICAgICAgICAgICB0aW1lTm9kZUdldHRlclt0aGlzLnJ1bnRpbWUubWlsZXN0b25lQnldKFxuICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShzdGFydERhdGUpLCBuZXcgRGF0ZShlbmREYXRlKSxcbiAgICAgICAgICAgICAgICApLm1hcCgoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogKGVuZERhdGUgLSBkYXRlLmdldFRpbWUoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvIGRhdGVMZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9udGhBYmJyID0gZGF0ZS50b0RhdGVTdHJpbmcoKS5zcGxpdCgnICcpWzFdO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMucnVudGltZS5taWxlc3RvbmVCeSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQudGV4dCA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnRleHQgPSBgJHttb250aEFiYnJ9LiAke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC50ZXh0ID0gYCR7bW9udGhBYmJyfS5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnRleHQgPSBgJHtkYXRlLmdldE1vbnRoKCkgKyAxfS4ke2RhdGUuZ2V0RGF0ZSgpfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC50ZXh0ID0gYCR7ZGF0ZS5nZXRNb250aCgpICsgMX0uJHtkYXRlLmdldERhdGUoKX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ydW50aW1lLnNjYWxlQnkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYXhpcy5kcmF3SW5mby5zY2FsZXMgPVxuICAgICAgICAgICAgICAgIHRpbWVOb2RlR2V0dGVyW3RoaXMucnVudGltZS5zY2FsZUJ5XShcbiAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUodGhpcy5ydW50aW1lLnN0YXJ0RGF0ZSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHRoaXMucnVudGltZS5lbmREYXRlKSxcbiAgICAgICAgICAgICAgICApLm1hcChkYXRlID0+XG4gICAgICAgICAgICAgICAgICAgIChuZXcgRGF0ZSh0aGlzLnJ1bnRpbWUuZW5kRGF0ZSkuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lKCkpXG4gICAgICAgICAgICAgICAgICAgIC8gZGF0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5heGlzLmFwcGx5KCk7XG4gICAgfVxuICAgIGFzeW5jIGNyZWF0ZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgZXZlbnRzID0gQXJyYXkuZnJvbSh0aGlzLmRyYXdJbmZvLmV2ZW50cylcbiAgICAgICAgICAgIC5zb3J0KChlMSwgZTIpID0+IG5ldyBEYXRlKGUxLmRhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGUyLmRhdGUpLmdldFRpbWUoKSlcbiAgICAgICAgO1xuICAgICAgICBjb25zdCBkYXRlTGVuZ3RoID1cbiAgICAgICAgICAgIG5ldyBEYXRlKHRoaXMucnVudGltZS5lbmREYXRlKS5nZXRUaW1lKClcbiAgICAgICAgICAgIC0gbmV3IERhdGUodGhpcy5ydW50aW1lLnN0YXJ0RGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgIDtcbiAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIGV2ZW50cykge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgdGhpcy5ldmVudENvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICAgICAgZXZlbnQuZHJhd0luZm8udGFyZ2V0ID0ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuYXhpcy5ib2R5LmRyYXdJbmZvLmJveC54ICsgdGhpcy5heGlzLmJvZHkuZHJhd0luZm8uYm94LndpZHRoIC8gMixcbiAgICAgICAgICAgICAgICAvLyByZWNvbXB1dGVkIGluIFBvc2l0aW9uQ291bnRlclxuICAgICAgICAgICAgICAgIHk6XG4gICAgICAgICAgICAgICAgICAgIChuZXcgRGF0ZSh0aGlzLnJ1bnRpbWUuZW5kRGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoZGF0YS5kYXRlKS5nZXRUaW1lKCkpXG4gICAgICAgICAgICAgICAgICAgIC8gZGF0ZUxlbmd0aFxuICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBldmVudC5kcmF3SW5mby5ib2R5V2lkdGggPSB0aGlzLmdyaWQuZXZlbnRXaWR0aDtcbiAgICAgICAgICAgIGV2ZW50LmRyYXdJbmZvLmRhdGUgPSBkYXRhLmRhdGU7XG4gICAgICAgICAgICBldmVudC5kcmF3SW5mby50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgICAgICAgICBldmVudC5kcmF3SW5mby5jb250ZW50VGV4dCA9IGRhdGEudGV4dDtcbiAgICAgICAgICAgIGV2ZW50LmRyYXdJbmZvLmZvbGRlZCA9IEJvb2xlYW4oZGF0YS5mb2xkZWQpO1xuICAgICAgICAgICAgZXZlbnQuZHJhd0luZm8uZm9sZGVkVGV4dCA9IGRhdGEuZm9sZGVkVGV4dDtcbiAgICAgICAgICAgIGV2ZW50LmRyYXdJbmZvLmF4aXNUZXh0ID0gZGF0YS5lbmRUZXh0O1xuICAgICAgICAgICAgaWYgKGRhdGEuZW5kRGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZERhdGUgOkRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5lbmREYXRlID09PSAnbm93J1xuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJ1bnRpbWUuZW5kRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhLmVuZERhdGVcbiAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gcmVjb21wdXRlZCBpbiBQb3NpdGlvbkNvdW50ZXJcbiAgICAgICAgICAgICAgICBldmVudC5kcmF3SW5mby5heGlzTGVuZ3RoID1cbiAgICAgICAgICAgICAgICAgICAgKGVuZERhdGUuZ2V0VGltZSgpIC0gbmV3IERhdGUoZGF0YS5kYXRlKS5nZXRUaW1lKCkpXG4gICAgICAgICAgICAgICAgICAgIC8gZGF0ZUxlbmd0aFxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IGV2ZW50LmFwcGx5KCk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhdGljIGlzKGNvbXA6Q29tcG9uZW50KSA6Y29tcCBpcyBUaW1lbGluZSB7XG4gICAgICAgIHJldHVybiBjb21wLm5hbWUgPT09IFNOLlRpbWVsaW5lO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWZhdWx0R3JpZDpHcmlkQ29uZmlnID0ge1xuICAgICAgICBldmVudE9mZnNldDogeyB4OjIwLCB5OjAgfSxcbiAgICAgICAgbWluRXZlbnRBeGlzT2Zmc2V0OiAyNSxcbiAgICAgICAgbWFya1dpZHRoOiAxNSxcbiAgICAgICAgc2NhbGVIZWlnaHQ6IDUsXG4gICAgICAgIGF4aXNXaWR0aDogMTIsXG4gICAgICAgIGF4aXNTdGFydDoge1xuICAgICAgICAgICAgeDogNDAwLFxuICAgICAgICAgICAgeTogMTAsXG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50V2lkdGg6IDM1MCxcbiAgICAgICAgY2FudmFzV2lkdGg6IDcwMCxcbiAgICB9O1xuXG4gICAgYXN5bmMgZHJhd0Zyb20oaW5wdXQ6YW55KSB7XG4gICAgICAgIGNvbnN0IGRhdGE6YW55ICA9IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGlucHV0KS5kYXRhIDogaW5wdXQuZGF0YTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBheGlzOkF4aXMgPSBuZXcgdGhpcy5heGlzQ29uc3RydWN0b3IodGhpcyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZXZlbnQ6RXZlbnQgPSBuZXcgdGhpcy5ldmVudENvbnN0cnVjdG9yKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gZGF0YS53aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgY29uc3QgYWxsQ29tcG9uZW50czpDb21wb25lbnRbXSA9IFtdO1xuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYm9keURyYXdJbmZvLCBzY2FsZXNEcmF3SW5mbywgbWlsZXN0b25lc0RyYXdJbmZvIH0gPSBkYXRhLmF4aXM7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBhbGxDb21wb25lbnRzLnB1c2gobmV3IGF4aXMuYm9keUNvbnN0cnVjdG9yKHRoaXMpLmZyb20oYm9keURyYXdJbmZvKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlc0FuZE1pbGVzdG9uZXM6KEF4aXNTY2FsZSB8IEF4aXNNaWxlc3RvbmUpW10gPSBbXTtcbiAgICAgICAgICAgIHNjYWxlc0RyYXdJbmZvLmZvckVhY2goKHNjYWxlRHJhd0luZm86YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHNjYWxlc0FuZE1pbGVzdG9uZXMucHVzaChuZXcgYXhpcy5zY2FsZUNvbnN0cnVjdG9yKHRoaXMpLmZyb20oc2NhbGVEcmF3SW5mbykpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1pbGVzdG9uZXNEcmF3SW5mby5mb3JFYWNoKChtaWxlc3RvbmVEcmF3SW5mbzphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBzY2FsZXNBbmRNaWxlc3RvbmVzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgbmV3IGF4aXMubWlsZXN0b25lQ29uc3RydWN0b3IodGhpcykuZnJvbShtaWxlc3RvbmVEcmF3SW5mbyksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzY2FsZXNBbmRNaWxlc3RvbmVzLnNvcnQoXG4gICAgICAgICAgICAgICAgKGNvbXAxLCBjb21wMikgPT4gY29tcDEuZHJhd0luZm8uYWxpZ25ZIC0gY29tcDIuZHJhd0luZm8uYWxpZ25ZLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgYWxsQ29tcG9uZW50cy5wdXNoKC4uLnNjYWxlc0FuZE1pbGVzdG9uZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXZlbnRzOmFueVtdID0gQXJyYXkuZnJvbShkYXRhLmV2ZW50cylcbiAgICAgICAgICAgIC5zb3J0KChlMTphbnksIGUyOmFueSkgPT4gZTEuZHJhd0luZm8udGFyZ2V0LnkgLSBlMi5kcmF3SW5mby50YXJnZXQueSlcbiAgICAgICAgO1xuICAgICAgICBmb3IgKGNvbnN0IHsgYm9keURyYXdJbmZvLCBtYXJrRHJhd0luZm8sIGF4aXNEcmF3SW5mbyB9IG9mIGV2ZW50cykge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgYWxsQ29tcG9uZW50cy5wdXNoKG5ldyBldmVudC5tYXJrQ29uc3RydWN0b3IodGhpcykuZnJvbShtYXJrRHJhd0luZm8pKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGFsbENvbXBvbmVudHMucHVzaChuZXcgZXZlbnQuYm9keUNvbnN0cnVjdG9yKHRoaXMpLmZyb20oYm9keURyYXdJbmZvKSk7XG5cbiAgICAgICAgICAgIGlmIChheGlzRHJhd0luZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgYWxsQ29tcG9uZW50cy5wdXNoKG5ldyBldmVudC5heGlzQ29uc3RydWN0b3IodGhpcykuZnJvbShheGlzRHJhd0luZm8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IE1heWJlIHRoZXJlIGlzIHNsb3cgd2hlbiB3YW50IG5vdCBwbGF5IGFuaW1hdGlvbj9cbiAgICAgICAgZm9yIChjb25zdCBjb21wIG9mIGFsbENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZXh0LmJyZWFrcG9pbnQuYmxvY2soQnJlYWtwb2ludC5EcmF3RnJvbSk7XG4gICAgICAgICAgICBjb21wLmRyYXcoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGV4cG9ydCgpIHtcbiAgICAgICAgY29uc3QgdGltZWxpbmUgPSB0aGlzLmV4dC5jb21wb25lbnRzW1NOLlRpbWVsaW5lXVswXTtcbiAgICAgICAgcmV0dXJuIGRlZXBGcmVlemUoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0aGVtZTogdGltZWxpbmUudGhlbWUsXG4gICAgICAgICAgICB2ZXJzaW9uOiBTTl9WRVJTSU9OLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB0aW1lbGluZS5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aW1lbGluZS5jYW52YXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRpbWVsaW5lOiB0aW1lbGluZS5kcmF3SW5mbyxcbiAgICAgICAgICAgICAgICBydW50aW1lOiB0aW1lbGluZS5ydW50aW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50czogdGltZWxpbmUuZXZlbnRzLm1hcCgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdJbmZvOiBldmVudC5kcmF3SW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlEcmF3SW5mbzogZXZlbnQuYm9keS5kcmF3SW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtEcmF3SW5mbzogZXZlbnQubWFyay5kcmF3SW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNEcmF3SW5mbzogZXZlbnQuYXhpcyA/IGV2ZW50LmF4aXMuZHJhd0luZm8gOm51bGwsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgYXhpczoge1xuICAgICAgICAgICAgICAgICAgICBkcmF3SW5mbzogdGltZWxpbmUuYXhpcy5kcmF3SW5mbyxcbiAgICAgICAgICAgICAgICAgICAgYm9keURyYXdJbmZvOiB0aW1lbGluZS5heGlzLmJvZHkuZHJhd0luZm8sXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlc0RyYXdJbmZvOiB0aW1lbGluZS5heGlzLnNjYWxlcy5tYXAoc2NhbGUgPT4gc2NhbGUuZHJhd0luZm8pLFxuICAgICAgICAgICAgICAgICAgICBtaWxlc3RvbmVzRHJhd0luZm86IHRpbWVsaW5lLmF4aXMubWlsZXN0b25lcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBtaWxlc3RvbmUgPT4gbWlsZXN0b25lLmRyYXdJbmZvLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudERyYXdJbmZvLCBHcmlkQ29uZmlnLCBDb21wb25lbnRDb25zdHJ1Y3RvckluZm8gfSBmcm9tICdAZW5naW5lL3R5cGVzJztcbmltcG9ydCB7IEV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tICdAL2VuZ2luZS9leHRlbnNpb25zJztcbmltcG9ydCB7IERFQlVHLCBTTiB9IGZyb20gJ0BlbmdpbmUvY29tbW9uL2NvbmZpZyc7XG5pbXBvcnQgeyBjb3VudEJveCwgbWVyZ2VCb3ggfSBmcm9tICdAZW5naW5lL2NvbW1vbi9mdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoeyBleHQsIGNhbnZhcywgY29udGFpbmVyLCBncmlkIH06Q29tcG9uZW50Q29uc3RydWN0b3JJbmZvKSB7XG4gICAgICAgIHRoaXMuZXh0ID0gZXh0O1xuXG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWQgYXMgYW55O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcyBhcyBhbnk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyIGFzIGFueTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlbWUgbmFtZS5cbiAgICAgKiBCZSBmaWxsZWQgd2hlbiB0aGUgdGhlbWUncyBjbGFzcyBjb25zdHJ1Y3RlZC5cbiAgICAgKiAqL1xuICAgIGFic3RyYWN0IHRoZW1lIDpzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQ29tcG9uZW50IG5hbWUuXG4gICAgICogQmUgZmlsbGVkIHdoZW4gdGhlIGVuZ2luZSdzIGNsYXNzIGNvbnN0cnVjdGVkLlxuICAgICAqICovXG4gICAgYWJzdHJhY3QgbmFtZSA6U047XG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgd2hpY2ggYmUgdXNlZCBpbiBFeHRlbnNpb25zLlxuICAgICAqIEBwcm9wZXJ0eSBpZCAtIHVzaW5nIGluIEdlbmVyYXRvcklkXG4gICAgICogQHByb3BlcnR5IGJveEVsZW1lbnQgLSB1c2luZyBpbiBCb3hFbGVtZW50R2VuZXJhdG9yXG4gICAgICogQHByb3BlcnR5IHJlYWxMZW5ndGggLSB1c2luZyBpbiBQb3NpdGlvbkNvdW50ZXIsIGV4aXN0aW5nIGluIEF4aXMgb25seS5cbiAgICAgKiBAcHJvcGVydHkgbmVlZGVkIC0gdXNpbmcgaW4gQ29uZmxpY3RGaXhlciwgZXhpc3RpbmcgaW4gRXZlbnRCb2R5IG9ubHkuXG4gICAgICogQHByb3BlcnR5IHNwYWNlIC0gdXNpbmcgaW4gQ29uZmxpY3RGaXhlciwgZXhpc3RpbmcgaW4gRXZlbnRCb2R5IG9ubHkuXG4gICAgICogKi9cbiAgICBleHRyYURhdGEgOntcbiAgICAgICAgaWQgPzpzdHJpbmcsXG4gICAgICAgIGJveEVsZW1lbnQgPzpIVE1MRWxlbWVudCxcbiAgICAgICAgcmVhbExlbmd0aCA/Om51bWJlcixcbiAgICAgICAgbmVlZGVkPzoge3RvcDpudW1iZXIsIGJvdHRvbTpudW1iZXJ9LFxuICAgICAgICBzcGFjZT86IHt0b3A6bnVtYmVyLCBib3R0b206bnVtYmVyfSxcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55LFxuICAgIH0gPSB7fTtcbiAgICAvKipcbiAgICAgKiBBbGwgY29tcG9uZW50J3MgY29uZmlnIG9mIHdoYXQgc3R5bGUgdG8gZHJhdy5cbiAgICAgKiBFLmcuIFRoZSBib3JkZXIgd2lkdGggb2YgQXhpcy5cbiAgICAgKiBNdXN0IGJlIGZpbGxlZCBiZWZvcmUgYXBwbHkoKSBjYWxsZWQuXG4gICAgICogRklYTUU6IG9ubHkgVGltZWxpbmUsIEF4aXMgYW5kIEV2ZW50IGhhZCB0aGlzIHByb3BlcnR5LlxuICAgICAqICovXG4gICAgZ3JpZCA6R3JpZENvbmZpZztcbiAgICAvKipcbiAgICAgKiBUaGUgY2FudmFzIHdoZXJlIGNvbXBvbmVudCBkcmF3IG9uLlxuICAgICAqIE11c3QgYmUgZmlsbGVkIGJlZm9yZSBhcHBseSgpIGNhbGxlZC5cbiAgICAgKiAqL1xuICAgIGNhbnZhcyA6SFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRhaW5lciB3aGljaCBjb250YWluIGFsbCBvZiBjb21wb25lbnQncyBlbGVtZW50LlxuICAgICAqIE11c3QgYmUgZmlsbGVkIGJlZm9yZSBhcHBseSgpIGNhbGxlZC5cbiAgICAgKiAqL1xuICAgIGNvbnRhaW5lciA6SFRNTEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogTWFuYWdlIGFsbCBleHRlbnNpb25zICYgSGVscCBjb21wb25lbnQgY29tbXVuaWNhdGUgZm9yIGVhY2ggb3RoZXIuXG4gICAgICogQmUgZmlsbGVkIHdoZW4gY29uc3RydWN0LlxuICAgICAqICovXG4gICAgZXh0OiBFeHRlbnNpb25NYW5hZ2VyO1xuICAgIC8qKlxuICAgICAqIEFsbCBpbmZvIGFib3V0IGRyYXcuIEV4Y2VwdCBkcmF3SW5mbywgbm8gbW9yZSBzdGF0ZXMgYmUgZGVwZW5kZWQgYWJvdXQgZHJhdy5cbiAgICAgKiBUaGUgc2FtZSBkcmF3SW5mbyBtdXN0IGhhcyBzYW1lIGRyYXduIG9uIGNhbnZhcyBhbmQgY29udGFpbmVyLlxuICAgICAqIFRoZSBzZWxmLmdpcmQgc2hvdWxkIGJlIG1lcmdpbmcgaW4gdGhlcmUgaW4gc2VsZi5hcHBseSBiZSBjYWxsZWQuXG4gICAgICogTXVzdCBjYW4gYmUgSlNPTi5zdHJpbmdpZnkuXG4gICAgICogKi9cbiAgICBhYnN0cmFjdCBkcmF3SW5mbzogQ29tcG9uZW50RHJhd0luZm87XG4gICAgLyoqXG4gICAgICogRHJhdyBzZWxmIGJhc2Ugb24gc2VsZi5kcmF3SW5mby5cbiAgICAgKiBJdCBzaG91bGQgY2FuIGJlIGNhbGwgbXVsdGlwbGUgdGltZXMuXG4gICAgICogKi9cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveSgpO1xuXG4gICAgICAgIHRoaXMuZXh0Lm9uRHJhdyh0aGlzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVFbGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvcnQtbmlnaHQnLCB0aGlzLnRoZW1lLCB0aGlzLm5hbWUpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSB2aWV3IG9mIGNvbXBvbmVudCBkZXBlbmQgb24gRE9NIGVsZW1lbnQsIHRoYXQncyBlbGVtZW50IHdpbGwgc2V0IGhlcmUuXG4gICAgICogKi9cbiAgICBlbGVtZW50ID86SFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHNlbGYuIEl0IHNob3VsZCBoaWRlIGFsbCBlbGVtZW50IGNyZWF0ZWQgYnkgc2VsZi5cbiAgICAgKiBEb24ndCBjbGVhciBDYW52YXMgaW4gdGhlcmUhXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCB0cnkgc2V0IFwidmlzaWJpbGl0eTogJ2hpZGRlbidcIiBmb3Igc2VsZi5lbGVtZW50XG4gICAgICogKi9cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHRoaXMuZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykhLmNsZWFyUmVjdChcbiAgICAgICAgICAgIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5leHQub25IaWRlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjb21wb25lbnQgdXNlIHNlbGYuZHJhd0luZm9cbiAgICAgKiAqL1xuICAgIGFzeW5jIGFwcGx5KC4uLmFyZ3MgOmFueVtdKSA6UHJvbWlzZTxhbnk+IHtcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3koKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5kcmF3SW5mby5ib3ggPSBtZXJnZUJveChcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdJbmZvLmJveCxcbiAgICAgICAgICAgICAgICBjb3VudEJveCh0aGlzLmVsZW1lbnQpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmV4dC5vbkFwcGx5KHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgaGFzIGJlYW4gZGVzdHJveWVkLlxuICAgICAqIENhbGwgYW55IG1ldGhvZCBvbiBjb21wb25lbnQgZGVzdHJveWVkIHdpbGwgZ290IGFuIGVycm9yLlxuICAgICAqICovXG4gICAgZGVzdHJveWVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogRGVzdHJveSB0aGlzIGNvbXBvbmVudC5cbiAgICAgKiBJdCBzaG91bGQgcmVtb3ZlIGFsbCBlbGVtZW50IGZyb20gZG9tIGlmIHRoYXQncyBjcmVhdGVkIGJ5IHRoaXMgY29tcG9uZW50XG4gICAgICogKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveSgpO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5leHQub25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByaW50IGxvZyBpZiBERUJVRyBpcyB0cnVlLlxuICAgICAqIEBleGFtcGxlIHRoaXMubGBIZWxsbyB3b3JsZGBcbiAgICAgKiAqL1xuICAgIGwoc3RyaW5nQXJyOlRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6YW55W10pIHsvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOiBmdW5jdGlvbi1uYW1lXG4gICAgICAgIGlmICghREVCVUcpIHJldHVybjtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gW3N0cmluZ0FyclswXV07XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBtZXNzYWdlLnB1c2godmFsdWVzW2luZGV4XSwgc3RyaW5nQXJyW2luZGV4ICsgMV0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gI2AsIC4uLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcmlmeSBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgb3Igbm90LCBpZiB5ZXMgdGhyb3cgYW4gZXJyb3IuXG4gICAgICogKi9cbiAgICBwcml2YXRlIGNoZWNrRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5uYW1lfSBoYXMgYmVhbiBkZXN0cm95ZWQsIGhvd2V2ZXIsIHlvdSBzdGlsbCBjYWxsIGl0J3MgbWV0aG9kLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnJvbShkcmF3SW5mbzpDb21wb25lbnREcmF3SW5mbykge1xuICAgICAgICB0aGlzLmRyYXdJbmZvID0gZHJhd0luZm87XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERhdGVCeSB9IGZyb20gJ0BlbmdpbmUvdHlwZXMnO1xuaW1wb3J0IHBhY2thZ2VKc29uID0gcmVxdWlyZSgnQHJvb3QvcGFja2FnZS5qc29uJyk7XG5cbmV4cG9ydCBjb25zdCBERUJVRzpCb29sZWFuID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG5cbmV4cG9ydCBlbnVtIFNOe1xuICAgIFRpbWVsaW5lID0gJ3RpbWVfbGluZScsXG4gICAgQXhpcyA9ICdheGlzJyxcbiAgICBBeGlzQm9keSA9ICdheGlzX2JvZHknLFxuICAgIEF4aXNTY2FsZSA9ICdheGlzX3NjYWxlJyxcbiAgICBBeGlzTWlsZXN0b25lID0gJ2F4aXNfbWlsZXN0b25lJyxcbiAgICBFdmVudCA9ICdldmVudCcsXG4gICAgRXZlbnRCb2R5ID0gJ2V2ZW50X2JvZHknLFxuICAgIEV2ZW50TWFyayA9ICdldmVudF9tYXJrJyxcbiAgICBFdmVudEF4aXMgPSAnZXZlbnRfYXhpcycsXG59XG5cbmV4cG9ydCBjb25zdCBEQVRFX0NPVU5UX0VYVFJBID0ge1xuICAgIFtEYXRlQnkuRGF5XTogICAgICAgMTAwMCAqIDYwICogNjAgKiAyNCAvIDIsXG4gICAgW0RhdGVCeS5XZWVrXTogICAgICAxMDAwICogNjAgKiA2MCAqIDI0ICogNyAvIDIsXG4gICAgW0RhdGVCeS5Nb250aF06ICAgICAxMDAwICogNjAgKiA2MCAqIDI0ICogMzAgLyAyLFxuICAgIFtEYXRlQnkuUXVhcnRlcl06ICAgMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwICogMyAvIDIsXG4gICAgW0RhdGVCeS5ZZWFyXTogICAgICAxMDAwICogNjAgKiA2MCAqIDI0ICogMzAgKiAxMiAvIDIsXG59O1xuXG5leHBvcnQgY29uc3QgV0FMS19PTiA9IHtcbiAgICBbU04uRXZlbnRBeGlzXToge1xuICAgICAgICBvZmZzZXRPbmVTdGVwOiAxNSxcbiAgICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFNOX1ZFUlNJT046c3RyaW5nID0gIHBhY2thZ2VKc29uLnZlcnNpb247XG4iLCJpbXBvcnQgeyBCb3gsIERhdGVCeSwgTGluZSwgQ29uZmxpY3RGaXhSZXN1bHQgfSBmcm9tICdAZW5naW5lL3R5cGVzJztcbmltcG9ydCB7IERFQlVHIH0gZnJvbSAnQGVuZ2luZS9jb21tb24vY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQm94KG9iajphbnkpOiBvYmogaXMgQm94IHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbiAgICAgICAgJiYgdHlwZW9mIG9iai54ID09PSAnbnVtYmVyJ1xuICAgICAgICAmJiB0eXBlb2Ygb2JqLnkgPT09ICdudW1iZXInXG4gICAgICAgICYmIHR5cGVvZiBvYmoud2lkdGggPT09ICdudW1iZXInXG4gICAgICAgICYmIHR5cGVvZiBvYmouaGVpZ2h0ID09PSAnbnVtYmVyJ1xuICAgIDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0xpbmUob2JqOmFueSk6IG9iaiBpcyBCb3gge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0J1xuICAgICAgICAmJiB0eXBlb2Ygb2JqLnN0YXJ0WCA9PT0gJ251bWJlcidcbiAgICAgICAgJiYgdHlwZW9mIG9iai5zdGFydFkgPT09ICdudW1iZXInXG4gICAgICAgICYmIHR5cGVvZiBvYmouZW5kWCA9PT0gJ251bWJlcidcbiAgICAgICAgJiYgdHlwZW9mIG9iai5lbmRZID09PSAnbnVtYmVyJ1xuICAgIDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBib3gyTGluZXMoYm94OkJveCk6TGluZVtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgICBzdGFydFg6IGJveC54LFxuICAgICAgICAgICAgc3RhcnRZOiBib3gueSxcbiAgICAgICAgICAgIGVuZFg6IGJveC54ICsgYm94LndpZHRoLFxuICAgICAgICAgICAgZW5kWTogYm94LnksXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHN0YXJ0WDogYm94LnggKyBib3gud2lkdGgsXG4gICAgICAgICAgICBzdGFydFk6IGJveC55LFxuICAgICAgICAgICAgZW5kWDogYm94LnggKyBib3gud2lkdGgsXG4gICAgICAgICAgICBlbmRZOiBib3gueSArIGJveC5oZWlnaHQsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHN0YXJ0WDogYm94LnggKyBib3gud2lkdGgsXG4gICAgICAgICAgICBzdGFydFk6IGJveC55ICsgYm94LmhlaWdodCxcbiAgICAgICAgICAgIGVuZFg6IGJveC54LFxuICAgICAgICAgICAgZW5kWTogYm94LnkgKyBib3guaGVpZ2h0LFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzdGFydFg6IGJveC54LFxuICAgICAgICAgICAgc3RhcnRZOiBib3gueSArIGJveC5oZWlnaHQsXG4gICAgICAgICAgICBlbmRYOiBib3gueCxcbiAgICAgICAgICAgIGVuZFk6IGJveC55LFxuICAgICAgICB9LFxuICAgIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudEJveChlbHQ6SFRNTEVsZW1lbnQpOkJveCB7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbHQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHBhcnNlRmxvYXQoc3R5bGVzLmxlZnQhKSxcbiAgICAgICAgeTogcGFyc2VGbG9hdChzdHlsZXMudG9wISksXG4gICAgICAgIHdpZHRoOiBwYXJzZUZsb2F0KHN0eWxlcy53aWR0aCEpLFxuICAgICAgICBoZWlnaHQ6IHBhcnNlRmxvYXQoc3R5bGVzLmhlaWdodCEpLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQXNzaWduKC4uLmFyZ3M6YW55W10pIHtcbiAgICBjb25zdCByZXN1bHQ6YW55ID0gYXJncy5zaGlmdCgpO1xuICAgIGZvciAoY29uc3Qgb2JqIG9mIGFyZ3MpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xuICAgICAgICAgICAgaWYgKGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgQXJyYXkuaXNBcnJheShyZXN1bHRba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCguLi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVlcEFzc2lnbihyZXN1bHRba2V5XSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjb25zdCB0aW1lTm9kZUdldHRlcjoge1xuICAgIFtrZXkgaW4gRGF0ZUJ5XTogKHN0YXJ0OiBEYXRlICwgZW5kOiBEYXRlKSA9PiBEYXRlW11cbn0gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZ2V0Tm9kZXMgPSBmdW5jdGlvbiAoc3RhcnQ6IERhdGUgLCBlbmQ6IERhdGUgLCBzdGVwOiAoZGF0ZTogRGF0ZSkgPT4gdm9pZCk6IERhdGVbXSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0Tm9kZTogRGF0ZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBEYXRlKHRlbXBsYXRlKTtcbiAgICAgICAgICAgIG5vZGUuc2V0RnVsbFllYXIodGVtcGxhdGUuZ2V0RnVsbFllYXIoKSAtIDEgLCAwICwgMSk7XG4gICAgICAgICAgICBub2RlLnNldEhvdXJzKDAgLCAwICwgMCAsIDApO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0oc3RhcnQpO1xuICAgICAgICBjb25zdCBlbmROb2RlOiBEYXRlID0gZnVuY3Rpb24gKHRlbXBsYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IERhdGUodGVtcGxhdGUpO1xuICAgICAgICAgICAgbm9kZS5zZXRGdWxsWWVhcih0ZW1wbGF0ZS5nZXRGdWxsWWVhcigpICsgMSAsIDAgLCAxKTtcbiAgICAgICAgICAgIG5vZGUuc2V0SG91cnMoMCAsIDAgLCAwICwgMCk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfShlbmQpO1xuICAgICAgICBjb25zdCBub2RlczogRGF0ZVtdID0gW107XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBOb2RlID0gbmV3IERhdGUoc3RhcnROb2RlKTtcbiAgICAgICAgICAgIHdoaWxlICh0ZW1wTm9kZS5nZXRGdWxsWWVhcigpIDw9IGVuZE5vZGUuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgICAgICAgIG5vZGVzLnB1c2gobmV3IERhdGUodGVtcE5vZGUpKTtcbiAgICAgICAgICAgICAgICBzdGVwKHRlbXBOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZXMuZmlsdGVyKFxuICAgICAgICAgICAgZGF0ZSA9PiBkYXRlLmdldFRpbWUoKSA8IGVuZC5nZXRUaW1lKCkgJiYgZGF0ZS5nZXRUaW1lKCkgPiBzdGFydC5nZXRUaW1lKCksXG4gICAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyKHN0YXJ0OiBEYXRlICwgZW5kOiBEYXRlKTogRGF0ZVtdIHtcbiAgICAgICAgICAgIHJldHVybiBnZXROb2RlcyhcbiAgICAgICAgICAgICAgICBzdGFydCAsIGVuZCAsXG4gICAgICAgICAgICAgICAgZGF0ZSA9PiBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSArIDEpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSAsXG4gICAgICAgIHF1YXJ0ZXIoc3RhcnQ6IERhdGUgLCBlbmQ6IERhdGUpOiBEYXRlW10ge1xuICAgICAgICAgICAgcmV0dXJuIGdldE5vZGVzKFxuICAgICAgICAgICAgICAgIHN0YXJ0ICwgZW5kICxcbiAgICAgICAgICAgICAgICAoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZS5nZXRNb250aCgpICsgMyA+PSAxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoMCAsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyAzICwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSAsXG4gICAgICAgIG1vbnRoKHN0YXJ0OiBEYXRlICwgZW5kOiBEYXRlKTogRGF0ZVtdIHtcbiAgICAgICAgICAgIHJldHVybiBnZXROb2RlcyhcbiAgICAgICAgICAgICAgICBzdGFydCAsIGVuZCAsXG4gICAgICAgICAgICAgICAgKGRhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKDAgLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgMSAsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gLFxuICAgICAgICB3ZWVrKHN0YXJ0OiBEYXRlICwgZW5kOiBEYXRlKTogRGF0ZVtdIHtcbiAgICAgICAgICAgIHJldHVybiBnZXROb2RlcyhcbiAgICAgICAgICAgICAgICBzdGFydCAsIGVuZCAsXG4gICAgICAgICAgICAgICAgKGRhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgMTAwMCAqIDYwICogNjAgKiAyNCk7XG4gICAgICAgICAgICAgICAgICAgIH13aGlsZSAoZGF0ZS5nZXREYXkoKSAhPT0gMSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gLFxuICAgICAgICBkYXkoc3RhcnQ6IERhdGUgLCBlbmQ6IERhdGUpOiBEYXRlW10ge1xuICAgICAgICAgICAgcmV0dXJuIGdldE5vZGVzKFxuICAgICAgICAgICAgICAgIHN0YXJ0ICwgZW5kICxcbiAgICAgICAgICAgICAgICBkYXRlID0+IGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIDEwMDAgKiA2MCAqIDYwICogMjQpICxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gLFxuICAgIH07XG59KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUJveCguLi5hcmdzOkJveFtdKTpCb3gge1xuICAgIGNvbnN0IGxlZnRUb3AgPSB7XG4gICAgICAgIHg6IEluZmluaXR5LFxuICAgICAgICB5OiBJbmZpbml0eSxcbiAgICB9O1xuICAgIGNvbnN0IHJpZ2h0Qm90dG9tID0ge1xuICAgICAgICB4OiAtSW5maW5pdHksXG4gICAgICAgIHk6IC1JbmZpbml0eSxcbiAgICB9O1xuICAgIGZvciAoY29uc3QgYm94IG9mIGFyZ3MpIHtcbiAgICAgICAgaWYgKGJveC54IDwgbGVmdFRvcC54KSBsZWZ0VG9wLnggPSBib3gueDtcbiAgICAgICAgaWYgKGJveC55IDwgbGVmdFRvcC55KSBsZWZ0VG9wLnkgPSBib3gueTtcbiAgICAgICAgaWYgKGJveC54ICsgYm94LndpZHRoID4gcmlnaHRCb3R0b20ueCkgcmlnaHRCb3R0b20ueCA9IGJveC54ICsgYm94LndpZHRoO1xuICAgICAgICBpZiAoYm94LnkgKyBib3guaGVpZ2h0ID4gcmlnaHRCb3R0b20ueSkgcmlnaHRCb3R0b20ueSA9IGJveC55ICsgYm94LmhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogbGVmdFRvcC54LFxuICAgICAgICB5OiBsZWZ0VG9wLnksXG4gICAgICAgIHdpZHRoOiByaWdodEJvdHRvbS54IC0gbGVmdFRvcC54LFxuICAgICAgICBoZWlnaHQ6IHJpZ2h0Qm90dG9tLnkgLSBsZWZ0VG9wLnksXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZXJzZWN0aW5nKGxpbmUxOiBMaW5lLCBsaW5lMjogTGluZSk6IGJvb2xlYW4ge1xuICAgIGxldCB7IHN0YXJ0WDogeDEsIHN0YXJ0WTogeTEsIGVuZFg6IHgyLCBlbmRZOiB5MiB9ID0gbGluZTE7XG4gICAgbGV0IHsgc3RhcnRYOiB4Mywgc3RhcnRZOiB5MywgZW5kWDogeDQsIGVuZFk6IHk0IH0gPSBsaW5lMjtcblxuICAgIGlmIChbeDEsIHgyLCB4MywgeDQsIHkxLCB5MiwgeTMsIHk0XS5zb21lKGlzTmFOKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1VuZXhwZWN0ZWQgTmFOJyk7XG4gICAgfVxuICAgIFt4MSwgeDIsIHgzLCB4NCwgeTEsIHkyLCB5MywgeTRdID0gW3gxLCB4MiwgeDMsIHg0LCB5MSwgeTIsIHkzLCB5NF0ubWFwKE1hdGgucm91bmQpO1xuXG4gICAgLy8gU2FtZSBzbG9wZVxuICAgIGNvbnN0IFtzbG9wZTEsIHNsb3BlMl0gPSBbXG4gICAgICAgIE1hdGguYWJzKHgxIC0geDIpIC8gTWF0aC5hYnMoeTEgLSB5MiksXG4gICAgICAgIE1hdGguYWJzKHgzIC0geDQpIC8gTWF0aC5hYnMoeTMgLSB5NCksXG4gICAgXTtcbiAgICBpZiAoc2xvcGUxID09PSBzbG9wZTIpIHtcbiAgICAgICAgY29uc3QgW2JpeFgsIHNtYWxsWF0gPSBbeDEsIHgyXS5zb3J0KChuMSwgbjIpID0+IG4yIC0gbjEpO1xuICAgICAgICBjb25zdCBbYml4WSwgc21hbGxZXSA9IFt5MSwgeTJdLnNvcnQoKG4xLCBuMikgPT4gbjIgLSBuMSk7XG4gICAgICAgIGlmIChzbG9wZTEgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoKHkzIDw9IGJpeFkgJiYgeTMgPj0gc21hbGxZKSB8fCAoeTQgPD0gYml4WSAmJiB5NCA+PSBzbWFsbFkpKVxuICAgICAgICAgICAgICAgICYmIHgxID09PSB4M1xuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2xvcGUxID09PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgcmV0dXJuICgoeDMgPD0gYml4WCAmJiB4MyA+PSBzbWFsbFgpIHx8ICh4NCA8PSBiaXhYICYmIHg0ID49IHNtYWxsWCkpXG4gICAgICAgICAgICAgICAgJiYgeTEgPT09IHkzXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKHgzIDw9IGJpeFggJiYgeDMgPj0gc21hbGxYKSAmJiAoeTMgPD0gYml4WSAmJiB5MyA+PSBzbWFsbFkpKVxuICAgICAgICAgICAgfHwgKCh4NCA8PSBiaXhYICYmIHg0ID49IHNtYWxsWCkgfHwgKHk0IDw9IGJpeFkgJiYgeTQgPj0gc21hbGxZKSlcbiAgICAgICAgO1xuICAgIH1cbiAgICBpZiAoc2xvcGUxID09PSBJbmZpbml0eSkgeTEgKz0gMC4wMDAxO1xuICAgIGlmIChzbG9wZTIgPT09IEluZmluaXR5KSB5MyArPSAwLjAwMDE7XG4gICAgaWYgKHNsb3BlMSA9PT0gMCkgeDEgKz0gMC4wMDAxO1xuICAgIGlmIChzbG9wZTIgPT09IDApIHgzICs9IDAuMDAwMTtcblxuICAgIGNvbnN0IHggPSAoKHgxICogeTIgLSB5MSAqIHgyKSAqICh4MyAtIHg0KSAtICh4MSAtIHgyKSAqICh4MyAqIHk0IC0geTMgKiB4NCkpXG4gICAgICAgIC8gKCh4MSAtIHgyKSAqICh5MyAtIHk0KSAtICh5MSAtIHkyKSAqICh4MyAtIHg0KSlcbiAgICA7XG4gICAgY29uc3QgeSA9ICgoeDEgKiB5MiAtIHkxICogeDIpICogKHkzIC0geTQpIC0gKHkxIC0geTIpICogKHgzICogeTQgLSB5MyAqIHg0KSlcbiAgICAgICAgLyAoKHgxIC0geDIpICogKHkzIC0geTQpIC0gKHkxIC0geTIpICogKHgzIC0geDQpKVxuICAgIDtcbiAgICBpZiAoaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgaWYgKHgxID49IHgyKSB7XG4gICAgICAgICAgICBpZiAoISh4MiA8PSB4ICYmIHggPD0geDEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEoeDEgPD0geCAmJiB4IDw9IHgyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoeTEgPj0geTIpIHtcbiAgICAgICAgICAgIGlmICghKHkyIDw9IHkgJiYgeSA8PSB5MSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoISh5MSA8PSB5ICYmIHkgPD0geTIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh4MyA+PSB4NCkge1xuICAgICAgICAgICAgaWYgKCEoeDQgPD0geCAmJiB4IDw9IHgzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghKHgzIDw9IHggJiYgeCA8PSB4NCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkzID49IHk0KSB7XG4gICAgICAgICAgICBpZiAoISh5NCA8PSB5ICYmIHkgPD0geTMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEoeTMgPD0geSAmJiB5IDw9IHk0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc092ZXJsYXAoaXRlbTE6Qm94fExpbmUsIGl0ZW0yOkJveHxMaW5lKSA6Ym9vbGVhbiB7XG4gICAgY29uc3QgbGluZXMxID0gaXNCb3goaXRlbTEpID8gYm94MkxpbmVzKGl0ZW0xKSA6W2l0ZW0xXTtcbiAgICBjb25zdCBsaW5lczIgPSBpc0JveChpdGVtMikgPyBib3gyTGluZXMoaXRlbTIpIDpbaXRlbTJdO1xuICAgIHJldHVybiBsaW5lczEuc29tZShsaW5lMSA9PiBsaW5lczIuc29tZShsaW5lMiA9PiBpc0ludGVyc2VjdGluZyhsaW5lMSwgbGluZTIpKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3TGluZShjdHg6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBsaW5lOkxpbmUpOiB2b2lkIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnNldExpbmVEYXNoKFtdKTtcbiAgICBjdHgubGluZVdpZHRoID0gMztcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2YwMCc7XG4gICAgY3R4Lm1vdmVUbyhsaW5lLnN0YXJ0WCwgbGluZS5zdGFydFkpO1xuICAgIGN0eC5saW5lVG8obGluZS5lbmRYLCBsaW5lLmVuZFkpO1xuICAgIGN0eC5zdHJva2UoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhbGtMb29wKFxuICAgIGZuOiAoKSA9PiBQcm9taXNlPENvbmZsaWN0Rml4UmVzdWx0W10+LFxuICAgIG1heCA9IDEwLFxuKSA6UHJvbWlzZTxDb25mbGljdEZpeFJlc3VsdD4ge1xuICAgIGxldCBhbGxldmlhdGVkID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBtYXggOyBpKyspIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oKTtcblxuICAgICAgICBpZiAocmVzdWx0LmluY2x1ZGVzKENvbmZsaWN0Rml4UmVzdWx0LkFsbGV2aWF0ZWQpKSB7XG4gICAgICAgICAgICBhbGxldmlhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQuZXZlcnkociA9PiByID09PSBDb25mbGljdEZpeFJlc3VsdC5Ob0NvbmZsaWN0KSkge1xuICAgICAgICAgICAgcmV0dXJuIENvbmZsaWN0Rml4UmVzdWx0Lk5vQ29uZmxpY3Q7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LmluY2x1ZGVzKENvbmZsaWN0Rml4UmVzdWx0LkZhaWxlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGxldmlhdGVkXG4gICAgICAgICAgICAgICAgPyBDb25mbGljdEZpeFJlc3VsdC5BbGxldmlhdGVkXG4gICAgICAgICAgICAgICAgOiBDb25mbGljdEZpeFJlc3VsdC5GYWlsZWRcbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKCd0b28gbWFueSBsb29wJyk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvZ0Z1bmN0aW9uKHByZWZpeDpzdHJpbmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZ0FycjpUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4udmFsdWVzOmFueVtdKSB7XG4gICAgICAgIGlmICghREVCVUcpIHJldHVybjtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gW3N0cmluZ0FyclswXV07XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBtZXNzYWdlLnB1c2godmFsdWVzW2luZGV4XSwgc3RyaW5nQXJyW2luZGV4ICsgMV0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gI2AsIC4uLm1lc3NhZ2UpO1xuICAgIH07XG59XG5cbi8qKlxuICogUmV0dXJuIGEgZnJlZXplZCBvYmplY3QgYmFzZSBvbiBzcGVjaWZpZWQgb2JqZWN0LlxuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRnJlZXplPFQ+KG9yaWdpbk9iamVjdDpUKSA6UmVhZG9ubHk8VD4ge1xuXG4gICAgY29uc3Qgb2JqZWN0OlQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9yaWdpbk9iamVjdCkpO1xuXG4gICAgLy8gUmV0cmlldmUgdGhlIHByb3BlcnR5IG5hbWVzIGRlZmluZWQgb24gb2JqZWN0XG4gICAgY29uc3QgcHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KSBhcyAoa2V5b2YgVClbXTtcblxuICAgIC8vIEZyZWV6ZSBwcm9wZXJ0aWVzIGJlZm9yZSBmcmVlemluZyBzZWxmXG5cbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgcHJvcE5hbWVzKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gb2JqZWN0W25hbWVdO1xuXG4gICAgICAgIG9iamVjdFtuYW1lXSA9IDxhbnk+KHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgID8gZGVlcEZyZWV6ZSh2YWx1ZSlcbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmplY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hyaW5rQm94KGJveDpCb3gsIGRpc3RhbmNlPSAxKSA6Qm94IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBib3gueCArIGRpc3RhbmNlLFxuICAgICAgICB5OiBib3gueSArIGRpc3RhbmNlLFxuICAgICAgICB3aWR0aDogYm94LndpZHRoIC0gZGlzdGFuY2UgKiAyLFxuICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHQgLSBkaXN0YW5jZSAqIDIsXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IEV4dGVuc2lvbiwgRXh0ZW5zaW9uTWFuYWdlciB9IGZyb20gJy4vJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQ3JlYXRlIGVsZW1lbnQgZm9sbG93aW5nIGNvbXAuZHJhd0luZm8uYm94XG4gKiBAZGVwZW5kIEdlbmVyYXRvcklkXG4gKiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94RWxlbWVudEdlbmVyYXRvciBpbXBsZW1lbnRzIFBhcnRpYWw8RXh0ZW5zaW9uPntcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZXR4OkV4dGVuc2lvbk1hbmFnZXIpIHt9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZWxlbWVudCBhcHBlbmQgdG8gY29udGFpbmVyLlxuICAgICAqIFRoZSBlbGVtZW50IHNpemUgZXF1YWwgY29tcG9uZW50LmRyYXdJbmZvLmJveFxuICAgICAqICovXG4gICAgYXN5bmMgb25BcHBseShjb21wOkNvbXBvbmVudCkge1xuICAgICAgICBsZXQgZWx0ID0gY29tcC5leHRyYURhdGEuYm94RWxlbWVudDtcbiAgICAgICAgaWYgKCFlbHQpIHtcbiAgICAgICAgICAgIGVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29tcC5uYW1lKTtcbiAgICAgICAgICAgIGVsdC5pZCA9IGNvbXAuZXh0cmFEYXRhLmlkITtcbiAgICAgICAgICAgIGNvbXAuZXh0cmFEYXRhLmJveEVsZW1lbnQgPSBlbHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjb21wLmRyYXdJbmZvKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIGNvbnRpbnVlO1xuICAgICAgICAgICAgZWx0LmRhdGFzZXRba2V5XSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZWx0LnN0eWxlLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6IGAke2NvbXAuZHJhd0luZm8uYm94Lnh9cHhgLFxuICAgICAgICAgICAgdG9wOiBgJHtjb21wLmRyYXdJbmZvLmJveC55fXB4YCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHtjb21wLmRyYXdJbmZvLmJveC53aWR0aH1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke2NvbXAuZHJhd0luZm8uYm94LmhlaWdodH1weGAsXG4gICAgICAgICAgICB6SW5kZXg6IDk5OTk5OTkgLSB+fihjb21wLmRyYXdJbmZvLmJveC53aWR0aCAqIGNvbXAuZHJhd0luZm8uYm94LmhlaWdodCksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbXAuY29udGFpbmVyIS5hcHBlbmRDaGlsZChlbHQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZWxlbWVudCBjcmVhdGVkIGluIG9uQXBwbHlcbiAgICAgKiAqL1xuICAgIG9uRGVzdHJveShjb21wOkNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBlbHQgOkhUTUxFbGVtZW50fHVuZGVmaW5lZCA9IGNvbXAuZXh0cmFEYXRhLmJveEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGVsdCAmJiBlbHQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgZWx0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgRXh0ZW5zaW9uLCBFeHRlbnNpb25NYW5hZ2VyIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgREVCVUcsIFNOIH0gZnJvbSAnLi4vY29tbW9uL2NvbmZpZyc7XG5pbXBvcnQgbW92ZXRvID0gcmVxdWlyZSgnbW92ZXRvJyk7XG5pbXBvcnQgQXhpcyBmcm9tICcuLi9BeGlzJztcbmltcG9ydCBBeGlzQm9keSBmcm9tICcuLi9BeGlzL0F4aXNCb2R5JztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9UaW1lbGluZSc7XG5cbmV4cG9ydCBlbnVtIEJyZWFrcG9pbnR7XG4gICAgUHVzaFNjYWxlc0FuZE1pbGVzdG9uZXMgPSAnUHVzaFNjYWxlc0FuZE1pbGVzdG9uZXMnLFxuICAgIEZpeEV2ZW50Qm9keTJBeGlzTWlsZXN0b25lID0gJ0ZpeEV2ZW50Qm9keTJBeGlzTWlsZXN0b25lJyxcbiAgICBGaXhFdmVudEF4aXMyRXZlbnRBeGlzID0gJ0ZpeEV2ZW50QXhpczJFdmVudEF4aXMnLFxuICAgIEZpeEV2ZW50Qm9keTJFdmVudEJvZHlNb3ZlciA9ICdGaXhFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXInLFxuICAgIEZpeEV2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyID0gJ0ZpeEV2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyJyxcbiAgICBEcmF3RnJvbSA9ICdEcmF3RnJvbScsXG4gICAgRGVidWcgPSAnRGVidWcnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFrcG9pbnRBbmltYXRpb25Db25maWcge1xuICAgIGJyZWFrcG9pbnRzPzogQnJlYWtwb2ludFtdO1xuICAgIHBsYXlBbmltYXRpb24/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmVha3BvaW50QW5pbWF0aW9uIGltcGxlbWVudHMgUGFydGlhbDxFeHRlbnNpb24+e1xuICAgIHByaXZhdGUgYnJlYWtwb2ludHM6QnJlYWtwb2ludFtdO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcGxheUFuaW1hdGlvbjogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZXR4OkV4dGVuc2lvbk1hbmFnZXIsXG4gICAgICAgIHsgYnJlYWtwb2ludHM9IFtdLCBwbGF5QW5pbWF0aW9uPSBmYWxzZSB9OkJyZWFrcG9pbnRBbmltYXRpb25Db25maWcgPSB7fSxcbiAgICApIHtcbiAgICAgICAgdGhpcy5icmVha3BvaW50cyA9IGJyZWFrcG9pbnRzO1xuICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24gPSBwbGF5QW5pbWF0aW9uO1xuICAgICAgICBpZiAodGhpcy5wbGF5QW5pbWF0aW9uICYmIHRoaXMuYnJlYWtwb2ludHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmJyZWFrcG9pbnRzID0gQnJlYWtwb2ludEFuaW1hdGlvbi5kZWZhdWx0QW5pbWF0aW9uQnJlYWtwb2ludHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLmJyZWFrcG9pbnRzLnB1c2goQnJlYWtwb2ludC5EZWJ1Zyk7XG4gICAgICAgICAgICAoPGFueT53aW5kb3cpLm5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICg8YW55PndpbmRvdykuYWJvcnQgPSAoKSA9PiB7IGRlbGV0ZSB0aGlzLnN0ZXBJbjsgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRHJhdyhjb21wOkNvbXBvbmVudCkge1xuICAgICAgICBpZiAoVGltZWxpbmUuaXMoY29tcCkgJiYgdGhpcy5wbGF5QW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBuZXcgbW92ZXRvKCkubW92ZSh0aGlzLmV0eC5jb21wb25lbnRzW1NOLlRpbWVsaW5lXVswXS5jYW52YXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGVwSW4gOlxuICAgICAgICAoKHZhbHVlID86YW55IHwgUHJvbWlzZUxpa2U8YW55PikgPT4gdm9pZClcbiAgICAgICAgfCBudWxsXG4gICAgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIFN0ZXAgaW50byBuZXh0IGJyZWFrcG9pbnQuXG4gICAgICogWW91IGNhbiBjYWxsIHdpbmRvdy5uZXh0KCkgdG8gZG8gc2FtZSB0aGluZyB3aGVuIERFQlVHIGlzIHRydWUuXG4gICAgICogKi9cbiAgICBuZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5zdGVwSW4pIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcEluKCk7XG4gICAgICAgICAgICB0aGlzLnN0ZXBJbiA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBjb25zb2xlLmVycm9yKCdjYW5ub3QgbmV4dCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJsb2NraW5nIGF0IGEgYnJlYWtwb2ludCB1dGlsIG5leHQgY2FsbGVkXG4gICAgICogKi9cbiAgICBhc3luYyBibG9jayhcbiAgICAgICAgbmFtZSA6QnJlYWtwb2ludCxcbiAgICAgICAgeyBvbkJsb2NrLCBvbk5leHQsIGNvbXBvbmVudHMgPSBbXSwgcHJvdGFnb25pc3QsIGZvcndhcmQgPSBmYWxzZSB9OntcbiAgICAgICAgICAgIHByb3RhZ29uaXN0PzogQ29tcG9uZW50LFxuICAgICAgICAgICAgY29tcG9uZW50cz86IENvbXBvbmVudFtdLFxuICAgICAgICAgICAgZm9yd2FyZD86IGJvb2xlYW4sXG4gICAgICAgICAgICBvbkJsb2NrPzogKCkgPT4gdm9pZCxcbiAgICAgICAgICAgIG9uTmV4dD86ICgpID0+IHZvaWQsXG4gICAgICAgIH0gPSB7fSxcbiAgICApIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uSW50ZXJ2YWwgPVxuICAgICAgICAgICAgbmFtZSA9PT0gQnJlYWtwb2ludC5EcmF3RnJvbVxuICAgICAgICAgICAgICAgID8gMzAwXG4gICAgICAgICAgICAgICAgOiBmb3J3YXJkID8gMjAwIDogMzAwXG4gICAgICAgIDtcblxuICAgICAgICBjb25zdCBnZXRNb3ZlVGFyZ2V0ID0gZnVuY3Rpb24gKCk6bnVtYmVyfG51bGwge1xuICAgICAgICAgICAgY29uc3QgdG9wUGFkZGluZyA9IDEwMDtcbiAgICAgICAgICAgIGlmIChwcm90YWdvbmlzdCkgcmV0dXJuIHByb3RhZ29uaXN0LmRyYXdJbmZvLmJveC55IC0gdG9wUGFkZGluZztcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzICYmIGNvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0VG9wcGVkID0gKGNvbXBMaXN0OkNvbXBvbmVudFtdKSA9PiBjb21wTGlzdC5maW5kKFxuICAgICAgICAgICAgICAgICAgICBjb21wMSA9PiBjb21wTGlzdC5ldmVyeShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAyID0+IGNvbXAxLmRyYXdJbmZvLmJveC55ID49IGNvbXAyLmRyYXdJbmZvLmJveC55LFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRMaXN0V2l0aG91dEF4aXMgPSBjb21wb25lbnRzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgY29tcCA9PiAhQXhpcy5pcyhjb21wKSAmJiAhQXhpc0JvZHkuaXMoY29tcCksXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRUb3BwZWQoY29tcG9uZW50TGlzdFdpdGhvdXRBeGlzKSEuZHJhd0luZm8uYm94LnggLSB0b3BQYWRkaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuYnJlYWtwb2ludHMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBibG9ja2luZyBhdCAke25hbWV9YCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5QW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gZ2V0TW92ZVRhcmdldCgpO1xuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUYXJnZXQgJiYgIWZvcndhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IG1vdmV0byh7IGR1cmF0aW9uOiA1MDAgfSkubW92ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRhcmdldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNhbGxiYWNrOiAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmV4dCgpLCBhbmltYXRpb25JbnRlcnZhbCkgfSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmV4dCgpLCBhbmltYXRpb25JbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9uQmxvY2spIGF3YWl0IG9uQmxvY2soKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChjb21wb25lbnRzLm1hcChjID0+IGMuZHJhdygpKSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbk5leHQpIGF3YWl0IG9uTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoY29tcG9uZW50cy5tYXAoYyA9PiBjLmhpZGUoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRBbmltYXRpb25CcmVha3BvaW50czpCcmVha3BvaW50W10gPSBbXG4gICAgICAgIEJyZWFrcG9pbnQuRml4RXZlbnRCb2R5MkF4aXNNaWxlc3RvbmUsXG4gICAgICAgIEJyZWFrcG9pbnQuRml4RXZlbnRBeGlzMkV2ZW50QXhpcyxcbiAgICAgICAgQnJlYWtwb2ludC5GaXhFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIsXG4gICAgICAgIEJyZWFrcG9pbnQuRml4RXZlbnRCb2R5MkV2ZW50Qm9keUZsb2F0ZXIsXG4gICAgICAgIEJyZWFrcG9pbnQuRHJhd0Zyb20sXG4gICAgXTtcbn1cbiIsImltcG9ydCB7IEV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgU04gfSBmcm9tICcuLi8uLi9jb21tb24vY29uZmlnJztcbmltcG9ydCB7IGlzSW50ZXJzZWN0aW5nIH0gZnJvbSAnLi4vLi4vY29tbW9uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgRXZlbnRBeGlzIGZyb20gJy4uLy4uL0V2ZW50L0V2ZW50QXhpcyc7XG5pbXBvcnQgeyBDb25mbGljdEZpeFJlc3VsdCwgTGluZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IEJyZWFrcG9pbnQgfSBmcm9tICcuLi9CcmVha3BvaW50QW5pbWF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRBeGlzMkV2ZW50QXhpcyB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGV4dDpFeHRlbnNpb25NYW5hZ2VyKSB7fVxuXG4gICAgYXN5bmMgZml4KCk6UHJvbWlzZTxDb25mbGljdEZpeFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBldmVudEF4aXNMaXN0OkV2ZW50QXhpc1tdID0gQXJyYXkuZnJvbSh0aGlzLmV4dC5jb21wb25lbnRzW1NOLkV2ZW50QXhpc10pXG4gICAgICAgICAgICAuc29ydCgoZWExLCBlYTIpID0+IGVhMi5kcmF3SW5mby5sZW5ndGggLSBlYTEuZHJhd0luZm8ubGVuZ3RoKVxuICAgICAgICA7XG5cbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgZXZlbnRBeGlzTGlzdC5zb21lKFxuICAgICAgICAgICAgICAgIGVhMSA9PiBldmVudEF4aXNMaXN0LnNvbWUoZWEyID0+IEV2ZW50QXhpczJFdmVudEF4aXMuaXNDb25mbGljdChlYTEsIGVhMikpLFxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWExIG9mIGV2ZW50QXhpc0xpc3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25mbGljdFdpdGggPSBldmVudEF4aXNMaXN0LmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgZWEyID0+IEV2ZW50QXhpczJFdmVudEF4aXMuaXNDb25mbGljdChlYTEsIGVhMiksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmxpY3RXaXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdGFnb25pc3Q6IGVhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmV4dC5jb21wb25lbnRzW1NOLkF4aXNCb2R5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dC5nZXRQYXJlbnQoZWExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jb25mbGljdFdpdGgubWFwKGVhID0+IHRoaXMuZXh0LmdldFBhcmVudChlYSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5leHQuYnJlYWtwb2ludC5ibG9jayhCcmVha3BvaW50LkZpeEV2ZW50QXhpczJFdmVudEF4aXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBlYTEuZHJhd0luZm8ub2Zmc2V0WCArPSAxNTsgLy8gVE9ETzogY29uZmlndXJhYmxlXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGVhMS5hcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmV4dC5icmVha3BvaW50LmJsb2NrKFxuICAgICAgICAgICAgICAgICAgICAgICAgQnJlYWtwb2ludC5GaXhFdmVudEF4aXMyRXZlbnRBeGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ29uZmxpY3RGaXhSZXN1bHQuTm9Db25mbGljdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNDb25mbGljdCAoZWExOkV2ZW50QXhpcywgZWEyOkV2ZW50QXhpcykgOmJvb2xlYW4ge1xuICAgICAgICBpZiAoZWExID09PSBlYTIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgbGluZTE6TGluZSA9IHtcbiAgICAgICAgICAgIHN0YXJ0WDogZWExLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueCArIGVhMS5kcmF3SW5mby5vZmZzZXRYLFxuICAgICAgICAgICAgc3RhcnRZOiBlYTEuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55LFxuICAgICAgICAgICAgZW5kWDogZWExLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueCArIGVhMS5kcmF3SW5mby5vZmZzZXRYLFxuICAgICAgICAgICAgZW5kWTogZWExLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSAtIGVhMS5kcmF3SW5mby5sZW5ndGgsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGxpbmUyOkxpbmUgPSB7XG4gICAgICAgICAgICBzdGFydFg6IGVhMi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnggKyBlYTIuZHJhd0luZm8ub2Zmc2V0WCxcbiAgICAgICAgICAgIHN0YXJ0WTogZWEyLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSxcbiAgICAgICAgICAgIGVuZFg6IGVhMi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnggKyBlYTIuZHJhd0luZm8ub2Zmc2V0WCxcbiAgICAgICAgICAgIGVuZFk6IGVhMi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgLSBlYTIuZHJhd0luZm8ubGVuZ3RoLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gaXNJbnRlcnNlY3RpbmcobGluZTEsIGxpbmUyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFeHRlbnNpb25NYW5hZ2VyIH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IENvbmZsaWN0Rml4UmVzdWx0IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgU04gfSBmcm9tICcuLi8uLi9jb21tb24vY29uZmlnJztcbmltcG9ydCBBeGlzTWlsZXN0b25lIGZyb20gJy4uLy4uL0F4aXMvQXhpc01pbGVzdG9uZSc7XG5pbXBvcnQgeyBpc092ZXJsYXAgfSBmcm9tICcuLi8uLi9jb21tb24vZnVuY3Rpb25zJztcbmltcG9ydCB7IEJyZWFrcG9pbnQgfSBmcm9tICcuLi9CcmVha3BvaW50QW5pbWF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRCb2R5MkF4aXNNaWxlc3RvbmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBleHQ6RXh0ZW5zaW9uTWFuYWdlcikge31cblxuICAgIGFzeW5jIGZpeCgpOlByb21pc2U8Q29uZmxpY3RGaXhSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgZXZlbnRCb2R5TGlzdCA9IHRoaXMuZXh0LmNvbXBvbmVudHNbU04uRXZlbnRCb2R5XTtcbiAgICAgICAgY29uc3QgYXhpc01pbGVzdG9uZUxpc3Q6QXhpc01pbGVzdG9uZVtdID0gdGhpcy5leHQuY29tcG9uZW50c1tTTi5BeGlzTWlsZXN0b25lXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50Qm9keSBvZiBldmVudEJvZHlMaXN0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGF4aXNNaWxlc3RvbmUgb2YgYXhpc01pbGVzdG9uZUxpc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNPdmVybGFwKGV2ZW50Qm9keS5kcmF3SW5mby5ib3gsIGF4aXNNaWxlc3RvbmUuZHJhd0luZm8uYm94KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdGFnb25pc3Q6IGF4aXNNaWxlc3RvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5leHQuY29tcG9uZW50c1tTTi5BeGlzQm9keV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpc01pbGVzdG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmV4dC5icmVha3BvaW50LmJsb2NrKEJyZWFrcG9pbnQuRml4RXZlbnRCb2R5MkF4aXNNaWxlc3RvbmUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBldmVudEJvZHkuZHJhd0luZm8ub2Zmc2V0LnggPSBheGlzTWlsZXN0b25lLmRyYXdJbmZvLmJveC53aWR0aCAvIDIgKyAxO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBldmVudEJvZHkuYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5leHQuYnJlYWtwb2ludC5ibG9jayhcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyZWFrcG9pbnQuRml4RXZlbnRCb2R5MkF4aXNNaWxlc3RvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ29uZmxpY3RGaXhSZXN1bHQuTm9Db25mbGljdDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTTiB9IGZyb20gJy4uLy4uL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IEV2ZW50Qm9keSBmcm9tICcuLi8uLi9FdmVudC9FdmVudEJvZHknO1xuaW1wb3J0IHsgaXNPdmVybGFwIH0gZnJvbSAnLi4vLi4vY29tbW9uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBFeHRlbnNpb25NYW5hZ2VyIH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IENvbmZsaWN0IGFzIENvbXBvbmVudENvbmZsaWN0IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vLi4vVGltZWxpbmUnO1xuaW1wb3J0IEF4aXNCb2R5IGZyb20gJy4uLy4uL0F4aXMvQXhpc0JvZHknO1xuaW1wb3J0IHsgQnJlYWtwb2ludCB9IGZyb20gJy4uL0JyZWFrcG9pbnRBbmltYXRpb24nO1xuaW1wb3J0IHsgQ29uZmxpY3RGaXhSZXN1bHQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbnR5cGUgQ29uZmxpY3QgPSBDb21wb25lbnRDb25mbGljdDxFdmVudEJvZHk+O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJvZHkyRXZlbnRCb2R5RmxvYXRlciB7XG4gICAgdGltZWxpbmUgPzpUaW1lbGluZTtcbiAgICBheGlzQm9keSA/OkF4aXNCb2R5O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGV4dDogRXh0ZW5zaW9uTWFuYWdlcikge31cblxuICAgIGNvbmZsaWN0czpDb25mbGljdFtdID0gW107XG4gICAgLyoqXG4gICAgICogYWJvdmUgRXZlbnRCb2R5IGlzIGFib3ZlLCBiZWxvdyBFdmVudEJvZHkgaXMgYmVsb3dcbiAgICAgKiAqL1xuICAgIGV2ZW50Qm9keUxpc3QgOkV2ZW50Qm9keVtdID0gW107XG5cbiAgICBzdGF0aWMgaXNDb25mbGljdChlYjE6RXZlbnRCb2R5LCBlYjI6RXZlbnRCb2R5KSA6Ym9vbGVhbiB7XG4gICAgICAgIGlmIChlYjEgPT09IGViMikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoZWIxLmRyYXdJbmZvLmZsb2F0ZWQgfHwgZWIyLmRyYXdJbmZvLmZsb2F0ZWQpIHJldHVybiBmYWxzZTtcblxuICAgICAgICByZXR1cm4gaXNPdmVybGFwKGViMS5kcmF3SW5mby5ib3gsIGViMi5kcmF3SW5mby5ib3gpO1xuICAgIH1cbiAgICBhc3luYyBmbG9hdChjb25mbGljdHM6Q29uZmxpY3QpIHtcbiAgICAgICAgY29uc3QgbWF4V2lkdGhJbkNvbmZsaWN0ID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAuLi5jb25mbGljdHMud2l0aC5tYXAoYyA9PiBjLmRyYXdJbmZvLmJveC53aWR0aCArIGMuZHJhd0luZm8ub2Zmc2V0LngpLFxuICAgICAgICApO1xuICAgICAgICBjb25mbGljdHMuc2VsZi5kcmF3SW5mby5vZmZzZXQueCA9IG1heFdpZHRoSW5Db25mbGljdCArIDE7XG4gICAgICAgIGNvbmZsaWN0cy5zZWxmLmRyYXdJbmZvLm1heFdpZHRoID0gTWF0aC5taW4oXG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lIS5ncmlkLmV2ZW50V2lkdGgsXG4gICAgICAgICAgICB0aGlzLmF4aXNCb2R5IS5kcmF3SW5mby5ib3gueCAtIG1heFdpZHRoSW5Db25mbGljdCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uZmxpY3RzLnNlbGYuZHJhd0luZm8uZmxvYXRlZCA9IHRydWU7XG4gICAgICAgIGF3YWl0IGNvbmZsaWN0cy5zZWxmLmFwcGx5KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZml4KCkgOlByb21pc2U8Q29uZmxpY3RGaXhSZXN1bHQ+IHtcblxuICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGhpcy5leHQuY29tcG9uZW50c1tTTi5UaW1lbGluZV1bMF07XG4gICAgICAgIHRoaXMuYXhpc0JvZHkgPSB0aGlzLmV4dC5jb21wb25lbnRzW1NOLkF4aXNCb2R5XVswXTtcbiAgICAgICAgdGhpcy5ldmVudEJvZHlMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLmV4dC5jb21wb25lbnRzW1NOLkV2ZW50Qm9keV0pXG4gICAgICAgICAgICAuc29ydCgoZWIxLCBlYjIpID0+XG4gICAgICAgICAgICAgICAgZWIxLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSAtIGViMi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnksXG4gICAgICAgICAgICApXG4gICAgICAgIDtcblxuICAgICAgICB0aGlzLmNvdW50Q29uZmxpY3QoKTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmxpY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIENvbmZsaWN0Rml4UmVzdWx0Lk5vQ29uZmxpY3Q7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb25mbGljdCA9IHRoaXMucGlja1JpbmdsZWFkZXIoKSE7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAgICAgICAgICB0aGlzLmF4aXNCb2R5LFxuICAgICAgICAgICAgICAgIGNvbmZsaWN0LnNlbGYsXG4gICAgICAgICAgICAgICAgLi4uY29uZmxpY3Qud2l0aCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwcm90YWdvbmlzdDogY29uZmxpY3Quc2VsZixcbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCB0aGlzLmV4dC5icmVha3BvaW50LmJsb2NrKEJyZWFrcG9pbnQuRml4RXZlbnRCb2R5MkV2ZW50Qm9keUZsb2F0ZXIsIG9wdGlvbnMpO1xuICAgICAgICBhd2FpdCB0aGlzLmZsb2F0KGNvbmZsaWN0KTtcbiAgICAgICAgYXdhaXQgdGhpcy5leHQuYnJlYWtwb2ludC5ibG9jayhcbiAgICAgICAgICAgIEJyZWFrcG9pbnQuRml4RXZlbnRCb2R5MkV2ZW50Qm9keUZsb2F0ZXIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIENvbmZsaWN0Rml4UmVzdWx0LkFsbGV2aWF0ZWQ7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHBpY2tSaW5nbGVhZGVyKCkgOkNvbmZsaWN0fHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZsaWN0cy5maW5kKFxuICAgICAgICAgICAgYzEgPT4gdGhpcy5jb25mbGljdHMuZXZlcnkoYzIgPT4gYzEud2l0aC5sZW5ndGggPj0gYzIud2l0aC5sZW5ndGgpLFxuICAgICAgICApO1xuICAgIH1cbiAgICBwcml2YXRlIGNvdW50Q29uZmxpY3QoKSB7XG4gICAgICAgIHRoaXMuY29uZmxpY3RzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgZm9yIChjb25zdCBlYiBvZiB0aGlzLmV2ZW50Qm9keUxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZsaWN0ID0ge1xuICAgICAgICAgICAgICAgIHNlbGY6IGViIGFzIEV2ZW50Qm9keSxcbiAgICAgICAgICAgICAgICB3aXRoOiB0aGlzLmV4dC5jb21wb25lbnRzW1NOLkV2ZW50Qm9keV0uZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPT4gRXZlbnRCb2R5MkV2ZW50Qm9keUZsb2F0ZXIuaXNDb25mbGljdChlYiwgdGFyZ2V0IGFzIEV2ZW50Qm9keSksXG4gICAgICAgICAgICAgICAgKSBhcyBFdmVudEJvZHlbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY29uZmxpY3Qud2l0aC5sZW5ndGgpIHRoaXMuY29uZmxpY3RzLnB1c2goY29uZmxpY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRXZlbnRCb2R5IGZyb20gJy4uLy4uL0V2ZW50L0V2ZW50Qm9keSc7XG5pbXBvcnQgeyBpc092ZXJsYXAsIHdhbGtMb29wIH0gZnJvbSAnLi4vLi4vY29tbW9uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBTTiB9IGZyb20gJy4uLy4uL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IHsgRXh0ZW5zaW9uTWFuYWdlciB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBDb25mbGljdCBhcyBDb21wb25lbnRDb25mbGljdCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgQnJlYWtwb2ludCB9IGZyb20gJy4uL0JyZWFrcG9pbnRBbmltYXRpb24nO1xuaW1wb3J0IHsgQ29uZmxpY3RGaXhSZXN1bHQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbnR5cGUgQ29uZmxpY3QgPSBDb21wb25lbnRDb25mbGljdDxFdmVudEJvZHk+O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBleHQ6RXh0ZW5zaW9uTWFuYWdlcikge31cblxuICAgIGNvbmZsaWN0czpDb25mbGljdFtdID0gW107XG4gICAgLyoqXG4gICAgICogYWJvdmUgRXZlbnRCb2R5IGlzIGFib3ZlLCBiZWxvdyBFdmVudEJvZHkgaXMgYmVsb3dcbiAgICAgKiAqL1xuICAgIGV2ZW50Qm9keUxpc3Q6RXZlbnRCb2R5W10gPSBbXTtcbiAgICBzcGFjZU1hcCA9IG5ldyBNYXAgYXMgTWFwPEV2ZW50Qm9keSwge3RvcDpudW1iZXIsIGJvdHRvbTpudW1iZXJ9PjtcblxuICAgIHN0YXRpYyBhc3luYyBhdm9pZChcbiAgICAgICAgeyBtb3ZlciwgZml4ZWQsIGRpcmVjdGlvbiB9XG4gICAgICAgIDp7bW92ZXI6RXZlbnRCb2R5LCBmaXhlZDpFdmVudEJvZHksIGRpcmVjdGlvbjoxfC0xfSxcbiAgICApIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAgICAgICAgIG1vdmVyLmRyYXdJbmZvLm9mZnNldC55ICs9XG4gICAgICAgICAgICAgICAgKGZpeGVkLmRyYXdJbmZvLmJveC55ICsgZml4ZWQuZHJhd0luZm8uYm94LmhlaWdodClcbiAgICAgICAgICAgICAgICAtIG1vdmVyLmRyYXdJbmZvLmJveC55XG4gICAgICAgICAgICAgICAgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW92ZXIuZHJhd0luZm8ub2Zmc2V0LnkgLT1cbiAgICAgICAgICAgICAgICAobW92ZXIuZHJhd0luZm8uYm94LnkgKyBtb3Zlci5kcmF3SW5mby5ib3guaGVpZ2h0KVxuICAgICAgICAgICAgICAgIC0gZml4ZWQuZHJhd0luZm8uYm94LnlcbiAgICAgICAgICAgICAgICArIDE7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgbW92ZXIuYXBwbHkoKTtcbiAgICB9XG4gICAgc3RhdGljIGlzQ29uZmxpY3QoZWIxOkV2ZW50Qm9keSwgZWIyOkV2ZW50Qm9keSkge1xuICAgICAgICBpZiAoZWIxID09PSBlYjIpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBpZiAoZWIxLmRyYXdJbmZvLmZsb2F0ZWQgIT09IGViMi5kcmF3SW5mby5mbG9hdGVkKSB7XG4gICAgICAgICAgICBjb25zdCBmbG9hdGVkID0gKGViMS5kcmF3SW5mby5mbG9hdGVkID8gZWIxIDogZWIyKSBhcyBFdmVudEJvZHk7XG4gICAgICAgICAgICBjb25zdCBhbm90aGVyID0gIChlYjEgPT09IGZsb2F0ZWQgPyBlYjIgOiBlYjEpIGFzIEV2ZW50Qm9keTtcblxuICAgICAgICAgICAgaWYgKCAvLyBmbG9hdGVkJ3MgbGluZSBvdmVybGFwcGVkIHdpdGggYW5vdGhlcidzIGJvZHlcbiAgICAgICAgICAgICAgICAoZmxvYXRlZC5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgPiBhbm90aGVyLmRyYXdJbmZvLmJveC55KVxuICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgZmxvYXRlZC5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnlcbiAgICAgICAgICAgICAgICAgICAgPCAoYW5vdGhlci5kcmF3SW5mby5ib3gueSArIGFub3RoZXIuZHJhd0luZm8uYm94LmhlaWdodClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHJldHVybiB0cnVlO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNPdmVybGFwKGViMS5kcmF3SW5mby5ib3gsIGViMi5kcmF3SW5mby5ib3gpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBmaXgoKSA6UHJvbWlzZTxDb25mbGljdEZpeFJlc3VsdD4ge1xuICAgICAgICB0aGlzLmV2ZW50Qm9keUxpc3QgPSBBcnJheS5mcm9tKHRoaXMuZXh0LmNvbXBvbmVudHNbU04uRXZlbnRCb2R5XSlcbiAgICAgICAgICAgIC5zb3J0KChlYjEsIGViMikgPT4gKFxuICAgICAgICAgICAgICAgIGViMS5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnlcbiAgICAgICAgICAgICAgICAtIGViMi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnlcbiAgICAgICAgICAgICkpXG4gICAgICAgIDtcblxuICAgICAgICByZXR1cm4gYXdhaXQgd2Fsa0xvb3AoYXN5bmMgKCkgPT4gW1xuICAgICAgICAgICAgYXdhaXQgdGhpcy50cnlGaXhPbmUoKSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gaGF2ZSBmaXhlZCBvbmUgb2YgY29uZmxpY3RzP1xuICAgICAqICovXG4gICAgcHJpdmF0ZSBhc3luYyB0cnlGaXhPbmUoKSA6UHJvbWlzZTxDb25mbGljdEZpeFJlc3VsdD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmNvdW50Q29uZmxpY3QoKTtcbiAgICAgICAgdGhpcy5jb3VudFNwYWNlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmxpY3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIENvbmZsaWN0Rml4UmVzdWx0Lk5vQ29uZmxpY3Q7XG4gICAgICAgIHRoaXMuY29uZmxpY3RzID0gdGhpcy5jb25mbGljdHMuZmlsdGVyKFxuICAgICAgICAgICAgY29uZmxpY3QgPT4gdGhpcy5pc1Bvc3NpYmxlKGNvbmZsaWN0KSxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmxpY3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIENvbmZsaWN0Rml4UmVzdWx0LkZhaWxlZDtcblxuICAgICAgICBjb25zdCBjb25mbGljdCA9IHRoaXMuY29uZmxpY3RzLmZpbmQoXG4gICAgICAgICAgICBjb25mbGljdDEgPT4gdGhpcy5jb25mbGljdHMuZXZlcnkoXG4gICAgICAgICAgICAgICAgY29uZmxpY3QyID0+IHRoaXMuY291bnRDYXN0KGNvbmZsaWN0MSkgPD0gdGhpcy5jb3VudENhc3QoY29uZmxpY3QyKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICkhO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5leHQuY29tcG9uZW50c1tTTi5BeGlzQm9keV0sXG4gICAgICAgICAgICAgICAgY29uZmxpY3Quc2VsZixcbiAgICAgICAgICAgICAgICAuLi5jb25mbGljdC53aXRoLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHByb3RhZ29uaXN0OiBjb25mbGljdC5zZWxmLFxuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZXh0LmJyZWFrcG9pbnQuYmxvY2soQnJlYWtwb2ludC5GaXhFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIsIG9wdGlvbnMpO1xuICAgICAgICBhd2FpdCB0aGlzLmZpeENvbmZsaWN0KGNvbmZsaWN0KTtcbiAgICAgICAgYXdhaXQgdGhpcy5leHQuYnJlYWtwb2ludC5ibG9jayhcbiAgICAgICAgICAgIEJyZWFrcG9pbnQuRml4RXZlbnRCb2R5MkV2ZW50Qm9keU1vdmVyLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIENvbmZsaWN0Rml4UmVzdWx0LkFsbGV2aWF0ZWQ7XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBpc1Bvc3NpYmxlKGNvbmZsaWN0OkNvbmZsaWN0KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNvbmZsaWN0LnNlbGYuZHJhd0luZm8uZmxvYXRlZFxuICAgICAgICAgICAgJiYgY29uZmxpY3Qud2l0aC5zb21lKGViID0+ICFlYi5kcmF3SW5mby5mbG9hdGVkKVxuICAgICAgICApIHJldHVybiBmYWxzZTtcblxuICAgICAgICBjb25zdCBuZWVkZWQgPSB0aGlzLmNvdW50TmVlZGVkKGNvbmZsaWN0KTtcbiAgICAgICAgY29uc3Qgc3BhY2UgPSB0aGlzLnNwYWNlTWFwLmdldChjb25mbGljdC5zZWxmKSE7XG5cbiAgICAgICAgcmV0dXJuIChuZWVkZWQuYm90dG9tID09PSAwIHx8IG5lZWRlZC50b3AgPT09IDApXG4gICAgICAgICAgICAmJiAoc3BhY2UuYm90dG9tID49IG5lZWRlZC5ib3R0b20gJiYgc3BhY2UudG9wID49IG5lZWRlZC50b3ApXG4gICAgICAgICAgICA7XG4gICAgfVxuICAgIHByaXZhdGUgYXN5bmMgZml4Q29uZmxpY3QoY29uZmxpY3Q6Q29uZmxpY3QpIHtcbiAgICAgICAgY29uc3QgbmVlZGVkID0gdGhpcy5jb3VudE5lZWRlZChjb25mbGljdCk7XG4gICAgICAgIGNvbnN0IG1vdmVEaXN0YW5jZSA9IG5lZWRlZC50b3AgPyBuZWVkZWQudG9wIDogLW5lZWRlZC5ib3R0b207XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IG1vdmVEaXN0YW5jZSAvIE1hdGguYWJzKG1vdmVEaXN0YW5jZSkgYXMgKDEgfCAtMSk7XG5cbiAgICAgICAgLy8gZml4IGNvbmZsaWN0XG4gICAgICAgIGNvbmZsaWN0LnNlbGYuZHJhd0luZm8ub2Zmc2V0LnkgKz0gbW92ZURpc3RhbmNlO1xuICAgICAgICBhd2FpdCBjb25mbGljdC5zZWxmLmFwcGx5KCk7XG5cbiAgICAgICAgLy8gYW5kIGZpeCBzaWRlLWVmZmVjdFxuICAgICAgICBjb25zdCBlZmZlY3RhYmxlID0gdGhpcy5ldmVudEJvZHlMaXN0LmZpbHRlcihcbiAgICAgICAgICAgIGViID0+IGViLmRyYXdJbmZvLmZsb2F0ZWQgPT09IGNvbmZsaWN0LnNlbGYuZHJhd0luZm8uZmxvYXRlZCxcbiAgICAgICAgKTtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICAgIGxldCBpID0gZWZmZWN0YWJsZS5pbmRleE9mKGNvbmZsaWN0LnNlbGYpICsgZGlyZWN0aW9uO1xuICAgICAgICAgICAgaSA+PSAwICYmIGkgPCBlZmZlY3RhYmxlLmxlbmd0aDtcbiAgICAgICAgICAgIGkgKz0gZGlyZWN0aW9uXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IGVmZmVjdGFibGVbaSAtIGRpcmVjdGlvbl07XG4gICAgICAgICAgICBjb25zdCBub3cgPSBlZmZlY3RhYmxlW2ldO1xuICAgICAgICAgICAgaWYgKEV2ZW50Qm9keTJFdmVudEJvZHlNb3Zlci5pc0NvbmZsaWN0KGxhc3QsIG5vdykpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIuYXZvaWQoe1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIG1vdmVyOiBub3csXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkOiBsYXN0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGNvdW50Q29uZmxpY3QoKSB7XG4gICAgICAgIHRoaXMuY29uZmxpY3RzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodGhpcy5ldmVudEJvZHlMaXN0Lm1hcChlYiA9PiBlYi5hcHBseSgpKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBlYiBvZiB0aGlzLmV2ZW50Qm9keUxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZsaWN0ID0ge1xuICAgICAgICAgICAgICAgIHNlbGY6IGViLFxuICAgICAgICAgICAgICAgIHdpdGg6IHRoaXMuZXZlbnRCb2R5TGlzdC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9PiBFdmVudEJvZHkyRXZlbnRCb2R5TW92ZXIuaXNDb25mbGljdChlYiwgPEV2ZW50Qm9keT50YXJnZXQpLFxuICAgICAgICAgICAgICAgICkgYXMgRXZlbnRCb2R5W10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGNvbmZsaWN0LndpdGgubGVuZ3RoKSB0aGlzLmNvbmZsaWN0cy5wdXNoKGNvbmZsaWN0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNvdW50Q2FzdChjb25mbGljdDpDb25mbGljdCkge1xuICAgICAgICBjb25zdCBuZWVkZWQgPSB0aGlzLmNvdW50TmVlZGVkKGNvbmZsaWN0KTtcbiAgICAgICAgcmV0dXJuIG5lZWRlZC5ib3R0b20gKyBuZWVkZWQudG9wO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3VudCB0aGUgbnVtYmVyIGhvdyBtYW55IHNwYWNlIG5lZWRlZCBmb3IgZml4IHRoZSBjb25mbGljdCBieSB2ZXJ0aWNhbE1vdmVcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgY291bnROZWVkZWQoY29uZmxpY3Q6Q29uZmxpY3QpIDp7dG9wOm51bWJlciwgYm90dG9tOm51bWJlcn0ge1xuICAgICAgICBjb25zdCBvcmlnaW4gPSBjb25mbGljdC5zZWxmO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGFib3ZlOkV2ZW50Qm9keVtdID0gY29uZmxpY3Qud2l0aC5maWx0ZXIoXG4gICAgICAgICAgICBjYiA9PiBjYi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgPCBvcmlnaW4uZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBiZWxvdzpFdmVudEJvZHlbXSA9IGNvbmZsaWN0LndpdGguZmlsdGVyKGNiID0+XG4gICAgICAgICAgICBjYi5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgPiBvcmlnaW4uZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55LFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChhYm92ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC50b3AgPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAuLi5hYm92ZS5tYXAoKHVwcGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1cHBlci5kcmF3SW5mby5mbG9hdGVkID09PSBvcmlnaW4uZHJhd0luZm8uZmxvYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cHBlci5kcmF3SW5mby5ib3gueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgdXBwZXIuZHJhd0luZm8uYm94LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gb3JpZ2luLmRyYXdJbmZvLmJveC55XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWdpbi5kcmF3SW5mby5mbG9hdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cHBlci5kcmF3SW5mby5ib3gueSArIHVwcGVyLmRyYXdJbmZvLmJveC5oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBvcmlnaW4uZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVwcGVyLmRyYXdJbmZvLmZsb2F0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1cHBlci5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgLSBvcmlnaW4uZHJhd0luZm8uYm94Lnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgU3ludGF4RXJyb3IoJ2Zsb2F0ZWQgaXMgbm90IGEgYm9vbGVhbicpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVsb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHQuYm90dG9tID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgLi4uYmVsb3cubWFwKChsb3dlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXIuZHJhd0luZm8uZmxvYXRlZCA9PT0gb3JpZ2luLmRyYXdJbmZvLmZsb2F0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luLmRyYXdJbmZvLmJveC55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBvcmlnaW4uZHJhd0luZm8uYm94LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gbG93ZXIuZHJhd0luZm8uYm94LnlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZ2luLmRyYXdJbmZvLmZsb2F0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW4uZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55IC0gbG93ZXIuZHJhd0luZm8uYm94Lnk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG93ZXIuZHJhd0luZm8uZmxvYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3JpZ2luLmRyYXdJbmZvLmJveC55ICsgb3JpZ2luLmRyYXdJbmZvLmJveC5oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBsb3dlci5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgU3ludGF4RXJyb3IoJ2Zsb2F0ZWQgaXMgbm90IGEgYm9vbGVhbicpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hcmdpbiAxIHRvIHRhcmdldCBvZiBjb25mbGljdFxuICAgICAgICBpZiAocmVzdWx0LnRvcCkgcmVzdWx0LnRvcCsrO1xuICAgICAgICBpZiAocmVzdWx0LmJvdHRvbSkgcmVzdWx0LmJvdHRvbSsrO1xuXG4gICAgICAgIG9yaWdpbi5leHRyYURhdGEubmVlZGVkID0gcmVzdWx0O1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvdW50IHRoZSBudW1iZXIgaG93IG1hbnkgc3BhY2UgdGhlIGNvbXBvbmVudCBjYW4gbW92ZVxuICAgICAqICovXG4gICAgcHJpdmF0ZSBjb3VudFNwYWNlKCkge1xuICAgICAgICBjb25zdCBzcGFjZVBhZGRpbmcgPSA0OyAvLyBGSVhNRTogcmVtb3ZlIHN1cHBvcnRlZFxuXG4gICAgICAgIC8vIEl0c2VsZidzIGNhbiBtb3ZlIHNwYWNlXG4gICAgICAgIHRoaXMuZXZlbnRCb2R5TGlzdC5mb3JFYWNoKFxuICAgICAgICAgICAgZWIgPT4gdGhpcy5zcGFjZU1hcC5zZXQoZWIsIHtcbiAgICAgICAgICAgICAgICB0b3A6IGViLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSAtIGViLmRyYXdJbmZvLmJveC55IC0gc3BhY2VQYWRkaW5nLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogZWIuZHJhd0luZm8uYm94LnlcbiAgICAgICAgICAgICAgICAgICAgKyBlYi5kcmF3SW5mby5ib3guaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIC0gZWIuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC55XG4gICAgICAgICAgICAgICAgICAgIC0gc3BhY2VQYWRkaW5nXG4gICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYXBwbHlMaW1pdGluZyA9IChhbGxFdmVudEJvZHk6RXZlbnRCb2R5W10pID0+IHtcbiAgICAgICAgICAgIGlmIChhbGxFdmVudEJvZHkubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIEFuIGl0ZW0gaXMgbGltaXRlZCBmcm9tXG5cbiAgICAgICAgICAgIC8vIGl0J3MgZmlyc3QgdGhhdCBwcmV2ZW50IG91dCBvZiBjYW52YXNcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gYWxsRXZlbnRCb2R5WzBdO1xuICAgICAgICAgICAgdGhpcy5zcGFjZU1hcC5nZXQoZmlyc3QpIS5ib3R0b20gPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICB0aGlzLnNwYWNlTWFwLmdldChmaXJzdCkhLmJvdHRvbSxcbiAgICAgICAgICAgICAgICBmaXJzdC5kcmF3SW5mby5ib3gueSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBpdCdzIGxhc3QgdGhhdCBwcmV2ZW50IG91dCBvZiBjYW52YXNcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBhbGxFdmVudEJvZHlbYWxsRXZlbnRCb2R5Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdGhpcy5zcGFjZU1hcC5nZXQobGFzdCkhLnRvcCA9IE1hdGgubWluKFxuICAgICAgICAgICAgICAgIHRoaXMuc3BhY2VNYXAuZ2V0KGxhc3QpIS50b3AsXG4gICAgICAgICAgICAgICAgbGFzdC5jYW52YXMuaGVpZ2h0IC0gKGxhc3QuZHJhd0luZm8uYm94LnkgKyBsYXN0LmRyYXdJbmZvLmJveC5oZWlnaHQpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIGNsYW1wIGJ5IG5laWdoYm9yXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFsbEV2ZW50Qm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gYWxsRXZlbnRCb2R5W2kgLSAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBhbGxFdmVudEJvZHlbaV07XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93RGF0YSA9IHRoaXMuc3BhY2VNYXAuZ2V0KG5vdykhO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzRGF0YSA9IHRoaXMuc3BhY2VNYXAuZ2V0KHByZXZpb3VzKSE7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9XG4gICAgICAgICAgICAgICAgICAgIG5vdy5kcmF3SW5mby5ib3gueSAtXG4gICAgICAgICAgICAgICAgICAgIChwcmV2aW91cy5kcmF3SW5mby5ib3gueSArIHByZXZpb3VzLmRyYXdJbmZvLmJveC5oZWlnaHQpXG4gICAgICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICAgICAgbm93RGF0YS5ib3R0b20gPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgbm93RGF0YS5ib3R0b20sXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlICsgcHJldmlvdXNEYXRhLmJvdHRvbSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGFsbEV2ZW50Qm9keS5sZW5ndGggLSAyOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBhbGxFdmVudEJvZHlbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IGFsbEV2ZW50Qm9keVtpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3dEYXRhID0gdGhpcy5zcGFjZU1hcC5nZXQobm93KSE7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dERhdGEgPSB0aGlzLnNwYWNlTWFwLmdldChuZXh0KSE7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9XG4gICAgICAgICAgICAgICAgICAgIG5leHQuZHJhd0luZm8uYm94LnkgLVxuICAgICAgICAgICAgICAgICAgICAobm93LmRyYXdJbmZvLmJveC55ICsgbm93LmRyYXdJbmZvLmJveC5oZWlnaHQpXG4gICAgICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICAgICAgbm93RGF0YS50b3AgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgbm93RGF0YS50b3AsXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlICsgbmV4dERhdGEudG9wLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBudW1iZXIgd2hpY2ggPCAwIGFzIDBcbiAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5zcGFjZU1hcC52YWx1ZXMoKSkuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB2YWx1ZS50b3AgPSBNYXRoLm1heCgwLCB2YWx1ZS50b3ApO1xuICAgICAgICAgICAgICAgIHZhbHVlLmJvdHRvbSA9IE1hdGgubWF4KDAsIHZhbHVlLmJvdHRvbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBhcHBseUxpbWl0aW5nKHRoaXMuZXZlbnRCb2R5TGlzdC5maWx0ZXIoZWIgPT4gZWIuZHJhd0luZm8uZmxvYXRlZCkpO1xuICAgICAgICBhcHBseUxpbWl0aW5nKHRoaXMuZXZlbnRCb2R5TGlzdC5maWx0ZXIoZWIgPT4gIWViLmRyYXdJbmZvLmZsb2F0ZWQpKTtcblxuICAgICAgICB0aGlzLmV2ZW50Qm9keUxpc3QuZm9yRWFjaChlYiA9PiBlYi5leHRyYURhdGEuc3BhY2UgPSB0aGlzLnNwYWNlTWFwLmdldChlYikpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEV4dGVuc2lvbiwgRXh0ZW5zaW9uTWFuYWdlciB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBERUJVRyB9IGZyb20gJy4uLy4uL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4uLy4uL1RpbWVsaW5lJztcbmltcG9ydCB7IHdhbGtMb29wIH0gZnJvbSAnLi4vLi4vY29tbW9uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgRXZlbnRCb2R5MkF4aXNNaWxlc3RvbmUgZnJvbSAnLi9FdmVudEJvZHkyQXhpc01pbGVzdG9uZSc7XG5pbXBvcnQgRXZlbnRBeGlzMkV2ZW50QXhpcyBmcm9tICcuL0V2ZW50QXhpczJFdmVudEF4aXMnO1xuaW1wb3J0IEV2ZW50Qm9keTJFdmVudEJvZHlNb3ZlciBmcm9tICcuL0V2ZW50Qm9keTJFdmVudEJvZHlNb3Zlcic7XG5pbXBvcnQgRXZlbnRCb2R5MkV2ZW50Qm9keUZsb2F0ZXIgZnJvbSAnLi9FdmVudEJvZHkyRXZlbnRCb2R5RmxvYXRlcic7XG5pbXBvcnQgeyBDb25mbGljdEZpeFJlc3VsdCB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBDb25mbGljdDxUID0gQ29tcG9uZW50PntcbiAgICB3aXRoOiBUW107XG4gICAgc2VsZjogVDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmxpY3RGaXhlciBpbXBsZW1lbnRzIFBhcnRpYWw8RXh0ZW5zaW9uPiB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGV4dDpFeHRlbnNpb25NYW5hZ2VyKSB7fVxuXG4gICAgZml4ZXJzIDp7IGZpeCgpOlByb21pc2U8Q29uZmxpY3RGaXhSZXN1bHQ+IH1bXSA9IFtcbiAgICAgICAgbmV3IEV2ZW50Qm9keTJBeGlzTWlsZXN0b25lKHRoaXMuZXh0KSxcbiAgICAgICAgbmV3IEV2ZW50QXhpczJFdmVudEF4aXModGhpcy5leHQpLFxuICAgICAgICBuZXcgRXZlbnRCb2R5MkV2ZW50Qm9keU1vdmVyKHRoaXMuZXh0KSxcbiAgICAgICAgbmV3IEV2ZW50Qm9keTJFdmVudEJvZHlGbG9hdGVyKHRoaXMuZXh0KSxcbiAgICBdO1xuXG4gICAgcHJpdmF0ZSBjb3VudGVyID0gMDtcbiAgICBhc3luYyBvbkFwcGx5KHRpbWVsaW5lOkNvbXBvbmVudCkge1xuICAgICAgICBpZiAoIVRpbWVsaW5lLmlzKHRpbWVsaW5lKSkgcmV0dXJuO1xuICAgICAgICBpZiAoYXdhaXQgdGhpcy5maXhBbGwoKSA9PT0gQ29uZmxpY3RGaXhSZXN1bHQuTm9Db25mbGljdCkge1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgrK3RoaXMuY291bnRlciA+IDEwKSB7IC8vIFRPRE86IG1ha2UgY29uZmlndXJhYmxlXG4gICAgICAgICAgICBjb25zdCBtc2cgPSAnVG9vIG1hbnkgdGltZXMgb2YgdHJ5IGZpeCBjb25mbGljdC4nO1xuXG4gICAgICAgICAgICBpZiAoREVCVUcpIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgICAgICAgZWxzZSBjb25zb2xlLndhcm4obXNnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRpbWVsaW5lLmFwcGx5KHtcbiAgICAgICAgICAgIGF4aXNMZW5ndGg6IHRpbWVsaW5lLnJ1bnRpbWUuYXhpc0xlbmd0aCAqIDEuMSxcbiAgICAgICAgfSkpO1xuXG4gICAgfVxuXG4gICAgYXN5bmMgZml4QWxsKCk6UHJvbWlzZTxDb25mbGljdEZpeFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgd2Fsa0xvb3AoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBmaXhlciBvZiB0aGlzLmZpeGVycykge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChhd2FpdCBmaXhlci5maXgoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBFeHRlbnNpb24sIEV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tICcuLyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgREVCVUcgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJztcblxuLyoqXG4gKiBTZXQgYSBpZCBmb3IgZXZlcnkgQ29tcG9uZW50IGluIGNvbXBvbmVudC5leHRyYURhdGEuaWQuXG4gKiBDcmVhdGUgYSBnbG9iYWwgdmFyaWFibGUgdXNpbmcgY29tcG9uZW50J3MgaWQgaWYgREVCVUcgaXMgdHJ1ZSB3aGVuIGNvbXAuYXBwbHkgZmlyZWRcbiAqICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmF0b3JJZCBpbXBsZW1lbnRzIFBhcnRpYWw8RXh0ZW5zaW9uPiB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGV0eDpFeHRlbnNpb25NYW5hZ2VyKSB7fVxuICAgIC8qKlxuICAgICAqIFNldCBjb21wb25lbnQuZXh0cmFEYXRhLmlkXG4gICAgICogKi9cbiAgICBvbkNvbnN0cnVjdChjb21wOkNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCByYW5kb21TdHJpbmcgOnN0cmluZyA9XG4gICAgICAgICAgICBOdW1iZXIoTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0pXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCA1KVxuICAgICAgICA7XG4gICAgICAgIC8vIE5vdyBjb21wLm5hbWUgaXMgdW5kZWZpbmVkXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb21wLmV4dHJhRGF0YSwgJ2lkJywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtjb21wLm5hbWV9XyR7cmFuZG9tU3RyaW5nfWA7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgaW4gZGVidWcgbW9kZSwgc2V0IGEgZ2xvYmFsIHZhcmlhYmxlXG4gICAgICogZnJvbSBjb21wb25lbnQuZXh0cmFEYXRhLmlkIHRvIHBvaW50IHRoZSBjb21wb25lbnQuXG4gICAgICogKi9cbiAgICBhc3luYyBvbkFwcGx5KGNvbXA6Q29tcG9uZW50KSB7XG4gICAgICAgIGlmIChERUJVRykgKDxhbnk+d2luZG93KVtjb21wLmV4dHJhRGF0YS5pZCFdID0gY29tcDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBERUJVRywgU04gfSBmcm9tICdAL2VuZ2luZS9jb21tb24vY29uZmlnJztcbmltcG9ydCBCb3hFbGVtZW50R2VuZXJhdG9yIGZyb20gJ0AvZW5naW5lL2V4dGVuc2lvbnMvQm94RWxlbWVudEdlbmVyYXRvcic7XG5pbXBvcnQgR2VuZXJhdG9ySWQgZnJvbSAnQC9lbmdpbmUvZXh0ZW5zaW9ucy9HZW5lcmF0b3JJZCc7XG5pbXBvcnQgUG9zaXRpb25Db3VudGVyIGZyb20gJ0AvZW5naW5lL2V4dGVuc2lvbnMvcG9zaXRpb24tY291bnRlcic7XG5pbXBvcnQgQnJlYWtwb2ludEFuaW1hdGlvbiBmcm9tICdAL2VuZ2luZS9leHRlbnNpb25zL0JyZWFrcG9pbnRBbmltYXRpb24nO1xuaW1wb3J0IENvbmZsaWN0Rml4ZXIgZnJvbSAnQC9lbmdpbmUvZXh0ZW5zaW9ucy9Db25mbGljdEZpeGVyJztcbmltcG9ydCBBeGlzQm9keSBmcm9tICdAL2VuZ2luZS9BeGlzL0F4aXNCb2R5JztcbmltcG9ydCBBeGlzTWlsZXN0b25lIGZyb20gJ0AvZW5naW5lL0F4aXMvQXhpc01pbGVzdG9uZSc7XG5pbXBvcnQgQXhpc1NjYWxlIGZyb20gJ0AvZW5naW5lL0F4aXMvQXhpc1NjYWxlJztcbmltcG9ydCBFdmVudEJvZHkgZnJvbSAnQC9lbmdpbmUvRXZlbnQvRXZlbnRCb2R5JztcbmltcG9ydCBFdmVudEF4aXMgZnJvbSAnQC9lbmdpbmUvRXZlbnQvRXZlbnRBeGlzJztcbmltcG9ydCBFdmVudE1hcmsgZnJvbSAnQC9lbmdpbmUvRXZlbnQvRXZlbnRNYXJrJztcbmltcG9ydCBBeGlzIGZyb20gJ0AvZW5naW5lL0F4aXMnO1xuaW1wb3J0IEV2ZW50IGZyb20gJ0AvZW5naW5lL0V2ZW50JztcblxuY29uc3QgTUVUSE9EUyA9IFsnb25Db25zdHJ1Y3QnLCAnb25BcHBseScsICdvbkRlc3Ryb3knLCAnb25IaWRlJywgJ29uRHJhdyddO1xuXG4vKipcbiAqIE1hbmFnZSBFeHRlbnNpb25NYW5hZ2VyI2NvbXBvbmVudHMuXG4gKiAqL1xuZXhwb3J0IGNsYXNzIEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGV0eCkge1xuICAgICAgICB0aGlzLmV0eCA9IGV0eDtcbiAgICB9XG5cbiAgICBvbkNvbnN0cnVjdChjb21wKSB7XG4gICAgICAgIHRoaXMuZXR4LmNvbXBvbmVudHNbY29tcC5uYW1lXS5wdXNoKGNvbXApO1xuICAgIH1cblxuICAgIG9uRGVzdHJveShjb21wKSB7XG4gICAgICAgIHRoaXMuZXR4LmNvbXBvbmVudHNbY29tcC5uYW1lXS5zcGxpY2UoXG4gICAgICAgICAgICB0aGlzLmV0eC5jb21wb25lbnRzW2NvbXAubmFtZV0uaW5kZXhPZihjb21wKSxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIEV4dGVuc2lvbk1hbmFnZXJcbiAqIEBjb25zdHJ1Y3RvclxuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBFeHRlbnNpb25NYW5hZ2VyKHsgYnJlYWtwb2ludEFuaW1hdGlvbiB9ID0ge30pIHtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIFtTTi5UaW1lbGluZV06IFtdLFxuICAgICAgICBbU04uQXhpc106IFtdLFxuICAgICAgICBbU04uQXhpc0JvZHldOiBbXSxcbiAgICAgICAgW1NOLkF4aXNTY2FsZV06IFtdLFxuICAgICAgICBbU04uQXhpc01pbGVzdG9uZV06IFtdLFxuICAgICAgICBbU04uRXZlbnRdOiBbXSxcbiAgICAgICAgW1NOLkV2ZW50Qm9keV06IFtdLFxuICAgICAgICBbU04uRXZlbnRNYXJrXTogW10sXG4gICAgICAgIFtTTi5FdmVudEF4aXNdOiBbXSxcbiAgICB9O1xuICAgIHRoaXMuYnJlYWtwb2ludCA9IG5ldyBCcmVha3BvaW50QW5pbWF0aW9uKHRoaXMsIGJyZWFrcG9pbnRBbmltYXRpb24pO1xuXG4gICAgdGhpcy5leHRlbnNpb25zID0gW1xuICAgICAgICBuZXcgQmFzZSh0aGlzKSxcbiAgICAgICAgbmV3IEdlbmVyYXRvcklkKHRoaXMpLFxuICAgICAgICBuZXcgUG9zaXRpb25Db3VudGVyKHRoaXMpLFxuICAgICAgICBuZXcgQ29uZmxpY3RGaXhlcih0aGlzKSxcbiAgICAgICAgdGhpcy5icmVha3BvaW50LFxuICAgIF07XG5cbiAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgdGhpcy5leHRlbnNpb25zLnB1c2goXG4gICAgICAgICAgICBuZXcgQm94RWxlbWVudEdlbmVyYXRvcih0aGlzKSxcbiAgICAgICAgKTtcbiAgICB9XG59XG5FeHRlbnNpb25NYW5hZ2VyLnByb3RvdHlwZS5nZXRQYXJlbnQgPSBmdW5jdGlvbiBnZXRQYXJlbnQoY29tcCkge1xuICAgIGlmIChBeGlzLmlzKGNvbXApKSByZXR1cm4gdGhpcy5jb21wb25lbnRzW1NOLlRpbWVsaW5lXVswXTtcbiAgICBpZiAoRXZlbnQuaXMoY29tcCkpIHJldHVybiB0aGlzLmNvbXBvbmVudHNbU04uVGltZWxpbmVdWzBdO1xuICAgIGlmIChBeGlzQm9keS5pcyhjb21wKSkgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tTTi5BeGlzXVswXTtcbiAgICBpZiAoQXhpc01pbGVzdG9uZS5pcyhjb21wKSkgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tTTi5BeGlzXVswXTtcbiAgICBpZiAoQXhpc1NjYWxlLmlzKGNvbXApKSByZXR1cm4gdGhpcy5jb21wb25lbnRzW1NOLkF4aXNdWzBdO1xuICAgIGlmIChFdmVudEJvZHkuaXMoY29tcCkpIHJldHVybiB0aGlzLmNvbXBvbmVudHNbU04uRXZlbnRdLmZpbmQoZXZlbnQgPT4gZXZlbnQuYm9keSA9PT0gY29tcCk7XG4gICAgaWYgKEV2ZW50QXhpcy5pcyhjb21wKSkgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tTTi5FdmVudF0uZmluZChldmVudCA9PiBldmVudC5heGlzID09PSBjb21wKTtcbiAgICBpZiAoRXZlbnRNYXJrLmlzKGNvbXApKSByZXR1cm4gdGhpcy5jb21wb25lbnRzW1NOLkV2ZW50XS5maW5kKGV2ZW50ID0+IGV2ZW50Lm1hcmsgPT09IGNvbXApO1xuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgQ2Fubm90IGZpbmQgcGFyZW50IG9mICR7Y29tcC5jb25zdHJ1Y3Rvci5uYW1lfWApO1xufTtcblxuLy8gQWRkIG1ldGhvZHMgb24gRXh0ZW5zaW9uTWFuYWdlci5wcm90b3R5cGUgZnJvbSBNRVRIT0RTXG5NRVRIT0RTLmZvckVhY2goKG1ldGhvZE5hbWUpID0+IHtcbiAgICBFeHRlbnNpb25NYW5hZ2VyLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGFzeW5jIGZ1bmN0aW9uIGV4dGVuc2lvbk1hbmFnZXJNZXRob2QoLi4uYXJncykge1xuICAgICAgICBmb3IgKGNvbnN0IGV4dGVuc2lvbiBvZiB0aGlzLmV4dGVuc2lvbnMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgICAgICAgaWYgKG1ldGhvZE5hbWUgaW4gZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdvbkNvbnN0cnVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uW21ldGhvZE5hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGV4dGVuc2lvblttZXRob2ROYW1lXSguLi5hcmdzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0pO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveEVsZW1lbnRHZW5lcmF0b3IgfSBmcm9tICdAL2VuZ2luZS9leHRlbnNpb25zL0JveEVsZW1lbnRHZW5lcmF0b3InO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHZW5lcmF0b3JJZCB9IGZyb20gJ0AvZW5naW5lL2V4dGVuc2lvbnMvR2VuZXJhdG9ySWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQb3NpdGlvbkNvdW50ZXIgfSBmcm9tICdAL2VuZ2luZS9leHRlbnNpb25zL3Bvc2l0aW9uLWNvdW50ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCcmVha3BvaW50QW5pbWF0aW9uIH0gZnJvbSAnQC9lbmdpbmUvZXh0ZW5zaW9ucy9CcmVha3BvaW50QW5pbWF0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29uZmxpY3RGaXhlciB9IGZyb20gJ0AvZW5naW5lL2V4dGVuc2lvbnMvQ29uZmxpY3RGaXhlcic7XG4iLCJpbXBvcnQgeyBFeHRlbnNpb24sIEV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgQXhpcyBmcm9tICcuLi9BeGlzJztcbmltcG9ydCBBeGlzTWlsZXN0b25lIGZyb20gJy4uL0F4aXMvQXhpc01pbGVzdG9uZSc7XG5pbXBvcnQgeyBtZXJnZUJveCB9IGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludCB9IGZyb20gJy4vQnJlYWtwb2ludEFuaW1hdGlvbic7XG5pbXBvcnQgeyBTTiB9IGZyb20gJy4uL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4uL1RpbWVsaW5lJztcbmltcG9ydCBBeGlzU2NhbGUgZnJvbSAnLi4vQXhpcy9BeGlzU2NhbGUnO1xuXG5pbnRlcmZhY2UgUHVzaENvbmZpZ3tcbiAgICBjcml0aWNhbDogbnVtYmVyO1xuICAgIGFkZGl0aW9uYWw6IG51bWJlcjtcbiAgICBjb21wb25lbnQ6IENvbXBvbmVudDtcbn1cblxuLyoqXG4gKiBNaWxlc3RvbmUgY2Fubm90IG9jY3VweSB0aGUgc3BhY2Ugb2YgQXhpcy5cbiAqIFNvIHdlIG1vdmUgRXZlbnQsIFNjYWxlIGFuZCBNaWxlc3RvbmUgaWYgdGhleSB1cHBlciBoYXMgYW55IE1pbGVzdG9uZS5cbiAqICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbkNvdW50ZXIgaW1wbGVtZW50cyBQYXJ0aWFsPEV4dGVuc2lvbj4ge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBldHg6RXh0ZW5zaW9uTWFuYWdlcikge31cblxuICAgIGFzeW5jIGFkanVzdEF4aXMoYXhpczpBeGlzKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50cyA9IFtcbiAgICAgICAgICAgIGF4aXMuYm9keSxcbiAgICAgICAgICAgIC4uLmF4aXMuc2NhbGVzLFxuICAgICAgICAgICAgLi4uYXhpcy5taWxlc3RvbmVzLFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIE1pbGVzdG9uZSBjYW5ub3Qgb2NjdXB5IHRoZSBzcGFjZSBvZiBBeGlzXG4gICAgICAgIGF4aXMuZXh0cmFEYXRhLnJlYWxMZW5ndGggPVxuICAgICAgICAgICAgYXhpcy5kcmF3SW5mby5sZW5ndGhcbiAgICAgICAgICAgIC0gYXhpcy5taWxlc3RvbmVzLnJlZHVjZSggLy8gUmVzZXJ2ZWQgc3BhY2UgZm9yIE1pbGVzdG9uZVxuICAgICAgICAgICAgICAgIChoOm51bWJlciwgbTogQXhpc01pbGVzdG9uZSkgPT4gaCArIG0uZHJhd0luZm8uYm94LmhlaWdodCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgKVxuICAgICAgICA7XG5cbiAgICAgICAgLy8gU2V0IHJlYWwgWSBpbiBtaWxlc3RvbmVzIGFuZCBzY2FsZXNcbiAgICAgICAgYXhpcy5taWxlc3RvbmVzLmZvckVhY2gobSA9PiBtLmRyYXdJbmZvLmFsaWduWSAqPSBheGlzLmV4dHJhRGF0YS5yZWFsTGVuZ3RoISk7XG4gICAgICAgIGF4aXMuc2NhbGVzLmZvckVhY2gocyA9PiBzLmRyYXdJbmZvLmFsaWduWSAqPSBheGlzLmV4dHJhRGF0YS5yZWFsTGVuZ3RoISk7XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoWy4uLmF4aXMubWlsZXN0b25lcywgLi4uYXhpcy5zY2FsZXNdLm1hcChjID0+IGMuYXBwbHkoKSkpO1xuXG4gICAgICAgIC8vIFNldCBQdXNoLWNvbmZpZ1xuICAgICAgICBheGlzLm1pbGVzdG9uZXMuZm9yRWFjaChtaWxlc3RvbmUgPT4gdGhpcy5hZGRQdXNoQ29uZmlnKHtcbiAgICAgICAgICAgIGNyaXRpY2FsOiBtaWxlc3RvbmUuZHJhd0luZm8uYm94LnksXG4gICAgICAgICAgICBhZGRpdGlvbmFsOiBtaWxlc3RvbmUuZHJhd0luZm8uYm94LmhlaWdodCxcbiAgICAgICAgICAgIGNvbXBvbmVudDogbWlsZXN0b25lLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gUHVzaCBtaWxlc3RvbmVzIGFuZCBzY2FsZXNcblxuICAgICAgICBhd2FpdCB0aGlzLmV0eC5icmVha3BvaW50LmJsb2NrKEJyZWFrcG9pbnQuUHVzaFNjYWxlc0FuZE1pbGVzdG9uZXMsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IGNoaWxkQ29tcG9uZW50cyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHVzaFRhcmdldCA6KEF4aXNNaWxlc3RvbmV8QXhpc1NjYWxlKVtdID1cbiAgICAgICAgICAgIFsuLi5heGlzLm1pbGVzdG9uZXMsIC4uLmF4aXMuc2NhbGVzXS5zb3J0KFxuICAgICAgICAgICAgICAgIChjb21wMSwgY29tcDIpID0+IGNvbXAxLmRyYXdJbmZvLmFsaWduWSAtIGNvbXAyLmRyYXdJbmZvLmFsaWduWSxcbiAgICAgICAgICAgIClcbiAgICAgICAgO1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXAgb2YgcHVzaFRhcmdldCkge1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmNvdW50Q3JpdGljYWwoY29tcC5kcmF3SW5mby5hbGlnblkpO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID09PSAwKSBjb250aW51ZTtcblxuICAgICAgICAgICAgaWYgKGNvbXAubmFtZSA9PT0gU04uQXhpc01pbGVzdG9uZSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHB1c2hUYXJnZXQubWFwKGNvbXAgPT4gY29tcC5hcHBseSgpKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5ldHguYnJlYWtwb2ludC5ibG9jayhCcmVha3BvaW50LlB1c2hTY2FsZXNBbmRNaWxlc3RvbmVzLCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IGNoaWxkQ29tcG9uZW50cyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tcC5kcmF3SW5mby5hbGlnblkgKz0gZGlzdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwdXNoVGFyZ2V0Lm1hcChjb21wID0+IGNvbXAuYXBwbHkoKSkpO1xuICAgICAgICBhd2FpdCB0aGlzLmV0eC5icmVha3BvaW50LmJsb2NrKEJyZWFrcG9pbnQuUHVzaFNjYWxlc0FuZE1pbGVzdG9uZXMsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IGNoaWxkQ29tcG9uZW50cyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoY2hpbGRDb21wb25lbnRzLm1hcChjID0+IGMuYXBwbHkoKSkpO1xuXG4gICAgICAgIGF4aXMuZHJhd0luZm8uYm94ID0gbWVyZ2VCb3goLi4uY2hpbGRDb21wb25lbnRzLm1hcChjID0+IGMuZHJhd0luZm8uYm94KSk7XG4gICAgfVxuICAgIGFzeW5jIGFkanVzdEV2ZW50KHRpbWVsaW5lOlRpbWVsaW5lKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRpbWVsaW5lLmV2ZW50cztcbiAgICAgICAgY29uc3QgYXhpcyA9IHRoaXMuZXR4LmNvbXBvbmVudHNbU04uQXhpc11bMF07XG5cbiAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgICAgICAgIGV2ZW50LmRyYXdJbmZvLnRhcmdldC55ICo9IGF4aXMuZXh0cmFEYXRhLnJlYWxMZW5ndGghO1xuICAgICAgICAgICAgZXZlbnQuZHJhd0luZm8udGFyZ2V0LnkgKz0gYXhpcy5ib2R5LmRyYXdJbmZvLmJveC55O1xuICAgICAgICAgICAgZXZlbnQuZHJhd0luZm8udGFyZ2V0LnkgKz0gdGhpcy5jb3VudENyaXRpY2FsKGV2ZW50LmRyYXdJbmZvLnRhcmdldC55KTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRyYXdJbmZvLmF4aXNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBldmVudC5kcmF3SW5mby5heGlzTGVuZ3RoICo9IGF4aXMuZXh0cmFEYXRhLnJlYWxMZW5ndGghO1xuICAgICAgICAgICAgICAgIGV2ZW50LmRyYXdJbmZvLmF4aXNMZW5ndGggKz0gdGhpcy5jb3VudENyaXRpY2FsKGV2ZW50LmRyYXdJbmZvLnRhcmdldC55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGV2ZW50cy5tYXAoZXZlbnQgPT4gZXZlbnQuYXBwbHkoKSkpO1xuXG4gICAgfVxuICAgIGFzeW5jIG9uQXBwbHkoY29tcDpDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKEF4aXMuaXMoY29tcCkpIHJldHVybiBhd2FpdCB0aGlzLmFkanVzdEF4aXMoY29tcCk7XG4gICAgICAgIGlmIChUaW1lbGluZS5pcyhjb21wKSkgcmV0dXJuIGF3YWl0IHRoaXMuYWRqdXN0RXZlbnQoY29tcCk7XG4gICAgfVxuICAgIG9uRGVzdHJveShjb21wOkNvbXBvbmVudCkge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnB1c2hDb25maWdzLmZpbmRJbmRleChjb25maWcgPT4gY29uZmlnLmNvbXBvbmVudCA9PT0gY29tcCk7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIGJyZWFrO1xuICAgICAgICAgICAgZWxzZSB0aGlzLnB1c2hDb25maWdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHB1c2hDb25maWdzOlB1c2hDb25maWdbXSA9IFtdO1xuICAgIHByaXZhdGUgYWRkUHVzaENvbmZpZyhjb25maWc6UHVzaENvbmZpZykge1xuICAgICAgICB0aGlzLnB1c2hDb25maWdzLnB1c2goY29uZmlnKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjb3VudENyaXRpY2FsKG51bTpudW1iZXIpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLnB1c2hDb25maWdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaENvbmZpZ3MucmVkdWNlKChyZXN1bHQ6bnVtYmVyLCBjb25maWc6UHVzaENvbmZpZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG51bSA+IGNvbmZpZy5jcml0aWNhbCA/IHJlc3VsdCArIGNvbmZpZy5hZGRpdGlvbmFsIDpyZXN1bHQ7XG4gICAgICAgIH0gLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAwKTtcbiAgICB9XG59XG4iLCJjb25zb2xlLmxvZygnVGhlIG5pZ2h0IGlzIHNob3J0LCB3YWxrIG9uIGdpcmwuJyk7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGltZWxpbmUgfSBmcm9tICcuL1RpbWVsaW5lJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBeGlzIH0gZnJvbSAnLi9BeGlzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXhpc1NjYWxlIH0gZnJvbSAnLi9BeGlzL0F4aXNTY2FsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEF4aXNNaWxlc3RvbmUgfSBmcm9tICcuL0F4aXMvQXhpc01pbGVzdG9uZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEF4aXNCb2R5IH0gZnJvbSAnLi9BeGlzL0F4aXNCb2R5JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdmVudCB9IGZyb20gJy4vRXZlbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdmVudE1hcmsgfSBmcm9tICcuL0V2ZW50L0V2ZW50TWFyayc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV2ZW50QXhpcyB9IGZyb20gJy4vRXZlbnQvRXZlbnRBeGlzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXZlbnRCb2R5IH0gZnJvbSAnLi9FdmVudC9FdmVudEJvZHknO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQge1xuICAgIEV4dGVuc2lvbk1hbmFnZXIsXG4gICAgQm94RWxlbWVudEdlbmVyYXRvcixcbiAgICBHZW5lcmF0b3JJZCxcbiAgICBQb3NpdGlvbkNvdW50ZXIsXG4gICAgQnJlYWtwb2ludEFuaW1hdGlvbixcbiAgICBDb25mbGljdEZpeGVyLFxufSBmcm9tICcuL2V4dGVuc2lvbnMnO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgRW5naW5lIGZyb20gJ0BlbmdpbmUnO1xuaW1wb3J0IHsgUm91Z2hDYW52YXMgfSBmcm9tICdyb3VnaGpzL2Jpbi9jYW52YXMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3JJbmZvIH0gZnJvbSAnQC90aGVtZXMvY29sb3JzL1RpbWVsaW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpc0JvZHkgZXh0ZW5kcyBFbmdpbmUuQXhpc0JvZHkge1xuICAgIHRoZW1lID0gJ2NvbG9ycyc7XG5cbiAgICByb3VnaENhbnZhczpSb3VnaENhbnZhcztcbiAgICBjb25zdHJ1Y3RvcihpbmZvOkNvbnN0cnVjdG9ySW5mbykge1xuICAgICAgICBzdXBlcihpbmZvKTtcbiAgICAgICAgdGhpcy5yb3VnaENhbnZhcyA9IGluZm8ucm91Z2hDYW52YXM7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5kcmF3SW5mby5ib3g7XG5cbiAgICAgICAgdGhpcy5yb3VnaENhbnZhcy5saW5lKFxuICAgICAgICAgICAgYm94LnggKyBib3gud2lkdGggLyAyLFxuICAgICAgICAgICAgYm94LnksXG4gICAgICAgICAgICBib3gueCArIGJveC53aWR0aCAvIDIsXG4gICAgICAgICAgICBib3gueSArIGJveC5oZWlnaHQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IGJveC53aWR0aCxcbiAgICAgICAgICAgICAgICBzdHJva2U6ICcjMzMzJyxcbiAgICAgICAgICAgICAgICBoYWNodXJlR2FwOiAwLFxuICAgICAgICAgICAgICAgIHJvdWdobmVzczogMC4yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gc3VwZXIuZHJhdygpO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEVuZ2luZSBmcm9tICdAZW5naW5lJztcbmltcG9ydCB7IFJvdWdoQ2FudmFzIH0gZnJvbSAncm91Z2hqcy9iaW4vY2FudmFzJztcbmltcG9ydCB7IENvbnN0cnVjdG9ySW5mbyB9IGZyb20gJ0AvdGhlbWVzL2NvbG9ycy9UaW1lbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aXNNaWxlc3RvbmUgZXh0ZW5kcyBFbmdpbmUuQXhpc01pbGVzdG9uZSB7XG4gICAgdGhlbWUgPSAnY29sb3JzJztcblxuICAgIHJvdWdoQ2FudmFzOlJvdWdoQ2FudmFzO1xuICAgIGNvbnN0cnVjdG9yKGluZm86Q29uc3RydWN0b3JJbmZvKSB7XG4gICAgICAgIHN1cGVyKGluZm8pO1xuICAgICAgICB0aGlzLnJvdWdoQ2FudmFzID0gaW5mby5yb3VnaENhbnZhcztcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zdCBib3ggPSB0aGlzLmRyYXdJbmZvLmJveDtcblxuICAgICAgICB0aGlzLnJvdWdoQ2FudmFzLnJlY3RhbmdsZShcbiAgICAgICAgICAgIGJveC54LFxuICAgICAgICAgICAgYm94LnksXG4gICAgICAgICAgICBib3gud2lkdGgsXG4gICAgICAgICAgICBib3guaGVpZ2h0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cm9rZTogJyMzMzMnLFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAxLjUsXG5cbiAgICAgICAgICAgICAgICBmaWxsOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgZmlsbFdlaWdodDogMC41LFxuICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ3NvbGlkJyxcblxuICAgICAgICAgICAgICAgIGhhY2h1cmVHYXA6IDIsXG4gICAgICAgICAgICAgICAgcm91Z2huZXNzOiAwLjcsXG4gICAgICAgICAgICAgICAgYm93aW5nOiAwLjUsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gc3VwZXIuZHJhdygpO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEVuZ2luZSBmcm9tICdAZW5naW5lJztcbmltcG9ydCB7IFJvdWdoQ2FudmFzIH0gZnJvbSAncm91Z2hqcy9iaW4vY2FudmFzJztcbmltcG9ydCB7IENvbnN0cnVjdG9ySW5mbyB9IGZyb20gJ0AvdGhlbWVzL2NvbG9ycy9UaW1lbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aXNTY2FsZSBleHRlbmRzIEVuZ2luZS5BeGlzU2NhbGUge1xuICAgIHRoZW1lID0gJ2NvbG9ycyc7XG5cbiAgICByb3VnaENhbnZhczpSb3VnaENhbnZhcztcbiAgICBjb25zdHJ1Y3RvcihpbmZvOkNvbnN0cnVjdG9ySW5mbykge1xuICAgICAgICBzdXBlcihpbmZvKTtcbiAgICAgICAgdGhpcy5yb3VnaENhbnZhcyA9IGluZm8ucm91Z2hDYW52YXM7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5kcmF3SW5mby5ib3g7XG5cbiAgICAgICAgdGhpcy5yb3VnaENhbnZhcy5yZWN0YW5nbGUoXG4gICAgICAgICAgICBib3gueCxcbiAgICAgICAgICAgIGJveC55LFxuICAgICAgICAgICAgYm94LndpZHRoLFxuICAgICAgICAgICAgYm94LmhlaWdodCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBzdHJva2U6ICdyZ2JhKDAsMCwwLDApJyxcblxuICAgICAgICAgICAgICAgIGZpbGw6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICBmaWxsV2VpZ2h0OiAwLjMsXG4gICAgICAgICAgICAgICAgZmlsbFN0eWxlOiAnc29saWQnLFxuXG4gICAgICAgICAgICAgICAgaGFjaHVyZUdhcDogMCxcbiAgICAgICAgICAgICAgICByb3VnaG5lc3M6IDAsXG4gICAgICAgICAgICAgICAgYm93aW5nOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmRyYXcoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBFbmdpbmUgZnJvbSAnQGVuZ2luZSc7XG5pbXBvcnQgeyBSb3VnaENhbnZhcyB9IGZyb20gJ3JvdWdoanMvYmluL2NhbnZhcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvckluZm8gfSBmcm9tICdAL3RoZW1lcy9jb2xvcnMvVGltZWxpbmUnO1xuaW1wb3J0IEF4aXNCb2R5IGZyb20gJy4vQXhpc0JvZHknO1xuaW1wb3J0IEF4aXNNaWxlc3RvbmUgZnJvbSAnLi9BeGlzTWlsZXN0b25lJztcbmltcG9ydCBBeGlzU2NhbGUgZnJvbSAnLi9BeGlzU2NhbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlzIGV4dGVuZHMgRW5naW5lLkF4aXMge1xuICAgIHRoZW1lID0gJ2NvbG9ycyc7XG5cbiAgICByb3VnaENhbnZhczpSb3VnaENhbnZhcztcbiAgICBjb25zdHJ1Y3RvcihpbmZvOkNvbnN0cnVjdG9ySW5mbykge1xuICAgICAgICBzdXBlcihpbmZvKTtcbiAgICAgICAgdGhpcy5yb3VnaENhbnZhcyA9IGluZm8ucm91Z2hDYW52YXM7XG4gICAgfVxuXG4gICAgYm9keUNvbnN0cnVjdG9yID0gQXhpc0JvZHk7XG4gICAgbWlsZXN0b25lQ29uc3RydWN0b3IgPSBBeGlzTWlsZXN0b25lO1xuICAgIHNjYWxlQ29uc3RydWN0b3IgPSBBeGlzU2NhbGU7XG5cbn1cbiIsImltcG9ydCAqIGFzIEVuZ2luZSBmcm9tICdAZW5naW5lJztcbmltcG9ydCB7IFJvdWdoQ2FudmFzIH0gZnJvbSAncm91Z2hqcy9iaW4vY2FudmFzJztcbmltcG9ydCB7IENvbnN0cnVjdG9ySW5mbyB9IGZyb20gJ0AvdGhlbWVzL2NvbG9ycy9UaW1lbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50QXhpcyBleHRlbmRzIEVuZ2luZS5FdmVudEF4aXMge1xuICAgIHRoZW1lID0gJ2NvbG9ycyc7XG5cbiAgICByb3VnaENhbnZhczpSb3VnaENhbnZhcztcbiAgICBjb25zdHJ1Y3RvcihpbmZvOkNvbnN0cnVjdG9ySW5mbykge1xuICAgICAgICBzdXBlcihpbmZvKTtcbiAgICAgICAgdGhpcy5yb3VnaENhbnZhcyA9IGluZm8ucm91Z2hDYW52YXM7XG4gICAgfVxuXG4gICAgZHJhd0luZm86IEVuZ2luZS5FdmVudEF4aXNbJ2RyYXdJbmZvJ10gJiB7bWFpbkNvbG9yOnN0cmluZ30gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgdGhpcy5kcmF3SW5mbyxcbiAgICAgICAgeyBtYWluQ29sb3I6ICcnIH0sXG4gICAgKTtcblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGNvbnN0IHN0cm9rZVdpZHRoID0gMS41O1xuICAgICAgICBjb25zdCByYWRpdXMgPSAxMDtcblxuICAgICAgICB0aGlzLnJvdWdoQ2FudmFzLmxpbmVhclBhdGgoXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgW3RoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC54LCB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueV0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueCArIHRoaXMuZHJhd0luZm8ub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC54ICsgdGhpcy5kcmF3SW5mby5vZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSAtIHRoaXMuZHJhd0luZm8ubGVuZ3RoICsgcmFkaXVzIC8gMixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aCxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHRoaXMuZHJhd0luZm8ubWFpbkNvbG9yLFxuXG4gICAgICAgICAgICAgICAgcm91Z2huZXNzOiAwLjcsXG4gICAgICAgICAgICAgICAgYm93aW5nOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnJvdWdoQ2FudmFzLmNpcmNsZShcbiAgICAgICAgICAgIHRoaXMuZHJhd0luZm8ubWFya0RyYXdJbmZvLnRhcmdldC54ICsgdGhpcy5kcmF3SW5mby5vZmZzZXRYLFxuICAgICAgICAgICAgdGhpcy5kcmF3SW5mby5tYXJrRHJhd0luZm8udGFyZ2V0LnkgLSB0aGlzLmRyYXdJbmZvLmxlbmd0aCxcbiAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aCxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHRoaXMuZHJhd0luZm8ubWFpbkNvbG9yLFxuXG4gICAgICAgICAgICAgICAgcm91Z2huZXNzOiAwLjIsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBzdXBlci5kcmF3KCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgKiBhcyBFbmdpbmUgZnJvbSAnQGVuZ2luZSc7XG5pbXBvcnQgeyBSb3VnaENhbnZhcyB9IGZyb20gJ3JvdWdoanMvYmluL2NhbnZhcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvckluZm8gfSBmcm9tICdAL3RoZW1lcy9jb2xvcnMvVGltZWxpbmUnO1xuaW1wb3J0IHsgc2hyaW5rQm94IH0gZnJvbSAnQGVuZ2luZS9jb21tb24vZnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRCb2R5IGV4dGVuZHMgRW5naW5lLkV2ZW50Qm9keSB7XG4gICAgdGhlbWUgPSAnY29sb3JzJztcblxuICAgIHJvdWdoQ2FudmFzOlJvdWdoQ2FudmFzO1xuICAgIGNvbnN0cnVjdG9yKGluZm86Q29uc3RydWN0b3JJbmZvKSB7XG4gICAgICAgIHN1cGVyKGluZm8pO1xuICAgICAgICB0aGlzLnJvdWdoQ2FudmFzID0gaW5mby5yb3VnaENhbnZhcztcbiAgICB9XG5cbiAgICBkcmF3SW5mbzogRW5naW5lLkV2ZW50Qm9keVsnZHJhd0luZm8nXSAmIHttYWluQ29sb3I6c3RyaW5nfSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICB0aGlzLmRyYXdJbmZvLFxuICAgICAgICB7IG1haW5Db2xvcjogJycgfSxcbiAgICApO1xuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3Qgc3Ryb2tlV2lkdGggPSAxLjU7XG4gICAgICAgIGNvbnN0IGJveCA9IHNocmlua0JveCh0aGlzLmRyYXdJbmZvLmJveCwgc3Ryb2tlV2lkdGgpO1xuXG4gICAgICAgIHRoaXMucm91Z2hDYW52YXMucmVjdGFuZ2xlKFxuICAgICAgICAgICAgYm94LngsXG4gICAgICAgICAgICBib3gueSxcbiAgICAgICAgICAgIGJveC53aWR0aCxcbiAgICAgICAgICAgIGJveC5oZWlnaHQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAncmdiYSgwLCAwLCAwLCAwKScsXG5cbiAgICAgICAgICAgICAgICBmaWxsOiB0aGlzLmRyYXdJbmZvLm1haW5Db2xvcixcbiAgICAgICAgICAgICAgICBmaWxsV2VpZ2h0OiAwLjUsXG4gICAgICAgICAgICAgICAgZmlsbFN0eWxlOiAnc29saWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnJvdWdoQ2FudmFzLmxpbmUoXG4gICAgICAgICAgICB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueCArIDIsXG4gICAgICAgICAgICB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSxcbiAgICAgICAgICAgIHRoaXMuZHJhd0luZm8uYm94LnggKyB0aGlzLmRyYXdJbmZvLmJveC53aWR0aCAtIDIsXG4gICAgICAgICAgICB0aGlzLmRyYXdJbmZvLm1hcmtEcmF3SW5mby50YXJnZXQueSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aCxcbiAgICAgICAgICAgICAgICByb3VnaG5lc3M6IDEuMyxcbiAgICAgICAgICAgICAgICBib3dpbmc6IDAuNSxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHRoaXMuZHJhd0luZm8ubWFpbkNvbG9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gc3VwZXIuZHJhdygpO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEVuZ2luZSBmcm9tICdAZW5naW5lJztcbmltcG9ydCB7IFJvdWdoQ2FudmFzIH0gZnJvbSAncm91Z2hqcy9iaW4vY2FudmFzJztcbmltcG9ydCB7IENvbnN0cnVjdG9ySW5mbyB9IGZyb20gJ0AvdGhlbWVzL2NvbG9ycy9UaW1lbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50TWFyayBleHRlbmRzIEVuZ2luZS5FdmVudE1hcmsge1xuICAgIHRoZW1lID0gJ2NvbG9ycyc7XG5cbiAgICByb3VnaENhbnZhczpSb3VnaENhbnZhcztcbiAgICBjb25zdHJ1Y3RvcihpbmZvOkNvbnN0cnVjdG9ySW5mbykge1xuICAgICAgICBzdXBlcihpbmZvKTtcbiAgICAgICAgdGhpcy5yb3VnaENhbnZhcyA9IGluZm8ucm91Z2hDYW52YXM7XG4gICAgfVxuXG4gICAgZHJhd0luZm86IEVuZ2luZS5FdmVudE1hcmtbJ2RyYXdJbmZvJ10gJiB7bWFpbkNvbG9yOnN0cmluZ30gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgdGhpcy5kcmF3SW5mbyxcbiAgICAgICAgeyBtYWluQ29sb3I6ICcnIH0sXG4gICAgKTtcblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMucm91Z2hDYW52YXMuY2lyY2xlKFxuICAgICAgICAgICAgdGhpcy5kcmF3SW5mby50YXJnZXQueCxcbiAgICAgICAgICAgIHRoaXMuZHJhd0luZm8udGFyZ2V0LnksXG4gICAgICAgICAgICB0aGlzLmRyYXdJbmZvLndpZHRoLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIHN0cm9rZTogJ3JnYmEoMCwgMCwgMCwgMCknLFxuXG4gICAgICAgICAgICAgICAgZmlsbDogdGhpcy5kcmF3SW5mby5tYWluQ29sb3IsXG4gICAgICAgICAgICAgICAgZmlsbFdlaWdodDogMC41LFxuICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ3NvbGlkJyxcblxuICAgICAgICAgICAgICAgIHJvdWdobmVzczogMC41LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBFbmdpbmUgZnJvbSAnQGVuZ2luZSc7XG5pbXBvcnQgeyBSb3VnaENhbnZhcyB9IGZyb20gJ3JvdWdoanMvYmluL2NhbnZhcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvckluZm8gfSBmcm9tICdAL3RoZW1lcy9jb2xvcnMvVGltZWxpbmUnO1xuaW1wb3J0IEV2ZW50Qm9keSBmcm9tICcuL0V2ZW50Qm9keSc7XG5pbXBvcnQgRXZlbnRBeGlzIGZyb20gJy4vRXZlbnRBeGlzJztcbmltcG9ydCBFdmVudE1hcmsgZnJvbSAnLi9FdmVudE1hcmsnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCBleHRlbmRzIEVuZ2luZS5FdmVudCB7XG4gICAgdGhlbWUgPSAnY29sb3JzJztcblxuICAgIHJvdWdoQ2FudmFzOlJvdWdoQ2FudmFzO1xuICAgIGNvbnN0cnVjdG9yKGluZm86Q29uc3RydWN0b3JJbmZvKSB7XG4gICAgICAgIHN1cGVyKGluZm8pO1xuICAgICAgICB0aGlzLnJvdWdoQ2FudmFzID0gaW5mby5yb3VnaENhbnZhcztcbiAgICB9XG5cbiAgICBib2R5Q29uc3RydWN0b3IgPSBFdmVudEJvZHk7XG4gICAgYXhpc0NvbnN0cnVjdG9yID0gRXZlbnRBeGlzO1xuICAgIG1hcmtDb25zdHJ1Y3RvciA9IEV2ZW50TWFyaztcblxufVxuIiwiaW1wb3J0IHJvdWdoanMgZnJvbSAncm91Z2hqcyc7XG5pbXBvcnQgKiBhcyBFbmdpbmUgZnJvbSAnQGVuZ2luZSc7XG5pbXBvcnQgQXhpcyBmcm9tICcuL0F4aXMnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50Q29uc3RydWN0b3JJbmZvIH0gZnJvbSAnQGVuZ2luZS90eXBlcyc7XG5pbXBvcnQgeyBSb3VnaENhbnZhcyB9IGZyb20gJ3JvdWdoanMvYmluL2NhbnZhcyc7XG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSAnLi9leHRlbnNpb25zL0NvbG9yUGlja2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBDb25zdHJ1Y3RvckluZm8gZXh0ZW5kcyBDb21wb25lbnRDb25zdHJ1Y3RvckluZm97XG4gICAgcm91Z2hDYW52YXM6IFJvdWdoQ2FudmFzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSBleHRlbmRzIEVuZ2luZS5UaW1lbGluZSB7XG4gICAgdGhlbWUgPSAnY29sb3JzJztcblxuICAgIGdyaWQgPSB7XG4gICAgICAgIC4uLkVuZ2luZS5UaW1lbGluZS5kZWZhdWx0R3JpZCxcbiAgICAgICAgc2NhbGVIZWlnaHQ6IDMsXG4gICAgICAgIGF4aXNXaWR0aDogNSxcbiAgICAgICAgbWFya1dpZHRoOiAxMCxcbiAgICB9O1xuXG4gICAgcm91Z2hDYW52YXM6IFJvdWdoQ2FudmFzO1xuICAgIGNvbnN0cnVjdG9yKGluZm86Q29tcG9uZW50Q29uc3RydWN0b3JJbmZvKSB7XG4gICAgICAgIHN1cGVyKGluZm8pO1xuICAgICAgICB0aGlzLmV4dC5leHRlbnNpb25zLnB1c2goXG4gICAgICAgICAgICBuZXcgQ29sb3JQaWNrZXIoaW5mby5leHQpLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJvdWdoQ2FudmFzID0gcm91Z2hqcy5jYW52YXModGhpcy5jYW52YXMpIGFzIFJvdWdoQ2FudmFzO1xuICAgIH1cblxuICAgIGF4aXNDb25zdHJ1Y3RvciA9IEF4aXM7XG4gICAgZXZlbnRDb25zdHJ1Y3RvciA9IEV2ZW50O1xufVxuIiwiaW1wb3J0IHsgVGltZWxpbmUsIEV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tICcuLyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkcmF3KFxuICAgIGVsOiBzdHJpbmcgfCBIVE1MRWxlbWVudCxcbiAgICBldmVudHM6VGltZWxpbmVbJ2RyYXdJbmZvJ11bJ2V2ZW50cyddLFxuKTpQcm9taXNlPFRpbWVsaW5lPiB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGNhbnZhcyB9ID0gbW91bnQoZWwpO1xuICAgIGNvbnN0IHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcbiAgICAgICAgY2FudmFzLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGV4dDogbmV3IEV4dGVuc2lvbk1hbmFnZXIsXG4gICAgfSk7XG5cbiAgICB0aW1lbGluZS5kcmF3SW5mby5ldmVudHMgPSBldmVudHM7XG4gICAgYXdhaXQgdGltZWxpbmUuYXBwbHkoKTtcbiAgICB0aW1lbGluZS5kcmF3KCk7XG4gICAgcmV0dXJuIHRpbWVsaW5lO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZHJhd1dpdGhBbmltYXRpb24oXG4gICAgZWw6IHN0cmluZyB8IEhUTUxFbGVtZW50LFxuICAgIGV2ZW50czpUaW1lbGluZVsnZHJhd0luZm8nXVsnZXZlbnRzJ10sXG4pOlByb21pc2U8VGltZWxpbmU+IHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgY2FudmFzIH0gPSBtb3VudChlbCk7XG4gICAgY29uc3QgdGltZWxpbmUgPSBuZXcgVGltZWxpbmUoe1xuICAgICAgICBjYW52YXMsXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgZXh0OiBuZXcgRXh0ZW5zaW9uTWFuYWdlcih7XG4gICAgICAgICAgICBicmVha3BvaW50QW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgcGxheUFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgdGltZWxpbmUuZHJhd0luZm8uZXZlbnRzID0gZXZlbnRzO1xuICAgIGF3YWl0IHRpbWVsaW5lLmFwcGx5KCk7XG4gICAgdGltZWxpbmUuZHJhdygpO1xuICAgIHJldHVybiB0aW1lbGluZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRyYXdGcm9tKFxuICAgIGVsOiBzdHJpbmcgfCBIVE1MRWxlbWVudCxcbiAgICBkYXRhOiBhbnksXG4pOlByb21pc2U8VGltZWxpbmU+IHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgY2FudmFzIH0gPSBtb3VudChlbCk7XG4gICAgY29uc3QgdGltZWxpbmUgPSBuZXcgVGltZWxpbmUoe1xuICAgICAgICBjYW52YXMsXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgZXh0OiBuZXcgRXh0ZW5zaW9uTWFuYWdlcih7XG4gICAgICAgICAgICBicmVha3BvaW50QW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgcGxheUFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdGltZWxpbmUuZHJhd0Zyb20oZGF0YSk7XG4gICAgcmV0dXJuIHRpbWVsaW5lO1xufVxuXG5mdW5jdGlvbiBtb3VudChlbDpzdHJpbmcgfCBFbGVtZW50KSA6e2NvbnRhaW5lcjpIVE1MRWxlbWVudCwgY2FudmFzOkhUTUxDYW52YXNFbGVtZW50fSB7XG4gICAgY29uc3QgY29udGFpbmVyOkhUTUxFbGVtZW50ID0gdHlwZW9mIGVsID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpISBhcyBIVE1MRWxlbWVudFxuICAgICAgICA6IGVsIGFzIEhUTUxFbGVtZW50XG4gICAgO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hvcnQtbmlnaHQnLCAnY29sb3JzJywgJ2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nob3J0LW5pZ2h0JywgJ2NvbG9ycycsICdjYW52YXMnKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBjYW52YXMgfTtcblxufVxuIiwiaW1wb3J0IHsgRXh0ZW5zaW9uLCBFeHRlbnNpb25NYW5hZ2VyIH0gZnJvbSAnQC9lbmdpbmUvZXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBUaW1lbGluZSwgRXZlbnQsIEV2ZW50Qm9keSwgRXZlbnRNYXJrLCBFdmVudEF4aXMsIENvbXBvbmVudCB9IGZyb20gJ0BlbmdpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclBpY2tlciBpbXBsZW1lbnRzIFBhcnRpYWw8RXh0ZW5zaW9uPiB7XG4gICAgY29sb3JzID0gWydyZ2IoMjEzLCA1NywgMzgpJywgJ3JnYigyNTIsIDIwMCwgMjkpJywgJ3JnYigwLCAxNjMsIDIwMSknXTtcbiAgICBzdGFydEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XG4gICAgY29uc3RydWN0b3IocHVibGljIGV0eDpFeHRlbnNpb25NYW5hZ2VyKSB7fVxuICAgIGFzeW5jIG9uQXBwbHkoY29tcDpDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKFRpbWVsaW5lLmlzKGNvbXApKSB0aGlzLmNyZWF0ZUNvbG9yKGNvbXApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBFdmVudEJvZHkuaXMoY29tcClcbiAgICAgICAgICAgIHx8IEV2ZW50TWFyay5pcyhjb21wKVxuICAgICAgICAgICAgfHwgRXZlbnRBeGlzLmlzKGNvbXApXG4gICAgICAgICkgdGhpcy5zZXRDb2xvckludG9EcmF3SW5mbyhjb21wKTtcbiAgICB9XG5cbiAgICBvbkNvbnN0cnVjdChjb21wOkNvbXBvbmVudCkge1xuICAgICAgICBpZiAoRXZlbnQuaXMoY29tcCkpIGNvbXAuZXh0cmFEYXRhLm1haW5Db2xvciA9ICcjMDAwJztcbiAgICB9XG5cbiAgICBzZXRDb2xvckludG9EcmF3SW5mbyhjb21wOkV2ZW50Qm9keXxFdmVudE1hcmt8RXZlbnRBeGlzKSB7XG4gICAgICAgIGNvbnN0IGV0eCA9IHRoaXMuZXR4O1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb21wLmRyYXdJbmZvLCAnbWFpbkNvbG9yJywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldHguZ2V0UGFyZW50KGNvbXApLmV4dHJhRGF0YS5tYWluQ29sb3I7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb2xvcih0aW1lbGluZTpUaW1lbGluZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVsaW5lLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29sb3JJbmRleCA9IChpICsgdGhpcy5zdGFydEluZGV4KSAlIHRoaXMuY29sb3JzLmxlbmd0aDtcbiAgICAgICAgICAgIHRpbWVsaW5lLmV2ZW50c1tpXS5leHRyYURhdGEubWFpbkNvbG9yID0gdGhpcy5jb2xvcnNbY29sb3JJbmRleF07XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJjb25zb2xlLmxvZygn44GK44GkIGNvbG9ycyEnKTtcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaW1lbGluZSB9IGZyb20gJy4vVGltZWxpbmUnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEF4aXMgfSBmcm9tICcuL0F4aXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBeGlzU2NhbGUgfSBmcm9tICcuL0F4aXMvQXhpc1NjYWxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXhpc01pbGVzdG9uZSB9IGZyb20gJy4vQXhpcy9BeGlzTWlsZXN0b25lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXhpc0JvZHkgfSBmcm9tICcuL0F4aXMvQXhpc0JvZHknO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEV2ZW50IH0gZnJvbSAnLi9FdmVudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV2ZW50TWFyayB9IGZyb20gJy4vRXZlbnQvRXZlbnRNYXJrJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXZlbnRBeGlzIH0gZnJvbSAnLi9FdmVudC9FdmVudEF4aXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdmVudEJvZHkgfSBmcm9tICcuL0V2ZW50L0V2ZW50Qm9keSc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tcG9uZW50IH0gZnJvbSAnQGVuZ2luZS9jb21tb24vQ29tcG9uZW50JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2xvclBpY2tlciB9IGZyb20gJy4vZXh0ZW5zaW9ucy9Db2xvclBpY2tlcic7XG5leHBvcnQge1xuICAgIEV4dGVuc2lvbk1hbmFnZXIsXG4gICAgQm94RWxlbWVudEdlbmVyYXRvcixcbiAgICBHZW5lcmF0b3JJZCxcbiAgICBQb3NpdGlvbkNvdW50ZXIsXG4gICAgQnJlYWtwb2ludEFuaW1hdGlvbixcbiAgICBDb25mbGljdEZpeGVyLFxufSBmcm9tICdAZW5naW5lL2V4dGVuc2lvbnMnO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==