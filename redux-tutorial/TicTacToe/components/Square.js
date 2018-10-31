import React from 'react'
import PropTypes from 'prop-types'

const Square = ({ onClick, isWinner, value }) => (
  <button
    className={"square"}
    onClick={onClick}
    style={{
      backgroundColor: isWinner ? 'yellow' : 'none'
    }}
  >
    {value}
  </button>
)

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  isWinner: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
}

export default Square