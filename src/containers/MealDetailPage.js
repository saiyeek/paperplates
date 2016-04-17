import React, { PropTypes } from 'react'
import MealDetail from '../components/MealDetail'
import {connect} from 'react-redux'
import {requestLoadMeal, clearLoadedMeal} from '../actions/mealActions'

class MealDetailPage extends React.Component {

  // static contextTypes = {
  //   router: React.PropTypes.func
  // }
  constructor(props) {
    super(props);
    this.props.requestLoadMeal(this.props.params.mealId);
  }
  render () {
    return this.props.currentMeal ? <MealDetail {...this.props.currentMeal} /> : <small>Loading...</small>
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentMeal: state.currentMeal
  }
}
export default connect(mapStateToProps, {
  requestLoadMeal,
  clearLoadedMeal
})(MealDetailPage);
