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

/***/ "./src/fuera/borrando-memoria.jpg":
/*!****************************************!*\
  !*** ./src/fuera/borrando-memoria.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"77b9de7fc1d919ca5e70168860d244dc.jpg\");\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/fuera/borrando-memoria.jpg?");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./node_modules/animate.css/animate.css?");

/***/ }),

/***/ "./src/fuera/fuera.css":
/*!*****************************!*\
  !*** ./src/fuera/fuera.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/fuera/fuera.css?");

/***/ }),

/***/ "./src/fuera/fuera.js":
/*!****************************!*\
  !*** ./src/fuera/fuera.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _borrando_memoria_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./borrando-memoria.jpg */ \"./src/fuera/borrando-memoria.jpg\");\n/* harmony import */ var _fuera_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fuera.css */ \"./src/fuera/fuera.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n\r\n\r\n\r\n\r\nfunction newDiv(id,width,height,bckgColor) {\r\n    let nDiv = document.createElement(\"div\");\r\n    nDiv.id = id;\r\n    nDiv.style.width = width;\r\n    nDiv.style.height = height;\r\n    nDiv.style.backgroundColor = bckgColor;\r\n    return nDiv;\r\n}\r\n\r\n    let col12 = document.getElementById(\"col12\");\r\n    let col22 = document.getElementById(\"col22\");\r\n    let col32 = document.getElementById(\"col32\");\r\n    /*\r\n\r\n    let bodyDiv = newDiv(\"bodyDivFuera\",100,100,\"transparent\");\r\n    document.body.appendChild(bodyDiv);\r\n*/\r\n    let title1 = document.createElement(\"h1\");\r\n    title1.innerHTML =\"¡Adiós!\";\r\n    title1.className = \"animate__animated animate__lightSpeedOutRight\";\r\n    col12.appendChild(title1);\r\n\r\n    let memoryImg = document.createElement('img');\r\n    memoryImg.src=_borrando_memoria_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    memoryImg.className =\"borrandoImg\";\r\n    memoryImg.width =\"1000\";\r\n    memoryImg.height=\"500\";\r\n    memoryImg.className = \"animate__animated animate__rotateOut\";\r\n    col22.appendChild(memoryImg);\r\n\r\n    let bye = document.createElement(\"p\");\r\n    bye.innerHTML = \"<i>Después de ver el siguiente código olvidaras que existe un programa de viajeros. Buscaremos a otra persona que ocupe tu lugar ahora solo te queda esperar como todos los demás sin la posibilidad de saber que hay una esperanza.</i>\";\r\n    bye.className = \"animate__animated animate__zoomOut\";\r\n    col22.appendChild(bye);\r\n\r\n    let symbols = document.createElement('h4');\r\n    symbols.innerHTML = \"⏃⏚☊⎅⟒⎎☌ ⊑⟟⟊☍⌰⋔⋏⍜⌿⍾⍀⌇⏁⎍⎐⍙⊬⋉⋔⋏⍜⌿⍾⍾⍀⌇⏁⟊☍⌰⋔⋏⌇⏁⎍⎐⍙⊬⊑⟟⟊☍⌰⋔⋏⍜⌿⍾⏁⎍⎐⍙⊬ ⊑⟟⟊☍⌰⋔⋏⌿⍾⍀⌇⏁⎍⎐⍙⊬⋉⋔⋏⌿⍾⍾⍀⌇⏁⟊☍\";\r\n    symbols.className =\"animate__animated animate__lightSpeedOutRight\";\r\n    col22.appendChild(symbols);\r\n\r\n    let divButton = document.createElement(\"div\");\r\n    divButton.className = \"divButton\";\r\n    col32.appendChild(divButton);\r\n\r\n    let button = document.createElement(\"button\");\r\n    button.type = \"button\";\r\n    button.className = \"btn btn-info\";\r\n    button.innerHTML = \"Regresar al inicio\"\r\n    button.onclick = function relocate_home()\r\n    {\r\n         location.href = \"index.html\";\r\n    } \r\n    divButton.append(button);\r\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/fuera/fuera.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/fuera/fuera.js");
/******/ 	
/******/ })()
;