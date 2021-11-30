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
       centerMode: false,
        infinite: true,
        autoplay:true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        pauseOnFocus: true,
      pauseOnHover: true,
        
    })

   
  $(".galery__popup__imagesList").slick({
        centerMode: true,
         autoplay: true,
         swipeToSlide: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
    // lazyLoad: 'ondemand'
  });
        
        $('.popup__galery__button.left').click(function() {
       $(this).parent().find('.slick-slider').slick('slickPrev');
        });

        $('.popup__galery__button.right').click(function(e) {
      e.preventDefault();
      $(this).parent().find('.slick-slider').slick('slickNext');
        });

});
