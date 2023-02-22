$(function () {
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
    })

    $('.product-slide__thumb').slick({
        asNavFor: '.product-slide__big',
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        focusOnSelect: true,
        draggable: false,
    })

    $('.product-slide__big').slick({
        arrows: false,
        fade: true,
        asNavFor: '.product-slide__thumb',
        draggable: false,
    })

    $('.products-related--items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
    })

    $('.filter-price__input').ionRangeSlider({
        onStart: function (data) {
            $('.filter-price__from').text(`$${data.from}`)
            $('.filter-price__to').text(`$${data.to}`)
        },
        onChange: function (data) {
            $('.filter-price__from').text(`$${data.from}`)
            $('.filter-price__to').text(`$${data.to}`)
        },
    })

    $('.stars').rateYo({
        normalFill: '#d6d6d6',
        spacing: '8px',
        ratedFill: '#ffcc00',
        readOnly: 'true',
        starWidth: '11px',
    })

    $('.filter-sort__btn').on('click', function () {
        $('.filter-sort__btn').removeClass('filter-sort__btn--active')
        $(this).addClass('filter-sort__btn--active')
    })

    $('.btn-list').on('click', function () {
        $('.product-item').addClass('product-item--list')
        $('.catalog__items-grid').addClass('catalog__items-list')
    })

    $('.btn-grid').on('click', function () {
        $('.product-item').removeClass('product-item--list')
        $('.catalog__items-grid').removeClass('catalog__items-list')
    })

})


