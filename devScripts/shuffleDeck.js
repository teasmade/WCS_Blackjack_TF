// Make a shuffled deck of cards

// Cards array
let cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

// Suits object
let suits = {
    spades: cards,
    hearts: cards,
    clubs: cards,
    diamonds: cards
}

// Empty deck array
let deck = [];

// Loop suits and cards, add to deck, capitalise first char of suit keys
for (let suit in suits) {
    for (let card of cards) {
        deck.push(`${card} of ${suit.charAt(0).toUpperCase()}${suit.slice(1)}`);
    }
}

// Generate array of random numbers 0 -  51 to be index of eventual shuffled deck
let randomIndexArray = [];

for (let i = 0; randomIndexArray.length < 52; i++) {
    const randomNumber = Math.floor(Math.random() * 52);
    if (!randomIndexArray.includes(randomNumber)) {
        randomIndexArray.push(randomNumber);
    }
}

// Add cards from deck to shuffled deck using randomIndexArray for order
let shuffledDeck = [];

for (let i = 0; i < randomIndexArray.length; i++) {
    shuffledDeck.push(deck[randomIndexArray[i]]);
}

console.log(shuffledDeck);