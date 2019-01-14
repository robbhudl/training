import React from 'react'
import PropTypes from 'prop-types'

class Square extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isWinner: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired
  }

  render(){
    return(
      <button
        className={this.props.className}
        onClick={this.props.onClick}
        style={{
          backgroundColor: this.props.isWinner ? 'yellow' : 'none'
        }}
      >
    {this.props.value}
  </button>
    )
  }
}

export default Square