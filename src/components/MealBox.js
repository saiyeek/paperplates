import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const MealBox = (props) => {
  console.log(props);

  let imageSection =  <div className="col-sm-8 photo-section">
                        <Link to={`/meals/${props._id}`}><img src={`${props.menu.images[0]}`} className="food-image" /></Link>
                      </div>;

  let descriptionSection =  <div className="col-sm-4 summary-section">
                              <div className="summary">
                                <div className="summary-title"><Link to={`/meals/${props._id}`}><span className="header4">{props.title}</span></Link></div>
                                <div className="rating">
                                  <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
                                  <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
                                  <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
                                  <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
                                  <img src="http://www.museumreplicas.com/images/reviewstarsmallempty.png" />
                                </div>
                                <div><b>Date</b>: {new Date(props.date).toDateString()}</div>
                                <div><b>Time</b>: {new Date(props.date).toLocaleTimeString()}</div>
                                <p>
                                  {props.menu.description}
                                </p>
                              </div>
                            </div>

  if (props.count % 2 == 0) {
    return (
      <div className="row entry bgcolor-0">
          {imageSection}
          {descriptionSection}
        </div>
    )
  } else {
    return (
      <div className="row entry bgcolor-1">
          {descriptionSection}
          {imageSection}
        </div>
    )
  }
}

export default MealBox
