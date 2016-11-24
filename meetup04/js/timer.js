$(document).ready(function() {
	$('.js-timer').countdown('2016/12/24 14:00:00',
		function(event) {
			var $this = $(this).html(event.strftime('' +
				'<span>%D</span> days ' +
				'<span>%H</span> hr ' +
				'<span>%M</span> min ' +
				'<span>%S</span> sec'));
		});
});
