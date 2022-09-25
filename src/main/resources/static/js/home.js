$(document).ready(function() {
	$("#modal").modal('show')
})

let rememberPreview;

async function sendPreview() {
	let formData = new FormData();
	formData.append("image", $('#fileupload').prop('files')[0]);
	await fetch('/loadfile', {
		method: 'POST',
		body: formData
	}).then((r) => r.json()
	).then((list) => {
		showPreview(list[0], list[1]);
	});
}

function showPreview(filename, id) {
	if ($('#preview').length) {
		$('#preview').remove()
	}

	$('#preview-photo').append(
		$('<img/>')
			.attr('id', 'preview')
			.attr('src', 'images/profile/' + id + '/' + filename)
			.addClass('preview')
	)
}

function evaluateCheckbox() {
	console.log("cancelando 1")
	if ($('#checkbox').prop('checked')) {
		forgetImage()
	}
}

async function forgetImage() {
	await fetch('/forgetimage', {
		method: "GET",
	})
}