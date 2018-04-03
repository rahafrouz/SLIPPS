import React, { Component } from "react";
import logo from '../icons/slipps-logo.png' // relative path to image 

class Navigation extends Component {
  render() {
    return (
      <header className="header_sticky">
  		  <div className="container">
          <div className="row">
            <div className="col-lg-3 col-6 slipps-logo">
    					<h1>
                <a href="/" title="SLIPPS">
                  <img src={logo} alt={"logo"} width="70" height="75" /> 
                </a>
              </h1>
    				</div>
  					<nav className="col-lg-9 col-6">
    					<a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="#0">
                <span>Menu mobile</span>
              </a>
  						<div className="main-menu">
  							<ul>
  								<li>
                    <a href="/login">Login</a>
                  </li>
  								<li>
                    <a href="/register" >Register</a>
                  </li>
  								<li>
                    <a href="#0" ><b>ENG</b></a>
                  </li>
  							</ul>
  						</div>
  					</nav>
          </div>
  		  </div>
      </header>   
    );
  }
}

export default Navigation;
  