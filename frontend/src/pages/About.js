import React, { Component } from "react";
import Navigation from "../components//Navigation";
import AboutContent from "../components//AboutContent";
import AdvancedSearchContainer from "../components/AdvancedSearch/AdvancedSearchContainer";
import Footer from "../components/Footer";

import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div className="gray_background">
        <Navigation/>
        <AboutContent />
        <Footer />
      </div>    
    );
  }
}

export default About;
