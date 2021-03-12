# Blackjack version 2
(NEW FUNCTIONALITY NOT EXPLICIT IN INSTRUCTIONS)

### Rules Clarification from Paul
Player has to choose 1 or 11 for ace when it is drawn
If dealer's first card is an ace, it's worth 11
Any subsequent dealer aces are worth 1

## Game Setup

Get player name
Get dealer name
(Initialise overall player and dealer scores at zero)


## Round Play

### Round Setup
Initialise player and dealer round scores at zero
Generate a shuffled deck of cards

Draw first 2 cards
Display (message) the player what those cards are
If any player card is an ace, ask them for input whether that card should be worth 1 or 11
Update player round score

Draw 1 card for dealer                    
    * Dealer's second hidden card should be drawn here, but this functionality can be fudged by only drawing it in scoring phase *
Display that card to player
Update dealer round score (if card is an ace, score 11 to dealer)

Display current scores to player

### Player's Turn
Get input from player - do they want another card?

If no, go to dealer's turn.

If yes;

Draw 1 card for player
Display that card to player
If card is an ace, ask them for input whether that card should be worth 1 or 11
Update player round score

If player round score > 21
Go to game end - player loses

Else (player round score <= 21)
Play another player's turn

### Dealer's Turn
Display player round score
"Display" (i.e. draw) dealer's second card
Update dealer round score (if card is an ace CALCULATE SPECIAL CONDITIONS HERE FOR ACE SCORE???)
    If dealer score (previous <= 6, ace is worth 11, else ace is worth 1)
If dealer round score >= 17 go to game end

Else (dealer score < 17)
Play another dealer's turn

## Game End

Analyse score to determine who wins
Display Win / Lose / Draw round messages
Update player / dealer overall win scores
Ask player if they want to play another round
If Yes, go to round play
If No, display end of play message with final overall round win scores