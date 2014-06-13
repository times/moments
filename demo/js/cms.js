(function($){
	$(document).foundation();
	var range = false;

	function selectedText() {
    var selection = "";
    if (window.getSelection) {
        selection = window.getSelection();
				var range = selection.getRangeAt(0);
				range.collapse(false);
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
		src: 'http://video-js.zencoder.com/oceans-clip.mp4'
	});

	vid.on('timeupdate', function(){
		$('.timestamp span').text(this.currentTime());
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
		var desc = $('#desc').val();
		if (start && end && desc && range) {
			$('<div data-alert class="moment alert-box alert"></div>')
				.text(desc)
				.data({
					start: start,
					end: end,
					desc: desc,
					extraImg: $('#extraImg'),
					extraText: $('#extraText'),
					extraDW: $('#extraDW')
				})
				.append('<a href="#" class="close">&times;</a>')
				.wrap('<li>')
				.appendTo('.moments');
			newNode = $('<moments-video></moments-video>').attr({
				start: start,
				end: end,
				desc: desc,
				extraImg: $('#extraImg'),
				extraText: $('#extraText'),
				extraDW: $('#extraDW')
			});

      range.insertNode(newNode);
			range = false;
		}
	});
})(jQuery)
