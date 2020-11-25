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
});
