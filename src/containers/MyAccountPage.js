import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { requestBeHost } from '../actions/userActions'

class MyAccountPage extends React.Component {
  render () {
    const {user, requestBeHost} = this.props;
      return user?(
        <div>
          <h1> I am of User type {user.type || 'diner'}</h1>
          <button onClick={() => requestBeHost(user._id)} >Be Host!</button>
        </div>
      ):<h1>Loading</h1>;


  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {
  requestBeHost
})(MyAccountPage);
