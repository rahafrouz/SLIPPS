import React, { Component } from "react";
import {withRouter} from "react-router-dom";


class EventLarge extends Component {
  constructor(props){
    super(props);
    this.NavigateToEvent = this.NavigateToEvent.bind(this);
    // this.props.history.push()
  }
  NavigateToEvent(){
    this.props.history.push({
      pathname: "/event/"+this.props.EventDetail._id,
      state: {
        EventDetail:this.props.EventDetail
      }
    });
  }
  render() {
    return (
      <div className="box_general_3 booking" onClick={this.NavigateToEvent}>					
        <div className="indent_title_in">
          <i className="icon-star-empty"></i>

          <h3><a>{this.props.EventDetail?this.props.EventDetail._source.description:"something"}</a></h3>
          <p>March 2018</p>
        </div>
        <div className="wrapper_indent">
          <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit... </p>
        </div>
      </div>
    );
  }
}

export default withRouter(EventLarge);
