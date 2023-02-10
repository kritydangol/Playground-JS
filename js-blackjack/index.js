let firstCard = 2
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let cardsArray = ""

// cardsEl.textContent
function startGame() {
    if (sumEl.textContent === "Sum:") {
        renderGame()
    }
    else {
        hasBlackJack = false;
        isAlive = true;
        cardsArray = ""
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
        sumEl.textContent = "Sum: " + sum
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "You've got Blackjack!"
            hasBlackJack = true
        } else {
            message = "You're out of the game!"
            isAlive = false
        }
        messageEl.textContent = message
    }
}

function renderGame() {
    cardsArray = ""
    for (let i = 0; i < cards.length; i++) {
        cardsArray += cards[i] + " "
    }
    cardsEl.textContent = "Cards: " + cardsArray
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = 6
        sum += card
        // Push the card to the cards array
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    else if (!isAlive) {
        message = "You're out of the game, you can't take a new card anymore!"
        messageEl.textContent = message
    }
    else {
        message = "You've got Blackjack already! You won! Congratulations!"
        messageEl.textContent = message
    }
}