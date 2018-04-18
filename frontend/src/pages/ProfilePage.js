import React, { Component } from "react";
import Navigation from "../components//Navigation";
import UserDetails from "../components//UserDetails";
import UploadedDocuments from "../components//UploadedDocuments";
import SavedEvents from "../components//SavedEvents";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { LOGOUT } from "../constants/actionTypes.js";
import { Link } from "react-router-dom";

const mapStateToProps = store => {
  return {
    currentUser: store.app.currentUser,
    inProgress: store.app.inProgress
  };
};

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
});

class ProfilePage extends Component {
  render() {
    console.warn(this.props.currentUser);
    if (this.props.inProgress) {
      return (
        <div id="preloader" class="mm-slideout">
          <div data-loader="circle-side"></div>
        </div>
      );
    } else if (this.props.currentUser) {
      return (
        <div>
          <div style={{backgroundColor: "#F5F8FA"}}>

            <UserDetails user={this.props.currentUser}/>
            <hr></hr>
            <UploadedDocuments/>
          </div>
        </div>
      );
    }
    else {
      // return (
      //   <div className="gray_background">
      //     <h3>You need to login to view this page.</h3>
      //     <p>
      //       Go to <Link to="/register" className="nav-link">Signup</Link> for a new account
      //     </p>
      //     <p>
      //       Or <Link to="/login" className="nav-link">Login</Link>
      //     </p>
      //   </div>
      // );
      return (
        <div id="error_page">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-xl-7 col-lg-9">
                <h2>:-( <i class="icon_error-triangle_alt"></i></h2>
                <p>We're sorry, but you need to login to see this page</p>
                <p>
                  <Link to="/signup" className="nav-link">Sign Up for a new account</Link>
                  Or <Link to="/login" className="nav-link">Log In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
