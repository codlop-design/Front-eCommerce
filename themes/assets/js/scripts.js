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
    slidesPerView: 9,
    slidesPerGroup: 9,
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
    slidesPerView: 7,
    slidesPerGroup: 7,
    navigation: {
        nextEl: '.product-1 .swiper-button-next',
        prevEl: '.product-1 .swiper-button-prev',
    },
});

// category-1
const brand_1 = new Swiper('.brand-1 .swiper', {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 9,
    speed: 3000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    }
});

// thumbs-img
const galleryThumbs = new Swiper('.thumbs .swiper', {
    direction: 'vertical',
    spaceBetween: 10,
    slidesPerView: 5,
    centeredSlides: true,
    centeredSlidesBounds: true,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.thumbs .swiper-button-next',
        prevEl: '.thumbs .swiper-button-prev',
    },
});

// thumbs-img
const galleryMain = new Swiper('.view-div .swiper', {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

galleryMain.on('slideChangeTransitionStart', function() {
    galleryThumbs.slideTo(galleryMain.activeIndex);
  });
  
  galleryThumbs.on('transitionStart', function(){
    galleryMain.slideTo(galleryThumbs.activeIndex);
  });

// menu
$(document).on('click', '.all-category', function () {
    // var heightMain = $('.main-catgeory').height();
    // $('.main-catgeory').css('height', heightMain + "px")
    $('.all-menu').addClass('active');
    $('.overlay-menu').addClass('active');
    $('body').addClass('no-scroll');
    $('.secondary-catgeory').removeClass('rev-trans')
});

$(document).on('click', '.main-catgeory ul li a', function () {
    $('.main-catgeory').addClass('hidden-main');
    $('.secondary-catgeory').addClass('active');
});

$(document).on('click', '.back-menu', function () {
    $('.main-catgeory').removeClass('hidden-main');
    $('.secondary-catgeory').removeClass('active');
});

$(document).on('click', '.close-menu,.overlay-menu', function () {
    $('.all-menu').removeClass('active');
    $('.overlay-menu').removeClass('active');
    $('body').removeClass('no-scroll');
    $('.main-catgeory').removeClass('hidden-main');
    $('.secondary-catgeory').removeClass('active').addClass('rev-trans');
});

// search
$(document).on('keyup', '.ps-search-table .form-control', function () {
    $('.ps-search-table').addClass('active');
    $('.overlay-search').addClass('active');
    $(".search-results").show();
    if ($(this).val() == 0) {
        $(".search-results").hide();
        $('.ps-search-table').removeClass('active');
        $('.overlay-search').removeClass('active');
    }
});

$(document).on('focusout', '.ps-search-table .form-control', function () {
    $(".search-results").hide();
    $('.ps-search-table').removeClass('active');
    $('.overlay-search').removeClass('active');
});

// grid & list product
$(document).on('click', '.grid-btn', function () {
    $('.list-btn').removeClass('active');
    $(this).addClass('active');
    $('.products-grid').removeClass('list-product');
});

$(document).on('click', '.list-btn', function () {
    $('.grid-btn').removeClass('active');
    $(this).addClass('active');
    $('.products-grid').addClass('list-product');
});

// $(window).resize(function(){
//     console.log('resize called');
//     var width = $(window).width();
//     if(width <= 992){
//         $('.products-grid').removeClass('list-product');
//         $('.list-btn').removeClass('active');
//         $('.grid-btn').addClass('active');
//     }
//  })
//  .resize();


// toogle password
$('.toogle-password').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('fa-eye');
    $(this).toggleClass('fa-eye-slash');
    var parent = $(this).parent();
    var type = parent.find('input').attr('type') == 'password' ? 'text' : 'password';
    parent.find('input').attr('type', type);
});


// countdown
$('.offer-countdown').attr('data-date');

// zoom img
var options1 = {
    offset: {
        vertical: 0, 
        horizontal: 10
    }
};

var options2 = {
    fillContainer: true,
    offset: {
        vertical: 0,
        horizontal: 10
    },
    "zoomPosition":"left",
};

new ImageZoom(document.getElementById("img-1"), options2);
new ImageZoom(document.getElementById("img-2"), options2);
new ImageZoom(document.getElementById("img-3"), options2);
new ImageZoom(document.getElementById("img-4"), options2);
new ImageZoom(document.getElementById("img-5"), options2);
new ImageZoom(document.getElementById("img-6"), options2);


// split table tr
$(document).ready(function() {
	let $mainTable = $("#specificationstable");
    let trLength = $("#specificationstable tr").length
	let splitBy = Math.ceil(trLength > 5 ? (trLength / 2) : trLength);
	let rows = $mainTable.find ("tr").slice(splitBy);
	let $secondTable = $("#specificationstable").parent().append("<table class='table table-striped-columns' id='secondspecificationstable'><tbody></tbody></table>");
	$secondTable.find("tbody").append(rows);
	$mainTable.find ("tr").slice(splitBy).remove();

});
