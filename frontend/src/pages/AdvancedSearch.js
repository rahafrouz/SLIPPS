import React, { Component } from "react";
import Navigation from "../components//Navigation";
import AdvancedSearchContainer from "../components/AdvancedSearch/AdvancedSearchContainer";
import Footer from "../components/Footer";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentUser: state.app.currentUser,
  };
};
class AdvancedSearch extends Component {
  render() {
    return (
      <div>
        <Navigation currentUser={this.props.currentUser} />
        <AdvancedSearchContainer />
        <Footer />
      </div>    
    );
  }
}

export default connect(mapStateToProps, null)(AdvancedSearch);
