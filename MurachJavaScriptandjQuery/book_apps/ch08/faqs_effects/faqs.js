$(document).ready(function() {
	/*
	$("#faqs h2").click(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().slideToggle(1000);
	    }
    ); // end click
    */
	
	$("#faqs h2").toggle(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().slideDown(1000);
	    },
	    function() {
	        $(this).toggleClass("minus");
	        $(this).next().slideUp(1000);
	    }
    ); // end toggle
    
}); // end ready
