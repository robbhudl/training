import { 
  SET_VISIBILITY_FILTER,
  VisibilityFilters
 } from '..actions/actionCreators'

// Takes ONLY the SHOW_ALL const string from VisibilityFilters even though there are multiple values. This is ES6 Destructuring.
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
    return action.filter
    default:
    return state
  }
}

export default visibilityFilter