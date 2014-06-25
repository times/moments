var videoParameters = {
	'source': 'http://www.youtube.com/embed/O1Y8f8_SiSQ',
	'in': 40,
	'out': 50,
}

var thisSpan;

function insertVideo() {
	//$('p').addClass('faded');
	$('.videoBox').remove();
	thisSpan.addClass('active');
	thisSpan.toggleClass('darken');
	console.log(thisSpan);
	//populate the template
	var source = $('#videoTemplate').html();
	var template = Handlebars.compile(source);
	var html = template(videoParameters);
	//insert the template
	thisSpan.after(html);
	$('.videoBox').slideDown();
}

$(document).ready(function() {

	$('.play').on('click', function() {
		thisSpan = $(this);
		if (thisSpan.hasClass('active')) {
			$('.videoBox').slideUp(function() {
				thisSpan.removeClass('active');
				$('.videoBox').remove();
				thisSpan.toggleClass('darken');
			});
		} else {
			$('.videoBox').slideUp()
			$('.play').removeClass('active').removeClass('darken');
			insertVideo();
		};
	});
});

