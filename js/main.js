$(function(){
	$('.news_slider').owlCarousel({
    	loop: true,
		items:	1,
		mouseDrag: true,
		touchDrag: true,
		dots: false,
		nav: true,
		smartSpeed: 1000,
		navText: [
			'<p class="slider-nav-btn prew-btn"><i class="fa fa-angle-left" aria-hidden="true"></i></p>',
			'<p class="slider-nav-btn next-btn"><i class="fa fa-angle-right" aria-hidden="true"></i></p>'
		]
	});

	$('.top_slider').owlCarousel({
    	loop: true,
		items:	1,
		mouseDrag: false,
		touchDrag: false,
		dots: true,
		nav: false,
		smartSpeed: 500,
		// autoplay: true,
		autoplayTimeout: 4000,
		animateOut: 'fadeOut'
	});


	// MOBILE MENU
		$('.sandwich').on('click', function(){
			$('.sandwich').toggleClass('active');
			$('header .menu nav').toggleClass('active');
	    });
		$(document).on('click', function(e) {
			if (!$(e.target).closest(".menu").length) {
				$('.sandwich').removeClass('active');
		    	$('header .menu nav').removeClass('active');
		  	}
		  	e.stopPropagation();
		});

	// AUTO SCROLL
		$('body').on('click', '.go_to, .go_up', function(){
			var scroll_el = $(this).attr('href');
	        if ($(scroll_el).length !== 0) {
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
	        }
		    return false;
	    });
});