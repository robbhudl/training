import { 
    ADD_TODO,
    TOGGLE_TODO,
} from '..actions/actionCreators'// The reducer is a pure function that takes the previous state and an action, and returns the next state.

// Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.

// Things you should never do inside a reducer:
// Mutate its arguments;
// Perform side effects like API calls and routing transitions;
// Call non-pure functions, e.g. Date.now() or Math.random().

// EXAMPLE STATE OBJECT
// {
//     visibilityFilter: 'SHOW_ALL',
//     todos: [
//       {
//         text: 'Consider using Redux',
//         completed: true
//       },
//       {
//         text: 'Keep all state in a single tree',
//         completed: false
//       }
//     ]
//   }

// We don't mutate the state. We create a copy with Object.assign()
// You must supply an empty object as the first parameter. You can also enable the object spread operator proposal to write { ...state, ...newState } instead.
// We return the previous state in the default case. It's important to return the previous state for any unknown action.

function todos(state = [], action) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ]
      case TOGGLE_TODO:
        return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          else {
            return todo
          }
        })
      default:
        return state
    }
}

export default todos