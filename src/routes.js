import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import AboutPage from './containers/AboutPage'
import Homepage from './containers/Homepage'
import MyAccountPage from './containers/MyAccountPage'
import SearchResultContainer from './containers/SearchResultContainer'
import MealDetailPage from './containers/MealDetailPage'
import CreateMenuForm from './components/CreateMenuForm'
import UserDetails from './components/UserDetails'

export default (
  <Route path="/" component={App}>
    <Route path="/about"
           component={AboutPage} />
    <Route path="/account"
           component={MyAccountPage}>
      <Route path="createMenu"
             component={CreateMenuForm} />
       <IndexRoute component={UserDetails} />
     </Route>
    <Route path="/search/:zipcode"
           component={SearchResultContainer} />
    <Route path="/meals/:mealId"
           component={MealDetailPage} />
    <IndexRoute component={Homepage} />
  </Route>
)
