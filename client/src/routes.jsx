import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

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
    // TODO: figure out how to wait for checkAuth() before below lines get executed
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

        { /* Public routes */ }
        <Route path="about" component={About} />
        <Route path="login" component={Login} />
        <Route path="logout" component={Logout} />

        { /* Catch all route */ }
        <Route path="*" component={NotFound} status={404} />
      </Route>
    </Router>
  )

}
