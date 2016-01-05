import { createStore, applyMiddleware, compose } from 'redux'

import promiseMiddleware from '../lib/promiseMiddleware'
import reducer from '../reducer'

export default function(initialState) {

  const finalCreateStore = compose(
    applyMiddleware(promiseMiddleware)
  )(createStore)

  const store = finalCreateStore(reducer, initialState)

  return store
}
