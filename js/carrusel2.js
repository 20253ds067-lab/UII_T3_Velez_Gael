


let indice =0;

let images = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];


document.getElementById("siguiente").addEventListener("click",()=>{
    if (indice < images.length - 1) {
        indice++;
    }
    document.getElementById("img").setAttribute("src",images[indice]);
});

document.getElementById("anterior").addEventListener("click", () => {
    if (indice > 0) {
        indice--;
        document.getElementById("img").setAttribute("src", images[indice]);
    }
});