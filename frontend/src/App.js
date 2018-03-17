
import React, { Component } from 'react';
import './App.css';
import MainSearch from './pages/MainSearch';
import AdvancedSearch from './pages/AdvancedSearch';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

class App extends Component {
  render() {
    return (
      <div className="App">
       <MainSearch/>
       </div>
    
    );
  }
}

export default App;
