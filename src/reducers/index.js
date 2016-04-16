import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { ACTION_TYPES } from '../actions/actionTypes'

function user(state = {}, action ){
  // switch(action.type) {
  //   case ACTION_TYPES.USER_LOGIN_SUCCESSFUL
  // }
  return state;
}
const rootReducer = combineReducers({
  user,
  routing
})

export default rootReducer
