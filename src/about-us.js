import TomatoesImg from './assets/imgs/tomatoes.png';
import MozzarellaImg from './assets/imgs/mozzarella.png';

export const AboutUs = (() => {
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
    firstImg.setAttribute('src', TomatoesImg);
    firstImg.setAttribute('alt', 'Tomatoes');
    secondImg.setAttribute('src', MozzarellaImg);
    secondImg.setAttribute('alt', 'Mozzarella');

    section.append(div, imgContainer);
    div.append(title, info, moreLink);
    imgContainer.append(firstImg, secondImg);

    return { section };
})();