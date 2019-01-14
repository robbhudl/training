import React from 'react'
import PropTypes from 'prop-types'

const Move = ({ onClick, isActive, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: isActive ? 'bold' : 'none'
    }}
  >
    {text}
  </li>
)

Move.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Move

// const Move = ({ isActive, children, onClick }) => {
//   if (active) {
//     return <span>{children}</span>
//   }

//   return (
//     <a
//       href=""
//       onClick={e => {
//         e.preventDefault()
//         onClick()
//       }}
//     >
//       {children}
//     </a>
//   )
// }

// Link.propTypes = {
//   isActive: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired
// }

// export default Link