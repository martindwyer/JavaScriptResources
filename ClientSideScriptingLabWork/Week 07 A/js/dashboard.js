console.log("JavaScript Ready");
$(document).ready(function() {
    console.log("jQuery Ready");
    $('#dashboard').hover(function() {
        $(this).stop().animate(
            {   left: '0',
                backgroundColor: 'rgb(27,45,94)'
                },
                500,
                'easeInSine'
                );  // end animate
    }, // end of f() script
        function() {
        $(this).stop().animate(
            {   left: '-92px',
                backgroundColor: 'rgb(255,211,224)'
                },
                1500,
                'easeOutBounce'
            );  // end animate
        } //end of f() script
    ); // end hover script
}); // end ready
