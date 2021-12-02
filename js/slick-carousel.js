$(document).ready(function () {

    $('.category__list').slick({
      dots: true,
       centerMode: true,
        infinite: true,
        autoplay: true,
        pauseOnFocus: true,
        pauseOnHover:true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
       customPaging: function(slider, i) {
         return '<span class="dot"></span>';
      },
       responsive: [{
      breakpoint: 1289,
      settings: {
         centerMode: false,
      }
    }]
    });

    $('.galery__imagesList').slick({
        dots: true,
        centerMode: true,
        infinite: true,
        autoplay: true,
        pauseOnFocus: true,
        pauseOnHover:true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        customPaging: function (slider, i) {
            return '<span class="dot"></span>';
        },
        responsive: [{
      breakpoint: 1289,
      settings: {
         centerMode: false,
      }
    }]
    });

  $('.reviews__list').slick({
    focusOnSelect: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    // responsive: [{
    //   breakpoint: 1289,
    //     settings: {
    //       centerMode: true,
    //       slidesToShow: 4,
    //   }
    // }]
  });
});
