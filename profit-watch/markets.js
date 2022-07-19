
const resultsMainEl = document.querySelector(".results__main")

const resultsHeadingEl = document.querySelector(".results__heading")

if (localStorage.getItem("searchQuery")){
    const searchQuery = localStorage.getItem("searchQuery")
    renderSearchResults(searchQuery)
    localStorage.clear()
}

async function renderSearchResults(searchQuery) {
    resultsMainEl.classList += ' results__loading'
    resultsMainEl.innerHTML = spinnerHTML();
    await timeout(1000)
    // let results = await fetch(`https://api.stockdata.org/v1/entity/search?search=${searchQuery}&api_token=nWkeCyzlun3yo1ppa6Y2i7SCLrbi1Dp7iHNNjAmt`)
    //                         .then(res => {
    //                             if(!res.ok) {
    //                                 return res.text().then(text => {throw new Error('Error')});
    //                             }
    //                             else {
    //                                 return res.json();
    //                             }
    //                         })
    //                         .catch(err => {
    //                             window.alert('Error: Fetch to API failed')
    //                             console.log('Caught it!', err);
    //                         })
    // console.log(results);
    let results = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=cbedd0e4`)
                            .then(res => {
                                if(!res.ok) {
                                    return res.text().then(text => {throw new Error('Error')});
                                }
                                else {
                                    return res.json();
                                }
                            })
                            .catch(err => {
                                window.alert('Error: Fetch to API failed')
                                console.log('Caught it!', err);
                            })

    console.log(results.Response)
    console.log(results)

    if (results.Response == "False") {
        resultsMainEl.classList.remove('results__loading')
        resultsMainEl.innerHTML = "";
        resultsHeadingEl.innerHTML = searchHeadingHTML(searchQuery);
        resultsMainEl.innerHTML = `<table class="results__main--table">
                                </table>`
        const resultsTableEl = document.querySelector(".results__main--table")
        resultsTableEl.innerHTML = resultsHeaderHTML(); 
        resultsMainEl.innerHTML += `<div class="result">
                                        <h1 class="no-results">
                                            No results Found
                                        </h1>
                                    </div>`
        return
    }
    resultsMainEl.classList.remove('results__loading')
    resultsMainEl.innerHTML = "";

    results = results.Search 
    // results = results.data;
    if (results.length > 6) {
        results = results.slice(0,6);
    }
    // console.log(results)
    const results1 = results.slice(0,3);
    // console.log(results1)
    const results2 = results.slice(3,6);
    quote1 = getQuotes(results1);
    // console.log(quote1)
    quote2 = getQuotes(results2);
    const allQuotes = results1.concat(results2)
    console.log(allQuotes)
    const resultsMainHTML = allQuotes.map(elem => resultHTML(elem)).join("");
    resultsHeadingEl.innerHTML = searchHeadingHTML(searchQuery);
    resultsMainEl.innerHTML = createTableHTML();
    const resultsTableHeadEl = document.querySelector(".results__main--table-head")
    const resultsTableBodyEl = document.querySelector(".results__main--table-body")
    resultsTableHeadEl.innerHTML = resultsHeaderHTML() 
    resultsTableBodyEl.innerHTML = resultsMainHTML;
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
    return `<tr class="result results__main--header">
                    <th class="results__header--symbol">Symbol</th>
                    <th class="results__header--name">Name</th>
                    <th class="results__header--price">Price</th>
                    <th class="results__header--change">Change %</th>
                </tr>`
}

function resultHTML(elem) {
    return `<tr class="result">
                <td class="result__symbol">${elem.symbol}</td>
                <td class="result__name">${elem.name}</td>
                <td class="result__price">${elem.price}</td>
                <td class="result__chnage">${elem.change}</td>
            </tr>`
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

function spinnerHTML() {
    return `<i class="fas fa-spinner results__loading--spinner"></i>`
}

function createTableHTML() {
    return `<table>
                <thead class="results__main--table-head"></thead>
                <tbody class="results__main--table-body"></tbody>
            </table>`
}

const toggleMenu = document.getElementsByClassName('hamburger-menu')[0]
const navBarLinks = document.getElementsByClassName('nav__link--list')[0]

toggleMenu.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})