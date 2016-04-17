import React, { PropTypes } from 'react'
import CreateMenuForm from '../components/CreateMenuForm'

class CreateMenuFormContainer extends React.Component {
  constructor(props) {
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler(e) {
    console.log(e.target)
  }
  render () {
    return <CreateMenuForm onChangeHandler={this.onChangeHandler}/>
  }
}

export default CreateMenuFormContainer;
