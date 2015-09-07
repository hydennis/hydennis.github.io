var st, lst = window.pageYOffset
	mobileWidth = 480,
	slideTimer = 400;
	
;(function(){
	/*bindMenuShowHide();*/
	
	$(window).resize(function(){
		var ww = $(document).width(),
			isMobileViewport = ww <= mobileWidth ? true : false;
		
		if(!isMobileViewport){
			$("nav").show();
		}
	});
	
	$('#content').pagepiling({
		menu: 'nav',
		anchors: ['home', 'about', 'showcase', 'contact'],
        sectionSelector: 'section',
        scrollingSpeed: 400,
		navigation: {
            'textColor': '#000',
            'bulletsColor': 'transparent',
            'position': 'right',
            'tooltips': ['home', 'about', 'showcase', 'contact']
        },
	});
}());

function bindMenuShowHide(){
	$(window).scroll(function(){
		var ww = $(document).width(),
			isMobileViewport = ww <= mobileWidth ? true : false;
		
		if(isMobileViewport){
			st = window.pageYOffset;
			
			if (st > lst) {
				$("nav").slideUp(slideTimer);
			} else {			
				$("nav").slideDown(slideTimer);
			}
			
			lst = st;
		} else {
			$("nav").show();
		}
	});
}