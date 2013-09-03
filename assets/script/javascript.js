// Script file part of FinGraphic copyright Peter van der Meulen and Pico Reclame 2013. Planning on using the contents of my work? contact me at www.github.com/amonfog

$( document ).ready(function(){
	
	// navigation to overzicht
	$('#overzicht-link').click(function(){
		// remove classes
		$('#discussie-link').removeClass("nav-active");
		$('#faq-link').removeClass("nav-active");
		// add classes
		$(this).addClass("nav-active");

	});

	// navigation to discussie
	$('#discussie-link').click(function(){
		// remove classes
		$('#overzicht-link').removeClass("nav-active");
		$('#faq-link').removeClass("nav-active");
		// add classes
		$(this).addClass("nav-active");

	});

	// navigation to discussie
	$('#faq-link').click(function(){
		// remove classes
		$('#overzicht-link').removeClass("nav-active");
		$('#discussie-link').removeClass("nav-active");
		// add classes
		$(this).addClass("nav-active");

	});

});
