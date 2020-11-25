console.log("JavaScript is working.");  // Open console in browser to verify

$(document).ready(function(){
    console.log("jQuery is ready");     // Open console in browser to verify 
    
    $('.answer').hide();                // This hids all items appearing in the class 'answer'
    $('.main h2').click(function(){     // This function defines the action onclick

        var $answer = $(this).next('.answer');   

        if ($answer.is(':hidden')){
            $answer.slideDown();
            $(this).addClass('close');
        } else { 
            $answer.fadeOut();
            $(this).removeClass('close');
        }  
        
        
    }) // end of click
    
}); // end ready
