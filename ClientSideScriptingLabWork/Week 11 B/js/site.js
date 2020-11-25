console.log("JavaScript is Ready");

$(document).ready(function () {
    console.log("JQuery is Ready");

    $('#accordion').accordion({
        heightStyle: "fill"
    });

    $('.section').addClass('ui-widget-content')
        .addClass('ui-corner-bottom')
        .addClass('ui-corner-top');

    $('#calculate').button();

    $('input[name="mstatus"]').focus(function () {
        $("#accordion").accordion("option", "active", 1);

    });

    $('input.exemptBox').focus(function () {
        $("#accordion").accordion("option", "active", 0);
    });

    $('input[name="allowances]').focus(function () {
        $("#accordion").accordion("option", "active", 2);
    });

    $('input[name="addamount]').focus(function () {
        $("#accordion").accordion("option", "active", 3);
    });

    $('input.namechange').focus(function () {
        $("#accordion").accordion("option", "active", 4);
    });

    $('.nameChanging').hide();
    $("input[name='namechange']").click(function () {
        $('.nameChanging').fadeToggle().toggleClass('checked');
        if ($(".nameChanging").hasClass('checked') == false) {
            $('.nameChanging').val(" ");
        }
    });

    /*
    $('#submitForm').click(function(){
        
       if ($('#believeExempt').attr("checked") == "checked") {
           
       }
        
        $('#dialogComplete').dialog("open")
    });
    */
    
    $("#dialogComplete").dialog({
        autoOpen: true,
        width: 400,
        open: function(event, ui) {
            $("#page").addClass('ui-widget-overlay');
        },
        close: function(event, ui) {
            $("#page").removeClass('ui-widget-overlay');
        },
        buttons: [
            {
                text: "Ok",
                click: function() {
                    $(this).dialog("Close");
                    // include ajax calls to submit form data
                },
                text: "Cancel",
                click: function() {
                    $(this).dialog("close");}
            }
        ]
    });
    

});
