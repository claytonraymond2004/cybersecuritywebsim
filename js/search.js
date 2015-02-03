var search = 0;

function prevResult() {
    if(search > 0) {
        document.getElementById("resultList-" + search.toString()).style.display = "none";
        search--;
        document.getElementById("resultList-" + search.toString()).style.display = "block";
    }
}

function nextResult() {
    var contentItems = $('[id^=resultList-]');
    if(search < contentItems.length-1) {
        document.getElementById("resultList-" + search.toString()).style.display = "none";
        search++;
        document.getElementById("resultList-" + search.toString()).style.display = "block";
    }
}