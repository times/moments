(function($){

	/**
	 *  Hi there! Modifying this to use at your news org? You'll need to link
	 *  the following stanza to some API allowing publishing to your CMS.
	 *  Currently all it does is save to localstorage (It *is* a hack, afterall).
	 */

	$('#publish').click(function(e){
		e.preventDefault();
		localStorage.setItem('article', $('.article').html());
		$(this).after($('<div>').addClass('alert-box success').text('Success!'));
	});

	// Okiedokes, stop editing now. :)

	$(document).foundation();
	var range = false;

	function selectedText() {
    var selection = "";
    if (window.getSelection) {
        selection = window.getSelection();
				var range = selection.getRangeAt(0);
    } else if (document.selection && document.selection.type != "Control") {
        selection = document.selection;
    }
    return range;
	}

	$('div.article').on('mouseup',function(){
		range = selectedText();
	});

	var vid = videojs('player', {
		width: '450px',
		height: '256px',
		controls: true,
		preload: true
	},
	function() {
	});

	vid.src({
		type: 'video/mp4',
		src: '../blatter.mp4'
	});

	vid.on('timeupdate', function(){
		$('input.timestamp').val(this.currentTime());
	});

	$('.videourl').keypress(function(e) {
		if (e.which == 13) {
			vid.src({
				type: 'video/mp4',
				src: $('.videourl').val()
			});
		}
	});

	$('#in').click(function(){
		$('.startTS').val(vid.currentTime());
	});

	$('#out').click(function(){
		$('.endTS').val(vid.currentTime());
	});

	$('#add').click(function(){
		var start = $('.startTS').val();
		var end = $('.endTS').val();
		if (start && end && range) {
			var selectedText = range.toString();
			var newNode = $('<moments-video></moments-video>').attr({
				src: $('#player video').attr('src'),
				start: start,
				end: end,
				launchText: selectedText,
				extraImg: $('#extraImg').val(),
				extraText: $('#extraText').val(),
				extraDatawrapper: $('#extraDW').val()
			});

			range.deleteContents();
			range.insertNode(newNode[0]);
			range = false;

			$('<div data-alert class="moment alert-box alert"></div>')
				.text(selectedText)
				.data({
					start: start,
					end: end,
					src: $('#player video').attr('src'),
					extraImg: $('#extraImg').val(),
					extraText: $('#extraText').val(),
					extraDW: $('#extraDW').val()
				})
				.append('<a href="#" class="close">&times;</a>')
				.wrap('<li>')
				.appendTo('.moments');

			$('#extraText, #extraImg, #extraDW').val('');
		}
	});
})(jQuery)
