function addReceiverInput() {
    $(".js-add-receiver-input").on('click', function(){
        $('.add-receiver-wrapper').append('<div class="form-row multiple-input"><div class="col-8"><div class="form-group"><input class="form-control" type="text" name="receiver-address-field[]" placeholder="Enter receiver address"></div></div><div class="col-4"><div class="form-group"><input class="form-control" type="text" name="receiver-amount[]" placeholder="How much"> <button class="btn btn-icon js-remove-receiver-input" type="button"><i class="far fa-times"></i></button></div></div></div>');
    });

    $(document).on('click', '.js-remove-receiver-input', function(){
        $(this).parents('.form-row.multiple-input').remove();
    })
}

function openMenuMobile() {
    $('.btn-open-menu').on('click', function(){
        $('html').toggleClass('overflow-hidden');
        $('.navbar-menu-left').toggleClass('active');
        $(this).toggleClass('opened');
    })
}

function uploadFileLogo() {
    $('.js-upload-logo').on('change', function(e) {
        var currentEle = $('.label-upload-logo img');
        var fileName = $(this).val();
        fileName= fileName.substring(fileName.lastIndexOf('\\') + 1);
        var reader = new FileReader();
        reader.onload = function(event) {
            currentEle.attr('src', event.target.result);
            $('.label-upload-logo .desc p').hide();
            $('.label-upload-logo .desc p.name-img').text(fileName).show();
        }
        reader.readAsDataURL(this.files[0])
    })
}

function autoShowDropdownNavbar() {
    $('.navbar-menu-left .navbar-item.dropdown').each(function(id, el) {
        if( $(el).find('.collapse .navbar-link').hasClass('active') ) {
            $(el).find('.collapse .navbar-link').parents('.collapse').collapse('show')
        }
    })
}


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
    // Add Receiver Address Input
    addReceiverInput();

    // OpenMenuMobile
    openMenuMobile();

    // Upload Logo
    uploadFileLogo();

    autoShowDropdownNavbar();
    
    $(window).on('load', function() {
        $('#modalConnectWallet').modal('hide');
    });

    // Price Swiper Sliders
    swiperMoile();
    window.addEventListener("resize", swiperMoile);



});
