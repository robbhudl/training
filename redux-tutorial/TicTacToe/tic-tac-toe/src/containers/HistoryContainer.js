import { connect } from 'react-redux';
import History from '../components/History';
import { jumpTo } from 'reducers';

const mapStateToProps = (state) => {

    return {
        move: state.move,
        desc: state.desc,
        row: state.row,
        col: state.col,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
        onclick: (move) => {
            dispatch(jumpTo(ownProps.move))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
