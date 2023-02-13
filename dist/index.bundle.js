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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: fantasy;\n    font-size: 16px;\n    background-color: beige;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n\nheader {\n    display: grid;\n    place-content: center;\n    flex: 0 1 auto;\n}\n\nh1 {\n    padding: 0.4em 0.5em;\n    font-size: 2.5rem;\n    line-height: 1.5;\n}\n\nh1.firstPage {\n    font-size: 4rem;\n    position: relative;\n    animation-name: floating;\n    animation-duration: 4s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n@keyframes floating {\n    0% {top: -20px;}\n    10% {top: 20px;}\n    20% {top: -15px;}\n    30% {top: 15px;}\n    40% {top: -10px;}\n    50% {top: 10px;}\n    60% {top: -5px;}\n    70% {top: 5px;}\n    80% {top: -2px;}\n    90% {top: 1px;}\n    100% {top: 0px;}\n}\n\nmain {\n    flex: 2 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 0.75rem;\n}\n\nform {\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\nform > label {\n    font-size: 1.75rem;\n    margin-bottom: 5%;\n    padding: 0.4rem 0.5rem;\n    text-align: center;\n}\n\nform > input {\n    text-align: center;\n    font-size: 1.5rem;\n    padding: 0.25rem 0.5rem;\n    outline: none;\n    border: 2px solid white;\n    border-radius: 4px;\n}\n\nform > input:placeholder-shown {\n    border-color: lightskyblue;\n}\n\nform > input:placeholder-shown:focus {\n    border-color: white;\n}\n\nform > input:focus,\nform > input.invalid:focus {\n    border-color: purple;\n    border-radius: 4px 4px 0 0;\n}\n\nform > input:not(:placeholder-shown):not(:focus):invalid,\nform > input.invalid:not(:focus) {\n    border-color: red;\n    border-radius: 4px 4px 0 0;\n}\n\ninput:valid {\n    border-color: green;\n    border-radius: 4px;\n}\n\n.error {\n    display: block;\n    text-align: center;\n    word-wrap: break-word;\n    background-color: #eebbbb;\n    border-radius:  0 0 4px 4px;\n}\n\n.error.active {\n    padding: 0.3rem 0.5rem;\n}\n\nbutton {\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    background-color: whitesmoke;\n    border: 4px solid grey;\n    border-radius: 6px;\n    outline: none;\n}\n\nh2 {\n    font-size: 2rem;\n    padding: 0.4rem 0.5rem;\n}\n\n.gridContainer {\n    padding: 0.5rem;\n    display: grid;\n    grid-template-rows: repeat(10, 35px);\n    grid-template-columns: repeat(10, 35px);\n    gap: 5px;\n}\n\n.box {\n    background-color: white;\n    border: 1px solid black;\n    cursor: default;\n}\n\n.validBox {\n    background-color: lightgreen;\n}\n\n.invalidBox {\n    background-color: lightcoral;\n    cursor: not-allowed;\n}\n\n.shipPlacedOnBox {\n    background-color: lightskyblue;\n}\n\n.carrier,\n.battleship,\n.cruiser,\n.destroyer,\n.submarine {\n    position: relative;\n}\n\n.carrier::before,\n.battleship::before,\n.cruiser::before,\n.destroyer::before,\n.submarine::before {\n    position: absolute;\n    content: '';\n    z-index: 2;\n    top: -1px;\n    left: -1px;\n    height: 35px;\n    border: 1px solid red;\n    background-repeat: no-repeat;\n    opacity: 0.55;\n    transform-origin: 17.5px 17.5px;\n}\n\n.carrier::before {\n    width: 195px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 195px 35px;\n}\n\n.battleship::before {\n    width: 155px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: 155px 35px;\n}\n\n.cruiser::before {\n    width: 115px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: 115px 35px;\n}\n\n.submarine::before {\n    width: 115px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: 115px 35px;\n}\n\n.destroyer::before {\n    width: 75px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size: 75px 35px;\n}\n\n#statusBox {\n    padding: 0.4rem 0.5rem;\n}\n\n#statusBox > p {\n    text-align: center;\n    position: relative;\n    font-size: 1.2rem;\n    opacity: 0.6;\n    transition: transform 600ms ease-in;\n}\n\n#statusBox > .backward {\n    font-size: 1.4rem;\n    transform: scale(1.1);\n    opacity: 1;\n}\n\n#waterContainer {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap-reverse;\n}\n\n.water {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    gap: 0.4rem;\n}\n\n#shipIndicatorContainer {\n    width: 100%;\n    flex: 1 1 auto;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.shipStatusIndicator {\n    padding: 0.4rem 0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n}\n\nh4 {\n    /*the shipName in the shipIndicator*/\n}\n\n.indicatorLight {\n    width: 1.75rem;\n    height: 0.75rem;\n    border: 1px solid black;\n    border-radius: 0.4rem;\n}\n\n.shipActive {\n    background-color: lightgreen;\n}\n\n.shipHit {\n    animation-name: blinking;\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-fill-mode: forwards;\n    animation-direction: alternate;\n    animation-timing-function: ease-in-out;\n}\n\n@keyframes blinking {\n    0% {background-color: lightgreen;}\n    25% {background-color: #ee4444; }\n    50% {background-color: lightgreen; }\n    75% {background-color: #ee4444; }\n    100% {background-color: lightgreen;}\n}\n\n.shipLost {\n    transform: scale(1.09);\n    background-color: #ee4444;\n}\n\n.target {\n    cursor: crosshair;\n    background-color: #cccccc;\n}\n\n.hit {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n.miss {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n\n.banner {\n    font-size: 2.5rem;\n}\n\n.winner {\n    font-size: 6rem;\n}\n\nfooter {\n    flex: 0 1 auto;\n    display: grid;\n    place-content: center;\n}\n\nfooter > div {\n    padding: 0.4em 0.5em;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n/* .box[data-coordinates='32'] {\n    position: relative;\n    background-color: blue;\n}\n\n.box[data-coordinates='32']::before {\n    position: absolute;\n    content: '';\n    z-index: 1;\n    top: 0;\n    left: 0;\n    height: 35px;\n    width: 115px;\n    border: 2px solid red;\n    background-image: url(./assets/images/ship.svg);\n    transform-origin: 17.5px 17.5px;\n    transform: rotateZ(90deg);\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::after,\n*::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: fantasy;\n    font-size: 16px;\n    background-color: beige;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n\nheader {\n    display: grid;\n    place-content: center;\n    flex: 0 1 auto;\n}\n\nh1 {\n    padding: 0.4em 0.5em;\n    font-size: 2.5rem;\n    line-height: 1.5;\n}\n\nh1.firstPage {\n    font-size: 4rem;\n    position: relative;\n    animation-name: floating;\n    animation-duration: 4s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n@keyframes floating {\n    0% {top: -20px;}\n    10% {top: 20px;}\n    20% {top: -15px;}\n    30% {top: 15px;}\n    40% {top: -10px;}\n    50% {top: 10px;}\n    60% {top: -5px;}\n    70% {top: 5px;}\n    80% {top: -2px;}\n    90% {top: 1px;}\n    100% {top: 0px;}\n}\n\nmain {\n    flex: 2 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 0.75rem;\n}\n\nform {\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\nform > label {\n    font-size: 1.75rem;\n    margin-bottom: 5%;\n    padding: 0.4rem 0.5rem;\n    text-align: center;\n}\n\nform > input {\n    text-align: center;\n    font-size: 1.5rem;\n    padding: 0.25rem 0.5rem;\n    outline: none;\n    border: 2px solid white;\n    border-radius: 4px;\n}\n\nform > input:placeholder-shown {\n    border-color: lightskyblue;\n}\n\nform > input:placeholder-shown:focus {\n    border-color: white;\n}\n\nform > input:focus,\nform > input.invalid:focus {\n    border-color: purple;\n    border-radius: 4px 4px 0 0;\n}\n\nform > input:not(:placeholder-shown):not(:focus):invalid,\nform > input.invalid:not(:focus) {\n    border-color: red;\n    border-radius: 4px 4px 0 0;\n}\n\ninput:valid {\n    border-color: green;\n    border-radius: 4px;\n}\n\n.error {\n    display: block;\n    text-align: center;\n    word-wrap: break-word;\n    background-color: #eebbbb;\n    border-radius:  0 0 4px 4px;\n}\n\n.error.active {\n    padding: 0.3rem 0.5rem;\n}\n\nbutton {\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    background-color: whitesmoke;\n    border: 4px solid grey;\n    border-radius: 6px;\n    outline: none;\n}\n\nh2 {\n    font-size: 2rem;\n    padding: 0.4rem 0.5rem;\n}\n\n.gridContainer {\n    padding: 0.5rem;\n    display: grid;\n    grid-template-rows: repeat(10, 35px);\n    grid-template-columns: repeat(10, 35px);\n    gap: 5px;\n}\n\n.box {\n    background-color: white;\n    border: 1px solid black;\n    cursor: default;\n}\n\n.validBox {\n    background-color: lightgreen;\n}\n\n.invalidBox {\n    background-color: lightcoral;\n    cursor: not-allowed;\n}\n\n.shipPlacedOnBox {\n    background-color: lightskyblue;\n}\n\n.carrier,\n.battleship,\n.cruiser,\n.destroyer,\n.submarine {\n    position: relative;\n}\n\n.carrier::before,\n.battleship::before,\n.cruiser::before,\n.destroyer::before,\n.submarine::before {\n    position: absolute;\n    content: '';\n    z-index: 2;\n    top: -1px;\n    left: -1px;\n    height: 35px;\n    border: 1px solid red;\n    background-repeat: no-repeat;\n    opacity: 0.55;\n    transform-origin: 17.5px 17.5px;\n}\n\n.carrier::before {\n    width: 195px;\n    background-image: url(./assets/images/carrier.svg);\n    background-size: 195px 35px;\n}\n\n.battleship::before {\n    width: 155px;\n    background-image: url(./assets/images/battleship.svg);\n    background-size: 155px 35px;\n}\n\n.cruiser::before {\n    width: 115px;\n    background-image: url(./assets/images/cruiser.svg);\n    background-size: 115px 35px;\n}\n\n.submarine::before {\n    width: 115px;\n    background-image: url(./assets/images/submarine.svg);\n    background-size: 115px 35px;\n}\n\n.destroyer::before {\n    width: 75px;\n    background-image: url(./assets/images/destroyer.svg);\n    background-size: 75px 35px;\n}\n\n#statusBox {\n    padding: 0.4rem 0.5rem;\n}\n\n#statusBox > p {\n    text-align: center;\n    position: relative;\n    font-size: 1.2rem;\n    opacity: 0.6;\n    transition: transform 600ms ease-in;\n}\n\n#statusBox > .backward {\n    font-size: 1.4rem;\n    transform: scale(1.1);\n    opacity: 1;\n}\n\n#waterContainer {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap-reverse;\n}\n\n.water {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    gap: 0.4rem;\n}\n\n#shipIndicatorContainer {\n    width: 100%;\n    flex: 1 1 auto;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.shipStatusIndicator {\n    padding: 0.4rem 0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n}\n\nh4 {\n    /*the shipName in the shipIndicator*/\n}\n\n.indicatorLight {\n    width: 1.75rem;\n    height: 0.75rem;\n    border: 1px solid black;\n    border-radius: 0.4rem;\n}\n\n.shipActive {\n    background-color: lightgreen;\n}\n\n.shipHit {\n    animation-name: blinking;\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-fill-mode: forwards;\n    animation-direction: alternate;\n    animation-timing-function: ease-in-out;\n}\n\n@keyframes blinking {\n    0% {background-color: lightgreen;}\n    25% {background-color: #ee4444; }\n    50% {background-color: lightgreen; }\n    75% {background-color: #ee4444; }\n    100% {background-color: lightgreen;}\n}\n\n.shipLost {\n    transform: scale(1.09);\n    background-color: #ee4444;\n}\n\n.target {\n    cursor: crosshair;\n    background-color: #cccccc;\n}\n\n.hit {\n    background-image: url(./assets/images/red_dot.svg);\n}\n\n.miss {\n    background-image: url(./assets/images/white_dot.svg);\n}\n\n.banner {\n    font-size: 2.5rem;\n}\n\n.winner {\n    font-size: 6rem;\n}\n\nfooter {\n    flex: 0 1 auto;\n    display: grid;\n    place-content: center;\n}\n\nfooter > div {\n    padding: 0.4em 0.5em;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n/* .box[data-coordinates='32'] {\n    position: relative;\n    background-color: blue;\n}\n\n.box[data-coordinates='32']::before {\n    position: absolute;\n    content: '';\n    z-index: 1;\n    top: 0;\n    left: 0;\n    height: 35px;\n    width: 115px;\n    border: 2px solid red;\n    background-image: url(./assets/images/ship.svg);\n    transform-origin: 17.5px 17.5px;\n    transform: rotateZ(90deg);\n} */"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sU0FBUyxZQUFZLE9BQU8sU0FBUyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZ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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2h0bWxfZWxlbWVudHMvZmlyc3RfcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaHRtbF9lbGVtZW50cy9mb3VydGhfcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaHRtbF9lbGVtZW50cy9odG1sX2NyZWF0ZV9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2h0bWxfZWxlbWVudHMvc2Vjb25kX3BhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2h0bWxfZWxlbWVudHMvdGhpcmRfcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvb2JqZWN0L2VuZW15V2F0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL29iamVjdC9mcmllbmRseVdhdGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9vYmplY3QvZ2FtZV9jb250cm9sLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9vYmplY3QvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9vYmplY3Qvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2NhcnJpZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2JhdHRsZXNoaXAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2NydWlzZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL3N1Ym1hcmluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvZGVzdHJveWVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9yZWRfZG90LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy93aGl0ZV9kb3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogZmFudGFzeTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4OiAwIDEgYXV0bztcXG59XFxuXFxuaDEge1xcbiAgICBwYWRkaW5nOiAwLjRlbSAwLjVlbTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbmgxLmZpcnN0UGFnZSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb24tbmFtZTogZmxvYXRpbmc7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsb2F0aW5nIHtcXG4gICAgMCUge3RvcDogLTIwcHg7fVxcbiAgICAxMCUge3RvcDogMjBweDt9XFxuICAgIDIwJSB7dG9wOiAtMTVweDt9XFxuICAgIDMwJSB7dG9wOiAxNXB4O31cXG4gICAgNDAlIHt0b3A6IC0xMHB4O31cXG4gICAgNTAlIHt0b3A6IDEwcHg7fVxcbiAgICA2MCUge3RvcDogLTVweDt9XFxuICAgIDcwJSB7dG9wOiA1cHg7fVxcbiAgICA4MCUge3RvcDogLTJweDt9XFxuICAgIDkwJSB7dG9wOiAxcHg7fVxcbiAgICAxMDAlIHt0b3A6IDBweDt9XFxufVxcblxcbm1haW4ge1xcbiAgICBmbGV4OiAyIDEgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMC43NXJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5mb3JtID4gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvcm0gPiBpbnB1dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5mb3JtID4gaW5wdXQ6cGxhY2Vob2xkZXItc2hvd24ge1xcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXFxuZm9ybSA+IGlucHV0OnBsYWNlaG9sZGVyLXNob3duOmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZm9ybSA+IGlucHV0OmZvY3VzLFxcbmZvcm0gPiBpbnB1dC5pbnZhbGlkOmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBwdXJwbGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bik6bm90KDpmb2N1cyk6aW52YWxpZCxcXG5mb3JtID4gaW5wdXQuaW52YWxpZDpub3QoOmZvY3VzKSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG59XFxuXFxuaW5wdXQ6dmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlYmJiYjtcXG4gICAgYm9yZGVyLXJhZGl1czogIDAgMCA0cHggNHB4O1xcbn1cXG5cXG4uZXJyb3IuYWN0aXZlIHtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMC40cmVtIDAuNXJlbTtcXG59XFxuXFxuLmdyaWRDb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDM1cHgpO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4udmFsaWRCb3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uaW52YWxpZEJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5zaGlwUGxhY2VkT25Cb3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblxcbi5jYXJyaWVyLFxcbi5iYXR0bGVzaGlwLFxcbi5jcnVpc2VyLFxcbi5kZXN0cm95ZXIsXFxuLnN1Ym1hcmluZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNhcnJpZXI6OmJlZm9yZSxcXG4uYmF0dGxlc2hpcDo6YmVmb3JlLFxcbi5jcnVpc2VyOjpiZWZvcmUsXFxuLmRlc3Ryb3llcjo6YmVmb3JlLFxcbi5zdWJtYXJpbmU6OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHRvcDogLTFweDtcXG4gICAgbGVmdDogLTFweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG9wYWNpdHk6IDAuNTU7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDE3LjVweCAxNy41cHg7XFxufVxcblxcbi5jYXJyaWVyOjpiZWZvcmUge1xcbiAgICB3aWR0aDogMTk1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTk1cHggMzVweDtcXG59XFxuXFxuLmJhdHRsZXNoaXA6OmJlZm9yZSB7XFxuICAgIHdpZHRoOiAxNTVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTVweCAzNXB4O1xcbn1cXG5cXG4uY3J1aXNlcjo6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDExNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExNXB4IDM1cHg7XFxufVxcblxcbi5zdWJtYXJpbmU6OmJlZm9yZSB7XFxuICAgIHdpZHRoOiAxMTVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTVweCAzNXB4O1xcbn1cXG5cXG4uZGVzdHJveWVyOjpiZWZvcmUge1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA3NXB4IDM1cHg7XFxufVxcblxcbiNzdGF0dXNCb3gge1xcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC41cmVtO1xcbn1cXG5cXG4jc3RhdHVzQm94ID4gcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNjAwbXMgZWFzZS1pbjtcXG59XFxuXFxuI3N0YXR1c0JveCA+IC5iYWNrd2FyZCB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbiN3YXRlckNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxufVxcblxcbi53YXRlciB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogMC40cmVtO1xcbn1cXG5cXG4jc2hpcEluZGljYXRvckNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnNoaXBTdGF0dXNJbmRpY2F0b3Ige1xcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG5oNCB7XFxuICAgIC8qdGhlIHNoaXBOYW1lIGluIHRoZSBzaGlwSW5kaWNhdG9yKi9cXG59XFxuXFxuLmluZGljYXRvckxpZ2h0IHtcXG4gICAgd2lkdGg6IDEuNzVyZW07XFxuICAgIGhlaWdodDogMC43NXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG59XFxuXFxuLnNoaXBBY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uc2hpcEhpdCB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBibGlua2luZztcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5raW5nIHtcXG4gICAgMCUge2JhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47fVxcbiAgICAyNSUge2JhY2tncm91bmQtY29sb3I6ICNlZTQ0NDQ7IH1cXG4gICAgNTAlIHtiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuOyB9XFxuICAgIDc1JSB7YmFja2dyb3VuZC1jb2xvcjogI2VlNDQ0NDsgfVxcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO31cXG59XFxuXFxuLnNoaXBMb3N0IHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlNDQ0NDtcXG59XFxuXFxuLnRhcmdldCB7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpO1xcbn1cXG5cXG4uYmFubmVyIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi53aW5uZXIge1xcbiAgICBmb250LXNpemU6IDZyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciA+IGRpdiB7XFxuICAgIHBhZGRpbmc6IDAuNGVtIDAuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIC5ib3hbZGF0YS1jb29yZGluYXRlcz0nMzInXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmJveFtkYXRhLWNvb3JkaW5hdGVzPSczMiddOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDExNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvc2hpcC5zdmcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxNy41cHggMTcuNXB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpO1xcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNr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QXNCO0lBQ3RCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5REFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSx5REFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleDogMCAxIGF1dG87XFxufVxcblxcbmgxIHtcXG4gICAgcGFkZGluZzogMC40ZW0gMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5oMS5maXJzdFBhZ2Uge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZsb2F0aW5nO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBmbG9hdGluZyB7XFxuICAgIDAlIHt0b3A6IC0yMHB4O31cXG4gICAgMTAlIHt0b3A6IDIwcHg7fVxcbiAgICAyMCUge3RvcDogLTE1cHg7fVxcbiAgICAzMCUge3RvcDogMTVweDt9XFxuICAgIDQwJSB7dG9wOiAtMTBweDt9XFxuICAgIDUwJSB7dG9wOiAxMHB4O31cXG4gICAgNjAlIHt0b3A6IC01cHg7fVxcbiAgICA3MCUge3RvcDogNXB4O31cXG4gICAgODAlIHt0b3A6IC0ycHg7fVxcbiAgICA5MCUge3RvcDogMXB4O31cXG4gICAgMTAwJSB7dG9wOiAwcHg7fVxcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleDogMiAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDAuNzVyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSA+IGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gICAgcGFkZGluZzogMC40cmVtIDAuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuZm9ybSA+IGlucHV0OnBsYWNlaG9sZGVyLXNob3duIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblxcbmZvcm0gPiBpbnB1dDpwbGFjZWhvbGRlci1zaG93bjpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufVxcblxcbmZvcm0gPiBpbnB1dDpmb2N1cyxcXG5mb3JtID4gaW5wdXQuaW52YWxpZDpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogcHVycGxlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG59XFxuXFxuZm9ybSA+IGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pOm5vdCg6Zm9jdXMpOmludmFsaWQsXFxuZm9ybSA+IGlucHV0LmludmFsaWQ6bm90KDpmb2N1cykge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XFxufVxcblxcbmlucHV0OnZhbGlkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWJiYmI7XFxuICAgIGJvcmRlci1yYWRpdXM6ICAwIDAgNHB4IDRweDtcXG59XFxuXFxuLmVycm9yLmFjdGl2ZSB7XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjVyZW07XFxufVxcblxcbi5ncmlkQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzNXB4KTtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnZhbGlkQm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLmludmFsaWRCb3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc2hpcFBsYWNlZE9uQm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbn1cXG5cXG4uY2FycmllcixcXG4uYmF0dGxlc2hpcCxcXG4uY3J1aXNlcixcXG4uZGVzdHJveWVyLFxcbi5zdWJtYXJpbmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jYXJyaWVyOjpiZWZvcmUsXFxuLmJhdHRsZXNoaXA6OmJlZm9yZSxcXG4uY3J1aXNlcjo6YmVmb3JlLFxcbi5kZXN0cm95ZXI6OmJlZm9yZSxcXG4uc3VibWFyaW5lOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB0b3A6IC0xcHg7XFxuICAgIGxlZnQ6IC0xcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBvcGFjaXR5OiAwLjU1O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxNy41cHggMTcuNXB4O1xcbn1cXG5cXG4uY2Fycmllcjo6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDE5NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2NhcnJpZXIuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxOTVweCAzNXB4O1xcbn1cXG5cXG4uYmF0dGxlc2hpcDo6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDE1NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2JhdHRsZXNoaXAuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTVweCAzNXB4O1xcbn1cXG5cXG4uY3J1aXNlcjo6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDExNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2NydWlzZXIuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTVweCAzNXB4O1xcbn1cXG5cXG4uc3VibWFyaW5lOjpiZWZvcmUge1xcbiAgICB3aWR0aDogMTE1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvc3VibWFyaW5lLnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTE1cHggMzVweDtcXG59XFxuXFxuLmRlc3Ryb3llcjo6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvZGVzdHJveWVyLnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzVweCAzNXB4O1xcbn1cXG5cXG4jc3RhdHVzQm94IHtcXG4gICAgcGFkZGluZzogMC40cmVtIDAuNXJlbTtcXG59XFxuXFxuI3N0YXR1c0JveCA+IHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDYwMG1zIGVhc2UtaW47XFxufVxcblxcbiNzdGF0dXNCb3ggPiAuYmFja3dhcmQge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jd2F0ZXJDb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbn1cXG5cXG4ud2F0ZXIge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDAuNHJlbTtcXG59XFxuXFxuI3NoaXBJbmRpY2F0b3JDb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5zaGlwU3RhdHVzSW5kaWNhdG9yIHtcXG4gICAgcGFkZGluZzogMC40cmVtIDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuaDQge1xcbiAgICAvKnRoZSBzaGlwTmFtZSBpbiB0aGUgc2hpcEluZGljYXRvciovXFxufVxcblxcbi5pbmRpY2F0b3JMaWdodCB7XFxuICAgIHdpZHRoOiAxLjc1cmVtO1xcbiAgICBoZWlnaHQ6IDAuNzVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxufVxcblxcbi5zaGlwQWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLnNoaXBIaXQge1xcbiAgICBhbmltYXRpb24tbmFtZTogYmxpbmtpbmc7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyBibGlua2luZyB7XFxuICAgIDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO31cXG4gICAgMjUlIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0NDQ0OyB9XFxuICAgIDUwJSB7YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjsgfVxcbiAgICA3NSUge2JhY2tncm91bmQtY29sb3I6ICNlZTQ0NDQ7IH1cXG4gICAgMTAwJSB7YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjt9XFxufVxcblxcbi5zaGlwTG9zdCB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTQ0NDQ7XFxufVxcblxcbi50YXJnZXQge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvcmVkX2RvdC5zdmcpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvd2hpdGVfZG90LnN2Zyk7XFxufVxcblxcbi5iYW5uZXIge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLndpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZmxleDogMCAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyID4gZGl2IHtcXG4gICAgcGFkZGluZzogMC40ZW0gMC41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogLmJveFtkYXRhLWNvb3JkaW5hdGVzPSczMiddIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uYm94W2RhdGEtY29vcmRpbmF0ZXM9JzMyJ106OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTE1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9zaGlwLnN2Zyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDE3LjVweCAxNy41cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZyk7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgbG9hZEZpcnN0UGFnZSBmcm9tIFwiLi9tb2R1bGVzL2h0bWxfZWxlbWVudHMvZmlyc3RfcGFnZVwiO1xuXG5jb25zb2xlLmxvZyhcImJhdHRsZXNoaXBcIik7XG5cbmxvYWRGaXJzdFBhZ2UoKTtcbiIsIi8qIGVzbGludCBpbXBvcnQvbm8tY3ljbGU6IFsyLCB7IG1heERlcHRoOiAxIH1dICovXG5cbmltcG9ydCBvZGluTG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9vZGluX2xvZ28uc3ZnXCI7XG5pbXBvcnQgZ2l0aHViTG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9naXRodWJfbG9nby5zdmdcIjtcblxuaW1wb3J0IHsgbWFrZUVsZW1lbnQsIG1ha2VCdXR0b24sIG1ha2VJbWcsIG1ha2VJbnB1dCB9IGZyb20gXCIuL2h0bWxfY3JlYXRlX2Z1bmN0aW9uc1wiO1xuaW1wb3J0IGxvYWRTZWNvbmRQYWdlIGZyb20gXCIuL3NlY29uZF9wYWdlXCI7XG5pbXBvcnQgeyBpbml0UGxheWVycyB9IGZyb20gXCIuLi9vYmplY3QvZ2FtZV9jb250cm9sXCI7XG5cbmNvbnN0IGZpcnN0UGFnZSA9IChmdW5jdGlvbiBpbml0Rmlyc3RQYWdlKCkge1xuXG4gICAgZnVuY3Rpb24gYm9keVJlbW92ZUNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IG1ha2VFbGVtZW50KHtlbGVtZW50VHlwZTogXCJoZWFkZXJcIn0pO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUhlYWRlckNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgICAgIGNvbnN0IGgxID0gbWFrZUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgxXCIsIHRleHRDb250ZW50OiBcIkJBVFRMRVNISVBcIiwgY2xhc3NOYW1lczogXCJmaXJzdFBhZ2VcIiwgdGl0bGU6IFwiQkFUVExFU0hJUFwifSk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZU1haW4oKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgY29uc3QgbWFpbiA9IG1ha2VFbGVtZW50KHtlbGVtZW50VHlwZTogXCJtYWluXCJ9KTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnB1dE5hbWVWYWxpZGF0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICAgICAgY29uc3QgaW5wdXROYW1lRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5lcnJvclwiKTtcblxuICAgICAgICBmdW5jdGlvbiBzaG93RXJyb3JOYW1lKCkge1xuICAgICAgICAgICAgaWYoaW5wdXROYW1lLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgICAgICAgICAgIGlucHV0TmFtZUVycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBlbnRlciB5b3VyIG5hbWVcIjtcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWVFcnJvci5jbGFzc05hbWUgPSBcImVycm9yIGFjdGl2ZVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGlucHV0TmFtZS52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWVFcnJvci50ZXh0Q29udGVudCA9IFwibmFtZSBzaG91bGQgc3RhcnQgd2l0aCBjYXBpdGFsIGxldHRlclwiO1xuICAgICAgICAgICAgICAgIGlucHV0TmFtZUVycm9yLmNsYXNzTmFtZSA9IFwiZXJyb3IgYWN0aXZlXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYoaW5wdXROYW1lLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgICAgICAgICAgICAgaW5wdXROYW1lRXJyb3IudGV4dENvbnRlbnQgPSBcIm5hbWUgc2hvdWxkIGJlIGF0bGVhc3QgMiBjaGFyYWN0ZXJzIGxvbmdcIjtcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWVFcnJvci5jbGFzTmFtZSA9IFwiZXJyb3IgYWN0aXZlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihpbnB1dE5hbWUudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgIGlucHV0TmFtZUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIGlucHV0TmFtZUVycm9yLmNsYXNzTmFtZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dFcnJvck5hbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZihpbnB1dE5hbWUuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIikpIHtcbiAgICAgICAgICAgIGlucHV0TmFtZS5yZW1vdmVBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VGb3JtKCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBtYWtlRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZm9ybVwifSk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gbWFrZUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIHRleHRDb250ZW50OiBcIkVudGVyIG5hbWVcIiwgdGl0bGU6IFwiZW50ZXIgbmFtZSBsYWJlbFwifSk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIik7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gbWFrZUlucHV0KHt0eXBlOiBcInRleHRcIiwgaWQ6IFwibmFtZVwiLCBuYW1lOiBcIm5hbWVcIiwgcGF0dGVybjogXCJeW0EtWl1bQS1aYS16XSpcIiwgbWluTGVuZ3RoOiAyLCBtYXhMZW5ndGg6IDE1LCBwbGFjZWhvbGRlcjogXCJFbnRlciB5b3VyIG5hbWVcIiwgcmVxdWlyZWQ6IHRydWV9KTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGlucHV0TmFtZVZhbGlkYXRpb24pXG4gICAgICAgIGNvbnN0IHNwYW4gPSBtYWtlRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwic3BhblwiLCBjbGFzc05hbWVzOiBcImVycm9yXCJ9KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0QnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgICAgICBpZighaW5wdXROYW1lLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgICBpbnB1dE5hbWVWYWxpZGF0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJOYW1lID0gaW5wdXROYW1lLnZhbHVlO1xuICAgICAgICAgICAgaW5pdFBsYXllcnMocGxheWVyTmFtZSk7XG4gICAgICAgICAgICBsb2FkU2Vjb25kUGFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlU3RhcnRHYW1lQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gbWFrZUJ1dHRvbih7IHRleHRDb250ZW50OiBcIlN0YXJ0IEdhbWVcIiwgZXZlbnQ6IFwiY2xpY2tcIiwgdGl0bGU6IFwic3RhcnQgZ2FtZSBidXR0b25cIiwgY2FsbEJhY2tGdW5jdGlvbjogW3N0YXJ0QnV0dG9uQ2xpY2tlZF0gfSk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VGb290ZXIoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gbWFrZUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZvb3RlclwifSk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTsgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9vdGVyQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcbiAgICAgICAgY29uc3QgZGl2ID0gbWFrZUVsZW1lbnQoe3RleHRDb250ZW50OiBcIkNyZWF0ZWQgdG8gY29tcGxldGUgdGhlIGFzc2lnbm1lbnQgQkFUVExFU0hJUCBvZiBUaGUgT2RpbiBQcm9qZWN0LlwifSk7XG5cbiAgICAgICAgY29uc3QgbGlua1RvT2RpblByb2plY3QgPSBtYWtlRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYVwifSk7XG4gICAgICAgIGxpbmtUb09kaW5Qcm9qZWN0LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb21cIik7XG4gICAgICAgIGNvbnN0IG9kaW5Mb2dvSW1nID0gbWFrZUltZyh7IGlkOiBcIm9kaW5cIiwgc3JjOiBvZGluTG9nbywgdGl0bGU6IFwiVGhlIE9kaW4gUHJvamVjdCBMb2dvIGFuZCBMaW5rXCJ9KTtcbiAgICAgICAgbGlua1RvT2RpblByb2plY3QuYXBwZW5kQ2hpbGQob2RpbkxvZ29JbWcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbGlua1RvU291cmNlQ29kZSA9IG1ha2VFbGVtZW50KHsgZWxlbWVudFR5cGU6IFwiYVwifSk7XG4gICAgICAgIGxpbmtUb1NvdXJjZUNvZGUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS80Qy03NS02My02Qi03OS9CYXR0bGVzaGlwXCIpO1xuICAgICAgICBjb25zdCBnaXRIdWJMb2dvID0gbWFrZUltZyh7IGlkOiBcImdpdGh1YlwiLCBzcmM6IGdpdGh1YkxvZ28sIHRpdGxlOiBcIlNvdXJjZSBDb2RlIExpbmtcIn0pO1xuICAgICAgICBsaW5rVG9Tb3VyY2VDb2RlLmFwcGVuZENoaWxkKGdpdEh1YkxvZ28pO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaW5rVG9PZGluUHJvamVjdCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaW5rVG9Tb3VyY2VDb2RlKTtcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZEZpcnN0UGFnZSgpIHtcbiAgICAgICAgYm9keVJlbW92ZUNvbnRlbnQoKTtcbiAgICAgICAgbWFrZUhlYWRlcigpO1xuICAgICAgICBtYWtlSGVhZGVyQ29udGVudCgpO1xuICAgICAgICBtYWtlTWFpbigpO1xuICAgICAgICBtYWtlRm9ybSgpO1xuICAgICAgICBjcmVhdGVTdGFydEdhbWVCdXR0b24oKTtcbiAgICAgICAgbWFrZUZvb3RlcigpO1xuICAgICAgICBjcmVhdGVGb290ZXJDb250ZW50KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZEZpcnN0UGFnZSxcbiAgICB9XG5cbn0pKCk7XG5cbmNvbnN0IHtsb2FkRmlyc3RQYWdlfSA9IGZpcnN0UGFnZTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEZpcnN0UGFnZTsiLCIvKiBlc2xpbnQgaW1wb3J0L25vLWN5Y2xlOiBbMiwgeyBtYXhEZXB0aDogMSB9XSAqL1xuXG5pbXBvcnQgeyBtYWtlQnV0dG9uLCBtYWtlRWxlbWVudCB9IGZyb20gXCIuL2h0bWxfY3JlYXRlX2Z1bmN0aW9uc1wiO1xuaW1wb3J0IGxvYWRGaXJzdFBhZ2UgZnJvbSBcIi4vZmlyc3RfcGFnZVwiO1xuXG5jb25zdCBmb3VydGhQYWdlID0gKGZ1bmN0aW9uIGluaXRGb3VydGhQYWdlKCkge1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFpbkNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICAgICAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlVGhlV2lubmVySXMod2lubmVyTmFtZSkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICAgIGNvbnN0IGgyID0gbWFrZUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgyXCIsIGNsYXNzTmFtZXM6IFwiYmFubmVyXCIsIHRleHRDb250ZW50OiBcIlRoZSBXaW5uZXIgSXM6IFwiLCB0aXRsZTogXCJUaGUgV2lubmVyIElzOiBcIn0pO1xuICAgICAgICBjb25zdCBoMyA9IG1ha2VFbGVtZW50KHtlbGVtZW50VHlwZTogXCJoMlwiLCBjbGFzc05hbWVzOiBcIndpbm5lclwiLCB0ZXh0Q29udGVudDogd2lubmVyTmFtZSwgdGl0bGU6IGB3aW5uZXIgbmFtZSBpcyAke3dpbm5lck5hbWV9YH0pO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGgyKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChoMyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheUFnYWluQnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgICAgbG9hZEZpcnN0UGFnZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VTdGFydEdhbWVBZ2FpbkJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgICBjb25zdCBzdGFydEdhbWVBZ2FpbkJ1dHRvbiA9IG1ha2VCdXR0b24oe3RleHRDb250ZW50OiBcIlBsYXkgQWdhaW5cIiwgdGl0bGU6IFwicGxheSBhZ2FpbiBidXR0b25cIiwgZXZlbnQ6IFwiY2xpY2tcIiwgY2FsbEJhY2tGdW5jdGlvbjogW3BsYXlBZ2FpbkJ1dHRvbkNsaWNrZWRdfSk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc3RhcnRHYW1lQWdhaW5CdXR0b24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRGb3VydGhQYWdlKHdpbm5lck5hbWUpIHtcbiAgICAgICAgcmVtb3ZlTWFpbkNvbnRlbnQoKTtcbiAgICAgICAgbWFrZVRoZVdpbm5lcklzKHdpbm5lck5hbWUpO1xuICAgICAgICBtYWtlU3RhcnRHYW1lQWdhaW5CdXR0b24oKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkRm91cnRoUGFnZSxcbiAgICB9XG59KSgpO1xuXG5jb25zdCB7bG9hZEZvdXJ0aFBhZ2V9ID0gZm91cnRoUGFnZTtcbmV4cG9ydCBkZWZhdWx0IGxvYWRGb3VydGhQYWdlOyIsImZ1bmN0aW9uIG1ha2VFbGVtZW50KHtlbGVtZW50VHlwZSA9IFwiZGl2XCIsIGlkLCBjbGFzc05hbWVzLCB0ZXh0Q29udGVudCwgdGl0bGUsIGRhdGFBdHRyaWJ1dGVOYW1lLCBkYXRhQXR0cmlidXRlVmFsdWUsIGV2ZW50cywgY2FsbEJhY2tGdW5jdGlvbnN9KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbWVudFR5cGV9YCk7XG4gICAgaWYoaWQpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgfVxuICAgIGlmKGNsYXNzTmFtZXMpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5zcGxpdChcIiBcIikuZm9yRWFjaChlbGVDbGFzcyA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlQ2xhc3MpKTtcbiAgICB9XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50IHx8IFwiXCI7XG4gICAgaWYodGl0bGUpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCB0aXRsZSk7XG4gICAgfVxuICAgIGlmKGRhdGFBdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLSR7ZGF0YUF0dHJpYnV0ZU5hbWV9YCwgXCJcIik7XG4gICAgfVxuICAgIGlmKGRhdGFBdHRyaWJ1dGVWYWx1ZSAmJiBkYXRhQXR0cmlidXRlTmFtZSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgZGF0YS0ke2RhdGFBdHRyaWJ1dGVOYW1lfWAsIGRhdGFBdHRyaWJ1dGVWYWx1ZSk7XG4gICAgfVxuICAgIGlmKEFycmF5LmlzQXJyYXkoZXZlbnRzKSAmJiBBcnJheS5pc0FycmF5KGNhbGxCYWNrRnVuY3Rpb25zKSAmJiBldmVudHMubGVuZ3RoID09PSBjYWxsQmFja0Z1bmN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgZXZlbnRzLmZvckVhY2goKGV2ZW50LCBpKSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxCYWNrRnVuY3Rpb25zW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBtYWtlQnV0dG9uKHtpZCwgY2xhc3NOYW1lcywgdGV4dENvbnRlbnQsIHRpdGxlLCBkYXRhQXR0cmlidXRlTmFtZSwgZGF0YUF0dHJpYnV0ZVZhbHVlLCBldmVudCwgY2FsbEJhY2tGdW5jdGlvbn0pIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIGlmKGlkKSB7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgfVxuICAgIGlmKGNsYXNzTmFtZXMpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5zcGxpdChcIiBcIikuZm9yRWFjaChlbGVDbGFzcyA9PiBidXR0b24uY2xhc3NMaXN0LmFkZChlbGVDbGFzcykpO1xuICAgIH1cbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBgJHt0ZXh0Q29udGVudH1gIHx8IFwiXCI7XG4gICAgaWYodGl0bGUpIHtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIHRpdGxlKTtcbiAgICB9XG4gICAgaWYoZGF0YUF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShgZGF0YS0ke2RhdGFBdHRyaWJ1dGVOYW1lfWAsIFwiXCIpO1xuICAgIH1cbiAgICBpZihkYXRhQXR0cmlidXRlVmFsdWUgJiYgZGF0YUF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShgZGF0YS0ke2RhdGFBdHRyaWJ1dGVOYW1lfWAsIGRhdGFBdHRyaWJ1dGVWYWx1ZSk7XG4gICAgfVxuICAgIGlmKGNhbGxCYWNrRnVuY3Rpb24gJiYgZXZlbnQpIHtcbiAgICAgICAgY2FsbEJhY2tGdW5jdGlvbi5mb3JFYWNoKGVsZUZ1bmN0aW9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBlbGVGdW5jdGlvbikpO1xuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBtYWtlSW1nKHtpZCwgc3JjLCB0aXRsZX0pIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpZihpZCkge1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgIH1cbiAgICBpZihzcmMpIHtcbiAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICB9XG4gICAgaWYodGl0bGUpIHtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIHRpdGxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGltZztcbn1cblxuZnVuY3Rpb24gbWFrZUdyaWQoY2FsbEJhY2tGdW5jdGlvbnMpIHtcbiAgICBjb25zdCBncmlkQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoe2NsYXNzTmFtZXM6IFwiZ3JpZENvbnRhaW5lclwiIH0pO1xuXG4gICAgLy8gZ3JpZENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgLy8gZ3JpZENvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gXCJyZXBlYXQoMTAsIDMwcHgpXCI7XG4gICAgLy8gZ3JpZENvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJyZXBlYXQoMTAsIDMwcHgpXCI7XG4gICAgLy8gZ3JpZENvbnRhaW5lci5zdHlsZS5nYXAgPSBcIjVweFwiO1xuXG4gICAgZm9yKGxldCBpPTA7IGk8MTA7IGkgKz0gMSkge1xuICAgICAgICBmb3IobGV0IGo9MDsgajwxMDsgaiArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBtYWtlRWxlbWVudCh7Y2xhc3NOYW1lczogXCJib3hcIiwgdGl0bGU6IFwiZW1wdHlCb3hcIiwgZGF0YUF0dHJpYnV0ZU5hbWU6IFwiY29vcmRpbmF0ZXNcIiwgZGF0YUF0dHJpYnV0ZVZhbHVlOiBgJHtpfSR7an1gLCBldmVudHM6IFtcIm1vdXNlb3ZlclwiLCBcIm1vdXNlb3V0XCIsIFwiY2xpY2tcIl0sIGNhbGxCYWNrRnVuY3Rpb25zfSk7XG4gICAgICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ3JpZENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gbWFrZUlucHV0KHt0eXBlLCBpZCwgbmFtZSwgcGF0dGVybiwgbWluTGVuZ3RoLCBtYXhMZW5ndGgsIHBsYWNlaG9sZGVyLCByZXF1aXJlZH0pIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpZih0eXBlKSB7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XG4gICAgfVxuICAgIGlmKGlkKSB7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICB9XG4gICAgaWYobmFtZSkge1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xuICAgIH1cbiAgICBpZihwYXR0ZXJuKSB7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInBhdHRlcm5cIiwgcGF0dGVybik7XG4gICAgfVxuICAgIGlmKG1pbkxlbmd0aCkge1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5sZW5ndGhcIiwgYCR7TnVtYmVyKG1pbkxlbmd0aCl9YCk7XG4gICAgfVxuICAgIGlmKG1heExlbmd0aCkge1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgYCR7TnVtYmVyKG1heExlbmd0aCl9YCk7XG4gICAgfVxuICAgIGlmKHBsYWNlaG9sZGVyKSB7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHBsYWNlaG9sZGVyKTtcbiAgICB9XG4gICAgaWYocmVxdWlyZWQpIHtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgfVxuICAgIHJldHVybiBpbnB1dFxufVxuXG5leHBvcnQgeyBtYWtlRWxlbWVudCwgbWFrZUJ1dHRvbiwgbWFrZUltZywgbWFrZUdyaWQsIG1ha2VJbnB1dCB9IiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzIsIHsgbWF4RGVwdGg6IDEgfV0gKi9cblxuaW1wb3J0IHsgcGxhY2VVc2VyU2hpcHMsIHBsYWNlQ29tcHV0ZXJTaGlwcyB9IGZyb20gXCIuLi9vYmplY3QvZ2FtZV9jb250cm9sXCI7XG5pbXBvcnQgeyBtYWtlQnV0dG9uLCBtYWtlRWxlbWVudCwgbWFrZUdyaWR9IGZyb20gXCIuL2h0bWxfY3JlYXRlX2Z1bmN0aW9uc1wiO1xuaW1wb3J0IGxvYWRUaGlyZFBhZ2UgIGZyb20gXCIuL3RoaXJkX3BhZ2VcIjtcblxuY29uc3Qgc2Vjb25kUGFnZSA9IChmdW5jdGlvbiBpbml0U2Vjb25kUGFnZSgpIHtcblxuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gKGZ1bmN0aW9uIGluaXRTaGlwKCkge1xuICAgICAgICBjb25zdCBzaGlwcyA9IFtdO1xuICAgICAgICBsZXQgbmFtZTsgbGV0IGxlbjtcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU2hpcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBzaGlwcy5wb3AoKTtcbiAgICAgICAgICAgIGlmKCFzaGlwKSByZXR1cm4gdHJ1ZTsgLy8gdG8gc2hvdyB0aGF0IGFsbCB0aGUgc2hpcHMgYXJlIHBsYWNlZCBhbmQgbm93IHdlIGNhbiBzdGFydCB0aGUgZ2FtZVxuICAgICAgICAgICAgbmFtZSA9IHNoaXAubmFtZTtcbiAgICAgICAgICAgIGxlbiA9IHNoaXAubGVuO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGluaXRTaGlwc0FycmF5KCkge1xuICAgICAgICAgICAgaWYoc2hpcHMubGVuZ3RoID09PSAwKSBzaGlwcy5wdXNoKFxuICAgICAgICAgICAgICAgIHtuYW1lOiBcImRlc3Ryb3llclwiLCBsZW46IDJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiBcImNydWlzZXJcIiwgbGVuOiAzfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJzdWJtYXJpbmVcIiwgbGVuOiAzfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJiYXR0bGVzaGlwXCIsIGxlbjogNH0sXG4gICAgICAgICAgICAgICAge25hbWU6IFwiY2FycmllclwiLCBsZW46IDV9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldE5hbWUoKSB7IHJldHVybiBuYW1lOyB9XG4gICAgICAgIGZ1bmN0aW9uIGdlTGVuZ3RoKCkgeyByZXR1cm4gbGVuOyB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbml0U2hpcHNBcnJheSxcbiAgICAgICAgICAgIHVwZGF0ZVNoaXAsXG4gICAgICAgICAgICBnZXROYW1lLFxuICAgICAgICAgICAgZ2VMZW5ndGgsXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NGcm9tSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMS5maXJzdFBhZ2VcIik7XG4gICAgICAgIGgxLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXJzdFBhZ2VcIilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxDb250ZW50TWFpbigpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgICBtYWluLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VTaGlwVG9CZVBsYWNlZEhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IGBDaGllZiwgUGxhY2UgWW91ciAkeyAgY3VycmVudFNoaXAuZ2V0TmFtZSgpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICB9JHsgY3VycmVudFNoaXAuZ2V0TmFtZSgpLnN1YnN0cigxKSB9YDtcbiAgICAgICAgY29uc3QgaDIgPSBtYWtlRWxlbWVudCh7IGVsZW1lbnRUeXBlOiBcImgyXCIsIHRpdGxlOiB0ZXh0Q29udGVudCwgdGV4dENvbnRlbnR9KTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2hpcFRvQmVQbGFjZUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIik7XG4gICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gYENoaWVmLCBQbGFjZSBZb3VyICR7ICBjdXJyZW50U2hpcC5nZXROYW1lKCkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgIH0keyBjdXJyZW50U2hpcC5nZXROYW1lKCkuc3Vic3RyKDEpIH1gO1xuICAgICAgICBoMi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCB0ZXh0Q29udGVudCk7XG4gICAgICAgIGgyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXhpc0J1dHRvbkNsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBjdXJyZW50QXhpcyA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWN1cnJlbnRBeGlzXCIpO1xuICAgICAgICBpZihjdXJyZW50QXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxhY2UgVmVzc2VsIGluIFggQXhpc1wiO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiUGxhY2UgVmVzc2VsIGluIFggQXhpc1wiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWN1cnJlbnRBeGlzXCIsIFwieVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50QXhpcyA9PT0gXCJ5XCIpe1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGFjZSBWZXNzZWwgaW4gWSBBeGlzXCI7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJQbGFjZSBWZXNzZWwgaW4gWSBBeGlzXCIpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtY3VycmVudEF4aXNcIiwgXCJ4XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUF4aXNDaG9pY2VCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICAgICAgY29uc3QgYXhpc0J1dHRvbiA9IG1ha2VCdXR0b24oeyB0ZXh0Q29udGVudDogXCJQbGFjZSBWZXNzZWwgaW4gWSBBeGlzXCIsIHRpdGxlOiBcIlBsYWNlIFZlc3NlbCBpbiBZIEF4aXNcIiwgZGF0YUF0dHJpYnV0ZU5hbWU6IFwiY3VycmVudEF4aXNcIiwgZGF0YUF0dHJpYnV0ZVZhbHVlOiBcInhcIiwgZXZlbnQ6IFwiY2xpY2tcIiwgY2FsbEJhY2tGdW5jdGlvbjogW2F4aXNCdXR0b25DbGlja2VkXSB9KTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChheGlzQnV0dG9uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhjdXJyZW50Qm94Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudENvb3JkaW5hdGUgPSBbIE51bWJlcihjdXJyZW50Qm94Q29vcmRpbmF0ZXMuY2hhckF0KDApKSwgTnVtYmVyKGN1cnJlbnRCb3hDb29yZGluYXRlcy5jaGFyQXQoMSkpIF1cbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbIGN1cnJlbnRDb29yZGluYXRlIF07XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBeGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbltkYXRhLWN1cnJlbnRBeGlzXVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWN1cnJlbnRBeGlzXCIpO1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gY3VycmVudFNoaXAuZ2VMZW5ndGgoKTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8c2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZihjdXJyZW50QXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKCBbIGN1cnJlbnRDb29yZGluYXRlWzBdLCBjdXJyZW50Q29vcmRpbmF0ZVsxXSArIGkgXSApO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGN1cnJlbnRBeGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goIFsgY3VycmVudENvb3JkaW5hdGVbMF0gKyBpLCBjdXJyZW50Q29vcmRpbmF0ZVsxXSBdIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZUJveGVzQ2xhc3MoY2xhc3NOYW1lLCBjdXJyZW50Qm94Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRDb29yZGluYXRlcyhjdXJyZW50Qm94Q29vcmRpbmF0ZXMpO1xuICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhQ29vcmRpbmF0ZXMgPSBgJHtjb29yZHNbMF19JHtjb29yZHNbMV19YDtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvb3JkaW5hdGVzID0gXCIke2RhdGFDb29yZGluYXRlc31cIl1gKTtcbiAgICAgICAgICAgIGJveC5jbGFzc05hbWUgPSBgYm94ICR7Y2xhc3NOYW1lfWA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQ3VycmVudEJveFZhbGlkRm9yU2hpcCh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0RGF0YUNvb3JkaW5hdGVzID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZXNcIik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBeGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbltkYXRhLWN1cnJlbnRBeGlzXVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWN1cnJlbnRBeGlzXCIpO1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gY3VycmVudFNoaXAuZ2VMZW5ndGgoKTtcbiAgICAgICAgY29uc3QgaXNFbm91Z2hOdW1iZXJPZkJveGVzID0gKGN1cnJlbnRBeGlzID09PSBcInhcIiAmJiAxMCAtIE51bWJlcih0YXJnZXREYXRhQ29vcmRpbmF0ZXMuY2hhckF0KDEpKSA+PSBzaGlwTGVuZ3RoKSB8fCAoY3VycmVudEF4aXMgPT09IFwieVwiICYmIDEwIC0gTnVtYmVyKHRhcmdldERhdGFDb29yZGluYXRlcy5jaGFyQXQoMCkpID49IHNoaXBMZW5ndGgpIDtcbiAgICAgICAgaWYoIWlzRW5vdWdoTnVtYmVyT2ZCb3hlcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXModGFyZ2V0RGF0YUNvb3JkaW5hdGVzKTsgICAgICAgXG4gICAgICAgIGNvbnN0IGJveGVzSGF2ZVNoaXBQbGFjZWQgPSBjb29yZGluYXRlcy5ldmVyeSggY29vcmRzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFDb29yZGluYXRlcyA9IGAke2Nvb3Jkc1swXX0ke2Nvb3Jkc1sxXX1gO1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29vcmRpbmF0ZXMgPSBcIiR7ZGF0YUNvb3JkaW5hdGVzfVwiXWApO1xuICAgICAgICAgICAgaWYoYm94LmdldEF0dHJpYnV0ZShcImRhdGEtc2hpcFwiKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJveGVzSGF2ZVNoaXBQbGFjZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQ3VycmVudFNoaXBJbWFnZShjbGlja2VkQm94KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCb3ggPSBjbGlja2VkQm94O1xuICAgICAgICBjb25zdCBjdXJyZW50QXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGF0YS1jdXJyZW50QXhpc11cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW50QXhpc1wiKTtcbiAgICAgICAgY2xpY2tlZEJveC5jbGFzc0xpc3QuYWRkKGAke2N1cnJlbnRTaGlwLmdldE5hbWUoKX1gKTtcbiAgICAgICAgaWYoY3VycmVudEF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICBjdXJyZW50Qm94LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWig5MGRlZylcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdXNlT3ZlckJveChldmVudCkge1xuICAgICAgICBjb25zdCBib3ggPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCb3hDb29yZGluYXRlcyA9IGJveC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkaW5hdGVzXCIpO1xuICAgICAgICBpZihpc0N1cnJlbnRCb3hWYWxpZEZvclNoaXAoYm94KSkge1xuICAgICAgICAgICAgY2hhbmdlQm94ZXNDbGFzcyhcInZhbGlkQm94XCIsIGN1cnJlbnRCb3hDb29yZGluYXRlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImludmFsaWRCb3hcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3VzZU91dEJveChldmVudCkge1xuICAgICAgICBjb25zdCBib3ggPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCb3hDb29yZGluYXRlcyA9IGJveC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkaW5hdGVzXCIpO1xuICAgICAgICBpZihpc0N1cnJlbnRCb3hWYWxpZEZvclNoaXAoYm94KSkge1xuICAgICAgICAgICAgY2hhbmdlQm94ZXNDbGFzcyhcIlwiLCBjdXJyZW50Qm94Q29vcmRpbmF0ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkQm94XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYm94Q2xpY2tlZChldmVudCkge1xuICAgICAgICBjb25zdCBjbGlja2VkQm94ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBjdXJyZW50Qm94Q29vcmRpbmF0ZXMgPSBjbGlja2VkQm94LmdldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZXNcIik7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lckZvcm1Cb3hlcyhjb29yZGluYXRlcykge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCggY29vcmRzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhQ29vcmRpbmF0ZXMgPSBgJHtjb29yZHNbMF19JHtjb29yZHNbMV19YDtcbiAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb29yZGluYXRlcyA9IFwiJHtkYXRhQ29vcmRpbmF0ZXN9XCJdYCk7XG4gICAgICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZShcImRhdGEtc2hpcFwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBtb3VzZU92ZXJCb3gpO1xuICAgICAgICAgICAgICAgIGJveC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbW91c2VPdXRCb3gpO1xuICAgICAgICAgICAgICAgIGJveC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm94Q2xpY2tlZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZVRpdGxlQm94ZXMoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goIGNvb3JkcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUNvb3JkaW5hdGVzID0gYCR7Y29vcmRzWzBdfSR7Y29vcmRzWzFdfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29vcmRpbmF0ZXMgPSBcIiR7ZGF0YUNvb3JkaW5hdGVzfVwiXWApO1xuICAgICAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBjdXJyZW50U2hpcC5nZXROYW1lKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc0N1cnJlbnRCb3hWYWxpZEZvclNoaXAoY2xpY2tlZEJveCkpIHtcbiAgICAgICAgICAgIGNoYW5nZUJveGVzQ2xhc3MoXCJzaGlwUGxhY2VkT25Cb3hcIiwgY3VycmVudEJveENvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIGFkZEN1cnJlbnRTaGlwSW1hZ2UoY2xpY2tlZEJveCk7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzKGN1cnJlbnRCb3hDb29yZGluYXRlcyk7XG4gICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyRm9ybUJveGVzKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIGNoYW5nZVRpdGxlQm94ZXMoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgcGxhY2VVc2VyU2hpcHMoY3VycmVudFNoaXAuZ2V0TmFtZSgpLCBjb29yZGluYXRlcyk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNoaXAudXBkYXRlU2hpcCgpKSB7XG4gICAgICAgICAgICAgICAgbG9hZFRoaXJkUGFnZSgpO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNoaXBUb0JlUGxhY2VIZWFkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VHcmlkQ29udGFpbmVyKCkgeyAgLy8gbWFraW5nIGdpcmQgdG8gcGxhY2UgdGhlIHNoaXBzXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICAgICAgY29uc3QgZ3JpZCA9IG1ha2VHcmlkKFttb3VzZU92ZXJCb3gsIG1vdXNlT3V0Qm94LCBib3hDbGlja2VkXSk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFNlY29uZFBhZ2UoKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzRnJvbUhlYWRlcigpO1xuICAgICAgICByZW1vdmVBbGxDb250ZW50TWFpbigpO1xuICAgICAgICBjdXJyZW50U2hpcC5pbml0U2hpcHNBcnJheSgpO1xuICAgICAgICBjdXJyZW50U2hpcC51cGRhdGVTaGlwKCk7XG4gICAgICAgIG1ha2VTaGlwVG9CZVBsYWNlZEhlYWRlcigpO1xuICAgICAgICBtYWtlQXhpc0Nob2ljZUJ1dHRvbigpO1xuICAgICAgICBtYWtlR3JpZENvbnRhaW5lcigpO1xuICAgICAgICBtYWtlR3JpZCgpO1xuICAgICAgICBwbGFjZUNvbXB1dGVyU2hpcHMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkU2Vjb25kUGFnZSxcbiAgICB9XG5cbn0pKCk7XG5cbmNvbnN0IHtsb2FkU2Vjb25kUGFnZX0gPSBzZWNvbmRQYWdlO1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkU2Vjb25kUGFnZTsiLCIvKiBlc2xpbnQgaW1wb3J0L25vLWN5Y2xlOiBbMiwgeyBtYXhEZXB0aDogMSB9XSAqL1xuXG5pbXBvcnQgeyBtYWtlRWxlbWVudCwgbWFrZUdyaWQgfSBmcm9tIFwiLi9odG1sX2NyZWF0ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IHBsYXllckNvbXB1dGVyTWFrZXNNb3ZlLCBwbGF5ZXJVc2VyTWFrZXNNb3ZlIH0gZnJvbSBcIi4uL29iamVjdC9nYW1lX2NvbnRyb2xcIjtcbmltcG9ydCBsb2FkRm91cnRoUGFnZSBmcm9tIFwiLi9mb3VydGhfcGFnZVwiO1xuXG5jb25zdCB0aGlyZFBhZ2UgPSAoZnVuY3Rpb24gaW5pdFRoaXJkUGFnZSgpIHtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbENvbnRlbnRNYWluKCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICAgIG1haW4ucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVN0YXR1c0JveCgpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgICBjb25zdCBzdGF0dXNCb3ggPSBtYWtlRWxlbWVudCh7aWQ6XCJzdGF0dXNCb3hcIn0pO1xuICAgICAgICBjb25zdCBwID0gbWFrZUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcInBcIiwgdGV4dENvbnRlbnQ6IFwiQXdhaXRpbmcgeW91ciBvcmRlciBDaGllZiFcIiwgdGl0bGU6IFwiQXdhaXRpbmcgeW91ciBvcmRlciBDaGllZiFcIn0pO1xuICAgICAgICBjb25zdCBwYmFja3dhcmQgPSBtYWtlRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwicFwiLCBjbGFzc05hbWVzOiBcImJhY2t3YXJkXCJ9KTtcbiAgICAgICAgc3RhdHVzQm94LmFwcGVuZENoaWxkKHBiYWNrd2FyZCk7XG4gICAgICAgIHN0YXR1c0JveC5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChzdGF0dXNCb3gpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VTaGlwSW5kaWNhdG9yQ29uYXRpbmVyKCkge1xuICAgICAgICBjb25zdCBzaGlwSW5kaWNhdG9yQ29uYXRpbmVyID0gbWFrZUVsZW1lbnQoe2lkOiBcInNoaXBJbmRpY2F0b3JDb250YWluZXJcIn0pO1xuXG4gICAgICAgIGNvbnN0IHNoaXBzID0gW1wiY2FycmllclwiLCBcImJhdHRsZXNoaXBcIiwgXCJjcnVpc2VyXCIsIFwic3VibWFyaW5lXCIsIFwiZGVzdHJveWVyXCJdO1xuXG4gICAgICAgIHNoaXBzLmZvckVhY2goIHNoaXAgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hpcEluZGljYXRvciAgPSBtYWtlRWxlbWVudCh7Y2xhc3NOYW1lczogXCJzaGlwU3RhdHVzSW5kaWNhdG9yXCIsIHRpdGxlOiBgJHtzaGlwfSBpcyBhY3RpdmVgLCBkYXRhQXR0cmlidXRlTmFtZTogXCJzaGlwTmFtZVwiLCBkYXRhQXR0cmlidXRlVmFsdWU6IHNoaXB9KTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBOYW1lID0gbWFrZUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImg0XCIsIHRleHRDb250ZW50OiBzaGlwfSlcbiAgICAgICAgICAgIGNvbnN0IGluZGljYXRvckxpZ2h0ID0gbWFrZUVsZW1lbnQoe2NsYXNzTmFtZXM6IFwiaW5kaWNhdG9yTGlnaHQgc2hpcEFjdGl2ZVwifSk7XG4gICAgICAgICAgICBzaGlwSW5kaWNhdG9yLmFwcGVuZENoaWxkKHNoaXBOYW1lKTtcbiAgICAgICAgICAgIHNoaXBJbmRpY2F0b3IuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yTGlnaHQpO1xuICAgICAgICAgICAgc2hpcEluZGljYXRvckNvbmF0aW5lci5hcHBlbmRDaGlsZChzaGlwSW5kaWNhdG9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzaGlwSW5kaWNhdG9yQ29uYXRpbmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VXYXRlckNvbnRhaW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICAgICAgY29uc3Qgd2F0ZXJDb250YWluZXIgPSBtYWtlRWxlbWVudCh7aWQ6IFwid2F0ZXJDb250YWluZXJcIn0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZnJpZW5kbHlXYXRlciA9IG1ha2VFbGVtZW50KHtpZDogXCJmcmllbmRseVdhdGVyXCIsIGNsYXNzTmFtZXM6IFwid2F0ZXJcIn0pO1xuICAgICAgICBjb25zdCBlbmVteVdhdGVyID0gbWFrZUVsZW1lbnQoe2lkOiBcImVuZW15V2F0ZXJcIiwgY2xhc3NOYW1lczogXCJ3YXRlclwifSk7XG5cbiAgICAgICAgd2F0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJpZW5kbHlXYXRlcik7XG4gICAgICAgIHdhdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15V2F0ZXIpO1xuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQod2F0ZXJDb250YWluZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VGcmllbmRseVdhdGVyKGZyaWVuZGx5V2F0ZXJHaXJkKSB7XG4gICAgICAgIGNvbnN0IGZyaWVuZGx5V2F0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZGx5V2F0ZXJcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gbWFrZUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgyXCIsIHRleHRDb250ZW50OiBcIkZyaWVuZGx5IFdhdGVyc1wiLCB0aXRsZTogXCJGcmllbmRseSBXYXRlcnNcIn0pO1xuICAgICAgICBmcmllbmRseVdhdGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgY29uc3QgZnJpZW5kbHlXYXRlclNoaXBJbmRpY2F0b3JDb250YWluZXIgPSBtYWtlU2hpcEluZGljYXRvckNvbmF0aW5lcigpO1xuICAgICAgICBmcmllbmRseVdhdGVyLmFwcGVuZENoaWxkKGZyaWVuZGx5V2F0ZXJTaGlwSW5kaWNhdG9yQ29udGFpbmVyKTtcbiAgICAgICAgZnJpZW5kbHlXYXRlci5hcHBlbmRDaGlsZChmcmllbmRseVdhdGVyR2lyZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW91c2VPdmVyKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGJveCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXJnZXRcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW91c2VPdXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgYm94ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInRhcmdldFwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVGcmllbmRseVdhdGVyKHtjb29yZCwgaXNQbGF5ZXJIaXR9KSB7XG4gICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNmcmllbmRseVdhdGVyPi5ncmlkQ29udGFpbmVyPmRpdltkYXRhLWNvb3JkaW5hdGVzID0gXCIke2Nvb3JkWzBdfSR7Y29vcmRbMV19XCJdYCk7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGlzUGxheWVySGl0ID8gXCJoaXRcIiA6IFwibWlzc1wiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVFbmVteVdhdGVyKHtjb29yZCwgaXNQbGF5ZXJIaXR9KSB7XG4gICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlbmVteVdhdGVyPi5ncmlkQ29udGFpbmVyPmRpdltkYXRhLWNvb3JkaW5hdGVzID0gXCIke2Nvb3JkWzBdfSR7Y29vcmRbMV19XCJdYCk7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGlzUGxheWVySGl0ID8gXCJoaXRcIiA6IFwibWlzc1wiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1dpbm5lcih7aXNXaW5uZXIsIG5hbWV9KSB7XG4gICAgICAgIGlmKGlzV2lubmVyKSB7XG4gICAgICAgICAgICBsb2FkRm91cnRoUGFnZShuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlQm94KHtuYW1lLCBpc1BsYXllckhpdCwgaXNOZXdTaGlwU3Vua30pIHtcblxuICAgICAgICBmdW5jdGlvbiBnZXRNZXNzYWdlKCkge1xuICAgICAgICAgICAgaWYoaXNOZXdTaGlwU3Vuaykge1xuICAgICAgICAgICAgICAgIGlmKG5hbWUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiBgRW5lbXkgZmlyZWQgYSBzaG90IGFuZCBzdW5rIHlvdXIgJHtpc05ld1NoaXBTdW5rLm5hbWV9LmA7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICByZXR1cm4gYFlvdSBmaXJlZCBhIHNob3QgYW5kIHN1bmsgZW5lbXkncyAke2lzTmV3U2hpcFN1bmsubmFtZX0uYDtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZihpc1BsYXllckhpdCl7XG4gICAgICAgICAgICAgICAgaWYobmFtZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZW15IGZpcmVkIGEgc2hvdCBhbmQgaXQgaGl0IHlvdXIgc2hpcFwiO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiWW91IGZpcmVkIGEgc2hvdCBhbmQgaXQgaGl0IGVuZW15IHNoaXBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKG5hbWUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZW15IGZpcmVkIGEgc2hvdCBhbmQgbWlzc2VkXCI7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgcmV0dXJuIFwiWW91IGZpcmVkIGEgc2hvdCBhbmQgbWlzc2VkXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXNzYWdlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNCb3hcIik7XG4gICAgICAgIGNvbnN0IHBiYWNrd2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwLmJhY2t3YXJkXCIpO1xuICAgICAgICBtZXNzYWdlQm94LnJlbW92ZUNoaWxkKHBiYWNrd2FyZCk7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXR1c0JveCA+IHBcIik7XG4gICAgICAgIHAuY2xhc3NMaXN0LmFkZChcImJhY2t3YXJkXCIpO1xuICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IGdldE1lc3NhZ2UoKTtcbiAgICAgICAgY29uc3QgbmV3UCA9IG1ha2VFbGVtZW50KHtlbGVtZW50VHlwZTogXCJwXCIsIHRleHRDb250ZW50LCB0aXRsZTogdGV4dENvbnRlbnR9KTtcbiAgICAgICAgbWVzc2FnZUJveC5hcHBlbmRDaGlsZChuZXdQKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVJbmRpY2F0b3JMaWdodE9mU2hpcFN1bmsoaGl0RGV0YWlscykge1xuICAgICAgICBjb25zdCB7bmFtZSwgaXNOZXdTaGlwU3Vua30gPSBoaXREZXRhaWxzO1xuICAgICAgICBpZighaXNOZXdTaGlwU3VuaykgcmV0dXJuO1xuICAgICAgICBjb25zdCB3YXRlciA9IG5hbWUgPT09IFwiY29tcHV0ZXJcIiA/IFwiZnJpZW5kbHlXYXRlclwiIDogXCJlbmVteVdhdGVyXCI7XG4gICAgICAgIGNvbnN0IGluZGljYXRvckxpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7d2F0ZXJ9PiNzaGlwSW5kaWNhdG9yQ29udGFpbmVyPmRpdltkYXRhLXNoaXBuYW1lPSR7aXNOZXdTaGlwU3Vuay5uYW1lfV0+ZGl2YCk7XG4gICAgICAgIGluZGljYXRvckxpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwSGl0XCIpO1xuICAgICAgICBpbmRpY2F0b3JMaWdodC5jbGFzc0xpc3QuYWRkKFwic2hpcExvc3RcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlSW5kaWNhdG9yQmxpbmtpbmdMaWdodChoaXREZXRhaWxzKSB7XG4gICAgICAgIGNvbnN0IHtzaGlwc1RoYXRBcmVIaXR9ID0gaGl0RGV0YWlscztcbiAgICAgICAgaWYoc2hpcHNUaGF0QXJlSGl0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICBzaGlwc1RoYXRBcmVIaXQuZm9yRWFjaCggc2hpcE5hbWUgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yTGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZnJpZW5kbHlXYXRlcj4jc2hpcEluZGljYXRvckNvbnRhaW5lcj5kaXZbZGF0YS1zaGlwbmFtZT0ke3NoaXBOYW1lfV0+ZGl2YCk7XG4gICAgICAgICAgICBpbmRpY2F0b3JMaWdodC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcEFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGluZGljYXRvckxpZ2h0LmNsYXNzTGlzdC5hZGQoXCJzaGlwSGl0XCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbWFpbkdhbWVDb250cm9sKGF0dGFja2VkQ29vcmRpbmF0ZXMpIHsgIC8vIGNhbGxlZCB3aGVuIHVzZXIgbWFrZWEgYSBtb3ZlIHdpdGggdGhlIGNvb3Jkc1xuICAgICAgICBsZXQgaGl0RGV0YWlscyA9IHBsYXllclVzZXJNYWtlc01vdmUoYXR0YWNrZWRDb29yZGluYXRlcyk7XG4gICAgICAgIHVwZGF0ZUVuZW15V2F0ZXIoaGl0RGV0YWlscyk7XG4gICAgICAgIHVwZGF0ZU1lc3NhZ2VCb3goaGl0RGV0YWlscyk7XG4gICAgICAgIHVwZGF0ZUluZGljYXRvckxpZ2h0T2ZTaGlwU3VuayhoaXREZXRhaWxzKTtcbiAgICAgICAgaWYoY2hlY2tXaW5uZXIoaGl0RGV0YWlscykpIHJldHVybjtcbiAgICAgICAgaGl0RGV0YWlscyA9IHBsYXllckNvbXB1dGVyTWFrZXNNb3ZlKCk7XG4gICAgICAgIHVwZGF0ZUZyaWVuZGx5V2F0ZXIoaGl0RGV0YWlscyk7XG4gICAgICAgIHVwZGF0ZU1lc3NhZ2VCb3goaGl0RGV0YWlscyk7XG4gICAgICAgIHVwZGF0ZUluZGljYXRvckJsaW5raW5nTGlnaHQoaGl0RGV0YWlscyk7XG4gICAgICAgIHVwZGF0ZUluZGljYXRvckxpZ2h0T2ZTaGlwU3VuayhoaXREZXRhaWxzKTtcbiAgICAgICAgY2hlY2tXaW5uZXIoaGl0RGV0YWlscyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYm94Q2xpY2tlZChldmVudCkge1xuICAgICAgICBjb25zdCBib3ggPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gYm94LmdldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZXNcIik7XG4gICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgYm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbW91c2VPdmVyKTtcbiAgICAgICAgYm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBtb3VzZU91dCk7XG4gICAgICAgIGJveC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm94Q2xpY2tlZCk7XG4gICAgICAgIG1haW5HYW1lQ29udHJvbChbTnVtYmVyKGNvb3JkLmNoYXJBdCgwKSksIE51bWJlcihjb29yZC5jaGFyQXQoMSkpXSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlRW5lbXlXYXRlcigpIHtcbiAgICAgICAgY29uc3QgZW5lbXlXYXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5lbXlXYXRlclwiKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBtYWtlRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaDJcIiwgdGV4dENvbnRlbnQ6IFwiRW5lbXkgV2F0ZXJzXCIsIHRpdGxlOiBcIkVuZW15IFdhdGVyc1wifSk7XG4gICAgICAgIGVuZW15V2F0ZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBjb25zdCBlbmVteVdhdGVyU2hpcEluZGljYXRvckNvbnRhaW5lciA9IG1ha2VTaGlwSW5kaWNhdG9yQ29uYXRpbmVyKCk7XG4gICAgICAgIGVuZW15V2F0ZXIuYXBwZW5kQ2hpbGQoZW5lbXlXYXRlclNoaXBJbmRpY2F0b3JDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGdyaWQgPSBtYWtlR3JpZChbbW91c2VPdmVyLCBtb3VzZU91dCwgYm94Q2xpY2tlZF0pO1xuICAgICAgICBlbmVteVdhdGVyLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJGcm9tR2lyZChncmlkKSB7XG4gICAgICAgIGNvbnN0IGJveGVzID0gQXJyYXkuZnJvbShncmlkLmNoaWxkcmVuKTtcbiAgICAgICAgYm94ZXMuZm9yRWFjaChib3ggPT4ge1xuICAgICAgICAgICAgYm94LnJlcGxhY2VXaXRoKGJveC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVGhpcmRQYWdlKCkge1xuICAgICAgICBjb25zdCBmcmllbmRseVdhdGVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZ3JpZENvbnRhaW5lclwiKTtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lckZyb21HaXJkKGZyaWVuZGx5V2F0ZXJHcmlkKTtcbiAgICAgICAgcmVtb3ZlQWxsQ29udGVudE1haW4oKTtcbiAgICAgICAgbWFrZVN0YXR1c0JveCgpO1xuICAgICAgICBtYWtlV2F0ZXJDb250YWluZXJzKCk7XG4gICAgICAgIG1ha2VGcmllbmRseVdhdGVyKGZyaWVuZGx5V2F0ZXJHcmlkKTtcbiAgICAgICAgbWFrZUVuZW15V2F0ZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkVGhpcmRQYWdlLFxuICAgIH1cblxufSkoKTtcblxuY29uc3QgeyBsb2FkVGhpcmRQYWdlIH0gPSB0aGlyZFBhZ2U7XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRUaGlyZFBhZ2U7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRW5lbXlXYXRlcigpIHtcbiAgICB0aGlzLmJvYXJkID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMH0sICgpID0+IEFycmF5LmZyb20oe2xlbmd0aDogMTB9LCAoKSA9PiBudWxsKSk7XG4gICAgdGhpcy5hdHRhY2tEZXRhaWxzID0ge1xuICAgICAgICBsYXN0Q29vcmQ6IG51bGwsXG4gICAgICAgIGxhc3REaXJlY3Rpb246IG51bGwsXG4gICAgICAgIHhDb29yZDogW10sXG4gICAgICAgIHlDb29yZDogW10sXG4gICAgfVxuICAgIHRoaXMuc2hpcExlbmd0aCA9IFsyLDMsMyw0LDVdO1xuICAgIHRoaXMucGVyY2VudEZpbGwgPSA0NTtcbn1cblxuRW5lbXlXYXRlci5wcm90b3R5cGUubWFrZUF0dGFjayA9IGZ1bmN0aW9uIG1ha2VBdHRhY2soKSB7XG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmRzKCkge1xuICAgICAgICByZXR1cm4gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCldO1xuICAgIH1cblxuICAgIGNvbnN0IGlzUGVyY2VudEZpbGxlZCA9IChmdW5jdGlvbiBpbml0UGVyY2VudEZpbGxlZCgpIHtcbiAgICAgICAgbGV0IGlzRmlsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNvdW50RmlsbGVkKCkge1xuICAgICAgICAgICAgaWYoaXNGaWxsZWQpIHJldHVybiBpc0ZpbGxlZDtcblxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZm9yRWFjaCggcm93ID0+IHtcbiAgICAgICAgICAgICAgICByb3cuZm9yRWFjaCggZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQgIT09IG51bGwpIGNvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmKGNvdW50ID4gdGhpcy5wZXJjZW50RmlsbCkgaXNGaWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGlzRmlsbGVkO1xuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIGdldFRoZUVtcHR5Qm94V2l0aExlbmd0aChsb25nZXN0U2hpcExlZnRPbkVuZW15V2F0ZXIpIHtcbiAgICAgICAgbGV0IGVtcHR5Qm94Q291bnQgPSAwO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBlbXB0eUJveENvdW50ID0gMDtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPHRoaXMuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW2ldW2pdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5Qm94Q291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbXB0eUJveENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYobG9uZ2VzdFNoaXBMZWZ0T25FbmVteVdhdGVyID09PSBlbXB0eUJveENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbaSwgal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBjb29yZHM7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGVtcHR5Qm94Q291bnQgPSAwO1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8dGhpcy5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbal1baV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlCb3hDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5Qm94Q291bnQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihsb25nZXN0U2hpcExlZnRPbkVuZW15V2F0ZXIgPT09IGVtcHR5Qm94Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzID0gW2osIGldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRzO1xuICAgIH1cblxuICAgIGxldCB7bGFzdENvb3JkLCBsYXN0RGlyZWN0aW9ufSA9IHRoaXMuYXR0YWNrRGV0YWlscztcbiAgICBjb25zdCB7eENvb3JkLCB5Q29vcmR9ID0gdGhpcy5hdHRhY2tEZXRhaWxzO1xuICAgIGxldCBjb29yZHM7XG5cbiAgICBpZih4Q29vcmQubGVuZ3RoID4gMCB8fCB5Q29vcmQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZihsYXN0RGlyZWN0aW9uID09PSBcInhcIiAmJiB4Q29vcmQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29vcmRzID0geENvb3JkLnBvcCgpO1xuICAgICAgICAgICAgbGFzdENvb3JkID0gY29vcmRzO1xuICAgICAgICB9IGVsc2UgaWYobGFzdERpcmVjdGlvbiA9PT0gXCJ5XCIgJiYgeUNvb3JkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvb3JkcyA9eUNvb3JkLnBvcCgpO1xuICAgICAgICAgICAgbGFzdENvb3JkID0gY29vcmRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29vcmRzID0geENvb3JkLnBvcCgpIHx8IHlDb29yZC5wb3AoKTtcbiAgICAgICAgICAgIGxhc3RDb29yZCA9IGNvb3JkcztcbiAgICAgICAgICAgIGxhc3REaXJlY3Rpb24gPSBsYXN0RGlyZWN0aW9uID09PSBcInhcIiA/IFwieVwiIDogXCJ4XCI7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYoaXNQZXJjZW50RmlsbGVkLmNhbGwodGhpcykpe1xuICAgICAgICBjb25zdCBsb25nZXN0U2hpcExlZnRPbkVuZW15V2F0ZXIgPSB0aGlzLnNoaXBMZW5ndGhbdGhpcy5zaGlwTGVuZ3RoLmxlbmd0aC0xXTtcbiAgICAgICAgY29vcmRzID0gZ2V0VGhlRW1wdHlCb3hXaXRoTGVuZ3RoLmNhbGwodGhpcywgbG9uZ2VzdFNoaXBMZWZ0T25FbmVteVdhdGVyKTtcbiAgICAgICAgbGFzdENvb3JkID0gY29vcmRzO1xuICAgICAgICBsYXN0RGlyZWN0aW9uID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb29yZHMgPSBnZXRSYW5kb21Db29yZHMoKTtcbiAgICAgICAgd2hpbGUodGhpcy5ib2FyZFtjb29yZHNbMF1dW2Nvb3Jkc1sxXV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvb3JkcyA9IGdldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RDb29yZCA9IGNvb3JkcztcbiAgICAgICAgbGFzdERpcmVjdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRhY2tEZXRhaWxzLmxhc3RDb29yZCA9IGxhc3RDb29yZDtcbiAgICB0aGlzLmF0dGFja0RldGFpbHMubGFzdERpcmVjdGlvbiA9IGxhc3REaXJlY3Rpb247XG4gICAgdGhpcy54Q29vcmQgPSB4Q29vcmQ7XG4gICAgdGhpcy55Q29vcmQgPSB5Q29vcmQ7XG4gICAgdGhpcy5ib2FyZFtjb29yZHNbMF1dW2Nvb3Jkc1sxXV0gPSAtMTtcbiAgICByZXR1cm4gY29vcmRzO1xufVxuXG5FbmVteVdhdGVyLnByb3RvdHlwZS5tYXJrSGl0ID0gZnVuY3Rpb24gbWFya0hpdChjb29yZHMpIHtcbiAgICBpZih0aGlzLmJvYXJkW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtjb29yZHNbMF1dW2Nvb3Jkc1sxXV0gPSAxO1xuICAgIH1cbn0gXG5cbkVuZW15V2F0ZXIucHJvdG90eXBlLnJlbW92ZVNoaXBMZW5naHQgPSBmdW5jdGlvbiByZW1vdmVTaGlwTGVuZ2h0KHNoaXBMZW5ndGhUb1JlbW92ZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zaGlwTGVuZ3RoLmluZGV4T2Yoc2hpcExlbmd0aFRvUmVtb3ZlKTtcbiAgICBpZihpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcExlbmd0aC5zcGxpY2UoaW5kZXgsIDEpWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbkVuZW15V2F0ZXIucHJvdG90eXBlLm1hcmtNaXNzID0gZnVuY3Rpb24gbWFya01pc3MoY29vcmRzKSB7XG4gICAgaWYodGhpcy5ib2FyZFtjb29yZHNbMF1dW2Nvb3Jkc1sxXV0gPT09IC0xKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbY29vcmRzWzBdXVtjb29yZHNbMV1dID0gMDtcbiAgICB9XG59IFxuXG5FbmVteVdhdGVyLnByb3RvdHlwZS51cGRhdGVBdHRhY2tEZXRhaWxzICA9IGZ1bmN0aW9uIHVwZGF0ZUF0dGFja0RldGFpbHMobGFzdEF0dGFja1N1Y2Nlc3NTdGF0dXMpIHtcblxuICAgIGxldCB7bGFzdERpcmVjdGlvbn0gPSB0aGlzLmF0dGFja0RldGFpbHM7XG4gICAgY29uc3Qge2xhc3RDb29yZCwgeENvb3JkLCB5Q29vcmR9ID0gdGhpcy5hdHRhY2tEZXRhaWxzO1xuXG4gICAgaWYoIWxhc3RDb29yZCkgcmV0dXJuO1xuICAgIFxuICAgIGZ1bmN0aW9uIGlzVmFsaWRBdHRhY2tDb29yZGluYXRlcyhjb29yZHMpIHtcbiAgICAgICAgcmV0dXJuIGNvb3Jkc1swXSA+PTAgJiYgY29vcmRzWzBdIDwgMTAgJiYgY29vcmRzWzFdID49MCAmJiBjb29yZHNbMV0gPCAxMCAmJiB0aGlzLmJvYXJkW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSA9PT0gbnVsbDsgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRqYWNlbnRDb29yZGluYXRlcyhheGlzKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IFsgXG4gICAgICAgICAgICBbIGxhc3RDb29yZFswXSAtIDEgLCBsYXN0Q29vcmRbMV0gXSwgIC8vIGxlZnRcbiAgICAgICAgICAgIFsgbGFzdENvb3JkWzBdICsgMSwgbGFzdENvb3JkWzFdIF0sICAvLyByaWdodFxuICAgICAgICAgICAgWyBsYXN0Q29vcmRbMF0gLCBsYXN0Q29vcmRbMV0gLSAxIF0sICAvLyB0b3BcbiAgICAgICAgICAgIFsgbGFzdENvb3JkWzBdICwgbGFzdENvb3JkWzFdICsgMV0gICAvLyBib3R0b21cbiAgICAgICAgXTtcblxuICAgICAgICBpZihheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgaWYoIGlzVmFsaWRBdHRhY2tDb29yZGluYXRlcy5jYWxsKHRoaXMsIGNvb3Jkc1swXSkgKSB4Q29vcmQucHVzaChjb29yZHNbMF0pO1xuICAgICAgICAgICAgaWYoIGlzVmFsaWRBdHRhY2tDb29yZGluYXRlcy5jYWxsKHRoaXMsIGNvb3Jkc1sxXSkgKSB4Q29vcmQucHVzaChjb29yZHNbMV0pO1xuICAgICAgICB9IGVsc2UgaWYoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgIGlmKCBpc1ZhbGlkQXR0YWNrQ29vcmRpbmF0ZXMuY2FsbCh0aGlzLCBjb29yZHNbMl0pICkgeUNvb3JkLnB1c2goY29vcmRzWzJdKTtcbiAgICAgICAgICAgIGlmKCBpc1ZhbGlkQXR0YWNrQ29vcmRpbmF0ZXMuY2FsbCh0aGlzLCBjb29yZHNbM10pICkgeUNvb3JkLnB1c2goY29vcmRzWzNdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKCBpc1ZhbGlkQXR0YWNrQ29vcmRpbmF0ZXMuY2FsbCh0aGlzLCBjb29yZHNbMF0pICkgeENvb3JkLnB1c2goY29vcmRzWzBdKTtcbiAgICAgICAgICAgIGlmKCBpc1ZhbGlkQXR0YWNrQ29vcmRpbmF0ZXMuY2FsbCh0aGlzLCBjb29yZHNbMV0pICkgeENvb3JkLnB1c2goY29vcmRzWzFdKTtcbiAgICAgICAgICAgIGlmKCBpc1ZhbGlkQXR0YWNrQ29vcmRpbmF0ZXMuY2FsbCh0aGlzLCBjb29yZHNbMl0pICkgeUNvb3JkLnB1c2goY29vcmRzWzJdKTtcbiAgICAgICAgICAgIGlmKCBpc1ZhbGlkQXR0YWNrQ29vcmRpbmF0ZXMuY2FsbCh0aGlzLCBjb29yZHNbM10pICkgeUNvb3JkLnB1c2goY29vcmRzWzNdKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaWYobGFzdEF0dGFja1N1Y2Nlc3NTdGF0dXMpIHtcbiAgICAgICAgYWRqYWNlbnRDb29yZGluYXRlcy5jYWxsKHRoaXMsIGxhc3REaXJlY3Rpb24pO1xuICAgICAgICBsYXN0RGlyZWN0aW9uID0gbGFzdERpcmVjdGlvbiA9PT0gbnVsbCA/IFwieFwiIDogbGFzdERpcmVjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0RGlyZWN0aW9uID0gbGFzdERpcmVjdGlvbiA9PT0gXCJ4XCIgPyBcInlcIiA6IFwieFwiO1xuICAgIH1cblxuICAgIHRoaXMuYXR0YWNrRGV0YWlscy5sYXN0Q29vcmQgPSBsYXN0Q29vcmQ7XG4gICAgdGhpcy5hdHRhY2tEZXRhaWxzLmxhc3REaXJlY3Rpb24gPSBsYXN0RGlyZWN0aW9uO1xuICAgIHRoaXMueENvb3JkID0geENvb3JkO1xuICAgIHRoaXMueUNvb3JkID0geUNvb3JkO1xufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGcmllbmRseVdhdGVyKCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDEwfSwgKCkgPT4gQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMH0sICgpID0+IG51bGwpKTtcbn1cblxuRnJpZW5kbHlXYXRlci5wcm90b3R5cGUucGxhY2VTaGlwID0gZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3Jkcykge1xuICAgIGlmKCFjb29yZHMuZXZlcnkoZWxlID0+IHRoaXMuYm9hcmRbZWxlWzBdXVtlbGVbMV1dID09PSBudWxsKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvb3Jkcy5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgIHRoaXMuYm9hcmRbZWxlWzBdXVtlbGVbMV1dID0gc2hpcDtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuRnJpZW5kbHlXYXRlci5wcm90b3R5cGUucmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmQpIHtcbiAgICBpZih0aGlzLmJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gMDsgXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gbWlzc2VzXG4gICAgfSBcbiAgICBcbiAgICBpZihPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YuY2FsbChTaGlwLnByb3RvdHlwZSwgdGhpcy5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dKSkge1xuICAgICAgICB0aGlzLmJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0uaGl0KCk7IC8vIGhpdCB0aGUgc2hpcFxuICAgICAgICB0aGlzLmJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSAxOyBcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIGhpdFxuICAgIH1cblxuICAgIHJldHVybiBudWxsOyAvLyBkb2VzIG5vdCBkbyBhbnl0aGluZyB0byB0aGUgY29vcmRzIGFscmVhZHkgYXR0YWNrZWRcbn1cblxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgZ2FtZUNvbnRyb2wgPSAoZnVuY3Rpb24gZ2FtZUNvbnRyb2woKSB7XG5cbiAgICBsZXQgcGxheWVyMTsgXG4gICAgbGV0IHBsYXllcjI7XG5cbiAgICBmdW5jdGlvbiBpbml0UGxheWVycyh1c2VyUGxheWVyTmFtZSA9IFwiQ2hpZWZcIikge1xuICAgICAgICBwbGF5ZXIxID0gbmV3IFBsYXllcihgJHt1c2VyUGxheWVyTmFtZX1gKTtcbiAgICAgICAgcGxheWVyMiA9IG5ldyBQbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVVzZXJTaGlwcyhzaGlwTmFtZSwgY29vcmRzKSB7XG4gICAgICAgIHJldHVybiBwbGF5ZXIxLnBsYWNlU2hpcChzaGlwTmFtZSwgY29vcmRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5ZXJVc2VyTWFrZXNNb3ZlKGNvb3JkKSB7XG4gICAgICAgIGNvbnN0IGlzUGxheWVySGl0ID0gcGxheWVyMi5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICAgICAgcGxheWVyMS5tYXJrQXR0YWNrKGlzUGxheWVySGl0LCBjb29yZCk7XG4gICAgICAgIGNvbnN0IHNoaXBzVGhhdEFyZUhpdCA9IHBsYXllcjIuZ2V0U2hpcHNUaGF0QXJlSGl0KCk7XG4gICAgICAgIGNvbnN0IGlzTmV3U2hpcFN1bmsgPSBwbGF5ZXIyLmlzTmV3U2hpcFN1bmsoKTtcbiAgICAgICAgcGxheWVyMS5yZW1vdmVFbmVteVNoaXBMZW5ndGgoaXNOZXdTaGlwU3Vuayk7XG4gICAgICAgIGNvbnN0IGlzV2lubmVyID0gcGxheWVyMi5hbGxTaGlwU3VuaygpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogcGxheWVyMS5uYW1lLFxuICAgICAgICAgICAgY29vcmQsICAgICAgICAgICAgICAvLyBjb29yZGluYXRlcyBvZiB0aGUgYXR0YWNrXG4gICAgICAgICAgICBpc1BsYXllckhpdCwgICAgICAgIC8vIHN0YXR1cyBpZiBpdCB3YXMgYSBzdWNjZXNzZnVsIGF0dGFjayBvciBub3RcbiAgICAgICAgICAgIHNoaXBzVGhhdEFyZUhpdCwgICAgLy8gc2hpcHMgdGhhdCBhcmUgaGl0XG4gICAgICAgICAgICBpc05ld1NoaXBTdW5rLCAgICAgIC8vIGlzIHRoZXJlIGFueSBuZXcgc2hpcCB3aGljaCBpcyBzdW5rXG4gICAgICAgICAgICBpc1dpbm5lciwgICAgICAgICAgIC8vIGhhcyB0aGUgZ2FtZSBiZWVuIHdvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYXllckNvbXB1dGVyTWFrZXNNb3ZlKCkge1xuICAgICAgICBjb25zdCBjb29yZCA9IHBsYXllcjIubWFrZUF0dGFjaygpO1xuICAgICAgICBjb25zdCBpc1BsYXllckhpdCA9IHBsYXllcjEucmVjZWl2ZUF0dGFjayhjb29yZCk7XG4gICAgICAgIHBsYXllcjIubWFya0F0dGFjayhpc1BsYXllckhpdCwgY29vcmQpO1xuICAgICAgICBjb25zdCBzaGlwc1RoYXRBcmVIaXQgPSBwbGF5ZXIxLmdldFNoaXBzVGhhdEFyZUhpdCgpO1xuICAgICAgICBjb25zdCBpc05ld1NoaXBTdW5rID0gcGxheWVyMS5pc05ld1NoaXBTdW5rKCk7XG4gICAgICAgIHBsYXllcjIucmVtb3ZlRW5lbXlTaGlwTGVuZ3RoKGlzTmV3U2hpcFN1bmspO1xuICAgICAgICBjb25zdCBpc1dpbm5lciA9IHBsYXllcjEuYWxsU2hpcFN1bmsoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHBsYXllcjIubmFtZSxcbiAgICAgICAgICAgIGNvb3JkLCAgICAgICAgICAgICAgLy8gY29vcmRpbmF0ZXMgb2YgdGhlIGF0dGFja1xuICAgICAgICAgICAgaXNQbGF5ZXJIaXQsICAgICAgICAvLyBzdGF0dXMgaWYgaXQgd2FzIGEgc3VjY2Vzc2Z1bCBhdHRhY2sgb3Igbm90XG4gICAgICAgICAgICBzaGlwc1RoYXRBcmVIaXQsICAgIC8vIHNoaXBzIHRoYXQgYXJlIGhpdFxuICAgICAgICAgICAgaXNOZXdTaGlwU3VuaywgICAgICAvLyBpcyB0aGVyZSBhbnkgbmV3IHNoaXAgd2hpY2ggaXMgc3Vua1xuICAgICAgICAgICAgaXNXaW5uZXIsICAgICAgICAgICAvLyBoYXMgdGhlIGdhbWUgYmVlbiB3b25cbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gcGxhY2VDb21wdXRlclNoaXBzKCkge1xuICAgICAgICBwbGF5ZXIyLnBsYWNlU2hpcEF1dG9tYXRpY2FsbHkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0UGxheWVycyxcbiAgICAgICAgcGxhY2VVc2VyU2hpcHMsXG4gICAgICAgIHBsYWNlQ29tcHV0ZXJTaGlwcyxcbiAgICAgICAgcGxheWVyVXNlck1ha2VzTW92ZSxcbiAgICAgICAgcGxheWVyQ29tcHV0ZXJNYWtlc01vdmUsXG4gICAgfVxufSkoKTtcblxuY29uc3Qge2luaXRQbGF5ZXJzLCBwbGFjZVVzZXJTaGlwcywgcGxhY2VDb21wdXRlclNoaXBzLCBwbGF5ZXJVc2VyTWFrZXNNb3ZlLCBwbGF5ZXJDb21wdXRlck1ha2VzTW92ZX0gPSBnYW1lQ29udHJvbDtcblxuZXhwb3J0IHtpbml0UGxheWVycywgcGxhY2VVc2VyU2hpcHMsIHBsYWNlQ29tcHV0ZXJTaGlwcywgcGxheWVyVXNlck1ha2VzTW92ZSwgcGxheWVyQ29tcHV0ZXJNYWtlc01vdmV9IDtcblxuIiwiaW1wb3J0IEVuZW15V2F0ZXIgZnJvbSBcIi4vZW5lbXlXYXRlclwiO1xuaW1wb3J0IEZyaWVuZGx5V2F0ZXIgZnJvbSBcIi4vZnJpZW5kbHlXYXRlclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5mcmllbmRseVdhdGVyID0gbmV3IEZyaWVuZGx5V2F0ZXIoKTtcbiAgICB0aGlzLmVuZW15V2F0ZXIgPSBuZXcgRW5lbXlXYXRlcigpO1xuICAgIHRoaXMuc2hpcHMgPSB7XG4gICAgICAgIFwiY2FycmllclwiOiBuZXcgU2hpcChcImNhcnJpZXJcIiwgNSksXG4gICAgICAgIFwiYmF0dGxlc2hpcFwiOiBuZXcgU2hpcChcImJhdHRsZXNoaXBcIiwgNCksXG4gICAgICAgIFwiY3J1aXNlclwiOiBuZXcgU2hpcChcImNydWlzZXJcIiwgMyksXG4gICAgICAgIFwic3VibWFyaW5lXCI6IG5ldyBTaGlwKFwic3VibWFyaW5lXCIsIDMpLFxuICAgICAgICBcImRlc3Ryb3llclwiOiBuZXcgU2hpcChcImRlc3Ryb3llclwiLCAyKSxcbiAgICB9XG59XG5cblBsYXllci5wcm90b3R5cGUucGxhY2VTaGlwID0gZnVuY3Rpb24gcGxhY2VTaGlwKG5hbWUsIGNvb3JkKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJpZW5kbHlXYXRlci5wbGFjZVNoaXAodGhpcy5zaGlwc1tuYW1lXSwgY29vcmQpO1xufVxuXG5QbGF5ZXIucHJvdG90eXBlLm1ha2VBdHRhY2sgPSBmdW5jdGlvbiBtYWtlQXR0YWNrKCkge1xuICAgIHJldHVybiB0aGlzLmVuZW15V2F0ZXIubWFrZUF0dGFjaygpO1xufVxuXG5QbGF5ZXIucHJvdG90eXBlLnJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJpZW5kbHlXYXRlci5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbn1cblxuUGxheWVyLnByb3RvdHlwZS5tYXJrQXR0YWNrID0gZnVuY3Rpb24gbWFya0F0dGFjayhvdGhlclBsYXllclNoaXBIaXQsIGNvb3JkKSB7XG4gICAgdGhpcy5lbmVteVdhdGVyLnVwZGF0ZUF0dGFja0RldGFpbHMob3RoZXJQbGF5ZXJTaGlwSGl0KTtcbiAgICBpZihvdGhlclBsYXllclNoaXBIaXQpIHtcbiAgICAgICAgdGhpcy5lbmVteVdhdGVyLm1hcmtIaXQoY29vcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZW5lbXlXYXRlci5tYXJrTWlzcyhjb29yZCk7XG4gICAgfVxufVxuXG5QbGF5ZXIucHJvdG90eXBlLnJlbW92ZUVuZW15U2hpcExlbmd0aCA9IGZ1bmN0aW9uIHJlbW92ZUVuZW15U2hpcExlbmd0aChzaGlwKSB7XG4gICAgaWYoT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mLmNhbGwoU2hpcC5wcm90b3R5cGUsIHNoaXApKSByZXR1cm4gdGhpcy5lbmVteVdhdGVyLnJlbW92ZVNoaXBMZW5naHQoc2hpcC5sZW4pO1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuUGxheWVyLnByb3RvdHlwZS5nZXRTaGlwc1RoYXRBcmVIaXQgPSBmdW5jdGlvbiBnZXRTaGlwc1RoYXRBcmVIaXQoKSB7XG4gICAgY29uc3Qgc2hpcFRoYXRBcmVIaXQgPSBPYmplY3Qua2V5cyh0aGlzLnNoaXBzKS5maWx0ZXIoIGtleSA9PiB0aGlzLnNoaXBzW2tleV0uaGl0Q291bnQgPiAwKTtcbiAgICByZXR1cm4gc2hpcFRoYXRBcmVIaXQ7XG59XG5cblBsYXllci5wcm90b3R5cGUuaXNOZXdTaGlwU3VuayA9IGZ1bmN0aW9uIGlzTmV3U2hpcFN1bmsoKSB7XG4gICAgY29uc3Qgc3Vua1NoaXAgPSBPYmplY3Qua2V5cyh0aGlzLnNoaXBzKS5maW5kKGtleSA9PiB0aGlzLnNoaXBzW2tleV0uaXNTdW5rKCkpO1xuICAgIGlmKHN1bmtTaGlwKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzW3N1bmtTaGlwXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2hpcHNbc3Vua1NoaXBdO1xuICAgICAgICByZXR1cm4gc2hpcDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5QbGF5ZXIucHJvdG90eXBlLmFsbFNoaXBTdW5rID0gZnVuY3Rpb24gYWxsU2hpcFN1bmsoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc2hpcHMpLmxlbmd0aCA9PT0gMDtcbn1cblxuUGxheWVyLnByb3RvdHlwZS5wbGFjZVNoaXBBdXRvbWF0aWNhbGx5ID0gZnVuY3Rpb24gcGxhY2VTaGlwQXV0b21hdGljYWxseSgpIHtcblxuICAgIGZ1bmN0aW9uIGNvb3Jkc1ZhbGlkKGNvb3JkKSB7XG4gICAgICAgIHJldHVybiAoY29vcmRbMF0gPj0gMCAmJiBjb29yZFswXSA8PSA5ICYmIGNvb3JkWzFdID49IDAgJiYgY29vcmRbMV0gPD0gOSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmFuZG9tU2hpcENvb3JkR2VuZXJhdG9yKG51bU9mQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmRzKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApXTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBjb29yZHMgPSBbZ2V0UmFuZG9tQ29vcmRzKCldO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTsgLy8gMCBmb3IgeCBhbmQgMSBmb3IgeVxuICAgIFxuICAgICAgICB3aGlsZShjb29yZHMubGVuZ3RoIDwgbnVtT2ZDb29yZGluYXRlcykge1xuICAgICAgICAgICAgbGV0IGZpcnN0ID0gY29vcmRzWzBdOyAgICAgICAgICAgICAgICAgIC8vIGdldHMgdGhlIHJvdyB2YWx1ZVxuICAgICAgICAgICAgbGV0IGxhc3QgPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdOyAgIC8vIGdldHMgdGhlIGNvbHVtbnMgdmFsdWVcbiAgICBcbiAgICAgICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZpcnN0ID0gW2ZpcnN0WzBdLGZpcnN0WzFdLTFdOyAgICAgIC8vIGFkZHMgY29vcmRpbmF0ZXMgaW4gbmVnYXRpdmUgZGlyZWN0aW9uIGRlcGVuZGluZyBvbiBheGlzXG4gICAgICAgICAgICAgICAgbGFzdCA9IFtsYXN0WzBdLGxhc3RbMV0rMV07ICAgICAgICAgLy8gYWRkcyBjb29yZGluYXRlcyBpbiBwb3NpdGl2ZSBkaXJlY3Rpb24gZGVwZW5kaW5nIG9uIGF4aXNcbiAgICAgICAgICAgIH0gZWxzZSBpZihkaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IFtmaXJzdFswXS0xLGZpcnN0WzFdXTtcbiAgICAgICAgICAgICAgICBsYXN0ID0gW2xhc3RbMF0rMSxsYXN0WzFdXTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmKGNvb3Jkc1ZhbGlkKGZpcnN0KSkge1xuICAgICAgICAgICAgICAgIGNvb3Jkcy51bnNoaWZ0KGZpcnN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNvb3Jkcy5sZW5ndGggPT09IG51bU9mQ29vcmRpbmF0ZXMpIGJyZWFrO1xuICAgICAgICAgICAgaWYoY29vcmRzVmFsaWQobGFzdCkpIHtcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaChsYXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU2hpcEFkamFjZW50VG9Db29yZHMoY29vcmRzKSB7XG4gICAgICAgIGNvbnN0IGlzU2hpcFBsYWNlT25BZGphY2VudCA9IGNvb3Jkcy5ldmVyeShjb29yZCA9PiB7ICAvLyBzdG9yZXMgZmFsc2UgaXMgdGhlcmUgaXMgYSBzaGlwIHBsYWNlZCBvbiB0aGUgYWRqYWNlbnQgY29vcmRzXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gY29vcmRzVmFsaWQoWyBjb29yZFswXSwgY29vcmRbMV0tMSBdKSA/IFsgY29vcmRbMF0sIGNvb3JkWzFdLTEgXSA6IG51bGw7XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IGNvb3Jkc1ZhbGlkKFsgY29vcmRbMF0sIGNvb3JkWzFdKzEgXSkgPyBbIGNvb3JkWzBdLCBjb29yZFsxXSsxIF0gOiBudWxsO1xuICAgICAgICAgICAgY29uc3QgdG9wID0gY29vcmRzVmFsaWQoWyBjb29yZFswXS0xICwgY29vcmRbMV0gXSkgPyBbIGNvb3JkWzBdLTEsIGNvb3JkWzFdIF0gOiBudWxsO1xuICAgICAgICAgICAgY29uc3QgYm90dG9tID0gY29vcmRzVmFsaWQoWyBjb29yZFswXSsxICwgY29vcmRbMV0gXSkgPyBbIGNvb3JkWzBdKzEsIGNvb3JkWzFdIF0gOiBudWxsO1xuXG4gICAgICAgICAgICBpZihsZWZ0ICE9PSBudWxsICYmIHRoaXMuZnJpZW5kbHlXYXRlci5ib2FyZFtsZWZ0WzBdXVtsZWZ0WzFdXSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYocmlnaHQgIT09IG51bGwgJiYgdGhpcy5mcmllbmRseVdhdGVyLmJvYXJkW3JpZ2h0WzBdXVtyaWdodFsxXV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmKHRvcCAhPT0gbnVsbCAmJiB0aGlzLmZyaWVuZGx5V2F0ZXIuYm9hcmRbdG9wWzBdXVt0b3BbMV1dICE9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZihib3R0b20gIT09IG51bGwgJiYgdGhpcy5mcmllbmRseVdhdGVyLmJvYXJkW2JvdHRvbVswXV1bYm90dG9tWzFdXSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICFpc1NoaXBQbGFjZU9uQWRqYWNlbnQ7IC8vIHJldHVybnMgdHJ1ZSBpZiB0aGVyZSBpcyBhIHNoaXAgYWRqYWNlbnQgdG8gY29vcmRzXG4gICAgfVxuIFxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChuYW1lLCBsZW4pIHtcbiAgICAgICAgbGV0IGNvb3JkcyA9IHJhbmRvbVNoaXBDb29yZEdlbmVyYXRvcihsZW4pO1xuICAgICAgICBsZXQgaXNTaGlwQWRqYWNlbnQgPSBpc1NoaXBBZGphY2VudFRvQ29vcmRzLmNhbGwodGhpcywgY29vcmRzKTtcbiAgICAgICAgbGV0IGlzUGxhY2VkU2hpcCA9IGZhbHNlO1xuXG4gICAgICAgIGlmKCFpc1NoaXBBZGphY2VudCkge1xuICAgICAgICAgICAgaXNQbGFjZWRTaGlwID0gdGhpcy5wbGFjZVNoaXAobmFtZSwgY29vcmRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlKGlzU2hpcEFkamFjZW50ICYmICFpc1BsYWNlZFNoaXApIHtcbiAgICAgICAgICAgIGNvb3JkcyA9IHJhbmRvbVNoaXBDb29yZEdlbmVyYXRvcihsZW4pO1xuICAgICAgICAgICAgaXNTaGlwQWRqYWNlbnQgPSBpc1NoaXBBZGphY2VudFRvQ29vcmRzLmNhbGwodGhpcywgY29vcmRzKTtcbiAgICAgICAgICAgIGlmKCFpc1NoaXBBZGphY2VudCkge1xuICAgICAgICAgICAgICAgIGlzUGxhY2VkU2hpcCA9IHRoaXMucGxhY2VTaGlwKG5hbWUsIGNvb3Jkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaGlwcyA9IFsgXG4gICAgICAgIFtcImNhcnJpZXJcIiwgNV0sXG4gICAgICAgIFtcImJhdHRsZXNoaXBcIiwgNF0sXG4gICAgICAgIFtcImNydWlzZXJcIiwgM10sXG4gICAgICAgIFtcInN1Ym1hcmluZVwiLCAzXSxcbiAgICAgICAgW1wiZGVzdHJveWVyXCIsIDJdLFxuICAgIF07XG4gICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHBsYWNlU2hpcC5jYWxsKHRoaXMsIHNoaXBbMF0sIHNoaXBbMV0pKTtcbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKG5hbWUsIGxlbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW4gPSBsZW47XG4gICAgdGhpcy5oaXRDb3VudCA9IDA7XG59XG5cblNoaXAucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uIGhpdCgpIHtcbiAgICBpZighdGhpcy5pc1N1bmsoKSkge1xuICAgICAgICB0aGlzLmhpdENvdW50ICs9IDE7XG4gICAgfVxufVxuXG5TaGlwLnByb3RvdHlwZS5pc1N1bmsgPSBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuID09PSB0aGlzLmhpdENvdW50O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==