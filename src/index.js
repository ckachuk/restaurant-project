import domManagement from "./domManagement";
import contact from "./contact"




const content = document.getElementById('content');



const but = domManagement.domButton('contactButton', 'headerButtons',  'Contact');

but.addEventListener('click',() => content.appendChild(contact.loadContact()))

content.appendChild(but);