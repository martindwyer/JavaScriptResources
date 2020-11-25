$(document).ready(function() {
    console.log("jQuery is working");

    $('.sm').smartmenus({
        
        showFunction: function($ul, complete) {
            $ul.slideDown(250,complete);
        },
        hideFunction: function($ul, complete) {
            $ul.slideUp(250, complete);
        }
    }); // end of smartmenus
    
}); // end ready
