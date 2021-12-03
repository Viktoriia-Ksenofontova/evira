$(document).ready(function () {
 // Получаем нужный элемент
let element = $('#process');

let Visible = function (target) {
  // Все позиции элемента
  let targetPosition = {
      top: window.pageYOffset + target.get(0).getBoundingClientRect().top,
      left: window.pageXOffset + target.get(0).getBoundingClientRect().left,
      right: window.pageXOffset + target.get(0).getBoundingClientRect().right,
      bottom: window.pageYOffset + target.get(0).getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
      $(".process__decorate.snake1").addClass("animate_snake1");
      $(".process__decorate.snake2").addClass("animate_snake2");
      $(".process__decorate.snake3").addClass("animate_snake1");
       $(".process__decorate.snake4").addClass("animate_snake2");
    console.log('Вы видите элемент :)');
  } else {
    // Если элемент не видно, то запускаем этот код
    console.clear();
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (element);


});

