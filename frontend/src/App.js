
import React, { Component } from 'react';
import './App.css';
import MainSearch from './pages/MainSearch';
import AdvancedSearch from './pages/AdvancedSearch';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';

class App extends Component {
  render() {
    return (
      <div className="App">
       <ProfilePage/>
       </div>
    
    );
  }
}

export default App;
