import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import promiseMiddleware from './middleware/promiseMiddleware'
import getRoutes from '../routes'
import reducer from './modules/reducer'

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
