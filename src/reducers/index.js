import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import merge from 'lodash/merge'
import { ACTION_TYPES } from '../actions/actionTypes'

function user(state = null, action ){
  switch(action.type) {
    case ACTION_TYPES.LOAD_USER:
      return merge({}, action.user);
    case ACTION_TYPES.USER_LOGOUT_SUCCESSFUL:
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
