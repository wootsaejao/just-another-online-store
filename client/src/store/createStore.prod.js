import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'

import promiseMiddleware from '../lib/promiseMiddleware'
import reducer from '../reducer'
import getRoutes from '../routes'

export default function(initialState) {

  const routes = getRoutes()

  const finalCreateStore = compose(
    applyMiddleware(promiseMiddleware),
    reduxReactRouter({
      routes,
      createHistory
    })
  )(createStore)

  const store = finalCreateStore(reducer, initialState)

  return store
}
