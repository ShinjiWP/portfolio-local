//ウェブブラウザに標準で搭載されいている戻るボタンを押したときもページをリロードする処理

window.onpageshow = function (event) {
	if (event.persisted) {
		window.location.reload();
	}
};

