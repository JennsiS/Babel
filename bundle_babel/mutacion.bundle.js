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

/***/ "./src/mutacion/decision1.js":
/*!***********************************!*\
  !*** ./src/mutacion/decision1.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decision1\": () => (/* binding */ decision1)\n/* harmony export */ });\nvar decision1 = function decision1() {\n  var bodyDiv = document.getElementById(\"bodyDivMutacion\");\n  var divAsesinato = document.createElement(\"div\");\n  divAsesinato.id = \"decision-muerte\";\n  divAsesinato.className = \"divAsesinato\";\n  bodyDiv.appendChild(divAsesinato);\n  var decision1 = document.createElement(\"h3\");\n  decision1.innerHTML = \"Asesinato<br>\";\n  divAsesinato.appendChild(decision1);\n  var label2 = document.createElement(\"label\");\n  label2.innerHTML = \"Progreso de la misión: <br>\";\n  divAsesinato.appendChild(label2);\n  var progress2 = document.createElement(\"div\");\n  progress2.className = \"progress\";\n  divAsesinato.appendChild(progress2);\n  var progressbar2 = document.createElement(\"div\");\n  progressbar2.className = \"progress-bar progress-bar-striped progress-bar-animated\";\n  progressbar2.role = \"progressbar\";\n  progressbar2.ariaValueNow = \"75\";\n  progressbar2.ariaValueMin = \"0\";\n  progressbar2.ariaValueMax = \"100\";\n  progressbar2.style.width = \"75%\";\n  progress2.appendChild(progressbar2);\n  var p3 = document.createElement(\"p\");\n  p3.innerHTML = \"Logras interceptar al embajador en su vehículo y lo asesinas. Todo el país está de luto y se encuentran confundidos. Por suerte nadie te reconoció y su muerte fue clasificada como un accidente de automóvil. ¿Crees que esta acción fue suficiente para detener la mutación?\";\n  divAsesinato.appendChild(p3);\n  var result = document.createElement(\"a\");\n  result.href = \"exito.html\";\n  result.innerHTML = \"CONOCE TU RESULTADO\";\n  divAsesinato.appendChild(result);\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/mutacion/decision1.js?");

/***/ }),

/***/ "./src/mutacion/decision2.js":
/*!***********************************!*\
  !*** ./src/mutacion/decision2.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decision2\": () => (/* binding */ decision2)\n/* harmony export */ });\nvar decision2 = function decision2() {\n  var bodyDiv = document.getElementById(\"bodyDivMutacion\");\n  var divHackeo = document.createElement(\"div\");\n  divHackeo.id = \"decision-hackeo\";\n  divHackeo.className = \"divHackeo\";\n  bodyDiv.appendChild(divHackeo);\n  var decision2 = document.createElement(\"h3\");\n  decision2.innerHTML = \"Hackeo<br>\";\n  divHackeo.appendChild(decision2);\n  var label3 = document.createElement(\"label\");\n  label3.innerHTML = \"Progreso de la misión: <br>\";\n  divHackeo.appendChild(label3);\n  var progress3 = document.createElement(\"div\");\n  progress3.className = \"progress\";\n  divHackeo.appendChild(progress3);\n  var progressbar3 = document.createElement(\"div\");\n  progressbar3.className = \"progress-bar progress-bar-striped progress-bar-animated\";\n  progressbar3.role = \"progressbar\";\n  progressbar3.ariaValueNow = \"75\";\n  progressbar3.ariaValueMin = \"0\";\n  progressbar3.ariaValueMax = \"100\";\n  progressbar3.style.width = \"75%\";\n  progress3.appendChild(progressbar3);\n  var p4 = document.createElement(\"p\");\n  p4.innerHTML = \"Logras Hackear la computadora personal del embajador y cancelas el compromiso que lo obliga a viajar a Estados Unidos. Sin embargo, el embajador aún no se encuentra vacunado por lo que corres el riesgo de que aunque no viaje en este momento, algún día se infecte y pueda ocurrir lo esperado.\";\n  divHackeo.appendChild(p4);\n  var result2 = document.createElement(\"a\");\n  result2.href = \"fracaso.html\";\n  result2.innerHTML = \"CONOCE TU RESULTADO\";\n  divHackeo.appendChild(result2);\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/mutacion/decision2.js?");

/***/ }),

/***/ "./src/mutacion/mutacion.js":
/*!**********************************!*\
  !*** ./src/mutacion/mutacion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coronavirus_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coronavirus.jpg */ \"./src/mutacion/coronavirus.jpg\");\n/* harmony import */ var _tension_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tension.mp3 */ \"./src/tension.mp3\");\n/* harmony import */ var _mutacion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutacion.css */ \"./src/mutacion/mutacion.css\");\n/* harmony import */ var _decision1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decision1 */ \"./src/mutacion/decision1.js\");\n/* harmony import */ var _decision2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decision2 */ \"./src/mutacion/decision2.js\");\n\n\n\n\n\n\nfunction newDiv(id, width, height, bckgColor) {\n  var nDiv = document.createElement(\"div\");\n  nDiv.id = id;\n  nDiv.style.width = width;\n  nDiv.style.height = height;\n  nDiv.style.backgroundColor = bckgColor;\n  return nDiv;\n}\n\nvar bodyDiv = newDiv(\"bodyDivMutacion\", 100, 100, \"transparent\");\ndocument.body.appendChild(bodyDiv);\nvar label1 = document.createElement(\"label\");\nlabel1.innerHTML = \"Progreso de la misión: <br>\";\nbodyDiv.appendChild(label1);\nvar progress = document.createElement(\"div\");\nprogress.className = \"progress\";\nbodyDiv.appendChild(progress);\nvar progressbar = document.createElement(\"div\");\nprogressbar.className = \"progress-bar progress-bar-striped progress-bar-animated\";\nprogressbar.role = \"progressbar\";\nprogressbar.ariaValueNow = \"45\";\nprogressbar.ariaValueMin = \"0\";\nprogressbar.ariaValueMax = \"100\";\nprogressbar.style.width = \"45%\";\nprogress.appendChild(progressbar);\nvar music = document.createElement(\"audio\");\nmusic.src = _tension_mp3__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nmusic.controls = \"False\";\nmusic.autoplay = \"true\";\nmusic.loop = \"True\";\nbodyDiv.appendChild(music);\nvar article = document.createElement(\"article\");\nbodyDiv.appendChild(article);\nvar header = document.createElement(\"header\");\narticle.appendChild(header);\nvar title1 = document.createElement(\"h1\");\ntitle1.innerHTML = '<span style=\"color: darkred;\">Mutación fatal COVID-19</span>';\nheader.appendChild(title1);\nvar paragraph = document.createElement(\"p\");\nparagraph.innerHTML = \"Posted by CNN<br>10 de julio del 2022<br>La peor mutación registrada del coronavirus hasta ahora\";\nheader.appendChild(paragraph);\nvar covidImg = document.createElement('img');\ncovidImg.src = _coronavirus_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\ncovidImg.width = \"1200\";\ncovidImg.height = \"600\";\nbodyDiv.appendChild(covidImg);\nvar p1 = document.createElement(\"p\");\np1.innerHTML = 'Desde el año 2019 la pandemia COVID-19 ha sido un tema recurrente y todo el mundo se ha visto afectado por ella. A inicios de este año se pensaba que la pandemia estaba llegando a su fin, hasta que en este día el embajador de Senegal viajó desde su país hacia Estados Unidos y fue contagiado de COVID-19, sin embargo, el mayor problema fue que el embajador no se encontraba vacunado y esto provocó que el virus tuviera una mutación mucho más letal que las variantes anteriores. Esta variante actúa en un tiempo menor y los síntomas son bastantes severos. Además, se sabe que es bastante contagioso dado que por el momento a 5 días del primer reporte se han registrado por lo menos 82,000 muertes,con una tasa de mortalidad del 100%, es decir, quién se infecta presenta una probabilidad completa de morir. <hr>';\nheader.appendChild(p1);\nvar details = document.createElement(\"details\");\nbodyDiv.appendChild(details);\nvar summary = document.createElement(\"summary\");\nsummary.innerHTML = \"Detalles del virus\";\ndetails.appendChild(summary);\nvar moreInfo = document.createElement(\"p\");\nmoreInfo.innerHTML = \"Tiene una mutacion en el gen de la proteína Spike que no permite ser reconocido por la vacuna, por lo que la vacunación no es una garantía de no infectarse por esta variante.\";\ndetails.appendChild(moreInfo);\nvar p2 = document.createElement(\"p\");\np2.innerHTML = 'Ahora que tienes una idea de lo que pasó en este día, estas listo para tu misión. Has regresado al 2022 unos meses antes de que la infección sucediera. Tu misión principal es evitar que el embajador de Senegal viaje a Estados Unidos ya que es el paciente 0 de esta variante. En la pandemia de esta variante mueren varios científicos y astrónomos, creemos que estas personas serán fundamentales para detener al Asteroide Delta458. Lo que hagas para lograrlo depende de tí. Elige a continuación:';\nheader.appendChild(p2);\nvar contenedorLista = document.createElement(\"ul\");\nbodyDiv.appendChild(contenedorLista);\nvar item1 = document.createElement(\"li\");\nitem1.innerHTML = '<a href=\"#decision-muerte\">Matar al embajador de Senegal</a>';\ncontenedorLista.appendChild(item1);\nvar item2 = document.createElement(\"li\");\nitem2.innerHTML = '<a href=\"#decision-hackeo\">Hackear al embajador</a>';\ncontenedorLista.appendChild(item2);\n(0,_decision1__WEBPACK_IMPORTED_MODULE_3__.decision1)();\n(0,_decision2__WEBPACK_IMPORTED_MODULE_4__.decision2)();\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/mutacion/mutacion.js?");

/***/ }),

/***/ "./src/mutacion/coronavirus.jpg":
/*!**************************************!*\
  !*** ./src/mutacion/coronavirus.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"228626d2e669a41b8e8a4cdbe53583d1.jpg\");\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/mutacion/coronavirus.jpg?");

/***/ }),

/***/ "./src/tension.mp3":
/*!*************************!*\
  !*** ./src/tension.mp3 ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f3ae5c0c81eb40c6075df1405061855b.mp3\");\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/tension.mp3?");

/***/ }),

/***/ "./src/mutacion/mutacion.css":
/*!***********************************!*\
  !*** ./src/mutacion/mutacion.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/mutacion/mutacion.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/mutacion/mutacion.js");
/******/ 	
/******/ })()
;