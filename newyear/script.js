const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const namee = urlParams.get('name')
const count = urlParams.get('count')
const lang = urlParams.get('lang')
function appendHtml(targetC, htmldata) {
    var theDiv = document.getElementById(targetC);
    theDiv.innerHTML = htmldata;
}

    if(!namee && !count && lang != "de") {}
    else if (!namee && !count) {appendHtml('name', "Ich wünsche dir ein");}
    else if (namee && count && lang === "de"){
        if (count > 1) {
            appendHtml('name', namee + ' wünschen ein');
        } else {
            appendHtml('name', namee + ' wünscht ein');
        }
    } else if (namee && count) {
        if (count > 1) {
            appendHtml('name', namee + ' wish you a');
        } else {
            appendHtml('name', namee + ' wishes you a');
        }
    }
if (lang === "de") {
	appendHtml('mess', "<img src=\"FrohesNeuesJahr.png\">");
}