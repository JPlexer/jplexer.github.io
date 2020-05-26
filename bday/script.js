const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name')
function appendHtml(targetC, htmldata) {
    var theDiv = document.getElementById(targetC);
    theDiv.innerHTML = htmldata;
}

appendHtml('name', name + "!");