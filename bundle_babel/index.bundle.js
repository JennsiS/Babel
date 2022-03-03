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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_inicio_inicio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/inicio/inicio.js */ \"./src/inicio/inicio.js\");\n\n(0,_src_inicio_inicio_js__WEBPACK_IMPORTED_MODULE_0__.startApp)();\n\n//# sourceURL=webpack://Lab-6-Webpack/./index.js?");

/***/ }),

/***/ "./src/inicio/historia.js":
/*!********************************!*\
  !*** ./src/inicio/historia.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inicioHistoria\": () => (/* binding */ inicioHistoria)\n/* harmony export */ });\n/* harmony import */ var _asteroide_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroide.jpg */ \"./src/inicio/asteroide.jpg\");\n/* harmony import */ var _Aphelion_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Aphelion.mp3 */ \"./src/inicio/Aphelion.mp3\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n\n\n\nvar inicioHistoria = function inicioHistoria() {\n  var title = document.createElement(\"h2\");\n  title.id = \"historia\";\n  title.className = \"animate__animated animate__bounce\";\n  title.innerHTML = \"Programa de viajeros 2022\";\n  bodyDiv.appendChild(title);\n  var asteroideImg = document.createElement('img');\n  asteroideImg.src = _asteroide_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  asteroideImg.className = \"asteroideImg\";\n  asteroideImg.width = \"900\";\n  asteroideImg.height = \"600\";\n  bodyDiv.appendChild(asteroideImg);\n  var divAudio = document.createElement(\"div\");\n  bodyDiv.appendChild(divAudio);\n  var music = document.createElement(\"audio\");\n  music.src = _Aphelion_mp3__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  music.controls = \"True\";\n  music.autoplay = \"True\";\n  music.loop = \"True\";\n  divAudio.appendChild(music);\n  var p1 = document.createElement(\"p\");\n  p1.innerHTML = \"Es el año 2072, hace meses que se vive una constante crisis en el mundo muchas personas han muerto a causa de pandemias, guerras y desastres naturales nunca antes vistos.<br> Todo esto es malo pero, está apunto de ocurrir lo peor, de esto no hay vuelta atrás. La NASA descubrió que está apunto de chocar un asteroide contra la tierra, sin embargo, reconocen que es muy tarde para hacer algo ya que este se encuentra muy cerca. Todo el mundo cree que vamos a morir en meses y eso únicamente ha aumentado el pánico, las peleas y alborotos.\";\n  bodyDiv.appendChild(p1);\n  var p2 = document.createElement(\"p\");\n  p2.innerHTML = 'Una organización poco conocida tiene información que no ha compartido con todo el mundo, porque tienen una herramienta en sus manos que puede llegar a ser revolucionaria pero, peligrosa. <br>  <b><span style=\"color: crimson;\">Una maquina del tiempo. </span></b><br>No quieren compartir esta información con todo el mundo porque saben que se generarían aún más conflictos y podría ser usado con malas intenciones. La intensión de la organización es enviar a personas capacitadas al pasado para prevenir algunos de los eventos más catastroficos que nos han llevado hasta este momento. Tú eres uno de ellos ¿Aceptas el reto?';\n  bodyDiv.appendChild(p2);\n  var divButtons = document.createElement(\"div\");\n  divButtons.className = \"divButtons\";\n  bodyDiv.appendChild(divButtons);\n  var button = document.createElement(\"button\");\n  button.type = \"button\";\n  button.className = \"btn btn-info\";\n  button.innerHTML = \"Mision\";\n\n  button.onclick = function relocate_home() {\n    location.href = \"mision.html\";\n  };\n\n  divButtons.append(button);\n  var button2 = document.createElement(\"button\");\n  button2.type = \"button\";\n  button2.className = \"btn btn-dark\";\n  button2.innerHTML = \"Estoy fuera\";\n\n  button2.onclick = function relocate_home() {\n    location.href = \"fuera.html\";\n  };\n\n  divButtons.append(button2);\n  var label1 = document.createElement(\"label\");\n  label1.innerHTML = \"Progreso de la misión: \";\n  bodyDiv.appendChild(label1);\n  var progress = document.createElement(\"div\");\n  progress.className = \"progress\";\n  bodyDiv.appendChild(progress);\n  var progressbar = document.createElement(\"div\");\n  progressbar.className = \"progress-bar progress-bar-striped progress-bar-animated\";\n  progressbar.role = \"progressbar\";\n  progressbar.ariaValueNow = \"0\";\n  progressbar.ariaValueMin = \"0\";\n  progressbar.ariaValueMax = \"100\";\n  progressbar.style.width = \"0%\";\n  progress.appendChild(progressbar);\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/inicio/historia.js?");

/***/ }),

/***/ "./src/inicio/inicio.js":
/*!******************************!*\
  !*** ./src/inicio/inicio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startApp\": () => (/* binding */ startApp)\n/* harmony export */ });\n/* harmony import */ var _inicio_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.css */ \"./src/inicio/inicio.css\");\n/* harmony import */ var _historia_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historia.js */ \"./src/inicio/historia.js\");\n\n\n\nfunction newDiv(id, width, height, bckgColor) {\n  var nDiv = document.createElement(\"div\");\n  nDiv.id = id;\n  nDiv.style.width = width;\n  nDiv.style.height = height;\n  nDiv.style.backgroundColor = bckgColor;\n  return nDiv;\n}\n\nvar startApp = function startApp() {\n  var bodyDiv = newDiv(\"bodyDiv\", 100, 100, \"transparent\");\n  document.body.appendChild(bodyDiv);\n  var jumbotron = document.createElement(\"div\");\n  jumbotron.className = \"jumbotron jumbotron-fluid\";\n  bodyDiv.appendChild(jumbotron);\n  var container = document.createElement(\"div\");\n  container.className = \"container\";\n  jumbotron.appendChild(container);\n  var title1 = document.createElement(\"h1\");\n  title1.innerHTML = \"Laboratorio 6\";\n  title1.className = \"display-4\";\n  container.appendChild(title1);\n  var paragraph = document.createElement(\"p\");\n  paragraph.innerHTML = \"Sistemas y tecnologías web <br>Jennifer Sandoval<br>\";\n  paragraph.className = \"lead\";\n  container.appendChild(paragraph);\n  var github = document.createElement(\"a\");\n  github.href = \"https://github.com/JennsiS/Lab-6-Webpack\";\n  github.innerHTML = \"Link del repositorio\";\n  container.appendChild(github);\n  (0,_historia_js__WEBPACK_IMPORTED_MODULE_1__.inicioHistoria)();\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/inicio/inicio.js?");

/***/ }),

/***/ "./src/inicio/Aphelion.mp3":
/*!*********************************!*\
  !*** ./src/inicio/Aphelion.mp3 ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"7202bc2e6bb5cd767e5c336db899f0dc.mp3\");\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/inicio/Aphelion.mp3?");

/***/ }),

/***/ "./src/inicio/asteroide.jpg":
/*!**********************************!*\
  !*** ./src/inicio/asteroide.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d38dbab8dfcc0f23cebe6b13ffdd72a6.jpg\");\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/inicio/asteroide.jpg?");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./node_modules/animate.css/animate.css?");

/***/ }),

/***/ "./src/inicio/inicio.css":
/*!*******************************!*\
  !*** ./src/inicio/inicio.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/inicio/inicio.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;