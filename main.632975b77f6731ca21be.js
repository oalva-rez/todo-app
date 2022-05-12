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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n:root {\r\n  --background-color: #f2f2f2;\r\n  --nav-color: #2b353e;\r\n  --accent-color: #b8d4e3;\r\n  --hover-color: lightgrey;\r\n  --nav-btn-padding: 6px;\r\n  --border-rad: 10px;\r\n  --pop-up-spacing: 14px;\r\n  --input-padding: 10px;\r\n  --btn-color: white;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  background-color: var(--background-color);\r\n  display: grid;\r\n  grid-template: 1fr / 1fr;\r\n}\r\n\r\n/* header */\r\n\r\nheader {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--nav-color);\r\n  position: relative;\r\n}\r\n\r\nheader h1 {\r\n  font-size: 3rem;\r\n  font-family: \"Comfortaa\", cursive;\r\n  color: #b6b6f3;\r\n  border-bottom: solid 2px white;\r\n}\r\n.header-icon {\r\n  color: rgb(197, 197, 197);\r\n  position: relative;\r\n  font-size: 2.4rem;\r\n  top: -4px;\r\n}\r\n\r\n/* main */\r\nmain {\r\n  display: grid;\r\n  grid-template: 10fr 0.3fr / 0.2fr 1fr;\r\n}\r\n\r\nmain nav {\r\n  font-size: 1.5rem;\r\n  background-color: var(--nav-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 45px 35px;\r\n  gap: 20px;\r\n}\r\n\r\n.visibility {\r\n  visibility: hidden;\r\n  position: absolute;\r\n}\r\nfooter {\r\n  color: black;\r\n  place-self: center;\r\n  grid-area: 2 / 2 / -1 / -1;\r\n}\r\n/* nav */\r\nnav {\r\n  color: white;\r\n  grid-area: 1 / 1 / 3 / 2;\r\n}\r\n\r\nnav > *:not(header) {\r\n  margin-top: 30px;\r\n}\r\n\r\nnav ul > *,\r\nnav p {\r\n  margin-bottom: 13px;\r\n  list-style: none;\r\n  padding: var(--nav-btn-padding);\r\n  cursor: pointer;\r\n  border-radius: var(--border-rad);\r\n}\r\nnav ul > *:hover {\r\n  background-color: lightslategrey;\r\n}\r\nnav p {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n}\r\nnav i {\r\n  padding: 10px;\r\n}\r\n\r\n/* nav project */\r\n.project-popup {\r\n  border-radius: var(--border-rad);\r\n  background-color: #f2f2f22c;\r\n  padding: 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.add-project {\r\n  cursor: pointer;\r\n}\r\n.project-input {\r\n  font-size: 1.3rem;\r\n  padding: 8px;\r\n  border-radius: var(--border-rad);\r\n  border: none;\r\n  outline: none;\r\n}\r\n.project-btns {\r\n  display: flex;\r\n  margin-top: 8px;\r\n  gap: 1rem;\r\n}\r\n.project-btns > * {\r\n  flex: 1;\r\n  font-size: 1.2rem;\r\n  border-radius: var(--border-rad);\r\n  padding: 8px;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.project-btns > *:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.proj-item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0px 10px;\r\n}\r\n\r\n/* content */\r\n\r\n.content {\r\n  width: 60%;\r\n  height: 90%;\r\n  margin: auto;\r\n  font-size: 1.6rem;\r\n  background-color: white;\r\n  padding: 40px;\r\n  border-radius: var(--border-rad);\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n}\r\n.content-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-end;\r\n  padding: 0px 18px 5px;\r\n  margin-bottom: 10px;\r\n  border-bottom: solid rgba(128, 128, 128, 0.356) 1px;\r\n}\r\n\r\n.add-task {\r\n  text-align: center;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n/* popup */\r\n.task-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgba(128, 128, 128, 0.198);\r\n  border-radius: var(--border-rad);\r\n  padding: var(--pop-up-spacing);\r\n  gap: var(--pop-up-spacing);\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n.task-input {\r\n  display: grid;\r\n  grid-template: 1fr / 1fr 0.1fr;\r\n  gap: 1.8rem;\r\n}\r\n.data-name {\r\n  border: none;\r\n  outline: none;\r\n  padding: var(--input-padding);\r\n  font-size: 1.3rem;\r\n  border-radius: var(--border-rad);\r\n}\r\n.date-input {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: var(--pop-up-spacing);\r\n}\r\n#due-date {\r\n  padding: var(--input-padding);\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.2rem;\r\n  border-radius: var(--border-rad);\r\n}\r\n\r\n.btns {\r\n  display: flex;\r\n\r\n  gap: 1.8rem;\r\n}\r\n.btns > * {\r\n  flex: 1;\r\n  border: none;\r\n  border-radius: var(--border-rad);\r\n  padding: var(--input-padding);\r\n  font-size: 1.4rem;\r\n}\r\n\r\n/* task items */\r\n.task-list {\r\n  list-style: none;\r\n}\r\n\r\n.task-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: var(--input-padding);\r\n  border-radius: var(--border-rad);\r\n  margin: var(--pop-up-spacing) 0;\r\n  padding-right: 10px;\r\n  border-left: 10px solid rgba(0, 0, 255, 0.335);\r\n  background-color: rgba(160, 160, 160, 0.204);\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n\r\n.task-item > * {\r\n  padding: 6px;\r\n}\r\n.is-past {\r\n  border-left: 10px solid rgba(255, 86, 86, 0.54);\r\n}\r\n.task-item .task-name {\r\n  flex: 1;\r\n}\r\n\r\n.task-item .task-check {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 0px 6px;\r\n}\r\n.date-change {\r\n  padding: 7px;\r\n  border-radius: var(--border-rad);\r\n  outline: none;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n.date-change:hover {\r\n  background-color: var(--hover-color);\r\n}\r\n\r\n.add-btn,\r\n.add-project-btn,\r\n.cancel-btn,\r\n.cancel-project {\r\n  cursor: pointer;\r\n  background-color: var(--btn-color);\r\n  border: 1px solid lightgrey;\r\n}\r\n\r\n.add-btn:hover,\r\n.add-project-btn:hover,\r\n.cancel-btn:hover,\r\n.cancel-project:hover {\r\n  background-color: rgb(244, 244, 244);\r\n  border: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap\");\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n:root {\r\n  --background-color: #f2f2f2;\r\n  --nav-color: #2b353e;\r\n  --accent-color: #b8d4e3;\r\n  --hover-color: lightgrey;\r\n  --nav-btn-padding: 6px;\r\n  --border-rad: 10px;\r\n  --pop-up-spacing: 14px;\r\n  --input-padding: 10px;\r\n  --btn-color: white;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  background-color: var(--background-color);\r\n  display: grid;\r\n  grid-template: 1fr / 1fr;\r\n}\r\n\r\n/* header */\r\n\r\nheader {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--nav-color);\r\n  position: relative;\r\n}\r\n\r\nheader h1 {\r\n  font-size: 3rem;\r\n  font-family: \"Comfortaa\", cursive;\r\n  color: #b6b6f3;\r\n  border-bottom: solid 2px white;\r\n}\r\n.header-icon {\r\n  color: rgb(197, 197, 197);\r\n  position: relative;\r\n  font-size: 2.4rem;\r\n  top: -4px;\r\n}\r\n\r\n/* main */\r\nmain {\r\n  display: grid;\r\n  grid-template: 10fr 0.3fr / 0.2fr 1fr;\r\n}\r\n\r\nmain nav {\r\n  font-size: 1.5rem;\r\n  background-color: var(--nav-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 45px 35px;\r\n  gap: 20px;\r\n}\r\n\r\n.visibility {\r\n  visibility: hidden;\r\n  position: absolute;\r\n}\r\nfooter {\r\n  color: black;\r\n  place-self: center;\r\n  grid-area: 2 / 2 / -1 / -1;\r\n}\r\n/* nav */\r\nnav {\r\n  color: white;\r\n  grid-area: 1 / 1 / 3 / 2;\r\n}\r\n\r\nnav > *:not(header) {\r\n  margin-top: 30px;\r\n}\r\n\r\nnav ul > *,\r\nnav p {\r\n  margin-bottom: 13px;\r\n  list-style: none;\r\n  padding: var(--nav-btn-padding);\r\n  cursor: pointer;\r\n  border-radius: var(--border-rad);\r\n}\r\nnav ul > *:hover {\r\n  background-color: lightslategrey;\r\n}\r\nnav p {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n}\r\nnav i {\r\n  padding: 10px;\r\n}\r\n\r\n/* nav project */\r\n.project-popup {\r\n  border-radius: var(--border-rad);\r\n  background-color: #f2f2f22c;\r\n  padding: 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.add-project {\r\n  cursor: pointer;\r\n}\r\n.project-input {\r\n  font-size: 1.3rem;\r\n  padding: 8px;\r\n  border-radius: var(--border-rad);\r\n  border: none;\r\n  outline: none;\r\n}\r\n.project-btns {\r\n  display: flex;\r\n  margin-top: 8px;\r\n  gap: 1rem;\r\n}\r\n.project-btns > * {\r\n  flex: 1;\r\n  font-size: 1.2rem;\r\n  border-radius: var(--border-rad);\r\n  padding: 8px;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.project-btns > *:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.proj-item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0px 10px;\r\n}\r\n\r\n/* content */\r\n\r\n.content {\r\n  width: 60%;\r\n  height: 90%;\r\n  margin: auto;\r\n  font-size: 1.6rem;\r\n  background-color: white;\r\n  padding: 40px;\r\n  border-radius: var(--border-rad);\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n}\r\n.content-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-end;\r\n  padding: 0px 18px 5px;\r\n  margin-bottom: 10px;\r\n  border-bottom: solid rgba(128, 128, 128, 0.356) 1px;\r\n}\r\n\r\n.add-task {\r\n  text-align: center;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n/* popup */\r\n.task-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgba(128, 128, 128, 0.198);\r\n  border-radius: var(--border-rad);\r\n  padding: var(--pop-up-spacing);\r\n  gap: var(--pop-up-spacing);\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n.task-input {\r\n  display: grid;\r\n  grid-template: 1fr / 1fr 0.1fr;\r\n  gap: 1.8rem;\r\n}\r\n.data-name {\r\n  border: none;\r\n  outline: none;\r\n  padding: var(--input-padding);\r\n  font-size: 1.3rem;\r\n  border-radius: var(--border-rad);\r\n}\r\n.date-input {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: var(--pop-up-spacing);\r\n}\r\n#due-date {\r\n  padding: var(--input-padding);\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.2rem;\r\n  border-radius: var(--border-rad);\r\n}\r\n\r\n.btns {\r\n  display: flex;\r\n\r\n  gap: 1.8rem;\r\n}\r\n.btns > * {\r\n  flex: 1;\r\n  border: none;\r\n  border-radius: var(--border-rad);\r\n  padding: var(--input-padding);\r\n  font-size: 1.4rem;\r\n}\r\n\r\n/* task items */\r\n.task-list {\r\n  list-style: none;\r\n}\r\n\r\n.task-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: var(--input-padding);\r\n  border-radius: var(--border-rad);\r\n  margin: var(--pop-up-spacing) 0;\r\n  padding-right: 10px;\r\n  border-left: 10px solid rgba(0, 0, 255, 0.335);\r\n  background-color: rgba(160, 160, 160, 0.204);\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n\r\n.task-item > * {\r\n  padding: 6px;\r\n}\r\n.is-past {\r\n  border-left: 10px solid rgba(255, 86, 86, 0.54);\r\n}\r\n.task-item .task-name {\r\n  flex: 1;\r\n}\r\n\r\n.task-item .task-check {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 0px 6px;\r\n}\r\n.date-change {\r\n  padding: 7px;\r\n  border-radius: var(--border-rad);\r\n  outline: none;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n.date-change:hover {\r\n  background-color: var(--hover-color);\r\n}\r\n\r\n.add-btn,\r\n.add-project-btn,\r\n.cancel-btn,\r\n.cancel-project {\r\n  cursor: pointer;\r\n  background-color: var(--btn-color);\r\n  border: 1px solid lightgrey;\r\n}\r\n\r\n.add-btn:hover,\r\n.add-project-btn:hover,\r\n.cancel-btn:hover,\r\n.cancel-project:hover {\r\n  background-color: rgb(244, 244, 244);\r\n  border: none;\r\n}\r\n"],"sourceRoot":""}]);
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
  static addTaskToDOM(tasks) {
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
      task = new _task_js__WEBPACK_IMPORTED_MODULE_2__["default"](nameInput.value, "No date");
      project.addTask(task);
    } else {
      task = new _task_js__WEBPACK_IMPORTED_MODULE_2__["default"](nameInput.value, dateInput.value);
      project.addTask(task);
    }
  }
  static addToTaskData() {
    let nameInput = document.querySelector(".data-name");
    let dateInput = document.querySelector("#due-date");

    let task;

    if (dateInput.value === "") {
      task = new _task_js__WEBPACK_IMPORTED_MODULE_2__["default"](nameInput.value, "No date");
      UI.contentDOM.addTaskToArr(task);
    } else {
      task = new _task_js__WEBPACK_IMPORTED_MODULE_2__["default"](nameInput.value, dateInput.value);
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
      name = name.textContent;
      date = date.textContent;
      UI.contentDOM.taskData.push(new _task_js__WEBPACK_IMPORTED_MODULE_2__["default"](name, date));
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
          UI.addTaskToDOM(e.taskArr);
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

    if (contentLabel.textContent === "Home") {
      UI.addTaskToDOM(UI.contentDOM.taskData, color);
    } else if (contentLabel.textContent === "Today") {
      UI.addTaskToDOM(UI.contentDOM.todayData, color);
    } else if (contentLabel.textContent === "This Week") {
      UI.addTaskToDOM(UI.contentDOM.weekData, color);
    } else {
      const contentLabel = document.querySelector(".content-label").textContent;
      const projTaskArr = UI.contentDOM.projData;
      projTaskArr.forEach((e) => {
        if (contentLabel === e.name) {
          UI.addTaskToDOM(e.taskArr);
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
        console.log(contentLabel.textContent);

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
    UI.contentDOM.addProjToArr(new _project_js__WEBPACK_IMPORTED_MODULE_3__["default"](projectInput.value));

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

      if (!addTaskCont.classList.contains("visibility")) {
        UI.toggleVisibility(addTaskCont.querySelector(".add-task"));
      }

      UI.addToTaskData();
      UI.addTaskToDOM(UI.contentDOM.taskData);
      UI.updateTaskArr();

      for (let proj of UI.contentDOM.projData) {
        if (proj.name === contentLabel.textContent) {
          UI.addTaskToProj(proj);
          UI.addTaskToDOM(proj.taskArr);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFP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QUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxtREFBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvWDZCO0FBQ0Q7QUFDNUI7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0M7QUFDL0M7QUFDNEI7QUFDYjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFNBQVMsb0RBQU87QUFDeEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsU0FBUyxvREFBVTtBQUMzQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNnQztBQUNtQztBQUNwRDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixVQUFVO0FBQ3ZDLDZCQUE2QixVQUFVO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbWZvcnRhYTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxyXFxuICAtLW5hdi1jb2xvcjogIzJiMzUzZTtcXHJcXG4gIC0tYWNjZW50LWNvbG9yOiAjYjhkNGUzO1xcclxcbiAgLS1ob3Zlci1jb2xvcjogbGlnaHRncmV5O1xcclxcbiAgLS1uYXYtYnRuLXBhZGRpbmc6IDZweDtcXHJcXG4gIC0tYm9yZGVyLXJhZDogMTBweDtcXHJcXG4gIC0tcG9wLXVwLXNwYWNpbmc6IDE0cHg7XFxyXFxuICAtLWlucHV0LXBhZGRpbmc6IDEwcHg7XFxyXFxuICAtLWJ0bi1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogaGVhZGVyICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtY29sb3IpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDb21mb3J0YWFcXFwiLCBjdXJzaXZlO1xcclxcbiAgY29sb3I6ICNiNmI2ZjM7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggd2hpdGU7XFxyXFxufVxcclxcbi5oZWFkZXItaWNvbiB7XFxyXFxuICBjb2xvcjogcmdiKDE5NywgMTk3LCAxOTcpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1zaXplOiAyLjRyZW07XFxyXFxuICB0b3A6IC00cHg7XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4gKi9cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxMGZyIDAuM2ZyIC8gMC4yZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIG5hdiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1jb2xvcik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDQ1cHggMzVweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnZpc2liaWxpdHkge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5mb290ZXIge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0xIC8gLTE7XFxyXFxufVxcclxcbi8qIG5hdiAqL1xcclxcbm5hdiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XFxyXFxufVxcclxcblxcclxcbm5hdiA+ICo6bm90KGhlYWRlcikge1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsID4gKixcXHJcXG5uYXYgcCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLW5hdi1idG4tcGFkZGluZyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG59XFxyXFxubmF2IHVsID4gKjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JleTtcXHJcXG59XFxyXFxubmF2IHAge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxubmF2IGkge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogbmF2IHByb2plY3QgKi9cXHJcXG4ucHJvamVjdC1wb3B1cCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIyYztcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3Qge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvamVjdC1pbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnByb2plY3QtYnRucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG4ucHJvamVjdC1idG5zID4gKiB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5wcm9qZWN0LWJ0bnMgPiAqOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2otaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250ZW50ICovXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xcclxcbn1cXHJcXG4uY29udGVudC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIHBhZGRpbmc6IDBweCAxOHB4IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzU2KSAxcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwb3B1cCAqL1xcclxcbi50YXNrLXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE5OCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBvcC11cC1zcGFjaW5nKTtcXHJcXG4gIGdhcDogdmFyKC0tcG9wLXVwLXNwYWNpbmcpO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXHJcXG59XFxyXFxuLnRhc2staW5wdXQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAwLjFmcjtcXHJcXG4gIGdhcDogMS44cmVtO1xcclxcbn1cXHJcXG4uZGF0YS1uYW1lIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxufVxcclxcbi5kYXRlLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiB2YXIoLS1wb3AtdXAtc3BhY2luZyk7XFxyXFxufVxcclxcbiNkdWUtZGF0ZSB7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgZ2FwOiAxLjhyZW07XFxyXFxufVxcclxcbi5idG5zID4gKiB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0YXNrIGl0ZW1zICovXFxyXFxuLnRhc2stbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiB2YXIoLS1pbnB1dC1wYWRkaW5nKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbiAgbWFyZ2luOiB2YXIoLS1wb3AtdXAtc3BhY2luZykgMDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2JhKDAsIDAsIDI1NSwgMC4zMzUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjIwNCk7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtID4gKiB7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxufVxcclxcbi5pcy1wYXN0IHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJnYmEoMjU1LCA4NiwgODYsIDAuNTQpO1xcclxcbn1cXHJcXG4udGFzay1pdGVtIC50YXNrLW5hbWUge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbSAudGFzay1jaGVjayB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIG1hcmdpbjogMHB4IDZweDtcXHJcXG59XFxyXFxuLmRhdGUtY2hhbmdlIHtcXHJcXG4gIHBhZGRpbmc6IDdweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmRhdGUtY2hhbmdlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idG4sXFxyXFxuLmFkZC1wcm9qZWN0LWJ0bixcXHJcXG4uY2FuY2VsLWJ0bixcXHJcXG4uY2FuY2VsLXByb2plY3Qge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idG46aG92ZXIsXFxyXFxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlcixcXHJcXG4uY2FuY2VsLWJ0bjpob3ZlcixcXHJcXG4uY2FuY2VsLXByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjQ0LCAyNDQpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFD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RUFDbkIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5Qyw0Q0FBNEM7RUFDNUMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTs7OztFQUlFLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsMkJBQTJCO0FBQzdCOztBQUVBOzs7O0VBSUUsb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tZm9ydGFhOndnaHRANzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG4gIC0tbmF2LWNvbG9yOiAjMmIzNTNlO1xcclxcbiAgLS1hY2NlbnQtY29sb3I6ICNiOGQ0ZTM7XFxyXFxuICAtLWhvdmVyLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxuICAtLW5hdi1idG4tcGFkZGluZzogNnB4O1xcclxcbiAgLS1ib3JkZXItcmFkOiAxMHB4O1xcclxcbiAgLS1wb3AtdXAtc3BhY2luZzogMTRweDtcXHJcXG4gIC0taW5wdXQtcGFkZGluZzogMTBweDtcXHJcXG4gIC0tYnRuLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoZWFkZXIgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1jb2xvcik7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBoMSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBmb250LWZhbWlseTogXFxcIkNvbWZvcnRhYVxcXCIsIGN1cnNpdmU7XFxyXFxuICBjb2xvcjogI2I2YjZmMztcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB3aGl0ZTtcXHJcXG59XFxyXFxuLmhlYWRlci1pY29uIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTk3LCAxOTcsIDE5Nyk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gIHRvcDogLTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFpbiAqL1xcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDEwZnIgMC4zZnIgLyAwLjJmciAxZnI7XFxyXFxufVxcclxcblxcclxcbm1haW4gbmF2IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogNDVweCAzNXB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udmlzaWJpbGl0eSB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbmZvb3RlciB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICBncmlkLWFyZWE6IDIgLyAyIC8gLTEgLyAtMTtcXHJcXG59XFxyXFxuLyogbmF2ICovXFxyXFxubmF2IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcXHJcXG59XFxyXFxuXFxyXFxubmF2ID4gKjpub3QoaGVhZGVyKSB7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgPiAqLFxcclxcbm5hdiBwIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogdmFyKC0tbmF2LWJ0bi1wYWRkaW5nKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbn1cXHJcXG5uYXYgdWwgPiAqOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xcclxcbn1cXHJcXG5uYXYgcCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5uYXYgaSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBuYXYgcHJvamVjdCAqL1xcclxcbi5wcm9qZWN0LXBvcHVwIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjJjO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5wcm9qZWN0LWlucHV0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4ucHJvamVjdC1idG5zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0LWJ0bnMgPiAqIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnByb2plY3QtYnRucyA+ICo6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvai1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbnRlbnQgKi9cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XFxyXFxufVxcclxcbi5jb250ZW50LWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgcGFkZGluZzogMHB4IDE4cHggNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zNTYpIDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIHBvcHVwICovXFxyXFxuLnRhc2stcG9wdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTk4KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbiAgcGFkZGluZzogdmFyKC0tcG9wLXVwLXNwYWNpbmcpO1xcclxcbiAgZ2FwOiB2YXIoLS1wb3AtdXAtc3BhY2luZyk7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcclxcbn1cXHJcXG4udGFzay1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDAuMWZyO1xcclxcbiAgZ2FwOiAxLjhyZW07XFxyXFxufVxcclxcbi5kYXRhLW5hbWUge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLWlucHV0LXBhZGRpbmcpO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG59XFxyXFxuLmRhdGUtaW5wdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IHZhcigtLXBvcC11cC1zcGFjaW5nKTtcXHJcXG59XFxyXFxuI2R1ZS1kYXRlIHtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLWlucHV0LXBhZGRpbmcpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxufVxcclxcblxcclxcbi5idG5zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICBnYXA6IDEuOHJlbTtcXHJcXG59XFxyXFxuLmJ0bnMgPiAqIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLWlucHV0LXBhZGRpbmcpO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbi8qIHRhc2sgaXRlbXMgKi9cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IHZhcigtLWlucHV0LXBhZGRpbmcpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICBtYXJnaW46IHZhcigtLXBvcC11cC1zcGFjaW5nKSAwO1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJnYmEoMCwgMCwgMjU1LCAwLjMzNSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMjA0KTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW0gPiAqIHtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG59XFxyXFxuLmlzLXBhc3Qge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmdiYSgyNTUsIDg2LCA4NiwgMC41NCk7XFxyXFxufVxcclxcbi50YXNrLWl0ZW0gLnRhc2stbmFtZSB7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtIC50YXNrLWNoZWNrIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiAwcHggNnB4O1xcclxcbn1cXHJcXG4uZGF0ZS1jaGFuZ2Uge1xcclxcbiAgcGFkZGluZzogN3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZGF0ZS1jaGFuZ2U6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0bixcXHJcXG4uYWRkLXByb2plY3QtYnRuLFxcclxcbi5jYW5jZWwtYnRuLFxcclxcbi5jYW5jZWwtcHJvamVjdCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29sb3IpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0bjpob3ZlcixcXHJcXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyLFxcclxcbi5jYW5jZWwtYnRuOmhvdmVyLFxcclxcbi5jYW5jZWwtcHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyNDQsIDI0NCk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IExpc3RCaW5kaW5nIGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCBjb21wYXJlQXNjIGZyb20gXCJkYXRlLWZucy9jb21wYXJlQXNjXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XHJcbiAgc3RhdGljIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGVudFwiKTtcclxuICBzdGF0aWMgdGFza1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXBvcHVwXCIpO1xyXG4gIHN0YXRpYyBhZGRUYXNrUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xyXG4gIHN0YXRpYyB0b2RheVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktdGFiXCIpO1xyXG4gIHN0YXRpYyB3ZWVrVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWVrLXRhYlwiKTtcclxuICBzdGF0aWMgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XHJcbiAgc3RhdGljIHByb2plY3RQb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1wb3B1cFwiKTtcclxuICBzdGF0aWMgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtYnRuXCIpO1xyXG4gIHN0YXRpYyBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xyXG4gIHN0YXRpYyBjYW5jZWxQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtcHJvamVjdFwiKTtcclxuICBzdGF0aWMgY29udGVudERPTSA9IG5ldyBMaXN0QmluZGluZyhVSS5jb250ZW50KTtcclxuICBzdGF0aWMgdG9nZ2xlVmlzaWJpbGl0eShlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmlsaXR5XCIpO1xyXG4gIH1cclxuICBzdGF0aWMgYWRkVGFza1RvRE9NKHRhc2tzKSB7XHJcbiAgICBVSS5jb250ZW50RE9NLmxpc3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XHJcbiAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBsZXQgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBsZXQgZGF0ZUNoYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgbGkuY2xhc3NMaXN0LmFkZChcInRhc2staXRlbVwiKTtcclxuXHJcbiAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrXCIpO1xyXG4gICAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIpO1xyXG4gICAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFzay1kYXRlXCIpO1xyXG4gICAgICBkYXRlQ2hhbmdlLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNoYW5nZVwiKTtcclxuICAgICAgZGF0ZUNoYW5nZS5jbGFzc0xpc3QuYWRkKFwidmlzaWJpbGl0eVwiKTtcclxuICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICBkYXRlQ2hhbmdlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xyXG5cclxuICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XHJcbiAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5nZXRGb3JtYXR0ZWREYXRlKCk7XHJcblxyXG4gICAgICBsaS5hcHBlbmQoY2hlY2tib3gpO1xyXG4gICAgICBsaS5hcHBlbmQodGFza05hbWUpO1xyXG4gICAgICBsaS5hcHBlbmQodGFza0RhdGUpO1xyXG4gICAgICBsaS5hcHBlbmQoZGF0ZUNoYW5nZSk7XHJcbiAgICAgIFVJLmNvbnRlbnRET00ubGlzdEVsZW1lbnQuYXBwZW5kKGxpKTtcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGljIGFkZFByb2plY3RUb0RPTShwcm9qZWN0cykge1xyXG4gICAgVUkucHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IHByb2ogb2YgcHJvamVjdHMpIHtcclxuICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBsZXQgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbGkuY2xhc3NMaXN0LmFkZChcInByb2otaXRlbVwiKTtcclxuICAgICAgcHJvak5hbWUuY2xhc3NMaXN0LmFkZChcInByb2otbmFtZVwiKTtcclxuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtaWNvblwiKTtcclxuICAgICAgZGVsZXRlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrIGRlbGV0ZS1wcm9qXCI+PC9pPic7XHJcblxyXG4gICAgICBwcm9qTmFtZS50ZXh0Q29udGVudCA9IHByb2oubmFtZTtcclxuXHJcbiAgICAgIGxpLmFwcGVuZChwcm9qTmFtZSk7XHJcbiAgICAgIGxpLmFwcGVuZChkZWxldGVCdG4pO1xyXG4gICAgICBVSS5wcm9qZWN0TGlzdC5hcHBlbmQobGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZFRhc2tUb1Byb2oocHJvamVjdCkge1xyXG4gICAgbGV0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0YS1uYW1lXCIpO1xyXG4gICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIik7XHJcblxyXG4gICAgbGV0IHRhc2s7XHJcblxyXG4gICAgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICB0YXNrID0gbmV3IFRhc2sobmFtZUlucHV0LnZhbHVlLCBcIk5vIGRhdGVcIik7XHJcbiAgICAgIHByb2plY3QuYWRkVGFzayh0YXNrKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhc2sgPSBuZXcgVGFzayhuYW1lSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSk7XHJcbiAgICAgIHByb2plY3QuYWRkVGFzayh0YXNrKTtcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGljIGFkZFRvVGFza0RhdGEoKSB7XHJcbiAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRhLW5hbWVcIik7XHJcbiAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKTtcclxuXHJcbiAgICBsZXQgdGFzaztcclxuXHJcbiAgICBpZiAoZGF0ZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgIHRhc2sgPSBuZXcgVGFzayhuYW1lSW5wdXQudmFsdWUsIFwiTm8gZGF0ZVwiKTtcclxuICAgICAgVUkuY29udGVudERPTS5hZGRUYXNrVG9BcnIodGFzayk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXNrID0gbmV3IFRhc2sobmFtZUlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpO1xyXG4gICAgICBVSS5jb250ZW50RE9NLmFkZFRhc2tUb0Fycih0YXNrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyB1cGRhdGVUYXNrQXJyKCkge1xyXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gVUkuY29udGVudERPTS5saXN0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XHJcbiAgICBjb25zdCBjb250ZW50TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtbGFiZWxcIik7XHJcblxyXG4gICAgVUkuY29udGVudERPTS50YXNrRGF0YSA9IFtdO1xyXG5cclxuICAgIGxpc3RJdGVtcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgIGxldCBuYW1lID0gZS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZVwiKTtcclxuICAgICAgbGV0IGRhdGUgPSBlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kYXRlXCIpO1xyXG4gICAgICBuYW1lID0gbmFtZS50ZXh0Q29udGVudDtcclxuICAgICAgZGF0ZSA9IGRhdGUudGV4dENvbnRlbnQ7XHJcbiAgICAgIFVJLmNvbnRlbnRET00udGFza0RhdGEucHVzaChuZXcgVGFzayhuYW1lLCBkYXRlKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc3RhdGljIGRlbGV0ZVByb2plY3QoZXZlbnQpIHtcclxuICAgIGlmIChcclxuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1wcm9qXCIpICYmXHJcbiAgICAgIGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcHJvamVjdD9cIilcclxuICAgICkge1xyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2otbmFtZVwiKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgaW4gVUkuY29udGVudERPTS5wcm9qRGF0YSkge1xyXG4gICAgICAgIGlmIChVSS5jb250ZW50RE9NLnByb2pEYXRhW2ldLm5hbWUgPT09IHByb2plY3ROYW1lLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICBVSS5jb250ZW50RE9NLnByb2pEYXRhW2ldLnRhc2tBcnIuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqIGluIFVJLmNvbnRlbnRET00udGFza0RhdGEpIHtcclxuICAgICAgICAgICAgICBpZiAoVUkuY29udGVudERPTS50YXNrRGF0YVtqXS5uYW1lID09PSBlLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIFVJLmNvbnRlbnRET00udGFza0RhdGEuc3BsaWNlKGosIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBVSS5jb250ZW50RE9NLnByb2pEYXRhLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgVUkubG9hZEhvbWVQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBkaXNwbGF5UHJvamVjdFRhc2tzKGV2ZW50KSB7XHJcbiAgICBVSS5hcHBlbmRBZGRUYXNrQnRuKCk7XHJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgY29uc3QgY29udGVudExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWxhYmVsXCIpO1xyXG4gICAgY29uc3QgdGFza1BvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXBvcHVwXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBVSS5jb250ZW50RE9NLnByb2pEYXRhO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSAhPT0gXCJVTFwiICYmIGV2ZW50LnRhcmdldC5ub2RlTmFtZSAhPT0gXCJJXCIpIHtcclxuICAgICAgY29udGVudExhYmVsLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgY29udGVudExhYmVsLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcbiAgICAgIGlmICghVUkudGFza1BvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcInZpc2liaWxpdHlcIikpIHtcclxuICAgICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KFVJLnRhc2tQb3B1cCk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoYWRkVGFza0J0bik7XHJcbiAgICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eSh0YXNrUG9wVXApO1xyXG4gICAgICB9KTtcclxuICAgICAgcHJvamVjdHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLm5hbWUgPT09IHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgICBVSS5hZGRUYXNrVG9ET00oZS50YXNrQXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgcmVtb3ZlVGFzayhldmVudCkge1xyXG4gICAgY29uc3QgY29udGVudExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWxhYmVsXCIpO1xyXG4gICAgbGV0IGNvbG9yO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgY29uc3QgdGFza05hbWUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZVwiKTtcclxuICAgICAgZm9yIChsZXQgcHJvaiBvZiBVSS5jb250ZW50RE9NLnByb2pEYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBwcm9qLnRhc2tBcnIpIHtcclxuICAgICAgICAgIGlmICh0YXNrTmFtZS50ZXh0Q29udGVudCA9PT0gcHJvai50YXNrQXJyW2ldLm5hbWUpIHtcclxuICAgICAgICAgICAgcHJvai50YXNrQXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSBpbiBVSS5jb250ZW50RE9NLnRhc2tEYXRhKSB7XHJcbiAgICAgICAgaWYgKHRhc2tOYW1lLnRleHRDb250ZW50ID09PSBVSS5jb250ZW50RE9NLnRhc2tEYXRhW2ldLm5hbWUpIHtcclxuICAgICAgICAgIFVJLmNvbnRlbnRET00udGFza0RhdGEuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBqIGluIFVJLmNvbnRlbnRET00udG9kYXlEYXRhKSB7XHJcbiAgICAgICAgaWYgKHRhc2tOYW1lLnRleHRDb250ZW50ID09PSBVSS5jb250ZW50RE9NLnRvZGF5RGF0YVtqXS5uYW1lKSB7XHJcbiAgICAgICAgICBVSS5jb250ZW50RE9NLnRvZGF5RGF0YS5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGsgaW4gVUkuY29udGVudERPTS53ZWVrRGF0YSkge1xyXG4gICAgICAgIGlmICh0YXNrTmFtZS50ZXh0Q29udGVudCA9PT0gVUkuY29udGVudERPTS53ZWVrRGF0YVtrXS5uYW1lKSB7XHJcbiAgICAgICAgICBVSS5jb250ZW50RE9NLndlZWtEYXRhLnNwbGljZShrLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSByZXR1cm47XHJcblxyXG4gICAgaWYgKGNvbnRlbnRMYWJlbC50ZXh0Q29udGVudCA9PT0gXCJIb21lXCIpIHtcclxuICAgICAgVUkuYWRkVGFza1RvRE9NKFVJLmNvbnRlbnRET00udGFza0RhdGEsIGNvbG9yKTtcclxuICAgIH0gZWxzZSBpZiAoY29udGVudExhYmVsLnRleHRDb250ZW50ID09PSBcIlRvZGF5XCIpIHtcclxuICAgICAgVUkuYWRkVGFza1RvRE9NKFVJLmNvbnRlbnRET00udG9kYXlEYXRhLCBjb2xvcik7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnRMYWJlbC50ZXh0Q29udGVudCA9PT0gXCJUaGlzIFdlZWtcIikge1xyXG4gICAgICBVSS5hZGRUYXNrVG9ET00oVUkuY29udGVudERPTS53ZWVrRGF0YSwgY29sb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY29udGVudExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWxhYmVsXCIpLnRleHRDb250ZW50O1xyXG4gICAgICBjb25zdCBwcm9qVGFza0FyciA9IFVJLmNvbnRlbnRET00ucHJvakRhdGE7XHJcbiAgICAgIHByb2pUYXNrQXJyLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICBpZiAoY29udGVudExhYmVsID09PSBlLm5hbWUpIHtcclxuICAgICAgICAgIFVJLmFkZFRhc2tUb0RPTShlLnRhc2tBcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdXBkYXRlRGF0ZShldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudmFsdWUgPT09IFwidGFzay1kYXRlXCIpIHtcclxuICAgICAgbGV0IHRhc2tEYXRlID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRhdGVcIik7XHJcbiAgICAgIGxldCBkYXRlQ2hhbmdlID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWNoYW5nZVwiKTtcclxuICAgICAgbGV0IHRhc2tOYW1lID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLW5hbWVcIik7XHJcbiAgICAgIGxldCBjb250ZW50TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtbGFiZWxcIik7XHJcblxyXG4gICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KHRhc2tEYXRlKTtcclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShkYXRlQ2hhbmdlKTtcclxuICAgICAgZGF0ZUNoYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eSh0YXNrRGF0ZSk7XHJcbiAgICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShkYXRlQ2hhbmdlKTtcclxuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZUNoYW5nZS52YWx1ZS5zcGxpdChcIi1cIilbMF07XHJcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlQ2hhbmdlLnZhbHVlLnNwbGl0KFwiLVwiKVsxXTtcclxuICAgICAgICBjb25zdCBkYXkgPSBkYXRlQ2hhbmdlLnZhbHVlLnNwbGl0KFwiLVwiKVsyXTtcclxuICAgICAgICBjb25zdCBuZXdEYXRlID0gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcclxuXHJcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBuZXdEYXRlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRMYWJlbC50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGNvbnRlbnRMYWJlbC50ZXh0Q29udGVudCA9PT0gXCJIb21lXCIgfHxcclxuICAgICAgICAgIGNvbnRlbnRMYWJlbC50ZXh0Q29udGVudCA9PT0gXCJXZWVrXCIgfHxcclxuICAgICAgICAgIGNvbnRlbnRMYWJlbC50ZXh0Q29udGVudCA9PT0gXCJUb2RheVwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBVSS51cGRhdGVUYXNrQXJyKCk7XHJcbiAgICAgICAgICBVSS5jb250ZW50RE9NLmZpbHRlclRvZGF5VGFza3MoKTtcclxuICAgICAgICAgIFVJLmNvbnRlbnRET00uZmlsdGVyV2Vla1Rhc2tzKCk7XHJcbiAgICAgICAgICBmb3IgKGxldCBwcm9qIG9mIFVJLmNvbnRlbnRET00ucHJvakRhdGEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBwcm9qLnRhc2tBcnIpIHtcclxuICAgICAgICAgICAgICBpZiAodGFza05hbWUudGV4dENvbnRlbnQgPT09IHByb2oudGFza0FycltpXS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9qLnRhc2tBcnJbaV0uc2V0Rm9ybWF0dGVkRGF0ZShkYXRlQ2hhbmdlLnZhbHVlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBwcm9qIG9mIFVJLmNvbnRlbnRET00ucHJvakRhdGEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBwcm9qLnRhc2tBcnIpIHtcclxuICAgICAgICAgICAgICBpZiAodGFza05hbWUudGV4dENvbnRlbnQgPT09IHByb2oudGFza0FycltpXS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9qLnRhc2tBcnJbaV0uc2V0Rm9ybWF0dGVkRGF0ZShkYXRlQ2hhbmdlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIFVJLmNvbnRlbnRET00udGFza0RhdGEuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGFza05hbWUudGV4dENvbnRlbnQgPT09IGUubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc2V0Rm9ybWF0dGVkRGF0ZShkYXRlQ2hhbmdlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBVSS5jb250ZW50RE9NLmZpbHRlclRvZGF5VGFza3MoKTtcclxuICAgICAgICAgICAgICAgICAgICBVSS5jb250ZW50RE9NLmZpbHRlcldlZWtUYXNrcygpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgdG9nZ2xlUHJvamVjdFBvcFVwKCkge1xyXG4gICAgVUkudG9nZ2xlVmlzaWJpbGl0eShVSS5hZGRQcm9qZWN0KTtcclxuICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoVUkucHJvamVjdFBvcFVwKTtcclxuICB9XHJcbiAgc3RhdGljIHN1Ym1pdE5ld1Byb2plY3QoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaW5wdXRcIik7XHJcbiAgICBVSS5jb250ZW50RE9NLmFkZFByb2pUb0FycihuZXcgUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpKTtcclxuXHJcbiAgICBVSS50b2dnbGVQcm9qZWN0UG9wVXAoKTtcclxuXHJcbiAgICBVSS5hZGRQcm9qZWN0VG9ET00oVUkuY29udGVudERPTS5wcm9qRGF0YSk7XHJcbiAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIH1cclxuICBzdGF0aWMgaW5pdEJ0bkV2ZW50cygpIHtcclxuICAgIGNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1idG5cIik7XHJcbiAgICBjb25zdCBjYW5jZWxUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtYnRuXCIpO1xyXG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS10YWJcIik7XHJcblxyXG4gICAgVUkuY29udGVudERPTS5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkucmVtb3ZlVGFzayk7XHJcbiAgICBVSS5jb250ZW50RE9NLmxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS51cGRhdGVEYXRlKTtcclxuICAgIFVJLnByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5kaXNwbGF5UHJvamVjdFRhc2tzKTtcclxuICAgIFVJLnByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5kZWxldGVQcm9qZWN0KTtcclxuICAgIGhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmxvYWRIb21lUGFnZSk7XHJcbiAgICBVSS50b2RheVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkubG9hZFRvZGF5UGFnZSk7XHJcbiAgICBVSS53ZWVrVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5sb2FkV2Vla1BhZ2UpO1xyXG4gICAgVUkuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkudG9nZ2xlUHJvamVjdFBvcFVwKTtcclxuICAgIFVJLmNhbmNlbFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWlucHV0XCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShVSS5wcm9qZWN0UG9wVXApO1xyXG4gICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KFVJLmFkZFByb2plY3QpO1xyXG4gICAgfSk7XHJcbiAgICBVSS5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5zdWJtaXROZXdQcm9qZWN0KTtcclxuICAgIFVJLmFkZFRhc2tQb3BVcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KHRoaXMudGFza1BvcHVwKTtcclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eSh0aGlzLmFkZFRhc2tQb3BVcCk7XHJcbiAgICB9KTtcclxuICAgIGNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgYWRkVGFza0NvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcGVuZC1idG5cIik7XHJcblxyXG4gICAgICBpZiAoIWFkZFRhc2tDb250LmNsYXNzTGlzdC5jb250YWlucyhcInZpc2liaWxpdHlcIikpIHtcclxuICAgICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KGFkZFRhc2tDb250LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIikpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KHRoaXMudGFza1BvcHVwKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRhLW5hbWVcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLnZhbHVlID0gXCJcIjtcclxuICAgIH0pO1xyXG4gICAgc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBhZGRUYXNrQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwZW5kLWJ0blwiKTtcclxuICAgICAgY29uc3QgY29udGVudExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWxhYmVsXCIpO1xyXG5cclxuICAgICAgaWYgKCFhZGRUYXNrQ29udC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXNpYmlsaXR5XCIpKSB7XHJcbiAgICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShhZGRUYXNrQ29udC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgVUkuYWRkVG9UYXNrRGF0YSgpO1xyXG4gICAgICBVSS5hZGRUYXNrVG9ET00oVUkuY29udGVudERPTS50YXNrRGF0YSk7XHJcbiAgICAgIFVJLnVwZGF0ZVRhc2tBcnIoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHByb2ogb2YgVUkuY29udGVudERPTS5wcm9qRGF0YSkge1xyXG4gICAgICAgIGlmIChwcm9qLm5hbWUgPT09IGNvbnRlbnRMYWJlbC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgVUkuYWRkVGFza1RvUHJvaihwcm9qKTtcclxuICAgICAgICAgIFVJLmFkZFRhc2tUb0RPTShwcm9qLnRhc2tBcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgVUkuY29udGVudERPTS5maWx0ZXJUb2RheVRhc2tzKCk7XHJcbiAgICAgIFVJLmNvbnRlbnRET00uZmlsdGVyV2Vla1Rhc2tzKCk7XHJcbiAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoVUkudGFza1BvcHVwKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRhLW5hbWVcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLnZhbHVlID0gXCJcIjtcclxuICAgIH0pO1xyXG4gIH1cclxuICBzdGF0aWMgYXBwZW5kQWRkVGFza0J0bigpIHtcclxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwZW5kLWJ0blwiKTtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBidG5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2tcIik7XHJcbiAgICBidG4udGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIjtcclxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmQoYnRuKTtcclxuICB9XHJcbiAgc3RhdGljIGxvYWRIb21lUGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1sYWJlbFwiKTtcclxuICAgIFVJLmFwcGVuZEFkZFRhc2tCdG4oKTtcclxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xyXG4gICAgaWYgKCFVSS50YXNrUG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmlzaWJpbGl0eVwiKSkge1xyXG4gICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KFVJLnRhc2tQb3B1cCk7XHJcbiAgICB9XHJcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoVUkudGFza1BvcHVwKTtcclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShhZGRUYXNrKTtcclxuICAgIH0pO1xyXG4gICAgY29udGVudExhYmVsLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICBVSS5jb250ZW50RE9NLmxpc3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgVUkuYWRkVGFza1RvRE9NKFVJLmNvbnRlbnRET00udGFza0RhdGEpO1xyXG4gIH1cclxuICBzdGF0aWMgbG9hZFRvZGF5UGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1sYWJlbFwiKTtcclxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwZW5kLWJ0blwiKTtcclxuICAgIGJ0bkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29udGVudExhYmVsLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gICAgaWYgKCFVSS50YXNrUG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmlzaWJpbGl0eVwiKSkge1xyXG4gICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KFVJLnRhc2tQb3B1cCk7XHJcbiAgICB9XHJcbiAgICBVSS5jb250ZW50RE9NLmxpc3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgVUkuYWRkVGFza1RvRE9NKFVJLmNvbnRlbnRET00udG9kYXlEYXRhKTtcclxuICB9XHJcbiAgc3RhdGljIGxvYWRXZWVrUGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1sYWJlbFwiKTtcclxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwZW5kLWJ0blwiKTtcclxuICAgIGJ0bkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29udGVudExhYmVsLnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWtcIjtcclxuICAgIGlmICghVUkudGFza1BvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcInZpc2liaWxpdHlcIikpIHtcclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShVSS50YXNrUG9wdXApO1xyXG4gICAgfVxyXG4gICAgVUkuY29udGVudERPTS5saXN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIFVJLmFkZFRhc2tUb0RPTShVSS5jb250ZW50RE9NLndlZWtEYXRhKTtcclxuICB9XHJcbn1cclxuVUkuaW5pdEJ0bkV2ZW50cygpO1xyXG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XHJcbmltcG9ydCBVSSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgY29sb3IgPSBudWxsKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50YXNrQXJyID0gW107XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG4gIGFkZFRhc2sodGFzaykge1xyXG4gICAgdGhpcy50YXNrQXJyLnB1c2godGFzayk7XHJcbiAgfVxyXG4gIGdldFRhc2soKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXNrQXJyO1xyXG4gIH1cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcbn1cclxuIiwiLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XHJcbi8vICAgYWRkVG9TdG9yYWdlKHR5cGUsIGRhdGFPYmopIHtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHR5cGUsIEpTT04uc3RyaW5naWZ5KGRhdGFPYmopKTtcclxuLy8gICB9XHJcbi8vIH1cclxuaW1wb3J0IHsgaXNUb2RheSwgaXNUaGlzV2VlayB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuaW1wb3J0IFVJIGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RCaW5kaW5nIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmxpc3RFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMudGFza0RhdGEgPSBbXTtcclxuICAgIHRoaXMucHJvakRhdGEgPSBbXTtcclxuICAgIHRoaXMudG9kYXlEYXRhO1xyXG4gICAgdGhpcy53ZWVrRGF0YTtcclxuICB9XHJcbiAgZmlsdGVyVG9kYXlUYXNrcygpIHtcclxuICAgIGxldCB0b2RheSA9IHRoaXMudGFza0RhdGEuZmlsdGVyKChvYmopID0+IHtcclxuICAgICAgaWYgKG9iai5kYXRlID09PSBcIk5vIGRhdGVcIikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChpc1RvZGF5KG9iai5nZXREYXRlT2JqZWN0KCkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy50b2RheURhdGEgPSB0b2RheTtcclxuICAgIHJldHVybiB0b2RheTtcclxuICB9XHJcbiAgZmlsdGVyV2Vla1Rhc2tzKCkge1xyXG4gICAgbGV0IHdlZWsgPSB0aGlzLnRhc2tEYXRhLmZpbHRlcigob2JqKSA9PiB7XHJcbiAgICAgIGlmIChvYmouZGF0ZSA9PT0gXCJObyBkYXRlXCIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNUaGlzV2VlayhvYmouZ2V0RGF0ZU9iamVjdCgpKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMud2Vla0RhdGEgPSB3ZWVrO1xyXG4gICAgcmV0dXJuIHdlZWs7XHJcbiAgfVxyXG4gIGFkZFRhc2tUb0Fycih0YXNrKSB7XHJcbiAgICB0aGlzLnRhc2tEYXRhLnB1c2godGFzayk7XHJcbiAgfVxyXG4gIGFkZFByb2pUb0Fycihwcm9qKSB7XHJcbiAgICB0aGlzLnByb2pEYXRhLnB1c2gocHJvaik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgZm9ybWF0LCBhZGREYXlzLCBzZXREYXRlLCBpc1RoaXNJU09XZWVrIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUgPSBcIk5vIGRhdGVcIiwgY29sb3IgPSBudWxsKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcblxyXG4gIGdldEZvcm1hdHRlZERhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5kYXRlID09PSBcIk5vIGRhdGVcIikge1xyXG4gICAgICByZXR1cm4gXCJObyBkYXRlXCI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0ZS5pbmNsdWRlcyhcIi9cIikpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmRhdGUuc3BsaXQoXCItXCIpWzBdO1xyXG4gICAgICBjb25zdCBtb250aCA9IHRoaXMuZGF0ZS5zcGxpdChcIi1cIilbMV07XHJcbiAgICAgIGNvbnN0IGRheSA9IHRoaXMuZGF0ZS5zcGxpdChcIi1cIilbMl07XHJcblxyXG4gICAgICByZXR1cm4gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0Q29sb3IoY29sb3IpIHtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcbiAgc2V0Rm9ybWF0dGVkRGF0ZShkYXRlKSB7XHJcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5zcGxpdChcIi1cIilbMF07XHJcbiAgICBjb25zdCBtb250aCA9IGRhdGUuc3BsaXQoXCItXCIpWzFdO1xyXG4gICAgY29uc3QgZGF5ID0gZGF0ZS5zcGxpdChcIi1cIilbMl07XHJcbiAgICB0aGlzLmRhdGUgPSBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gO1xyXG4gIH1cclxuICBnZXREYXRlT2JqZWN0KCkge1xyXG4gICAgaWYgKHRoaXMuZGF0ZSA9PT0gXCJObyBkYXRlXCIpIHtcclxuICAgICAgcmV0dXJuIFwiTm8gZGF0ZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeWVhciA9IHRoaXMuZGF0ZS5zcGxpdChcIi9cIilbMl07XHJcbiAgICAgIGNvbnN0IG1vbnRoSW5kZXggPSB0aGlzLmRhdGUuc3BsaXQoXCIvXCIpWzBdIC0gMTtcclxuICAgICAgY29uc3QgZGF5ID0gdGhpcy5kYXRlLnNwbGl0KFwiL1wiKVsxXTtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoSW5kZXgsIGRheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRMaXN0SFRNTCgpIHtcclxuICAgIHJldHVybiBgPGxpIGNsYXNzPVwidGFzay1pdGVtXCI+XHJcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ0YXNrLWNoZWNrXCIgLz5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLW5hbWVcIj4ke3RoaXMubmFtZX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRhdGVcIj4ke3RoaXMuZGF0ZX08L2Rpdj5cclxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZGF0ZS1jaGFuZ2UgdmlzaWJpbGl0eVwiIC8+XHJcbiAgPC9saT5gO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=