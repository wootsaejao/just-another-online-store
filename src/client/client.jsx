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

// TODO: use CDN so the bundle size will be reduced by ~ 400KB
require('bootstrap/dist/css/bootstrap.min.css')


//
// main app
//

const history = createHistory()
const store = createStore()

// Disable ``syncReduxAndRouter`` for now due to the components render twice
// and also it always fallback to "/" path.
// Still don't know how to fix.

syncReduxAndRouter(history, store)

const routes = getRoutes(history, store.dispatch, store.getState)

render(
  <Root store={store} routes={routes} />,
  document.getElementById('app')
)
