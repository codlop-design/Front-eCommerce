// document.addEventListener(
//     "DOMContentLoaded", () => {
//         new Mmenu( "#all-category", {
//            "offCanvas": {
//               "position": "right-front"
//            },
//            "theme": "white"
//         });
//     }
// );

// slider-1
const slider_1 = new Swiper('#slider-1', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    pagination: {
        el: '.slider-1 .swiper-pagination',
    },
    navigation: {
        nextEl: '.slider-1 .swiper-button-next',
        prevEl: '.slider-1 .swiper-button-prev',
    },
});

// category-1
const category_1 = new Swiper('#category-1', {
    spaceBetween: 15,
    slidesPerView: 8,
    slidesPerGroup: 8,
    freeMode: true,
    scrollbar: {
        el: ".category-1 .swiper-scrollbar",
      },
    navigation: {
        nextEl: '.category-1 .swiper-button-next',
        prevEl: '.category-1 .swiper-button-prev',
    },
});

// product-1
const product_1 = new Swiper('.product-1 .swiper', {
    spaceBetween: 15,
    slidesPerView: 6,
    slidesPerGroup: 6,
    navigation: {
        nextEl: '.product-1 .swiper-button-next',
        prevEl: '.product-1 .swiper-button-prev',
    },
});

// category-1
const brand_1 = new Swiper('.brand-1 .swiper', {
    loop:true,
    spaceBetween: 15,
    slidesPerView: 8,
    speed: 3000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    }
});