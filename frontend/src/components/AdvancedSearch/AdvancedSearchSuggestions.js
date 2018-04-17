import React, { Component } from "react";
// import MapView from "./MapView";
import KeywordList from "../KeywordList";

class AdvancedSearchSuggestions extends Component {
  render() {
    return (
      <div>
        <h6 className="box_title">Similiar Keywords</h6>
        <KeywordList Keywords={this.props.Keywords}/>
      </div>
    );
  }
}

export default AdvancedSearchSuggestions;
