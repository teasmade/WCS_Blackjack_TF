// console.log("Hello Bonjour World!");
const playerName = prompt("What is the player's name?");
const dealerName = prompt("What is the dealer's name?");
// SETUP
let playerScore = 0;
let dealerScore = 0;

const playerCard1 = dealCard();
const playerCard2 = dealCard();
const dealerCard1 = dealCard();
const dealerCard2 = dealCard();

console.log("Let's start the game!");
console.log(`${playerName} is dealt a ${playerCard1} and a ${playerCard2}`);
playerScore = playerCard1 + playerCard2;
console.log(`${dealerName} is dealt a ${dealerCard1} and a ${dealerCard2}`);
dealerScore = dealerCard1 + dealerCard2;

// PLAYER CONTINUE OR NOT?
playerContinue();

function playerContinue() {
    let continueYorN = null;
    while (continueYorN !== "Y" || continueYorN !== "N") {
        continueYorN = prompt(`${playerName}, do you want another card? Type Y or N`);
        if (continueYorN === "Y") {
            const newPlayerCard = dealCard();
            console.log(`OK ${playerName}, your new card is a ${newPlayerCard}`);
            playerScore += newPlayerCard;
            console.log(`Your score is now ${playerScore}`);
            playerContinue();
            break;
        } else if (continueYorN === "N") {
            console.log(`OK ${playerName}, your score is ${playerScore}`);
            console.log(`${dealerName} plays next...`);
            dealerPlay();
            break;
        } else {
            console.log(`You have to type Y or N!`);
        }
    }
}


function dealerPlay() {
    // DEALER DRAWS CARDS USING THE RULES IN INSTRUCTIONS
    // if dealer total is 17 or more >>> stop
    if (dealerScore >= 17) {
        console.log(`${dealerName}'s score is ${dealerScore}, they have to stop.`);
        endGame();
        // if dealer total is 16 or under >>> dealer takes card
    } else {
        const newDealerCard = dealCard();
        console.log(`${dealerName}'s new card is ${newDealerCard}`);
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
        console.log(`${dealerName} wins!`);
    } else if (dealerScore === playerScore) {
        console.log("It's a draw!");
    } else {
        console.log(`${playerName} wins!`);
    }
}
