const quote = document.getElementById("quote");
const author = document.getElementById("author-name");
const quoteBtn = document.getElementById("quoteBtn")


async function randomQuoteGenerator() {
  const response = await fetch("https://api.quotable.io/quotes/random?maxLength=50");
  const data = await response.json();
  console.log(data);
  quote.innerText = data[0].content;
  author.innerText = data[0].author;
}

quoteBtn.addEventListener('click', randomQuoteGenerator)

