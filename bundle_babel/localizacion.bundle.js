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

/***/ "./src/localizacion/localizacion.js":
/*!******************************************!*\
  !*** ./src/localizacion/localizacion.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _localizacion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localizacion.css */ \"./src/localizacion/localizacion.css\");\n/* harmony import */ var _guerra_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guerra.jpg */ \"./src/localizacion/guerra.jpg\");\n/* harmony import */ var _enfermedad_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enfermedad.jpg */ \"./src/localizacion/enfermedad.jpg\");\n/* harmony import */ var _mundo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mundo.jpg */ \"./src/localizacion/mundo.jpg\");\n/* harmony import */ var _planta_nuclear_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planta-nuclear.jpeg */ \"./src/localizacion/planta-nuclear.jpeg\");\n\n\n\n\n\n\nfunction newDiv(id, width, height, bckgColor) {\n  var nDiv = document.createElement(\"div\");\n  nDiv.id = id;\n  nDiv.style.width = width;\n  nDiv.style.height = height;\n  nDiv.style.backgroundColor = bckgColor;\n  return nDiv;\n}\n\nvar bodyDiv = newDiv(\"bodyDivLocalizacion\", 100, 100, \"transparent\");\ndocument.body.appendChild(bodyDiv);\nvar label1 = document.createElement(\"label\");\nlabel1.innerHTML = \"Progreso de la misión: <br>\";\nbodyDiv.appendChild(label1);\nvar progress = document.createElement(\"div\");\nprogress.className = \"progress\";\nbodyDiv.appendChild(progress);\nvar progressbar = document.createElement(\"div\");\nprogressbar.className = \"progress-bar progress-bar-striped progress-bar-animated\";\nprogressbar.role = \"progressbar\";\nprogressbar.ariaValueNow = \"20\";\nprogressbar.ariaValueMin = \"0\";\nprogressbar.ariaValueMax = \"100\";\nprogressbar.style.width = \"20%\";\nprogress.appendChild(progressbar);\nvar title1 = document.createElement(\"h1\");\ntitle1.innerHTML = \"Elige tu localización\";\nbodyDiv.appendChild(title1);\nvar mapa = document.createElement('img');\nmapa.src = _mundo_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nmapa.className = \"mapa\";\nmapa.width = \"1200\";\nmapa.height = \"600\";\nbodyDiv.appendChild(mapa);\nvar p1 = document.createElement(\"p\");\np1.className = \"p1\";\np1.innerHTML = \"Te damos la oportunidad de que puedas elegir a que localización quieres ser transportado en el año 2022. Cada locaclización es una misión diferente a momentos que pensamos que son cruciales para evitar parte de las grandes catastrofes actuales. Recuerda tomar las elecciones correctas, puedes hacer un gran cambio en la historia o de lo contrario tendrás que vivir las consecuencias de tus decisiones y alguien intentará tomar tu lugar en la misión.\";\nbodyDiv.appendChild(p1);\nvar title2 = document.createElement(\"h3\");\ntitle2.innerHTML = \"Elige: \";\nbodyDiv.appendChild(title2);\nvar divCardGroup = document.createElement(\"div\");\ndivCardGroup.className = \"card-group\";\nbodyDiv.appendChild(divCardGroup);\nvar divCard = document.createElement(\"div\");\ndivCard.className = \"card\";\ndivCardGroup.appendChild(divCard);\nvar cardImg = document.createElement(\"img\");\ncardImg.src = _planta_nuclear_jpeg__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\ncardImg.className = \"card-img-top\";\ndivCard.appendChild(cardImg);\nvar cardBody = document.createElement(\"div\");\ncardBody.className = \"card-body\";\ndivCard.appendChild(cardBody);\nvar cardTitle = document.createElement(\"h5\");\ncardTitle.className = \"card-title\";\ncardTitle.innerHTML = \"China\";\ncardBody.appendChild(cardTitle);\nvar cardText = document.createElement(\"p\");\ncardText.innerHTML = \"Explosión nuclear en China\";\ncardText.className = \"card-text\";\ncardBody.appendChild(cardText);\nvar link = document.createElement(\"a\");\nlink.className = \"btn btn-primary\";\nlink.innerHTML = \"Ir ahora\";\nlink.href = \"explosion.html\";\ncardBody.appendChild(link);\nvar divCard2 = document.createElement(\"div\");\ndivCard2.className = \"card\";\ndivCardGroup.appendChild(divCard2);\nvar cardImg2 = document.createElement(\"img\");\ncardImg2.src = _enfermedad_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\ncardImg2.className = \"card-img-top\";\ndivCard2.appendChild(cardImg2);\nvar cardBody2 = document.createElement(\"div\");\ncardBody2.className = \"card-body\";\ndivCard2.appendChild(cardBody2);\nvar cardTitle2 = document.createElement(\"h5\");\ncardTitle2.className = \"card-title\";\ncardTitle2.innerHTML = \"Senegal\";\ncardBody2.appendChild(cardTitle2);\nvar cardText2 = document.createElement(\"p\");\ncardText2.innerHTML = \"Mutación enfermedad letal\";\ncardText2.className = \"card-text\";\ncardBody2.appendChild(cardText2);\nvar link2 = document.createElement(\"a\");\nlink2.className = \"btn btn-primary\";\nlink2.innerHTML = \"Ir ahora\";\nlink2.href = \"mutacion.html\";\ncardBody2.appendChild(link2);\nvar divCard3 = document.createElement(\"div\");\ndivCard3.className = \"card\";\ndivCardGroup.appendChild(divCard3);\nvar cardImg3 = document.createElement(\"img\");\ncardImg3.src = _guerra_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\ncardImg3.className = \"card-img-top\";\ndivCard3.appendChild(cardImg3);\nvar cardBody3 = document.createElement(\"div\");\ncardBody3.className = \"card-body\";\ndivCard3.appendChild(cardBody3);\nvar cardTitle3 = document.createElement(\"h5\");\ncardTitle3.className = \"card-title\";\ncardTitle3.innerHTML = \"Rusia <i>MISIÓN ALFA</i>\";\ncardBody3.appendChild(cardTitle3);\nvar cardText3 = document.createElement(\"p\");\ncardText3.innerHTML = \"Mutación enfermedad letal\";\ncardText3.className = \"card-text\";\ncardBody3.appendChild(cardText3);\nvar link3 = document.createElement(\"a\");\nlink3.className = \"btn btn-primary\";\nlink3.innerHTML = \"Ir ahora\";\nlink3.href = \"guerra.html\";\ncardBody3.appendChild(link3);\nvar button = document.createElement(\"button\");\nbutton.type = \"button\";\nbutton.className = \"btn btn-secondary btn-sm\";\nbutton.innerHTML = \"Regresar al inicio\";\n\nbutton.onclick = function relocate_home() {\n  location.href = \"index.html\";\n};\n\nbodyDiv.append(button);\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/localizacion/localizacion.js?");

/***/ }),

/***/ "./src/localizacion/enfermedad.jpg":
/*!*****************************************!*\
  !*** ./src/localizacion/enfermedad.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d875f990495441c94aea54d2820218e3.jpg\");\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/localizacion/enfermedad.jpg?");

/***/ }),

/***/ "./src/localizacion/guerra.jpg":
/*!*************************************!*\
  !*** ./src/localizacion/guerra.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6e630f7bf37b2b25df5d75e0b3020ced.jpg\");\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/localizacion/guerra.jpg?");

/***/ }),

/***/ "./src/localizacion/mundo.jpg":
/*!************************************!*\
  !*** ./src/localizacion/mundo.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a602587c54f08b1a485ada0c39768c0a.jpg\");\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/localizacion/mundo.jpg?");

/***/ }),

/***/ "./src/localizacion/planta-nuclear.jpeg":
/*!**********************************************!*\
  !*** ./src/localizacion/planta-nuclear.jpeg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"93bf03b2b5728d187c487d9f1b0322a7.jpeg\");\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/localizacion/planta-nuclear.jpeg?");

/***/ }),

/***/ "./src/localizacion/localizacion.css":
/*!*******************************************!*\
  !*** ./src/localizacion/localizacion.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/localizacion/localizacion.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/localizacion/localizacion.js");
/******/ 	
/******/ })()
;