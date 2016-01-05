import React from 'react'
import { render } from 'react-dom'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

import createStore from './store/createStore'
import getRoutes from './routes'
import { Root } from './containers'

//
// load stuff first
//

// TODO: use CDN
require('bootstrap/dist/css/bootstrap.min.css')


//
// main app
//

const history = createHistory()
const store = createStore()
syncReduxAndRouter(history, store)

const routes = getRoutes(history)

render(
  <Root store={store} routes={routes} />,
  document.getElementById('app')
)
