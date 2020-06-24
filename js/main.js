$('.design_slider_wrap').slick({
    // arrows: false,
    // adaptiveHeight: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    pauseOnHover: true,
    nextArrow: '.arrow_right',
    prevArrow: '.arrow_left',
    responsive: [{
            breakpoint: 721,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
                autoplay: true,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});
// 
$('.work_slider').slick({
    // arrows: false,
    // adaptiveHeight: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    pauseOnHover: true,
    nextArrow: '.work_arrow_right',
    prevArrow: '.work_arrow_left',
    responsive: [{
            breakpoint: 961,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 721,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
                autoplay: true,
            }
        },
        {
            breakpoint: 541,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// 
$('.sale_slider').slick({
    // arrows: false,
    // adaptiveHeight: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    pauseOnHover: true,
    nextArrow: '.sale_arrow_right',
    prevArrow: '.sale_arrow_left',
    responsive: [{
            breakpoint: 961,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 721,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
                autoplay: true,
            }
        },
        {
            breakpoint: 541,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


// 
$('.sale_slider_two').slick({
    // arrows: false,
    // adaptiveHeight: true,
    autoplaySpeed: 3200,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 961,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 721,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
                autoplay: true,
            }
        },
        {
            breakpoint: 541,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// 
$('.team_slider').slick({
    // arrows: false,
    // adaptiveHeight: true,
    autoplaySpeed: 3200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: '.team_arrow_right',
    prevArrow: '.team_arrow_left',
    responsive: [{
            breakpoint: 961,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 541,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});