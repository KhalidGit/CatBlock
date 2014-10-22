/**
 * Created by Ashar Malik on 10/19/2014.
 */

var client = new XMLHttpRequest();
var fotd = "test";

$("form#email-form").submit(function(e) {
    e.preventDefault();
    sendEmail();
    return false;
});

function sendEmail() {
    var sendgridjs_url      = "http://cat-gif-ads.herokuapp.com/send";
    var sendgridjs_to       = $("input#to").val();
    var sendgridjs_subject  = "Cat Fact";
    var sendgridjs_html     = "<p>"+fotd+"</p>";

    var email = {
        to      : sendgridjs_to,
        subject : sendgridjs_subject,
        html    : sendgridjs_html
    }
    console.log(email);
    $.post("http://localhost:3000", {}, function(resp)  {alert('call!'); });
    $.post(sendgridjs_url, email, function(response) {
        console.log(response);
        if (response.success) {
            alert('success');
            // redirect somewhere or something. up to you. the email was sent successfully.
        } else {
            alert(response.error.message);
        }
    });

    return false;
};

