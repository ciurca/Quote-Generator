function generateQuote() {
fetch('quotes.json', { 
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
 const quotes = json;
 let randnum = Math.floor((Math.random() * 325) + 1);
 document.getElementById("bquote").innerText = quotes[randnum].text;
 document.getElementById("bfrom").innerText = quotes[randnum].from;
});
}
