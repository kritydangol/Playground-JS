let player = {
    name: "Rachana",
    chips: 2
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": Rs. " + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    return randomCard
}

// cardsEl.textContent
function startGame() {
    isAlive = true;
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
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
    if (sum === 0) {
        message = "You should start the game before drawing a card."
        messageEl.textContent = message
    }
    else {
        if (isAlive && !hasBlackJack) {
            let card = getRandomCard()
            sum += card
            // Push the card to the cards array
            cards.push(card)
            // console.log(cards)
            renderGame()
        }
        else if (hasBlackJack) {
            message = "You've got Blackjack already! You won! Congratulations!"
            messageEl.textContent = message
        }
        else {
            message = "You're out of the game, you can't take a new card anymore!"
            messageEl.textContent = message
        }
    }
}