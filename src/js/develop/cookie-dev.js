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
