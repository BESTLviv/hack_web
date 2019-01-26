
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

  $('#reg_glitch_button').click(function() {
    $('#reg_header').addClass('glitch');
    setTimeout(function() {
      $('#reg_header').removeClass('glitch');
    }, 5000);
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

    $('#contacts').height($('#test').height() + 48);

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


    var $index = 0;
    var image_index = 0;    

    $('.poligon').find('span').each(function() {
      if (benia[$index] == 1) {
        $(this).css('background-color', '#2ab573');
        $(this).css('display', 'inline-block');

      } else if (benia[$index] == 2) {
        $(this).css('background-color', 'transparent');
        $(this).css('display', 'none');

      } else {
        $(this).css('background-color', 'transparent');
        $(this).css('display', 'inline-block');
      }

      $index = $index + 1;
    });

    var image;

    function changes() {
      for (var t = 0; t < 81; t++) {
        setTimeout(function() {
          $number = Math.floor(Math.random() * 81);

          elem = $('.poligon').find('span').eq($number);


          if (elem.css('background-color') != 'rgba(0, 0, 0, 0)') {
            var opacity = Math.floor((Math.random() * 100) + 40);
            elem.css('opacity', opacity/100);

            var color = Math.floor(Math.random() * 10 + 1);

            if (color > 2) {
              elem.css('background-color', '#2ab573');
            } else if (color == 2) {
              elem.css('background-color', 'white');
            } else {
              elem.css('background-color', '#444444');
            }
          } 

        }, Math.floor(Math.random() * 10) * t);
      }
    }

    var interval2 = setInterval(changes, 10 * 81);

    function poligon_click() {
      $('.poligon').off('click');
      clearInterval(interval2);
      image_index = image_index + 1;
      $index = 0;

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

      var $array = new Array(81);
      for (var t = 0; t < 81; t++) {
        $array[t] = t;
      }

      $('.poligon').css('left', 'calc(50% - ' + width/2 + 'px');

      for (var t = 0; t < 81; t++) {
        setTimeout(function() {
          $number = Math.floor(Math.random() * $array.length);

          elem = $('.poligon').find('span').eq($array[$number]);

          if (image[$array[$number]] == 1) {
            
            var color = Math.floor(Math.random() * 10 + 1);

            if (color > 2) {
              elem.css('background-color', '#2ab573');
            } else if (color == 2) {
              elem.css('background-color', 'white');
            } else {
              elem.css('background-color', '#444444');
            }

            elem.css('display', 'inline-block');

            var opacity = Math.floor((Math.random() * 100) + 40);
            elem.css('opacity', opacity/100);

          } else if (image[$array[$number]] == 2) {
            
            elem.css('background-color', 'transparent');
            elem.css('display', 'none');

          } else {
            
            elem.css('background-color', 'transparent');
            elem.css('display', 'inline-block');
          }        

          if ($array.length == 1) {
            setTimeout(function() {
              interval2 = setInterval(changes, 10 * 81);
              $('.poligon').on('click', poligon_click);
            }, 4000);
          }

          $array.splice($number, 1);

        }, Math.floor(Math.random() * 30 + 10) * t);
      }
    }

    $('.poligon').click(poligon_click);
});