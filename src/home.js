import ArrowIcon from './assets/imgs/arrow-down-sign.png';

export const Home = (() => {
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
    arrow.setAttribute('src', ArrowIcon);
    arrow.setAttribute('alt', 'Arrow down');
    arrow.setAttribute('id', 'arrow');

    section.append(hero);
    hero.append(heading, arrowLink);
    heading.append(pizzeria, logo);
    arrowLink.appendChild(arrow);

    return { section };
})();