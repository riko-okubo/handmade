let imglist = [
    {img: 'img/hook-v&p.jpg', alt: 'violet & pink'},
    {img: 'img/hook-y&o.jpg', alt: 'yellow & orange'},
    {img: 'img/hook-b&sb&w.jpg', alt: 'blue & sky blue & white'},
    {img: 'img/hook-v&dp&p.jpg', alt:'violet & deep pink & pink'},
    {img: 'img/hook-r&o&y.jpg', alt: 'red & orange & yellow'}
] ;

let modalimg = [
    {img: 'img/hook-v&p2.jpg'},
<<<<<<< HEAD
    {img: 'img/hook-y&o2.jpg'},
=======
    {img: 'img/hook-y&o.2jpg'},
>>>>>>> main
    {img: 'img/hook-b&sb&w2.jpg'},
    {img: 'img/hook-v&dp&p2.jpg'},
    {img: 'img/hook-r&o&y2.jpg'}
] ;
<<<<<<< HEAD

let src = imglist.length;
let image = ""; 
=======
var src = imglist.length;
>>>>>>> main

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