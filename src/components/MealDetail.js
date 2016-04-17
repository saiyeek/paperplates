import React, { PropTypes } from 'react'

const MealDetail = (props) => {
  return (
    <div className="row">
        <div className="col-sm-3">&nbsp;</div>
        <div className="col-sm-6 menu-detail center">
          <div className="header3">Tastebud euphoria</div>
          <div>
            <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
            <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
            <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
            <img src="http://www.museumreplicas.com/images/reviewstarsmall.png" />
            <img src="http://www.museumreplicas.com/images/reviewstarsmallempty.png" />
          </div>
          <div className="photo-section">
            <img src="https://dl.dropboxusercontent.com/u/36999182/paperplatemeals/photo-1426869884541-df7117556757.jpeg" className="food-image" />
          </div>
          <p className="menu-description">
            Tenderloin prosciutto landjaeger bresaola tail pork pork loin beef ribs jerky pig beef flank rump drumstick. Venison ham hock short loin beef bacon tail sausage.<br /><br />
            Kielbasa shoulder jowl, beef ribs leberkas salami sirloin chicken short loin venison chuck ribeye tail. Alcatra rump pastrami, doner ham ham hock jowl cow kielbasa. Meatball flank pastrami bacon.
          </p>
          <div className="header4 vspace40">Things on the menu</div>
          <div className="menu-items vspace10">
            <div className="menu-item">
              <p className="menu-item-title header5">Cupcakes</p>
              <p className="menu-item-ingredient">Chocolate, Cocoa, Cream</p>
            </div>
            <div className="menu-item">
              <p className="menu-item-title header5">Drinks</p>
              <p className="menu-item-ingredient">Option of hot chocolate, coffee and tea</p>
            </div>
          </div>
          <div className="booking-section vspace40">
            <div className="header4">Reserve now</div>
            <div>Price: USD 59/person</div>
            <div>Date: Apr 21st, 2016</div>
            <div>Time: 7:30pm</div>
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

export default MealDetail
