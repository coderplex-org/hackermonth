$(document).ready(function() {
	$('.js-timer').countdown('2016/12/04 14:00:00',
		function(event) {
			var $this = $(this).html(event.strftime('' +
				'<span>%d</span> days ' +
				'<span>%H</span> hr ' +
				'<span>%M</span> min ' +
				'<span>%S</span> sec'));
		});
	// animate scroll when nav links are clicked
	$(document).on('click', 'a[href^="#"]', function(e) {
		// target element id
		var id = $(this).attr('href');

		// target element
		var $id = $(id);
		if ($id.length === 0) {
			return;
		}
		// prevent standard hash navigation (avoid blinking in IE)
		// e.preventDefault();

		// top position relative to the document
		var pos = $(id).offset().top - 100;

		// animated top scrolling
		$('body, html').animate({
			scrollTop: pos
		});
	});
});
