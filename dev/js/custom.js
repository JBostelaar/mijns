$(document).ready(function(){
	$('a.search-trigger').click(function(e){
		e.preventDefault();
		$('.search').addClass('active');
		
		setTimeout(function(){
			$('.search__input').focus();
		}, 300);
		
	});

	$('.search__input').blur(function(){
		$('.search').removeClass('active');
	});

	$('.hamburger').click(function(e){
		e.preventDefault();
		$('.navigation').toggleClass('mobilemenu-open');
	});

	$('.menu__closebutton i').click(function(e){
		e.preventDefault();
		$('.navigation').removeClass('mobilemenu-open');
	});
});