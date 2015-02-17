var search = 0;

function prevResult() {
    if(search > 0) {
        document.getElementById("resultList-" + search.toString()).style.display = "none";
        search--;
        var query = document.getElementById("resultList-" + search.toString()).getAttribute("data-query");
        setSearch(query);
        document.getElementById("resultList-" + search.toString()).style.display = "block";
    }
}

function nextResult() {
    var contentItems = $('[id^=resultList-]');
    if(search < contentItems.length-1) {
        document.getElementById("resultList-" + search.toString()).style.display = "none";
        search++;
        var query = document.getElementById("resultList-" + search.toString()).getAttribute("data-query");
        setSearch(query);
        document.getElementById("resultList-" + search.toString()).style.display = "block";
    }
}

function setSearch(query) {
    $('[id^=searchBar]').text(query);
}