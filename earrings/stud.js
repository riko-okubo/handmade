var imglist = [
    {img: 'img/stud-b.jpg', alt: 'blue'},
    {img: 'img/stud-g.jpg', alt: 'green'},
    {img: 'img/stud-o.jpg', alt: 'orange'},
    {img: 'img/stud-sb&w-1.jpg', alt: 'sky blue & white'},
    {img: 'img/stud-r&w-1.jpg', alt: 'red & white'},
    {img: 'img/stud-v&p&w-1.jpg', alt: 'violet & pink & white'},
    {img: 'img/stud-o&g&y-1.jpg', alt: 'orange & green & yellow'},
    {img: 'img/red-rose-earring1.jpg', alt: 'red rose'},
    {img: 'img/red-rose-earring(s)1.jpg', alt: 'red rose (small)'},
    {img: 'img/violet-rose-earring(s)1.jpg', alt: 'violet rose (small)'},
    {img: 'img/red-tulip-earring1.jpg', alt: 'red tulip'},
] ;

var modalimg = [
    {img: 'img/stud-b.jpg'},
    {img: 'img/stud-g.jpg'},
    {img: 'img/stud-o.jpg'},
    {img: 'img/stud-sb&w-2.jpg'},
    {img: 'img/stud-r&w-2.jpg'},
    {img: 'img/stud-v&p&w-2.jpg'},
    {img: 'img/stud-o&g&y-2.jpg'},
    {img: 'img/red-rose-earrings2.jpg'},
    {img: 'img/red-rose-earring(s)1.jpg'},
    {img: 'img/violet-rose-earring(s)1.jpg'},
    {img: 'img/red-tulip-earring2.jpg'},
];

var src = imglist.length;

document.write("<div class='contents'>");
document.write("<ul class='contents-item' id='open'>");
for (var i = 0; i < src; i++){
    document.write("<a id = 'modalOpen' class = 'modalOpen'>")
    document.write("<img src='" + imglist[i].img +"' >");
    document.write("<p>" + imglist[i].alt +"</p>");
    document.write("</a>");
}
document.write("</ul>");
document.write("</div>");

// document.write("<ul class='contents-item' id='mo'>");
for (var i = 0; i < src; i++){
    document.write("<div class = 'modal' id = 'modal'>")
    document.write("<img src='" + modalimg[i].img +"' >");
    document.write("<a id = 'modalClose' class = 'modalClose'>");
    document.write("close");
    document.write("</a>");
    document.write("</div>");
}
// document.write("</ul>");

document.getElementById("open").addEventListener("click", function() {
    document.getElementById("modal").classList.add("acutive");
    document.getElementById("mask").classList.add("acutive");
})

document.getElementById("modalClose").addEventListener("click", function() {
    document.getElementById("modal").classList.remove("acutive");
    document.getElementById("mask").classList.remove("acutive");
})
