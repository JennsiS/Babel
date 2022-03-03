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

/***/ }),

/***/ "./src/explosion/decisionEmpleo.js":
/*!*****************************************!*\
  !*** ./src/explosion/decisionEmpleo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decisionEmpleo\": () => (/* binding */ decisionEmpleo)\n/* harmony export */ });\nconst decisionEmpleo = () => {\r\n    let bodyDiv = document.getElementById(\"bodyDivExplosion\");\r\n    let divEmpleo = document.createElement(\"div\");\r\n    divEmpleo.id = \"decision-empleo\";\r\n    divEmpleo.className = \"divEmpleo\";\r\n    bodyDiv.appendChild(divEmpleo);\r\n\r\n    let decision1 = document.createElement(\"h3\");\r\n    decision1.innerHTML =\"Empleo<br>\";\r\n    divEmpleo.appendChild(decision1);\r\n\r\n    let label2 = document.createElement(\"label\");\r\n    label2.innerHTML = \"Progreso de la misión: <br>\";\r\n    divEmpleo.appendChild(label2);\r\n\r\n    let progress2 = document.createElement(\"div\");\r\n    progress2.className=\"progress\";\r\n    divEmpleo.appendChild(progress2);\r\n\r\n    let progressbar2 = document.createElement(\"div\");\r\n    progressbar2.className = \"progress-bar progress-bar-striped progress-bar-animated\";\r\n    progressbar2.role = \"progressbar\";\r\n    progressbar2.ariaValueNow=\"75\";\r\n    progressbar2.ariaValueMin=\"0\";\r\n    progressbar2.ariaValueMax=\"100\";\r\n    progressbar2.style.width =\"75%\";\r\n    progress2.appendChild(progressbar2);\r\n\r\n    let p3 = document.createElement(\"p\");\r\n    p3.innerHTML = \"Lograste conseguir un empleo como ingeniero en la planta de energía nuclear, intentaste cambiar la logística de los manejos de residuos y lograste hacerlo sin que nadie lo supiera por unos cuantos meses, sin embargo, tu jefe inmediato te descubrió y te reportó con el director de la planta y como consecuencia te despidieron y te prohibieron la entrada para siempre.\";\r\n    divEmpleo.appendChild(p3);\r\n\r\n    let p5 = document.createElement(\"p\");\r\n    p5.innerHTML = \"No lograste terminar tu trabajo pero, consideras que avanzaste mucho ¿Crees que fue suficiente para prevenir la catástrofe?\";\r\n    divEmpleo.appendChild(p5);\r\n\r\n    let result = document.createElement(\"a\");\r\n    result.href = \"fracaso.html\";\r\n    result.innerHTML = \"CONOCE TU RESULTADO\";\r\n    divEmpleo.appendChild(result);\r\n\r\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/explosion/decisionEmpleo.js?");

/***/ }),

/***/ "./src/explosion/decisionSecuestro.js":
/*!********************************************!*\
  !*** ./src/explosion/decisionSecuestro.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decisionSecuestro\": () => (/* binding */ decisionSecuestro)\n/* harmony export */ });\nconst decisionSecuestro = () => {\r\n    let bodyDiv = document.getElementById(\"bodyDivExplosion\");\r\n    let divSecuestro = document.createElement(\"div\");\r\n    divSecuestro.id = \"decision-secuestro\";\r\n    divSecuestro.className = \"divSecuestro\";\r\n    bodyDiv.appendChild(divSecuestro);\r\n\r\n    let decision2 = document.createElement(\"h3\");\r\n    decision2.innerHTML =\"Secuestro<br>\";\r\n    divSecuestro.appendChild(decision2);\r\n\r\n    let label3 = document.createElement(\"label\");\r\n    label3.innerHTML = \"Progreso de la misión: <br>\";\r\n    divSecuestro.appendChild(label3);\r\n\r\n    let progress3 = document.createElement(\"div\");\r\n    progress3.className=\"progress\";\r\n    divSecuestro.appendChild(progress3);\r\n\r\n    let progressbar3 = document.createElement(\"div\");\r\n    progressbar3.className = \"progress-bar progress-bar-striped progress-bar-animated\";\r\n    progressbar3.role = \"progressbar\";\r\n    progressbar3.ariaValueNow=\"75\";\r\n    progressbar3.ariaValueMin=\"0\";\r\n    progressbar3.ariaValueMax=\"100\";\r\n    progressbar3.style.width =\"75%\";\r\n    progress3.appendChild(progressbar3);\r\n\r\n    let p4 = document.createElement(\"p\");\r\n    p4.innerHTML = \" Secuestras al director de la planta nuclear y planeas obligarlo a renunciar o cambiar la forma en la que maneja la planta, sin embargo, no todo va como esperas. El director tiene un gran grupo de seguridad, las cosas se ponen difíciles y por accidente le disparan al director y muere. <br> ¿Crees que esto logró prevenir la catástrofe?\";\r\n    divSecuestro.appendChild(p4);\r\n\r\n    let result2 = document.createElement(\"a\");\r\n    result2.href = \"exito.html\";\r\n    result2.innerHTML = \"CONOCE TU RESULTADO\";\r\n    divSecuestro.appendChild(result2);\r\n\r\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/explosion/decisionSecuestro.js?");

/***/ }),

/***/ "./src/explosion/explosion.js":
/*!************************************!*\
  !*** ./src/explosion/explosion.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _explosion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explosion.css */ \"./src/explosion/explosion.css\");\n/* harmony import */ var _tension_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tension.mp3 */ \"./src/tension.mp3\");\n/* harmony import */ var _explosion_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explosion.jpg */ \"./src/explosion/explosion.jpg\");\n/* harmony import */ var _decisionEmpleo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decisionEmpleo */ \"./src/explosion/decisionEmpleo.js\");\n/* harmony import */ var _decisionSecuestro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decisionSecuestro */ \"./src/explosion/decisionSecuestro.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction newDiv(id,width,height,bckgColor) {\r\n    let nDiv = document.createElement(\"div\");\r\n    nDiv.id = id;\r\n    nDiv.style.width = width;\r\n    nDiv.style.height = height;\r\n    nDiv.style.backgroundColor = bckgColor;\r\n    return nDiv;\r\n}\r\n\r\n\r\n    let bodyDiv = newDiv(\"bodyDivExplosion\",100,100,\"transparent\");\r\n    document.body.appendChild(bodyDiv);\r\n\r\n    let label1 = document.createElement(\"label\");\r\n    label1.innerHTML = \"Progreso de la misión: <br>\";\r\n    bodyDiv.appendChild(label1);\r\n\r\n    let progress = document.createElement(\"div\");\r\n    progress.className=\"progress\";\r\n    bodyDiv.appendChild(progress);\r\n\r\n    let progressbar = document.createElement(\"div\");\r\n    progressbar.className = \"progress-bar progress-bar-striped progress-bar-animated\";\r\n    progressbar.role = \"progressbar\";\r\n    progressbar.ariaValueNow=\"45\";\r\n    progressbar.ariaValueMin=\"0\";\r\n    progressbar.ariaValueMax=\"100\";\r\n    progressbar.style.width =\"45%\";\r\n    progress.appendChild(progressbar);\r\n\r\n    let music = document.createElement(\"audio\");\r\n    music.src = _tension_mp3__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n    music.controls = \"False\";\r\n    music.autoplay = \"true\";\r\n    music.loop = \"True\";\r\n    bodyDiv.appendChild(music);\r\n\r\n    let article = document.createElement(\"article\");\r\n    bodyDiv.appendChild(article);\r\n\r\n    let header = document.createElement(\"header\");\r\n    article.appendChild(header);\r\n\r\n    let title1 = document.createElement(\"h1\");\r\n    title1.innerHTML ='<span style=\"color: darkred;\">Explosión nuclear en China</span>';\r\n    header.appendChild(title1);\r\n\r\n    let paragraph = document.createElement(\"p\");\r\n    paragraph.innerHTML =\"Posted by BBC<br>5 de marzo del 2022<br>La mayor catástrofe de este tipo acaba de suceder\";\r\n    header.appendChild(paragraph);\r\n\r\n    let covidImg = document.createElement('img');\r\n    covidImg.src= _explosion_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n    covidImg.width =\"900\";\r\n    covidImg.height=\"500\";\r\n    bodyDiv.appendChild(covidImg);\r\n\r\n    let p1 = document.createElement(\"p\");\r\n    p1.innerHTML ='En este día se vive una de las peores catástrofes que el mundo ha presenciado. Miles y miles de muertes se reportan hasta el momento y aún no se tiene un dato exacto dado que los científicos estiman que la explosión provoca como consecuencia un radio contaminado de 2000 km. Aún no se conoce la causa exacta de la explosión pero se supone que todo se debe a un mal manejo de los residuos. Algunos expertos aseguran que esta catástrofe pudo haber sido evitada y culpan completamente a la empresa de energía y al gobierno de China por permitir dicho suceso.<br> Por el momento se estima que este suceso tendrá un gran impacto ambiental a nivel mundial, además del impacto económico dado que muchos otros países mantienen relaciones con China quien tardará muchísimos años en recuperarse.<hr>';\r\n    header.appendChild(p1);\r\n\r\n    let details = document.createElement(\"details\");\r\n    bodyDiv.appendChild(details);\r\n    let summary = document.createElement(\"summary\");\r\n    summary.innerHTML =\"Localización exacta\";\r\n    details.appendChild(summary);\r\n    let moreInfo = document.createElement(\"p\");\r\n    moreInfo.innerHTML = \"27°02′42″N 120°17′00″E\";\r\n    details.appendChild(moreInfo);\r\n\r\n    let p2 = document.createElement(\"p\");\r\n    p2.innerHTML ='Ahora que tienes una idea de lo que pasó en este día, estas listo para tu misión. Has regresado al 2022 unos meses antes de que sucediera. Tu misión es infiltrarte en la planta nuclear y lograr solucionar el problema inminente que la empresa de energía trata de ocultar. En esta explosión China se ve bastante afectada económicamente y varias fabricas que trabajan en el desarrollo de piezas para la NASA se ven afectadas consideramos que estas fabricas serán fundamentales para la fabricación de un artefacto que sea capaz de direccionar al Asteroide Delta458. Lo que hagas para lograrlo depende de tí. Elige a continuación:';\r\n    header.appendChild(p2);\r\n\r\n    let contenedorLista = document.createElement(\"ul\");\r\n    bodyDiv.appendChild(contenedorLista);\r\n\r\n    let item1 = document.createElement(\"li\");\r\n    item1.innerHTML='<a href=\"#decision-empleo\">Solicitar un empleo en la empresa de energía y trabajar desde adentro</a>';\r\n    contenedorLista.appendChild(item1);\r\n\r\n    let item2 = document.createElement(\"li\");\r\n    item2.innerHTML='<a href=\"#decision-secuestro\">Secuestrar al director de la empresa</a>';\r\n    contenedorLista.appendChild(item2);\r\n\r\n    (0,_decisionEmpleo__WEBPACK_IMPORTED_MODULE_3__.decisionEmpleo)();\r\n    (0,_decisionSecuestro__WEBPACK_IMPORTED_MODULE_4__.decisionSecuestro)();\r\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/explosion/explosion.js?");

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