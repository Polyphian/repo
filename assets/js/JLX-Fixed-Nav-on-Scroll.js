$(document).ready(function(){/* activate scrollspy menu */
	/* smooth scrolling sections */
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top - 70
			}, 1000);
			return false;
		  }
		}
	});
});

/* ADD TOP DIV ABOVE NAVIGATION <div class="top" ></div> */

jQuery(document).ready(function($) {  


/* ADD ID #NAVBAR-MAIN TO NAVBAR <nav id="navbar-main" ></nav> */
    var navbar = $('#navbar-main'),
    		distance = navbar.offset().top,
        $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
          	$("body").css("padding-top", "70px");
			
        } else {
            navbar.removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
	
        }
    });
});