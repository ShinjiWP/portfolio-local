jQuery(".p-nav__btn, .js-ttl").on("click", function () {
	event.preventDefault();
	var link = $(this).attr("href");
	setTimeout(function () {
		location.href = link;
	}, 850);
});
