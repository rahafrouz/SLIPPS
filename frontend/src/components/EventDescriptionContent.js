import React, { Component } from "react";

class EventDescriptionContent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-12">
              <div className="strip_list">
                <h3>{ this.props.EventDetail._source.description}</h3>
                <p className='event-text'>
                  {this.props.EventDetail._source.short_desc}
                </p>
                <ul >
                  <li><a href="#0">Please log in to see full detail</a></li>
                  <li style={{visibility: "hidden"}}><i className='icon-download'></i><a href="#0"> Download</a></li>
                  <li style={{visibility: "hidden"}}><i className='icon-share'></i><a href="#0"> Share</a></li>
                  <li style={{visibility: "hidden"}}><i style={{color:"#3f4079"}}className="icon-star-empty"></i><a href="#">Save document</a></li>
                </ul>					
              </div>
					
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDescriptionContent;
