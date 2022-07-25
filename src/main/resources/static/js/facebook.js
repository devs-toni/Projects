window.fbAsyncInit = function() {
	FB.init({
		appId: '{423230556249325}',
		cookie: true,
		xfbml: true,
		version: '{3d29ce1b049c8293164435f30acc0188}'
	});

	FB.AppEvents.logPageView();

};

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

FB.getLoginStatus(function(response) {
	statusChangeCallback(response);
});

