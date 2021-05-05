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

var src = imglist.length;

document.write("<div class='contents'>");
document.write("<ul class='contents-item'>");
for (var i = 0; i < src; i++){
    document.write("<li>")
    document.write("<img src='" + imglist[i].img +"' >");
    document.write("<p>" + imglist[i].alt +"</p>");
    document.write("</li>");
}
document.write("</ul>");
document.write("</div>");

document.getElementById("modalOpen").addEventListener("click", function() {
    document.getElementById("modal").classList.add("acutive");
    document.getElementById("mask").classList.add("acutive");
})

document.getElementById("modalClose").addEventListener("click", function() {
    document.getElementById("modal").classList.remove("acutive");
    document.getElementById("mask").classList.remove("acutive");
})