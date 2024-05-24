/*$(document).ready(function() {
  $('#signup').click(function() {
    $('.pinkbox').css('transform', 'translateX(80%)');
    $('.signup').addClass('nodisplay');
    $('.signin').removeClass('nodisplay');
  });

  $('#signin').click(function() {
    $('.pinkbox').css('transform', 'translateX(0%)');
    $('.signup').removeClass('nodisplay');
    $('.signin').addClass('nodisplay');
  });
});*/

$(document).ready(function() {
  $('#signup').click(function() {
    $('.pinkbox').css('transform', 'translateX(80%)');
    $('.signin').addClass('nodisplay');
    $('.signup').removeClass('nodisplay');
  });

  $('#signin').click(function() {
    $('.pinkbox').css('transform', 'translateX(0%)');
    $('.signin').removeClass('nodisplay');
    $('.signup').addClass('nodisplay');
  });
});