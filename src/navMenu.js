import XIcon from './assets/imgs/x.png';
import MenuIcon from './assets/imgs/icon-menu.png';

export const NavBar = (() => {
    const nav = document.createElement('nav');
    const logoLink = document.createElement('a');
    const hamburgerMenu = document.createElement('img');
    const navLinks = document.createElement('div');
    const ul = document.createElement('ul');
    const homeLi = document.createElement('li');
    const aboutUsLi = document.createElement('li');
    const menuLi = document.createElement('li');
    const contactsLi = document.createElement('li');
    const homeLink = document.createElement('a');
    const aboutUsLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const contactsLink = document.createElement('a');

    logoLink.setAttribute('href', '#home');
    logoLink.setAttribute('id', 'nav-logo');
    logoLink.textContent = 'Roberto\'s';
    hamburgerMenu.setAttribute('src', MenuIcon);
    hamburgerMenu.setAttribute('alt', 'Hamburger menu');
    hamburgerMenu.setAttribute('id', 'hamburger-menu');
    navLinks.setAttribute('id', 'nav-links');
    homeLink.setAttribute('href', '#home');
    homeLink.classList.add('uppercase');
    homeLink.textContent = 'Home';
    aboutUsLink.setAttribute('href', '#about-us');
    aboutUsLink.classList.add('uppercase');
    aboutUsLink.textContent = 'About us';
    menuLink.setAttribute('href', '#menu');
    menuLink.classList.add('uppercase');
    menuLink.textContent = 'Menu';
    contactsLink.setAttribute('href', '#contacts');
    contactsLink.classList.add('uppercase');
    contactsLink.textContent = 'Contacts';

    nav.append(logoLink, hamburgerMenu, navLinks);
    navLinks.appendChild(ul);
    ul.append(homeLi, aboutUsLi, menuLi, contactsLi);
    homeLi.appendChild(homeLink);
    aboutUsLi.appendChild(aboutUsLink);
    menuLi.appendChild(menuLink);
    contactsLi.appendChild(contactsLink);

    return {
        nav,
        hamburgerMenu
    }
})();

export const PhoneMenu = (() => {
    const mainMenu = document.createElement('div');
    const xIcon = document.createElement('img');
    const logo = document.createElement('h1');
    const ul = document.createElement('ul');
    const homeLi = document.createElement('li');
    const aboutUsLi = document.createElement('li');
    const menuLi = document.createElement('li');
    const contactsLi = document.createElement('li');
    const homeLink = document.createElement('a');
    const aboutUsLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const contactsLink = document.createElement('a');

    mainMenu.classList.add('phone-menu');
    xIcon.setAttribute('src', XIcon)
    xIcon.setAttribute('alt', 'X icon');
    xIcon.setAttribute('id', 'x-icon');
    logo.textContent = 'Roberto\'s';
    homeLink.setAttribute('href', '#home');
    homeLink.classList.add('uppercase');
    homeLink.textContent = 'Home';
    aboutUsLink.setAttribute('href', '#about-us');
    aboutUsLink.classList.add('uppercase');
    aboutUsLink.textContent = 'About us';
    menuLink.setAttribute('href', '#menu');
    menuLink.classList.add('uppercase');
    menuLink.textContent = 'Menu';
    contactsLink.setAttribute('href', '#contacts');
    contactsLink.classList.add('uppercase');
    contactsLink.textContent = 'Contacts';

    mainMenu.append(xIcon, logo, ul);
    ul.append(homeLi, aboutUsLi, menuLi, contactsLi);
    homeLi.appendChild(homeLink);
    aboutUsLi.appendChild(aboutUsLink);
    menuLi.appendChild(menuLink);
    contactsLi.appendChild(contactsLink);

    return {
        mainMenu,
        xIcon
    }
})();