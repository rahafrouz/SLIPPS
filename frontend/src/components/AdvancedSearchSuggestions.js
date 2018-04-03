import React, { Component } from "react";
// import MapView from "./MapView";
import KeywordList from "./KeywordList";

class AdvancedSearchSuggestions extends Component {
  render() {
    return (
      <div>
        <h6 className="box_title">Same keyword in other languages</h6>
        <KeywordList />
        <h6 className="box_title">Keywords of the same category</h6>
        <KeywordList />
      </div>
    );
  }
}

export default AdvancedSearchSuggestions;
