
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    //$('.scrollToTop').click(function(){
    //    $('html, body').animate({scrollTop : 0},800);
    //    return false;
    //});

// add event listener on load
    window.addEventListener('load', function() {
      // scroll to top
      document.querySelector('.js-scroll-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      });
    });


 //hello preloader

 /*var hellopreloader = document.getElementById("hellopreloader_preload");
 function fadeOutnojquery(el){
   el.style.opacity = 1;
   var interhellopreloader = setInterval(function(){
     el.style.opacity = el.style.opacity - 0.05;
     if (el.style.opacity <=0.05){
        clearInterval(interhellopreloader);
        hellopreloader.style.display = "none";
     }
   },16);
   }
   window.onload = function(){
     setTimeout(function(){
       fadeOutnojquery(hellopreloader);
   },1000);
 };*/

  // columns

  /* Set the width of the side navigation to 250px */
function openNav() {
  if ($('#mySidenav').width() == 0) {
    document.getElementById("mySidenav").style.width = "300px";
    $('#menuButton').addClass('close-btn');
  } else {
    document.getElementById("mySidenav").style.width = "0";
    $('#menuButton').removeClass('close-btn');
  }
}

/* Set the width of the side navigation to 0 */



  //opening menu


$(document).ready(function(){
  $("body").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке


    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });


  $('#mySidenav').find('a').click(function() {
    document.getElementById("mySidenav").style.width = "0";
    $('#menuButton').removeClass('close-btn');
  });

});




$(document).ready(function(){
    $('.window-button').click(function() {
      var new_window = '#' + $(this).attr('to');
      var old_window = '#' + $(this).attr('from');

      setTimeout(function() {
        $(old_window).fadeOut(600);
      }, 300);
      
      $(new_window).fadeIn(600);      
    });

    var interval;

    $('.button').mouseenter(function() {
      span = $(this).find('span');
      span.addClass('invisible');

      interval = setInterval(function() {
        setTimeout(function() {
          span.removeClass('invisible');
        }, 600);
        
        span.addClass('invisible');        
      }, 1200);
    });

    $('.button').mouseleave(function() {
      $(this).find('span').removeClass('invisible');
      clearInterval(interval);
    });


    var benia = [0, 0, 1, 1, 1, 1, 1, 0, 0,
                 0, 1, 0, 0, 1, 0, 0, 1, 0,
                 1, 1, 1, 0, 1, 1, 0, 1, 1,
                 1, 1, 1, 1, 1, 1, 1, 1, 1,
                 1, 1, 1, 1, 1, 1, 1, 1, 1,
                 1, 0, 1, 0, 1, 0, 1, 0, 1,
                 2, 2, 2, 2, 2, 2, 2, 2, 2,
                 2, 2, 2, 2, 2, 2, 2, 2, 2,
                 2, 2, 2, 2, 2, 2, 2, 2, 2];

    var headphones = [0, 0, 1, 1, 1, 1, 1, 0, 0,
                      0, 1, 0, 0, 0, 0, 0, 1, 0,
                      0, 1, 0, 0, 0, 0, 0, 1, 0,
                      1, 0, 0, 0, 0, 0, 0, 0, 1,
                      1, 1, 0, 0, 0, 0, 0, 1, 1,
                      1, 1, 1, 0, 0, 0, 1, 1, 1,
                      0, 1, 1, 0, 0, 0, 1, 1, 0,
                      2, 2, 2, 2, 2, 2, 2, 2, 2,
                      2, 2, 2, 2, 2, 2, 2, 2, 2];

    var game1 = [0, 0, 0, 1, 1, 0, 0, 0, 2,
                  0, 0, 1, 1, 1, 1, 0, 0, 2,
                  0, 1, 1, 1, 1, 1, 1, 0, 2,
                  1, 1, 0, 1, 1, 0, 1, 1, 2,
                  1, 1, 1, 1, 1, 1, 1, 1, 2,
                  0, 0, 1, 0, 0, 1, 0, 0, 2,
                  0, 1, 0, 1, 1, 0, 1, 0, 2,
                  1, 0, 1, 0, 0, 1, 0, 1, 2,
                  2, 2, 2, 2, 2, 2, 2, 2, 2]; 

    var cat = [0, 1, 0, 0, 1, 0, 0, 1, 1,
               0, 1, 1, 1, 1, 0, 0, 0, 1,
               1, 1, 1, 1, 1, 1, 0, 0, 1,
               1, 0, 1, 0, 1, 1, 1, 0, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               0, 1, 1, 1, 1, 1, 1, 1, 1,
               0, 1, 1, 1, 1, 1, 1, 1, 1,
               0, 0, 1, 0, 1, 0, 1, 0, 1,
               0, 0, 1, 0, 1, 0, 1, 0, 1];

    var computer = [1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 1, 0, 1, 0, 0, 1,
                    1, 0, 1, 0, 1, 0, 1, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1,
                    0, 0, 0, 0, 1, 0, 0, 0, 0,
                    0, 0, 1, 1, 1, 1, 1, 0, 0,
                    2, 2, 2, 2, 2, 2, 2, 2, 2];

    var glasses = [1, 1, 1, 0, 1, 1, 1, 0, 0,
                   0, 0, 0, 0, 0, 0, 0, 0, 0,
                   1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 0, 1,
                   1, 0, 1, 0, 1, 0, 1, 0, 0,
                   1, 1, 1, 0, 1, 1, 1, 0, 0,
                   2, 2, 2, 2, 2, 2, 2, 2, 2,
                   2, 2, 2, 2, 2, 2, 2, 2, 2,
                   2, 2, 2, 2, 2, 2, 2, 2, 2];

    var key = [0, 0, 0, 0, 0, 1, 1, 1, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               1, 1, 1, 1, 1, 1, 0, 0, 1,
               1, 0, 1, 1, 0, 1, 1, 0, 1,
               0, 0, 0, 0, 0, 1, 1, 1, 1,
               2, 2, 2, 2, 2, 2, 2, 2, 2,
               2, 2, 2, 2, 2, 2, 2, 2, 2,
               2, 2, 2, 2, 2, 2, 2, 2, 2,
               2, 2, 2, 2, 2, 2, 2, 2, 2,
               2, 2, 2, 2, 2, 2, 2, 2, 2];

    var plane = [0, 0, 0, 0, 0, 1, 1, 0, 0,
                 0, 0, 0, 0, 1, 1, 1, 0, 0,
                 0, 0, 0, 1, 1, 1, 0, 0, 1,
                 0, 1, 1, 1, 1, 1, 1, 1, 1,
                 1, 0, 1, 0, 1, 0, 1, 1, 1,
                 1, 1, 1, 1, 1, 1, 1, 1, 0,
                 0, 0, 0, 1, 1, 1, 0, 0, 0,
                 0, 0, 0, 0, 1, 1, 1, 0, 0,
                 0, 0, 0, 0, 0, 1, 1, 0, 0,
                 0, 0, 0, 0, 0, 1, 1, 0, 0];


    var chemistry = [0, 0, 1, 1, 1, 1, 1, 0, 0,
                     0, 0, 0, 1, 0, 1, 0, 0, 0,
                     0, 0, 0, 1, 0, 1, 0, 0, 0,
                     0, 0, 1, 1, 0, 1, 1, 0, 0,
                     0, 1, 1, 0, 0, 0, 1, 1, 0,
                     0, 1, 0, 0, 0, 0, 0, 1, 0,
                     0, 1, 1, 1, 1, 1, 1, 1, 0,
                     0, 1, 1, 0, 1, 1, 1, 1, 0,
                     0, 0, 1, 1, 1, 1, 1, 0, 0];

    var diskette = [1, 1, 1, 1, 1, 1, 1, 1, 0,
                    1, 0, 1, 1, 1, 0, 1, 0, 1,
                    1, 0, 1, 1, 1, 0, 1, 0, 1,
                    1, 0, 1, 1, 1, 0, 1, 0, 1,
                    1, 0, 1, 1, 1, 1, 1, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 1, 1, 1, 1, 1, 0, 1,
                    1, 1, 0, 0, 0, 0, 0, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1];

    var heart = [0, 1, 1, 1, 0, 1, 1, 1, 0,
                 1, 1, 1, 1, 1, 1, 1, 1, 1,
                 1, 1, 1, 1, 1, 1, 1, 1, 1,
                 1, 1, 1, 1, 1, 1, 1, 1, 1,
                 0, 1, 1, 1, 1, 1, 1, 1, 0,
                 0, 0, 1, 1, 1, 1, 1, 0, 0,
                 0, 0, 0, 1, 1, 1, 0, 0, 0,
                 0, 0, 0, 0, 1, 0, 0, 0, 0,
                 2, 2, 2, 2, 2, 2, 2, 2, 2];

    var dialog = [0, 1, 1, 1, 1, 1, 1, 1, 0,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 0, 0, 0, 0, 0, 0, 0, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 0, 0, 0, 1, 0, 0, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  0, 1, 1, 1, 1, 1, 1, 1, 0,
                  0, 0, 1, 1, 0, 0, 0, 0, 0,
                  0, 1, 1, 0, 0, 0, 0, 0, 0];

    var plane2 = [0, 0, 0, 0, 1, 0, 0, 0, 0,
                  1, 1, 1, 1, 0, 1, 1, 1, 1,
                  0, 0, 0, 0, 1, 0, 0, 0, 0,
                  0, 0, 1, 1, 1, 1, 0, 0, 0,
                  0, 1, 1, 0, 1, 1, 0, 0, 1,
                  0, 1, 0, 0, 1, 1, 1, 1, 1,
                  0, 1, 1, 1, 1, 1, 1, 0, 0,
                  0, 0, 1, 0, 0, 1, 0, 0, 0,
                  0, 1, 1, 1, 1, 1, 1, 1, 0];

    var diamond = [0, 1, 1, 1, 1, 1, 1, 1, 0,
                   0, 1, 0, 1, 0, 1, 0, 1, 0,
                   1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 0, 1, 0, 0, 0, 1, 0, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1,
                   0, 1, 1, 0, 0, 0, 1, 1, 0,
                   0, 0, 1, 1, 0, 1, 1, 0, 0,
                   0, 0, 0, 1, 1, 1, 0, 0, 0,
                   0, 0, 0, 0, 1, 0, 0, 0, 0];

    var ufo = [0, 0, 0, 1, 1, 1, 0, 0, 0,
               0, 0, 1, 1, 0, 1, 1, 0, 0,
               0, 0, 1, 0, 0, 0, 1, 0, 0,
               0, 1, 1, 1, 1, 1, 1, 1, 0,
               1, 0, 1, 0, 1, 0, 1, 0, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               0, 0, 1, 0, 1, 0, 1, 0, 0,
               0, 1, 0, 0, 1, 0, 0, 1, 0,
               2, 2, 2, 2, 2, 2, 2, 2, 2];

    var eyes = [0, 1, 1, 0, 0, 0, 1, 1, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 1, 1, 0, 0, 0, 1, 1, 0,
                1, 0, 0, 1, 0, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 1, 0, 0, 1,
                1, 1, 0, 1, 0, 1, 1, 0, 1,
                1, 1, 0, 1, 0, 1, 1, 0, 1,
                1, 0, 0, 1, 0, 1, 0, 0, 1,
                0, 1, 1, 0, 0, 0, 1, 1, 0];

    var mug = [1, 1, 1, 1, 1, 1, 1, 0, 0,
               1, 1, 1, 1, 1, 1, 1, 0, 0,
               1, 1, 0, 1, 0, 1, 1, 1, 1,
               1, 0, 1, 0, 1, 0, 1, 0, 1,
               1, 0, 0, 1, 0, 0, 1, 0, 1,
               1, 1, 0, 0, 0, 1, 1, 0, 1,
               1, 1, 1, 0, 1, 1, 1, 1, 1,
               1, 1, 1, 1, 1, 1, 1, 0, 0,
               0, 1, 1, 1, 1, 1, 0, 0, 0];

    var graph = [0, 1, 0, 0, 0, 0, 0, 0, 0,
                 1, 1, 1, 0, 0, 0, 0, 0, 0,
                 0, 1, 0, 0, 0, 0, 1, 1, 0,
                 0, 1, 0, 0, 0, 1, 0, 0, 0,
                 0, 1, 0, 0, 1, 0, 0, 0, 0,
                 0, 1, 1, 1, 0, 0, 0, 0, 0,
                 0, 1, 0, 0, 0, 0, 0, 1, 0,
                 1, 1, 1, 1, 1, 1, 1, 1, 1,
                 0, 1, 0, 0, 0, 0, 0, 1, 0,];

    var sandclock = [0, 1, 1, 1, 1, 1, 1, 1, 0,
                     0, 0, 1, 0, 0, 0, 1, 0, 0,
                     0, 0, 1, 1, 0, 1, 1, 0, 0,
                     0, 0, 1, 1, 1, 1, 1, 0, 0,
                     0, 0, 0, 1, 0, 1, 0, 0, 0,
                     0, 0, 1, 0, 0, 0, 1, 0, 0,
                     0, 0, 1, 0, 1, 0, 1, 0, 0,
                     0, 0, 1, 1, 1, 1, 1, 0, 0,
                     0, 1, 1, 1, 1, 1, 1, 1, 0];

    var guy = [0, 0, 0, 1, 1, 1, 0, 0, 0,
               0, 0, 0, 1, 0, 1, 0, 0, 0,
               0, 0, 0, 0, 0, 1, 0, 0, 0,
               0, 1, 1, 1, 1, 1, 1, 1, 0,
               1, 1, 0, 0, 0, 0, 0, 1, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 1, 0, 0, 0, 1, 0, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1,];

    var tank = [0, 0, 0, 0, 1, 1, 1, 0, 0,
                1, 0, 0, 1, 1, 1, 1, 1, 0,
                1, 1, 1, 1, 0, 0, 0, 1, 0,
                1, 0, 0, 1, 0, 0, 0, 1, 0,
                0, 0, 1, 1, 1, 1, 1, 1, 0,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 0, 1, 0, 1, 0, 1, 0, 1,
                1, 1, 0, 1, 0, 1, 0, 1, 1,
                0, 0, 1, 1, 1, 1, 1, 0, 0];

    var basket = [0, 0, 0, 0, 0, 0, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 0, 1,
                  1, 0, 1, 0, 1, 0, 1, 0, 0,
                  1, 1, 0, 1, 0, 1, 1, 0, 0,
                  1, 0, 1, 0, 1, 0, 1, 0, 0,
                  0, 1, 1, 1, 1, 1, 1, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 1, 1, 0, 0, 1, 1, 0, 0];

    var casepack = [0, 0, 1, 1, 1, 1, 1, 0, 0,
                0, 0, 1, 0, 0, 0, 1, 0, 0,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                0, 1, 0, 0, 0, 0, 0, 1, 0,
                1, 0, 1, 1, 1, 1, 1, 0, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1];

    var butterfly = [0, 0, 0, 1, 0, 1, 0, 0, 0,
                     1, 1, 0, 0, 1, 0, 0, 1, 1,
                     1, 1, 1, 1, 0, 1, 1, 1, 1,
                     1, 0, 1, 1, 0, 1, 1, 0, 1,
                     1, 1, 1, 1, 0, 1, 1, 1, 1,
                     0, 1, 1, 1, 0, 1, 1, 1, 0,
                     0, 0, 1, 1, 1, 1, 1, 0, 0,
                     0, 1, 1, 1, 0, 1, 1, 1, 0,
                     0, 1, 1, 0, 0, 0, 1, 1, 0];

    var champion = [0, 1, 1, 1, 1, 1, 1, 1, 0,
                    0, 0, 1, 1, 1, 1, 1, 0, 0,
                    0, 1, 1, 0, 1, 0, 1, 1, 0,
                    1, 0, 1, 1, 0, 1, 1, 0, 1,
                    1, 0, 1, 1, 1, 1, 1, 0, 1,
                    1, 0, 0, 1, 1, 1, 0, 0, 1,
                    0, 1, 1, 0, 1, 0, 1, 1, 0,
                    0, 0, 0, 0, 1, 0, 0, 0, 0,
                    0, 0, 0, 1, 1, 1, 0, 0, 0];

    var bell = [0, 0, 0, 0, 1, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 0,
                0, 0, 0, 1, 1, 1, 0, 0, 0,
                0, 0, 1, 1, 1, 1, 1, 0, 0,
                0, 0, 0, 1, 1, 1, 0, 0, 0,
                0, 0, 1, 1, 0, 1, 1, 0, 0,
                0, 0, 1, 0, 1, 0, 1, 0, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 0];

    var umbrella = [0, 0, 0, 1, 1, 1, 0, 0, 0,
                    0, 1, 1, 1, 1, 1, 1, 1, 0,
                    0, 1, 1, 1, 1, 1, 1, 1, 0,
                    1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 0, 1, 0, 1, 0, 1, 0, 1,
                    0, 0, 0, 0, 1, 0, 0, 0, 0,
                    0, 0, 0, 0, 1, 0, 0, 0, 0,
                    0, 0, 0, 0, 1, 0, 0, 0, 0,
                    0, 0, 0, 1, 1, 0, 0, 0, 0]

    var phone = [0, 1, 1, 1, 1, 1, 1, 1, 0,
                 1, 1, 1, 1, 1, 1, 1, 1, 1,
                 1, 1, 0, 0, 0, 0, 0, 1, 1,
                 0, 0, 0, 1, 1, 1, 0, 0, 0,
                 0, 0, 1, 1, 1, 1, 1, 0, 0,
                 0, 1, 1, 1, 0, 1, 1, 1, 0,
                 0, 1, 1, 0, 1, 0, 1, 1, 0,
                 0, 1, 1, 1, 0, 1, 1, 1, 0,
                 0, 1, 1, 1, 1, 1, 1, 1, 0]

    var index = 0;
    var image_index = 0;    

    $('.poligon').find('span').each(function() {
      if (benia[index] == 1) {
        $(this).css('background-color', '#2ab573');
        $(this).css('display', 'inline-block');

      } else if (benia[index] == 2) {
        $(this).css('background-color', 'transparent');
        $(this).css('display', 'none');

      } else {
        $(this).css('background-color', 'transparent');
        $(this).css('display', 'inline-block');
      }

      index = index + 1;
    });


    $('.poligon').click(function() {
      image_index = image_index + 1;
      index = 0;

      var image;
      var width = 225;

      if (image_index == 28) {
        image_index = 0;
        image = benia;

      } else if (image_index == 27) {
        image = phone;

      } else if (image_index == 26) {
        image = umbrella;

      } else if (image_index == 25) {
        image = bell;

      } else if (image_index == 24) {
        image = champion;

      } else if (image_index == 23) {
        image = butterfly;

      } else if (image_index == 22) {
        image = casepack;

      } else if (image_index == 21) {
        image = basket;

      } else if (image_index == 20) {
        image = tank;

      } else if (image_index == 19) {
        image = guy;

      } else if (image_index == 18) {
        image = sandclock;

      } else if (image_index == 17) {
        image = graph;

      } else if (image_index == 16) {
        image = mug;

      } else if (image_index == 15) {
        image = eyes;

      } else if (image_index == 14) {
        image = ufo;

      } else if (image_index == 13) {
        image = diamond;

      } else if (image_index == 12) {
        image = plane2;

      } else if (image_index == 11) {
        image = dialog;

      } else if (image_index == 10) {
        image = heart;

      } else if (image_index == 9) {
        image = diskette;

      } else if (image_index == 8) {
        image = chemistry;

      } else if (image_index == 7) {
        image = plane;

      } else if (image_index == 6) {
        image = key;

      } else if (image_index == 5) {
        image = glasses;

      } else if (image_index == 4) {
        image = computer;

      } else if (image_index == 3) {
        image = cat;

      } else if (image_index == 2) {
        image = game1;
        var width = 200;

      } else if (image_index == 1) {
        image = headphones;

      } else {
        image = benia;
      }

      $(this).css('left', 'calc(50% - ' + width/2 + 'px');

      $(this).find('span').each(function() {
        if (image[index] == 1) {
          $(this).css('background-color', '#2ab573');
          $(this).css('display', 'inline-block');

        } else if (image[index] == 2) {
          $(this).css('background-color', 'transparent');
          $(this).css('display', 'none');

        } else {
          $(this).css('background-color', 'transparent');
          $(this).css('display', 'inline-block');
        }

        index = index + 1;
      });

    });
});