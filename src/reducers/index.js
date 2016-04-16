import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'


function user(state = {}, action ){
  return state;
}
const rootReducer = combineReducers({
  user,
  routing
})

export default rootReducer
