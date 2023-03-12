// 1
// OBJECTS | FUNCTIONS

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name: "Krity",
    age: 21,
    country: "Nepal"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()


// _____________________________________________________________________
// 2
// IF ELSE

let age = 40

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
    console.log("free.")
} else if (age < 18) {
    console.log("child discount.")
} else if (age < 27) {
    console.log("student discount.")
} else if (age < 66) {
    console.log("full price.")
} else {
    console.log("senior citizen discount.")
}


// _____________________________________________________________________
// 3
// FOR LOOP

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}


// _____________________________________________________________________
// 4
//  PUSH, POP, SHIFT AND UNSHIFT

let largeCountries1 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

console.log(largeCountries1)
// pop and push works at the end
largeCountries1.pop()
largeCountries1.push("Pakistan")
// shift and unshift works at the beginning
largeCountries1.shift()
largeCountries1.unshift("China")
console.log(largeCountries1)


// _____________________________________________________________________
// 5
// LOGICAL OPERATORS (&&, ||) 

let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱")
}
else {
    console.log("👍")
}


// _____________________________________________________________________
// 6
// ROCK PAPER SCISSORS | MATH

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getRandom() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}
console.log(getRandom())
