import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import {
  App,
  Home,
  About,
  Dashboard,
  NotFound
} from './containers'

export default (history) => {

  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />

        <Route path="dashboard" component={Dashboard} />

        { /* Public routes */ }
        <Route path="about" component={About} />

        { /* Catch all route */ }
        <Route path="*" component={NotFound} status={404} />
      </Route>
    </Router>
  )
  
}
