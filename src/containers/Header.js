import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Header = (props) => {
  return (
    <header id="header">{/*header*/}
        <div className="header_top">{/*header_top*/}
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="contactinfo">
                  <ul className="nav nav-pills">
                    <li><a href="#"><i className="fa fa-phone" /> +1 123 456 7890</a></li>
                    <li><a href="#"><i className="fa fa-envelope" /> food.lovers.paradise@paperplatemeals.com</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
              </div>
            </div>
          </div>
        </div>{/*/header_top*/}
        <div className="header-middle">{/*header-middle*/}
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="logo pull-left">
                  <Link to="/"><img src="images/home/logo.png" alt /></Link>
                </div>
                <div className="btn-group pull-right">
                </div>
              </div>
              <div className="col-sm-8">
                <div className="shop-menu pull-right">
                  <ul className="nav navbar-nav">
                    <li><a href="#" onClick={(e) =>  props.onClickLogin(e)}><i className="fa fa-lock" /> Login</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>{/*/header-middle*/}
        <div className="header-bottom">{/*header-bottom*/}
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="mainmenu pull-left">
                  <ul className="nav navbar-nav collapse navbar-collapse">
                    <li><a href="index.html" className="active">Home</a>
                    </li><li><a href="index.html" className="active">Products</a>
                    </li><li><a href="index.html" className="active">Support</a></li>
                    <li><a href="contact-us.html">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="search_box pull-right">
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>
        </div>{/*/header-bottom*/}
      </header>
  )
}

export default Header
