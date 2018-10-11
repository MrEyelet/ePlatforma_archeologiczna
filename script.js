$( document ).ready(function() {
	
    $('.hamburger__container').on('click', function(){
    	console.log('click');
    	$('.panel').toggleClass('js-panel--show');
    	$(this).toggleClass('rotate');
        $('.hamburger__top').toggleClass('hamburger__top--toggle');
        $('.hamburger__middle').toggleClass('hamburger__middle--toggle');
        $('.hamburger__bottom').toggleClass('hamburger__bottom--toggle');
    });
});