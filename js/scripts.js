$( document ).ready(function() {

	$('.nav-button').click(function() {
		$('.nav-mobile-items').slideToggle('500');
		$(this).html($(this).html() == '<span class="icon_menu"></span>Ver menú' ? '<span class="icon_close"></span>Cerrar menú' : '<span class="icon_menu"></span>Ver menú');
	});
	
});

