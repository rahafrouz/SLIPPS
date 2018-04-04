import React, { Component } from "react";


class EventLarge extends Component {
  render() {
    return (
      <div className="box_general_3 booking">					
        <div className="indent_title_in">
          <i className="icon-star-empty"></i>
          <h3>{this.props.EventDetail._source.description}</h3>
          <p>March 2018</p>
        </div>
        <div className="wrapper_indent">
          <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit... </p>
        </div>
      </div>
    );
  }
}

export default EventLarge;
