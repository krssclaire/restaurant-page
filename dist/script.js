/*
const container = document.querySelector('#content');
//const lastSection = document.querySelector('.last-section');
const lastSection = document.createElement('div');
lastSection.classList.add('last-section');

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
    logoLink.textContent = 'Roberto\'s';
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

const PhoneMenu = (() => {
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

    mainMenu.classList.add('phone-menu', 'invisible');
    xIcon.setAttribute('src', 'imgs/x.png')
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

const Home = (() => {
    const section = document.createElement('section');
    const hero = document.createElement('div');
    const heading = document.createElement('div');
    const pizzeria = document.createElement('h1');
    const logo = document.createElement('h1');
    const arrowLink = document.createElement('a');
    const arrow = document.createElement('img');

    section.setAttribute('id', 'home');
    hero.classList.add('hero-section');
    pizzeria.setAttribute('id', 'pizzeria');
    pizzeria.textContent = 'pizzeria';
    logo.setAttribute('id', 'main-logo');
    logo.textContent = 'Roberto\'s';
    arrowLink.setAttribute('href', '#about-us');
    arrow.setAttribute('src', 'imgs/arrow-down-sign.png');
    arrow.setAttribute('alt', 'Arrow down');
    arrow.setAttribute('id', 'arrow');

    section.append(hero);
    hero.append(heading, arrowLink);
    heading.append(pizzeria, logo);
    arrowLink.appendChild(arrow);

    return { section };
})();

const AboutUs = (() => {
    const section = document.createElement('section');
    const div = document.createElement('div');
    const title = document.createElement('h1');
    const info = document.createElement('p');
    const moreLink = document.createElement('a');
    const imgContainer = document.createElement('div');
    const firstImg = document.createElement('img');
    const secondImg = document.createElement('img');

    section.setAttribute('id', 'about-us');
    div.classList.add('description');
    title.textContent = 'Russo Family';
    info.textContent = `Originally tomatoes farmers in the south of Italy, the Russo family opened their first restaurant in their beautiful Campania.\n
    Forced by the '800s crisis, all the family moved to the US in 1850 where they reopened a new restaurant with high quality dishes.
    `;
    moreLink.setAttribute('href', '#');
    moreLink.textContent = 'Read more...';
    imgContainer.classList.add('images');
    firstImg.setAttribute('src', 'imgs/tomatoes.png');
    firstImg.setAttribute('alt', 'Tomatoes');
    secondImg.setAttribute('src', 'imgs/mozzarella.png');
    secondImg.setAttribute('alt', 'Mozzarella');

    section.append(div, imgContainer);
    div.append(title, info, moreLink);
    imgContainer.append(firstImg, secondImg);

    return { section };
})();

const Menu = (() => {
    const section = document.createElement('section');
    const div = document.createElement('div');
    const title = document.createElement('h1');
    const info = document.createElement('p');
    const moreLink = document.createElement('a');
    const imgContainer = document.createElement('div');
    const firstImg = document.createElement('img');
    const secondImg = document.createElement('img');

    section.setAttribute('id', 'menu');
    div.classList.add('description');
    title.textContent = 'Our menu';
    info.textContent = `The whole family does care about the quality and variety of the dishes.\n
    As a matter of fact, the ingredients are all selected by granpa Roberto in person.\n
    The menu has plenty of options for any flavour.
    `;
    moreLink.setAttribute('href', '#');
    moreLink.textContent = 'View menu...';
    imgContainer.classList.add('images', 'menu-imgs');
    firstImg.setAttribute('src', 'imgs/salame-pizza.png');
    firstImg.setAttribute('alt', 'Salami pizza');
    secondImg.setAttribute('src', 'imgs/margherita-pizza.png');
    secondImg.setAttribute('alt', 'Margherita pizza');

    section.append(div, imgContainer);
    div.append(title, info, moreLink);
    imgContainer.append(firstImg, secondImg);

    return { section };
})();

const Contacts = (() => {
    const section = document.createElement('section');
    const title = document.createElement('h1');
    const contactsGrp = document.createElement('div');
    const phoneGrp = document.createElement('div');
    const phoneTitle = document.createElement('p');
    const phoneInfo = document.createElement('p');
    const emailGrp = document.createElement('div');
    const emailTitle = document.createElement('p');
    const emailInfo = document.createElement('p');
    const addressGrp = document.createElement('div');
    const addressTitle = document.createElement('p');
    const addressInfo = document.createElement('p');

    section.setAttribute('id', 'contacts');
    title.classList.add('uppercase');
    title.textContent = 'Contacts';
    contactsGrp.classList.add('contact-type');
    phoneGrp.classList.add('contact');
    phoneTitle.classList.add('contact-title', 'bold');
    phoneTitle.textContent = 'Phone contact';
    phoneInfo.classList.add('contact-info');
    phoneInfo.textContent = '+1 234 567 890';
    
    emailGrp.classList.add('contact');
    emailTitle.classList.add('contact-title', 'bold');
    emailTitle.textContent = 'Email';
    emailInfo.classList.add('contact-info');
    emailInfo.textContent = 'pizzeriarobertos@mail.us';
    
    addressGrp.classList.add('contact');
    addressTitle.classList.add('contact-title', 'bold');
    addressTitle.textContent = 'Address';
    addressInfo.classList.add('contact-info');
    addressInfo.textContent = 'San Francisco, Beautyland 25';

    section.append(title, contactsGrp);
    contactsGrp.append(phoneGrp, emailGrp, addressGrp);
    phoneGrp.append(phoneTitle, phoneInfo);
    emailGrp.append(emailTitle, emailInfo);
    addressGrp.append(addressTitle, addressInfo);

    return { section };
})();

const Footer = (() => {
    const footer = document.createElement('footer');
    const credits = document.createElement('p');

    credits.textContent = '©2023 - Roberto\'s';
    footer.appendChild(credits);

    return { footer };
})();

container.append(NavBar.nav, Home.section, AboutUs.section, Menu.section, lastSection);
lastSection.append(Contacts.section, Footer.footer);

const phoneMenuLinks = document.querySelectorAll('.phone-menu li');

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
*/