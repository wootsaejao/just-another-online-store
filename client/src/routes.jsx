import React from 'react'
import { Route, IndexRoute } from 'react-router'
import {
  App,
  Home,
  About,
  Dashboard,
  NotFound
} from './containers'

export default () => {

  // const requireLogin = (nextState, replaceState, cb) => {
  //   function checkAuth() {
  //     const { auth: { user }} = store.getState();
  //     if (!user) {
  //       // oops, not logged in, so can't be here!
  //       replaceState(null, '/');
  //     }
  //     cb();
  //   }
  //
  //   if (!isAuthLoaded(store.getState())) {
  //     store.dispatch(loadAuth()).then(checkAuth);
  //   } else {
  //     checkAuth();
  //   }
  // };

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />

      <Route path="dashboard" component={Dashboard} />

      { /* Public routes */ }
      <Route path="about" component={About} />

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  )
}
