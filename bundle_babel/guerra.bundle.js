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

/***/ "./src/guerra/decisionAviso.js":
/*!*************************************!*\
  !*** ./src/guerra/decisionAviso.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decisionAviso\": () => (/* binding */ decisionAviso)\n/* harmony export */ });\nvar decisionAviso = function decisionAviso() {\n  var bodyDiv = document.getElementById(\"bodyDivGuerra\");\n  var divAviso = document.createElement(\"div\");\n  divAviso.id = \"decision-aviso\";\n  divAviso.className = \"divAviso\";\n  bodyDiv.appendChild(divAviso);\n  var decision2 = document.createElement(\"h3\");\n  decision2.innerHTML = \"Avisar del Asteroide<br>\";\n  divAviso.appendChild(decision2);\n  var label3 = document.createElement(\"label\");\n  label3.innerHTML = \"Progreso de la misión: <br>\";\n  divAviso.appendChild(label3);\n  var progress3 = document.createElement(\"div\");\n  progress3.className = \"progress\";\n  divAviso.appendChild(progress3);\n  var progressbar3 = document.createElement(\"div\");\n  progressbar3.className = \"progress-bar progress-bar-striped progress-bar-animated\";\n  progressbar3.role = \"progressbar\";\n  progressbar3.ariaValueNow = \"75\";\n  progressbar3.ariaValueMin = \"0\";\n  progressbar3.ariaValueMax = \"100\";\n  progressbar3.style.width = \"75%\";\n  progress3.appendChild(progressbar3);\n  var p4 = document.createElement(\"p\");\n  p4.innerHTML = \" Intentas convencer a la NASA de que eres un astrónomo y que según algunos estudios que has hecho por tu cuenta has descubierto que un Asteroide se aproxima a la tierra. Inicialmente, por obvias razones, no te creen y te prohiben el acceso. Sin embargo, esperas que esto haya levantado alguna alerta y que hayan investigado tu advertencia.\";\n  divAviso.appendChild(p4);\n  var result2 = document.createElement(\"a\");\n  result2.href = \"exito.html\";\n  result2.innerHTML = \"CONOCE TU RESULTADO\";\n  divAviso.appendChild(result2);\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/guerra/decisionAviso.js?");

/***/ }),

/***/ "./src/guerra/decisionViaje.js":
/*!*************************************!*\
  !*** ./src/guerra/decisionViaje.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decisionViaje\": () => (/* binding */ decisionViaje)\n/* harmony export */ });\nvar decisionViaje = function decisionViaje() {\n  var bodyDiv = document.getElementById(\"bodyDivGuerra\");\n  var divViaje = document.createElement(\"div\");\n  divViaje.id = \"decision-viajar\";\n  divViaje.className = \"divViaje\";\n  bodyDiv.appendChild(divViaje);\n  var decision1 = document.createElement(\"h3\");\n  decision1.innerHTML = \"Viaje a la estación internacional espacial<br>\";\n  divViaje.appendChild(decision1);\n  var label2 = document.createElement(\"label\");\n  label2.innerHTML = \"Progreso de la misión: <br>\";\n  divViaje.appendChild(label2);\n  var progress2 = document.createElement(\"div\");\n  progress2.className = \"progress\";\n  divViaje.appendChild(progress2);\n  var progressbar2 = document.createElement(\"div\");\n  progressbar2.className = \"progress-bar progress-bar-striped progress-bar-animated\";\n  progressbar2.role = \"progressbar\";\n  progressbar2.ariaValueNow = \"75\";\n  progressbar2.ariaValueMin = \"0\";\n  progressbar2.ariaValueMax = \"100\";\n  progressbar2.style.width = \"75%\";\n  progress2.appendChild(progressbar2);\n  var p3 = document.createElement(\"p\");\n  p3.innerHTML = \"Viajas a la estación internacional espacial y tratas de estar al tanto acerca de lo que pasa dentro e intervienes como mediador entre cualquier discusión que hay entre todos los representantes de los países presentes, por el momento no parece haber ningun problema pero, ¿Crees que tus acciones han sido suficientes para detener la catástrofe?\";\n  divViaje.appendChild(p3);\n  var result = document.createElement(\"a\");\n  result.href = \"fracaso.html\";\n  result.innerHTML = \"CONOCE TU RESULTADO\";\n  divViaje.appendChild(result);\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/guerra/decisionViaje.js?");

/***/ }),

/***/ "./src/guerra/guerra.js":
/*!******************************!*\
  !*** ./src/guerra/guerra.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tension_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tension.mp3 */ \"./src/tension.mp3\");\n/* harmony import */ var _imagen_guerra_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imagen-guerra.jpg */ \"./src/guerra/imagen-guerra.jpg\");\n/* harmony import */ var _guerra_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guerra.css */ \"./src/guerra/guerra.css\");\n/* harmony import */ var _decisionViaje__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decisionViaje */ \"./src/guerra/decisionViaje.js\");\n/* harmony import */ var _decisionAviso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decisionAviso */ \"./src/guerra/decisionAviso.js\");\n\n\n\n\n\n\nfunction newDiv(id, width, height, bckgColor) {\n  var nDiv = document.createElement(\"div\");\n  nDiv.id = id;\n  nDiv.style.width = width;\n  nDiv.style.height = height;\n  nDiv.style.backgroundColor = bckgColor;\n  return nDiv;\n}\n\nvar bodyDiv = newDiv(\"bodyDivGuerra\", 100, 100, \"transparent\");\ndocument.body.appendChild(bodyDiv);\nvar label1 = document.createElement(\"label\");\nlabel1.innerHTML = \"Progreso de la misión: <br>\";\nbodyDiv.appendChild(label1);\nvar progress = document.createElement(\"div\");\nprogress.className = \"progress\";\nbodyDiv.appendChild(progress);\nvar progressbar = document.createElement(\"div\");\nprogressbar.className = \"progress-bar progress-bar-striped progress-bar-animated\";\nprogressbar.role = \"progressbar\";\nprogressbar.ariaValueNow = \"45\";\nprogressbar.ariaValueMin = \"0\";\nprogressbar.ariaValueMax = \"100\";\nprogressbar.style.width = \"45%\";\nprogress.appendChild(progressbar);\nvar music = document.createElement(\"audio\");\nmusic.src = _tension_mp3__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nmusic.controls = \"False\";\nmusic.autoplay = \"true\";\nmusic.loop = \"True\";\nbodyDiv.appendChild(music);\nvar article = document.createElement(\"article\");\nbodyDiv.appendChild(article);\nvar header = document.createElement(\"header\");\narticle.appendChild(header);\nvar title1 = document.createElement(\"h1\");\ntitle1.innerHTML = '<span style=\"color: darkred;\">Guerra entre Rusia y USA</span>';\nheader.appendChild(title1);\nvar paragraph = document.createElement(\"p\");\nparagraph.innerHTML = \"Posted by ABC<br>23 de Septiembre del 2022<br><i>La llaman la tercera guerra mundial</i>\";\nheader.appendChild(paragraph);\nvar guerraImg = document.createElement('img');\nguerraImg.src = _imagen_guerra_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nguerraImg.width = \"1000\";\nguerraImg.height = \"600\";\nbodyDiv.appendChild(guerraImg);\nvar p1 = document.createElement(\"p\");\np1.innerHTML = 'Desde hace años ha habido tensión entre estas potencias, pero hasta este momento no se había concretado nada tan serio como una guerra. La incomodidad entre ambos países ha surgido a partir de diferencias que aún no han sido aclaradas pero, parece ser que tienen que ver con la estación internacional espacial y por el momento se han parado las actividades en la estación de forma indefinida. En estos momentos tanto Rusia como USA han declarado que están preparando a sus ejercitos y que están listos para una tercera guerra mundial, cada país se encuentra realizando acuerdos con otros países <i>\"formando bandos\"</i> y solo hace falta que uno de los dos países dé un paso al frente. <hr>';\nheader.appendChild(p1);\nvar details = document.createElement(\"details\");\nbodyDiv.appendChild(details);\nvar summary = document.createElement(\"summary\");\nsummary.innerHTML = \"Detalles de la guerra\";\ndetails.appendChild(summary);\nvar moreInfo = document.createElement(\"p\");\nmoreInfo.innerHTML = \"En este momento los aliados de Rusia son Armenia, Bielorrusia, Kazajistán, Kiguistán y Tayikistán. Por otro lado los aliados de USA son Gran Bretaña, Ucrania y algunos países de la OTAN.\";\ndetails.appendChild(moreInfo);\nvar p2 = document.createElement(\"p\");\np2.innerHTML = ' En este día comenzó la disputa que llevó a la tercera guerra mundial, comenzando por Rusia y USA. Esta misión es la más importante dado que como pudiste observar en la noticia, las actividades de la estación internacional espacial fueron detenedias por varios meses. Creemos que este suceso fue decisivo en cuanto a pasar desapercibido el  Asteroide Delta458 y si esto no hubiera ocurrido tendríamos más tiempo para desarrollar una solución. Has regresado al 2022 unos meses antes de que la guerra iniciara. Tu misión principal es evitar que las actividades en la estación internacional espacial se detengan, lo que hagas para lograrlo depende de tí. Elige a continuación:';\nheader.appendChild(p2);\nvar contenedorLista = document.createElement(\"ul\");\nbodyDiv.appendChild(contenedorLista);\nvar item1 = document.createElement(\"li\");\nitem1.innerHTML = '<a href=\"#decision-viajar\">Viajar a la estación internacional espacial</a>';\ncontenedorLista.appendChild(item1);\nvar item2 = document.createElement(\"li\");\nitem2.innerHTML = '<a href=\"#decision-aviso\">Avisar acerca del inminente Asteroide</a>';\ncontenedorLista.appendChild(item2);\n(0,_decisionViaje__WEBPACK_IMPORTED_MODULE_3__.decisionViaje)();\n(0,_decisionAviso__WEBPACK_IMPORTED_MODULE_4__.decisionAviso)();\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/guerra/guerra.js?");

/***/ }),

/***/ "./src/guerra/imagen-guerra.jpg":
/*!**************************************!*\
  !*** ./src/guerra/imagen-guerra.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"3ae3515a93e57b6e9a9c69bd58f7b77d.jpg\");\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/guerra/imagen-guerra.jpg?");

/***/ }),

/***/ "./src/tension.mp3":
/*!*************************!*\
  !*** ./src/tension.mp3 ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f3ae5c0c81eb40c6075df1405061855b.mp3\");\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/tension.mp3?");

/***/ }),

/***/ "./src/guerra/guerra.css":
/*!*******************************!*\
  !*** ./src/guerra/guerra.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/guerra/guerra.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/guerra/guerra.js");
/******/ 	
/******/ })()
;