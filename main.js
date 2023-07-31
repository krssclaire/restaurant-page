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

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AboutUs: () => (/* binding */ AboutUs)\n/* harmony export */ });\nconst AboutUs = (() => {\n    const section = document.createElement('section');\n    const div = document.createElement('div');\n    const title = document.createElement('h1');\n    const info = document.createElement('p');\n    const moreLink = document.createElement('a');\n    const imgContainer = document.createElement('div');\n    const firstImg = document.createElement('img');\n    const secondImg = document.createElement('img');\n\n    section.setAttribute('id', 'about-us');\n    div.classList.add('description');\n    title.textContent = 'Russo Family';\n    info.textContent = `Originally tomatoes farmers in the south of Italy, the Russo family opened their first restaurant in their beautiful Campania.\\n\n    Forced by the '800s crisis, all the family moved to the US in 1850 where they reopened a new restaurant with high quality dishes.\n    `;\n    moreLink.setAttribute('href', '#');\n    moreLink.textContent = 'Read more...';\n    imgContainer.classList.add('images');\n    firstImg.setAttribute('src', 'imgs/tomatoes.png');\n    firstImg.setAttribute('alt', 'Tomatoes');\n    secondImg.setAttribute('src', 'imgs/mozzarella.png');\n    secondImg.setAttribute('alt', 'Mozzarella');\n\n    section.append(div, imgContainer);\n    div.append(title, info, moreLink);\n    imgContainer.append(firstImg, secondImg);\n\n    return { section };\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/about-us.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\nconst Home = (() => {\n    const section = document.createElement('section');\n    const hero = document.createElement('div');\n    const heading = document.createElement('div');\n    const pizzeria = document.createElement('h1');\n    const logo = document.createElement('h1');\n    const arrowLink = document.createElement('a');\n    const arrow = document.createElement('img');\n\n    section.setAttribute('id', 'home');\n    hero.classList.add('hero-section');\n    pizzeria.setAttribute('id', 'pizzeria');\n    pizzeria.textContent = 'pizzeria';\n    logo.setAttribute('id', 'main-logo');\n    logo.textContent = 'Roberto\\'s';\n    arrowLink.setAttribute('href', '#about-us');\n    arrow.setAttribute('src', 'imgs/arrow-down-sign.png');\n    arrow.setAttribute('alt', 'Arrow down');\n    arrow.setAttribute('id', 'arrow');\n\n    section.append(hero);\n    hero.append(heading, arrowLink);\n    heading.append(pizzeria, logo);\n    arrowLink.appendChild(arrow);\n\n    return { section };\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navMenu */ \"./src/navMenu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about_us__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us */ \"./src/about-us.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts */ \"./src/contacts.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\n\n\n\nconst container = document.querySelector('#content');\nconst lastSection = document.createElement('div');\nconst phoneMenuLinks = document.querySelectorAll('.phone-menu li');\n\ncontainer.append(_navMenu__WEBPACK_IMPORTED_MODULE_0__.NavBar.nav, _home__WEBPACK_IMPORTED_MODULE_1__.Home.section, _about_us__WEBPACK_IMPORTED_MODULE_2__.AboutUs.section, _menu__WEBPACK_IMPORTED_MODULE_3__.Menu.section, lastSection);\nlastSection.classList.add('last-section');\nlastSection.append(_contacts__WEBPACK_IMPORTED_MODULE_4__.Contacts.section, _footer__WEBPACK_IMPORTED_MODULE_5__.Footer.footer);\n\nconst showPhoneMenu = () => _navMenu__WEBPACK_IMPORTED_MODULE_0__.PhoneMenu.mainMenu.classList.remove('invisible');\nconst hidePhoneMenu = () => _navMenu__WEBPACK_IMPORTED_MODULE_0__.PhoneMenu.mainMenu.classList.add('invisible');\nconst changeNavColor = () => {\n    if (window.scrollY > 730) {\n        _navMenu__WEBPACK_IMPORTED_MODULE_0__.NavBar.nav.classList.add('nav-scrolled'); \n        _navMenu__WEBPACK_IMPORTED_MODULE_0__.NavBar.hamburgerMenu.classList.add('hamburger-menu-scrolled');\n    } else if (window.scrollY <= 730) {\n        _navMenu__WEBPACK_IMPORTED_MODULE_0__.NavBar.nav.classList.remove('nav-scrolled');\n        _navMenu__WEBPACK_IMPORTED_MODULE_0__.NavBar.hamburgerMenu.classList.remove('hamburger-menu-scrolled');\n    }\n}\n\nwindow.addEventListener('scroll', changeNavColor);\n_navMenu__WEBPACK_IMPORTED_MODULE_0__.NavBar.hamburgerMenu.addEventListener('click', showPhoneMenu);\n_navMenu__WEBPACK_IMPORTED_MODULE_0__.PhoneMenu.xIcon.addEventListener('click', hidePhoneMenu);\nphoneMenuLinks.forEach(link => {\n    link.addEventListener('click', hidePhoneMenu);\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\nconst Menu = (() => {\n    const section = document.createElement('section');\n    const div = document.createElement('div');\n    const title = document.createElement('h1');\n    const info = document.createElement('p');\n    const moreLink = document.createElement('a');\n    const imgContainer = document.createElement('div');\n    const firstImg = document.createElement('img');\n    const secondImg = document.createElement('img');\n\n    section.setAttribute('id', 'menu');\n    div.classList.add('description');\n    title.textContent = 'Our menu';\n    info.textContent = `The whole family does care about the quality and variety of the dishes.\\n\n    As a matter of fact, the ingredients are all selected by granpa Roberto in person.\\n\n    The menu has plenty of options for any flavour.\n    `;\n    moreLink.setAttribute('href', '#');\n    moreLink.textContent = 'View menu...';\n    imgContainer.classList.add('images', 'menu-imgs');\n    firstImg.setAttribute('src', 'imgs/salame-pizza.png');\n    firstImg.setAttribute('alt', 'Salami pizza');\n    secondImg.setAttribute('src', 'imgs/margherita-pizza.png');\n    secondImg.setAttribute('alt', 'Margherita pizza');\n\n    section.append(div, imgContainer);\n    div.append(title, info, moreLink);\n    imgContainer.append(firstImg, secondImg);\n\n    return { section };\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navMenu.js":
/*!************************!*\
  !*** ./src/navMenu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NavBar: () => (/* binding */ NavBar),\n/* harmony export */   PhoneMenu: () => (/* binding */ PhoneMenu)\n/* harmony export */ });\nconst NavBar = (() => {\n    const nav = document.createElement('nav');\n    const logoLink = document.createElement('a');\n    const hamburgerMenu = document.createElement('img');\n    const navLinks = document.createElement('div');\n    const ul = document.createElement('ul');\n    const homeLi = document.createElement('li');\n    const aboutUsLi = document.createElement('li');\n    const menuLi = document.createElement('li');\n    const contactsLi = document.createElement('li');\n    const homeLink = document.createElement('a');\n    const aboutUsLink = document.createElement('a');\n    const menuLink = document.createElement('a');\n    const contactsLink = document.createElement('a');\n\n    logoLink.setAttribute('href', '#home');\n    logoLink.setAttribute('id', 'nav-logo');\n    logoLink.textContent = 'Roberto\\'s';\n    hamburgerMenu.setAttribute('src', 'imgs/icon-menu.png');\n    hamburgerMenu.setAttribute('alt', 'Hamburger menu');\n    hamburgerMenu.setAttribute('id', 'hamburger-menu');\n    navLinks.setAttribute('id', 'nav-links');\n    homeLink.setAttribute('href', '#home');\n    homeLink.classList.add('uppercase');\n    homeLink.textContent = 'Home';\n    aboutUsLink.setAttribute('href', '#about-us');\n    aboutUsLink.classList.add('uppercase');\n    aboutUsLink.textContent = 'About us';\n    menuLink.setAttribute('href', '#menu');\n    menuLink.classList.add('uppercase');\n    menuLink.textContent = 'Menu';\n    contactsLink.setAttribute('href', '#contacts');\n    contactsLink.classList.add('uppercase');\n    contactsLink.textContent = 'Contacts';\n\n    nav.append(logoLink, hamburgerMenu, navLinks);\n    navLinks.appendChild(ul);\n    ul.append(homeLi, aboutUsLi, menuLi, contactsLi);\n    homeLi.appendChild(homeLink);\n    aboutUsLi.appendChild(aboutUsLink);\n    menuLi.appendChild(menuLink);\n    contactsLi.appendChild(contactsLink);\n\n    return {\n        nav,\n        hamburgerMenu\n    }\n})();\n\nconst PhoneMenu = (() => {\n    const mainMenu = document.createElement('div');\n    const xIcon = document.createElement('img');\n    const logo = document.createElement('h1');\n    const ul = document.createElement('ul');\n    const homeLi = document.createElement('li');\n    const aboutUsLi = document.createElement('li');\n    const menuLi = document.createElement('li');\n    const contactsLi = document.createElement('li');\n    const homeLink = document.createElement('a');\n    const aboutUsLink = document.createElement('a');\n    const menuLink = document.createElement('a');\n    const contactsLink = document.createElement('a');\n\n    mainMenu.classList.add('phone-menu', 'invisible');\n    xIcon.setAttribute('src', 'imgs/x.png')\n    xIcon.setAttribute('alt', 'X icon');\n    xIcon.setAttribute('id', 'x-icon');\n    logo.textContent = 'Roberto\\'s';\n    homeLink.setAttribute('href', '#home');\n    homeLink.classList.add('uppercase');\n    homeLink.textContent = 'Home';\n    aboutUsLink.setAttribute('href', '#about-us');\n    aboutUsLink.classList.add('uppercase');\n    aboutUsLink.textContent = 'About us';\n    menuLink.setAttribute('href', '#menu');\n    menuLink.classList.add('uppercase');\n    menuLink.textContent = 'Menu';\n    contactsLink.setAttribute('href', '#contacts');\n    contactsLink.classList.add('uppercase');\n    contactsLink.textContent = 'Contacts';\n\n    mainMenu.append(xIcon, logo, ul);\n    ul.append(homeLi, aboutUsLi, menuLi, contactsLi);\n    homeLi.appendChild(homeLink);\n    aboutUsLi.appendChild(aboutUsLink);\n    menuLi.appendChild(menuLink);\n    contactsLi.appendChild(contactsLink);\n\n    return {\n        mainMenu,\n        xIcon\n    }\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/navMenu.js?");

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