/* eslint-disable */

$(() => {

  if ($('#owner')[0] && $('#owner')[0].checked === false) {
    $('#owner').trigger($.Event('click'));
  }

  if ($('#authenticated')[0].checked === true) {
    $('#authenticated').trigger($.Event('click'));
  }


  $('.sign-in').click(function() {
    $('#authenticated').trigger($.Event('click'));
  });


  $("#my-shots #authenticated").click(function () {
    if (this.checked) {
      $('.advert--owner, .sign-in').addClass('kill');
      $('.settings, .shot__fave').removeClass('kill');
    } else {
      $('.advert--owner, .sign-in').removeClass('kill');
      $('.settings, .shot__fave').addClass('kill');
    }
  });

  //home page
  $('#home #owner').click(function() {
    if (this.checked) {
      $('.advert--owner, .my-shots, .sign-in').removeClass('kill');
    } else {
      $('.advert--owner, .my-shots, .sign-in').addClass('kill');
    }
  });

  $('#home #authenticated').click(function() {
    if (this.checked) {
      if ($('#owner')[0].checked === false) {
        // idk why i can't just set the state normally, but whatevz
        $('#owner').trigger($.Event('click'));
      }
      $('#owner').attr('disabled', true);
      $('.advert--owner, .sign-in').addClass('kill');
      $('.settings').removeClass('kill');
    } else {
      $('.advert--owner, .sign-in').removeClass('kill');
      $('#owner').attr('disabled', false);
      $('.settings').addClass('kill');
    }
  });

  // shot page wiggle favorite
  $('#shot-page .favorite.disable').click(function() {
    $('.sign-in')
      .not('pulse')
      .addClass('pulse');
    setTimeout(function() {
      $('.sign-in').removeClass('pulse');
    }, 2000);
  });

  // Shot page toggle owner
  $('#shot-page #owner').change(function() {
    if (this.checked) {
      $('.advert--owner, .favorite, .pen, .delete, .sign-in, .navbar__myshots').removeClass('kill');
      $('.advert--non-owner, .report, .navbar__firefox-screenshots').addClass('kill');
    } else {
      $('.advert--owner, .favorite, .pen, .delete, .sign-in, .navbar__myshots').addClass('kill');
      $('.advert--non-owner, .report, .navbar__firefox-screenshots').removeClass('kill');
    }
  });

  // shot page toggle auth
  $('#shot-page #authenticated').change(function() {
    if (this.checked) {
      if ($('#owner')[0] && $('#owner')[0].checked === false) {
        // idk why i can't just set the state normally, but whatevz
        $('#owner').trigger($.Event('click'));
      }
      $('#owner').attr('disabled', true);
      $('.advert--owner, .sign-in, .main-content__upsell').addClass('kill');
      $('.settings, .favorite, .main-content__annotation').removeClass('kill');
    } else {
      $('.advert--owner, .sign-in, .main-content__upsell').removeClass('kill');
      $('.settings, .favorite, .main-content__annotation').addClass('kill');
      $('#owner').attr('disabled', false);
    }
  });

  $('.main-content__upsell button').click(function() {
    if ($('#authenticated')[0].checked === false) {
      $('#authenticated').trigger($.Event('click'));
    }
  });
});
