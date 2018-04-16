import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentUser: state.app.currentUser,
  };
};

class EventLarge extends Component {
  constructor(props){
    super(props);
    this.NavigateToEvent = this.NavigateToEvent.bind(this);
  }
  NavigateToEvent(){
    if(this.props.EventDetail)
    { 
      this.props.history.push({
        pathname: "/event/"+this.props.EventDetail._id,
        state: {
          EventDetail:this.props.EventDetail
        }
      });
    }
  }
  render() {
    const star = this.props.currentUser ? (<i className="icon-star-empty"></i>) : (<i></i>);
    const detail = this.props.EventDetail ? this.props.EventDetail._source : {
      title: "Sample title",
      created_at: "12/04/2018",
      description: "This is a typical description",
      short_desc: "This is a short description",
    };

    const description = this.props.currentUser ? detail.description : detail.short_desc;
    return (
      <div className="box_general_3 booking" onClick={this.NavigateToEvent}>					
        <div className="indent_title_in">
          {star}
          <h3>
            <a className="title">
              {
                detail.title
              }
            </a>
          </h3>
          <p className="event-created-at">{detail.created_at}</p>
        </div>
        <div className="description">
          <p>
            {description}
          </p>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(withRouter(EventLarge));
