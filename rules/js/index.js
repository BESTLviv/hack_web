// scrollToTop disappering function
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('#scrollToTop').fadeIn();
  } else {
    $('#scrollToTop').fadeOut();
  }
});


// sidenav function
function openNav() {
  if ($('#mySidenav').width() == 0) {
    document.getElementById("mySidenav").style.width = "300px";
    $('#menuButton').addClass('close-btn');
  } else {
    document.getElementById("mySidenav").style.width = "0";
    $('#menuButton').removeClass('close-btn');
  }
}


$(window).resize(function() {
  $('#contacts').height($('#test').height() + 48);
});


$(document).ready(function(){
  $('#contacts').height($('#test').height() + 48);

  // general scroll function
  $(".scroll-button").click(function() {
    var to_section = $(this).attr('to-section');
     
    $('html, body').animate({
      scrollTop: $('#' + to_section).offset().top
    }, 1600);
  });


  // close Sidenav onclick item
  $('#mySidenav').find('p').click(function() {
    openNav();
  });


  // adding temporary glich to text
  $('#reg_glitch_button').click(function() {
    $('#reg_header').addClass('glitch');
    setTimeout(function() {
      $('#reg_header').removeClass('glitch');
    }, 5000);
  });


  // popup opening and closing
  $('#reg_form').submit(function() {
    $('.popup').fadeIn(800);
  });

  $('.popup').find('.button').click(function() {
    $('.popup').fadeOut(800);
  });


  // window changing 
  $('.window-button').click(function() {
    var new_window = '#' + $(this).attr('to');
    var old_window = '#' + $(this).attr('from');

    setTimeout(function() {
      $(old_window).fadeOut(600);
    }, 300);
    
    $(new_window).fadeIn(600);      
  });


  // button animation
  var interval;

  $('#reg_btn').click(function() {
    $('#input_reg_btn').click();
  });

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
    clearInterval(interval);
    $(this).find('span').removeClass('invisible');
  });


  // images code
  var benia = [[0, 0, 1, 1, 1, 1, 1, 0, 0,
               0, 1, 0, 0, 1, 0, 0, 1, 0,
               1, 1, 1, 0, 1, 1, 0, 1, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               1, 0, 1, 0, 1, 0, 1, 0, 1,
               2, 2, 2, 2, 2, 2, 2, 2, 2,
               2, 2, 2, 2, 2, 2, 2, 2, 2,
               2, 2, 2, 2, 2, 2, 2, 2, 2],
               [0, 0, 1, 1, 1, 1, 1, 0, 0,
                0, 1, 0, 0, 0, 0, 0, 1, 0,
                0, 1, 0, 0, 0, 0, 0, 1, 0,
                1, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 1, 0, 0, 0, 0, 0, 1, 1,
                1, 1, 1, 0, 0, 0, 1, 1, 1,
                0, 1, 1, 0, 0, 0, 1, 1, 0,
                2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2],
               [0, 0, 0, 1, 1, 0, 0, 0, 2,
                0, 0, 1, 1, 1, 1, 0, 0, 2,
                0, 1, 1, 1, 1, 1, 1, 0, 2,
                1, 1, 0, 1, 1, 0, 1, 1, 2,
                1, 1, 1, 1, 1, 1, 1, 1, 2,
                0, 0, 1, 0, 0, 1, 0, 0, 2,
                0, 1, 0, 1, 1, 0, 1, 0, 2,
                1, 0, 1, 0, 0, 1, 0, 1, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2],              
              [0, 1, 0, 0, 1, 0, 0, 1, 1,
               0, 1, 1, 1, 1, 0, 0, 0, 1,
               1, 1, 1, 1, 1, 1, 0, 0, 1,
               1, 0, 1, 0, 1, 1, 1, 0, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               0, 1, 1, 1, 1, 1, 1, 1, 1,
               0, 1, 1, 1, 1, 1, 1, 1, 1,
               0, 0, 1, 0, 1, 0, 1, 0, 1,
               0, 0, 1, 0, 1, 0, 1, 0, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 1, 0, 1, 0, 0, 1,
                1, 0, 1, 0, 1, 0, 1, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                0, 0, 0, 0, 1, 0, 0, 0, 0,
                0, 0, 1, 1, 1, 1, 1, 0, 0,
                2, 2, 2, 2, 2, 2, 2, 2, 2],
              [1, 1, 1, 0, 1, 1, 1, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               1, 1, 1, 1, 1, 1, 1, 0, 1,
               1, 0, 1, 0, 1, 0, 1, 0, 0,
               1, 1, 1, 0, 1, 1, 1, 0, 0,
               2, 2, 2, 2, 2, 2, 2, 2, 2,
               2, 2, 2, 2, 2, 2, 2, 2, 2,
               2, 2, 2, 2, 2, 2, 2, 2, 2],
              [0, 0, 0, 0, 0, 1, 1, 1, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               1, 1, 1, 1, 1, 1, 0, 0, 1,
               1, 0, 1, 1, 0, 1, 1, 0, 1,
               0, 0, 0, 0, 0, 1, 1, 1, 1,
               2, 2, 2, 2, 2, 2, 2, 2, 2,
               2, 2, 2, 2, 2, 2, 2, 2, 2,
               2, 2, 2, 2, 2, 2, 2, 2, 2,
               2, 2, 2, 2, 2, 2, 2, 2, 2,
               2, 2, 2, 2, 2, 2, 2, 2, 2],
              [0, 0, 0, 0, 0, 1, 1, 0, 0,
               0, 0, 0, 0, 1, 1, 1, 0, 0,
               0, 0, 0, 1, 1, 1, 0, 0, 1,
               0, 1, 1, 1, 1, 1, 1, 1, 1,
               1, 0, 1, 0, 1, 0, 1, 1, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 0,
               0, 0, 0, 1, 1, 1, 0, 0, 0,
               0, 0, 0, 0, 1, 1, 1, 0, 0,
               0, 0, 0, 0, 0, 1, 1, 0, 0,
               0, 0, 0, 0, 0, 1, 1, 0, 0],
              [0, 0, 1, 1, 1, 1, 1, 0, 0,
               0, 0, 0, 1, 0, 1, 0, 0, 0,
               0, 0, 0, 1, 0, 1, 0, 0, 0,
               0, 0, 1, 1, 0, 1, 1, 0, 0,
               0, 1, 1, 0, 0, 0, 1, 1, 0,
               0, 1, 0, 0, 0, 0, 0, 1, 0,
               0, 1, 1, 1, 1, 1, 1, 1, 0,
               0, 1, 1, 0, 1, 1, 1, 1, 0,
               0, 0, 1, 1, 1, 1, 1, 0, 0],
             [1, 1, 1, 1, 1, 1, 1, 1, 0,
              1, 0, 1, 1, 1, 0, 1, 0, 1,
              1, 0, 1, 1, 1, 0, 1, 0, 1,
              1, 0, 1, 1, 1, 0, 1, 0, 1,
              1, 0, 1, 1, 1, 1, 1, 0, 1,
              1, 0, 0, 0, 0, 0, 0, 0, 1,
              1, 0, 1, 1, 1, 1, 1, 0, 1,
              1, 1, 0, 0, 0, 0, 0, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1],
              [0, 1, 1, 1, 0, 1, 1, 1, 0,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               0, 1, 1, 1, 1, 1, 1, 1, 0,
               0, 0, 1, 1, 1, 1, 1, 0, 0,
               0, 0, 0, 1, 1, 1, 0, 0, 0,
               0, 0, 0, 0, 1, 0, 0, 0, 0,
               2, 2, 2, 2, 2, 2, 2, 2, 2],
             [0, 1, 1, 1, 1, 1, 1, 1, 0,
              1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 0, 0, 0, 0, 0, 0, 0, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 0, 0, 0, 1, 0, 0, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1,
              0, 1, 1, 1, 1, 1, 1, 1, 0,
              0, 0, 1, 1, 0, 0, 0, 0, 0,
              0, 1, 1, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 1, 0, 0, 0, 0,
              1, 1, 1, 1, 0, 1, 1, 1, 1,
              0, 0, 0, 0, 1, 0, 0, 0, 0,
              0, 0, 1, 1, 1, 1, 0, 0, 0,
              0, 1, 1, 0, 1, 1, 0, 0, 1,
              0, 1, 0, 0, 1, 1, 1, 1, 1,
              0, 1, 1, 1, 1, 1, 1, 0, 0,
              0, 0, 1, 0, 0, 1, 0, 0, 0,
              0, 1, 1, 1, 1, 1, 1, 1, 0],
              [0, 1, 1, 1, 1, 1, 1, 1, 0,
               0, 1, 0, 1, 0, 1, 0, 1, 0,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               1, 0, 1, 0, 0, 0, 1, 0, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               0, 1, 1, 0, 0, 0, 1, 1, 0,
               0, 0, 1, 1, 0, 1, 1, 0, 0,
               0, 0, 0, 1, 1, 1, 0, 0, 0,
               0, 0, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 1, 1, 1, 0, 0, 0,
               0, 0, 1, 1, 0, 1, 1, 0, 0,
               0, 0, 1, 0, 0, 0, 1, 0, 0,
               0, 1, 1, 1, 1, 1, 1, 1, 0,
               1, 0, 1, 0, 1, 0, 1, 0, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               0, 0, 1, 0, 1, 0, 1, 0, 0,
               0, 1, 0, 0, 1, 0, 0, 1, 0,
               2, 2, 2, 2, 2, 2, 2, 2, 2],
             [0, 1, 1, 0, 0, 0, 1, 1, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 1, 1, 0, 0, 0, 1, 1, 0,
              1, 0, 0, 1, 0, 1, 0, 0, 1,
              1, 0, 0, 1, 0, 1, 0, 0, 1,
              1, 1, 0, 1, 0, 1, 1, 0, 1,
              1, 1, 0, 1, 0, 1, 1, 0, 1,
              1, 0, 0, 1, 0, 1, 0, 0, 1,
              0, 1, 1, 0, 0, 0, 1, 1, 0],
              [1, 1, 1, 1, 1, 1, 1, 0, 0,
               1, 1, 1, 1, 1, 1, 1, 0, 0,
               1, 1, 0, 1, 0, 1, 1, 1, 1,
               1, 0, 1, 0, 1, 0, 1, 0, 1,
               1, 0, 0, 1, 0, 0, 1, 0, 1,
               1, 1, 0, 0, 0, 1, 1, 0, 1,
               1, 1, 1, 0, 1, 1, 1, 1, 1,
               1, 1, 1, 1, 1, 1, 1, 0, 0,
               0, 1, 1, 1, 1, 1, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0,
               1, 1, 1, 0, 0, 0, 0, 0, 0,
               0, 1, 0, 0, 0, 0, 1, 1, 0,
               0, 1, 0, 0, 0, 1, 0, 0, 0,
               0, 1, 0, 0, 1, 0, 0, 0, 0,
               0, 1, 1, 1, 0, 0, 0, 0, 0,
               0, 1, 0, 0, 0, 0, 0, 1, 0,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               0, 1, 0, 0, 0, 0, 0, 1, 0],
              [0, 1, 1, 1, 1, 1, 1, 1, 0,
               0, 0, 1, 0, 0, 0, 1, 0, 0,
               0, 0, 1, 1, 0, 1, 1, 0, 0,
               0, 0, 1, 1, 1, 1, 1, 0, 0,
               0, 0, 0, 1, 0, 1, 0, 0, 0,
               0, 0, 1, 0, 0, 0, 1, 0, 0,
               0, 0, 1, 0, 1, 0, 1, 0, 0,
               0, 0, 1, 1, 1, 1, 1, 0, 0,
               0, 1, 1, 1, 1, 1, 1, 1, 0],
              [0, 0, 0, 1, 1, 1, 0, 0, 0,
               0, 0, 0, 1, 0, 1, 0, 0, 0,
               0, 0, 0, 0, 0, 1, 0, 0, 0,
               0, 1, 1, 1, 1, 1, 1, 1, 0,
               1, 1, 0, 0, 0, 0, 0, 1, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 1, 0, 0, 0, 1, 0, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1],
               [0, 0, 0, 0, 1, 1, 1, 0, 0,
                1, 0, 0, 1, 1, 1, 1, 1, 0,
                1, 1, 1, 1, 0, 0, 0, 1, 0,
                1, 0, 0, 1, 0, 0, 0, 1, 0,
                0, 0, 1, 1, 1, 1, 1, 1, 0,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 0, 1, 0, 1, 0, 1, 0, 1,
                1, 1, 0, 1, 0, 1, 0, 1, 1,
                0, 0, 1, 1, 1, 1, 1, 0, 0],
               [0, 0, 0, 0, 0, 0, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 0, 1,
                1, 0, 1, 0, 1, 0, 1, 0, 0,
                1, 1, 0, 1, 0, 1, 1, 0, 0,
                1, 0, 1, 0, 1, 0, 1, 0, 0,
                0, 1, 1, 1, 1, 1, 1, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 1, 1, 0, 0, 1, 1, 0, 0],
               [0, 0, 1, 1, 1, 1, 1, 0, 0,
                0, 0, 1, 0, 0, 0, 1, 0, 0,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                0, 1, 0, 0, 0, 0, 0, 1, 0,
                1, 0, 1, 1, 1, 1, 1, 0, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1],
              [0, 0, 0, 1, 0, 1, 0, 0, 0,
               1, 1, 0, 0, 1, 0, 0, 1, 1,
               1, 1, 1, 1, 0, 1, 1, 1, 1,
               1, 0, 1, 1, 0, 1, 1, 0, 1,
               1, 1, 1, 1, 0, 1, 1, 1, 1,
               0, 1, 1, 1, 0, 1, 1, 1, 0,
               0, 0, 1, 1, 1, 1, 1, 0, 0,
               0, 1, 1, 1, 0, 1, 1, 1, 0,
               0, 1, 1, 0, 0, 0, 1, 1, 0],
               [0, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 0, 1, 1, 1, 1, 1, 0, 0,
                0, 1, 1, 0, 1, 0, 1, 1, 0,
                1, 0, 1, 1, 0, 1, 1, 0, 1,
                1, 0, 1, 1, 1, 1, 1, 0, 1,
                1, 0, 0, 1, 1, 1, 0, 0, 1,
                0, 1, 1, 0, 1, 0, 1, 1, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 0,
                0, 0, 0, 1, 1, 1, 0, 0, 0],
               [0, 0, 0, 0, 1, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 0,
                0, 0, 0, 1, 1, 1, 0, 0, 0,
                0, 0, 1, 1, 1, 1, 1, 0, 0,
                0, 0, 0, 1, 1, 1, 0, 0, 0,
                0, 0, 1, 1, 0, 1, 1, 0, 0,
                0, 0, 1, 0, 1, 0, 1, 0, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 0],
               [0, 0, 0, 1, 1, 1, 0, 0, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 0,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 0, 1, 0, 1, 0, 1, 0, 1,
                0, 0, 0, 0, 1, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 0,
                0, 0, 0, 1, 1, 0, 0, 0, 0],
              [0, 1, 1, 1, 1, 1, 1, 1, 0,
               1, 1, 1, 1, 1, 1, 1, 1, 1,
               1, 1, 0, 0, 0, 0, 0, 1, 1,
               0, 0, 0, 1, 1, 1, 0, 0, 0,
               0, 0, 1, 1, 1, 1, 1, 0, 0,
               0, 1, 1, 1, 0, 1, 1, 1, 0,
               0, 1, 1, 0, 1, 0, 1, 1, 0,
               0, 1, 1, 1, 0, 1, 1, 1, 0,
               0, 1, 1, 1, 1, 1, 1, 1, 0]]


  // govnocode by Vova Leha started
  var $index = 0;
  var image_index = 0;    

  $('.poligon').find('span').each(function() {
    if (benia[image_index][$index] == 1) {
      $(this).css('background-color', '#2ab573');
      $(this).css('display', 'inline-block');

    } else if (benia[image_index][$index] == 2) {
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


        if (benia[image_index][$number] == 1) {
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
    
    if (image_index == benia.length) {
      image_index = 0;
    }

    var width = 225;

    image = benia[image_index];

    if (image_index == 2) {
      width = 200;
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
          interval2 = setInterval(changes, 10 * 81);
          $('.poligon').on('click', poligon_click);
        }

        $array.splice($number, 1);

      }, Math.floor(Math.random() * 30 + 10) * t);
    }
  }

  $('.poligon').click(poligon_click);
  //govnocode ended, plizze refactor it
});