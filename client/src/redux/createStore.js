import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { reduxReactRouter, routerStateReducer } from 'redux-router'
import { createHistory } from 'history'
import promiseMiddleware from './middleware/promiseMiddleware'
import * as reducers from './reducers'
import routes from '../routes'

export default function() {
  // const reducer = combineReducers(reducers)
  const reducer = combineReducers({
    router: routerStateReducer,
    app: reducers
  })

  // const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
  // const store = finalCreateStore(reducer)

  // const store = applyMiddleware(promiseMiddleware)(createStore)(reducer)

  const store = compose(
    applyMiddleware(promiseMiddleware),
    reduxReactRouter({
      routes,
      createHistory
    })
  )(createStore)(reducer)

  return store
}
