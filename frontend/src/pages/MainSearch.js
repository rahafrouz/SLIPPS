import React, { Component } from "react";
import SearchContainer from "../components/SearchContainer";
import Navigation from "../components//Navigation";
import MainPageNews from "../components/MainPageNews";
import Footer from "../components/Footer";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentUser: state.app.currentUser,
  };
};

class MainSearch extends Component {
  render() {
    return (
      <div>
        <Navigation currentUser={this.props.currentUser} />
        <SearchContainer />
        <MainPageNews />
        <Footer />
      </div>
    
    );
  }
}

export default connect(mapStateToProps)(MainSearch);
