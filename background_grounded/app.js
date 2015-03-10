
$(document).ready(function() {
	var $underlay = $('#underlay');


	$underlay.hide();


	$('#BtnOk').on('click', function() {
		$underlay.height(document.height + 'px');
		$underlay.show();
	});


	$underlay.on('click', function() {
		$underlay.hide();
	});

});
