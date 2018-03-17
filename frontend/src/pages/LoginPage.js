
import React, { Component } from 'react';
import Navigation from '../components//Navigation';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

class LoginPage extends Component {
  render() {
    return (
      <div>
       <Navigation />
       <LoginForm/>
       <Footer />
      </div>
    
    );
  }
}

export default LoginPage;
