import React, { Component } from "react";
// import { connect } from "react-redux";

import SearchContainer from "../components/SearchContainer";
import MainPageNews from "../components/MainPageNews";

const Promise = window.Promise;

class Home extends Component {
  render() {
    return (
      <div>
        <SearchContainer />
        <MainPageNews />
      </div>
    
    );
  }
}

export default Home;
