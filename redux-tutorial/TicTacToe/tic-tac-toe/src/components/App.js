import React from 'react'
import Board from './Board'
// import AddMove from '../containers/AddMove'
// import VisibleMoveList from '../containers/VisibleMoveList'

const App = (status = [], moves = []) => (
  <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div>
        <div className="game-info">
          {/* <div>{status}</div> */}
          {/* <ol>{moves}</ol> */}
          {/* <VisibleMoveList /> */}
      </div>
    </div>
  </div>
)

export default App