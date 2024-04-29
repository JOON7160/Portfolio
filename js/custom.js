$(function(){

    //trigger control
    $('.trigger').click(function(){
        $(this).toggleClass('active')
        $('.gnb').toggleClass('active')
    })
    $('.gnb__list a').click(function(){
        $('.trigger, .gnb').removeClass('active')
    })
    //swiper
    var uiSwiper = new Swiper(".ui__swiper", {
        slidesPerView: "1",
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        loopedSlided: 3,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            640: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 3,
            spaceBetween: 70,
            },
        },
    });
    var effectsSwiper = new Swiper(".effects__swiper", {
        slidesPerView: "1",
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        loopedSlided: 3,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            640: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 3,
            spaceBetween: 70,
            },
        },
    });
    var formSwiper = new Swiper(".form__swiper", {
        slidesPerView: "1",
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        loopedSlided: 3,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            640: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 3,
            spaceBetween: 70,
            },
        },
    });
    
})