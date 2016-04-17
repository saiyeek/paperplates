import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { requestBeHost } from '../actions/userActions'
import CreateMenuForm from '../components/CreateMenuForm'

class MyAccountPage extends React.Component {
  render () {
    const {user, requestBeHost} = this.props;
      return user?(
        <div>{this.props.children}</div>
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
