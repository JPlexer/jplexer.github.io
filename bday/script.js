const queryString = window.location.search;
function sanitize(string) {
  const map = {
      '&': 'and',
      '<': 'less then',
      '>': 'greater then',
      '"': 'double quote;',
      "'": 'single quote;',
      "/": 'backslash',
  };
  const reg = /[&<>"'/]/ig;
  return string.replace(reg, (match)=>(map[match]));
}
const sanitized = sanitize(queryString);
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
