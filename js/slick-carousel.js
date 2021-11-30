$(document).ready(function () {

    $('.category__list').slick({
        dots: true,
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
        infinite: true,
        autoplay:true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        pauseOnFocus: true,
        pauseOnHover:true,
    })

    // if ($("#popup__galery").hasClass('opened')) {
     $(".galery__popup__imagesList").slick({
         autoplay: true,
         swipeToSlide: true,
        slidesToShow: 3,
        // adaptiveHeight: true,
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        nextArrow: $(".popup__galery__button.right"),
        prevArrow: $(".popup__galery__button.left") ,
        lazyLoad: 'ondemand'
     });
        
        $('.popup__galery__button.left').click(function() {
       $(this).parent().find('.slick-slider').slick('slickPrev');
        });

        $('.popup__galery__button.right').click(function(e) {
      e.preventDefault();
      $(this).parent().find('.slick-slider').slick('slickNext');
        });
    
   
    // }

});
