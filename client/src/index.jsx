import React from 'react' // eslint-disable-line no-unused-vars

import { render } from 'react-dom'
import App from './components/App'

// bootstrap
require('bootstrap/dist/css/bootstrap.min.css')
jQuery = $ = window.jQuery = window.$ =  require('jquery/dist/jquery.min');
require('bootstrap/dist/js/bootstrap.min')

// custom style
require('!style!css!sass!./style.scss')

render(
  <App />,
  document.getElementById('app')
)
