$(document).ready(function () {
  
  function toggleClassIsOpen() {
    $(".menu__button").toggleClass("is-open");
    $('.menu__container').toggleClass("is-open");
    $('.header').toggleClass("is-open");
    $("body").toggleClass("overflowed");
}

  $('.menu__button').click(toggleClassIsOpen);

  $('.navbar__link').click(toggleClassIsOpen);
  
  $('.nav__contacts__telephone').click(toggleClassIsOpen);
  
  $('.nav__contacts__button').click(toggleClassIsOpen);
// Scroll to top logic

  let rootElement = document.documentElement;
  
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
  //    // Hide button
    $('#scrollToTopBtn').addClass("hidden");
     $('#scrollToTopBtn').removeClass("visible");
   }
  };
  
  $( window ).scroll(handleScroll);
  
});


