$(document).ready(function () {
  
  function toggleClassIsOpen() {
    if ($(window).width() < '1320') {
      $(".menu__button").toggleClass("is-open");
      $('.menu__container').toggleClass("is-open");
      $('.header').toggleClass("is-open");
      $("body").toggleClass("overflowed");
    }
  }

  $('.menu__button').click(toggleClassIsOpen);

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
  
  function findCurrenSlide() {
    return $(".galery__imagesList").slick('slickCurrentSlide');
  }
  
  $('.galery__imagesItem').click(function () {
    let currentSlide = findCurrenSlide();
    // let arr = $(this).siblings();
    let source = $(this).children('.galery_image').attr("data-source");
    let description = $(this).children('.galery_image').attr("alt");
    let wrapper_galery = $(document).find("#popup__galery").children('.popup__inner');

    wrapper_galery.children('.popup__galery__image').attr({ alt: description, src: source });
  
    
    wrapper_galery.find('.popup__galery__button .left').click(function () {
      console.log("click", $(".galery__imagesItem").prev().find('.galery_image').attr("data-source"));
      // source=arr[currentSlide-1].find('.galery_image').attr("data-source");
      // let newSourse = arr[currentSlide-1].children('.galery_image').attr("data-source");
      // arr[currentSlide-1].children('.galery_image').attr("data-source")
      // wrapper_galery.children('.popup__galery__image').attr({ alt: description, src: newSourse });
      if (currentSlide !== 0) {
        wrapper_galery.children('.popup__galery__image').attr({ alt: description, src: `${$(".galery__imagesItem").prev().find('.galery_image').attr("data-source")}` });
        // currentSlide = currentSlide - 1;
      }
    });

    wrapper_galery.find('.popup__galery__button .right').click(function () {
      
      console.log("click", $(".galery__imagesItem").next().find('.galery_image').attr("data-source"));
    wrapper_galery.children('.popup__galery__image').attr({ alt: description, src: `${$(".galery__imagesItem").next().find('.galery_image').attr("data-source")}` });
      // currentSlide = currentSlide+1;
    })

  })

});



  

  