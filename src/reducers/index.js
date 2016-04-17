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

function meals(state = [], action) {
  switch(action.type) {
    case "MEALS_LOAD_ALL_SUCCESS":
      return action.meals;
  }
  return state;
}

function currentMeal(state = null, action) {
  switch(action.type){
    case "LOAD_MEAL_SUCCESS":
      return action.meal;
      break;
    case "CLEAR_LOADED_MEAL":
      return null;
      break;
  }
  return state;
}

const rootReducer = combineReducers({
  user,
  menus,
  meals,
  currentMeal,
  appState,
  routing
})

export default rootReducer
