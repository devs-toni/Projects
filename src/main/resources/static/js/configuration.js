function show(e) {
	if ($('#principal').attr('hidden')) {
		$('#principal').removeAttr('hidden');
	} else if (!$('#principal').attr('hidden')) {
		$('#principal').attr('hidden', true);
	}
	$('#menu').toggleClass('site');

	if (!$('#principal').attr('hidden')) {
		switch (e.target.id) {
			case "account":
				profile();
				break;
			case "edit":
				break;
		}
	}
}

function profile() {
	let $profile = document.getElementById('profile');
	$profile.setAttribute('hidden', true);
	
}