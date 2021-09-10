import domManagement from "./domManagement";
import contact from "./contact";
import home from "./home"
import menu from "./menu";
import './style.css';




const index = (function(){

    const content = document.querySelector('.content');

    const header = document.createElement('div');
    header.className = 'header';

    header.appendChild(domManagement.domH1('titlePage', 'PIZZA RESTAURANT'));


    content.appendChild(home.loadHome());
    
    
    const but2 = domManagement.domButton('homeButton', 'headerButtons',  'Home');
    
    but2.addEventListener('click',() => {
        !!document.querySelector('.menuDiv')? deleteDiv('.menuDiv') : 0;
        !!document.querySelector('.contactDiv')? deleteDiv('.contactDiv') : 0;
        !!document.querySelector('.homeDiv')? 1 :  content.appendChild(home.loadHome());
    })
    
    header.appendChild(but2);
    
    
    const but3 = domManagement.domButton('menuButton', 'headerButtons',  'Menu');
    
    but3.addEventListener('click',() =>{ 
        !!document.querySelector('.homeDiv')? deleteDiv('.homeDiv') : 0;
        !!document.querySelector('.contactDiv')? deleteDiv('.contactDiv') : 0;
        !!document.querySelector('.menuDiv')? 1 :  content.appendChild(menu.loadMenu());
    })
    
    header.appendChild(but3);
    

    const but = domManagement.domButton('contactButton', 'headerButtons',  'Contact');

    but.addEventListener('click',() =>{
        !!document.querySelector('.menuDiv')? deleteDiv('.menuDiv') : 0;
        !!document.querySelector('.homeDiv')? deleteDiv('.homeDiv') : 0;
        !!document.querySelector('.contactDiv')? 0 :  content.appendChild(contact.loadContact());
    })
    
    header.appendChild(but);
    

    content.appendChild(header);

    const deleteDiv = function(className){
        const div = document.querySelector(className)
        div.remove();
    }

    const footer = document.createElement('div');
    footer.className = 'footer';

    footer.appendChild(domManagement.domAnchor('anchorID','developed by carlk', 'https://github.com/ckachuk'));

    content.appendChild(footer);

})();