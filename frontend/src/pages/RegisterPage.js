import React, { Component } from "react";
import Navigation from "../components//Navigation";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <RegisterForm/>
        <Footer />
      </div>  
    );
  }
}

export default RegisterPage;
