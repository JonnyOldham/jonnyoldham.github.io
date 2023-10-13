// Array

// Declaring an array
// let coffeeOrder = [
//     "James - Americano",
//     "Hannah - Latte",
//     "Alex - Frappuccino",
// ]


// // Log the entire array to the console
// console.log(coffeeOrder)

// // In the context of an array, the length property repsresents the number of items
// console.log(coffeeOrder.length)

// // Log individual items to the console
// console.log(coffeeOrder[0])
// console.log(coffeeOrder[1])
// console.log(coffeeOrder[2])

// // Update individual array items
// coffeeOrder[1] = "Hannah - Tea"
// console.log(coffeeOrder)

// // Add items to an array via the index
// coffeeOrder[3] = "Christian - Water"
// console.log(coffeeOrder[3])

// // Adding items non-sequentially creates empty array spaces
// // coffeeOrder[5] = "Example"
// // console.log(coffeeOrder)

// // Array methods


// // .pop method - removes the last item from the array
// coffeeOrder.pop()
// console.log(coffeeOrder)

// // .push("item") method - add an item to the end of the array
// coffeeOrder.push("Christian - Apple Juice")
// console.log(coffeeOrder)

// // Quick tip: console.table()
// console.table(coffeeOrder)

// Loops
// let colours = [
//     "Blue",
//     "Red",
//     "Pink",
//     "Green",
//     "Purple",
//     "Yellow",
//     "Blue",
//     "Red",
//     "Pink",
//     "Green",
//     "Purple",
//     "Yellow",
//     "Blue",
//     "Red",
//     "Pink",
//     "Green",
//     "Purple",
//     "Yellow"
// ]

// console.log(colours)
// console.log(colours[0])
// console.log(colours[1])
// console.log(colours[2])
// console.log(colours[3])
// console.log(colours[4])
// console.log(colours[5])

// Increment Operator - ++
// let a = 1
// console.log(++a)

// let b = a++
// console.log(b)
// console.log(a)

// For Loop
// for (let i = 0; i < 5; i++) {
// console.log(`Index value is currently ${i}`)
// }

// for (let i = 0; i < colours.length; i++) {
//     console.log(colours[i])
// }

// While Loop
// Runs the code while a condition is true
// let number = 0

// while (number < 20) {
//     console.log(number)
//     number++
// }

// While Loop 2
// let cards = ["Diamond", "Heart", "Club", "Spade"]
// let currentCard = ""

// while (currentCard !== "Spade") {
//     currentCard = cards[Math.floor(Math.random() * 4)]
//     console.log(currentCard)
// }

// console.log("!!! GAME OVER !!!")

// // Do While Loop
// // Runs the body of the loop at least once regardless of whether the condition is true
// let num = 10

// do {
//     console.log(num)
// } while (num < 1)

// // Break keyword in loop
// for (let i = 1; i <=5; i++) {
//     if (i === 3) {
//         break
//     }
//     console.log(i)
// }

// // For Loop - Array
// const weekdays = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday'
// ]

// for (let day of weekdays) {
//     console.log(day)
// }

// // For of Loop - String
// let string = "Hello"

// for (let character of string) {
//     console.log(character)
// }

// Tasks

// Task 1
console.log("Task One:")
let favFilms = ["The Matrix", "Interstellar", "A Monster Calls", "The Dark Knight", "Goodfellas"]
favFilms.push("Return of the King", "Casino");

for (let film of favFilms) {
    console.log(film);
}

// Task 2
console.log("Task Two:")
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
}

// Task 3
console.log("Task Three:")
for (let i = 20; i >= 0; i--) {
    console.log(i);
}

// Task 4
console.log("Task Four:")
for (let i = 0; i < 5; i++) {
    let randomNum2 = Math.floor(Math.random() * 50) + 1;
    let isDivisibleBy5 = randomNum2 % 5 === 0;
    let message = isDivisibleBy5
        ? `${randomNum2} is divisible by 5`
        : `${randomNum2} is NOT divisible by 5`;
    console.log(message);
}