import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MealBox from '../components/MealBox'

class SearchResultContainer extends React.Component {
  constructor(props){
    super(props);
    this.props.loadAllMealsRequest();
  }
  render () {
    const { meals } = this.props;
    let mealsListElems;
    if(meals){
      mealsListElems = meals.map(meal => <MealBox {...meal} key={meal._id} />)
    }
    return meals
          ? (
          <div>{mealsListElems}</div>
          ):<small>Loading</small>
  }
}
function mapStateToProps(state, ownProps){
  return {
    meals: state.meals
  }
}
/*
Actions
*/
function loadAllMealsRequest() {
  return {
    type: "MEALS_LOAD_ALL_REQUEST"
  }
}

export default connect(mapStateToProps, {
  loadAllMealsRequest
})(SearchResultContainer);
