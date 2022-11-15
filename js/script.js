// =======burger menu===========
$(document).ready(function() {
	$('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        // $('body').toggleClass('fixed-page');
	});
});

// ==========slider============
$(document).ready(function(){
  $('.slider').slick(
    {
      dots:true
    }
  );
});