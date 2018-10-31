import { ADD_MOVE, GOTO_MOVE } from './actionTypes'

export const addMove = text => ({
    type: ADD_MOVE,
    id: nextMoveId++,
    text
  })
  
  export const gotoMove = id => ({
    type: GOTO_MOVE,
    id
  })