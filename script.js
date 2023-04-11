const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show New Quote
function newQuote(){
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quote);
    // Check if Author field is blank and replace it with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.text;
    }
    // Check Quote length to determine styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}

// To Get quotes from Local quotes.js
// function newQuote(){
//     // Pick a random quote from apiQuotes array
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);
// }

// Get Quotes from API
async function getQuotes() {
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        const response = await fetch (apiUrl)
        apiQuotes = await response.json();
        // console.log(apiQuotes[12]);
        newQuote();
    } catch (error){
    // Catch Error Here
    }
}

// On Load
getQuotes();

// from local quotes.js
// newQuote();