import React from 'react'
import { render } from 'react-dom'
import Application from './Application'
import createStore from './redux/createStore'

// This section is for webpack asset loader
// bootstrap css
require('bootstrap/dist/css/bootstrap.min.css')

// // bootstrap js
// jQuery = $ = window.jQuery = window.$ =  require('jquery/dist/jquery.min');
// require('bootstrap/dist/js/bootstrap.min')

// custom style
require('!style!css!sass!./style.scss')

const store = createStore()

render(
  <Application store={store} />,
  document.getElementById('app')
)
