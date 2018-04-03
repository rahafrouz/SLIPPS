import React, { Component } from "react";


class EventSmall extends Component {
  render() {
    return (
      <div className="col-xl-6 col-lg-6">
        <div className="box_general_3 booking">					
          <div className="indent_title_in">
            <i className="icon-star"></i>
            <h3>This is an event title</h3>
            <p>March 2018</p>
          </div>
          <div className="wrapper_indent">
            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit... </p>
          </div>
        </div>
      </div>
    );
  }
}

export default EventSmall;
