import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import HomePageSearchBox from '../components/HomePageSearchBox'
import SearchBox from '../components/SearchBox'
import { push } from 'react-router-redux'

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.body.classList.add('fullscreen');
  }
  componentWillUnmount() {
    document.body.classList.remove('fullscreen');
  }

  _handleKeyPress(e) {
    if(e.key== 'Enter') {
      this.props.push('search/'+ e.target.value);
    }
  }
  render () {
    return (<HomePageSearchBox>
      <SearchBox handleKeyPress={this._handleKeyPress}/>
    </HomePageSearchBox>)
  }
}

export default connect(null, {
  push
})(Homepage);
