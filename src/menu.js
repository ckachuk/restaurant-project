import domManagament from "./domManagement";

const menu = (function(){

    const menuOption = function(title, ingredients, imgOptionSrc){

        const renderOption = function(){
            const optionDiv = document.createElement('div');
            optionDiv.className = 'menuOptions'

            const titleOption = domManagament.domH2('tOption', title);
            const ingredientsOption = domManagament.domParagraph('pOption', ingredients);
            const imgOption = domManagament.domImage('imgOptionMenu', imgOptionSrc)

            optionDiv.appendChild(titleOption);
            optionDiv.appendChild(ingredientsOption);
            optionDiv.appendChild(imgOption);
            
            return optionDiv;
        }

        return { renderOption}
    }

    const mozzarella = menuOption('Mozarella', 'Mozarella, tomato sauce', 'https://media-cdn.tripadvisor.com/media/photo-s/0f/e1/48/0f/pizza-de-muzzarella-grande.jpg');
    const specialOfTheHouse = menuOption('Special of the house', 'Mozarella, morron, natural tomato, olives, tomato sauce', 'https://media-cdn.tripadvisor.com/media/photo-s/12/41/b6/b8/especial-guerrin-chica.jpg')
    const champignon = menuOption('Pizza of champignon', 'Mozarella, champignon, onion, tomato sauce', 'https://media-cdn.tripadvisor.com/media/photo-s/01/c0/be/f3/pizzeria-guerrin.jpg');
    const onionPizza = menuOption('Onion pizza', 'Mozarella, onion, tomato sauce', 'https://nosolotango.files.wordpress.com/2015/10/pizzaaaaaaaa.jpg');


    const menuList = [mozzarella, specialOfTheHouse, champignon, onionPizza];

    const loadMenu = function(){
        const menuDiv = document.createElement('div');
        menuDiv.className = 'menuDiv';

        const menuH1 = domManagament.domH1('menuH1', 'MENU');

        menuDiv.appendChild(menuH1);

        menuList.forEach(element => {
            menuDiv.appendChild(element.renderOption());
        });
        

        return menuDiv;
    }

    return {loadMenu}
})();


export default menu;
    