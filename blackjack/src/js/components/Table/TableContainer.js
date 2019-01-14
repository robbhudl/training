import { connect } from 'react-redux';
import { 
    shuffleDeck,
    dealCard, 
    addPlayer,
    bustPlayer,
    removeCard,
} from '../../actions';

export const mapStateToProps = (state) => {
    return {
        deck: state.deck,
        players: state.players,
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        shuffleDeck: (deck) => {
            dispatch(shuffleDeck(deck));
        },
        dealCard: (playerId, card) => {
            dispatch(dealCard(playerId, card));
        },
        removeCard: (deck) => {
            dispatch(removeCard(deck));
        },
        addPlayer: (playerName) => {
            dispatch(addPlayer(playerName));
        },
        bustPlayer: (playerId, bust) => {
            dispatch(bustPlayer(playerId, bust));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps);
