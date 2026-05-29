


let indice =0;

let images = ["img/1.jpg", "img/2.jpg,img/3.jpg", "img/4.jpg", "img/5.jpg"];


document.getElementById("siguiente").addEventListener("click",()=>{
    if (indice < 5) {
        indice++;
    }
    document.getElementById("img").setAttribute("src",images[indice]);
});