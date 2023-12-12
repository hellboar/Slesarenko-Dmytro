$( document ).ready(function() {
	
    $('.menu-btn').on('click',function(e){
    e.preventDefault();
      $(this).toggleClass('menu-btn-active');
      $('.wrapper').toggleClass("wrapper_active");
      $('.logo').toggle();
      $('.change-lang').toggle();
      $('.main_menu').toggleClass("active_menu");;
     });
    $('.share_button').on('click',function(e){
    e.preventDefault();
      
      $('.secret').toggle();
     });
});

