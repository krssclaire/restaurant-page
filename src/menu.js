export const Menu = (() => {
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