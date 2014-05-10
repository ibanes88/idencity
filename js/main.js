jQuery(document).ready(function() {

	$window = $(window);
	$adjust = $('.adjust');
	$body = $('body');
	$menu = $('aside');

	var height;

	$(window).load(function() {
		setTimeout(function() {
			adjustHeight();
			$body.removeClass('loading').addClass('loaded');
			//alert("blabla geladen");
		}, 300);
	})

	// detect height //

	function adjustHeight() {
		height = $window.height();
		console.log("height is " + height);
		if (height <= 300) {
			height = 300;
		}
		$adjust.height(height);
	}

	$(window).resize(adjustHeight);

	// side menu //
	
	$menu.hover(function() {
		$('#nav').removeClass('small').addClass('big');
		$(this).stop().animate({
			left: 90,
			opacity: 0.8
		}, 150);
	}, function() {
		$('#nav').removeClass('big').addClass('small');
		$(this).stop().animate({
			left: 0,
			opacity: 0.5 
		}, 150);
	});

	// links //

	$('a[href*=#]').each(function() {

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname && this.hash.replace(/#/, '')) {

			var $targetId = $(this.hash),
				$targetAnchor = $('[name=' + this.hash.slice(1) + ']');

			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;

			if ($target) {

				var targetOffset = $target.offset().top;

				$(this).click(function() {

					$('#nav a').removeClass("active");

					$(this).addClass('active');

					$('html, body').animate({
						scrollTop: targetOffset
					}, 1000);

					return false;

				});

			}

		}

	});



})