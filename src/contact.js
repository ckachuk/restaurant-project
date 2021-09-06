import domManagament from "./domManagement";

const contact = (function(){

    const contactData = {
        address: 'Av. Corrientes 1368, C1043 CABA',
        country: 'Argentina',
        phone: '011 4371-8141',
        imgSrc: 'https://inta.gob.ar/ftp-files/unidades_mapas/122600.jpg'
    }

    const renderContact = function(){
        const contact = document.createElement('div')
        contact.id = 'contentContact';

        const addressP = document.createElement('p');
        addressP.innerHTML = contactData.address;

        const countryP = document.createElement('p');
        countryP.innerHTML = contactData.country;

        const phoneP = document.createElement('p');
        phoneP.innerHTML = contactData.phone;

        const imgRestaurant = domManagament.domImage('imgRestaurant', contactData.imgSrc);

        contact.appendChild(addressP);
        contact.appendChild(countryP);
        contact.appendChild(phoneP);
        contact.appendChild(imgRestaurant);


        return contact;
    }


    const loadContact = function(){
        const contactDiv = document.createElement('div');
        contactDiv.id = 'contactDiv';
        
        contactDiv.appendChild(renderContact());

        return contactDiv;
    }

    return {loadContact};
})();



export default contact;