$(document).ready(function() {
	
	$("#faqs h1").click(function() {
		$(this).animate(
			{ fontSize: "650%", opacity: 1, left: "+=275" }, 2000, "easeInExpo" )  
		.animate( 
			{ fontSize: "175%", left: "-=275" }, 1000, "easeOutExpo" );
	}); // end click
	
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
}); // end ready
