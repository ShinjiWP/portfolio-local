


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


//???????????????2????????????????????????????????????????????????????????????

var splash_text = $.cookie('accessdate'); //?????????????????????????????????????????????
var myD = new Date(); //????????????????????????
var myYear = String(myD.getFullYear()); //???
var myMonth = String(myD.getMonth() + 1); //???
var myDate = String(myD.getDate()); //???

if (splash_text != myYear + myMonth + myDate) {
	//cookie????????????????????????????????????????????????
  $(".p-loading")
		.delay(10000)
		.queue(function (next) {
			$(this).addClass("loaded");
			$(".p-line").addClass("line-start");
			$(".p-header__ttl:nth-child(2)").addClass("js-header2");
			$(".p-header__ttl:nth-child(3)").addClass("js-header3");
			$(".p-header__ttl:nth-child(4)").addClass("js-header4");
			$(".p-header__ttl:nth-child(5)").addClass("js-header5");
			$(".p-front-page__gif").animate({ opacity: 1 }, { duration: 4000, easing: "swing" });
			$(".p-front-page__circle").animate({ opacity: 0.3 }, { duration: 4000, easing: "swing" });
      $(".p-nav").animate({ opacity: 1 }, { duration: 3500, easing: "swing" });
      var myD = new Date();
					var myYear = String(myD.getFullYear());
					var myMonth = String(myD.getMonth() + 1);
					var myDate = String(myD.getDate());
					$.cookie('accessdate', myYear + myMonth + myDate); //accessdate???????????????????????????
			next();
		});
} else {
	$(".p-loading").addClass("loaded");
	$(".p-line").addClass("line-start");
	$(".p-header__ttl:nth-child(2)").addClass("js-header2");
	$(".p-header__ttl:nth-child(3)").addClass("js-header3");
	$(".p-header__ttl:nth-child(4)").addClass("js-header4");
	$(".p-header__ttl:nth-child(5)").addClass("js-header5");
	$(".p-front-page__gif").animate({ opacity: 1 }, { duration: 4000, easing: "swing" });
	$(".p-front-page__circle").animate({ opacity: 0.3 }, { duration: 4000, easing: "swing" });
	$(".p-nav").animate({ opacity: 1 }, { duration: 3500, easing: "swing" }); //??????2?????????????????????????????????????????????????????????
}

jQuery(".p-nav__btn, .js-ttl").on("click", function () {
	event.preventDefault();
	var link = $(this).attr("href");
	setTimeout(function () {
		location.href = link;
	}, 850);
});

//?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

window.onpageshow = function (event) {
	if (event.persisted) {
		window.location.reload();
	}
};


window.onload = function () {
	var ref = document.referrer;
	var result = ref.match(/portfolio/);

	if (!result) {
		//??????????????????????????????(???????????????????????????????????????)
		$(".p-loading")
			.delay(10000)
			.queue(function (next) {
				$(this).addClass("loaded");
				$(".p-line").addClass("line-start");
				$(".p-header__ttl:nth-child(2)").addClass("js-header2");
				$(".p-header__ttl:nth-child(3)").addClass("js-header3");
				$(".p-header__ttl:nth-child(4)").addClass("js-header4");
				$(".p-header__ttl:nth-child(5)").addClass("js-header5");
				$(".p-front-page__gif").animate({ opacity: 1 }, { duration: 4000, easing: "swing" });
				$(".p-front-page__circle").animate({ opacity: .3 }, { duration: 4000, easing: "swing" });
				$(".p-nav").animate({ opacity: 1 }, { duration: 3500, easing: "swing" });
				next();
			});
	} else {
		//???????????????????????????(??????????????????????????????????????????)
		$(".p-loading").addClass("loaded");
		$(".p-line").addClass("line-start");
		$(".p-header__ttl:nth-child(2)").addClass("js-header2");
		$(".p-header__ttl:nth-child(3)").addClass("js-header3");
		$(".p-header__ttl:nth-child(4)").addClass("js-header4");
		$(".p-header__ttl:nth-child(5)").addClass("js-header5");
		$(".p-front-page__gif").animate({ opacity: 1 }, { duration: 4000, easing: "swing" });
		$(".p-front-page__circle").animate({ opacity: .3 }, { duration: 4000, easing: "swing" });
		$(".p-nav").animate({ opacity: 1 }, { duration: 3500, easing: "swing" });
	}
};
