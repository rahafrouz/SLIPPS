import React, { Component } from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";




const mapStateToProps = state => {
  return {
    EventDetail: state.search.eventFull
  };
};

class EventDescriptionContent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.warn(this.props);
    return (
      <div>
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-12">
              <div className="strip_list">
                <h3>
                  { 
                    this.props.EventDetail._source.description
                  }
                </h3>
                <p className='event-text'>
                  {
                    this.props.EventDetail._source.short_desc
                  }
                </p>
                <ul >
                  <li><a href="#0">Please log in to see full detail</a></li>
                  <li style={{visibility: "visibile"}}><i className='icon-download'></i><a href="#0"> Download</a></li>
                  <li style={{visibility: "visible"}}><i className='icon-share'></i><a href="#0"> Share</a></li>
                  <li style={{visibility: "visible"}}><i style={{color:"#3f4079"}}className="icon-star-empty"></i><a href="#">Save document</a></li>
                </ul>					
              </div>
					
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(withRouter(EventDescriptionContent));

