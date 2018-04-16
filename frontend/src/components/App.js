import React, { Component } from "react";
import Home from "../pages/Home";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { store } from "../store";
import agent from "../agent";
import { APP_LOAD, REDIRECT, APP_INIT} from "../constants/actionTypes";

const mapStateToProps = state => {
  return {
    // appLoaded: state.app.appLoaded,
    currentUser: state.app.currentUser,
    redirectTo: state.app.redirectTo,
    initData: state.app.initData,
    appLoaded: state.app.appLoaded
  };};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token }),
  onInit: (payload) =>
    dispatch({ type: APP_INIT, payload }),
});

class App extends Component {
  componentWillMount() {
    const token = window.localStorage.getItem("jwt");
    if (token) {
      agent.setToken(token);
    }


    // let payload = {
    //   "user": token ? agent.Auth.current() : null,
    //   "initData": promise
    // };

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  componentDidMount() {
    // let promise = Promise.all(agent.Common.getData());

    // this.props.onInit(promise);
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div className="Home">
          <Home />
        </div>
      );
    }
    return (
      <div>
        <div className="Home"></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
