/*!
 * jQuery CLI
 * Simulating a command line interface with jQuery
 *
 * @version : 1.0.0
 * @author : Paulo Nunes (http://syndicatefx.com)
 * @plugin_demo : http://jimmy.surge.sh/cli
 * @license: MIT
 */

/*!* 
 * jQuery Text Typer plugin
 * https://github.com/gr8pathik/jquery-texttyper
*/
(function(e){"use strict";e.fn.textTyper=function(t){var n={typingClass:"typing",beforeAnimation:function(){},afterAnimation:function(){},speed:10,nextLineDelay:400,startsFrom:0,repeatAnimation:false,repeatDelay:4e3,repeatTimes:1,cursorHtml:'<span class="cursor">|</span>'},r=e.extend({},n,t);this.each(function(){var t=e(this),n=1,i="typingCursor";var s=t,o=s.length,u=[];while(o--){u[o]=e.trim(e(s[o]).html());e(s[o]).html("")}t.init=function(e){var n=r.beforeAnimation;if(n)n();t.animate(0)};t.animate=function(o){var a=s[o],f=r.typingClass,l=r.startsFrom;e(a).addClass(f);var c=setInterval(function(){var f=r.cursorHtml;f=e("<div>").append(e(f).addClass(i)).html();e(a).html(u[o].substr(0,l)+f);l++;if(u[o].length<l){clearInterval(c);o++;if(s[o]){setTimeout(function(){e(a).html(u[o-1]);t.animate(o)},r.nextLineDelay)}else{e(a).find("."+i).remove();if(r.repeatAnimation&&(r.repeatTimes==0||n<r.repeatTimes)){setTimeout(function(){t.animate(0);n++},r.repeatDelay)}else{var h=r.afterAnimation;if(h)h()}}}},r.speed)};t.init()});return this}})(jQuery)


// Let's do it!!
$(document).ready(function() {

  $('.command').hide();
  $('input[type="text"]').focus();
  $('#home').addClass('open');
  $('#home').textTyper({
        speed:20,
        afterAnimation:function(){
          $('.command').fadeIn();
          $('input[type="text"]').focus();
          $('input[type="text"]').val('');
        }
      });

// get array of section ids, that exist in DOM
var sectionArray = [];
// We are using <section> here, you can use <div> or <article> if you want
$('section').each( function(i,e) {
    //you can use e.id instead of $(e).attr('id')
    sectionArray.push($(e).attr('id'));
});

// Debug
//console.log(sectionArray);



// Command Input------------------------------
  
  var check = 0;

  $('input[type="text"]').keyup(function(e){

    if(e.which == 13){// ENTER key pressed

      $('.command').hide();
      var destination = $('input[type="text"]').val();

      if (destination === 'exit') {
        window.top.close();
      }

      var check1 = 0;
      if (destination === 'denied' || destination === 'thanks' || destination === 'email') {
        check1 = 1;
      }

      var email;

      if (destination[0] == 'r' &&
          destination[1] == 'e' &&
          destination[2] == 'g' &&
          destination[3] == ' ') {

        email = destination.slice(4, destination.length);

        $('#input_email').val(email);

        if ($('#input_email').is(':valid')) {
          destination = 'thanks';
        } else {
          destination = 'email';
        }

        $('#input_reg_btn').click();
        $('#reg_form').submit(function() {});
      }

      
      if (check == 2) {} 
      else if (check == 1) {
        $('#sudo_command').hide();

        if (destination.toLowerCase() === 'vlsakmb') {
          destination = 'destroy';
          check = 2;

          $('#root').text('root');
          $('#root').css('color', '#ab000d');
          $('#sudo_command').css('color', '#ab000d');
          $('.command').css('color', '#ab000d');

        } else {
          destination = 'denied';
          check = 0;
        }
      } else {

        if (destination === 'destroy' || destination === 'throw') {
          destination = 'denied';
        } else if (destination === 'sudo destroy' || destination === 'sudo throw') { 
          destination = 'sudo';
          check = 1;
          $('#sudo_command').show();
        }
      }

      if ((destination === 'sudo' && check != 1) || check1 == 1) {
        destination = 'error';
        check1 = 0;
      }

      // Display section with id == destination and hide all others
      $('section[id="' + destination + '"]').addClass('open').siblings().removeClass('open');

      // If destination does not match our array of section ids, display error section
      if($.inArray(destination, sectionArray) == -1){
        $('#error').addClass('open');
        $('#error').siblings().removeClass('open');
      }

      // All sections with class .open init textTyper
      $('.open').textTyper({
        speed:20,
        afterAnimation:function(){
          $('.command').fadeIn();
          $('input[type="text"]').focus();
          $('input[type="text"]').val('');
        }
      });


    }// end if ENTER key pressed

  });// end keyup function

// End Command Input-----------------------------

});


function responsive_screen(){
  if($(window).width() < 500){
    $("body").css("max-width", "100vw");
  }
  else{
    $("body").css("max-width", "50vw");
  }
}

responsive_screen();
$( window ).resize(function() {
    responsive_screen();
});