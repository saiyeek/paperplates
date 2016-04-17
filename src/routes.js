import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import AboutPage from './containers/AboutPage'
import Homepage from './containers/Homepage'
import MyAccountPage from './containers/MyAccountPage'
export default (
  <Route path="/" component={App}>
    <Route path="/about"
           component={AboutPage} />
    <Route path="/account"
           component={MyAccountPage}/>
     <IndexRoute component={Homepage} />
  </Route>
)
