var min = 200;
// particlesJS.load('landing', 'js/particlesjs-config.json', function() {
//     console.log('callback - particles.js config loaded');
// });

;(function() {
	$(".block").each(function(){
		$(this).width(min + Math.random()*100).height(min + Math.random()*100);
	});

	$("nav a").click(function(){
		$("html, body").stop(true, true).animate({ scrollTop: $($(this).attr("href")).offset().top }, "fast");
		return false;
	});

    var wall = new Freewall("#showcaseContent");
    wall.reset({
        selector: '.block',
        animate: true,
        cellW: 100,
        cellH: 100,
        onResize: function() {
            wall.fitWidth();
        }
    });
    wall.fitWidth();
}());
