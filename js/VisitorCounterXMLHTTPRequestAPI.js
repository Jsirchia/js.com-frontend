//JavaScript to hit VisitCounterAPI and trigger Lambda UpdateItem

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("visits").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://wmovdrb4ad.execute-api.us-east-1.amazonaws.com/Prod/", true);
xhttp.send();
