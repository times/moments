$(document).ready(function() {
	var videourl = $('.videourl').val();
	$('.videobox iframe').attr('src',videourl);
});