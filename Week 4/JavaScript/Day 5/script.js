// Objects

// Learning Objectives
// - Explore the concept of an object
// - To access data from within an object
// - To use functions (methods) with Objects

// Properties - Data contained within an object
// Methodsw - Things that the object can do

// Object Syntax
// Key:Value - Pairs
// const person = {
//     name : "James",
//     age : 56
// }

// Coffee Shop
// const coffeeShop = {
//     name: "Costa",
//     branchNumber: 250,
//     specialOffers: true,
//     drinks: [
//         "Americano",
//         "Latte",
//         "Tea"
//     ]
// }

// console.log(coffeeShop)

// // Accessing Data using dot notation
// console.log(coffeeShop.name)

// // Accessing Data using bracket notation
// console.log(coffeeShop["branchNumber"])

// // Combining dot and bracket notation
// console.log(coffeeShop.drinks[1])

// // Add items to an existing object
// coffeeShop.muffins = ["Blueberry", "Chocolate"]
// console.log(coffeeShop)

// // Overwrite / Change data in an existing object
// coffeeShop.branchNumber = 100
// console.log(coffeeShop)

// // Add special offers
// coffeeShop.breakfastOffer = "Free Bagel with any coffee!"
// coffeeShop.lunchOffer = "Free Coffee with any sandwich!"

// let offer = "No current offer"
// let time = 1000

// if (time < 1100) {
//     offer = coffeeShop.breakfastOffer
//     console.log(offer)
// } else if (time < 1500) {
//     offer = coffeeShop.lunchOffer
//     console.log(offer)
// }

// // Methods
// coffeeShop.open = function() {
//     return "We are open. Come on in!"
// }

// console.log(coffeeShop.open())

// coffeeShop.closed = function () {
//     return "Sorry, we are closed. Come back tomorrow"
// }

// console.log(coffeeShop.closed())

// console.log(coffeeShop)

// // Alarm Object
// const alarm = {
//     weekendAlarm: "Sleep in, it's the weekend!",
//     weekdayAlarm: "Get up at 7:00am",
//     checkDay: function (day) {
//         if (day === "Saturday" || day === "Sunday") {
//             return this.weekendAlarm
//         } else {
//             return this.weekdayAlarm
//         }
//     }
// }

// console.log(alarm.checkDay("Saturday"))

// Tasks

// Nested Objects 
const employee = {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: {
        name: 'Engineering',
        location: 'Building A',
        supervisor: {
            name: 'Jane Smith',
            position: 'Engineering Manager'
        }
    }
}

const library = {
    name: 'Public Library',
    location: 'City Center',
    books: [
        {
            id: 'B001',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            details: {
                genre: 'Fiction',
                year: 1925
            }
        },
        {
            id: 'B002',
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            details: {
                genre: 'Fiction',
                year: 1960
            }
        }
    ]
};


// Object Tasks

// Task 1
console.log("---Object Tasks---")
console.log("Task One:")
const person = {
    name: "Jim Lahey",
    age: 56,
    city: "Dartmouth"
}
console.log(person)

// Task 2
console.log("Task Two:")
person.films = ["A Fistful of Dollars", "Twelve Angry Men", "Butch Cassidy"]
console.log(person)


// Task 3
console.log("Task Three:")
const pet = {
    animals: ["Sundance", "Merlin"],
    eat: function() {
        return `${this.animals[0]} and ${this.animals[1]} both eat tasty treats.`;
    },
    drink: function() {
        return `However, ${this.animals[0]} drinks water whereas ${this.animals[1]} refuses all but warm milk.`;
    }
};

console.log(pet.eat());
console.log(pet.drink());

// Nested Objects tasks:

// Task 1
console.log("")
console.log("---Nested Object Tasks---")
console.log("Task One:")
console.log([employee.department.supervisor.name])


// Task 2
console.log("Task Two:")
console.log(library.books[0].title)


// Task 3 (extra)
// I wanted to explore nested objects a little more, so I've modified my solution to the previous pets task in such a way that includes an array of objects within another object. I've also incorporated navigation within nested objects by identifying elements using both dot notation and array indexing.
console.log("Task Three:")
const pet2 = {
    animals: [
        { name: "Sundance", category: "dog" },
        { name: "Merlin", category: "cat" }
    ],
    eat: function() {
        return `${this.animals[0].name} and ${this.animals[1].name} both enjoy tasty treats.`;
    },
    drink: function() {
        return `However, ${this.animals[0].name}, being a ${this.animals[0].category} is happy to drink water. ${this.animals[1].name} on the other hand.. because he's a spoiled ${this.animals[1].category}, refuses all but warm milk.`;
    }
};

console.log(pet2.eat());
console.log(pet2.drink());