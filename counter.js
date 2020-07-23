//Get the visitors element on the page
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    let visits = JSON.parse(this.responseText);

    document.getElementById("visits").innerHTML = visits.visitorCount;
  }
};
xhttp.open(
  "GET",
  "https://nhbzjggwlc.execute-api.us-east-1.amazonaws.com/Prod/count",
  true
);
xhttp.send();