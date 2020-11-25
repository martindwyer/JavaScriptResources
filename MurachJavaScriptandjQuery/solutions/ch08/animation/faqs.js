$(document).ready(function() {
	
	// runs when an h2 heading is clicked
	$("#faqs h2").toggle(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().slideDown(1000, "easeOutBounce");
	    },
	    function() {
	        $(this).toggleClass("minus");
	        $(this).next().slideUp(1000, "easeInBounce");
	    }
    ); // end toggle	
	
	// runs when the page is ready
	$("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 1000, "easeInExpo" )  
		         .animate( { fontSize: "175%", left: "-=200" }, 1000, "easeOutExpo" );
		    
	// runs when the top-level heading is clicked
	$("#faqs h1").click(function() {
		$(this).animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 2000, "easeInExpo" )  
			   .animate( { fontSize: "175%", left: 0 }, 1000, "easeOutExpo" );
	}); // end click
	
}); // end ready
