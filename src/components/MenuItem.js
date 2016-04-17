import React, { PropTypes } from 'react'

const MenuItem = (props) => {
  const { item, ingredients } = props
  return (
    <div className="menu-item">
      <p className="menu-item-title header5">{props.item}</p>
      <p className="menu-item-ingredient">{props.ingredients}</p>
    </div>
  )
}

export default MenuItem
