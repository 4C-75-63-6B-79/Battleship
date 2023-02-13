"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/carrier.svg */ "./src/assets/images/carrier.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/battleship.svg */ "./src/assets/images/battleship.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/cruiser.svg */ "./src/assets/images/cruiser.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/submarine.svg */ "./src/assets/images/submarine.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/destroyer.svg */ "./src/assets/images/destroyer.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/red_dot.svg */ "./src/assets/images/red_dot.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/white_dot.svg */ "./src/assets/images/white_dot.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family:Georgia, 'Times New Roman', Times, serif;\n    font-size: 16px;\n    background-color: beige;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n\nheader {\n    display: grid;\n    place-content: center;\n    flex: 0 1 auto;\n}\n\nh1 {\n    padding: 0.4em 0.5em;\n    font-size: 2.5rem;\n    line-height: 1.5;\n}\n\nh1.firstPage {\n    font-size: 4rem;\n    position: relative;\n    animation-name: floating;\n    animation-duration: 4s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n@keyframes floating {\n    0% {top: -20px;}\n    10% {top: 20px;}\n    20% {top: -15px;}\n    30% {top: 15px;}\n    40% {top: -10px;}\n    50% {top: 10px;}\n    60% {top: -5px;}\n    70% {top: 5px;}\n    80% {top: -2px;}\n    90% {top: 1px;}\n    100% {top: 0px;}\n}\n\nmain {\n    flex: 2 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 0.75rem;\n}\n\nform {\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\nform > label {\n    font-size: 1.75rem;\n    margin-bottom: 5%;\n    padding: 0.4rem 0.5rem;\n    text-align: center;\n}\n\nform > input {\n    text-align: center;\n    font-size: 1.5rem;\n    padding: 0.25rem 0.5rem;\n    outline: none;\n    border: 2px solid white;\n    border-radius: 4px;\n}\n\nform > input:placeholder-shown {\n    border-color: lightskyblue;\n}\n\nform > input:placeholder-shown:focus {\n    border-color: white;\n}\n\nform > input:focus,\nform > input.invalid:focus {\n    border-color: purple;\n    border-radius: 4px 4px 0 0;\n}\n\nform > input:not(:placeholder-shown):not(:focus):invalid,\nform > input.invalid:not(:focus) {\n    border-color: red;\n    border-radius: 4px 4px 0 0;\n}\n\ninput:valid {\n    border-color: green;\n    border-radius: 4px;\n}\n\n.error {\n    display: block;\n    text-align: center;\n    word-wrap: break-word;\n    background-color: #eebbbb;\n    border-radius:  0 0 4px 4px;\n}\n\n.error.active {\n    padding: 0.3rem 0.5rem;\n}\n\nbutton {\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    background-color: whitesmoke;\n    border: 4px solid grey;\n    border-radius: 6px;\n    outline: none;\n}\n\nh2 {\n    font-size: 2rem;\n    padding: 0.4rem 0.5rem;\n}\n\n.gridContainer {\n    padding: 0.5rem;\n    display: grid;\n    grid-template-rows: repeat(10, 35px);\n    grid-template-columns: repeat(10, 35px);\n    gap: 5px;\n}\n\n.box {\n    background-color: white;\n    border: 1px solid black;\n    cursor: default;\n}\n\n.validBox {\n    background-color: lightgreen;\n}\n\n.invalidBox {\n    background-color: lightcoral;\n    cursor: not-allowed;\n}\n\n.shipPlacedOnBox {\n    background-color: lightskyblue;\n}\n\n.carrier,\n.battleship,\n.cruiser,\n.destroyer,\n.submarine {\n    position: relative;\n}\n\n.carrier::before,\n.battleship::before,\n.cruiser::before,\n.destroyer::before,\n.submarine::before {\n    position: absolute;\n    content: '';\n    z-index: 2;\n    top: -1px;\n    left: -1px;\n    height: 35px;\n    border: 1px solid red;\n    background-repeat: no-repeat;\n    opacity: 0.55;\n    transform-origin: 17.5px 17.5px;\n}\n\n.carrier::before {\n    width: 195px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 195px 35px;\n}\n\n.battleship::before {\n    width: 155px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: 155px 35px;\n}\n\n.cruiser::before {\n    width: 115px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: 115px 35px;\n}\n\n.submarine::before {\n    width: 115px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: 115px 35px;\n}\n\n.destroyer::before {\n    width: 75px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size: 75px 35px;\n}\n\n#statusBox {\n    padding: 0.4rem 0.5rem;\n}\n\n#statusBox > p {\n    text-align: center;\n    position: relative;\n    font-size: 1.2rem;\n    opacity: 0.6;\n    transition: transform 600ms ease-in;\n}\n\n#statusBox > .backward {\n    font-size: 1.4rem;\n    transform: scale(1.1);\n    opacity: 1;\n}\n\n#waterContainer {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap-reverse;\n}\n\n.water {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    gap: 0.4rem;\n}\n\n#shipIndicatorContainer {\n    width: 100%;\n    flex: 1 1 auto;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.shipStatusIndicator {\n    padding: 0.4rem 0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n}\n\nh4 {\n    font-size: 1.05rem;\n}\n\n.indicatorLight {\n    width: 1.75rem;\n    height: 0.75rem;\n    border: 1px solid black;\n    border-radius: 0.4rem;\n}\n\n.shipActive {\n    background-color: lightgreen;\n}\n\n.shipHit {\n    animation-name: blinking;\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-fill-mode: forwards;\n    animation-direction: alternate;\n    animation-timing-function: ease-in-out;\n}\n\n@keyframes blinking {\n    0% {background-color: lightgreen;}\n    25% {background-color: #ee4444; }\n    50% {background-color: lightgreen; }\n    75% {background-color: #ee4444; }\n    100% {background-color: lightgreen;}\n}\n\n.shipLost {\n    transform: scale(1.09);\n    background-color: #ee4444;\n}\n\n.target {\n    cursor: crosshair;\n    background-color: #cccccc;\n}\n\n.hit {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n.miss {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n\n.banner {\n    font-size: 2.5rem;\n}\n\n.winner {\n    font-size: 6rem;\n}\n\nfooter {\n    flex: 0 1 auto;\n    display: grid;\n    place-content: center;\n}\n\nfooter > div {\n    padding: 0.4em 0.5em;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::after,\n*::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family:Georgia, 'Times New Roman', Times, serif;\n    font-size: 16px;\n    background-color: beige;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n\nheader {\n    display: grid;\n    place-content: center;\n    flex: 0 1 auto;\n}\n\nh1 {\n    padding: 0.4em 0.5em;\n    font-size: 2.5rem;\n    line-height: 1.5;\n}\n\nh1.firstPage {\n    font-size: 4rem;\n    position: relative;\n    animation-name: floating;\n    animation-duration: 4s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n@keyframes floating {\n    0% {top: -20px;}\n    10% {top: 20px;}\n    20% {top: -15px;}\n    30% {top: 15px;}\n    40% {top: -10px;}\n    50% {top: 10px;}\n    60% {top: -5px;}\n    70% {top: 5px;}\n    80% {top: -2px;}\n    90% {top: 1px;}\n    100% {top: 0px;}\n}\n\nmain {\n    flex: 2 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 0.75rem;\n}\n\nform {\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\nform > label {\n    font-size: 1.75rem;\n    margin-bottom: 5%;\n    padding: 0.4rem 0.5rem;\n    text-align: center;\n}\n\nform > input {\n    text-align: center;\n    font-size: 1.5rem;\n    padding: 0.25rem 0.5rem;\n    outline: none;\n    border: 2px solid white;\n    border-radius: 4px;\n}\n\nform > input:placeholder-shown {\n    border-color: lightskyblue;\n}\n\nform > input:placeholder-shown:focus {\n    border-color: white;\n}\n\nform > input:focus,\nform > input.invalid:focus {\n    border-color: purple;\n    border-radius: 4px 4px 0 0;\n}\n\nform > input:not(:placeholder-shown):not(:focus):invalid,\nform > input.invalid:not(:focus) {\n    border-color: red;\n    border-radius: 4px 4px 0 0;\n}\n\ninput:valid {\n    border-color: green;\n    border-radius: 4px;\n}\n\n.error {\n    display: block;\n    text-align: center;\n    word-wrap: break-word;\n    background-color: #eebbbb;\n    border-radius:  0 0 4px 4px;\n}\n\n.error.active {\n    padding: 0.3rem 0.5rem;\n}\n\nbutton {\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    background-color: whitesmoke;\n    border: 4px solid grey;\n    border-radius: 6px;\n    outline: none;\n}\n\nh2 {\n    font-size: 2rem;\n    padding: 0.4rem 0.5rem;\n}\n\n.gridContainer {\n    padding: 0.5rem;\n    display: grid;\n    grid-template-rows: repeat(10, 35px);\n    grid-template-columns: repeat(10, 35px);\n    gap: 5px;\n}\n\n.box {\n    background-color: white;\n    border: 1px solid black;\n    cursor: default;\n}\n\n.validBox {\n    background-color: lightgreen;\n}\n\n.invalidBox {\n    background-color: lightcoral;\n    cursor: not-allowed;\n}\n\n.shipPlacedOnBox {\n    background-color: lightskyblue;\n}\n\n.carrier,\n.battleship,\n.cruiser,\n.destroyer,\n.submarine {\n    position: relative;\n}\n\n.carrier::before,\n.battleship::before,\n.cruiser::before,\n.destroyer::before,\n.submarine::before {\n    position: absolute;\n    content: '';\n    z-index: 2;\n    top: -1px;\n    left: -1px;\n    height: 35px;\n    border: 1px solid red;\n    background-repeat: no-repeat;\n    opacity: 0.55;\n    transform-origin: 17.5px 17.5px;\n}\n\n.carrier::before {\n    width: 195px;\n    background-image: url(./assets/images/carrier.svg);\n    background-size: 195px 35px;\n}\n\n.battleship::before {\n    width: 155px;\n    background-image: url(./assets/images/battleship.svg);\n    background-size: 155px 35px;\n}\n\n.cruiser::before {\n    width: 115px;\n    background-image: url(./assets/images/cruiser.svg);\n    background-size: 115px 35px;\n}\n\n.submarine::before {\n    width: 115px;\n    background-image: url(./assets/images/submarine.svg);\n    background-size: 115px 35px;\n}\n\n.destroyer::before {\n    width: 75px;\n    background-image: url(./assets/images/destroyer.svg);\n    background-size: 75px 35px;\n}\n\n#statusBox {\n    padding: 0.4rem 0.5rem;\n}\n\n#statusBox > p {\n    text-align: center;\n    position: relative;\n    font-size: 1.2rem;\n    opacity: 0.6;\n    transition: transform 600ms ease-in;\n}\n\n#statusBox > .backward {\n    font-size: 1.4rem;\n    transform: scale(1.1);\n    opacity: 1;\n}\n\n#waterContainer {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap-reverse;\n}\n\n.water {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    gap: 0.4rem;\n}\n\n#shipIndicatorContainer {\n    width: 100%;\n    flex: 1 1 auto;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.shipStatusIndicator {\n    padding: 0.4rem 0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n}\n\nh4 {\n    font-size: 1.05rem;\n}\n\n.indicatorLight {\n    width: 1.75rem;\n    height: 0.75rem;\n    border: 1px solid black;\n    border-radius: 0.4rem;\n}\n\n.shipActive {\n    background-color: lightgreen;\n}\n\n.shipHit {\n    animation-name: blinking;\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-fill-mode: forwards;\n    animation-direction: alternate;\n    animation-timing-function: ease-in-out;\n}\n\n@keyframes blinking {\n    0% {background-color: lightgreen;}\n    25% {background-color: #ee4444; }\n    50% {background-color: lightgreen; }\n    75% {background-color: #ee4444; }\n    100% {background-color: lightgreen;}\n}\n\n.shipLost {\n    transform: scale(1.09);\n    background-color: #ee4444;\n}\n\n.target {\n    cursor: crosshair;\n    background-color: #cccccc;\n}\n\n.hit {\n    background-image: url(./assets/images/red_dot.svg);\n}\n\n.miss {\n    background-image: url(./assets/images/white_dot.svg);\n}\n\n.banner {\n    font-size: 2.5rem;\n}\n\n.winner {\n    font-size: 6rem;\n}\n\nfooter {\n    flex: 0 1 auto;\n    display: grid;\n    place-content: center;\n}\n\nfooter > div {\n    padding: 0.4em 0.5em;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_html_elements_first_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/html_elements/first_page */ "./src/modules/html_elements/first_page.js");




console.log("battleship");

(0,_modules_html_elements_first_page__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/modules/html_elements/first_page.js":
/*!*************************************************!*\
  !*** ./src/modules/html_elements/first_page.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_odin_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/odin_logo.svg */ "./src/assets/images/odin_logo.svg");
/* harmony import */ var _assets_images_github_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/github_logo.svg */ "./src/assets/images/github_logo.svg");
/* harmony import */ var _html_create_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html_create_functions */ "./src/modules/html_elements/html_create_functions.js");
/* harmony import */ var _second_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./second_page */ "./src/modules/html_elements/second_page.js");
/* harmony import */ var _object_game_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../object/game_control */ "./src/modules/object/game_control.js");
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */








const firstPage = (function initFirstPage() {

    function bodyRemoveContent() {
        const body = document.querySelector("body");
        body.replaceChildren();
    }

    function makeHeader() {
        const body = document.querySelector("body");
        const header = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_2__.makeElement)({elementType: "header"});
        body.appendChild(header);
    }

    function makeHeaderContent() {
        const header = document.querySelector("header");
        const h1 = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_2__.makeElement)({elementType: "h1", textContent: "BATTLESHIP", classNames: "firstPage", title: "BATTLESHIP"});
        header.appendChild(h1);
    }

    function makeMain() {
        const body = document.querySelector("body");
        const main = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_2__.makeElement)({elementType: "main"});
        body.appendChild(main);
    }

    function inputNameValidation() {

        const inputName = document.querySelector("input");
        const inputNameError = document.querySelector("span.error");

        function showErrorName() {
            if(inputName.validity.valueMissing) {
                inputNameError.textContent = "You need to enter your name";
                inputNameError.className = "error active";
            } else if(inputName.validity.patternMismatch) {
                inputNameError.textContent = "name should start with capital letter";
                inputNameError.className = "error active";
            } else if(inputName.validity.tooShort) {
                inputNameError.textContent = "name should be atleast 2 characters long";
                inputNameError.clasName = "error active";
            }
        }

        if(inputName.validity.valid) {
            inputNameError.textContent = "";
            inputNameError.className = "error";
        } else {
            showErrorName();
        }
        if(inputName.getAttribute("placeholder")) {
            inputName.removeAttribute("placeholder");
        }
    }

    function makeForm() {
        const main = document.querySelector("main");
        const form = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_2__.makeElement)({elementType: "form"});
        const label = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_2__.makeElement)({elementType: "label", textContent: "Enter name", title: "enter name label"});
        label.setAttribute("for", "name");
        const input = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_2__.makeInput)({type: "text", id: "name", name: "name", pattern: "^[A-Z][A-Za-z]*", minLength: 2, maxLength: 15, placeholder: "Enter your name", required: true});
        input.addEventListener("input", inputNameValidation)
        const span = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_2__.makeElement)({elementType: "span", classNames: "error"});
        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(span);
        main.appendChild(form);
    }

    function startButtonClicked() {
        const inputName = document.querySelector("input");
        if(!inputName.validity.valid) {
            inputNameValidation();
        } else {
            const playerName = inputName.value;
            (0,_object_game_control__WEBPACK_IMPORTED_MODULE_4__.initPlayers)(playerName);
            (0,_second_page__WEBPACK_IMPORTED_MODULE_3__["default"])();
        }
    }

    function createStartGameButton() {
        const main = document.querySelector("main");
        const startButton = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_2__.makeButton)({ textContent: "Start Game", event: "click", title: "start game button", callBackFunction: [startButtonClicked] });
        main.appendChild(startButton);
    }

    function makeFooter() {
        const body = document.querySelector("body");
        const footer = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_2__.makeElement)({elementType: "footer"});
        body.appendChild(footer); 
    }

    function createFooterContent() {
        const footer = document.querySelector("footer");
        const div = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_2__.makeElement)({textContent: "Created to complete the assignment BATTLESHIP of The Odin Project."});

        const linkToOdinProject = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_2__.makeElement)({elementType: "a"});
        linkToOdinProject.setAttribute("href", "https://www.theodinproject.com");
        const odinLogoImg = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_2__.makeImg)({ id: "odin", src: _assets_images_odin_logo_svg__WEBPACK_IMPORTED_MODULE_0__, title: "The Odin Project Logo and Link"});
        linkToOdinProject.appendChild(odinLogoImg);
        
        const linkToSourceCode = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_2__.makeElement)({ elementType: "a"});
        linkToSourceCode.setAttribute("href", "https://github.com/4C-75-63-6B-79/Battleship");
        const gitHubLogo = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_2__.makeImg)({ id: "github", src: _assets_images_github_logo_svg__WEBPACK_IMPORTED_MODULE_1__, title: "Source Code Link"});
        linkToSourceCode.appendChild(gitHubLogo);

        div.appendChild(linkToOdinProject);
        div.appendChild(linkToSourceCode);
        footer.appendChild(div);
    }

    function loadFirstPage() {
        bodyRemoveContent();
        makeHeader();
        makeHeaderContent();
        makeMain();
        makeForm();
        createStartGameButton();
        makeFooter();
        createFooterContent();
    }

    return {
        loadFirstPage,
    }

})();

const {loadFirstPage} = firstPage;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFirstPage);

/***/ }),

/***/ "./src/modules/html_elements/fourth_page.js":
/*!**************************************************!*\
  !*** ./src/modules/html_elements/fourth_page.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_create_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html_create_functions */ "./src/modules/html_elements/html_create_functions.js");
/* harmony import */ var _first_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first_page */ "./src/modules/html_elements/first_page.js");
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */




const fourthPage = (function initFourthPage() {

    function removeMainContent() {
        const main = document.querySelector("main");
        main.replaceChildren();
    }

    function makeTheWinnerIs(winnerName) {
        const main = document.querySelector("main");
        const h2 = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({elementType: "h2", classNames: "banner", textContent: "The Winner Is: ", title: "The Winner Is: "});
        const h3 = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({elementType: "h2", classNames: "winner", textContent: winnerName, title: `winner name is ${winnerName}`});
        main.appendChild(h2);
        main.appendChild(h3);
    }

    function playAgainButtonClicked() {
        (0,_first_page__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }

    function makeStartGameAgainButton() {
        const main = document.querySelector("main");
        const startGameAgainButton = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeButton)({textContent: "Play Again", title: "play again button", event: "click", callBackFunction: [playAgainButtonClicked]});
        main.appendChild(startGameAgainButton);
    }

    function loadFourthPage(winnerName) {
        removeMainContent();
        makeTheWinnerIs(winnerName);
        makeStartGameAgainButton();
    }

    return {
        loadFourthPage,
    }
})();

const {loadFourthPage} = fourthPage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFourthPage);

/***/ }),

/***/ "./src/modules/html_elements/html_create_functions.js":
/*!************************************************************!*\
  !*** ./src/modules/html_elements/html_create_functions.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeButton": () => (/* binding */ makeButton),
/* harmony export */   "makeElement": () => (/* binding */ makeElement),
/* harmony export */   "makeGrid": () => (/* binding */ makeGrid),
/* harmony export */   "makeImg": () => (/* binding */ makeImg),
/* harmony export */   "makeInput": () => (/* binding */ makeInput)
/* harmony export */ });
function makeElement({elementType = "div", id, classNames, textContent, title, dataAttributeName, dataAttributeValue, events, callBackFunctions}) {
    const element = document.createElement(`${elementType}`);
    if(id) {
        element.setAttribute("id", id);
    }
    if(classNames) {
        classNames.split(" ").forEach(eleClass => element.classList.add(eleClass));
    }
    element.textContent = textContent || "";
    if(title) {
        element.setAttribute("title", title);
    }
    if(dataAttributeName) {
        element.setAttribute(`data-${dataAttributeName}`, "");
    }
    if(dataAttributeValue && dataAttributeName) {
        element.setAttribute(`data-${dataAttributeName}`, dataAttributeValue);
    }
    if(Array.isArray(events) && Array.isArray(callBackFunctions) && events.length === callBackFunctions.length) {
        events.forEach((event, i) => element.addEventListener(event, callBackFunctions[i]));
    }
    return element;
}

function makeButton({id, classNames, textContent, title, dataAttributeName, dataAttributeValue, event, callBackFunction}) {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    if(id) {
        button.setAttribute("id", id);
    }
    if(classNames) {
        classNames.split(" ").forEach(eleClass => button.classList.add(eleClass));
    }
    button.textContent = `${textContent}` || "";
    if(title) {
        button.setAttribute("title", title);
    }
    if(dataAttributeName) {
        button.setAttribute(`data-${dataAttributeName}`, "");
    }
    if(dataAttributeValue && dataAttributeName) {
        button.setAttribute(`data-${dataAttributeName}`, dataAttributeValue);
    }
    if(callBackFunction && event) {
        callBackFunction.forEach(eleFunction => button.addEventListener(event, eleFunction));
    }
    return button;
}

function makeImg({id, src, title}) {
    const img = new Image();
    if(id) {
        img.setAttribute("id", id);
    }
    if(src) {
        img.src = src;
    }
    if(title) {
        img.setAttribute("title", title);
    }
    return img;
}

function makeGrid(callBackFunctions) {
    const gridContainer = makeElement({classNames: "gridContainer" });

    // gridContainer.style.display = "grid";
    // gridContainer.style.gridTemplateRows = "repeat(10, 30px)";
    // gridContainer.style.gridTemplateColumns = "repeat(10, 30px)";
    // gridContainer.style.gap = "5px";

    for(let i=0; i<10; i += 1) {
        for(let j=0; j<10; j += 1) {
            const div = makeElement({classNames: "box", title: "emptyBox", dataAttributeName: "coordinates", dataAttributeValue: `${i}${j}`, events: ["mouseover", "mouseout", "click"], callBackFunctions});
            gridContainer.appendChild(div);
        }
    }

    return gridContainer;
}

function makeInput({type, id, name, pattern, minLength, maxLength, placeholder, required}) {
    const input = document.createElement("input");
    if(type) {
        input.setAttribute("type", type);
    }
    if(id) {
        input.setAttribute("id", id);
    }
    if(name) {
        input.setAttribute("name", name);
    }
    if(pattern) {
        input.setAttribute("pattern", pattern);
    }
    if(minLength) {
        input.setAttribute("minlength", `${Number(minLength)}`);
    }
    if(maxLength) {
        input.setAttribute("maxlength", `${Number(maxLength)}`);
    }
    if(placeholder) {
        input.setAttribute("placeholder", placeholder);
    }
    if(required) {
        input.setAttribute("required", "");
    }
    return input
}



/***/ }),

/***/ "./src/modules/html_elements/second_page.js":
/*!**************************************************!*\
  !*** ./src/modules/html_elements/second_page.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object_game_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/game_control */ "./src/modules/object/game_control.js");
/* harmony import */ var _html_create_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html_create_functions */ "./src/modules/html_elements/html_create_functions.js");
/* harmony import */ var _third_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./third_page */ "./src/modules/html_elements/third_page.js");
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */





const secondPage = (function initSecondPage() {

    const currentShip = (function initShip() {
        const ships = [];
        let name; let len;
        function updateShip() {
            const ship = ships.pop();
            if(!ship) return true; // to show that all the ships are placed and now we can start the game
            name = ship.name;
            len = ship.len;
            return false;
        }
        function initShipsArray() {
            if(ships.length === 0) ships.push(
                {name: "destroyer", len: 2},
                {name: "cruiser", len: 3},
                {name: "submarine", len: 3},
                {name: "battleship", len: 4},
                {name: "carrier", len: 5}
            );
        }
        function getName() { return name; }
        function geLength() { return len; }
        return {
            initShipsArray,
            updateShip,
            getName,
            geLength,
        }
    })();

    function removeClassFromHeader() {
        const h1 = document.querySelector("h1.firstPage");
        h1.classList.remove("firstPage")
    }

    function removeAllContentMain() {
        const main = document.querySelector("main");
        main.replaceChildren();
    }

    function makeShipToBePlacedHeader() {
        const main = document.querySelector("main");
        const textContent = `Chief, Place Your ${  currentShip.getName().charAt(0).toUpperCase()  }${ currentShip.getName().substr(1) }`;
        const h2 = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_1__.makeElement)({ elementType: "h2", title: textContent, textContent});
        main.appendChild(h2);
    }

    function updateShipToBePlaceHeader() {
        const h2 = document.querySelector("h2");
        const textContent = `Chief, Place Your ${  currentShip.getName().charAt(0).toUpperCase()  }${ currentShip.getName().substr(1) }`;
        h2.setAttribute("title", textContent);
        h2.textContent = textContent;
    }

    function axisButtonClicked(event) {
        const button = event.target;
        const currentAxis = button.getAttribute("data-currentAxis");
        if(currentAxis === "x") {
            button.textContent = "Place Vessel in X Axis";
            button.setAttribute("title", "Place Vessel in X Axis");
            button.setAttribute("data-currentAxis", "y");
        } else if (currentAxis === "y"){
            button.textContent = "Place Vessel in Y Axis";
            button.setAttribute("title", "Place Vessel in Y Axis");
            button.setAttribute("data-currentAxis", "x");
        }
    }

    function makeAxisChoiceButton() {
        const main = document.querySelector("main");
        const axisButton = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_1__.makeButton)({ textContent: "Place Vessel in Y Axis", title: "Place Vessel in Y Axis", dataAttributeName: "currentAxis", dataAttributeValue: "x", event: "click", callBackFunction: [axisButtonClicked] });
        main.appendChild(axisButton);
    }

    function getCoordinates(currentBoxCoordinates) {
        const currentCoordinate = [ Number(currentBoxCoordinates.charAt(0)), Number(currentBoxCoordinates.charAt(1)) ]
        const coordinates = [ currentCoordinate ];
        const currentAxis = document.querySelector("button[data-currentAxis]").getAttribute("data-currentAxis");
        const shipLength = currentShip.geLength();
        for(let i=0; i<shipLength; i += 1) {
            if(currentAxis === "x") {
                coordinates.push( [ currentCoordinate[0], currentCoordinate[1] + i ] );
            } else if(currentAxis === "y") {
                coordinates.push( [ currentCoordinate[0] + i, currentCoordinate[1] ] )
            }
        } 
        return coordinates;
    }

    function changeBoxesClass(className, currentBoxCoordinates) {
        const coordinates = getCoordinates(currentBoxCoordinates);
        coordinates.forEach(coords => {
            const dataCoordinates = `${coords[0]}${coords[1]}`;
            const box = document.querySelector(`[data-coordinates = "${dataCoordinates}"]`);
            box.className = `box ${className}`;
        });
    }

    function isCurrentBoxValidForShip(target) {
        const targetDataCoordinates = target.getAttribute("data-coordinates");
        const currentAxis = document.querySelector("button[data-currentAxis]").getAttribute("data-currentAxis");
        const shipLength = currentShip.geLength();
        const isEnoughNumberOfBoxes = (currentAxis === "x" && 10 - Number(targetDataCoordinates.charAt(1)) >= shipLength) || (currentAxis === "y" && 10 - Number(targetDataCoordinates.charAt(0)) >= shipLength) ;
        if(!isEnoughNumberOfBoxes) {
            return false;
        }
        const coordinates = getCoordinates(targetDataCoordinates);       
        const boxesHaveShipPlaced = coordinates.every( coords => {
            const dataCoordinates = `${coords[0]}${coords[1]}`;
            const box = document.querySelector(`[data-coordinates = "${dataCoordinates}"]`);
            if(box.getAttribute("data-ship") === "") {
                return false;
            }
            return true;
        });
        return boxesHaveShipPlaced;
    }

    function addCurrentShipImage(clickedBox) {
        const currentBox = clickedBox;
        const currentAxis = document.querySelector("button[data-currentAxis]").getAttribute("data-currentAxis");
        clickedBox.classList.add(`${currentShip.getName()}`);
        if(currentAxis === "y") {
            currentBox.style.transform = "rotateZ(90deg)";
        }
    }

    function mouseOverBox(event) {
        const box = event.target;
        const currentBoxCoordinates = box.getAttribute("data-coordinates");
        if(isCurrentBoxValidForShip(box)) {
            changeBoxesClass("validBox", currentBoxCoordinates);
        } else {
            box.classList.add("invalidBox");
        }
    }

    function mouseOutBox(event) {
        const box = event.target;
        const currentBoxCoordinates = box.getAttribute("data-coordinates");
        if(isCurrentBoxValidForShip(box)) {
            changeBoxesClass("", currentBoxCoordinates);
        } else {
            box.classList.remove("invalidBox");
        }
    }

    function boxClicked(event) {
        const clickedBox = event.target;
        const currentBoxCoordinates = clickedBox.getAttribute("data-coordinates");

        function removeEventListenerFormBoxes(coordinates) {
            coordinates.forEach( coords => {
                const dataCoordinates = `${coords[0]}${coords[1]}`;
                const box = document.querySelector(`[data-coordinates = "${dataCoordinates}"]`);
                box.setAttribute("data-ship", "");
                box.removeEventListener("mouseover", mouseOverBox);
                box.removeEventListener("mouseout", mouseOutBox);
                box.removeEventListener("click", boxClicked);
            });
        }

        function changeTitleBoxes(coordinates) {
            coordinates.forEach( coords => {
                const dataCoordinates = `${coords[0]}${coords[1]}`;
                const box = document.querySelector(`[data-coordinates = "${dataCoordinates}"]`);
                box.setAttribute("title", currentShip.getName());
            });
        }

        if(isCurrentBoxValidForShip(clickedBox)) {
            changeBoxesClass("shipPlacedOnBox", currentBoxCoordinates);
            addCurrentShipImage(clickedBox);
            const coordinates = getCoordinates(currentBoxCoordinates);
            removeEventListenerFormBoxes(coordinates);
            changeTitleBoxes(coordinates);
            (0,_object_game_control__WEBPACK_IMPORTED_MODULE_0__.placeUserShips)(currentShip.getName(), coordinates);
            if (currentShip.updateShip()) {
                (0,_third_page__WEBPACK_IMPORTED_MODULE_2__["default"])();
            } else{
                updateShipToBePlaceHeader();
            }
        }
    }

    function makeGridContainer() {  // making gird to place the ships
        const main = document.querySelector("main");
        const grid = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_1__.makeGrid)([mouseOverBox, mouseOutBox, boxClicked]);
        main.appendChild(grid);
    }

    function loadSecondPage() {
        removeClassFromHeader();
        removeAllContentMain();
        currentShip.initShipsArray();
        currentShip.updateShip();
        makeShipToBePlacedHeader();
        makeAxisChoiceButton();
        makeGridContainer();
        (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_1__.makeGrid)();
        (0,_object_game_control__WEBPACK_IMPORTED_MODULE_0__.placeComputerShips)();
    }

    return {
        loadSecondPage,
    }

})();

const {loadSecondPage} = secondPage;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSecondPage);

/***/ }),

/***/ "./src/modules/html_elements/third_page.js":
/*!*************************************************!*\
  !*** ./src/modules/html_elements/third_page.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_create_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html_create_functions */ "./src/modules/html_elements/html_create_functions.js");
/* harmony import */ var _object_game_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/game_control */ "./src/modules/object/game_control.js");
/* harmony import */ var _fourth_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fourth_page */ "./src/modules/html_elements/fourth_page.js");
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */





const thirdPage = (function initThirdPage() {

    function removeAllContentMain() {
        const main = document.querySelector("main");
        main.replaceChildren();
    }

    function makeStatusBox() {
        const main = document.querySelector("main");
        const statusBox = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({id:"statusBox"});
        const p = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({elementType: "p", textContent: "Awaiting your order Chief!", title: "Awaiting your order Chief!"});
        const pbackward = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({elementType: "p", classNames: "backward"});
        statusBox.appendChild(pbackward);
        statusBox.appendChild(p);
        main.appendChild(statusBox);
    }

    function makeShipIndicatorConatiner() {
        const shipIndicatorConatiner = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({id: "shipIndicatorContainer"});

        const ships = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];

        ships.forEach( ship => {
            const shipIndicator  = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({classNames: "shipStatusIndicator", title: `${ship} is active`, dataAttributeName: "shipName", dataAttributeValue: ship});
            const shipName = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({elementType: "h4", textContent: ship})
            const indicatorLight = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({classNames: "indicatorLight shipActive"});
            shipIndicator.appendChild(shipName);
            shipIndicator.appendChild(indicatorLight);
            shipIndicatorConatiner.appendChild(shipIndicator);
        });
        return shipIndicatorConatiner;
    }

    function makeWaterContainers() {
        const main = document.querySelector("main");
        const waterContainer = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({id: "waterContainer"});
        
        const friendlyWater = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({id: "friendlyWater", classNames: "water"});
        const enemyWater = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({id: "enemyWater", classNames: "water"});

        waterContainer.appendChild(friendlyWater);
        waterContainer.appendChild(enemyWater);

        main.appendChild(waterContainer);
    }

    function makeFriendlyWater(friendlyWaterGird) {
        const friendlyWater = document.getElementById("friendlyWater");
        const title = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({elementType: "h2", textContent: "Friendly Waters", title: "Friendly Waters"});
        friendlyWater.appendChild(title);
        const friendlyWaterShipIndicatorContainer = makeShipIndicatorConatiner();
        friendlyWater.appendChild(friendlyWaterShipIndicatorContainer);
        friendlyWater.appendChild(friendlyWaterGird);
    }

    function mouseOver(event) {
        const box = event.target;
        box.classList.add("target");
    }

    function mouseOut(event) {
        const box = event.target;
        box.classList.remove("target");
    }

    function updateFriendlyWater({coord, isPlayerHit}) {
        const box = document.querySelector(`#friendlyWater>.gridContainer>div[data-coordinates = "${coord[0]}${coord[1]}"]`);
        box.classList.add(isPlayerHit ? "hit" : "miss");
    }

    function updateEnemyWater({coord, isPlayerHit}) {
        const box = document.querySelector(`#enemyWater>.gridContainer>div[data-coordinates = "${coord[0]}${coord[1]}"]`);
        box.classList.add(isPlayerHit ? "hit" : "miss");
    }

    function checkWinner({isWinner, name}) {
        if(isWinner) {
            (0,_fourth_page__WEBPACK_IMPORTED_MODULE_2__["default"])(name);
            return true;
        }
        return false;
    }

    function updateMessageBox({name, isPlayerHit, isNewShipSunk}) {

        function getMessage() {
            if(isNewShipSunk) {
                if(name === "computer") {
                   return `Enemy fired a shot and sunk your ${isNewShipSunk.name}.`;
                } 
                return `You fired a shot and sunk enemy's ${isNewShipSunk.name}.`;
            } 
            if(isPlayerHit){
                if(name === "computer") {
                    return "Enemy fired a shot and it hit your ship";
                } 
                return "You fired a shot and it hit enemy ship";
            }
            if(name === "computer") {
                return "Enemy fired a shot and missed";
            } 
            return "You fired a shot and missed";
        }

        const messageBox = document.getElementById("statusBox");
        const pbackward = document.querySelector("p.backward");
        messageBox.removeChild(pbackward);
        const p = document.querySelector("#statusBox > p");
        p.classList.add("backward");
        const textContent = getMessage();
        const newP = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({elementType: "p", textContent, title: textContent});
        messageBox.appendChild(newP);
    }

    function updateIndicatorLightOfShipSunk(hitDetails) {
        const {name, isNewShipSunk} = hitDetails;
        if(!isNewShipSunk) return;
        const water = name === "computer" ? "friendlyWater" : "enemyWater";
        const indicatorLight = document.querySelector(`#${water}>#shipIndicatorContainer>div[data-shipname=${isNewShipSunk.name}]>div`);
        indicatorLight.classList.remove("shipHit");
        indicatorLight.classList.add("shipLost");
    }

    function updateIndicatorBlinkingLight(hitDetails) {
        const {shipsThatAreHit} = hitDetails;
        if(shipsThatAreHit.length === 0) return;
        shipsThatAreHit.forEach( shipName => {
            const indicatorLight = document.querySelector(`#friendlyWater>#shipIndicatorContainer>div[data-shipname=${shipName}]>div`);
            indicatorLight.classList.remove("shipActive");
            indicatorLight.classList.add("shipHit");
        });
    }
    
    function mainGameControl(attackedCoordinates) {  // called when user makea a move with the coords
        let hitDetails = (0,_object_game_control__WEBPACK_IMPORTED_MODULE_1__.playerUserMakesMove)(attackedCoordinates);
        updateEnemyWater(hitDetails);
        updateMessageBox(hitDetails);
        updateIndicatorLightOfShipSunk(hitDetails);
        if(checkWinner(hitDetails)) return;
        hitDetails = (0,_object_game_control__WEBPACK_IMPORTED_MODULE_1__.playerComputerMakesMove)();
        updateFriendlyWater(hitDetails);
        updateMessageBox(hitDetails);
        updateIndicatorBlinkingLight(hitDetails);
        updateIndicatorLightOfShipSunk(hitDetails);
        checkWinner(hitDetails);
    }

    function boxClicked(event) {
        const box = event.target;
        const coord = box.getAttribute("data-coordinates");
        box.style.backgroundColor = "#ffffff";
        box.removeEventListener("mouseover", mouseOver);
        box.removeEventListener("mouseout", mouseOut);
        box.removeEventListener("click", boxClicked);
        mainGameControl([Number(coord.charAt(0)), Number(coord.charAt(1))])
    }

    function makeEnemyWater() {
        const enemyWater = document.getElementById("enemyWater");
        const title = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeElement)({elementType: "h2", textContent: "Enemy Waters", title: "Enemy Waters"});
        enemyWater.appendChild(title);
        const enemyWaterShipIndicatorContainer = makeShipIndicatorConatiner();
        enemyWater.appendChild(enemyWaterShipIndicatorContainer);

        const grid = (0,_html_create_functions__WEBPACK_IMPORTED_MODULE_0__.makeGrid)([mouseOver, mouseOut, boxClicked]);
        enemyWater.appendChild(grid);
    }

    function removeEventListenerFromGird(grid) {
        const boxes = Array.from(grid.children);
        boxes.forEach(box => {
            box.replaceWith(box.cloneNode(true));
        });
    }

    function loadThirdPage() {
        const friendlyWaterGrid = document.querySelector("div.gridContainer");
        removeEventListenerFromGird(friendlyWaterGrid);
        removeAllContentMain();
        makeStatusBox();
        makeWaterContainers();
        makeFriendlyWater(friendlyWaterGrid);
        makeEnemyWater();
    }

    return {
        loadThirdPage,
    }

})();

const { loadThirdPage } = thirdPage;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadThirdPage);

/***/ }),

/***/ "./src/modules/object/enemyWater.js":
/*!******************************************!*\
  !*** ./src/modules/object/enemyWater.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnemyWater)
/* harmony export */ });
function EnemyWater() {
    this.board = Array.from({length: 10}, () => Array.from({length: 10}, () => null));
    this.attackDetails = {
        lastCoord: null,
        lastDirection: null,
        xCoord: [],
        yCoord: [],
    }
    this.shipLength = [2,3,3,4,5];
    this.percentFill = 45;
}

EnemyWater.prototype.makeAttack = function makeAttack() {
    function getRandomCoords() {
        return [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    }

    const isPercentFilled = (function initPercentFilled() {
        let isFilled = false;

        return function countFilled() {
            if(isFilled) return isFilled;

            let count = 0;
            this.board.forEach( row => {
                row.forEach( element => {
                    if(element !== null) count += 1;
                });
            });
            if(count > this.percentFill) isFilled = true;
            return isFilled;
        }
    })();

    function getTheEmptyBoxWithLength(longestShipLeftOnEnemyWater) {
        let emptyBoxCount = 0;
        for(let i=0; i<this.board.length; i += 1) {
            emptyBoxCount = 0;
            for(let j=0; j<this.board[i].length; j += 1) {
                if(this.board[i][j] === null) {
                    emptyBoxCount += 1;
                } else {
                    emptyBoxCount = 0;
                }
                if(longestShipLeftOnEnemyWater === emptyBoxCount) {
                    return [i, j];
                }
            }
        }
        let coords;
        for(let i=0; i<this.board.length; i += 1) {
            emptyBoxCount = 0;
            for(let j=0; j<this.board[i].length; j += 1) {
                if(this.board[j][i] === null) {
                    emptyBoxCount += 1;
                } else {
                    emptyBoxCount = 0;
                }
                if(longestShipLeftOnEnemyWater === emptyBoxCount) {
                    coords = [j, i];
                }
            }
        }
        return coords;
    }

    let {lastCoord, lastDirection} = this.attackDetails;
    const {xCoord, yCoord} = this.attackDetails;
    let coords;

    if(xCoord.length > 0 || yCoord.length > 0) {
        if(lastDirection === "x" && xCoord.length > 0) {
            coords = xCoord.pop();
            lastCoord = coords;
        } else if(lastDirection === "y" && yCoord.length > 0) {
            coords =yCoord.pop();
            lastCoord = coords;
        } else {
            coords = xCoord.pop() || yCoord.pop();
            lastCoord = coords;
            lastDirection = lastDirection === "x" ? "y" : "x";
        }
    } else if(isPercentFilled.call(this)){
        const longestShipLeftOnEnemyWater = this.shipLength[this.shipLength.length-1];
        coords = getTheEmptyBoxWithLength.call(this, longestShipLeftOnEnemyWater);
        lastCoord = coords;
        lastDirection = null;
    } else {
        coords = getRandomCoords();
        while(this.board[coords[0]][coords[1]] !== null) {
            coords = getRandomCoords();
        }
        lastCoord = coords;
        lastDirection = null;
    }

    this.attackDetails.lastCoord = lastCoord;
    this.attackDetails.lastDirection = lastDirection;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.board[coords[0]][coords[1]] = -1;
    return coords;
}

EnemyWater.prototype.markHit = function markHit(coords) {
    if(this.board[coords[0]][coords[1]] === -1) {
        this.board[coords[0]][coords[1]] = 1;
    }
} 

EnemyWater.prototype.removeShipLenght = function removeShipLenght(shipLengthToRemove) {
    const index = this.shipLength.indexOf(shipLengthToRemove);
    if(index !== -1) {
        return this.shipLength.splice(index, 1)[0];
    }
    return false;
}

EnemyWater.prototype.markMiss = function markMiss(coords) {
    if(this.board[coords[0]][coords[1]] === -1) {
        this.board[coords[0]][coords[1]] = 0;
    }
} 

EnemyWater.prototype.updateAttackDetails  = function updateAttackDetails(lastAttackSuccessStatus) {

    let {lastDirection} = this.attackDetails;
    const {lastCoord, xCoord, yCoord} = this.attackDetails;

    if(!lastCoord) return;
    
    function isValidAttackCoordinates(coords) {
        return coords[0] >=0 && coords[0] < 10 && coords[1] >=0 && coords[1] < 10 && this.board[coords[0]][coords[1]] === null; 
    }

    function adjacentCoordinates(axis) {
        const coords = [ 
            [ lastCoord[0] - 1 , lastCoord[1] ],  // left
            [ lastCoord[0] + 1, lastCoord[1] ],  // right
            [ lastCoord[0] , lastCoord[1] - 1 ],  // top
            [ lastCoord[0] , lastCoord[1] + 1]   // bottom
        ];

        if(axis === "x") {
            if( isValidAttackCoordinates.call(this, coords[0]) ) xCoord.push(coords[0]);
            if( isValidAttackCoordinates.call(this, coords[1]) ) xCoord.push(coords[1]);
        } else if(axis === "y") {
            if( isValidAttackCoordinates.call(this, coords[2]) ) yCoord.push(coords[2]);
            if( isValidAttackCoordinates.call(this, coords[3]) ) yCoord.push(coords[3]);
        } else {
            if( isValidAttackCoordinates.call(this, coords[0]) ) xCoord.push(coords[0]);
            if( isValidAttackCoordinates.call(this, coords[1]) ) xCoord.push(coords[1]);
            if( isValidAttackCoordinates.call(this, coords[2]) ) yCoord.push(coords[2]);
            if( isValidAttackCoordinates.call(this, coords[3]) ) yCoord.push(coords[3]);
        }
    }


    if(lastAttackSuccessStatus) {
        adjacentCoordinates.call(this, lastDirection);
        lastDirection = lastDirection === null ? "x" : lastDirection;
    } else {
        lastDirection = lastDirection === "x" ? "y" : "x";
    }

    this.attackDetails.lastCoord = lastCoord;
    this.attackDetails.lastDirection = lastDirection;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
}


/***/ }),

/***/ "./src/modules/object/friendlyWater.js":
/*!*********************************************!*\
  !*** ./src/modules/object/friendlyWater.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FriendlyWater)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/object/ship.js");


function FriendlyWater() {
    this.board = Array.from({length: 10}, () => Array.from({length: 10}, () => null));
}

FriendlyWater.prototype.placeShip = function placeShip(ship, coords) {
    if(!coords.every(ele => this.board[ele[0]][ele[1]] === null)) {
        return false;
    }
    coords.forEach(ele => {
        this.board[ele[0]][ele[1]] = ship;
    });
    return true;
}

FriendlyWater.prototype.receiveAttack = function receiveAttack(coord) {
    if(this.board[coord[0]][coord[1]] === null) {
        this.board[coord[0]][coord[1]] = 0; 
        return false; // misses
    } 
    
    if(Object.prototype.isPrototypeOf.call(_ship__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, this.board[coord[0]][coord[1]])) {
        this.board[coord[0]][coord[1]].hit(); // hit the ship
        this.board[coord[0]][coord[1]] = 1; 
        return true; // hit
    }

    return null; // does not do anything to the coords already attacked
}



/***/ }),

/***/ "./src/modules/object/game_control.js":
/*!********************************************!*\
  !*** ./src/modules/object/game_control.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPlayers": () => (/* binding */ initPlayers),
/* harmony export */   "placeComputerShips": () => (/* binding */ placeComputerShips),
/* harmony export */   "placeUserShips": () => (/* binding */ placeUserShips),
/* harmony export */   "playerComputerMakesMove": () => (/* binding */ playerComputerMakesMove),
/* harmony export */   "playerUserMakesMove": () => (/* binding */ playerUserMakesMove)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/modules/object/player.js");


const gameControl = (function gameControl() {

    let player1; 
    let player2;

    function initPlayers(userPlayerName = "Chief") {
        player1 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](`${userPlayerName}`);
        player2 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]("computer");
    }

    function placeUserShips(shipName, coords) {
        return player1.placeShip(shipName, coords);
    }

    function playerUserMakesMove(coord) {
        const isPlayerHit = player2.receiveAttack(coord);
        player1.markAttack(isPlayerHit, coord);
        const shipsThatAreHit = player2.getShipsThatAreHit();
        const isNewShipSunk = player2.isNewShipSunk();
        player1.removeEnemyShipLength(isNewShipSunk);
        const isWinner = player2.allShipSunk();
        return {
            name: player1.name,
            coord,              // coordinates of the attack
            isPlayerHit,        // status if it was a successful attack or not
            shipsThatAreHit,    // ships that are hit
            isNewShipSunk,      // is there any new ship which is sunk
            isWinner,           // has the game been won
        };
    }

    function playerComputerMakesMove() {
        const coord = player2.makeAttack();
        const isPlayerHit = player1.receiveAttack(coord);
        player2.markAttack(isPlayerHit, coord);
        const shipsThatAreHit = player1.getShipsThatAreHit();
        const isNewShipSunk = player1.isNewShipSunk();
        player2.removeEnemyShipLength(isNewShipSunk);
        const isWinner = player1.allShipSunk();
        return {
            name: player2.name,
            coord,              // coordinates of the attack
            isPlayerHit,        // status if it was a successful attack or not
            shipsThatAreHit,    // ships that are hit
            isNewShipSunk,      // is there any new ship which is sunk
            isWinner,           // has the game been won
        };
    }
    
    function placeComputerShips() {
        player2.placeShipAutomatically();
    }

    return {
        initPlayers,
        placeUserShips,
        placeComputerShips,
        playerUserMakesMove,
        playerComputerMakesMove,
    }
})();

const {initPlayers, placeUserShips, placeComputerShips, playerUserMakesMove, playerComputerMakesMove} = gameControl;





/***/ }),

/***/ "./src/modules/object/player.js":
/*!**************************************!*\
  !*** ./src/modules/object/player.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _enemyWater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemyWater */ "./src/modules/object/enemyWater.js");
/* harmony import */ var _friendlyWater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friendlyWater */ "./src/modules/object/friendlyWater.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/modules/object/ship.js");




function Player(name) {
    this.name = name;
    this.friendlyWater = new _friendlyWater__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.enemyWater = new _enemyWater__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.ships = {
        "carrier": new _ship__WEBPACK_IMPORTED_MODULE_2__["default"]("carrier", 5),
        "battleship": new _ship__WEBPACK_IMPORTED_MODULE_2__["default"]("battleship", 4),
        "cruiser": new _ship__WEBPACK_IMPORTED_MODULE_2__["default"]("cruiser", 3),
        "submarine": new _ship__WEBPACK_IMPORTED_MODULE_2__["default"]("submarine", 3),
        "destroyer": new _ship__WEBPACK_IMPORTED_MODULE_2__["default"]("destroyer", 2),
    }
}

Player.prototype.placeShip = function placeShip(name, coord) {
    return this.friendlyWater.placeShip(this.ships[name], coord);
}

Player.prototype.makeAttack = function makeAttack() {
    return this.enemyWater.makeAttack();
}

Player.prototype.receiveAttack = function receiveAttack(coord) {
    return this.friendlyWater.receiveAttack(coord);
}

Player.prototype.markAttack = function markAttack(otherPlayerShipHit, coord) {
    this.enemyWater.updateAttackDetails(otherPlayerShipHit);
    if(otherPlayerShipHit) {
        this.enemyWater.markHit(coord);
    } else {
        this.enemyWater.markMiss(coord);
    }
}

Player.prototype.removeEnemyShipLength = function removeEnemyShipLength(ship) {
    if(Object.prototype.isPrototypeOf.call(_ship__WEBPACK_IMPORTED_MODULE_2__["default"].prototype, ship)) return this.enemyWater.removeShipLenght(ship.len);
    return false;
}

Player.prototype.getShipsThatAreHit = function getShipsThatAreHit() {
    const shipThatAreHit = Object.keys(this.ships).filter( key => this.ships[key].hitCount > 0);
    return shipThatAreHit;
}

Player.prototype.isNewShipSunk = function isNewShipSunk() {
    const sunkShip = Object.keys(this.ships).find(key => this.ships[key].isSunk());
    if(sunkShip) {
        const ship = this.ships[sunkShip];
        delete this.ships[sunkShip];
        return ship;
    }
    return false;
}

Player.prototype.allShipSunk = function allShipSunk() {
    return Object.keys(this.ships).length === 0;
}

Player.prototype.placeShipAutomatically = function placeShipAutomatically() {

    function coordsValid(coord) {
        return (coord[0] >= 0 && coord[0] <= 9 && coord[1] >= 0 && coord[1] <= 9);
    }

    function randomShipCoordGenerator(numOfCoordinates) {
        function getRandomCoords() {
            return [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
        }
    
        const coords = [getRandomCoords()];
        const direction = Math.floor(Math.random() * 2); // 0 for x and 1 for y
    
        while(coords.length < numOfCoordinates) {
            let first = coords[0];                  // gets the row value
            let last = coords[coords.length - 1];   // gets the columns value
    
            if(direction === 0) {
                first = [first[0],first[1]-1];      // adds coordinates in negative direction depending on axis
                last = [last[0],last[1]+1];         // adds coordinates in positive direction depending on axis
            } else if(direction === 1) {
                first = [first[0]-1,first[1]];
                last = [last[0]+1,last[1]];
            }
    
            if(coordsValid(first)) {
                coords.unshift(first);
            }
            if(coords.length === numOfCoordinates) break;
            if(coordsValid(last)) {
                coords.push(last);
            }
        }
        return coords;
    }

    function isShipAdjacentToCoords(coords) {
        const isShipPlaceOnAdjacent = coords.every(coord => {  // stores false is there is a ship placed on the adjacent coords
            const left = coordsValid([ coord[0], coord[1]-1 ]) ? [ coord[0], coord[1]-1 ] : null;
            const right = coordsValid([ coord[0], coord[1]+1 ]) ? [ coord[0], coord[1]+1 ] : null;
            const top = coordsValid([ coord[0]-1 , coord[1] ]) ? [ coord[0]-1, coord[1] ] : null;
            const bottom = coordsValid([ coord[0]+1 , coord[1] ]) ? [ coord[0]+1, coord[1] ] : null;

            if(left !== null && this.friendlyWater.board[left[0]][left[1]] !== null) return false;
            if(right !== null && this.friendlyWater.board[right[0]][right[1]] !== null) return false;
            if(top !== null && this.friendlyWater.board[top[0]][top[1]] !== null) return false;
            if(bottom !== null && this.friendlyWater.board[bottom[0]][bottom[1]] !== null) return false;

            return true
        });
        return !isShipPlaceOnAdjacent; // returns true if there is a ship adjacent to coords
    }
 
    function placeShip(name, len) {
        let coords = randomShipCoordGenerator(len);
        let isShipAdjacent = isShipAdjacentToCoords.call(this, coords);
        let isPlacedShip = false;

        if(!isShipAdjacent) {
            isPlacedShip = this.placeShip(name, coords);
        }

        while(isShipAdjacent && !isPlacedShip) {
            coords = randomShipCoordGenerator(len);
            isShipAdjacent = isShipAdjacentToCoords.call(this, coords);
            if(!isShipAdjacent) {
                isPlacedShip = this.placeShip(name, coords);
            }
        }
    }

    const ships = [ 
        ["carrier", 5],
        ["battleship", 4],
        ["cruiser", 3],
        ["submarine", 3],
        ["destroyer", 2],
    ];
    ships.forEach(ship => placeShip.call(this, ship[0], ship[1]));
    
}

/***/ }),

/***/ "./src/modules/object/ship.js":
/*!************************************!*\
  !*** ./src/modules/object/ship.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(name, len) {
    this.name = name;
    this.len = len;
    this.hitCount = 0;
}

Ship.prototype.hit = function hit() {
    if(!this.isSunk()) {
        this.hitCount += 1;
    }
}

Ship.prototype.isSunk = function isSunk() {
    return this.len === this.hitCount;
}

/***/ }),

/***/ "./src/assets/images/battleship.svg":
/*!******************************************!*\
  !*** ./src/assets/images/battleship.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f73e8f905e0f644c764.svg";

/***/ }),

/***/ "./src/assets/images/carrier.svg":
/*!***************************************!*\
  !*** ./src/assets/images/carrier.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98ed8edc16ae51e42eee.svg";

/***/ }),

/***/ "./src/assets/images/cruiser.svg":
/*!***************************************!*\
  !*** ./src/assets/images/cruiser.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e37302efe4e0fc3a168e.svg";

/***/ }),

/***/ "./src/assets/images/destroyer.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/destroyer.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "964c3435d886e8229d94.svg";

/***/ }),

/***/ "./src/assets/images/github_logo.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/github_logo.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae9f66ecc62b8c512648.svg";

/***/ }),

/***/ "./src/assets/images/odin_logo.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/odin_logo.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b35fce8b483dd3a854be.svg";

/***/ }),

/***/ "./src/assets/images/red_dot.svg":
/*!***************************************!*\
  !*** ./src/assets/images/red_dot.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf59b631b748bb3854c.svg";

/***/ }),

/***/ "./src/assets/images/submarine.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/submarine.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ede8f7b29077c1b6cf8f.svg";

/***/ }),

/***/ "./src/assets/images/white_dot.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/white_dot.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd4cbd89faf70b6f89bb.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxTQUFTLFlBQVksT0FBTyxTQUFTLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLHVEQUFjO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ3BELGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0llO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2h0bWxfZWxlbWVudHMvZmlyc3RfcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaHRtbF9lbGVtZW50cy9mb3VydGhfcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaHRtbF9lbGVtZW50cy9odG1sX2NyZWF0ZV9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2h0bWxfZWxlbWVudHMvc2Vjb25kX3BhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2h0bWxfZWxlbWVudHMvdGhpcmRfcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvb2JqZWN0L2VuZW15V2F0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL29iamVjdC9mcmllbmRseVdhdGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9vYmplY3QvZ2FtZV9jb250cm9sLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9vYmplY3QvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9vYmplY3Qvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2NhcnJpZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2JhdHRsZXNoaXAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2NydWlzZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL3N1Ym1hcmluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvZGVzdHJveWVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9yZWRfZG90LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy93aGl0ZV9kb3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbn1cXG5cXG5oMSB7XFxuICAgIHBhZGRpbmc6IDAuNGVtIDAuNWVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuaDEuZmlyc3RQYWdlIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBmbG9hdGluZztcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XFxufVxcblxcbkBrZXlmcmFtZXMgZmxvYXRpbmcge1xcbiAgICAwJSB7dG9wOiAtMjBweDt9XFxuICAgIDEwJSB7dG9wOiAyMHB4O31cXG4gICAgMjAlIHt0b3A6IC0xNXB4O31cXG4gICAgMzAlIHt0b3A6IDE1cHg7fVxcbiAgICA0MCUge3RvcDogLTEwcHg7fVxcbiAgICA1MCUge3RvcDogMTBweDt9XFxuICAgIDYwJSB7dG9wOiAtNXB4O31cXG4gICAgNzAlIHt0b3A6IDVweDt9XFxuICAgIDgwJSB7dG9wOiAtMnB4O31cXG4gICAgOTAlIHt0b3A6IDFweDt9XFxuICAgIDEwMCUge3RvcDogMHB4O31cXG59XFxuXFxubWFpbiB7XFxuICAgIGZsZXg6IDIgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvcm0gPiBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9ybSA+IGlucHV0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbmZvcm0gPiBpbnB1dDpwbGFjZWhvbGRlci1zaG93biB7XFxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRza3libHVlO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQ6cGxhY2Vob2xkZXItc2hvd246Zm9jdXMge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQ6Zm9jdXMsXFxuZm9ybSA+IGlucHV0LmludmFsaWQ6Zm9jdXMge1xcbiAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XFxufVxcblxcbmZvcm0gPiBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKTpub3QoOmZvY3VzKTppbnZhbGlkLFxcbmZvcm0gPiBpbnB1dC5pbnZhbGlkOm5vdCg6Zm9jdXMpIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xcbn1cXG5cXG5pbnB1dDp2YWxpZCB7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWViYmJiO1xcbiAgICBib3JkZXItcmFkaXVzOiAgMCAwIDRweCA0cHg7XFxufVxcblxcbi5lcnJvci5hY3RpdmUge1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC41cmVtO1xcbn1cXG5cXG4uZ3JpZENvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDM1cHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzVweCk7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi52YWxpZEJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5pbnZhbGlkQm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLnNoaXBQbGFjZWRPbkJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXFxuLmNhcnJpZXIsXFxuLmJhdHRsZXNoaXAsXFxuLmNydWlzZXIsXFxuLmRlc3Ryb3llcixcXG4uc3VibWFyaW5lIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2Fycmllcjo6YmVmb3JlLFxcbi5iYXR0bGVzaGlwOjpiZWZvcmUsXFxuLmNydWlzZXI6OmJlZm9yZSxcXG4uZGVzdHJveWVyOjpiZWZvcmUsXFxuLnN1Ym1hcmluZTo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgei1pbmRleDogMjtcXG4gICAgdG9wOiAtMXB4O1xcbiAgICBsZWZ0OiAtMXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgb3BhY2l0eTogMC41NTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTcuNXB4IDE3LjVweDtcXG59XFxuXFxuLmNhcnJpZXI6OmJlZm9yZSB7XFxuICAgIHdpZHRoOiAxOTVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxOTVweCAzNXB4O1xcbn1cXG5cXG4uYmF0dGxlc2hpcDo6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDE1NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1NXB4IDM1cHg7XFxufVxcblxcbi5jcnVpc2VyOjpiZWZvcmUge1xcbiAgICB3aWR0aDogMTE1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTE1cHggMzVweDtcXG59XFxuXFxuLnN1Ym1hcmluZTo6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDExNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExNXB4IDM1cHg7XFxufVxcblxcbi5kZXN0cm95ZXI6OmJlZm9yZSB7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDc1cHggMzVweDtcXG59XFxuXFxuI3N0YXR1c0JveCB7XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjVyZW07XFxufVxcblxcbiNzdGF0dXNCb3ggPiBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA2MDBtcyBlYXNlLWluO1xcbn1cXG5cXG4jc3RhdHVzQm94ID4gLmJhY2t3YXJkIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuI3dhdGVyQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG59XFxuXFxuLndhdGVyIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiAwLjRyZW07XFxufVxcblxcbiNzaGlwSW5kaWNhdG9yQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uc2hpcFN0YXR1c0luZGljYXRvciB7XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xcbn1cXG5cXG4uaW5kaWNhdG9yTGlnaHQge1xcbiAgICB3aWR0aDogMS43NXJlbTtcXG4gICAgaGVpZ2h0OiAwLjc1cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbn1cXG5cXG4uc2hpcEFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5zaGlwSGl0IHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5raW5nO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmtpbmcge1xcbiAgICAwJSB7YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjt9XFxuICAgIDI1JSB7YmFja2dyb3VuZC1jb2xvcjogI2VlNDQ0NDsgfVxcbiAgICA1MCUge2JhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47IH1cXG4gICAgNzUlIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0NDQ0OyB9XFxuICAgIDEwMCUge2JhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47fVxcbn1cXG5cXG4uc2hpcExvc3Qge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0NDQ0O1xcbn1cXG5cXG4udGFyZ2V0IHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxufVxcblxcbi5iYW5uZXIge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLndpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZmxleDogMCAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyID4gZGl2IHtcXG4gICAgcGFkZGluZzogMC40ZW0gMC41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvREFBb0Q7SUFDcEQsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw2REFBNkQ7QUFDakU7O0FBRUE7SUFDSSxJQUFJLFVBQVUsQ0FBQztJQUNmLEtBQUssU0FBUyxDQUFDO0lBQ2YsS0FBSyxVQUFVLENBQUM7SUFDaEIsS0FBSyxTQUFTLENBQUM7SUFDZixLQUFLLFVBQVUsQ0FBQztJQUNoQixLQUFLLFNBQVMsQ0FBQztJQUNmLEtBQUssU0FBUyxDQUFDO0lBQ2YsS0FBSyxRQUFRLENBQUM7SUFDZCxLQUFLLFNBQVMsQ0FBQztJQUNmLEtBQUssUUFBUSxDQUFDO0lBQ2QsTUFBTSxRQUFRLENBQUM7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsUUFBUTtBQUNaOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTs7Ozs7SUFLSSxrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7O0lBS0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlEQUFrRDtJQUNsRCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseURBQXFEO0lBQ3JELDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5REFBa0Q7SUFDbEQsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlEQUFvRDtJQUNwRCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseURBQW9EO0lBQ3BELDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYzs7SUFFZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLElBQUksNEJBQTRCLENBQUM7SUFDakMsS0FBSyx5QkFBeUIsRUFBRTtJQUNoQyxLQUFLLDRCQUE0QixFQUFFO0lBQ25DLEtBQUsseUJBQXlCLEVBQUU7SUFDaEMsTUFBTSw0QkFBNEIsQ0FBQztBQUN2Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseURBQWtEO0FBQ3REOztBQUVBO0lBQ0kseURBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4OiAwIDEgYXV0bztcXG59XFxuXFxuaDEge1xcbiAgICBwYWRkaW5nOiAwLjRlbSAwLjVlbTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbmgxLmZpcnN0UGFnZSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb24tbmFtZTogZmxvYXRpbmc7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsb2F0aW5nIHtcXG4gICAgMCUge3RvcDogLTIwcHg7fVxcbiAgICAxMCUge3RvcDogMjBweDt9XFxuICAgIDIwJSB7dG9wOiAtMTVweDt9XFxuICAgIDMwJSB7dG9wOiAxNXB4O31cXG4gICAgNDAlIHt0b3A6IC0xMHB4O31cXG4gICAgNTAlIHt0b3A6IDEwcHg7fVxcbiAgICA2MCUge3RvcDogLTVweDt9XFxuICAgIDcwJSB7dG9wOiA1cHg7fVxcbiAgICA4MCUge3RvcDogLTJweDt9XFxuICAgIDkwJSB7dG9wOiAxcHg7fVxcbiAgICAxMDAlIHt0b3A6IDBweDt9XFxufVxcblxcbm1haW4ge1xcbiAgICBmbGV4OiAyIDEgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMC43NXJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5mb3JtID4gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvcm0gPiBpbnB1dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5mb3JtID4gaW5wdXQ6cGxhY2Vob2xkZXItc2hvd24ge1xcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXFxuZm9ybSA+IGlucHV0OnBsYWNlaG9sZGVyLXNob3duOmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZm9ybSA+IGlucHV0OmZvY3VzLFxcbmZvcm0gPiBpbnB1dC5pbnZhbGlkOmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBwdXJwbGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bik6bm90KDpmb2N1cyk6aW52YWxpZCxcXG5mb3JtID4gaW5wdXQuaW52YWxpZDpub3QoOmZvY3VzKSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG59XFxuXFxuaW5wdXQ6dmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlYmJiYjtcXG4gICAgYm9yZGVyLXJhZGl1czogIDAgMCA0cHggNHB4O1xcbn1cXG5cXG4uZXJyb3IuYWN0aXZlIHtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMC40cmVtIDAuNXJlbTtcXG59XFxuXFxuLmdyaWRDb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDM1cHgpO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4udmFsaWRCb3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uaW52YWxpZEJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5zaGlwUGxhY2VkT25Cb3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblxcbi5jYXJyaWVyLFxcbi5iYXR0bGVzaGlwLFxcbi5jcnVpc2VyLFxcbi5kZXN0cm95ZXIsXFxuLnN1Ym1hcmluZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNhcnJpZXI6OmJlZm9yZSxcXG4uYmF0dGxlc2hpcDo6YmVmb3JlLFxcbi5jcnVpc2VyOjpiZWZvcmUsXFxuLmRlc3Ryb3llcjo6YmVmb3JlLFxcbi5zdWJtYXJpbmU6OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHRvcDogLTFweDtcXG4gICAgbGVmdDogLTFweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG9wYWNpdHk6IDAuNTU7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDE3LjVweCAxNy41cHg7XFxufVxcblxcbi5jYXJyaWVyOjpiZWZvcmUge1xcbiAgICB3aWR0aDogMTk1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvY2Fycmllci5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE5NXB4IDM1cHg7XFxufVxcblxcbi5iYXR0bGVzaGlwOjpiZWZvcmUge1xcbiAgICB3aWR0aDogMTU1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvYmF0dGxlc2hpcC5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1NXB4IDM1cHg7XFxufVxcblxcbi5jcnVpc2VyOjpiZWZvcmUge1xcbiAgICB3aWR0aDogMTE1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvY3J1aXNlci5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExNXB4IDM1cHg7XFxufVxcblxcbi5zdWJtYXJpbmU6OmJlZm9yZSB7XFxuICAgIHdpZHRoOiAxMTVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9zdWJtYXJpbmUuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTVweCAzNXB4O1xcbn1cXG5cXG4uZGVzdHJveWVyOjpiZWZvcmUge1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9kZXN0cm95ZXIuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA3NXB4IDM1cHg7XFxufVxcblxcbiNzdGF0dXNCb3gge1xcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC41cmVtO1xcbn1cXG5cXG4jc3RhdHVzQm94ID4gcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNjAwbXMgZWFzZS1pbjtcXG59XFxuXFxuI3N0YXR1c0JveCA+IC5iYWNrd2FyZCB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbiN3YXRlckNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxufVxcblxcbi53YXRlciB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogMC40cmVtO1xcbn1cXG5cXG4jc2hpcEluZGljYXRvckNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnNoaXBTdGF0dXNJbmRpY2F0b3Ige1xcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcXG59XFxuXFxuLmluZGljYXRvckxpZ2h0IHtcXG4gICAgd2lkdGg6IDEuNzVyZW07XFxuICAgIGhlaWdodDogMC43NXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG59XFxuXFxuLnNoaXBBY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uc2hpcEhpdCB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBibGlua2luZztcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5raW5nIHtcXG4gICAgMCUge2JhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47fVxcbiAgICAyNSUge2JhY2tncm91bmQtY29sb3I6ICNlZTQ0NDQ7IH1cXG4gICAgNTAlIHtiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuOyB9XFxuICAgIDc1JSB7YmFja2dyb3VuZC1jb2xvcjogI2VlNDQ0NDsgfVxcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO31cXG59XFxuXFxuLnNoaXBMb3N0IHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlNDQ0NDtcXG59XFxuXFxuLnRhcmdldCB7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9yZWRfZG90LnN2Zyk7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy93aGl0ZV9kb3Quc3ZnKTtcXG59XFxuXFxuLmJhbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4ud2lubmVyIHtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBmbGV4OiAwIDEgYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAwLjRlbSAwLjVlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IGxvYWRGaXJzdFBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9odG1sX2VsZW1lbnRzL2ZpcnN0X3BhZ2VcIjtcblxuY29uc29sZS5sb2coXCJiYXR0bGVzaGlwXCIpO1xuXG5sb2FkRmlyc3RQYWdlKCk7XG4iLCIvKiBlc2xpbnQgaW1wb3J0L25vLWN5Y2xlOiBbMiwgeyBtYXhEZXB0aDogMSB9XSAqL1xuXG5pbXBvcnQgb2RpbkxvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvb2Rpbl9sb2dvLnN2Z1wiO1xuaW1wb3J0IGdpdGh1YkxvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2l0aHViX2xvZ28uc3ZnXCI7XG5cbmltcG9ydCB7IG1ha2VFbGVtZW50LCBtYWtlQnV0dG9uLCBtYWtlSW1nLCBtYWtlSW5wdXQgfSBmcm9tIFwiLi9odG1sX2NyZWF0ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCBsb2FkU2Vjb25kUGFnZSBmcm9tIFwiLi9zZWNvbmRfcGFnZVwiO1xuaW1wb3J0IHsgaW5pdFBsYXllcnMgfSBmcm9tIFwiLi4vb2JqZWN0L2dhbWVfY29udHJvbFwiO1xuXG5jb25zdCBmaXJzdFBhZ2UgPSAoZnVuY3Rpb24gaW5pdEZpcnN0UGFnZSgpIHtcblxuICAgIGZ1bmN0aW9uIGJvZHlSZW1vdmVDb250ZW50KCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGJvZHkucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBtYWtlRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaGVhZGVyXCJ9KTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VIZWFkZXJDb250ZW50KCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAgICAgICBjb25zdCBoMSA9IG1ha2VFbGVtZW50KHtlbGVtZW50VHlwZTogXCJoMVwiLCB0ZXh0Q29udGVudDogXCJCQVRUTEVTSElQXCIsIGNsYXNzTmFtZXM6IFwiZmlyc3RQYWdlXCIsIHRpdGxlOiBcIkJBVFRMRVNISVBcIn0pO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VNYWluKCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGNvbnN0IG1haW4gPSBtYWtlRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibWFpblwifSk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5wdXROYW1lVmFsaWRhdGlvbigpIHtcblxuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgICAgIGNvbnN0IGlucHV0TmFtZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4uZXJyb3JcIik7XG5cbiAgICAgICAgZnVuY3Rpb24gc2hvd0Vycm9yTmFtZSgpIHtcbiAgICAgICAgICAgIGlmKGlucHV0TmFtZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWVFcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gZW50ZXIgeW91ciBuYW1lXCI7XG4gICAgICAgICAgICAgICAgaW5wdXROYW1lRXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvciBhY3RpdmVcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZihpbnB1dE5hbWUudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgICAgICAgICAgICAgaW5wdXROYW1lRXJyb3IudGV4dENvbnRlbnQgPSBcIm5hbWUgc2hvdWxkIHN0YXJ0IHdpdGggY2FwaXRhbCBsZXR0ZXJcIjtcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWVFcnJvci5jbGFzc05hbWUgPSBcImVycm9yIGFjdGl2ZVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGlucHV0TmFtZS52YWxpZGl0eS50b29TaG9ydCkge1xuICAgICAgICAgICAgICAgIGlucHV0TmFtZUVycm9yLnRleHRDb250ZW50ID0gXCJuYW1lIHNob3VsZCBiZSBhdGxlYXN0IDIgY2hhcmFjdGVycyBsb25nXCI7XG4gICAgICAgICAgICAgICAgaW5wdXROYW1lRXJyb3IuY2xhc05hbWUgPSBcImVycm9yIGFjdGl2ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoaW5wdXROYW1lLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgICBpbnB1dE5hbWVFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBpbnB1dE5hbWVFcnJvci5jbGFzc05hbWUgPSBcImVycm9yXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93RXJyb3JOYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaW5wdXROYW1lLmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpKSB7XG4gICAgICAgICAgICBpbnB1dE5hbWUucmVtb3ZlQXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlRm9ybSgpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgICBjb25zdCBmb3JtID0gbWFrZUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZvcm1cIn0pO1xuICAgICAgICBjb25zdCBsYWJlbCA9IG1ha2VFbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCB0ZXh0Q29udGVudDogXCJFbnRlciBuYW1lXCIsIHRpdGxlOiBcImVudGVyIG5hbWUgbGFiZWxcIn0pO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lXCIpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IG1ha2VJbnB1dCh7dHlwZTogXCJ0ZXh0XCIsIGlkOiBcIm5hbWVcIiwgbmFtZTogXCJuYW1lXCIsIHBhdHRlcm46IFwiXltBLVpdW0EtWmEtel0qXCIsIG1pbkxlbmd0aDogMiwgbWF4TGVuZ3RoOiAxNSwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgeW91ciBuYW1lXCIsIHJlcXVpcmVkOiB0cnVlfSk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBpbnB1dE5hbWVWYWxpZGF0aW9uKVxuICAgICAgICBjb25zdCBzcGFuID0gbWFrZUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcInNwYW5cIiwgY2xhc3NOYW1lczogXCJlcnJvclwifSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICAgICAgaWYoIWlucHV0TmFtZS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgaW5wdXROYW1lVmFsaWRhdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IGlucHV0TmFtZS52YWx1ZTtcbiAgICAgICAgICAgIGluaXRQbGF5ZXJzKHBsYXllck5hbWUpO1xuICAgICAgICAgICAgbG9hZFNlY29uZFBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0YXJ0R2FtZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IG1ha2VCdXR0b24oeyB0ZXh0Q29udGVudDogXCJTdGFydCBHYW1lXCIsIGV2ZW50OiBcImNsaWNrXCIsIHRpdGxlOiBcInN0YXJ0IGdhbWUgYnV0dG9uXCIsIGNhbGxCYWNrRnVuY3Rpb246IFtzdGFydEJ1dHRvbkNsaWNrZWRdIH0pO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlRm9vdGVyKCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IG1ha2VFbGVtZW50KHtlbGVtZW50VHlwZTogXCJmb290ZXJcIn0pO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7IFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvb3RlckNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XG4gICAgICAgIGNvbnN0IGRpdiA9IG1ha2VFbGVtZW50KHt0ZXh0Q29udGVudDogXCJDcmVhdGVkIHRvIGNvbXBsZXRlIHRoZSBhc3NpZ25tZW50IEJBVFRMRVNISVAgb2YgVGhlIE9kaW4gUHJvamVjdC5cIn0pO1xuXG4gICAgICAgIGNvbnN0IGxpbmtUb09kaW5Qcm9qZWN0ID0gbWFrZUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImFcIn0pO1xuICAgICAgICBsaW5rVG9PZGluUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tXCIpO1xuICAgICAgICBjb25zdCBvZGluTG9nb0ltZyA9IG1ha2VJbWcoeyBpZDogXCJvZGluXCIsIHNyYzogb2RpbkxvZ28sIHRpdGxlOiBcIlRoZSBPZGluIFByb2plY3QgTG9nbyBhbmQgTGlua1wifSk7XG4gICAgICAgIGxpbmtUb09kaW5Qcm9qZWN0LmFwcGVuZENoaWxkKG9kaW5Mb2dvSW1nKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpbmtUb1NvdXJjZUNvZGUgPSBtYWtlRWxlbWVudCh7IGVsZW1lbnRUeXBlOiBcImFcIn0pO1xuICAgICAgICBsaW5rVG9Tb3VyY2VDb2RlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vNEMtNzUtNjMtNkItNzkvQmF0dGxlc2hpcFwiKTtcbiAgICAgICAgY29uc3QgZ2l0SHViTG9nbyA9IG1ha2VJbWcoeyBpZDogXCJnaXRodWJcIiwgc3JjOiBnaXRodWJMb2dvLCB0aXRsZTogXCJTb3VyY2UgQ29kZSBMaW5rXCJ9KTtcbiAgICAgICAgbGlua1RvU291cmNlQ29kZS5hcHBlbmRDaGlsZChnaXRIdWJMb2dvKTtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlua1RvT2RpblByb2plY3QpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlua1RvU291cmNlQ29kZSk7XG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRGaXJzdFBhZ2UoKSB7XG4gICAgICAgIGJvZHlSZW1vdmVDb250ZW50KCk7XG4gICAgICAgIG1ha2VIZWFkZXIoKTtcbiAgICAgICAgbWFrZUhlYWRlckNvbnRlbnQoKTtcbiAgICAgICAgbWFrZU1haW4oKTtcbiAgICAgICAgbWFrZUZvcm0oKTtcbiAgICAgICAgY3JlYXRlU3RhcnRHYW1lQnV0dG9uKCk7XG4gICAgICAgIG1ha2VGb290ZXIoKTtcbiAgICAgICAgY3JlYXRlRm9vdGVyQ29udGVudCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRGaXJzdFBhZ2UsXG4gICAgfVxuXG59KSgpO1xuXG5jb25zdCB7bG9hZEZpcnN0UGFnZX0gPSBmaXJzdFBhZ2U7XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRGaXJzdFBhZ2U7IiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzIsIHsgbWF4RGVwdGg6IDEgfV0gKi9cblxuaW1wb3J0IHsgbWFrZUJ1dHRvbiwgbWFrZUVsZW1lbnQgfSBmcm9tIFwiLi9odG1sX2NyZWF0ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCBsb2FkRmlyc3RQYWdlIGZyb20gXCIuL2ZpcnN0X3BhZ2VcIjtcblxuY29uc3QgZm91cnRoUGFnZSA9IChmdW5jdGlvbiBpbml0Rm91cnRoUGFnZSgpIHtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZU1haW5Db250ZW50KCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICAgIG1haW4ucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVRoZVdpbm5lcklzKHdpbm5lck5hbWUpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgICBjb25zdCBoMiA9IG1ha2VFbGVtZW50KHtlbGVtZW50VHlwZTogXCJoMlwiLCBjbGFzc05hbWVzOiBcImJhbm5lclwiLCB0ZXh0Q29udGVudDogXCJUaGUgV2lubmVyIElzOiBcIiwgdGl0bGU6IFwiVGhlIFdpbm5lciBJczogXCJ9KTtcbiAgICAgICAgY29uc3QgaDMgPSBtYWtlRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaDJcIiwgY2xhc3NOYW1lczogXCJ3aW5uZXJcIiwgdGV4dENvbnRlbnQ6IHdpbm5lck5hbWUsIHRpdGxlOiBgd2lubmVyIG5hbWUgaXMgJHt3aW5uZXJOYW1lfWB9KTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChoMik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaDMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYXlBZ2FpbkJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICAgIGxvYWRGaXJzdFBhZ2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlU3RhcnRHYW1lQWdhaW5CdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICAgICAgY29uc3Qgc3RhcnRHYW1lQWdhaW5CdXR0b24gPSBtYWtlQnV0dG9uKHt0ZXh0Q29udGVudDogXCJQbGF5IEFnYWluXCIsIHRpdGxlOiBcInBsYXkgYWdhaW4gYnV0dG9uXCIsIGV2ZW50OiBcImNsaWNrXCIsIGNhbGxCYWNrRnVuY3Rpb246IFtwbGF5QWdhaW5CdXR0b25DbGlja2VkXX0pO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHN0YXJ0R2FtZUFnYWluQnV0dG9uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkRm91cnRoUGFnZSh3aW5uZXJOYW1lKSB7XG4gICAgICAgIHJlbW92ZU1haW5Db250ZW50KCk7XG4gICAgICAgIG1ha2VUaGVXaW5uZXJJcyh3aW5uZXJOYW1lKTtcbiAgICAgICAgbWFrZVN0YXJ0R2FtZUFnYWluQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZEZvdXJ0aFBhZ2UsXG4gICAgfVxufSkoKTtcblxuY29uc3Qge2xvYWRGb3VydGhQYWdlfSA9IGZvdXJ0aFBhZ2U7XG5leHBvcnQgZGVmYXVsdCBsb2FkRm91cnRoUGFnZTsiLCJmdW5jdGlvbiBtYWtlRWxlbWVudCh7ZWxlbWVudFR5cGUgPSBcImRpdlwiLCBpZCwgY2xhc3NOYW1lcywgdGV4dENvbnRlbnQsIHRpdGxlLCBkYXRhQXR0cmlidXRlTmFtZSwgZGF0YUF0dHJpYnV0ZVZhbHVlLCBldmVudHMsIGNhbGxCYWNrRnVuY3Rpb25zfSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsZW1lbnRUeXBlfWApO1xuICAgIGlmKGlkKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgIH1cbiAgICBpZihjbGFzc05hbWVzKSB7XG4gICAgICAgIGNsYXNzTmFtZXMuc3BsaXQoXCIgXCIpLmZvckVhY2goZWxlQ2xhc3MgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZUNsYXNzKSk7XG4gICAgfVxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudCB8fCBcIlwiO1xuICAgIGlmKHRpdGxlKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgdGl0bGUpO1xuICAgIH1cbiAgICBpZihkYXRhQXR0cmlidXRlTmFtZSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgZGF0YS0ke2RhdGFBdHRyaWJ1dGVOYW1lfWAsIFwiXCIpO1xuICAgIH1cbiAgICBpZihkYXRhQXR0cmlidXRlVmFsdWUgJiYgZGF0YUF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtJHtkYXRhQXR0cmlidXRlTmFtZX1gLCBkYXRhQXR0cmlidXRlVmFsdWUpO1xuICAgIH1cbiAgICBpZihBcnJheS5pc0FycmF5KGV2ZW50cykgJiYgQXJyYXkuaXNBcnJheShjYWxsQmFja0Z1bmN0aW9ucykgJiYgZXZlbnRzLmxlbmd0aCA9PT0gY2FsbEJhY2tGdW5jdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCwgaSkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsQmFja0Z1bmN0aW9uc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gbWFrZUJ1dHRvbih7aWQsIGNsYXNzTmFtZXMsIHRleHRDb250ZW50LCB0aXRsZSwgZGF0YUF0dHJpYnV0ZU5hbWUsIGRhdGFBdHRyaWJ1dGVWYWx1ZSwgZXZlbnQsIGNhbGxCYWNrRnVuY3Rpb259KSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBpZihpZCkge1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgIH1cbiAgICBpZihjbGFzc05hbWVzKSB7XG4gICAgICAgIGNsYXNzTmFtZXMuc3BsaXQoXCIgXCIpLmZvckVhY2goZWxlQ2xhc3MgPT4gYnV0dG9uLmNsYXNzTGlzdC5hZGQoZWxlQ2xhc3MpKTtcbiAgICB9XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYCR7dGV4dENvbnRlbnR9YCB8fCBcIlwiO1xuICAgIGlmKHRpdGxlKSB7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCB0aXRsZSk7XG4gICAgfVxuICAgIGlmKGRhdGFBdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoYGRhdGEtJHtkYXRhQXR0cmlidXRlTmFtZX1gLCBcIlwiKTtcbiAgICB9XG4gICAgaWYoZGF0YUF0dHJpYnV0ZVZhbHVlICYmIGRhdGFBdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoYGRhdGEtJHtkYXRhQXR0cmlidXRlTmFtZX1gLCBkYXRhQXR0cmlidXRlVmFsdWUpO1xuICAgIH1cbiAgICBpZihjYWxsQmFja0Z1bmN0aW9uICYmIGV2ZW50KSB7XG4gICAgICAgIGNhbGxCYWNrRnVuY3Rpb24uZm9yRWFjaChlbGVGdW5jdGlvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZWxlRnVuY3Rpb24pKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gbWFrZUltZyh7aWQsIHNyYywgdGl0bGV9KSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaWYoaWQpIHtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICB9XG4gICAgaWYoc3JjKSB7XG4gICAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgfVxuICAgIGlmKHRpdGxlKSB7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCB0aXRsZSk7XG4gICAgfVxuICAgIHJldHVybiBpbWc7XG59XG5cbmZ1bmN0aW9uIG1ha2VHcmlkKGNhbGxCYWNrRnVuY3Rpb25zKSB7XG4gICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IG1ha2VFbGVtZW50KHtjbGFzc05hbWVzOiBcImdyaWRDb250YWluZXJcIiB9KTtcblxuICAgIC8vIGdyaWRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIC8vIGdyaWRDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IFwicmVwZWF0KDEwLCAzMHB4KVwiO1xuICAgIC8vIGdyaWRDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwicmVwZWF0KDEwLCAzMHB4KVwiO1xuICAgIC8vIGdyaWRDb250YWluZXIuc3R5bGUuZ2FwID0gXCI1cHhcIjtcblxuICAgIGZvcihsZXQgaT0wOyBpPDEwOyBpICs9IDEpIHtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8MTA7IGogKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gbWFrZUVsZW1lbnQoe2NsYXNzTmFtZXM6IFwiYm94XCIsIHRpdGxlOiBcImVtcHR5Qm94XCIsIGRhdGFBdHRyaWJ1dGVOYW1lOiBcImNvb3JkaW5hdGVzXCIsIGRhdGFBdHRyaWJ1dGVWYWx1ZTogYCR7aX0ke2p9YCwgZXZlbnRzOiBbXCJtb3VzZW92ZXJcIiwgXCJtb3VzZW91dFwiLCBcImNsaWNrXCJdLCBjYWxsQmFja0Z1bmN0aW9uc30pO1xuICAgICAgICAgICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyaWRDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIG1ha2VJbnB1dCh7dHlwZSwgaWQsIG5hbWUsIHBhdHRlcm4sIG1pbkxlbmd0aCwgbWF4TGVuZ3RoLCBwbGFjZWhvbGRlciwgcmVxdWlyZWR9KSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaWYodHlwZSkge1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xuICAgIH1cbiAgICBpZihpZCkge1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgfVxuICAgIGlmKG5hbWUpIHtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcbiAgICB9XG4gICAgaWYocGF0dGVybikge1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwYXR0ZXJuXCIsIHBhdHRlcm4pO1xuICAgIH1cbiAgICBpZihtaW5MZW5ndGgpIHtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibWlubGVuZ3RoXCIsIGAke051bWJlcihtaW5MZW5ndGgpfWApO1xuICAgIH1cbiAgICBpZihtYXhMZW5ndGgpIHtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIGAke051bWJlcihtYXhMZW5ndGgpfWApO1xuICAgIH1cbiAgICBpZihwbGFjZWhvbGRlcikge1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBwbGFjZWhvbGRlcik7XG4gICAgfVxuICAgIGlmKHJlcXVpcmVkKSB7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIH1cbiAgICByZXR1cm4gaW5wdXRcbn1cblxuZXhwb3J0IHsgbWFrZUVsZW1lbnQsIG1ha2VCdXR0b24sIG1ha2VJbWcsIG1ha2VHcmlkLCBtYWtlSW5wdXQgfSIsIi8qIGVzbGludCBpbXBvcnQvbm8tY3ljbGU6IFsyLCB7IG1heERlcHRoOiAxIH1dICovXG5cbmltcG9ydCB7IHBsYWNlVXNlclNoaXBzLCBwbGFjZUNvbXB1dGVyU2hpcHMgfSBmcm9tIFwiLi4vb2JqZWN0L2dhbWVfY29udHJvbFwiO1xuaW1wb3J0IHsgbWFrZUJ1dHRvbiwgbWFrZUVsZW1lbnQsIG1ha2VHcmlkfSBmcm9tIFwiLi9odG1sX2NyZWF0ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCBsb2FkVGhpcmRQYWdlICBmcm9tIFwiLi90aGlyZF9wYWdlXCI7XG5cbmNvbnN0IHNlY29uZFBhZ2UgPSAoZnVuY3Rpb24gaW5pdFNlY29uZFBhZ2UoKSB7XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IChmdW5jdGlvbiBpbml0U2hpcCgpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgICAgICAgbGV0IG5hbWU7IGxldCBsZW47XG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNoaXAoKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gc2hpcHMucG9wKCk7XG4gICAgICAgICAgICBpZighc2hpcCkgcmV0dXJuIHRydWU7IC8vIHRvIHNob3cgdGhhdCBhbGwgdGhlIHNoaXBzIGFyZSBwbGFjZWQgYW5kIG5vdyB3ZSBjYW4gc3RhcnQgdGhlIGdhbWVcbiAgICAgICAgICAgIG5hbWUgPSBzaGlwLm5hbWU7XG4gICAgICAgICAgICBsZW4gPSBzaGlwLmxlbjtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpbml0U2hpcHNBcnJheSgpIHtcbiAgICAgICAgICAgIGlmKHNoaXBzLmxlbmd0aCA9PT0gMCkgc2hpcHMucHVzaChcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJkZXN0cm95ZXJcIiwgbGVuOiAyfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJjcnVpc2VyXCIsIGxlbjogM30sXG4gICAgICAgICAgICAgICAge25hbWU6IFwic3VibWFyaW5lXCIsIGxlbjogM30sXG4gICAgICAgICAgICAgICAge25hbWU6IFwiYmF0dGxlc2hpcFwiLCBsZW46IDR9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiBcImNhcnJpZXJcIiwgbGVuOiA1fVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXROYW1lKCkgeyByZXR1cm4gbmFtZTsgfVxuICAgICAgICBmdW5jdGlvbiBnZUxlbmd0aCgpIHsgcmV0dXJuIGxlbjsgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5pdFNoaXBzQXJyYXksXG4gICAgICAgICAgICB1cGRhdGVTaGlwLFxuICAgICAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgICAgIGdlTGVuZ3RoLFxuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzRnJvbUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDEuZmlyc3RQYWdlXCIpO1xuICAgICAgICBoMS5jbGFzc0xpc3QucmVtb3ZlKFwiZmlyc3RQYWdlXCIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsQ29udGVudE1haW4oKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICAgICAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlU2hpcFRvQmVQbGFjZWRIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBgQ2hpZWYsIFBsYWNlIFlvdXIgJHsgIGN1cnJlbnRTaGlwLmdldE5hbWUoKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSAgfSR7IGN1cnJlbnRTaGlwLmdldE5hbWUoKS5zdWJzdHIoMSkgfWA7XG4gICAgICAgIGNvbnN0IGgyID0gbWFrZUVsZW1lbnQoeyBlbGVtZW50VHlwZTogXCJoMlwiLCB0aXRsZTogdGV4dENvbnRlbnQsIHRleHRDb250ZW50fSk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNoaXBUb0JlUGxhY2VIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpO1xuICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IGBDaGllZiwgUGxhY2UgWW91ciAkeyAgY3VycmVudFNoaXAuZ2V0TmFtZSgpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICB9JHsgY3VycmVudFNoaXAuZ2V0TmFtZSgpLnN1YnN0cigxKSB9YDtcbiAgICAgICAgaDIuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgdGV4dENvbnRlbnQpO1xuICAgICAgICBoMi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF4aXNCdXR0b25DbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgY3VycmVudEF4aXMgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW50QXhpc1wiKTtcbiAgICAgICAgaWYoY3VycmVudEF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlBsYWNlIFZlc3NlbCBpbiBYIEF4aXNcIjtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIlBsYWNlIFZlc3NlbCBpbiBYIEF4aXNcIik7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW50QXhpc1wiLCBcInlcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEF4aXMgPT09IFwieVwiKXtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxhY2UgVmVzc2VsIGluIFkgQXhpc1wiO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiUGxhY2UgVmVzc2VsIGluIFkgQXhpc1wiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWN1cnJlbnRBeGlzXCIsIFwieFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VBeGlzQ2hvaWNlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICAgIGNvbnN0IGF4aXNCdXR0b24gPSBtYWtlQnV0dG9uKHsgdGV4dENvbnRlbnQ6IFwiUGxhY2UgVmVzc2VsIGluIFkgQXhpc1wiLCB0aXRsZTogXCJQbGFjZSBWZXNzZWwgaW4gWSBBeGlzXCIsIGRhdGFBdHRyaWJ1dGVOYW1lOiBcImN1cnJlbnRBeGlzXCIsIGRhdGFBdHRyaWJ1dGVWYWx1ZTogXCJ4XCIsIGV2ZW50OiBcImNsaWNrXCIsIGNhbGxCYWNrRnVuY3Rpb246IFtheGlzQnV0dG9uQ2xpY2tlZF0gfSk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYXhpc0J1dHRvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoY3VycmVudEJveENvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb29yZGluYXRlID0gWyBOdW1iZXIoY3VycmVudEJveENvb3JkaW5hdGVzLmNoYXJBdCgwKSksIE51bWJlcihjdXJyZW50Qm94Q29vcmRpbmF0ZXMuY2hhckF0KDEpKSBdXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gWyBjdXJyZW50Q29vcmRpbmF0ZSBdO1xuICAgICAgICBjb25zdCBjdXJyZW50QXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGF0YS1jdXJyZW50QXhpc11cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW50QXhpc1wiKTtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IGN1cnJlbnRTaGlwLmdlTGVuZ3RoKCk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYoY3VycmVudEF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaCggWyBjdXJyZW50Q29vcmRpbmF0ZVswXSwgY3VycmVudENvb3JkaW5hdGVbMV0gKyBpIF0gKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihjdXJyZW50QXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKCBbIGN1cnJlbnRDb29yZGluYXRlWzBdICsgaSwgY3VycmVudENvb3JkaW5hdGVbMV0gXSApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VCb3hlc0NsYXNzKGNsYXNzTmFtZSwgY3VycmVudEJveENvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXMoY3VycmVudEJveENvb3JkaW5hdGVzKTtcbiAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaChjb29yZHMgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YUNvb3JkaW5hdGVzID0gYCR7Y29vcmRzWzBdfSR7Y29vcmRzWzFdfWA7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb29yZGluYXRlcyA9IFwiJHtkYXRhQ29vcmRpbmF0ZXN9XCJdYCk7XG4gICAgICAgICAgICBib3guY2xhc3NOYW1lID0gYGJveCAke2NsYXNzTmFtZX1gO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0N1cnJlbnRCb3hWYWxpZEZvclNoaXAodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldERhdGFDb29yZGluYXRlcyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkaW5hdGVzXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50QXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGF0YS1jdXJyZW50QXhpc11cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW50QXhpc1wiKTtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IGN1cnJlbnRTaGlwLmdlTGVuZ3RoKCk7XG4gICAgICAgIGNvbnN0IGlzRW5vdWdoTnVtYmVyT2ZCb3hlcyA9IChjdXJyZW50QXhpcyA9PT0gXCJ4XCIgJiYgMTAgLSBOdW1iZXIodGFyZ2V0RGF0YUNvb3JkaW5hdGVzLmNoYXJBdCgxKSkgPj0gc2hpcExlbmd0aCkgfHwgKGN1cnJlbnRBeGlzID09PSBcInlcIiAmJiAxMCAtIE51bWJlcih0YXJnZXREYXRhQ29vcmRpbmF0ZXMuY2hhckF0KDApKSA+PSBzaGlwTGVuZ3RoKSA7XG4gICAgICAgIGlmKCFpc0Vub3VnaE51bWJlck9mQm94ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzKHRhcmdldERhdGFDb29yZGluYXRlcyk7ICAgICAgIFxuICAgICAgICBjb25zdCBib3hlc0hhdmVTaGlwUGxhY2VkID0gY29vcmRpbmF0ZXMuZXZlcnkoIGNvb3JkcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhQ29vcmRpbmF0ZXMgPSBgJHtjb29yZHNbMF19JHtjb29yZHNbMV19YDtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvb3JkaW5hdGVzID0gXCIke2RhdGFDb29yZGluYXRlc31cIl1gKTtcbiAgICAgICAgICAgIGlmKGJveC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNoaXBcIikgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBib3hlc0hhdmVTaGlwUGxhY2VkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEN1cnJlbnRTaGlwSW1hZ2UoY2xpY2tlZEJveCkge1xuICAgICAgICBjb25zdCBjdXJyZW50Qm94ID0gY2xpY2tlZEJveDtcbiAgICAgICAgY29uc3QgY3VycmVudEF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW2RhdGEtY3VycmVudEF4aXNdXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtY3VycmVudEF4aXNcIik7XG4gICAgICAgIGNsaWNrZWRCb3guY2xhc3NMaXN0LmFkZChgJHtjdXJyZW50U2hpcC5nZXROYW1lKCl9YCk7XG4gICAgICAgIGlmKGN1cnJlbnRBeGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgY3VycmVudEJveC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVooOTBkZWcpXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3VzZU92ZXJCb3goZXZlbnQpIHtcbiAgICAgICAgY29uc3QgYm94ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBjdXJyZW50Qm94Q29vcmRpbmF0ZXMgPSBib3guZ2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZGluYXRlc1wiKTtcbiAgICAgICAgaWYoaXNDdXJyZW50Qm94VmFsaWRGb3JTaGlwKGJveCkpIHtcbiAgICAgICAgICAgIGNoYW5nZUJveGVzQ2xhc3MoXCJ2YWxpZEJveFwiLCBjdXJyZW50Qm94Q29vcmRpbmF0ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkQm94XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW91c2VPdXRCb3goZXZlbnQpIHtcbiAgICAgICAgY29uc3QgYm94ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBjdXJyZW50Qm94Q29vcmRpbmF0ZXMgPSBib3guZ2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZGluYXRlc1wiKTtcbiAgICAgICAgaWYoaXNDdXJyZW50Qm94VmFsaWRGb3JTaGlwKGJveCkpIHtcbiAgICAgICAgICAgIGNoYW5nZUJveGVzQ2xhc3MoXCJcIiwgY3VycmVudEJveENvb3JkaW5hdGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZEJveFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJveENsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY2xpY2tlZEJveCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgY3VycmVudEJveENvb3JkaW5hdGVzID0gY2xpY2tlZEJveC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkaW5hdGVzXCIpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJGb3JtQm94ZXMoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goIGNvb3JkcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUNvb3JkaW5hdGVzID0gYCR7Y29vcmRzWzBdfSR7Y29vcmRzWzFdfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29vcmRpbmF0ZXMgPSBcIiR7ZGF0YUNvb3JkaW5hdGVzfVwiXWApO1xuICAgICAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNoaXBcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgYm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbW91c2VPdmVyQm94KTtcbiAgICAgICAgICAgICAgICBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG1vdXNlT3V0Qm94KTtcbiAgICAgICAgICAgICAgICBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJveENsaWNrZWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjaGFuZ2VUaXRsZUJveGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKCBjb29yZHMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFDb29yZGluYXRlcyA9IGAke2Nvb3Jkc1swXX0ke2Nvb3Jkc1sxXX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvb3JkaW5hdGVzID0gXCIke2RhdGFDb29yZGluYXRlc31cIl1gKTtcbiAgICAgICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgY3VycmVudFNoaXAuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNDdXJyZW50Qm94VmFsaWRGb3JTaGlwKGNsaWNrZWRCb3gpKSB7XG4gICAgICAgICAgICBjaGFuZ2VCb3hlc0NsYXNzKFwic2hpcFBsYWNlZE9uQm94XCIsIGN1cnJlbnRCb3hDb29yZGluYXRlcyk7XG4gICAgICAgICAgICBhZGRDdXJyZW50U2hpcEltYWdlKGNsaWNrZWRCb3gpO1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRDb29yZGluYXRlcyhjdXJyZW50Qm94Q29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lckZvcm1Cb3hlcyhjb29yZGluYXRlcyk7XG4gICAgICAgICAgICBjaGFuZ2VUaXRsZUJveGVzKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIHBsYWNlVXNlclNoaXBzKGN1cnJlbnRTaGlwLmdldE5hbWUoKSwgY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTaGlwLnVwZGF0ZVNoaXAoKSkge1xuICAgICAgICAgICAgICAgIGxvYWRUaGlyZFBhZ2UoKTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICB1cGRhdGVTaGlwVG9CZVBsYWNlSGVhZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlR3JpZENvbnRhaW5lcigpIHsgIC8vIG1ha2luZyBnaXJkIHRvIHBsYWNlIHRoZSBzaGlwc1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBtYWtlR3JpZChbbW91c2VPdmVyQm94LCBtb3VzZU91dEJveCwgYm94Q2xpY2tlZF0pO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRTZWNvbmRQYWdlKCkge1xuICAgICAgICByZW1vdmVDbGFzc0Zyb21IZWFkZXIoKTtcbiAgICAgICAgcmVtb3ZlQWxsQ29udGVudE1haW4oKTtcbiAgICAgICAgY3VycmVudFNoaXAuaW5pdFNoaXBzQXJyYXkoKTtcbiAgICAgICAgY3VycmVudFNoaXAudXBkYXRlU2hpcCgpO1xuICAgICAgICBtYWtlU2hpcFRvQmVQbGFjZWRIZWFkZXIoKTtcbiAgICAgICAgbWFrZUF4aXNDaG9pY2VCdXR0b24oKTtcbiAgICAgICAgbWFrZUdyaWRDb250YWluZXIoKTtcbiAgICAgICAgbWFrZUdyaWQoKTtcbiAgICAgICAgcGxhY2VDb21wdXRlclNoaXBzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZFNlY29uZFBhZ2UsXG4gICAgfVxuXG59KSgpO1xuXG5jb25zdCB7bG9hZFNlY29uZFBhZ2V9ID0gc2Vjb25kUGFnZTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZFNlY29uZFBhZ2U7IiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzIsIHsgbWF4RGVwdGg6IDEgfV0gKi9cblxuaW1wb3J0IHsgbWFrZUVsZW1lbnQsIG1ha2VHcmlkIH0gZnJvbSBcIi4vaHRtbF9jcmVhdGVfZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBwbGF5ZXJDb21wdXRlck1ha2VzTW92ZSwgcGxheWVyVXNlck1ha2VzTW92ZSB9IGZyb20gXCIuLi9vYmplY3QvZ2FtZV9jb250cm9sXCI7XG5pbXBvcnQgbG9hZEZvdXJ0aFBhZ2UgZnJvbSBcIi4vZm91cnRoX3BhZ2VcIjtcblxuY29uc3QgdGhpcmRQYWdlID0gKGZ1bmN0aW9uIGluaXRUaGlyZFBhZ2UoKSB7XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxDb250ZW50TWFpbigpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgICBtYWluLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VTdGF0dXNCb3goKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICAgICAgY29uc3Qgc3RhdHVzQm94ID0gbWFrZUVsZW1lbnQoe2lkOlwic3RhdHVzQm94XCJ9KTtcbiAgICAgICAgY29uc3QgcCA9IG1ha2VFbGVtZW50KHtlbGVtZW50VHlwZTogXCJwXCIsIHRleHRDb250ZW50OiBcIkF3YWl0aW5nIHlvdXIgb3JkZXIgQ2hpZWYhXCIsIHRpdGxlOiBcIkF3YWl0aW5nIHlvdXIgb3JkZXIgQ2hpZWYhXCJ9KTtcbiAgICAgICAgY29uc3QgcGJhY2t3YXJkID0gbWFrZUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcInBcIiwgY2xhc3NOYW1lczogXCJiYWNrd2FyZFwifSk7XG4gICAgICAgIHN0YXR1c0JveC5hcHBlbmRDaGlsZChwYmFja3dhcmQpO1xuICAgICAgICBzdGF0dXNCb3guYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc3RhdHVzQm94KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlU2hpcEluZGljYXRvckNvbmF0aW5lcigpIHtcbiAgICAgICAgY29uc3Qgc2hpcEluZGljYXRvckNvbmF0aW5lciA9IG1ha2VFbGVtZW50KHtpZDogXCJzaGlwSW5kaWNhdG9yQ29udGFpbmVyXCJ9KTtcblxuICAgICAgICBjb25zdCBzaGlwcyA9IFtcImNhcnJpZXJcIiwgXCJiYXR0bGVzaGlwXCIsIFwiY3J1aXNlclwiLCBcInN1Ym1hcmluZVwiLCBcImRlc3Ryb3llclwiXTtcblxuICAgICAgICBzaGlwcy5mb3JFYWNoKCBzaGlwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBJbmRpY2F0b3IgID0gbWFrZUVsZW1lbnQoe2NsYXNzTmFtZXM6IFwic2hpcFN0YXR1c0luZGljYXRvclwiLCB0aXRsZTogYCR7c2hpcH0gaXMgYWN0aXZlYCwgZGF0YUF0dHJpYnV0ZU5hbWU6IFwic2hpcE5hbWVcIiwgZGF0YUF0dHJpYnV0ZVZhbHVlOiBzaGlwfSk7XG4gICAgICAgICAgICBjb25zdCBzaGlwTmFtZSA9IG1ha2VFbGVtZW50KHtlbGVtZW50VHlwZTogXCJoNFwiLCB0ZXh0Q29udGVudDogc2hpcH0pXG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3JMaWdodCA9IG1ha2VFbGVtZW50KHtjbGFzc05hbWVzOiBcImluZGljYXRvckxpZ2h0IHNoaXBBY3RpdmVcIn0pO1xuICAgICAgICAgICAgc2hpcEluZGljYXRvci5hcHBlbmRDaGlsZChzaGlwTmFtZSk7XG4gICAgICAgICAgICBzaGlwSW5kaWNhdG9yLmFwcGVuZENoaWxkKGluZGljYXRvckxpZ2h0KTtcbiAgICAgICAgICAgIHNoaXBJbmRpY2F0b3JDb25hdGluZXIuYXBwZW5kQ2hpbGQoc2hpcEluZGljYXRvcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2hpcEluZGljYXRvckNvbmF0aW5lcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlV2F0ZXJDb250YWluZXJzKCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICAgIGNvbnN0IHdhdGVyQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoe2lkOiBcIndhdGVyQ29udGFpbmVyXCJ9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZyaWVuZGx5V2F0ZXIgPSBtYWtlRWxlbWVudCh7aWQ6IFwiZnJpZW5kbHlXYXRlclwiLCBjbGFzc05hbWVzOiBcIndhdGVyXCJ9KTtcbiAgICAgICAgY29uc3QgZW5lbXlXYXRlciA9IG1ha2VFbGVtZW50KHtpZDogXCJlbmVteVdhdGVyXCIsIGNsYXNzTmFtZXM6IFwid2F0ZXJcIn0pO1xuXG4gICAgICAgIHdhdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyaWVuZGx5V2F0ZXIpO1xuICAgICAgICB3YXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChlbmVteVdhdGVyKTtcblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHdhdGVyQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlRnJpZW5kbHlXYXRlcihmcmllbmRseVdhdGVyR2lyZCkge1xuICAgICAgICBjb25zdCBmcmllbmRseVdhdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmRseVdhdGVyXCIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IG1ha2VFbGVtZW50KHtlbGVtZW50VHlwZTogXCJoMlwiLCB0ZXh0Q29udGVudDogXCJGcmllbmRseSBXYXRlcnNcIiwgdGl0bGU6IFwiRnJpZW5kbHkgV2F0ZXJzXCJ9KTtcbiAgICAgICAgZnJpZW5kbHlXYXRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGNvbnN0IGZyaWVuZGx5V2F0ZXJTaGlwSW5kaWNhdG9yQ29udGFpbmVyID0gbWFrZVNoaXBJbmRpY2F0b3JDb25hdGluZXIoKTtcbiAgICAgICAgZnJpZW5kbHlXYXRlci5hcHBlbmRDaGlsZChmcmllbmRseVdhdGVyU2hpcEluZGljYXRvckNvbnRhaW5lcik7XG4gICAgICAgIGZyaWVuZGx5V2F0ZXIuYXBwZW5kQ2hpbGQoZnJpZW5kbHlXYXRlckdpcmQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdXNlT3ZlcihldmVudCkge1xuICAgICAgICBjb25zdCBib3ggPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwidGFyZ2V0XCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdXNlT3V0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGJveCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXJnZXRcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRnJpZW5kbHlXYXRlcih7Y29vcmQsIGlzUGxheWVySGl0fSkge1xuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZnJpZW5kbHlXYXRlcj4uZ3JpZENvbnRhaW5lcj5kaXZbZGF0YS1jb29yZGluYXRlcyA9IFwiJHtjb29yZFswXX0ke2Nvb3JkWzFdfVwiXWApO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChpc1BsYXllckhpdCA/IFwiaGl0XCIgOiBcIm1pc3NcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRW5lbXlXYXRlcih7Y29vcmQsIGlzUGxheWVySGl0fSkge1xuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZW5lbXlXYXRlcj4uZ3JpZENvbnRhaW5lcj5kaXZbZGF0YS1jb29yZGluYXRlcyA9IFwiJHtjb29yZFswXX0ke2Nvb3JkWzFdfVwiXWApO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChpc1BsYXllckhpdCA/IFwiaGl0XCIgOiBcIm1pc3NcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tXaW5uZXIoe2lzV2lubmVyLCBuYW1lfSkge1xuICAgICAgICBpZihpc1dpbm5lcikge1xuICAgICAgICAgICAgbG9hZEZvdXJ0aFBhZ2UobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZUJveCh7bmFtZSwgaXNQbGF5ZXJIaXQsIGlzTmV3U2hpcFN1bmt9KSB7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0TWVzc2FnZSgpIHtcbiAgICAgICAgICAgIGlmKGlzTmV3U2hpcFN1bmspIHtcbiAgICAgICAgICAgICAgICBpZihuYW1lID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gYEVuZW15IGZpcmVkIGEgc2hvdCBhbmQgc3VuayB5b3VyICR7aXNOZXdTaGlwU3Vuay5uYW1lfS5gO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBZb3UgZmlyZWQgYSBzaG90IGFuZCBzdW5rIGVuZW15J3MgJHtpc05ld1NoaXBTdW5rLm5hbWV9LmA7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWYoaXNQbGF5ZXJIaXQpe1xuICAgICAgICAgICAgICAgIGlmKG5hbWUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmVteSBmaXJlZCBhIHNob3QgYW5kIGl0IGhpdCB5b3VyIHNoaXBcIjtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIHJldHVybiBcIllvdSBmaXJlZCBhIHNob3QgYW5kIGl0IGhpdCBlbmVteSBzaGlwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihuYW1lID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmVteSBmaXJlZCBhIHNob3QgYW5kIG1pc3NlZFwiO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHJldHVybiBcIllvdSBmaXJlZCBhIHNob3QgYW5kIG1pc3NlZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzQm94XCIpO1xuICAgICAgICBjb25zdCBwYmFja3dhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwicC5iYWNrd2FyZFwiKTtcbiAgICAgICAgbWVzc2FnZUJveC5yZW1vdmVDaGlsZChwYmFja3dhcmQpO1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGF0dXNCb3ggPiBwXCIpO1xuICAgICAgICBwLmNsYXNzTGlzdC5hZGQoXCJiYWNrd2FyZFwiKTtcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBnZXRNZXNzYWdlKCk7XG4gICAgICAgIGNvbnN0IG5ld1AgPSBtYWtlRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwicFwiLCB0ZXh0Q29udGVudCwgdGl0bGU6IHRleHRDb250ZW50fSk7XG4gICAgICAgIG1lc3NhZ2VCb3guYXBwZW5kQ2hpbGQobmV3UCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlSW5kaWNhdG9yTGlnaHRPZlNoaXBTdW5rKGhpdERldGFpbHMpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIGlzTmV3U2hpcFN1bmt9ID0gaGl0RGV0YWlscztcbiAgICAgICAgaWYoIWlzTmV3U2hpcFN1bmspIHJldHVybjtcbiAgICAgICAgY29uc3Qgd2F0ZXIgPSBuYW1lID09PSBcImNvbXB1dGVyXCIgPyBcImZyaWVuZGx5V2F0ZXJcIiA6IFwiZW5lbXlXYXRlclwiO1xuICAgICAgICBjb25zdCBpbmRpY2F0b3JMaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3dhdGVyfT4jc2hpcEluZGljYXRvckNvbnRhaW5lcj5kaXZbZGF0YS1zaGlwbmFtZT0ke2lzTmV3U2hpcFN1bmsubmFtZX1dPmRpdmApO1xuICAgICAgICBpbmRpY2F0b3JMaWdodC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcEhpdFwiKTtcbiAgICAgICAgaW5kaWNhdG9yTGlnaHQuY2xhc3NMaXN0LmFkZChcInNoaXBMb3N0XCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUluZGljYXRvckJsaW5raW5nTGlnaHQoaGl0RGV0YWlscykge1xuICAgICAgICBjb25zdCB7c2hpcHNUaGF0QXJlSGl0fSA9IGhpdERldGFpbHM7XG4gICAgICAgIGlmKHNoaXBzVGhhdEFyZUhpdC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgc2hpcHNUaGF0QXJlSGl0LmZvckVhY2goIHNoaXBOYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGljYXRvckxpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ZyaWVuZGx5V2F0ZXI+I3NoaXBJbmRpY2F0b3JDb250YWluZXI+ZGl2W2RhdGEtc2hpcG5hbWU9JHtzaGlwTmFtZX1dPmRpdmApO1xuICAgICAgICAgICAgaW5kaWNhdG9yTGlnaHQuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBBY3RpdmVcIik7XG4gICAgICAgICAgICBpbmRpY2F0b3JMaWdodC5jbGFzc0xpc3QuYWRkKFwic2hpcEhpdFwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIG1haW5HYW1lQ29udHJvbChhdHRhY2tlZENvb3JkaW5hdGVzKSB7ICAvLyBjYWxsZWQgd2hlbiB1c2VyIG1ha2VhIGEgbW92ZSB3aXRoIHRoZSBjb29yZHNcbiAgICAgICAgbGV0IGhpdERldGFpbHMgPSBwbGF5ZXJVc2VyTWFrZXNNb3ZlKGF0dGFja2VkQ29vcmRpbmF0ZXMpO1xuICAgICAgICB1cGRhdGVFbmVteVdhdGVyKGhpdERldGFpbHMpO1xuICAgICAgICB1cGRhdGVNZXNzYWdlQm94KGhpdERldGFpbHMpO1xuICAgICAgICB1cGRhdGVJbmRpY2F0b3JMaWdodE9mU2hpcFN1bmsoaGl0RGV0YWlscyk7XG4gICAgICAgIGlmKGNoZWNrV2lubmVyKGhpdERldGFpbHMpKSByZXR1cm47XG4gICAgICAgIGhpdERldGFpbHMgPSBwbGF5ZXJDb21wdXRlck1ha2VzTW92ZSgpO1xuICAgICAgICB1cGRhdGVGcmllbmRseVdhdGVyKGhpdERldGFpbHMpO1xuICAgICAgICB1cGRhdGVNZXNzYWdlQm94KGhpdERldGFpbHMpO1xuICAgICAgICB1cGRhdGVJbmRpY2F0b3JCbGlua2luZ0xpZ2h0KGhpdERldGFpbHMpO1xuICAgICAgICB1cGRhdGVJbmRpY2F0b3JMaWdodE9mU2hpcFN1bmsoaGl0RGV0YWlscyk7XG4gICAgICAgIGNoZWNrV2lubmVyKGhpdERldGFpbHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJveENsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgYm94ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBjb29yZCA9IGJveC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkaW5hdGVzXCIpO1xuICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XG4gICAgICAgIGJveC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG1vdXNlT3Zlcik7XG4gICAgICAgIGJveC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbW91c2VPdXQpO1xuICAgICAgICBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJveENsaWNrZWQpO1xuICAgICAgICBtYWluR2FtZUNvbnRyb2woW051bWJlcihjb29yZC5jaGFyQXQoMCkpLCBOdW1iZXIoY29vcmQuY2hhckF0KDEpKV0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUVuZW15V2F0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGVuZW15V2F0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZW15V2F0ZXJcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gbWFrZUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgyXCIsIHRleHRDb250ZW50OiBcIkVuZW15IFdhdGVyc1wiLCB0aXRsZTogXCJFbmVteSBXYXRlcnNcIn0pO1xuICAgICAgICBlbmVteVdhdGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgY29uc3QgZW5lbXlXYXRlclNoaXBJbmRpY2F0b3JDb250YWluZXIgPSBtYWtlU2hpcEluZGljYXRvckNvbmF0aW5lcigpO1xuICAgICAgICBlbmVteVdhdGVyLmFwcGVuZENoaWxkKGVuZW15V2F0ZXJTaGlwSW5kaWNhdG9yQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBncmlkID0gbWFrZUdyaWQoW21vdXNlT3ZlciwgbW91c2VPdXQsIGJveENsaWNrZWRdKTtcbiAgICAgICAgZW5lbXlXYXRlci5hcHBlbmRDaGlsZChncmlkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyRnJvbUdpcmQoZ3JpZCkge1xuICAgICAgICBjb25zdCBib3hlcyA9IEFycmF5LmZyb20oZ3JpZC5jaGlsZHJlbik7XG4gICAgICAgIGJveGVzLmZvckVhY2goYm94ID0+IHtcbiAgICAgICAgICAgIGJveC5yZXBsYWNlV2l0aChib3guY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRoaXJkUGFnZSgpIHtcbiAgICAgICAgY29uc3QgZnJpZW5kbHlXYXRlckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmdyaWRDb250YWluZXJcIik7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJGcm9tR2lyZChmcmllbmRseVdhdGVyR3JpZCk7XG4gICAgICAgIHJlbW92ZUFsbENvbnRlbnRNYWluKCk7XG4gICAgICAgIG1ha2VTdGF0dXNCb3goKTtcbiAgICAgICAgbWFrZVdhdGVyQ29udGFpbmVycygpO1xuICAgICAgICBtYWtlRnJpZW5kbHlXYXRlcihmcmllbmRseVdhdGVyR3JpZCk7XG4gICAgICAgIG1ha2VFbmVteVdhdGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZFRoaXJkUGFnZSxcbiAgICB9XG5cbn0pKCk7XG5cbmNvbnN0IHsgbG9hZFRoaXJkUGFnZSB9ID0gdGhpcmRQYWdlO1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkVGhpcmRQYWdlOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVuZW15V2F0ZXIoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5LmZyb20oe2xlbmd0aDogMTB9LCAoKSA9PiBBcnJheS5mcm9tKHtsZW5ndGg6IDEwfSwgKCkgPT4gbnVsbCkpO1xuICAgIHRoaXMuYXR0YWNrRGV0YWlscyA9IHtcbiAgICAgICAgbGFzdENvb3JkOiBudWxsLFxuICAgICAgICBsYXN0RGlyZWN0aW9uOiBudWxsLFxuICAgICAgICB4Q29vcmQ6IFtdLFxuICAgICAgICB5Q29vcmQ6IFtdLFxuICAgIH1cbiAgICB0aGlzLnNoaXBMZW5ndGggPSBbMiwzLDMsNCw1XTtcbiAgICB0aGlzLnBlcmNlbnRGaWxsID0gNDU7XG59XG5cbkVuZW15V2F0ZXIucHJvdG90eXBlLm1ha2VBdHRhY2sgPSBmdW5jdGlvbiBtYWtlQXR0YWNrKCkge1xuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUNvb3JkcygpIHtcbiAgICAgICAgcmV0dXJuIFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApXTtcbiAgICB9XG5cbiAgICBjb25zdCBpc1BlcmNlbnRGaWxsZWQgPSAoZnVuY3Rpb24gaW5pdFBlcmNlbnRGaWxsZWQoKSB7XG4gICAgICAgIGxldCBpc0ZpbGxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjb3VudEZpbGxlZCgpIHtcbiAgICAgICAgICAgIGlmKGlzRmlsbGVkKSByZXR1cm4gaXNGaWxsZWQ7XG5cbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmZvckVhY2goIHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgcm93LmZvckVhY2goIGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50ICE9PSBudWxsKSBjb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZihjb3VudCA+IHRoaXMucGVyY2VudEZpbGwpIGlzRmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBpc0ZpbGxlZDtcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRUaGVFbXB0eUJveFdpdGhMZW5ndGgobG9uZ2VzdFNoaXBMZWZ0T25FbmVteVdhdGVyKSB7XG4gICAgICAgIGxldCBlbXB0eUJveENvdW50ID0gMDtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgZW1wdHlCb3hDb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDsgajx0aGlzLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtpXVtqXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBlbXB0eUJveENvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlCb3hDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGxvbmdlc3RTaGlwTGVmdE9uRW5lbXlXYXRlciA9PT0gZW1wdHlCb3hDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ksIGpdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgY29vcmRzO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBlbXB0eUJveENvdW50ID0gMDtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPHRoaXMuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW2pdW2ldID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5Qm94Q291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbXB0eUJveENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYobG9uZ2VzdFNoaXBMZWZ0T25FbmVteVdhdGVyID09PSBlbXB0eUJveENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkcyA9IFtqLCBpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkcztcbiAgICB9XG5cbiAgICBsZXQge2xhc3RDb29yZCwgbGFzdERpcmVjdGlvbn0gPSB0aGlzLmF0dGFja0RldGFpbHM7XG4gICAgY29uc3Qge3hDb29yZCwgeUNvb3JkfSA9IHRoaXMuYXR0YWNrRGV0YWlscztcbiAgICBsZXQgY29vcmRzO1xuXG4gICAgaWYoeENvb3JkLmxlbmd0aCA+IDAgfHwgeUNvb3JkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYobGFzdERpcmVjdGlvbiA9PT0gXCJ4XCIgJiYgeENvb3JkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvb3JkcyA9IHhDb29yZC5wb3AoKTtcbiAgICAgICAgICAgIGxhc3RDb29yZCA9IGNvb3JkcztcbiAgICAgICAgfSBlbHNlIGlmKGxhc3REaXJlY3Rpb24gPT09IFwieVwiICYmIHlDb29yZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb29yZHMgPXlDb29yZC5wb3AoKTtcbiAgICAgICAgICAgIGxhc3RDb29yZCA9IGNvb3JkcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvb3JkcyA9IHhDb29yZC5wb3AoKSB8fCB5Q29vcmQucG9wKCk7XG4gICAgICAgICAgICBsYXN0Q29vcmQgPSBjb29yZHM7XG4gICAgICAgICAgICBsYXN0RGlyZWN0aW9uID0gbGFzdERpcmVjdGlvbiA9PT0gXCJ4XCIgPyBcInlcIiA6IFwieFwiO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmKGlzUGVyY2VudEZpbGxlZC5jYWxsKHRoaXMpKXtcbiAgICAgICAgY29uc3QgbG9uZ2VzdFNoaXBMZWZ0T25FbmVteVdhdGVyID0gdGhpcy5zaGlwTGVuZ3RoW3RoaXMuc2hpcExlbmd0aC5sZW5ndGgtMV07XG4gICAgICAgIGNvb3JkcyA9IGdldFRoZUVtcHR5Qm94V2l0aExlbmd0aC5jYWxsKHRoaXMsIGxvbmdlc3RTaGlwTGVmdE9uRW5lbXlXYXRlcik7XG4gICAgICAgIGxhc3RDb29yZCA9IGNvb3JkcztcbiAgICAgICAgbGFzdERpcmVjdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29vcmRzID0gZ2V0UmFuZG9tQ29vcmRzKCk7XG4gICAgICAgIHdoaWxlKHRoaXMuYm9hcmRbY29vcmRzWzBdXVtjb29yZHNbMV1dICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb29yZHMgPSBnZXRSYW5kb21Db29yZHMoKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0Q29vcmQgPSBjb29yZHM7XG4gICAgICAgIGxhc3REaXJlY3Rpb24gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuYXR0YWNrRGV0YWlscy5sYXN0Q29vcmQgPSBsYXN0Q29vcmQ7XG4gICAgdGhpcy5hdHRhY2tEZXRhaWxzLmxhc3REaXJlY3Rpb24gPSBsYXN0RGlyZWN0aW9uO1xuICAgIHRoaXMueENvb3JkID0geENvb3JkO1xuICAgIHRoaXMueUNvb3JkID0geUNvb3JkO1xuICAgIHRoaXMuYm9hcmRbY29vcmRzWzBdXVtjb29yZHNbMV1dID0gLTE7XG4gICAgcmV0dXJuIGNvb3Jkcztcbn1cblxuRW5lbXlXYXRlci5wcm90b3R5cGUubWFya0hpdCA9IGZ1bmN0aW9uIG1hcmtIaXQoY29vcmRzKSB7XG4gICAgaWYodGhpcy5ib2FyZFtjb29yZHNbMF1dW2Nvb3Jkc1sxXV0gPT09IC0xKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbY29vcmRzWzBdXVtjb29yZHNbMV1dID0gMTtcbiAgICB9XG59IFxuXG5FbmVteVdhdGVyLnByb3RvdHlwZS5yZW1vdmVTaGlwTGVuZ2h0ID0gZnVuY3Rpb24gcmVtb3ZlU2hpcExlbmdodChzaGlwTGVuZ3RoVG9SZW1vdmUpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2hpcExlbmd0aC5pbmRleE9mKHNoaXBMZW5ndGhUb1JlbW92ZSk7XG4gICAgaWYoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBMZW5ndGguc3BsaWNlKGluZGV4LCAxKVswXTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5FbmVteVdhdGVyLnByb3RvdHlwZS5tYXJrTWlzcyA9IGZ1bmN0aW9uIG1hcmtNaXNzKGNvb3Jkcykge1xuICAgIGlmKHRoaXMuYm9hcmRbY29vcmRzWzBdXVtjb29yZHNbMV1dID09PSAtMSkge1xuICAgICAgICB0aGlzLmJvYXJkW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSA9IDA7XG4gICAgfVxufSBcblxuRW5lbXlXYXRlci5wcm90b3R5cGUudXBkYXRlQXR0YWNrRGV0YWlscyAgPSBmdW5jdGlvbiB1cGRhdGVBdHRhY2tEZXRhaWxzKGxhc3RBdHRhY2tTdWNjZXNzU3RhdHVzKSB7XG5cbiAgICBsZXQge2xhc3REaXJlY3Rpb259ID0gdGhpcy5hdHRhY2tEZXRhaWxzO1xuICAgIGNvbnN0IHtsYXN0Q29vcmQsIHhDb29yZCwgeUNvb3JkfSA9IHRoaXMuYXR0YWNrRGV0YWlscztcblxuICAgIGlmKCFsYXN0Q29vcmQpIHJldHVybjtcbiAgICBcbiAgICBmdW5jdGlvbiBpc1ZhbGlkQXR0YWNrQ29vcmRpbmF0ZXMoY29vcmRzKSB7XG4gICAgICAgIHJldHVybiBjb29yZHNbMF0gPj0wICYmIGNvb3Jkc1swXSA8IDEwICYmIGNvb3Jkc1sxXSA+PTAgJiYgY29vcmRzWzFdIDwgMTAgJiYgdGhpcy5ib2FyZFtjb29yZHNbMF1dW2Nvb3Jkc1sxXV0gPT09IG51bGw7IFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkamFjZW50Q29vcmRpbmF0ZXMoYXhpcykge1xuICAgICAgICBjb25zdCBjb29yZHMgPSBbIFxuICAgICAgICAgICAgWyBsYXN0Q29vcmRbMF0gLSAxICwgbGFzdENvb3JkWzFdIF0sICAvLyBsZWZ0XG4gICAgICAgICAgICBbIGxhc3RDb29yZFswXSArIDEsIGxhc3RDb29yZFsxXSBdLCAgLy8gcmlnaHRcbiAgICAgICAgICAgIFsgbGFzdENvb3JkWzBdICwgbGFzdENvb3JkWzFdIC0gMSBdLCAgLy8gdG9wXG4gICAgICAgICAgICBbIGxhc3RDb29yZFswXSAsIGxhc3RDb29yZFsxXSArIDFdICAgLy8gYm90dG9tXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIGlmKCBpc1ZhbGlkQXR0YWNrQ29vcmRpbmF0ZXMuY2FsbCh0aGlzLCBjb29yZHNbMF0pICkgeENvb3JkLnB1c2goY29vcmRzWzBdKTtcbiAgICAgICAgICAgIGlmKCBpc1ZhbGlkQXR0YWNrQ29vcmRpbmF0ZXMuY2FsbCh0aGlzLCBjb29yZHNbMV0pICkgeENvb3JkLnB1c2goY29vcmRzWzFdKTtcbiAgICAgICAgfSBlbHNlIGlmKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICBpZiggaXNWYWxpZEF0dGFja0Nvb3JkaW5hdGVzLmNhbGwodGhpcywgY29vcmRzWzJdKSApIHlDb29yZC5wdXNoKGNvb3Jkc1syXSk7XG4gICAgICAgICAgICBpZiggaXNWYWxpZEF0dGFja0Nvb3JkaW5hdGVzLmNhbGwodGhpcywgY29vcmRzWzNdKSApIHlDb29yZC5wdXNoKGNvb3Jkc1szXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiggaXNWYWxpZEF0dGFja0Nvb3JkaW5hdGVzLmNhbGwodGhpcywgY29vcmRzWzBdKSApIHhDb29yZC5wdXNoKGNvb3Jkc1swXSk7XG4gICAgICAgICAgICBpZiggaXNWYWxpZEF0dGFja0Nvb3JkaW5hdGVzLmNhbGwodGhpcywgY29vcmRzWzFdKSApIHhDb29yZC5wdXNoKGNvb3Jkc1sxXSk7XG4gICAgICAgICAgICBpZiggaXNWYWxpZEF0dGFja0Nvb3JkaW5hdGVzLmNhbGwodGhpcywgY29vcmRzWzJdKSApIHlDb29yZC5wdXNoKGNvb3Jkc1syXSk7XG4gICAgICAgICAgICBpZiggaXNWYWxpZEF0dGFja0Nvb3JkaW5hdGVzLmNhbGwodGhpcywgY29vcmRzWzNdKSApIHlDb29yZC5wdXNoKGNvb3Jkc1szXSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmKGxhc3RBdHRhY2tTdWNjZXNzU3RhdHVzKSB7XG4gICAgICAgIGFkamFjZW50Q29vcmRpbmF0ZXMuY2FsbCh0aGlzLCBsYXN0RGlyZWN0aW9uKTtcbiAgICAgICAgbGFzdERpcmVjdGlvbiA9IGxhc3REaXJlY3Rpb24gPT09IG51bGwgPyBcInhcIiA6IGxhc3REaXJlY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdERpcmVjdGlvbiA9IGxhc3REaXJlY3Rpb24gPT09IFwieFwiID8gXCJ5XCIgOiBcInhcIjtcbiAgICB9XG5cbiAgICB0aGlzLmF0dGFja0RldGFpbHMubGFzdENvb3JkID0gbGFzdENvb3JkO1xuICAgIHRoaXMuYXR0YWNrRGV0YWlscy5sYXN0RGlyZWN0aW9uID0gbGFzdERpcmVjdGlvbjtcbiAgICB0aGlzLnhDb29yZCA9IHhDb29yZDtcbiAgICB0aGlzLnlDb29yZCA9IHlDb29yZDtcbn1cbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnJpZW5kbHlXYXRlcigpIHtcbiAgICB0aGlzLmJvYXJkID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMH0sICgpID0+IEFycmF5LmZyb20oe2xlbmd0aDogMTB9LCAoKSA9PiBudWxsKSk7XG59XG5cbkZyaWVuZGx5V2F0ZXIucHJvdG90eXBlLnBsYWNlU2hpcCA9IGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCBjb29yZHMpIHtcbiAgICBpZighY29vcmRzLmV2ZXJ5KGVsZSA9PiB0aGlzLmJvYXJkW2VsZVswXV1bZWxlWzFdXSA9PT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb29yZHMuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICB0aGlzLmJvYXJkW2VsZVswXV1bZWxlWzFdXSA9IHNoaXA7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbkZyaWVuZGx5V2F0ZXIucHJvdG90eXBlLnJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgaWYodGhpcy5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IDA7IFxuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG1pc3Nlc1xuICAgIH0gXG4gICAgXG4gICAgaWYoT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mLmNhbGwoU2hpcC5wcm90b3R5cGUsIHRoaXMuYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSkpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dLmhpdCgpOyAvLyBoaXQgdGhlIHNoaXBcbiAgICAgICAgdGhpcy5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gMTsgXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBoaXRcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDsgLy8gZG9lcyBub3QgZG8gYW55dGhpbmcgdG8gdGhlIGNvb3JkcyBhbHJlYWR5IGF0dGFja2VkXG59XG5cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IGdhbWVDb250cm9sID0gKGZ1bmN0aW9uIGdhbWVDb250cm9sKCkge1xuXG4gICAgbGV0IHBsYXllcjE7IFxuICAgIGxldCBwbGF5ZXIyO1xuXG4gICAgZnVuY3Rpb24gaW5pdFBsYXllcnModXNlclBsYXllck5hbWUgPSBcIkNoaWVmXCIpIHtcbiAgICAgICAgcGxheWVyMSA9IG5ldyBQbGF5ZXIoYCR7dXNlclBsYXllck5hbWV9YCk7XG4gICAgICAgIHBsYXllcjIgPSBuZXcgUGxheWVyKFwiY29tcHV0ZXJcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VVc2VyU2hpcHMoc2hpcE5hbWUsIGNvb3Jkcykge1xuICAgICAgICByZXR1cm4gcGxheWVyMS5wbGFjZVNoaXAoc2hpcE5hbWUsIGNvb3Jkcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheWVyVXNlck1ha2VzTW92ZShjb29yZCkge1xuICAgICAgICBjb25zdCBpc1BsYXllckhpdCA9IHBsYXllcjIucmVjZWl2ZUF0dGFjayhjb29yZCk7XG4gICAgICAgIHBsYXllcjEubWFya0F0dGFjayhpc1BsYXllckhpdCwgY29vcmQpO1xuICAgICAgICBjb25zdCBzaGlwc1RoYXRBcmVIaXQgPSBwbGF5ZXIyLmdldFNoaXBzVGhhdEFyZUhpdCgpO1xuICAgICAgICBjb25zdCBpc05ld1NoaXBTdW5rID0gcGxheWVyMi5pc05ld1NoaXBTdW5rKCk7XG4gICAgICAgIHBsYXllcjEucmVtb3ZlRW5lbXlTaGlwTGVuZ3RoKGlzTmV3U2hpcFN1bmspO1xuICAgICAgICBjb25zdCBpc1dpbm5lciA9IHBsYXllcjIuYWxsU2hpcFN1bmsoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHBsYXllcjEubmFtZSxcbiAgICAgICAgICAgIGNvb3JkLCAgICAgICAgICAgICAgLy8gY29vcmRpbmF0ZXMgb2YgdGhlIGF0dGFja1xuICAgICAgICAgICAgaXNQbGF5ZXJIaXQsICAgICAgICAvLyBzdGF0dXMgaWYgaXQgd2FzIGEgc3VjY2Vzc2Z1bCBhdHRhY2sgb3Igbm90XG4gICAgICAgICAgICBzaGlwc1RoYXRBcmVIaXQsICAgIC8vIHNoaXBzIHRoYXQgYXJlIGhpdFxuICAgICAgICAgICAgaXNOZXdTaGlwU3VuaywgICAgICAvLyBpcyB0aGVyZSBhbnkgbmV3IHNoaXAgd2hpY2ggaXMgc3Vua1xuICAgICAgICAgICAgaXNXaW5uZXIsICAgICAgICAgICAvLyBoYXMgdGhlIGdhbWUgYmVlbiB3b25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5ZXJDb21wdXRlck1ha2VzTW92ZSgpIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBwbGF5ZXIyLm1ha2VBdHRhY2soKTtcbiAgICAgICAgY29uc3QgaXNQbGF5ZXJIaXQgPSBwbGF5ZXIxLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICAgICAgICBwbGF5ZXIyLm1hcmtBdHRhY2soaXNQbGF5ZXJIaXQsIGNvb3JkKTtcbiAgICAgICAgY29uc3Qgc2hpcHNUaGF0QXJlSGl0ID0gcGxheWVyMS5nZXRTaGlwc1RoYXRBcmVIaXQoKTtcbiAgICAgICAgY29uc3QgaXNOZXdTaGlwU3VuayA9IHBsYXllcjEuaXNOZXdTaGlwU3VuaygpO1xuICAgICAgICBwbGF5ZXIyLnJlbW92ZUVuZW15U2hpcExlbmd0aChpc05ld1NoaXBTdW5rKTtcbiAgICAgICAgY29uc3QgaXNXaW5uZXIgPSBwbGF5ZXIxLmFsbFNoaXBTdW5rKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBwbGF5ZXIyLm5hbWUsXG4gICAgICAgICAgICBjb29yZCwgICAgICAgICAgICAgIC8vIGNvb3JkaW5hdGVzIG9mIHRoZSBhdHRhY2tcbiAgICAgICAgICAgIGlzUGxheWVySGl0LCAgICAgICAgLy8gc3RhdHVzIGlmIGl0IHdhcyBhIHN1Y2Nlc3NmdWwgYXR0YWNrIG9yIG5vdFxuICAgICAgICAgICAgc2hpcHNUaGF0QXJlSGl0LCAgICAvLyBzaGlwcyB0aGF0IGFyZSBoaXRcbiAgICAgICAgICAgIGlzTmV3U2hpcFN1bmssICAgICAgLy8gaXMgdGhlcmUgYW55IG5ldyBzaGlwIHdoaWNoIGlzIHN1bmtcbiAgICAgICAgICAgIGlzV2lubmVyLCAgICAgICAgICAgLy8gaGFzIHRoZSBnYW1lIGJlZW4gd29uXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXJTaGlwcygpIHtcbiAgICAgICAgcGxheWVyMi5wbGFjZVNoaXBBdXRvbWF0aWNhbGx5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdFBsYXllcnMsXG4gICAgICAgIHBsYWNlVXNlclNoaXBzLFxuICAgICAgICBwbGFjZUNvbXB1dGVyU2hpcHMsXG4gICAgICAgIHBsYXllclVzZXJNYWtlc01vdmUsXG4gICAgICAgIHBsYXllckNvbXB1dGVyTWFrZXNNb3ZlLFxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IHtpbml0UGxheWVycywgcGxhY2VVc2VyU2hpcHMsIHBsYWNlQ29tcHV0ZXJTaGlwcywgcGxheWVyVXNlck1ha2VzTW92ZSwgcGxheWVyQ29tcHV0ZXJNYWtlc01vdmV9ID0gZ2FtZUNvbnRyb2w7XG5cbmV4cG9ydCB7aW5pdFBsYXllcnMsIHBsYWNlVXNlclNoaXBzLCBwbGFjZUNvbXB1dGVyU2hpcHMsIHBsYXllclVzZXJNYWtlc01vdmUsIHBsYXllckNvbXB1dGVyTWFrZXNNb3ZlfSA7XG5cbiIsImltcG9ydCBFbmVteVdhdGVyIGZyb20gXCIuL2VuZW15V2F0ZXJcIjtcbmltcG9ydCBGcmllbmRseVdhdGVyIGZyb20gXCIuL2ZyaWVuZGx5V2F0ZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZnJpZW5kbHlXYXRlciA9IG5ldyBGcmllbmRseVdhdGVyKCk7XG4gICAgdGhpcy5lbmVteVdhdGVyID0gbmV3IEVuZW15V2F0ZXIoKTtcbiAgICB0aGlzLnNoaXBzID0ge1xuICAgICAgICBcImNhcnJpZXJcIjogbmV3IFNoaXAoXCJjYXJyaWVyXCIsIDUpLFxuICAgICAgICBcImJhdHRsZXNoaXBcIjogbmV3IFNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpLFxuICAgICAgICBcImNydWlzZXJcIjogbmV3IFNoaXAoXCJjcnVpc2VyXCIsIDMpLFxuICAgICAgICBcInN1Ym1hcmluZVwiOiBuZXcgU2hpcChcInN1Ym1hcmluZVwiLCAzKSxcbiAgICAgICAgXCJkZXN0cm95ZXJcIjogbmV3IFNoaXAoXCJkZXN0cm95ZXJcIiwgMiksXG4gICAgfVxufVxuXG5QbGF5ZXIucHJvdG90eXBlLnBsYWNlU2hpcCA9IGZ1bmN0aW9uIHBsYWNlU2hpcChuYW1lLCBjb29yZCkge1xuICAgIHJldHVybiB0aGlzLmZyaWVuZGx5V2F0ZXIucGxhY2VTaGlwKHRoaXMuc2hpcHNbbmFtZV0sIGNvb3JkKTtcbn1cblxuUGxheWVyLnByb3RvdHlwZS5tYWtlQXR0YWNrID0gZnVuY3Rpb24gbWFrZUF0dGFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5lbmVteVdhdGVyLm1ha2VBdHRhY2soKTtcbn1cblxuUGxheWVyLnByb3RvdHlwZS5yZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgIHJldHVybiB0aGlzLmZyaWVuZGx5V2F0ZXIucmVjZWl2ZUF0dGFjayhjb29yZCk7XG59XG5cblBsYXllci5wcm90b3R5cGUubWFya0F0dGFjayA9IGZ1bmN0aW9uIG1hcmtBdHRhY2sob3RoZXJQbGF5ZXJTaGlwSGl0LCBjb29yZCkge1xuICAgIHRoaXMuZW5lbXlXYXRlci51cGRhdGVBdHRhY2tEZXRhaWxzKG90aGVyUGxheWVyU2hpcEhpdCk7XG4gICAgaWYob3RoZXJQbGF5ZXJTaGlwSGl0KSB7XG4gICAgICAgIHRoaXMuZW5lbXlXYXRlci5tYXJrSGl0KGNvb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVuZW15V2F0ZXIubWFya01pc3MoY29vcmQpO1xuICAgIH1cbn1cblxuUGxheWVyLnByb3RvdHlwZS5yZW1vdmVFbmVteVNoaXBMZW5ndGggPSBmdW5jdGlvbiByZW1vdmVFbmVteVNoaXBMZW5ndGgoc2hpcCkge1xuICAgIGlmKE9iamVjdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZi5jYWxsKFNoaXAucHJvdG90eXBlLCBzaGlwKSkgcmV0dXJuIHRoaXMuZW5lbXlXYXRlci5yZW1vdmVTaGlwTGVuZ2h0KHNoaXAubGVuKTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblBsYXllci5wcm90b3R5cGUuZ2V0U2hpcHNUaGF0QXJlSGl0ID0gZnVuY3Rpb24gZ2V0U2hpcHNUaGF0QXJlSGl0KCkge1xuICAgIGNvbnN0IHNoaXBUaGF0QXJlSGl0ID0gT2JqZWN0LmtleXModGhpcy5zaGlwcykuZmlsdGVyKCBrZXkgPT4gdGhpcy5zaGlwc1trZXldLmhpdENvdW50ID4gMCk7XG4gICAgcmV0dXJuIHNoaXBUaGF0QXJlSGl0O1xufVxuXG5QbGF5ZXIucHJvdG90eXBlLmlzTmV3U2hpcFN1bmsgPSBmdW5jdGlvbiBpc05ld1NoaXBTdW5rKCkge1xuICAgIGNvbnN0IHN1bmtTaGlwID0gT2JqZWN0LmtleXModGhpcy5zaGlwcykuZmluZChrZXkgPT4gdGhpcy5zaGlwc1trZXldLmlzU3VuaygpKTtcbiAgICBpZihzdW5rU2hpcCkge1xuICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwc1tzdW5rU2hpcF07XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNoaXBzW3N1bmtTaGlwXTtcbiAgICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuUGxheWVyLnByb3RvdHlwZS5hbGxTaGlwU3VuayA9IGZ1bmN0aW9uIGFsbFNoaXBTdW5rKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNoaXBzKS5sZW5ndGggPT09IDA7XG59XG5cblBsYXllci5wcm90b3R5cGUucGxhY2VTaGlwQXV0b21hdGljYWxseSA9IGZ1bmN0aW9uIHBsYWNlU2hpcEF1dG9tYXRpY2FsbHkoKSB7XG5cbiAgICBmdW5jdGlvbiBjb29yZHNWYWxpZChjb29yZCkge1xuICAgICAgICByZXR1cm4gKGNvb3JkWzBdID49IDAgJiYgY29vcmRbMF0gPD0gOSAmJiBjb29yZFsxXSA+PSAwICYmIGNvb3JkWzFdIDw9IDkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJhbmRvbVNoaXBDb29yZEdlbmVyYXRvcihudW1PZkNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbUNvb3JkcygpIHtcbiAgICAgICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKV07XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgY29vcmRzID0gW2dldFJhbmRvbUNvb3JkcygpXTtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7IC8vIDAgZm9yIHggYW5kIDEgZm9yIHlcbiAgICBcbiAgICAgICAgd2hpbGUoY29vcmRzLmxlbmd0aCA8IG51bU9mQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIGxldCBmaXJzdCA9IGNvb3Jkc1swXTsgICAgICAgICAgICAgICAgICAvLyBnZXRzIHRoZSByb3cgdmFsdWVcbiAgICAgICAgICAgIGxldCBsYXN0ID0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXTsgICAvLyBnZXRzIHRoZSBjb2x1bW5zIHZhbHVlXG4gICAgXG4gICAgICAgICAgICBpZihkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IFtmaXJzdFswXSxmaXJzdFsxXS0xXTsgICAgICAvLyBhZGRzIGNvb3JkaW5hdGVzIGluIG5lZ2F0aXZlIGRpcmVjdGlvbiBkZXBlbmRpbmcgb24gYXhpc1xuICAgICAgICAgICAgICAgIGxhc3QgPSBbbGFzdFswXSxsYXN0WzFdKzFdOyAgICAgICAgIC8vIGFkZHMgY29vcmRpbmF0ZXMgaW4gcG9zaXRpdmUgZGlyZWN0aW9uIGRlcGVuZGluZyBvbiBheGlzXG4gICAgICAgICAgICB9IGVsc2UgaWYoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZmlyc3QgPSBbZmlyc3RbMF0tMSxmaXJzdFsxXV07XG4gICAgICAgICAgICAgICAgbGFzdCA9IFtsYXN0WzBdKzEsbGFzdFsxXV07XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZihjb29yZHNWYWxpZChmaXJzdCkpIHtcbiAgICAgICAgICAgICAgICBjb29yZHMudW5zaGlmdChmaXJzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjb29yZHMubGVuZ3RoID09PSBudW1PZkNvb3JkaW5hdGVzKSBicmVhaztcbiAgICAgICAgICAgIGlmKGNvb3Jkc1ZhbGlkKGxhc3QpKSB7XG4gICAgICAgICAgICAgICAgY29vcmRzLnB1c2gobGFzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1NoaXBBZGphY2VudFRvQ29vcmRzKGNvb3Jkcykge1xuICAgICAgICBjb25zdCBpc1NoaXBQbGFjZU9uQWRqYWNlbnQgPSBjb29yZHMuZXZlcnkoY29vcmQgPT4geyAgLy8gc3RvcmVzIGZhbHNlIGlzIHRoZXJlIGlzIGEgc2hpcCBwbGFjZWQgb24gdGhlIGFkamFjZW50IGNvb3Jkc1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IGNvb3Jkc1ZhbGlkKFsgY29vcmRbMF0sIGNvb3JkWzFdLTEgXSkgPyBbIGNvb3JkWzBdLCBjb29yZFsxXS0xIF0gOiBudWxsO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSBjb29yZHNWYWxpZChbIGNvb3JkWzBdLCBjb29yZFsxXSsxIF0pID8gWyBjb29yZFswXSwgY29vcmRbMV0rMSBdIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGNvb3Jkc1ZhbGlkKFsgY29vcmRbMF0tMSAsIGNvb3JkWzFdIF0pID8gWyBjb29yZFswXS0xLCBjb29yZFsxXSBdIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbSA9IGNvb3Jkc1ZhbGlkKFsgY29vcmRbMF0rMSAsIGNvb3JkWzFdIF0pID8gWyBjb29yZFswXSsxLCBjb29yZFsxXSBdIDogbnVsbDtcblxuICAgICAgICAgICAgaWYobGVmdCAhPT0gbnVsbCAmJiB0aGlzLmZyaWVuZGx5V2F0ZXIuYm9hcmRbbGVmdFswXV1bbGVmdFsxXV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmKHJpZ2h0ICE9PSBudWxsICYmIHRoaXMuZnJpZW5kbHlXYXRlci5ib2FyZFtyaWdodFswXV1bcmlnaHRbMV1dICE9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZih0b3AgIT09IG51bGwgJiYgdGhpcy5mcmllbmRseVdhdGVyLmJvYXJkW3RvcFswXV1bdG9wWzFdXSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYoYm90dG9tICE9PSBudWxsICYmIHRoaXMuZnJpZW5kbHlXYXRlci5ib2FyZFtib3R0b21bMF1dW2JvdHRvbVsxXV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhaXNTaGlwUGxhY2VPbkFkamFjZW50OyAvLyByZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgYSBzaGlwIGFkamFjZW50IHRvIGNvb3Jkc1xuICAgIH1cbiBcbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAobmFtZSwgbGVuKSB7XG4gICAgICAgIGxldCBjb29yZHMgPSByYW5kb21TaGlwQ29vcmRHZW5lcmF0b3IobGVuKTtcbiAgICAgICAgbGV0IGlzU2hpcEFkamFjZW50ID0gaXNTaGlwQWRqYWNlbnRUb0Nvb3Jkcy5jYWxsKHRoaXMsIGNvb3Jkcyk7XG4gICAgICAgIGxldCBpc1BsYWNlZFNoaXAgPSBmYWxzZTtcblxuICAgICAgICBpZighaXNTaGlwQWRqYWNlbnQpIHtcbiAgICAgICAgICAgIGlzUGxhY2VkU2hpcCA9IHRoaXMucGxhY2VTaGlwKG5hbWUsIGNvb3Jkcyk7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZShpc1NoaXBBZGphY2VudCAmJiAhaXNQbGFjZWRTaGlwKSB7XG4gICAgICAgICAgICBjb29yZHMgPSByYW5kb21TaGlwQ29vcmRHZW5lcmF0b3IobGVuKTtcbiAgICAgICAgICAgIGlzU2hpcEFkamFjZW50ID0gaXNTaGlwQWRqYWNlbnRUb0Nvb3Jkcy5jYWxsKHRoaXMsIGNvb3Jkcyk7XG4gICAgICAgICAgICBpZighaXNTaGlwQWRqYWNlbnQpIHtcbiAgICAgICAgICAgICAgICBpc1BsYWNlZFNoaXAgPSB0aGlzLnBsYWNlU2hpcChuYW1lLCBjb29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcHMgPSBbIFxuICAgICAgICBbXCJjYXJyaWVyXCIsIDVdLFxuICAgICAgICBbXCJiYXR0bGVzaGlwXCIsIDRdLFxuICAgICAgICBbXCJjcnVpc2VyXCIsIDNdLFxuICAgICAgICBbXCJzdWJtYXJpbmVcIiwgM10sXG4gICAgICAgIFtcImRlc3Ryb3llclwiLCAyXSxcbiAgICBdO1xuICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiBwbGFjZVNoaXAuY2FsbCh0aGlzLCBzaGlwWzBdLCBzaGlwWzFdKSk7XG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChuYW1lLCBsZW4pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuID0gbGVuO1xuICAgIHRoaXMuaGl0Q291bnQgPSAwO1xufVxuXG5TaGlwLnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiBoaXQoKSB7XG4gICAgaWYoIXRoaXMuaXNTdW5rKCkpIHtcbiAgICAgICAgdGhpcy5oaXRDb3VudCArPSAxO1xuICAgIH1cbn1cblxuU2hpcC5wcm90b3R5cGUuaXNTdW5rID0gZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmxlbiA9PT0gdGhpcy5oaXRDb3VudDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=