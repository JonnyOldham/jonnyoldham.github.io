// Properties are data or information about the object

// Methods are things the object can do

// Using the console object and the log method to log a statement to the console
// console.log("Hello World");

// // Data Types

// // String - Represents characters enclosed in quote marks
// console.log("I am string!");

// // Numbers
// console.log(100);

// // Boolean - True or False
// console.log(true);
// console.log(false);

// // Remember numbers inside quote marks are strings
// console.log("1000");

// // Null - An absence of any value
// console.log(null);

// // Undefined - Data without a defined type
// console.log(undefined);

// // Variables in JavaScript

// // var - variable decleration keyword
// // AVOID USING VAR!!!

// var variable = "Var is a method of declaring variables that you should avoid";

// // = - Single Equals - Assignment Operator - Used to asign a value

// console.log(variable);

// // Let - Method of declaring variables that will change

// let changeable = "A value stored in a 'let' variable is able to have its value reassigned";
// console.log(changeable);

// changeable = "A new value";
// console.log(changeable);
// console.log(changeable);

// // let changeable = "Whatever value"

// // Const - for variable values that won't change

// const constant = "A variable that cannot be assigned a new value";
// console.log(constant);

// // We cannot reassign a constant value
// // constant = "New value"

// // Properties and Methods

// let exampleString = "Hello World";

// // .length - returns the number of characters in a string
// console.log(exampleString.length);

// // Methods

// // Remember that a method must be followed by parenthesis in order to invoke it
// console.log(exampleString.toUpperCase());

// console.log(exampleString);

// // Math Library

// // In-built JavaScript Mathematical methods
// console.log(Math.random());

// console.log(Math.random() * 10);

// console.log(Math.ceil(Math.random() * 10));

// // Accessing Variables / Template Literals
// let firstName = "Jonathan";

// let lastName = "Oldham";

// console.log(firstName);
// console.log(lastName);

// console.log("My name is" + " " + firstName + " " + lastName);

// // Template Literals
// console.log(`My name is ${firstName} ${lastName}.`);

// Tasks

// Task 1
console.log("Task One:");
const firstName = "Jonathan";
console.log(`Hi ${firstName}, It's nice to see you!`);

// Task 2
console.log("Task Two:");
const name = "Jonny";
const favColor = "blue";
const favFilm = "Interstellar";
console.log(`Hi, I'm ${name}, my favourite film is ${favFilm} because it uses rich shades of ${favColor}`);

// Task 3
console.log("Task Three:");
let breakfast = "a banana";
let lunch = "a tasty Wagamamas";
let dinner = "pasta with prawns";
console.log(`Yesterday I ate ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);

breakfast = "a croissant and juice";
lunch = "spicy noodles";
dinner = "roast chicken with vegetables";
console.log(`Today I had ${breakfast} for breakfast. I'm planning to have ${lunch} for lunch. and ${dinner} for dinner.`);

// Task 4 (extra)
// Here I'm just experimenting with the math.random function, using the TV show Trailer Park Boys as a theme:

// The cops have arrived to arrest you for firing off guns in the paerk.
// What's your name sir?
console.log("Task Four:");
const firstNames = ["Randy", "Corey", "Trevor", "Jim"];
const lastNames = ["Lahey", "Trevor", "Bobandy", "Corey"];

const randomFirstNameIndex = Math.floor(Math.random() * 4);
const randomLastNameIndex = Math.floor(Math.random() * 4);

const selectedFirstName = firstNames[randomFirstNameIndex];
const selectedLastName = lastNames[randomLastNameIndex];

console.log(`Uhh, I'm ${selectedFirstName} ${selectedLastName}`);