$(document).ready(function () {

    $('.category__list').slick({
        dots: true,
        // customPaging: ,
        infinite: true,
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
   variableWidth: true,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //         }
        //     },
        //     {
        //         breakpoint: 1023,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 767,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 320,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ]
    });

    $('.galery__imagesList').slick({
        dots: true,
        infinite: true,
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
    })
});
