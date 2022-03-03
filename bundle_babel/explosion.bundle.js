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

/***/ "./src/explosion/decisionEmpleo.js":
/*!*****************************************!*\
  !*** ./src/explosion/decisionEmpleo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decisionEmpleo\": () => (/* binding */ decisionEmpleo)\n/* harmony export */ });\nvar decisionEmpleo = function decisionEmpleo() {\n  var bodyDiv = document.getElementById(\"bodyDivExplosion\");\n  var divEmpleo = document.createElement(\"div\");\n  divEmpleo.id = \"decision-empleo\";\n  divEmpleo.className = \"divEmpleo\";\n  bodyDiv.appendChild(divEmpleo);\n  var decision1 = document.createElement(\"h3\");\n  decision1.innerHTML = \"Empleo<br>\";\n  divEmpleo.appendChild(decision1);\n  var label2 = document.createElement(\"label\");\n  label2.innerHTML = \"Progreso de la misión: <br>\";\n  divEmpleo.appendChild(label2);\n  var progress2 = document.createElement(\"div\");\n  progress2.className = \"progress\";\n  divEmpleo.appendChild(progress2);\n  var progressbar2 = document.createElement(\"div\");\n  progressbar2.className = \"progress-bar progress-bar-striped progress-bar-animated\";\n  progressbar2.role = \"progressbar\";\n  progressbar2.ariaValueNow = \"75\";\n  progressbar2.ariaValueMin = \"0\";\n  progressbar2.ariaValueMax = \"100\";\n  progressbar2.style.width = \"75%\";\n  progress2.appendChild(progressbar2);\n  var p3 = document.createElement(\"p\");\n  p3.innerHTML = \"Lograste conseguir un empleo como ingeniero en la planta de energía nuclear, intentaste cambiar la logística de los manejos de residuos y lograste hacerlo sin que nadie lo supiera por unos cuantos meses, sin embargo, tu jefe inmediato te descubrió y te reportó con el director de la planta y como consecuencia te despidieron y te prohibieron la entrada para siempre.\";\n  divEmpleo.appendChild(p3);\n  var p5 = document.createElement(\"p\");\n  p5.innerHTML = \"No lograste terminar tu trabajo pero, consideras que avanzaste mucho ¿Crees que fue suficiente para prevenir la catástrofe?\";\n  divEmpleo.appendChild(p5);\n  var result = document.createElement(\"a\");\n  result.href = \"fracaso.html\";\n  result.innerHTML = \"CONOCE TU RESULTADO\";\n  divEmpleo.appendChild(result);\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/explosion/decisionEmpleo.js?");

/***/ }),

/***/ "./src/explosion/decisionSecuestro.js":
/*!********************************************!*\
  !*** ./src/explosion/decisionSecuestro.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decisionSecuestro\": () => (/* binding */ decisionSecuestro)\n/* harmony export */ });\nvar decisionSecuestro = function decisionSecuestro() {\n  var bodyDiv = document.getElementById(\"bodyDivExplosion\");\n  var divSecuestro = document.createElement(\"div\");\n  divSecuestro.id = \"decision-secuestro\";\n  divSecuestro.className = \"divSecuestro\";\n  bodyDiv.appendChild(divSecuestro);\n  var decision2 = document.createElement(\"h3\");\n  decision2.innerHTML = \"Secuestro<br>\";\n  divSecuestro.appendChild(decision2);\n  var label3 = document.createElement(\"label\");\n  label3.innerHTML = \"Progreso de la misión: <br>\";\n  divSecuestro.appendChild(label3);\n  var progress3 = document.createElement(\"div\");\n  progress3.className = \"progress\";\n  divSecuestro.appendChild(progress3);\n  var progressbar3 = document.createElement(\"div\");\n  progressbar3.className = \"progress-bar progress-bar-striped progress-bar-animated\";\n  progressbar3.role = \"progressbar\";\n  progressbar3.ariaValueNow = \"75\";\n  progressbar3.ariaValueMin = \"0\";\n  progressbar3.ariaValueMax = \"100\";\n  progressbar3.style.width = \"75%\";\n  progress3.appendChild(progressbar3);\n  var p4 = document.createElement(\"p\");\n  p4.innerHTML = \" Secuestras al director de la planta nuclear y planeas obligarlo a renunciar o cambiar la forma en la que maneja la planta, sin embargo, no todo va como esperas. El director tiene un gran grupo de seguridad, las cosas se ponen difíciles y por accidente le disparan al director y muere. <br> ¿Crees que esto logró prevenir la catástrofe?\";\n  divSecuestro.appendChild(p4);\n  var result2 = document.createElement(\"a\");\n  result2.href = \"exito.html\";\n  result2.innerHTML = \"CONOCE TU RESULTADO\";\n  divSecuestro.appendChild(result2);\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/explosion/decisionSecuestro.js?");

/***/ }),

/***/ "./src/explosion/explosion.js":
/*!************************************!*\
  !*** ./src/explosion/explosion.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _explosion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explosion.css */ \"./src/explosion/explosion.css\");\n/* harmony import */ var _tension_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tension.mp3 */ \"./src/tension.mp3\");\n/* harmony import */ var _explosion_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explosion.jpg */ \"./src/explosion/explosion.jpg\");\n/* harmony import */ var _decisionEmpleo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decisionEmpleo */ \"./src/explosion/decisionEmpleo.js\");\n/* harmony import */ var _decisionSecuestro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decisionSecuestro */ \"./src/explosion/decisionSecuestro.js\");\n\n\n\n\n\n\nfunction newDiv(id, width, height, bckgColor) {\n  var nDiv = document.createElement(\"div\");\n  nDiv.id = id;\n  nDiv.style.width = width;\n  nDiv.style.height = height;\n  nDiv.style.backgroundColor = bckgColor;\n  return nDiv;\n}\n\nvar bodyDiv = newDiv(\"bodyDivExplosion\", 100, 100, \"transparent\");\ndocument.body.appendChild(bodyDiv);\nvar label1 = document.createElement(\"label\");\nlabel1.innerHTML = \"Progreso de la misión: <br>\";\nbodyDiv.appendChild(label1);\nvar progress = document.createElement(\"div\");\nprogress.className = \"progress\";\nbodyDiv.appendChild(progress);\nvar progressbar = document.createElement(\"div\");\nprogressbar.className = \"progress-bar progress-bar-striped progress-bar-animated\";\nprogressbar.role = \"progressbar\";\nprogressbar.ariaValueNow = \"45\";\nprogressbar.ariaValueMin = \"0\";\nprogressbar.ariaValueMax = \"100\";\nprogressbar.style.width = \"45%\";\nprogress.appendChild(progressbar);\nvar music = document.createElement(\"audio\");\nmusic.src = _tension_mp3__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nmusic.controls = \"False\";\nmusic.autoplay = \"true\";\nmusic.loop = \"True\";\nbodyDiv.appendChild(music);\nvar article = document.createElement(\"article\");\nbodyDiv.appendChild(article);\nvar header = document.createElement(\"header\");\narticle.appendChild(header);\nvar title1 = document.createElement(\"h1\");\ntitle1.innerHTML = '<span style=\"color: darkred;\">Explosión nuclear en China</span>';\nheader.appendChild(title1);\nvar paragraph = document.createElement(\"p\");\nparagraph.innerHTML = \"Posted by BBC<br>5 de marzo del 2022<br>La mayor catástrofe de este tipo acaba de suceder\";\nheader.appendChild(paragraph);\nvar covidImg = document.createElement('img');\ncovidImg.src = _explosion_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\ncovidImg.width = \"900\";\ncovidImg.height = \"500\";\nbodyDiv.appendChild(covidImg);\nvar p1 = document.createElement(\"p\");\np1.innerHTML = 'En este día se vive una de las peores catástrofes que el mundo ha presenciado. Miles y miles de muertes se reportan hasta el momento y aún no se tiene un dato exacto dado que los científicos estiman que la explosión provoca como consecuencia un radio contaminado de 2000 km. Aún no se conoce la causa exacta de la explosión pero se supone que todo se debe a un mal manejo de los residuos. Algunos expertos aseguran que esta catástrofe pudo haber sido evitada y culpan completamente a la empresa de energía y al gobierno de China por permitir dicho suceso.<br> Por el momento se estima que este suceso tendrá un gran impacto ambiental a nivel mundial, además del impacto económico dado que muchos otros países mantienen relaciones con China quien tardará muchísimos años en recuperarse.<hr>';\nheader.appendChild(p1);\nvar details = document.createElement(\"details\");\nbodyDiv.appendChild(details);\nvar summary = document.createElement(\"summary\");\nsummary.innerHTML = \"Localización exacta\";\ndetails.appendChild(summary);\nvar moreInfo = document.createElement(\"p\");\nmoreInfo.innerHTML = \"27°02′42″N 120°17′00″E\";\ndetails.appendChild(moreInfo);\nvar p2 = document.createElement(\"p\");\np2.innerHTML = 'Ahora que tienes una idea de lo que pasó en este día, estas listo para tu misión. Has regresado al 2022 unos meses antes de que sucediera. Tu misión es infiltrarte en la planta nuclear y lograr solucionar el problema inminente que la empresa de energía trata de ocultar. En esta explosión China se ve bastante afectada económicamente y varias fabricas que trabajan en el desarrollo de piezas para la NASA se ven afectadas consideramos que estas fabricas serán fundamentales para la fabricación de un artefacto que sea capaz de direccionar al Asteroide Delta458. Lo que hagas para lograrlo depende de tí. Elige a continuación:';\nheader.appendChild(p2);\nvar contenedorLista = document.createElement(\"ul\");\nbodyDiv.appendChild(contenedorLista);\nvar item1 = document.createElement(\"li\");\nitem1.innerHTML = '<a href=\"#decision-empleo\">Solicitar un empleo en la empresa de energía y trabajar desde adentro</a>';\ncontenedorLista.appendChild(item1);\nvar item2 = document.createElement(\"li\");\nitem2.innerHTML = '<a href=\"#decision-secuestro\">Secuestrar al director de la empresa</a>';\ncontenedorLista.appendChild(item2);\n(0,_decisionEmpleo__WEBPACK_IMPORTED_MODULE_3__.decisionEmpleo)();\n(0,_decisionSecuestro__WEBPACK_IMPORTED_MODULE_4__.decisionSecuestro)();\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/explosion/explosion.js?");

/***/ }),

/***/ "./src/explosion/explosion.jpg":
/*!*************************************!*\
  !*** ./src/explosion/explosion.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c56654e731232b67d1af21528ca4d3ed.jpg\");\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/explosion/explosion.jpg?");

/***/ }),

/***/ "./src/tension.mp3":
/*!*************************!*\
  !*** ./src/tension.mp3 ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f3ae5c0c81eb40c6075df1405061855b.mp3\");\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/tension.mp3?");

/***/ }),

/***/ "./src/explosion/explosion.css":
/*!*************************************!*\
  !*** ./src/explosion/explosion.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/explosion/explosion.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/explosion/explosion.js");
/******/ 	
/******/ })()
;