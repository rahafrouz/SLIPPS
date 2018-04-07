import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { connect } from "react-redux";
import root from "window-or-global";


import SearchContainer from "../components/SearchContainer";
import Navigation from "../components//Navigation";
import MainPageNews from "../components/MainPageNews";
import Footer from "../components/Footer";

const Promise = window.Promise;

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <SearchContainer />
        <MainPageNews />
        <Footer />
      </div>
    
    );
  }
}

export default Home;
