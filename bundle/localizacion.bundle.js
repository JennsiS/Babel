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

/***/ }),

/***/ "./src/localizacion/localizacion.js":
/*!******************************************!*\
  !*** ./src/localizacion/localizacion.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _localizacion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localizacion.css */ \"./src/localizacion/localizacion.css\");\n/* harmony import */ var _guerra_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guerra.jpg */ \"./src/localizacion/guerra.jpg\");\n/* harmony import */ var _enfermedad_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enfermedad.jpg */ \"./src/localizacion/enfermedad.jpg\");\n/* harmony import */ var _mundo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mundo.jpg */ \"./src/localizacion/mundo.jpg\");\n/* harmony import */ var _planta_nuclear_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planta-nuclear.jpeg */ \"./src/localizacion/planta-nuclear.jpeg\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction newDiv(id,width,height,bckgColor) {\r\n    let nDiv = document.createElement(\"div\");\r\n    nDiv.id = id;\r\n    nDiv.style.width = width;\r\n    nDiv.style.height = height;\r\n    nDiv.style.backgroundColor = bckgColor;\r\n    return nDiv;\r\n}\r\n    let bodyDiv = newDiv(\"bodyDivLocalizacion\",100,100,\"transparent\");\r\n    document.body.appendChild(bodyDiv);\r\n\r\n    let label1 = document.createElement(\"label\");\r\n    label1.innerHTML = \"Progreso de la misión: <br>\";\r\n    bodyDiv.appendChild(label1);\r\n\r\n    let progress = document.createElement(\"div\");\r\n    progress.className=\"progress\";\r\n    bodyDiv.appendChild(progress);\r\n\r\n    let progressbar = document.createElement(\"div\");\r\n    progressbar.className = \"progress-bar progress-bar-striped progress-bar-animated\";\r\n    progressbar.role = \"progressbar\";\r\n    progressbar.ariaValueNow=\"20\";\r\n    progressbar.ariaValueMin=\"0\";\r\n    progressbar.ariaValueMax=\"100\";\r\n    progressbar.style.width =\"20%\";\r\n    progress.appendChild(progressbar);\r\n\r\n    let title1 = document.createElement(\"h1\");\r\n    title1.innerHTML =\"Elige tu localización\";\r\n    bodyDiv.appendChild(title1);\r\n\r\n    let mapa = document.createElement('img');\r\n    mapa.src= _mundo_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n    mapa.className = \"mapa\";\r\n    mapa.width =\"1200\";\r\n    mapa.height=\"600\";\r\n    bodyDiv.appendChild(mapa);\r\n\r\n    let p1 = document.createElement(\"p\");\r\n    p1.className =\"p1\";\r\n    p1.innerHTML = \"Te damos la oportunidad de que puedas elegir a que localización quieres ser transportado en el año 2022. Cada locaclización es una misión diferente a momentos que pensamos que son cruciales para evitar parte de las grandes catastrofes actuales. Recuerda tomar las elecciones correctas, puedes hacer un gran cambio en la historia o de lo contrario tendrás que vivir las consecuencias de tus decisiones y alguien intentará tomar tu lugar en la misión.\";\r\n    bodyDiv.appendChild(p1);\r\n\r\n    let title2 = document.createElement(\"h3\");\r\n    title2.innerHTML =\"Elige: \";\r\n    bodyDiv.appendChild(title2);\r\n\r\n    let divCardGroup = document.createElement(\"div\");\r\n    divCardGroup.className =\"card-group\";\r\n    bodyDiv.appendChild(divCardGroup);\r\n\r\n    let divCard = document.createElement(\"div\");\r\n    divCard.className =\"card\";\r\n    divCardGroup.appendChild(divCard);\r\n\r\n    let cardImg = document.createElement(\"img\");\r\n    cardImg.src = _planta_nuclear_jpeg__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\r\n    cardImg.className = \"card-img-top\";\r\n    divCard.appendChild(cardImg);\r\n\r\n    let cardBody = document.createElement(\"div\");\r\n    cardBody.className = \"card-body\";\r\n    divCard.appendChild(cardBody);\r\n\r\n    let cardTitle = document.createElement(\"h5\");\r\n    cardTitle.className =\"card-title\";\r\n    cardTitle.innerHTML =\"China\";\r\n    cardBody.appendChild(cardTitle);\r\n\r\n    let cardText = document.createElement(\"p\");\r\n    cardText.innerHTML =\"Explosión nuclear en China\";\r\n    cardText.className =\"card-text\"\r\n    cardBody.appendChild(cardText);\r\n\r\n    let link = document.createElement(\"a\");\r\n    link.className = \"btn btn-primary\";\r\n    link.innerHTML = \"Ir ahora\";\r\n    link.href = \"explosion.html\";\r\n    cardBody.appendChild(link);\r\n\r\n    let divCard2 = document.createElement(\"div\");\r\n    divCard2.className =\"card\";\r\n    divCardGroup.appendChild(divCard2);\r\n\r\n    let cardImg2 = document.createElement(\"img\");\r\n    cardImg2.src = _enfermedad_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n    cardImg2.className = \"card-img-top\";\r\n    divCard2.appendChild(cardImg2);\r\n\r\n    let cardBody2 = document.createElement(\"div\");\r\n    cardBody2.className = \"card-body\";\r\n    divCard2.appendChild(cardBody2);\r\n\r\n    let cardTitle2 = document.createElement(\"h5\");\r\n    cardTitle2.className =\"card-title\";\r\n    cardTitle2.innerHTML =\"Senegal\";\r\n    cardBody2.appendChild(cardTitle2);\r\n\r\n    let cardText2 = document.createElement(\"p\");\r\n    cardText2.innerHTML =\"Mutación enfermedad letal\";\r\n    cardText2.className =\"card-text\"\r\n    cardBody2.appendChild(cardText2);\r\n\r\n    let link2 = document.createElement(\"a\");\r\n    link2.className = \"btn btn-primary\";\r\n    link2.innerHTML = \"Ir ahora\";\r\n    link2.href = \"mutacion.html\";\r\n    cardBody2.appendChild(link2);\r\n\r\n    let divCard3 = document.createElement(\"div\");\r\n    divCard3.className =\"card\";\r\n    divCardGroup.appendChild(divCard3);\r\n\r\n    let cardImg3 = document.createElement(\"img\");\r\n    cardImg3.src = _guerra_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n    cardImg3.className = \"card-img-top\";\r\n    divCard3.appendChild(cardImg3);\r\n\r\n    let cardBody3 = document.createElement(\"div\");\r\n    cardBody3.className = \"card-body\";\r\n    divCard3.appendChild(cardBody3);\r\n\r\n    let cardTitle3 = document.createElement(\"h5\");\r\n    cardTitle3.className =\"card-title\";\r\n    cardTitle3.innerHTML =\"Rusia <i>MISIÓN ALFA</i>\";\r\n    cardBody3.appendChild(cardTitle3);\r\n\r\n    let cardText3 = document.createElement(\"p\");\r\n    cardText3.innerHTML =\"Mutación enfermedad letal\";\r\n    cardText3.className =\"card-text\"\r\n    cardBody3.appendChild(cardText3);\r\n\r\n    let link3 = document.createElement(\"a\");\r\n    link3.className = \"btn btn-primary\";\r\n    link3.innerHTML = \"Ir ahora\";\r\n    link3.href = \"guerra.html\";\r\n    cardBody3.appendChild(link3);\r\n\r\n    let button = document.createElement(\"button\");\r\n    button.type = \"button\";\r\n    button.className = \"btn btn-secondary btn-sm\";\r\n    button.innerHTML = \"Regresar al inicio\"\r\n    button.onclick = function relocate_home()\r\n    {\r\n         location.href = \"index.html\";\r\n    } \r\n    bodyDiv.append(button);\r\n\r\n\r\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/localizacion/localizacion.js?");

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