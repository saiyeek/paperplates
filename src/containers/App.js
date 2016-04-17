import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { requestUserLogin, userLoginSuccessful, loadUserObject, requestUserLogout } from '../actions/userActions'
import Header from './Header'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleUserLogin = this.handleUserLogin.bind(this)
    this.handleUserLogout = this.handleUserLogout.bind(this)
  }

  componentWillMount() {
    
  }
  fbLoginCallback(success) {
    this.props.userLoginSuccessful();
  }

  handleUserLogin(e) {
    e.preventDefault();
    console.log("handling user login");
    let win = window.open('/auth/facebook', "", "width=500,height=400");
    window.fbLoginCallback = this.fbLoginCallback.bind(this);
    this.props.requestUserLogin();
  }

  handleUserLogout(e) {
    console.log("Handle user logout");
    e.preventDefault();
    this.props.requestUserLogout();
  }

  render () {
    return (
      <div>
        <Header
          onClickLogin={this.handleUserLogin}
          onClickLogout={this.handleUserLogout}
          />
          <h1>App Wrapper</h1>
          <Link to="/about">About</Link>
          <button onClick={()=> this.props.userLoginSuccessful()} > Load User Object</button>
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
  requestUserLogin,
  userLoginSuccessful,
  loadUserObject,
  requestUserLogout
})(App);
