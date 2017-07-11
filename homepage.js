$('[data-href]').on('click', function(event){
	var e = $(this);
	var href = e.attr('data-href');
	window.location = href;
})

