import React, { Component } from "react";
import EventSmall from "./EventSmall";

class EventSuggestions extends Component {
  render() {
    return (
      <div>
        <div className="container margin_40_35">
          <div>
            <h4 style={{textAlign: "left", paddingLeft: "10px", paddingBottom: "5px"}}>Documents of same category</h4>
            <div className="row">
              <EventSmall/>
              <EventSmall/>
            </div>
          </div>
          <hr></hr>
          <div>
            <h4 style={{textAlign: "left", paddingLeft: "10px", paddingBottom: "5px"}}>Documents contain similar keywords</h4>
            <div className="row">
              <EventSmall/>
              <EventSmall/>
            </div>
          </div>
          <div><button className='btn_1'>Load more</button></div>
        </div>
      </div>
    );
  }
}

export default EventSuggestions; 