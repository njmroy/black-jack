// Generate first 2 cards

let isAlive = false;
let cards = [];
let hasBlackJack = false; 
let message = ""; 
let sum = 0;
//HTML element selectors 
let messageElement = document.getElementById("message-element");
let sumElement = document.querySelector("#sum-element");
let cardsElement = document.querySelector("#cards-element");

function startGame() {
    isAlive = true;
    let firstCard = randomNumber(1, 13);
    let secondCard = randomNumber(1, 13);

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    
    
    renderGame();
}

//Render Game function: shows cards, sum, and win/lose message
function renderGame() {
    //show cards
    cardsElement.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsElement.textContent += (cards[i]+ " " ); 
    }


    sumElement.innerText = `Sum:  ${sum}`;
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "Wohoo! You've got Blackjack! 🥳";
        startGame();
    } else {
        isAlive=false;
        message = "You're out of the game! 😭";

    }
    console.log(message);
    messageElement.textContent = message;
}

function randomNumber(min, max) { 
    let value = Math.round(Math.random() * (max - min) + min);
    //Return 11 if Ace is selected
    if (value > 10) {
        return 10
    } else if (value === 1) {
        return 11
    } else {
        return value
    }
} 


function getNewCard() { 
    console.log("getting new card!");
    let newCard = randomNumber(1,13);
    sum +=  newCard;
    cards.push(newCard);
    console.log(cards);
    renderGame();
}