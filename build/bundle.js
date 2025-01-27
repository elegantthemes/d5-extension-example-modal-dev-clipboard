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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_registerDevClipboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/registerDevClipboard.js */ \"./src/modal/registerDevClipboard.js\");\n\n\n//# sourceURL=webpack://d5-clipboard-extension/./src/index.jsx?");

/***/ }),

/***/ "./src/modal/component.jsx":
/*!*********************************!*\
  !*** ./src/modal/component.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DevClipboard: () => (/* binding */ DevClipboard)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _divi_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @divi/modal */ \"@divi/modal\");\n/* harmony import */ var _divi_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_modal__WEBPACK_IMPORTED_MODULE_2__);\n\n\n// import { ErrorBoundary } from '@divi/error-boundary';\n\n\n// import './style.scss';\n// Externals.\n// @todo webpack should be updated for handling the following packages that is exposed\n//       via global so these can be used as component using import instead of accessing global.\nconst {\n  isArray,\n  isObject,\n  forEach,\n  isString,\n  keys,\n  map\n} = window.lodash;\nconst {\n  ErrorBoundary\n} = window.divi.errorBoundary;\n\n/**\n * Component for rendering clipboard item's payload item.\n *\n * @since 0.1.0\n *\n * @param {PayloadItemProps} param0 Component props.\n *\n * @returns {ReactElement}\n */\nconst PayloadItem = ({\n  name,\n  values\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"et-devtool-clipboard-item-payload-item\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"details\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"summary\", {\n  className: \"et-devtool-clipboard-item-payload-item-title\"\n}, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n  className: \"et-devtool-clipboard-item-payload-item-value\"\n}, isArray(values) || isObject(values) ? keys(values).map(key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n  key: key\n}, key, \": \", isString(values[key]) ? values[key] : JSON.stringify(values[key]))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, values))));\n\n/**\n * Component for rendering clipboard item.\n *\n * @since 0.1.0\n *\n * @param {ClipboardItemProps} param0 Component props.\n *\n * @returns {ReactElement}\n */\nconst ClipboardItem = ({\n  clipboardType,\n  origin,\n  payload,\n  itemIndex\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"et-devtool-clipboard-item\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: `et-devtool-clipboard-item-type et-devtool-clipboard-item-type--${clipboardType}`\n}, clipboardType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"et-devtool-clipboard-item-index\"\n}, `#${itemIndex}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"et-devtool-clipboard-item-origin\"\n}, origin), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"et-devtool-clipboard-item-payload\"\n}, keys(payload).map(payloadItemName => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PayloadItem, {\n  name: payloadItemName,\n  values: payload[payloadItemName],\n  key: `et-devtool-clipboard-item-payload--${payloadItemName}`\n}))));\n\n/**\n * Component for rendering clipboard items.\n *\n * @since 0.1.0\n *\n * @param {ClipboardItemsProps} param0 Component props.\n *\n * @returns {ReactElement}\n */\nconst ClipboardItems = ({\n  items\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"et-devtool-clipboard-items\"\n}, map(items, (item, itemIndex) => (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClipboardItem, {\n  clipboardType: item.clipboardType,\n  origin: item.origin,\n  payload: item.payload,\n  key: `et-devtool-clipboard-item--${itemIndex}`,\n  itemIndex\n}))));\n\n/**\n * Dev clipboard modal component which visualize the clipboard's state.\n *\n * @since 0.1.0\n *\n * @param {Props} props Component props.\n *\n * @returns {ReactElement}\n */\nconst DevClipboard = props => {\n  const {\n    name,\n    clipboardItems\n  } = props;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorBoundary, {\n    key: \"et-vb-divi-modals--dev-clipboard\",\n    componentName: \"et-vb-divi-modals--dev-clipboard\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.WrapperContainer, {\n    draggable: true,\n    resizable: true,\n    expandable: true,\n    snappable: true,\n    modalName: name\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.Header, {\n    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clipboard', 'et_builder')\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.BodyContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.PanelContainer, {\n    id: \"clipboard\",\n    opened: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      padding: '20px 20px 40px 20px',\n      height: 400\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ClipboardItems, {\n    items: clipboardItems\n  }))))));\n};\n\n//# sourceURL=webpack://d5-clipboard-extension/./src/modal/component.jsx?");

/***/ }),

/***/ "./src/modal/container.jsx":
/*!*********************************!*\
  !*** ./src/modal/container.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DevClipboardContainer: () => (/* binding */ DevClipboardContainer)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/modal/component.jsx\");\n// Local dependencies.\n\n\n// Externals.\n// @todo webpack should be updated for handling the following packages that is exposed\n//       via global so these can be used as component using import instead of accessing global.\nconst {\n  withSelect\n} = window.divi.data;\nconst DevClipboardContainer = withSelect(selectStore => {\n  const clipboardItems = selectStore('divi/clipboard').getItems();\n  console.log('Clipboard Items:', _component__WEBPACK_IMPORTED_MODULE_0__.DevClipboard);\n  return {\n    clipboardItems\n  };\n})(_component__WEBPACK_IMPORTED_MODULE_0__.DevClipboard);\n\n//# sourceURL=webpack://d5-clipboard-extension/./src/modal/container.jsx?");

/***/ }),

/***/ "./src/modal/registerDevClipboard.js":
/*!*******************************************!*\
  !*** ./src/modal/registerDevClipboard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ \"./src/modal/container.jsx\");\n\nwindow.vendor.wp.hooks.addFilter('divi.modalLibrary.modalMapping', 'divi', modals => {\n  modals.DevClipboard = {\n    name: \"divi/dev-clipboard\",\n    label: \"Clipboard\",\n    type: \"multiInstanceModal\",\n    component: _container__WEBPACK_IMPORTED_MODULE_0__.DevClipboardContainer\n  };\n  return modals;\n});\n\n//# sourceURL=webpack://d5-clipboard-extension/./src/modal/registerDevClipboard.js?");

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