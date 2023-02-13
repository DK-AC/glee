$(function () {
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
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
})

