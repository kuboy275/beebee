const swiperMoile = () => {
    let init = false;
    let priceSwiperSlider;
    if(window.innerWidth <= 1200) {
        if(!init) {
            init = true;
            priceSwiperSlider = new Swiper('.price-swiper-slider-js', {
                slidesPerView: 1,
                slidesPerColumn: 1,
                spaceBetween: 50,
                initialSlide: 1,
                breakpoints: {
                    1200: {
                        slidesPerView: 4,
                        slidesPerColumn: 4,
                        spaceBetween: 50,
                    },
                },
                navigation: {
                    prevEl: '.swiper-price-prev',
                    nextEl: '.swiper-price-next',
                },
            });
        }
    }else if(init) {
        priceSwiperSlider.destroy();
        priceSwiperSlider = undefined;
        init = false;
    }
}

$(document).ready(function () {
    // Price Swiper Sliders
    swiperMoile();
    window.addEventListener("resize", swiperMoile);
});
