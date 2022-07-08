console.log("---- CHALLENGE 1 ----")

function addition(num1, num2) {
    return num1 + num2
}

console.log(`addition(3,2) -> ${addition(3,2)}`)
console.log(`addition(-3,-6) -> ${addition(-3,-6)}`)
console.log(`addition(7,3) -> ${addition(7,3)}`)

console.log("                     ")
console.log("---- CHALLENGE 2 ----")

function hoursIntoSeconds(hours) {
    return hours * (60**2)
}

console.log(`hoursIntoSeconds(2) -> ${hoursIntoSeconds(2)}`)
console.log(`hoursIntoSeconds(10) -> ${hoursIntoSeconds(10)}`)
console.log(`hoursIntoSeconds(24) -> ${hoursIntoSeconds(24)}`)

console.log("                     ")
console.log("---- CHALLENGE 3 ----")

function calcPerimeter(height, width) {
    return 2*(height + width)
}

console.log(`calcPerimeter(6,7) -> ${calcPerimeter(6,7)}`)
console.log(`calcPerimeter(20,10) -> ${calcPerimeter(20,10)}`)
console.log(`calcPerimeter(2,9) -> ${calcPerimeter(2,9)}`)

console.log("                     ")
console.log("---- CHALLENGE 4 ----")

function calcTriangleArea(base, height) {
    return (base*height)/2
}

console.log(`calcTriangleArea(3,2) -> ${calcTriangleArea(3,2)}`)
console.log(`calcTriangleArea(10,10) -> ${calcTriangleArea(10,10)}`)
console.log(`calcTriangleArea(20,20) -> ${calcTriangleArea(20,20)}`)

console.log("                     ")
console.log("---- CHALLENGE 5 ----")

function appendFrontend(word) {
    return word + 'Frontend'
}

console.log(`appendFrontend('Apple') -> "${appendFrontend('Apple')}"`)
console.log(`appendFrontend('Banana') -> "${appendFrontend('Banana')}"`)
console.log(`appendFrontend('Orange') -> "${appendFrontend('Orange')}"`)

console.log("                     ")
console.log("---- CHALLENGE 6 ----")

function sumGreaterThan100(num1, num2) {
    return (num1 + num2) > 100
}

console.log(`sumGreaterThan100(20, 10) -> ${sumGreaterThan100(20, 10)}`)
console.log(`sumGreaterThan100(50, 60) -> ${sumGreaterThan100(50, 60)}`)
console.log(`sumGreaterThan100(100, -50) -> ${sumGreaterThan100(100, -50)}`)

console.log("                     ")
console.log("---- CHALLENGE 7 ----")

// function lessThanOrEqualToZero(number) {
//     return number <= 0
// }

const lessThanOrEqualToZero = (number) => {return number <=0}

console.log(`lessThanOrEqualToZero(3) -> ${lessThanOrEqualToZero(3)}`)
console.log(`lessThanOrEqualToZero(0) -> ${lessThanOrEqualToZero(0)}`)
console.log(`lessThanOrEqualToZero(-2) -> ${lessThanOrEqualToZero(-2)}`)

console.log("                     ")
console.log("---- CHALLENGE 8 ----")

function oppositeBoolean(bool) {
    return !bool
}

console.log(`oppositeBoolean(true) -> ${oppositeBoolean(true)}`)
console.log(`oppositeBoolean(false) -> ${oppositeBoolean(false)}`)

console.log("                     ")
console.log("---- CHALLENGE 9 ----")

function isNotZero(num) {
    return num !== 0
}

console.log(`isNotZero(5) -> ${isNotZero(5)}`)
console.log(`isNotZero(0) -> ${isNotZero(0)}`)
console.log(`isNotZero(null) -> ${isNotZero(null)}`)

console.log("                     ")
console.log("---- CHALLENGE 10 ----")

function calcRemainer(num, divisor) {
    return num % divisor
}

console.log(`calcRemainer(4, 2) -> ${calcRemainer(4, 2)}`)
console.log(`calcRemainer(7, 8) -> ${calcRemainer(7, 8)}`)
console.log(`calcRemainer(9, 8) -> ${calcRemainer(9, 8)}`)

console.log("                     ")
console.log("---- CHALLENGE 11 ----")

function isOdd(num) {
    return num % 2 !== 0
}

console.log(`isOdd(1) -> ${isOdd(1)}`)
console.log(`isOdd(2) -> ${isOdd(2)}`)
console.log(`isOdd(3) -> ${isOdd(3)}`)

console.log("                     ")
console.log("---- CHALLENGE 12 ----")

// function booleanInteger(number) {
//     if (number % 2 === 0) {
//         return 1
//     } else {
//         return -1
//     }
// }

function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1 //Ternary Operator
}

console.log(`booleanInteger(1) -> ${booleanInteger(1)}`)
console.log(`booleanInteger(2) -> ${booleanInteger(2)}`)
console.log(`booleanInteger(5) -> ${booleanInteger(5)}`)

console.log("                     ")
console.log("---- CHALLENGE 13 ----")

function isLoggedInAndSubscribed(login, sub) {
    return (login === 'LOGGED_IN') && (sub === 'SUBSCRIBED')
}

console.log(`isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED') -> ${isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED')}`)
console.log(`isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') -> ${isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED')}`)
console.log(`isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') -> ${isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED')}`)

console.log("                     ")
console.log("---- CHALLENGE 14 ----")

function isLoggedOrSubscribed(login, sub) {
    return (login === 'LOGGED_IN') || (sub === 'SUBSCRIBED')
}

console.log(`isLoggedOrSubscribed('LOGGED_IN', 'SUBSCRIBED') -> ${isLoggedOrSubscribed('LOGGED_IN', 'SUBSCRIBED')}`)
console.log(`isLoggedOrSubscribed('LOGGED_IN', 'UNSUBSCRIBED') -> ${isLoggedOrSubscribed('LOGGED_IN', 'UNSUBSCRIBED')}`)
console.log(`isLoggedOrSubscribed('LOGGED_OUT', 'SUBSCRIBED') -> ${isLoggedOrSubscribed('LOGGED_OUT', 'SUBSCRIBED')}`)

