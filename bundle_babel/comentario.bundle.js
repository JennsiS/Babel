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

/***/ "./src/comentario/comentario.js":
/*!**************************************!*\
  !*** ./src/comentario/comentario.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _comentario_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comentario.css */ \"./src/comentario/comentario.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n\n\n\nfunction newDiv(id, width, height, bckgColor) {\n  var nDiv = document.createElement(\"div\");\n  nDiv.id = id;\n  nDiv.style.width = width;\n  nDiv.style.height = height;\n  nDiv.style.backgroundColor = bckgColor;\n  return nDiv;\n}\n\nvar bodyDiv = newDiv(\"bodyDivComentario\", 100, 100, \"transparent\");\ndocument.body.appendChild(bodyDiv);\nvar title1 = document.createElement(\"h1\");\ntitle1.innerHTML = \"Benefits of Learning UX Design<br><hr>\";\ntitle1.className = \"animate__animated animate__rubberBand\";\nbodyDiv.appendChild(title1);\nvar title2 = document.createElement(\"h2\");\ntitle2.innerHTML = 'Comentario';\nbodyDiv.appendChild(title2);\nvar p1 = document.createElement(\"p\");\np1.innerHTML = \"Considero que como el artículo menciona, ultimamente existe la necesidad de utilizar la tecnología en todas nuestras actividades diarias tanto personales, sociales y de trabajo. Esto provoca que exista una mayor atención o interés en los recursos digitales como se pueden considerar las páginas web y así mismo, esto permite que crezca la competitividad y las expectativas de los usuarios que utilizan estos recursos. Actualmente existen bastantes recursos y avances en cuanto a las herramientas de desarrollo de tecnologías y por esta misma razón se espera de parte de los usuarios que los recursos que utilicen principalmente cumplan con la función a la que son destinados pero, también es sumamente importante la presentación de los mismos y la facilidad de uso.\";\nbodyDiv.appendChild(p1);\nvar p2 = document.createElement(\"p\");\np2.innerHTML = \"Un error bastante común que los programadores cometen es únicamente desarrollar soluciones que los desarrolladores consideran que son las óptimas y a pesar de que pueden estar en lo correcto, es importante tomar en cuenta la opinión de los usuarios porque cuál es el sentido de desarrollar una solución que ningún usuario utilizaría, ni siquiera los usuarios objetivos. Por esta razón es importante tomar en cuenta inicialmente el diseño de un producto ya que el diseño involucra investigación, prototipado, pruebas, mejoras, etc. Y esto permite tener una mayor probabilidad de éxito ya que el proyecto se encuentra bien enfocado y probado.\";\nbodyDiv.appendChild(p2);\nvar title3 = document.createElement(\"h2\");\ntitle3.innerHTML = '¿Cómo afecta el UX Design en la interacción con los usuarios?';\nbodyDiv.appendChild(title3);\nvar p3 = document.createElement(\"p\");\np3.innerHTML = \"Como mencionaba anteriormente la industria de la tecnología se encuentra cada vez en mayor crecimiento y por esta misma razón existe una competitividad en cuanto a los productos desarrollados ya que no únicamente se busca estos cumplan con una función sino que además sean atractivos y faciles de usar. El UX Design en su desarrollo está tomando en cuenta directamente a los usuarios de la aplicación y esto permite al desarrollador tener una idea más clara de cuales son las necesidades, requerimientos y gustos de los usuarios asegurando así un mejor resultado. Por ejemplo, la facilidad de uso de una aplicación es fundamental dado que si esta no es eficiente y entendible, los usuarios simplemente no la utilizarán. Entonces es muy necesario tomar en cuenta el diseño UX en el proceso de desarrollo de una aplicación o servicio tecnológico para que los usuarios tengan una mejor experiencia y como consecuencia el proyecto sea exitoso.\";\nbodyDiv.appendChild(p3);\nvar divButton = document.createElement(\"div\");\ndivButton.className = \"divButton\";\nbodyDiv.appendChild(divButton);\nvar button = document.createElement(\"button\");\nbutton.type = \"button\";\nbutton.className = \"btn btn-light\";\nbutton.innerHTML = \"Regresar al inicio\";\n\nbutton.onclick = function relocate_home() {\n  location.href = \"index.html\";\n};\n\ndivButton.append(button);\nvar footer = document.createElement(\"footer\");\nvar p4 = document.createElement(\"p\");\np4.innerHTML = \"Autor: Jennifer Sandoval\";\nfooter.appendChild(p4);\nvar p5 = document.createElement(\"p\");\np5.innerHTML = 'Referencia: <a href=\"https://xd.adobe.com/ideas/career-tips/many-benefits-learning-ux-design-2/\">The Many Benefits of Learning UX Design</a>';\nfooter.appendChild(p5);\nbodyDiv.appendChild(footer);\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/comentario/comentario.js?");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./node_modules/animate.css/animate.css?");

/***/ }),

/***/ "./src/comentario/comentario.css":
/*!***************************************!*\
  !*** ./src/comentario/comentario.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/comentario/comentario.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/comentario/comentario.js");
/******/ 	
/******/ })()
;