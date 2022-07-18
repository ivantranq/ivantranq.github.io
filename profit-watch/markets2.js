const resultsMainEl = document.querySelector(".results__main")
const resultsHeadingEl = document.querySelector(".results__heading")

function searchCompany() {
    let searchQuery = document.getElementById("search__input").value;
    renderResults(searchQuery)
}

async function renderResults(searchQuery) {
    resultsMainEl.classList += ' results__loading'
    let allQuotes = getResults(searchQuery);
    console.log(allQuotes)
    resultsMainEl.classList.remove('results__loading')

    resultsHeadingEl.innerHTML = searchHeadingHTML();
    const resultsMainHTML = allQuotes.map(elem => resultHTML(elem)).join("");
    resultsMainEl.innerHTML = resultsHeaderHTML() + resultsMainHTML;
}


async function getResults(searchQuery) {
    // returns an array of all the quotes of the top 6 search results
    // const resultsBackend = await fetch(`https://api.stockdata.org/v1/entity/search?search=${searchQuery}&api_token=nWkeCyzlun3yo1ppa6Y2i7SCLrbi1Dp7iHNNjAmt`)
    const resultsBackend = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=cbedd0e4`)

    let results = await resultsBackend.json();

    // results = results.data 
    results = results.Search;

    if (results.length > 6) {
        results = results.slice(0,6);
    }

    const results1 = results.slice(0,3);
    const results2 = results.slice(3,6);

    quote1 = getQuotes(results1);
    quote2 = getQuotes(results2);

    return results1.concat(results2)
}

async function getQuotes(results) {
    const unsolvedQuoteBackend = results.map(elem => 
        // fetch(`https://api.stockdata.org/v1/data/quote?symbols=${elem.ticker}&api_token=nWkeCyzlun3yo1ppa6Y2i7SCLrbi1Dp7iHNNjAmt`)
        fetch(`https://www.omdbapi.com/?t=${elem.Title}&apikey=cbedd0e4`)
    )

    const quoteBackend = await Promise.all(unsolvedQuoteBackend)
    const arrayObjects = quoteBackend.map(elem => elem.json())
    const quote = await Promise.all(arrayObjects)
    
    return quote
}

function resultsHeaderHTML() {
    return `<div class="result results__main--header">
                <h1 class="results__header--symbol">Symbol</h1>
                <h1 class="results__header--name">Name</h1>
                <h1 class="results__header--price">Price</h1>
                <h1 class="results__header--change">Change %</h1>
            </div>`
}

function resultHTML(elem) {
    return `<div class="result">
                <h2 class="result__symbol">TSLA</h2>
                <h2 class="result__name">Tesla, Inc</h2>
                <h2 class="result__price">720.20</h2>
                <h2 class="result__chnage">0.7357</h2>
            </div>`
}

function searchHeadingHTML() {
    return `<h1 class="results__title">
                Search results
            </h1>
            <h1 class="results__found">
                Top <span class="green">6</span> results for <span class="green">"search"</span>
            </h1>`
}