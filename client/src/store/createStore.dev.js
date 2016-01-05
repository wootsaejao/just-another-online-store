import { createStore, applyMiddleware, compose } from 'redux'
import { persistState } from 'redux-devtools';

import promiseMiddleware from '../lib/promiseMiddleware'
import reducer from '../reducer'
import DevTools from '../containers/DevTools';

export default function() {

  const finalCreateStore = compose(
    applyMiddleware(promiseMiddleware),
    DevTools.instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&]+)\b/
      )
    )
  )(createStore)

  const store = finalCreateStore(reducer)

  if (module.hot) {
    module.hot.accept('../reducer', () =>
      store.replaceReducer(require('../reducer').default)
    );
  }

  return store
}
