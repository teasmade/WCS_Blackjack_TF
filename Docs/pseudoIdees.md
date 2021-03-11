Blackjack v1

# Variables
playerScore >>> 0
dealerScore >>> 0

# Loops / Functions

turnLoop() {
        turnSetup()
            2 * cards player
            2 * cards dealer (Only 1 visible)

        playerTurn()
            continueYesorNo()
                if Yes {
                    drawCard()
                    continueYorN()
                }   else (No) {
                    endPlayerTurn()
                }
        dealerTurn()
            if dealerScore >= 17 {
                endGame()
            } else {
                drawCard()
                dealerTurn()
            }
}

endGame()
    if dealerScore > playerScore && dealerScore <= 21 {
        dealerWinsMessage
    } else if (dealerScore === playerScore) {
        drawMessage
    } else {
        playerWinsMessage
    }


PAS BESOIN DE:
    Plusieurs tours
    Decider qui joue en premier (toujours player)
















//// Jeu de 7
SETUP
    Welcome message
    Get input >>> player names
    Randomly decide first player
    Get input >>> how many rounds


GAME LOOP
    GAME FUNCTIONALITY


END
    Score Game 
        If p1 higher score >>> p1 win message
        If p2 higher score >>> p2 win message
        END


setupGame();

while (p1.roundWins < gameState.playTo && p2.roundWins < gameState.playTo) {
    rollRound();
}

scoreGame();