console.log("JavaScript is Ready");

$(document).ready(function () {
    console.log("JQuery is Ready");

    $('#tabs').tabs();
    $('#tabs').tabs("option", "disabled", [1, 2, 3, 4]);
    $('#tabs').tabs("option", "active", 0);

    $('#tabs').tabs({
        heightStyle: "fill"
    });
    $('#submitPersonalForm').button();

    // tab 0

    $('#personalForm').validate();

    $('#submitPersonalForm').click(function () {
        if ($('#personalForm').valid()) {
            $('#tabs').tabs("option", "disabled", [0, 2, 3, 4]);
            $('#tabs').tabs("option", "active", 1);
        }
    });

    $('#submitEducationForm').button();

    // tab 0

    $('#educationForm').validate();

    $('#submitEducationForm').click(function () {
        if ($('#educationForm').valid()) {
            $('#tabs').tabs("option", "disabled", [0, 1, 3, 4]);
            $('#tabs').tabs("option", "active", 2);
        }
    });


});
