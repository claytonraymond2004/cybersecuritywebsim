var search = 0;

$( document ).ready(function() {
    //set up search
    if(localStorage.getItem("searchpage") == null) {
        localStorage.setItem("searchpage", 0);
    } else {
        search = localStorage.getItem("searchpage");
    }
    
    var query = document.getElementById("resultList-" + search).getAttribute("data-query");
    setSearch(query);
    document.getElementById("resultList-" + search).style.display = "block";
});

function prevResult() {
    if(search > 0) {
        document.getElementById("resultList-" + search).style.display = "none";
        search--;
        var query = document.getElementById("resultList-" + search).getAttribute("data-query");
        setSearch(query);
        document.getElementById("resultList-" + search).style.display = "block";
        localStorage.setItem("searchpage", search);
    }
}

function nextResult() {
    var contentItems = $('[id^=resultList-]');
    if(search < 4 /*contentItems.length-1*/) {
        document.getElementById("resultList-" + search).style.display = "none";
        search++;
        var query = document.getElementById("resultList-" + search).getAttribute("data-query");
        setSearch(query);
        document.getElementById("resultList-" + search).style.display = "block";
        localStorage.setItem("searchpage", search);
    }
}

function setSearch(query) {
    $('[id^=searchBar]').text(query);
}
