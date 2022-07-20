const companyDescriptionEl = document.getElementById("company-profile__row")

// const symbol = "AMZNCL.SN"
const symbol = localStorage.getItem("symbol")
renderDescription(symbol)

async function renderDescription(symbol) {
    companyDescriptionEl.classList += " description__loading"
    companyDescriptionEl.innerHTML = spinnerHTML();


    const descriptionData = await fetch(`https://api.stockdata.org/v1/entity/profile?symbols=${symbol}&api_token=nWkeCyzlun3yo1ppa6Y2i7SCLrbi1Dp7iHNNjAmt`)
    let description = await descriptionData.json();
    const quoteData = await fetch(`https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=nWkeCyzlun3yo1ppa6Y2i7SCLrbi1Dp7iHNNjAmt`);
    let quote = await quoteData.json();
    
    companyDescriptionEl.classList.remove("description__loading")

    console.log(description)
    console.log(quote)
    
    quote = quote.data[0]
    description = description.data[0]
    
    if ((typeof description === 'undefined') && (typeof quote === 'undefined')) {
        companyDescriptionEl.classList.remove("description__loading")
        companyDescriptionEl.innerHTML = noInformationHTML();
        return
    }
    console.log(description)
    console.log(quote)

    companyDescriptionEl.innerHTML = companyDescriptionHTML(description, quote);
}

function companyDescriptionHTML(description, quote) {
    return descriptionAvailable(description, quote) + quoteAvailable(quote)
}

function addressHTML(description) {
    if (typeof description !== "undefined") {
        return `${description.address1}, ${description.city}, ${description.state} ${description.zip}, ${description.country}`
    }
    return `N/A`
}

function descriptionAvailable(description, quote) {
    if (typeof description !== 'undefined') {
        return `<div class="company-description">
                    <h1 class="company-description__heading">${description.ticker}</h1>
                    <h2 class="company-description__address">${description.address1}, ${description.city}, ${description.state} ${description.zip}, ${description.country}</h2>
                    <h2 class="company-description__contact-info">Phone: ${description.phone}</h2>
                    <h2 class="company-description__website"><a href="${description.website}">${description.website}</a></h2>
                    <h2 class="company-description__industry-sector">${description.industry || 'N/A'} - ${description.sector || 'N/A'}</h2>
                    <h2 class="company-description__employees">Fulltime Employees: ${description.full_time_employees}</h2>
                    <p class="company-description__description">${description.description}</p>
                </div>`
    }

    return `<div class="company-description">
                <h1 class="company-description__heading">${symbol}</h1>
                <h2 class="company-description__address">Address: N/A</h2>
                <h2 class="company-description__contact-info">Phone: N/A</h2>
                <h2 class="company-description__website">Website: N/A</h2>
                <h2 class="company-description__industry-sector">Industry-Sector: N/A</h2>
                <h2 class="company-description__employees">Fulltime Employees: N/A</h2>
                <p class="company-description__description">No information available.</p>
            </div>`
}

function quoteAvailable(quote) {
    if(typeof quote !== 'undefined') {
        return `<div class="company-quote">
                    <div class="company-quote__ohlc">
                        <h2 class="price"><span class="label">Current Closing Price: </span>$${quote.price}</h2>
                        <h2 class="open"><span class="label">Day Open: </span>$${quote.day_open}</h2>
                        <h2 class="high"><span class="label">Day High: </span>$${quote.day_high}</h2>
                        <h2 class="low"><span class="label">Day Low: </span>$${quote.day_low}</h2>
                    </div>
                    <div class="company-quote__other">
                        <h2 class="day-change"><span class="label">Day Change: </span>${quote.day_change}%</h2>
                        <h2 class="volume"><span class="label">Day Volume: </span>${quote.volume}</h2>
                        <h2 class="52w-high"><span class="label">52 Week High: </span>$${Object.values(quote)[10] || 'N/A'}</h2>
                        <h2 class="52w-low"><span class="label">52 Week Low: </span>$${Object.values(quote)[11] || 'N/A'}</h2>
                    </div>
                </div>`
    }

    return `<div class="company-quote">
                <div class="company-quote__ohlc">
                    <h2 class="price"><span class="label">Current Closing Price: </span>$ N/A</h2>
                    <h2 class="open"><span class="label">Day Open: </span>$ N/A</h2>
                    <h2 class="high"><span class="label">Day High: </span>$ N/A</h2>
                    <h2 class="low"><span class="label">Day Low: </span>$ N/A</h2>
                </div>
                <div class="company-quote__other">
                    <h2 class="day-change"><span class="label">Day Change: </span>N/A %</h2>
                    <h2 class="volume"><span class="label">Day Volume: </span>N/A</h2>
                    <h2 class="52w-high"><span class="label">52 Week High: </span>$ N/A</h2>
                    <h2 class="52w-low"><span class="label">52 Week Low: </span>$ N/A</h2>
                </div>
            </div>`
}

function noInformationHTML() {
    return `<div class="no-information-availble">
                <h1 class="no-info-heading">NO INFORMATION AVAILABE </h1>
            </div>`
}

function spinnerHTML() {
    return `<i class="fas fa-spinner results-loading--spinner"></i>`
}

const toggleMenu = document.getElementsByClassName('hamburger-menu')[0]
const navBarLinks = document.getElementsByClassName('nav__link--list')[0]

toggleMenu.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})

