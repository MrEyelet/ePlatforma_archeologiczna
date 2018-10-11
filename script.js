$( document ).ready(function() {
	
    $('.mobile-menu').on('click', function(){
    	$('.panel').toggleClass('js-panel--show');
    	$(this).toggleClass('rotate');
        $('.hamburger__top').toggleClass('hamburger__top--toggle');
        $('.hamburger__middle').toggleClass('hamburger__middle--toggle');
        $('.hamburger__bottom').toggleClass('hamburger__bottom--toggle');
    });
});