$(document).ready(function () {
    console.log("jQuery Ready");

    $(':text:first').focus();

    $('#paypal').click(function () {
        $('#creditCard input').prop('disabled', true)
            .css('backgroundColor', '#CCC');
        $('#creditCard label').css('color', '#BBB');
    }); // end click

    $('#visa, #mastercard').click(function () {

        $('#creditCard input').prop('disabled', false)
            .css('backgroundColor', '');
        $('#creditCard label').css('color', '');

    }); // end of click

    $('#hideShip').click(function () {

        if ($(this).prop('checked')) {
            $('#shipping').slideUp('fast');
        } else {
            $('#shipping').slideDown('fast');
        }
    }); // end of click



}); // end ready
