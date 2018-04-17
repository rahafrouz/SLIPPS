import React, { Component } from "react";
import AboutContent from "../components//AboutContent";
import AdvancedSearchContainer from "../components/AdvancedSearch/AdvancedSearchContainer";

import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div className="gray_background">
        <AboutContent />
      </div>    
    );
  }
}

export default About;
