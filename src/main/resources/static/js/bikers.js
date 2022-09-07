
/* jQuery */

$('#options').on(('click'),() => {
	$('.nav-profile').removeClass('activo')
	$('.nav-options').toggleClass('activo')

})

$('#profile').on(('click'),()=> {
	$('.nav-options').removeClass('activo')
	$('.nav-profile').toggleClass('activo')

})