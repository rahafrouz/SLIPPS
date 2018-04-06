import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home";
import AdvancedSearch from "./pages/AdvancedSearch";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
// import EventDescription from "./pages/EventDescription";
import DocumentUpload from "./pages/DocumentUpload";
import RegisterPage from "./pages/RegisterPage";
import EventDescription from "./pages/EventDescription";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/advanced-search" component={AdvancedSearch} />
          <Route path="/search/:keyword" component={SearchPage} />
          <Route path="/upload" component={DocumentUpload} />
          <Route path="/event/:eventid" component={EventDescription} />
          <Route path="/desc" component={EventDescription} />

        </div>
      </Router>
    );
  }
}

export default App;
