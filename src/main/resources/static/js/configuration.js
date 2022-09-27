function show(e) {
	if ($('#principal').attr('hidden')) {
		$('#principal').removeAttr('hidden');
	} else if (!$('#principal').attr('hidden')) {
		$('#principal').attr('hidden', true);
	}
	$('#menu').toggleClass('site');

	if (!$('#principal').attr('hidden')) {
		switch (e.target.id) {
			case "cuenta":
				cuenta();
				break;
			case "profile":
				break;
		}
	}
}

function cuenta() {
	console.log("MOSTRANDO AJUSTES DE LA CUENTA")
}