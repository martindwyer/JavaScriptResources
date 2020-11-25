$(document).ready(function () {
    console.log("jQuery Ready");

    $('#signup').validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                rangelength: [8, 16]
            },
            confirm_password: {
                equalTo: '#password'
            }
        }, // end of rules
        messages: {
            email: {
                required: "Please supply e-mail address.",
                email: "This is not a valid email address."
            },
            password: {
                required: 'Please type a password',
                rangelength: 'Password must be between 8 and 16 characters.'
            },
            confirm_password: {
                equalTo: 'The two passwords do not match.'
            }
        }, // end messages
        errorPlacement: function (error, element) {
            if (element.is(":radio") || element.is(":checkbox")) {
                error.appendTo(element.parent());
            } else {
                error.insertAfter(element);
            }
        } // end errorPlacement
    }); // end validate
}); // end ready
