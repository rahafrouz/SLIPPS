import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../icons/slipps-logo.png"; // relative path to image 

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <div className="main-menu">
        <ul className="pull-xs-right">
          <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          {/*<li >
            <a href="/login">Login</a>
          </li>*/}
          <li>
            <Link to="/" className="nav-link">Sign up</Link>
            {/*<a href="/register">Sign up</a>*/}
          </li>
          {/*<li>
            <a href="#0" ><b>ENG</b></a>
          </li>*/}
        </ul>
      </div>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <div className="main-menu">
        <ul className="pull-xs-right">
          <li>
            <Link to="/profile" className="nav-link">
              {props.currentUser.username}
            </Link>
          </li>
          {/*<li >
            <a href="/login">Login</a>
          </li>*/}
          <li>
            <Link to="/upload" className="nav-link">Upload Document</Link>
            {/*<a href="/register">Sign up</a>*/}
          </li>
        </ul>
      </div>
    );
  }

  return null;
};


class Navigation extends Component {
  render() {
    return (
      <header className="header_sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-6 slipps-logo">
              <h1>
                <a href="/" title="SLIPPS">
                  <img src={logo} alt={"logo"} width="50" height="55" /> 
                </a>
              </h1>
            </div>
            <nav className="col-lg-9 col-6">
              <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="#0">
                <span>Menu mobile</span>
              </a>
              <LoggedOutView currentUser={this.props.currentUser} />
              <LoggedInView currentUser={this.props.currentUser} />
              {/*<div className="main-menu">
                <ul>
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="/register" >Register</a>
                  </li>
                  {/*<li>
                    <a href="#0" ><b>ENG</b></a>
                  </li>
                </ul>
              </div>*/}
            </nav>
          </div>
        </div>
      </header>   
    );
  }
}

export default Navigation;
  