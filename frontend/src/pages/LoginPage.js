import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from "../components/LoginForm";

const mapStateToProps = state => {
  return {
    currentUser: state.app.currentUser,
  };
};

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginForm/>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(LoginPage);
