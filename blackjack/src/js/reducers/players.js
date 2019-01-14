import { DEAL_CARD, ADD_PLAYER, BUST_PLAYER } from '../actions/actionTypes';

const initialState = [{
    playerId: 0,
    playerName: 'Dealer',
    hand: [],
    isBust: false,
    cash: 0
}];
  
export function playersReducer(state = initialState, action) {
    let players;
    let playerId, card, bust;

    switch (action.type) {
        case ADD_PLAYER:
            const newPlayerId = 1 + state[state.length - 1].playerId;
            const playerName = action.payload ? action.payload : 'player' + newPlayerId;

            return [
                ...state,
                {
                    playerId: newPlayerId,
                    playerName,
                    hand: [],
                    cash: 0
                }
            ]

        case DEAL_CARD: 
            ({ playerId, card } = action.payload); 
            players = state.map((player) => {
                if (player.playerId === playerId) {
                    return Object.assign({}, player, {
                      hand: [...player.hand, card]
                    })
                }
                else {
                    return player
                }
            })

            return players;

        case BUST_PLAYER:
            ({ playerId, bust } = action.payload); 

            players = state.map((player) => {
                if (player.playerId === playerId) {
                    return Object.assign({}, player, {
                        isBust: bust
                    })
                }
                else {
                    return player
                }
            })

            return players;

        default:
            return state;
    }
};

export default playersReducer;
