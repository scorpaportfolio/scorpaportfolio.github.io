$(function () {
	
	$(document).keyup(function (e) {
		var url = "#"
		if (e.keyCode == 27) {
			// $('.modal').slideUp(500, "linear", function() {
			// });
			$(location).attr('href', url);
		}
		});
	
});