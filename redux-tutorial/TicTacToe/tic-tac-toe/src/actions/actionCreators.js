import { ADD_MOVE, GOTO_MOVE } from './actionTypes'


// An action is the payload of information and only way to update the store

// An action creator is a function that returns an action
export const addMove = text => ({
    type: ADD_MOVE,
    // id: nextMoveId++,
    text
  })
  
  export const goToMove = id => ({
    type: GOTO_MOVE,
    id
  })