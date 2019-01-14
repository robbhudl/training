export const ColorEnum = {
    'A' : 1,
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    '10' : 10,
    'J' : 11,
    'Q' : 12,
    'K' : 13,
} 

export function randomInt(min, max) {
    const rand = Math.random();
    const range = max - min;

    return min + (Math.floor(rand * range));
}

export function createDeck() {
    let cards = [];

    for(let i=0; i<4; i++) {
        for(let j=1; j<=13; j++){
            let card = {
                value: j,
                suit: i,
            }

            cards = [
                ...cards,
                card
            ]
        }
    }

    return cards;
} 

export function shuffleDeck(deck) {
    let unshuffledDeck = [...deck];
    let shuffledDeck = [];
    let cardsLeft = unshuffledDeck.length;

    while (cardsLeft > 0) {
        const index = randomInt(0, cardsLeft);

        const chosenCard = unshuffledDeck[index];

        shuffledDeck = [
            ...shuffledDeck,
            chosenCard,
        ]

        unshuffledDeck = [
            ...unshuffledDeck.slice(0, index),
            ...unshuffledDeck.slice(index + 1),
        ]
        
        cardsLeft = unshuffledDeck.length;
    }

    return shuffledDeck;
}

export function removeCardFromDeck(deck) {
    return deck.slice(1);
}

export function dealCardToPlayer(playerId, deck) {
    const dealtCard = deck[0];

    return dealtCard;
}

export function calculateHand(cards) {
    let handValue = 0;
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        
        handValue += calculateCardValue(card, handValue);
    }

    return handValue;
}

export function calculateCardValue(card, currentHandValue) {
    let cardValue = card.value;

    if (card.value === 1) {
        cardValue = 11;

        if (currentHandValue + cardValue > 21) {
            cardValue = 1;    
        }
    }
    else if (card.value >= 10) {
        cardValue = 10;
    }

    return cardValue;
}

export function isBlackJack(cards) {
    return (cards.length === 2) && (calculateHand(cards) === 21);
}

export function hasExceededValue(value, cards) {
    let sum = 0;

    cards.forEach(card => {
        sum += getCardValue(card.value);
    });

    return sum > value;
}

export function isBust(cards) {
    return hasExceededValue(21, cards);
}

export function hitMinimum(min, cards) {
    return hasExceededValue(min, cards);
}

export function getCardValue(cardFaceValue) {
    const cardValue = cardFaceValue >= 10 ? 10 : cardFaceValue;

    return cardValue;
}