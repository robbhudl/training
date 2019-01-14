import { combineReducers } from 'redux';
import deck from './deck';
import players from './players';

const blackJackReducer = combineReducers({
    deck,
    players,
})

export default blackJackReducer
