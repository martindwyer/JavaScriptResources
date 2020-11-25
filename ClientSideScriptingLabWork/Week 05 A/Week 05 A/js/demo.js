// alert("This is an alert!");
console.log("JavaScript is working.");

$(document).ready(function(){
    console.log("jQuery is ready");
    
    // element selector (elements are tags)
    $('#page h1').addClass("annoyingColors");
    
    // class selector 
    $('.bigText').css("font-size", '72px');
    $('.bigText').css("background-color","yellow");
    
    // id selector
    $('#important').css('font-weight','900');
    
    
    
});