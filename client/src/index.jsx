import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
// import Application from './Application'
import createStore from './redux/createStore'
import getRoutes from './routes'

// This section is for webpack asset loader
// bootstrap css
require('bootstrap/dist/css/bootstrap.min.css')

const store = createStore()
const routes = getRoutes(store)

render(
  <Provider store={store}>
    <ReduxRouter routes={routes} />
  </Provider>,
  document.getElementById('app')
)
