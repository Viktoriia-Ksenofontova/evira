$(document).ready(function () {

    $('.category__list').slick({
        dots: true,
        // infinite: true,
        autoplay:true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
       customPaging: function(slider, i) {
         return '<span class="dot"></span>';
    },
    });

    $('.galery__imagesList').slick({
        dots: true,
        // infinite: true,
        autoplay:true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        customPaging: function (slider, i) {
            return '<span class="dot"></span>';
        },
    });

    $('.reviews__list').slick({
        // infinite: true,
        autoplay:true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
    })
});
