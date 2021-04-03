function onClickClose() {
    let result = confirm('終了しますか？');
    if (result) {
        window.close();
    }
}

/*const images = ["earrings/IMG_20200413_105638.jpg","earrings/IMG_20200413_104115.jpg","earrings/IMG_20200413_112029.jpg","earrings/IMG_20200413_112100.jpg","flowers/IMG_20210318_084726.jpg","fliwers/IMG_20210316_120211.jpg"];

let count = 0;
const slideimage =()=>{
    if(count >= images.length){
        count = 0;
    }
    else{
        document.getElementById('slideshow').src = images[count];
        count++;
    }
}

let slideid = 0;
const startstop = () => {
    if(slideid === 0){
        slideid = setInterval(slideimage, 1000);
    }
    else{
        clearInterval(slideid);
        slideid = 0;
    }
}
document.getElementById('btn').onclick = startstop;*/

/*$(document).ready(function () {
    $('.slider').slick({
        autoplay: true
    });
});*/

var swiper = new Swiper('.swiper-container',{
    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});