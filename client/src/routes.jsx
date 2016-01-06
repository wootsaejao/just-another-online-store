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

export default (history, dispatch, getState) => {

  function requireAuth(nextState, replaceState) {
    if (!getState()._auth.isLoggedIn) {
      replaceState({ nextPathname: nextState.location.pathname }, '/login')
    }
  }

  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />

        { /* Private routes */ }
        <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
        <Route path="logout" component={Logout} onEnter={requireAuth} />

        { /* Public routes */ }
        <Route path="about" component={About} />
        <Route path="login" component={Login} />

        { /* Catch all route */ }
        <Route path="*" component={NotFound} status={404} />
      </Route>
    </Router>
  )

}
