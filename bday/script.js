const queryString = window.location.search;
function encodeHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}
const sanitized = encodeHTML(queryString);
const urlParams = new URLSearchParams(sanitized);
const name = urlParams.get('name')
const lang = urlParams.get('lang')
function appendHtml(targetC, htmldata) {
    var theDiv = document.getElementById(targetC);
    theDiv.innerHTML = htmldata;
}
if (lang === "de") {
	appendHtml('mess', "Alles Gute zum Geburtstag");
}
appendHtml('name', name + "!");
