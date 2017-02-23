// document ready handler.

$(document).on('ready', function(){
    // Form validation
    $('#order-form').validate({
        submitHandler: function(form) {
     //Submit Form  
            form.submit();
        },
// validation rules 
              rules: {
            "your-name": {
                required: true,
                maxlength: 128,
                digits: false
            },
            "your-state": {
                required: true,
                maxlength: 2
                },
            "your-zip": {
                required: true,
                maxlength: 5,
                digits: true
            },
            "card-holder-name": {
                required: true,
                maxlength: 128
            },
            "card-number": {
                required: true,
                creditcard: true
            },
            "cvv": {
                required: true,
                maxlength: 3,
                digits: true
            }
        }
    });
    // Tooltips
    $('label span.glyphicon').tooltip();
});

