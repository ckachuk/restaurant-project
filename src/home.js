import domManagament from "./domManagement";

const home = (function(){

    const homeContent = {
        title: 'Best pizza of the country',
        textContent: 'Located in the heart of a passionate and stimulating city. Protagonist of the golden moments of the mythical Corrientes Avenue.',
        imgHome: 'https://www.cronista.com/files/image/293/293206/5ffe06806f863.jpg',
    }

    const renderHome = function(){
        const home = document.createElement('div');
        home.className = 'homeContent';


        const h1Home = domManagament.domH1('headingHome', homeContent.title);
        const pHome = domManagament.domParagraph('paragraphOne', homeContent.textContent);
        const imgHome = domManagament.domImage('imgRestaurantHome', homeContent.imgHome);

        home.appendChild(h1Home);
        home.appendChild(pHome);
        home.appendChild(imgHome);

        return home;
    }

    const loadHome = function(){
        const homeDiv = document.createElement('div');
        homeDiv.className = 'homeDiv';
        
        
        homeDiv.appendChild(renderHome());

        return homeDiv;
    }

    return {loadHome};
})();


export default home;