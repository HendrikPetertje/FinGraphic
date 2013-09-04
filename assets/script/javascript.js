// Script file part of FinGraphic copyright Peter van der Meulen and Pico Reclame 2013. Planning on using the contents of my work? contact me at www.github.com/amonfog

$( document ).ready(function(){

	alert('Wil het een beetje lukken? Groetjes, Peter')
	
	// navigation to overzicht
	$('#overzicht-link').click(function(){

		$('.nav-active').css('background', 'none');
		// remove classes
		$('#discussie-link').removeClass("nav-active");
		$('#faq-link').removeClass("nav-active");
		// add classes
		$(this).addClass("nav-active");

		if($('#overzicht-sub-header').is(":hidden")) {
			$('#overzicht-sub-header').fadeIn();
		};

		$('.header-container').css('background', '#2ECC71');
		$('.nav-active').css('background', 'url(assets/images/header/nav-active.png) top repeat-x #27AE60');

	});

	// navigation to discussie
	$('#discussie-link').click(function(){
		$('.nav-active').css('background', 'none');
		// remove classes
		$('#overzicht-link').removeClass("nav-active");
		$('#faq-link').removeClass("nav-active");
		// add classes
		$(this).addClass("nav-active");

		if($('#overzicht-sub-header').is(":visible")) {
			$('#overzicht-sub-header').fadeOut();
		};

		$('.header-container').css('background', '#2ECC71');
		$('.nav-active').css('background', 'url(assets/images/header/nav-active.png) top repeat-x #27AE60');

	});

	// navigation to faq
	$('#faq-link').click(function(){
		$('.nav-active').css('background', 'none');
		// remove classes
		$('#overzicht-link').removeClass("nav-active");
		$('#discussie-link').removeClass("nav-active");
		// add classes
		$(this).addClass("nav-active");

		if($('#overzicht-sub-header').is(":visible")) {
			$('#overzicht-sub-header').fadeOut();
		};

		$('.header-container').css('background', '#2ECC71');
		$('.nav-active').css('background', 'url(assets/images/header/nav-active.png) top repeat-x #27AE60');

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
		$('.nav-active').css('background', 'url(assets/images/header/nav-active.png) top repeat-x #27AE60');
		$('.overzicht-sub-header').css('background', '#27AE60');
		$('.header-nav a:hover').css('background', '#27AE60');
		$('.header-search-text').css('color', '#27AE60');
		$('.header-search-submit').css('background', 'url(assets/images/header/search-bar-01.png) no-repeat right');
		
		
		
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

		// css migrations
		$('.header-container').css('background', '#E67E22');
		$('.nav-active').css('background', 'url(assets/images/header/nav-active.png) top repeat-x #D35400');
		$('.overzicht-sub-header').css('background', '#D35400');
		$('.header-nav a:hover').css('background', '#D35400');
		$('.subnav').css('color', '#FFF');
		$('.subnav-active').css('color', '#D35400');
		$('.header-search-text').css('color', '#D35400');
		$('.header-search-submit').css('background', 'url(assets/images/header/search-bar-02.png) no-repeat right');
	});

	// bezuinigingen
	$('#nav-bezuinigingen').click(function(){
		// remove classes
		$('#nav-inkomsten').removeClass("subnav-active");
		$('#nav-consumentenprijzen').removeClass("subnav-active");
		$('#nav-bevolking').removeClass("subnav-active");
		$('#nav-financieel').removeClass("subnav-active");
		// add classes
		$(this).addClass("subnav-active");

		// css migrations
		$('.header-container').css('background', '#3498DB');
		$('.nav-active').css('background', 'url(assets/images/header/nav-active.png) top repeat-x #2980B9');
		$('.overzicht-sub-header').css('background', '#2980B9');
		$('.header-nav a:hover').css('background', '#2980B9');
		$('.subnav').css('color', '#FFF');
		$('.header-search-text').css('color', '#2980B9');
		$('.header-search-submit').css('background', 'url(assets/images/header/search-bar-03.png) no-repeat right');


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

		// css migrations
		$('.header-container').css('background', '#E74C3C');
		$('.nav-active').css('background', 'url(assets/images/header/nav-active.png) top repeat-x #C0392B');
		$('.overzicht-sub-header').css('background', '#C0392B');
		$('.header-nav a:hover').css('background', '#D35400');
		$('.subnav').css('color', '#FFF');
		$('.header-search-text').css('color', '#D35400');
		$('.header-search-submit').css('background', 'url(assets/images/header/search-bar-04.png) no-repeat right');
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

		// css migrations
		$('.header-container').css('background', '#F1C40F');
		$('.nav-active').css('background', 'url(assets/images/header/nav-active.png) top repeat-x #F39C12');
		$('.overzicht-sub-header').css('background', '#F39C12');
		$('.header-nav a:hover').css('background', '#F39C12');
		$('.subnav').css('color', '#FFF');
		$('.header-search-text').css('color', '#F39C12');
		$('.header-search-submit').css('background', 'url(assets/images/header/search-bar-05.png) no-repeat right');
		
	});

	// smooth scrolling
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});

	// Preloading Images on page load
	$.fn.preload = function() {
	    this.each(function(){
	        $('<img/>')[0].src = this;
	    });
	}

	// Usage:

	$(['assets/images/header/search-bar-01.png','assets/images/header/search-bar-02.png','assets/images/header/search-bar-03.png','assets/images/header/search-bar-04.png','assets/images/header/search-bar-05.png']).preload();$.fn.preload = function() {
	    this.each(function(){
	        $('<img/>')[0].src = this;
	    });
	}

	// // Usage:

	 $(['assets/images/header/search-bar-01.png','assets/images/header/search-bar-02.png','assets/images/header/search-bar-03.png','assets/images/header/search-bar-04.png','assets/images/header/search-bar-05.png']).preload();


});
