/*const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
/*el.is(':visible');*/
window.onload = function (){
  start();
  /*$('.pushable.pusher .ui.sidebar')
  .sidebar({
    context: $('.pushable.pusher .bottom.segment')
  })
  .sidebar('attach events', '.pushable.pusher .menu .item')*/
  /*$('.ui.sidebar')
  .sidebar('toggle')
;*/
$.get(
  "js/data.json",
  function (data) {
$('#tasksTitle').text(data.tasksTitle);
  }
);
$('#circleTitle').text('Revenue Per Hour');
;}
 /*$('.context.example .ui.sidebar')
  .transition({
    animation  : 'slide right',
    duration   : '2s',
    onComplete : function() {
      alert('done');
    }
  });*/

/*$(document).ready(function() {
  $("#menu").click(function() {
    $(this).addClass("show");
  });
});*/
/* Открытие меню */

/*var main = function() { //главная функция

  $('.topMenu').click(function() { /* выбираем класс icon-menu и
             добавляем метод click с функцией, вызываемой при клике */

      /*$('.menu').animate({ //выбираем класс menu и метод animate

          left: '0px' /* теперь при клике по иконке, меню, скрытое за
             левой границей на 285px, изменит свое положение на 0px и станет видимым 

      }, 200); //скорость движения меню в мс
      
      $('div').animate({ //выбираем тег body и метод animate

          left: '285px' /* чтобы всё содержимое также сдвигалось вправо
             при открытии меню, установим ему положение 285px 

      }, 200); //скорость движения меню в мс
  });


/* Закрытие меню 

  $('.home').click(function() { //выбираем класс icon-close и метод click

      $('.menu').animate({ //выбираем класс menu и метод animate

          left: '-285px' /* при клике на крестик меню вернется назад в свое
             положение и скроется 

      }, 200); //скорость движения меню в мс
      
  $('div').animate({ //выбираем тег body и метод animate

          left: '0px' //а содержимое страницы снова вернется в положение 0px

      }, 200); //скорость движения меню в мс
  });
};

$(document).ready(main); /* как только страница полностью загрузится, будет
             вызвана функция main, отвечающая за работу меню */