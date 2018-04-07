import React, { Component } from "react";
// import { connect } from "react-redux";
// import { SET_KEYWORD, SEARCH_BY_KEYWORD } from "../constants/actionTypes";
import Home from "../pages/Home";

class App extends Component {
  render() {
    return (
      <div className="Home">
        <Home />
      </div>
    );
  }
}

export default App;
