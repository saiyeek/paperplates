import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { MealService } from '../services'

let mealService = new MealService()
// worker Saga : will be fired on USER_FETCH_REQUESTED actions
function* fetchMeals(action) {
   try {
      const menus = yield call(mealService.fetchMenus);
      yield put({type: "MEALS_LOAD_ALL_SUCCESS", menus: menus});
   } catch (e) {
      yield put({type: "MEALS_LOAD_ALL_FAILED", message: e.message});
   }
}

/*
  starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action
  Allow concurrent fetches of user
*/
export function* mealsSaga() {
  yield* takeEvery("MEALS_LOAD_ALL_REQUEST", fetchMeals);
}
