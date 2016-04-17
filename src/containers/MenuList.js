import React, { PropTypes } from 'react'
import MenuBox from '../components/MenuBox'
import { connect } from 'react-redux'
import { requestLoadAllMenu } from '../actions/menuActions'

class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.props.requestLoadAllMenu();
  }
  render () {
    return <MenuBox />
  }
}


let mapStateToProps = (state, ownProps) => {
  return {
    menus: state.menus
  }
};

let mapDispatchToProps = {
  requestLoadAllMenu
}
export default  connect(mapStateToProps, mapDispatchToProps)(MenuList);
