


jQuery(".c-hover--btn1,.js-ttl-1").on("mouseenter", function () {
	jQuery(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	jQuery(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
	jQuery(".p-header__ttl:nth-child(5) span").css({ "background-color": "gray" });
	jQuery(".js-btn2, .js-btn3, .js-btn4").toggleClass("js-filter");
});

jQuery(".c-hover--btn2 ,.js-ttl-2").on("mouseenter", function () {
	jQuery(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	jQuery(".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
	jQuery(".p-header__ttl:nth-child(5) span").css({ "background-color": "gray" });
	jQuery(".p-header__ttl:nth-child(2) span").css({ color: "gray" });
	jQuery(".js-btn1, .js-btn3, .js-btn4").toggleClass("js-filter");
});

jQuery(".c-hover--btn3 ,.js-ttl-3").on("mouseenter", function () {
	jQuery(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	jQuery(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(2),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
	jQuery(".p-header__ttl:nth-child(5) span").css({ "background-color": "gray" });
	jQuery(".p-header__ttl:nth-child(2) span").css({ color: "gray" });
	jQuery(".js-btn2, .js-btn1, .js-btn4").toggleClass("js-filter");
});

jQuery(".c-hover--btn4 ,.js-ttl-4").on("mouseenter", function () {
	jQuery(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	jQuery(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(2)").toggleClass("js-gray");
	jQuery(".p-header__ttl:nth-child(5) span").css({ color: "gray" });
	jQuery(".p-header__ttl:nth-child(2) span").css({ color: "gray" });
	jQuery(".js-btn2, .js-btn3, .js-btn1").toggleClass("js-filter");
});

jQuery(".js-btn1,.js-btn2,.js-btn3,.js-btn4").on("mouseout", function () {
	jQuery(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	jQuery(".p-header__ttl:nth-child(5) span").css({ "background-color": "#00ff00" });
	jQuery(".p-header__ttl:nth-child(2) span").css({ color: "#ff0000" });
	jQuery(".js-btn1,.js-btn2,.js-btn3,.js-btn4").removeClass("js-filter");
});

