	var templ = 0;
	jQuery.support.placeholder = false;
	test = document.createElement('input');
	if('placeholder' in test) jQuery.support.placeholder = true;
	
	if (!$.support.placeholder) {
		
		$('.field').find ('label').show ();
		
	}

	$("#signIn").on('click', (event) => {
		if (templ > 1) {
			const parsedUrl = new URL(window.location.href);
			window.location.href = parsedUrl.href.split('index')[0] + 'main.html'
		} else {
			templ++;
		}
	});
