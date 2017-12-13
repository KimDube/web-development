var quoteContainer = document.getElementById("quote-info")
var btn = document.getElementById("btn");
var htmlstr = "";

function getQuote() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://kimdube.github.io/web-development/random-quote-machine/quotes.json');
    ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
ourRequest.send();
};

function renderHTML(data) {
  var randomNum = Math.floor(Math.random() * 83);
  var htmlString = data[randomNum].quote + "  -" +data[randomNum].author; 
  quoteContainer.innerHTML = htmlString;
  htmlstr = htmlString;
};

function sendtweet(){
  var link =  "http://twitter.com/share?text="
  link += htmlstr;
  return link;
};

quotebtn.addEventListener("click", getQuote);
tweeterbtn.addEventListener('click', function(){
  	window.open(sendtweet());
  	});
document.addEventListener("DOMContentLoaded", getQuote);
