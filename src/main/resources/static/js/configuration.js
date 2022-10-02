function show(e) {
	switch (e.target.id) {
		case "prof":
			togglePrincipalMenuConfiguration('profile');
			profile();
			break;
		case "edit":
			togglePrincipalMenuConfiguration('account');
			account();
			break;
	}
}

let panels = [];

function profile() {
	panels = [];
	panels.push('account')
	hidePanels(panels);
	$('#profile').attr('hidden', false);
}

function account() {
	panels = [];
	panels.push('profile')
	hidePanels(panels);
	$('#account').attr('hidden', false);

}

function togglePrincipalMenuConfiguration(target) {
	if ($('#principal').attr('hidden')) {
		$('#principal').removeAttr('hidden');
	} else if (!$('#principal').attr('hidden') && !$(`#${target}`).attr('hidden')) {
		$('#principal').attr('hidden', true);
	}
}

function hidePanels(panels) {
	console.log(panels);
	panels.forEach(e => $(`#${e}`).attr('hidden', true));
}