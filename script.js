function generateQuote() {
fetch('quotes.json', { 
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
 const quotes = json;
 var randnum = Math.floor((Math.random() * 325) + 1);
 var quoteText = quotes[randnum].text;
 var quoteAuthor = quotes[randnum].from;
 document.getElementById("bquote").innerText = quoteText;
 var tweetlink = `https://twitter.com/intent/tweet?text=${quoteText} - ${quoteAuthor}`;
 document.getElementById("tweetquote").href = tweetlink;
 document.getElementById("bfrom").innerText = quoteAuthor;
});
}
function screenshotQuote() {
  html2canvas(document.getElementById("talltweets"), {
    onrendered: function(canvas) {
      var screenshot = canvas.toDataURL("image/png");
      document.getElementById("textScreenshot").setAttribute("src", screenshot);
    }
  });
}
