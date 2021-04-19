$(function(){
  $('.faq-list-item').click(function(){
    var $answer=$(this).find('.answer');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp(500);
      $(this).find('.btn2').text('+');
    }else{
      $answer.addClass('open');
      $answer.slideDown(500);
      $(this).find('.btn2').text('-');
    }
  });
  $('#signup-gift').click(function(){
    $('.modal').fadeIn();
  });
  $('.close-modal').click(function(){
   $('.modal').fadeOut();
  });
  
  $('.animation').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = jQuery(window).height(),
     topWindow = jQuery(window).scrollTop();
 $('.animation').each(function(){
  var targetPosition = jQuery(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   jQuery(this).addClass("fadeInDown");
  }
 });
});

$('.fa-bars ').click(function(){
  var $header=$('.header2-nav');
  if($header.hasClass('open')){
    $header.removeClass('open');
    $header.slideUp();
    
  }else{
    $header.addClass('open');
    $header.slideDown();
  }

});

});