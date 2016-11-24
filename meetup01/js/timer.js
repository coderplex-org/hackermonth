$(document).ready(function() {
	$('.js-timer').countdown('2016/12/04 14:00:00',
		function(event) {
			var $this = $(this).html(event.strftime('' +
				'<span>%d</span> days ' +
				'<span>%H</span> hr ' +
				'<span>%M</span> min ' +
				'<span>%S</span> sec'));
		});
});
