import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Route, Switch } from "react-router";
import { withRouter } from "react-router-dom";
import { APP_LOAD, REDIRECT} from "../constants/actionTypes";

import agent from "../agent";
import Home from "../pages/Home";
import AdvancedSearch from "../pages/AdvancedSearch";
import ResultPage from "../pages/ResultPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import DocumentUpload from "../pages/DocumentUpload";
import RegisterPage from "../pages/RegisterPage";
import EventDescription from "../pages/EventDescription";
import About from "../pages/About";
import EventLarge from "./EventLarge.js";
import Footer from "./Footer";
import Navigation from "./Navigation";
import TermsAndConditions from "./TermsAndConditions";

const mapStateToProps = store => {
  return {
    // appLoaded: state.app.appLoaded,
    currentUser: store.app.currentUser,
    redirectTo: store.app.redirectTo,
    initData: store.app.initData,
    appLoaded: store.app.appLoaded
  };};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends Component {
  componentWillMount() {
    const token = window.localStorage.getItem("jwt");
    if (token) {
      agent.setToken(token);
    }

    let promises = Promise.all([
      token ? agent.Auth.current() : null, 
      agent.Common.getData()
    ]);

    this.props.onLoad(promises, token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.props.history.push(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div className="Home">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/advanced-search" component={AdvancedSearch} />
            <Route path="/search/:keyword" component={ResultPage} />
            <Route path="/upload" component={DocumentUpload} />
            <Route path="/event/:event_id" component={EventDescription} />
            {/*<Route path="/desc" component={EventDescription} />*/}
            <Route path="/about" component={About} />
            <Route path="/testingevents" component={EventLarge} />
            <Route path="/terms" component={TermsAndConditions} />
          </Switch>
          <Footer />
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
