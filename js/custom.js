$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }

    });


});

$(function () {

    const MAINVISUALSLIDE = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },

        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },

    });

    const MAINEVENTSLIDE = new Swiper('.main_business_slide', {
        slidesPerView: 4,
        spaceBetween: 30,
    })

});

$(function () {
    const MIS = new Swiper('.main_product_slide', {
        loop: true,

        navigation: {
            nextEl: '.main_product .inner .itm_area .arrows .next',
            prevEl: '.main_product .inner .itm_area .arrows .prev',
        },
        pagination: {
            clickable: true,
            el: '.main_product .inner .itm_area .page',
        },

        on: {
            slideChangeTransitionStart: function () {
                console.log(this.realIndex);
                $('.main_product .inner .desc_area .itm').removeClass('on');
                $('.main_product .inner .desc_area .itm').eq(this.realIndex).addClass('on');
            }
        }
    })
});

$(function () {
    AOS.init();
})

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $('#flk').on('change', function () {
        let lnk = $(this).val();
        if (lnk) window.open(lnk)
    })
})

