var email = 0;

function prevEmail() {
    if(email > 0) {
        document.getElementById("mail-content-" + email.toString()).style.display = "none";
        email--;
        document.getElementById("mail-content-" + email.toString()).style.display = "block";
    }
}

function nextEmail() {
    var contentItems = $('[id^=mail-content-]');
    if(email < contentItems.length - 2) {
        document.getElementById("mail-content-" + email.toString()).style.display = "none";
        email++;
        document.getElementById("mail-content-" + email.toString()).style.display = "block";
    }
}

function setHeader(from, subject) {
    $('[id^=from]').text = from;
    $('[id^=subject]').text = subject;
}