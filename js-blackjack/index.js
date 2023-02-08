let firstCard = 10
let secondCard = 1

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
// cardsEl.textContent
function startGame(){
    renderGame()
}

function renderGame(){
    console.log(cardsEl.textContent)
    console.log(sumEl.textContent)
    cardsEl.textContent = "Cards:" + " " + firstCard + " " + secondCard
    let sum = firstCard + secondCard
    sumEl.textContent = "Sum:" + " " + sum
}

function newCard(){
    console.log("New Card is 3")
}