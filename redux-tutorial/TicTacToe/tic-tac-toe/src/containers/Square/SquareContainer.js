import { connect } from 'react-redux';
import Square from '../../components/Square';
import * as actions from '../../actions/actionCreators';
// import { handleClick } from '../../reducers';

const mapStateToProps = (state) => {

    return {
        className: 'square',
        isWinner: state.isWinner,
        value: state.value,
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        onClick: () => {
            dispatch(actions.addMove('X'))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
