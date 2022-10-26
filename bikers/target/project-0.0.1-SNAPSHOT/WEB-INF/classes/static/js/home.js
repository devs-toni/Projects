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
				console.log(list);
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
		for (let e of list){
			if (list.indexOf(e) > 0){
				showPublishPreview(e, list[0]);
			}
		}		
	});
}

function showPublishPreview(filename, id) {

	let $title = $('#title');
	let $preview = document.createElement('div');
	$preview.setAttribute('id', 'title-prev');
	$preview.classList.add('previews');
	$title.append($preview);
	
	$('#title-prev').append(
		$('<i></i>')
			.attr('id', 'remove')
			.attr('onclick', 'deletePublishPreview(event)')
			.addClass('bi').addClass('bi-x-lg').addClass('remove')
	)
	
	$('#title-prev').append(
		$('<img/>')
			.attr('id', 'preview')
			.attr('src', 'images/activities/' + id + '/' + filename)
			.addClass('preview')
	)
}

async function deletePublishPreview(e) {
	let formData = new FormData();
	let target = e.target.parentNode;
	let $image = target.getElementsByTagName('img')[0].currentSrc;
	target.remove();	
	formData.append("image", $image);
	await fetch('/deletefilepublish', {
		method:'POST',
		body: formData
	});
	console.log($('#file-publish-upload').prop('files'));
}