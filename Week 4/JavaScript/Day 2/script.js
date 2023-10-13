// Conditions in JavaScript

// Double equals checks if the values either side are equal.
//leftValue == rightValue 

// Is the value of the weather variable equal to a string of "Sunny"
// console.log(weather == "Sunny");

// An if statement evaluates a conditon and runs the relevant code block depending on whether it is true or false

// If / Else
// let weather = "Foggy";

// if (weather == "Sunny") {
//     console.log("Bring your sunglasses"); 
// } else if (weather == "Rain") {
//     console.log("Grab an umbrella");
// } else if (weather == "Snow") {
//     console.log("It's snowing!");
// } else {
//     console.log("I'm not sure, maybe bring a jacket");
// }

// // Comparison Operators

// // == - Equal to
// let a = 10;
// console.log(a == 10);

// // Not equal to
// console.log(a != 10);

// // Strictly equal To
// console.log(a === 10);

// // Not strictly equal to
// console.log(a !== 10);

// // > Greater than

// // < Less than

// // >= Greater than or equal to

// // <= Less than or equal to


// // Logical operators:

// // || Or

// // && and

// // ! Not

// // Traffic Light Example
// let trafficLight = "Amber";

// // If the traffic light is on red or amber, log "Stop" to the console
// if (trafficLight === "Red" || trafficLight === "Amber") {
//     console.log("Stop!");
// } else {
//     console.log("Go!");
// }

// // if (trafficLight !== "Green") {
// //     console.log("Stop!");
// // } else {
// //     console.log("Go!");
// // }

// // Number Comparison

// let num = 8;

// if (num > 5 && num <= 10) {
//     console.log(`${num} is between 5 and 10`);
// } else {
//     console.log(`${num} is NOT between 5 and 10`);
// };

// // Switch statement
// let day = "Tuesday";

// switch (day) {
//     case "Monday":
//         console.log("Weekend is over. Happy Monday!");
//         break;
//     case "Tuesday":
//         console.log("Second day of the week");
//         break;
//     case "Wednesday":
//         console.log("Halfway through the week!");
//         break;
//     case "Thursday":
//         console.log("It's almost Friday!");
//         break;
//     case "Friday":
//         console.log("Happy Friday!");
//         break;
//     default:
//         console.log("It's the weekend!");
// };

// // Switch statement 2 - Grade Example

// let testScore = 80;

// switch (true) {
//     case testScore >=70:
//         console.log("Distinction");
//         break;
//     case testScore >=60:
//         console.log("Merit");
//         break;
//     case testScore >=50:
//         console.log("Pass");
//         break;
//     default:
//         console.log("Failed");
// };

// Tasks

// Task 1
console.log("Task One:")
let age = 19

if (age >= 18) {
    console.log("No problem. What would you like to drink?")
} else {
    console.log("Sorry, I can't serve you.")
}

// Task 2
console.log("Task Two:")
let password = "Lahey123"

if (password.length >= 8) {
    console.log(`${password}`)
} else {
    console.log("Password is too short!")
}

// Task 3
console.log("Task Three:")
let divNum1 = 18

if (divNum1 % 3 === 0 || divNum1 % 5 === 0) {
    console.log(`${divNum1} is divisible by 3 or 5.`)
} else {
    console.log(`${divNum1} is NOT divisible by 3 or 5.`)
}

// Task 4
console.log("Task Four:")
const divNum2 = 15

if (divNum2 % 3 === 0 && divNum2 ) {
    console.log("fizz buzz")
} else if (divNum2 % 3 === 0) {
    console.log("fizz")
} else if (divNum2 % 5 === 0) {
    console.log("buzz")
} else {
    console.log(`${divNum2}`)
}

// Task 5 (extra)
// Just wanted to expand on what I'd learned today. I created this little game that requires the user to allocate the $7500 according to the ratio defined in the TV show 'Trailer Park Boys'. Because it displays alerts I've commented it out. Feel free to un-comment it to check the execution. I also experimented with a timer, reminding the user to hurry up using another quote from the show.

// Lahey's Finance Dilemma

// console.log("Task Five:")
// const groceriesFunds = 100;
// const liquorFunds = 1400;
// const bailFunds = 6000;

// const totalFunds = groceriesFunds + liquorFunds + bailFunds;

// const userGuess = prompt("Guess the ratio of funds for groceries, liquor, and bail. Format: X:Y:Z");

// if (userGuess === `${groceriesFunds}:${liquorFunds}:${bailFunds}`) {
//     console.log("That's right Rand! Now we're gonna let those little shitty shit-board members and their sexy mayor Julian destroy themselves");
// } else {
//     console.log("Aww shit, fucked her bud");
// }

// const timer = setTimeout(function() {
//     alert("Shit clock's tickin' boi");
// }, 30000);