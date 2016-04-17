import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const MealBox = (props) => {
  console.log(props);
  return (
    <div className="row entry bgcolor-1">
        <div className="col-sm-8 photo-section">
        {props._id}
          <img src={`${props.menu.images[0]}`} className="food-image" />
        </div>
        <div className="col-sm-4 summary-section">
          <div className="summary">
            <div className="summary-title"><Link to={`/meals/${props._id}`}>{props.menu.title}</Link></div>
            <div className="rating">
              <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
              <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
              <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
              <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
              <img src="http://www.museumreplicas.com/images/reviewstarsmallempty.png" />
            </div>
            <p>
              {props.menu.description}
            </p>
            <div>
              <form action="/charge" method="POST">
                <button type="submit" className="stripe-button-el" style={{visibility: 'visible'}}><span style={{display: 'block', minHeight: 30}}>Pay with Card</span></button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MealBox
