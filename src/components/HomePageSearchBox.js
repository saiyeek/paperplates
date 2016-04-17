import React, { PropTypes } from 'react'

const HomePageSearchBox = (props) => {
  return (
    <div className="row search">
        <center>
          <div className="search-title">We are in Seattle!</div>
          <div className="search-description">We have food lovers hosting lunch/dinner in Seattle. Wanna dine out at their place?</div>
          <div className="search-bar">
            {props.children}
          </div>
        </center>
      </div>
  )
}

export default HomePageSearchBox
