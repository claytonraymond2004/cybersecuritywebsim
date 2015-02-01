function changeLinkHover(string) {
    if(string.length > 100)
        string = string.substring(0, 100) + "...";
	document.getElementById("hover-link").innerHTML = string;
}

function changeAddressBar(protocol, url, trusted) {
	var address = '<span id="';
	if(trusted == true)
		address += "https-verified";
	else
		address += "https-fail";
		
	address += '">' + protocol + '</span>://' + url;
	if(address.length > 100)
	   address = address.substring(0, 100) + "...";
	
	document.getElementById("url-bar").innerHTML = address;
}