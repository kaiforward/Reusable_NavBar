$(document).ready(function() {
	// IF USER OPENS/RESIZES WINDOW AND #ISMOBILE IS/BECOMES ACTIVE (ON A SMALL SCREEN)
	// MAKE MENU INVISIBLE.
	if($('#ismobile').is(':visible')) {
		$(".link").addClass("noclick"); // remove pointer to links on pageload on mobile
	} 
	$( window ).resize(function() {
		if($('#ismobile').is(':visible')) {
			$("#linkbar").removeClass("mobilevisible");
			$("#linkbar").addClass("mobilehidden");
			$(".link").addClass("noclick"); // remove pointer to links on pageload on mobile
		}
		else {
			$("#linkbar").addClass("mobilevisible");
			$("#linkbar").removeClass("mobilehidden");		
			$(".link").removeClass("noclick"); // add pointer to links  button on page bigger than mobile		
		}
	});
	// TOGGLES VISIBILITY OF LINKBAR WHEN NAVBUTTON IS CLCIKED
	$(".navbutton").on("click", function(){
		if($('#ismobile').is(':visible')) {
			if ($('#linkbar').hasClass('mobilevisible')) {
				$("#linkbar").removeClass("mobilevisible");
				$("#linkbar").addClass("mobilehidden");
				$(".link").addClass("noclick");
			}
			else {
				$("#linkbar").addClass("mobilevisible");
				$("#linkbar").removeClass("mobilehidden");	
				$(".link").removeClass("noclick");			
			}
		}
	});		
});