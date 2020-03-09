$(document).ready(() => {
    $('.mySlide, .feedback__letters').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        autoplay: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});