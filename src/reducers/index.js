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

function menus(state = {}, action ) {
  switch(action.type) {
    case "MENU_LOAD_ALL_SUCCESS":
      return merge({}, action.menus);
  }
  return state;
}
const rootReducer = combineReducers({
  user,
  menus,
  appState,
  routing
})

export default rootReducer
