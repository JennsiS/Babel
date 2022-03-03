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

/***/ "./src/mision/mision.css":
/*!*******************************!*\
  !*** ./src/mision/mision.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/mision/mision.css?");

/***/ }),

/***/ "./src/mision/botones.js":
/*!*******************************!*\
  !*** ./src/mision/botones.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agregarBotones\": () => (/* binding */ agregarBotones)\n/* harmony export */ });\nconst agregarBotones = () => {\r\n    let bodyDiv = document.getElementById(\"bodyDivMision\");\r\n    let divButtons = document.createElement(\"div\");\r\n    divButtons.className = \"divButtons\";\r\n    bodyDiv.appendChild(divButtons);\r\n\r\n\r\n    let button = document.createElement(\"button\");\r\n    button.type = \"button\";\r\n    button.className = \"btn-grad\";\r\n    button.innerHTML = \"Estoy de acuerdo\"\r\n    button.onclick = function relocate_home()\r\n    {\r\n         location.href = \"localizacion.html\";\r\n    } \r\n    divButtons.append(button);\r\n\r\n    let button2 = document.createElement(\"button\");\r\n    button2.type = \"button\";\r\n    button2.className = \"btn-grad2\";\r\n    button2.innerHTML = \"No estoy de acuerdo\"\r\n    button2.onclick = function relocate_home()\r\n    {\r\n         location.href = \"fuera.html\";\r\n    } \r\n    divButtons.append(button2);\r\n\r\n};\r\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/mision/botones.js?");

/***/ }),

/***/ "./src/mision/mision.js":
/*!******************************!*\
  !*** ./src/mision/mision.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _botones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./botones */ \"./src/mision/botones.js\");\n/* harmony import */ var _mision_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mision.css */ \"./src/mision/mision.css\");\n\r\n\r\n\r\nfunction newDiv(id,width,height,bckgColor) {\r\n    let nDiv = document.createElement(\"div\");\r\n    nDiv.id = id;\r\n    nDiv.style.width = width;\r\n    nDiv.style.height = height;\r\n    nDiv.style.backgroundColor = bckgColor;\r\n    return nDiv;\r\n}\r\n\r\n    let bodyDiv = newDiv(\"bodyDivMision\",100,100,\"transparent\");\r\n    document.body.appendChild(bodyDiv);\r\n\r\n    let label1 = document.createElement(\"label\");\r\n    label1.innerHTML = \"Progreso de la misión: <br>\";\r\n    bodyDiv.appendChild(label1);\r\n\r\n    let progress = document.createElement(\"div\");\r\n    progress.className=\"progress\";\r\n    bodyDiv.appendChild(progress);\r\n\r\n    let progressbar = document.createElement(\"div\");\r\n    progressbar.className = \"progress-bar progress-bar-striped progress-bar-animated\";\r\n    progressbar.role = \"progressbar\";\r\n    progressbar.ariaValueNow=\"5\";\r\n    progressbar.ariaValueMin=\"0\";\r\n    progressbar.ariaValueMax=\"100\";\r\n    progressbar.style.width =\"5%\";\r\n    progress.appendChild(progressbar);\r\n\r\n    let title1 = document.createElement(\"h1\");\r\n    title1.innerHTML =\"Primera misión\";\r\n    bodyDiv.appendChild(title1);\r\n\r\n    let p1 = document.createElement(\"p\");\r\n    p1.innerHTML = \"Has tomado la elección correcta. Antes de empezar tu primera misión debemos dejar unas reglas claras:\";\r\n    bodyDiv.appendChild(p1);\r\n\r\n    let contenedorLista = document.createElement(\"ol\");\r\n    bodyDiv.appendChild(contenedorLista);\r\n\r\n    let item1 = document.createElement(\"li\");\r\n    item1.innerHTML=\"Antes de ir a tu misión no puedes comentar nada de lo que harás con nadie, tampoco en el pasado. Te tenemos vigilado.\";\r\n    contenedorLista.appendChild(item1);\r\n\r\n    let item2 = document.createElement(\"li\");\r\n    item2.innerHTML=\"Una vez aceptes la misión no hay vuelta atrás.\";\r\n    contenedorLista.appendChild(item2);\r\n\r\n    let item3 = document.createElement(\"li\");\r\n    item3.innerHTML=\"Después de cada decisión que tomes podrás saber tu resultado, si no es lo que esperabamos no puedes regresar al futuro. Tienes que vivir en el pasado.\";\r\n    contenedorLista.appendChild(item3);\r\n\r\n    let item4 = document.createElement(\"li\");\r\n    item4.innerHTML=\"No te distraigas, tu misión es lo más importante.\";\r\n    contenedorLista.appendChild(item4);\r\n\r\n    (0,_botones__WEBPACK_IMPORTED_MODULE_0__.agregarBotones)();\r\n    \r\n\r\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/mision/mision.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/mision/mision.js");
/******/ 	
/******/ })()
;