


let indice =0;

let images = ["img/1.jpg","img/2.jpg"];


document.getElementById("siguiente").addEventListener("click",()=>{
    if (indice < 2) {
        indice++;
    }
    document.getElementById("img").setAttribute("src",images[indice]);
});