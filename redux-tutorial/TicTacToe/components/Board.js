import React from 'react'
import PropTypes from 'prop-types'
import Square from './Square'

const Board = ({ squares, onSquareClick }) => (
  <li>
    {squares.map((square, index) => (
      <Square key={index} {...square} onClick={() => onSquareClick(index)} />
    ))}
  </li>
)

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isWinner: PropTypes.bool.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onSquareClick: PropTypes.func.isRequired
}

export default Board