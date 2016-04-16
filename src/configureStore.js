import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import { root } from './sagas/logger'
import { userSaga } from './sagas/userSaga'

const sagaMiddleware = createSagaMiddleware(root, userSaga)

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  )
}
