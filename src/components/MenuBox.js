import React, { PropTypes } from 'react'

const MenuBox = (props) => {
  return (
    <div className="row entry bgcolor-1">
        <div className="col-sm-8 photo-section">
          <img src="https://dl.dropboxusercontent.com/u/36999182/paperplatemeals/photo-1414235077428-338989a2e8c0.jpeg" className="food-image" />
        </div>
        <div className="col-sm-4 summary-section">
          <div className="summary">
            <div className="summary-title">Tastebud euphoria</div>
            <div className="rating">
              <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
              <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
              <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
              <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
              <img src="http://www.museumreplicas.com/images/reviewstarsmallempty.png" />
            </div>
            <p>
              Pastrami hamburger spare ribs chicken shankle jowl bacon ham. Beef pastrami sausage, meatloaf swine ball tip short ribs sirloin spare ribs tongue jerky filet mignon frankfurter bresaola flank. Tenderloin prosciutto landjaeger bresaola tail pork pork loin beef ribs jerky pig beef flank rump drumstick. Venison ham hock short loin beef bacon tail sausage.<br /><br />
              Kielbasa shoulder jowl, beef ribs leberkas salami sirloin chicken short loin venison chuck ribeye tail. Alcatra rump pastrami, doner ham ham hock jowl cow kielbasa. Meatball flank pastrami bacon.
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

export default MenuBox
