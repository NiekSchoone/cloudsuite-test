/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/header/dropdown.js":
/*!****************************************!*\
  !*** ./src/scripts/header/dropdown.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createDropdownEffect(button) {
  var drop = function drop(e) {
    var listItem = e.target.parentElement;
    listItem.classList.toggle("show");
  };
  button.onClick = drop;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDropdownEffect);

/***/ }),

/***/ "./src/scripts/hero/parallax.js":
/*!**************************************!*\
  !*** ./src/scripts/hero/parallax.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createParallaxScroll(elementSelector, multiplier) {
  window.addEventListener("scroll", function (e) {
    var distance = window.scrollY;
    document.querySelector(elementSelector).style.transform = "translateY(".concat(distance * multiplier, "px)");
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createParallaxScroll);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_hero_parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/hero/parallax */ "./src/scripts/hero/parallax.js");
/* harmony import */ var _scripts_header_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/header/dropdown */ "./src/scripts/header/dropdown.js");


window.onload = function () {
  (0,_scripts_hero_parallax__WEBPACK_IMPORTED_MODULE_0__["default"])(".parallax-img", 0.4);
  var dropdownButtons = document.getElementsByClassName("dropdown-button");
  for (var i = 0; i < dropdownButtons.length; i++) {
    var element = dropdownButtons[i];
    (0,_scripts_header_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  }
  var header = document.querySelector("header");
  window.onscroll = function () {
    var distance = window.scrollY;
    if (distance > 0) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  };
  window.onclick = function (e) {
    if (!e.target.matches(".dropdown-button")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.parentElement.classList.contains("show")) {
          openDropdown.parentElement.classList.remove("show");
        }
      }
    }
  };
};
})();

/******/ })()
;
//# sourceMappingURL=main.js.map