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




// _____________________________________________________________________
// part 3 | 1
// LET & CONST

// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes


// _____________________________________________________________________
// part 3 | 2
// LOG OUT ITEMS IN ARRAY

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

arrayThing(myCourses)


// _____________________________________________________________________
// part 3 | 3
// Save to localStorage

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
localStorage.setItem("thing", "wow")
console.log(localStorage.getItem("thing"))
localStorage.clear()


// _____________________________________________________________________
// part 3 | 4
// addEventListener() and object in array

let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

const janeEl = document.getElementById("jane")

janeEl.addEventListener("click", () => {
    console.log(data[0].score)
})



// _____________________________________________________________________
// part 3 | 5
// Generate Sentences

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

function generateSentence(desc, arr) {
    let base = (`The ${arr.length} ${desc} are `)
    let lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            base += arr[i]
        } else {
            base += arr[i] + ", "

        }
    }
    return console.log(base)
}

generateSentence("best fruits", ["Apples", "Bananas"])
generateSentence("largest countries", ["China", "India", "USA"])



// _____________________________________________________________________
// part 3 | 7
// Round two decimal

// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455
// const btn = document.getElementById("purchase-btn")
// btn.textContent = `Buy €${ (totalPrice).toFixed(2) }`

decimaled = `Buy €${ (totalPrice).toFixed(2) }`
console.log(decimaled)



// _____________________________________________________________________
// part 3 | 8
// str to num

// Challenge:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it

const totalPrice1 = "420.69235632455"
const btn = document.getElementById("buy-btn")
btn.textContent = `Buy €${ Number(totalPrice1).toFixed(2) }`
