$(document).ready(function () {
  // menu-button logic
  function toggleClassIsOpen() {
    // if ($(window).width() < '1320') {
    if (document.documentElement.clientWidth < '1290') {
      $(".menu__button").toggleClass("is-open");
      $('.menu__container').toggleClass("is-open");
      $('.header').toggleClass("is-open");
      $("body").toggleClass("overflowed");
    }
  }
  
  $('.menu__button').click(function () {
    toggleClassIsOpen();
   
    // let animatedIn = $('#menu_container').data('animatedin');
    // let animatedOut = $('#menu_container').data('animatedout');

    // if ($('#menu_container').hasClass("is-open")) {
    //   $('#menu_container').removeClass(animatedIn);
    //   $('#menu_container').addClass(animatedOut);
    // } else {
    //   $('#menu_container').addClass(animatedIn);
    //   $('#menu_container').removeClass(animatedOut);
    // }
  });

    $('.navbar__link').click(toggleClassIsOpen);
  
    $('.nav__contacts__telephone').click(toggleClassIsOpen);
  
    $('.nav__contacts__button').click(toggleClassIsOpen);
  

  // Scroll to bottom logic
  let rootElement = document.documentElement;

  function scrollToBottom() {
   rootElement.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  }
  $('#scrollToBottomBtn').click(scrollToBottom);

  // Scroll to top logic
  function scrollToTop() {
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

  $('#scrollToTopBtn').click(scrollToTop);


  function handleScroll() {
  if (rootElement.scrollTop > 500 ) {
    // Show button
    $('#scrollToTopBtn').addClass("visible");
    $('#scrollToTopBtn').removeClass("hidden");
  }
   else {
    // Hide button
    $('#scrollToTopBtn').addClass("hidden");
     $('#scrollToTopBtn').removeClass("visible");
   }
  };
  
  $( window ).scroll(handleScroll);
  

  // galery logic
  let imageClicked;

  $(".galery_image").click(function () {
    imageClicked = $(this);
    $("#popup__galery .popup__inner").find('img').attr({ alt: imageClicked.attr('alt'), src: imageClicked.attr('data-source') });
  
    if (imageClicked.closest('.galery__imagesItem').prev().length === 0) {
      $('.popup__galery__button.left').hide();
    } else if (imageClicked.closest('.galery__imagesItem').next().length === 0) {
      $('.popup__galery__button.right').hide(); 
    }
  });

  $('.popup__galery__button.right').click(function () {
    imageClicked.closest('.galery__imagesItem').next().find('.galery_image').trigger('click');
    $('.popup__galery__button.left').show();
  });

  $('.popup__galery__button.left').click(function(){
    imageClicked.closest('.galery__imagesItem').prev().find('.galery_image').trigger('click');
  $('.popup__galery__button.right').show();
  });
  
});



  

  