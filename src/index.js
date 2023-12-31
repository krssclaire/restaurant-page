import { NavBar } from './navMenu';
import { PhoneMenu } from './navMenu';
import { Home } from './home';
import { AboutUs } from './about-us';
import { Menu } from './menu';
import { Contacts } from './contacts';
import { Footer } from './footer';
import './style.css';

const container = document.querySelector('#content');
const lastSection = document.createElement('div');

container.append(NavBar.nav, Home.section, AboutUs.section, Menu.section, lastSection);
lastSection.classList.add('last-section');
lastSection.append(Contacts.section, Footer.footer);

const showPhoneMenu = () => container.prepend(PhoneMenu.mainMenu);
const hidePhoneMenu = () => container.removeChild(PhoneMenu.mainMenu);
const changeNavColor = () => {
    if (window.scrollY > 730) {
        NavBar.nav.classList.add('nav-scrolled'); 
        NavBar.hamburgerMenu.classList.add('hamburger-menu-scrolled');
    } else if (window.scrollY <= 730) {
        NavBar.nav.classList.remove('nav-scrolled');
        NavBar.hamburgerMenu.classList.remove('hamburger-menu-scrolled');
    }
};

window.addEventListener('scroll', changeNavColor);
NavBar.hamburgerMenu.addEventListener('click', () => {
    showPhoneMenu();
    const phoneMenuLinks = document.querySelectorAll('.phone-link');
    phoneMenuLinks.forEach(link => {
        link.addEventListener('click', hidePhoneMenu); 
    });
});
PhoneMenu.xIcon.addEventListener('click', hidePhoneMenu);