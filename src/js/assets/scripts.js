


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


//同じ日付で2回目以降ならローディング画面非表示の設定

var splash_text = $.cookie('accessdate'); //キーが入っていれば年月日を取得
var myD = new Date(); //日付データを取得
var myYear = String(myD.getFullYear()); //年
var myMonth = String(myD.getMonth() + 1); //月
var myDate = String(myD.getDate()); //日

if (splash_text != myYear + myMonth + myDate) {
	//cookieデータとアクセスした日付を比較↓
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
					$.cookie('accessdate', myYear + myMonth + myDate); //accessdateキーで年月日を記録
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
	$(".p-nav").animate({ opacity: 1 }, { duration: 3500, easing: "swing" }); //同日2回目のアクセスでローディング画面非表示
}

jQuery(".p-nav__btn, .js-ttl").on("click", function () {
	event.preventDefault();
	var link = $(this).attr("href");
	setTimeout(function () {
		location.href = link;
	}, 850);
});

//ウェブブラウザに標準で搭載されいている戻るボタンを押したときもページをリロードする処理

window.onpageshow = function (event) {
	if (event.persisted) {
		window.location.reload();
	}
};


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
				$(".p-front-page__gif").animate({ opacity: 1 }, { duration: 4000, easing: "swing" });
				$(".p-front-page__circle").animate({ opacity: .3 }, { duration: 4000, easing: "swing" });
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
		$(".p-front-page__gif").animate({ opacity: 1 }, { duration: 4000, easing: "swing" });
		$(".p-front-page__circle").animate({ opacity: .3 }, { duration: 4000, easing: "swing" });
		$(".p-nav").animate({ opacity: 1 }, { duration: 3500, easing: "swing" });
	}
};
