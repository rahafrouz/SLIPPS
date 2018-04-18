import React, { Component } from "react";
import PasswordChange from "./PasswordChange";
import { connect } from "react-redux";
import { LOGOUT } from "../constants/actionTypes.js";


const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
});

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
                        <small id="profession">Greetings Dear</small>
                        <h1 id="full_name">{this.props.user.first_name} {this.props.user.last_name}</h1>
                        <ul className="contacts">
                          <li id="username">
                            <h6 >Username:</h6>
                            <em>{this.props.user.username}</em>
                          </li>
                          <li id="user_email">
                            <h6>Email</h6>
                            <em>{this.props.user.email}</em>
                          </li>
                          <li id="user_institution">
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>    
                </div>
              </div>
            </div>
            <aside className="col-xl-4 col-lg-4" id="sidebar">
              <div className="box_general_3 booking">
                <button
                  className="btn btn-outline-danger btn_1 full-width"
                  onClick={this.props.onClickLogout}>
                    Click here to logout.
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
  
    );
  }
}

export default connect(null, mapDispatchToProps)(UserDetails);

