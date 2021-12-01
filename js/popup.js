function popupInitialize() {
	$('.show__popup-btn').each(function () {
		var idPopup = $(this).data('popup');
		
		$(this).click(function () {
			showPopup(idPopup);
		});
	});


	// popup button add new inputs for the sizes of Window
	$(".popup").find('#popup__addWindow').click(function () {
		$(".cloneJS").clone().removeClass("cloneJS").addClass("cloneJS" + "New").appendTo(".popup__size");
	});

	// 


	$('.popup').find('.close-popup').click(function () {
		var idPopup = $(this).closest('.popup').attr('id');
		hidePopup(idPopup);
		
		//  on close popup delete new inputs for the sizes
		if (idPopup === "calculatePrice") {
			$(this).closest('.popup').find(".cloneJSNew").remove();
		}
	});

	$(document).mouseup(function (e) {
		var container = $('.popup__inner');
		var idPopup = $(e.target).closest('.popup').attr('id');
		if (container.is(e.target) && container.has(e.target).length === 0) {
			hidePopup(idPopup);
		}
	});
}
function showPopup(id) {
	var animatedIn = $('#' + id).find('.popup__content').data('animatedin');
	$('body').addClass('overflowed');
	$('#' + id).addClass('opened');
	$('#' + id).fadeIn();
	$('#' + id).find('.popup__content').addClass(animatedIn);

	 $('.category__list').slick('slickPause');
	 $('.galery__imagesList').slick('slickPause');
	 $('.reviews__list').slick('slickPause');
}

function hidePopup(id) {
	var animatedIn = $('#' + id).find('.popup__content').data('animatedin');
	var animatedOut = $('#' + id).find('.popup__content').data('animatedout');
	
	$('#' + id).removeClass('opened');
	$('#' + id).find('.popup__content').removeClass(animatedIn).addClass(animatedOut);
	$('#' + id).fadeOut();
	setTimeout(function () {
		if($('.popup.opened').length === 0){
			$('body').removeClass("overflowed");
		}
		$('#' + id).find('.popup__content').removeClass(animatedOut);
	}, 400);

	$('.category__list').slick('slickPlay');
		$('.galery__imagesList').slick('slickPlay');
	 $('.reviews__list').slick('slickPlay');
}