$(document).ready(function() {
	$("#modal").modal('show')
})

let rememberPreview;

async function sendPreview() {
	let formData = new FormData();
	formData.append("image", $('#file-upload').prop('files')[0]);
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

async function forgetImage() {
	await fetch('/forgetimage', {
		method: "GET",
	})
}

function evaluateCheckbox() {
	if ($('#checkbox').prop('checked')) {
		forgetImage()
	}
}

async function sendPublishPreview() {
	let formData = new FormData();
	let length = $('#file-publish-upload').prop('files').length; 
	for (let i = 0 ; i<length; i++){
		formData.append("image", $('#file-publish-upload').prop('files')[i]);
	}
	
	await fetch('/loadfilepublish', {
		method: 'POST',
		body: formData
	}).then((r) => r.json()
	).then((list) => {
		
		showPublishPreview(list[0], list[1]);
	});
}

function showPublishPreview(filename, id) {
	if ($('#title-prev').length) {
		//$('#title-prev').remove()
	}

	$('#title-prev').append(
		$('<img/>')
			.attr('id', 'preview')
			.attr('src', 'images/activities/' + id + '/' + filename)
			.addClass('preview')
	)
}