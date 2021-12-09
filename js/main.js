$(document).ready(function () {
	/* Phone validation */
	$(".wpcf7-validates-as-tel").mask("+38 (999) 999-9999");
	
	$(".wpcf7-validates-as-size").mask("999");
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


// placeholder logic in form
	function makePlaceholderInFormVisible(id) {
		$('label[for="' + id + '"] > .nameInput').addClass('visible').removeClass('hidden');
	};
	function makePlaceholderInFormHidden(id) {
		$('label[for="' + id + '"] > .nameInput').removeClass('visible').addClass('hidden');
	};
	
	$('.measuring__input').each(function () {
		$(this).focus(function () {
			makePlaceholderInFormVisible(this.id);
		}).blur(function () {
			let currentValueInput = $(this).val();
			if (currentValueInput === "") {
				makePlaceholderInFormHidden(this.id);
			}
		});
	});

	$('.assortiment__input').each(function () {
		$(this).focus(function () {
			makePlaceholderInFormVisible(this.id);
		}).blur(function () {
			let currentValueInput = $(this).val();
			if (currentValueInput === "") {
				makePlaceholderInFormHidden(this.id);
			}
		});
	});
	
	// end of placeholder logic


});
$(window).resize(function () {

});
