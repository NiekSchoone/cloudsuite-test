/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
window.onload = function () {
  console.log("onload");
  var drop = function drop(e) {
    var listItem = e.target.parentElement;
    listItem.classList.toggle("show");
  };
  var dropdownButtons = document.getElementsByClassName("dropdown-button");
  for (var i = 0; i < dropdownButtons.length; i++) {
    var element = dropdownButtons[i];
    element.onclick = drop;
  }
  var header = document.querySelector("header");
  window.onscroll = function () {
    var distance = window.scrollY;
    if (distance > 0) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
    document.querySelector(".parallax-img").style.transform = "translateY(".concat(distance * 0.4, "px)");
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
/******/ })()
;
//# sourceMappingURL=main.js.map