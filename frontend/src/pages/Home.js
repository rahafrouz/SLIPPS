import React, { Component } from "react";

import "../App.css";
import MainSearch from "../pages/MainSearch";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <MainSearch/>
      </div>
    );
  }
}

export default Home;
