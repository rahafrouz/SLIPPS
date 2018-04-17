import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentUser: state.app.currentUser,
  };
};

class EventSummary extends Component {
  constructor(props){
    super(props);
    this.navigateToEvent = this.navigateToEvent.bind(this);
  }

  navigateToEvent() {
    if(this.props.eventDetail)
    { 
      this.props.history.push({
        pathname: "/event/"+this.props.eventDetail.id,
        state: {
          eventDetail:this.props.eventDetail
        }
      });
    }
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
      <div className="strip_list wow fadeIn" style={{visibility:"visible"}}>
        <figure>
          <a href="detail-page.html"><span className="pe-7s-glasses" style={{fontSize:"77px"}}></span></a>
        </figure>
        <h3 onClick={this.navigateToEvent}>{detail.title}</h3>
        <p onClick={this.navigateToEvent} style={{fontWeight:"300",fontSize:"0.8em"}}>{detail.title}{detail.short_desc}</p>
        <span className="rating"><small>{detail.created_at}</small></span>
      </div>);
  }
}

export default connect(mapStateToProps, null)(withRouter(EventSummary));




