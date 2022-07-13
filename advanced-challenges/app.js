console.log("____ QUESTION 1 ____")

function showRating(rating) {
    let numFullStars = Math.floor(rating);
    let ratings = "";
    
    for (let i = 0; i < numFullStars; i++) {
        ratings += "*";
        if (i !== numFullStars-1) {
            ratings += " ";
        }
    }

    if (!Number.isInteger(rating)) {
        ratings += " .";
    }

    return ratings
}

console.log(`showRating(3) -> "${showRating(3)}"`);
console.log(`showRating(4.5) -> "${showRating(4.5)}"`);
console.log(`showRating(0.5) -> "${showRating(0.5)}"`);

console.log("                    ")
console.log("____ QUESTION 2 ____")

function sortLowToHigh(arr) {
    return arr.sort((a, b) => a-b)
}

console.log(`sortLowToHigh([20,40,10,30,50,10]) -> ${sortLowToHigh([20,40,10,30,50,10])}`);
console.log(`sortLowToHigh([5,10,0,-5]) -> ${sortLowToHigh([5,10,0,-5])}`);
console.log(`sortLowToHigh([3,2,1,0]) -> ${sortLowToHigh([3,2,1,0])}`);

console.log("                    ")
console.log("____ QUESTION 3 ____")

function sortByPrice(objectArr) {
    return objectArr.sort((a, b) => b.price - a.price)
}

console.log(`sortByPrice([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10}]) ->`)

console.log(sortByPrice([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10}]))

console.log("                    ")
console.log("____ QUESTION 5 ____")

async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

    const result = await promise.json();
    console.log("results: ")
    console.log(result)

    const posts = result.filter(elem => elem.userId === userId)
    console.log("posts:")
    console.log(posts)
}

postsByUser(4)

console.log("                    ")
console.log("____ QUESTION 6 ____")

async function firstSixIncomplete() {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")

    const result = await promise.json()

    const incompletes = result.filter(elem => !elem.completed).splice(0,6)

    console.log(incompletes)
}

firstSixIncomplete()