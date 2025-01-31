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

/***/ "./src/icons/dev-clipboard/index.jsx":
/*!*******************************************!*\
  !*** ./src/icons/dev-clipboard/index.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   component: () => (/* binding */ component),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   viewBox: () => (/* binding */ viewBox)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// Icon data.\nconst name = 'dev-clipboard'; // Unique name.\nconst viewBox = '0 0 24 24'; // You will need to adjust this to match your SVG.\nconst component = (color = '#A2B0C1') => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n  d: \"M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8\",\n  strokeWidth: \"2\",\n  strokeLinecap: \"round\",\n  strokeLinejoin: \"round\",\n  stroke: color\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n  d: \"M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z\",\n  strokeWidth: \"2\",\n  strokeLinecap: \"round\",\n  strokeLinejoin: \"round\",\n  fill: color\n})); // Your SVG path. without the svg tag.\n\n//# sourceURL=webpack://d5-clipboard-extension/./src/icons/dev-clipboard/index.jsx?");

/***/ }),

/***/ "./src/icons/index.js":
/*!****************************!*\
  !*** ./src/icons/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   devClipboard: () => (/* reexport module object */ _dev_clipboard__WEBPACK_IMPORTED_MODULE_0__)\n/* harmony export */ });\n/* harmony import */ var _dev_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dev-clipboard */ \"./src/icons/dev-clipboard/index.jsx\");\n\n\n//# sourceURL=webpack://d5-clipboard-extension/./src/icons/index.js?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_registerDevClipboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/registerDevClipboard.js */ \"./src/modal/registerDevClipboard.js\");\n/* harmony import */ var _icons_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/index.js */ \"./src/icons/index.js\");\n\n\n\n//# sourceURL=webpack://d5-clipboard-extension/./src/index.jsx?");

/***/ }),

/***/ "./src/modal/component.jsx":
/*!*********************************!*\
  !*** ./src/modal/component.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DevClipboard: () => (/* binding */ DevClipboard)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _divi_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @divi/modal */ \"@divi/modal\");\n/* harmony import */ var _divi_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./src/modal/style.scss\");\n\n\n// import { ErrorBoundary } from '@divi/error-boundary';\n\n\n// import './style.scss';\n// Externals.\n// @todo webpack should be updated for handling the following packages that is exposed\n//       via global so these can be used as component using import instead of accessing global.\nconst {\n  isArray,\n  isObject,\n  forEach,\n  isString,\n  keys,\n  map\n} = window.lodash;\nconst {\n  ErrorBoundary\n} = window.divi.errorBoundary;\n\n\n/**\n * Component for rendering clipboard item's payload item.\n *\n * @since 0.1.0\n *\n * @param {PayloadItemProps} param0 Component props.\n *\n * @returns {ReactElement}\n */\nconst PayloadItem = ({\n  name,\n  values\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"et-devtool-clipboard-item-payload-item\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"details\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"summary\", {\n  className: \"et-devtool-clipboard-item-payload-item-title\"\n}, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n  className: \"et-devtool-clipboard-item-payload-item-value\"\n}, isArray(values) || isObject(values) ? keys(values).map(key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n  key: key,\n  className: \"et-devtool-clipboard-item-payload-item-value-item\"\n}, key, \": \", isString(values[key]) ? values[key] : JSON.stringify(values[key]))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, values))));\n\n/**\n * Component for rendering clipboard item.\n *\n * @since 0.1.0\n *\n * @param {ClipboardItemProps} param0 Component props.\n *\n * @returns {ReactElement}\n */\nconst ClipboardItem = ({\n  clipboardType,\n  origin,\n  payload,\n  itemIndex\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"et-devtool-clipboard-item\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: `et-devtool-clipboard-item-type et-devtool-clipboard-item-type--${clipboardType}`\n}, clipboardType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"et-devtool-clipboard-item-index\"\n}, `#${itemIndex}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"et-devtool-clipboard-item-origin\"\n}, origin), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"et-devtool-clipboard-item-payload\"\n}, keys(payload).map(payloadItemName => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PayloadItem, {\n  name: payloadItemName,\n  values: payload[payloadItemName],\n  key: `et-devtool-clipboard-item-payload--${payloadItemName}`\n}))));\n\n/**\n * Component for rendering clipboard items.\n *\n * @since 0.1.0\n *\n * @param {ClipboardItemsProps} param0 Component props.\n *\n * @returns {ReactElement}\n */\nconst ClipboardItems = ({\n  items\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"et-devtool-clipboard-items\"\n}, map(items, (item, itemIndex) => (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClipboardItem, {\n  clipboardType: item.clipboardType,\n  origin: item.origin,\n  payload: item.payload,\n  key: `et-devtool-clipboard-item--${itemIndex}`,\n  itemIndex\n}))));\n\n/**\n * Dev clipboard modal component which visualize the clipboard's state.\n *\n * @since 0.1.0\n *\n * @param {Props} props Component props.\n *\n * @returns {ReactElement}\n */\nconst DevClipboard = props => {\n  const {\n    name,\n    clipboardItems\n  } = props;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorBoundary, {\n    key: \"et-vb-divi-modals--dev-clipboard\",\n    componentName: \"et-vb-divi-modals--dev-clipboard\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.WrapperContainer, {\n    draggable: true,\n    resizable: true,\n    expandable: true,\n    snappable: true,\n    modalName: name\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.Header, {\n    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clipboard', 'et_builder')\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.BodyContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_modal__WEBPACK_IMPORTED_MODULE_2__.PanelContainer, {\n    id: \"clipboard\",\n    opened: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      padding: '20px 20px 40px 20px',\n      height: 400\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ClipboardItems, {\n    items: clipboardItems\n  }))))));\n};\n\n//# sourceURL=webpack://d5-clipboard-extension/./src/modal/component.jsx?");

/***/ }),

/***/ "./src/modal/container.jsx":
/*!*********************************!*\
  !*** ./src/modal/container.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DevClipboardContainer: () => (/* binding */ DevClipboardContainer)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/modal/component.jsx\");\n// Local dependencies.\n\n\n// Externals.\n// @todo webpack should be updated for handling the following packages that is exposed\n//       via global so these can be used as component using import instead of accessing global.\nconst {\n  withSelect,\n  useSelect\n} = window.divi.data;\nconst DevClipboardContainer = withSelect(selectStore => {\n  const clipboardItems = selectStore('divi/clipboard').getItems();\n  return {\n    clipboardItems\n  };\n})(_component__WEBPACK_IMPORTED_MODULE_0__.DevClipboard);\n\n//# sourceURL=webpack://d5-clipboard-extension/./src/modal/container.jsx?");

/***/ }),

/***/ "./src/modal/registerDevClipboard.js":
/*!*******************************************!*\
  !*** ./src/modal/registerDevClipboard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ \"./src/modal/container.jsx\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons */ \"./src/icons/index.js\");\n\n\nwindow.vendor.wp.hooks.addFilter('divi.modalLibrary.modalMapping', 'divi', modals => {\n  modals.DevClipboard = {\n    name: \"divi/dev-clipboard\",\n    label: \"Clipboard\",\n    type: \"multiInstanceModal\",\n    component: _container__WEBPACK_IMPORTED_MODULE_0__.DevClipboardContainer\n  };\n  return modals;\n});\n\n// Add module icons to the icon library.\nwindow.vendor.wp.hooks.addFilter('divi.iconLibrary.icon.map', 'extensionExample', icons => {\n  return {\n    ...icons,\n    // This is important. Without this, all other icons will be overwritten.\n    [_icons__WEBPACK_IMPORTED_MODULE_1__.devClipboard.name]: _icons__WEBPACK_IMPORTED_MODULE_1__.devClipboard\n  };\n});\n\n//# sourceURL=webpack://d5-clipboard-extension/./src/modal/registerDevClipboard.js?");

/***/ }),

/***/ "./src/modal/style.scss":
/*!******************************!*\
  !*** ./src/modal/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://d5-clipboard-extension/./src/modal/style.scss?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0,
/******/ 			"./vb-bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkd5_clipboard_extension"] = self["webpackChunkd5_clipboard_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./vb-bundle"], () => (__webpack_require__("./src/index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;