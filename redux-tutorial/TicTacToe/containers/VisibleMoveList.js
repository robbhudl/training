import { connect } from 'react-redux'
import { goToMove } from '../actions/actionCreators'
import MoveList from '../components/MoveList'

const getVisibleMoves = (moves, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return moves
    case 'SHOW_SELECTED':
      return moves.filter(m => m.completed)
  }
}

const mapStateToProps = state => {
  return {
    moves: getVisibleMoves(state.moves, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMoveClick: id => {
      dispatch(goToMove(id))
    }
  }
}

const VisibleMoveList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveList)

export default VisibleMoveList