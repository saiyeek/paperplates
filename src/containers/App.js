import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { requestUserLogin } from '../actions/userActions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleUserLogin = this.handleUserLogin.bind(this)
  }

  handleUserLogin() {
    this.props.requestUserLogin();
  }

  render () {
    return (
      <div>
          <h1>App Wrapper</h1>
          <Link to="/about">About</Link>
          <button onClick={()=> this.handleUserLogin()} > Login</button>
          <div>
          {this.props.children}
          </div>
      </div>
      )
  }
}
function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, {
  requestUserLogin
})(App);
