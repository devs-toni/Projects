$(document).ready(function() {
	$("#modal").modal('show')
})

async function sendPreview() {
	let formData = new FormData();
	formData.append("image", $('#fileupload').prop('files')[0])
	let response = await fetch('/load', {
		method: "POST",
		body: formData
	}).then((response) => response.json())
		.then((name) => {
			showPreview(name)
		});
	;

}

function showPreview(filename) {
	$('#preview-photo').append(
		$('<img/>')
			.attr('id', 'preview')
			.attr('src', 'images/profile/9/' + filename)
			.addClass('preview')
	);
}


