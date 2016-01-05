import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import auth from './lib/auth'
import {
  App,
  Home,
  About,
  Login,
  Logout,
  Dashboard,
  NotFound
} from './containers'

function requireAuth(nextState, replaceState) {
  console.log(auth.loggedIn())
  if (!auth.loggedIn())
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
}

export default (history) => {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />

        { /* Private routes */ }
        <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />

        { /* Public routes */ }
        <Route path="about" component={About} />
        <Route path="login" component={Login} />

        { /* Catch all route */ }
        <Route path="*" component={NotFound} status={404} />
      </Route>
    </Router>
  )

}
