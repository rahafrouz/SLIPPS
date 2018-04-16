import React, { Component } from "react";
import Home from "../pages/Home";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { store } from "../store";
import agent from "../agent";
import { APP_LOAD, REDIRECT } from "../constants/actionTypes";

const mapStateToProps = state => {
  return {
    // appLoaded: state.app.appLoaded,
    currentUser: state.app.currentUser,
    redirectTo: state.app.redirectTo
  };};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token }),
});

class App extends Component {
  componentWillMount() {
    const token = window.localStorage.getItem("jwt");
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render() {
    return (
      <div className="Home">
        <Home />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
