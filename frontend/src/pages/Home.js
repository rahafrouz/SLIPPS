import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { APP_LOAD, REDIRECT } from "../constants/actionTypes";
import { store } from "../store";
// import { push } from "react-router-redux";
import { connect } from "react-redux";

import SearchContainer from "../components/SearchContainer";
import Navigation from "../components//Navigation";
import MainPageNews from "../components/MainPageNews";
import Footer from "../components/Footer";
// import agent from "../agent";

const Promise = window.Promise;
const mapStateToProps = state => {
  return {
    currentUser: state.app.currentUser,
  };
};

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation currentUser={this.props.currentUser}/>
        <SearchContainer />
        <MainPageNews />
        <Footer />
      </div>
    
    );
  }
}

export default connect(mapStateToProps, null)(Home);
