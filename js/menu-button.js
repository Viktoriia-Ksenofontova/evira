$(document).ready(function () {
  $('.menu__button').click(function () {
    console.log("click");
  $(".menu__button").toggleClass("is-open");
  $('.menu__container').toggleClass("is-open");
    $('.header').toggleClass("is-open");
    $("body").toggleClass("overflowed");
  });

  $('.navbar__link').click(function (){
    $("body").toggleClass("overflowed");
    $(".menu__button").toggleClass("is-open");
  $('.menu__container').toggleClass("is-open");
    $('.header').toggleClass("is-open");
  });
});


