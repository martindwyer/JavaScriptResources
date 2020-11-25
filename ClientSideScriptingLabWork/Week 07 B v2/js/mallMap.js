console.log("JavaScript Ready");

$(document).ready(function () {
    console.log("jQuery is ready");
    
    $("#mallMap a.dot").click(function () {

        $("#mallMap a.dot").removeClass("selected");

        $(this).addClass("selected"); 
        var storeClicked = $(this).attr("store");
        console.log(storeClicked);
        
        
    });

});


    