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

    $('.stars').rateYo({
        normalFill: '#d6d6d6',
        spacing: '8px',
        ratedFill: '#ffcc00',
        readOnly: 'true',
        starWidth: '11px',
    })
})


