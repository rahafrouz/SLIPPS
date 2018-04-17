import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { SET_EVENT_ID } from "../constants/actionTypes";

// const mapStateToProps = store => {
//   return {
//     currentUser: store.app.currentUser,
//   };
// };

const mapDispatchToProps = dispatch => ({
  setEventId: (payload) =>
    dispatch({ type: SET_EVENT_ID, payload }),
});

class EventSummary extends Component {
  constructor(props) {
    super(props);
    this.goToEvent = this.goToEvent.bind(this);
  }

  goToEvent(e) {
    e.preventDefault();

    let eventId = this.props.eventDetail.id;
    this.props.history.push(`/event/${eventId}`);
    this.props.setEventId({ eventId: eventId });

    // if(this.props.eventDetail)
    // { 
    //   this.props.history.push({
    //     pathname: "/event/"+this.props.eventDetail.id,
    //     state: {
    //       eventDetail:this.props.eventDetail
    //     }
    //   });
    // }
  }
  render() {
    {/*const star = this.props.currentUser ? (<i className="icon-star-empty"></i>) : (<i></i>);*/}
    const detail = this.props.eventDetail;

    // return (
    //   <div className="box_general_3 booking" onClick={this.navigateToEvent}>					
    //     <div className="indent_title_in">
    //       <h3>
    //         <a className="title">
    //           {
    //             detail.title
    //           }
    //         </a>
    //       </h3>
    //     </div>
    //     <div className="description">
    //       <p>
    //         {detail.short_desc}
    //       </p>
    //     </div>
    //     <p className="event-created-at">{detail.created_at}</p>
    //   </div>
    // );
    return ( 
      <div className="event-summary strip_list wow fadeIn" style={{visibility:"visible"}}>
        <figure>
          <a href="#0"><span className="pe-7s-glasses" style={{fontSize:"77px"}}></span></a>
        </figure>
        <div className="summary__details" onClick={this.goToEvent} >
          <h3>{detail.title}</h3>
          <p style={{fontWeight:"300",fontSize:"0.8em"}}>{detail.title}{detail.short_desc}</p>
          <span className="rating"><small>{detail.created_at}</small></span>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(withRouter(EventSummary));




