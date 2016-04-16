import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class App extends React.Component {
  render () {
    return (
      <div>
          <h1>App Wrapper</h1>
          <Link to="/about">About</Link>
          <div>
          {this.props.children}
          </div>
      </div>
      )
  }
}

export default App;
