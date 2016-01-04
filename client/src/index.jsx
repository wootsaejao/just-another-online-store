import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'

import createStore from './store/createStore'
import getRoutes from './routes'

//
// load stuff first
//

// TODO: use CDN
require('bootstrap/dist/css/bootstrap.min.css')


//
// main app
//

const store = createStore()
const routes = getRoutes(store)

render(
  <Provider store={store}>
    <ReduxRouter routes={routes} />
  </Provider>,
  document.getElementById('app')
)
