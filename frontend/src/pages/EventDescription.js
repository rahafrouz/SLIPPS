
import React, { Component } from "react";
// import SearchContainer from "../components/SearchContainer";
import Navigation from "../components/Navigation";
import EventDescriptionContent from "../components/EventDescriptionContent";
import EventSuggestions from "../components//EventSuggestions";
import EventDescriptionContent2 from "../components/EventDescriptionContent2";

import Footer from "../components/Footer";

class EventDescription extends Component {
  constructor(props)
  {
    super(props);
    // var EventDetail=this.props.location.state.EventDetail;
  }
  render() {
    return (
      <div>
        <Navigation />
        <div style={{backgroundColor: "#F5F8FA"}}>
          {console.warn(this.props.state)}
          <EventDescriptionContent2 EventDetail={this.props.location.state.EventDetail}/>
          <EventSuggestions />
        </div>
        <Footer />
      </div>
    
    );
  }
}

export default EventDescription;
