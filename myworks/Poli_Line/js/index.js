$(document).ready(function(){
  $('.slider').slick({
    dots: false,
	fade: true,
	cssEase: 'linear'
  });
});
$(function(){
	$('.product-block').jScrollPane({
		showArrows: true,
		arrowButtonSpeed: 960,
		animateScroll: true
	});
});


