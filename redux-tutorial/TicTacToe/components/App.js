import React from 'react'
import Board from './Board'
// import AddMove from '../containers/AddMove'
import VisibleMoveList from '../containers/VisibleMoveList'

const App = () => (
  <div>
      <div>
        <Board />
      </div>
      <div>
        <VisibleMoveList />
      </div>
  </div>
)

export default App