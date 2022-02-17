const labels = ["Username", "Password", "Confirm Password"];
const ids = ["username", "password", "confirm_password"];
for (let i = 0; i < 3; i++) {
//Create the label element
let $label = $("<label>").text(labels[i]);
//Create the input element
$("#" + ids[i]).after($label);
}
$(document).ready(function(){
    $('#confirm_password').focusout(function(){
        var password = $('#password').val();
        var confirm_password = $('#confirm_password').val();
        if(password != confirm_password){
            alert('Ppasswords don\'t match!');
        }

    });
});
(function() {
    $('form input').keyup(function() {

        let empty = false;
        $('form input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#register').attr('disabled', 'disabled'); 
        } else {
            $('#register').removeAttr('disabled');
        }
    });
})()
$(document).ready(function() {
    $("#register").click(function(){
        alert("Registered successfully!");
    }); 
});