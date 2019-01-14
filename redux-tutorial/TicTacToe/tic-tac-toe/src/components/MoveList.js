import React from 'react'
import PropTypes from 'prop-types'
import Move from './Move'

const MoveList = ({ moves, onMoveClick }) => (
  <ul>
    {moves.map((move, index) => (
      <Move key={index} {...move} onClick={() => onMoveClick(index)} />
    ))}
  </ul>
)

MoveList.propTypes = {
  moves: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onMoveClick: PropTypes.func.isRequired
}

export default MoveList