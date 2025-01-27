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

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modals_registerMyModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals/registerMyModal.js */ \"./src/modals/registerMyModal.js\");\n\n\n//# sourceURL=webpack://d5-clipboard-extension/./src/index.jsx?");

/***/ }),

/***/ "./src/modals/index.jsx":
/*!******************************!*\
  !*** ./src/modals/index.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MyModal: () => (/* binding */ MyModal)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _divi_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @divi/modal */ \"@divi/modal\");\n/* harmony import */ var _divi_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_modal__WEBPACK_IMPORTED_MODULE_2__);\n\n\n// import { ErrorBoundary } from '@divi/error-boundary';\n\n// import './style.scss';\n\n/**\n * Modal component for testing.\n *\n * @returns {ReactElement}\n */\nconst MyModal = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.WrapperContainer, {\n  dimension: null,\n  offset: null,\n  snappable: true,\n  expandable: true,\n  draggable: true,\n  resizable: true,\n  centered: false,\n  modalName: \"example/my-modal\",\n  bodySiblingHeight: null\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.Header, {\n  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('My Modal 2', 'et_builder')\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.BodyContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.PanelContainer, {\n  id: \"my-modal\",\n  opened: true\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Hello from my modal\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.FieldWrapper, {\n  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Field 1', 'et_builder'),\n  id: \"field-1\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.FieldWrapper, {\n  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Field 2', 'et_builder'),\n  id: \"field-2\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.FieldWrapper, {\n  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Field 3', 'et_builder'),\n  id: \"field-3\"\n}))));\n\n//# sourceURL=webpack://d5-clipboard-extension/./src/modals/index.jsx?");

/***/ }),

/***/ "./src/modals/registerMyModal.js":
/*!***************************************!*\
  !*** ./src/modals/registerMyModal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/modals/index.jsx\");\n\nwindow.vendor.wp.hooks.addFilter('divi.modalLibrary.modalMapping', 'divi', modals => {\n  modals.myModal = {\n    name: \"example/my-modal\",\n    label: \"My Modal\",\n    type: \"multiInstanceModal\",\n    component: ___WEBPACK_IMPORTED_MODULE_0__.MyModal\n  };\n  return modals;\n});\n\n//# sourceURL=webpack://d5-clipboard-extension/./src/modals/registerMyModal.js?");

/***/ }),

/***/ "@divi/modal":
/*!*********************************!*\
  !*** external ["divi","modal"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = divi.modal;

/***/ }),

/***/ "react":
/*!***********************************!*\
  !*** external ["vendor","React"] ***!
  \***********************************/
/***/ ((module) => {

module.exports = vendor.React;

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external ["vendor","wp","i18n"] ***!
  \***************************************/
/***/ ((module) => {

module.exports = vendor.wp.i18n;

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.jsx");
/******/ 	
/******/ })()
;