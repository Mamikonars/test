jQuery(document).ready(function () {
	var header = $("#header");
	var introH = $("#intro").innerHeight();
	var scrollOffset = 0;

	//Header fixed
	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();
		if (scrollOffset >= introH || $(this).scrollTop() >= introH)
			header.addClass("header--fixed");
		else
			header.removeClass("header--fixed");
	});

	//Smooth scroll
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();
		var $this = $(this);
		var currentID = $(this).data("scroll");
		var currentOffset = $(currentID).offset().top;
		$(".header__nav a").removeClass("current_nav");
		$this.addClass("current_nav");
		$("html, body").animate({
			scrollTop: currentOffset
		}, 700)
	})

	//burger-menu
	$("#nav-toggle").on("click", function () {
		$(this).toggleClass("active");
		$(".header__nav").toggleClass("active");
	})

	//tabs
	$("[data-collapse]").on("click", function () {
		var $this = $(this);
		var currentBlock = $(this).data("collapse");
		$this.toggleClass("blocking");
		$(currentBlock).toggleClass("blocking");
	})

});