let imglist = [
    {img: 'img/red-rose.jpg', alt: 'Rose(red)'},
    {img: 'img/blue-rose.jpg', alt: 'Rose(blue)'},
    {img: 'img/yellow-rose.jpg', alt: 'Rose(yellow)'},
    {img: 'img/violet-rose.jpg', alt: 'Rose(violet)'},
    {img: 'img/black-rose.jpg', alt: 'Rose(black)'},
    {img: 'img/deeppink-rose.jpg', alt: 'Rose(deep pink)'},
    {img: 'img/red-tulip.jpg', alt: 'Tulip(red)'},
    {img: 'img/blue-tulip.jpg', alt: 'Tulip(blue)'},
    {img: 'img/yellow-tulip.jpg', alt: 'Tulip(yellow)'},
    {img: 'img/carnaition.jpg', alt: 'Carnation'},
    {img: 'img/bottan.jpg', alt: 'Camellia'},
];

let modalimg = [
    {img: 'img/red-rose2.jpg'},
    {img: 'img/blue-rose-top.jpg'},
    {img: 'img/yellow-rose-top.jpg'},
    {img: 'img/violet-rose-top.jpg'},
    {img: 'img/black-rose-top.jpg'},
    {img: 'img/deeppink-rose-top.jpg'},
    {img: 'img/red-tulip2.jpg'},
    {img: 'img/blue-tulip2.jpg'},
    {img: 'img/yellow-tulip2.jpg'},
    {img: 'img/carnaition2.jpg'},
    {img: 'img/bottan2.jpg'},
];

let src = imglist.length;
let image = ""; 

document.write("<div class='contents'>");
document.write("<ul class='contents-item' id='open'>");
for (let i = 0; i < src; i++){
    document.write("<li>");
    document.write("<a id = 'modalOpen' class = 'modalOpen'>")
    document.write("<img src='" + imglist[i].img +"' >");
    document.write("<p>" + imglist[i].alt +"</p>");
    document.write("</a>");
    document.write("</li>");
}
document.write("</ul>");
document.write("</div>");

document.write("<div class = 'modal' id = 'modal'>")
document.write("<a id = 'modalClose' class = 'modalClose'>");
document.write("close");
document.write("</a>");
document.write("</div>");

document.getElementById("open").addEventListener("click", function(e) {
    let index =  0;
    for(let i=0; i<src; i++){
        if(imglist[i].img === e.target.attributes[0].nodeValue){
            index = i;
            break;
        }
    }
    image = modalimg[index].img;
    let imgTag = document.createElement("img");
    imgTag.id = "display";
    imgTag.src = image;
    let modal = document.getElementById("modal");
    modal.prepend(imgTag);
    console.log(image);
    document.getElementById("modal").classList.add("acutive");
    document.getElementById("mask").classList.add("acutive");
})

document.getElementById("modalClose").addEventListener("click", function() {
    document.getElementById("display").remove();
    document.getElementById("modal").classList.remove("acutive");
    document.getElementById("mask").classList.remove("acutive");
})
