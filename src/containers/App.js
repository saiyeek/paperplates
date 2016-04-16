import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { requestUserLogin, userLoginSuccessful } from '../actions/userActions'
import Header from './Header'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleUserLogin = this.handleUserLogin.bind(this)
  }

  fbLoginCallback(success) {
    this.props.userLoginSuccessful();
  }

  handleUserLogin(e) {
    e.preventDefault();
    let win = window.open('/auth/facebook', "", "width=500,height=400");
    window.fbLoginCallback = this.fbLoginCallback.bind(this);
    this.props.requestUserLogin();
  }

  render () {
    return (
      <div>
        <Header onClickLogin={this.handleUserLogin}/>
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
  requestUserLogin,
  userLoginSuccessful
})(App);
