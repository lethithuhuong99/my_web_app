$(window).resize(logScreenSize);

$(function(){
  logScreenSize();
  resizeElements(['.my-button-people-name', '.my-button-jump-to-people'])

  if(!Modernizr.mq('(min-width: 576px)')) {
    $('.my-button-people-name').css('width', '180px');
  }

  $('.my-button-people-name').on('click', function(){
    // $(this).removeClass("btn-secondary").addClass("btn-danger");
    $(this).toggleClass("btn-secondary btn-danger");
    var $button = $(this).closest("div").find(".my-button-jump-to-people");
    $button.toggleClass("d-none");

    if(Modernizr.mq('(min-width: 576px)')) {
      resizeElements(['.my-button-people-name', '.my-button-jump-to-people']);
    }

    else {
      resizeElements(['.my-button-jump-to-people']);
      $('.my-button-people-name').css('width', '180px');
    }


    var id = $button.find("a").attr("href");
    $(id).toggleClass("d-none");

  });
});
