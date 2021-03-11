// console.log("Hello Bonjour World!");

// SETUP
let playerScore = 0;
let dealerScore = 0;

const playerCard1 = dealCard();
const playerCard2 = dealCard();
const dealerCard1 = dealCard();
const dealerCard2 = dealCard();

console.log("Let's start the game!");
console.log(`Player is dealt a ${playerCard1} and a ${playerCard2}`);
playerScore = playerCard1 + playerCard2;
console.log(`Dealer is dealt a ${dealerCard1} and a ${dealerCard2}`);
dealerScore = dealerCard1 + dealerCard2;

// PLAYER CONTINUE OR NOT?
playerContinue();


function playerContinue() {
    let continueYorN = prompt("Player, do you want another card? Type Y or N");
    if (continueYorN === "Y") {
        const newPlayerCard = dealCard();
        console.log(`OK Player, your new card is a ${newPlayerCard}`);
        playerScore += newPlayerCard;
        console.log(`Your score is now ${playerScore}`);
        playerContinue();
    } else {
        console.log(`OK Player, your score is ${playerScore}`);
        console.log("Dealer's turn to play...");
        dealerPlay();
    }
}


function dealerPlay() {
    // DEALER DRAWS CARDS USING THE RULES IN INSTRUCTIONS
    // if dealer total is 17 or more >>> stop
    if (dealerScore >= 17) {
        console.log(`Dealer's score is ${dealerScore}, they have to stop.`);
        endGame();
        // if dealer total is 16 or under >>> dealer takes card
    } else {
        const newDealerCard = dealCard();
        console.log(`Dealer's new card is ${newDealerCard}`);
        dealerScore += newDealerCard;
        dealerPlay();
    }
}    // END OF DEALER PLAY


function dealCard() {
    const newCard = Math.floor(Math.random() * 10) + 1
    return newCard;
}


function endGame() {
    if (dealerScore > playerScore && dealerScore <= 21) {
        console.log("Dealer wins!");
    } else if (dealerScore === playerScore) {
        console.log("It's a draw!");
    } else {
        console.log("Player wins!");
    }
}
