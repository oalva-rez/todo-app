/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbURBQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1g2QjtBQUNEO0FBQzVCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCK0M7QUFDbkI7QUFDNUI7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFNBQVMsb0RBQU87QUFDeEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsU0FBUyxvREFBVTtBQUMzQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNnQztBQUNtQztBQUNwRDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixVQUFVO0FBQ3ZDLDZCQUE2QixVQUFVO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBMaXN0QmluZGluZyBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiZGF0ZS1mbnMvY29tcGFyZUFzY1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gIHN0YXRpYyBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRlbnRcIik7XHJcbiAgc3RhdGljIHRhc2tQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1wb3B1cFwiKTtcclxuICBzdGF0aWMgYWRkVGFza1BvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcclxuICBzdGF0aWMgdG9kYXlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LXRhYlwiKTtcclxuICBzdGF0aWMgd2Vla1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2Vlay10YWJcIik7XHJcbiAgc3RhdGljIGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xyXG4gIHN0YXRpYyBwcm9qZWN0UG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtcG9wdXBcIik7XHJcbiAgc3RhdGljIGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWJ0blwiKTtcclxuICBzdGF0aWMgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdFwiKTtcclxuICBzdGF0aWMgY2FuY2VsUHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLXByb2plY3RcIik7XHJcbiAgc3RhdGljIGNvbnRlbnRET00gPSBuZXcgTGlzdEJpbmRpbmcoVUkuY29udGVudCk7XHJcbiAgc3RhdGljIHRvZ2dsZVZpc2liaWxpdHkoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJpbGl0eVwiKTtcclxuICB9XHJcbiAgc3RhdGljIGFkZFRhc2tUb0RPTSh0YXNrcykge1xyXG4gICAgVUkuY29udGVudERPTS5saXN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xyXG4gICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbGV0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbGV0IGRhdGVDaGFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW1cIik7XHJcblxyXG4gICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja1wiKTtcclxuICAgICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stbmFtZVwiKTtcclxuICAgICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZVwiKTtcclxuICAgICAgZGF0ZUNoYW5nZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1jaGFuZ2VcIik7XHJcbiAgICAgIGRhdGVDaGFuZ2UuY2xhc3NMaXN0LmFkZChcInZpc2liaWxpdHlcIik7XHJcbiAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgZGF0ZUNoYW5nZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcclxuXHJcbiAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xyXG4gICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0Rm9ybWF0dGVkRGF0ZSgpO1xyXG5cclxuICAgICAgbGkuYXBwZW5kKGNoZWNrYm94KTtcclxuICAgICAgbGkuYXBwZW5kKHRhc2tOYW1lKTtcclxuICAgICAgbGkuYXBwZW5kKHRhc2tEYXRlKTtcclxuICAgICAgbGkuYXBwZW5kKGRhdGVDaGFuZ2UpO1xyXG4gICAgICBVSS5jb250ZW50RE9NLmxpc3RFbGVtZW50LmFwcGVuZChsaSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBhZGRQcm9qZWN0VG9ET00ocHJvamVjdHMpIHtcclxuICAgIFVJLnByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBwcm9qIG9mIHByb2plY3RzKSB7XHJcbiAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgbGV0IHByb2pOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJwcm9qLWl0ZW1cIik7XHJcbiAgICAgIHByb2pOYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qLW5hbWVcIik7XHJcbiAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWljb25cIik7XHJcbiAgICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFyayBkZWxldGUtcHJvalwiPjwvaT4nO1xyXG5cclxuICAgICAgcHJvak5hbWUudGV4dENvbnRlbnQgPSBwcm9qLm5hbWU7XHJcblxyXG4gICAgICBsaS5hcHBlbmQocHJvak5hbWUpO1xyXG4gICAgICBsaS5hcHBlbmQoZGVsZXRlQnRuKTtcclxuICAgICAgVUkucHJvamVjdExpc3QuYXBwZW5kKGxpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRUYXNrVG9Qcm9qKHByb2plY3QpIHtcclxuICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGEtbmFtZVwiKTtcclxuICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpO1xyXG5cclxuICAgIGxldCB0YXNrO1xyXG5cclxuICAgIGlmIChkYXRlSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgdGFzayA9IG5ldyBUYXNrKG5hbWVJbnB1dC52YWx1ZSwgXCJObyBkYXRlXCIpO1xyXG4gICAgICBwcm9qZWN0LmFkZFRhc2sodGFzayk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXNrID0gbmV3IFRhc2sobmFtZUlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpO1xyXG4gICAgICBwcm9qZWN0LmFkZFRhc2sodGFzayk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBhZGRUb1Rhc2tEYXRhKCkge1xyXG4gICAgbGV0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0YS1uYW1lXCIpO1xyXG4gICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIik7XHJcblxyXG4gICAgbGV0IHRhc2s7XHJcblxyXG4gICAgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICB0YXNrID0gbmV3IFRhc2sobmFtZUlucHV0LnZhbHVlLCBcIk5vIGRhdGVcIik7XHJcbiAgICAgIFVJLmNvbnRlbnRET00uYWRkVGFza1RvQXJyKHRhc2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFzayA9IG5ldyBUYXNrKG5hbWVJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKTtcclxuICAgICAgVUkuY29udGVudERPTS5hZGRUYXNrVG9BcnIodGFzayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdXBkYXRlVGFza0FycigpIHtcclxuICAgIGNvbnN0IGxpc3RJdGVtcyA9IFVJLmNvbnRlbnRET00ubGlzdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xyXG4gICAgY29uc3QgY29udGVudExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWxhYmVsXCIpO1xyXG5cclxuICAgIFVJLmNvbnRlbnRET00udGFza0RhdGEgPSBbXTtcclxuXHJcbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICBsZXQgbmFtZSA9IGUucXVlcnlTZWxlY3RvcihcIi50YXNrLW5hbWVcIik7XHJcbiAgICAgIGxldCBkYXRlID0gZS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGF0ZVwiKTtcclxuICAgICAgbmFtZSA9IG5hbWUudGV4dENvbnRlbnQ7XHJcbiAgICAgIGRhdGUgPSBkYXRlLnRleHRDb250ZW50O1xyXG4gICAgICBVSS5jb250ZW50RE9NLnRhc2tEYXRhLnB1c2gobmV3IFRhc2sobmFtZSwgZGF0ZSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBkZWxldGVQcm9qZWN0KGV2ZW50KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtcHJvalwiKSAmJlxyXG4gICAgICBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHByb2plY3Q/XCIpXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPVxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qLW5hbWVcIik7XHJcblxyXG4gICAgICBmb3IgKGxldCBpIGluIFVJLmNvbnRlbnRET00ucHJvakRhdGEpIHtcclxuICAgICAgICBpZiAoVUkuY29udGVudERPTS5wcm9qRGF0YVtpXS5uYW1lID09PSBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgVUkuY29udGVudERPTS5wcm9qRGF0YVtpXS50YXNrQXJyLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiBpbiBVSS5jb250ZW50RE9NLnRhc2tEYXRhKSB7XHJcbiAgICAgICAgICAgICAgaWYgKFVJLmNvbnRlbnRET00udGFza0RhdGFbal0ubmFtZSA9PT0gZS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBVSS5jb250ZW50RE9NLnRhc2tEYXRhLnNwbGljZShqLCAxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgVUkuY29udGVudERPTS5wcm9qRGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIFVJLmxvYWRIb21lUGFnZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgZGlzcGxheVByb2plY3RUYXNrcyhldmVudCkge1xyXG4gICAgVUkuYXBwZW5kQWRkVGFza0J0bigpO1xyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcclxuICAgIGNvbnN0IGNvbnRlbnRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1sYWJlbFwiKTtcclxuICAgIGNvbnN0IHRhc2tQb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1wb3B1cFwiKTtcclxuICAgIGNvbnN0IHByb2plY3RzID0gVUkuY29udGVudERPTS5wcm9qRGF0YTtcclxuICAgIGlmIChldmVudC50YXJnZXQubm9kZU5hbWUgIT09IFwiVUxcIiAmJiBldmVudC50YXJnZXQubm9kZU5hbWUgIT09IFwiSVwiKSB7XHJcbiAgICAgIGNvbnRlbnRMYWJlbC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgIGNvbnRlbnRMYWJlbC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG4gICAgICBpZiAoIVVJLnRhc2tQb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXNpYmlsaXR5XCIpKSB7XHJcbiAgICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShVSS50YXNrUG9wdXApO1xyXG4gICAgICB9XHJcbiAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KGFkZFRhc2tCdG4pO1xyXG4gICAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkodGFza1BvcFVwKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHByb2plY3RzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5uYW1lID09PSBwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgICAgVUkuYWRkVGFza1RvRE9NKGUudGFza0Fycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGljIHJlbW92ZVRhc2soZXZlbnQpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1sYWJlbFwiKTtcclxuICAgIGxldCBjb2xvcjtcclxuICAgIGlmIChldmVudC50YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XHJcbiAgICAgIGNvbnN0IHRhc2tOYW1lID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLW5hbWVcIik7XHJcbiAgICAgIGZvciAobGV0IHByb2ogb2YgVUkuY29udGVudERPTS5wcm9qRGF0YSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gcHJvai50YXNrQXJyKSB7XHJcbiAgICAgICAgICBpZiAodGFza05hbWUudGV4dENvbnRlbnQgPT09IHByb2oudGFza0FycltpXS5uYW1lKSB7XHJcbiAgICAgICAgICAgIHByb2oudGFza0Fyci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgaW4gVUkuY29udGVudERPTS50YXNrRGF0YSkge1xyXG4gICAgICAgIGlmICh0YXNrTmFtZS50ZXh0Q29udGVudCA9PT0gVUkuY29udGVudERPTS50YXNrRGF0YVtpXS5uYW1lKSB7XHJcbiAgICAgICAgICBVSS5jb250ZW50RE9NLnRhc2tEYXRhLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaiBpbiBVSS5jb250ZW50RE9NLnRvZGF5RGF0YSkge1xyXG4gICAgICAgIGlmICh0YXNrTmFtZS50ZXh0Q29udGVudCA9PT0gVUkuY29udGVudERPTS50b2RheURhdGFbal0ubmFtZSkge1xyXG4gICAgICAgICAgVUkuY29udGVudERPTS50b2RheURhdGEuc3BsaWNlKGosIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBrIGluIFVJLmNvbnRlbnRET00ud2Vla0RhdGEpIHtcclxuICAgICAgICBpZiAodGFza05hbWUudGV4dENvbnRlbnQgPT09IFVJLmNvbnRlbnRET00ud2Vla0RhdGFba10ubmFtZSkge1xyXG4gICAgICAgICAgVUkuY29udGVudERPTS53ZWVrRGF0YS5zcGxpY2UoaywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgcmV0dXJuO1xyXG5cclxuICAgIGlmIChjb250ZW50TGFiZWwudGV4dENvbnRlbnQgPT09IFwiSG9tZVwiKSB7XHJcbiAgICAgIFVJLmFkZFRhc2tUb0RPTShVSS5jb250ZW50RE9NLnRhc2tEYXRhLCBjb2xvcik7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnRMYWJlbC50ZXh0Q29udGVudCA9PT0gXCJUb2RheVwiKSB7XHJcbiAgICAgIFVJLmFkZFRhc2tUb0RPTShVSS5jb250ZW50RE9NLnRvZGF5RGF0YSwgY29sb3IpO1xyXG4gICAgfSBlbHNlIGlmIChjb250ZW50TGFiZWwudGV4dENvbnRlbnQgPT09IFwiVGhpcyBXZWVrXCIpIHtcclxuICAgICAgVUkuYWRkVGFza1RvRE9NKFVJLmNvbnRlbnRET00ud2Vla0RhdGEsIGNvbG9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1sYWJlbFwiKS50ZXh0Q29udGVudDtcclxuICAgICAgY29uc3QgcHJvalRhc2tBcnIgPSBVSS5jb250ZW50RE9NLnByb2pEYXRhO1xyXG4gICAgICBwcm9qVGFza0Fyci5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnRlbnRMYWJlbCA9PT0gZS5uYW1lKSB7XHJcbiAgICAgICAgICBVSS5hZGRUYXNrVG9ET00oZS50YXNrQXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVwZGF0ZURhdGUoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LnZhbHVlID09PSBcInRhc2stZGF0ZVwiKSB7XHJcbiAgICAgIGxldCB0YXNrRGF0ZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kYXRlXCIpO1xyXG4gICAgICBsZXQgZGF0ZUNoYW5nZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1jaGFuZ2VcIik7XHJcbiAgICAgIGxldCB0YXNrTmFtZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1uYW1lXCIpO1xyXG4gICAgICBsZXQgY29udGVudExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWxhYmVsXCIpO1xyXG5cclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eSh0YXNrRGF0ZSk7XHJcbiAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoZGF0ZUNoYW5nZSk7XHJcbiAgICAgIGRhdGVDaGFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkodGFza0RhdGUpO1xyXG4gICAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoZGF0ZUNoYW5nZSk7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGVDaGFuZ2UudmFsdWUuc3BsaXQoXCItXCIpWzBdO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZUNoYW5nZS52YWx1ZS5zcGxpdChcIi1cIilbMV07XHJcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZUNoYW5nZS52YWx1ZS5zcGxpdChcIi1cIilbMl07XHJcbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XHJcblxyXG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gbmV3RGF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50TGFiZWwudGV4dENvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjb250ZW50TGFiZWwudGV4dENvbnRlbnQgPT09IFwiSG9tZVwiIHx8XHJcbiAgICAgICAgICBjb250ZW50TGFiZWwudGV4dENvbnRlbnQgPT09IFwiV2Vla1wiIHx8XHJcbiAgICAgICAgICBjb250ZW50TGFiZWwudGV4dENvbnRlbnQgPT09IFwiVG9kYXlcIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgVUkudXBkYXRlVGFza0FycigpO1xyXG4gICAgICAgICAgVUkuY29udGVudERPTS5maWx0ZXJUb2RheVRhc2tzKCk7XHJcbiAgICAgICAgICBVSS5jb250ZW50RE9NLmZpbHRlcldlZWtUYXNrcygpO1xyXG4gICAgICAgICAgZm9yIChsZXQgcHJvaiBvZiBVSS5jb250ZW50RE9NLnByb2pEYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gcHJvai50YXNrQXJyKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRhc2tOYW1lLnRleHRDb250ZW50ID09PSBwcm9qLnRhc2tBcnJbaV0ubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvai50YXNrQXJyW2ldLnNldEZvcm1hdHRlZERhdGUoZGF0ZUNoYW5nZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZm9yIChsZXQgcHJvaiBvZiBVSS5jb250ZW50RE9NLnByb2pEYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gcHJvai50YXNrQXJyKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRhc2tOYW1lLnRleHRDb250ZW50ID09PSBwcm9qLnRhc2tBcnJbaV0ubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvai50YXNrQXJyW2ldLnNldEZvcm1hdHRlZERhdGUoZGF0ZUNoYW5nZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBVSS5jb250ZW50RE9NLnRhc2tEYXRhLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRhc2tOYW1lLnRleHRDb250ZW50ID09PSBlLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnNldEZvcm1hdHRlZERhdGUoZGF0ZUNoYW5nZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgVUkuY29udGVudERPTS5maWx0ZXJUb2RheVRhc2tzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVUkuY29udGVudERPTS5maWx0ZXJXZWVrVGFza3MoKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGljIHRvZ2dsZVByb2plY3RQb3BVcCgpIHtcclxuICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoVUkuYWRkUHJvamVjdCk7XHJcbiAgICBVSS50b2dnbGVWaXNpYmlsaXR5KFVJLnByb2plY3RQb3BVcCk7XHJcbiAgfVxyXG4gIHN0YXRpYyBzdWJtaXROZXdQcm9qZWN0KCkge1xyXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWlucHV0XCIpO1xyXG4gICAgVUkuY29udGVudERPTS5hZGRQcm9qVG9BcnIobmV3IFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKSk7XHJcblxyXG4gICAgVUkudG9nZ2xlUHJvamVjdFBvcFVwKCk7XHJcblxyXG4gICAgVUkuYWRkUHJvamVjdFRvRE9NKFVJLmNvbnRlbnRET00ucHJvakRhdGEpO1xyXG4gICAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcclxuICB9XHJcbiAgc3RhdGljIGluaXRCdG5FdmVudHMoKSB7XHJcbiAgICBjb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYnRuXCIpO1xyXG4gICAgY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWJ0blwiKTtcclxuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtdGFiXCIpO1xyXG5cclxuICAgIFVJLmNvbnRlbnRET00ubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLnJlbW92ZVRhc2spO1xyXG4gICAgVUkuY29udGVudERPTS5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkudXBkYXRlRGF0ZSk7XHJcbiAgICBVSS5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuZGlzcGxheVByb2plY3RUYXNrcyk7XHJcbiAgICBVSS5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuZGVsZXRlUHJvamVjdCk7XHJcbiAgICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5sb2FkSG9tZVBhZ2UpO1xyXG4gICAgVUkudG9kYXlUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmxvYWRUb2RheVBhZ2UpO1xyXG4gICAgVUkud2Vla1RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkubG9hZFdlZWtQYWdlKTtcclxuICAgIFVJLmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLnRvZ2dsZVByb2plY3RQb3BVcCk7XHJcbiAgICBVSS5jYW5jZWxQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoVUkucHJvamVjdFBvcFVwKTtcclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShVSS5hZGRQcm9qZWN0KTtcclxuICAgIH0pO1xyXG4gICAgVUkuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuc3VibWl0TmV3UHJvamVjdCk7XHJcbiAgICBVSS5hZGRUYXNrUG9wVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eSh0aGlzLnRhc2tQb3B1cCk7XHJcbiAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkodGhpcy5hZGRUYXNrUG9wVXApO1xyXG4gICAgfSk7XHJcbiAgICBjYW5jZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFkZFRhc2tDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBlbmQtYnRuXCIpO1xyXG5cclxuICAgICAgaWYgKCFhZGRUYXNrQ29udC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXNpYmlsaXR5XCIpKSB7XHJcbiAgICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShhZGRUYXNrQ29udC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eSh0aGlzLnRhc2tQb3B1cCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0YS1uYW1lXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxuICAgIHN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgYWRkVGFza0NvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcGVuZC1idG5cIik7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1sYWJlbFwiKTtcclxuXHJcbiAgICAgIGlmICghYWRkVGFza0NvbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmlzaWJpbGl0eVwiKSkge1xyXG4gICAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoYWRkVGFza0NvbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFVJLmFkZFRvVGFza0RhdGEoKTtcclxuICAgICAgVUkuYWRkVGFza1RvRE9NKFVJLmNvbnRlbnRET00udGFza0RhdGEpO1xyXG4gICAgICBVSS51cGRhdGVUYXNrQXJyKCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBwcm9qIG9mIFVJLmNvbnRlbnRET00ucHJvakRhdGEpIHtcclxuICAgICAgICBpZiAocHJvai5uYW1lID09PSBjb250ZW50TGFiZWwudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgIFVJLmFkZFRhc2tUb1Byb2oocHJvaik7XHJcbiAgICAgICAgICBVSS5hZGRUYXNrVG9ET00ocHJvai50YXNrQXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFVJLmNvbnRlbnRET00uZmlsdGVyVG9kYXlUYXNrcygpO1xyXG4gICAgICBVSS5jb250ZW50RE9NLmZpbHRlcldlZWtUYXNrcygpO1xyXG4gICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KFVJLnRhc2tQb3B1cCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0YS1uYW1lXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc3RhdGljIGFwcGVuZEFkZFRhc2tCdG4oKSB7XHJcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcGVuZC1idG5cIik7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYnRuQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrXCIpO1xyXG4gICAgYnRuLnRleHRDb250ZW50ID0gXCIrIEFkZCBUYXNrXCI7XHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kKGJ0bik7XHJcbiAgfVxyXG4gIHN0YXRpYyBsb2FkSG9tZVBhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250ZW50TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtbGFiZWxcIik7XHJcbiAgICBVSS5hcHBlbmRBZGRUYXNrQnRuKCk7XHJcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcclxuICAgIGlmICghVUkudGFza1BvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcInZpc2liaWxpdHlcIikpIHtcclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShVSS50YXNrUG9wdXApO1xyXG4gICAgfVxyXG4gICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBVSS50b2dnbGVWaXNpYmlsaXR5KFVJLnRhc2tQb3B1cCk7XHJcbiAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoYWRkVGFzayk7XHJcbiAgICB9KTtcclxuICAgIGNvbnRlbnRMYWJlbC50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgVUkuY29udGVudERPTS5saXN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIFVJLmFkZFRhc2tUb0RPTShVSS5jb250ZW50RE9NLnRhc2tEYXRhKTtcclxuICB9XHJcbiAgc3RhdGljIGxvYWRUb2RheVBhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250ZW50TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtbGFiZWxcIik7XHJcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcGVuZC1idG5cIik7XHJcbiAgICBidG5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnRlbnRMYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcclxuICAgIGlmICghVUkudGFza1BvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcInZpc2liaWxpdHlcIikpIHtcclxuICAgICAgVUkudG9nZ2xlVmlzaWJpbGl0eShVSS50YXNrUG9wdXApO1xyXG4gICAgfVxyXG4gICAgVUkuY29udGVudERPTS5saXN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIFVJLmFkZFRhc2tUb0RPTShVSS5jb250ZW50RE9NLnRvZGF5RGF0YSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBsb2FkV2Vla1BhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250ZW50TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtbGFiZWxcIik7XHJcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcGVuZC1idG5cIik7XHJcbiAgICBidG5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnRlbnRMYWJlbC50ZXh0Q29udGVudCA9IFwiVGhpcyBXZWVrXCI7XHJcbiAgICBpZiAoIVVJLnRhc2tQb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXNpYmlsaXR5XCIpKSB7XHJcbiAgICAgIFVJLnRvZ2dsZVZpc2liaWxpdHkoVUkudGFza1BvcHVwKTtcclxuICAgIH1cclxuICAgIFVJLmNvbnRlbnRET00ubGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBVSS5hZGRUYXNrVG9ET00oVUkuY29udGVudERPTS53ZWVrRGF0YSk7XHJcbiAgfVxyXG59XHJcblVJLmluaXRCdG5FdmVudHMoKTtcclxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xyXG5pbXBvcnQgVUkgZnJvbSBcIi4vaW5kZXguanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGNvbG9yID0gbnVsbCkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudGFza0FyciA9IFtdO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gIH1cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIHRoaXMudGFza0Fyci5wdXNoKHRhc2spO1xyXG4gIH1cclxuICBnZXRUYXNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFza0FycjtcclxuICB9XHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGlzVG9kYXksIGlzVGhpc1dlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IFVJIGZyb20gXCIuL2luZGV4LmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0QmluZGluZyB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5saXN0RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLnRhc2tEYXRhID0gW107XHJcbiAgICB0aGlzLnByb2pEYXRhID0gW107XHJcbiAgICB0aGlzLnRvZGF5RGF0YTtcclxuICAgIHRoaXMud2Vla0RhdGE7XHJcbiAgfVxyXG4gIGZpbHRlclRvZGF5VGFza3MoKSB7XHJcbiAgICBsZXQgdG9kYXkgPSB0aGlzLnRhc2tEYXRhLmZpbHRlcigob2JqKSA9PiB7XHJcbiAgICAgIGlmIChvYmouZGF0ZSA9PT0gXCJObyBkYXRlXCIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNUb2RheShvYmouZ2V0RGF0ZU9iamVjdCgpKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudG9kYXlEYXRhID0gdG9kYXk7XHJcbiAgICByZXR1cm4gdG9kYXk7XHJcbiAgfVxyXG4gIGZpbHRlcldlZWtUYXNrcygpIHtcclxuICAgIGxldCB3ZWVrID0gdGhpcy50YXNrRGF0YS5maWx0ZXIoKG9iaikgPT4ge1xyXG4gICAgICBpZiAob2JqLmRhdGUgPT09IFwiTm8gZGF0ZVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzVGhpc1dlZWsob2JqLmdldERhdGVPYmplY3QoKSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLndlZWtEYXRhID0gd2VlaztcclxuICAgIHJldHVybiB3ZWVrO1xyXG4gIH1cclxuICBhZGRUYXNrVG9BcnIodGFzaykge1xyXG4gICAgdGhpcy50YXNrRGF0YS5wdXNoKHRhc2spO1xyXG4gIH1cclxuICBhZGRQcm9qVG9BcnIocHJvaikge1xyXG4gICAgdGhpcy5wcm9qRGF0YS5wdXNoKHByb2opO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGZvcm1hdCwgYWRkRGF5cywgc2V0RGF0ZSwgaXNUaGlzSVNPV2VlayB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlID0gXCJObyBkYXRlXCIsIGNvbG9yID0gbnVsbCkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG5cclxuICBnZXRGb3JtYXR0ZWREYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuZGF0ZSA9PT0gXCJObyBkYXRlXCIpIHtcclxuICAgICAgcmV0dXJuIFwiTm8gZGF0ZVwiO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGUuaW5jbHVkZXMoXCIvXCIpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB5ZWFyID0gdGhpcy5kYXRlLnNwbGl0KFwiLVwiKVswXTtcclxuICAgICAgY29uc3QgbW9udGggPSB0aGlzLmRhdGUuc3BsaXQoXCItXCIpWzFdO1xyXG4gICAgICBjb25zdCBkYXkgPSB0aGlzLmRhdGUuc3BsaXQoXCItXCIpWzJdO1xyXG5cclxuICAgICAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldENvbG9yKGNvbG9yKSB7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG4gIHNldEZvcm1hdHRlZERhdGUoZGF0ZSkge1xyXG4gICAgY29uc3QgeWVhciA9IGRhdGUuc3BsaXQoXCItXCIpWzBdO1xyXG4gICAgY29uc3QgbW9udGggPSBkYXRlLnNwbGl0KFwiLVwiKVsxXTtcclxuICAgIGNvbnN0IGRheSA9IGRhdGUuc3BsaXQoXCItXCIpWzJdO1xyXG4gICAgdGhpcy5kYXRlID0gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcclxuICB9XHJcbiAgZ2V0RGF0ZU9iamVjdCgpIHtcclxuICAgIGlmICh0aGlzLmRhdGUgPT09IFwiTm8gZGF0ZVwiKSB7XHJcbiAgICAgIHJldHVybiBcIk5vIGRhdGVcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmRhdGUuc3BsaXQoXCIvXCIpWzJdO1xyXG4gICAgICBjb25zdCBtb250aEluZGV4ID0gdGhpcy5kYXRlLnNwbGl0KFwiL1wiKVswXSAtIDE7XHJcbiAgICAgIGNvbnN0IGRheSA9IHRoaXMuZGF0ZS5zcGxpdChcIi9cIilbMV07XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aEluZGV4LCBkYXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TGlzdEhUTUwoKSB7XHJcbiAgICByZXR1cm4gYDxsaSBjbGFzcz1cInRhc2staXRlbVwiPlxyXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidGFzay1jaGVja1wiIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1uYW1lXCI+JHt0aGlzLm5hbWV9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1kYXRlXCI+JHt0aGlzLmRhdGV9PC9kaXY+XHJcbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImRhdGUtY2hhbmdlIHZpc2liaWxpdHlcIiAvPlxyXG4gIDwvbGk+YDtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==