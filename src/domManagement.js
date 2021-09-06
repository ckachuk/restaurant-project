

const domManagament = (function(){

    const domButton = function(nameID, className, innerHtml){

        const button = document.createElement('button');
        button.id = nameID;
        button.className = className
        button.innerHTML = innerHtml;

        return button;
    }


    const domImage = function(nameID, srcImage){
        const img = document.createElement('img');

        img.id = nameID;
        img.src = srcImage;

        return img;
    }
    return{
        domButton,
        domImage
    }
})();


export default domManagament;
