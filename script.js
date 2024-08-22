document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');

    // Function to fetch a random quote

    const fallbackQuotes = [
        { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
        { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "Get busy living or get busy dying.", author: "Stephen King" },
        { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    ];
    function fetchQuote() {
        fetch('https://zenquotes.io/api/random')
            .then(response => response.json())
            .then(data => {
                quoteElement.textContent = data[0].q + ' - ' + data[0].a;
            })
            .catch(error => {
                const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
                const fallbackQuote = fallbackQuotes[randomIndex];
                quoteElement.textContent = `${fallbackQuote.text} - ${fallbackQuote.author}`;
            });
    }

    // Fetch a quote on page load
    fetchQuote();

    // Fetch a new quote when the button is clicked
    newQuoteButton.addEventListener('click', fetchQuote);
});
