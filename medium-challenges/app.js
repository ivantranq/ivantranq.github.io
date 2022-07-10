  console.log("____ CHALLENGE 1 ____")

  function filterOutFalsy(elem1, elem2) {
    return !elem1 ? elem1 : elem2
  }

  console.log(`filterOutFalsy(0, 500) -> ${filterOutFalsy(0, 500)}`)
  console.log(`filterOutFalsy(false, 100) -> ${filterOutFalsy(false, 100)}`)
  console.log(`filterOutFalsy(true, 'Dog') -> ${filterOutFalsy(true, 'Dog')}`)


console.log("                     ")
console.log("____ CHALLENGE 2 ____")


function arrLength(arr) {
  return arr.length
}

console.log(`arrLength([1,2,3]) -> ${arrLength([1,2,3])}`)
console.log(`arrLength([5,0,-4,1]) -> ${arrLength([5,0,-4,1])}`)
console.log(`arrLength([]) -> ${arrLength([])}`)

console.log("                     ")
console.log("____ CHALLENGE 3 ____")

function lastElem(arr) {
  return arr[arr.length - 1]
}

console.log(`lastElem([3,2,0,6,2]) -> ${lastElem([3,2,0,6,2])}`)
console.log(`lastElem(['dog','cat','ball']) -> ${lastElem(['dog','cat','ball'])}`)
console.log(`lastElem([null, 5, false]) -> ${lastElem([null, 5, false])}`)

console.log("                     ")
console.log("____ CHALLENGE 4 ____")

function arrSum(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum
}

console.log(`arrSum([2,2,2]) -> ${arrSum([2,2,2])}`)
console.log(`arrSum([100,200,500]) -> ${arrSum([100,200,500])}`)
console.log(`arrSum([0,-5,-10]) -> ${arrSum([0,-5,-10])}`)

console.log("                     ")
console.log("____ CHALLENGE 5 ____")

function progressiveSum(num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}

console.log(`progressiveSum(3) -> ${progressiveSum(3)}`)
console.log(`progressiveSum(4) -> ${progressiveSum(4)}`)
console.log(`progressiveSum(600) -> ${progressiveSum(600)}`)

console.log("                     ")
console.log("____ CHALLENGE 6 ____")

function calcTime (seconds) {
  let minutes = Math.floor(seconds / 60).toString()
  let timerSecs = (seconds % 60).toString()

  if (minutes.length === 1) {
    minutes = '0' + minutes
  }
  if (timerSecs.length === 1) {
    timerSecs = '0' + timerSecs
  }

  return minutes + ':' + timerSecs
}

console.log(`calcTime(66) -> ${calcTime(66)}`)
console.log(`calcTime(50) -> ${calcTime(50)}`)
console.log(`calcTime(300) -> ${calcTime(300)}`)

console.log("                     ")
console.log("____ CHALLENGE 7 ____")

function getMax(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

console.log(`getMax([5,100,0]) -> ${getMax([5,100,0])}`)
console.log(`getMax([12,10,-20]) -> ${getMax([12,10,-20])}`)
console.log(`getMax([-300,-100,-200]) -> ${getMax([-300,-100,-200])}`)

console.log("                     ")
console.log("____ CHALLENGE 8 ____")

//Using an incrementing for loop
// function reverseString(str) {
//   let newStr = ''
//   for (let i = 0; i < str.length; i++) {
//     newStr = str[i] + newStr
//   }
// return newStr
// }

// Using a decrementing for loop
// function reverseString(str) {
//   let newStr = ''
//   for (let i = str.length-1; i >= 0; i--) {
//     newStr += str[i]
//   }
//   return newStr
// }

//Using array reverse property
function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log(`reverseString('abc') -> ${reverseString('abc')}`)
console.log(`reverseString('Ivan') -> ${reverseString('Ivan')}`)
console.log(`reverseString('This is cool') -> ${reverseString('This is cool')}`)

console.log("                     ")
console.log("____ CHALLENGE 9 ____")

// Using a For Loop
// function convertToZeros(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = 0;
//   }
//   return arr;
// }

// Using Array 'fill'
// function convertToZeros(arr) {
//   return arr.fill(0);
// }

// Using Array 'map'
function convertToZeros(arr) {
  return arr.map(element => 0)
}

console.log(`convertToZeros([5, 100, 0]) -> ${convertToZeros([5, 100, 0])}`);
console.log(`convertToZeros([12]) -> ${convertToZeros([12])}`);
console.log(`convertToZeros([1,2,3,4,5]) -> ${convertToZeros([1,2,3,4,5])}`);

console.log("                     ")
console.log("____ CHALLENGE 10 ____")

// Using a For loop
// function removeApples(arr) {
//   let newArr = []
//   for (let i=0; i < arr.length; i++){
//     if (arr[i] !== 'Apple') {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// Using Array filter 
function removeApples(arr) {
  return arr.filter(element => element !== 'Apple')
}

console.log(`removeApples(['Banana', 'Apple', 'Orange', 'Apple']) -> ${removeApples(['Banana', 'Apple', 'Orange', 'Apple'])}`);
console.log(`removeApples(['Tomato', 'Orange', 'Banana]) -> ${removeApples(['Tomato', 'Orange', 'Banana'])}`);
console.log(`removeApples(['Banana', 'Orange', 'Apple']) -> ${removeApples(['Banana', 'Orange', 'Apple'])}`);

console.log("                     ")
console.log("____ CHALLENGE 11 ____")

// Using For loop
// function filterOutFalsy(arr) {
//   let noFalsy = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!!arr[i]) {
//       noFalsy.push(arr[i]);
//     }
//   }
//   return noFalsy;
// }

// Using array Filter
function filterOutFalsy2(arr) {
  return arr.filter(element => !!element)
}

console.log(`filterOutFalsy2(["",[],0,undefined,"0"]) -> ${filterOutFalsy2(["",[],0,undefined,"0"])}`);
console.log(`filterOutFalsy2(['Tomato', 'Orange', 'Banana', false]) -> ${filterOutFalsy2(['Tomato', 'Orange', 'Banana', false])}`);
console.log(`filterOutFalsy2(['Banana', 'Orange', 'Apple']) -> ${filterOutFalsy2(['Banana', 'Orange', 'Apple'])}`);

console.log("                     ")
console.log("____ CHALLENGE 12 ____")

function convertToBoolean(arr) {
  return arr.map(elem => !!elem)
}

console.log(`convertToBoolean([500,0,"Ivan","",[]]) -> ${convertToBoolean([500,0,"Ivan","",[]])}`)