// my API key: nWkeCyzlun3yo1ppa6Y2i7SCLrbi1Dp7iHNNjAmt
// https://api.stockdata.org/v1/data/ <-- endpoints
localStorage.clear()
const marketWatchListEl = document.querySelector('.market-watch');

// async function renderMarketWatch() {
//     // const faangBackend1 = await fetch("https://api.stockdata.org/v1/data/quote?symbols=META,AAPL,AMZN,NFLX,GOOG&api_token=nWkeCyzlun3yo1ppa6Y2i7SCLrbi1Dp7iHNNjAmt");
//     // const faangBackend2 = await fetch("https://api.stockdata.org/v1/data/quote?symbols=NFLX,GOOG&api_token=nWkeCyzlun3yo1ppa6Y2i7SCLrbi1Dp7iHNNjAmt");
//     const faangData1 = await faangBackend1.json();
//     const faangData2 = await faangBackend2.json();
//     console.log(faangData1.data)
//     console.log(faangData2.data)

//     const faangDataComplete = faangData1.data.concat(faangData2.data)
//     console.log(faangDataComplete)

//     let faangHTML = faangDataComplete.map(elem => marketWatchHTML(elem)).join('')

//     marketWatchListEl.innerHTML = faangHTML

// }

// renderMarketWatch();

function marketWatchHTML(elem) {
    return `
    <div class="faang">
        <h2 class="ticker">${elem.ticker}</h2>
        <h3 class="percent-change ${percentChange(elem)}">${elem.day_change}%</h3>
        <h3 class="price">$${elem.price}</h3>
    </div>`
}

function percentChange(elem) {
    if (elem.price < elem.previous_close_price) {
        return 'percent-change--down'
    }
    return 'percent-change--up'
}

const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e)
    localStorage.setItem("searchQuery", e.target.children[0].value);
    window.location.href = `./markets.html`
})

const toggleMenu = document.getElementsByClassName('hamburger-menu')[0]
const navBarLinks = document.getElementsByClassName('nav__link--list')[0]

toggleMenu.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})