let testString1 = "Queen of Hearts";
let testString2 = "9 of Clubs";

let cardValues = {
    ace: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    jack: 10,
    queen: 10,
    king: 10,
}

// Get first part of card name string e.g. "Queen of Hearts" >>> "queen"
function splitCardName(cardString) {
    return cardString.split(" ")[0].toLowerCase();
}

// object has to be accessed using bracket rather than dot notation, because using an expression evaluating to a string, not a variable name
console.log(cardValues[splitCardName(testString1)]);

// this won't work...
// console.log(cardValues.splitCardName(testString1));



