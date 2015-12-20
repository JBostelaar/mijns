$(document).ready(function(){
	$('nav a.search-trigger').click(function(e){
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
		if($('body').hasClass('mobilemenu-open')){
			$('body').removeClass('mobilemenu-open');
		} else {
			$('body').addClass('mobilemenu-open');		
		}
	});
});