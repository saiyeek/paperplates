import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MenuItem from './MenuItem'

const MealDetail = (props) => {
  console.log(props)
  let menuItemElements = [];
  if(props.menu.items){
    menuItemElements = props.menu.items.map(function(item) {
      return <MenuItem {...item} />
    })
  }
  return (
    <div className="row">
        <div className="col-sm-3">&nbsp;</div>
        <div className="col-sm-6 menu-detail center">
          <div className="header3">{props.title}</div>
          <div>
            <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
            <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
            <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
            <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
            <img src="http://www.museumreplicas.com/images/reviewstarsmallempty.png" />
          </div>
          <div className="photo-section">
            <img src={`${props.menu.images[0]}`} className="food-image" />
          </div>
          <p className="menu-description">
            {props.menu.description}
          </p>
          <div className="header4 vspace40">Things on the menu</div>
          <div className="menu-items vspace10">
            {menuItemElements}
          </div>
          <div className="booking-section vspace40">
            <div className="header4">Reserve now</div>
            <div>Price: USD {(props.menu.price / 100).toFixed(2)}/person</div>
            <div>Date: {new Date(props.date).toDateString()}</div>
            <div>Time: {new Date(props.date).toLocaleTimeString()}</div>
            <div>Guest Count
              <select>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <div className="vspace20">
              <button>Make a reservation</button>
            </div>
          </div>
        </div>
        <div className="col-sm-3">&nbsp;</div>
      </div>
  )
}

export default MealDetail;
