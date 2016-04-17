import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { MealService } from '../services'
import { loadMealSuccess } from '../actions/mealActions'

let mealService = new MealService()


function* fetchMeals(action) {
   try {
      let meals = yield call(mealService.fetchMeals);
      yield put({type: "MEALS_LOAD_ALL_SUCCESS", meals});
   } catch (e) {
      yield put({type: "MEALS_LOAD_ALL_FAILED", message: e.message});
   }
}

export function* mealsSaga() {
  yield* takeEvery("MEALS_LOAD_ALL_REQUEST", fetchMeals);
}

function* fetchCurrentMeal(action) {
  try {
    let currentMeal = yield call(mealService.fetchMeal, action.mealId);
    yield put(loadMealSuccess(currentMeal))
  } catch(e) {
      yield put({type: "LOAD_MEAL_FAILURE", message: e.message})
  }
}
export function* currentMealSaga() {
  yield* takeEvery("REQUEST_LOAD_MEAL", fetchCurrentMeal)
}
