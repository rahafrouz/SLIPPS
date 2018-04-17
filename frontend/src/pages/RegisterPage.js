import React, { Component } from "react";
import Navigation from "../components//Navigation";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentUser: state.app.currentUser,
  };
};

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <RegisterForm/>
      </div>  
    );
  }
}

export default connect(mapStateToProps, null)(RegisterPage);
