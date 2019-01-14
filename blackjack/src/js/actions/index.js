import { 
    SHUFFLE_DECK,
    REMOVE_CARD,
    DEAL_CARD,
    ADD_PLAYER,
    BUST_PLAYER,
} from './actionTypes';

export const shuffleDeck = (deck) => ({ type: SHUFFLE_DECK, payload: deck });

export const removeCard = (deck) => ({ type: REMOVE_CARD, payload: deck });

export const dealCard = (playerId, card) => ({ type: DEAL_CARD, payload: { playerId, card } });
export const addPlayer = (playerName) => ({ type: ADD_PLAYER, payload: playerName });
export const bustPlayer = (playerName, bust) => ({ type: BUST_PLAYER, payload: { playerName, bust } });
