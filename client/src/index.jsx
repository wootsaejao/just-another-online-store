import React from 'react'
import { render } from 'react-dom'

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

const store = createStore()
const routes = getRoutes(store)

render(
  <Root store={store} routes={routes} />,
  document.getElementById('app')
)
