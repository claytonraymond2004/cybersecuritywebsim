function changeLinkHover(string) {
    if(string.length > 100)
        string = string.substring(0, 100) + "...";
	document.getElementById("hover-link").innerHTML = string;
}

function changeAddressBar(protocol, url, trusted, trim) {
    var address = '<span id="';
    if(trusted == true)
        address += "https-verified";
    else
        address += "https-fail";
    address += '">' + protocol + '</span>://' + url;

	if(address.length > trim)
	   address = address.substring(0, trim) + "...";
	
	document.getElementById("url-bar").innerHTML = address;
}

function changeAddressBarSimple(string) {
    var trimlength = 75;
	if(string.length > trimlength)
	   string = string.substring(0, trimlength) + "...";
	document.getElementById("url-bar").innerHTML = string;
}

function setSiteTabTitle(string) {
	document.getElementById("siteTitle").innerHTML = string;
}