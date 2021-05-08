let imglist = [
    {img: 'img/hook-v&p.jpg', alt: 'violet & pink'},
    {img: 'img/hook-y&o.jpg', alt: 'yellow & orange'},
    {img: 'img/hook-b&sb&w.jpg', alt: 'blue & sky blue & white'},
    {img: 'img/hook-v&dp&p.jpg', alt:'violet & deep pink & pink'},
    {img: 'img/hook-r&o&y.jpg', alt: 'red & orange & yellow'}
] ;

let modalimg = [
    {img: 'img/hook-v&p2.jpg'},
    {img: 'img/hook-y&o.2jpg'},
    {img: 'img/hook-b&sb&w2.jpg'},
    {img: 'img/hook-v&dp&p2.jpg'},
    {img: 'img/hook-r&o&y2.jpg'}
] ;
var src = imglist.length;

document.write("<ul class='contents-item'>");
for (var i = 0; i < src; i++){
    document.write("<li>")
    document.write("<img src='" + imglist[i].img +"' >");
    document.write("<p>" + imglist[i].alt +"</p>");
    document.write("</li>");
}
document.write("</ul>");
