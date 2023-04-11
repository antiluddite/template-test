You will only need to change part of one line of the code from what you will see in the video, and that is your apiUrl variable. Below is the old code:

// Get Quotes From API
async function getQuotes() {
  ...
  const apiUrl = 'https://type.fit/api/quotes';
  try {
  ...
Which will be replaced with this:

// Get Quotes From API
async function getQuotes() {
  ...
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
  ...