const container = document.querySelector('#content');

const NavBar = (() => {
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
    logoLink.textContent = "Roberto's";
    hamburgerMenu.setAttribute('src', 'imgs/icon-menu.png');
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

container.prepend(NavBar.nav);


const xIcon = document.querySelector('#x-icon');
const phoneMenu = document.querySelector('.phone-menu');
const phoneMenuLinks = document.querySelectorAll('.phone-links');

window.addEventListener('scroll', changeNavColor);
NavBar.hamburgerMenu.addEventListener('click', showPhoneMenu);
xIcon.addEventListener('click', hidePhoneMenu);

phoneMenuLinks.forEach(link => {
    link.addEventListener('click', hidePhoneMenu);
});

function showPhoneMenu() {
    phoneMenu.classList.remove('invisible');
}

function hidePhoneMenu() {
    phoneMenu.classList.add('invisible');
}

function changeNavColor() {
    if (window.scrollY > 730) {
        NavBar.nav.classList.add('nav-scrolled'); 
        NavBar.hamburgerMenu.classList.add('hamburger-menu-scrolled');
    } else if (window.scrollY <= 730) {
        NavBar.nav.classList.remove('nav-scrolled');
        NavBar.hamburgerMenu.classList.remove('hamburger-menu-scrolled');
    }
}