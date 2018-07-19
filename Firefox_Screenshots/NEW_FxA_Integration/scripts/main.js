/* eslint-disable */

$(() => {
  $('.favorite.disable').click(function() {
    $('.sign-in').addClass('pulse');
    setTimeout(function() {
      $('.sign-in').removeClass('pulse');
    }, 2000);
  });

  $('#shot-page #owner').change(function() {
    if (this.checked) {
      $('.advert--owner, .favorite, .pen, .delete, .sign-in, .navbar__myshots').removeClass('kill');
      $('.advert--non-owner, .report, .navbar__firefox-screenshots').addClass('kill');
    } else {
      $('.advert--owner, .favorite, .pen, .delete, .sign-in, .navbar__myshots').addClass('kill');
      $('.advert--non-owner, .report, .navbar__firefox-screenshots').removeClass('kill');
    }
  });

  $('#shot-page #authenticated').change(function() {
    if (this.checked) {
      if ($('#shot-page #owner')[0].checked === false) {
        // idk why i can't just set the state normally, but whatevz
        $('#shot-page #owner').trigger($.Event('click'));
      }
      $('#shot-page #owner').prop('disabled', true);
      $('.advert--owner').addClass('kill');
      $('.favorite').removeClass('disable');
    } else {
      $('.advert--owner').removeClass('kill');
      $('.favorite').addClass('disable');
    }
  });
});
