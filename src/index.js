import { NavBar } from './navMenu';
import { PhoneMenu } from './navMenu';
import { Home } from './home';
import { AboutUs } from './about-us';
import { Menu } from './menu';
import { Contacts } from './contacts';
import { Footer } from './footer';


const container = document.querySelector('#content');
const lastSection = document.createElement('div');
const phoneMenuLinks = document.querySelectorAll('.phone-menu li');

container.append(NavBar.nav, Home.section, AboutUs.section, Menu.section, lastSection);
lastSection.classList.add('last-section');
lastSection.append(Contacts.section, Footer.footer);

const showPhoneMenu = () => PhoneMenu.mainMenu.classList.remove('invisible');
const hidePhoneMenu = () => PhoneMenu.mainMenu.classList.add('invisible');
const changeNavColor = () => {
    if (window.scrollY > 730) {
        NavBar.nav.classList.add('nav-scrolled'); 
        NavBar.hamburgerMenu.classList.add('hamburger-menu-scrolled');
    } else if (window.scrollY <= 730) {
        NavBar.nav.classList.remove('nav-scrolled');
        NavBar.hamburgerMenu.classList.remove('hamburger-menu-scrolled');
    }
}

window.addEventListener('scroll', changeNavColor);
NavBar.hamburgerMenu.addEventListener('click', showPhoneMenu);
PhoneMenu.xIcon.addEventListener('click', hidePhoneMenu);
phoneMenuLinks.forEach(link => {
    link.addEventListener('click', hidePhoneMenu);
});