var email = 0;

$( document ).ready(function() {
    //set up search
    if(localStorage.getItem("emailpage") == null) {
        localStorage.setItem("emailpage", 0);
    } else {
        email = localStorage.getItem("emailpage");
    }

    var from = document.getElementById("mail-content-" + email).getAttribute("data-from");
    var subject = document.getElementById("mail-content-" + email).getAttribute("data-subject");
    setHeader(from, subject);
    document.getElementById("mail-content-" + email).style.display = "block";
});

function prevEmail() {
    if(email > 0) {
        document.getElementById("mail-content-" + email).style.display = "none";
        email--;
        var from = document.getElementById("mail-content-" + email).getAttribute("data-from");
        var subject = document.getElementById("mail-content-" + email).getAttribute("data-subject");
        setHeader(from, subject);
        document.getElementById("mail-content-" + email).style.display = "block";
        localStorage.setItem("emailpage", email);
    }
}

function nextEmail() {
    var contentItems = $('[id^=mail-content-]');
    if(email < contentItems.length - 2) {
        document.getElementById("mail-content-" + email).style.display = "none";
        email++;
        var from = document.getElementById("mail-content-" + email).getAttribute("data-from");
        var subject = document.getElementById("mail-content-" + email).getAttribute("data-subject");
        setHeader(from, subject);
        document.getElementById("mail-content-" + email).style.display = "block";
        localStorage.setItem("emailpage", email);
    }
}

function setHeader(from, subject) {
    $('[id^=from]').text(from);
    $('[id^=subject]').text(subject);
}