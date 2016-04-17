import React, { PropTypes } from 'react'
import MealDetail from '../components/MealDetail'
import {connect} from 'react-redux'
import {requestLoadMeal, clearLoadedMeal, makeReservationRequest} from '../actions/mealActions'

class MealDetailPage extends React.Component {

  // static contextTypes = {
  //   router: React.PropTypes.func
  // }
  constructor(props) {
    super(props);
    this.state = {
      people_count: 1
    }
    this.props.requestLoadMeal(this.props.params.mealId);
    this.makeReservationClickHandler = this.makeReservationClickHandler.bind(this);
    this.peopleCountChangeHandler = this.peopleCountChangeHandler.bind(this);
  }

  makeReservationClickHandler(mealId) {
    this.props.makeReservationRequest(mealId, this.state.people_count, this.props.user._id)
  }

  peopleCountChangeHandler(e) {
    console.log(e.target.value);
    this.setState({
      people_count: e.target.value
    })
  }

  render () {
    return this.props.currentMeal ?
          <MealDetail
            {...this.props.currentMeal}
            handleMakeRervationClicked={this.makeReservationClickHandler}
            handlePeopleCountChange={this.peopleCountChangeHandler}
            />
          : <small>Loading...</small>
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    currentMeal: state.currentMeal
  }
}
export default connect(mapStateToProps, {
  requestLoadMeal,
  clearLoadedMeal,
  makeReservationRequest
})(MealDetailPage);
