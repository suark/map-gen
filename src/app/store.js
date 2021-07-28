import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
// applyMiddleware(sagaMiddleware)
// then run the saga
// sagaMiddleware.run(mySaga)

export const store = configureStore({
  reducer: {},
  sagaMiddleware,
})
