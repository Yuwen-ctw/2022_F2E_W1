/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://f2e/./src/scss/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n\n\ngsap.registerPlugin(ScrollTrigger, TextPlugin, CustomEase)\n// banner section\ngsap.to('.marquee__words', {x:-628, duration: 6.28, repeat: -1, ease: 'none'})\n\n// propose section\nfunction proposeCardTrigger(selector, direction) {\n  function bounce () {\n    gsap.from(selector, {\n      ease: CustomEase.create(\"custom\", \"M0,0 C0.215,0.61 0.355,1 1,1 \"),\n      keyframes: [\n        {x: 3000 * direction, duration: 0.1, scaleX: 3, opacity: 1},\n        {x: -25 * direction, duration: 1.2, scaleX: 1},\n        {x: 10 * direction, duration: 0.15, scaleX: 0.98},\n        {x: -5 * direction, duration: 0.15, scaleX: 0.995},\n        {x:0, duration:0.15, scaleX: 1}\n      ]\n    })\n  }\n\n  ScrollTrigger.create({\n    trigger: selector,\n    onEnter: bounce,\n  })\n}\nconst proposeCards = document.querySelectorAll('.propose__card')\nproposeCards.forEach((card, index) => {\n  const direction = index % 2 === 0 ? 1 : -1\n  proposeCardTrigger(card, direction)\n})\n\n// schedule section\nfunction scheduleTrigger(selector, direction) {\n  function flow() {\n    gsap.fromTo(\n      selector,\n      { opacity: 0, xPercent: -100 * direction},\n      { opacity: 1, xPercent: 0 , duration: 1})\n  }\n\n  ScrollTrigger.create({\n    trigger: selector,\n    onEnter: flow,\n  })\n}\n\nconst scheduleFlows = document.querySelectorAll('.schedule__flow')\nscheduleFlows.forEach( (flow, index) => {\n  const direction = index % 2 === 0 ? 1 : -1\n  scheduleTrigger(flow, direction)\n})\n\n//# sourceURL=webpack://f2e/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;