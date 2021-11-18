$(document).ready(function () {
	/* Phone validation */
	$(".wpcf7-validates-as-tel").mask("+7 (999) 999-9999");

	/* Popup initialize */
	popupInitialize();

	/* Animate.css initialize */
	$('.hasAnimation').each(function () {
		var animateName = $(this).data('animate');
		$(this).addClass("hidden").viewportChecker({
			classToRemove: 'hidden',
			classToAdd: 'visible animate__animated ' + animateName,
			//offset: 200
		});
	});


});
$(window).resize(function () {

});
