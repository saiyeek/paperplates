import React, { PropTypes } from 'react'

const SearchBox = (props) => {
  return (
    <input type="text" id="search-zip" placeholder="Search by zipcode. Eg. 98007" onKeyPress={props.handleKeyPress} />
  )
}

export default SearchBox
