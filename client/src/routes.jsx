import React from 'react'
import { Route } from 'react-router'
import Homepage from './containers/Homepage'

// const routes = (
//   <Route path="/" component={App}>
//     <Route path="parent" component={Parent}>
//       <Route path="child" component={Child} />
//       <Route path="child/:id" component={Child} />
//     </Route>
//   </Route>
// )
const routes = (
  <Route path="/" component={Homepage} />
)

export default routes
