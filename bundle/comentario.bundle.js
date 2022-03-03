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

/***/ }),

/***/ "./src/comentario/comentario.js":
/*!**************************************!*\
  !*** ./src/comentario/comentario.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _comentario_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comentario.css */ \"./src/comentario/comentario.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n\r\n\r\n\r\nfunction newDiv(id,width,height,bckgColor) {\r\n    let nDiv = document.createElement(\"div\");\r\n    nDiv.id = id;\r\n    nDiv.style.width = width;\r\n    nDiv.style.height = height;\r\n    nDiv.style.backgroundColor = bckgColor;\r\n    return nDiv;\r\n}\r\n\r\n    let bodyDiv = newDiv(\"bodyDivComentario\",100,100,\"transparent\");\r\n    document.body.appendChild(bodyDiv);\r\n\r\n    let title1 = document.createElement(\"h1\");\r\n    title1.innerHTML =\"Benefits of Learning UX Design<br><hr>\";\r\n    title1.className =\"animate__animated animate__rubberBand\"\r\n    bodyDiv.appendChild(title1);\r\n\r\n    let title2 = document.createElement(\"h2\");\r\n    title2.innerHTML ='Comentario';\r\n    bodyDiv.appendChild(title2);\r\n\r\n    let p1 = document.createElement(\"p\");\r\n    p1.innerHTML = \"Considero que como el artículo menciona, ultimamente existe la necesidad de utilizar la tecnología en todas nuestras actividades diarias tanto personales, sociales y de trabajo. Esto provoca que exista una mayor atención o interés en los recursos digitales como se pueden considerar las páginas web y así mismo, esto permite que crezca la competitividad y las expectativas de los usuarios que utilizan estos recursos. Actualmente existen bastantes recursos y avances en cuanto a las herramientas de desarrollo de tecnologías y por esta misma razón se espera de parte de los usuarios que los recursos que utilicen principalmente cumplan con la función a la que son destinados pero, también es sumamente importante la presentación de los mismos y la facilidad de uso.\";\r\n    bodyDiv.appendChild(p1);\r\n\r\n    let p2 = document.createElement(\"p\");\r\n    p2.innerHTML = \"Un error bastante común que los programadores cometen es únicamente desarrollar soluciones que los desarrolladores consideran que son las óptimas y a pesar de que pueden estar en lo correcto, es importante tomar en cuenta la opinión de los usuarios porque cuál es el sentido de desarrollar una solución que ningún usuario utilizaría, ni siquiera los usuarios objetivos. Por esta razón es importante tomar en cuenta inicialmente el diseño de un producto ya que el diseño involucra investigación, prototipado, pruebas, mejoras, etc. Y esto permite tener una mayor probabilidad de éxito ya que el proyecto se encuentra bien enfocado y probado.\";\r\n    bodyDiv.appendChild(p2);\r\n\r\n    let title3 = document.createElement(\"h2\");\r\n    title3.innerHTML ='¿Cómo afecta el UX Design en la interacción con los usuarios?';\r\n    bodyDiv.appendChild(title3);\r\n\r\n    let p3 = document.createElement(\"p\");\r\n    p3.innerHTML = \"Como mencionaba anteriormente la industria de la tecnología se encuentra cada vez en mayor crecimiento y por esta misma razón existe una competitividad en cuanto a los productos desarrollados ya que no únicamente se busca estos cumplan con una función sino que además sean atractivos y faciles de usar. El UX Design en su desarrollo está tomando en cuenta directamente a los usuarios de la aplicación y esto permite al desarrollador tener una idea más clara de cuales son las necesidades, requerimientos y gustos de los usuarios asegurando así un mejor resultado. Por ejemplo, la facilidad de uso de una aplicación es fundamental dado que si esta no es eficiente y entendible, los usuarios simplemente no la utilizarán. Entonces es muy necesario tomar en cuenta el diseño UX en el proceso de desarrollo de una aplicación o servicio tecnológico para que los usuarios tengan una mejor experiencia y como consecuencia el proyecto sea exitoso.\";\r\n    bodyDiv.appendChild(p3);\r\n\r\n    let divButton = document.createElement(\"div\");\r\n    divButton.className = \"divButton\";\r\n    bodyDiv.appendChild(divButton);\r\n\r\n    let button = document.createElement(\"button\");\r\n    button.type = \"button\";\r\n    button.className = \"btn btn-light\";\r\n    button.innerHTML = \"Regresar al inicio\"\r\n    button.onclick = function relocate_home()\r\n    {\r\n         location.href = \"index.html\";\r\n    } \r\n    divButton.append(button);\r\n    \r\n    let footer = document.createElement(\"footer\");\r\n    let p4 = document.createElement(\"p\");\r\n    p4.innerHTML = \"Autor: Jennifer Sandoval\";\r\n    footer.appendChild(p4);\r\n\r\n    let p5 = document.createElement(\"p\");\r\n    p5.innerHTML = 'Referencia: <a href=\"https://xd.adobe.com/ideas/career-tips/many-benefits-learning-ux-design-2/\">The Many Benefits of Learning UX Design</a>';\r\n    footer.appendChild(p5);\r\n    bodyDiv.appendChild(footer);\r\n\r\n\n\n//# sourceURL=webpack://Lab-6-Webpack/./src/comentario/comentario.js?");

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