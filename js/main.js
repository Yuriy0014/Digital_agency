$(function () {
	$('.top-slider').slick({
		dots: true,
		infinite: false,
		slidesToScroll: 1,
		nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="next arrow"></button>',
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev-arrow.svg" alt="previous arrow"></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {

				}
			},
			{
				breakpoint: 640,
				settings: {
					arrows: false
				}
			}
		]
	});
});