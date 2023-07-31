export const Contacts = (() => {
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