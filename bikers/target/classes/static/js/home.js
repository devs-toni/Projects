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

let finalFileListArray;
async function sendPublishPreview() {
	let formData = new FormData();
	let length = $('#file-publish-upload').prop('files').length;

	for (let i = 0; i < length; i++) {
		formData.append("image", $('#file-publish-upload').prop('files')[i]);
	}
	await fetch('/loadfilepublish', {
		method: 'POST',
		body: formData
	}).then((r) => r.json()
	).then((list) => {
		showPublishPreview(list, list[0]);
	});

}

function showPublishPreview(list, id) {
	let $titleprev = document.getElementById('title-prev');
	$titleprev.innerHTML = '';
	for (let e of list) {
		if (list.indexOf(e) !== 0) {
			let $prev = document.createElement('div');
			$prev.setAttribute('id', 'prev');
			$titleprev.classList.add('previews');
			$titleprev.append($prev);
			let $remove = document.createElement('i');
			$remove.setAttribute('id', 'remove');
			$remove.setAttribute('onclick', 'deletePublishPreview(event)');
			$remove.classList.add('bi');
			$remove.classList.add('bi-x-lg');
			$remove.classList.add('remove');
			let $image = document.createElement('img');
			$image.setAttribute('id', 'preview');
			$image.setAttribute('src', 'images/activities/' + id + '/' + e);
			$image.setAttribute('name', e);
			$image.classList.add('preview');
			$prev.append($image);
			$prev.append($remove)
		};
	}
}

async function deletePublishPreview(e) {
	let finalStringListArray = [];
	let $inputFiles = $('#file-publish-upload').prop('files');
	let fileListArray = Array.from($inputFiles);
	let formData = new FormData();
	let target = e.target.parentNode;
	let imageName = target.getElementsByTagName('img')[0].getAttribute('name');
	target.remove();
	if (!finalFileListArray) {
		finalFileListArray = fileListArray.filter(e => e.name !== imageName);
		for (let e of finalFileListArray) {
			finalStringListArray.push(e.name);
		}
	} else {
		finalFileListArray = finalFileListArray.filter(e => e.name !== imageName);
		for (let e of finalFileListArray) {
			finalStringListArray.push(e.name);
		}
	}
	$('input[name=final]').val(finalStringListArray);
	formData.append("image", imageName);
	await fetch('/deletefilepublish', {
		method: 'POST',
		body: formData
	});
}