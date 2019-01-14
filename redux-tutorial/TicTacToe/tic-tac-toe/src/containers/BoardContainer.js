import { connect } from 'react-redux';
import Board from '../components/Board';
import { handleClick } from 'reducers';

const mapStateToProps = (state) => {

    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        // onclick: (i) => {
        //     dispatch(handleClick(i))
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);