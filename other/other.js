let imglist = [
    {img: 'keyring-pair.jpg', alt: 'keyring-pair'},
    {img: 'rain.jpg', alt: 'rain-earring'},
    {img: 'necklace-rose-black-1.jpg', alt: 'necklace-rose-black' },
    {img: 'konpeito-1.jpg', alt: 'konpeito'}
];

let modalimg = [
    {img: 'keyring-red.jpg'},
    {img: 'umbrella.jpg'},
    {img: 'necklace-rose-black-2.jpg'},
    {img: 'konpeito-2.jpg'}
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
