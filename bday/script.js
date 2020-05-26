const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name')
const lang = urlParams.get('lang')
function appendHtml(targetC, htmldata) {
    var theDiv = document.getElementById(targetC);
    theDiv.innerHTML = htmldata;
}

if(name.match(/^[0-9a-zA-Z?&]{1,16}$/)){
if (lang === "de") {
	appendHtml('mess', "Alles Gute zum Geburtstag");
}
appendHtml('name', name + "!");

}
else{
appendHtml('mess', "Nice Try!");
appendHtml('name', "XSS!");
}
