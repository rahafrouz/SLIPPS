import React, { Component } from "react";
import Navigation from "../components//Navigation";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentUser: state.app.currentUser,
  };
};

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Navigation currentUser={this.props.currentUser}/>
        <LoginForm/>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(LoginPage);
