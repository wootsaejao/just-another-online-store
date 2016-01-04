import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import { persistState } from 'redux-devtools';

import promiseMiddleware from '../lib/promiseMiddleware'
import reducer from '../reducer'
import getRoutes from '../routes'
import DevTools from '../containers/DevTools';

export default function(initialState) {

  const routes = getRoutes()

  const finalCreateStore = compose(
    applyMiddleware(promiseMiddleware),
    reduxReactRouter({
      routes,
      createHistory
    }),
    DevTools.instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&]+)\b/
      )
    )
  )(createStore)

  const store = finalCreateStore(reducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducer', () =>
      store.replaceReducer(require('../reducer').default)
    );
  }

  return store
}
