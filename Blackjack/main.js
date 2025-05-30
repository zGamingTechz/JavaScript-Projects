let cards = []
let cardsDisplayed = []
let sum = 0
let cash = 1000

let blackjack = false
let busted = false
let inProgress = false
let message = ""

const messageElement = document.getElementById("message")
const sumElement = document.getElementById("sum")
const cardElement = document.getElementById("cards")
const cashElement = document.getElementById("cash")

function updateImage(card) {
    let image = document.createElement("img")
    image.src = "cards/" + card + ".png"
    image.style.width = "112px"
    image.style.height = "150px"
    image.style.margin = "5px"
    cardElement.appendChild(image)
}

function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1
    cardsDisplayed.push(card)

    if ([11, 12, 13].includes(card)) {
        return 10
    }
    else if (card === 1) {
        return 11
    }
    else {
        return card
    }
}

function start() {
    if (inProgress) {
        return
    }
    cards = []
    cardsDisplayed = []
    sum = 0
    blackjack = false
    busted = false
    inProgress = true
    cardElement.innerHTML = ""

    let card1 = getRandomCard()
    let card2 = getRandomCard()

    cards.push(card1)
    cards.push(card2)
    updateImage(card1)
    updateImage(card2)
    sum = card1 + card2
    processGame()
}

function processGame() {
    if (sum < 21) {
        message = "Safe! Draw another card?"
    }
    else if (sum === 21) {
        blackjack = true
        message = "Blackjack!"
        cash += 1000
        inProgress = false
    }
    else {
        busted = true
        message = "Lost!"
        cash -= 500
        inProgress = false
    }

    messageElement.innerText = message
    sumElement.innerText = "Sum: " + sum.toString()
    cashElement.innerText = "Player: $" + cash.toString()
}

function draw() {
    if (!busted && !blackjack) {
        messageElement.innerText = "Drawing..."
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        updateImage(cardsDisplayed.pop())
        processGame()
    }
}
