import React, { Component } from "react";
import SearchContainer from "../components/SearchContainer";
import MainPageNews from "../components/MainPageNews";

// import { connect } from "react-redux";

// const mapStateToProps = state => {
//   return {
//     currentUser: state.app.currentUser,
//   };
// };

class MainSearch extends Component {
  render() {
    return (
      <div>
        <SearchContainer />
        <MainPageNews />
      </div>
    
    );
  }
}

export default MainSearch;
