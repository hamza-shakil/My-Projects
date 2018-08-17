$(document).ready(function(){
    var scrollTop = 0;
     $('#logo').removeClass('back-color');
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);
      
      if (scrollTop < 500) {
        $('header').removeClass('back-ground');
        $('#logo').removeClass('back-color');
        $('.header-ul a').removeClass('back-color');
        $('.header-ul ul').removeClass('back-ground');
      } else if (scrollTop > 500) {
        $('header').addClass('back-ground');
        $('#logo').addClass('back-color');
        $('.header-ul a').addClass('back-color');
        $('.header-ul ul').addClass('back-ground');
      } 
      
    }); 
    
  });


  