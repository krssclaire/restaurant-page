const navBar = document.querySelector('nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const xIcon = document.querySelector('#x-icon');
const phoneMenu = document.querySelector('.phone-menu');
const phoneMenuLinks = document.querySelectorAll('.phone-links');

window.addEventListener('scroll', changeNavColor);
hamburgerMenu.addEventListener('click', showPhoneMenu);
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
        navBar.classList.add('nav-scrolled'); 
        hamburgerMenu.classList.add('hamburger-menu-scrolled');
    } else if (window.scrollY <= 730) {
        navBar.classList.remove('nav-scrolled');
        hamburgerMenu.classList.remove('hamburger-menu-scrolled');
    }
}