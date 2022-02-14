// jQuery(".js-btn1").on("click",function () {
// 	jQuery(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
// });

// jQuery(".js-btn2").on("click",function () {
// 	jQuery(".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
// });

// jQuery(".js-btn3").on("click",function () {
// 	jQuery(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(2),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
// });

// jQuery(".js-btn4").on("click",function () {
// 	jQuery(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(2)").toggleClass("js-gray");
// });


jQuery(".c-hover--btn1").on("mouseenter", function () {
	jQuery(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	jQuery(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
	jQuery(".p-header__ttl:nth-child(5) span").css({ "background-color": "gray" });
	jQuery(".js-btn2, .js-btn3, .js-btn4").toggleClass("js-filter");
});

jQuery(".c-hover--btn2").on("mouseenter", function () {
	jQuery(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	jQuery(".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
	jQuery(".p-header__ttl:nth-child(5) span").css({ "background-color": "gray" });
	jQuery(".p-header__ttl:nth-child(2) span").css({ color: "gray" });
	jQuery(".js-btn1, .js-btn3, .js-btn4").toggleClass("js-filter");
});

jQuery(".c-hover--btn3").on("mouseenter", function () {
	jQuery(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	jQuery(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(2),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
	jQuery(".p-header__ttl:nth-child(5) span").css({ "background-color": "gray" });
	jQuery(".p-header__ttl:nth-child(2) span").css({ color: "gray" });
	jQuery(".js-btn2, .js-btn1, .js-btn4").toggleClass("js-filter");
});

jQuery(".c-hover--btn4").on("mouseenter", function () {
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


jQuery(".p-nav__btn").on("click", function () {
	event.preventDefault();
	var link = $(this).attr("href");
	setTimeout(function () {
		location.href = link;
	}, 850);
});

// $(".loading").fadeOut(15000, function () {
// 
// });

$(".p-loading").delay(10000).queue(function (next) {
	$(this).addClass("loaded");
	next();
});

//ウェブブラウザに標準で搭載されいている戻るボタンを押したときもページをリロードする処理

window.onpageshow = function (event) {
	if (event.persisted) {
		window.location.reload();
	}
};

window.onpageshow = function () {
	$(".p-front-page__gif").animate({ opacity: 0.8 }, { duration: 4000, easing: "swing" });
	$(".p-nav").animate({ opacity: 1 }, { duration: 3500, easing: "swing" });
};

// window.onload = function () {
// 	var ref = document.referrer;
// 	var result = ref.match(/portfolio/);

// 	if (!result) {
// 		//含まれない場合の処理
// 		$(".loading").fadeOut(15000, function () {
		
// 		});
// 	} else {
// 		//含まれる場合の処理
// 		$(".loading").fadeOut(0, function () {
		
// 		});
// 	}
// };
