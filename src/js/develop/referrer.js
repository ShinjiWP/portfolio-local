window.onload = function () {
	var ref = document.referrer;
	var result = ref.match(/portfolio/);

	if (!result) {
		//含まれない場合の処理(ローディング画面が出る場合)
		$(".p-loading")
			.delay(10000)
			.queue(function (next) {
				$(this).addClass("loaded");
				$(".p-line").addClass("line-start");
				$(".p-header__ttl:nth-child(2)").addClass("js-header2");
				$(".p-header__ttl:nth-child(3)").addClass("js-header3");
				$(".p-header__ttl:nth-child(4)").addClass("js-header4");
				$(".p-header__ttl:nth-child(5)").addClass("js-header5");
				$(".p-front-page__gif").animate({ opacity: 0.8 }, { duration: 4000, easing: "swing" });
				$(".p-nav").animate({ opacity: 1 }, { duration: 3500, easing: "swing" });
				next();
			});
	} else {
		//含まれる場合の処理(ローディング画面が出ない場合)
		$(".p-loading").addClass("loaded");
		$(".p-line").addClass("line-start");
		$(".p-header__ttl:nth-child(2)").addClass("js-header2");
		$(".p-header__ttl:nth-child(3)").addClass("js-header3");
		$(".p-header__ttl:nth-child(4)").addClass("js-header4");
		$(".p-header__ttl:nth-child(5)").addClass("js-header5");
		$(".p-front-page__gif").animate({ opacity: 0.8 }, { duration: 4000, easing: "swing" });
		$(".p-nav").animate({ opacity: 1 }, { duration: 3500, easing: "swing" });
	}
};
