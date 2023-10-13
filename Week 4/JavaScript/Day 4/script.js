// Functions

// Learning Objectives:

// - To explore functions and look at how they work
// - To incorporate functions into our code
// - To recognise the different types of function syntax

// Declaring a function:
// function greeting() {
//     console.log("Hello World")
// }

// // Function declerations / expressions allow us to call a function before it has been defined

// // Calling / Invoking a function:
// greeting()

// // User Status Function
// let userOnline = false

// function userStatus() {
//     if (!userOnline) {
//         userOnline = true
//         console.log("User Signed-In")
//     } else {
//         userOnline = false
//         console.log("User Signed-Out")
//     }
// }
// userStatus ()

// // Parameters and Arguments
// function add(num1, num2) {
//     console.log(num1 + num2)
// }
// add(10, 20)

// // Scope Example

// const name = "Lydia"
// const age = 21
// const city = "San Francisco"

// function getPersonInfo() {
//     const name = "Sarah"
//     const age = 22
//     return `${name} is ${age} and lives in ${city}`
// }
// console.log(getPersonInfo())

// // Functions that call other functions
// function double(num) {
//     return num * 2
// }

// function quadruple(num) {
//     return double(num) * 2
// }
// console.log(quadruple(10))

// // Function Declaration
// function squaredDeclaration(number) {
//     return number * number
// }
// console.log(squaredDeclaration(3))

// // Arrow Function
// const squaredArrow = (number) => {
//     return number * number
// }
// console.log(squaredArrow(4))

// // Arrow Function wuth Implicit Return
// const squaredArrow2 = (number) => number * number
// console.log(squaredArrow2(10))

// // "Anonymous" Function
// const squaredAnon = function(number) {
//     return number * number
// }
// console.log(squaredAnon(5))


// Tasks

// Task 1
console.log("Task One:")
const greet = name => console.log(`Hi ${name}, good to see you`);
greet("Jonny");

// Task 2
console.log("Task Two:")
const checkEvenOrOdd = number => console.log(number % 2 === 0 ? "Even" : "Odd");
checkEvenOrOdd(3);

// Task 3
console.log("Task Three:")
const atm = (enteredPin, withdrawalAmount) => {
    let storedPin = 1234;
    let balance = 1000;
    if  (enteredPin === storedPin) {
        if (withdrawalAmount <= balance) {
        console.log(`Please take your card. Your withdrawal of ${withdrawalAmount} republican credits will follow shortly.`);
        } else {
        console.log("You don't have the required funds necessary for this transaction.");
        }
    }   else {
        console.log("Incorrect pin entry. Please try again.");
        }
};

let enteredPin = 1234;
let withdrawalAmount = 1000;

atm(enteredPin, withdrawalAmount);

// Task 4
// Here I've created an example function. The purpose of the following function is to calculate the boys' liquor budget:
console.log("Task Four:")
function calculateLiquorBudget(money, numFriends) {
    const costPerFriend = Math.floor(money / numFriends);
    return `Each of us can spend $${costPerFriend} on liquor, boys!`;
}

console.log(calculateLiquorBudget(100, 3));

// I've now converted this into an arrow function:
const calculateLiquorBudget2 = (money, numFriends) => {
    const costPerFriend = Math.floor(money / numFriends);
    return `Each of us can spend $${costPerFriend} on liquor, boys!`;
};

console.log(calculateLiquorBudget2(100, 3));
