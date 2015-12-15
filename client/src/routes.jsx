import React from 'react'
import { Route, Router } from 'react-router'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'

// const routes = (
//   <Route path="/" component={App}>
//     <Route path="parent" component={Parent}>
//       <Route path="child" component={Child} />
//       <Route path="child/:id" component={Child} />
//     </Route>
//   </Route>
// )
const routes = (
  <Router>
    <Route path="/" component={HomePage} />
    <Route path="about" component={AboutPage} />
  </Router>
)

export default routes
