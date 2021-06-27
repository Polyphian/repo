if (window.innerWidth < 768) {
	$('[data-bss-disabled-mobile]').removeClass('animated').removeAttr('data-aos data-bss-hover-animate');
}

$(document).ready(function(){
	AOS.init();
});