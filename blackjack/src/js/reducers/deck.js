import { SHUFFLE_DECK, REMOVE_CARD } from '../actions/actionTypes';
import * as helpers from '../helpers';

export function cardsReducer(state = helpers.createDeck(), action) {
    switch (action.type) {
        case SHUFFLE_DECK:
            return helpers.shuffleDeck(action.payload);

        case REMOVE_CARD:
            return helpers.removeCardFromDeck(state);

        default:
            return state;
    }
};

export default cardsReducer;
