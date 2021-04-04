var imglist = [
    {img: 'rose-red.jpg', alt: 'Rose(red)'},
    {img: 'rose-blue.jpg', alt: 'Rose(blue)'},
    {img: 'rose-yellow.jpg', alt: 'Rose(yellow)'},
    {img: 'rose-violet.jpg', alt: 'Rose(violet)'},
    {img: 'rose-black.jpg', alt: 'Rose(black)'},
    {img: 'Tulip-red.jpg', alt: 'Tulip(red)'},
    {img: 'Tulip-blue.jpg', alt: 'Tulip(blue)'},
    {img: 'Tulip-yellow.jpg', alt: 'Tulip(yellow)'},
    {img: 'Carnation.jpg', alt: 'Carnation'}
];

var src = imglist.length;

document.write("<div class='contents'>");
for (var i = 0; i < src; i++){
    document.write("<ul class='contents-item'>");
    document.write("  <li>")
    document.write("    <img src='" + imglist[i].img +"' >");
    document.write("    <p>" + imglist[i].alt +"</p>");
    document.write("  </li>");
    document.write("</ul>");
}
document.write("</div>");
