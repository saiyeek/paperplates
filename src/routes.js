import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import AboutPage from './containers/AboutPage'
import Homepage from './containers/Homepage'

export default (
  <Route path="/" component={App}>
    <Route path="/about"
           component={AboutPage} />
     <IndexRoute component={Homepage} />
  </Route>
)
