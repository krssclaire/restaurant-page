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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/imgs/pizza-bg.png */ \"./src/assets/imgs/pizza-bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/imgs/pizza-contact.png */ \"./src/assets/imgs/pizza-contact.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cardo&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --logo-font: 'Cardo', serif;\n    --main-font: 'Inter', sans-serif;\n    --bar-color: rgba(0, 0, 0, 0.75);\n    --phone-unit-height: 60px;\n    --desktop-unit-height: 80px;\n    --side-margin: 13em;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-weight: 400;\n}\n\n::-webkit-scrollbar {\n    width: 15px;\n    background: rgb(200, 200, 200);\n}\n::-webkit-scrollbar-thumb {\n    background: rgb(120, 120, 120); \n}\n::-webkit-scrollbar-thumb:hover {\n    background: rgb(100, 100, 100); \n}\n\nhtml {\n    scroll-behavior: smooth;\n    overflow-x: hidden;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n}\n\nli {\n    list-style-type: none;\n}\n\n.bold {\n    font-weight: 700;\n}\n\n.uppercase {\n    text-transform: uppercase;\n}\n\nbody {\n    max-width: 100vw;\n}\n\n.phone-menu {\n    background: rgba(0, 0, 0, 0.95);\n    backdrop-filter: blur(5px);\n    color: white;\n    position: fixed;\n    z-index: 5;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.phone-menu>ul {\n    display: flex;\n    flex-direction: column;\n    gap: 3.5em;\n}\n\n.phone-menu>ul>li {\n    text-align: center;\n}\n\n#x-icon {\n    position: absolute;\n    top: 20px;\n    right: 20px;\n}\n\n.phone-menu>h1 {\n    font: 2.5rem var(--logo-font);\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n\n.phone-menu>ul>li {\n    font: 1.25rem var(--main-font);\n}\n\nnav {\n    background-color: var(--bar-color);\n    color: white;\n    height: var(--phone-unit-height);\n    width: 100vw;\n    padding: 0 20px;\n    position: fixed;\n    z-index: 3;\n    top: 0;\n    transition: all 0.5s;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.nav-scrolled {\n    background-color: white;\n    color: black;\n}\n\n#nav-logo {\n    font-family: var(--logo-font);\n    font-size: 2em;\n    font-weight: 400;\n}\n\n#nav-links {\n    display: none;\n}\n\n#hamburger-menu {\n    height: 1.2em;\n}\n\n.hamburger-menu-scrolled {\n    filter: invert(1);\n}\n\n#home {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}), lightgray 50% / cover no-repeat;\n    background-position: center;\n    color: white;\n    width: 100vw;\n    height: 90vh;\n    min-height: 800px;\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    align-items: center;\n}\n\n.hero-section {\n    height: 60%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#pizzeria {\n    font-family: var(--main-font);\n    font-size: 3em;\n    text-indent: 30px;\n}\n\n#main-logo {\n    font-family: var(--logo-font);\n    font-size: 4em;\n}\n\n#arrow {\n    width: 66px;\n    height: 43px;\n    margin-bottom: 25px;\n}\n\n.description {\n    padding: var(--phone-unit-height) calc(var(--phone-unit-height) / 1.5 );\n    display: flex; \n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n.description>h1 {\n    font: 2.5rem var(--logo-font);\n}\n\n.description>p {\n    font: 1rem  var(--main-font);\n    line-height: 1.7rem;\n}\n\n.description>a {\n    color: rgb(163, 59, 21);\n    font: 1rem var(--main-font);\n    font-weight: 800;\n}\n\nimg[alt=\"Tomatoes\"] {\n    width: 100vw;\n    height: var(--phone-unit-height);\n    object-fit: cover;\n}\n\nimg[alt=\"Mozzarella\"], .menu-imgs {\n    display: none;\n}\n\n.last-section {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}), lightgray 50% / cover no-repeat;\n    background-position: center;\n}\n\n#contacts {\n    color: white;\n    width: 100vw;\n    padding: var(--phone-unit-height) calc(var(--phone-unit-height) / 1.5 );\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: calc(var(--phone-unit-height)/ 1.7);\n}\n\n.contact-type {\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--phone-unit-height) / 1.7);\n}\n\n#contacts>h1 {\n    font: 2.5rem var(--logo-font);\n}\n\n.contact-title {\n    font: bold 1.5rem var(--main-font);\n    margin-bottom: 5px;\n}\n\n.contact-info {\n    font: 1.25rem var(--main-font);\n}\n\n.contact {\n    text-align: center;\n}\n\nfooter {\n    background-color: var(--bar-color);\n    color: white;\n    height: var(--phone-unit-height);\n    padding: 0 20px;\n    font-family: var(--main-font);\n    font-size: 1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.invisible {\n    display: none;\n}\n\n@media screen and (min-width: 1330px) {\n    nav {\n        height: var(--desktop-unit-height);\n        padding: 0 var(--side-margin);\n    }\n    #nav-logo {\n        font-size: 2.5em;\n    }\n    #hamburger-menu {\n        display: none;\n    }\n    #nav-links {\n        font: 1.25rem var(--main-font);\n        display: block;\n    }\n    #nav-links>ul {\n        display: flex;\n        justify-content: space-between;\n        gap: 2.5em;\n    }\n    #home {\n        height: 95vh;\n        background-size: 100%;\n    }\n    #pizzeria {\n        font-size: 3.75em;\n        text-indent: 40px;\n    }\n    #main-logo {\n        font-size: 5em;\n    }\n    #about-us, #menu {\n        padding: var(--desktop-unit-height) var(--side-margin);\n        display: flex;\n        justify-content: space-between;\n    }\n    #about-us {\n        flex-direction: row-reverse;\n    }\n    .description {\n        padding: 0;\n        max-width: 40%;\n        align-items: start;\n    }\n    .description>h1 {\n        font-size: 3.75rem;\n    }\n    .description>p {\n        font-size: 1.5rem;\n    }\n    .description>a {\n        font-size: 1.25rem;\n    }\n    .images {\n        display: flex;\n        gap: 15px;\n    }\n    img[alt=\"Tomatoes\"] {\n        width: initial;\n        height: auto;\n    }\n    img[alt=\"Mozzarella\"] {\n        display: inline;\n    }\n    .menu-imgs {\n        display: flex;\n    }\n    .last-section {\n        background-size: 100%;\n    }\n    #contacts {\n        padding: var(--desktop-unit-height) var(--side-margin) calc(var(--desktop-unit-height) + 50px) var(--side-margin);\n    }\n    .contact-type {\n        width: 100%;\n        flex-direction: row;\n        justify-content: space-between;\n    }\n    #contacts>h1 {\n        font-size: 3.75rem;\n    }\n    .contact-title {\n        font-size: 1.9rem;\n    }\n    .contact-info {\n        font-size: 1.5rem;\n    }\n    .contact {\n        text-align:  left;\n    }\n    footer {\n        height: var(--desktop-unit-height);\n        font-size: 1.25rem;\n    }\n    nav a:hover:not(#nav-logo),\n    .description>a:hover {\n        text-decoration: underline;\n    }\n    #hamburger-menu:hover, #x-icon:hover,\n    a:hover, #arrow:hover,\n    .contact-info:hover {\n        cursor: pointer;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AboutUs: () => (/* binding */ AboutUs)\n/* harmony export */ });\n/* harmony import */ var _assets_imgs_tomatoes_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/imgs/tomatoes.png */ \"./src/assets/imgs/tomatoes.png\");\n/* harmony import */ var _assets_imgs_mozzarella_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/imgs/mozzarella.png */ \"./src/assets/imgs/mozzarella.png\");\n\n\n\nconst AboutUs = (() => {\n    const section = document.createElement('section');\n    const div = document.createElement('div');\n    const title = document.createElement('h1');\n    const info = document.createElement('p');\n    const moreLink = document.createElement('a');\n    const imgContainer = document.createElement('div');\n    const firstImg = document.createElement('img');\n    const secondImg = document.createElement('img');\n\n    section.setAttribute('id', 'about-us');\n    div.classList.add('description');\n    title.textContent = 'Russo Family';\n    info.textContent = `Originally tomatoes farmers in the south of Italy, the Russo family opened their first restaurant in their beautiful Campania.\\n\n    Forced by the '800s crisis, all the family moved to the US in 1850 where they reopened a new restaurant with high quality dishes.\n    `;\n    moreLink.setAttribute('href', '#');\n    moreLink.textContent = 'Read more...';\n    imgContainer.classList.add('images');\n    firstImg.setAttribute('src', _assets_imgs_tomatoes_png__WEBPACK_IMPORTED_MODULE_0__);\n    firstImg.setAttribute('alt', 'Tomatoes');\n    secondImg.setAttribute('src', _assets_imgs_mozzarella_png__WEBPACK_IMPORTED_MODULE_1__);\n    secondImg.setAttribute('alt', 'Mozzarella');\n\n    section.append(div, imgContainer);\n    div.append(title, info, moreLink);\n    imgContainer.append(firstImg, secondImg);\n\n    return { section };\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/about-us.js?");

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Contacts: () => (/* binding */ Contacts)\n/* harmony export */ });\nconst Contacts = (() => {\n    const section = document.createElement('section');\n    const title = document.createElement('h1');\n    const contactsGrp = document.createElement('div');\n    const phoneGrp = document.createElement('div');\n    const phoneTitle = document.createElement('p');\n    const phoneInfo = document.createElement('p');\n    const emailGrp = document.createElement('div');\n    const emailTitle = document.createElement('p');\n    const emailInfo = document.createElement('p');\n    const addressGrp = document.createElement('div');\n    const addressTitle = document.createElement('p');\n    const addressInfo = document.createElement('p');\n\n    section.setAttribute('id', 'contacts');\n    title.classList.add('uppercase');\n    title.textContent = 'Contacts';\n    contactsGrp.classList.add('contact-type');\n    phoneGrp.classList.add('contact');\n    phoneTitle.classList.add('contact-title', 'bold');\n    phoneTitle.textContent = 'Phone contact';\n    phoneInfo.classList.add('contact-info');\n    phoneInfo.textContent = '+1 234 567 890';\n    \n    emailGrp.classList.add('contact');\n    emailTitle.classList.add('contact-title', 'bold');\n    emailTitle.textContent = 'Email';\n    emailInfo.classList.add('contact-info');\n    emailInfo.textContent = 'pizzeriarobertos@mail.us';\n    \n    addressGrp.classList.add('contact');\n    addressTitle.classList.add('contact-title', 'bold');\n    addressTitle.textContent = 'Address';\n    addressInfo.classList.add('contact-info');\n    addressInfo.textContent = 'San Francisco, Beautyland 25';\n\n    section.append(title, contactsGrp);\n    contactsGrp.append(phoneGrp, emailGrp, addressGrp);\n    phoneGrp.append(phoneTitle, phoneInfo);\n    emailGrp.append(emailTitle, emailInfo);\n    addressGrp.append(addressTitle, addressInfo);\n\n    return { section };\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/contacts.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Footer: () => (/* binding */ Footer)\n/* harmony export */ });\nconst Footer = (() => {\n    const footer = document.createElement('footer');\n    const credits = document.createElement('p');\n\n    credits.textContent = '©2023 - Roberto\\'s';\n    footer.appendChild(credits);\n\n    return { footer };\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _assets_imgs_arrow_down_sign_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/imgs/arrow-down-sign.png */ \"./src/assets/imgs/arrow-down-sign.png\");\n\n\nconst Home = (() => {\n    const section = document.createElement('section');\n    const hero = document.createElement('div');\n    const heading = document.createElement('div');\n    const pizzeria = document.createElement('h1');\n    const logo = document.createElement('h1');\n    const arrowLink = document.createElement('a');\n    const arrow = document.createElement('img');\n\n    section.setAttribute('id', 'home');\n    hero.classList.add('hero-section');\n    pizzeria.setAttribute('id', 'pizzeria');\n    pizzeria.textContent = 'pizzeria';\n    logo.setAttribute('id', 'main-logo');\n    logo.textContent = 'Roberto\\'s';\n    arrowLink.setAttribute('href', '#about-us');\n    arrow.setAttribute('src', _assets_imgs_arrow_down_sign_png__WEBPACK_IMPORTED_MODULE_0__);\n    arrow.setAttribute('alt', 'Arrow down');\n    arrow.setAttribute('id', 'arrow');\n\n    section.append(hero);\n    hero.append(heading, arrowLink);\n    heading.append(pizzeria, logo);\n    arrowLink.appendChild(arrow);\n\n    return { section };\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navMenu */ \"./src/navMenu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about_us__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us */ \"./src/about-us.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts */ \"./src/contacts.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\n\nconst container = document.querySelector('#content');\nconst lastSection = document.createElement('div');\nconst phoneMenuLinks = document.querySelectorAll('.phone-menu li');\n\ncontainer.append(_navMenu__WEBPACK_IMPORTED_MODULE_0__.NavBar.nav, _home__WEBPACK_IMPORTED_MODULE_1__.Home.section, _about_us__WEBPACK_IMPORTED_MODULE_2__.AboutUs.section, _menu__WEBPACK_IMPORTED_MODULE_3__.Menu.section, lastSection);\nlastSection.classList.add('last-section');\nlastSection.append(_contacts__WEBPACK_IMPORTED_MODULE_4__.Contacts.section, _footer__WEBPACK_IMPORTED_MODULE_5__.Footer.footer);\n\nconst showPhoneMenu = () => container.prepend(_navMenu__WEBPACK_IMPORTED_MODULE_0__.PhoneMenu.mainMenu);\nconst hidePhoneMenu = () => container.removeChild(_navMenu__WEBPACK_IMPORTED_MODULE_0__.PhoneMenu.mainMenu);\nconst changeNavColor = () => {\n    if (window.scrollY > 730) {\n        _navMenu__WEBPACK_IMPORTED_MODULE_0__.NavBar.nav.classList.add('nav-scrolled'); \n        _navMenu__WEBPACK_IMPORTED_MODULE_0__.NavBar.hamburgerMenu.classList.add('hamburger-menu-scrolled');\n    } else if (window.scrollY <= 730) {\n        _navMenu__WEBPACK_IMPORTED_MODULE_0__.NavBar.nav.classList.remove('nav-scrolled');\n        _navMenu__WEBPACK_IMPORTED_MODULE_0__.NavBar.hamburgerMenu.classList.remove('hamburger-menu-scrolled');\n    }\n}\n\nwindow.addEventListener('scroll', changeNavColor);\n_navMenu__WEBPACK_IMPORTED_MODULE_0__.NavBar.hamburgerMenu.addEventListener('click', showPhoneMenu);\n_navMenu__WEBPACK_IMPORTED_MODULE_0__.PhoneMenu.xIcon.addEventListener('click', hidePhoneMenu);\nphoneMenuLinks.forEach(link => {\n    link.addEventListener('click', hidePhoneMenu);\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _assets_imgs_salame_pizza_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/imgs/salame-pizza.png */ \"./src/assets/imgs/salame-pizza.png\");\n/* harmony import */ var _assets_imgs_margherita_pizza_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/imgs/margherita-pizza.png */ \"./src/assets/imgs/margherita-pizza.png\");\n\n\n\nconst Menu = (() => {\n    const section = document.createElement('section');\n    const div = document.createElement('div');\n    const title = document.createElement('h1');\n    const info = document.createElement('p');\n    const moreLink = document.createElement('a');\n    const imgContainer = document.createElement('div');\n    const firstImg = document.createElement('img');\n    const secondImg = document.createElement('img');\n\n    section.setAttribute('id', 'menu');\n    div.classList.add('description');\n    title.textContent = 'Our menu';\n    info.textContent = `The whole family does care about the quality and variety of the dishes.\\n\n    As a matter of fact, the ingredients are all selected by granpa Roberto in person.\\n\n    The menu has plenty of options for any flavour.\n    `;\n    moreLink.setAttribute('href', '#');\n    moreLink.textContent = 'View menu...';\n    imgContainer.classList.add('images', 'menu-imgs');\n    firstImg.setAttribute('src', _assets_imgs_salame_pizza_png__WEBPACK_IMPORTED_MODULE_0__);\n    firstImg.setAttribute('alt', 'Salami pizza');\n    secondImg.setAttribute('src', _assets_imgs_margherita_pizza_png__WEBPACK_IMPORTED_MODULE_1__);\n    secondImg.setAttribute('alt', 'Margherita pizza');\n\n    section.append(div, imgContainer);\n    div.append(title, info, moreLink);\n    imgContainer.append(firstImg, secondImg);\n\n    return { section };\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navMenu.js":
/*!************************!*\
  !*** ./src/navMenu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NavBar: () => (/* binding */ NavBar),\n/* harmony export */   PhoneMenu: () => (/* binding */ PhoneMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_imgs_x_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/imgs/x.png */ \"./src/assets/imgs/x.png\");\n/* harmony import */ var _assets_imgs_icon_menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/imgs/icon-menu.png */ \"./src/assets/imgs/icon-menu.png\");\n\n\n\nconst NavBar = (() => {\n    const nav = document.createElement('nav');\n    const logoLink = document.createElement('a');\n    const hamburgerMenu = document.createElement('img');\n    const navLinks = document.createElement('div');\n    const ul = document.createElement('ul');\n    const homeLi = document.createElement('li');\n    const aboutUsLi = document.createElement('li');\n    const menuLi = document.createElement('li');\n    const contactsLi = document.createElement('li');\n    const homeLink = document.createElement('a');\n    const aboutUsLink = document.createElement('a');\n    const menuLink = document.createElement('a');\n    const contactsLink = document.createElement('a');\n\n    logoLink.setAttribute('href', '#home');\n    logoLink.setAttribute('id', 'nav-logo');\n    logoLink.textContent = 'Roberto\\'s';\n    hamburgerMenu.setAttribute('src', _assets_imgs_icon_menu_png__WEBPACK_IMPORTED_MODULE_1__);\n    hamburgerMenu.setAttribute('alt', 'Hamburger menu');\n    hamburgerMenu.setAttribute('id', 'hamburger-menu');\n    navLinks.setAttribute('id', 'nav-links');\n    homeLink.setAttribute('href', '#home');\n    homeLink.classList.add('uppercase');\n    homeLink.textContent = 'Home';\n    aboutUsLink.setAttribute('href', '#about-us');\n    aboutUsLink.classList.add('uppercase');\n    aboutUsLink.textContent = 'About us';\n    menuLink.setAttribute('href', '#menu');\n    menuLink.classList.add('uppercase');\n    menuLink.textContent = 'Menu';\n    contactsLink.setAttribute('href', '#contacts');\n    contactsLink.classList.add('uppercase');\n    contactsLink.textContent = 'Contacts';\n\n    nav.append(logoLink, hamburgerMenu, navLinks);\n    navLinks.appendChild(ul);\n    ul.append(homeLi, aboutUsLi, menuLi, contactsLi);\n    homeLi.appendChild(homeLink);\n    aboutUsLi.appendChild(aboutUsLink);\n    menuLi.appendChild(menuLink);\n    contactsLi.appendChild(contactsLink);\n\n    return {\n        nav,\n        hamburgerMenu\n    }\n})();\n\nconst PhoneMenu = (() => {\n    const mainMenu = document.createElement('div');\n    const xIcon = document.createElement('img');\n    const logo = document.createElement('h1');\n    const ul = document.createElement('ul');\n    const homeLi = document.createElement('li');\n    const aboutUsLi = document.createElement('li');\n    const menuLi = document.createElement('li');\n    const contactsLi = document.createElement('li');\n    const homeLink = document.createElement('a');\n    const aboutUsLink = document.createElement('a');\n    const menuLink = document.createElement('a');\n    const contactsLink = document.createElement('a');\n\n    mainMenu.classList.add('phone-menu');\n    xIcon.setAttribute('src', _assets_imgs_x_png__WEBPACK_IMPORTED_MODULE_0__)\n    xIcon.setAttribute('alt', 'X icon');\n    xIcon.setAttribute('id', 'x-icon');\n    logo.textContent = 'Roberto\\'s';\n    homeLink.setAttribute('href', '#home');\n    homeLink.classList.add('uppercase');\n    homeLink.textContent = 'Home';\n    aboutUsLink.setAttribute('href', '#about-us');\n    aboutUsLink.classList.add('uppercase');\n    aboutUsLink.textContent = 'About us';\n    menuLink.setAttribute('href', '#menu');\n    menuLink.classList.add('uppercase');\n    menuLink.textContent = 'Menu';\n    contactsLink.setAttribute('href', '#contacts');\n    contactsLink.classList.add('uppercase');\n    contactsLink.textContent = 'Contacts';\n\n    mainMenu.append(xIcon, logo, ul);\n    ul.append(homeLi, aboutUsLi, menuLi, contactsLi);\n    homeLi.appendChild(homeLink);\n    aboutUsLi.appendChild(aboutUsLink);\n    menuLi.appendChild(menuLink);\n    contactsLi.appendChild(contactsLink);\n\n    return {\n        mainMenu,\n        xIcon\n    }\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/navMenu.js?");

/***/ }),

/***/ "./src/assets/imgs/arrow-down-sign.png":
/*!*********************************************!*\
  !*** ./src/assets/imgs/arrow-down-sign.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7b384bb46305081e1811.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/arrow-down-sign.png?");

/***/ }),

/***/ "./src/assets/imgs/icon-menu.png":
/*!***************************************!*\
  !*** ./src/assets/imgs/icon-menu.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb8db913a4ac6911fba0.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/icon-menu.png?");

/***/ }),

/***/ "./src/assets/imgs/margherita-pizza.png":
/*!**********************************************!*\
  !*** ./src/assets/imgs/margherita-pizza.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"369a2c8da0924266e9ee.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/margherita-pizza.png?");

/***/ }),

/***/ "./src/assets/imgs/mozzarella.png":
/*!****************************************!*\
  !*** ./src/assets/imgs/mozzarella.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dfb07e09e4ada3ce2456.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/mozzarella.png?");

/***/ }),

/***/ "./src/assets/imgs/pizza-bg.png":
/*!**************************************!*\
  !*** ./src/assets/imgs/pizza-bg.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a8d3da12058529e6a0cf.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/pizza-bg.png?");

/***/ }),

/***/ "./src/assets/imgs/pizza-contact.png":
/*!*******************************************!*\
  !*** ./src/assets/imgs/pizza-contact.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"42cf61321fb04119dccf.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/pizza-contact.png?");

/***/ }),

/***/ "./src/assets/imgs/salame-pizza.png":
/*!******************************************!*\
  !*** ./src/assets/imgs/salame-pizza.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d60074910ab9e3d8fd59.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/salame-pizza.png?");

/***/ }),

/***/ "./src/assets/imgs/tomatoes.png":
/*!**************************************!*\
  !*** ./src/assets/imgs/tomatoes.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7892ab3d55658fc2bb65.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/tomatoes.png?");

/***/ }),

/***/ "./src/assets/imgs/x.png":
/*!*******************************!*\
  !*** ./src/assets/imgs/x.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c80064d2f168c638c3c1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/x.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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