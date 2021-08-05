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

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://carousel-review/./src/sass/app.scss?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/app.scss */ \"./src/sass/app.scss\");\n\r\n\r\n//variables \r\nconst imgArticle = document.querySelector('.article__img');\r\nconst nameArticle = document.querySelector('.article__name');\r\nconst jobArticle = document.querySelector('.article__job');\r\nconst infoArticle = document.querySelector('.article__info');\r\n\r\nconst btn = document.querySelectorAll('#btn');\r\nlet position = 0;\r\nlet numberR;\r\nlet profile;\r\n\r\n// itereación en los botones\r\nbtn.forEach( boton => {\r\n    // evento al dar click\r\n    boton.addEventListener('click', () => {\r\n        if(boton.value === 'previous') {\r\n            position--;\r\n\r\n            if(position < 0) {\r\n                position = 5;\r\n            }\r\n\r\n        } else if(boton.value === 'next') {\r\n            position++;\r\n\r\n            if(position > 5) {\r\n                position = 0;\r\n            }\r\n\r\n        } else if(boton.value === 'random') {\r\n            randomNumber();\r\n            while(position === numberR) {\r\n                randomNumber();\r\n            }\r\n            position = numberR;\r\n        }\r\n        callAPI(position);\r\n\r\n    })\r\n});\r\n\r\nfunction callAPI(index) {\r\n    const url = '../profiles.json';\r\n    fetch(url)\r\n        .then(resultado => resultado.json())\r\n        .then(respuesta => {\r\n            const { name, img_url, info, job } = respuesta.profiles[index];\r\n\r\n            imgArticle.src = img_url;\r\n            nameArticle.textContent = name;\r\n            infoArticle.textContent = info;\r\n            jobArticle.textContent = job;\r\n        });\r\n} \r\n\r\nfunction randomNumber() {\r\n    return numberR = Math.round(Math.random() * 5);\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://carousel-review/./src/js/app.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;