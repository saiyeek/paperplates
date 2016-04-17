import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import HomePageSearchBox from '../components/HomePageSearchBox'

class Homepage extends React.Component {

  componentDidMount() {
    document.body.classList.add('fullscreen');
  }
  componentWillUnmount() {
    document.body.classList.remove('fullscreen');
  }
  render () {
    return <HomePageSearchBox />
  }
}

export default connect(null, null)(Homepage);
