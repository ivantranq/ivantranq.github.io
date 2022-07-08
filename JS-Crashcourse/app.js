// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} ->Frontend Simplified`)
//     } 
//     else if (i % 5 === 0) {
//         console.log(`${i} -> Simplified`)
//     } 
//     else if (i % 3 === 0) {
//         console.log(` ${i} -> Frontend`)
//     } 
//     else {
//         console.log(`${i} -> ${i}`)
//     }
// }

// const str = "Frontend Simplified";

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

// function convertCelsiusToFahrenheit(celsius){
//     return celsius * 1.8 + 32
// }

// let temperatures = [0, 10, 30]

// for (let i = 0; i < temperatures.length; i++) {
//     console.log(`converCelsiusToFahrenheit(${temperatures[i]}) -> ${convertCelsiusToFahrenheit(temperatures[i])}`)
// } 

// arrow function syntax:
// const funcName = (parameters) => {}


// let grades = ['A+', 'A', 'FAIL']
// let gradesFiltered = grades.filter(element => element !== 'FAIL')
// console.log(gradesFiltered)

// let gradesFiltered = []
// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] !== 'FAIL'){
//         gradesFiltered.push(grades[i])
//     }
// }
// console.log(gradesFiltered)

// const dollars = [1, 5, 10, 3]
// const dollars2 = [0, 10, 20]

// const cents = dollars.map(element => element*100)
// const cents2 = dollars2.map(element => element*100)

// console.log(cents)
// console.log(cents2)

// let cents = []
// let cents2 = []
// for (let i =0; i < dollars.length; i++) {
//     cents.push(dollars[i] * 100)
// }
// for (let i = 0; i < dollars2.length; i++) {
//     cents2.push(dollars2[i]*100)
// }
// console.log(cents)
// console.log(cents2)

// let users = []
// function registerUser (
//     name, 
//     email, 
//     password, 
//     subscriptionStatus, 
//     discordId, 
//     lessonsCompleted
//     ) {
    
//     let user = {
//         username: name,
//         email: email,
//         password: password,
//         subscriptionStatus: subscriptionStatus,
//         discordId: discordId,
//         lessonsCompleted: lessonsCompleted
//     }

//     users.push(user) 
// }

// registerUser(
//     'Ivan', 
//     'ivan.tranquilan@outlook.com', 
//     'imakilla1', 
//     'VIP', 
//     'ivant#1672', 
//     [0, 1, 2, 3]
// );

// console.log(users)

// First way of accessing an element
// document.querySelector('#title')

// // Second way of accessing an element (needs and ID)
// document.getElementById('title') 

function changeTitleToRed() {
    document.querySelector('.title').style.color = 'red'
}