import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import AboutPage from './containers/AboutPage'
import Homepage from './containers/Homepage'
import MyAccountPage from './containers/MyAccountPage'
import SearchResultContainer from './containers/SearchResultContainer'

export default (
  <Route path="/" component={App}>
    <Route path="/about"
           component={AboutPage} />
    <Route path="/account"
           component={MyAccountPage}/>
       <Route path="/search/:zipcode"
           component={SearchResultContainer} />
     <IndexRoute component={Homepage} />
  </Route>
)
