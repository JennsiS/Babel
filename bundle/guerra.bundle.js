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

/***/ }),

/***/ "./src/guerra/decisionAviso.js":
/*!*************************************!*\
  !*** ./src/guerra/decisionAviso.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decisionAviso\": () => (/* binding */ decisionAviso)\n/* harmony export */ });\nconst decisionAviso = () => {\r\n    let bodyDiv = document.getElementById(\"bodyDivGuerra\");\r\n    let divAviso = document.createElement(\"div\");\r\n    divAviso.id = \"decision-aviso\";\r\n    divAviso.className =\"divAviso\";\r\n    bodyDiv.appendChild(divAviso);\r\n\r\n    let decision2 = document.createElement(\"h3\");\r\n    decision2.innerHTML =\"Avisar del Asteroide<br>\";\r\n    divAviso.appendChild(decision2);\r\n\r\n    let label3 = document.createElement(\"label\");\r\n    label3.innerHTML = \"Progreso de la misión: <br>\";\r\n    divAviso.appendChild(label3);\r\n\r\n    let progress3 = document.createElement(\"div\");\r\n    progress3.className=\"progress\";\r\n    divAviso.appendChild(progress3);\r\n\r\n    let progressbar3 = document.createElement(\"div\");\r\n    progressbar3.className = \"progress-bar progress-bar-striped progress-bar-animated\";\r\n    progressbar3.role = \"progressbar\";\r\n    progressbar3.ariaValueNow=\"75\";\r\n    progressbar3.ariaValueMin=\"0\";\r\n    progressbar3.ariaValueMax=\"100\";\r\n    progressbar3.style.width =\"75%\";\r\n    progress3.appendChild(progressbar3);\r\n\r\n    let p4 = document.createElement(\"p\");\r\n    p4.innerHTML = \" Intentas convencer a la NASA de que eres un astrónomo y que según algunos estudios que has hecho por tu cuenta has descubierto que un Asteroide se aproxima a la tierra. Inicialmente, por obvias razones, no te creen y te prohiben el acceso. Sin embargo, esperas que esto haya levantado alguna alerta y que hayan investigado tu advertencia.\";\r\n    divAviso.appendChild(p4);\r\n\r\n    let result2 = document.createElement(\"a\");\r\n    result2.href = \"exito.html\";\r\n    result2.innerHTML = \"CONOCE TU RESULTADO\";\r\n    divAviso.appendChild(result2);\r\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/guerra/decisionAviso.js?");

/***/ }),

/***/ "./src/guerra/decisionViaje.js":
/*!*************************************!*\
  !*** ./src/guerra/decisionViaje.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decisionViaje\": () => (/* binding */ decisionViaje)\n/* harmony export */ });\nconst decisionViaje = () => {\r\n    let bodyDiv = document.getElementById(\"bodyDivGuerra\");\r\n    let divViaje = document.createElement(\"div\");\r\n    divViaje.id = \"decision-viajar\";\r\n    divViaje.className =\"divViaje\";\r\n    bodyDiv.appendChild(divViaje);\r\n\r\n    let decision1 = document.createElement(\"h3\");\r\n    decision1.innerHTML =\"Viaje a la estación internacional espacial<br>\";\r\n    divViaje.appendChild(decision1);\r\n\r\n    let label2 = document.createElement(\"label\");\r\n    label2.innerHTML = \"Progreso de la misión: <br>\";\r\n    divViaje.appendChild(label2);\r\n\r\n    let progress2 = document.createElement(\"div\");\r\n    progress2.className=\"progress\";\r\n    divViaje.appendChild(progress2);\r\n\r\n    let progressbar2 = document.createElement(\"div\");\r\n    progressbar2.className = \"progress-bar progress-bar-striped progress-bar-animated\";\r\n    progressbar2.role = \"progressbar\";\r\n    progressbar2.ariaValueNow=\"75\";\r\n    progressbar2.ariaValueMin=\"0\";\r\n    progressbar2.ariaValueMax=\"100\";\r\n    progressbar2.style.width =\"75%\";\r\n    progress2.appendChild(progressbar2);\r\n\r\n    let p3 = document.createElement(\"p\");\r\n    p3.innerHTML = \"Viajas a la estación internacional espacial y tratas de estar al tanto acerca de lo que pasa dentro e intervienes como mediador entre cualquier discusión que hay entre todos los representantes de los países presentes, por el momento no parece haber ningun problema pero, ¿Crees que tus acciones han sido suficientes para detener la catástrofe?\";\r\n    divViaje.appendChild(p3);\r\n\r\n    let result = document.createElement(\"a\");\r\n    result.href = \"fracaso.html\";\r\n    result.innerHTML = \"CONOCE TU RESULTADO\";\r\n    divViaje.appendChild(result);\r\n\r\n};\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/guerra/decisionViaje.js?");

/***/ }),

/***/ "./src/guerra/guerra.js":
/*!******************************!*\
  !*** ./src/guerra/guerra.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tension_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tension.mp3 */ \"./src/tension.mp3\");\n/* harmony import */ var _imagen_guerra_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imagen-guerra.jpg */ \"./src/guerra/imagen-guerra.jpg\");\n/* harmony import */ var _guerra_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guerra.css */ \"./src/guerra/guerra.css\");\n/* harmony import */ var _decisionViaje__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decisionViaje */ \"./src/guerra/decisionViaje.js\");\n/* harmony import */ var _decisionAviso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decisionAviso */ \"./src/guerra/decisionAviso.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction newDiv(id,width,height,bckgColor) {\r\n    let nDiv = document.createElement(\"div\");\r\n    nDiv.id = id;\r\n    nDiv.style.width = width;\r\n    nDiv.style.height = height;\r\n    nDiv.style.backgroundColor = bckgColor;\r\n    return nDiv;\r\n}\r\n\r\n    let bodyDiv = newDiv(\"bodyDivGuerra\",100,100,\"transparent\");\r\n    document.body.appendChild(bodyDiv);\r\n\r\n    let label1 = document.createElement(\"label\");\r\n    label1.innerHTML = \"Progreso de la misión: <br>\";\r\n    bodyDiv.appendChild(label1);\r\n\r\n    let progress = document.createElement(\"div\");\r\n    progress.className=\"progress\";\r\n    bodyDiv.appendChild(progress);\r\n\r\n    let progressbar = document.createElement(\"div\");\r\n    progressbar.className = \"progress-bar progress-bar-striped progress-bar-animated\";\r\n    progressbar.role = \"progressbar\";\r\n    progressbar.ariaValueNow=\"45\";\r\n    progressbar.ariaValueMin=\"0\";\r\n    progressbar.ariaValueMax=\"100\";\r\n    progressbar.style.width =\"45%\";\r\n    progress.appendChild(progressbar);\r\n\r\n    let music = document.createElement(\"audio\");\r\n    music.src = _tension_mp3__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    music.controls = \"False\";\r\n    music.autoplay = \"true\";\r\n    music.loop = \"True\";\r\n    bodyDiv.appendChild(music);\r\n\r\n    let article = document.createElement(\"article\");\r\n    bodyDiv.appendChild(article);\r\n\r\n    let header = document.createElement(\"header\");\r\n    article.appendChild(header);\r\n\r\n    let title1 = document.createElement(\"h1\");\r\n    title1.innerHTML ='<span style=\"color: darkred;\">Guerra entre Rusia y USA</span>';\r\n    header.appendChild(title1);\r\n\r\n    let paragraph = document.createElement(\"p\");\r\n    paragraph.innerHTML =\"Posted by ABC<br>23 de Septiembre del 2022<br><i>La llaman la tercera guerra mundial</i>\";\r\n    header.appendChild(paragraph);\r\n\r\n    let guerraImg = document.createElement('img');\r\n    guerraImg.src= _imagen_guerra_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n    guerraImg.width =\"1000\";\r\n    guerraImg.height=\"600\";\r\n    bodyDiv.appendChild(guerraImg);\r\n\r\n    let p1 = document.createElement(\"p\");\r\n    p1.innerHTML ='Desde hace años ha habido tensión entre estas potencias, pero hasta este momento no se había concretado nada tan serio como una guerra. La incomodidad entre ambos países ha surgido a partir de diferencias que aún no han sido aclaradas pero, parece ser que tienen que ver con la estación internacional espacial y por el momento se han parado las actividades en la estación de forma indefinida. En estos momentos tanto Rusia como USA han declarado que están preparando a sus ejercitos y que están listos para una tercera guerra mundial, cada país se encuentra realizando acuerdos con otros países <i>\"formando bandos\"</i> y solo hace falta que uno de los dos países dé un paso al frente. <hr>';\r\n    header.appendChild(p1);\r\n\r\n    let details = document.createElement(\"details\");\r\n    bodyDiv.appendChild(details);\r\n    let summary = document.createElement(\"summary\");\r\n    summary.innerHTML =\"Detalles de la guerra\";\r\n    details.appendChild(summary);\r\n    let moreInfo = document.createElement(\"p\");\r\n    moreInfo.innerHTML = \"En este momento los aliados de Rusia son Armenia, Bielorrusia, Kazajistán, Kiguistán y Tayikistán. Por otro lado los aliados de USA son Gran Bretaña, Ucrania y algunos países de la OTAN.\";\r\n    details.appendChild(moreInfo);\r\n\r\n    let p2 = document.createElement(\"p\");\r\n    p2.innerHTML =' En este día comenzó la disputa que llevó a la tercera guerra mundial, comenzando por Rusia y USA. Esta misión es la más importante dado que como pudiste observar en la noticia, las actividades de la estación internacional espacial fueron detenedias por varios meses. Creemos que este suceso fue decisivo en cuanto a pasar desapercibido el  Asteroide Delta458 y si esto no hubiera ocurrido tendríamos más tiempo para desarrollar una solución. Has regresado al 2022 unos meses antes de que la guerra iniciara. Tu misión principal es evitar que las actividades en la estación internacional espacial se detengan, lo que hagas para lograrlo depende de tí. Elige a continuación:';\r\n    header.appendChild(p2);\r\n\r\n    let contenedorLista = document.createElement(\"ul\");\r\n    bodyDiv.appendChild(contenedorLista);\r\n\r\n    let item1 = document.createElement(\"li\");\r\n    item1.innerHTML='<a href=\"#decision-viajar\">Viajar a la estación internacional espacial</a>';\r\n    contenedorLista.appendChild(item1);\r\n\r\n    let item2 = document.createElement(\"li\");\r\n    item2.innerHTML='<a href=\"#decision-aviso\">Avisar acerca del inminente Asteroide</a>';\r\n    contenedorLista.appendChild(item2);\r\n\r\n    (0,_decisionViaje__WEBPACK_IMPORTED_MODULE_3__.decisionViaje)();\r\n    (0,_decisionAviso__WEBPACK_IMPORTED_MODULE_4__.decisionAviso)();\r\n\r\n    \r\n\r\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/guerra/guerra.js?");

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