import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MenuList from './MenuList'

class Homepage extends React.Component {
  render () {
    return <MenuList />
  }
}

export default connect(null, null)(Homepage);
