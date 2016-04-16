import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { ACTION_TYPES } from '../actions/actionTypes'

function user(state = null, action ){
  switch(action.type) {
    case ACTION_TYPES.LOAD_USER:
      return Object.create(action.user);
    case ACTION_TYPES.LOGOUT_USER:
      return null;
  }
  return state;
}

function appState(state = {}, action) {
  switch(action.type) {
  }
  return state;
}
const rootReducer = combineReducers({
  user,
  appState,
  routing
})

export default rootReducer
