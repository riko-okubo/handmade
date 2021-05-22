function onClickClose() {
    let result = confirm('終了しますか？');
    if (result) {
        window.close();
    }
}

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