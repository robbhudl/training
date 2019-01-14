import { 
    ADD_MOVE,
    GOTO_MOVE
 } from '../actions/actionTypes'

//  The reducer is a pure function that takes the previous state and an action, and returns the next state.
// Things you should never do inside a reducer:

// Mutate its arguments;

// Perform side effects like API calls and routing transitions;

// Call non-pure functions, e.g. Date.now() or Math.random().

 function moves(state = [], action) {
    switch (action.type) {
        case ADD_MOVE:
            return Object.assign({}, state, {
                moves {
                squares: [ 
                    ...state.squares,
                    {
                        squares(i): action.text,
                        row: 8,
                        col: 8,
                    }
                ],
                stepNumber: 8,
                xIsNext: true,
            }
            }) [
                ...state.moves.map((move, value) => { 
                    {
                        move.isActive = false;
                        move.squares(i) = value;
                    }
                }),
                {
                    text: action.text,
                    isActive: true
                }
            ]
        case GOTO_MOVE:
            return state.moves.map((move, index) => {
                if (true) {
                    return Object.assign({}, move, {
                        isActive: (index === action.index)
                    })
                }
            })
        default:
            return state
    }
 }

function ticTacToeApp(state = {}, action) {
    return {
        moves: moves(state.moves, action)
    }
}

// import { combineReducers } from 'redux'
// ​
// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })

export default ticTacToeApp;

// function ticTacToeApp(state = initialState, action) {
//     switch (action.type) {
//         case ADD_MOVE:
//             return Object.assign({}, state, {
//                 moves: moves(state.moves, action)
//             })
//         case GOTO_MOVE:
//             return Object.assign({}, state, {
//                 moves: moves(state.moves, action)
//             })
//         default:
//             return state
//     }
// }

// function ticTacToeApp(state = initialState, action) {
//     switch (action.type) {
//         case GOTO_MOVE:
//             return Object.assign({}, state, {
//                 moves: [
//                     ...state.moves.map((move) => { move.isActive = false }),
//                     {
//                         text: action.text,
//                         isActive: true
//                     }
//                 ]
//             })
//         // return Object.assign({}, state, {
//         //     moves: state.moves.map((move) => {
//         //     move.isActive = false
//         //     return moves
//         //     })

//         // })
//         // let moves = state.moves.map((m) => {
//         //     m.isActive = false
//         // })
//         // return moves.push(
//         //   {
//         //     text: action.text,
//         //     isActive: true
//         //   })
//         // case GOTO_MOVE:
//         //     return Object.assign({}, state, {
//         //         moves: state.moves.map((move, index) => { 
//         //             move.isActive = (index === action.index)
//         //         })
//         //     })
//         case GOTO_MOVE:
//             return Object.assign({}, state, {
//               moves: state.moves.map((move, index) => {
//                 if (true) {
//                   return Object.assign({}, move, {
//                     isActive: (index === action.index)
//                   })
//                 }
//               })
//             })
//         default:
//           return state
//       }
// }