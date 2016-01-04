import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'

import promiseMiddleware from '../lib/promiseMiddleware'
import reducer from '../reducer'
import getRoutes from '../routes'

export default function() {

  const routes = getRoutes()

  const store = compose(
    applyMiddleware(promiseMiddleware),
    reduxReactRouter({
      routes,
      createHistory
    })
  )(createStore)(reducer)

  return store
}
