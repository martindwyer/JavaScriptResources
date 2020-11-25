$(document).ready(function () {
    $('#dob').datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '-120:+0',
        maxDate: 0,
        dateFormat: 'm-dd-yy'
    });

    $('#departure').datepicker({
        minDate: 0,
        maxDate: '+1y'
    });
    $('#airport').autocomplete({
        source: 'airports.json'
    });
    $('#meal').selectmenu({
        width: 200
    });
    $('#bags').buttonset();
    $('#seatTypes').buttonset();
    $('#next').button({
        icons: {
            secondary: 'ui-icon-circle-arrow-e'
        }
    });


}); // end ready
