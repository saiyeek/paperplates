

export function requestLoadMeal(mealId) {
  return {
    type: "REQUEST_LOAD_MEAL", mealId: mealId
  }
}

export function loadMealSuccess(meal) {
  return {
    type: "LOAD_MEAL_SUCCESS", meal: meal
  }
}

export function clearLoadedMeal() {
  return {
    type: "CLEAR_LOADED_MEAL"
  }
}

export function makeReservationRequest(mealId, people_count, userId) {
  return {
    type: "MAKE_RESERVATION_REQUEST",
    mealId,
    people_count,
    userId
  }
}
