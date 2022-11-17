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

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getScores\": () => (/* binding */ getScores),\n/* harmony export */   \"postScore\": () => (/* binding */ postScore),\n/* harmony export */   \"registerRequests\": () => (/* binding */ registerRequests)\n/* harmony export */ });\n/* harmony import */ var _secret_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secret.js */ \"./src/secret.js\");\n\r\n\r\nconsole.log(_secret_js__WEBPACK_IMPORTED_MODULE_0__.API_KEY);\r\n\r\nconst API_LINK_REGISTER = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/`;\r\nconst API_LINK_POST_SCORE = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${_secret_js__WEBPACK_IMPORTED_MODULE_0__.API_KEY}/scores`;\r\n\r\nconst registerRequests = async (name) => {\r\n  try {\r\n    const response = await fetch(API_LINK_REGISTER, {\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n      method: \"POST\",\r\n      body: JSON.stringify({\r\n        name: name,\r\n      }),\r\n    });\r\n\r\n    const result = await response.json();\r\n\r\n    console.log(result);\r\n  } catch (err) {\r\n    console.log(\"ERROR!!!\");\r\n    console.log(err);\r\n  }\r\n};\r\n\r\n// registerRequests(\"My app name\");\r\n\r\nconst postScore = async (user, score) => {\r\n  try {\r\n    const options = {\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n      method: \"POST\",\r\n      body: JSON.stringify({\r\n        user,\r\n        score,\r\n      }),\r\n    };\r\n    const response = await fetch(API_LINK_POST_SCORE, options);\r\n\r\n    const result = await response.json();\r\n    console.log(result);\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n};\r\n\r\n// postScore(\"John Doe\", 32);\r\n\r\nconst getScores = async () => {\r\n  try {\r\n    const options = {\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n      method: \"GET\",\r\n    };\r\n    const response = await fetch(API_LINK_POST_SCORE, options);\r\n\r\n    const result = await response.json();\r\n    return result;\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://webpack/./src/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n\r\nconst list = document.querySelector(\".list\");\r\nconst refreshBtn = document.querySelector(\".refresh-btn\");\r\nconst form = document.querySelector(\".form\");\r\n\r\nconst populate = async () => {\r\n  try {\r\n    let listMarkup = \"\";\r\n    const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getScores)();\r\n    const scores = response.result;\r\n    scores.forEach((score) => {\r\n      listMarkup += `<li class=\"list-item\">${score.user}: ${score.score}</li>`;\r\n    });\r\n    list.innerHTML = \"\";\r\n    list.insertAdjacentHTML(\"afterbegin\", listMarkup);\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n};\r\n\r\n// Refresh UI\r\nrefreshBtn.addEventListener(\"click\", populate);\r\n\r\n// Submit data\r\nform.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  const name = e.target.name.value;\r\n  const score = e.target.score.value;\r\n\r\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postScore)(name, score);\r\n  e.target.name.value = \"\";\r\n  e.target.score.value = \"\";\r\n});\r\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/secret.js":
/*!***********************!*\
  !*** ./src/secret.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_KEY\": () => (/* binding */ API_KEY)\n/* harmony export */ });\nconst API_KEY = \"AbRqF6mlxYvxdLfl2NB0\";\r\n\n\n//# sourceURL=webpack://webpack/./src/secret.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;