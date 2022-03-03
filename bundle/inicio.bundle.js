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

/***/ }),

/***/ "./src/inicio/historia.js":
/*!********************************!*\
  !*** ./src/inicio/historia.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inicioHistoria\": () => (/* binding */ inicioHistoria)\n/* harmony export */ });\n/* harmony import */ var _asteroide_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroide.jpg */ \"./src/inicio/asteroide.jpg\");\n/* harmony import */ var _Aphelion_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Aphelion.mp3 */ \"./src/inicio/Aphelion.mp3\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n\r\n\r\n\r\n\r\nconst inicioHistoria = () => {\r\n    let title = document.createElement(\"h2\");\r\n    title.id =\"historia\";\r\n    title.className =\"animate__animated animate__bounce\";\r\n    title.innerHTML =\"Programa de viajeros 2022\";\r\n    bodyDiv.appendChild(title);\r\n\r\n    let asteroideImg = document.createElement('img');\r\n    asteroideImg.src= _asteroide_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    asteroideImg.className =\"asteroideImg\";\r\n    asteroideImg.width =\"900\";\r\n    asteroideImg.height=\"600\";\r\n    bodyDiv.appendChild(asteroideImg);\r\n\r\n    let divAudio = document.createElement(\"div\");\r\n    bodyDiv.appendChild(divAudio);\r\n\r\n    let music = document.createElement(\"audio\");\r\n    music.src = _Aphelion_mp3__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n    music.controls = \"True\";\r\n    music.autoplay = \"True\";\r\n    music.loop = \"True\";\r\n    divAudio.appendChild(music);\r\n\r\n    let p1 = document.createElement(\"p\");\r\n    p1.innerHTML = \"Es el año 2072, hace meses que se vive una constante crisis en el mundo muchas personas han muerto a causa de pandemias, guerras y desastres naturales nunca antes vistos.<br> Todo esto es malo pero, está apunto de ocurrir lo peor, de esto no hay vuelta atrás. La NASA descubrió que está apunto de chocar un asteroide contra la tierra, sin embargo, reconocen que es muy tarde para hacer algo ya que este se encuentra muy cerca. Todo el mundo cree que vamos a morir en meses y eso únicamente ha aumentado el pánico, las peleas y alborotos.\";\r\n    bodyDiv.appendChild(p1);\r\n\r\n    let p2 = document.createElement(\"p\");\r\n    p2.innerHTML ='Una organización poco conocida tiene información que no ha compartido con todo el mundo, porque tienen una herramienta en sus manos que puede llegar a ser revolucionaria pero, peligrosa. <br>  <b><span style=\"color: crimson;\">Una maquina del tiempo. </span></b><br>No quieren compartir esta información con todo el mundo porque saben que se generarían aún más conflictos y podría ser usado con malas intenciones. La intensión de la organización es enviar a personas capacitadas al pasado para prevenir algunos de los eventos más catastroficos que nos han llevado hasta este momento. Tú eres uno de ellos ¿Aceptas el reto?';\r\n    bodyDiv.appendChild(p2);\r\n\r\n    let divButtons = document.createElement(\"div\");\r\n    divButtons.className = \"divButtons\";\r\n    bodyDiv.appendChild(divButtons);\r\n\r\n\r\n    let button = document.createElement(\"button\");\r\n    button.type = \"button\";\r\n    button.className = \"btn btn-info\";\r\n    button.innerHTML = \"Mision\"\r\n    button.onclick = function relocate_home()\r\n    {\r\n         location.href = \"mision.html\";\r\n    } \r\n    divButtons.append(button);\r\n\r\n    let button2 = document.createElement(\"button\");\r\n    button2.type = \"button\";\r\n    button2.className = \"btn btn-dark\";\r\n    button2.innerHTML = \"Estoy fuera\"\r\n    button2.onclick = function relocate_home()\r\n    {\r\n         location.href = \"fuera.html\";\r\n    } \r\n    divButtons.append(button2);\r\n\r\n\r\n    let label1 = document.createElement(\"label\");\r\n    label1.innerHTML = \"Progreso de la misión: \";\r\n    bodyDiv.appendChild(label1);\r\n\r\n\r\n    let progress = document.createElement(\"div\");\r\n    progress.className=\"progress\";\r\n    bodyDiv.appendChild(progress);\r\n\r\n    let progressbar = document.createElement(\"div\");\r\n    progressbar.className = \"progress-bar progress-bar-striped progress-bar-animated\";\r\n    progressbar.role = \"progressbar\";\r\n    progressbar.ariaValueNow=\"0\";\r\n    progressbar.ariaValueMin=\"0\";\r\n    progressbar.ariaValueMax=\"100\";\r\n    progressbar.style.width =\"0%\";\r\n    progress.appendChild(progressbar);\r\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/inicio/historia.js?");

/***/ }),

/***/ "./src/inicio/inicio.js":
/*!******************************!*\
  !*** ./src/inicio/inicio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startApp\": () => (/* binding */ startApp)\n/* harmony export */ });\n/* harmony import */ var _inicio_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.css */ \"./src/inicio/inicio.css\");\n/* harmony import */ var _historia_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historia.js */ \"./src/inicio/historia.js\");\n\r\n\r\n\r\n\r\nfunction newDiv(id,width,height,bckgColor) {\r\n    let nDiv = document.createElement(\"div\");\r\n    nDiv.id = id;\r\n    nDiv.style.width = width;\r\n    nDiv.style.height = height;\r\n    nDiv.style.backgroundColor = bckgColor;\r\n    return nDiv;\r\n}\r\n\r\nconst startApp = () => {\r\n\r\n    let bodyDiv = newDiv(\"bodyDiv\",100,100,\"transparent\");\r\n    document.body.appendChild(bodyDiv);\r\n\r\n    let jumbotron = document.createElement(\"div\");\r\n    jumbotron.className =\"jumbotron jumbotron-fluid\";\r\n    bodyDiv.appendChild(jumbotron);\r\n\r\n    let container = document.createElement(\"div\");\r\n    container.className =\"container\";\r\n    jumbotron.appendChild(container);\r\n\r\n    let title1 = document.createElement(\"h1\");\r\n    title1.innerHTML =\"Laboratorio 6\";\r\n    title1.className = \"display-4\";\r\n    container.appendChild(title1);\r\n\r\n    let paragraph = document.createElement(\"p\");\r\n    paragraph.innerHTML =\"Sistemas y tecnologías web <br>Jennifer Sandoval<br>\";\r\n    paragraph.className = \"lead\";\r\n    container.appendChild(paragraph);\r\n\r\n    let github = document.createElement(\"a\");\r\n    github.href = \"https://github.com/JennsiS/Lab-6-Webpack\";\r\n    github.innerHTML = \"Link del repositorio\";\r\n    container.appendChild(github);\r\n\r\n    (0,_historia_js__WEBPACK_IMPORTED_MODULE_1__.inicioHistoria)();\r\n\r\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/inicio/inicio.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/inicio/inicio.js");
/******/ 	
/******/ })()
;