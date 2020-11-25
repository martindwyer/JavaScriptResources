console.log("JavaScript Ready");

$(document).ready(function () {
    console.log("jQuery is ready");
    $('#sa').show();
    
    $("#mallMap a.dot").click(function () {

        $("#mallMap a.dot").removeClass("selected");

        $(this).addClass("selected"); 
        var storeClicked = $(this).attr("store");
        console.log(storeClicked);
        
        showDescription(storeClicked);
        
    });
    
    $('#storeCategories').change(function() {
        // start by detecting the new category
        var selectedCat = $('#storeCategories option:selected').val();
        // add a debug line
        console.log(selectedCat);
        // deselect any selected store
        $('#mallMap a.dot').removeClass("selected");
        // change the description to the category
        showDescription(selectedCat);
        // if the category is "sa" just fade in the dots
        if(selectedCat == "sa") {
            $('#mallMap a.dot').fadeIn();
        } else {
            $('#mallMap a.dot[cat !="' + selectedCat + '"]').fadeOut();
            $('#mallMap a.dot[cat = "' + selectedCat + '"]').fadeIn();
        }
        
    });
    
function showDescription(descriptionToShow) {
    $('div.description').hide();  // hides all desc's
    $('#' + descriptionToShow).fadeIn(); 
}
    

});




    