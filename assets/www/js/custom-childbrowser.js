$(window).on("touchstart", ".fullLink", function(e) {
	e.preventDefault();
	window.plugins.childBrowser.showWebPage($(this).attr("href"));