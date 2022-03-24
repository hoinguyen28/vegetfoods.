$(".banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.member__content').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
});

var menuMobile = document.querySelector('.header__mobile');
menuMobile.onclick = function(){
    let Menu = document.querySelector('.header__menu');
    Menu.classList.toggle('block');
}