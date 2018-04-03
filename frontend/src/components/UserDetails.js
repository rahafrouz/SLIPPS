import React, { Component } from "react";
import PasswordChange from "./PasswordChange";

class UserDetails extends Component {
  render() {
    return (
      <div>
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div id="section_1" style={{paddingBottom: "1px"}}>
                <div className="box_general_3" style={{paddingTop: "20px"}}>
                  <div className="title">
                    <h3>Personal Information</h3>
                  </div>
                  <div className="profile">
                    <div className="row">
                      <div className="col-lg-5 col-md-4">
                        <figure>
                          <img src="http://via.placeholder.com/565x565.jpg" alt="" className="img-fluid"/>
                        </figure>
                      </div>
                      <div className="col-lg-7 col-md-8">
                        <small id="profession">Profession</small>
                        <h1 id="full_name">Name Surname</h1>
                        <ul className="contacts">
                          <li id="username">
                            <h6 >Username</h6>
                            <em>user_name</em>
                          </li>
                          <li id="user_email">
                            <h6>Email</h6>
                            <em>email@slipps.fi</em>
                          </li>
                          <li id="user_institution">
                            <h6>Institution</h6> 
                            <em>Lappeenranta University of Technology</em>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>    
                </div>
              </div>
            </div>
            <PasswordChange/>       
          </div>
        </div>
      </div>
  
    );
  }
}

export default UserDetails;
