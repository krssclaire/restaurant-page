export const Footer = (() => {
    const footer = document.createElement('footer');
    const credits = document.createElement('p');
    credits.textContent = '©2023 - Roberto\'s';
    footer.appendChild(credits);

    return { footer };
})();