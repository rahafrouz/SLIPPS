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
    if (this.props.inProgress) {
      return (
        <div id="preloader" class="mm-slideout">
          <div data-loader="circle-side"></div>
        </div>
      );
    } else if (this.props.currentUser) {
      return (
        <div>
          <Navigation />
          <div style={{backgroundColor: "#F5F8FA"}}>
            <button
              className="btn btn-outline-danger"
              onClick={this.props.onClickLogout}>
                Click here to logout.
            </button>

            <UserDetails/>
            <hr></hr>
            <SavedEvents/>
            <hr></hr>
            <UploadedDocuments/>
          </div>
          <Footer />
        </div>
      );
    }
    else {
      return (
        <div className="gray_background">
          <h3>You need to login to view this page.</h3>
          <p>
            Go to <Link to="/register" className="nav-link">Signup</Link> for a new account
          </p>
          <p>
            Or <Link to="/login" className="nav-link">Login</Link>
          </p>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
