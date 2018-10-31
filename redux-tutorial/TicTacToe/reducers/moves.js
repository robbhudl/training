import { 
    ADD_MOVE,
    GOTO_MOVE
 } from './actions'

 function moves(state = [], action) {
    switch (action.type) {
        case ADD_MOVE:
            return [
                ...state.moves.map((move) => { move.isActive = false }),
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