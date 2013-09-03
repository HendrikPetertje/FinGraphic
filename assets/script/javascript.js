// Script file part of FinGraphic copyright Peter van der Meulen and Pico Reclame 2013. Planning on using the contents of my work? contact me at www.github.com/amonfog

$( document ).ready(function(){
	
	// navigation to overzicht
	$('#overzicht-link').click(function(){
		// remove classes
		$('#discussie-link').removeClass("nav-active");
		$('#faq-link').removeClass("nav-active");
		// add classes
		$(this).addClass("nav-active");

		if($('#overzicht-sub-header').is(":hidden")) {
			$('#overzicht-sub-header').fadeIn();
		};

	});

	// navigation to discussie
	$('#discussie-link').click(function(){
		// remove classes
		$('#overzicht-link').removeClass("nav-active");
		$('#faq-link').removeClass("nav-active");
		// add classes
		$(this).addClass("nav-active");

		if($('#overzicht-sub-header').is(":visible")) {
			$('#overzicht-sub-header').fadeOut();
		};

	});

	// navigation to discussie
	$('#faq-link').click(function(){
		// remove classes
		$('#overzicht-link').removeClass("nav-active");
		$('#discussie-link').removeClass("nav-active");
		// add classes
		$(this).addClass("nav-active");

		if($('#overzicht-sub-header').is(":visible")) {
			$('#overzicht-sub-header').fadeOut();
		};

	});


	// subnavigatie

	// inkomsten
	$('#nav-inkomsten').click(function(){
		// remove classes
		$('#nav-consumentenprijzen').removeClass("subnav-active");
		$('#nav-bezuinigingen').removeClass("subnav-active");
		$('#nav-bevolking').removeClass("subnav-active");
		$('#nav-financieel').removeClass("subnav-active");
		// add classes
		$(this).addClass("subnav-active");

		$('.header-container').css('background', '#2ECC71');
		$('.nav-active').css('background', 'url(../images/header/nav-active.png) top repeat-x #27AE60');
		$('.overzicht-sub-header').css('background', '#27AE60');
		$('.header-nav a:hover').css('background', '#27AE60');
		$('.overzicht-sub-header a:hover').css('color', '#2ECC71');
		
		
		
	});

	// consumentenprijzen
	$('#nav-consumentenprijzen').click(function(){
		// remove classes
		$('#nav-inkomsten').removeClass("subnav-active");
		$('#nav-bezuinigingen').removeClass("subnav-active");
		$('#nav-bevolking').removeClass("subnav-active");
		$('#nav-financieel').removeClass("subnav-active");
		// add classes
		$(this).addClass("subnav-active");

		$('.header-container').css('background', '#E67E22');
		$('.nav-active').css('background', 'url(../images/header/nav-active.png) top repeat-x #D35400');
		$('.overzicht-sub-header').css('background', '#D35400');
		$('.header-nav a:hover').css('background', '#D35400');
		$('.overzicht-sub-header a:hover').css('color', '#E67E22');
	});

	// bezuinigingen
	$('#nav-bezuinigingen').click(function(){
		// remove classes
		$('#nav-inkomsten').removeClass("subnav-active");
		$('#nav-consumentenprijzen').removeClass("subnav-active");
		$('#nav-').removeClass("subnav-active");
		$('#nav-financieel').removeClass("subnav-active");
		// add classes
		$(this).addClass("subnav-active");


	});

	// bevolking
	$('#nav-bevolking').click(function(){
		// remove classes
		$('#nav-inkomsten').removeClass("subnav-active");
		$('#nav-consumentenprijzen').removeClass("subnav-active");
		$('#nav-bezuinigingen').removeClass("subnav-active");
		$('#nav-financieel').removeClass("subnav-active");
		// add classes
		$(this).addClass("subnav-active");
	});

	// financieel
	$('#nav-financieel').click(function(){
		// remove classes
		$('#nav-inkomsten').removeClass("subnav-active");
		$('#nav-consumentenprijzen').removeClass("subnav-active");
		$('#nav-bezuinigingen').removeClass("subnav-active");
		$('#nav-bevolking').removeClass("subnav-active");
		// add classes
		$(this).addClass("subnav-active");
	});

	// smooth scrolling
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});

});
