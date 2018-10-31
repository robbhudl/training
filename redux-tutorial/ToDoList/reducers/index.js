import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilters'
​
// Redux provides a utility called combineReducers() that does the same boilerplate logic that the todoApp above currently doe
export default combineReducers({
  todos,
  visibilityFilter
})

// App just gives todos the slice of the state to manage, and todos knows how to update just that slice. This is called reducer composition, and it's the fundamental pattern of building Redux apps.
// function todoApp(state = {}, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }