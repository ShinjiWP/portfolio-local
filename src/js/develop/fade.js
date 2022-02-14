// $(".loading").fadeOut(15000, function () {
// 
// });

$(".p-loading").delay(10000).queue(function (next) {
	$(this).addClass("loaded");
	next();
});
