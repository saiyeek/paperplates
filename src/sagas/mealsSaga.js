import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { MealService } from '../services'

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
