/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n:root {\r\n  --background-color: #f2f2f2;\r\n  --nav-color: #2b353e;\r\n  --accent-color: #b8d4e3;\r\n  --hover-color: lightgrey;\r\n  --nav-btn-padding: 6px;\r\n  --border-rad: 10px;\r\n  --pop-up-spacing: 14px;\r\n  --input-padding: 10px;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  background-color: var(--background-color);\r\n  display: grid;\r\n  grid-template: 1fr / 1fr;\r\n}\r\n\r\n/* header */\r\n\r\nheader {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: var(--nav-color);\r\n}\r\n\r\nheader h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\n/* main */\r\nmain {\r\n  display: grid;\r\n  grid-template: 10fr 0.3fr / 0.2fr 1fr;\r\n}\r\n\r\nmain nav {\r\n  font-size: 1.5rem;\r\n  background-color: var(--nav-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 25px;\r\n  gap: 20px;\r\n}\r\n\r\n.visibility {\r\n  visibility: hidden;\r\n  position: absolute;\r\n}\r\nfooter {\r\n  color: black;\r\n  place-self: center;\r\n  grid-area: 2 / 2 / -1 / -1;\r\n}\r\n/* nav */\r\nnav {\r\n  color: white;\r\n  grid-area: 1 / 1 / 3 / 2;\r\n}\r\nnav ul > *,\r\nnav p {\r\n  margin-bottom: 10px;\r\n  list-style: none;\r\n  padding: var(--nav-btn-padding);\r\n  cursor: pointer;\r\n  border-radius: var(--border-rad);\r\n}\r\nnav ul > *:hover {\r\n  background-color: var(--hover-color);\r\n}\r\nnav p {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n}\r\nnav i {\r\n  padding: 10px;\r\n}\r\n\r\n/* nav project */\r\n.project-popup {\r\n  border-radius: var(--border-rad);\r\n  background-color: rgba(128, 128, 128, 0.198);\r\n  padding: 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.project-input {\r\n  font-size: 1.3rem;\r\n  padding: 8px;\r\n  border-radius: var(--border-rad);\r\n  border: none;\r\n  outline: none;\r\n}\r\n.project-btns {\r\n  display: flex;\r\n  margin-top: 8px;\r\n  gap: 1rem;\r\n}\r\n.project-btns > * {\r\n  flex: 1;\r\n  font-size: 1.2rem;\r\n  border-radius: var(--border-rad);\r\n  padding: 8px;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.project-btns > *:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.proj-item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0px 10px;\r\n}\r\n\r\n/* content */\r\n\r\n.content {\r\n  width: 60%;\r\n  height: 90%;\r\n  margin: auto;\r\n  font-size: 1.6rem;\r\n  background-color: white;\r\n  padding: 40px;\r\n  border-radius: var(--border-rad);\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n}\r\n.content-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-end;\r\n  padding: 0px 18px 5px;\r\n  margin-bottom: 10px;\r\n  border-bottom: solid rgba(128, 128, 128, 0.356) 1px;\r\n}\r\n\r\n.add-task {\r\n  text-align: center;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n/* popup */\r\n.task-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgba(128, 128, 128, 0.198);\r\n  border-radius: var(--border-rad);\r\n  padding: var(--pop-up-spacing);\r\n  gap: var(--pop-up-spacing);\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n.task-input {\r\n  display: grid;\r\n  grid-template: 1fr / 1fr 0.1fr;\r\n  gap: 1.8rem;\r\n}\r\n.data-name {\r\n  border: none;\r\n  outline: none;\r\n  padding: var(--input-padding);\r\n  font-size: 1.3rem;\r\n  border-radius: var(--border-rad);\r\n}\r\n.date-input {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: var(--pop-up-spacing);\r\n}\r\n#due-date {\r\n  padding: var(--input-padding);\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.2rem;\r\n  border-radius: var(--border-rad);\r\n}\r\n\r\n.btns {\r\n  display: flex;\r\n\r\n  gap: 1.8rem;\r\n}\r\n.btns > * {\r\n  flex: 1;\r\n  border: none;\r\n  border-radius: var(--border-rad);\r\n  padding: var(--input-padding);\r\n  font-size: 1.4rem;\r\n}\r\n\r\n/* task items */\r\n.task-list {\r\n  list-style: none;\r\n}\r\n\r\n.task-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: var(--input-padding);\r\n  border-radius: var(--border-rad);\r\n  margin: var(--pop-up-spacing) 0;\r\n  padding-right: 10px;\r\n  border-left: 10px solid rgba(0, 0, 255, 0.335);\r\n  background-color: rgba(160, 160, 160, 0.204);\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n\r\n.task-item > * {\r\n  padding: 6px;\r\n}\r\n.is-past {\r\n  border-left: 10px solid rgba(255, 86, 86, 0.54);\r\n}\r\n.task-item .task-name {\r\n  flex: 1;\r\n}\r\n\r\n.task-item .task-check {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 0px 6px;\r\n}\r\n.date-change {\r\n  padding: 7px;\r\n  border-radius: var(--border-rad);\r\n  outline: none;\r\n  border: none;\r\n}\r\n.date-change:hover {\r\n  background-color: var(--hover-color);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n:root {\r\n  --background-color: #f2f2f2;\r\n  --nav-color: #2b353e;\r\n  --accent-color: #b8d4e3;\r\n  --hover-color: lightgrey;\r\n  --nav-btn-padding: 6px;\r\n  --border-rad: 10px;\r\n  --pop-up-spacing: 14px;\r\n  --input-padding: 10px;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  background-color: var(--background-color);\r\n  display: grid;\r\n  grid-template: 1fr / 1fr;\r\n}\r\n\r\n/* header */\r\n\r\nheader {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: var(--nav-color);\r\n}\r\n\r\nheader h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\n/* main */\r\nmain {\r\n  display: grid;\r\n  grid-template: 10fr 0.3fr / 0.2fr 1fr;\r\n}\r\n\r\nmain nav {\r\n  font-size: 1.5rem;\r\n  background-color: var(--nav-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 25px;\r\n  gap: 20px;\r\n}\r\n\r\n.visibility {\r\n  visibility: hidden;\r\n  position: absolute;\r\n}\r\nfooter {\r\n  color: black;\r\n  place-self: center;\r\n  grid-area: 2 / 2 / -1 / -1;\r\n}\r\n/* nav */\r\nnav {\r\n  color: white;\r\n  grid-area: 1 / 1 / 3 / 2;\r\n}\r\nnav ul > *,\r\nnav p {\r\n  margin-bottom: 10px;\r\n  list-style: none;\r\n  padding: var(--nav-btn-padding);\r\n  cursor: pointer;\r\n  border-radius: var(--border-rad);\r\n}\r\nnav ul > *:hover {\r\n  background-color: var(--hover-color);\r\n}\r\nnav p {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n}\r\nnav i {\r\n  padding: 10px;\r\n}\r\n\r\n/* nav project */\r\n.project-popup {\r\n  border-radius: var(--border-rad);\r\n  background-color: rgba(128, 128, 128, 0.198);\r\n  padding: 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.project-input {\r\n  font-size: 1.3rem;\r\n  padding: 8px;\r\n  border-radius: var(--border-rad);\r\n  border: none;\r\n  outline: none;\r\n}\r\n.project-btns {\r\n  display: flex;\r\n  margin-top: 8px;\r\n  gap: 1rem;\r\n}\r\n.project-btns > * {\r\n  flex: 1;\r\n  font-size: 1.2rem;\r\n  border-radius: var(--border-rad);\r\n  padding: 8px;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.project-btns > *:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.proj-item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0px 10px;\r\n}\r\n\r\n/* content */\r\n\r\n.content {\r\n  width: 60%;\r\n  height: 90%;\r\n  margin: auto;\r\n  font-size: 1.6rem;\r\n  background-color: white;\r\n  padding: 40px;\r\n  border-radius: var(--border-rad);\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n}\r\n.content-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-end;\r\n  padding: 0px 18px 5px;\r\n  margin-bottom: 10px;\r\n  border-bottom: solid rgba(128, 128, 128, 0.356) 1px;\r\n}\r\n\r\n.add-task {\r\n  text-align: center;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n/* popup */\r\n.task-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgba(128, 128, 128, 0.198);\r\n  border-radius: var(--border-rad);\r\n  padding: var(--pop-up-spacing);\r\n  gap: var(--pop-up-spacing);\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n.task-input {\r\n  display: grid;\r\n  grid-template: 1fr / 1fr 0.1fr;\r\n  gap: 1.8rem;\r\n}\r\n.data-name {\r\n  border: none;\r\n  outline: none;\r\n  padding: var(--input-padding);\r\n  font-size: 1.3rem;\r\n  border-radius: var(--border-rad);\r\n}\r\n.date-input {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: var(--pop-up-spacing);\r\n}\r\n#due-date {\r\n  padding: var(--input-padding);\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.2rem;\r\n  border-radius: var(--border-rad);\r\n}\r\n\r\n.btns {\r\n  display: flex;\r\n\r\n  gap: 1.8rem;\r\n}\r\n.btns > * {\r\n  flex: 1;\r\n  border: none;\r\n  border-radius: var(--border-rad);\r\n  padding: var(--input-padding);\r\n  font-size: 1.4rem;\r\n}\r\n\r\n/* task items */\r\n.task-list {\r\n  list-style: none;\r\n}\r\n\r\n.task-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: var(--input-padding);\r\n  border-radius: var(--border-rad);\r\n  margin: var(--pop-up-spacing) 0;\r\n  padding-right: 10px;\r\n  border-left: 10px solid rgba(0, 0, 255, 0.335);\r\n  background-color: rgba(160, 160, 160, 0.204);\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n\r\n.task-item > * {\r\n  padding: 6px;\r\n}\r\n.is-past {\r\n  border-left: 10px solid rgba(255, 86, 86, 0.54);\r\n}\r\n.task-item .task-name {\r\n  flex: 1;\r\n}\r\n\r\n.task-item .task-check {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 0px 6px;\r\n}\r\n.date-change {\r\n  padding: 7px;\r\n  border-radius: var(--border-rad);\r\n  outline: none;\r\n  border: none;\r\n}\r\n.date-change:hover {\r\n  background-color: var(--hover-color);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 * 
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * var result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ "./src/project.js");






class UI {
  static content = document.querySelector(".task-content");
  static taskPopup = document.querySelector(".task-popup");
  static addTaskPopUp = document.querySelector(".add-task");
  static todayTab = document.querySelector(".today-tab");
  static weekTab = document.querySelector(".week-tab");
  static addProject = document.querySelector(".add-project");
  static projectPopUp = document.querySelector(".project-popup");
  static addProjectBtn = document.querySelector(".add-project-btn");
  static projectList = document.querySelector(".project-list");
  static cancelProjBtn = document.querySelector(".cancel-project");
  static contentDOM = new _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"](UI.content);
  static toggleVisibility(element) {
    element.classList.toggle("visibility");
  }
  static addTaskToDOM(tasks, color) {
    UI.contentDOM.listElement.innerHTML = "";
    for (let task of tasks) {
      let li = document.createElement("li");
      let checkbox = document.createElement("input");
      let taskName = document.createElement("div");
      let taskDate = document.createElement("div");
      let dateChange = document.createElement("input");
      li.classList.add("task-item");

      checkbox.classList.add("task-check");
      taskName.classList.add("task-name");
      taskDate.classList.add("task-date");
      dateChange.classList.add("date-change");
      dateChange.classList.add("visibility");
      checkbox.setAttribute("type", "checkbox");
      dateChange.setAttribute("type", "date");

      if (color !== "") {
        li.style.borderLeft = `solid 10px ${task.color}`;
      }

      taskName.textContent = task.name;
      taskDate.textContent = task.getFormattedDate();

      li.append(checkbox);
      li.append(taskName);
      li.append(taskDate);
      li.append(dateChange);
      UI.contentDOM.listElement.append(li);
    }
  }
  static addProjectToDOM(projects) {
    UI.projectList.innerHTML = "";
    for (let proj of projects) {
      let li = document.createElement("li");
      let projName = document.createElement("div");
      let deleteBtn = document.createElement("div");
      li.classList.add("proj-item");
      projName.classList.add("proj-name");
      deleteBtn.classList.add("delete-icon");
      deleteBtn.innerHTML = '<i class="fa-solid fa-xmark delete-proj"></i>';

      projName.textContent = proj.name;

      li.append(projName);
      li.append(deleteBtn);
      UI.projectList.append(li);
    }
  }

  static addTaskToProj(project) {
    let nameInput = document.querySelector(".data-name");
    let dateInput = document.querySelector("#due-date");

    let task;

    if (dateInput.value === "") {
      task = new _task_js__WEBPACK_IMPORTED_MODULE_2__["default"](nameInput.value, "No date", project.color);
      project.addTask(task);
    } else {
      task = new _task_js__WEBPACK_IMPORTED_MODULE_2__["default"](nameInput.value, dateInput.value, project.color);
      project.addTask(task);
    }
  }
  static addToTaskData(color) {
    let nameInput = document.querySelector(".data-name");
    let dateInput = document.querySelector("#due-date");

    let task;

    if (dateInput.value === "") {
      task = new _task_js__WEBPACK_IMPORTED_MODULE_2__["default"](nameInput.value, "No date", color);
      UI.contentDOM.addTaskToArr(task);
    } else {
      task = new _task_js__WEBPACK_IMPORTED_MODULE_2__["default"](nameInput.value, dateInput.value, color);
      UI.contentDOM.addTaskToArr(task);
    }
  }

  static updateTaskArr() {
    const listItems = UI.contentDOM.listElement.querySelectorAll("li");
    const contentLabel = document.querySelector(".content-label");

    UI.contentDOM.taskData = [];

    listItems.forEach((e) => {
      let name = e.querySelector(".task-name");
      let date = e.querySelector(".task-date");
      let color;
      name = name.textContent;
      date = date.textContent;
      UI.contentDOM.taskData.push(new _task_js__WEBPACK_IMPORTED_MODULE_2__["default"](name, date, color));
    });
  }
  static deleteProject(event) {
    if (
      event.target.classList.contains("delete-proj") &&
      confirm("Are you sure you want to delete this project?")
    ) {
      const projectName =
        event.target.parentElement.parentElement.querySelector(".proj-name");

      for (let i in UI.contentDOM.projData) {
        if (UI.contentDOM.projData[i].name === projectName.textContent) {
          UI.contentDOM.projData[i].taskArr.forEach((e) => {
            for (let j in UI.contentDOM.taskData) {
              if (UI.contentDOM.taskData[j].name === e.name) {
                UI.contentDOM.taskData.splice(j, 1);
              }
            }
          });
          UI.contentDOM.projData.splice(i, 1);
        }
      }
      event.target.parentElement.parentElement.remove();
      UI.loadHomePage();
    }
  }
  static displayProjectTasks(event) {
    UI.appendAddTaskBtn();
    const addTaskBtn = document.querySelector(".add-task");
    const projectName = event.target.textContent;
    const contentLabel = document.querySelector(".content-label");
    const taskPopUp = document.querySelector(".task-popup");
    const projects = UI.contentDOM.projData;
    if (event.target.nodeName !== "UL" && event.target.nodeName !== "I") {
      contentLabel.textContent = "";
      contentLabel.textContent = projectName;
      if (!UI.taskPopup.classList.contains("visibility")) {
        UI.toggleVisibility(UI.taskPopup);
      }
      addTaskBtn.addEventListener("click", () => {
        UI.toggleVisibility(addTaskBtn);
        UI.toggleVisibility(taskPopUp);
      });
      projects.forEach((e) => {
        if (e.name === projectName) {
          UI.addTaskToDOM(e.taskArr, e.color);
        }
      });
    }
  }
  static removeTask(event) {
    const contentLabel = document.querySelector(".content-label");
    let color;
    if (event.target.type === "checkbox") {
      const taskName = event.target.parentElement.querySelector(".task-name");
      for (let proj of UI.contentDOM.projData) {
        for (let i in proj.taskArr) {
          if (taskName.textContent === proj.taskArr[i].name) {
            proj.taskArr.splice(i, 1);
          }
        }
      }
      for (let i in UI.contentDOM.taskData) {
        if (taskName.textContent === UI.contentDOM.taskData[i].name) {
          UI.contentDOM.taskData.splice(i, 1);
        }
      }
      for (let j in UI.contentDOM.todayData) {
        if (taskName.textContent === UI.contentDOM.todayData[j].name) {
          UI.contentDOM.todayData.splice(j, 1);
        }
      }
      for (let k in UI.contentDOM.weekData) {
        if (taskName.textContent === UI.contentDOM.weekData[k].name) {
          UI.contentDOM.weekData.splice(k, 1);
        }
      }
    } else return;
    for (let proj of UI.contentDOM.projData) {
      if (contentLabel === proj.name) {
        color = proj.color;
      }
    }
    if (contentLabel.textContent === "Home") {
      UI.addTaskToDOM(UI.contentDOM.taskData, color);
    } else if (contentLabel.textContent === "Today") {
      UI.addTaskToDOM(UI.contentDOM.todayData, color);
    } else if (contentLabel.textContent === "This Week") {
      UI.addTaskToDOM(UI.contentDOM.weekData, color);
    } else {
      const contentLabel = document.querySelector(".content-label").textContent;

      for (let proj of UI.contentDOM.projData) {
        if (contentLabel === proj.name) {
          color = proj.color;
        }
      }
      const projTaskArr = UI.contentDOM.projData;
      projTaskArr.forEach((e) => {
        if (contentLabel === e.name) {
          UI.addTaskToDOM(e.taskArr, color);
        }
      });
    }
  }

  static updateDate(event) {
    if (event.target.classList.value === "task-date") {
      let taskDate = event.target.parentElement.querySelector(".task-date");
      let dateChange = event.target.parentElement.querySelector(".date-change");
      let taskName = event.target.parentElement.querySelector(".task-name");
      let contentLabel = document.querySelector(".content-label");

      UI.toggleVisibility(taskDate);
      UI.toggleVisibility(dateChange);
      dateChange.addEventListener("change", (e) => {
        UI.toggleVisibility(taskDate);
        UI.toggleVisibility(dateChange);
        const year = dateChange.value.split("-")[0];
        const month = dateChange.value.split("-")[1];
        const day = dateChange.value.split("-")[2];
        const newDate = `${month}/${day}/${year}`;

        taskDate.textContent = newDate;
        if (
          contentLabel.textContent === "Home" ||
          contentLabel.textContent === "Week" ||
          contentLabel.textContent === "Today"
        ) {
          UI.updateTaskArr();
          UI.contentDOM.filterTodayTasks();
          UI.contentDOM.filterWeekTasks();
          for (let proj of UI.contentDOM.projData) {
            for (let i in proj.taskArr) {
              if (taskName.textContent === proj.taskArr[i].name) {
                proj.taskArr[i].setFormattedDate(dateChange.value);
              }
            }
          }

          e.stopImmediatePropagation();
        } else {
          for (let proj of UI.contentDOM.projData) {
            for (let i in proj.taskArr) {
              if (taskName.textContent === proj.taskArr[i].name) {
                proj.taskArr[i].setFormattedDate(dateChange.value);
                UI.contentDOM.taskData.forEach((e) => {
                  if (taskName.textContent === e.name) {
                    e.setFormattedDate(dateChange.value);
                    UI.contentDOM.filterTodayTasks();
                    UI.contentDOM.filterWeekTasks();
                  }
                });
              }
            }
          }
        }
      });
    }
  }
  static toggleProjectPopUp() {
    UI.toggleVisibility(UI.addProject);
    UI.toggleVisibility(UI.projectPopUp);
  }
  static submitNewProject() {
    const projectInput = document.querySelector(".project-input");
    const projColor = document.querySelector(".proj-color");
    UI.contentDOM.addProjToArr(
      new _project_js__WEBPACK_IMPORTED_MODULE_3__["default"](projectInput.value, projColor.value)
    );

    UI.toggleProjectPopUp();

    UI.addProjectToDOM(UI.contentDOM.projData);
    projectInput.value = "";
  }
  static initBtnEvents() {
    const submitTaskBtn = document.querySelector(".add-btn");
    const cancelTaskBtn = document.querySelector(".cancel-btn");
    const homeTab = document.querySelector(".home-tab");

    UI.contentDOM.listElement.addEventListener("click", UI.removeTask);
    UI.contentDOM.listElement.addEventListener("click", UI.updateDate);
    UI.projectList.addEventListener("click", UI.displayProjectTasks);
    UI.projectList.addEventListener("click", UI.deleteProject);
    homeTab.addEventListener("click", UI.loadHomePage);
    UI.todayTab.addEventListener("click", UI.loadTodayPage);
    UI.weekTab.addEventListener("click", UI.loadWeekPage);
    UI.addProject.addEventListener("click", UI.toggleProjectPopUp);
    UI.cancelProjBtn.addEventListener("click", () => {
      document.querySelector(".project-input").value = "";
      UI.toggleVisibility(UI.projectPopUp);
      UI.toggleVisibility(UI.addProject);
    });
    UI.addProjectBtn.addEventListener("click", UI.submitNewProject);
    UI.addTaskPopUp.addEventListener("click", () => {
      UI.toggleVisibility(this.taskPopup);
      UI.toggleVisibility(this.addTaskPopUp);
    });
    cancelTaskBtn.addEventListener("click", () => {
      const addTaskCont = document.querySelector(".append-btn");

      if (!addTaskCont.classList.contains("visibility")) {
        UI.toggleVisibility(addTaskCont.querySelector(".add-task"));
      }

      UI.toggleVisibility(this.taskPopup);
      document.querySelector(".data-name").value = "";
      document.querySelector("#due-date").value = "";
    });
    submitTaskBtn.addEventListener("click", () => {
      const addTaskCont = document.querySelector(".append-btn");
      const contentLabel = document.querySelector(".content-label");
      let color;

      if (!addTaskCont.classList.contains("visibility")) {
        UI.toggleVisibility(addTaskCont.querySelector(".add-task"));
      }
      for (let proj of UI.contentDOM.projData) {
        if (contentLabel.textContent === proj.name) {
          color = proj.color;
        }
      }
      UI.addToTaskData(color);
      UI.addTaskToDOM(UI.contentDOM.taskData, color);
      UI.updateTaskArr();

      for (let proj of UI.contentDOM.projData) {
        if (proj.name === contentLabel.textContent) {
          UI.addTaskToProj(proj);
          UI.addTaskToDOM(proj.taskArr, proj.color);
        }
      }

      UI.contentDOM.filterTodayTasks();
      UI.contentDOM.filterWeekTasks();
      UI.toggleVisibility(UI.taskPopup);
      document.querySelector(".data-name").value = "";
      document.querySelector("#due-date").value = "";
    });
  }
  static appendAddTaskBtn() {
    const btnContainer = document.querySelector(".append-btn");
    const btn = document.createElement("div");
    btnContainer.innerHTML = "";
    btn.classList.add("add-task");
    btn.textContent = "+ Add Task";
    btnContainer.append(btn);
  }
  static loadHomePage() {
    const contentLabel = document.querySelector(".content-label");
    UI.appendAddTaskBtn();
    const addTask = document.querySelector(".add-task");
    if (!UI.taskPopup.classList.contains("visibility")) {
      UI.toggleVisibility(UI.taskPopup);
    }
    addTask.addEventListener("click", () => {
      UI.toggleVisibility(UI.taskPopup);
      UI.toggleVisibility(addTask);
    });
    contentLabel.textContent = "Home";
    UI.contentDOM.listElement.innerHTML = "";

    UI.addTaskToDOM(UI.contentDOM.taskData);
  }
  static loadTodayPage() {
    const contentLabel = document.querySelector(".content-label");
    const btnContainer = document.querySelector(".append-btn");
    btnContainer.innerHTML = "";
    contentLabel.textContent = "Today";
    if (!UI.taskPopup.classList.contains("visibility")) {
      UI.toggleVisibility(UI.taskPopup);
    }
    UI.contentDOM.listElement.innerHTML = "";

    UI.addTaskToDOM(UI.contentDOM.todayData);
  }
  static loadWeekPage() {
    const contentLabel = document.querySelector(".content-label");
    const btnContainer = document.querySelector(".append-btn");
    btnContainer.innerHTML = "";
    contentLabel.textContent = "This Week";
    if (!UI.taskPopup.classList.contains("visibility")) {
      UI.toggleVisibility(UI.taskPopup);
    }
    UI.contentDOM.listElement.innerHTML = "";

    UI.addTaskToDOM(UI.contentDOM.weekData);
  }
}
UI.initBtnEvents();


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



class Project {
  constructor(name, color = null) {
    this.name = name;
    this.taskArr = [];
    this.color = color;
  }
  addTask(task) {
    this.taskArr.push(task);
  }
  getTask() {
    return this.taskArr;
  }
  getName() {
    return this.name;
  }
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListBinding)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
// export default class Storage {
//   addToStorage(type, dataObj) {
//     localStorage.setItem(type, JSON.stringify(dataObj));
//   }
// }



class ListBinding {
  constructor(element) {
    this.listElement = element;
    this.taskData = [];
    this.projData = [];
    this.todayData;
    this.weekData;
  }
  filterTodayTasks() {
    let today = this.taskData.filter((obj) => {
      if (obj.date === "No date") {
        return false;
      } else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(obj.getDateObject())) {
        return true;
      }
    });
    this.todayData = today;
    return today;
  }
  filterWeekTasks() {
    let week = this.taskData.filter((obj) => {
      if (obj.date === "No date") {
        return false;
      } else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.getDateObject())) {
        return true;
      }
    });
    this.weekData = week;
    return week;
  }
  addTaskToArr(task) {
    this.taskData.push(task);
  }
  addProjToArr(proj) {
    this.projData.push(proj);
  }
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


class Task {
  constructor(name, date = "No date", color = null) {
    this.name = name;
    this.date = date;
    this.color = color;
  }

  getFormattedDate() {
    if (this.date === "No date") {
      return "No date";
    } else if (this.date.includes("/")) {
      return this.date;
    } else {
      const year = this.date.split("-")[0];
      const month = this.date.split("-")[1];
      const day = this.date.split("-")[2];

      return `${month}/${day}/${year}`;
    }
  }
  setColor(color) {
    this.color = color;
  }
  setFormattedDate(date) {
    const year = date.split("-")[0];
    const month = date.split("-")[1];
    const day = date.split("-")[2];
    this.date = `${month}/${day}/${year}`;
  }
  getDateObject() {
    if (this.date === "No date") {
      return "No date";
    } else {
      const year = this.date.split("/")[2];
      const monthIndex = this.date.split("/")[0] - 1;
      const day = this.date.split("/")[1];
      return new Date(year, monthIndex, day);
    }
  }

  getListHTML() {
    return `<li class="task-item">
    <input type="checkbox" class="task-check" />
    <div class="task-name">${this.name}</div>
    <div class="task-date">${this.date}</div>
    <input type="date" class="date-change visibility" />
  </li>`;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksaUdBQWlHLElBQUksSUFBSSxvQkFBb0IsV0FBVyxnQkFBZ0IsaUJBQWlCLDZCQUE2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QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsVUFBVTtBQUN2Qyw2QkFBNkIsVUFBVTtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2xEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxyXFxuICAtLW5hdi1jb2xvcjogIzJiMzUzZTtcXHJcXG4gIC0tYWNjZW50LWNvbG9yOiAjYjhkNGUzO1xcclxcbiAgLS1ob3Zlci1jb2xvcjogbGlnaHRncmV5O1xcclxcbiAgLS1uYXYtYnRuLXBhZGRpbmc6IDZweDtcXHJcXG4gIC0tYm9yZGVyLXJhZDogMTBweDtcXHJcXG4gIC0tcG9wLXVwLXNwYWNpbmc6IDE0cHg7XFxyXFxuICAtLWlucHV0LXBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogaGVhZGVyICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFpbiAqL1xcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDEwZnIgMC4zZnIgLyAwLjJmciAxZnI7XFxyXFxufVxcclxcblxcclxcbm1haW4gbmF2IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMjVweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnZpc2liaWxpdHkge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5mb290ZXIge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0xIC8gLTE7XFxyXFxufVxcclxcbi8qIG5hdiAqL1xcclxcbm5hdiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XFxyXFxufVxcclxcbm5hdiB1bCA+ICosXFxyXFxubmF2IHAge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1uYXYtYnRuLXBhZGRpbmcpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxufVxcclxcbm5hdiB1bCA+ICo6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5uYXYgcCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5uYXYgaSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBuYXYgcHJvamVjdCAqL1xcclxcbi5wcm9qZWN0LXBvcHVwIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE5OCk7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnByb2plY3QtaW5wdXQge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5wcm9qZWN0LWJ0bnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuLnByb2plY3QtYnRucyA+ICoge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4ucHJvamVjdC1idG5zID4gKjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogY29udGVudCAqL1xcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcXHJcXG59XFxyXFxuLmNvbnRlbnQtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICBwYWRkaW5nOiAwcHggMThweCA1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjM1NikgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2sge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogcG9wdXAgKi9cXHJcXG4udGFzay1wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xOTgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wb3AtdXAtc3BhY2luZyk7XFxyXFxuICBnYXA6IHZhcigtLXBvcC11cC1zcGFjaW5nKTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxufVxcclxcbi50YXNrLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMC4xZnI7XFxyXFxuICBnYXA6IDEuOHJlbTtcXHJcXG59XFxyXFxuLmRhdGEtbmFtZSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZyk7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbn1cXHJcXG4uZGF0ZS1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogdmFyKC0tcG9wLXVwLXNwYWNpbmcpO1xcclxcbn1cXHJcXG4jZHVlLWRhdGUge1xcclxcbiAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZyk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gIGdhcDogMS44cmVtO1xcclxcbn1cXHJcXG4uYnRucyA+ICoge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbiAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZyk7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGFzayBpdGVtcyAqL1xcclxcbi50YXNrLWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogdmFyKC0taW5wdXQtcGFkZGluZyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gIG1hcmdpbjogdmFyKC0tcG9wLXVwLXNwYWNpbmcpIDA7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmdiYSgwLCAwLCAyNTUsIDAuMzM1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4yMDQpO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbSA+ICoge1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbn1cXHJcXG4uaXMtcGFzdCB7XFxyXFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2JhKDI1NSwgODYsIDg2LCAwLjU0KTtcXHJcXG59XFxyXFxuLnRhc2staXRlbSAudGFzay1uYW1lIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW0gLnRhc2stY2hlY2sge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW46IDBweCA2cHg7XFxyXFxufVxcclxcbi5kYXRlLWNoYW5nZSB7XFxyXFxuICBwYWRkaW5nOiA3cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5kYXRlLWNoYW5nZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7QUFDQSxRQUFRO0FBQ1I7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCO0FBQ0E7O0VBRUUsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRDQUE0QztFQUM1QyxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFDQTtFQUNFLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBLFlBQVk7O0FBRVo7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMscURBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDRDQUE0QztFQUM1QyxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQiwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7O0VBRWIsV0FBVztBQUNiO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBLGVBQWU7QUFDZjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5Qyw0Q0FBNEM7RUFDNUMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG4gIC0tbmF2LWNvbG9yOiAjMmIzNTNlO1xcclxcbiAgLS1hY2NlbnQtY29sb3I6ICNiOGQ0ZTM7XFxyXFxuICAtLWhvdmVyLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxuICAtLW5hdi1idG4tcGFkZGluZzogNnB4O1xcclxcbiAgLS1ib3JkZXItcmFkOiAxMHB4O1xcclxcbiAgLS1wb3AtdXAtc3BhY2luZzogMTRweDtcXHJcXG4gIC0taW5wdXQtcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoZWFkZXIgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtYWluICovXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogMTBmciAwLjNmciAvIDAuMmZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBuYXYge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtY29sb3IpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udmlzaWJpbGl0eSB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbmZvb3RlciB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICBncmlkLWFyZWE6IDIgLyAyIC8gLTEgLyAtMTtcXHJcXG59XFxyXFxuLyogbmF2ICovXFxyXFxubmF2IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcXHJcXG59XFxyXFxubmF2IHVsID4gKixcXHJcXG5uYXYgcCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLW5hdi1idG4tcGFkZGluZyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG59XFxyXFxubmF2IHVsID4gKjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcbm5hdiBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcbm5hdiBpIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIG5hdiBwcm9qZWN0ICovXFxyXFxuLnByb2plY3QtcG9wdXAge1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTk4KTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ucHJvamVjdC1pbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnByb2plY3QtYnRucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG4ucHJvamVjdC1idG5zID4gKiB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5wcm9qZWN0LWJ0bnMgPiAqOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2otaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250ZW50ICovXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xcclxcbn1cXHJcXG4uY29udGVudC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIHBhZGRpbmc6IDBweCAxOHB4IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzU2KSAxcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwb3B1cCAqL1xcclxcbi50YXNrLXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE5OCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBvcC11cC1zcGFjaW5nKTtcXHJcXG4gIGdhcDogdmFyKC0tcG9wLXVwLXNwYWNpbmcpO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXHJcXG59XFxyXFxuLnRhc2staW5wdXQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAwLjFmcjtcXHJcXG4gIGdhcDogMS44cmVtO1xcclxcbn1cXHJcXG4uZGF0YS1uYW1lIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxufVxcclxcbi5kYXRlLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiB2YXIoLS1wb3AtdXAtc3BhY2luZyk7XFxyXFxufVxcclxcbiNkdWUtZGF0ZSB7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgZ2FwOiAxLjhyZW07XFxyXFxufVxcclxcbi5idG5zID4gKiB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0YXNrIGl0ZW1zICovXFxyXFxuLnRhc2stbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiB2YXIoLS1pbnB1dC1wYWRkaW5nKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbiAgbWFyZ2luOiB2YXIoLS1wb3AtdXAtc3BhY2luZykgMDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2JhKDAsIDAsIDI1NSwgMC4zMzUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjIwNCk7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtID4gKiB7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxufVxcclxcbi5pcy1wYXN0IHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJnYmEoMjU1LCA4NiwgODYsIDAuNTQpO1xcclxcbn1cXHJcXG4udGFzay1pdGVtIC50YXNrLW5hbWUge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbSAudGFzay1jaGVjayB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIG1hcmdpbjogMHB4IDZweDtcXHJcXG59XFxyXFxuLmRhdGUtY2hhbmdlIHtcXHJcXG4gIHBhZGRpbmc6IDdweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLmRhdGUtY2hhbmdlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgTGlzdEJpbmRpbmcgZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcImRhdGUtZm5zL2NvbXBhcmVBc2NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcclxuICBzdGF0aWMgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250ZW50XCIpO1xyXG4gIHN0YXRpYyB0YXNrUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stcG9wdXBcIik7XHJcbiAgc3RhdGljIGFkZFRhc2tQb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XHJcbiAgc3RhdGljIHRvZGF5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS10YWJcIik7XHJcbiAgc3RhdGljIHdlZWtUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlZWstdGFiXCIpO1xyXG4gIHN0YXRpYyBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcclxuICBzdGF0aWMgcHJvamVjdFBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXBvcHVwXCIpO1xyXG4gIHN0YXRpYyBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1idG5cIik7XHJcbiAgc3RhdGljIHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XHJcbiAgc3RhdGljIGNhbmNlbFByb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1wcm9qZWN0XCIpO1xyXG4gIHN0YXRpYyBjb250ZW50RE9NID0gbmV3IExpc3RCaW5kaW5nKFVJLmNvbnRlbnQpO1xyXG4gIHN0YXRpYyB0b2dnbGVWaXNpYmlsaXR5KGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2liaWxpdHlcIik7XHJcbiAgfVxyXG4gIHN0YXRpYyBhZGRUYXNrVG9ET00odGFza3MsIGNvbG9yKSB7XHJcbiAgICBVSS5jb250ZW50RE9NLmxpc3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XHJcbiAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBsZXQgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBsZXQgZGF0ZUNoYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgbGkuY2xhc3NMaXN0LmFkZChcInRhc2staXRlbVwiKTtcclxuXHJcbiAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrXCIpO1xyXG4gICAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIpO1xyXG4gICAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFzay1kYXRlXCIpO1xyXG4gICAgICBkYXRlQ2hhbmdlLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNoYW5nZVwiKTtcclxuICAgICAgZGF0ZUNoYW5nZS5jbGFzc0xpc3QuYWRkKFwidmlzaWJpbGl0eVwiKTtcclxuICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICBkYXRlQ2hhbmdlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xyXG5cclxuICAgICAgaWYgKGNvbG9yICE9PSBcIlwiKSB7XHJcbiAgICAgICAgbGkuc3R5bGUuYm9yZGVyTGVmdCA9IGBzb2xpZCAxMHB4ICR7dGFzay5jb2xvcn1gO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcclxuICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmdldEZvcm1hdHRlZERhdGUoKTtcclxuXHJcbiAgICAgIGxpLmFwcGVuZChjaGVja2JveCk7XHJcbiAgICAgIGxpLmFwcGVuZCh0YXNrTmFtZSk7XHJcbiAgICAgIGxpLmFwcGVuZCh0YXNrRGF0ZSk7XHJcbiAgICAgIGxpLmFwcGVuZChkYXRlQ2hhbmdlKTtcclxuICAgICAgVUkuY29udGVudERPTS5saXN0RWxlbWVudC5hcHBlbmQobGkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgYWRkUHJvamVjdFRvRE9NKHByb2plY3RzKSB7XHJcbiAgICBVSS5wcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgcHJvaiBvZiBwcm9qZWN0cykge1xyXG4gICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGxldCBwcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKFwicHJvai1pdGVtXCIpO1xyXG4gICAgICBwcm9qTmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvai1uYW1lXCIpO1xyXG4gICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1pY29uXCIpO1xyXG4gICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmsgZGVsZXRlLXByb2pcIj48L2k+JztcclxuXHJcbiAgICAgIHByb2pOYW1lLnRleHRDb250ZW50ID0gcHJvai5uYW1lO1xyXG5cclxuICAgICAgbGkuYXBwZW5kKHByb2pOYW1lKTtcclxuICAgICAgbGkuYXBwZW5kKGRlbGV0ZUJ0bik7XHJcbiAgICAgIFVJLnByb2plY3RMaXN0LmFwcGVuZChsaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkVGFza1RvUHJvaihwcm9qZWN0KSB7XHJcbiAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRhLW5hbWVcIik7XHJcbiAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKTtcclxuXHJcbiAgICBsZXQgdGFzaztcclxuXHJcbiAgICBpZiAoZGF0ZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgIHRhc2sgPSBuZXcgVGFzayhuYW1lSW5wdXQudmFsdWUsIFwiTm8gZGF0ZVwiLCBwcm9qZWN0LmNvbG9yKTtcclxuICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFzayA9IG5ldyBUYXNrKG5hbWVJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcm9qZWN0LmNvbG9yKTtcclxuICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2spO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgYWRkVG9UYXNrRGF0YShjb2xvcikge1xyXG4gICAgbGV0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0YS1uYW1lXCIpO1xyXG4gICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIik7XHJcblxyXG4gICAgbGV0IHRhc2s7XHJcblxyXG4gICAgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICB0YXNrID0gbmV3IFRhc2sobmFtZUlucHV0LnZhbHVlLCBcIk5vIGRhdGVcIiwgY29sb3IpO1xyXG4gICAgICBVSS5jb250ZW50RE9NLmFkZFRhc2tUb0Fycih0YXNrKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhc2sgPSBuZXcgVGFzayhuYW1lSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgY29sb3IpO1xyXG4gICAgICBVSS5jb250ZW50RE9NLmFkZFRhc2tUb0Fycih0YXNrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyB1cGRhdGVUYXNrQXJyKCkge1xyXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gVUkuY29udGVudERPTS5saXN0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XHJcbiAgICBjb25zdCBjb250ZW50TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtbGFiZWxcIik7XHJcblxyXG4gICAgVUkuY29udGVudERPTS50YXNrRGF0YSA9IFtdO1xyXG5cclxuICAgIGxpc3RJdGVtcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgIGxldCBuYW1lID0gZS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZVwiKTtcclxuICAgICAgbGV0IGRhdGUgPSBlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kYXRlXCIpO1xyXG4gICAgICBsZXQgY29sb3I7XHJcbiAgICAgIG5hbWUgPSBuYW1lLnRleHRDb250ZW50O1xyXG4gICAgICBkYXRlID0gZGF0ZS50ZXh0Q29udGVudDtcclxuICAgICAgVUkuY29udGVudERPTS50YXNrRGF0YS5wdXNoKG5ldyBUYXNrKG5hbWUsIGRhdGUsIGNvbG9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc3RhdGljIGRlbGV0ZVByb2plY3QoZXZlbnQpIHtcclxuICAgIGlmIChcclxuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1wcm9qXCIpICYmXHJcbiAgICAgIGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcHJvamVjdD9cIilcclxuICAgICkge1xyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2otbmFtZVwiKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgaW4gVUkuY29udGVudERPTS5wcm9qRGF0YSkge1xyXG4gICAgICAgIGlmIChVSS5jb250ZW50RE9NLnByb2pEYXRhW2ldLm5hbWUgPT09IHByb2plY3ROYW1lLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICBVSS5jb250ZW50RE9NLnByb2pEYXRhW2ldLnRhc2tBcnIuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqIGluIFVJLmNvbnRlbnRET00udGFza0RhdGEpIHtcclxuICAgICAgICAgICAgICBpZiAoVUkuY29udGVudERPTS50YXNrRGF0YVtqXS5uYW1lID09PSBlLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIFVJLmNvbnRlbnRET00udGFza0RhdGEuc3BsaWNlKGosIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBVSS5jb250ZW50RE9NLnByb2pEYXRhLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgVUkubG9hZEhvbWVQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBkaXNwbGF5UHJvamVjdFRhc2tzKGV2ZW50KSB7XHJcbiAgICBVSS5hcHBlbmRBZGRUYXNrQnRuKCk7XHJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgY29uc3QgY29udGVudExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWxhYmVsXCIpO1xyXG4gICAgY29uc3QgdGFza1BvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXBvcHVwXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBVSS5jb250ZW50RE9NLnByb2pEYXRhO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSAhPT0gXCJVTFwiICYmIGV2ZW50LnRhcmdldC5ub2RlTmFtZSAhPT0gXCJJXCIpIHtcclxuICAgICAgY29udGVudExhYmVsLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgY29udGVudExhYmVsLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcbiAgICAgIGlmICghVUkudGFza1BvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcInZpc2liaWxpdHlcIikpIHtcclxuICAgICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KFVJLnRhc2tQb3B1cCk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoYWRkVGFza0J0bik7XHJcbiAgICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eSh0YXNrUG9wVXApO1xyXG4gICAgICB9KTtcclxuICAgICAgcHJvamVjdHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLm5hbWUgPT09IHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgICBVSS5hZGRUYXNrVG9ET00oZS50YXNrQXJyLCBlLmNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgcmVtb3ZlVGFzayhldmVudCkge1xyXG4gICAgY29uc3QgY29udGVudExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWxhYmVsXCIpO1xyXG4gICAgbGV0IGNvbG9yO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgY29uc3QgdGFza05hbWUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZVwiKTtcclxuICAgICAgZm9yIChsZXQgcHJvaiBvZiBVSS5jb250ZW50RE9NLnByb2pEYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBwcm9qLnRhc2tBcnIpIHtcclxuICAgICAgICAgIGlmICh0YXNrTmFtZS50ZXh0Q29udGVudCA9PT0gcHJvai50YXNrQXJyW2ldLm5hbWUpIHtcclxuICAgICAgICAgICAgcHJvai50YXNrQXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSBpbiBVSS5jb250ZW50RE9NLnRhc2tEYXRhKSB7XHJcbiAgICAgICAgaWYgKHRhc2tOYW1lLnRleHRDb250ZW50ID09PSBVSS5jb250ZW50RE9NLnRhc2tEYXRhW2ldLm5hbWUpIHtcclxuICAgICAgICAgIFVJLmNvbnRlbnRET00udGFza0RhdGEuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBqIGluIFVJLmNvbnRlbnRET00udG9kYXlEYXRhKSB7XHJcbiAgICAgICAgaWYgKHRhc2tOYW1lLnRleHRDb250ZW50ID09PSBVSS5jb250ZW50RE9NLnRvZGF5RGF0YVtqXS5uYW1lKSB7XHJcbiAgICAgICAgICBVSS5jb250ZW50RE9NLnRvZGF5RGF0YS5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGsgaW4gVUkuY29udGVudERPTS53ZWVrRGF0YSkge1xyXG4gICAgICAgIGlmICh0YXNrTmFtZS50ZXh0Q29udGVudCA9PT0gVUkuY29udGVudERPTS53ZWVrRGF0YVtrXS5uYW1lKSB7XHJcbiAgICAgICAgICBVSS5jb250ZW50RE9NLndlZWtEYXRhLnNwbGljZShrLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSByZXR1cm47XHJcbiAgICBmb3IgKGxldCBwcm9qIG9mIFVJLmNvbnRlbnRET00ucHJvakRhdGEpIHtcclxuICAgICAgaWYgKGNvbnRlbnRMYWJlbCA9PT0gcHJvai5uYW1lKSB7XHJcbiAgICAgICAgY29sb3IgPSBwcm9qLmNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY29udGVudExhYmVsLnRleHRDb250ZW50ID09PSBcIkhvbWVcIikge1xyXG4gICAgICBVSS5hZGRUYXNrVG9ET00oVUkuY29udGVudERPTS50YXNrRGF0YSwgY29sb3IpO1xyXG4gICAgfSBlbHNlIGlmIChjb250ZW50TGFiZWwudGV4dENvbnRlbnQgPT09IFwiVG9kYXlcIikge1xyXG4gICAgICBVSS5hZGRUYXNrVG9ET00oVUkuY29udGVudERPTS50b2RheURhdGEsIGNvbG9yKTtcclxuICAgIH0gZWxzZSBpZiAoY29udGVudExhYmVsLnRleHRDb250ZW50ID09PSBcIlRoaXMgV2Vla1wiKSB7XHJcbiAgICAgIFVJLmFkZFRhc2tUb0RPTShVSS5jb250ZW50RE9NLndlZWtEYXRhLCBjb2xvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjb250ZW50TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtbGFiZWxcIikudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICBmb3IgKGxldCBwcm9qIG9mIFVJLmNvbnRlbnRET00ucHJvakRhdGEpIHtcclxuICAgICAgICBpZiAoY29udGVudExhYmVsID09PSBwcm9qLm5hbWUpIHtcclxuICAgICAgICAgIGNvbG9yID0gcHJvai5jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcHJvalRhc2tBcnIgPSBVSS5jb250ZW50RE9NLnByb2pEYXRhO1xyXG4gICAgICBwcm9qVGFza0Fyci5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnRlbnRMYWJlbCA9PT0gZS5uYW1lKSB7XHJcbiAgICAgICAgICBVSS5hZGRUYXNrVG9ET00oZS50YXNrQXJyLCBjb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyB1cGRhdGVEYXRlKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSA9PT0gXCJ0YXNrLWRhdGVcIikge1xyXG4gICAgICBsZXQgdGFza0RhdGUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGF0ZVwiKTtcclxuICAgICAgbGV0IGRhdGVDaGFuZ2UgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtY2hhbmdlXCIpO1xyXG4gICAgICBsZXQgdGFza05hbWUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZVwiKTtcclxuICAgICAgbGV0IGNvbnRlbnRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1sYWJlbFwiKTtcclxuXHJcbiAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkodGFza0RhdGUpO1xyXG4gICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KGRhdGVDaGFuZ2UpO1xyXG4gICAgICBkYXRlQ2hhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KHRhc2tEYXRlKTtcclxuICAgICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KGRhdGVDaGFuZ2UpO1xyXG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlQ2hhbmdlLnZhbHVlLnNwbGl0KFwiLVwiKVswXTtcclxuICAgICAgICBjb25zdCBtb250aCA9IGRhdGVDaGFuZ2UudmFsdWUuc3BsaXQoXCItXCIpWzFdO1xyXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGVDaGFuZ2UudmFsdWUuc3BsaXQoXCItXCIpWzJdO1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gO1xyXG5cclxuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IG5ld0RhdGU7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgY29udGVudExhYmVsLnRleHRDb250ZW50ID09PSBcIkhvbWVcIiB8fFxyXG4gICAgICAgICAgY29udGVudExhYmVsLnRleHRDb250ZW50ID09PSBcIldlZWtcIiB8fFxyXG4gICAgICAgICAgY29udGVudExhYmVsLnRleHRDb250ZW50ID09PSBcIlRvZGF5XCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIFVJLnVwZGF0ZVRhc2tBcnIoKTtcclxuICAgICAgICAgIFVJLmNvbnRlbnRET00uZmlsdGVyVG9kYXlUYXNrcygpO1xyXG4gICAgICAgICAgVUkuY29udGVudERPTS5maWx0ZXJXZWVrVGFza3MoKTtcclxuICAgICAgICAgIGZvciAobGV0IHByb2ogb2YgVUkuY29udGVudERPTS5wcm9qRGF0YSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHByb2oudGFza0Fycikge1xyXG4gICAgICAgICAgICAgIGlmICh0YXNrTmFtZS50ZXh0Q29udGVudCA9PT0gcHJvai50YXNrQXJyW2ldLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHByb2oudGFza0FycltpXS5zZXRGb3JtYXR0ZWREYXRlKGRhdGVDaGFuZ2UudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvciAobGV0IHByb2ogb2YgVUkuY29udGVudERPTS5wcm9qRGF0YSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHByb2oudGFza0Fycikge1xyXG4gICAgICAgICAgICAgIGlmICh0YXNrTmFtZS50ZXh0Q29udGVudCA9PT0gcHJvai50YXNrQXJyW2ldLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHByb2oudGFza0FycltpXS5zZXRGb3JtYXR0ZWREYXRlKGRhdGVDaGFuZ2UudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgVUkuY29udGVudERPTS50YXNrRGF0YS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0YXNrTmFtZS50ZXh0Q29udGVudCA9PT0gZS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zZXRGb3JtYXR0ZWREYXRlKGRhdGVDaGFuZ2UudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFVJLmNvbnRlbnRET00uZmlsdGVyVG9kYXlUYXNrcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIFVJLmNvbnRlbnRET00uZmlsdGVyV2Vla1Rhc2tzKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyB0b2dnbGVQcm9qZWN0UG9wVXAoKSB7XHJcbiAgICBVSS50b2dnbGVWaXNpYmlsaXR5KFVJLmFkZFByb2plY3QpO1xyXG4gICAgVUkudG9nZ2xlVmlzaWJpbGl0eShVSS5wcm9qZWN0UG9wVXApO1xyXG4gIH1cclxuICBzdGF0aWMgc3VibWl0TmV3UHJvamVjdCgpIHtcclxuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pbnB1dFwiKTtcclxuICAgIGNvbnN0IHByb2pDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvai1jb2xvclwiKTtcclxuICAgIFVJLmNvbnRlbnRET00uYWRkUHJvalRvQXJyKFxyXG4gICAgICBuZXcgUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUsIHByb2pDb2xvci52YWx1ZSlcclxuICAgICk7XHJcblxyXG4gICAgVUkudG9nZ2xlUHJvamVjdFBvcFVwKCk7XHJcblxyXG4gICAgVUkuYWRkUHJvamVjdFRvRE9NKFVJLmNvbnRlbnRET00ucHJvakRhdGEpO1xyXG4gICAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcclxuICB9XHJcbiAgc3RhdGljIGluaXRCdG5FdmVudHMoKSB7XHJcbiAgICBjb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYnRuXCIpO1xyXG4gICAgY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWJ0blwiKTtcclxuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtdGFiXCIpO1xyXG5cclxuICAgIFVJLmNvbnRlbnRET00ubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLnJlbW92ZVRhc2spO1xyXG4gICAgVUkuY29udGVudERPTS5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkudXBkYXRlRGF0ZSk7XHJcbiAgICBVSS5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuZGlzcGxheVByb2plY3RUYXNrcyk7XHJcbiAgICBVSS5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuZGVsZXRlUHJvamVjdCk7XHJcbiAgICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5sb2FkSG9tZVBhZ2UpO1xyXG4gICAgVUkudG9kYXlUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmxvYWRUb2RheVBhZ2UpO1xyXG4gICAgVUkud2Vla1RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkubG9hZFdlZWtQYWdlKTtcclxuICAgIFVJLmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLnRvZ2dsZVByb2plY3RQb3BVcCk7XHJcbiAgICBVSS5jYW5jZWxQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoVUkucHJvamVjdFBvcFVwKTtcclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShVSS5hZGRQcm9qZWN0KTtcclxuICAgIH0pO1xyXG4gICAgVUkuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuc3VibWl0TmV3UHJvamVjdCk7XHJcbiAgICBVSS5hZGRUYXNrUG9wVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eSh0aGlzLnRhc2tQb3B1cCk7XHJcbiAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkodGhpcy5hZGRUYXNrUG9wVXApO1xyXG4gICAgfSk7XHJcbiAgICBjYW5jZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFkZFRhc2tDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBlbmQtYnRuXCIpO1xyXG5cclxuICAgICAgaWYgKCFhZGRUYXNrQ29udC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXNpYmlsaXR5XCIpKSB7XHJcbiAgICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShhZGRUYXNrQ29udC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eSh0aGlzLnRhc2tQb3B1cCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0YS1uYW1lXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxuICAgIHN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgYWRkVGFza0NvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcGVuZC1idG5cIik7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1sYWJlbFwiKTtcclxuICAgICAgbGV0IGNvbG9yO1xyXG5cclxuICAgICAgaWYgKCFhZGRUYXNrQ29udC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXNpYmlsaXR5XCIpKSB7XHJcbiAgICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShhZGRUYXNrQ29udC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBwcm9qIG9mIFVJLmNvbnRlbnRET00ucHJvakRhdGEpIHtcclxuICAgICAgICBpZiAoY29udGVudExhYmVsLnRleHRDb250ZW50ID09PSBwcm9qLm5hbWUpIHtcclxuICAgICAgICAgIGNvbG9yID0gcHJvai5jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgVUkuYWRkVG9UYXNrRGF0YShjb2xvcik7XHJcbiAgICAgIFVJLmFkZFRhc2tUb0RPTShVSS5jb250ZW50RE9NLnRhc2tEYXRhLCBjb2xvcik7XHJcbiAgICAgIFVJLnVwZGF0ZVRhc2tBcnIoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHByb2ogb2YgVUkuY29udGVudERPTS5wcm9qRGF0YSkge1xyXG4gICAgICAgIGlmIChwcm9qLm5hbWUgPT09IGNvbnRlbnRMYWJlbC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgVUkuYWRkVGFza1RvUHJvaihwcm9qKTtcclxuICAgICAgICAgIFVJLmFkZFRhc2tUb0RPTShwcm9qLnRhc2tBcnIsIHByb2ouY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgVUkuY29udGVudERPTS5maWx0ZXJUb2RheVRhc2tzKCk7XHJcbiAgICAgIFVJLmNvbnRlbnRET00uZmlsdGVyV2Vla1Rhc2tzKCk7XHJcbiAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoVUkudGFza1BvcHVwKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRhLW5hbWVcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLnZhbHVlID0gXCJcIjtcclxuICAgIH0pO1xyXG4gIH1cclxuICBzdGF0aWMgYXBwZW5kQWRkVGFza0J0bigpIHtcclxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwZW5kLWJ0blwiKTtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBidG5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2tcIik7XHJcbiAgICBidG4udGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIjtcclxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmQoYnRuKTtcclxuICB9XHJcbiAgc3RhdGljIGxvYWRIb21lUGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1sYWJlbFwiKTtcclxuICAgIFVJLmFwcGVuZEFkZFRhc2tCdG4oKTtcclxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xyXG4gICAgaWYgKCFVSS50YXNrUG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmlzaWJpbGl0eVwiKSkge1xyXG4gICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KFVJLnRhc2tQb3B1cCk7XHJcbiAgICB9XHJcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoVUkudGFza1BvcHVwKTtcclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShhZGRUYXNrKTtcclxuICAgIH0pO1xyXG4gICAgY29udGVudExhYmVsLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICBVSS5jb250ZW50RE9NLmxpc3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgVUkuYWRkVGFza1RvRE9NKFVJLmNvbnRlbnRET00udGFza0RhdGEpO1xyXG4gIH1cclxuICBzdGF0aWMgbG9hZFRvZGF5UGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1sYWJlbFwiKTtcclxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwZW5kLWJ0blwiKTtcclxuICAgIGJ0bkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29udGVudExhYmVsLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gICAgaWYgKCFVSS50YXNrUG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmlzaWJpbGl0eVwiKSkge1xyXG4gICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KFVJLnRhc2tQb3B1cCk7XHJcbiAgICB9XHJcbiAgICBVSS5jb250ZW50RE9NLmxpc3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgVUkuYWRkVGFza1RvRE9NKFVJLmNvbnRlbnRET00udG9kYXlEYXRhKTtcclxuICB9XHJcbiAgc3RhdGljIGxvYWRXZWVrUGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1sYWJlbFwiKTtcclxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwZW5kLWJ0blwiKTtcclxuICAgIGJ0bkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29udGVudExhYmVsLnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWtcIjtcclxuICAgIGlmICghVUkudGFza1BvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcInZpc2liaWxpdHlcIikpIHtcclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShVSS50YXNrUG9wdXApO1xyXG4gICAgfVxyXG4gICAgVUkuY29udGVudERPTS5saXN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIFVJLmFkZFRhc2tUb0RPTShVSS5jb250ZW50RE9NLndlZWtEYXRhKTtcclxuICB9XHJcbn1cclxuVUkuaW5pdEJ0bkV2ZW50cygpO1xyXG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XHJcbmltcG9ydCBVSSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgY29sb3IgPSBudWxsKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50YXNrQXJyID0gW107XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG4gIGFkZFRhc2sodGFzaykge1xyXG4gICAgdGhpcy50YXNrQXJyLnB1c2godGFzayk7XHJcbiAgfVxyXG4gIGdldFRhc2soKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXNrQXJyO1xyXG4gIH1cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcbn1cclxuIiwiLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XHJcbi8vICAgYWRkVG9TdG9yYWdlKHR5cGUsIGRhdGFPYmopIHtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHR5cGUsIEpTT04uc3RyaW5naWZ5KGRhdGFPYmopKTtcclxuLy8gICB9XHJcbi8vIH1cclxuaW1wb3J0IHsgaXNUb2RheSwgaXNUaGlzV2VlayB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuaW1wb3J0IFVJIGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RCaW5kaW5nIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmxpc3RFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMudGFza0RhdGEgPSBbXTtcclxuICAgIHRoaXMucHJvakRhdGEgPSBbXTtcclxuICAgIHRoaXMudG9kYXlEYXRhO1xyXG4gICAgdGhpcy53ZWVrRGF0YTtcclxuICB9XHJcbiAgZmlsdGVyVG9kYXlUYXNrcygpIHtcclxuICAgIGxldCB0b2RheSA9IHRoaXMudGFza0RhdGEuZmlsdGVyKChvYmopID0+IHtcclxuICAgICAgaWYgKG9iai5kYXRlID09PSBcIk5vIGRhdGVcIikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChpc1RvZGF5KG9iai5nZXREYXRlT2JqZWN0KCkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy50b2RheURhdGEgPSB0b2RheTtcclxuICAgIHJldHVybiB0b2RheTtcclxuICB9XHJcbiAgZmlsdGVyV2Vla1Rhc2tzKCkge1xyXG4gICAgbGV0IHdlZWsgPSB0aGlzLnRhc2tEYXRhLmZpbHRlcigob2JqKSA9PiB7XHJcbiAgICAgIGlmIChvYmouZGF0ZSA9PT0gXCJObyBkYXRlXCIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNUaGlzV2VlayhvYmouZ2V0RGF0ZU9iamVjdCgpKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMud2Vla0RhdGEgPSB3ZWVrO1xyXG4gICAgcmV0dXJuIHdlZWs7XHJcbiAgfVxyXG4gIGFkZFRhc2tUb0Fycih0YXNrKSB7XHJcbiAgICB0aGlzLnRhc2tEYXRhLnB1c2godGFzayk7XHJcbiAgfVxyXG4gIGFkZFByb2pUb0Fycihwcm9qKSB7XHJcbiAgICB0aGlzLnByb2pEYXRhLnB1c2gocHJvaik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgZm9ybWF0LCBhZGREYXlzLCBzZXREYXRlLCBpc1RoaXNJU09XZWVrIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUgPSBcIk5vIGRhdGVcIiwgY29sb3IgPSBudWxsKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcblxyXG4gIGdldEZvcm1hdHRlZERhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5kYXRlID09PSBcIk5vIGRhdGVcIikge1xyXG4gICAgICByZXR1cm4gXCJObyBkYXRlXCI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0ZS5pbmNsdWRlcyhcIi9cIikpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmRhdGUuc3BsaXQoXCItXCIpWzBdO1xyXG4gICAgICBjb25zdCBtb250aCA9IHRoaXMuZGF0ZS5zcGxpdChcIi1cIilbMV07XHJcbiAgICAgIGNvbnN0IGRheSA9IHRoaXMuZGF0ZS5zcGxpdChcIi1cIilbMl07XHJcblxyXG4gICAgICByZXR1cm4gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0Q29sb3IoY29sb3IpIHtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcbiAgc2V0Rm9ybWF0dGVkRGF0ZShkYXRlKSB7XHJcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5zcGxpdChcIi1cIilbMF07XHJcbiAgICBjb25zdCBtb250aCA9IGRhdGUuc3BsaXQoXCItXCIpWzFdO1xyXG4gICAgY29uc3QgZGF5ID0gZGF0ZS5zcGxpdChcIi1cIilbMl07XHJcbiAgICB0aGlzLmRhdGUgPSBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gO1xyXG4gIH1cclxuICBnZXREYXRlT2JqZWN0KCkge1xyXG4gICAgaWYgKHRoaXMuZGF0ZSA9PT0gXCJObyBkYXRlXCIpIHtcclxuICAgICAgcmV0dXJuIFwiTm8gZGF0ZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeWVhciA9IHRoaXMuZGF0ZS5zcGxpdChcIi9cIilbMl07XHJcbiAgICAgIGNvbnN0IG1vbnRoSW5kZXggPSB0aGlzLmRhdGUuc3BsaXQoXCIvXCIpWzBdIC0gMTtcclxuICAgICAgY29uc3QgZGF5ID0gdGhpcy5kYXRlLnNwbGl0KFwiL1wiKVsxXTtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoSW5kZXgsIGRheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRMaXN0SFRNTCgpIHtcclxuICAgIHJldHVybiBgPGxpIGNsYXNzPVwidGFzay1pdGVtXCI+XHJcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ0YXNrLWNoZWNrXCIgLz5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLW5hbWVcIj4ke3RoaXMubmFtZX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRhdGVcIj4ke3RoaXMuZGF0ZX08L2Rpdj5cclxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZGF0ZS1jaGFuZ2UgdmlzaWJpbGl0eVwiIC8+XHJcbiAgPC9saT5gO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=