const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
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