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
});