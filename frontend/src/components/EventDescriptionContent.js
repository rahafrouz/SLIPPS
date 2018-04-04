import React, { Component } from "react";

class EventDescriptionContent extends Component {
  render() {
    return (
      <div>
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-12">
              <div className="strip_list">
                <h3>Event title</h3>
                <p className='event-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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