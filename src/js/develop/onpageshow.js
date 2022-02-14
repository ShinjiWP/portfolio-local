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
