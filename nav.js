$(document).ready(function() {
	// IF USER OPENS/RESIZES WINDOW AND #ISMOBILE IS/BECOMES ACTIVE (ON A SMALL SCREEN)
	// REMOVE MENU UNTIL USER CLICKS.
	if($('#ismobile').is(':visible')) {
		$(".link").addClass("noclick"); // remove pointer to links if pageloads on mobile
	} 
	$( window ).resize(function() {
	// IF USER MOVES OUTSIDE MOBILE SIZE, MENU STYLE IS CHANGED BACK TO TABLET++
		if($('#isntmobile').is(':visible')) {
			$("#linkbar").removeClass("transition");
			$("#linkbar").removeClass("mobilevisible");
			$("#linkbar").addClass("mobilehidden");
			$(".link").removeClass("noclick"); // add click functions back in
		}
		else {
			$(".link").addClass("noclick"); // remove click functions until menu button is pressed
		}
	});
	// TOGGLES VISIBILITY OF LINKBAR WHEN NAVBUTTON IS CLCIKED
	$(".navbutton").on("click", function(){
		$("#linkbar").addClass("transition");
		if($('#ismobile').is(':visible')) { // if on mobile
			if ($('#linkbar').hasClass('mobilevisible')) { // and the menu has been opened
				$("#linkbar").removeClass("mobilevisible"); // close menu
				$("#linkbar").addClass("mobilehidden");
				$(".link").addClass("noclick"); // and remove click functionality
			}
			else {
				$("#linkbar").addClass("mobilevisible"); // otherwise 
				$("#linkbar").removeClass("mobilehidden"); // open the menu
				$(".link").removeClass("noclick");	// and return click functionality.		
			}
		}
	});		
});