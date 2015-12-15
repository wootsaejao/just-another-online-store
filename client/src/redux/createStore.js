import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from './middleware/promiseMiddleware'
import * as reducers from './reducers'

export default function(data) {
  const reducer = combineReducers(reducers)
  const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
  const store = finalCreateStore(reducer, data)

  return store
}
