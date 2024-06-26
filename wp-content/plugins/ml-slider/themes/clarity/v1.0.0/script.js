(function($) {
   // metaslider has been initilalised
	$(document).on('metaslider/initialized', function (e, identifier) {
		// if .ms-theme-clarity
		if ($(identifier).closest('.metaslider.ms-theme-clarity').length) {
			var $slider = $(identifier);
			var $container = $(identifier).closest('.metaslider.ms-theme-clarity');
			var captions = $slider.find('.caption');
			if (captions.length) {
				captions.closest('li').addClass('ms-has-caption');
			}
			$container.addClass('ms-loaded');
		}
		$(window).trigger('resize');
	});
   $(window).on('load resize', function(e) {
		// go through the sliders with this theme
		$('.metaslider').each(function(index) {
			var width = $(this).outerWidth();
			// if the slider width < 600px
			if (width < 600) {
				$(this).addClass('ms-is-small');
			} else {
				$(this).removeClass('ms-is-small');
			}
		});
	});

})(jQuery)
