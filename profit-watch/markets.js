const resultsMainEl = document.querySelector(".results__main")
const resultsHeadingEl = document.querySelector(".results__heading")

if (localStorage.getItem("searchQuery")){
    const searchQuery = localStorage.getItem("searchQuery")
    renderSearchResults(searchQuery)
    localStorage.clear()
}



async function renderSearchResults(searchQuery) {

    resultsMainEl.classList += ' results__loading'

    await timeout(1000)
    // const resultsBackend = await fetch(`https://api.stockdata.org/v1/entity/search?search=${searchQuery}&api_token=nWkeCyzlun3yo1ppa6Y2i7SCLrbi1Dp7iHNNjAmt`)
    const resultsBackend = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=cbedd0e4`)
    // console.log(resultsBackend) // prints 1 response

    let results = await resultsBackend.json();
    console.log(results.Response);

    if (results.Response === "False") {
        resultsMainEl.classList.remove('results__loading')
        resultsHeadingEl.innerHTML = searchHeadingHTML(searchQuery);
        resultsMainEl.innerHTML = resultsHeaderHTML() + `<div class="result">
                                                            <h1 class="no-results">
                                                                No results Found
                                                            </h1>
                                                        </div>`
        return
    }
    
    resultsMainEl.classList.remove('results__loading')
    // reults = results.data 
    results = results.Search;

    if (results.length > 6) {
        results = results.slice(0,6);
    }

    // console.log(results)

    const results1 = results.slice(0,3);
    // console.log(results1)
    const results2 = results.slice(3,6);

    quote1 = getQuotes(results1);
    console.log(quote1)
    quote2 = getQuotes(results2);

    const allQuotes = results1.concat(results2)

    console.log(allQuotes)


    const resultsMainHTML = allQuotes.map(elem => resultHTML(elem)).join("");

    resultsHeadingEl.innerHTML = searchHeadingHTML(searchQuery);
    resultsMainEl.innerHTML = resultsHeaderHTML() + resultsMainHTML;
}

async function getQuotes(results) {
    const unsolvedQuoteBackend = results.map(elem => 
        // fetch(`https://api.stockdata.org/v1/data/quote?symbols=${elem.ticker}&api_token=nWkeCyzlun3yo1ppa6Y2i7SCLrbi1Dp7iHNNjAmt`)
        fetch(`https://www.omdbapi.com/?t=${elem.Title}&apikey=cbedd0e4`)
    )
    // console.log(unsolvedQuoteBackend)

    const quoteBackend = await Promise.all(unsolvedQuoteBackend)
    // console.log(quoteBackend)

    const arrayObjects = quoteBackend.map(elem => elem.json())
    const quote = await Promise.all(arrayObjects)
    // console.log(quote)

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
                <h2 class="result__symbol">${elem.ticker}</h2>
                <h2 class="result__name">${elem.name}</h2>
                <h2 class="result__price">${elem.price}</h2>
                <h2 class="result__chnage">${elem.change}</h2>
            </div>`
}

function searchHeadingHTML(searchQuery) {
    return `<h1 class="results__title">
                Search results
            </h1>
            <h1 class="results__found">
                Top results for <span class="green">"${searchQuery}"</span>
            </h1>`
}

const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    renderSearchResults(e.target.children[0].value)
})

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}