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

/***/ "./src/mision/botones.js":
/*!*******************************!*\
  !*** ./src/mision/botones.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agregarBotones\": () => (/* binding */ agregarBotones)\n/* harmony export */ });\nvar agregarBotones = function agregarBotones() {\n  var bodyDiv = document.getElementById(\"bodyDivMision\");\n  var divButtons = document.createElement(\"div\");\n  divButtons.className = \"divButtons\";\n  bodyDiv.appendChild(divButtons);\n  var button = document.createElement(\"button\");\n  button.type = \"button\";\n  button.className = \"btn-grad\";\n  button.innerHTML = \"Estoy de acuerdo\";\n\n  button.onclick = function relocate_home() {\n    location.href = \"localizacion.html\";\n  };\n\n  divButtons.append(button);\n  var button2 = document.createElement(\"button\");\n  button2.type = \"button\";\n  button2.className = \"btn-grad2\";\n  button2.innerHTML = \"No estoy de acuerdo\";\n\n  button2.onclick = function relocate_home() {\n    location.href = \"fuera.html\";\n  };\n\n  divButtons.append(button2);\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/mision/botones.js?");

/***/ }),

/***/ "./src/mision/mision.js":
/*!******************************!*\
  !*** ./src/mision/mision.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _botones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./botones */ \"./src/mision/botones.js\");\n/* harmony import */ var _mision_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mision.css */ \"./src/mision/mision.css\");\n\n\n\nfunction newDiv(id, width, height, bckgColor) {\n  var nDiv = document.createElement(\"div\");\n  nDiv.id = id;\n  nDiv.style.width = width;\n  nDiv.style.height = height;\n  nDiv.style.backgroundColor = bckgColor;\n  return nDiv;\n}\n\nvar bodyDiv = newDiv(\"bodyDivMision\", 100, 100, \"transparent\");\ndocument.body.appendChild(bodyDiv);\nvar label1 = document.createElement(\"label\");\nlabel1.innerHTML = \"Progreso de la misión: <br>\";\nbodyDiv.appendChild(label1);\nvar progress = document.createElement(\"div\");\nprogress.className = \"progress\";\nbodyDiv.appendChild(progress);\nvar progressbar = document.createElement(\"div\");\nprogressbar.className = \"progress-bar progress-bar-striped progress-bar-animated\";\nprogressbar.role = \"progressbar\";\nprogressbar.ariaValueNow = \"5\";\nprogressbar.ariaValueMin = \"0\";\nprogressbar.ariaValueMax = \"100\";\nprogressbar.style.width = \"5%\";\nprogress.appendChild(progressbar);\nvar title1 = document.createElement(\"h1\");\ntitle1.innerHTML = \"Primera misión\";\nbodyDiv.appendChild(title1);\nvar p1 = document.createElement(\"p\");\np1.innerHTML = \"Has tomado la elección correcta. Antes de empezar tu primera misión debemos dejar unas reglas claras:\";\nbodyDiv.appendChild(p1);\nvar contenedorLista = document.createElement(\"ol\");\nbodyDiv.appendChild(contenedorLista);\nvar item1 = document.createElement(\"li\");\nitem1.innerHTML = \"Antes de ir a tu misión no puedes comentar nada de lo que harás con nadie, tampoco en el pasado. Te tenemos vigilado.\";\ncontenedorLista.appendChild(item1);\nvar item2 = document.createElement(\"li\");\nitem2.innerHTML = \"Una vez aceptes la misión no hay vuelta atrás.\";\ncontenedorLista.appendChild(item2);\nvar item3 = document.createElement(\"li\");\nitem3.innerHTML = \"Después de cada decisión que tomes podrás saber tu resultado, si no es lo que esperabamos no puedes regresar al futuro. Tienes que vivir en el pasado.\";\ncontenedorLista.appendChild(item3);\nvar item4 = document.createElement(\"li\");\nitem4.innerHTML = \"No te distraigas, tu misión es lo más importante.\";\ncontenedorLista.appendChild(item4);\n(0,_botones__WEBPACK_IMPORTED_MODULE_0__.agregarBotones)();\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/mision/mision.js?");

/***/ }),

/***/ "./src/mision/mision.css":
/*!*******************************!*\
  !*** ./src/mision/mision.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/mision/mision.css?");

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