// This is an intentionaly vulnerable Javascript file used for testing, do not use or deploy it anywhere.

var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

document.write(DOMPurify.sanitize("Hell11111o to you!!!!!!!, " + username + "!!!"));

var name = urlParams.get("name");
var unsafe_div = window.document.getElementById("vulnerable-div");
unsafe_div.innerText = "Hello " + name;



